import React from "react";
import { Flex, Progress } from "antd";
import "./style.css"

const RatingProgressBar: React.FC = () => (
  <Flex gap="small" vertical style={{color:"#00ADEE"}}>
    <Progress percent={60} style={{ color: "#FBAD17" }} />
  </Flex>
);

export default RatingProgressBar;
