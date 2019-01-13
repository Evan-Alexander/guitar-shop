import React, { Component } from 'react'
import Dropzone from 'react-dropzone';
import axios from 'axios';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import CircularProgress from '@material-ui/core/CircularProgress';

class FileUpload extends Component {
  state = {
    uploadedFiles: [],
    uploading: false
  }
  onDrop = (files) => {
    this.setState({ uploading: true });
    let formData = new FormData();
    const config = {
      header: { 'content-type': 'multipart/form-data' }
    }
    formData.append('file', files[0]);

    axios.post('/api/users/uploadimage', formData, config)
      .then(response => {
        console.log(response.data)
        this.setState({
          uploading: false,
          uploadedFiles: [
            ...this.state.uploadedFiles,
            response.data
          ]
        })
      }, () => {
        this.props.imagesHandler(this.state.uploadedFiles)
      })
  }

  showUploadedImages = () => (
    this.state.uploadedFiles.map(item => (
      <div 
        className="dropzone_box"
        key={item.public_id}
        onClick={() => this.onRemove(item.public_id)}
      >
        <div className="wrap" style={{background: `url(${item.url}) no-repeat`}}>

        </div>
      </div>
    ))
  )


  render() {
    return (
      <section>
        <div className="dropzone clear">

          <Dropzone onDrop={(e) => this.onDrop(e)} multiple={false} className="dropzone_box">
            {({ getRootProps, getInputProps }) => (
              <div className="wrap" {...getRootProps()}>
                <FontAwesomeIcon icon={faPlus} />
                <input {...getInputProps()} />
              </div>
            )}
          </Dropzone>

          {this.showUploadedImages()}

          {
            this.state.uploading ?
              <div className="dropzone_box dropzone_extras">
                <CircularProgress />
              </div>
              : null
          }
        </div>
      </section>
    )
  }
}
export default FileUpload;
