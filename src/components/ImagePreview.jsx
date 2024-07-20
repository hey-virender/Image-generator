"use client";

import React from "react";

export const ImagePreview = ({ imageSrc }) => {
  if (!imageSrc) return null;

  return (
    <div className="mt-8 flex justify-center">
      <img src={imageSrc} alt="Generated" className="rounded-lg shadow-md" />
    </div>
  );
};
