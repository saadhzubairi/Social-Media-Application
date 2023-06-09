import { useEffect, useState } from 'react'
import './friendBox.css'
import { Link } from "react-router-dom"
import axios from 'axios'
import { CircularProgress } from '@mui/material'
import { format } from 'timeago.js'
function FriendBox({ pal }) {

    const [mypal, setPal] = useState({ _id: "n/a" })

    useEffect(() => {
        const fetchPal = async () => {
            axios.get(`/butterfly?id=${pal}`).then(res => setPal(res.data)).catch(err => console.log(err))
        }
        fetchPal();
    }, [])

    return (
        <Link to={`friend/${pal}`} style={{ textDecoration: "none", color: "#444" }}>
            {
                mypal._id == "n/a" ? <div className="myPalLoading"><CircularProgress /></div>
                    :
                    <div className="friendBoxContainer">
                        <div className="avatarAndText">
                            <img src={mypal.pfp} alt="" className="avatar" />
                            <div className="text">
                                <div className="textName">{mypal.username}</div>
                                <div className="textSubText">{mypal.bio.slice(0, 20)}</div>
                            </div>
                        </div>
                        <div className="lastTextAndStatus">
                            <div className="lastText">{mypal.city}</div>
                            <div className="status"></div>
                        </div>
                    </div>
            }
        </Link>
    )
}
export default FriendBox