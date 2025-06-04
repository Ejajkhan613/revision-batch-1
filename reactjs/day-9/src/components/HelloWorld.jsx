const HelloWorld = () => {
    let message1 = "Hello Ejajul Ansari";
    let message2 = "Hi Ejajul Ansari";
    let bool = true;

    let toggle = () => {
        document.getElementById("msg").innerText = bool ? message2 : message1;
        bool = !bool;
    }

    return (
        <>
            <p id='msg'>{message1}</p>
            <button onClick={() => toggle()}>Toggle Button</button>
        </>
    )
}

export default HelloWorld;