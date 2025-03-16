"use client";
import React, { useState } from "react";

function App() {
  const [items, setItems] = useState<string[]>([]);
  const [isSynced, setIsSynced] = useState(false);
  const [newItem, setNewItem] = useState("");

  // Step 1: Create a new branch
  // Step 2: Do tasks
  // Step 3: Commit your changes using appropriate commit message
  // Step 4: Push your changes to the remote repository
  // Step 5: Create a pull request using your full name as a title

  // Bonus:
  // - Add the type of items state
  // - Make this root page server-side component

  const USER_API = "https://jsonplaceholder.typicode.com/users";

  // TODO: Implement function to handle sync button click
  const handleSyncData = async () => {
    // ...
    try {
      const response = await fetch(USER_API);
      const data = await response.json();
      const itemList = data.map((item: { name: string }) => item.name);
      setItems(itemList);
      setIsSynced(true);
    } catch (error) {
      console.error(error);
    }
  };

  const handleSave = () => {
    if (newItem.trim() === "") return;
    setItems((prevItems) => [...prevItems, newItem]);
    setNewItem("");
    setIsSynced(false);
  };

  const handleDelete = (data: string) => {
    setItems((prevItems) => prevItems.filter((item) => item !== data));
    setIsSynced(false);
  };

  return (
    <div className="text-center mx-auto p-4">
      <h1 className="text-3xl font-semibold mb-4">Simple CRUD Application</h1>
      <button
        className="bg-blue-500 p-4 rounded-md text-white cursor-pointer"
        onClick={handleSyncData}
      >
        {isSynced ? "Unsync" : "Sync"}
      </button>
      <div className="flex gap-4 mt-4">
        <div className="w-1/2 bg-gray-50 p-4 rounded-md">
          <h2 className="text-lg font-semibold">Item List</h2>
          {items.map((item) => (
            <div
              key={item}
              className="bg-gray-100 p-2 rounded-md flex justify-between items-center mt-2"
            >
              {item}
              <button
                className="bg-red-500 p-2 rounded-md text-white cursor-pointer"
                onClick={() => handleDelete(item)}
              >
                Delete
              </button>
            </div>
          ))}
        </div>

        <div className="w-1/2 bg-gray-50 p-4 rounded-md">
          <h2 className="text-lg font-semibold">Create/Edit Item</h2>
          <label className="block text-left mt-4">Name:</label>
          <input
            className="bg-white rounded-md p-2 w-full"
            type="text"
            placeholder="Add name here"
            value={newItem}
            onChange={(e) => setNewItem(e.target.value)}
          />
          <button
            className="bg-blue-500 p-2 rounded-md text-white cursor-pointer mt-2 w-full"
            onClick={handleSave}
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
