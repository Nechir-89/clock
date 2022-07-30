import './App.css'
import React from "react";
import findTimezone from './helpers/functions';
class App extends React.Component {
  // this.props and this.state are added by default by react to the class component
  // this.varname like this.timeId (apparently this is the way of adding class scope variables)
  constructor(props) {
    super(props);
    this.state = {
      timeAndDate: new Date()
    }
  }
  // a = ()=>{}    // allowed
  // this.a = 0;
  // constructor() {
    // this.a = 5;
    // this.a = 0;
  // }
  // console.log(this.a)
  // this.a = 0;    // error
  // let b = 0;     // error
  // function f(){} // error: class expects methods and not functions
  componentDidMount() {
    this.timerId = setInterval(() => {
      this.setState({ timeAndDate: new Date() })
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerId);
  }

  render() {
    const { timeAndDate } = this.state;
    // console.log(this.a);
    return <div className="wrapper">
      <div className="time">
        <span>{('0' + timeAndDate.getHours()).slice(-2)}</span>:
        <span>{('0' + timeAndDate.getMinutes()).slice(-2)}</span>:
        <span>{('0' + timeAndDate.getSeconds()).slice(-2)}</span>
        <div className="amOrPm">
          { }
        </div>
      </div>
      <div className="timezone">
        {
          findTimezone(timeAndDate)
        }
      </div>
    </div>
  }
}

export default App;
