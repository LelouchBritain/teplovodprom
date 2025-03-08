import { Button, MenuProps } from "antd";
import AuthModal from "./AuthModal";
import styled from "styled-components";
import { CustomMenu } from "./HeaderMenu";

const CustomBtn = styled(Button)`
  && {
    color: black !important; /* Цвет текста в кнопке */
    background-color: #fcd29f !important; /* Фон кнопки */
  }
  &&:hover {
    color: black !important;
    background-color: rgb(239, 199, 151) !important; /* Фон кнопки */
  }
`;

export function GuestMenu() {
  const items: MenuProps["items"] = [
    {
      label: <AuthModal type="register" />,
      key: "register",
    },
    {
      label: <AuthModal type="login" />,
      key: "login",
    },
  ];

  return (
    <>
      <CustomMenu
        theme="dark"
        mode="horizontal"
        items={items}
        style={{ flex: 1, justifyContent: "flex-end" }}
        selectable={false}
      />
      <CustomBtn type="primary">Заказать звонок</CustomBtn>
    </>
  );
}
