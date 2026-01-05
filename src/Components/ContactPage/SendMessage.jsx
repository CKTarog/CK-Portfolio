import { MdArrowBackIosNew } from "react-icons/md";
import {useRef, useState} from 'react';
import Notif from '../General/Notif';
import emailjs from '@emailjs/browser';
//I am using emailjs service to make the form work

const SendMessage = ({showForm, setForm}) => {
    const [showNotif, setNotif] = useState(false); //manipulates notif
    const form = useRef();

    const sendEmail = (e) => { //email func using emailjs
        e.preventDefault();

        emailjs.sendForm("service_i5rfev6", "template_rfa5zi5", form.current, "PvS_SDxUcrPM0lsJ8").then(
        () => { //if sent, show notif
            setNotif(true);
            setTimeout(() => setNotif(false), 3000);
            form.current.reset();
        }, (error) => {
            alert("Failed to send message.", error.text);
        })
    }
    return(
        <form ref={form} onSubmit={sendEmail} className={`lg:block ${showForm ? "block" : "hidden"} lg:w-1/2 rounded-2xl dark:text-[#fff1dc] text-[#270E12] p-10 lg:pt-0 pt-30 text-center self-center `}>
           
           {/*Back, disables showForm, back to grid component*/}
            <button onClick={() => setForm(false)} className="lg:hidden flex items-center gap-2 dark:text-[#d2b48c] text-[#733a3d] dark:hover:text-[#fff1dc] hover:text-[#270E12] hover:scale-102 duration-300">
                <MdArrowBackIosNew/> Back
            </button>

            {/*Form Part*/}
            <div className="grid grid-cols-2 md:gap-8 gap-2 text-start">
                <h1 className="place-content-center flex mt-8 font-bold md:text-6xl text-5xl col-span-2 gap-4 dark:text-[#d2b48c] text-[#733a3d]">Say Hello</h1>
                <div className="row-start-2 col-span-1">
                    <label htmlFor="Fname" className="block font-semibold p-1">First Name<span className="text-red-700">*</span></label>
                    <input id="Fname" type="text" name="Fname" required placeholder="Mumei" className='block dark:bg-gray-50/20 bg-gray-400/30 rounded-md p-2 w-full h-10 placeholder:font-semibold focus:outline-2 dark:focus:outline-[#d2b48c] focus:outline-[#733a3d]  focus:-outline-offset-1'></input>
                </div>
                <div className=" row-start-2 col-span-1">
                    <label htmlFor="Lname" className="block font-semibold p-1">Last Name</label>
                    <input id="Lname" type="text" name="Lname" placeholder="Nanashi" className="block dark:bg-gray-50/20 bg-gray-400/30  rounded-md p-2 w-full h-10 placeholder:font-semibold focus:outline-2 dark:focus:outline-[#d2b48c] focus:outline-[#733a3d] focus:-outline-offset-1"></input>
                </div>
                <div className="row-start-3 col-span-2">
                    <label htmlFor="Email" className="block font-semibold p-1">Email<span className="text-red-700">*</span></label>
                    <input id="Email" type="email" name="email" required placeholder="myemail@gmail.com" className="block dark:bg-gray-50/20 bg-gray-400/30 rounded-md w-full h-10 p-2 placeholder:font-semibold focus:outline-2 dark:focus:outline-[#d2b48c] focus:outline-[#733a3d] focus:-outline-offset-1"></input>
                </div>
                <div className="row-start-4 col-span-2">
                    <label htmlFor="Message" className="block font-semibold p-1">Message<span className="text-red-700">*</span></label>
                    <textarea id="Message" name="message" required placeholder="Type your message here..." rows="8" className="block resize-none w-full dark:bg-gray-50/20 bg-gray-400/30 rounded-md p-2 placeholder:font-semibold focus:outline-2 dark:focus:outline-[#d2b48c] focus:outline-[#733a3d] focus:-outline-offset-1"></textarea>
                </div>
            </div>

            {/*Submit Button, show notif is success*/}
            <button type="submit" className="rounded-2xl bg-[#635147] text-[#fff1dc] font-semibold text-center w-35 h-10 md:m-10 m-5 hover:bg-[#733a3d] dark:hover:bg-[#d2b48c] dark:hover:text-[#270E12] hover:scale-110 duration-200">Send</button>
            {showNotif && <Notif>Message was Sent!</Notif>}
        </form>
    );
}

export default SendMessage;