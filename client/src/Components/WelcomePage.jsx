import React, {Component} from 'react';
import '../Styles/WelcomePage.css'
import {Button, Card, Icon, Image} from 'semantic-ui-react';


class WelcomePage extends Component {
    state = {  }
    render() {
        return (
                <div className = "welcomepage_body">
                    <h1 className = "welcomepage_header">Welcome to UIUC Calendar!</h1>
                    <p className = "welcomepage_para"> This is a place where you can post events and find one.</p>
                    <p className = "welcomepage_para">Make the most use of college time and have fun! </p>
                    {
                    // <Card fluid key="5cc7d3c3fd04bd0024bd5e7a">
                    //   <Image src=".././images/Graduation.jpg" />
                    //   <Card.Content>
                    //     <Card.Header>University-wide Commencement Ceremony</Card.Header>
                    //     <Card.Meta>
                    //       <span className='date'>2019-05-11T14:30:00.000Z</span> <br/>
                    //       <span className='address'>Memorial Stadium</span>
                    //     </Card.Meta>
                    //     <Card.Description>Welcome from the Chancellor Commencement is an exciting time on every university campus. At Illinois, it acknowledges our students' academic achievements and reaffirms the continuing vitality of the campus. The granting of baccalaureate and graduate degrees is celebrated through long-standing traditions, as well as reflections on the opportunities ahead.  This website provides important details and information regarding graduation and the activities scheduled for Commencement Weekend, May 10-12, 2019. If you have questions after reading this material, please contact the Committee on Commencement at (217) 333-8834 or email the Commencement Office.  To each of our graduates, we hope you will participate in Commencement exercises as a way of sharing this great accomplishment with your fellow Illini, as well as with the families who have supported you on your journey to one of life's most significant milestones.  Congratulations,    Robert J. Jones Chancellor</Card.Description>
                    //   </Card.Content>
                    //   <Card.Content extra>
                    //     <a>
                    //       <Icon name='user' />
                    //       <span className='name'>
                    //         University of Illinois<br/>
                    //         uiuc@illinois.edu
                    //       </span>
                    //     </a>
                    //   </Card.Content>
                    //   <Card.Content>
                    //     <Button color = 'yellow' type = 'input' onClick = {this.saveEvent}>Save</Button>
                    //     <Button id = 'google' color = 'blue' type = 'input' onClick = {this.saveEventToGoogle}>Add to Google Calendar</Button>
                    //   </Card.Content>
                    // </Card>
                    }
                </div>
        );
    }
}

export default WelcomePage;
