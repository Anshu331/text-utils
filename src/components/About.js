import React, { useState, memo, useCallback, useMemo } from 'react'
import PropTypes from 'prop-types'

const About = memo(function About({ mode = 'light' }) {
    const [btntext, setBtnText] = useState("Enable dark mode");

    // Use mode from props instead of local state for consistency
    const isDarkMode = mode === 'dark';

    const myStyle = useMemo(() => ({
        color: isDarkMode ? 'white' : 'black',
        backgroundColor: isDarkMode ? '#042743' : 'white',
        border: isDarkMode ? '1px solid white' : '1px solid #dee2e6'
    }), [isDarkMode]);

    const toggleStyle = useCallback(() => {
        setBtnText(prevText => 
            prevText === "Enable dark mode" ? "Enable Light Mode" : "Enable dark mode"
        );
    }, []);

    return (
        <div className="container" style={myStyle}>
            <h1 className="my-3">About Us</h1>
            <div className="accordion" id="accordionExample">
                <div className="accordion-item" style={myStyle}>
                    <h2 className="accordion-header">
                        <button 
                            className="accordion-button" 
                            style={myStyle} 
                            type="button" 
                            data-bs-toggle="collapse" 
                            data-bs-target="#collapseOne" 
                            aria-expanded="true" 
                            aria-controls="collapseOne"
                        >
                            About TextUtils
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={myStyle}>
                            <strong>TextUtils is a powerful text manipulation tool.</strong> This application allows you to transform your text in various ways including converting to uppercase, lowercase, copying text to clipboard, and clearing text. It provides real-time statistics about your text including word count, character count, and estimated reading time. The application also features a dark mode toggle for better user experience.
                        </div>
                    </div>
                </div>
                <div className="accordion-item" style={myStyle}>
                    <h2 className="accordion-header">
                        <button 
                            className="accordion-button collapsed" 
                            style={myStyle} 
                            type="button" 
                            data-bs-toggle="collapse" 
                            data-bs-target="#collapseTwo" 
                            aria-expanded="false" 
                            aria-controls="collapseTwo"
                        >
                            Features
                        </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={myStyle}>
                            <strong>Key features of TextUtils include:</strong>
                            <ul>
                                <li>Convert text to uppercase or lowercase</li>
                                <li>Copy text to clipboard with one click</li>
                                <li>Clear text instantly</li>
                                <li>Real-time word and character counting</li>
                                <li>Reading time estimation</li>
                                <li>Dark mode support for better accessibility</li>
                                <li>Responsive design for all devices</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="accordion-item" style={myStyle}>
                    <h2 className="accordion-header">
                        <button 
                            className="accordion-button collapsed" 
                            style={myStyle} 
                            type="button" 
                            data-bs-toggle="collapse" 
                            data-bs-target="#collapseThree" 
                            aria-expanded="false" 
                            aria-controls="collapseThree"
                        >
                            Performance & Accessibility
                        </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={myStyle}>
                            <strong>TextUtils is built with performance and accessibility in mind.</strong> The application uses React's optimization features like memoization and lazy loading to ensure fast loading times and smooth user experience. It follows web accessibility guidelines and provides keyboard navigation support. The application is also optimized for search engines and mobile devices.
                        </div>
                    </div>
                </div>
            </div>
            <div className="container my-3">
                <button 
                    onClick={toggleStyle} 
                    type="button" 
                    className="btn btn-primary"
                    disabled
                    title="Theme is controlled globally"
                >
                    {btntext} (Controlled by main theme)
                </button> 
            </div>
        </div>
    );
});

About.propTypes = {
    mode: PropTypes.string
};

export default About
