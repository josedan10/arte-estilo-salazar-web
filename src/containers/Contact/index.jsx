import React from "react";
import { Label, Input, Textarea } from "@rebass/forms";
import styled from "styled-components";
import emailJS from "emailjs-com";

import { Flex, Box, Button } from "rebass";

import config from '../../config';

export default class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formData: {
        name: "",
        address: "",
        phone: "",
        email: "",
        msg: ""
      },
      errors: {
        name: "",
        address: "",
        phone: "",
        email: "",
        msg: ""
      }
    };

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  validationIsPassed () {
    let isValid = true;
    let { formData } = this.state;
    let errors = {
      name: "",
      address: "",
      phone: "",
      email: "",
      msg: ""
    };
    
    // Validate name
    if (formData.name.trim() === '') {
      errors.name = "Por favor, indícanos tu nombre";
      isValid = false;
    }

    // Validate address
    if (formData.address.trim() === '') {
      errors.address = "Por favor, indícanos tu dirección";
      isValid = false;
    }

    // Validate email
    let emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/g
    if (
      formData.email.trim() === '' ||
      !emailRegex.test(formData.email)
    ) {
      errors.email = "Ingresa una dirección de correo válido";
      isValid = false;
    }

    let phoneRegex = /[0-9]{10,13}/g;
    
    if (
      formData.phone.trim() === '' ||
      !phoneRegex.test(formData.phone)
    ) {
      errors.phone = "Ingresa un número de teléfono válido";
      isValid = false;
    }

    if (formData.msg.trim() === '') {
      errors.msg = 'Por favor, dános algún detalle acerca de tu idea';
    }

    this.setState(prevState => ({
      ...prevState,
      errors
    }))

    return isValid
  }

  handleSubmit() {
    if (this.validationIsPassed()) {

      emailJS.send(
        config.emailJS.emailServiceID,
        config.emailJS.emailTemplateID,
        {...this.state.formData},
        config.emailJS.userID
      )
        .then(res => console.log(res))
        .catch(err => console.log(err))
    } else {

    }
  }

  handleChange ({ target }) {
    this.setState(prevState => ({
      ...prevState,
      formData: {
        ...prevState.formData,
        [target.name]: target.value
      }
    }))
  }

  render() {
    return (
      <FormContainer id="contacto">
        <div className="container wow fadeInLeft">
          <h1 className="section-title">¡Pide ya tu cotización!</h1>
          <Box
            as="form"
            onSubmit={e => {
              e.preventDefault();
              this.handleSubmit();
            }}
            py={3}
            className="contact-form"
          >
            <Flex flexWrap="wrap">
              <Box mb={4} width={[1, 1 / 2]} px={2} style={{position: 'relative'}}>
                <StyledLabel mb={2} htmlFor="name">
                  Nombre
                </StyledLabel>
                <StyledInput
                  className={this.state.errors.name && 'error'}
                  id="name"
                  name="name"
                  placeholder="Issa"
                  onChange={this.handleChange}
                />
                {this.state.errors.name && <StyledError>{this.state.errors.name}</StyledError>}
              </Box>
              <Box mb={4} width={[1, 1 / 2]} px={2} style={{position: 'relative'}}>
                <StyledLabel mb={2} htmlFor="address">
                  Dirección
                </StyledLabel>
                <StyledInput
                  className={this.state.errors.address && 'error'}
                  id="address"
                  name="address"
                  placeholder="Altamira" 
                  onChange={this.handleChange}
                />
                {this.state.errors.address && <StyledError>{this.state.errors.address}</StyledError>}
              </Box>
            </Flex>
            <Flex flexWrap="wrap">
              <Box mb={4} width={[1, 1 / 2]} px={2} style={{position: 'relative'}}>
                <StyledLabel mb={2} htmlFor="email">
                  Correo
                </StyledLabel>
                <StyledInput
                  className={this.state.errors.email && 'error'}
                  id="email"
                  name="email"
                  placeholder="micorreo@email.com"
                  onChange={this.handleChange}
                />
                {this.state.errors.email && <StyledError>{this.state.errors.email}</StyledError>}
              </Box>
              <Box mb={4} width={[1, 1 / 2]} px={2} style={{position: 'relative'}}>
                <StyledLabel mb={2} htmlFor="phone">
                  Teléfono
                </StyledLabel>
                <StyledInput
                  className={this.state.errors.phone && 'error'}
                  id="phone"
                  name="phone"
                  placeholder="584121111111"
                  onChange={this.handleChange}
                />
                {this.state.errors.phone && <StyledError>{this.state.errors.phone}</StyledError>}
              </Box>
            </Flex>
            <Flex>
              <Box mb={4} width={[1]} px={2} style={{position: 'relative'}}>
                <StyledLabel mb={2} htmlFor="msg">
                  Háblanos acerca de tu espacio soñado
                </StyledLabel>
                <StyledTextarea
                  className={this.state.errors.msg && 'error'}
                  name="msg"
                  id="msg"
                  rows="6"
                  onChange={this.handleChange}
                />
                {this.state.errors.msg && <StyledError>{this.state.errors.msg}</StyledError>}
              </Box>
            </Flex>
            <Flex justifyContent="center" alignItems="center" flexWrap="wrap">
              <Box className="btn-box" mt={[0, 4]} px={2} mx={(0, ["auto"])}>
                <StyledButton>Enviar</StyledButton>
              </Box>
            </Flex>
          </Box>
        </div>
      </FormContainer>
    );
  }
}

const StyledError = styled.span`
  position: absolute;
  bottom: -22px;
  color: #ed3d3d;
`

const FormContainer = styled.section`
  background: linear-gradient(to right, #fff, ${props => props.theme.bgColor});
  .section-title {
    text-align: right;
    color: ${props => props.theme.primaryColor};
  }

  .btn-box {
    @media (max-width: 576px) {
      width: 100%;
    }
  }

  .contact-form {
    max-width: 1200px;
    margin: 0 auto;

    @media (max-width: 768px) {
      padding: 1rem;
    }
  }
`;

const StyledButton = styled(Button)`
  background-color: ${props => props.theme.primaryColor};
  color: ${props => props.theme.secondaryColor} !important;
  padding: 1rem 8rem !important;
  font-size: 1.3rem !important;
  box-shadow: 0px 5px 5px #606060;

  @media (max-width: 576px) {
    width: 100%;
    padding: 1rem 0 !important;
  }

  &:hover {
    cursor: pointer;
  }
`;

const StyledInput = styled(Input)`
  border: 1px solid ${props => props.theme.primaryColor} !important;
  color: ${props => props.theme.primaryColor} !important;
  box-shadow: 0px 5px 5px #c3c3c3 inset;

  &.error {
    color: #ed3d3d !important;
  }
`;

const StyledLabel = styled(Label)`
  color: ${props => props.theme.primaryColor} !important;
  font-weight: 500;
`;
const StyledTextarea = styled(Textarea)`
  resize: vertical;
  border: 1px solid ${props => props.theme.primaryColor} !important;
  color: ${props => props.theme.primaryColor} !important;
  box-shadow: 0px 5px 5px #c3c3c3 inset;
`;
