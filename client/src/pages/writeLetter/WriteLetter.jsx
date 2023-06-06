import { ArrowBack, Cake, PinDropOutlined, Send } from "@mui/icons-material"
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import "./writeLetter.css"
import { useState } from "react";
import { Link } from "react-router-dom"
function WriteLetter(props) {
    const [value, setValue] = useState('');
    return (
        <div className="writeLetterC">
            <div className="writeLetterWrapperC">
                <div className="FPtop">
                    <div className="FPnameInfo">
                        <div className="nameAndBack">
                            <Link to={"/app/friend/idhere/"} style={{ textDecoration: "none" }}>
                                <div className="back"><ArrowBack /></div>
                            </Link>
                            <div className="FPname">  Snickers</div>
                        </div>
                        <div className="FPInfo">
                            <Cake style={{ color: "#FCAB01" }} /> 17th May (24)
                            <PinDropOutlined style={{ color: "#FCAB01" }} /> Karachi, PK
                        </div>
                    </div>
                    <img src="https://cdn.getslowly.com/assets/images/avatar/other/user/52634/1.png"
                        alt="" className="mImageF" />
                </div>
                <div className="FPBottomVP">
                    <div className="FPBottom">
                        <ReactQuill theme="snow" value={value} onChange={setValue} />
                    </div>
                </div>
            </div>
            <button className="floating-action-button" onClick={console.log('asd')}>
                <Send /> Send
            </button>
        </div>
    )
}
export default WriteLetter