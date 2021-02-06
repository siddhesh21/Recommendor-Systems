import React from 'react';
import "./Reviews.css";

const Reveiws = () => {
    return (
        <div className="reviewsPage">
            <div className="chatPage">
                <div className="chat">

                </div>
                <div className="chatFooter">
                    <form>
                        <input type="text" placeholder="Witch movie would you reccomend?" />
                        <button type="submit">Submit</button>
                    </form>
                </div>
            </div>
            <div className="chatSidebar">
                
            </div>
        </div>
    )
}

export default Reveiws
