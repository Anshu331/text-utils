import React, { useState, useMemo, useCallback } from 'react'

export default function Textform(props) {
    const [text, setText] = useState('Enter text here..');

    const handleUpClick = useCallback(() => {
        const newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Uppercase!", "success");
    }, [text, props]);

    const handleLowClick = useCallback(() => {
        const newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to Lowercase!", "success");
    }, [text, props]);

    const handleCopy = useCallback(async () => {
        try {
            await navigator.clipboard.writeText(text);
            props.showAlert("Copied to Clipboard!", "success");
        } catch (err) {
            // Fallback for older browsers
            const textArea = document.getElementById("myBox");
            if (textArea) {
                textArea.select();
                document.execCommand('copy');
                props.showAlert("Copied to Clipboard!", "success");
            }
        }
    }, [text, props]);

    const handleClearClick = useCallback(() => {
        setText('');
        props.showAlert("Your Text has been Cleared!", "success");
    }, [props]);

    const handleOnChange = useCallback((event) => {
        setText(event.target.value);
    }, []);

    // Memoize expensive calculations
    const textStats = useMemo(() => {
        const words = text.trim() === '' ? 0 : text.trim().split(/\s+/).length;
        const characters = text.length;
        const readingTime = (0.008 * words).toFixed(2);
        
        return { words, characters, readingTime };
    }, [text]);

    // Memoize styles to prevent re-computation
    const containerStyle = useMemo(() => ({
        color: props.mode === 'dark' ? 'white' : '#042743'
    }), [props.mode]);

    const textareaStyle = useMemo(() => ({
        backgroundColor: props.mode === 'dark' ? 'grey' : 'white',
        color: props.mode === 'dark' ? 'white' : '#042743'
    }), [props.mode]);

    return (
        <>
            <div className="container" style={containerStyle}>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea 
                        className="form-control" 
                        value={text} 
                        onChange={handleOnChange} 
                        style={textareaStyle} 
                        id="myBox" 
                        rows="10"
                        aria-label="Text input area"
                    />
                </div>  
                <button className="btn btn-primary mx-2 my-1" onClick={handleUpClick}>
                    Convert to Uppercase
                </button>
                <button className="btn btn-primary mx-2 my-1" onClick={handleLowClick}>
                    Convert to Lowercase
                </button>
                <button className="btn btn-primary mx-2 my-1" onClick={handleCopy}>
                    Copy Text
                </button>
                <button className="btn btn-primary mx-2 my-1" onClick={handleClearClick}>
                    Clear Text
                </button>
            </div>
            <div className="container my-3" style={containerStyle}>
                <h2>Your Text Summary</h2>
                <p>{textStats.words} words and {textStats.characters} characters</p>
                <p>{textStats.readingTime} Minutes read</p>
                <h3>Preview</h3>
                <p>{text.length > 0 ? text : "Nothing to preview..."}</p>
            </div>
        </>
    );
}
