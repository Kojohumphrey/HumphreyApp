import React, { useRef } from "react";

function App() {
  const usernameRef = useRef(null);
  const passwordRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const username = usernameRef.current.value;
    const password = passwordRef.current.value;
    console.log("Username:", username);
    console.log("Password:", password);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username:</label><br />
        <input type="text" id="username" ref={usernameRef} required /><br /><br />

        <label htmlFor="password">Password:</label><br />
        <input type="password" id="password" ref={passwordRef} required /><br /><br />

        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default App;

