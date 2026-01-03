<script setup lang="ts">
import { computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useBarangayOfficials } from '@/composables/useBarangayOfficials'
import { useTranslations } from '@/composables/useTranslations'
import MapComponent from '@/components/MapComponent.vue'

const route = useRoute()
const router = useRouter()
const { t } = useTranslations()
const { getById } = useBarangayOfficials()

const barangay = computed(() => {
  const id = route.params.id as string
  return getById(id)
})

const isNotFound = computed(() => !barangay.value)

const punongBarangay = computed(() => {
  return barangay.value?.officials?.find(o => o.position === 'Punong Barangay')
})

const kagawads = computed(() => {
  return barangay.value?.officials?.filter(o => o.position === 'Barangay Kagawad') || []
})

const secretary = computed(() => {
  return barangay.value?.officials?.find(o => o.position === 'Barangay Secretary')
})

const treasurer = computed(() => {
  return barangay.value?.officials?.find(o => o.position === 'Barangay Treasurer')
})

const goBack = () => {
  router.push('/government')
}
</script>

<template>
  <div v-if="isNotFound" class="max-w-container mx-auto px-4 py-12">
    <div class="text-center">
      <h1 class="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">{{ t('not-found') }}</h1>
      <p class="text-gray-600 mb-6">{{ t('barangay-not-found') }}</p>
      <button 
        @click="goBack"
        class="px-6 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors"
      >
        ← {{ t('back-to-government') }}
      </button>
    </div>
  </div>

  <div v-else>
    <!-- Hero Section -->
    <section class="bg-gradient-to-br from-primary-600 to-primary-700 text-white py-12 md:py-16">
      <div class="max-w-container mx-auto px-4">
        <button 
          @click="goBack"
          class="mb-4 text-primary-100 hover:text-white transition-colors flex items-center gap-2"
        >
          ← {{ t('back') }}
        </button>
        <h1 class="text-4xl md:text-5xl font-bold mb-2">{{ barangay!.name }}</h1>
        <p class="text-xl text-primary-100">{{ t('barangay-details') }}</p>
      </div>
    </section>

    <!-- Main Content -->
    <div class="max-w-container mx-auto px-4 py-12">
      <!-- Location Map -->
      <section class="mb-12 sm:mb-16 md:mb-20">
        <h2 class="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 sm:mb-6 flex items-center gap-3">
          <span class="text-3xl">📍</span> {{ t('location-map') }}
        </h2>
        <div class="bg-white rounded-lg shadow-lg overflow-hidden">
          <MapComponent 
            :latitude="barangay!.latitude"
            :longitude="barangay!.longitude"
            :label="barangay!.name"
            :height="400"
          />
        </div>
      </section>

      <!-- Barangay Information -->
      <section class="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 mb-12 sm:mb-16 md:mb-20">
        <!-- Area -->
        <div class="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-4 sm:p-6 border border-blue-200">
          <h3 class="text-base sm:text-lg font-bold text-blue-900 mb-2 flex items-center gap-2">
            <span>📏</span> {{ t('area') }}
          </h3>
          <p class="text-2xl sm:text-3xl font-bold text-blue-600">{{ barangay!.area || 'N/A' }}</p>
        </div>

        <!-- Population -->
        <div class="bg-gradient-to-br from-green-50 to-green-100 rounded-lg p-4 sm:p-6 border border-green-200">
          <h3 class="text-base sm:text-lg font-bold text-green-900 mb-2 flex items-center gap-2">
            <span>👥</span> {{ t('population') }}
          </h3>
          <p class="text-2xl sm:text-3xl font-bold text-green-600">{{ barangay!.population || 'N/A' }}</p>
        </div>

        <!-- Total Officials -->
        <div class="bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg p-4 sm:p-6 border border-purple-200">
          <h3 class="text-base sm:text-lg font-bold text-purple-900 mb-2 flex items-center gap-2">
            <span>👔</span> {{ t('total-officials') }}
          </h3>
          <p class="text-2xl sm:text-3xl font-bold text-purple-600">{{ barangay!.officials.length }}</p>
        </div>
      </section>

      <!-- Officials Section -->
      <section>
        <h2 class="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-6 sm:mb-8 md:mb-12 flex items-center gap-3">
          <span class="text-3xl">👔</span> {{ t('barangay-officials') }}
        </h2>

        <!-- Punong Barangay -->
        <div v-if="punongBarangay" class="mb-8 sm:mb-12">
          <div class="bg-gradient-to-r from-primary-600 to-primary-700 text-white rounded-lg p-6 sm:p-8 shadow-lg">
            <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div>
                <p class="text-sm sm:text-base opacity-90 mb-1">{{ t('chief-executive') }}</p>
                <h3 class="text-2xl sm:text-3xl md:text-4xl font-bold">{{ punongBarangay.name }}</h3>
              </div>
              <div class="text-3xl sm:text-4xl">👑</div>
            </div>
          </div>
        </div>

        <!-- Kagawads -->
        <div v-if="kagawads.length > 0" class="mb-8 sm:mb-12">
          <h3 class="text-lg sm:text-xl font-bold text-gray-900 mb-4 sm:mb-6">{{ t('kagawads') }} (Councilmen)</h3>
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
            <div 
              v-for="(kagawad, index) in kagawads" 
              :key="index"
              class="bg-white border-2 border-primary-300 rounded-lg p-4 hover:shadow-md transition-shadow"
            >
              <p class="text-xs sm:text-sm text-primary-600 font-semibold mb-2 uppercase tracking-wide">{{ kagawad.position }}</p>
              <p class="text-base sm:text-lg font-bold text-gray-900">{{ kagawad.name }}</p>
            </div>
          </div>
        </div>

        <!-- Secretary & Treasurer -->
        <div v-if="secretary || treasurer" class="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
          <!-- Secretary -->
          <div v-if="secretary" class="bg-gradient-to-br from-amber-50 to-amber-100 border-2 border-amber-300 rounded-lg p-4 sm:p-6">
            <p class="text-xs sm:text-sm text-amber-700 font-semibold mb-2 uppercase tracking-wide">📋 {{ secretary.position }}</p>
            <p class="text-lg sm:text-xl font-bold text-gray-900">{{ secretary.name }}</p>
          </div>

          <!-- Treasurer -->
          <div v-if="treasurer" class="bg-gradient-to-br from-cyan-50 to-cyan-100 border-2 border-cyan-300 rounded-lg p-4 sm:p-6">
            <p class="text-xs sm:text-sm text-cyan-700 font-semibold mb-2 uppercase tracking-wide">💰 {{ treasurer.position }}</p>
            <p class="text-lg sm:text-xl font-bold text-gray-900">{{ treasurer.name }}</p>
          </div>
        </div>
      </section>

      <!-- Info Box -->
      <div class="mt-12 sm:mt-16 md:mt-20 bg-gradient-to-r from-primary-50 to-blue-50 rounded-lg sm:rounded-xl border border-primary-200 p-6 sm:p-8">
        <h3 class="text-base sm:text-lg md:text-xl font-bold text-primary-900 mb-2 flex items-center gap-2">
          <span>ℹ️</span> {{ t('barangay-info') }}
        </h3>
        <p class="text-sm sm:text-base text-primary-800 leading-relaxed">
          {{ t('barangay-info-desc') }}
        </p>
      </div>
    </div>
  </div>
</template>
