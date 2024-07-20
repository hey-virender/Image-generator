"use client";

import React, { useState, useEffect } from "react";
import { Header } from "@/components/Header";
import { GenerateImageForm } from "@/components/GenerateImageForm";
import { ImagePreview } from "@/components/ImagePreview";
import { AuthSection } from "@/components/AuthSection";
import { auth } from "@/lib/firebase";

// List of image filenames in the public/images directory
const images = ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg"];

const getRandomImage = () => {
  const randomIndex = Math.floor(Math.random() * images.length);
  return `/images/${images[randomIndex]}`;
};

const Page = () => {
  const [generatedImage, setGeneratedImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });

    return () => unsubscribe();
  }, []);

  const handleLogout = () => {
    auth.signOut();
    setUser(null);
  };

  const handleGenerate = async (prompt) => {
    setLoading(true);
    console.log("Generating image for prompt:", prompt);

    const userId = user ? user.uid : "anonymous";

    try {
      const response = await fetch("/api/generate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ userId, prompt }),
      });

      if (response.ok) {
        const data = await response.json();
        setGeneratedImage(data.image);
      } else {
        const error = await response.json();
        console.error("Error:", error);
      }
    } catch (error) {
      console.error("Fetch error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <Header
        userName={user ? user.displayName : "Guest"}
        onLogout={handleLogout}
      />
      <AuthSection />
      <div className="flex justify-center gap-5">
        <GenerateImageForm onGenerate={handleGenerate} />
        {loading && (
          <div className="flex justify-center mt-8">
            <div className="animate-spin h-8 w-8 border-4 border-t-4 border-blue-500 rounded-full"></div>
          </div>
        )}
        <ImagePreview imageSrc={generatedImage} />
      </div>
    </div>
  );
};

export default Page;
