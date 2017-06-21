import React, {PropTypes} from 'react';
import { Link, IndexLink } from 'react-router';

class WorkNav extends React.Component{
    render() {
        return(
            <div className="work-content">
                <Link to="amma" className="amma portfolio-item page-link">
                    <div className="image">
                        <img src={require("../../assets/amma-main.png")} alt="AMMA"></img>
                    </div>
                    <div className="info">
                        <h3 className="header-three">AMMA</h3>
                        <p className="paragraph-one">
                            Helping asthma sufferers manage and monitor their illness day to day
                        </p>
                    </div>
                </Link>

                <Link to="dignityMeals" className="dignity-meals portfolio-item page-link">
                    <div className="image">
                        <img src={require("../../assets/dignity-main.png")} alt="Dignity Meals"></img>
                    </div>
                    <div className="info">
                        <h3 className="header-three">Dignity Meals</h3>
                        <p className="paragraph-one">
                            A food rescue and redistribution app focused on reducing hunger and food waste
                        </p>
                    </div>
                </Link>

                <Link to="abundantLife" className="abundant-life portfolio-item page-link">
                    <div className="image">
                        <img src={require("../../assets/alife.png")} alt="Abundant Life"></img>
                    </div>
                    <div className="info">
                        <h3 className="header-three">Abundant Life</h3>
                        <p className="paragraph-one">
                            Coming soon!
                        </p>
                    </div>
                </Link>

                <Link to="http://cargocollective.com/tracylin" className="graphic-design portfolio-item page-link">
                    <div className="image">
                        <img src={require("../../assets/graphic-design.png")} alt="Graphic Design"></img>
                    </div>
                    <div className="info">
                        <h3 className="header-three">Graphic Design</h3>
                        <p className="paragraph-one">
                            Select visual design projects that I've produced in the past years
                        </p>
                    </div>
                </Link>
            </div>
        );
    }
}

export default WorkNav;