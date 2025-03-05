import { AppstoreOutlined } from "@ant-design/icons";
import { Menu, MenuProps } from "antd";
import Sider from "antd/es/layout/Sider";

type MenuItem = Required<MenuProps>["items"][number];

const items: MenuItem[] = [
  {
    key: "subTech",
    label: "Оборудование",
    children: [
      { key: "pumpStations", label: "Насосные станции" },
      {
        key: "gPumps",
        label: "Насосы",
        type: "group",
        children: [
          { key: "pump1", label: "Скважинные" },
          { key: "pump2", label: "Поверхностные" },
        ],
      },
      {
        key: "gFans",
        label: "Вентиляторы",
        type: "group",
        children: [
          { key: "fan1", label: "Радиальные" },
          { key: "fan2", label: "Осевые" },
        ],
      },
      {
        key: "gStoves",
        label: "Котлы",
        type: "group",
        children: [
          { key: "stove1", label: "Настенные" },
          { key: "stove2", label: "Напольные" },
        ],
      },
      { key: "compressors", label: "Компрессоры" },
      { key: "controlPanels", label: "Шкафы управления" },
      { key: "freqConverters", label: "Частотные преобразователи" },
    ],
  },
  {
    key: "subComponents",
    label: "Комплектующие",
    icon: <AppstoreOutlined />,
    children: [
      { key: "fittings", label: "Запорная арматура" },
      { key: "pipes", label: "Трубы" },
      { key: "wires", label: "Кабели и проводка" },
    ],
  },
  {
    type: "divider",
  },
  {
    key: "others",
    type: "group",
    children: [
      { key: "delivery", label: "Оплата и доставка" },
      { key: "about", label: "О компании" },
      { key: "contacts", label: "Контакты" },
    ],
  },
];

const MainMenu: React.FC = () => {
  const onClick: MenuProps["onClick"] = (e) => {
    console.log("click ", e);
  };
  return (
    <Sider width={200} style={{ background: "darkblue", marginTop: "80px" }}>
      <Menu
        onClick={onClick}
        style={{ width: 200 }}
        defaultSelectedKeys={["pumpStations"]}
        defaultOpenKeys={["subTech"]}
        mode="inline"
        items={items}
      />
    </Sider>
  );
};

export default MainMenu;
