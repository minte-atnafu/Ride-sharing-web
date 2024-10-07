import "./footer.css";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="footerContainer">
      <div className="container">
        <div>
          <div>
            <h2 className="title-font">SERVICES</h2>
            <nav>
              <li>
                <a href="#">Ride Booking</a>
              </li>
              <li>
                <a href="#">Corporate Travel</a>
              </li>
              <li>
                <a href="#">Airport Transfers</a>
              </li>
              <li>
                <a href="#">Luxury Cars</a>
              </li>
            </nav>
          </div>
        </div>
        <div>
          <div>
            <h2 className="title-font">ABOUT US</h2>
            <nav>
              <li>
                <a href="#">Company</a>
              </li>
              <li>
                <a href="#">Team</a>
              </li>
              <li>
                <a href="#">Careers</a>
              </li>
              <li>
                <a href="#">Blog</a>
              </li>
            </nav>
          </div>
        </div> 
        <div>
          <div>
            <h2 className="title-font">SUPPORT</h2>
            <nav>
              <li>
                <a href="#">Help Center</a>
              </li>
              <li>
                <a href="#">Safety Tips</a>
              </li>
              <li>
                <a href="#">FAQs</a>
              </li>
              <li>
                <a href="#">Contact Support</a>
              </li>
            </nav>
          </div>
        </div> 
        <div> 
          <div className="contactContainer">
            <h2 className="title-font">CONTACT</h2>
            <nav>
              <li>
                <a href="tel:your-contact" className="contactLink">
                  <FaPhoneAlt /> +1 (555) 123-4567
                </a>
              </li>
              <li>
                <a href="mailto:youremail@example.com" className="contactLink">
                  <FaEnvelope />
                  support@rideprovider.com
                </a>
              </li>
              <li>
                <a href="https://twitter.com/yourtwitter" className="contactLink">
                  <FaTwitter />
                  @RideProvider
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/mintesinotatnafu/" className="contactLink">
                  <FaInstagram />
                  instagram.com/RideProvider
                </a>
              </li>
              <li>
                <a href="https://facebook.com/yourfacebook" className="contactLink">
                  <FaFacebookF />
                  facebook.com/RideProvider
                </a>
              </li>
            </nav>
          </div>
        </div>
      </div>
      <div className="container">
        <p>
          © 2024 RideProvider —
          <a
            href="https://www.linkedin.com/in/your-linkedin-profile/"
            rel="noopener noreferrer"
            target="_blank"
          >
            @YourLinkedIn
          </a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
