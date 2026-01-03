<script setup lang="ts">
import { onMounted } from 'vue'
import { useWeather } from '@/composables/useWeather'

const { weather, condition, icon, fetchWeather } = useWeather()

onMounted(() => {
  fetchWeather()
  // Refresh every 30 minutes
  setInterval(() => {
    fetchWeather()
  }, 30 * 60 * 1000)
})
</script>

<template>
  <div class="bg-white rounded-lg border border-gray-200 p-8 shadow-md">
    <h3 class="text-2xl font-bold text-gray-900 mb-6">Current Weather in Kananga</h3>
    
    <div v-if="weather" class="space-y-6">
      <!-- Current Conditions -->
      <div class="flex items-center justify-between">
        <div>
          <div class="text-6xl mb-2">{{ icon }}</div>
          <p class="text-xl text-gray-600">{{ condition }}</p>
        </div>
        <div class="text-right">
          <div class="text-6xl font-bold text-primary-600">{{ weather.temperature }}°</div>
          <p class="text-gray-600">Kananga, Leyte</p>
        </div>
      </div>

      <!-- Additional Info -->
      <div class="grid grid-cols-2 gap-4 pt-6 border-t border-gray-200">
        <div class="text-center">
          <p class="text-gray-600 text-sm">Humidity</p>
          <p class="text-2xl font-bold text-gray-900">{{ weather.humidity }}%</p>
        </div>
        <div class="text-center">
          <p class="text-gray-600 text-sm">Wind Speed</p>
          <p class="text-2xl font-bold text-gray-900">{{ weather.windSpeed }} km/h</p>
        </div>
      </div>

      <!-- Time Info -->
      <div class="text-center pt-4 text-sm text-gray-600">
        {{ weather.isDay ? '🌞 Daytime' : '🌙 Nighttime' }}
        <p class="text-xs mt-1">Updated: {{ new Date().toLocaleTimeString() }}</p>
      </div>
    </div>

    <div v-else class="text-center py-8">
      <p class="text-gray-600">Loading weather data...</p>
    </div>
  </div>
</template>

<style scoped>
</style>
