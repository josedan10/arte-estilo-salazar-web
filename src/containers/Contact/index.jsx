import React from "react";
import { Label, Input, Textarea } from "@rebass/forms";
import styled from "styled-components";

import { Flex, Box, Button } from "rebass";

export default class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userData: {
        firstName: "",
        lastName: "",
        phone: "",
        email: "",
        msg: "",
        address: ""
      }
    };
  }

  handleSubmit() {}

  handleChange() {}

  render() {
    return (
      <FormContainer id="contacto">
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
          <Flex mb={3} flexWrap="wrap">
            <Box mb={3} width={[1, 1 / 2]} px={2}>
              <StyledLabel mb={2} htmlFor="name">
                Nombre
              </StyledLabel>
              <StyledInput
                id="firstName"
                name="firstName"
                defaultValue="Jane"
              />
            </Box>
            <Box width={[1, 1 / 2]} px={2}>
              <StyledLabel mb={2} htmlFor="name">
                Apellido
              </StyledLabel>
              <StyledInput id="lastName" name="lastName" defaultValue="Doe" />
            </Box>
          </Flex>
          <Flex mb={3} flexWrap="wrap">
            <Box mb={3} width={[1, 1 / 2]} px={2}>
              <StyledLabel mb={2} htmlFor="name">
                Correo
              </StyledLabel>
              <StyledInput
                id="email"
                name="email"
                defaultValue="micorreo@email.com"
              />
            </Box>
            <Box width={[1, 1 / 2]} px={2}>
              <StyledLabel mb={2} htmlFor="name">
                Teléfono
              </StyledLabel>
              <StyledInput
                id="phone"
                name="phone"
                defaultValue="584121714022"
              />
            </Box>
          </Flex>
          <Flex mb={3}>
            <Box width={[1]} px={2}>
              <StyledLabel mb={2} htmlFor="message">
                Háblanos acerca de tu espacio soñado
              </StyledLabel>
              <StyledTextarea name="message" id="message" rows="6" />
            </Box>
          </Flex>
          <Flex justifyContent="center" alignItems="center" flexWrap="wrap">
            <Box className="btn-box" mt={[0, 4]} px={2} mx={(0, ["auto"])}>
              <StyledButton>Enviar</StyledButton>
            </Box>
          </Flex>
        </Box>
      </FormContainer>
    );
  }
}

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
