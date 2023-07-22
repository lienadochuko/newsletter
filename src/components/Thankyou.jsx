import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import '../css/thankyou.css';
import success from '../assets/icon-success.svg';
const Thankyou = () => {
    const location = useLocation();
    const navigator = useNavigate();

    const handlebutton = () => {
        navigator('../');
    }
    return (
        <div className="a">
            <div className="container1">
                <img src={success} alt="success" className="success"/>
                <span className="thanks">Thanks for subscribing!</span>
                <p className="body">
                    A confirmation email has been sent to <b>{location.state.email}</b>. 
                    Please open it and click 
                    the button inside to confirm your subscription.
                </p>
                <button className="button1" onClick={handlebutton}>Dimiss message</button>
            </div>
        </div>
    )
}

export default Thankyou;