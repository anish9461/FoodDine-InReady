import React, { Component } from 'react';

import axios from 'axios';

class InstructorApp extends Component {

    componentDidMount() {
        axios.get(`https://jsonplaceholder.typicode.com/users`)
          .then(res => {
            console.log(res)
          })
      }
    render() {
        return (
              <h1>Instructor Application</h1>
        )
    }
}

export default InstructorApp