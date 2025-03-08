"use client";
import { ConfigProvider, Flex, Input } from "antd";
import { Header } from "antd/es/layout/layout";
import Link from "antd/es/typography/Link";
import { SearchProps } from "antd/es/input/Search";
import Typography from "antd/es/typography/Typography";
import {
  MailOutlined,
  PhoneOutlined,
  WhatsAppOutlined,
} from "@ant-design/icons";
import styled from "styled-components";
import Logo from "../Logo";
import HeaderMenu from "./HeaderMenu";
import { useAppSelector } from "@/store/hooks";
import { GuestMenu } from "./GuestMenu";
import { UserMenu } from "./UserMenu";

const myBgColor = "#edf2fb";

const { Search } = Input;

const StyledHeader = styled(Header)`
  width: 100%;
  padding: 0;
  padding-right: 4px;
  z-index: 10000 !important;
  display: flex;
  alignitems: center;
  position: fixed;
  background-color: ${myBgColor};
  top: 0;
`;

const CustomSearch = styled(Search)`
  max-width: 20%;
  color: black;
  .ant-btn-primary {
    color: black !important; /* Цвет текста в кнопке */
    background-color: #fcd29f !important; /* Фон кнопки */
  }
  .ant-btn-primary:hover {
    background-color: rgb(239, 199, 151) !important; /* Фон кнопки */
  }
`;

const MainHeader: React.FC = () => {
  const { user } = useAppSelector((state) => state.user);
  console.log(user);

  const onSearch: SearchProps["onSearch"] = (value, _e, info) =>
    console.log(info?.source, value);
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#fcd29f",
        },
      }}
    >
      <StyledHeader>
        <div
          className="header_content"
          style={{
            width: "100%",
            margin: "0 auto",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "0 20px",
          }}
        >
          <Flex
            wrap
            justify="space-between"
            align="center"
            style={{ width: "100%" }}
          >
            <Link href="/" style={{ width: "240px" }}>
              <Logo />
            </Link>

            <HeaderMenu />

            <CustomSearch
              placeholder="Найти оборудование"
              onSearch={onSearch}
              enterButton
            />

            <Flex wrap gap={24} align="center">
              <Flex vertical>
                <Typography>
                  <WhatsAppOutlined style={{ color: "green" }} /> /{" "}
                  <PhoneOutlined style={{ color: "blue" }} /> +7 707 555 2060
                </Typography>
                <Typography>
                  <MailOutlined /> info@teplovodprom.kz
                </Typography>
              </Flex>
              {!user ? <GuestMenu /> : <UserMenu />}
            </Flex>
          </Flex>
        </div>
      </StyledHeader>
    </ConfigProvider>
  );
};

export default MainHeader;
