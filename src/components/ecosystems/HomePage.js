import React from 'react';
import { Paragraph } from '../atoms';
import { Link } from 'react-router';

class HomePage extends React.Component {
  constructor() {
    super();

    this.state = {
      containerClass: "magic-hat",
      magicHatClass: "",
      emptyHatClass: "hidden",
      rabbitClasses: "",
      flipped: false,
      flipDelay: 20000,
      hideRabbitDelay: 5000
    }

    this.rabbitTimeout;
    this.hatFlipTimeout;
    this.magicHatAnimation = this.magicHatAnimation.bind(this);
    this.hideRabbit = this.hideRabbit.bind(this);
  }

  hideRabbit() {
    this.rabbitTimeout = setTimeout(() => {
      this.setState({
        rabbitClasses: ""
      });
    }, this.state.hideRabbitDelay);
  }

  magicHatAnimation() {
    if (!this.state.flipped) {
      this.setState({
        containerClass: "magic-hat spin-hat",
        magicHatClass: "move-hat-over-empty-hat empty-out-hat",
        emptyHatClass: "",
        rabbitClasses: "rabbit-move",
        flipped: true
      });

      this.hideRabbit();

      this.hatFlipTimeout = setTimeout(() => {
        this.setState({
          containerClass: "magic-hat",
          magicHatClass: "",
          emptyHatClass: "hidden",
          flipped: false
        });
      }, this.state.flipDelay);
    }
  }

  componentWillUnmount() {
    clearTimeout(this.rabbitTimeout);
    clearTimeout(this.hatFlipTimeout);
  }

  render() {
    return (
      <div className="intro-content">
        <Paragraph 
          customClass="paragraph-one intro-text" 
          text={["UX and UI designer with a background in graphic design and a deep empathy for people, passionate about using design to create a positive and lasting difference in the lives of people."]}
        />

        <div id="magicHatContainer" onClick={this.magicHatAnimation} className={this.state.containerClass}>
          <div className="rabbit-window">
            <img src={require("../../assets/white-bunny-V3.png")} className={this.state.rabbitClasses} />
          </div>
          <img src={require("../../assets/magic-hat.png")} alt="Magic Hat" className={this.state.magicHatClass} />
          <img src={require("../../assets/empty-hat.png")} className={this.state.emptyHatClass} />
        </div>
      </div>
    );
  }
};

export default HomePage;
