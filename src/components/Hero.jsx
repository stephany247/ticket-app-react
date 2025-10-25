import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <header className="relative overflow-hidden">
      {/* Decorative circles (absolute) */}
      <div
        aria-hidden="true"
        className="hidden md:block absolute -left-20 -top-10 w-56 h-56 rounded-full bg-linear-to-br from-blue-200 to-transparent opacity-60 transform rotate-12 pointer-events-none"
      />
      <div
        aria-hidden="true"
        className="absolute right-6 top-8 w-32 h-32 rounded-full bg-linear-to-br from-indigo-100 to-transparent opacity-60 pointer-events-none"
      />

      <div className="max-w-[1440px] mx-auto px-6 md:px-8 lg:px-12">
        <div className="pt-20 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="z-10">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight">
              TicketPro — Manage issues, faster.
            </h1>
            <p className="mt-5 text-gray-600 md:max-w-lg mx-auto md:mx-0 text-base sm:text-lg">
              Streamline your support and development workflow. Create, track,
              and resolve tickets with ease — all in one intuitive dashboard.
            </p>

            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <Link
                to="/auth/login"
                className="inline-flex items-center justify-center px-4 py-2 rounded-lg border border-transparent bg-blue-600 text-white font-medium hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Login
              </Link>

              <Link
                to="/auth/register"
                className="inline-flex items-center justify-center px-4 py-2 rounded-lg border border-blue-600 bg-white text-blue-600 font-medium hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Get Started
              </Link>
            </div>
          </div>

          {/* Right side illustrative area */}
          <div className="relative">
            {/* sample illustration: simple card stack */}
            <div className="relative block">
              <div className="bg-linear-to-br from-blue-50 to-white rounded-2xl p-8 shadow-lg space-y-6">
                <div className="bg-white rounded-xl p-4 shadow-sm border-l-4 border-green-400">
                  <h3 className="font-semibold text-gray-800">Open Tickets</h3>
                  <p className="text-sm text-gray-500 mt-1">
                    Monitor active issues and respond quickly.
                  </p>
                </div>
                <div className="bg-white rounded-xl p-4 shadow-sm border-l-4 border-amber-400">
                  <h3 className="font-semibold text-gray-800">View Progress</h3>
                  <p className="text-sm text-gray-500 mt-1">
                    Stay updated on what&apos;s being handled.
                  </p>
                </div>
                <div className="bg-white rounded-xl p-4 shadow-sm border-l-4 border-gray-400">
                  <h3 className="font-semibold text-gray-800">Close Tickets</h3>
                  <p className="text-sm text-gray-500 mt-1">
                    Track resolution history for quality improvement.
                  </p>
                </div>
              </div>
            </div>

            {/* Small decorative circle overlapping hero image (absolute) */}
            <div className="hidden sm:block absolute -bottom-6 -right-6 w-20 h-20 rounded-full bg-linear-to-tr from-indigo-200 to-transparent opacity-60 pointer-events-none" />
          </div>
        </div>
      </div>

      {/* Wave SVG at the bottom of the hero */}
      <div className="w-full overflow-hidden">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#f0f6ff"
            fillOpacity="1"
            d="M0,160L24,149.3C48,139,96,117,144,128C192,139,240,181,288,213.3C336,245,384,267,432,245.3C480,224,528,160,576,154.7C624,149,672,203,720,234.7C768,267,816,277,864,256C912,235,960,181,1008,165.3C1056,149,1104,171,1152,149.3C1200,128,1248,64,1296,32C1344,0,1392,0,1416,0L1440,0L1440,320L1416,320C1392,320,1344,320,1296,320C1248,320,1200,320,1152,320C1104,320,1056,320,1008,320C960,320,912,320,864,320C816,320,768,320,720,320C672,320,624,320,576,320C528,320,480,320,432,320C384,320,336,320,288,320C240,320,192,320,144,320C96,320,48,320,24,320L0,320Z"
          ></path>
        </svg>
      </div>
    </header>
  );
}
