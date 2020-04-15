import React from "react";

const style = {
    width: "98vw",
    height: "98vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
}
const infoStyle = {
    color: "red",
    fontSize: "36px"
}

const PageNotFound = () => {
    return (
        <div style={style}>
            <h1 style={infoStyle}>404! Page not found! </h1>
        </div>

    )
}
export default PageNotFound;