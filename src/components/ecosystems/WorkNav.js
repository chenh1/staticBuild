import React from 'react';
import { WorkItem } from '../organisms';

const WorkNav = ({workItems}) => {
    return (
        <div className="work-content">
            {workItems.map((workItem, index) => {
                return (
                    <WorkItem 
                        key={'workItem' + index}
                        data={workItem}
                    />
                )
            })}
        </div>
    );
};

export default WorkNav;