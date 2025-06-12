import { useState } from 'react';
import initialData from '../api/data.json';

const TodoList = () => {
    const [data, setData] = useState(initialData);
    const [form, setForm] = useState({ title: '', description: '' });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!form.title || !form.description) return;

        const newItem = {
            title: form.title,
            description: form.description
        };

        setData(prevData => [...prevData, newItem]);
        setForm({ title: '', description: '' }); // clear form
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="title"
                    id="title"
                    value={form.title}
                    onChange={handleChange}
                    placeholder="Title"
                />
                <input
                    type="text"
                    name="description"
                    id="description"
                    value={form.description}
                    onChange={handleChange}
                    placeholder="Description"
                />
                <button type="submit">Submit</button>
            </form>

            <h1>Todo List</h1>
            <ul>
                {data.map((item, key) => (
                    <li
                        key={key}
                        style={{ border: '1px solid blue', display: 'flex', gap: '5px' }}
                    >
                        <h3>{item.title}</h3>
                        <p>{item.description}</p>
                    </li>
                ))}
            </ul>
        </>
    );
};

export default TodoList;