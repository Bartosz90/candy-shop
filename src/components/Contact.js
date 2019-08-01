import React, { Component } from "react";
import "../styles/contact.sass";
import donut from "../images/donut.png";

class Contact extends Component {
  state = {
    name: "",
    email: "",
    message: "",
    sendBtnPressed: false
  };
  handleFormChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
    console.log(this.state);
  };
  handleSendBtn = () => {
    this.setState({ sendBtnPressed: true });
    setTimeout(() => {
      this.setState({ sendBtnPressed: false });
    }, 1500);
  };
  render() {
    return (
      <section className="contact main-section">
        <div
          className="contact-donut"
          style={{
            backgroundImage: `url(${donut})`
          }}
        >
          <div className="top-lip-contact" />
          <div className="bot-lip-contact" />
          <div className="contact-cloud1" />
          <div className="contact-cloud2">Feel free to contact us!</div>
        </div>
        <form className="form">
          <input
            value={this.state.name}
            name="name"
            type="text"
            placeholder="Your name"
            onChange={this.handleFormChange}
          />
          <input
            value={this.state.email}
            name="email"
            type="email"
            placeholder="Email"
            onChange={this.handleFormChange}
          />
          <textarea
            value={this.state.message}
            name="message"
            placeholder="Message"
            onChange={this.handleFormChange}
          />
          <button
            type="button"
            className={this.state.sendBtnPressed ? "send active" : "send"}
            onClick={this.handleSendBtn}
          >
            Send
          </button>
        </form>
      </section>
    );
  }
}

export default Contact;
