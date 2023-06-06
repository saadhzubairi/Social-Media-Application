import React from 'react'
import TopBar from '../../components/topbar/Topbar'
import Sidebar from '../../components/sidebar/Sidebar'
import Feed from '../../components/feed/Feed'
import "./home.css"

function Home() {
    return (
        <>
            <div className="homeContainer">
                <Feed />
            </div>
        </>
    )
}
export default Home;