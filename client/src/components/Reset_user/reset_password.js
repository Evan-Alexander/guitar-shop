import React, { Component } from "react";
import axios from "axios";

import FormField from "../utils/Form/formfield";
import { update, generateData, isFormValid } from "../utils/Form/formActions";
import Dialog from "@material-ui/core/Dialog";

class ResetPassword extends Component {
  state = {
    resetToken: "",
    formErrorMessage: "",
    formError: false,
    formSuccess: "",
    formdata: {
      password: {
        element: "input",
        value: "",
        config: {
          name: "password_input",
          type: "password",
          placeholder: "Enter your password"
        },
        validation: {
          required: true
        },
        valid: false,
        touched: false,
        validationMessage: ""
      },
      confirmPassword: {
        element: "input",
        value: "",
        config: {
          name: "confirm_password_input",
          type: "password",
          placeholder: "Confirm your password"
        },
        validation: {
          required: true,
          confirm: "password"
        },
        valid: false,
        touched: false,
        validationMessage: ""
      }
    }
  };

  updateForm = element => {
    const newFormData = update(element, this.state.formdata, "reset_password");
    this.setState({
      formError: false,
      formdata: newFormData
    });
  };

  submitForm = e => {
    e.preventDefault();

    let dataToSubmit = generateData(this.state.formdata, "reset_password");
    let formIsValid = isFormValid(this.state.formdata, "reset_password");

    if (formIsValid) {
      axios.post('/api/users/reset_password', 
      {
        ...dataToSubmit,
        resetToken: this.state.resetToken
      }).then(response => {
        if(!response.data.success) {
          this.setState({
            formError: true,
            formErrorMessage: response.data.message
          })
        } else {
          this.setState({ formError: false, formSuccess: true});
          setTimeout(() => {
            this.props.history.push('/register_login')
          }, 2000)
        }
      })
    } else {
      this.setState({
        formError: true
      });
    }
  };

  componentDidMount() {
    const resetToken = this.props.match.params.token;
    this.setState({ resetToken });
  }

  render() {
    return (
      <div className="register_login_container row">
        <form onSubmit={e => this.submitForm(e)} className="register_form">
          <h2>Reset Password</h2>
          <div className="form_block_two">
            <div className="block">
              <FormField
                id={"password"}
                formdata={this.state.formdata.password}
                change={element => this.updateForm(element)}
              />
            </div>
            <div className="block">
              <FormField
                id={"confirmPassword"}
                formdata={this.state.formdata.confirmPassword}
                change={element => this.updateForm(element)}
              />
            </div>
          </div>
          <div>
            {this.state.formError ? (
              <div className="error_label">{this.state.formErrorMessage}</div>
            ) : (
              ""
            )}
            <button type="submit">Reset Password</button>
          </div>
        </form>
        <Dialog open={this.state.formSuccess}>
          <div className="dialog_alert">
            <div>Reset Complete!</div>
            <div>
              Your password was reset.  Continuing to Login Page in a couple seconds...
            </div>
          </div>
        </Dialog>
      </div>
    );
  }
}
export default ResetPassword;
