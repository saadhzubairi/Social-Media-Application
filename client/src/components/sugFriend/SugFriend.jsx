import { Cake, FemaleOutlined, ListAltOutlined, MessageOutlined, PinDropOutlined, StarOutline } from '@mui/icons-material'
import './sugFriend.css'
import { Link } from "react-router-dom"
import { useState } from 'react';
function SugFriend(props) {
    const [modal, setModal] = useState(false);
    const toggleModal = () => { setModal(!modal); console.log('asdklasjdkljasdlj'); }
    return (
        <>
            <div className='sugFriend' onClick={toggleModal}>
                <div className="sugfriendWrapper">
                    <div className="sugfriendpostleftSide">
                        <div className="postTop">
                            <img src="https://slowly.app/wp-content/uploads/2020/04/Ahmetfurkan-1.jpg"
                                alt="" className="postAvatar" />
                            <div className="postNameAndTime">
                                <div className="PostName">Saad Zubairi</div>
                                <div className="PostTime">Joined 11 days ago</div>
                            </div>
                        </div>
                        <div className="postBody">
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum excepturi, iure sunt laborum adipisci delectus hic ipsa a fugit omnis, dolorum expedita natus atque recusandae aliquid dolore illum aut tenetur.
                        </div>
                    </div>
                    <div className="sugpostRightSide">
                        <ul>
                            <li><Cake style={{ color: "#FCAB01" }} /> 17th May (24)</li>
                            <li><ListAltOutlined style={{ color: "#FCAB01" }} /> 3 Common Interests</li>
                            <li><PinDropOutlined style={{ color: "#FCAB01" }} /> Karachi, PK</li>
                            <li><StarOutline style={{ color: "#FCAB01" }} /> INTJ</li>
                            <li><FemaleOutlined style={{ color: "#FCAB01" }} /> Female</li>

                        </ul>
                    </div>
                </div>
            </div>
            {modal && (
                <div className="modal">
                    <div className="overlay" onClick={toggleModal}>
                        <div className="modal-content">
                            <div className="mTop">
                                <div className="mUsername">Snickers</div>
                                <img src="https://cdn.getslowly.com/assets/images/avatar/other/user/52634/1.png"
                                    alt="" className="mImage" />
                            </div>
                            <div className="mBottom">
                                <div className="mBottomArea">
                                    <div className="aboutSection">
                                        <div className="mHeading">About Snickers</div>
                                        <div className="bio">
                                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero laborum unde, ullam rem nemo libero molestiae itaque nulla voluptas hic odio quia maxime vel commodi illum illo, quas eligendi architecto consequatur? Nesciunt magnam magni incidunt ex odio. Eos, minus nam?
                                        </div>
                                        <ul className='mList'>
                                            <li><Cake style={{ color: "#FCAB01" }} /> 17th May (24)</li>
                                            <li><ListAltOutlined style={{ color: "#FCAB01" }} /> 3 Common Interests</li>
                                            <li><PinDropOutlined style={{ color: "#FCAB01" }} /> Karachi, PK</li>
                                            <li><StarOutline style={{ color: "#FCAB01" }} /> INTJ</li>
                                            <li><FemaleOutlined style={{ color: "#FCAB01" }} /> Female</li>
                                        </ul>
                                    </div>
                                    <div className="interestsSection">
                                        <div className="mHeading">Interests</div>
                                        <div className="interestsContainer">
                                            <div className="interestsChips">
                                                <div className="interestC">Cooking</div>
                                                <div className="interestC">Cooking</div>
                                                <div className="interestC">Cooking</div>
                                                <div className="interestC">Cooking</div>
                                                <div className="interestC">Cooking</div>
                                                <div className="interestC">Cooking</div>
                                                <div className="interestC">Cooking</div>
                                                <div className="interestC">Cooking</div>
                                                <div className="interestU">Cleaning</div>
                                                <div className="interestU">Cleaning</div>
                                                <div className="interestU">Cleaning</div>
                                                <div className="interestU">Cleaning</div>
                                                <div className="interestU">Cleaning</div>
                                                <div className="interestU">Cleaning</div>
                                                <div className="interestU">Cleaning</div>
                                                <div className="interestU">Cleaning</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="mBottomBottom">
                                <Link to={"friend/idhere/letter/"} style={{ textDecoration: "none" }}>
                                    <button className="writeLetter"><MessageOutlined /> Write letter</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}
export default SugFriend

