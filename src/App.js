import './App.css';
import Fcomponent from './Fcomponent';
import Ccomponent from './Ccomponent';
import FMainPage from './FMainPage';

function App() {
  return (
    <div>

      <div className="App">
        <header className="App-header">
          <Fcomponent />
        </header>
        <main className='App-main'>
          <div>
            <FMainPage />
          </div>
        </main>
        <footer className='App-footer'>
          <Ccomponent />
        </footer>
      </div>
    </div>
  );
}

export default App;
