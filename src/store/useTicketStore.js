import { create } from "zustand";
import { useAuthStore } from "./useAuthStore";

export const useTicketStore = create((set, get) => ({
  // Get current user's tickets
  getTickets: () => {
    const { user } = useAuthStore.getState();
    return user?.tickets || [];
  },

  // Create
  createTicket: (ticketData) => {
    const { user } = useAuthStore.getState();
    if (!user) return { success: false, message: "User not logged in" };

    const newTicket = {
      id: Date.now().toString(),
      ...ticketData,
      createdAt: new Date().toISOString(),
    };

    const updatedUser = {
      ...user,
      tickets: [...(user.tickets || []), newTicket],
    };

    // Update localStorage session
    localStorage.setItem("ticketapp_session", JSON.stringify(updatedUser));

    // Update users list
    const users = JSON.parse(localStorage.getItem("ticketapp_users")) || [];
    const updatedUsers = users.map((u) =>
      u.email === user.email ? updatedUser : u
    );
    localStorage.setItem("ticketapp_users", JSON.stringify(updatedUsers));

    // Update auth store user
    useAuthStore.setState({ user: updatedUser });

    return { success: true, ticket: newTicket };
  },

  // Update
  updateTicket: (id, updatedData) => {
    const { user } = useAuthStore.getState();
    if (!user) return { success: false, message: "User not logged in" };

    const updatedTickets = user.tickets.map((t) =>
      t.id === id ? { ...t, ...updatedData } : t
    );

    const updatedUser = { ...user, tickets: updatedTickets };
    localStorage.setItem("ticketapp_session", JSON.stringify(updatedUser));

    const users = JSON.parse(localStorage.getItem("ticketapp_users")) || [];
    const updatedUsers = users.map((u) =>
      u.email === user.email ? updatedUser : u
    );
    localStorage.setItem("ticketapp_users", JSON.stringify(updatedUsers));

    useAuthStore.setState({ user: updatedUser });

    return { success: true };
  },

  // Delete
  deleteTicket: (id) => {
    const { user } = useAuthStore.getState();
    if (!user) return { success: false, message: "User not logged in" };

    const updatedTickets = user.tickets.filter((t) => t.id !== id);

    const updatedUser = { ...user, tickets: updatedTickets };
    localStorage.setItem("ticketapp_session", JSON.stringify(updatedUser));

    const users = JSON.parse(localStorage.getItem("ticketapp_users")) || [];
    const updatedUsers = users.map((u) =>
      u.email === user.email ? updatedUser : u
    );
    localStorage.setItem("ticketapp_users", JSON.stringify(updatedUsers));

    useAuthStore.setState({ user: updatedUser });

    return { success: true };
  },
}));
