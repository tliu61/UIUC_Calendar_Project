import React, { Component } from 'react';
import 'semantic-ui-css/semantic.min.css';
import '../../Styles/Searchbox.css';
import {Form, Input, Button} from 'semantic-ui-react';
import DatePicker from 'react-datepicker';

class Searchbox extends Component {
    constructor(){
        super();

        this.state = {
            Title:"",
            Organizer:"",
            DateFrom:"",
            DateEnd:"",
            Tags:[]
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

    updateOrganizer(event){
        console.log(event.target.value)
        this.setState({
            Organizer:event.target.value
        })
    }
    updateTags(event){
        console.log(event.target.id)
        this.tempTags.push(event.target.id)
    }

    updateDateFrom(event){
        console.log(event)
        this.setState({
            DateFrom:event
        })
    }
    updateDateEnd(event){
        console.log(event)
        this.setState({
            DateEnd:event
        })
    }

    updateTitle(event){
        console.log(event.target.value)
        this.setState({
            Title:event.target.value
        })
    }
    postSearch(event){
        console.log(this.state.Title)
        console.log(this.state.Organizer)
        console.log(this.state.DateFrom)
        console.log(this.state.DateEnd)
        console.log(this.tempTags)
    }
    feelLucky(event){
        console.log("update with top 10 events")
    }
    render() {
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
                            <Form.Field>
                                <label>From:</label>
                                  <DatePicker
                                    selected={this.state.DateFrom}
                                    onChange={this.updateDateFrom}
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
                                    selected={this.state.DateEnd}
                                    onChange={this.updateDateEnd}
                                    showTimeSelect
                                    timeFormat="HH:mm"
                                    timeIntervals={30}
                                    dateFormat="MMMM d, yyyy h:mm aa"
                                    timeCaption="time"
                                />
                            </Form.Field>
                    </Form.Field>
                    <Form.Field>
                        <label>Event tags</label>
                        <Button.Group>
                            <Button id = "academic" onClick = {this.updateTags}>Academic</Button>
                            <Button id = "chill" onClick = {this.updateTags}>Chill</Button>
                            <Button id = "sport" onClick = {this.updateTags}>Sport</Button>
                            <Button id = "movie" onClick = {this.updateTags}> Movie</Button>
                            <Button id = "food" onClick = {this.updateTags}>Food</Button>
                            <Button id = "outside" onClick = {this.updateTags}>Outside</Button>
                            <Button id = "meetup" onClick = {this.updateTags}>Meetup</Button>
                            <Button id = "adventure" onClick = {this.updateTags}>Adventure</Button>
                            <Button id = "thought" onClick = {this.updateTags}>Thought</Button>
                            <Button id = "reading" onClick = {this.updateTags}>Reading</Button>
                            <Button id = "party" onClick = {this.updateTags}>Party</Button>
                        </Button.Group>
                    </Form.Field>
                    <Button color = 'yellow' type = 'submit' onClick = {this.postSearch}>Search</Button>
                    <Button color = 'yellow' type = 'submit' onClick = {this.feelLucky}>I'm Feeling Lucky</Button>
                </Form>
            </div>

          );
    }
}

export default Searchbox;
