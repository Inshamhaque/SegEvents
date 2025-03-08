"use client";
import React from "react";
import { signInWithGoogle, signInWithGithub } from "../firebase-config/config";

const Auth = () => {
  const handleGoogleLogin = async () => {
    const token = await signInWithGoogle();
    if (token) {
      // Send token to backend for verification
      await fetch("http://localhost:5000/protected", {
        method: "GET",
        headers: { Authorization: `Bearer ${token}` },
      });
    }
  };

  const handleGithubLogin = async () => {
    const token = await signInWithGithub();
    if (token) {
      await fetch("http://localhost:5000/protected", {
        method: "GET",
        headers: { Authorization: `Bearer ${token}` },
      });
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <button onClick={handleGoogleLogin}>Sign in with Google</button>
      <button onClick={handleGithubLogin}>Sign in with GitHub</button>
    </div>
  );
};

export default Auth;
