import React from "react";
import { useLocation } from "react-router-dom";

const Thankyou = () => {
    const location = useLocation();
    return (
        <div>fghjk{location.state.email}</div>
    )
}

export default Thankyou;