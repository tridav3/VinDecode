import React from "react";
import styled from "styled-components";
import { COLORS, FONTS, Button } from "./Styling";

const Contact = () => {
  return (
    <Container>
      <Header>Lets Book You In</Header>
      <WrapperForContact>
        <ContactDetails>
          <ContactDetailItem>
            Email:
            <Email href="mailto:tridav3@gmail.com ">bookhere@gmail.com</Email>
          </ContactDetailItem>
          <ContactDetailItem>
            Phone:
            <span onClick={() => (window.location.href = "tel:123-456-7890")}>
              (123) 456-7890
            </span>
          </ContactDetailItem>

          <ContactDetailItem>
            Address:
            <Address>
              <div>Harvey Ave</div>
              <div>Kelowna, BC, V1W1L4</div>
            </Address>
          </ContactDetailItem>
        </ContactDetails>
        <ContactForm>
          <FormTitle>Send us a message</FormTitle>
          <Form>
            <FormGroup>
              <FormLabel>Name</FormLabel>
              <FormInput type="text" id="name" name="name" />
            </FormGroup>
            <FormGroup>
              <FormLabel>Email</FormLabel>
              <FormInput type="email" id="email-input" name="email" />
            </FormGroup>
            <FormGroup>
              <FormLabel>Message</FormLabel>
              <FormTextarea id="message" name="message"></FormTextarea>
            </FormGroup>
            <FormButton type="submit">Send</FormButton>
          </Form>
        </ContactForm>
      </WrapperForContact>
    </Container>
  );
};

export default Contact;

const Container = styled.div`
  min-height: calc(100vh - 250px);
  background-color: ${COLORS.MutedGreen};
  overflow-y: auto;
`;

const Header = styled.h1`
  text-align: center;
  font-size: 40px;
  color: ${COLORS.OliveDrab};
`;

const WrapperForContact = styled.div`
  display: flex;
  flex-wrap: column;
  justify-content: space-evenly;
  margin: 0 auto;
  width: 70%;
`;

const ContactDetails = styled.div`
  width: 45%;
  background-color: ${COLORS.White};
  border-radius: 5px;
  padding: 20px;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.25);
  margin-bottom: 20px;
  font-family: ${FONTS.default};
  height: 320px;
`;

const Email = styled.a`
  font-family: ${FONTS.default};
`;

const ContactDetailItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
`;

const Address = styled.div`
  margin-top: 5px;
`;

const ContactForm = styled.div`
  width: 45%;
  background-color: ${COLORS.White};
  border-radius: 5px;
  padding: 20px;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.25);
  font-family: ${FONTS.default};
  height: 320px;
`;

const FormTitle = styled.h2`
  text-align: center;
  color: ${COLORS.OliveDrab};
  font-family: ${FONTS.default};
  font-size: 20px;
  margin-bottom: 20px;
`;

const Form = styled.form``;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
`;

const FormLabel = styled.label`
  margin-bottom: 5px;
  font-family: ${FONTS.default};
`;

const FormInput = styled.input`
  padding: 10px;
  border: 1px solid ${COLORS.OliveDrab};
  border-radius: 5px;
  font-family: ${FONTS.SansSerif};
  font-size: 16px;
  color: ${COLORS.OliveDrab};
  outline: none;

  &:focus {
    border-color: ${COLORS.BurntOrange};
  }
`;

const FormTextarea = styled.textarea`
  padding: 10px;
  border: 1px solid ${COLORS.OliveDrab};
  border-radius: 5px;
  font-family: ${FONTS.SansSerif};
  font-size: 16px;
  color: ${COLORS.OliveDrab};
  resize: vertical;
  outline: none;

  &:focus {
    border-color: ${COLORS.BurntOrange};
  }
`;
const FormButton = styled(Button)``;
