import { useState, createContext, useContext, ReactNode } from "react";

interface ToastContextType {
  addToast: (toast: ToastType) => void;
}

interface ToastType {
  title: string;
  description: string;
  status?: "success" | "error" | "info";
  className?: string;
  innerContainerClassName?: string;
  titleClassName?: string;
  descriptionClassName?: string;
  withImageOrIcon?: boolean;
  img?: string;
  isBorder?:boolean;
}

interface ToastProviderProps {
  children: ReactNode;
}

const ToastContext = createContext<ToastContextType | undefined>(undefined);

export const useToast = () => {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error("useToast must be used within a ToastProvider");
  }
  return context;
};

export const ToastProvider = ({ children }: ToastProviderProps) => {
  const [toasts, setToasts] = useState<ToastType[]>([]);

  const addToast = (toast: ToastType) => {
    setToasts((prevToasts) => [...prevToasts, toast]);
    setTimeout(() => {
      setToasts((prevToasts) =>
        prevToasts.filter((_, index) => index !== prevToasts.length - 1)
      );
    }, 3000);
  };

  return (
    <ToastContext.Provider value={{ addToast }}>
      {children}
      <div className={`fixed top-0 right-0 m-5 space-y-2 z-50 ${toasts[0]?.isBorder ? 'border-l-8 border-[#009436]': ''}`}>
        {toasts.map((toast, index) =>
          toast.withImageOrIcon ? (
            <div
              className={`flex items-center space-x-4 p-4 ${!toasts[0]?.isBorder ? 'rounded': ''} shadow-lg ${toast.className || ""}`}
              key={index}
            >
              <img src={toast.img} alt={toast.img} />
              <div
                className={`flex flex-col ${toast.innerContainerClassName || ``}`}
              >
                <p
                  className={`text-black text-base ${toast.titleClassName || ""}`}
                >
                  {toast.title}
                </p>
                <p
                  className={`text-black text-base ${toast.descriptionClassName} || ""`}
                >
                  {toast.description}
                </p>
              </div>
            </div>
          ) : (
            <div
              key={index}
              className={`p-4 rounded shadow-lg ${
                toast.status === "success"
                  ? "bg-green-500"
                  : toast.status === "error"
                    ? "bg-danger-70"
                    : "bg-blue-500"
              } text-primary-20 ${toast.className || ""}`}
            >
              <strong>{toast.title}</strong>
              <p>{toast.description}</p>
            </div>
          )
        )}
      </div>
    </ToastContext.Provider>
  );
};
