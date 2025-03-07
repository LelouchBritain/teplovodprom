import { Flex } from "antd";
import { Image } from "antd";
import Title from "antd/es/typography/Title";
import { useRouter } from "next/navigation";

const Logo: React.FC = () => {
  const router = useRouter();

  const handleClick = () => {
    router.push("/");
  };

  const myFontStyle = {
    fontFamily: "FlaviusUniversal",
  };

  return (
    <>
      <Flex align="center" gap={6}>
        <Image src="/logo.svg" alt="Logo" width={40} />
        <Title
          style={{ margin: "0", cursor: "pointer" }}
          level={4}
          onClick={handleClick}
        >
          <span style={{ color: "#F66540", ...myFontStyle }}>ТЕПЛО</span>
          <span style={{ color: "#17C9F5", ...myFontStyle }}>ВОД</span>
          <span style={{ color: "#C4C4C4", ...myFontStyle }}>ПРОМ</span>
        </Title>
      </Flex>
    </>
  );
};

export default Logo;
