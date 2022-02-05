import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function AddLine() {
    const [field_text, setText] = useState("");
    const [todo_items, setItems] = useState([])

    const handleSubmit = (event) => {
        /*alert(field_text);*/
        if (field_text) {
            setItems(todo_items.concat(field_text))
        }
        setText("");
        event.preventDefault();
    }

    const handleRemove = (event) => {
        const updatedItems = todo_items.filter((item) => item !== event.target.id);

        setItems(updatedItems)
    }

    return (
        <div className="App-content">
            <form onSubmit={handleSubmit} className="Item-form">
                <label>To-Do Item: </label>
                <input
                    type="text"
                    value={field_text}
                    onChange={(e) => setText(e.target.value)}
                />
                <button type="submit">
                    Add
                </button>
            </form>
            <ul>
                {todo_items.map(item => (
                    <li>
                        <button type="button" id={item} onClick={handleRemove}>
                            Done
                        </button>
                        To-Do: <span className="Activity">{item}</span>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default AddLine;