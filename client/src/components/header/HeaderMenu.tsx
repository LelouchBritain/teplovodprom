"use client";
import { Menu, Popover } from "antd";
import styled from "styled-components";
import "./HeaderMenu.css";

const styleAlign = { display: "flex", justifyContent: "center" };

export const CustomMenu = styled(Menu)`
  max-width: 30%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
  minwidth: 0;
  color: black;
  background-color: #edf2fb !important;
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

const popoverContent = (
  <div className="popover">
    <div className="popover-column">
      <strong className="popover-title">Насосы</strong>
      <p>Скважинные</p>
      <p>Поверхностные</p>
    </div>

    <div className="popover-column">
      <strong className="popover-title">Вентиляторы</strong>
      <p>Осевые </p>
      <p>Радиальные</p>
    </div>

    <div className="popover-column">
      <p>Котлы</p>
      <p>Компрессоры</p>
      <p>Шкафы управления</p>
      <p>Частотные преобразователи</p>
    </div>

    <div className="popover-column">
      <strong className="popover-title">Комплектующие</strong>
      <p>Запорная арматура</p>
      <p>Трубы</p>
      <p>Кабели и проводка</p>
    </div>
  </div>
);

const HeaderMenu = () => (
  <>
    <CustomMenu>
      <Popover content={popoverContent} trigger="hover">
        <Menu.Item key="tech">Оборудование</Menu.Item>
      </Popover>

      <Menu.Item key="payment" style={styleAlign}>
        Доставка
      </Menu.Item>
      <Menu.Item key="contacts" style={styleAlign}>
        Контакты
      </Menu.Item>
    </CustomMenu>
  </>
);

export default HeaderMenu;
