export default function Footer() {
  return (
    <footer className="bg-white border-t border-blue-300">
      <div className="max-w-[1440px] mx-auto px-6 md:px-8 lg:px-12 py-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-600">
        <div className="mb-3 md:mb-0">
          <span className="font-semibold text-gray-800">TicketPro</span> — built with accessibility in mind.
        </div>

        <div className="flex gap-4">
          <a href="#" className="hover:text-blue-600">Privacy</a>
          <a href="#" className="hover:text-blue-600">Terms</a>
          <a href="#" className="hover:text-blue-600">Support</a>
        </div>
      </div>
    </footer>
  );
}
