import React, { useState, useRef } from "react";
import "./../drag-and-drop/style.css";

const UploadFile = () => {
    const [dragActive, setDragActive] = useState(false);

    const inputRef = useRef(null);
    function fileHandler(files) {
        // alert("Number of files: " + files.length);
        console.log(files);
    }

    const dragHandler = function (e) {
        e.preventDefault();
        e.stopPropagation();

        if (e.type === "dragenter" || e.type === "dragover")
            setDragActive(true);
        else if (e.type === "dragleave")
            setDragActive(false);
    };

    const dropHandler = function (e) {
        e.preventDefault();
        e.stopPropagation();

        setDragActive(false);

        if (e.dataTransfer.files && e.dataTransfer.files[0])
            fileHandler(e.dataTransfer.files);
    };

    const changeHandler = function (e) {
        e.preventDefault();

        if (e.target.files && e.target.files[0])
            fileHandler(e.target.files);
    };

    const uploadClick = () => {
        inputRef.current.click();
    };

    return (
        <form id="form-file-upload" onDragEnter={dragHandler} onSubmit={(e) => e.preventDefault()}>
            <input ref={inputRef} type="file" id="input-file-upload" multiple={true} onChange={changeHandler} />
            <label id="label-file-upload" htmlFor="input-file-upload" className={dragActive ? "drag-active" : ""}>
                <div>
                    <button className="upload-button" onClick={uploadClick}>{dragActive ? "Отпустите файл" : "Перетяните сюда свой файл"}</button>
                </div>
            </label>
            {dragActive && <div id="drag-file-element" onDragEnter={dragHandler} onDragLeave={dragHandler} onDragOver={dragHandler} onDrop={dropHandler}></div>}
        </form>
    );
}

export default UploadFile;