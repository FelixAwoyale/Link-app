import React, { useState } from "react";
import "../App.css";
import Footer from "../component/Footers";

export default function Contact() {
  //   const InitialValues = {
  //     firstName: " ",
  //     lastName: "",
  //     email: "",
  //     message: "",
  //     check: false,
  //   };

  //   const ref = useRef(null);

  const [FormValues, setFormValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
    check: false,
  });
  const handleChange = (e) => {
    // const { name, value } = e.target;
    setFormValues({ ...FormValues, [e.target.name]: e.target.value });
  };

  console.log(FormValues);

  const [formErrors, setFormErrors] = useState({});
  //   const [onSubmit, setonSubmit] = useState(false);
  const validate = (values) => {
    const errors = {};
    const regex = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/;
    if (!values.lastName) {
      errors.name = "Name is required !";
    }
    if (!values.firstName) {
      errors.name = "Name is required !";
    }
    if (!values.email) {
      errors.email = "Email is required !";
    } else if (!regex.test(values.email)) {
      errors.email = "This is not a valid email";
    }
    if (!values.message) {
      errors.message = "Message is required !";
    }
    if (!values.check) {
      errors.Subject = "Subject is required !";
    }
    return errors;
  };

  function SendEmail(e) {
    e.preventDefault();
    try {
      setFormErrors(validate(FormValues));
    } catch (errors) {
      console.log(errors);
    }

    e.target.reset();
  }
  return (
    <div className="ContactForm">
      <div className="container">
        <h2> Contact Me</h2>
        <p>Hi there, contact me to ask me about anything you have in mind.</p>
        <form className="Form" onSubmit={SendEmail}>
          <div className="form-group" style={{ marginBottom: "20px" }}>
            <div className="form-label" style={{ marginRight: "10px" }}>
              <label className="formNames">First Name</label>
              <input
                type="text"
                placeholder="Enter your first name"
                className="textForm"
                name="firstName"
                onChange={handleChange}
                defaultValue={FormValues.firstName}
              />
              <p className="error">{formErrors.firstName}</p>
            </div>
            <div className="form-label" style={{ marginBottom: "20px" }}>
              <label className="formNames">Last name</label>
              <input
                name="lastName"
                type="text"
                placeholder="Enter your last name"
                className="textForm"
                onChange={handleChange}
                defaultValue={FormValues.lastName}
                required
              />
              <p className="error">{formErrors.lastName}</p>
            </div>
          </div>
          <div className="form-label" style={{ marginBottom: "20px" }}>
            <label className="formNames">Email</label>
            <input
              name="email"
              type="text"
              placeholder="yourname@email.com"
              className="textForm"
              defaultValue={FormValues.email}
              onChange={handleChange}
              required
            />
            <p className="error">{formErrors.email}</p>
          </div>
          <div className="form-label" style={{ marginBottom: "20px" }}>
            <label className="formNames">Message</label>
            <textarea
              rows="5"
              cols="60"
              name="message"
              className="textForm"
              placeholder=" Send me a message and I'll reply you as soon as possible..."
              defaultValue={FormValues.message}
              onChange={handleChange}
              required
            ></textarea>
            <p className="errors">{formErrors.message}</p>
          </div>
          <div>
            <input
              name="check"
              type="checkbox"
              defaultValue={FormValues.check}
              onChange={handleChange}
              required
            />
            <label>
              You agree to providing your data to who may contact you.
            </label>
            <p className="error">{formErrors.check}</p>
          </div>
          <button className="btn_contact mt-10">Send Message</button>
        </form>

        {/* {onSubmit ? (
          <>
            <div>
              <h2>Your message is sent successfully !</h2>
            </div>
          </>
        ) : (
          <div />
        )} */}
        <Footer />
      </div>
    </div>
  );
}
