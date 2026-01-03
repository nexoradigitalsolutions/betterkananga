<script setup lang="ts">
import { ref, onMounted, computed } from 'vue'
import { useWeather } from '@/composables/useWeather'

const mapContainer = ref<HTMLDivElement | null>(null)
const mapError = ref(false)
const { coordinates } = useWeather()

// Exact New Kananga Municipal Hall coordinates
const KANANGA_EXACT = {
  lat: 11.1655272,
  lng: 124.5578887
}

// Props for custom location
const props = withDefaults(
  defineProps<{
    latitude?: number
    longitude?: number
    label?: string
    height?: number
  }>(),
  {
    latitude: undefined,
    longitude: undefined,
    label: 'New Kananga Municipal Hall',
    height: 500
  }
)

// Use custom coordinates if provided, otherwise use exact Kananga Municipal Hall coordinates
const mapLat = computed(() => props.latitude ?? KANANGA_EXACT.lat)
const mapLng = computed(() => props.longitude ?? KANANGA_EXACT.lng)

let map: google.maps.Map | null = null
let marker: google.maps.Marker | null = null

onMounted(() => {
  if (!mapContainer.value) return

  // Check if Google Maps is available
  if (typeof google === 'undefined' || !google.maps) {
    console.warn('Google Maps API not loaded, using fallback map')
    mapError.value = true
    return
  }

  try {
    // Initialize Google Map
    map = new google.maps.Map(mapContainer.value, {
      zoom: 16,
      center: { lat: mapLat.value, lng: mapLng.value },
      mapTypeControl: true,
      fullscreenControl: true,
      zoomControl: true,
      streetViewControl: false,
      styles: [
        {
          featureType: 'all',
          elementType: 'labels.text.fill',
          stylers: [{ color: '#333333' }]
        },
        {
          featureType: 'water',
          elementType: 'geometry',
          stylers: [{ color: '#e9e9e9' }]
        }
      ]
    })

    // Add marker
    marker = new google.maps.Marker({
      position: { lat: mapLat.value, lng: mapLng.value },
      map: map,
      title: props.label,
      animation: google.maps.Animation.DROP
    })

    // Add info window
    const infoWindow = new google.maps.InfoWindow({
      content: `
        <div class="p-2">
          <strong class="text-lg">${props.label}</strong>
          <p class="text-sm text-gray-600 mt-1">
            ${mapLat.value.toFixed(4)}°N, ${mapLng.value.toFixed(4)}°E
          </p>
        </div>
      `,
      ariaLabel: props.label
    })

    marker.addListener('click', () => {
      infoWindow.open({
        anchor: marker,
        map: map
      })
    })

    // Open info window by default
    infoWindow.open({
      anchor: marker,
      map: map
    })
  } catch (error) {
    console.error('Error loading Google Maps:', error)
    mapError.value = true
  }
})
</script>

<template>
  <div class="bg-white rounded-lg sm:rounded-xl border border-gray-200 overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
    <h3 class="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 p-4 sm:p-6 pb-3 sm:pb-4">📍 Location Map</h3>
    
    <!-- Google Maps View -->
    <div
      v-if="!mapError"
      ref="mapContainer"
      :style="{ height: `${height}px` }"
      class="w-full"
      role="application"
      aria-label="Google Map showing location"
    ></div>
    
    <!-- Fallback: Embed Map -->
    <div v-else :style="{ height: `${height}px` }" class="w-full bg-gray-100">
      <iframe
        :src="`https://www.openstreetmap.org/export/embed.html?bbox=${(mapLng - 0.01).toFixed(4)},${(mapLat - 0.01).toFixed(4)},${(mapLng + 0.01).toFixed(4)},${(mapLat + 0.01).toFixed(4)}&layer=mapnik&marker=${mapLat.toFixed(4)},${mapLng.toFixed(4)}`"
        class="w-full h-full border-0"
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
    
    <div class="p-4 sm:p-6 border-t border-gray-200 bg-gray-50 text-xs sm:text-sm text-gray-700">
      <p class="font-semibold text-gray-900 mb-2">📍 {{ label }}</p>
      <p class="mb-2">Coordinates: {{ mapLat.toFixed(4) }}°N, {{ mapLng.toFixed(4) }}°E</p>
      <a
        :href="`https://www.google.com/maps/search/${mapLat},${mapLng}`"
        target="_blank"
        rel="noopener noreferrer"
        class="inline-block text-primary-600 hover:text-primary-700 hover:underline font-semibold transition-colors"
      >
        Open in Google Maps →
      </a>
    </div>
  </div>
</template>

<style scoped>
</style>
