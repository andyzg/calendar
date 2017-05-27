import React from 'react';
// import Hour;

export default class Day extends React.Component {
  renderHour(hour) {
    var key = hour;
    var type = "AM";
    if (hour >= 12) {
      type = "PM";
      hour -= 12;
    }

    return (
      <div className="hour" key={key}>
        <div className="title">
          {hour === 0 ? 12 : hour} <br />
          {type}
        </div>
        <div className="hour-line"></div>
      </div>
    );
  }

  renderEvent(hour, minutes, length, title) {
    var top = hour * 80;
    if (minutes >= 30) {
      top += 40;
    }
    console.log(hour);
    var bottom = (24 - hour) * 80;
    if (minutes >= 30) {
      bottom -= 40;
    }
    bottom -= (length / 30) * 40;

    var style = {
      top: top,
      bottom: bottom
    };

    return (
      <div style={style} className="event">
        {title}
      </div>
    );
  }

  render() {
    var hours = [];
    for (var i = 0; i < 24; i++) {
      hours.push(this.renderHour(i));
    }

    return (
      <div className="day">
        <h1>SATURDAY, MAY 27</h1>
        <div className="hours">
          {hours}
          <div className="events">
            <div className="events__container">
              {this.renderEvent(13, 30, 30, "Hello world")}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
