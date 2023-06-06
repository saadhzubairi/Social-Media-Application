import { Cake, MessageOutlined, PinDropOutlined } from "@mui/icons-material"
import { Link } from "react-router-dom"
import "./friendPage.css"
import Letter from "../../components/letter/Letter"
function FriendPage(props) {
    return (
        <div className="friendPage">
            <div className="FPtop">
                <div className="FPnameInfo">
                    <div className="FPname">Snickers</div>
                    <div className="FPInfo">
                        <Cake style={{ color: "#FCAB01" }} /> 17th May (24)
                        <PinDropOutlined style={{ color: "#FCAB01" }} /> Karachi, PK
                    </div>
                    <div className="interestsChips">
                        <div className="interestC">Cooking</div>
                        <div className="interestC">Cooking</div>
                        <div className="interestC">Cooking</div>
                    </div>
                </div>
                <img src="https://cdn.getslowly.com/assets/images/avatar/other/user/52634/1.png"
                    alt="" className="mImage" />
            </div>
            <div className="FPBody">
                <div className="lettersGrid">
                    <Letter />
                    <Letter />
                    <Letter />
                    <Letter />
                    <Letter />
                    <Letter />
                    <Letter />
                    <Letter />
                    <div className="FPsizing"></div>
                </div>
            </div>
            <Link to={"letter/"} style={{ textDecoration: "none" }}>
                <button className="floating-action-button" onClick={console.log('asd')}>
                    <MessageOutlined /> Write letter
                </button>
            </Link>

        </div>
    )
}
export default FriendPage