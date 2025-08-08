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
        var text = document.getElementById("myBox")
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Copied to Clipboard!", "success");
    }
    const handleClearClick = ()=>{
        let newText = '';
        setText(newText)
        props.showAlert("Your Text has been Cleared!", "success");
    }
 
    const handleOnChange = (event)=>{
        setText(event.target.value  )
    }

    const [text, setText] = useState('');

    // Derived memoized values to avoid expensive recalculations on every render
    const { wordCount, charCount, readingTime } = useMemo(() => {
      const words = text.trim().split(/\s+/).filter(Boolean);
      const countWords = words.length;
      const countChars = text.length;
      return {
        wordCount: countWords,
        charCount: countChars,
        readingTime: +(0.008 * countWords).toFixed(2),
      };
    }, [text]);
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
        <p>{readingTime} Minutes read</p>
        <h3>Preview</h3>
        <p>{text}</p>


   </div>


   </>    

  )
}
