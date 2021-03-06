import React, { Component } from "react";

import FormField from "../../utils/Form/formfield";
import {
  update,
  generateData,
  isFormValid,
  resetFields
} from "../../utils/Form/formActions";

import { connect } from "react-redux";
import { getBrands, addBrand } from "../../../actions/product_actions";

class ManageBrands extends Component {
  state = {
    formError: false,
    formSuccess: false,
    formdata: {
      name: {
        element: "input",
        value: "",
        config: {
          name: "name_input",
          type: "text",
          placeholder: "Enter brand name"
        },
        validation: {
          required: true
        },
        valid: false,
        touched: false,
        validationMessage: ""
      }
    }
  };

  componentDidMount() {
    this.props.dispatch(getBrands());
  }

  showCategoryItems = () =>
    this.props.products.brands
      ? this.props.products.brands.map((item, i) => (
          <div className="category_item" key={item._id}>
            {item.name}
          </div>
        ))
      : null;

  updateForm = (element) => {
    const newFormData = update(element, this.state.formdata, 'brands');
    this.setState({
      formError: false,
      formdata: newFormData
    })
  }

  resetFieldsHandler = () => {
    const newFormData = resetFields(this.state.formdata, 'brands');

    this.setState({
      formdata: newFormData,
      formSuccess: true
    })
  }

  submitForm = (e) => {
    e.preventDefault();
    
    let dataToSubmit = generateData(this.state.formdata, 'products');
    let formIsValid = isFormValid(this.state.formdata, 'products');
    let existingBrands = this.props.products.brands;

    if(formIsValid) {

      this.props.dispatch(addBrand(dataToSubmit, existingBrands)).then(response => {
        if(response.payload.success) {
          this.resetFieldsHandler();
        } else {
          this.setState({ formError: true });
        }
      })

    } else {
      this.setState({
        formError: true
      })
    }
  }

  render() {
    return (
      <div className="admin_category_wrapper">
        <h1>Brands</h1>
        <div className="admin_two_column">
          <div className="left">
            <div className="brands_container">{this.showCategoryItems()}</div>
          </div>
          <div className="right">
            <form onSubmit={this.submitForm}>
              <FormField
                id={"name"}
                formdata={this.state.formdata.name}
                change={element => this.updateForm(element)}
              />
              {this.state.formError ? (
                <div className="error_label">Please check your data</div>
              ) : null}
              <button type="submit">
                Add Brand
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    products: state.products
  };
};
export default connect(mapStateToProps)(ManageBrands);
