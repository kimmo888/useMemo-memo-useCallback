import React, { useState,useEffect, useMemo } from "react";
import List from "./List";

const initialUser = [
  { id:1 , name: "John" },
  { id:2 , name: "Sara" },
  { id:3 , name: "Bob" },
]

function App() {

  const [users, setUsers] = useState(initialUser);
  const [text, setText] = useState("");
  const [search , setSearch] = useState("");

  const filterUsers = useMemo(() =>
  users.filter(user => (user.name.toLowerCase().includes(search.toLowerCase())
  )),
  [users, search]);

  const handleAdd = (e) => {
    const newUsers ={ id: Date.now(), name: text };
    setUsers([...users, newUsers]);
    setText("");
  }

  const handleDelete = (userId) => {
    setUsers(users.filter(user => user.id !== userId));
  }

  const handleSearch = () => {
    setSearch(text);
  }

  useEffect(() => {
    console.log('app render');
  })

  return (
    <div className="App">
      <form onSubmit={(e)=> e.preventDefault() } >
      <input type="text" value={text} placeholder="Nuevo Usuario"
      onChange={(e) => setText(e.target.value)} />
      <button onClick={handleAdd} >
        Add
      </button>
      <button onClick={handleSearch} >
        Search
      </button>
      </form>
      <List users={ filterUsers } handleDelete={ handleDelete } />
    </div>
  );
}

export default App;
