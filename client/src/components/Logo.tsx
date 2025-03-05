import { Flex } from "antd";
import { Image } from "antd";
import Title from "antd/es/typography/Title";
import { useRouter } from "next/navigation";

const Logo: React.FC = () => {
  const router = useRouter();

  const handleClick = () => {
    router.push("/");
  };

  return (
    <>
      <Flex align="center" gap={10}>
        <Image src="/logo.png" alt="Logo" width={30} />
        <Title
          style={{ color: "lightpink", margin: "0", cursor: "pointer" }}
          level={4}
          onClick={handleClick}
        >
          ТЕПЛОВОДПРОМ
        </Title>
      </Flex>
    </>
  );
};

export default Logo;
