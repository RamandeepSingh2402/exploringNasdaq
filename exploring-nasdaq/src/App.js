import logo from './logo.svg';
import './App.css'; 
import DownloadCSV from './components/DownloadCSV';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        Getting started with react application and let's get starte to explore NASDAQ!
        <DownloadCSV/>
      </header>
    </div>
  );
}

export default App;
