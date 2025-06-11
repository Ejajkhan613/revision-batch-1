import data from '../api/data.json';

const TodoList = () => {
    return (
        <>
        <h1>Todo List</h1>
        <ul>
            {/* Without Key when we will update the values there is high chance of errors or misbehaviour */}
            {data.map((item, key) => {
                return <li style={{border: '1px solid blue', display: 'flex', gap: '5px'}} key={key}>
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                </li>
            })}
        </ul>
        </>
    )
}

export default TodoList;