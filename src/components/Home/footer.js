import { AiFillFacebook, AiFillInstagram, AiFillPhone, AiOutlineMail, AiOutlineTwitter } from "react-icons/ai"
import { BiCurrentLocation } from "react-icons/bi"
import { BsPinterest } from "react-icons/bs"


export default function footer() {
  return (
    <footer>
      <div className="footer-container" data-testid="footer">
      <div className="footer-section">
          <h2>VENEU LOOK</h2>
          <p>Thank you for choosing us!</p>
        </div>
        <div className="footer-section">
          <h2>Links</h2>
          <ul>
            <li><a href="/home">Home</a></li>
            <li><a href="/aboutus">About</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h2>Contact Us</h2>
          <ul>
            <li><AiOutlineMail/> venuelook@gmail.com</li>
            <li><AiFillPhone/> 9800562062</li>
            <li><BiCurrentLocation/>Kathmandu Anamnagar, near bigmart</li>
          </ul>
        </div>
        <div className="footer-section">
          <h2>Follow Us</h2>
          <div className="social-icons">
            <a href="/"><AiFillFacebook/></a>
            <a href="/"><AiFillInstagram/></a>
            <a href="/"><AiOutlineTwitter/></a>
            <a href="/"><BsPinterest/></a>
          </div>
        </div>
      </div>
      <p className="footer-text">© 2023 Your Company. All rights reserved.</p>
    </footer>
  )
}
