const HelloWorld = () => {
    let message = "Hello Ejajul Ansari";
    let bool = false;

    let toggle = () => {
        document.getElementById("msg").innerText = bool ? message : "";
        bool = !bool;
    }

    return (
        <>
            <p id='msg'>{message}</p>
            <button onClick={() => toggle()}>Show/Hide Button</button>
        </>
    )
}

export default HelloWorld;