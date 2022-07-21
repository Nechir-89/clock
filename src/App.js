import './App.css'
import React from "react";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      timeAndDate: new Date()
    }
  }

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
function findTimezone(date) {
  let dateString = date.toString();
  let index = dateString.indexOf('(')
  return dateString.slice(index + 1, dateString.length - 1)
}
export default App;
