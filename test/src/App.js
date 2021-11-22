
import { Component } from 'react';
import './App.css';
import Navbar from './Navbar';
import Users from './Users';

class App extends Component {
  constructor() {
    super();
    this.state = {
      c: 0
    }
  };
  totalSum = () => {
    this.setState({ c: this.state.c + 1 });
  }
  totalSub = () => {
    this.setState({ c: this.state.c - 1 });
    if (this.state.c < 1) {
      this.setState({ c: 0 })
    }

  }
  render() {
    return (
      <div className="App">
        <Navbar />
        <div className='container'>
          <Users sum={this.totalSum} sub={this.totalSub} />
        </div>
        <h3 className='text-center'>Total : {this.state.c}</h3>
      </div>
    );
  }
}
export default App;
