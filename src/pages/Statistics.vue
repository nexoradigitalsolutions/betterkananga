<script setup lang="ts">
import { useTranslations } from '@/composables/useTranslations'

const { t } = useTranslations()
</script>

<template>
  <div>
    <!-- Hero Section -->
    <section class="bg-gradient-to-br from-primary-600 to-primary-700 text-white py-12 md:py-16">
      <div class="max-w-container mx-auto px-4">
        <h1 class="text-4xl md:text-5xl font-bold mb-4">{{ t('statistics-title') }}</h1>
        <p class="text-xl text-primary-100">{{ t('statistics-desc') }}</p>
      </div>
    </section>

    <!-- Main Content -->
    <div class="max-w-container mx-auto px-4 py-12">
      <!-- Population Stats -->
      <section class="mb-12">
        <h2 class="text-3xl font-bold text-gray-900 mb-8">{{ t('stat-demographics') }}</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div class="bg-white rounded-lg border border-gray-200 p-8 text-center shadow">
            <div class="text-5xl font-bold text-primary-600 mb-2">60,885</div>
            <p class="text-gray-600">{{ t('stat-population') }} {{ t('stat-population-desc') }}</p>
          </div>
          <div class="bg-white rounded-lg border border-gray-200 p-8 text-center shadow">
            <div class="text-5xl font-bold text-secondary-600 mb-2">23</div>
            <p class="text-gray-600">{{ t('stat-barangays') }}</p>
          </div>
          <div class="bg-white rounded-lg border border-gray-200 p-8 text-center shadow">
            <div class="text-5xl font-bold text-accent mb-2">144.20</div>
            <p class="text-gray-600">{{ t('stat-land-area') }}</p>
          </div>
        </div>
      </section>

      <!-- Classification -->
      <section class="mb-12">
        <h2 class="text-3xl font-bold text-gray-900 mb-8">{{ t('stat-classification') }}</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div class="bg-primary-50 rounded-lg border-2 border-primary-300 p-8">
            <h3 class="text-2xl font-bold text-primary-600 mb-2">{{ t('stat-1st-class') }}</h3>
            <p class="text-gray-700">{{ t('stat-1st-class-desc') }}</p>
          </div>
          <div class="bg-success/10 rounded-lg border-2 border-success p-8">
            <h3 class="text-2xl font-bold text-success mb-2">{{ t('stat-key-barangays') }}</h3>
            <p class="text-gray-700">{{ t('stat-barangays-desc') }}</p>
          </div>
        </div>
      </section>

      <!-- Economic Data -->
      <section>
        <h2 class="text-3xl font-bold text-gray-900 mb-8">{{ t('stat-economy') }}</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div class="bg-white rounded-lg border border-gray-200 p-6 shadow">
            <h3 class="text-xl font-semibold text-gray-900 mb-4">Primary Industries</h3>
            <ul class="space-y-2 text-gray-600">
              <li>• Agriculture & Farming</li>
              <li>• Mining & Quarrying</li>
              <li>• Small-scale Manufacturing</li>
              <li>• Retail & Commerce</li>
              <li>• Tourism Services</li>
            </ul>
          </div>
          <div class="bg-white rounded-lg border border-gray-200 p-6 shadow">
            <h3 class="text-xl font-semibold text-gray-900 mb-4">Labor Force</h3>
            <ul class="space-y-2 text-gray-600">
              <li>• Diverse employment sectors</li>
              <li>• Agriculture: ~40% of workforce</li>
              <li>• Services: ~35% of workforce</li>
              <li>• Industry: ~25% of workforce</li>
              <li>• Steady economic growth year-over-year</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>
