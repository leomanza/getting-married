import React from 'react'
import {Form, FormGroup, Col, FormControl, Button} from 'react-bootstrap'


class Confirmacion extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: undefined,
      numberOfGuests: undefined,
      email: undefined,
      message: undefined
    };

    // this.handleInputChange = this.handleInputChange.bind(this);
  }
  change(e){
      const val = e.target.value;
      this.setState({
          inputValue : val
      })
  }
  render() {
    return (
     <Form horizontal>
        <FormGroup controlId="formHorizontalName">
          <Col sm={12}>
            <FormControl type="name" placeholder="Tu Nombre" value={this.state.name} />
          </Col>
        </FormGroup>
        <FormGroup controlId="formHorizontalGuests">          
          <Col sm={12}>
            <FormControl type="number" placeholder="Numero de invitados" value={this.state.numberOfGuests} />
          </Col>
        </FormGroup>
        <FormGroup controlId="formHorizontalEmail">          
          <Col sm={12}>
            <FormControl type="email" placeholder="Tu email" value={this.state.email} />
          </Col>
        </FormGroup>
        <FormGroup controlId="formHorizontalMessage">          
          <Col sm={12}>
            <FormControl componentClass="textarea" type="textarea" placeholder="Dejanos un mensaje" value={this.state.message} />
          </Col>
        </FormGroup>
        <FormGroup>
          <Col smOffset={2} sm={10}>
            <Button type="submit">
              Asistire
            </Button>
            <Button type="submit">
              No Asistire
            </Button>
          </Col>
        </FormGroup>
      </Form>
    )
  }
};

export default Confirmacion