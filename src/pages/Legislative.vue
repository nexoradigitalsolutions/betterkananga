<script setup lang="ts">
import { ref } from 'vue'
import { useOrdinancesData } from '@/composables/useOrdinancesData'
import { useResolutionsData } from '@/composables/useResolutionsData'
import { useTranslations } from '@/composables/useTranslations'

const { t } = useTranslations()
const { getAll: getAllOrdinances, search: searchOrdinances } = useOrdinancesData()
const { getAll: getAllResolutions, search: searchResolutions } = useResolutionsData()

const ordinances = getAllOrdinances()
const resolutions = getAllResolutions()

const searchQuery = ref('')

const filteredOrdinances = ref(ordinances)
const filteredResolutions = ref(resolutions)

const handleSearch = () => {
  if (!searchQuery.value.trim()) {
    filteredOrdinances.value = ordinances
    filteredResolutions.value = resolutions
  } else {
    filteredOrdinances.value = searchOrdinances(searchQuery.value)
    filteredResolutions.value = searchResolutions(searchQuery.value)
  }
}

const openPDF = (pdfUrl: string) => {
  window.open(pdfUrl, '_blank')
}
</script>

<template>
  <div>
    <!-- Hero Section -->
    <section class="bg-gradient-to-br from-primary-600 to-primary-700 text-white py-12 md:py-16">
      <div class="max-w-container mx-auto px-4">
        <h1 class="text-4xl md:text-5xl font-bold mb-4">{{ t('legislative-title') }}</h1>
        <p class="text-xl text-primary-100">{{ t('legislative-desc') }}</p>
      </div>
    </section>

    <!-- Main Content -->
    <div class="max-w-container mx-auto px-4 py-12">
      <!-- Search Section -->
      <div class="mb-12 sm:mb-16">
        <h2 class="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-4 sm:mb-6">🔍 Search Documents</h2>
        <div class="flex flex-col sm:flex-row gap-3 sm:gap-4">
          <input
            v-model="searchQuery"
            type="search"
            placeholder="Search ordinances and resolutions by title or number..."
            class="flex-1 px-4 sm:px-6 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent text-sm sm:text-base"
            @keyup.enter="handleSearch"
          />
          <button 
            @click="handleSearch"
            class="px-6 sm:px-8 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 font-semibold transition-colors duration-200 text-sm sm:text-base"
          >
            Search
          </button>
        </div>
      </div>

      <!-- Document Types -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-10 mb-16 sm:mb-20">
        <!-- Ordinances -->
        <div class="bg-gradient-to-br from-white to-primary-50/30 rounded-lg sm:rounded-xl border-2 border-primary-300 p-6 sm:p-8 md:p-10 shadow-md hover:shadow-lg transition-shadow duration-300">
          <h2 class="text-lg sm:text-xl md:text-2xl font-bold text-primary-600 mb-3 sm:mb-4 flex items-center gap-2">
            <span>📋</span> {{ t('legislative-ordinances') }}
          </h2>
          <p class="text-gray-600 text-sm sm:text-base mb-4 sm:mb-6">{{ t('legislative-ordinances-desc') }}</p>
          <div class="space-y-2 sm:space-y-3 mb-6 sm:mb-8">
            <div class="text-xs sm:text-sm text-gray-700">
              <p class="font-semibold mb-2 sm:mb-3">{{ t('legislative-latest-ordinances') }}</p>
              <ul class="space-y-1 sm:space-y-2">
                <li v-for="ord in ordinances.slice(0, 3)" :key="ord.id" class="flex items-start gap-2">
                  <span class="text-primary-600">✓</span>
                  <span class="leading-tight">
                    <strong>{{ ord.number }}:</strong> {{ ord.title }}
                  </span>
                </li>
              </ul>
            </div>
          </div>
          <a href="#ordinances" class="inline-flex items-center text-primary-600 hover:text-primary-700 font-semibold text-sm sm:text-base transition-colors">
            {{ t('legislative-view-ordinances') }} →
          </a>
        </div>

        <!-- Resolutions -->
        <div class="bg-gradient-to-br from-white to-secondary-50/30 rounded-lg sm:rounded-xl border-2 border-secondary-300 p-6 sm:p-8 md:p-10 shadow-md hover:shadow-lg transition-shadow duration-300">
          <h2 class="text-lg sm:text-xl md:text-2xl font-bold text-secondary-600 mb-3 sm:mb-4 flex items-center gap-2">
            <span>✓</span> {{ t('legislative-resolutions') }}
          </h2>
          <p class="text-gray-600 text-sm sm:text-base mb-4 sm:mb-6">{{ t('legislative-resolutions-desc') }}</p>
          <div class="space-y-2 sm:space-y-3 mb-6 sm:mb-8">
            <div class="text-xs sm:text-sm text-gray-700">
              <p class="font-semibold mb-2 sm:mb-3">{{ t('legislative-latest-resolutions') }}</p>
              <ul class="space-y-1 sm:space-y-2">
                <li v-for="res in resolutions.slice(0, 3)" :key="res.id" class="flex items-start gap-2">
                  <span class="text-secondary-600">✓</span>
                  <span class="leading-tight">
                    <strong>{{ res.number }}:</strong> {{ res.title }}
                  </span>
                </li>
              </ul>
            </div>
          </div>
          <a href="#resolutions" class="inline-flex items-center text-secondary-600 hover:text-secondary-700 font-semibold text-sm sm:text-base transition-colors">
            {{ t('legislative-view-resolutions') }} →
          </a>
        </div>
      </div>

      <!-- Ordinances Section -->
      <section id="ordinances" class="mb-16 sm:mb-20 md:mb-24">
        <h2 class="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-6 sm:mb-8 md:mb-12 flex items-center gap-3">
          <span class="text-4xl">📋</span> All Ordinances
        </h2>
        <div v-if="filteredOrdinances.length > 0" class="space-y-3 sm:space-y-4">
          <div v-for="ord in filteredOrdinances" :key="ord.id" class="bg-white border-l-4 border-primary-600 rounded-lg p-4 sm:p-6 shadow-sm hover:shadow-md hover:bg-primary-50/20 transition-all duration-200 cursor-pointer group" @click="openPDF(ord.pdfUrl)">
            <div class="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 sm:gap-4 mb-2">
              <div class="flex-1 min-w-0">
                <h3 class="text-base sm:text-lg font-bold text-gray-900 leading-tight group-hover:text-primary-600 transition-colors">{{ ord.number }}: {{ ord.title }}</h3>
                <p class="text-xs sm:text-sm text-gray-600 mt-1">{{ ord.description }}</p>
              </div>
              <div class="flex items-center gap-2">
                <span class="px-2 sm:px-3 py-1 text-xs font-semibold rounded-full" :class="ord.status === 'active' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'">
                  {{ ord.status }}
                </span>
                <span class="text-primary-600 group-hover:text-primary-700 text-lg opacity-0 group-hover:opacity-100 transition-all">📄</span>
              </div>
            </div>
            <div class="flex flex-wrap gap-2 text-xs">
              <span class="bg-primary-100 text-primary-700 px-2 py-1 rounded">{{ ord.category }}</span>
              <span class="bg-gray-100 text-gray-700 px-2 py-1 rounded">{{ ord.dateEnacted }}</span>
              <button 
                @click.stop="openPDF(ord.pdfUrl)"
                class="ml-auto bg-primary-500 hover:bg-primary-600 text-white px-3 py-1 rounded text-xs font-semibold transition-colors"
              >
                ⬇️ Download PDF
              </button>
            </div>
          </div>
        </div>
        <div v-else class="text-center py-8 sm:py-12">
          <p class="text-gray-600 text-sm sm:text-base">No ordinances found matching your search.</p>
        </div>
      </section>

      <!-- Resolutions Section -->
      <section id="resolutions">
        <h2 class="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-6 sm:mb-8 md:mb-12 flex items-center gap-3">
          <span class="text-4xl">✓</span> All Resolutions
        </h2>
        <div v-if="filteredResolutions.length > 0" class="space-y-3 sm:space-y-4">
          <div v-for="res in filteredResolutions" :key="res.id" class="bg-white border-l-4 border-secondary-600 rounded-lg p-4 sm:p-6 shadow-sm hover:shadow-md hover:bg-secondary-50/20 transition-all duration-200 cursor-pointer group" @click="openPDF(res.pdfUrl)">
            <div class="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 sm:gap-4 mb-2">
              <div class="flex-1 min-w-0">
                <h3 class="text-base sm:text-lg font-bold text-gray-900 leading-tight group-hover:text-secondary-600 transition-colors">{{ res.number }}: {{ res.title }}</h3>
                <p class="text-xs sm:text-sm text-gray-600 mt-1">{{ res.description }}</p>
              </div>
              <div class="flex items-center gap-2">
                <span class="px-2 sm:px-3 py-1 text-xs font-semibold rounded-full" :class="res.status === 'active' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'">
                  {{ res.status }}
                </span>
                <span class="text-secondary-600 group-hover:text-secondary-700 text-lg opacity-0 group-hover:opacity-100 transition-all">📄</span>
              </div>
            </div>
            <div class="flex flex-wrap gap-2 text-xs">
              <span class="bg-secondary-100 text-secondary-700 px-2 py-1 rounded">{{ res.category }}</span>
              <span class="bg-gray-100 text-gray-700 px-2 py-1 rounded">{{ res.dateEnacted }}</span>
              <button 
                @click.stop="openPDF(res.pdfUrl)"
                class="ml-auto bg-secondary-500 hover:bg-secondary-600 text-white px-3 py-1 rounded text-xs font-semibold transition-colors"
              >
                ⬇️ Download PDF
              </button>
            </div>
          </div>
        </div>
        <div v-else class="text-center py-8 sm:py-12">
          <p class="text-gray-600 text-sm sm:text-base">No resolutions found matching your search.</p>
        </div>
      </section>

      <!-- Info -->
      <div class="mt-16 sm:mt-20 md:mt-24 bg-gradient-to-r from-primary-50 to-blue-50 rounded-lg sm:rounded-xl border border-primary-200 p-6 sm:p-8 md:p-10">
        <h3 class="text-base sm:text-lg md:text-xl font-bold text-primary-900 mb-2 sm:mb-3 flex items-center gap-2">
          <span>📚</span> {{ t('legislative-about-title') }}
        </h3>
        <p class="text-sm sm:text-base text-primary-800 leading-relaxed">{{ t('legislative-about-desc') }}</p>
      </div>
    </div>
  </div>
</template>
