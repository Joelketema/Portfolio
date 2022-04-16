import emailjs from '@emailjs/browser';
import { useRef } from 'react';
import '../Style/emailStyle.css'
import '../Style/projectStyle.css'
const Email = () => {

    const formRef = useRef(null);
    const notifyRef = useRef(null);

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_66lix3m', 'template_9bsv5ak', formRef.current, 'BnKeqyEEXFs7AK4o9')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        notifyRef.current.innerHTML = "Thank you for Reaching out to me! I will get back at you as soon as possible.."
        notifyRef.current.style.color = "green"
        setTimeout(() => {
            notifyRef.current.innerHTML = ""
        }, 2500);
        formRef.current.reset();
    };

  
    return (  
    
        <form action="submit" ref={formRef} onSubmit={sendEmail}>
        <div ref={notifyRef} className='notify'></div>
        <div className="email">
                <h2>Email Me for <span className="name"> any comments or Jobs!</span></h2>
                <div className="userinputs">
                    <input type="text" placeholder="Your Name" name="name" id="NameSend" required/>
                    <input type="email" name="email" placeholder="Your Email" id="EmailSend" required/>
                </div>
                <textarea id="" name="message" cols="50" placeholder="Place Your Message Here" rows="10" required></textarea>
                <input type="submit" value="Send Email" id="myText" />
        </div> 
        </form>

    )
}

export default Email;