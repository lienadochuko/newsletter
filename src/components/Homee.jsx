import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import '../css/home.css';
import red from '../assets/illustration-sign-up-desktop.svg';
import redMobile from '../assets/illustration-sign-up-mobile.svg';
import list from '../assets/icon-list.svg'

const Homee = () => {
    const initValue = {
        email: ""
    }
    let navigator = useNavigate();

    const [form, formValue] = useState(initValue)
    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setisSubmit] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setFormErrors(validate(form));
        setisSubmit(true)
    };

    useEffect(() => {
        console.log(form);
        console.log(isSubmit);
        console.log(formErrors);
        formValue(initValue);
        if (Object.keys(formErrors).length === 0 && isSubmit) {
            navigator('./Thankyou', { state: form })
        }
    },
        // eslint-disable-next-line react-hooks/exhaustive-deps
        [formErrors])

    const handleChange = (e) => {
        const { name, value } = e.target;
        formValue({ ...form, [name]: value });
    };

    const validate = (values) => {
        const errors = {};
        if (!values.email) {
            errors.email = "Valid email required"
        }
        else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
            errors.email = "Valid email required"
        }
        return errors;
    }

    return (
        <div className='a'>
            <div className="container">
                <div className="left">
                    <span className="intro">Stay updated!</span>
                    <p className="join">Join 60,000+ product managers receiving monthly updates on:</p>
                    <div className="updates">
                        <span className="updatesInfo"><img className="updateImage" src={list} alt="list" /> Product discovery and building what matters</span>
                        <span className="updatesInfo"><img className="updateImage" src={list} alt="list" /> Measuring to ensure updates are a success</span>
                        <span className="updatesInfo"><img className="updateImage" src={list} alt="list" /> And much more!</span>
                    </div>

                    <form onSubmit={handleSubmit} className="form">
                        <span className="labelerre">
                            <label className="label">Email address</label>
                            <span className='erre'>{formErrors.email}</span>
                        </span>
                        <input
                            type="text"
                            name="email"
                            className="email"
                            maxLength={35}
                            placeholder="email@company.com"
                            value={form.email}
                            onChange={handleChange}
                            style={{ border: formErrors.email ? '1px solid #FF6257' : '', color: formErrors.email ? '#FF6257' : '', backgroundColor: formErrors.email ? '#ff625741' : '' }}
                        />
                        <button className="button">Subscribe to monthly newsletter</button>
                    </form>
                </div>
                <div className="right">
                    {/* <span className="desktopImage" ></span> */}
                    <img src={red} alt="imagine" style={{ width: '100%', height: '100%' }} className="desktopImage" />
                    <img src={redMobile} alt="imagine" className="mobileImage" />
                </div>
            </div>
        </div>
    )
}
export default Homee;