// import React,{useState} from "react";
// import './NewsLetter.css';

// const NewsLetter = ()=>{
//     e.preventDefault();
//         if (email) {
//             try {
//                 const response = await fetch('http://localhost:4000/send-email', {
//                     method: 'POST',
//                     headers: {
//                         'Content-Type': 'application/json',
//                     },
//                     body: JSON.stringify({ email }),
//                 });

//                 if (response.ok) {
//                     alert('Email sent successfully');
//                     setEmail("");
//                 } else {
//                     alert('Failed to send email');
//                 }
//             } catch (error) {
//                 console.error('Error sending email:', error);
//                 alert('An error occurred while sending the email');
//             }
//         } else {
//             alert('Please enter a valid email');
//         }
//     };

//     return(
//         <div className="newsletter">
//             <h1>Get Exclusive Offers On Your Email</h1>
//             <p>Subscribe to our NewsLetter and stay updated</p>
//             <form onSubmit={handleSubmit}>

//                 <input 
//                     type="email" 
//                     placeholder="Write Email id" 
//                     value={email} 
//                     onChange={(e) => setEmail(e.target.value)} 
//                 />
//                 <button type="submit">Subscribe</button>
//             </form>
//         </div>
//     )
// }

// export default NewsLetter;

import React, { useState } from "react";
import './NewsLetter.css';

const NewsLetter = () => {
    const [email, setEmail] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (email) {
            try {
                const response = await fetch('https://style-fusion-api.vercel.app/send-email', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ email }),
                });

                if (response.ok) {
                    alert('Email sent successfully');
                    setEmail("");
                } else {
                    alert('Failed to send email');
                }
            } catch (error) {
                console.error('Error sending email:', error);
                alert('An error occurred while sending the email');
            }
        } else {
            alert('Please enter a valid email');
        }
    };

    return (
        <div className="newsletter">
            <h1>Get Exclusive Offers On Your Email</h1>
            <p>Get latest information and stay updated</p>
            <form onSubmit={handleSubmit}>

                <input 
                    type="email" 
                    placeholder="Write Email id" 
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)} 
                />
                <button type="submit">Subscribe</button>
            </form>
        </div>
    );
};

export default NewsLetter;
