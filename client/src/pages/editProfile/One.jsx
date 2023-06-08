import { useContext, useState } from "react";
import "./editProfile.css"
import { AuthContext } from "../../context/AuthContext";
function One(props) {
    const { user } = useContext(AuthContext)
    const [interests, setInterests] = useState(user.interests)

    const av_interests = ["Sports", "Music", "Drama", "Entertainment", "Science", "Philosophy", "Technology", "Politics", "Religion", "Cats", "Art", "Reading", "Movies", "Cooking", "Travel", "Photography", "Gaming", "Fitness", "Fashion", "Writing", "Food", "Nature", "Animals", "History", "Languages", "Volunteering", "Dancing", "Cars", "Gardening", "Crafts", "Yoga", "Hiking", "Singing", "Swimming", "Theater", "Coding", "Shopping", "Design", "Archaeology", "Astrology", "Chess", "Collecting", "DIY", "Painting", "Sculpting", "Blogging", "Running", "Soccer", "Basketball", "Tennis", "Table Tennis", "Badminton", "Volleyball", "Cricket", "Golf", "Fishing", "Cycling", "Skateboarding", "Surfing", "Snowboarding", "Skiing", "Mountaineering", "Birdwatching", "Meditation", "Film-making", "Acting", "Concerts", "Musical Instruments", "Horseback Riding", "Scuba Diving", "Snorkeling", "Kayaking", "Paragliding", "Skydiving", "Wine Tasting", "Beer Brewing", "Board Games", "Card Games", "Puzzles", "Magic Tricks", "Stand-up Comedy", "Chess", "Online Gaming", "Photography", "Reading", "Writing", "Cooking", "Sewing", "Drawing", "Woodworking", "Calligraphy", "Pottery", "Knitting", "Crocheting", "Embroidery", "Quilting", "Jewelry Making"];

    const onSubmit = (event) => {
        event.preventDefault();
        setInterests(interests)
        
    }

    const addRem = (i) => {
        if (interests.includes(i)) {
            setInterests(interests.filter((interest) => interest !== i));
        } else {
            setInterests([...interests, i]);
        }
    }
    return (
        <div>
            <form onSubmit={(e) => onSubmit(e)}>
                <div className="subWindow">
                    <div className="subWindowBox">
                        <div className="interestsHeading">Select your interests</div>
                        <div className="choicesContainer">
                            <div className="choicesInterests">
                                {av_interests.map((i) =>
                                    <div className={interests.includes(i) ? "interestChip-yellow" : "interestChip"} onClick={() => addRem(i)} key={i}>{i}</div>
                                )}
                            </div>
                        </div>
                        <button className="registerButton" onClick={onSubmit}>Save</button>
                    </div>
                </div>
            </form>
        </div>
    )
}
export default One