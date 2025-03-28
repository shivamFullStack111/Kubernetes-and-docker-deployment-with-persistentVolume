// Frontend (React Inline Styles)
import { useState, useEffect } from "react";

export default function TodoApp() {
  const [todos, setTodos] = useState([]);
  const [text, setText] = useState("");

  useEffect(() => {
    console.log(import.meta.env.VITE_BACKEND_URL);
    fetch(`${import.meta.env.VITE_BACKEND_URL}/todos`)
      .then((res) => res.json())
      .then(setTodos);
  }, []);

  const addTodo = async () => {
    const res = await fetch(`${import.meta.env.VITE_BACKEND_URL}/add`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ text }),
    });
    const newTodo = await res.json();
    setTodos([...todos, newTodo]);
    setText("");
  };

  return (
    <div
      style={{
        padding: "20px",
        maxWidth: "400px",
        margin: "auto",
        backgroundColor: "#fff",
        borderRadius: "10px",
        boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
      }}
    >
      <h1 style={{ fontSize: "20px", fontWeight: "bold" }}>Todo List</h1>
      <div style={{ display: "flex", gap: "10px", marginBottom: "10px" }}>
        <input
          style={{
            flexGrow: 1,
            padding: "8px",
            border: "1px solid #ccc",
            borderRadius: "5px",
          }}
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button
          style={{
            backgroundColor: "#007bff",
            color: "#fff",
            padding: "8px 12px",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
          onClick={addTodo}
        >
          Add
        </button>
      </div>
      <ul style={{ listStyleType: "none", padding: 0 }}>
        {todos.map((todo) => (
          <li
            key={todo._id}
            style={{ padding: "8px", borderBottom: "1px solid #ddd" }}
          >
            {todo.text}
          </li>
        ))}
      </ul>
      <marquee behavior="" direction="">
        <div style={{ display: "flex", gap: 20 }}>
          {" "}
          <p>hiii</p>
          <p>byy</p>
          <p>ddd</p>
          <p>jhgybh</p>
          <p>ddd</p>
          <p>kjhn</p>
          <p>ddd</p>
        </div>
      </marquee>
    </div>
  );
}
