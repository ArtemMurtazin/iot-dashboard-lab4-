<template>
  <div class="app">
    <header class="app-header">
      <h1>🌐 IoT Device Monitoring System</h1>
      <p class="subtitle">
        Панель моніторингу підключених пристроїв
      </p>
    </header>
    <main>
      <DeviceList />
    </main>
  </div>
</template>

<script setup>
  import DeviceList from './components/DeviceList.vue'
</script>

<style>
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    background: #0f172a;
    color: #e2e8f0;
    min-height: 100vh;
  }

  .app {
    max-width: 960px;
    margin: 0 auto;
    padding: 2rem;
  }

  .app-header {
    text-align: center;
    margin-bottom: 2.5rem;
  }

    .app-header h1 {
      font-size: 2rem;
      font-weight: 700;
      color: #38bdf8;
      margin-bottom: 0.5rem;
    }

  .subtitle {
    color: #94a3b8;
    font-size: 1rem;
  }
</style>
