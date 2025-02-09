import "./style.css";

const Map = () => {
    return (
        <>
        <div className="map-title">Карта достопримечательностей</div>
        <div className="head-map">
            <a href="https://yandex.ru/maps/2/saint-petersburg/?utm_medium=mapframe&utm_source=maps" className="href1"></a>
            <a href="https://yandex.ru/maps/2/saint-petersburg/?ll=30.314997%2C59.938784&utm_medium=mapframe&utm_source=maps&z=11" className="href2"></a>
            <iframe src="https://yandex.ru/map-widget/v1/?ll=30.314997%2C59.938784&z=11" className="iframe" frameBorder={1} allowFullScreen={true}></iframe>
        </div>
        </>
    );
}

export default Map;