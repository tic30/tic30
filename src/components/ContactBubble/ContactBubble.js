import React, { Component } from 'react';
import Fab from '@material-ui/core/Fab';
import Button from '@material-ui/core/Button';
import { ChatBubbleOutline } from '@material-ui/icons';
import './ContactBubble.scss';

class ContactBubble extends Component {
    constructor(props) {
        super(props);
        this.nav = React.createRef();
        this.togglePopup = this.togglePopup.bind(this);
    }

    componentDidMount() {
        let lastScrollTop = 0,
            myself = this;

        // element should be replaced with the actual target element on which you have applied scroll, use window in case of no target element.
        document.addEventListener("scroll", function(){ // or window.addEventListener("scroll"....
            let st = window.pageYOffset || document.documentElement.scrollTop; // Credits: "https://github.com/qeremy/so/blob/master/so.dom.js#L426"
            if (st > lastScrollTop){
                // downscroll code
                myself.nav.current.classList.add("scrolled");
            } else {
                // upscroll code
                myself.nav.current.classList.remove("scrolled");
            }
            lastScrollTop = st <= 0 ? 0 : st; // For Mobile or negative scrolling
        }, false);
    }

    togglePopup() {
        const navClasses = this.nav.current.classList;
        if (navClasses.contains("stuck")) {
            navClasses.remove("stuck");
        } else {
            navClasses.add("stuck");
        }
    }

    render() {
        return (
            <React.Fragment>
                <div className="contact-bubble" ref={this.nav}>
                    <Fab className="contact-bubble-cta" onClick={this.togglePopup}>
                        <ChatBubbleOutline></ChatBubbleOutline>
                    </Fab>
                    <div className="contact-bubble-popup-container">
                        <div className="contact-bubble-popup-item" id="linkedin">
                            <Button className="contact-bubble-popup-item-btn" href="https://www.linkedin.com/in/tim-chu-980881a4" target="_blank" rel="noreferrer">
                                <img src="/imgs/icons/linkedin.svg" alt="LinkedIn Icon"/>
                            </Button>
                            <p className="contact-bubble-popup-item-text">Connect on LinkedIn&nbsp;&nbsp;&nbsp;</p>
                        </div>
                        <div className="contact-bubble-popup-item" id="github">
                            <Button className="contact-bubble-popup-item-btn" href="https://github.com/tic30" target="_blank" rel="noreferrer">
                                <img src="/imgs/icons/github.svg" alt="GitHub Icon"/>
                            </Button>
                            <p className="contact-bubble-popup-item-text">Follow me on GitHub&nbsp;&nbsp;&nbsp;</p>
                        </div>
                        <div className="contact-bubble-popup-item" id="email">
                            <Button className="contact-bubble-popup-item-btn" href="mailto:chutianxin@gmail.com">
                                <img src="/imgs/icons/email.svg" alt="Email Icon"/>
                            </Button>
                            <p className="contact-bubble-popup-item-text">chutianxin@gmail.com&nbsp;&nbsp;&nbsp;</p>
                        </div>
                        <div className="contact-bubble-popup-item" id="facebook">
                            <Button className="contact-bubble-popup-item-btn" href="https://www.facebook.com/tianxin.chu" target="_blank" rel="noreferrer">
                                <img src="/imgs/icons/facebook.svg" alt="FB Icon"/>
                            </Button>
                            <p className="contact-bubble-popup-item-text">Tim Chu&nbsp;&nbsp;&nbsp;</p>
                        </div>
                    </div>
                </div>
                <div className="backdrop"></div>
            </React.Fragment>
        );
    }
}

export default ContactBubble;
