import React, { Component } from 'react';
import {Form, Input, Button} from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import '../../Styles/PostEventform.css'
import {Link} from 'react-router-dom'
import axios from 'axios';
import ImagePicker from 'react-image-picker';
import 'react-image-picker/dist/index.css';

//import images from local
import img1 from './../../images/Default-Group.jpg';
import img2 from './../../images/Nature.jpg';
import img3 from './../../images/Party.jpg';
import img4 from './../../images/School.JPG';
import img5 from './../../images/Academics.jpg';
import img6 from './../../images/Chill.jpg';
import img7 from './../../images/Sport.jpg';
import img8 from './../../images/Graduation.jpg';

const imageList = [img1, img2, img3, img4, img5, img6, img7, img8];


class PostEventform extends Component {
    constructor(){
        super();

        this.state={
            Title: "",
            NewTag: "",
            Date: "",
            Organizer: "",
            OrganizerContactInfo: "",
            Location: "",
            Tags: [],
            CustomTags:[],
            Introduction: "",
            ExternalLink: "",
            CoverPic: null,
            successPosted: false,
            posted:false
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
        this.postEvent = this.postEvent.bind(this);

        this.onPick = this.onPick.bind(this);
        
        this.addCustomTag = this.addCustomTag.bind(this);
        this.updateCustomTag = this.updateCustomTag.bind(this);
        this.deleteCustomTag = this.deleteCustomTag.bind(this);
        this.updateNewTag = this.updateNewTag.bind(this);
    }

    onPick(image) {
      console.log(image);
      this.setState({
        CoverPic:image
      })
    }

    resetPost(event){
        this.setState({
            Title: "",
            Date: "",
            Organizer: "",
            OrganizerContactInfo: "",
            Location: "",
            Tags: [],
            Introduction: "",
            ExternalLink: "",
            CoverPic: -1,
            successPosted: false,
            posted:false
        })
    }

    updateOrganizerInfo(event){
        console.log(event.target.value)
        this.setState({
            OrganizerContactInfo:event.target.value
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
        if(!event.target.classList.contains("active")){//check whether active button
            console.log("add:",event.target.value)
            this.tempTags.push(event.target.value)
            console.log(this.tempTags)
            event.target.classList.add("active");
        }else{
            console.log("remove:",event.target.value)
            this.tempTags.splice(this.tempTags.indexOf(event.target.value),1);
            console.log(this.tempTags)
            event.target.classList.remove("active");
        }

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
    
        addCustomTag(event){
        if(event.currentTarget.getAttribute("value")!==''){
            console.log("Add NewTag:",event.currentTarget.getAttribute("value"));
            this.setState({CustomTags:this.state.CustomTags.concat([event.currentTarget.getAttribute("value")]),NewTag:""});
        }
    }

    updateNewTag(event){
        console.log("Update NewTag:",event.target.value);
        this.setState({NewTag:event.target.value});
    }

    deleteCustomTag(event){
        console.log("Delete CustomTag:",event.currentTarget.getAttribute("value"));
        //console.log("Delete Index:",this.state.CustomTags.indexOf(event.currentTarget.getAttribute("value")));
        this.setState({CustomTags:this.state.CustomTags.filter((value,_) => value !== event.currentTarget.getAttribute("value"))});
    }
    
    updateCustomTag(event){
        console.log("OldValue:",event.target.defaultValue);
        this.setState({CustomTags:this.state.CustomTags.map((value,_) => value === event.target.defaultValue?event.target.value:value)});
    }

    createCustomizedTagGroup = () => {
        let group = []
        console.log("Render NewTag:",this.state.NewTag);
        console.log("Custom Tags:",this.state.CustomTags);
        //console.log("Temp Custom Tags:",this.tempCustomTags);
        for (var i in this.state.CustomTags){
            let customTag = this.state.CustomTags[i];
            console.log(i,":",customTag);
            group.push(
                <div class="ui right labeled icon input" style={{display:'inline'}}>
                    <i class="minus square link icon" value = {customTag} onClick = {this.deleteCustomTag}></i>
                    <input type="text" value={customTag} onChange = {this.updateCustomTag}/>
                </div>

            );
        }

        group.push(
            <div class="ui right labeled left icon input" style={{display:'inline'}}>
              <i class="tags icon"></i>
              <input type="text" value= {this.state.NewTag} onChange = {this.updateNewTag}/>
              <a class="ui tag label" value = {this.state.NewTag} onClick = {this.addCustomTag}>
                Add Tag
              </a>
            </div>
        );
        console.log(group);
        return group;
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

        var new_event = {
          tags: this.state.tempTags.concat(this.state.CustomTags),
          title: this.state.Title,
          email: this.state.OrganizerContactInfo,
          date: this.state.Date,
          creator: this.state.Organizer,
          address: this.state.Location,
          introduction: this.state.Introduction,
          coverpicture: this.state.CoverPic,
        }

        axios.post('http://localhost:4000/api/events', new_event)
          .then(res => {
            console.log(res.data)
            this.setState({
                posted : true,
                successPosted:true
            })
          })
          .catch(err => {
            console.log(err.response)
            this.setState({
                posted: true,
                successPosted:false
            })
          })
    }
    render() {
        if(this.state.posted === false){
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
                        <label>Organizer Email</label>
                        <Input placeholder = "" onChange = {this.updateOrganizerInfo}/>
                    </Form.Field>
                    <Form.Field required>
                        <label>Location</label>
                        <Input placeholder = "" onChange = {this.updateLocation}/>
                    </Form.Field>
                    <Form.Field required>
                        <label> Tags (Pick Multiple)</label>
                        <Button.Group>
                            <Button value = "academic" onClick = {this.updateTags} >Academic</Button>
                            <Button value = "chill" onClick = {this.updateTags}>Chill</Button>
                            <Button value= "sport" onClick = {this.updateTags}>Sport</Button>
                            <Button vakue = "movie" onClick = {this.updateTags}> Movie</Button>
                            <Button value = "food" onClick = {this.updateTags}>Food</Button>
                            <Button value = "outside" onClick = {this.updateTags}>Outside</Button>
                            <Button value = "meetup" onClick = {this.updateTags}>Meetup</Button>
                            <Button value = "adventure" onClick = {this.updateTags}>Adventure</Button>
                            <Button value = "thought" onClick = {this.updateTags}>Thought</Button>
                            <Button value = "reading" onClick = {this.updateTags}>Reading</Button>
                            <Button value = "party" onClick = {this.updateTags}>Party</Button>
                        </Button.Group>
                        <div>
                            {this.createCustomizedTagGroup()}
                        </div>
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
                        <label> Cover Photo </label>
                        <ImagePicker
                          images={imageList.map((image, i) => ({src: image, value: i}))}
                          onPick={this.onPick}
                        />
                    </Form.Field>
                    <Button color = 'yellow' type = 'submit' onClick = {this.postEvent}>Post</Button>
                </Form>
            </div>
         );
        }else{
            if(this.state.successPosted === true){
                return (
                    <div className = "posteventresponse_body">
                        <h1> Successfully posted! </h1>
                        <h3> Check your event in your profile</h3>
                        <Link to ='/myprofile'>
                            My profile
                        </Link>
                        <h3> Or check out other events! </h3>
                        <Link to ='/'>
                            Back To Home
                        </Link>
                    </div>
                )
            }else{
                return(
                    <div className="posteventresponse_body">
                        <h1> Failed to Post Event</h1>
                        <h3> Make sure that you are logged in to your account before posting event!</h3>
                        <Link to='/login'>Login To Post</Link>
                        <h3> If you don't have an account, sign up to post event! </h3>
                        <Link to ='/signup'>Sign Up</Link>
                        <h3> If you already logged in, please make sure all required fields are filled up and try again</h3>
                        <Link to='/postevent' onClick = {this.resetPost}>Back To Post Again</Link>
                    </div>
                )
            }
        }
    }
}

export default PostEventform;
