import React, { useContext, useEffect } from 'react'
import Feed from '../../components/feed/Feed'
import "./home.css"
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../../context/AuthContext';

function Home() {
    const nav = useNavigate();
    const { user } = useContext(AuthContext)
    useEffect(() => {
        if (user === null) {
            nav("/App/asdasd/asdasd")
        }
    })

    return (
        <>
            <div className="homeContainer">
                <Feed />
            </div>
        </>
    )
}
export default Home;