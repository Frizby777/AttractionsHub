import "./style.css";

const SignUpModal = ({ active, setActive, children }) => {
    return (
        <div className={active ? "login-modal active" : "login-modal"} onClick={() => setActive(false)}>
            <div className={active ? "login-content-modal active" : "login-content-modal"} onClick={(e) => e.stopPropagation()}>
                <div className="form-container sign-in-container">
                    <form action="#">
                        <h1 style={{ fontSize: "24px" }}>Регистрация</h1>
                        <div className="login-info">
                            <input type="email" placeholder="Логин" />
                            <input type="password" name="password" autoComplete="on" placeholder="Пароль" />
                            <input type="password" name="password" autoComplete="on" placeholder="Повторите пароль" />
                        </div>
                        <div>
                            <button className="login-button">Зарегистрироваться</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default SignUpModal;