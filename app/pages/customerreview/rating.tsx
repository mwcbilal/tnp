import { Rate } from "antd";

interface RatingProps {
  fontSize?: number; 
}

const Rating: React.FC<RatingProps> = ({ fontSize }) => (
  <Rate
    allowHalf
    defaultValue={4.5}
    style={{ color: "#FBAD17", fontSize: fontSize }}
  />
);
export default Rating;
