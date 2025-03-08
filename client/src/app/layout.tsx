"use client";
import React from "react";
import { Layout, theme } from "antd";
import MainHeader from "@/components/header/MainHeader";
import MainMenu from "@/components/MainMenu";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { persistor, store } from "@/store/hooks";
import "./globals.css";

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
        <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
        <Layout>
          <MainHeader />
          <Layout>
            <MainMenu />
            <Layout style={{ padding: "0 24px 24px" }}>
              <Content
                style={{
                  padding: 24,
                  margin: 0,
                  marginTop: 80,
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
        </PersistGate>
        </Provider>
      </body>
    </html>
  );
}
