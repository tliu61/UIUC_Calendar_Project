import React, { Component } from 'react';
import {Form, Input, Button} from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import '../../Styles/PostEventform.css'


class PostEventform extends Component {
    constructor(){
        super();

        this.state={
            Title: "",
            Date: "",
            Organizer: "",
            OrganizerContactInfo: "",
            Location: "",
            Tags: [],
            Introduction: "",
            ExternalLink: "",
            CoverPic: -1
        }

        this.tempTags = [];
        this.updateTitle = this.updateTitle.bind(this);
        this.updateDate = this.updateDate.bind(this);
        this.updateOrganizer = this.updateOrganizer.bind(this);
        this.updateOrganizerInfo= this.updateOrganizerInfo.bind(this);
        this.updateLocation = this.updateLocation.bind(this);
        this.updateTags = this.updateTags.bind(this);
        this.updateIntroduction = this.updateIntroduction.bind(this);
        this.updateExternalLink = this.updateExternalLink.bind(this);
        this.updateCoverPic = this.updateCoverPic.bind(this);
        this.postEvent = this.postEvent.bind(this);
    }

    updateOrganizerInfo(event){
        console.log(event.target.value)
        this.setState({
            OrganizerContactInfo:event.target.value
        })
    }

    updateCoverPic(event){
        console.log(event.target.id)
        this.setState({
            CoverPic:event.target.id
        })
    }

    updateExternalLink(event){
        console.log(event.target.value)
        this.setState({
            ExternalLink:event.target.value
        })
    }

    updateIntroduction(event){
        console.log(event.target.value)
        this.setState({
            Introduction:event.target.value
        })
    }

    updateTags(event){
        console.log(event.target.id)
        this.tempTags.push(event.target.id)
        console.log(this.tempTags)
    }

    updateLocation(event){
        console.log(event.target.value)
        this.setState({
            Location:event.target.value
        })
    }

    updateTitle(event){
        console.log(event.target.value);
        this.setState({
            Title: event.target.value
        })
    }

    updateDate(event){
        console.log(event.target.value);
        this.setState({
            Date: event.target.value
        })
    }

    updateOrganizer(event){
        console.log(event.target.value)
        this.setState({
            Organizer:event.target.value
        })
    }

    postEvent(event){
        // here need to call the db
        // based on db's response, direct to another page
        this.setState({
            Tags:this.tempTags
        })
        console.log(this.state.Title)
        console.log(this.state.Date)
        console.log(this.state.Organizer)
        console.log(this.state.OrganizerContactInfo)
        console.log(this.state.Tags)
        console.log(this.tempTags)
        console.log(this.state.Location)
        console.log(this.state.Introduction)
        console.log(this.state.ExternalLink)
        console.log(this.state.CoverPic)
    }
    render() { 
        const options = [
            {key : 1, text : 'choice 1', value : 1},
            {key : 2, text : 'choice 2', value :2 }
        ]
        return ( 
            <div className = "posteventform_body">
                <h1>Posting an event</h1>
                <Form>
                    <Form.Field required>
                        <label>Title</label>
                        <Input placeholder = 'Event Title' onChange = {this.updateTitle}/>
                    </Form.Field>
                    <Form.Field required>
                        <label>Date</label>
                        <Input placeholder = "yyyy-MM-dd" onChange = {this.updateDate}/>
                    </Form.Field>
                    <Form.Field required>
                        <label>Organizer</label>
                        <Input placeholder = "" onChange = {this.updateOrganizer}/>
                    </Form.Field>
                    <Form.Field>
                        <label>Organizer Contact Information</label>
                        <Input placeholder = "" onChange = {this.updateOrganizerInfo}/>
                    </Form.Field>
                    <Form.Field required>
                        <label>Location</label>
                        <Input placeholder = "" onChange = {this.updateLocation}/>
                    </Form.Field>
                    <Form.Field required>
                        <label> Tags (Pick Multiple)</label>
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
                    <Form.Field required>
                        <label>Introduction</label>
                        <Input placeholder = 'this event is about' onChange = {this.updateIntroduction}/>
                    </Form.Field>
                    <Form.Field>
                        <label>External Links related to the event </label>
                        <Input onChange = {this.updateExternalLink}/>
                    </Form.Field>
                    <Form.Field>
                        <label> Cover Photo (Pick One) </label>
                        <Button.Group>
                            <Button id = "default" onClick = {this.updateCoverPic}>Default-Group</Button>
                            <Button id = "nature" onClick = {this.updateCoverPic}>Nature</Button>
                            <Button id = "party" onClick = {this.updateCoverPic}>Party</Button>
                            <Button id ="school" onClick = {this.updateCoverPic}>School</Button>
                        </Button.Group>
                    </Form.Field>
                    <Button color = 'yellow' type = 'submit' onClick = {this.postEvent}>Post</Button>
                </Form>
            </div>
         );
    }
}
 
export default PostEventform;