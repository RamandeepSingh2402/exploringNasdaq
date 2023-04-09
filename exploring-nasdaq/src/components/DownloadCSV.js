// Function to download historical time-series of AAPl's stock price in CSV format

function DownloadCSV () {


function downloadCSV(props) { 
    const downloadCSVUrl = "https://data.nasdaq.com/api/v3/datasets/WIKI/AAPL.csv";
    const link = document.createElement('a');
    link.href = downloadCSVUrl;
    link.download = 'data.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  return (
    <button onClick={downloadCSV}>
      Click me and start exploring NASDAQ!
    </button>
  );

}

export default DownloadCSV;