<script setup lang="ts">
import { useTranslations } from '@/composables/useTranslations'

const { t } = useTranslations()
</script>

<template>
  <div>
    <!-- Hero Section -->
    <section class="bg-gradient-to-br from-primary-600 to-primary-700 text-white py-12 md:py-16">
      <div class="max-w-container mx-auto px-4">
        <h1 class="text-4xl md:text-5xl font-bold mb-4">{{ t('budget-title') }}</h1>
        <p class="text-xl text-primary-100">{{ t('budget-desc') }}</p>
      </div>
    </section>

    <!-- Main Content -->
    <div class="max-w-container mx-auto px-4 py-12">
      <!-- Key Message -->
      <div class="bg-accent/10 border-2 border-accent rounded-lg p-8 mb-12">
        <h2 class="text-2xl font-bold text-accent mb-2">💰 Cost to the People = ₱0</h2>
        <p class="text-gray-700">This portal is free and powered by volunteers. All government data presented here is sourced from official LGU Kananga records and public documents.</p>
      </div>

      <!-- Budget Overview -->
      <section class="mb-12">
        <h2 class="text-3xl font-bold text-gray-900 mb-8">Municipal Budget Overview</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div class="bg-white rounded-lg border border-gray-200 p-6 shadow">
            <h3 class="text-lg font-semibold text-gray-900 mb-2">2024 Budget</h3>
            <p class="text-3xl font-bold text-primary-600 mb-1">₱ 450M</p>
            <p class="text-sm text-gray-600">Approved annual expenditure</p>
          </div>
          <div class="bg-white rounded-lg border border-gray-200 p-6 shadow">
            <h3 class="text-lg font-semibold text-gray-900 mb-2">Infrastructure</h3>
            <p class="text-3xl font-bold text-secondary-600 mb-1">₱ 120M</p>
            <p class="text-sm text-gray-600">Roads, facilities, utilities</p>
          </div>
          <div class="bg-white rounded-lg border border-gray-200 p-6 shadow">
            <h3 class="text-lg font-semibold text-gray-900 mb-2">Social Services</h3>
            <p class="text-3xl font-bold text-success mb-1">₱ 85M</p>
            <p class="text-sm text-gray-600">Healthcare, education, welfare</p>
          </div>
        </div>
      </section>

      <!-- Budget Allocation -->
      <section class="mb-12">
        <h2 class="text-3xl font-bold text-gray-900 mb-8">Budget Allocation by Sector</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div class="bg-white rounded-lg border border-gray-200 p-6 shadow">
            <h3 class="text-lg font-semibold text-gray-900 mb-4">Expenditure Categories</h3>
            <div class="space-y-3">
              <div>
                <div class="flex justify-between mb-1">
                  <span class="text-sm font-medium text-gray-700">Infrastructure (27%)</span>
                  <span class="text-sm font-bold text-primary-600">₱121.5M</span>
                </div>
                <div class="w-full bg-gray-200 rounded-full h-2">
                  <div class="bg-primary-600 h-2 rounded-full" style="width: 27%"></div>
                </div>
              </div>
              <div>
                <div class="flex justify-between mb-1">
                  <span class="text-sm font-medium text-gray-700">Social Services (19%)</span>
                  <span class="text-sm font-bold text-success">₱85.5M</span>
                </div>
                <div class="w-full bg-gray-200 rounded-full h-2">
                  <div class="bg-success h-2 rounded-full" style="width: 19%"></div>
                </div>
              </div>
              <div>
                <div class="flex justify-between mb-1">
                  <span class="text-sm font-medium text-gray-700">Personnel (35%)</span>
                  <span class="text-sm font-bold text-secondary-600">₱157.5M</span>
                </div>
                <div class="w-full bg-gray-200 rounded-full h-2">
                  <div class="bg-secondary-600 h-2 rounded-full" style="width: 35%"></div>
                </div>
              </div>
              <div>
                <div class="flex justify-between mb-1">
                  <span class="text-sm font-medium text-gray-700">Operations (19%)</span>
                  <span class="text-sm font-bold text-accent">₱85.5M</span>
                </div>
                <div class="w-full bg-gray-200 rounded-full h-2">
                  <div class="bg-accent h-2 rounded-full" style="width: 19%"></div>
                </div>
              </div>
            </div>
          </div>

          <div class="bg-primary-50 rounded-lg border border-primary-200 p-6">
            <h3 class="text-lg font-semibold text-primary-900 mb-4">Transparency & Accountability</h3>
            <ul class="space-y-2 text-sm text-primary-800">
              <li class="flex gap-2"><span>✓</span> Public budget hearings held quarterly</li>
              <li class="flex gap-2"><span>✓</span> Monthly expenditure reports published</li>
              <li class="flex gap-2"><span>✓</span> Annual audit by COA conducted</li>
              <li class="flex gap-2"><span>✓</span> Official documents available on request</li>
              <li class="flex gap-2"><span>✓</span> Open Data initiative for public access</li>
            </ul>
          </div>
        </div>
      </section>

      <!-- Call to Action -->
      <div class="bg-gray-50 rounded-lg border border-gray-200 p-8 text-center">
        <h3 class="text-xl font-semibold text-gray-900 mb-2">Need Financial Documents?</h3>
        <p class="text-gray-600 mb-4">Contact the Municipal Treasurer's Office for audited financial statements and detailed budget reports.</p>
        <router-link to="/contact" class="inline-block px-6 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 font-semibold">
          Contact Information
        </router-link>
      </div>
    </div>
  </div>
</template>
