import { AppstoreOutlined } from "@ant-design/icons";
import { Menu, MenuProps } from "antd";
import Sider from "antd/es/layout/Sider";
import styled from "styled-components";

const CustomMenu = styled(Menu)`
  width: 200;
  background-color: #fbf9f6 !important;
  .ant-menu-item {
    color: rgb(0, 0, 0) !important; // Цвет текста
  }
  .ant-menu-item:active {
    background-color: #f7e5b7 !important; // Цвет при наведении
  }
  /* Стили для активного (выбранного) элемента */
  .ant-menu-item-selected {
    background-color: #f7eedd !important; /* Новый цвет фона */
    color: black !important; /* Цвет текста */
  }
  /* Изменяем цвет активного заголовка (например, "Оборудование") */
  .ant-menu-submenu-selected > .ant-menu-submenu-title {
    color: black !important; /* Цвет текста */
  }
`;

export type MenuItem = Required<MenuProps>["items"][number];

export const techObj = {
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
    { key: "divider1", type: "divider" },
    {
      key: "gFans",
      label: "Вентиляторы",
      type: "group",
      children: [
        { key: "fan1", label: "Радиальные" },
        { key: "fan2", label: "Осевые" },
      ],
    },
    { key: "divider2", type: "divider" },
    { key: "stoves", label: "Котлы" },
    { key: "compressors", label: "Компрессоры" },
    { key: "controlPanels", label: "Шкафы управления" },
    { key: "freqConverters", label: "Частотные преобразователи" },
  ],
};

const items: MenuItem[] = [
  techObj,
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
];

const MainMenu: React.FC = () => {
  const onClick: MenuProps["onClick"] = (e) => {
    console.log("click ", e);
  };
  return (
    <Sider width={200} style={{ background: "#fbf9f6", marginTop: "80px" }}>
      <CustomMenu
        onClick={onClick}
        defaultSelectedKeys={["pumpStations"]}
        defaultOpenKeys={["subTech"]}
        mode="inline"
        items={items}
      />
    </Sider>
  );
};

export default MainMenu;
