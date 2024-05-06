import { MenuProps, Space, Dropdown as DPDown, Button } from "antd";
import { DownOutlined } from '@ant-design/icons';
import './style.css';
import { useParams } from "next/navigation";


interface Props {
  options: MenuProps['items'],
  selectedOption: string,
  onSelect: (abc: any) => void,
}

const Dropdown: React.FC<Props> = ({ options, selectedOption, onSelect }) => {

  const { category, id } = useParams();
  console.log("paramssss founddd", { category, id });
  console.log("Dropdown Props", options, selectedOption);

  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  const onClick: MenuProps['onClick'] = ({ key }) => {
    const selectedIndex = options.findIndex(e => e.key == key);
    console.log("selected index", selectedIndex);

    onSelect(options[selectedIndex]["label"]);
  };
  
  const buttonClass = (id && id[0] === 'honeymoon') || (category && category[0] === 'honeymoon') ? "buttonred" : "button";
  const textClass = (id && id[0] === 'honeymoon') || (category && category[0] === 'honeymoon')  ? "textred": "text"




  return (
    <div>
      <Space wrap>
        <DPDown className="rounded-full" menu={{ items: options, onClick }} placement="bottomLeft" arrow>
          <Button className={`w-44 h-14 ${buttonClass}`}>
            <div className={`flex items-center w-full justify-between ${textClass}`}>
              {capitalizeFirstLetter(selectedOption)} <DownOutlined />
            </div>
          </Button>
        </DPDown>
      </Space>
    </div>
  );
};

export default Dropdown;
