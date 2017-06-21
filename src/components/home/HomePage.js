import React from 'react';
import {Link} from 'react-router';

class HomePage extends React.Component {
  render() {
    return (
      <div className="intro-content">
        <p className="paragraph-one intro-text">
          UX and UI designer with a background in graphic design and a deep empathy for people, passionate about using design to create a positive and lasting difference in the lives of people.
        </p>

        <div id="magicHatContainer" className="magic-hat">
          <div id="rabbitWindow" className="rabbit-window"></div>
          <img id="magicHat" src={require("../../assets/magic-hat.png")} alt="Magic Hat" />
        </div>
      </div>
    );
  }
}

export default HomePage;
