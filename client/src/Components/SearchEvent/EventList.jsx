import React, { Component } from 'react';
import 'semantic-ui-css/semantic.min.css';
import '../../Styles/Searchbox.css';
import {Link} from 'react-router-dom'
import {Image, Form, Input, Button, Dropdown, Card} from 'semantic-ui-react';
import DatePicker from 'react-datepicker';
import axios from 'axios';
import '../../Styles/EventList.css'

import img1 from './../../images/Default-Group.jpg'


function isEmpty(obj) {
    for(var key in obj) {
        if(obj.hasOwnProperty(key))
            return false;
    }
    return true;
}

class EventList extends Component {
  constructor(){
      super();

      this.state = {
        results: []
      }
  }


  /*
    componentWillMount() {
      if (this.state.results != []) {
        var events = []
        let promises =['5cc4bf7296e2cc098a1c440a','5cc4bf7296e2cc098a1c440c'].map((movie, idx) => {
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
        Promise.all(promises).then(() => {
          this.setState({
            results: events
          })
        })
      }

    }
    */

    render() {
      //console.log(this.props.e)
      if (isEmpty(this.props)) {
        return (
          <div>
            You have no events!
          </div>
        );
      }
      else {
        //console.log(this.props.e)

        /*
        console.log(this.state.results)
        const EventBlock = this.state.results.map((result, idx) => {
          console.log(result)
            return (
              <Card>
                <Image src = 'https://data.whicdn.com/images/293514924/superthumb.jpg?t=1501609884' />
                <Card.Content>
                    <Card.Header> {result.title} </Card.Header>
                    <Card.Meta> {result.creator} </Card.Meta>
                    <Card.Meta> {result.date} </Card.Meta>
                    <Card.Description> {result.date} </Card.Description>
                </Card.Content>
                <Card.Content>
                  <div className = "test">
                  {result.address}
                  </div> <br />
                  <Card.Meta> {result.tags} </Card.Meta>
                </Card.Content>
              </Card>
            );



        })*/
        console.log(this.state.results)
        return (
          <div className = "events">
          <Card>
            <Image src = 'https://upload.wikimedia.org/wikipedia/commons/7/7c/Illinois_Block_I.png' />
            <Card.Content>
                <Card.Header> Event Title </Card.Header>
                <Card.Meta> Organizer </Card.Meta>
                <Card.Meta> Date </Card.Meta>
                <Card.Description>
                  <div className = "test">
                    Explanation about the event should be a bit long yada yada yada yada
                  </div>
                </Card.Description>
            </Card.Content>
            <Card.Content>
              <div className = "test">
                Address of event
              </div> <br />
              <Card.Meta> List of tags for event </Card.Meta>
            </Card.Content>
          </Card>
          </div>
        )
      }

    }
  }

  export default EventList
