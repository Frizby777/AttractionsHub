import React from "react";
import UploadFile from "../drag-and-drop/UploadFile";
import "./../drag-and-drop/style.css";
import "./style.css";


const Header = () => {
    return (
        <header className="header header-image">
        <div className="header__wrapper">
          <h1 className="header__title">
            <strong>Загрузите модель</strong>
          </h1>
          <div className="header__text">
            <UploadFile />
          </div>
          {/* <a href="#!" className="btn">Загрузить</a> */}
        </div>
      </header>
    );
}

export default Header;