import React, {useState} from 'react'
import PropTypes from 'prop-types';

export default function TextForm(props) {
  const [text, setText] = useState("Enter the text here");
  
  return (
    <div className='container my-3'>
      <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea className="form-control" id="myBox" rows="8" value={text}>
        </textarea>
      </div>
      <button className="btn btn-primary">
        Convert Text to UpperCase
      </button>
    </div>
  )
}

TextForm.propTypes = {
  heading: PropTypes.string.isRequired,
};
