import { TopBanner, LowBanner } from "../../Components/Banner/Banner"
import PlaceIcon from '@mui/icons-material/Place';
import PhoneIcon from '@mui/icons-material/Phone';
import WatchLaterIcon from '@mui/icons-material/WatchLater';
import "./Contact.css"

const Contact = () => {
    return(
        <div>
            <TopBanner page={"Contact"}/>
            <div className="contact-container">
                <div className="contact-title-container">
                    <h1 className="contact-title">Get In Touch With Us</h1>
                    <p className="contact-subtitle">For More Information About Our Product & Services. Please Feel Free To Drop Us An Email. Our Staff Always Be There To Help You Out. Do Not Hesitate!</p>
                </div>
                <div className="contact-detail-container">
                    <div>
                        <div className="contact-detail">
                            <PlaceIcon className="contact-icon"/>
                            <h4>Address</h4>
                            <p className="contact-detail-text">236 5th SE Avenue, New York NY10000, United States</p>
                        </div>
                        <div className="contact-detail">
                            <PhoneIcon className="contact-icon"/>
                            <h4>Phone</h4>
                            <p className="contact-detail-text">Mobile: +(84) 546-6789
                            Hotline: +(84) 456-6789</p>
                        </div>
                        <div className="contact-detail">
                            <WatchLaterIcon className="contact-icon"/>
                            <h4>Working Time</h4>
                            <p className="contact-detail-text">Monday-Friday: 9:00 - 22:00
                            Saturday-Sunday: 9:00 - 21:00</p>
                        </div>
                    </div>
                    <form>
                        <div className="contact-input-container">
                            <label>Your Name</label>
                            <input type="text" placeholder="John Doe"></input>
                        </div>
                        <div className="contact-input-container">
                            <label>Email Address</label>
                            <input type="text" placeholder="johndoe@mail.com"></input>
                        </div>
                        <div className="contact-input-container">
                            <label>Subject</label>
                            <input type="text" placeholder="Optional"></input>
                        </div>
                        <div className="contact-input-container">
                            <label>Message</label>
                            <input type="text" placeholder="Put your message here"></input>
                        </div>
                        <div className="contact-input-container">
                            <button>Submit</button>
                        </div>
                    </form>
                </div>
            </div>
            <LowBanner/>
        </div>
    )
}

export default Contact