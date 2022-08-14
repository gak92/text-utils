import React, {useState} from 'react'
import PropTypes from 'prop-types';

export default function TextForm(props) {
  const [text, setText] = useState("");

  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
  }

  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
  }

  const handleClearClick = () => {
    setText("");
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
      <button className="btn btn-primary mx-1" onClick={handleUpClick}>
        Convert Text to UpperCase
      </button>
      <button className="btn btn-primary mx-1" onClick={handleLoClick}>
        Convert Text to LowerCase
      </button>
      <button className="btn btn-primary mx-1" onClick={handleClearClick}>
        Clear Text
      </button>
      <div className='my-3'>
        <h2>Your Text Summary</h2>
        <p>
          {text.split(" ").length} words, 
          {text.length} characters with space, 
          {text.length - text.split(" ").length} characters without space
        </p>
        <p>{0.008 * text.split(" ").length} minutes read</p>
        <h3>Preview</h3>
        <p>{text}</p>
      </div>
    </div>
  )
}

TextForm.propTypes = {
  heading: PropTypes.string.isRequired,
};
