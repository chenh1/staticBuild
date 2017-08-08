import React, {PropTypes} from 'react';
import {Header, Footer, WorkNav} from './ecosystems';
import WorkContentApi from '../api/workContentServices';
import TextContentApi from '../api/textContentServices';

class App extends React.Component {
  constructor(context) {
    super(context);

    this.cachedArticleContent = null;
    this.state = {
      workItems: [],
      AmmaPage: [],
      DignityMealsPage: [],
      AbundantLifePage: [],
      AboutPage: [],
      mainContainerClasses: "main-container",
      headerClasses: "header",
      headerNavItems: [
        {path: "/work", linkClass:"page-link", activeClassName:"active", text:"Work"},
        {path: "/about", linkClass:"page-link", activeClassName:"active", text:"About"},
        {path: require("../assets/resume.pdf"), linkClass:"page-link", activeClassName:"active", text:"Resume"}
      ]
    }

    this.checkPosition = this.checkPosition.bind(this);
  }

  componentDidMount() {
    this.cachedArticleContent = document.getElementById('articleContent');
    window.removeEventListener('scroll', this.checkPosition);
    
    if (this.cachedArticleContent) {
      window.addEventListener('scroll', this.checkPosition);
    }
  }

  componentWillMount() {
    const workItems = WorkContentApi.getWorkContent();
    const ammaArticleItems = TextContentApi.getAmmaContent();
    const dignityMealsArticleItems = TextContentApi.getDignityMealsContent();
    const abundantLifeArticleItems = TextContentApi.getAbundantLifeContent();
    const aboutArticleItems = TextContentApi.getAboutContent();

    this.setState({
      workItems: workItems,
      AmmaPage: ammaArticleItems,
      DignityMealsPage: dignityMealsArticleItems,
      AbundantLifePage: abundantLifeArticleItems,
      AboutPage: aboutArticleItems
    });
  }

  checkPosition() {
    let hasPassedBarrier = window.scrollY > this.cachedArticleContent.scrollHeight - window.innerHeight;
    let headerClasses = hasPassedBarrier ? "header docked" : "header";
    let mainContainerClasses = hasPassedBarrier ? "main-container header-docked" : "main-container";
    
    this.setState({
      mainContainerClasses: mainContainerClasses,
      headerClasses: headerClasses
    });
  }

  render() {
    let children = React.Children.map(this.props.children, (child) => {
      return React.cloneElement(child, {
        articleItems: this.state[child.type.name]
      })
    })

    return (
      <div className={this.state.mainContainerClasses}>
        <Header headerClasses={this.state.headerClasses} headerNavItems={this.state.headerNavItems}/>
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
