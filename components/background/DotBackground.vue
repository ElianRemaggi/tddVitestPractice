<template>
    <div class="particle-background">
        <!-- Partículas brillantes -->
        <div v-for="(particle, index) in particles" :key="index" class="particle" :style="getParticleStyle(particle)">
        </div>

        <!-- Contenido que irá sobre el fondo -->
        <div class="content">
            <slot></slot>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

interface Particle {
    x: number
    y: number
    size: number
    opacity: number
    delay: number
    color: string
    velocity: {
        x: number
        y: number
    }
}

const particles = ref<Particle[]>([])
const animationId = ref<number>()

// Configuración ajustable
const config = {
    particleCount: 30,
    colors: [
        { name: 'emerald', value: '#34D399' },
        { name: 'violet', value: '#A78BFA' },
        { name: 'cyan', value: '#22D3EE' }
    ],
    minSize: 1,
    maxSize: 15,
    minOpacity: 0.3,
    maxOpacity: 0.8,
    movementSpeed: 0.01,
    maxVelocity: 0.02
}

const getParticleStyle = (particle: Particle) => {
    return {
        left: `${particle.x}%`,
        top: `${particle.y}%`,
        width: `${particle.size}px`,
        height: `${particle.size}px`,
        opacity: particle.opacity,
        animationDelay: `${particle.delay}s`,
        backgroundColor: particle.color,
        boxShadow: `0 0 8px 2px ${particle.color}${Math.floor(particle.opacity * 255).toString(16).padStart(2, '0')}`
    }
}

// Genera partículas con distribución uniforme mejorada
const generateParticles = (): Particle[] => {
    const gridSize = Math.ceil(Math.sqrt(config.particleCount))
    const cellSize = 100 / gridSize
    const particles: Particle[] = []

    for (let i = 0; i < config.particleCount; i++) {
        const row = Math.floor(i / gridSize)
        const col = i % gridSize

        // Posición base en la cuadrícula con pequeño desplazamiento aleatorio
        const x = (col + 0.5) * cellSize + (Math.random() - 0.5) * cellSize * 0.8
        const y = (row + 0.5) * cellSize + (Math.random() - 0.5) * cellSize * 0.8

        const colorObj = config.colors[Math.floor(Math.random() * config.colors.length)]

        particles.push({
            x: Math.max(0, Math.min(100, x)),
            y: Math.max(0, Math.min(100, y)),
            size: Math.random() * (config.maxSize - config.minSize) + config.minSize,
            opacity: Math.random() * (config.maxOpacity - config.minOpacity) + config.minOpacity,
            delay: Math.random() * 10,
            color: colorObj.value,
            velocity: {
                x: (Math.random() - 0.5) * config.maxVelocity,
                y: (Math.random() - 0.5) * config.maxVelocity
            }
        })
    }

    return particles
}

// Anima las partículas
const animateParticles = () => {
    particles.value = particles.value.map(particle => {
        let newX = particle.x + particle.velocity.x
        let newY = particle.y + particle.velocity.y

        // Rebotar en los bordes
        if (newX <= 0 || newX >= 100) particle.velocity.x *= -1
        if (newY <= 0 || newY >= 100) particle.velocity.y *= -1

        // Movimiento suave con cambio gradual de dirección
        particle.velocity.x += (Math.random() - 0.5) * config.movementSpeed
        particle.velocity.y += (Math.random() - 0.5) * config.movementSpeed

        // Limitar velocidad máxima
        particle.velocity.x = Math.max(-config.maxVelocity, Math.min(config.maxVelocity, particle.velocity.x))
        particle.velocity.y = Math.max(-config.maxVelocity, Math.min(config.maxVelocity, particle.velocity.y))

        return {
            ...particle,
            x: Math.max(0, Math.min(100, newX)),
            y: Math.max(0, Math.min(100, newY))
        }
    })

    animationId.value = requestAnimationFrame(animateParticles)
}

onMounted(() => {
    particles.value = generateParticles()
    animateParticles()
})

onUnmounted(() => {
    if (animationId.value) {
        cancelAnimationFrame(animationId.value)
    }
})
</script>

<style scoped>
.particle-background {
    position: relative;
    width: 100%;
    height: 100%;
    overflow: hidden;
    background: linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #0f172a 100%);
}

.particle {
    position: absolute;
    border-radius: 50%;
    filter: blur(1px);
    animation: float 15s infinite ease-in-out;
    transform: translateZ(0);
    will-change: transform;
}

.content {
    position: relative;
    z-index: 10;
    width: 100%;
    height: 100%;
}

@keyframes float {

    0%,
    100% {
        transform: translateY(0) scale(1);
    }

    50% {
        transform: translateY(-10px) scale(1.1);
    }
}
</style>