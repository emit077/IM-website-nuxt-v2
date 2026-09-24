/**
 * Nuxt's dev fork treats any unhandled rejection as fatal and restarts.
 * A browser disconnect (EPIPE / ECONNRESET) during that restart becomes the
 * next rejection, so the server never stays up. Ignore those two codes.
 */
function isSocketDisconnect(reason: unknown) {
  const code =
    reason && typeof reason === 'object' && 'code' in reason
      ? String((reason as { code?: unknown }).code ?? '')
      : ''
  const message =
    reason && typeof reason === 'object' && 'message' in reason
      ? String((reason as { message?: unknown }).message ?? '')
      : String(reason ?? '')

  return (
    code === 'EPIPE' ||
    code === 'ECONNRESET' ||
    message.includes('EPIPE') ||
    message.includes('ECONNRESET')
  )
}

export default defineNitroPlugin(() => {
  if (!import.meta.dev) return

  const listeners = process.listeners('unhandledRejection')
  process.removeAllListeners('unhandledRejection')

  process.on('unhandledRejection', (reason, promise) => {
    if (isSocketDisconnect(reason)) return

    for (const listener of listeners) {
      listener(reason, promise)
    }
  })
})
