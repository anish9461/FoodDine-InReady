import React, { Component } from 'react';

import axios from 'axios';

class InstructorApp extends Component {

    componentDidMount() {
        axios.get(`http://localhost:8080/cart`)
          .then(res => {
            console.log(res.data)
          })
      }
    render() {
        return (
              <h1>Instructor Application</h1>
        )
    }
}

export default InstructorApp