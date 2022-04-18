import React from "react";
import { useAppContext } from "../contexts/AppContext";

export default function Navbar() {
  const { setIsLoggedIn, loggedInUser, handleLogout } = useAppContext();

  return (
    <nav>
      {loggedInUser && (
      <span className="menu-item">{loggedInUser.displayName}</span>
      )}
      <button onClick={handleLogout}>Logout</button>
    </nav>
  );
}
