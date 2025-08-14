// import React, { createContext, useContext, useState } from 'react';

// export const AuthContext = createContext();

// export default function AuthProvider({ children }) {
//   let initialAuthUser;

//   try {
//     const storedUser = localStorage.getItem("Users");
//     initialAuthUser = storedUser ? JSON.parse(storedUser) : undefined;
//   } catch (e) {
//     console.error("Invalid JSON in localStorage: ", e);
//     initialAuthUser = undefined;
//     localStorage.removeItem("Users"); // optional: clear the bad value
//   }

//   const [authUser, setAuthUser] = useState(initialAuthUser);

//   return (
//     <AuthContext.Provider value={[authUser, setAuthUser]}>
//       {children}
//     </AuthContext.Provider>
//   );
// }

// export const useAuth = () => useContext(AuthContext);


import React, { createContext, useContext, useState, useEffect } from 'react';

export const AuthContext = createContext();

export default function AuthProvider({ children }) {
  const [authUser, setAuthUser] = useState(() => {
    try {
      const storedUser = localStorage.getItem("authUser");
      return storedUser ? JSON.parse(storedUser) : null;
    } catch (e) {
      console.error("Invalid JSON in localStorage: ", e);
      localStorage.removeItem("authUser");
      return null;
    }
  });

  // Sync to localStorage on change
  useEffect(() => {
    if (authUser) {
      localStorage.setItem("authUser", JSON.stringify(authUser));
    } else {
      localStorage.removeItem("authUser");
    }
  }, [authUser]);

  return (
    <AuthContext.Provider value={[authUser, setAuthUser]}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
