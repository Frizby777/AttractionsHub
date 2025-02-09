import React from "react";
import "./style.css";

// export class Modal extends React.Component {

//     render() {
//         return (
//             // <>
//             // { this.props.children }
//             // </>

//         );
//     }
// }

const Modal = ({active, setActive}) => {
    return (
        <div className={active ? "login-modal active" : "login-modal"} onClick={() => setActive(false)}>
            <div className={active ? "login-content-modal active" : "login-content-modal"} onClick={(e) => e.stopPropagation()}>
                <div className="form-container sign-in-container">
                    {this.props.children}
                </div>
            </div>
        </div>
    );
}


export default Modal;