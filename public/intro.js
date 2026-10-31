// The completed composition is the default state. This only opts a first visit into motion.
try {
  const key = 'goras-intro-v1'
  if (!sessionStorage.getItem(key) && !matchMedia('(prefers-reduced-motion: reduce)').matches && document.visibilityState === 'visible') {
    document.documentElement.dataset.intro = 'play'
    sessionStorage.setItem(key, 'seen')
  }
} catch {
  // Storage and motion are optional.
}
