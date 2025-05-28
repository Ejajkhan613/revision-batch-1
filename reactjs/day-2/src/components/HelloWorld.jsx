const HelloWorld = () => {
    const headingTag = {
        color: '#333',
        fontSize: '24px',
        marginBottom: '10px'
    }

    const paragraphStyle = {
        color: '#666',
        fontSize: '16px'
    };

    return (
        <>
            <h1 style={headingTag}>Hello World</h1>
            <p style={paragraphStyle}>I am Ejajul Ansari</p>
        </>
    )
}

export default HelloWorld;