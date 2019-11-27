import React,{Component  } from "react";
import "../css/dashboard.css";
import bgimage from "../images/restaurant-1.jpg";
import {CSSTransition, TransitionGroup} from 'react-transition-group';
import "../css/background.css";


class Startup extends Component {
    constructor(props) {
      super(props);
      this.state = {
        center: [-0.1148677, 51.5139573]
      };
    }
  
    componentDidMount() {
      // axios.get(`http://localhost:8080/cart`).then(res => {
      //   console.log(res.data);
      // });
    }
  
    // render() {
    //   return (
    //     <div id='container'>
    //       <img src={bgimage} id="b" alt=""  />
          
    //         {/* <CSSTransition
    //         classNames='startup'
    //         timeout={2000}
    //         appear
    //         >
    //         <div className="centered">Centered</div>
    //         </CSSTransition> */}
            
    //         <div className="centered">
    //             sdffasf
    //         </div>
    //     </div>
    //   );
    // }
    onclick = () =>{
      this.props.history.push('/home')
    }
    render() {
      return (
        <div>
        <div className="bg-image">
        <img src={bgimage} id="b" alt="" height='100vh' />
        </div>

<div className="bg-text">
  
  <h1 style={{fontSize: '50px'}}>FoodDine-InReady</h1>
  <a onClick={this.onclick} className="button4" style={{backgroundColor:'#f14e4e', fontSize:'25px'}}>Click!</a>

</div>
</div>
      );
    }
  }
  
  export default Startup;
  