import "./letter.css"
import { Link } from "react-router-dom"

function Letter(props) {
    return (
        <div className="letter">
            <Link to={"letter/letterid"} style={{ textDecoration: "none", color:"#000" }} >

                <div className="letterWrapper">
                    <div className="letterTop">
                        <div className="status"></div>
                        <img src="https://cdn.getslowly.com/assets/images/stamp/around-the-world.png"
                            alt="" className="stamp" />
                    </div>
                    <div className="letterBody">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi ipsum adipisci suscipit nihil iste odio consectetur nulla temporibus, porro aspernatur.
                    </div>
                    <div className="letterBottom">
                        <div className="nameAndTime">
                            <div className="Lname">Snickers</div>
                            <div className="Ltime">2 days ago</div>
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    )
}
export default Letter