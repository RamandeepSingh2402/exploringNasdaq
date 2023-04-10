import React from "react";
import "../CSS/HomePage.css"

function downloadCSV(props) { 
    const downloadCSVUrl = "https://data.nasdaq.com/api/v3/datasets/WIKI/AAPL.csv";
    const link = document.createElement('a');
    link.href = downloadCSVUrl;
    link.download = 'data.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
}

function HomePage () {
    return (
        <div id="homePage">
            <video autoPlay muted loop id="stock-video">
                <source src="">
                        
                </source>
            </video>
            <div>
                Welcome to NASDAQ Explorer!
            </div>

            <button id="downloadApple" onClick={downloadCSV}>
                APPL's stock prices since 1980!
            </button>
        </div>
    );
}

export default HomePage;