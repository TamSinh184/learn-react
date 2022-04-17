import React from "react";
import "./index.css";
import { createRoot } from "react-dom/client";
import Welcome from "./components/Welcome";
import AddComponent from "./components/AddComponent";
import AddFunction from "./components/FunctionComponent";
import Alert from "./components/AlertComponent";

const container = document.getElementById("root");
const root = createRoot(container);
// root.render(<Welcome name={"le"} />);
// root.render(<AddComponent number1={2} number2={3}/>);
// root.render(<AddFunction a={3} b={4}/>);
root.render(<Alert text="Cảnh báo! Tài nguyên bạn vừa truy cập không tồn tại." />)

