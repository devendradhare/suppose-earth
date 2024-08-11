import React, { useState } from "react";
function useSignup() {
  const [loading, setLoading] = useState(false);

  async function signup(user) {
    setLoading(true);
    // console.log("user: ", user);
    try {
      let response = await fetch("http://localhost:3000/api/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });

      setLoading(false);
      response = await response.json();
      return response;
      
    } catch (error) {
      setLoading(false);
      return error;
    }
  }

  return { loading, signup };
}
export default useSignup;
