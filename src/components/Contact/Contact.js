import React from "react";
import "./Contact.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faGithub, faInstagram, faTwitter } from "@fortawesome/free-brands-svg-icons"

function Contact() {
  return (
    <section className="contact" >
        <div className="contact__banner">
            Contact
                <div className="content">
                    Get In <span>Touch</span>
                </div>
            </div>
        <div className="contact__content">
            <div className="left">
                <h2>Get In Touch</h2>
                <p>Please feel free to get in touch with me. Talk to me about a project collaboration or just say hi ^^!. </p>
            </div>
            <div className="right">
                <div className="mailbox">
                    <FontAwesomeIcon
                        className="mailbox-icon"
                        icon={faEnvelope}
                        size="2x"
                        color="white"
                    />
                    <div className="mail">
                    <span>Mail Me</span>
                    <p>thnam1410@gmail.com</p>

                    </div>

                </div>
                <h2>Let's get social</h2>
                <div className="socials">
                    <FontAwesomeIcon
                    
                        className="socials-icon"
                        icon={faFacebook}
                        size="2x"
                        color="white"
                    />
                    <FontAwesomeIcon
                        className="socials-icon"
                        icon={faTwitter}
                        size="2x"
                        color="white"
                    />
                    <FontAwesomeIcon
                        className="socials-icon"
                        icon={faGithub}
                        size="2x"
                        color="white"
                    />
                    <FontAwesomeIcon
                        className="socials-icon"
                        icon={faInstagram}
                        size="2x"
                        color="white"
                    />
                </div>
            </div>
        </div>
    </section>
  );
}

export default Contact;
