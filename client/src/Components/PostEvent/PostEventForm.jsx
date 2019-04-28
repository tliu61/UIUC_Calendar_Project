import React, { Component } from 'react';
import {Form, Input, Dropdown, Button} from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import '../../Styles/PostEventform.css'

class PostEventform extends Component {
    state = {  }
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
                        <Input placeholder = 'Event Title'/>
                    </Form.Field>
                    <Form.Field required>
                        <label>Date</label>
                        <Input placeholder = "yyyy-MM-dd" />
                    </Form.Field>
                    <Form.Field required>
                        <label>Organizer</label>
                        <Input placeholder = ""/>
                    </Form.Field>
                    <Form.Field>
                        <label>Organizer Contact Information</label>
                        <Input placeholder = ""/>
                    </Form.Field>
                    <Form.Field required>
                        <label>Location</label>
                        <Input placeholder = ""/>
                    </Form.Field>
                    <Form.Field required>
                        <label> Tags </label>
                        <Dropdown text = 'Academic'>
                            <Dropdown.Menu>
                                <Dropdown.Item text = 'new'/>
                            </Dropdown.Menu>
                        </Dropdown>
                    </Form.Field>
                    <Form.Field required>
                        <label>Introduction</label>
                        <Input placeholder = 'this event is about'/>
                    </Form.Field>
                    <Form.Field>
                        <label>External Links related to the event </label>
                        <Input/>
                    </Form.Field>
                    <Form.Field>
                        <label> Cover Photo </label>
                        <Dropdown text = 'Default'>
                            <Dropdown.Menu>
                                <Dropdown.Item text = 'Default'/>
                            </Dropdown.Menu>
                        </Dropdown>
                    </Form.Field>
                    <Button type = 'submit'>Post</Button>
                </Form>
            </div>
         );
    }
}

// click on post, connect to the db 

 
export default PostEventform;