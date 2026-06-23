export type ToastType = 'success' | 'error'

export type ToastOptions = {
  title?: string
  message: string
  type?: ToastType
  duration?: number
}

export type AppToast = Required<Pick<ToastOptions, 'message' | 'type'>> & {
  id: number
  title?: string
  duration: number
}

const DEFAULT_TOAST_DURATION = 4200

export function useToast() {
  const toasts = useState<AppToast[]>('app-toasts', () => [])

  function dismiss(id: number) {
    toasts.value = toasts.value.filter((toast) => toast.id !== id)
  }

  function show(options: ToastOptions) {
    const toast: AppToast = {
      id: Date.now() + Math.floor(Math.random() * 1000),
      type: options.type ?? 'success',
      title: options.title,
      message: options.message,
      duration: options.duration ?? DEFAULT_TOAST_DURATION,
    }

    toasts.value = [...toasts.value, toast]

    if (import.meta.client && toast.duration > 0) {
      window.setTimeout(() => dismiss(toast.id), toast.duration)
    }

    return toast.id
  }

  function success(message: string, options: Omit<ToastOptions, 'message' | 'type'> = {}) {
    return show({ ...options, message, type: 'success' })
  }

  function error(message: string, options: Omit<ToastOptions, 'message' | 'type'> = {}) {
    return show({ ...options, message, type: 'error' })
  }

  return {
    toasts,
    show,
    success,
    error,
    dismiss,
  }
}
