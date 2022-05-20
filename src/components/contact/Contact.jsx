import "./contact.css";
// import PhoneIcon from "../../svg/PhoneIcon";
// import Addressfrom "../../svg/AddressIcon";
// import Email from "../../svg/EmailIcon";
//linkedIn
//github

const Contact = () => {
  return (
    <div className="contact">
      <div className="contact-background"></div>
      <div className="contact-wrapper">
        <div className="contact-left">
          <h1 className="contact-title">Let's discuss your project.</h1>
          <div className="contact-info">
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
          <form>
            <input type="text" placeholder="Name" name="user_name" />
            <input type="text" placeholder="Subject" name="user_subject" />
            <input type="text" placeholder="Email" name="user_email" />
            <textarea rows="5" placeholder="Message" name="message" />
            <button>Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
