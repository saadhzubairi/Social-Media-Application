import { ArrowBack, Cake, PinDropOutlined, Send } from "@mui/icons-material"
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import "./writeLetter.css"
import { AuthContext } from '../../context/AuthContext';
import { useContext, useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom"
import { CircularProgress } from "@mui/material";
import axios from "axios";
function WriteLetter({ toHome }) {
    const [friend, setFriend] = useState({ _id: "n/a" });
    const { id } = useParams()
    const [letterContent, setContent] = useState('')
    const { user } = useContext(AuthContext)
    const [sending, setSending] = useState(false)
    const navigate = useNavigate()
    const [letterCount, setLetterCount] = useState(0)

    function countLetters(htmlString) {
        const strippedString = htmlString.replace(/<[^>]+>/g, '');
        const trimmedString = strippedString.replace(/\s/g, '');
        const letterCount = trimmedString.length;
        return letterCount;
    }

    const handleChange = (e) => {
        setContent(e)
        setLetterCount(countLetters(e));
    }

    useEffect(() => {
        const fetchFriend = async () => {
            await axios.get(`/butterfly?id=${id}`).then(res => setFriend(res.data)).catch(err => console.log(err))
        }
        fetchFriend()
    }, [])

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

    const sendLetter = () => {
        setSending(true)
        let ConvoId = ''
        if (user._id > id) ConvoId = `${user._id}-${id}`
        else ConvoId = `${id}-${user._id}`
        const letter = {
            senderId: user._id,
            recvId: id,
            convoId: ConvoId,
            content: letterContent,
            status: 0,
        }

        axios.post(`/letters`, letter).then(
            navigate(`/App/friend/${id}`)
        ).catch((err) => console.log(err))

    }

    return (
        <div className="writeLetterC">
            {
                friend._id === "n/a" ? <CircularProgress /> :
                    <div className="writeLetterWrapperC">
                        <div className="FPtop">
                            <div className="FPnameInfo">
                                <div className="nameAndBack">
                                    <Link to={toHome ? "/app/" : `/app/friend/${id}`} style={{ textDecoration: "none" }}>
                                        <div className="back"><ArrowBack /></div>
                                    </Link>
                                    <div className="FPname">{friend.username}</div>
                                </div>
                                <div className="FPInfo">
                                    <Cake style={{ color: "#FCAB01" }} />{formatDateWithAge(friend.DOB)}
                                    <PinDropOutlined style={{ color: "#FCAB01" }} />{friend.city}
                                </div>
                            </div>
                            <img src={friend.pfp}
                                alt="" className="mImageF" />
                        </div>
                        <div className="FPBottomVP">
                            <div className={letterCount < 600 ? "letterCount-low" : "letterCount-ok"}>{letterCount}/600 {letterCount < 600 ? "Need more characters" : "Character limit complete"}</div>
                            <div className="FPBottom">
                                <ReactQuill theme="snow" value={letterContent} onChange={handleChange} />
                            </div>
                        </div>
                    </div>}
            <button className="floating-action-button" onClick={sendLetter} disabled={letterCount > 599 ? false : true}>
                <Send /> {sending ? <CircularProgress /> : "Send"}
            </button>
        </div>
    )
}
export default WriteLetter