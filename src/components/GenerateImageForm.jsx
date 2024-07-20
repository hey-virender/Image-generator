"use client";

import React, { useState } from "react";

export const GenerateImageForm = ({ onGenerate }) => {
  const [prompt, setPrompt] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (prompt) {
      onGenerate(prompt);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col items-center">
      <input
        type="text"
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        placeholder="Enter prompt"
        className="p-2 border rounded mb-2"
      />
      <button type="submit" className="bg-blue-500 text-white p-2 rounded">
        Generate Image
      </button>
    </form>
  );
};
