import React from 'react';
import logo from './logo.svg';
import './App.css';
import TabsComponent from "./components/TabsComponent";

class App extends React.Component {
  constructor(props){
    super(props);
  }
  render(){
  return (
    <div>
      <TabsComponent history={this.props.history} activeKey="restaurant"/>
      Learn react
    </div>
  );
  }
}

export default App;
