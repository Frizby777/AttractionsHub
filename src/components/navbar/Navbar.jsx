import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Search from "../search/Search";
import LogInModal from "../modals/LogInModal";
import SignUpModal from "../modals/SignUpModal";
import BtnDarkMode from "../btnDarkMode/BtnDarkMode";

import "./style.css";
import "../modals/style.css";

const Navbar = () => {
    const normalLink = "nav-list__link";
    const activeLink = "nav-list__link nav-list__link--active";
    const [logInActive, setLogInModalActive] = useState(false);
    const [signUpActive, setSignUpModalActive] = useState(false);

    return (
        <nav className="nav">
            <div className="container">
                <div className="nav-row">
                    <NavLink to="/" className="logo">
                        <strong>AttractionHub</strong>
                    </NavLink>

                    <Search />
                    <BtnDarkMode />

                    <ul className="nav-list">
                        <li className="nav-list__item">
                            <NavLink to="/" className={({ isActive }) => isActive ? activeLink : normalLink}>
                                Главная
                            </NavLink>
                        </li>
                        <li className="nav-list__item">
                            <NavLink to="/projects" className={({ isActive }) => isActive ? activeLink : normalLink}>
                                Все модели
                            </NavLink>
                        </li>
                        <li className="nav-list__item">
                            <a style={{ cursor: "pointer" }} className={logInActive ? activeLink : normalLink} onClick={() => setLogInModalActive(true)}>Вход</a>
                        </li>
                        <li className="nav-list__item">
                            <a style={{ cursor: "pointer" }} className={signUpActive ? activeLink : normalLink} onClick={() => setSignUpModalActive(true)}>Регистрация</a>
                        </li>
                    </ul>
                </div>

                <LogInModal active={logInActive} setActive={setLogInModalActive} />
                <SignUpModal active={signUpActive} setActive={setSignUpModalActive} />

            </div>
        </nav >
    )
}

export default Navbar;