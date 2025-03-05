import { Button, Flex, Input } from "antd";
import { Header } from "antd/es/layout/layout";
import Link from "antd/es/typography/Link";
import { SearchProps } from "antd/es/input/Search";
import Typography from "antd/es/typography/Typography";
import {
  MailOutlined,
  PhoneOutlined,
  WhatsAppOutlined,
} from "@ant-design/icons";
import Logo from "./Logo";

const { Search } = Input;

const MainHeader: React.FC = () => {
  const onSearch: SearchProps["onSearch"] = (value, _e, info) =>
    console.log(info?.source, value);
  return (
    <Header
      style={{
        display: "flex",
        alignItems: "center",
        position: "fixed",
        top: 0,
        zIndex: 1,
        width: "100%",
      }}
    >
      <div
        className="header_content"
        style={{
          width: "78%",
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

          <Search
            placeholder="input search text"
            onSearch={onSearch}
            enterButton
            style={{ maxWidth: "30%" }}
          />

          <Flex wrap gap={24} align="center">
            <Flex vertical>
              <Typography style={{ color: "white" }}>
                <WhatsAppOutlined style={{ color: "lightgreen" }} /> /{" "}
                <PhoneOutlined style={{ color: "lightblue" }} /> +7 707 555 2060
              </Typography>
              <Typography style={{ color: "white" }}>
                <MailOutlined />
                info@teplovodprom.kz
              </Typography>
            </Flex>

            <Button type="primary">Заказать звонок</Button>
          </Flex>
        </Flex>
      </div>
    </Header>
  );
};

export default MainHeader;
