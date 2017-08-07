import React, {PropTypes} from 'react';
import Header from './common/Header';
import Footer from './common/Footer';
//import WorkNav from './common/WorkNav';
import WorkNav from './ecosystems/WorkNav';
import WorkContentApi from '../api/workContentServices';
import TextContentApi from '../api/textContentServices';

class App extends React.Component {
  constructor(context) {
    super(context);

    this.state = {
      workItems: [],
      AmmaPage: []
    }
  }

  componentWillMount() {
    const workItems = WorkContentApi.getWorkContent();
    const ammaArticleItems = TextContentApi.getAmmaContent();
    const dignityMealsArticleItems = TextContentApi.getDignityMealsContent();

    this.setState({
      workItems: workItems,
      AmmaPage: ammaArticleItems,
      DignityMealsPage: dignityMealsArticleItems
    })
  }

  render() {
    let children = React.Children.map(this.props.children, (child) => {
      return React.cloneElement(child, {
        articleItems: this.state[child.type.name]
      })
    })

    return (
      <div className="main-container">
        <Header/>
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
