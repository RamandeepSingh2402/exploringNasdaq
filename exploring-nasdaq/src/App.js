import logo from './logo.svg';
import './App.css'; 


function downloadCSV(props) {
  

  const downloadCSVUrl = "https://data.nasdaq.com/api/v3/datasets/WIKI/AAPL.csv";
  fetch(downloadCSVUrl).then(response => {
    const fileName = response.headers.get('content-disposition').split('filename=')[1];
    return response.blob().then(blob => {
      const url = window.URL.createObjectURL(new Blob([blob]));
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', fileName);
      document.body.appendChild(link);
      link.click();
      link.parentNode.removeChild(link);
    });
  });

}

function MyButton() {
  function handleClick() {
    const downloadURL = "https://data.nasdaq.com/api/v3/datasets/WIKI/AAPL.csv";
    // <DownloadFile url="https://data.nasdaq.com/api/v3/datasets/WIKI/AAPL.csv" />
    console.log("This button was clicked!");
  }

    return (
      <button onClick={downloadCSV}>
        Click me and start exploring NASDAQ!
      </button>
    );
}


function App() {
  return (
    <div className="App">
      <header className="App-header">
        Getting started with react application and let's get starte to explore NASDAQ!
        <MyButton/>
      </header>
    </div>
  );
}

export default App;
