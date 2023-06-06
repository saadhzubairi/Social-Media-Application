import "./post.css";

function Post({ post }) {
    return (
        <div className="post">
            <div className="postWrapper">
                <div className="friendpostleftSide">
                    <div className="postTop">
                        <img src="https://slowly.app/wp-content/uploads/2020/04/Ahmetfurkan-1.jpg"
                            alt="" className="postAvatar" />
                        <div className="postNameAndTime">
                            <div className="PostName">Saad Zubairi</div>
                            <div className="PostTime">Posted five minutes ago</div>
                        </div>
                    </div>
                    <div className="postBody">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum excepturi, iure sunt laborum adipisci delectus hic ipsa a fugit omnis, dolorum expedita natus atque recusandae aliquid dolore illum aut tenetur.
                    </div>
                </div>
                <div className="postRightSide">
                    <img src="https://cdn-images.threadless.com/threadless-media/artist_shops/shops/chee/products/1285369/original-1580594629-370aed99af17f73efe42799563f92361.png?v=3&d=eyJvbmx5X21ldGEiOiBmYWxzZSwgImZvcmNlIjogZmFsc2UsICJvcHMiOiBbWyJ0cmltIiwgW2ZhbHNlLCBmYWxzZV0sIHt9XSwgWyJyZXNpemUiLCBbXSwgeyJ3aWR0aCI6IDk5Ni4wLCAiYWxsb3dfdXAiOiBmYWxzZSwgImhlaWdodCI6IDk5Ni4wfV0sIFsiY2FudmFzX2NlbnRlcmVkIiwgWzEyMDAsIDEyMDBdLCB7ImJhY2tncm91bmQiOiAiMmM1YzljIn1dLCBbInJlc2l6ZSIsIFs4MDBdLCB7fV0sIFsiY2FudmFzX2NlbnRlcmVkIiwgWzgwMCwgODAwLCAiI2ZmZmZmZiJdLCB7fV0sIFsiZW5jb2RlIiwgWyJqcGciLCA4NV0sIHt9XV19"
                        alt="" className="postImg" />
                </div>
            </div>
        </div>
    )
}
export default Post