<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useOfficialsData } from '@/composables/useOfficialsData'
import { useBarangayOfficials } from '@/composables/useBarangayOfficials'
import { useTranslations } from '@/composables/useTranslations'

const router = useRouter()
const { getMayor, getViceMayor, getCouncilors } = useOfficialsData()
const { barangays: allBarangays } = useBarangayOfficials()
const { t } = useTranslations()

const expandedBarangays = ref<Set<string>>(new Set())

const mayor = getMayor()
const viceMayor = getViceMayor()
const councilors = getCouncilors()

const toggleBarangay = (barangayId: string) => {
  if (expandedBarangays.value.has(barangayId)) {
    expandedBarangays.value.delete(barangayId)
  } else {
    expandedBarangays.value.add(barangayId)
  }
}

const viewBarangayDetails = (barangayId: string) => {
  router.push(`/barangay/${barangayId}`)
}
</script>

<template>
  <div>
    <!-- Hero Section -->
    <section class="bg-gradient-to-br from-primary-600 to-primary-700 text-white py-12 md:py-16">
      <div class="max-w-container mx-auto px-4">
        <h1 class="text-4xl md:text-5xl font-bold mb-4">{{ t('page-government') }}</h1>
        <p class="text-xl text-primary-100">{{ t('page-government-desc') }}</p>
      </div>
    </section>

    <!-- Main Content -->
    <div class="max-w-container mx-auto px-4 py-12">
      <!-- Mayor & Vice Mayor -->
      <section class="mb-20 sm:mb-24 md:mb-28">
        <h2 class="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-8 sm:mb-10 md:mb-12">{{ t('executive-leadership') }}</h2>
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-12">
          <!-- Mayor -->
          <div v-if="mayor" class="bg-white rounded-lg sm:rounded-xl border-2 border-primary-600 overflow-hidden shadow-md hover:shadow-xl transition-all duration-300">
            <div class="bg-gradient-to-r from-primary-600 to-primary-700 text-white px-4 sm:px-6 md:px-8 py-4 sm:py-5">
              <h3 class="text-sm sm:text-base md:text-lg font-semibold">{{ t('municipal-mayor') }}</h3>
            </div>
            <div class="p-6 sm:p-8 md:p-10 text-center">
              <div class="w-16 sm:w-20 md:w-24 h-16 sm:h-20 md:h-24 rounded-full bg-gradient-to-br from-primary-400 to-primary-600 mx-auto mb-4 sm:mb-6 flex items-center justify-center text-white text-3xl sm:text-4xl">
                👤
              </div>
              <h4 class="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mb-2 sm:mb-3">{{ mayor.name }}</h4>
              <p class="text-sm sm:text-base text-primary-600 font-semibold mb-6 sm:mb-8">{{ mayor.title }}</p>
              <div class="space-y-3 sm:space-y-4 text-left text-sm sm:text-base">
                <a :href="`mailto:${mayor.email}`" class="flex items-center gap-2 text-gray-700 hover:text-primary-600">
                  <span>✉️</span>
                  <span>{{ mayor.email }}</span>
                </a>
                <a :href="`tel:${mayor.phone}`" class="flex items-center gap-2 text-gray-700 hover:text-primary-600">
                  <span>📞</span>
                  <span>{{ mayor.phone }}</span>
                </a>
              </div>
            </div>
          </div>

          <!-- Vice Mayor -->
          <div v-if="viceMayor" class="bg-white rounded-lg sm:rounded-xl border-2 border-secondary-600 overflow-hidden shadow-md hover:shadow-xl transition-all duration-300">
            <div class="bg-gradient-to-r from-secondary-600 to-secondary-700 text-white px-4 sm:px-6 md:px-8 py-4 sm:py-5">
              <h3 class="text-sm sm:text-base md:text-lg font-semibold">{{ t('municipal-vice-mayor') }}</h3>
            </div>
            <div class="p-6 sm:p-8 md:p-10 text-center">
              <div class="w-16 sm:w-20 md:w-24 h-16 sm:h-20 md:h-24 rounded-full bg-gradient-to-br from-secondary-400 to-secondary-600 mx-auto mb-4 sm:mb-6 flex items-center justify-center text-white text-3xl sm:text-4xl">
                👤
              </div>
              <h4 class="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mb-2 sm:mb-3">{{ viceMayor.name }}</h4>
              <p class="text-sm sm:text-base text-secondary-600 font-semibold mb-6 sm:mb-8">{{ viceMayor.title }}</p>
              <div class="space-y-3 sm:space-y-4 text-left text-sm sm:text-base">
                <a :href="`mailto:${viceMayor.email}`" class="flex items-center gap-2 text-gray-700 hover:text-secondary-600">
                  <span>✉️</span>
                  <span>{{ viceMayor.email }}</span>
                </a>
                <a :href="`tel:${viceMayor.phone}`" class="flex items-center gap-2 text-gray-700 hover:text-secondary-600">
                  <span>📞</span>
                  <span>{{ viceMayor.phone }}</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Sangguniang Bayan -->
      <section class="mb-20 sm:mb-24 md:mb-28">
        <h2 class="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-8 sm:mb-10 md:mb-12">{{ t('legislative-body-title') }}</h2>
        <div v-if="councilors.length > 0" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
          <div v-for="(councilor, idx) in councilors" :key="idx" class="group bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
            <div class="bg-gradient-to-r from-accent to-orange-500 h-1"></div>
            <div class="p-4 sm:p-6 text-center">
              <div class="w-14 sm:w-16 h-14 sm:h-16 rounded-full bg-gradient-to-br from-accent/20 to-orange-200 mx-auto mb-3 sm:mb-4 flex items-center justify-center text-2xl sm:text-3xl group-hover:scale-110 transition-transform duration-300">
                👤
              </div>
              <h4 class="font-bold text-gray-900 mb-1 text-base sm:text-lg">{{ councilor.name }}</h4>
              <p class="text-xs sm:text-sm text-gray-600 mb-3 sm:mb-4">{{ councilor.title }}</p>
              <div class="space-y-1 text-xs sm:text-sm">
                <a v-if="councilor.email" :href="`mailto:${councilor.email}`" class="block text-accent hover:text-orange-600 transition-colors duration-200 font-semibold break-all">
                  📧 {{ councilor.email }}
                </a>
                <a v-if="councilor.phone" :href="`tel:${councilor.phone}`" class="block text-accent hover:text-orange-600 transition-colors duration-200 font-semibold">
                  📞 {{ councilor.phone }}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Barangays Section -->
      <section class="mb-20 sm:mb-24 md:mb-28">
        <div class="mb-8 sm:mb-10 md:mb-12 text-center">
          <h2 class="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-2 sm:mb-3">Barangays of Kananga</h2>
          <p class="text-sm sm:text-base text-gray-600">The municipality is divided into 23 barangays. Click to view officials and details.</p>
        </div>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6 mx-auto max-w-7xl">
          <div 
            v-for="barangay in allBarangays" 
            :key="barangay.id" 
            class="bg-white rounded-lg border-l-4 border-primary-600 overflow-hidden shadow-sm hover:shadow-md transition-all duration-200 flex flex-col h-full"
          >
            <!-- Barangay Header -->
            <div class="p-4 sm:p-5 bg-gradient-to-r from-gray-50 to-white border-b border-gray-100 cursor-pointer hover:bg-gray-100 transition-colors" @click="toggleBarangay(barangay.id)">
              <div class="flex items-center justify-between gap-3">
                <div class="flex items-center gap-2 sm:gap-3 flex-1 min-w-0">
                  <span class="text-2xl sm:text-2xl flex-shrink-0">📍</span>
                  <div class="min-w-0">
                    <p class="font-semibold text-gray-900 text-sm sm:text-base truncate">{{ barangay.name }}</p>
                    <p class="text-xs text-gray-500">Barangay</p>
                  </div>
                </div>
                <span class="text-lg text-primary-600 transition-transform duration-200 flex-shrink-0" :class="{ 'rotate-180': expandedBarangays.has(barangay.id) }">▼</span>
              </div>
            </div>

            <!-- Officials List (Expandable) -->
            <div v-if="expandedBarangays.has(barangay.id)" class="border-t border-gray-100 divide-y max-h-48 overflow-y-auto flex-grow">
              <div v-for="(official, idx) in barangay.officials" :key="idx" class="p-3 sm:p-4 hover:bg-primary-50 transition text-xs sm:text-sm">
                <p class="font-semibold text-primary-600 uppercase tracking-wide">{{ official.position }}</p>
                <p class="text-gray-900 font-medium">{{ official.name }}</p>
              </div>
            </div>

            <!-- Footer with View Details Button -->
            <div class="p-4 sm:p-5 bg-gray-50 border-t border-gray-100 mt-auto">
              <button
                @click.stop="viewBarangayDetails(barangay.id)"
                class="w-full px-3 py-2 text-xs sm:text-sm bg-primary-600 text-white rounded hover:bg-primary-700 active:bg-primary-800 transition-colors font-semibold flex items-center justify-center gap-2"
              >
                <span>📍</span> View Details
              </button>
            </div>
          </div>
        </div>
        
        <!-- Barangay Info -->
        <div class="mt-12 sm:mt-16 md:mt-20 lg:mt-24 bg-gradient-to-r from-primary-50 to-blue-50 rounded-lg sm:rounded-xl p-6 sm:p-8 md:p-10 lg:p-12 border border-primary-200">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 lg:gap-12 xl:gap-16">
            <div>
              <h3 class="text-base sm:text-lg md:text-xl font-bold text-gray-900 mb-4 sm:mb-6 md:mb-8 flex items-center gap-2">
                <span>📊</span> Notable Barangays
              </h3>
              <ul class="space-y-3 sm:space-y-4 text-gray-700 text-xs sm:text-sm md:text-base">
                <li class="flex items-start gap-2">
                  <span class="text-primary-600 mt-1">★</span>
                  <div>
                    <p class="font-semibold">Poblacion</p>
                    <p class="text-sm text-gray-600">Municipal center and main commercial area</p>
                  </div>
                </li>
                <li class="flex items-start gap-2">
                  <span class="text-primary-600 mt-1">★</span>
                  <div>
                    <p class="font-semibold">Monte Bello</p>
                    <p class="text-sm text-gray-600">Home to Kananga Special Economic Zone</p>
                  </div>
                </li>
                <li class="flex items-start gap-2">
                  <span class="text-primary-600 mt-1">★</span>
                  <div>
                    <p class="font-semibold">Tongonan</p>
                    <p class="text-sm text-gray-600">Location of Tongonan Geothermal Powerplant</p>
                  </div>
                </li>
              </ul>
            </div>
            <div>
              <h3 class="text-base sm:text-lg md:text-xl font-bold text-gray-900 mb-4 sm:mb-6 md:mb-8 flex items-center gap-2">
                <span>🏛️</span> Local Government
              </h3>
              <p class="text-gray-700 mb-4 sm:mb-6 text-xs sm:text-sm md:text-base leading-relaxed">
                Each barangay has its own Barangay Hall and elected officials (Punong Barangay and Sangguniang Barangay members) who manage local affairs, maintain peace and order, and serve their community members.
              </p>
              <p class="text-sm text-gray-600 leading-relaxed">
                For barangay-specific services and concerns, visit your respective barangay hall during office hours (typically Monday-Friday, 8:00 AM - 5:00 PM).
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<style scoped>
</style>
