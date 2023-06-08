import { Cake, MessageOutlined, PinDropOutlined, Star } from "@mui/icons-material"
import { Link, useParams } from "react-router-dom"
import "./friendPage.css"
import Letter from "../../components/letter/Letter"
import { useContext, useEffect, useState } from "react"
import axios from "axios"
import { AuthContext } from "../../context/AuthContext"
import { LinearProgress } from "@mui/material"
function FriendPage(props) {
    const { id } = useParams()
    const [stat, setStat] = useState("n/a")
    const [mypal, setPal] = useState({ _id: "n/a" })
    const [ourLetters, setLetters] = useState([])
    const { user } = useContext(AuthContext)

    useEffect(() => {
        const fetchPal = async () => {
            axios.get(`/butterfly?id=${id}`).then(res => setPal(res.data)).catch(err => console.log(err))
        }

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
    })

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
                            <img src={mypal.pfp}
                                alt="" className="mImage" />
                        </div>
                        <div className="FPBody">
                            <div className="lettersGrid">
                                {ourLetters.map((l) => <Letter key={l._id} letter={l} pal={mypal} />)}
                                <div className="FPsizing"></div>
                            </div>
                        </div>
                        <Link to={"letter/"} style={{ textDecoration: "none" }}>
                            <button className="floating-action-button">
                                <MessageOutlined /> Write letter
                            </button>
                        </Link>

                    </div>}
        </>
    )
}
export default FriendPage