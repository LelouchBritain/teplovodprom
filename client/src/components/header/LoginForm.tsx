"use client";
import { Alert, Form, FormInstance, Input } from "antd";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { loginUser, UserRequest } from "@/features/userSlice";

interface Props {
  form: FormInstance;
  closeModal: () => void;
}

export function LoginForm({ form, closeModal }: Props) {
  const dispatch = useAppDispatch();
  const { loginError, loading } = useAppSelector((state) => state.user);
  const [isFormSubmitted, setIsFormSubmited] = useState(false);

  const onFinish = (values: UserRequest) => {
    setIsFormSubmited(true);
    dispatch(loginUser(values));
  };

  useEffect(() => {
    if (!loading && !loginError && isFormSubmitted) {
      form.resetFields();
      closeModal();
    }
  }, [loginError, loading, isFormSubmitted, closeModal, form]);

  return (
    <Form
      form={form}
      name="login"
      initialValues={{ remember: true }}
      style={{ maxWidth: 360 }}
      onFinish={onFinish}
    >
      {loginError ? <Alert type="error" message={loginError} /> : null}
      <Form.Item
        name="username"
        rules={[
          { required: true, message: "Введите имя пользователя" },
          {
            max: 20,
            message:
              "Имя пользователя должно состоять из неболее чем 20 символов",
          },
          {
            pattern: /^[A-Za-z]+$/,
            message: "Имя пользователя должно состоять из латинских букв",
          },
        ]}
      >
        <Input
          prefix={<UserOutlined />}
          placeholder="Имя пользователя"
          className="site-form-item-icon"
          maxLength={36}
        />
      </Form.Item>

      <Form.Item
        name="password"
        rules={[
          { required: true, message: "Введите пароль" },
          {
            max: 40,
            message: "Пароль должен состоять не более чем из 40 символов",
          },
        ]}
      >
        <Input.Password
          prefix={<LockOutlined />}
          className="site-form-item-icon"
          placeholder="Пароль"
          maxLength={45}
        />
      </Form.Item>
    </Form>
  );
}
