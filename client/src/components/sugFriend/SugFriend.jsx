import { Cake, FemaleOutlined, ListAltOutlined, MessageOutlined, PinDropOutlined, StarOutline } from '@mui/icons-material'
import './sugFriend.css'
import { useNavigate } from "react-router-dom"
import { useContext, useState } from 'react';
import { format } from "timeago.js"
import { AuthContext } from '../../context/AuthContext';
import axios from 'axios';

function SugFriend({ wSugg }) {
    const { commonInts, suggestion } = wSugg
    const [modal, setModal] = useState(false);
    const toggleModal = () => { setModal(!modal); }
    const { user, dispatch } = useContext(AuthContext)
    const navigate = useNavigate()
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
        if (user.pals.includes(suggestion._id)) {

        } else {
            await axios.put(`/butterfly/${user._id}/pals`, {
                pal: suggestion._id,
            });
            dispatch({ type: "PAL_ADD", payload: suggestion._id });
        }
        navigate(`friend/${suggestion._id}/letter/`)
        console.log(user);
    }

    return (
        <>
            <div className='sugFriend' onClick={toggleModal}>
                <div className="sugfriendWrapper">
                    <div className="sugfriendpostleftSide">
                        <div className="postTop">
                            <img src={suggestion.pfp}
                                alt="" className="postAvatar" />
                            <div className="postNameAndTime">
                                <div className="PostName">{suggestion.username}</div>
                                <div className="PostTime">Joined {format(suggestion.createdAt)}</div>
                            </div>
                        </div>
                        <div className="postBody">
                            {suggestion.bio}
                        </div>
                    </div>
                    <div className="sugpostRightSide">
                        <ul>
                            <li><ListAltOutlined style={{ color: "#FCAB01" }} /> <b>{commonInts}</b> Common Interests</li>
                            <li><Cake style={{ color: "#FCAB01" }} /> {formatDateWithAge(suggestion.DOB)} </li>
                            <li><PinDropOutlined style={{ color: "#FCAB01" }} /> {suggestion.city}</li>
                            <li><StarOutline style={{ color: "#FCAB01" }} /> {suggestion.MBTI}</li>
                            <li><FemaleOutlined style={{ color: "#FCAB01" }} /> {suggestion.gender}</li>
                        </ul>
                    </div>
                </div>
            </div>
            {modal && (
                <div className="modal">
                    <div className="overlay" onClick={toggleModal}>
                        <div className="modal-content">
                            <div className="mTop">
                                <div className="mUsername">{suggestion.username}</div>
                                <img src={suggestion.pfp}
                                    alt="" className="mImage" />
                            </div>
                            <div className="mBottom">
                                <div className="mBottomArea">
                                    <div className="aboutSection">
                                        <div className="mHeading">About {suggestion.username}</div>
                                        <div className="bio">
                                            {suggestion.bio}
                                        </div>
                                        <ul className='mList'>
                                            <li><ListAltOutlined style={{ color: "#FCAB01" }} /> <b>{commonInts}</b> Common Interests</li>
                                            <li><Cake style={{ color: "#FCAB01" }} /> {formatDateWithAge(suggestion.DOB)} </li>
                                            <li><PinDropOutlined style={{ color: "#FCAB01" }} /> {suggestion.city}</li>
                                            <li><StarOutline style={{ color: "#FCAB01" }} /> {suggestion.MBTI}</li>
                                            <li><FemaleOutlined style={{ color: "#FCAB01" }} /> {suggestion.gender}</li>
                                        </ul>
                                    </div>
                                    <div className="interestsSection">
                                        <div className="mHeading">Interests</div>
                                        <div className="interestsContainer">
                                            <div className="interestsChips">
                                                {suggestion.interests.map((i) => <div className={user.interests.includes(i) ? "interestC" : "interestU"} id={i}>{i}</div>)}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="mBottomBottom">
                                {/* <Link to={`friend/${suggestion._id}/letter/`} style={{ textDecoration: "none" }}> */}
                                <button className="writeLetter" onClick={handleWriteLetter}><MessageOutlined /> Write letter</button>
                                {/* </Link> */}
                            </div>
                        </div>
                    </div>
                </div >
            )
            }
        </>
    )
}
export default SugFriend

