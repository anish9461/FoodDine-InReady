import React, {Component, useState} from 'react'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

class SelectForm extends Component {
  state = {
    startDate: new Date()
  };
 
  handleChange = date => {
    this.setState({
      startDate: date
    });
  };
 
  render() {
    return (
      <div>
      <DatePicker
        selected={this.state.startDate}
        onChange={this.handleChange}
      />
      </div>
    );
  }
  }
  
export default SelectForm;