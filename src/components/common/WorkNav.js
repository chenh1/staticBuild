import React, {PropTypes} from 'react';
import { Link, IndexLink } from 'react-router';
import WorkItem from './WorkItem';

class WorkNav extends React.Component{
    constructor(props, context) {
        super(props, context);

        this.state = {
            contents: [
                {
                    path: "amma",
                    className: "amma",
                    imageSrc: require("../../assets/amma-main.png"),
                    details: "AMMA",
                    description: "Helping asthma sufferers manage and monitor their illness day to day"
                },
                {
                    path: "dignityMeals",
                    className: "dignity-meals",
                    imageSrc: require("../../assets/dignity-main.png"),
                    details: "Dignity Meals",
                    description: "A food rescue and redistribution app focused on reducing hunger and food waste"
                },
                {
                    path: "abundantLife",
                    className: "abundant-life",
                    imageSrc: require("../../assets/alife.png"),
                    details: "Abundant Life",
                    description: "Coming Soon!"
                },
                {
                    path: "http://cargocollective.com/tracylin",
                    className: "graphic-design ",
                    imageSrc: require("../../assets/graphic-design.png"),
                    details: "Graphic Design",
                    description: "Select visual design projects that I've produced in the past years"
                }
            ]
        }
    }

    render() {
        return(
            <div className="work-content">
                {this.state.contents.map(workItem => {
                    return (
                        <WorkItem
                            key={workItem.path}
                            path={workItem.path}
                            uniqueClass={workItem.className}
                            imageSrc={workItem.imageSrc}
                            details={workItem.details}
                            description={workItem.description}
                        />
                    );
                })}
            </div>
        );
    }
}

export default WorkNav;