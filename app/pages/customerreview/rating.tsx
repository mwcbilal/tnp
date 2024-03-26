import React from "react";
import { Rate } from "antd";

const Rating: React.FC = () => (
  <Rate allowHalf defaultValue={4.5} style={{ color: "#FBAD17" }} />
);

export default Rating;
