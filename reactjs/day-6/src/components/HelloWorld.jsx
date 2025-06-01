const HelloWorld = (props) => {
    return (
        <>
            <h1 style={{ fontFamily: "cursive" }}>Hello World from {props.name}</h1>
            <p className="paragraph">I am {props.age} years old</p>
        </>
    )
}

export default HelloWorld;