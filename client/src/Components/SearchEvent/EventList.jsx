import React, { Component } from 'react';
import 'semantic-ui-css/semantic.min.css';
import '../../Styles/Searchbox.css';
import {Image, Card, Button} from 'semantic-ui-react';
import axios from 'axios';
import '../../Styles/EventList.css'



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
        curr_events: [],
        results: []
      }
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ curr_events: nextProps.e})
    var events = []
    let promises = this.state.curr_events.map((event_id, idx) => {
      var result;
      axios.get(`/api/events/${event_id}`)
        .then(res => {
          result = res.data.data
          events.push(result)
          //console.log(result.coverpicture)
          this.setState({
            results: events
          })
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

    componentDidMount() {
        var events = []
        let promises = this.state.curr_events.map((event_id, idx) => {

          var result;
          axios.get(`/api/events/${event_id}`)
            .then(res => {
              result = res.data.data
              events.push(result)
              this.setState({
                results: events
              })
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

      saveEventToGoogle(event){
        alert("event added to Google Calendar!");
      }

    render() {
      if (isEmpty(this.props)) {
        return (
          <div>
            You have no events!
          </div>
        );
      }
      else {
        //console.log(this.props.e)


        //console.log(this.state.results)
        const EventBlock = this.state.results.map((result, idx) => {
          var tag_str = ""
          result.tags.forEach(function(tag) {
            tag_str = tag_str + tag + ", "
          })
          tag_str = tag_str.slice(0, tag_str.length - 2)
            return (
              <div className = "event_card">
              <Card>
                <Image src = 'https://www.philly.com/resizer/ISy83vim3ZwEHinTpXeE1uNfnbA=/1400x932/smart/arc-anglerfish-arc2-prod-pmn.s3.amazonaws.com/public/UIKMF6FODVHDLPIAJLELVD3EUI.jpg' />
                <Card.Content>
                    <Card.Header> {result.title} </Card.Header>
                    <Card.Meta> {result.creator} </Card.Meta>
                    <Card.Meta> {result.date} </Card.Meta>
                    <Card.Description> {result.introduction} </Card.Description>
                </Card.Content>
                <Card.Content>
                  <div className = "test">
                  {result.address}
                  </div> <br />
                  <Card.Meta> {tag_str} </Card.Meta>
                </Card.Content>
                <Card.Content>
                  <Button id = 'google' color = 'blue' type = 'input' onClick = {this.saveEventToGoogle}>Add to Google Calendar</Button>
                </Card.Content>
              </Card>
              </div>
            );



        })

        //console.log(this.state.results)
        //console.log(this.state.results.length)
        return (
          <div className = "event_block">
          {EventBlock}
          </div>
        )
      }

    }
  }

  export default EventList
