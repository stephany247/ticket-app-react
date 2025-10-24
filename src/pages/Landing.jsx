import Hero from "../components/Hero";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";

export default function Landing() {
  return (
    <main className="min-h-screen flex flex-col">
      <div className="w-full bg-white">
        <div className="max-w-360 mx-auto">
          <Hero />
        </div>
      </div>
      {/* ===== FEATURES SECTION ===== */}
      <section className="bg-blue-50 pb-12">
        <div className="max-w-[1440px] mx-auto px-6 md:px-8 lg:px-12">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Why Choose TicketPro?
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              {
                title: "Quick Ticket Creation",
                desc: "Log issues in seconds with streamlined forms and smart validation.",
                icon: <Icon icon="fluent-emoji-flat:ticket" />,
              },
              {
                title: "Clear Status Tracking",
                desc: "Stay on top of open, in-progress, and closed tasks with intuitive tags.",
                icon: <Icon icon="twemoji:bar-chart" />,
              },
              {
                title: "Secure Sessions",
                desc: "Protected routes ensure only logged-in users can access dashboards.",
                icon: <Icon icon="fluent-color:lock-shield-16" />,
              },
              {
                title: "Resolve & Archive",
                desc: "Close or archive tickets with clear audit-friendly timestamps.",
                icon: <Icon icon="streamline-ultimate-color:archive-books" />,
              },

              {
                title: "LocalStorage Auth",
                desc: "Session tokens simulated with `ticketapp_session` for simplicity.",
                icon: <Icon icon="streamline-color:local-storage-folder" />,
              },
              {
                title: "Responsive Layout",
                desc: "Looks great on any device — mobile, tablet, or desktop.",
                icon: (
                  <Icon icon="streamline-ultimate-color:responsive-design-1" />
                ),
              },
            ].map((f, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl shadow p-6 hover:shadow-md transition"
              >
                <div className="text-4xl mb-3">{f.icon}</div>
                <h3 className="text-lg font-semibold text-gray-800">
                  {f.title}
                </h3>
                <p className="mt-2 text-gray-600 text-sm">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
