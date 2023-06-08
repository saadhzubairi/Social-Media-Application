import { ArrowBack, Cake, PinDropOutlined } from "@mui/icons-material"
import "./viewLetter.css"
import { Link, useParams } from "react-router-dom"
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { AuthContext } from "../../context/AuthContext";
import { LinearProgress } from "@mui/material";
import { format } from "timeago.js";

function ViewLetter(props) {
    const { id } = useParams()
    const { lid } = useParams()
    const [friend, setFriend] = useState({ _id: "n/a" });
    const [letter, setLetter] = useState({ _id: "n/a" });
    const [loading, setLoading] = useState(true)
    const [floading, setfLoading] = useState(true)
    const { user } = useContext(AuthContext)
    useEffect(() => {

        const fetchFriend = async () => {
            await axios.get(`/butterfly?id=${id}`).then(res => {
                setFriend(res.data)
                setfLoading(false);
            }).catch(err => console.log(err))
        }
        const fetchLetter = async () => {
            await axios.get(`/letters?id=${lid}`).then(res => {
                setLetter(res.data);
                setLoading(false);
            }).catch(err => console.log(err))
        }
        fetchFriend()
        fetchLetter()
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
        <div className="viewLetter">
            <div className="viewLetterWrapper">
                {floading ? <LinearProgress /> :
                    <div className="FPtop">
                        <div className="FPnameInfo">
                            <div className="nameAndBack">
                                <Link to={`/app/friend/${id}/`} style={{ textDecoration: "none" }}>
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
                }
                <div className="VLBody">
                    <div className="LetterBody">
                        {loading ? <LinearProgress /> :
                            <>
                                <div className="letterBodyHeader">
                                    <div className="fromAndTime">
                                        <div className="From">From {letter.senderId === user._id ? "you" : friend.username} </div>
                                        <div className="FromT">{format(letter.createdAt)}</div>
                                    </div>
                                    <img src="https://cdn.getslowly.com/assets/images/stamp/around-the-world.png"
                                        alt="" className="Lstamp" />
                                </div>
                                <div className="letterContent" dangerouslySetInnerHTML={{ __html: letter.content }} />
                            </>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ViewLetter