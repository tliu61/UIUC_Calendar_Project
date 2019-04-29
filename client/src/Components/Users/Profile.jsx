import React, { Component } from 'react';
import 'semantic-ui-css/semantic.min.css';
import '../../Styles/Searchbox.css';
import {Link} from 'react-router-dom'
import {Image, Form, Input, Button, Dropdown, Card} from 'semantic-ui-react';
import DatePicker from 'react-datepicker';
import axios from 'axios';
import '../../Styles/EventList.css'

import EventList from '../SearchEvent/EventList'

import img1 from './../../images/Default-Group.jpg'


class Profile extends Component {
    constructor(){
        super();

        this.state = {
          results: []
        }
        /*
        var events = []
        let promises = ['5cc4bf7296e2cc098a1c440a','5cc4bf7296e2cc098a1c440c'].map((movie, idx) => {
          var result;
          axios.get(`http://localhost:4000/api/events/${movie}`)
            .then(res => {
              result = res.data.data
              events.push(result)
            })
            .catch(err => {
              console.log(err.response)
            })

        })
        */

    }

    render() {
      /*
      this.state.results.map((movie, idx) => {
        console.log(movie)
      })*/
        return (
          <div>
            <EventList e/>
          </div>
        )
    }
  }

  export default Profile
