import React from "react";
import "./style.css"
import { Flex, Progress } from "antd";

const ProgressBar: React.FC = () => (
  <Flex gap="small" wrap="wrap">
    <div>
      <Progress type="circle" percent={75} style={{ color: "#00ADEE" }} />
    </div>
  </Flex>
);

export default ProgressBar;
