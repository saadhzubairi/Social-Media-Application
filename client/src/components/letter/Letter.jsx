import "./letter.css"
import { Link } from "react-router-dom"
import { format } from "timeago.js"
import { AuthContext } from "../../context/AuthContext"
import { useContext } from "react"

function Letter({ letter, pal }) {

    const { user } = useContext(AuthContext)

    return (
        <div className="letter">
            <Link to={`letter/${letter._id}`} style={{ textDecoration: "none", color: "#000" }} >

                <div className="letterWrapper">
                    <div className="letterTop">
                        <div className="status"></div>
                        <img src="https://cdn.getslowly.com/assets/images/stamp/around-the-world.png"
                            alt="" className="stamp" />
                    </div>
                    <div className="letterbodyViewPort">
                        <div className="letterBody" dangerouslySetInnerHTML={{ __html: letter.content }} />
                    </div>

                    <div className="letterBottom">
                        <div className="nameAndTime">
                            <div className="Lname">{letter.senderId === user._id ? user.username : pal.username}</div>
                            <div className="Ltime">{format(letter.createdAt)}</div>
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    )
}
export default Letter