
import '../Style/emailStyle.css'
import '../Style/projectStyle.css'
const Email = () => {
    return (
    
        <form action="submit">
        <div className="email">
                <h2>Email Me for <span className="name"> any comments or Jobs!</span></h2>
                <div className="userinputs">
                    <input type="text" placeholder="Your Name" name="" id="NameSend" required/>
                    <input type="email" name="" placeholder="Your Email" id="EmailSend" required/>
                </div>
                <textarea name="" id="" cols="50" placeholder="Place Your Message Here" rows="10" required></textarea>
                <input type="submit" value="Send Email" id="myText" />
        </div>
        </form>

    )
}

export default Email;