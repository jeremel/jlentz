import React from 'react';
import styled from "styled-components"

const FormWrapper = styled.div`
  max-width: 500px;
  padding-top: 1.5rem;
  padding-bottom: 1.5rem;
  margin: auto;

  form{
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 1.3rem;
  }

  form label{
    display: block;
  }

  label .textarea {
    grid-column: 1 / 3;
  }

  form textarea {
    width: 100%;
    padding: 0.25rem 1.5rem 1.5rem 0.25rem;
  }

  form input {
    width: 100%;
    padding: .5rem;
    border: 1px solid lightgrey;
  }

  form button {
    width: 8rem;
    height: 2rem;
    background: teal;
    color: #fff;
    border: 0;
    text-transform: uppercase;
  }

  form button:hover, button:focus {
    background: aquamarine;
    color: teal;
    outline: 0;
    transition: background-color 1s ease-out;
    cursor: pointer;
  }
`


const Form = () => {
  return (
    <FormWrapper>
      <form name="contact" method="POST" data-netlify="true">
        <label>Your Name <input type="text" name="name" placeholder="Your Name" /></label>   
        <label>Your Email <input type="email" name="email" placeholder="Your Email" /></label>
        <label className="textarea">Message <textarea name="message" placeholder="Please leave a message here"></textarea></label>
        <button type="submit">Submit</button>
      </form>
    </FormWrapper>
  );
};

export default Form;