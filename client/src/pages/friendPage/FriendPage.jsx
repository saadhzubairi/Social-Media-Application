import { Cake, FemaleOutlined, MessageOutlined, NoAccountsOutlined, PinDropOutlined, Star, StarOutline } from "@mui/icons-material"
import { Link, useNavigate, useParams } from "react-router-dom"
import "./friendPage.css"
import Letter from "../../components/letter/Letter"
import { useContext, useEffect, useState } from "react"
import axios from "axios"
import { AuthContext } from "../../context/AuthContext"
import { CircularProgress, LinearProgress } from "@mui/material"
import Post from "../../components/post/Post"
function FriendPage(props) {
    const { id } = useParams()
    const [stat, setStat] = useState("n/a")
    const [mypal, setPal] = useState({ _id: "n/a" })
    const [posts, setPosts] = useState([])
    const [ourLetters, setLetters] = useState([])
    const { user } = useContext(AuthContext)
    const [delayer, setDelayer] = useState(false)
    const [modal, setModal] = useState(false);

    const toggleModal = () => { setModal(!modal); }
    const nav = useNavigate()
    const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

    useEffect(() => {
        const fetchPal = async () => {
            axios.get(`/butterfly?id=${id}`).then(res => setPal(res.data)).catch(err => console.log(err))
        }
        const fetchPosts = async () => {
            await axios.get(`/posts/of/${id}`).then(res =>
                setPosts(res.data)
            ).catch(err => console.log(err))
        }
        fetchPosts();

        let ConvoId = ''
        if (user._id > id) ConvoId = `${user._id}-${id}`
        else ConvoId = `${id}-${user._id}`

        const fetchLetters = async () => {
            axios.get(`/letters?convoId=${ConvoId}`).then(res => setLetters(res.data)).catch(err => console.log(err))
        }
        if (stat === 'n/a') {
            fetchPal();
            fetchLetters();
            setStat(id)
        }

        if (stat !== id) {
            setPal({ _id: "n/a" })
            setLetters([])
            fetchPal();
            fetchLetters();
            setStat(id)
        }
    }, [id])

    function formatDateWithAge(dateString) {
        const date = new Date(dateString);
        const day = date.getDate();
        const month = date.toLocaleString("default", { month: "short" });
        const age = new Date().getFullYear() - date.getFullYear();

        let dayWithSuffix = day;
        if (day >= 11 && day <= 13) {
            dayWithSuffix += "th";
        } else if (day % 10 === 1) {
            dayWithSuffix += "st";
        } else if (day % 10 === 2) {
            dayWithSuffix += "nd";
        } else if (day % 10 === 3) {
            dayWithSuffix += "rd";
        } else {
            dayWithSuffix += "th";
        }

        return `${dayWithSuffix} ${month} (${age} y.o)`;
    }

    const handleWriteLetter = async () => {
        setDelayer(true)
        await delay(500).then(
            () =>
                nav('letter/')
        )
    }

    return (
        <>
            {
                mypal._id === "n/a" ? <LinearProgress /> :
                    <div className="friendPage">
                        <div className="FPtop">
                            <div className="FPnameInfo">
                                <div className="FPname">{mypal.username}</div>
                                <div className="FPInfo">
                                    <Cake style={{ color: "#FCAB01" }} /> {formatDateWithAge(mypal.DOB)}
                                    <PinDropOutlined style={{ color: "#FCAB01" }} /> {mypal.city}
                                    <Star style={{ color: "#FCAB01" }} /> {mypal.MBTI}
                                </div>
                                <div className="interestsChips">
                                    {mypal.interests.map((i) => <div className={user.interests.includes(i) ? "interestC" : "interestU"} id={i}>{i}</div>)}
                                </div>
                            </div>
                            <img src={mypal.pfp} onClick={toggleModal}
                                alt="" className="mImage" />
                        </div>
                        <div className="FPBody">
                            {
                                ourLetters.length === 0 ?
                                    <div className="noLetters"><NoAccountsOutlined style={{ height: "4em" }} /> No letters yet. Start Talking!</div> :
                                    <div className="lettersGrid">
                                        {
                                            ourLetters
                                                .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
                                                .map((l) => <Letter key={l._id} letter={l} pal={mypal} />)
                                        }
                                        <div className="FPsizing"></div>
                                        <div className="spacer"></div>
                                    </div>
                            }
                        </div>
                        <button className="floating-action-button" onClick={handleWriteLetter} >
                            {delayer ? <CircularProgress color="inherit" /> : <div className="butin"><MessageOutlined /> Write letter</div>}
                        </button>
                    </div>}
            {modal && (
                <div className="modal">
                    <div className="overlay" onClick={toggleModal} >
                        <div className="modal-content">
                            <div className="mTop">
                                <div className="mUsername">{mypal.username}</div>
                                <img src={mypal.pfp}
                                    alt="" className="mImage" />
                            </div>
                            <div className="mBottom">
                                <div className="mBottomArea">
                                    <div className="mBottomAreaLeft"><div className="aboutSection">
                                        <div className="mHeading">About {mypal.username}</div>
                                        <div className="bio">
                                            {mypal.bio}
                                        </div>
                                        <ul className='mList'>
                                            <li><Cake style={{ color: "#FCAB01" }} /> {formatDateWithAge(mypal.DOB)} </li>
                                            <li><PinDropOutlined style={{ color: "#FCAB01" }} /> {mypal.city}</li>
                                            <li><StarOutline style={{ color: "#FCAB01" }} /> {mypal.MBTI}</li>
                                            <li><FemaleOutlined style={{ color: "#FCAB01" }} /> {mypal.gender}</li>
                                        </ul>
                                    </div>
                                        <div className="interestsSection">
                                            <div className="mHeading">Interests</div>
                                            <div className="interestsContainer">
                                                <div className="interestsChips">
                                                    {mypal.interests.map((i) => <div className={user.interests.includes(i) ? "interestC" : "interestU"} id={i}>{i}</div>)}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mBottomAreaRight">
                                        <div className="postsContainer">
                                            {
                                                posts.map((p) => <Post key={p._id} post={p} />)
                                            }
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div >
            )
            }
        </>
    )
}
export default FriendPage