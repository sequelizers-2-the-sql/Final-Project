//below is temp
// eslint-disable-next-line
import React, { Component } from "react";
import API from "../utils/API";
import { Container, Row, Col } from "../components/Container";
import { ConcertDetail } from "../components/ConcertDetail/ConcertDetail";
class MyEvents extends Component {
  state = {
    event: {},
    concerts: []
  };


  componentDidMount() {
    API.getConcert(this.props.match.params.id)
      .then(res => {
        this.setState({ event: res.data, concerts: res.data.attendees });
        console.log(this.state.event.artist)
      })
      .catch(err => console.log(err));
  }

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };


  render() {
    return (<>
      <Container>
        <Row>
          <Col size="md-12">
            <ConcertDetail event={this.state.event} concert={this.state.concerts}/>
          </Col>
        </Row>
      </Container>
    </>
    )
  };
}

export default MyEvents;