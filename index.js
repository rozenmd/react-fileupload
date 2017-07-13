import React from 'react';
import { render } from 'react-dom';
import Hello from './Hello';

const styles = {
  fontFamily: 'sans-serif',
  textAlign: 'center',
};

class App extends React.Component {
  
  constructor(...p) {
    super(...p);
    this.state = {
      value: "",
      files: []
    }
  }
  
  handleChange = (event) => {
    
    this.setState({
      value: event.target.value,
      files: [...event.target.files]
    })
  }  
  
  reset = () => {
    this.setState({
      value: "",
      files: []
    })
  }
  
  render() {
        
    return (
      <div>
        <input type="file" value={this.state.value} multiple onChange={this.handleChange} />
      
        <button onClick={this.reset}>reset</button>
        <ul>
          {this.state.files.map(item => <li key={item.index}>{item.name}</li>)}
        </ul>
      </div>
    )
  }
}

render(<App />, document.getElementById('root'));
