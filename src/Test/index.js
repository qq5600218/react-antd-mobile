import React, { memo } from "react";
import PropTypes from "prop-types";
import { Button } from "antd-mobile";
import "./index.less";
import styles from "./index.module.less";
import Decorator from "./Decorator";

const Test = ({ theme }) => (
  <React.Fragment>
    <p className="test">normal</p>
    <p className={styles.test}>css module</p>
    <Button type={theme}>test</Button>
    <Decorator />
  </React.Fragment>
);

Test.propTypes = {
  theme: PropTypes.string
};

export default memo(Test);
