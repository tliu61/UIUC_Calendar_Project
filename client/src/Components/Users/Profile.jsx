import React, { Component } from 'react';
import 'semantic-ui-css/semantic.min.css';
import '../../Styles/Searchbox.css';
import {Image} from 'semantic-ui-react';
import axios from 'axios';
import '../../Styles/Profile.css'

import EventList from '../SearchEvent/EventList'



class Profile extends Component {
    constructor(){
        super();

        this.state = {
          results: [],
          curr_user: '5cc4bf7196e2cc098a1c43ee',
          name: 'temp',
          email: 'temp',
          picture: 'https://data.whicdn.com/images/293514924/superthumb.jpg?t=1501609884',
          createdevents: [],
          joinedevents: []
        }

    }

    componentWillMount() {
      var result;
      let promise = axios.get(`/api/users/${this.state.curr_user}`)
        .then(res => {
          result = res.data.data
          this.setState({
            name: result.name,
            email: result.email,
            createdevents: result.createdevents,
            joinedevents: result.savedevents
          })
        })

      Promise.resolve(promise).then(() => {
        this.setState({
          name: result.name,
          email: result.email,
          createdevents: result.createdevents,
          joinedevents: result.savedevents
        })
      })
    }

    render() {
      //console.log(this.state.joinedevents)
        return (
          <div>
            <div className = "profile_top">

              <Image src = {this.state.picture} className = 'img'/>
              <div className = "profile_text">
                {this.state.name}
                <br/> <br/>
                {this.state.email}
              </div>
            </div>
            <h1> Events you have joined </h1>
            <EventList e = {this.state.joinedevents}/>
            <h1> Events you have created </h1>
            <EventList e = {this.state.createdevents}/>
          </div>
        )
    }
  }

  export default Profile
