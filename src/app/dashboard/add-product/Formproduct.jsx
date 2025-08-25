"use client";
import React from 'react'

import { useState } from "react";

export default function Formproduct() {
  const [form, setForm] = useState({
    name: "",
    description: "",
    price: "",
    image: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch("/api/products", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...form, price: parseFloat(form.price) }),
    });

    const data = await res.json();
    if (data.success) {
      alert("Product added successfully!");
      setForm({ name: "", description: "", price: "", image: "" });
    } else {
      alert("Error: " + data.error);
    }
  };
  return (
    <div className="max-w-md mx-auto p-6 bg-primary/10 text-base-content rounded-xl shadow-lg">
      <h1 className="text-2xl font-bold mb-4">Add Product</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Product Name"
          className="input input-bordered w-full"
          required
        />
        <textarea
          name="description"
          value={form.description}
          onChange={handleChange}
          placeholder="Product Description"
          className="textarea textarea-bordered w-full"
          required
        />
        <input
          type="number"
          name="price"
          value={form.price}
          onChange={handleChange}
          placeholder="Price"
          className="input input-bordered w-full"
          required
        />
        <input
          name="image"
          value={form.image}
          onChange={handleChange}
          placeholder="Image URL"
          className="input input-bordered w-full"
        />
        <button type="submit" className="btn bg-primary/10 w-full">
          Add Product
        </button>
      </form>
    </div>
  )
}
