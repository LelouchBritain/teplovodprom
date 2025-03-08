"use client";
import {
  Button,
  Flex,
  Form,
  Input,
  InputNumber,
  Upload,
  UploadFile,
} from "antd";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { UploadOutlined } from "@ant-design/icons";
import { addProduct } from "@/features/productSlice";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import styled from "styled-components";

const LongFormItem = styled(Form.Item)`
  max-width: 40%;
`;

const StyledInput = styled(Input)`
  width: 300px;
`;
const StyledInputNumber = styled(InputNumber)`
  width: 300px;
`;

export default function ProductForm() {
  const [form] = Form.useForm();
  const dispatch = useAppDispatch();
  const { user } = useAppSelector((state) => state.user);

  const router = useRouter();
  const [fileList, setFileList] = useState<UploadFile[]>([]);

  const onFinish = (values: { [key: string]: string }) => {
    // if (!values.description && fileList.length === 0) {
    //   form.setFields([
    //     {
    //       name: "description",
    //       errors: ["Fill description or upload an image!"],
    //     },
    //     {
    //       name: "image",
    //       errors: ["Fill description or upload an image!"],
    //     },
    //   ]);
    //   return;
    // }

    const formData: FormData = new FormData();
    for (const name in values) {
      if (name !== "image") {
        formData.append(name, values[name]);
      }
    }

    if (fileList.length > 0 && fileList[0].originFileObj) {
      formData.append("image", fileList[0].originFileObj);
    }

    console.log("Отправка данных:", [...formData.entries()]);

    if (user?.token) {
      dispatch(addProduct({ payload: formData, token: user.token }))
        .unwrap()
        .then(() => {
          console.log("Пост успешно добавлен");
          router.push("/");
        })
        .catch((error) => {
          console.error("Ошибка при добавлении поста:", error);
        });
    } else {
      console.error("Ошибка: пользователь не авторизован");
    }
  };

  const handleUploadChange = ({
    fileList: newFileList,
  }: {
    fileList: UploadFile[];
  }) => {
    setFileList(newFileList);
  };
  return (
    <>
      <Flex justify="flex-start">
        <Form
          form={form}
          name="add-post"
          onFinish={onFinish}
          style={{ width: "75%" }}
          layout="vertical"
        >
          <LongFormItem
            label="Название"
            name="name"
            rules={[
              {
                required: true,
                message: "Пожалуйста введите название продукта",
              },
              {
                max: 40,
                message: "Название должно состоять из неболее чем 40 символов",
              },
            ]}
          >
            <StyledInput maxLength={45} />
          </LongFormItem>

          <Flex wrap gap={40}>
            <Form.Item
              label="Номинальная подача"
              name="supplyNominal"
              rules={[
                {
                  required: true,
                  message: "Пожалуйста введите номинальную подачу",
                },
              ]}
            >
              <StyledInputNumber maxLength={12} addonAfter="м3/ч" />
            </Form.Item>

            <Form.Item
              label="Минимальная-номинальная подача (м3/ч-м3/ч)"
              name="supplyMinMax"
              rules={[
                {
                  required: true,
                  message: "Пожалуйста введите минимальную-максимальную подачу",
                },
                {
                  max: 20,
                  message:
                    "Минимальная-максимальная подача должна состоять из неболее чем 20 символов",
                },
              ]}
            >
              <StyledInput maxLength={25} addonAfter="м3/ч" />
            </Form.Item>
          </Flex>

          <Flex wrap gap={40}>
            <Form.Item
              label="Напор (м)"
              name="pressure"
              rules={[{ required: true, message: "Пожалуйста введите напор" }]}
            >
              <StyledInputNumber maxLength={12} addonAfter="м" />
            </Form.Item>

            <Form.Item
              label="Минимальный-максимальный напор (м-м)"
              name="pressureMinMax"
              rules={[
                {
                  required: true,
                  message: "Пожалуйста введите минимальный-максимальный напор",
                },
                {
                  max: 20,
                  message:
                    "Минимальный-максимальный напор должен состоять из неболее чем 20 символов",
                },
              ]}
            >
              <StyledInput maxLength={25} addonAfter="м" />
            </Form.Item>
          </Flex>

          <Form.Item
            label="Потребление (кВт)"
            name="consumption"
            rules={[
              { required: true, message: "Пожалуйста введите потребление" },
            ]}
          >
            <StyledInputNumber maxLength={7} addonAfter="кВт" />
          </Form.Item>

          <Form.Item
            label="Диаметр входа/выхода (мм/мм)"
            name="diameter"
            rules={[
              {
                required: true,
                message: "Пожалуйста введите диаметр входа/выхода",
              },
            ]}
          >
            <StyledInput maxLength={25} addonAfter="мм" />
          </Form.Item>

          <Form.Item
            label="Цена (₸)"
            name="price"
            rules={[{ required: true, message: "Пожалуйста введите цену" }]}
          >
            <StyledInputNumber maxLength={20} addonAfter="₸" />
          </Form.Item>

          <Form.Item name="image" label="Изображение">
            <Upload
              accept="image/png, image/jpeg, image/gif"
              name="image"
              listType="picture"
              maxCount={1}
              fileList={fileList}
              onChange={handleUploadChange}
              beforeUpload={() => false}
            >
              <Button icon={<UploadOutlined />}>Загрузить</Button>
            </Upload>
          </Form.Item>

          <Form.Item label={null}>
            <Button type="primary" htmlType="submit">
              Добавить
            </Button>
          </Form.Item>
        </Form>
      </Flex>
    </>
  );
}
