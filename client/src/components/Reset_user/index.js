import React, { Component } from "react";
import axios from "axios";

import FormField from "../utils/Form/formfield";
import { update, generateData, isFormValid } from "../utils/Form/formActions";

class ResetUser extends Component {
  state = {
    formError: false,
    formSuccess: false,
    formdata: {
      email: {
        element: "input",
        value: "",
        config: {
          name: "email_input",
          type: "email",
          placeholder: "Enter your email"
        },
        validation: {
          required: true,
          email: true
        },
        valid: false,
        touched: false,
        validationMessage: ""
      }
    }
  };
  updateForm = element => {
    const newFormData = update(element, this.state.formdata, "reset_email");
    this.setState({
      formError: false,
      formdata: newFormData
    });
  };

  submitForm = e => {
    e.preventDefault();

    let dataToSubmit = generateData(this.state.formdata, "reset_email");
    let formIsValid = isFormValid(this.state.formdata, "reset_email");

    if (formIsValid) {
      axios.post('/api/users/reset_user', dataToSubmit)
        .then(response => {
          if(response.data.success) {
            this.setState({
              formSuccess: true
            })
          } else {
            this.setState({formError: true})
          }
        })
    } else {
      this.setState({
        formError: true
      });
    }
  };
  render() {
    return (
      <div className="page_container">
        <div className="container">
          <h1>Reset Your Password</h1>
          <form onSubmit={e => this.submitForm(e)}>
            <FormField
              id={"email"}
              formdata={this.state.formdata.email}
              change={element => this.updateForm(element)}
            />
            <div>
              {this.state.formSuccess ? (
                <div className="form_success">
                  Done! Check your email and possibly your spam if you don't see
                  an email from us in your inbox.
                </div>
              ) : null}
              {this.state.formError ? (
                <div className="error_label">
                  Something went wrong, please try again
                </div>
              ) : null}
              <button type="submit">Send email to reset password</button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
export default ResetUser;
