import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { selectUser } from '../features/userSlice';
import db, { auth } from '../firebase';
import Nav from '../Nav';
import "./ProfileScreen.css"
import EditIcon from '@material-ui/icons/Edit';

const ProfileScreen = () => {

    const user = useSelector(selectUser);
    const [profileUrl, setProfileUrl] = useState("");

    const toggleProfileForm = (e) => {
        e.preventDefault();
        document.querySelector(".profileImageForm").classList.toggle("hiddenProfileUrlForm");
    }

    return (
        <div className="profileScreen">
            <Nav />
            <div className="profileScreenBody">
                <h1>Edit profile</h1>
                <form onSubmit={() => this.enterUserProfilePic} className="profileImageForm hiddenProfileUrlForm">
                    <input onChange={(e) => setProfileUrl(e.target.value)} value={profileUrl} className="profileImageUrlInput" type="text" placeholder="Profile Image Url"/>
                    <button type="submit" onClick={toggleProfileForm}>Enter</button>
                </form>
                <div className="profileScreenInfo">
                    <div className="profileImageContainer">
                        <img src={`${!profileUrl ? "https://pbs.twimg.com/profile_images/1240119990411550720/hBEe3tdn_400x400.png" : profileUrl}`} alt="error"/>
                        <div onClick={toggleProfileForm} className="imageOverlay">
                            <EditIcon />
                        </div>
                        
                    </div>
                    <div className="profileScreenDetails">
                        <h2>{user.email}</h2>
                        <div className="profileScreenPlans">
                            <h3>Plans (Current Plan: premium)</h3>
                            <h4>Renewal date: 04/03/2021</h4>
                            <div className="planContainer">
                                <div className="planPackage">
                                    <div className="standartInfo">
                                        <p>Netflix Standart</p>
                                        <small>1080p</small>                                        
                                    </div>
                                    <button>Subscribe</button>
                                </div>
                                <div className="planPackage">
                                    <div className="standartInfo">
                                        <p>Netflix Basic</p>
                                        <small>480p</small>                                        
                                    </div>
                                    <button>Subscribe</button>
                                </div>
                                <div className="planPackage">
                                    <div className="standartInfo">
                                        <p>Netflix Premium</p>
                                        <small>4K+HDR</small>                                        
                                    </div>
                                    <button className="currentPackage">Current Package</button>
                                </div>
                            </div>
                            <button onClick={() => auth.signOut()} className="signoutButtonProfileScreen">Sign Out</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfileScreen
