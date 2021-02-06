import React, { useEffect, useState } from 'react';
import "./Reviews.css";
import db from "../firebase";
import firebase from "firebase";
import Message from './Message';

const Reveiws = () => {

    const [message, setMessage] = useState("");
    const [messages, setMessages] = useState([]);
    

    const sendMessage = (e) => {
        e.preventDefault();
        setMessage("");
        db.collection("messages").add({
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            message: message,
        });
        
    }

    useEffect(() => {
        db.collection("messages").orderBy("timestamp" , "desc").onSnapshot((snapshot) => (
            setMessages(snapshot.docs.map((doc) => ({
                id: doc.id,
                data: doc.data(),
            })))
        ));
    }, [messages]);

    return (
        <div className="reviewsPage">
            <div className="leftSidebar">
            </div>
            <div className="chatPage">
                <div className="chatFooter">
                    <form>
                        <input value={message} onChange={(e) => setMessage(e.target.value)} type="text" placeholder="Witch movie would you reccomend?" />
                        <button onClick={sendMessage} type="submit">Submit</button>
                    </form>
                </div>
                <div className="chatContainer">
                    {messages.map(({id, data}) => (
                        <Message key={id} id={id} content={data} />
                    ))}
                </div>
            </div>
            <div className="chatSidebar">
                
            </div>
        </div>
    )
}

export default Reveiws
