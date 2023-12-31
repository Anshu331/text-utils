import React,{useState} from 'react'



export default function Textform(props) {
    const handleUpClick = ()=>{
        console.log("Uppercase was clicked" +  text);
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("converted to Uppercase!", "success");
    }

    const handleLowClick = ()=>{
        console.log("Lowercase was clicked" +  text);
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("converted to Lowerercase!", "success");
    }
    const handleCopy = ()=>{
        var text = document.getElementById("myBox")
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Copied to Clipboard!", "success");
    }
    const handleClearClick = ()=>{
        console.log("Lowercase was clicked" +  text);
        let newText = '';
        setText(newText)
        props.showAlert("Your Text has been Cleared!", "success");
    }
 
    const handleOnChange = (event)=>{
        console.log("On change");
        setText(event.target.value  )
    }

    const [text, setText] = useState('Enter text here..');
    return (
    <>
    <div className= "container" style={{color: props.mode==='dark'?'white':'#042743'}}>
        <h1>{props.heading} </h1>
        <div className="mb-3">
        <textarea className="form-control" value ={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'grey':'white', color: props.mode==='dark' ? 'white':'#042743'}} id="myBox" rows="10"></textarea>
        </div>  
        <button className= "btn btn-primary mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
        <button className= "btn btn-primary mx-2" onClick={handleLowClick}>Convert to Lowercase</button>
        <button className= "btn btn-primary mx-2" onClick={handleCopy}>Copy Text</button>
        <button className= "btn btn-primary mx-2" onClick={handleClearClick}>Clear Text</button>
   </div>
   <div className= "container my-3" style={{color: props.mode==='dark'?'white':'#042743'}}>
        <h2>Your Text Summary</h2>
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <p>{0.008 * text.split(" ").length} Minutes read</p>
        <h3>Preview</h3>
        <p>{text}</p>


   </div>


   </>    

  )
}
