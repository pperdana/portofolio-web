import "./Contact.styles.scss";
import emailIcon from "../../images/mail.png";

const Contact = () => {
  return (
    <section className="section-contact" id="contact">
      <div className="container">
        <div className="contact">
          <div className="contact-text-box">
            <span className="subheading">Contact</span>
            <h2 className="heading-secondary">
              Don’t be shy! Let’s have a chat.
            </h2>
          </div>

          <div className="contact-img-box" role="img">
            <div className="contact-btn">
              <a className="btn" href="mailto:panjiperdana088@gmail.com">
                Get in touch
              </a>
            </div>

            <div className="email-box">
              <img className="email-img" src={emailIcon} alt="" />
              <a className="email-text" href="mailto:panjiperdana088@gmail.com">
                panjiperdana088@gmail.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
