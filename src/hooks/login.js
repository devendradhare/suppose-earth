"use client";
import React, { useState } from "react";

function useLogin() {
  const [loading, setLoading] = useState(false);
  async function login({ userForm }) {
      // login code will be here
      try {
        
      } catch (error) {
        
      }
    return null;
  }
  return { loading, login };
}

export default useLogin;
