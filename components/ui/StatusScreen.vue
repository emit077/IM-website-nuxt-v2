<script setup lang="ts">
export type StatusAction = {
  label: string
  variant: 'primary' | 'secondary'
  to?: string
  href?: string
  onClick?: () => void
}

const props = defineProps<{
  variant: 'missing' | 'maintenance' | 'error'
  code?: string
  eyebrow: string
  title: string
  description: string
  actions: StatusAction[]
  links?: { label: string; to: string; onClick?: () => void }[]
  onHome?: () => void
}>()

const logo = usePublicAsset('/assets/img/logo/IM-logo-blue.svg')
const mark = usePublicAsset('/assets/img/logo/IM-mark-blue.svg')

const actionClass = (variant: StatusAction['variant']) =>
  variant === 'primary' ? 'btn-primary' : 'btn-secondary'
</script>

<template>
  <section class="status" :data-variant="props.variant">
    <span class="orb orb-blue" aria-hidden="true" />
    <span class="orb orb-amber" aria-hidden="true" />

    <header class="status-header">
      <button
        v-if="onHome"
        type="button"
        class="logo-link"
        aria-label="Indian Mentors home"
        @click="onHome"
      >
        <img :src="logo" alt="Indian Mentors" class="logo" />
      </button>
      <NuxtLink v-else to="/" class="logo-link" aria-label="Indian Mentors home">
        <img :src="logo" alt="Indian Mentors" class="logo" />
      </NuxtLink>
    </header>

    <div class="status-body">
      <div class="mark-wrap" aria-hidden="true">
        <span class="ring ring-outer" />
        <span class="ring ring-inner" />
        <span class="glow" />
        <img :src="mark" alt="" class="mark" />
      </div>

      <p v-if="code" class="code">{{ code }}</p>
      <p class="badge-pill eyebrow">{{ eyebrow }}</p>
      <h1 class="heading-display title">{{ title }}</h1>
      <p class="description">{{ description }}</p>

      <slot />

      <div v-if="actions.length" class="actions">
        <template v-for="action in actions" :key="action.label">
          <button
            v-if="action.onClick"
            type="button"
            :class="actionClass(action.variant)"
            @click="action.onClick"
          >
            {{ action.label }}
          </button>
          <a
            v-else-if="action.href"
            :href="action.href"
            :class="actionClass(action.variant)"
          >
            {{ action.label }}
          </a>
          <NuxtLink
            v-else-if="action.to"
            :to="action.to"
            :class="actionClass(action.variant)"
          >
            {{ action.label }}
          </NuxtLink>
        </template>
      </div>

      <nav v-if="links?.length" class="links" aria-label="Helpful links">
        <template v-for="link in links" :key="link.to">
          <button v-if="link.onClick" type="button" class="link" @click="link.onClick">
            {{ link.label }}
          </button>
          <NuxtLink v-else :to="link.to" class="link">{{ link.label }}</NuxtLink>
        </template>
      </nav>
    </div>
  </section>
</template>

<style scoped>
.status {
  position: relative;
  display: flex;
  min-height: 100vh;
  min-height: 100dvh;
  flex-direction: column;
  overflow-x: hidden;
  background:
    radial-gradient(circle at 50% 38%, rgba(255, 255, 255, 0.96), rgba(252, 252, 250, 0.9) 46%, #f4f7ff 100%);
  color: #1e293b;
}

.orb {
  position: absolute;
  border-radius: 999px;
  filter: blur(48px);
  pointer-events: none;
}

.orb-blue {
  top: 8%;
  left: 8%;
  width: 22rem;
  height: 22rem;
  background: rgba(59, 130, 246, 0.22);
}

.orb-amber {
  right: 4%;
  bottom: 6%;
  width: 18rem;
  height: 18rem;
  background: rgba(245, 158, 11, 0.18);
}

.status-header {
  position: relative;
  z-index: 1;
  display: flex;
  justify-content: center;
  padding: 1.75rem 1.25rem 0;
}

.logo-link {
  display: inline-flex;
  border: 0;
  background: none;
  padding: 0;
  cursor: pointer;
}

.logo {
  height: 2.5rem;
  width: auto;
}

.status-body {
  position: relative;
  z-index: 1;
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2.5rem 1.25rem 4rem;
  text-align: center;
}

.mark-wrap {
  position: relative;
  display: grid;
  width: 6.5rem;
  height: 6.5rem;
  place-items: center;
  margin-bottom: 1.25rem;
}

.ring {
  position: absolute;
  border-radius: 999px;
  border: 3px solid transparent;
}

.ring-outer {
  inset: 0;
  border-top-color: #1d4ed8;
  border-right-color: rgba(29, 78, 216, 0.16);
  animation: spin 8s linear infinite;
}

.ring-inner {
  inset: 0.55rem;
  border-bottom-color: #f59e0b;
  border-left-color: rgba(245, 158, 11, 0.2);
  animation: spin 12s linear infinite reverse;
}

.glow {
  position: absolute;
  width: 3.4rem;
  height: 3.4rem;
  border-radius: 999px;
  background: rgba(42, 47, 255, 0.14);
}

.mark {
  position: relative;
  width: 2.7rem;
  height: 2.7rem;
}

.code {
  margin-bottom: 0.85rem;
  font-family: "Plus Jakarta Sans", Inter, sans-serif;
  font-size: clamp(4.5rem, 12vw, 7rem);
  font-weight: 800;
  line-height: 0.9;
  letter-spacing: -0.06em;
  background: linear-gradient(135deg, #1d4ed8 0%, #3b82f6 55%, #f59e0b 100%);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}

.eyebrow {
  margin-bottom: 1rem;
}

.title {
  max-width: 18ch;
  font-size: clamp(1.85rem, 4vw, 2.6rem);
  line-height: 1.12;
}

.description {
  max-width: 38rem;
  margin-top: 0.9rem;
  font-size: 1.02rem;
  line-height: 1.65;
  color: #475569;
}

.actions {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 0.75rem;
  margin-top: 1.75rem;
}

.links {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 0.35rem 1.15rem;
  margin-top: 1.75rem;
}

.link {
  background: none;
  border: 0;
  padding: 0;
  font-size: 0.92rem;
  font-weight: 600;
  color: #1d4ed8;
  cursor: pointer;
}

.link:hover {
  text-decoration: underline;
}

@keyframes spin {
  to { transform: rotate(360deg); }
}

@media (max-height: 760px) {
  .status-header {
    padding-top: 1.1rem;
  }

  .status-body {
    padding: 1.25rem 1.25rem 1.75rem;
  }

  .mark-wrap {
    width: 4.75rem;
    height: 4.75rem;
    margin-bottom: 0.75rem;
  }

  .code {
    margin-bottom: 0.45rem;
    font-size: 4.25rem;
  }

  .title {
    font-size: 1.85rem;
  }

  .description {
    margin-top: 0.65rem;
  }

  .actions {
    margin-top: 1.15rem;
  }

  .links {
    margin-top: 1rem;
  }
}

@media (prefers-reduced-motion: reduce) {
  .ring {
    animation: none;
  }
}
</style>
