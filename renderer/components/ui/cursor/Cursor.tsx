import React, { useState, useEffect } from "react";

function FlareCursor() {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [onTouch, setOnTouch] = useState(false);

    useEffect(() => {
        window.addEventListener("touchmove", (e) => {
            setPosition({ x: e.touches[0].clientX - 32, y: e.touches[0].clientY - 32 });
        });
        window.addEventListener("touchend", () => setOnTouch(false));
        window.addEventListener("touchstart", (e) => {
            setOnTouch(true);
            setPosition({ x: e.touches[0].clientX - 32, y: e.touches[0].clientY - 32 });
        });
    }, []);

    return (
        <div
            className={`h-16 w-16 from-primary-300 to-primary-700 bg-gradient-to-r rounded-full  z-50 fixed cursor-none ${
                onTouch ? "" : "hidden"
            }`}
            style={{
                left: `${position.x}px`,
                top: `${position.y}px`,
            }}
        ></div>
    );
}

export default FlareCursor;
