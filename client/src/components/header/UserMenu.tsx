"use client";
import { logoutUser } from "@/features/userSlice";
import { useAppDispatch } from "@/store/hooks";
import { SettingFilled } from "@ant-design/icons";
import { Button } from "antd";
import { useRouter } from "next/navigation";
import { CustomMenu } from "./HeaderMenu";

export function UserMenu() {
  const dispatch = useAppDispatch();

  const router = useRouter();

  const items = [
    {
      label: (
        <Button
          type="primary"
          style={{ display: "inline" }}
          onClick={() => router.push("/create-product")}
        >
          Создать продукт
        </Button>
      ),
      key: "createProduct",
    },
    {
      label: <SettingFilled style={{ display: "inline" }} />,
      key: "settings",
      children: [
        {
          key: "logout",
          label: <span onClick={() => dispatch(logoutUser())}>Выйти</span>,
        },
      ],
      theme: "light",
    },
  ];
  return (
    <CustomMenu
      theme="dark"
      mode="horizontal"
      items={items}
      style={{
        flex: 1,
        justifyContent: "flex-end",
        alignItems: "center",
        flexWrap: "nowrap",
      }}
      selectable={false}
    />
  );
}
