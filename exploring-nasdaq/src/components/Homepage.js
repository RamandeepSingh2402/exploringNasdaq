import React from "react";
import "../CSS/HomePage.css"
import videobg from '../Media/Data_Grid.mp4';
import DownloadCSV from "./DownloadCSV";

function downloadOilCSV() {
    const oilURL = "https://data.nasdaq.com/api/v3/datasets/OPEC/ORB.csv";
    var link = document.createElement('a');
    link.href = oilURL;
    link.download = 'oilData.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

function downloadAppleCSV(props) { 
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
            <div>
                <div id="backgroundVideo">
                    <video src={videobg} autoPlay loop muted />
                </div>
                <div id="content">
                    <h1>
                        Welcome to NASDAQ Explorer!
                    </h1>
                    <div id="stocks">
                        <div id="appleStocks">
                            <p> 
                                Interested in Apples Stock Prices? <br /> Click the button below to download the CSV file with Apple prices since 1980
                            </p>
                            <button id="downloadApple" onClick={downloadAppleCSV}>
                                APPL's
                            </button>
                        </div>
                        <div id="opecOil">
                            <p> 
                                Interested in OPEC oil prices since 2003? <br /> Click the button below to download the CSV file with OPEC oil prices since 2003
                            </p>
                            <button id='opecOilPrices' onClick={downloadOilCSV}>
                                OPEC Oil
                            </button>
                        </div>
                    </div>
                </div>
            </div>
    );
}

export default HomePage;