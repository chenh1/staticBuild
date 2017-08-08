import React, {PropTypes} from 'react';
import { Link, IndexLink } from 'react-router';
import CommonContentApi from '../../api/commonContentServices';

class Footer extends React.Component {
    constructor() {
        super();

        this.state = {};
        this.iconHover = this.iconHover.bind(this);
    }

    componentWillMount() {
        let newState = CommonContentApi.getFooterIcons();
        this.setState(newState);
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
