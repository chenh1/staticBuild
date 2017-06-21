import React, {PropTypes} from 'react';
import Header from './common/Header';
import Footer from './common/Footer';
import WorkNav from './common/WorkNav';

class App extends React.Component {
  render() {
    return (
      <div className="main-container">
        <Header/>
        <div id="mainContent" className="main-content">
          {this.props.children}
        </div>
        <WorkNav />
        <Footer/>
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.object.isRequired
};

export default App;
