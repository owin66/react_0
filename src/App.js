import logo from './logo.svg';
import './App.css';

function App() {
    const arr = ['a', 'b', 'c', 'd', 'e'];
    const arr1 = arr.map(item =>
         <li>{item}</li>
    )

    return (
        <div>
            <ul>{arr1}</ul>
            <ol>{arr1}</ol>
        </div>
    )
}

export default App;
