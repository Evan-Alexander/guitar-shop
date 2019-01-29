import React, { Component } from "react";

import FormField from "../../utils/Form/formfield";
import {
  update,
  generateData,
  isFormValid,
  populateFields
} from "../../utils/Form/formActions";

import { connect } from "react-redux";
import { getSiteData, updateSiteData } from '../../../actions/site_actions';

class UpdateSiteInfo extends Component {
  state = {
    formError: false,
    formSuccess: false,
    formdata: {
      address: {
        element: "input",
        value: "",
        config: {
          label: "Address",
          name: "address_input",
          type: "text",
          placeholder: "Enter business address"
        },
        validation: {
          required: true
        },
        valid: false,
        touched: false,
        validationMessage: "",
        showlabel: true
      },
      hours: {
        element: "input",
        value: "",
        config: {
          label: "Working Hours",
          name: "hours_input",
          type: "text",
          placeholder: "Enter business hours"
        },
        validation: {
          required: true
        },
        valid: false,
        touched: false,
        validationMessage: "",
        showlabel: true
      },
      phone: {
        element: "input",
        value: "",
        config: {
          label: "Phone number",
          name: "phone_input",
          type: "text",
          placeholder: "Enter phone number"
        },
        validation: {
          required: true
        },
        valid: false,
        touched: false,
        validationMessage: "",
        showlabel: true
      },
      email: {
        element: "input",
        value: "",
        config: {
          label: "Business Email address",
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
        validationMessage: "",
        showlabel: true
      }
    }
  };

  componentDidMount() {
    this.props.dispatch(getSiteData()).then(() => {
      const newFormData = populateFields(this.state.formdata, this.props.site.siteData[0]);
      this.setState({
        formdata: newFormData
      })
    })
  }

  updateForm = element => {
    const newFormData = update(element, this.state.formdata, "site_info");
    this.setState({
      formError: false,
      formdata: newFormData
    });
  };

  submitForm = e => {
    e.preventDefault();

    let dataToSubmit = generateData(this.state.formdata, "site_info");
    let formIsValid = isFormValid(this.state.formdata, "site_info");

    if (formIsValid) {
      this.props.dispatch(updateSiteData(dataToSubmit)).then(() => {
        this.setState({
          formSuccess: true
        }, () => {
          setTimeout(() => {
            this.setState({
              formSuccess: false
            })
          }, 2000)
        })
      })
    } else {
      this.setState({
        formError: true
      });
    }
  };
  render() {
    return (
      
      <form onSubmit={e => this.submitForm(e)} className="register_form">
        <h1>Site Info</h1>
        <FormField
          id={"address"}
          formdata={this.state.formdata.address}
          change={element => this.updateForm(element)}
        />
        <FormField
          id={"hours"}
          formdata={this.state.formdata.hours}
          change={element => this.updateForm(element)}
        />
        <FormField
          id={"phone"}
          formdata={this.state.formdata.phone}
          change={element => this.updateForm(element)}
        />
        <FormField
          id={"email"}
          formdata={this.state.formdata.email}
          change={element => this.updateForm(element)}
        />
        <div>
          {this.state.formSuccess ? (
            <div className="form_success">Submitted Scuccessfully!</div>
          ) : null}
          {this.state.formError ? (
            <div className="error_label">
              Something went wrong, please try again
            </div>
          ) : null}
          <button onClick={e => this.submitForm(e)}>Update</button>
        </div>
      </form>
    );
  }
}

const mapStateToProps = state => {
  return {
    site: state.site
  };
};
export default connect(mapStateToProps)(UpdateSiteInfo);
