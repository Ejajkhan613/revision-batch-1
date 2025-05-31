import react from "react";

const HelloWorld = (props) => {
    return (
        <>
            <h1>Hello World from {props.name}</h1>
            <p>I am {props.age} years old</p>
        </>
    )
}

export default HelloWorld;