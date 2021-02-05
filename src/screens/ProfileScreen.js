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
    const [plan, setPlan] = useState("");
    const [planType, setPlanType] = useState("");

    const toggleProfileForm = (e) => {
        e.preventDefault();
        document.querySelector(".profileImageForm").classList.toggle("hiddenProfileUrlForm");
        setProfileUrl(profileUrl);
    }

    const standartPlan = () => {
        setPlan("standart");        
    }

    const basicPlan = () => {
        setPlan("basic");        
    }

    const premiumPlan = () => {
        setPlan("premium");
    }

    useEffect(() => {
        if(plan === ""){
            setPlan("none")
        }
    }, [])

    useEffect(() => {
        if(plan === "premium"){
            document.querySelector(".premiumPlanButton").classList.add("currentPackage");
            document.querySelector(".standartPlanButton").classList.remove("currentPackage");
            document.querySelector(".basicPlanButton").classList.remove("currentPackage");
            document.querySelector(".premiumPlanButton").innerHTML = "Current plan";
        }else{
            document.querySelector(".premiumPlanButton").innerHTML = "Subscribe";
        }
        if(plan === "basic"){
            document.querySelector(".basicPlanButton").classList.add("currentPackage");
            document.querySelector(".standartPlanButton").classList.remove("currentPackage");
            document.querySelector(".premiumPlanButton").classList.remove("currentPackage");
            document.querySelector(".basicPlanButton").innerHTML = "Current plan";
        }else{
            document.querySelector(".basicPlanButton").innerHTML = "Subscribe";
        }
        if(plan === "standart"){
            document.querySelector(".standartPlanButton").classList.add("currentPackage");
            document.querySelector(".basicPlanButton").classList.remove("currentPackage");
            document.querySelector(".premiumPlanButton").classList.remove("currentPackage");
            document.querySelector(".standartPlanButton").innerHTML = "Current plan";
        }else{
            document.querySelector(".standartPlanButton").innerHTML = "Subscribe";
        }
    }, [plan])

    return (
        <div className="profileScreen">
            <Nav profileUrl={profileUrl} />
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
                            <h3>Plans (Current Plan: {plan})</h3>
                            <h4>Renewal date: 04/03/2021</h4>
                            <div className="planContainer">
                                <div className="planPackage">
                                    <div className="standartInfo">
                                        <p>Netflix Standart</p>
                                        <small>1080p</small>                                        
                                    </div>
                                    <button className="standartPlanButton" onClick={standartPlan}>Subscribe</button>
                                </div>
                                <div className="planPackage">
                                    <div className="standartInfo">
                                        <p>Netflix Basic</p>
                                        <small>480p</small>                                        
                                    </div>
                                    <button className="basicPlanButton" onClick={basicPlan}>Subscribe</button>
                                </div>
                                <div className="planPackage">
                                    <div className="standartInfo">
                                        <p>Netflix Premium</p>
                                        <small>4K+HDR</small>                                        
                                    </div>
                                    <button onClick={premiumPlan} className="premiumPlanButton">Subscribe</button>
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
