import { useState } from "react";
import { useToastStore } from "../store/useToast";
import { useTicketStore } from "../store/useTicketStore";
import { useAuthStore } from "../store/useAuthStore";

export default function TicketManagement() {
  const { showToast } = useToastStore();
  const {
    getTickets,
    createTicket,
    updateTicket,
    deleteTicket,
  } = useTicketStore();
  const tickets = getTickets();
  const { user } = useAuthStore();

  const [editingId, setEditingId] = useState(null);
  const [form, setForm] = useState({
    title: "",
    description: "",
    priority: "",
    status: "",
  });

  // Handle input change
  const handleChange = (e) => {
    const { id, value } = e.target;
    setForm((prev) => ({ ...prev, [id]: value }));
  };

  // Handle create or update
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.title.trim()) {
      showToast("Title is required.", "error");
      return;
    }

    if (editingId) {
      // Update existing
      updateTicket(editingId, form);
      showToast("Ticket updated successfully!", "success");
    } else {
      // Create new
      createTicket(form);
      showToast("Ticket created successfully!", "success");
    }

    // Reset form
    setForm({ title: "", description: "", priority: "", status: "" });
    setEditingId(null);
  };

  // Handle edit
  const handleEdit = (ticket) => {
    setEditingId(ticket.id);
    setForm({
      title: ticket.title,
      description: ticket.description,
      priority: ticket.priority,
      status: ticket.status,
    });
  };

  // Handle delete
  const handleDelete = (id) => {
    if (!window.confirm("Are you sure you want to delete this ticket?")) return;
    deleteTicket(id);
    showToast("Ticket deleted.", "success");
  };

  return (
    <main className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
        {/* LEFT — Create/Edit Ticket Form */}
        <section className="bg-white rounded-2xl shadow-sm p-6 border border-blue-300">
          <h2 className="text-xl font-semibold mb-4">
            {editingId ? "Edit Ticket" : "Create New Ticket"}
          </h2>

          <form onSubmit={handleSubmit} className="space-y-3">
            {/* Title */}
            <div className="flex flex-col">
              <label
                htmlFor="title"
                className="text-sm font-medium text-gray-700"
              >
                Title
              </label>
              <input
                id="title"
                type="text"
                value={form.title}
                onChange={handleChange}
                placeholder="Enter ticket title"
                className="mt-1 px-3 py-2 border border-blue-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Description */}
            <div className="flex flex-col">
              <label
                htmlFor="description"
                className="text-sm font-medium text-gray-700"
              >
                Description
              </label>
              <textarea
                id="description"
                value={form.description}
                onChange={handleChange}
                placeholder="Describe the issue..."
                rows={4}
                className="mt-1 px-3 py-2 border border-blue-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
              />
            </div>

            {/* Priority */}
            <div className="flex flex-col">
              <label
                htmlFor="priority"
                className="text-sm font-medium text-gray-700"
              >
                Priority
              </label>
              <select
                id="priority"
                value={form.priority}
                onChange={handleChange}
                className="mt-1 px-3 py-2 border border-blue-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">Select priority</option>
                <option value="Low">Low</option>
                <option value="Medium">Medium</option>
                <option value="High">High</option>
              </select>
            </div>

            {/* Status */}
            <div className="flex flex-col">
              <label
                htmlFor="status"
                className="text-sm font-medium text-gray-700"
              >
                Status
              </label>
              <select
                id="status"
                value={form.status}
                onChange={handleChange}
                className="mt-1 px-3 py-2 border border-blue-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">Select status</option>
                <option value="Open">Open</option>
                <option value="In Progress">In Progress</option>
                <option value="Closed">Closed</option>
              </select>
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 mt-4 rounded-lg hover:bg-blue-700 transition-all"
            >
              {editingId ? "Update Ticket" : "Create Ticket"}
            </button>
          </form>
        </section>

        {/* RIGHT — Ticket List */}
        <section>
          <h2 className="text-xl font-semibold mb-4">Tickets</h2>

          {tickets.length == 0 ? (
            <p className="text-gray-500 text-sm">No tickets yet.</p>
          ) : (
            <div className="space-y-3">
              {tickets.map((ticket) => (
                <div
                  key={ticket.id}
                  className="bg-white rounded-2xl shadow-sm p-5 border border-blue-300"
                >
                  <div className="flex items-center justify-between">
                    <h3 className="font-semibold capitalize text-gray-900">
                      {ticket.title}
                    </h3>
                    <span
                      className={`text-xs px-2 py-1 rounded-full ${
                        ticket.status === "Closed"
                          ? "bg-gray-100 text-gray-700"
                          : ticket.status === "In Progress"
                          ? "bg-amber-100 text-amber-700"
                          : "bg-green-100 text-green-700"
                      }`}
                    >
                      {ticket.status || "Open"}
                    </span>
                  </div>
                  <p className="text-sm text-gray-600 mt-2">
                    {ticket.description || "No description provided."}
                  </p>
                  <div className="flex items-center justify-between mt-3 text-sm">
                    <span
                      className={`font-medium ${
                        ticket.priority === "High"
                          ? "text-red-600"
                          : ticket.priority === "Medium"
                          ? "text-yellow-600"
                          : "text-green-600"
                      }`}
                    >
                      Priority: {ticket.priority || "Low"}
                    </span>
                    <div className="flex gap-2">
                      <button
                        onClick={() => handleEdit(ticket)}
                        className="text-blue-600 hover:underline text-sm"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => handleDelete(ticket.id)}
                        className="text-red-600 hover:underline text-sm"
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </section>
      </div>
    </main>
  );
}
