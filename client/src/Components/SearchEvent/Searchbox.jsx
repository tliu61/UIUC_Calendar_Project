import React, { Component } from 'react';
import 'semantic-ui-css/semantic.min.css';
import '../../Styles/Searchbox.css';
import {Form, Input, Dropdown, Button} from 'semantic-ui-react';

class Searchbox extends Component {
    state = {  }
    render() { 
        return (
            <div className="searchevent_body">
                <h1>Search Events</h1>
                <Form>
                    <Form.Field>
                        <label>Event Title</label>
                        <Input placeholder=""/>
                    </Form.Field>
                    <Form.Field>
                        <label>Organizing Parties</label>
                        <Input placeholder = ""/>
                    </Form.Field>
                    <Form.Field>
                        <label>Events Date Range</label>
                            <Form.Field>
                                <label>From:</label>
                                <Input placeholder = "yyyy-MM-dd"/>
                            </Form.Field>
                            <Form.Field>
                                <label>To:</label>
                                <Input placeholder = "yyyy-MM-dd"/>
                            </Form.Field>
                    </Form.Field>
                    <Form.Field>
                        <label>Event tags</label>
                        <Dropdown text = "Academic">
                            <Dropdown.Menu>
                                <Dropdown.Item text = "other"/>
                            </Dropdown.Menu>
                        </Dropdown>
                    </Form.Field>
                    <Button type = 'submit'>Search</Button>
                </Form>
            </div>

          );
    }
}
 
export default Searchbox;