import React from 'react';



function App() {
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const username = form.username.value;
    const password = form.password.value;
    console.log("Username:", username);
    console.log("Password:", password);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="username">Username:</label><br />
      <input type="text" id="username" name="username" required /><br /><br />

        <label htmlFor="pass">Pass:</label><br />
        <input type="password" id="password" ref={passwordRef} required /><br /><br />

      <button type="submit">Login</button>
    </form>
  );
}

export default App;
