// import { Menu } from "antd";
// import { Header } from "antd/es/layout/layout";
// import styled from "styled-components";
// import { techObj } from "./MainMenu";

// const CustomMenu = styled(Menu)`
//   background-color: #fbf9f6 !important;
//   .ant-menu-item {
//     color: rgb(0, 0, 0) !important; // Цвет текста
//   }
//   .ant-menu-item:active {
//     background-color: #f7e5b7 !important; // Цвет при наведении
//   }
//   /* Стили для активного (выбранного) элемента */
//   .ant-menu-item-selected {
//     background-color: #f7eedd !important; /* Новый цвет фона */
//     color: black !important; /* Цвет текста */
//   }
//   /* Изменяем цвет активного заголовка (например, "Оборудование") */
//   .ant-menu-submenu-selected > .ant-menu-submenu-title {
//     color: black !important; /* Цвет текста */
//   }
// `;

// const techObjWithPopup = {
//   ...techObj,
//   popupClassName: "multi-column-menu",
// };

// const items = [
//   techObjWithPopup,
//   {
//     key: "menu2",
//     label: "Оплата и доставка",
//   },
//   {
//     key: "menu3",
//     label: "О компании",
//   },
//   {
//     key: "menu4",
//     label: "Контакты",
//   },
//   {
//     key: "menu5",
//     label: "Отзывы",
//   },
// ];

// const SubHeader: React.FC = () => {
//   return (
//     <Header
//       style={{
//         marginTop: "65px",
//         display: "flex",
//         alignItems: "center",
//         position: "sticky",
//         top: 0,
//         zIndex: 1,
//         width: "100%",
//         backgroundColor: "#fbf9f6",
//       }}
//     >
//       <div
//         className="header_content"
//         style={{
//           width: "78%",
//           margin: "0 auto",
//           display: "flex",
//           alignItems: "center",
//           justifyContent: "space-between",
//           padding: "0 20px",
//         }}
//       >
//         <CustomMenu
//           theme="dark"
//           mode="horizontal"
//           defaultSelectedKeys={["2"]}
//           items={items}
//           style={{
//             display: "flex",
//             justifyContent: "center",
//             flex: 1,
//             minWidth: 0,
//             backgroundColor: "inherit",
//             color: "black",
//           }}
//         />
//       </div>
//     </Header>
//   );
// };

// export default SubHeader;
