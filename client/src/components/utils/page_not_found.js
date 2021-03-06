import React from 'react'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExclamationCircle } from "@fortawesome/free-solid-svg-icons";

const PageNotFound = () => {
  return (
    <div className="container">
      <div className="not_found_container">
        <FontAwesomeIcon icon={faExclamationCircle} className="icon" />
        <div>This isn't the page you're looking for.</div>
      </div>
    </div>
  )
}

export default PageNotFound
