/**
 * Production assets live under `/nuxt/` (`app.buildAssetsDir`).
 * A stale browser tab still requesting `/_nuxt/` falls through to Vue Router,
 * the socket closes mid-render, and the dev server restart-loops on EPIPE.
 * Answer here, before the page renderer.
 */
export default defineEventHandler((event) => {
  const path = event.path.split('?')[0] ?? ''
  if (path !== '/_nuxt' && !path.startsWith('/_nuxt/')) return

  const query = event.path.includes('?') ? event.path.slice(event.path.indexOf('?')) : ''
  const rest = path.replace(/^\/_nuxt\/?/, '')
  return sendRedirect(event, `/nuxt/${rest}${query}`, 307)
})
