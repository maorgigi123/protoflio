import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import styled from "styled-components";
import Map from "./Map";
const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
`;

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  gap: 60px;

  @media only screen and (max-width: 1024px) and (min-width: 769px) {
    position: relative;
    align-items: center;
    justify-content: center;
  }
`;

const Left = styled.div`
  margin-left: 20px;
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  @media only screen and (max-width: 768px) {
    justify-content: center;
  }
  @media only screen and (max-width: 1024px) and (min-width: 769px) {
    z-index: 1;
    position: absolute;
  }
`;

const Title = styled.h1`
  font-weight: 200;
`;

const Form = styled.form`
  width: 500px;
  display: flex;
  flex-direction: column;
  gap: 25px;

  @media only screen and (max-width: 768px) {
    width: 300px;
  }
`;

const Input = styled.input`
  padding: 20px;
  background-color: #e8e6e6;
  border: none;
  border-radius: 5px;
`;

const TextArea = styled.textarea`
  padding: 20px;
  border: none;
  border-radius: 5px;
  background-color: #e8e6e6;
`;

const Button = styled.button`
  background-color: #da4ea2;
  color: white;
  border: none;
  font-weight: bold;
  cursor: pointer;
  border-radius: 5px;
  padding: 20px;
`;

const Right = styled.div`
  flex: 1;
  @media only screen and (max-width: 768px) {
    display: none;
  }

  @media only screen and (max-width: 1024px) and (min-width: 769px) {
    display: block;
    position: absolute;
    right: 0;
    width: 100%;
    z-index: 0;
    height: 100%;
  }

`;

const Contact = () => {
  const ref = useRef();
  const [success, setSuccess] = useState(null);
  const [load,setLoad] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if(load)
      return
    setLoad(true)
    setSuccess(false)
    if(!(ref.current.name.value.length > 0) || !(ref.current.email.value.length > 0) || !(ref.current.message.value.length > 0))
    {
      alert('cant send email with empty value')
      return
    }
    emailjs
      .sendForm(
        
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_template_id,
        ref.current,
        import.meta.env.VITE_public_key
      )
      .then(
        (result) => {
          ref.current.name.value = '';
          ref.current.email.value = '';
          ref.current.message.value = '';
          console.log(result.text);
          setSuccess(true);
          setLoad(false)
        },
        (error) => {
          console.log(error.text);
          setSuccess(false);
          setLoad(false)
        }
      );
  };
  return (
    <Section id='contact'>
      <Container>
        <Left>
          <Form ref={ref} onSubmit={handleSubmit}>
            <Title>Contact Us</Title>
            <Input placeholder="Name" name="name" required/>
            <Input placeholder="Email" name="email" required/>
            <TextArea
              required
              placeholder="Write your message"
              name="message"
              rows={10}
            />
            <Button type="submit">Send</Button>
            {success &&
              "Your message has been sent. We'll get back to you soon :)"}
          </Form>
        </Left>
        <Right>
          <Map />
        </Right>
      </Container>
    </Section>
  );
};

export default Contact;