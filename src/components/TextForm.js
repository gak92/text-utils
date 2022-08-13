import React, {useState} from 'react'
import PropTypes from 'prop-types';

export default function TextForm(props) {
  const [text, setText] = useState("Enter the text here");

  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
  }

  const handleTextChange = (e) => {
    setText(e.target.value);
  }
  
  return (
    <div className='container my-3'>
      <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea className="form-control" id="myBox" rows="8" value={text} onChange={handleTextChange}>
        </textarea>
      </div>
      <button className="btn btn-primary" onClick={handleUpClick}>
        Convert Text to UpperCase
      </button>
    </div>
  )
}

TextForm.propTypes = {
  heading: PropTypes.string.isRequired,
};
