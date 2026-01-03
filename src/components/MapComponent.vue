<script setup lang="ts">
import { ref, onMounted } from 'vue'
import L from 'leaflet'
import { useWeather } from '@/composables/useWeather'

const mapContainer = ref<HTMLDivElement | null>(null)
const { coordinates } = useWeather()

let map: L.Map

onMounted(() => {
  if (!mapContainer.value) return

  // Create map
  map = L.map(mapContainer.value).setView([coordinates.lat, coordinates.lng], 13)

  // Fix map sizing
  setTimeout(() => {
    if (map) map.invalidateSize()
  }, 100)

  // Add OpenStreetMap tiles
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors',
    maxZoom: 19
  }).addTo(map)

  // Add marker for Kananga
  L.marker([coordinates.lat, coordinates.lng])
    .bindPopup('<strong>Kananga, Leyte</strong><br/>Municipal Hall<br/>Kananga 6531')
    .addTo(map)
    .openPopup()

  // Fix for Leaflet icon issue with Vite
  const defaultIcon = L.icon({
    iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41],
    shadowAnchor: [12, 41]
  })
  L.Marker.prototype.options.icon = defaultIcon
})
</script>

<template>
  <div class="bg-white rounded-lg sm:rounded-xl border border-gray-200 overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
    <h3 class="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 p-4 sm:p-6 pb-3 sm:pb-4">📍 Location Map</h3>
    <div
      ref="mapContainer"
      class="w-full h-64 sm:h-80 md:h-96 lg:h-[500px]"
      role="application"
      aria-label="Interactive map of Kananga, Leyte"
    ></div>
    <div class="p-4 sm:p-6 border-t border-gray-200 bg-gray-50 text-xs sm:text-sm text-gray-700">
      <p class="font-semibold text-gray-900 mb-2">📍 Kananga, Leyte</p>
      <p class="mb-2">Coordinates: {{ coordinates.lat }}°N, {{ coordinates.lng }}°E</p>
      <a
        href="https://www.openstreetmap.org/?mlat=10.0892&mlon=125.0524"
        target="_blank"
        rel="noopener noreferrer"
        class="inline-block text-primary-600 hover:text-primary-700 hover:underline font-semibold transition-colors"
      >
        View on OpenStreetMap →
      </a>
    </div>
  </div>
</template>

<style scoped>
:deep(.leaflet-container) {
  font-family: 'Inter', sans-serif;
}
</style>
