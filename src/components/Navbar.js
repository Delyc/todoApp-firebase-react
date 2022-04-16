import React from "react";

export default function Navbar(props) {
    
  const handleLogout = () => {
    props.setIsLoggedIn(false);
    localStorage.removeItem("isLoggedIn");
  };

  return (
    <nav>
      <button onClick={handleLogout}>Logout</button>
    </nav>
  );
}