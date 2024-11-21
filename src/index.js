import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import SideMenubarProvider from "./contexts/SideMenuContext";
import SidebarProvider from "./contexts/SidebarContext";
import CartProvider from "./contexts/CartContext";
import { store } from "./redux/storeConfig";
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Suspense fallback={<div />}>
    <Provider store={store}>
      <SideMenubarProvider>
        <SidebarProvider>
          <CartProvider>
            <React.StrictMode>
              <App />
            </React.StrictMode>
          </CartProvider>
        </SidebarProvider>
      </SideMenubarProvider>
    </Provider>
  </Suspense>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
