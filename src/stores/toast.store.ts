import { writable } from "svelte/store";

interface Toast {
  id?: number;
  message: string;
  type?: string;
  timeout?: number;
}

export const toasts = writable([]);

export const addToast = (toast: Toast) => {
  const id = Date.now();

  // Default for missing values
  const defaults = {
    id,
    type: "info",
    timeout: 4000,
  };

  const newToast = { ...defaults, ...toast };

  toasts.update((curr) => [...curr, newToast]);

  setTimeout(() => dismissToast(id), newToast.timeout);
};

export const dismissToast = (id: number) => {
  toasts.update((curr) => curr.filter((t) => t.id !== id));
};
