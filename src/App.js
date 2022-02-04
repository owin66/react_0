import logo from './logo.svg';
import './App.css';

function App() {
    const age = 19;
    return (
    <>
        {age ? <p>19</p> : <p>18</p>}
    </>
  );
}

export default App;
