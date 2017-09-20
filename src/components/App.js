import React, {PropTypes} from 'react';
import {Header, Footer, WorkNav} from './ecosystems';
import { WorkContentApi, TextContentApi, CommonContentApi } from '../api';

class App extends React.Component {
  constructor(context) {
    super(context);

    this.state = {
      workItems: [],
      amma: [],
      "dignity-meals": [],
      "abundant-life": [],
      about: [],
      mainContainerClasses: "main-container",
      headerClasses: "header",
      headerNavItems: [],
      headerLogo: ""
    };

    this.cachedWorkContent = null;
    this.checkPosition = this.checkPosition.bind(this);
  }
  componentWillMount() {
    const workItems = WorkContentApi.getWorkContent();
    const ammaArticleItems = TextContentApi.getAmmaContent();
    const dignityMealsArticleItems = TextContentApi.getDignityMealsContent();
    const abundantLifeArticleItems = TextContentApi.getAbundantLifeContent();
    const aboutArticleItems = TextContentApi.getAboutContent();
    const headerNavItems = CommonContentApi.getHeaderNavItems();
    const headerLogo = CommonContentApi.getHeaderLogo();

    this.setState({
      workItems: workItems,
      amma: ammaArticleItems,
      "dignity-meals": dignityMealsArticleItems,
      "abundant-life": abundantLifeArticleItems,
      about: aboutArticleItems,
      headerNavItems: headerNavItems,
      headerLogo: headerLogo
    });
  }

  componentDidUpdate() {
    this.cachedWorkContent = document.getElementById('workContent');
    window.removeEventListener('scroll', this.checkPosition);
    
    if (this.cachedWorkContent) {
      window.addEventListener('scroll', this.checkPosition);
    }
  }

  checkPosition() {
    let hasPassedBarrier = window.scrollY > this.cachedWorkContent.offsetTop - window.innerHeight && 
      this.cachedWorkContent.offsetTop > window.innerHeight;
    let headerClasses = hasPassedBarrier ? "header docked" : "header";
    let mainContainerClasses = hasPassedBarrier ? "main-container header-docked" : "main-container";
    
    if (this.state.headerClasses !== headerClasses) {
      this.setState({
        mainContainerClasses: mainContainerClasses,
        headerClasses: headerClasses
      });
    }
  }

  render() {
    let children = React.Children.map(this.props.children, (child) => {
      return React.cloneElement(child, {
        articleItems: this.state[child.props.routes[1].path]
      });
    });

    return (
      <div className={this.state.mainContainerClasses}>
        <Header headerLogo={this.state.headerLogo} headerClasses={this.state.headerClasses} headerNavItems={this.state.headerNavItems}/>
        <div id="mainContent" className="main-content">
          {children}
        </div>
        <WorkNav workItems={this.state.workItems} />
        <Footer />
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.object.isRequired
};

export default App;
