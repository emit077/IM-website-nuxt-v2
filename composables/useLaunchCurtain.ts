export type CurtainPhase = 'idle' | 'closing' | 'closed' | 'opening'

export function useLaunchCurtain() {
  const phase = useState<CurtainPhase>('launch-curtain-phase', () => 'idle')
  const active = useState('launch-curtain-active', () => false)
  return { phase, active }
}
