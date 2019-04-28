import React, { Component } from 'react';
import 'semantic-ui-css/semantic.min.css';
import '../../Styles/Searchbox.css';
import {Link} from 'react-router-dom'
import {Form, Input, Button, Dropdown} from 'semantic-ui-react';
import DatePicker from 'react-datepicker';
import axios from 'axios';

import "react-datepicker/dist/react-datepicker.css";

const tags = [
  { key: 'academic', text: 'Academic', value: 'academic' },
  { key: 'chill', text: 'Chill', value: 'chill' },
  { key: 'sport', text: 'Sport', value: 'sport' },
  { key: 'movie', text: 'Movie', value: 'movie' },
  { key: 'food', text: 'Food', value: 'food' },
  { key: 'outside', text: 'Outside', value: 'outside' },
  { key: 'meetup', text: 'Meetup', value: 'meetup' },
  { key: 'adventure', text: 'Adventure', value: 'adventure' },
  { key: 'thought', text: 'Thought', value: 'thought' },
  { key: 'reading', text: 'Reading', value: 'reading' },
  { key: 'party', text: 'Party', value: 'party' }
]

class Searchbox extends Component {
    constructor(){
        super();

        var now = new Date();

        this.state = {
            options: tags,
            title:"",
            organizer:"",
            dateFrom: now,
            dateEnd: new Date(now.getTime() + 608800000), // Default to a week from today
            tags:[],
            searched: false
        }

        this.tempTags = []
        this.updateTitle = this.updateTitle.bind(this)
        this.updateOrganizer = this.updateOrganizer.bind(this)
        this.updateDateFrom = this.updateDateFrom.bind(this)
        this.updateDateEnd = this.updateDateEnd.bind(this)
        this.updateTags = this.updateTags.bind(this)
        this.postSearch = this.postSearch.bind(this)
        this.feelLucky = this.feelLucky.bind(this)
    }

    resetSearch(event){
        var now = new Date();
        this.setState({
            title:"",
            organizer:"",
            dateFrom: now,
            dateEnd: new Date(now.getTime() + 608800000),
            tags:[],
            searched : false
        })
    }

    updateOrganizer(event){
        console.log(event.target.value)
        this.setState({
            organizer:event.target.value
        })
    }

    handleAddition(event, {v}) {
      console.log(event);
      console.log(v);
      if (v !== undefined) {
        console.log(v);
        this.setState({
          options: [{text: v, value: v.toLowerCase(), key: v.toLowerCase()}, ...this.state.options]
        })
      }
    }
    updateTags(event, {value}) {
        console.log(value);
        this.setState({ tags: value })
    }

    updateDateFrom(event){
        console.log(event)
        this.setState({
            dateFrom:event
        })
    }
    updateDateEnd(event){
        console.log(event)
        this.setState({
            dateEnd:event
        })
    }

    updateTitle(event){
        console.log(event.target.value)
        this.setState({
            title:event.target.value
        })
    }
    postSearch(event, child, limit){
        var where = {
            "date": { "$gt": this.state.dateFrom, "$lt": this.state.dateEnd },
        };
        if (this.state.title) {
          where["title"] = { "$regex": '.*' + this.state.title + '.*', "$options": 'si'}
        }
        if (this.state.organizer) {
          where["creator"] = { "$regex": '.*' + this.state.organizer + '.*', "$options": 'si'}
        }
        if (this.state.tags.length) {
          where["tags"] = { "$all": this.state.tags }
        }
        console.log(JSON.stringify(where));
        console.log(limit);
        axios.get('http://localhost:4000/api/events', {
          params: {
            where: JSON.stringify(where),
            limit: limit ? limit : 0
          }
        })
          .then(res => this.setState({
            events: res.data.data,
            searched: true
          }, () => console.log(this.state.events)))
          .catch(err => {
            console.log(err.response)
          })
    }

    feelLucky(event, child){
        this.postSearch(event, child, 10);
    }

    render() {
        if(this.state.searched === false){
        return (
            <div className="searchevent_body">
                <h1>Search Events</h1>
                <Form>
                    <Form.Field>
                        <label>Event Title</label>
                        <Input placeholder="" onChange = {this.updateTitle}/>
                    </Form.Field>
                    <Form.Field>
                        <label>Organizing Parties</label>
                        <Input placeholder = "" onChange = {this.updateOrganizer}/>
                    </Form.Field>
                    <Form.Field>
                        <label>Events Date Range</label>
                            <div className="two fields">
                                <Form.Field>
                                    <label>From:</label>
                                      <DatePicker
                                        selected={this.state.dateFrom}
                                        onChange={this.updateDateFrom}
                                        inline
                                        showTimeSelect
                                        timeFormat="HH:mm"
                                        timeIntervals={30}
                                        dateFormat="MMMM d, yyyy h:mm aa"
                                        timeCaption="time"
                                    />
                                </Form.Field>
                                <Form.Field>
                                    <label>To:</label>
                                      <DatePicker
                                        selected={this.state.dateEnd}
                                        onChange={this.updateDateEnd}
                                        inline
                                        showTimeSelect
                                        timeFormat="HH:mm"
                                        timeIntervals={30}
                                        dateFormat="MMMM d, yyyy h:mm aa"
                                        timeCaption="time"
                                    />
                                </Form.Field>
                            </div>
                    </Form.Field>
                    <Form.Field>
                        <label>Event tags</label>
                        <Dropdown placeholder='Tags'
                          search fluid multiple selection
                          allowAdditions additionLabel='Custom Tag: '
                          options={this.state.options}
                          value={this.state.tags}
                          onAddItem={this.handleAddition}
                          onChange={this.updateTags} />
                    </Form.Field>
                    <Button color = 'yellow' type = 'submit' onClick = {this.postSearch}>Search</Button>
                    <Button color = 'yellow' type = 'submit' onClick = {this.feelLucky}>I'm Feeling Lucky</Button>
                </Form>
            </div>

          );
    }else{
        var eventComponents = this.state.events.map((e) => {
          return (
          <tr className="event" key={e._id}>
            <td className="event_title">{e.title}</td>
            <td className="event_creator">{e.creator}</td>
            <td className="event_date">{e.date}</td>
            <td className="event_address">{e.address}</td>
          </tr>);
        });
        return(
            <div className = "searchevent_body">
                <table>
                  <thead>
                    <tr>
                      <th>Title</th>
                      <th>Creator</th>
                      <th>Date</th>
                      <th>Address</th>
                    </tr>
                  </thead>
                  <tbody>
                    {eventComponents}
                  </tbody>
                </table>
                <Link to='/findevent' onClick = {this.resetSearch}>Re-Search Events</Link>
            </div>
        )
    }
}

}

export default Searchbox;
