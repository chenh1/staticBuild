import React from 'react';
import { WorkItem } from '../organisms';

const WorkNav = ({workItems}) => {
    return (
        <div className="work-content">
            {workItems.map((workItem, index) => {
                return (
                    <WorkItem 
                        key={'workItem' + index}
                        path={workItem.path}
                        customClass={workItem.customClass}
                        imageSrc={workItem.imageSrc}
                        alt={workItem.alt}
                        subHeader={workItem.subHeader}
                        description={workItem.description}
                    />
                )
            })}
        </div>
    );
};

export default WorkNav;