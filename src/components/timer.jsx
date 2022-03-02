
/**
 * 
 * Timer Component for the Crossknot hacks hackathon
 * 
 */

import React, { Component } from "react";
class CountDown extends Component {
  constructor(props) {
    super(props);
    this.count = this.count.bind(this);
    this.state = {
      days: 0,
      minutes: 0,
      hours: 0,
      secounds: 0,
      time_up: ""
    };
    this.x = null;
    this.deadline = null;
  }
  count() {
    var now = new Date().getTime();
    var t = this.deadline - now;
    var dd = Math.floor(t / (1000 * 60 * 60 * 24));
    var hh = Math.floor((t % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var mm = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
    var ss = Math.floor((t % (1000 * 60)) / 1000);

    var days = dd < 10 ? "0" + dd : dd;
    var hours = hh < 10 ? "0" + hh : hh;
    var minutes = mm < 10 ? "0" + mm : mm;
    var seconds = ss < 10 ? "0" + ss : ss;

    this.setState({ days, minutes, hours, seconds });

    if (t < 0) {
      clearInterval(this.x);
      this.setState({
        days: 0,
        minutes: 0,
        hours: 0,
        seconds: 0,
        time_up: "TIME IS UP"
      });
    }
  }
  componentDidMount() {
    this.deadline = new Date("April 16, 2022 10:00:00").getTime();

    this.x = setInterval(this.count, 1000);
  }

  render() {
    const { days, seconds, hours, minutes } = this.state;
    return (
      <div id="countdown" className="flex gap-6 text-primary_dark font-primary mb-10">
        <div className="col-4">
          <div className="flex flex-col items-center justify-center bg-primary rounded-md py-6 px-4 w-20 sm:w-16">
            <p id="day" className="text-center text-5xl">{days}</p>
            <span className="text-center sm:text-xs">Days</span>
          </div>
        </div>
        <div className="col-4">
        <div className="flex flex-col items-center justify-center bg-primary rounded-md py-6 px-4 w-20 sm:w-16">
            <p id="hour" className="text-center text-5xl">{hours}</p>
            <span className="text-center sm:text-xs">Hours</span>
          </div>
        </div>
        <div className="col-4">
        <div className="flex flex-col items-center justify-center bg-primary rounded-md py-6 px-4 w-20 sm:w-16">
            <p id="minute" className="text-center text-5xl">{minutes}</p>
            <span className="text-center sm:text-xs">Minutes</span>
          </div>
        </div>
        <div className="col-4">
        <div className="flex flex-col items-center justify-center bg-primary rounded-md py-6 px-4 w-20 sm:w-16">
            <p id="second" className="text-center text-5xl">{seconds}</p>
            <span className="text-center sm:text-xs">Seconds</span>
          </div>
        </div>
      </div>
    );
  }
}

export default CountDown;
