import { useRef, useState, useContext } from "react";
import "./contact.css";
import emailjs from "@emailjs/browser";
import { ThemeContext } from "../../context";
// import PhoneIcon from "../../svg/PhoneIcon";
// import Addressfrom "../../svg/AddressIcon";
// import Email from "../../svg/EmailIcon";

//TODO: links to personal pages with icons (left column)
//linkedIn
//github

//TODO
//add form validations
const Contact = () => {
  const formRef = useRef();
  const [done, setDone] = useState(false);
  const [sending, setSending] = useState(false);
  const [buttonText, setButtonText] = useState("Submit");

  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  const handleSubmit = (event) => {
    event.preventDefault();
    setButtonText("Sending");
    emailjs
      .sendForm(
        "service_2kc8h8v",
        "template_jy7mw4q",
        formRef.current,
        "user_keoKFOK8juktp2bjjwe2S"
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true);
          setButtonText("Submit");
        },
        (error) => {
          console.log("error occurred");
          console.log(error.text);
          setButtonText("Submit");
        }
      );
  };

  return (
    <div id="contact" className="contact">
      <div className="contact-background"></div>
      <div className="contact-wrapper">
        <div className="contact-left">
          <h1 className="contact-title">Let's discuss your project.</h1>
          <div className="contact-info">
            LinkedIn, Github, Resume, Band Page
            <div className="contact-info-item">
              <img src="" alt="" className="contact-icon" />
              123 1234 1234
            </div>
            <div className="contact-info-item">
              <img src="" alt="" className="contact-icon" />
              email:
            </div>
            <div className="contact-info-item">
              <img src="" alt="" className="contact-icon" />
              address:
            </div>
          </div>
        </div>
        <div className="contact-right">
          <p className="contact-description">
            <b>What's your story?</b> I'd love to hear about the exciting ideas
            you have! Get in touch with me!
          </p>
          <form ref={formRef} onSubmit={handleSubmit}>
            <input
              style={{
                backgroundColor: darkMode && "rgb(37, 37, 37)",
                borderBottom: darkMode && "1px solid white",
              }}
              type="text"
              placeholder="Name"
              name="user_name"
            />
            <input
              style={{
                backgroundColor: darkMode && "rgb(37, 37, 37)",
                borderBottom: darkMode && "1px solid white",
              }}
              type="text"
              placeholder="Subject"
              name="user_subject"
            />
            <input
              style={{
                backgroundColor: darkMode && "rgb(37, 37, 37)",
                border: "none",
                borderBottom: darkMode && "1px solid white",
              }}
              type="text"
              placeholder="Email"
              name="user_email"
            />
            <textarea
              style={{
                backgroundColor: darkMode && "rgb(37, 37, 37)",
                border: darkMode && "1px solid white",
              }}
              rows="5"
              placeholder="Message"
              name="message"
            />
            <button>{buttonText}</button>
            {done && (
              <p>
                Thank you! If the message successfully sends, you should receive
                an automated message in your email.
              </p>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
