import { create } from "zustand";

const SESSION_DURATION = 1000 * 60 * 60; // 1 hr

const getStoredSession = () => {
  const session = JSON.parse(localStorage.getItem("ticketapp_session"));
  if (!session) return null;

  if (Date.now() > session.expiry) {
    localStorage.removeItem("ticketapp_session");
    return null; // session expired
  }

  return session;
};

export const useAuthStore = create((set) => ({
  user: getStoredSession(),
  isAuthenticated: !!getStoredSession(),
  loading: false,

  // login function
  login: async (email, password) => {
    set({ loading: true });
    try {
      await new Promise((r) => setTimeout(r, 1000));
      const users = JSON.parse(localStorage.getItem("ticketapp_users")) || [];

      const existingUser = users.find(
        (user) => user.email === email && user.password === password
      );

      if (!existingUser) throw new Error("Email or password is incorrect.");

      const sessionData = {
        ...existingUser,
        expiry: Date.now() + SESSION_DURATION,
      };
      localStorage.setItem("ticketapp_session", JSON.stringify(sessionData));

      set({ user: sessionData, isAuthenticated: true, loading: false });
      return { success: true, user: sessionData };
    } catch (error) {
      set({ loading: false });
      return { success: false, message: error.message };
    }
  },

  // register function
  register: async (name, email, password) => {
    set({ loading: true });
    try {
      await new Promise((r) => setTimeout(r, 1000));
      const users = JSON.parse(localStorage.getItem("ticketapp_users")) || [];
      if (users.some((u) => u.email === email))
        throw new Error("Email already registered");

      const newUser = { name, email, password, tickets: [] };
      users.push(newUser);
      localStorage.setItem("ticketapp_users", JSON.stringify(users));

      const sessionData = { ...newUser, expiry: Date.now() + SESSION_DURATION };
      localStorage.setItem("ticketapp_session", JSON.stringify(sessionData));

      set({ user: sessionData, isAuthenticated: true, loading: false });
      return { success: true, user: sessionData };
    } catch (error) {
      set({ loading: false });
      return { success: false, message: error.message };
    }
  },

  // logout function
  logout: () => {
    localStorage.removeItem("ticketapp_session");
    set({ user: null, isAuthenticated: false });
  },

  // check and refresh session
//   refreshSession: () => {
//     const session = getStoredSession();
//     if (!session) {
//       set({ user: null, isAuthenticated: false });
//       return false;
//     }
//     set({ user: session, isAuthenticated: true });
//     return true;
//   },

}));
