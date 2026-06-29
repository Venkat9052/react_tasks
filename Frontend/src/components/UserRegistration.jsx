import React, { useRef, useState } from 'react'
import styles from "../styles/userregister.module.css";
import { Toaster, toast } from "sonner"
import Navbar from "./Navbar";
import PageTransition from './PageTransition';

const UserRegistration = () => {
    const [message, setMessage] = useState("");
    const [student, setStudent] = useState([]);

    const fullname = useRef(null);
    const username = useRef(null);
    const email = useRef(null);
    const password = useRef(null);
    const confirm_pass = useRef(null);
    const mobile = useRef(null);
    const gender = useRef(null);
    const village = useRef(null);
    const state = useRef(null);
    const pincode = useRef(null);
    const dob = useRef(null);



    

    const Register = (e) => {
        e.preventDefault();
        const isFormValid = fullname.current?.value.trim() &&
        username.current?.value.trim() &&
        email.current?.value.trim() &&
        password.current?.value.trim() &&
        confirm_pass.current?.value.trim() &&
        mobile.current?.value.trim() &&
        dob.current?.value.trim() &&
        gender.current?.value.trim()
        
        const user = {
            fullname: fullname.current.value,
            username: username.current.value,
            email: email.current.value,
            mobile: mobile.current.value,
            gender: gender.current.value,
            dob: dob.current.value
        };


        const pass = password.current.value;
        const confirm = confirm_pass.current.value;

        if (isFormValid) {
            if (pass === confirm) {
                toast.success("user registered sucessfully", {
                    style: {
                        background: "#22c55e",
                        color: "white",
                        border: "1px solid #16a34a"
                    }
                })

                setStudent(prev => [...prev, user]);

                // clear inputs ...........................
                fullname.current.value = ""
                username.current.value = ""
                email.current.value = ""
                mobile.current.value = ""
                gender.current.value = ""
                password.current.value = ""
                confirm_pass.current.value = ""
                dob.current.value = ""

            }
            else {
                toast.error("password must match with confirm pasword", {
                    style: {
                        background: "#da4343",
                        border: "0.2rem solid #f00707",
                        color: "white"
                    }
                })
                return;
            }

        }
        else {
            toast.error("all feilds must be filled", {
                style: {
                    background: "#da4343",
                    border: "0.2rem solid #f00707",
                    color: "white"
                }
            })
            return;
        }
    }


    return (
        <>
        <PageTransition>
        <Navbar/>
            <div className={`${styles.main}`}>
                <form className={`${styles.container}`} onSubmit={Register}>
                    <h3 className={`${styles.head}`}> User Registration form</h3>
                    <div className={`${styles.inputs}`}>
                        <input type="text" id="fullname" name="fullname" placeholder=' ' ref={fullname} ></input>
                        <label htmlFor='fullname'>Full name</label>
                    </div>
                    <div className={`${styles.inputs}`}>
                        <input type="text" id="username" name="username" placeholder=' ' ref={username} ></input>
                        <label htmlFor='username'>User name</label>
                    </div>
                    <div className={`${styles.inputs}`}>
                        <input type="email" id="email" name="email" placeholder=' ' ref={email}></input>
                        <label htmlFor='email'>Email</label>
                    </div>
                    <div className={`${styles.inputs}`}>
                        <input type="tel" id="mobile" name="mobile" placeholder=' ' ref={mobile}></input>
                        <label htmlFor='mobile'>Contact</label>
                    </div>
                    <div className={`${styles.inputs}`}>
                        <input type="password" id="password" placeholder=' ' ref={password}></input>
                        <label htmlFor='password'>Password</label>
                    </div>

                    <div className={`${styles.inputs}`}>
                        <input type="password" id="confirm_pass" placeholder=' ' ref={confirm_pass} ></input>
                        <label htmlFor='confirm_pass'>Confirm-password</label>
                    </div>
                    <div className={`${styles.personal}`}>

                        <div className={`${styles.dob}`}>
                            <label htmlFor='dob'>Date of birth : </label>
                            <input type="date" id="dob" placeholder=' ' ref={dob}></input>
                        </div>

                        <div className={`${styles.gender}`}>
                            <label htmlFor='gender'>Gender : </label>
                            <select name="gender" id="gender" ref={gender}>
                                <option value="">Select Gender</option>
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                                <option value="Other">Other</option>
                            </select>
                        </div>
                    </div>
                    {/* <div className={`${styles.address}`}>
                        <div className={`${styles.location}`}>
                            <input type="text" id="village" name="village" placeholder=' ' ref={village}></input>
                            <label htmlFor='village'>village</label>
                        </div>
                        <div className={`${styles.location}`}>
                            <input type="text" id="state" name="state" placeholder=' ' ref={state}></input>
                            <label htmlFor='state'>State</label>
                        </div>
                        <div className={`${styles.location}`}>
                            <input type="text" id="pincode" name="pincode" placeholder=' ' ref={pincode}></input>
                            <label htmlFor='pincode'>Pincode</label>
                        </div>

                    </div>*/}
                    <div className={`${styles.submitbtn}`}>
                        <button type="submit">Register</button>
                    </div> 
                </form>
            </div>
            <Toaster position="top-right" />
        </PageTransition>
        </>
    )
}

export default UserRegistration
