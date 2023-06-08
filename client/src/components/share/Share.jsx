import { ShareOutlined, UploadOutlined } from "@mui/icons-material";
import "./share.css";
import { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import axios from "axios";
import { CircularProgress } from "@mui/material";

export default function Share() {
  const [isSharing, setIsSharing] = useState(false)
  const [desc, setDesc] = useState('')
  const [imgToSend, setImgToSend] = useState('N/A')
  const [img, setImg] = useState("https://cdn-images.threadless.com/threadless-media/artist_shops/shops/chee/products/1285369/original-1580594629-370aed99af17f73efe42799563f92361.png?v=3&d=eyJvbmx5X21ldGEiOiBmYWxzZSwgImZvcmNlIjogZmFsc2UsICJvcHMiOiBbWyJ0cmltIiwgW2ZhbHNlLCBmYWxzZV0sIHt9XSwgWyJyZXNpemUiLCBbXSwgeyJ3aWR0aCI6IDk5Ni4wLCAiYWxsb3dfdXAiOiBmYWxzZSwgImhlaWdodCI6IDk5Ni4wfV0sIFsiY2FudmFzX2NlbnRlcmVkIiwgWzEyMDAsIDEyMDBdLCB7ImJhY2tncm91bmQiOiAiMmM1YzljIn1dLCBbInJlc2l6ZSIsIFs4MDBdLCB7fV0sIFsiY2FudmFzX2NlbnRlcmVkIiwgWzgwMCwgODAwLCAiI2ZmZmZmZiJdLCB7fV0sIFsiZW5jb2RlIiwgWyJqcGciLCA4NV0sIHt9XV19")
  const [isUploading, setIsUploading] = useState(false)
  const { user } = useContext(AuthContext)

  const handleChange = (event) => {
    event.preventDefault()
    setDesc(
      event.target.value
    )
  }
  const handleImage = async (e) => {
    setIsUploading(true);
    if (!e.target.files[0]) {
      console.log("No image selected");
      setIsUploading(false);
      return;
    }
    const formdata = new FormData();
    formdata.append("filename", e.target.files[0]);
    try {
      const res = await axios.post("/upload/", formdata);
      setImg(res.data.downloadURL);
      console.log(`uploaded to ${res.data.downloadURL}`);
      setImg(res.data.downloadURL)
      setImgToSend(res.data.downloadURL)
    } catch (err) {
      console.log(err.response);
    }
    setIsUploading(false);
  }

  /* const handleUpload = async () => {
    setIsUploading(true)
    const formdata = new FormData();
    formdata.append('filename', img)
    await axios.post('/upload/', formdata).then((res) => {
      setImg(res.data.downloadURL)
      console.log(`uploaded to ${res.data.downloadURL}`)
      setIsUploading(false)
    }).catch((err) => console.log(err))
    setIsPicOn(false)
  } */

  const sharePost = async () => {
    setIsSharing(true)
    axios.post("/posts",
      {
        userId: user._id,
        desc: desc,
        img: imgToSend
      }
    ).then((res) => {
      setIsSharing(false)
      setDesc('')
      setImg('https://cdn-images.threadless.com/threadless-media/artist_shops/shops/chee/products/1285369/original-1580594629-370aed99af17f73efe42799563f92361.png?v=3&d=eyJvbmx5X21ldGEiOiBmYWxzZSwgImZvcmNlIjogZmFsc2UsICJvcHMiOiBbWyJ0cmltIiwgW2ZhbHNlLCBmYWxzZV0sIHt9XSwgWyJyZXNpemUiLCBbXSwgeyJ3aWR0aCI6IDk5Ni4wLCAiYWxsb3dfdXAiOiBmYWxzZSwgImhlaWdodCI6IDk5Ni4wfV0sIFsiY2FudmFzX2NlbnRlcmVkIiwgWzEyMDAsIDEyMDBdLCB7ImJhY2tncm91bmQiOiAiMmM1YzljIn1dLCBbInJlc2l6ZSIsIFs4MDBdLCB7fV0sIFsiY2FudmFzX2NlbnRlcmVkIiwgWzgwMCwgODAwLCAiI2ZmZmZmZiJdLCB7fV0sIFsiZW5jb2RlIiwgWyJqcGciLCA4NV0sIHt9XV19')
      console.log(res)
    }
    ).catch(err => console.log(err))
  }

  return (
    <div className="share">

      {isSharing ? <div className="isSharing"><CircularProgress /></div> :
        <>
          <div className="shareWrapperRight">
            <div className="shareAnUpdate">
              Share an update with your pals!
            </div>
            <div className="shareTop">
              <img className="shareProfileImg" src={user.pfp} alt="" />
              <textarea
                placeholder="What's on your mind?"
                className="shareInput"
                onChange={handleChange}
                value={desc}
              />
            </div>
          </div>
          <div className="shareWrapperLeft">


            {isUploading ? <div className="upProgress"><CircularProgress /></div> : <div className="picUploadSectionWeird">
              <img src={img} alt=""
                className="uploadimg" />
              <label htmlFor="contained-button-file" className="uploadbutton">
                <input
                  type="file"
                  className="uploadbutton"
                  hidden
                  style={{ display: 'none' }}
                  id="contained-button-file"
                  multiple
                  onChange={handleImage}
                />
                <UploadOutlined />
                Add Image
              </label>

            </div>}
            <div className="shareButton">
              <ShareOutlined />
              <div className="shareText" onClick={sharePost}>SHARE</div>
            </div>
          </div>
        </>
      }
    </div>
  );
}