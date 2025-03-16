"use client";
import React, { useState } from "react";

function App() {
  const [items, setItems] = useState([]);
  const [isSynced, setIsSynced] = useState(false);

  const USER_API = "https://jsonplaceholder.typicode.com/users";

  // TODO: Implement function to handle sync button click
  const handleSyncData = () => {
    // ...
  };

  return (
    <div className="text-center mx-auto p-4">
      <h1 className="text-3xl font-semibold mb-4">Simple CRUD Application</h1>
      <button
        className="bg-blue-500 p-4 rounded-md text-white cursor-pointer"
        onClick={handleSyncData}
      >
        Sync
      </button>
      {/* TODO: Implement ItemList component */}
      {/* TODO: Implement ItemForm component */}
    </div>
  );
}

export default App;

// Bonus:
// - Add the type of items state
// - Make this root page server-side component
