import React, { Component, PureComponent, memo } from "react";
import { DatePicker, List } from "antd-mobile";

const d1 = WrapComponent => () => <WrapComponent value={1} />;
const d2 = () => WrapComponent => () => <WrapComponent value={1} />;

@d1
class Date extends Component {
  componentDidMount() {}
  render() {
    return (
      <List>
        <DatePicker>
          <List.Item arrow="horizontal">Datetime</List.Item>
        </DatePicker>
      </List>
    );
  }
}

@d2()
class Time extends PureComponent {
  componentDidMount() {
    Promise.resolve(123).then(() => {
      console.log(456);
    });
  }
  render() {
    return (
      <List>
        <DatePicker mode="time">
          <List.Item arrow="horizontal">Datetime</List.Item>
        </DatePicker>
      </List>
    );
  }
}

export default memo(() => (
  <React.Fragment>
    <Date />
    <Time />
  </React.Fragment>
));
