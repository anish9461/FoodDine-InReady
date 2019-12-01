import React,{Component  } from "react";
import "../css/dashboard.css";
import bgimage from "../images/restaurant-1.jpg";
import "../css/background.css";
import axios from "axios";
import ReactTimeout from 'react-timeout'
import Spinner from 'react-spinner-material';

class ThankYou extends Component {
    constructor(props) {
      super(props);
      this.state = {
        center: [-0.1148677, 51.5139573]
      };
      this.onclick = this.onclick.bind(this);
    }
  
    componentDidMount() {
        this.props.setTimeout(this.onclick,5000)
        // this.onclick();
    }
  
    onclick = () =>{
      this.props.history.push('/')
    sessionStorage.clear();
      //TODO: clear the session storage
    }
    render() {          
      return (
        <div>
        <div className="bg-image">
        <img src={bgimage} id="b" alt="" height='100vh' />
        </div>

<div className="bg-text">
  
  <h1 style={{fontSize: '50px'}}>Thank You!</h1>
  <h2>Your Table is Booked</h2>
  <div style={{display : 'flex', justifyContent: 'center'}}>
  <Spinner size={50} spinnerColor={"purple"} spinnerWidth={8} visible={true} />
  {/* <a onClick={this.onclick} href='home' className="button4" style={{backgroundColor:'#f14e4e', fontSize:'25px'}}>Click!</a> */}
  </div>
</div>
</div>
      );
    }
  }
  
  export default ReactTimeout(ThankYou)
  