import React from "react";
import Header from "../components/header/Header";
import { ModelImpl } from "../components/modelCard/ModelImpl";
import Map from "../components/map/Map";

const Home = () => {
    return (
        <>
            <Header />
            <main className="section">
                {/* <div className="container">
                    <ul className="content-list">
                        <li className="content-list__item">
                            <h2 className="title-2">Best Projects</h2>
                            <ModelImpl />
                        </li>
                    </ul>
                </div> */}
                <Map />
            </main>
        </>
    );
}

export default Home;