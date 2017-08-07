import React, {PropTypes} from 'react';
import Header from './ecosystems/Header';
import Footer from './ecosystems/Footer';
import WorkNav from './ecosystems/WorkNav';
import WorkContentApi from '../api/workContentServices';
import TextContentApi from '../api/textContentServices';

class App extends React.Component {
  constructor(context) {
    super(context);

    this.state = {
      workItems: [],
      AmmaPage: [],
      DignityMealsPage: [],
      AbundantLifePage: [],
      AboutPage: [],
      headerNavItems: [
        {path: "/work", linkClass:"page-link", activeClassName:"active", text:"Work"},
        {path: "/about", linkClass:"page-link", activeClassName:"active", text:"About"},
        {path: require("../assets/resume.pdf"), linkClass:"page-link", activeClassName:"active", text:"Resume"}
      ]
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

  render() {
    let children = React.Children.map(this.props.children, (child) => {
      return React.cloneElement(child, {
        articleItems: this.state[child.type.name]
      })
    })

    return (
      <div className="main-container">
        <Header listItems={this.state.headerNavItems}/>
        <div id="mainContent" className="main-content">
          {children}
        </div>
        <WorkNav workItems={this.state.workItems}/>
        <Footer/>
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.object.isRequired
};

export default App;
