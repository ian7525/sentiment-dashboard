import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
} from "react";
import styled, { keyframes, css } from "styled-components";

type ToastType = "success" | "error" | "info" | "warning";

interface Toast {
  id: string;
  message: string;
  type: ToastType;
  duration?: number;
}

interface ToastContextType {
  toasts: Toast[];
  addToast: (messge: string, type: ToastType, duration?: number) => void;
  removeToast: (id: string) => void;
}

const ToastContext = createContext<ToastContextType | undefined>(undefined);

const slideIn = keyframes`
    from {
        transform: translateX(100%)
        opacity: 0;
    }
    to{
        transform: translateX(0);
        opacity: 1;
    }
`;

const slideOut = keyframes`
    from {
        transform: translateX(0);
        opacity: 1;
    }
    to{
        transform: translateX(100%);
        opacity: 0;
    }
`;

const ToastContainer = styled.div`
  position: fixed;
  top: 20px;
  right: 20px;
  z-index: 1000;
  display: flex;
  flex-direction: column;
  gap: 10px;
  max-width: 350px;
`;

const ToastItem = styled.div<{ $type: ToastType; $removing: boolean }>`
  padding: 12px 16px;
  border-radius: ${({ theme }) => theme.borderRadius.small};
  box-shadow: ${({ theme }) => theme.shadows.medium};
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: white;
  animation: ${({ $removing }) =>
    $removing
      ? css`
          ${slideOut} 0.3s ease forwards
        `
      : css`
          ${slideIn} 0.3s ease forwards
        `};

  background-color: ${({ $type, theme }) => {
    switch ($type) {
      case "success":
        return theme.colors.sentiment.positive;
      case "error":
        return theme.colors.sentiment.negative;
      case "warning":
        return theme.colors.sentiment.neutral;
      case "info":
      default:
        return theme.colors.primary.main;
    }
  }};
`;

const ToastMessage = styled.div`
  flex: 1;
  margin-right: 12px;
`;

const CloseButton = styled.button`
  background: none;
  border: none;
  color: white;
  cursor: pointer;
  font-size: 18px;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  opacity: 0.8;
  transition: opacity 0.2s;

  &:hover {
    opacity: 1;
  }
`;

export const ToastProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [toasts, setToasts] = useState<(Toast & { removing?: boolean })[]>([]);

  const removeToast = useCallback((id: string) => {
    setToasts((prev) =>
      prev.map((toast) =>
        toast.id === id ? { ...toast, removing: true } : toast
      )
    );
    setTimeout(() => {
      setToasts((prev) => prev.filter((toast) => toast.id !== id));
    }, 300);
  }, []);

  const addToast = useCallback(
    (message: string, type: ToastType = "info", duration = 5000) => {
      const id = Math.random().toString(36).substring(2, 9);
      setToasts((prev) => [...prev, { id, message, type, duration }]);

      if (duration !== Infinity) {
        setTimeout(() => {
          removeToast(id);
        }, duration);
      }
      return id;
    },
    [removeToast]
  );

  useEffect(() => {
    return () => {
      setToasts([]);
    };
  }, []);

  return (
    <ToastContext.Provider value={{ toasts, addToast, removeToast }}>
      {children}
      <ToastContainer>
        {toasts.map((toast) => (
          <ToastItem
            key={toast.id}
            $type={toast.type}
            $removing={!!toast.removing}
          >
            <ToastMessage>{toast.message}</ToastMessage>
            <CloseButton onClick={() => removeToast(toast.id)}>X</CloseButton>
          </ToastItem>
        ))}
      </ToastContainer>
    </ToastContext.Provider>
  );
};

export const useToast = () => {
  const context = useContext(ToastContext);
  if (context === undefined) {
    throw new Error("useToast must be used within a ToastProvider");
  }
  return context;
};
