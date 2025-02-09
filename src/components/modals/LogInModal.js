import "./style.css";

const LogInModal = ({ active, setActive }) => {
    return (
        <div className={active ? "login-modal active" : "login-modal"} onClick={() => setActive(false)}>
            <div className={active ? "login-content-modal active" : "login-content-modal"} onClick={(e) => e.stopPropagation()}>
                <div className="form-container sign-in-container">
                    <form action="#">
                        <h1 style={{ fontSize: "24px" }}>Введите логин и пароль</h1>
                        <div className="login-info">
                            {/* <div style={{backgroundColor: "#eee", display: "flex", borderRadius: "50px"}}> */}
                            {/* <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-mail"><rect width="20" height="16" x="2" y="4" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></svg> */}
                            <input type="email" placeholder="Логин" />
                            {/* </div> */}
                            <input type="password" name="passsword" autoComplete="on" placeholder="Пароль" />
                        </div>
                        <div>
                            <button className="login-button">Вход</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default LogInModal;