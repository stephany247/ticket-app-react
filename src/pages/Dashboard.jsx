import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useToastStore } from "../store/useToast";
import { useAuthStore } from "../store/useAuthStore";
import { useTicketStore } from "../store/useTicketStore";

function Dashboard() {
  const navigate = useNavigate();
  const { showToast } = useToastStore();
  const { user, logout } = useAuthStore();
  const { getTickets } = useTicketStore();
  const tickets = getTickets();

  const [ticketStats, setTicketStats] = useState({
    total: 0,
    open: 0,
    resolved: 0,
    in_progress: 0,
  });

  useEffect(() => {
    if (!user) {
      showToast("Unauthorized — please log in first.", "error");
      navigate("/auth/login");
      return;
    }

    // Fetch or simulate ticket data from localStorage
    const total = tickets.length;
    const open = tickets.filter((ticket) => ticket.status === "Open").length;
    const resolved = tickets.filter((t) => t.status === "Closed").length;
    const in_progress = tickets.filter((t) => t.status === "In Progress").length;

    setTicketStats({ total, open, resolved, in_progress });
  }, [navigate, showToast, user]);

  const handleLogout = () => {
    logout();
    showToast("Logged out successfully!", "success");
    navigate("/");
  };

  if (!user) return null;

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center p-4">
      <div className="w-full max-w-[1440px] mx-auto bg-white shadow-md rounded-xl p-8">
        <h1 className="text-2xl font-bold text-gray-800 text-center mb-2">
          Welcome, {user.name}!
        </h1>
        <p className="text-gray-600 text-center mb-8">
          Here&apos;s an overview of your ticket activity 🚀
        </p>

        {/* Stats Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl mx-auto mb-8 capitalize">
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-5 text-center">
            <h3 className="text-lg font-semibold text-blue-700">
              Total Tickets
            </h3>
            <p className="text-3xl font-bold mt-2">{ticketStats.total}</p>
          </div>
          <div className="bg-green-50 border border-green-200 rounded-lg p-5 text-center">
            <h3 className="text-lg font-semibold text-green-700">
              Open Tickets
            </h3>
            <p className="text-3xl font-bold mt-2">{ticketStats.open}</p>
          </div>
          <div className="bg-amber-50 border border-amber-200 rounded-lg p-5 text-center">
            <h3 className="text-lg font-semibold text-amber-700">
            Tickets in progress
            </h3>
            <p className="text-3xl font-bold mt-2">{ticketStats.in_progress}</p>
          </div>
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-5 text-center">
            <h3 className="text-lg font-semibold text-gray-700">
              Closed Tickets
            </h3>
            <p className="text-3xl font-bold mt-2">{ticketStats.resolved}</p>
          </div>
        </div>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <button
            onClick={() => navigate("/tickets")}
            className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md transition"
          >
            Manage Tickets
          </button>
          <button
            onClick={handleLogout}
            className="w-full sm:w-auto bg-red-600 hover:bg-red-700 text-white font-medium py-2 px-4 rounded-md transition"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
