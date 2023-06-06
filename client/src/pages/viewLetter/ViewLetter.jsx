import { ArrowBack, Cake, PinDropOutlined } from "@mui/icons-material"
import "./viewLetter.css"
import { Link } from "react-router-dom"

function ViewLetter(props) {
    return (
        <div className="viewLetter">
            <div className="viewLetterWrapper">
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

                <div className="VLBody">
                    <div className="LetterBody">
                        <div className="letterBodyHeader">
                            <div className="fromAndTime">
                                <div className="From">From Snickers</div>
                                <div className="FromT">2 days ago</div>
                            </div>
                            <img src="https://cdn.getslowly.com/assets/images/stamp/around-the-world.png"
                                alt="" className="Lstamp" />
                        </div>
                        <div className="letterContent">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque cupiditate quis, deleniti iusto corrupti aut iure harum eaque sit nesciunt quos, accusamus alias temporibus eos consectetur dolor voluptatum? Officiis deserunt beatae atque quos repudiandae officia cumque velit ipsa nihil ipsum et, quod, nobis facere quasi unde doloribus aliquam exercitationem blanditiis accusamus, suscipit nesciunt modi molestias? Ipsum vel voluptatum soluta rem delectus vitae veritatis, explicabo suscipit tenetur? Nihil dignissimos, ducimus ut adipisci ipsum aperiam debitis cumque laudantium dolores temporibus voluptatem earum maiores sequi ullam deleniti neque aliquam ab ipsa provident corporis, facere molestias! Quo, blanditiis ab asperiores voluptates culpa, placeat nesciunt quasi modi nulla, eum nobis est aliquam sint rem? Laborum repudiandae obcaecati eveniet nihil fugiat molestias pariatur iusto praesentium, est asperiores quisquam consectetur. Rerum accusantium ea molestiae laudantium, corporis incidunt facilis voluptatem, a aliquam sit minus ut, dignissimos maxime tenetur qui tempora in sint dolores esse molestias assumenda. Ab facere iusto voluptatibus, accusamus autem iure enim nam delectus. Soluta eos labore nulla aliquam, sint ea laborum doloribus minima placeat dignissimos incidunt architecto repudiandae autem commodi error! Veniam repudiandae ipsam corrupti aut expedita nostrum quod eveniet alias inventore aperiam. Aliquid quam est voluptas minima numquam aliquam? Numquam maxime accusamus deleniti? Aspernatur odit sed, atque odio sequi doloremque in debitis id necessitatibus quae molestiae vel libero molestias quos, non perferendis ea laudantium voluptatem, voluptates hic magnam? Voluptas incidunt, illo molestias necessitatibus officiis eum, expedita eveniet amet optio distinctio maiores corrupti non alias pariatur. Perspiciatis accusamus ullam placeat pariatur fugiat? Magnam veritatis dignissimos quaerat optio praesentium dolor nihil omnis earum, laborum suscipit vitae, doloribus cumque labore fugit sint incidunt et repudiandae animi mollitia ipsa temporibus hic? Laudantium perferendis quae nemo molestias. Minus, eum nesciunt. Consectetur aspernatur natus ipsam atque praesentium ut impedit perspiciatis aperiam neque officia cum labore voluptas libero, ipsa, nulla eaque odit temporibus eveniet doloribus velit sed! Adipisci quas dolor veniam repudiandae doloribus ullam reiciendis, quisquam modi impedit necessitatibus laboriosam nostrum sapiente illum molestiae aspernatur, cumque possimus unde placeat laborum officiis, quaerat repellendus! Dolore voluptate veritatis eligendi optio repellat quia maiores, minima non quae inventore, magnam nulla dolorem totam, aliquam quasi cum sit aliquid modi sint. Natus saepe id quam tempora itaque hic ipsam quis, eaque, nulla quaerat obcaecati beatae dolorum voluptate facilis quo animi tempore ipsum neque in, autem delectus nisi. Eius sequi facere molestias error dolorem aliquid rem enim iusto modi a libero voluptatum dolore, fugit neque placeat nihil recusandae cumque impedit. Similique, nemo perferendis accusamus sit aliquid saepe ex vitae odio eius ea dolorem eaque repellendus minima et sed deserunt numquam a voluptatum sapiente? Facilis aspernatur maiores, alias quam fugit accusamus a, ut unde quos sit iste explicabo dolorem dolorum accusantium nulla, magnam blanditiis natus optio repellat laborum corporis? Praesentium quae nihil ratione, architecto quam incidunt numquam nobis fugit omnis facilis, accusamus odio! Excepturi voluptates deserunt molestiae delectus voluptatum, error temporibus molestias ipsam est omnis quas quidem enim magnam facilis quis voluptatem optio magni quibusdam impedit! Unde commodi laudantium laboriosam illo aperiam eum adipisci, neque blanditiis reiciendis tempora!
                        </div>


                    </div>
                </div>
            </div>
        </div>
    )
}
export default ViewLetter