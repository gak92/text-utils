import React, {useState} from 'react'
import PropTypes from 'prop-types';

export default function TextForm(props) {
  const [text, setText] = useState("");

  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to Upper Case", 'success');
  }

  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to Lower Case", 'success');
  }

  const handleClearClick = () => {
    setText("");
    props.showAlert("Text has been cleared", 'success');
  }

  const handleCopyClick = () => {
    let text = document.getElementById('myBox');
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Text Copied", 'success');
  }

  const handleRemoveExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
  }

  const handleTextChange = (e) => {
    setText(e.target.value);
  }
  
  return (
    <div className='container my-3' style={{
      color: props.mode==='light'?'black':'white'
    }}>
      <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea className="form-control" 
          id="myBox" 
          rows="8" 
          value={text} 
          onChange={handleTextChange}
          style={{
            backgroundColor: props.mode==='light'?'white':'gray',
            color: props.mode==='light'?'black':'white'
          }}>
        </textarea>
      </div>
      <button className="btn btn-primary mx-1 my-1" onClick={handleUpClick} disabled={text.length===0}>
        Convert Text to UpperCase
      </button>
      <button className="btn btn-primary mx-1 my-1" onClick={handleLoClick} disabled={text.length===0}>
        Convert Text to LowerCase
      </button>
      <button className="btn btn-primary mx-1 my-1" onClick={handleClearClick} disabled={text.length===0}>
        Clear Text
      </button>
      <button className="btn btn-primary mx-1 my-1" onClick={handleCopyClick} disabled={text.length===0}>
        Copy Text
      </button>
      <button className="btn btn-primary mx-1 my-1" onClick={handleRemoveExtraSpaces} disabled={text.length===0}>
        Remvoe Extra Spaces
      </button>
      <div className='my-3'>
        <h2>Your Text Summary</h2>
        <p>
          {text.split(" ").filter((el)=>el.length!==0).length} words, 
          {text.length} characters with space, 
          {text.length - text.split(" ").length} characters without space
        </p>
        <p>{0.008 * text.split(" ").filter((el)=>el.length!==0).length} 
          minutes read
        </p>
        <h3>Preview</h3>
        <p>{text.length>0?text:'Enter something above to preview here'}</p>
      </div>
    </div>
  )
}

TextForm.propTypes = {
  heading: PropTypes.string.isRequired,
};
