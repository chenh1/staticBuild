import React, {PropTypes} from 'react';
import Header from './common/Header';
import Footer from './common/Footer';
//import WorkNav from './common/WorkNav';
import WorkNav from './ecosystems/WorkNav';
import WorkContentApi from '../api/workContent';

class App extends React.Component {
  constructor(context) {
    super(context);

    this.state = {
      workItems: []
    }
  }

  componentWillMount() {
    const workContent = WorkContentApi.getWorkContent();

    this.setState({
      workItems: workContent
    })
  }

  render() {
    return (
      <div className="main-container">
        <Header/>
        <div id="mainContent" className="main-content">
          {this.props.children}
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
