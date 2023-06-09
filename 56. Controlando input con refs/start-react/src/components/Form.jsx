import React, { Component, createRef } from "react";
import "./form.css";

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  name = createRef();

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.name.current.value);
  };

  render() {
    return (
      <form className="form" onSubmit={this.handleSubmit}>
        <h1>Forms</h1>
        <div className="form__field">
          <label className="form__label" htmlFor="name">
            Name
          </label>
          <input
            className="form__input"
            type="text"
            id="name"
            ref={this.name}
          />
        </div>
        <div className="form__field">
          <label className="form__label form__label--radio" htmlFor="man">
            Man
          </label>
          <input className="form__input" type="radio" id="man" name="gender" />

          <label className="form__label form__label--radio" htmlFor="woman">
            Woman
          </label>
          <input
            className="form__input"
            type="radio"
            id="woman"
            name="gender"
          />

          <label className="form__label form__label--radio" htmlFor="other">
            Other
          </label>
          <input
            className="form__input"
            type="radio"
            id="other"
            name="gender"
          />
        </div>
        <div className="form__field">
          <label className="form__label" htmlFor="language">
            Language
          </label>
          <select name="language" id="language">
            <option value="es">Spanish</option>
            <option value="en">English</option>
          </select>
        </div>
        <div className="form__field">
          <label className="form__label" htmlFor="terms">
            Terms and conditions
          </label>
          <input
            className="form__input"
            type="checkbox"
            id="other"
            name="gender"
          />
        </div>
        <input className="form__submit" type="submit" value="send" />
      </form>
    );
  }
}

export default Form;
