import { useToastStore } from "../store/useToast";

function Toast() {
  const { toasts, removeToast } = useToastStore();

  return (
    <div className="fixed top-12 sm:top-16 right-4 z-50 space-y-2">
      {toasts.map((toast) => (
        <div
          key={toast.id}
          onClick={() => removeToast(toast.id)}
          className={`px-4 py-3 rounded-lg shadow-md text-white cursor-pointer animate-slide-in
            ${toast.type === "success" ? "bg-green-600" : ""}
            ${toast.type === "error" ? "bg-red-600" : ""}
            ${toast.type === "info" ? "bg-blue-600" : ""}
          `}
        >
          {toast.message}
        </div>
      ))}
    </div>
  );
}

export default Toast;
