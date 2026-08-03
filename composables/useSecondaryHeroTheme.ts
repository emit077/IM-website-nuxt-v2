/**
 * Tracks whether SecondaryHeroLayout is currently mounted,
 * so shared chrome (e.g. AppNavbar) can match its blue surface.
 */
export function useSecondaryHeroTheme() {
  const activeCount = useState('secondary-hero-active-count', () => 0)
  const isSecondaryHeroActive = computed(() => activeCount.value > 0)

  function activateSecondaryHeroTheme() {
    activeCount.value += 1
  }

  function deactivateSecondaryHeroTheme() {
    activeCount.value = Math.max(0, activeCount.value - 1)
  }

  return {
    isSecondaryHeroActive,
    activateSecondaryHeroTheme,
    deactivateSecondaryHeroTheme,
  }
}
