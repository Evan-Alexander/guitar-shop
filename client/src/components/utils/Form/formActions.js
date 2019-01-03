
export const validate = (element, formdata = []) => {
  let error = [true, ''];

  if(element.validation.email) {
    const valid = /\S+@\S+\.\S+/.test(element.value);
    const message = `${!valid ? 'Must be a valid email' : ''}`;
    error = !valid ? [valid, message] : error;
  }

  if(element.validation.confirm) {
    const valid = element.value.trim() === formdata[element.validation.confirm].value;
    const message = `${!valid ? 'Passwords do not match' : ''}`;
    error = !valid ? [valid, message] : error;
  }

  if(element.validation.required) {
    // Case for invalid input that's not empty
    const valid = element.value.trim() !== '';
    const message = `${!valid ? 'This field is required' : ''}`;
    // If not valid send the updated message and value of 'valid', else its valid and no error and no message.
    error = !valid ? [valid, message] : error;
  }
  return error;
}

export const update = (element, formdata, formName) => {
  const newFormdata = {
    ...formdata
  }
  const newElement = {
    ...newFormdata[element.id]
  }

  newElement.value = element.event.target.value;

  if(element.blur) {
    let validData = validate(newElement, formdata);
    newElement.valid = validData[0];
    newElement.validationMessage = validData[1];
  }
  // if there was a blur event, this will be true, else false
  newElement.touched = element.blur;
  newFormdata[element.id] = newElement;

  return newFormdata;
}

export const generateData = (formdata, formName) => {
  let dataToSubmit = {};
  for(let key in formdata) {
    if(key !== 'confirmPassword') {
      dataToSubmit[key] = formdata[key].value;
    }
  }
  return dataToSubmit;
}

export const isFormValid = (formdata, formname) => {
  let formIsValid = true;

  for(let key in formdata) {
    formIsValid = formdata[key].valid && formIsValid;
  }
  return formIsValid;
}