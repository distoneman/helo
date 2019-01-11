import React, { Component } from 'react';
import routes from './routes'
import './App.css';
// import Nav from './component/Nav/Nav';
// import Auth from './component/Auth/Auth';
// import Dashboard from './component/Dashboard/Dashboard';
// import Form from './component/Form/Form';
// import Post from './component/Post/Post';

class App extends Component {
  render() {
    return (
      <div>
        {/* <Nav /> */}
        {/* <Auth />
        <Dashboard />
        <Form />
        <Post /> */}
        {routes}
      </div>
    );
  }
}

export default App;
