import React from "react";
import "./LayoutLoginStyle.css";

function LayoutLogin(props) {
  return (
    <React.StrictMode>
      {/* login */}
      <main className="login">
        <div className="login__item-1 login_item-1--image">
          {props.children[0]}
        </div>
        <div className="login__item-2">{props.children[1]}</div>
        <div className="login__item-3">{props.children[2]}</div>
        <div className="login__item-4">{props.children[3]}</div>
      </main>
      {/* Footer */}
      <footer>{props.children[4]}</footer>
    </React.StrictMode>
  );
}

export default LayoutLogin;
