"use client";
import React from 'react'

import { useState } from "react";

export default function Formproduct() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ name, price });
    alert("Product Added!");
  };
  return (
    <div>
      <form onSubmit={handleSubmit} className="space-y-4 max-w-md">
        <input
          type="text"
          placeholder="Product Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="input input-bordered w-full"
        />
        <input
          type="number"
          placeholder="Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          className="input input-bordered w-full"
        />
        <button type="submit" className="btn btn-secondary w-full">Add</button>
      </form>
    </div>
  )
}
