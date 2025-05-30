import react from "react";

const HelloWorld = (props) => {
    return (
        <>
            <h1>Hello World from {props.name}</h1>
            {props.children}
        </>
    )
}

export default HelloWorld;