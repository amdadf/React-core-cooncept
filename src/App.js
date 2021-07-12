import logo from './logo.svg';
import './App.css';

function App() {

  var persion = {
    name:"karim",
    age:"20",
    job:"singer"

  }
  var style = {
    color:"red",
    backgroundColor:"green",
    padding:"10px 20px 10px 20px",
    borderRadius:"80%"

  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <h2 style={style}>My Name is {persion.name  + "  " + persion.age  + "  " + persion.job  }</h2>
 
      </header>
    </div>
  );
}

export default App;
