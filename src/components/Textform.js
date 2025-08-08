import React,{useState, useMemo} from 'react'



export default function Textform(props) {
    const handleUpClick = ()=>{
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("converted to Uppercase!", "success");
    }

    const handleLowClick = ()=>{
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("converted to Lowerercase!", "success");
    }
    const handleCopy = ()=>{
        navigator.clipboard.writeText(text);
        props.showAlert("Copied to Clipboard!", "success");
    }
    const handleClearClick = ()=>{
        let newText = '';
        setText(newText)
        props.showAlert("Your Text has been Cleared!", "success");
    }
 
    const handleOnChange = (event)=>{
        setText(event.target.value)
    }

    const [text, setText] = useState('');

    const wordCount = useMemo(() => {
        const trimmed = text.trim();
        if (trimmed.length === 0) return 0;
        return trimmed.split(/\s+/).length;
    }, [text]);

    const charCount = text.length;
    const minutesRead = useMemo(() => 0.008 * wordCount, [wordCount]);

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
        <p>{wordCount} words and {charCount} characters</p>
        <p>{minutesRead} Minutes read</p>
        <h3>Preview</h3>
        <p>{text}</p>


   </div>


   </>    

  )
}
