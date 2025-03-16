"use client";
import React, { useEffect, useState } from "react";

interface ItemType {
  id: number,
  name: string
}

function App() {
  const [items, setItems] = useState<ItemType[]>([]);
  const [isSynced, setIsSynced] = useState(false);
  const [formData, setFormData] = useState('');

  // Step 1: Create a new branch
  // Step 2: Do tasks
  // Step 3: Commit your changes using appropriate commit message
  // Step 4: Push your changes to the remote repository
  // Step 5: Create a pull request using your full name as a title

  // Bonus:
  // - Add the type of items state
  // - Make this root page server-side component

  const USER_API = "https://jsonplaceholder.typicode.com/users";

  const handleSyncData = async () => {
    const result = await fetch(USER_API);
    const data = await result.json()
    console.log(data);
    
    setItems(data)
  }

  useEffect(()=> {
    handleSyncData()
  }, [])

  // TODO: Implement function to handle sync button click
  // const handleSyncData = () => {
    
  // };

  const handleChange = (name: string)=> {
      setFormData(name);
  }

  const handleDelete = async (id: number) => {
   const deletedData = items.filter((item)=>item.id !== id)
   setItems(deletedData)
  }

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

      <div className="sm:flex items-start justify-between gap-4 my-4">
        <div className="w-full">
          <h2 className="text-center text-3xl font-semibold">Item List</h2>
          <ul>
            {items?.map((item)=>(
              <li key={item.id} className="flex bg-gray-100 mb-2 shadow p-2 justify-between">
                <p className="font-semibold">{item.name}</p>
                <button
                onClick={()=> handleDelete(item.id)}
                 type="button" className="bg-red-400 rounded p-1 text-white">Delete</button>
              </li>
            ))}
            
          </ul>
        </div>
      {/* TODO: Implement ItemForm component */}

        <div className="w-full">
          <h2 className="text-center text-3xl font-semibold">Create/edit Item</h2>
          <div className="">
             <label htmlFor="name">Name:</label>
             <input className="w-full rounded border p-2 mb-2" onChange={(e) => handleChange(e.target.value)} id="name" type="text" name="formData"/>
             <button 
               type="button"  
               className="text-white rounded bg-blue-500 p-2 "
               onClick={() => {
               const newItem = { id: items.length + 1, name: formData };
               setItems([...items, newItem]);
               setFormData('');
               }}
             >
               Save
             </button>
          </div>
        </div>
      </div>



    </div>
  );
}

export default App;
