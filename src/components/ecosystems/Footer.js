import React, {PropTypes} from 'react';
import { Link, IndexLink } from 'react-router';

class Footer extends React.Component {
    constructor() {
        super();

        this.state = {
            icons: [
                {
                    alt: "email",
                    link: "#",
                    imageSrc: require("../../assets/icons/email.png"),
                    regularImageSrc: require("../../assets/icons/email.png"),
                    hoverImageSrc: require("../../assets/icons/email-hover.png")
                },
                {
                    alt: "linkedIn",
                    link: "https://www.linkedin.com/in/tracy-lin",
                    imageSrc: require("../../assets/icons/linkedin.png"),
                    regularImageSrc: require("../../assets/icons/linkedin.png"),
                    hoverImageSrc: require("../../assets/icons/linkedin-hover.png")
                },
                {
                    alt: "medium",
                    link: "https://medium.com/@tracy.lin", 
                    imageSrc: require("../../assets/icons/medium.png"),
                    regularImageSrc: require("../../assets/icons/medium.png"),
                    hoverImageSrc: require("../../assets/icons/medium-hover.png")
                },
                {
                    alt: "cargo",
                    link: "http://cargocollective.com/tracylin", 
                    imageSrc: require("../../assets/icons/cargo.png"),
                    regularImageSrc: require("../../assets/icons/cargo.png"),
                    hoverImageSrc: require("../../assets/icons/cargo-hover.png")
                }
            ]
        }

        this.iconHover = this.iconHover.bind(this);
    }

    iconHover(e) {
        let stateCopy = Object.assign({}, this.state);
        let index = e.currentTarget.getAttribute('data-index');
        let icon = stateCopy.icons[index];
        icon.imageSrc = e.type === "mouseover" ?
            icon.hoverImageSrc : icon.regularImageSrc

        this.setState(stateCopy);
    }

    render() {
        return (
            <div className="footer">
                <ul className="footer-list">
                    {this.state.icons.map((icon, index) =>
                        <li key={"footerLink" + index}>
                            <a onMouseLeave={this.iconHover} 
                                onMouseOver={this.iconHover} 
                                data-index={index} 
                                href={icon.link} 
                                className="footer-links">
                                <img src={icon.imageSrc} alt={icon.alt} />
                            </a>
                        </li>
                    )}
                </ul>
            </div>
        );
    }
}

export default Footer;
