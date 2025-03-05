"use client";
import React from "react";
import { Layout, Breadcrumb, theme } from "antd";
// import { store } from "@/store/store";
// import { Provider } from "react-redux";
import "./globals.css";
import MainHeader from "@/components/MainHeader";
import MainMenu from "@/components/MainMenu";
import "antd/dist/reset.css";

const { Content } = Layout;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  return (
    <html lang="en">
      <body>
        {/* <Provider store={store}> */}
        <Layout>
          <MainHeader />
          <Layout>
            <MainMenu />
            <Layout style={{ padding: "0 24px 24px" }}>
              <Breadcrumb
                items={[{ title: "Home" }, { title: "List" }, { title: "App" }]}
                style={{ margin: "16px 0" }}
              />
              <Content
                style={{
                  padding: 24,
                  margin: 0,
                  minHeight: "95vh",
                  background: colorBgContainer,
                  borderRadius: borderRadiusLG,
                }}
              >
                {children}
              </Content>
            </Layout>
          </Layout>
        </Layout>
        {/* </Provider> */}
      </body>
    </html>
  );
}
