"use client";
import { Modal } from "antd";
import { useForm } from "antd/es/form/Form";
import { useState } from "react";
import { RegisterForm } from "./RegisterForm";
import { LoginForm } from "./LoginForm";

interface Props {
  type: "register" | "login";
  isOpen?: boolean;
}

export default function AuthModal({ type, isOpen }: Props) {
  const [isModalOpen, setIsModalOpen] = useState(isOpen || false);
  const [form] = useForm();

  const onOk = () => {
    form.submit();
  };

  const showModal = () => {
    setIsModalOpen(true);
  };

  const onCancel = () => {
    form.resetFields();
    setIsModalOpen(false);
  };

  const buttonText =
    type === "register" ? "Зарегистрироваться" : "Авторизироваться";
  const title = type === "register" ? "Регистрация" : "Авторизация";

  return (
    <>
      <a onClick={showModal}>{buttonText}</a>
      <Modal
        title={title}
        open={isModalOpen}
        okText={buttonText}
        onOk={onOk}
        onCancel={onCancel}
      >
        {type === "register" ? (
          <RegisterForm form={form} closeModal={() => setIsModalOpen(false)} />
        ) : (
          <LoginForm form={form} closeModal={() => setIsModalOpen(false)} />
        )}
      </Modal>
    </>
  );
}
