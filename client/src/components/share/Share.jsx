import { UploadOutlined } from "@mui/icons-material";
import "./share.css";

export default function Share() {
  return (
    <div className="share">
      <div className="shareWrapperRight">
        <div className="shareAnUpdate">
          Share an update with your pals!
        </div>
        <div className="shareTop">
          <img className="shareProfileImg" src="/assets/person/2.jpeg" alt="" />
          <input
            placeholder="What's on your mind?"
            className="shareInput"
          />
        </div>
      </div>
      <div className="shareWrapperLeft">
        <img src="https://cdn-images.threadless.com/threadless-media/artist_shops/shops/chee/products/1285369/original-1580594629-370aed99af17f73efe42799563f92361.png?v=3&d=eyJvbmx5X21ldGEiOiBmYWxzZSwgImZvcmNlIjogZmFsc2UsICJvcHMiOiBbWyJ0cmltIiwgW2ZhbHNlLCBmYWxzZV0sIHt9XSwgWyJyZXNpemUiLCBbXSwgeyJ3aWR0aCI6IDk5Ni4wLCAiYWxsb3dfdXAiOiBmYWxzZSwgImhlaWdodCI6IDk5Ni4wfV0sIFsiY2FudmFzX2NlbnRlcmVkIiwgWzEyMDAsIDEyMDBdLCB7ImJhY2tncm91bmQiOiAiMmM1YzljIn1dLCBbInJlc2l6ZSIsIFs4MDBdLCB7fV0sIFsiY2FudmFzX2NlbnRlcmVkIiwgWzgwMCwgODAwLCAiI2ZmZmZmZiJdLCB7fV0sIFsiZW5jb2RlIiwgWyJqcGciLCA4NV0sIHt9XV19" alt=""
          className="uploadimg" />
        <div className="uploadbutton"><UploadOutlined /> Image Upload</div>
      </div>
    </div>
  );
}