import React,{Component  } from "react";
import "../css/dashboard.css";
import bgimage from "../images/restaurant-1.jpg";
import {CSSTransition, TransitionGroup} from 'react-transition-group';
import "../css/background.css";
import GoogleLogin from 'react-google-login'
import axios from "axios";

class Startup extends Component {
    constructor(props) {
      super(props);
      this.state = {
        center: [-0.1148677, 51.5139573]
      };
    }
  
    componentDidMount() {
      // axios.get(`https://fooddinein--ready.herokuapp.com/user`).then(res => {
      //   console.log(res.data);
      // });
      // console.log("axios post")

      // axios({
      //   method: 'POST',
      //   url: 'http://fooddinein--ready.herokuapp.com/user',
      //   // headers: {}, 
      //   data: {
      //     'firstName' : response.w3.ig
      //   } 
      // }).then(res => {
      //   console.log(res)
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
      const responseGoogle = (response) =>{
        console.log(response)
        console.log("axios post")

      axios({
        method: 'POST',
        url: 'http://fooddinein--ready.herokuapp.com/user',
        // headers: {}, 
        data: {
          'firstName' : response.w3.ofa,
          'lastName' : response.w3.wea,
          'email' : response.w3.U3
        } 
      }).then(res => {
        console.log("response")
        
        console.log(res)
      }).catch(err => {
        console.log("error")
        console.log(err)
      }
        );
        // FIXME: Use session storage to store the user data
        sessionStorage.setItem('isLoggedIn','true')
        this.props.history.push('/home',{response : response, isLoggedIn: 'true'})
      }
      return (
        <div>
        <div className="bg-image">
        <img src={bgimage} id="b" alt="" height='100vh' />
        </div>

<div className="bg-text">
  
  <h1 style={{fontSize: '50px'}}>FoodDine-InReady</h1>
  {/* <a onClick={this.onclick} href='home' className="button4" style={{backgroundColor:'#f14e4e', fontSize:'25px'}}>Click!</a> */}
  <GoogleLogin
clientId="1040424542196-n7gajpjirdqcm10grpbk0kmvk8eav9ki.apps.googleusercontent.com"
onSuccess={responseGoogle}
onFailure={responseGoogle}
/>
</div>
</div>
      );
    }
  }
  
  export default Startup;
  