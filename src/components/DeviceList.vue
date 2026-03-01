<template>
  <div class="device-list">
    <div class="list-header">
      <h2>Підключені пристрої</h2>
      <span class="device-count">{{ devices.length }} пристроїв</span>
    </div>

    <div class="devices-grid">
      <div
        v-for="device in devices"
        :key="device.id"
        class="device-card"
        :class="device.status === 'Online' ? 'card--online' : 'card--offline'"
      >
        <div class="card-icon">
          {{ device.icon }}
        </div>
        <div class="card-info">
          <h3 class="device-name">
            {{ device.name }}
          </h3>
          <p class="device-location">
            📍 {{ device.location }}
          </p>
          <p class="device-value">
            {{ device.value }}
          </p>
        </div>
        <div class="card-status">
          <span
            class="status-badge"
            :class="device.status === 'Online' ? 'badge--online' : 'badge--offline'"
          >
            <span class="status-dot" />
            {{ device.status }}
          </span>
          <p class="last-update">
            Оновлено: {{ device.lastUpdate }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const devices = ref([
  {
    id: 1,
    name: 'Датчик температури',
    icon: '🌡️',
    location: 'Серверна кімната',
    value: '22.4 °C',
    status: 'Online',
    lastUpdate: '2 хв тому',
  },
  {
    id: 2,
    name: 'Датчик вологості',
    icon: '💧',
    location: 'Склад №3',
    value: '58 %',
    status: 'Online',
    lastUpdate: '5 хв тому',
  },
  {
    id: 3,
    name: 'Датчик руху',
    icon: '🚨',
    location: 'Вхідна зона',
    value: 'Немає руху',
    status: 'Offline',
    lastUpdate: '1 год тому',
  },
])
</script>

<style scoped>
  .device-list {
    background: #1e293b;
    border-radius: 16px;
    padding: 1.5rem;
  }

  .list-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 1.5rem;
  }

    .list-header h2 {
      font-size: 1.25rem;
      font-weight: 600;
      color: #f1f5f9;
    }

  .device-count {
    background: #334155;
    color: #94a3b8;
    font-size: 0.8rem;
    padding: 0.25rem 0.75rem;
    border-radius: 999px;
  }

  .devices-grid {
    display: grid;
    gap: 1rem;
  }

  .device-card {
    display: flex;
    align-items: center;
    gap: 1rem;
    padding: 1.25rem;
    border-radius: 12px;
    border: 1px solid #334155;
    background: #0f172a;
    transition: transform 0.2s;
  }

    .device-card:hover {
      transform: translateY(-2px);
    }

  .card--online {
    border-left: 4px solid #22c55e;
  }

  .card--offline {
    border-left: 4px solid #ef4444;
    opacity: 0.7;
  }

  .card-icon {
    font-size: 2.5rem;
    flex-shrink: 0;
  }

  .card-info {
    flex: 1;
  }

  .device-name {
    font-size: 1rem;
    font-weight: 600;
    color: #f1f5f9;
    margin-bottom: 0.25rem;
  }

  .device-location {
    font-size: 0.8rem;
    color: #64748b;
    margin-bottom: 0.25rem;
  }

  .device-value {
    font-size: 1.1rem;
    font-weight: 700;
    color: #38bdf8;
  }

  .card-status {
    text-align: right;
    flex-shrink: 0;
  }

  .status-badge {
    display: inline-flex;
    align-items: center;
    gap: 0.4rem;
    font-size: 0.8rem;
    font-weight: 600;
    padding: 0.3rem 0.75rem;
    border-radius: 999px;
  }

  .badge--online {
    background: #14532d;
    color: #4ade80;
  }

  .badge--offline {
    background: #450a0a;
    color: #f87171;
  }

  .status-dot {
    width: 7px;
    height: 7px;
    border-radius: 50%;
    background: currentColor;
    animation: pulse 2s infinite;
  }

  .badge--offline .status-dot {
    animation: none;
  }

  .last-update {
    font-size: 0.7rem;
    color: #475569;
    margin-top: 0.4rem;
  }

  @keyframes pulse {
    0%, 100% {
      opacity: 1;
    }

    50% {
      opacity: 0.4;
    }
  }
</style>
