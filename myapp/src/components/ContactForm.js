import "./ContactFormStyles.css";
import  { useState } from 'react';


function ContactForm(){

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");
    const [emailError, setEmailError] = useState("");

    const validateEmail = (email) => {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    }

    const collectData = async(e) =>{
        e.preventDefault();
        if (!validateEmail(email)) {
            setEmailError("Please enter a valid email address.");
            return;
        }
        let result = await fetch('http://localhost:4000/',{
            method: 'post',
            body: JSON.stringify({name, email, subject, message}),
            headers:{
                'Content-Type': 'application/json'
            },
        });
        result = await result.json;
        localStorage.setItem("user", JSON.stringify(result));
        alert("Thanks for your interest! We will reach out to you soon.");
        window.location.reload();
    }

    return(
        <div className="form-container">
            <h1>
                Send a message to us!
            </h1>
            <form onSubmit={collectData}>

                 <div className='cl'>
                        <label className='form-inp'>Name</label>
                        <input type='text' className='text-inp'
                        value={name}
                        onChange={(e)=> setName(e.target.value)}/>
                 </div>
                 <div className='cl'>
                        <label className='form-inp'>Email Address</label>
                        <input type='email' className='text-inp'
                        value={email}
                        onChange={(e)=> {setEmail(e.target.value); setEmailError("") }}/>
                        {emailError && <p className="error">{emailError}</p>}
                 </div>
                 <div className='cl'>
                        <label className='form-inp'>Subject</label>
                        <input type='text' className='text-inp'
                        value={subject}
                        onChange={(e)=> setSubject(e.target.value)}/>
                 </div>
                 <div className='cl'>
                        <label className='form-inp'>Message</label>
                        <input type='text' className='text-inp'
                        value={message}
                        onChange={(e)=> setMessage(e.target.value)}/>
                 </div>
                <button type='submit' className='btn'>Send Message</button>

            </form>
        </div>
    )
}
export default ContactForm;