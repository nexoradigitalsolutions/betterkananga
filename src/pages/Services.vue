<script setup lang="ts">
import { ref, computed, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useServicesData } from '@/composables/useServicesData'
import { useTranslations } from '@/composables/useTranslations'

const { t } = useTranslations()
const route = useRoute()
const router = useRouter()
const { getAll, search, getCategories } = useServicesData()
const searchQuery = ref('')
const selectedCategory = ref<string | null>(null)

const allServices = getAll()
const categories = getCategories()

// Watch route query and update category
watch(() => route.query.category, (newCategory) => {
  if (newCategory) {
    selectedCategory.value = newCategory as string
  } else {
    selectedCategory.value = null
  }
}, { immediate: true })

// Watch selectedCategory and update URL
watch(selectedCategory, (newValue) => {
  if (newValue) {
    router.push({ query: { category: newValue } })
  } else {
    router.push({ query: {} })
  }
})

const filteredServices = computed(() => {
  let results = allServices
  
  if (selectedCategory.value) {
    results = results.filter(s => s.categoryId === selectedCategory.value)
  }
  
  if (searchQuery.value) {
    results = search(searchQuery.value).filter(s => {
      if (selectedCategory.value) {
        return s.categoryId === selectedCategory.value
      }
      return true
    })
  }
  
  return results
})
</script>

<template>
  <div>
    <!-- Hero Section -->
    <section class="bg-gradient-to-br from-primary-600 to-primary-700 text-white py-12 md:py-16">
      <div class="max-w-container mx-auto px-4">
        <h1 class="text-4xl md:text-5xl font-bold mb-4">{{ t('services-title') }}</h1>
        <p class="text-xl text-primary-100">{{ t('services-desc') }}</p>
      </div>
    </section>

    <!-- Main Content -->
    <div class="max-w-container mx-auto px-4 py-12">
      <!-- Search and Filter -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        <!-- Search -->
        <div class="md:col-span-2">
          <label class="block text-sm font-semibold text-gray-700 mb-2">{{ t('search-services') }}</label>
          <input
            v-model="searchQuery"
            type="search"
            :placeholder="t('hero-search-placeholder')"
            class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
          />
        </div>

        <!-- Category Filter -->
        <div>
          <label class="block text-sm font-semibold text-gray-700 mb-2">{{ t('filter-category') }}</label>
          <select
            v-model="selectedCategory"
            class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
          >
            <option :value="null">{{ t('all-categories') }}</option>
            <option v-for="cat in categories" :key="cat.id" :value="cat.id">
              {{ cat.name }}
            </option>
          </select>
        </div>
      </div>

      <!-- Results Count -->
      <div class="mb-6">
        <p class="text-gray-600">
          {{ t('showing-results') }} <span class="font-semibold">{{ filteredServices.length }}</span> {{ t('of') }} <span class="font-semibold">{{ allServices.length }}</span> {{ t('services') }}
        </p>
      </div>

      <!-- Services Grid -->
      <div v-if="filteredServices.length > 0" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div
          v-for="service in filteredServices"
          :key="service.id"
          class="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-lg hover:border-primary-300 transition-all group"
        >
          <div class="mb-4">
            <span class="inline-block px-3 py-1 text-xs font-semibold text-primary-600 bg-primary-50 rounded-full">
              {{ service.category }}
            </span>
          </div>
          <RouterLink :to="`/services/${service.id}`" class="block mb-3">
            <h3 class="text-lg font-semibold text-gray-900 group-hover:text-primary-600">
              {{ service.title }}
            </h3>
          </RouterLink>
          <p class="text-gray-600 text-sm mb-4">{{ service.description }}</p>
          
          <div class="space-y-2 text-sm mb-4 pb-4 border-b border-gray-200">
            <div class="flex items-start gap-2">
              <span class="font-semibold text-gray-700 min-w-24">Fee:</span>
              <span class="text-gray-600">{{ service.fee }}</span>
            </div>
            <div class="flex items-start gap-2">
              <span class="font-semibold text-gray-700 min-w-24">Processing:</span>
              <span class="text-gray-600">{{ service.processingTime }}</span>
            </div>
            <div class="flex items-start gap-2">
              <span class="font-semibold text-gray-700 min-w-24">Office:</span>
              <span class="text-gray-600">{{ service.office }}</span>
            </div>
          </div>

          <RouterLink
            :to="`/services/${service.id}`"
            class="inline-flex items-center text-primary-600 hover:text-primary-700 font-semibold text-sm"
          >
            {{ t('view-details') }} →
          </RouterLink>
        </div>
      </div>

      <!-- No Results -->
      <div v-else class="text-center py-12">
        <div class="text-6xl mb-4">🔍</div>
        <h3 class="text-2xl font-bold text-gray-900 mb-2">{{ t('no-services-found') }}</h3>
        <p class="text-gray-600">{{ t('no-services-adjust') }}</p>
        <button
          @click="() => { searchQuery = ''; selectedCategory = null }"
          class="mt-6 px-6 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700"
        >
          {{ t('clear-filters') }}
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
</style>
