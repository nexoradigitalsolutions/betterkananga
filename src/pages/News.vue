<script setup lang="ts">
import { useTranslations } from '@/composables/useTranslations'

const { t } = useTranslations()
</script>

<template>
  <div>
    <!-- Hero Section -->
    <section class="bg-gradient-to-br from-primary-600 to-primary-700 text-white py-12 md:py-16">
      <div class="max-w-container mx-auto px-4">
        <h1 class="text-4xl md:text-5xl font-bold mb-4">{{ t('news-title') }}</h1>
        <p class="text-xl text-primary-100">{{ t('news-desc') }}</p>
      </div>
    </section>

    <!-- Main Content -->
    <div class="max-w-container mx-auto px-4 py-12">
      <!-- Featured News -->
      <section class="mb-12">
        <h2 class="text-3xl font-bold text-gray-900 mb-8">Featured News</h2>
        <div class="bg-white rounded-lg border-l-4 border-primary-600 overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
          <div class="bg-gradient-to-r from-primary-50 to-primary-100 px-8 py-4">
            <span class="inline-block px-3 py-1 text-xs font-semibold text-primary-700 bg-primary-200 rounded-full mb-2">
              Announcement
            </span>
          </div>
          <div class="p-8">
            <h3 class="text-2xl font-bold text-gray-900 mb-2">Municipal Services Now Online</h3>
            <p class="text-gray-600 mb-4">
              BetterKananga.org provides comprehensive access to municipal services, government information, and transparency reports. Visit us online to find all LGU Kananga services with requirements, fees, and processing times.
            </p>
            <p class="text-sm text-gray-500">Published: January 3, 2025</p>
          </div>
        </div>
      </section>

      <!-- News Grid -->
      <section class="mb-12">
        <h2 class="text-3xl font-bold text-gray-900 mb-8">Recent News</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <!-- News Item 1 -->
          <RouterLink to="/news/business-permit-renewal-2025" class="block group">
            <article class="bg-white rounded-lg border border-gray-200 overflow-hidden shadow hover:shadow-lg hover:border-primary-400 transition-all cursor-pointer h-full">
              <div class="bg-blue-100 px-6 py-3 border-b border-gray-200">
                <span class="inline-block px-3 py-1 text-xs font-semibold text-blue-700 bg-blue-200 rounded-full">
                  Announcement
                </span>
              </div>
              <div class="p-6">
                <h3 class="text-lg font-semibold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors">Business Permit Renewal 2025</h3>
                <p class="text-gray-600 text-sm mb-4">Deadline for business permit renewal is set for January 20, 2025. Early renewal is encouraged.</p>
                <p class="text-xs text-gray-500">Nov 28, 2024</p>
              </div>
            </article>
          </RouterLink>

          <!-- News Item 2 -->
          <RouterLink to="/news/new-public-market-wing" class="block group">
            <article class="bg-white rounded-lg border border-gray-200 overflow-hidden shadow hover:shadow-lg hover:border-primary-400 transition-all cursor-pointer h-full">
              <div class="bg-green-100 px-6 py-3 border-b border-gray-200">
                <span class="inline-block px-3 py-1 text-xs font-semibold text-green-700 bg-green-200 rounded-full">
                  Project
                </span>
              </div>
              <div class="p-6">
                <h3 class="text-lg font-semibold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors">New Public Market Wing Opens</h3>
                <p class="text-gray-600 text-sm mb-4">The renovated wing of the Kananga Public Market is now open to vendors and the public.</p>
                <p class="text-xs text-gray-500">Nov 15, 2024</p>
              </div>
            </article>
          </RouterLink>

          <!-- News Item 3 -->
          <RouterLink to="/news/scheduled-power-interruption" class="block group">
            <article class="bg-white rounded-lg border border-gray-200 overflow-hidden shadow hover:shadow-lg hover:border-primary-400 transition-all cursor-pointer h-full">
              <div class="bg-amber-100 px-6 py-3 border-b border-gray-200">
                <span class="inline-block px-3 py-1 text-xs font-semibold text-amber-700 bg-amber-200 rounded-full">
                  Advisory
                </span>
              </div>
              <div class="p-6">
                <h3 class="text-lg font-semibold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors">Scheduled Power Interruption</h3>
                <p class="text-gray-600 text-sm mb-4">Maintenance scheduled for Barangay Osmeña on Dec 1, 8:00 AM - 5:00 PM.</p>
                <p class="text-xs text-gray-500">Nov 10, 2024</p>
              </div>
            </article>
          </RouterLink>

          <!-- News Item 4 -->
          <article class="bg-white rounded-lg border border-gray-200 overflow-hidden shadow hover:shadow-lg transition-shadow">
            <div class="bg-purple-100 px-6 py-3 border-b border-gray-200">
              <span class="inline-block px-3 py-1 text-xs font-semibold text-purple-700 bg-purple-200 rounded-full">
                Event
              </span>
            </div>
            <div class="p-6">
              <h3 class="text-lg font-semibold text-gray-900 mb-2">Fiesta Celebration Announced</h3>
              <p class="text-gray-600 text-sm mb-4">Save the date for Kananga's annual fiesta celebration with cultural events and festivities.</p>
              <p class="text-xs text-gray-500">Oct 28, 2024</p>
            </div>
          </article>

          <!-- News Item 5 -->
          <article class="bg-white rounded-lg border border-gray-200 overflow-hidden shadow hover:shadow-lg transition-shadow">
            <div class="bg-red-100 px-6 py-3 border-b border-gray-200">
              <span class="inline-block px-3 py-1 text-xs font-semibold text-red-700 bg-red-200 rounded-full">
                Notice
              </span>
            </div>
            <div class="p-6">
              <h3 class="text-lg font-semibold text-gray-900 mb-2">Property Tax Payment Reminder</h3>
              <p class="text-gray-600 text-sm mb-4">Reminder to all property owners to pay their annual real property taxes before deadline.</p>
              <p class="text-xs text-gray-500">Oct 15, 2024</p>
            </div>
          </article>

          <!-- News Item 6 -->
          <article class="bg-white rounded-lg border border-gray-200 overflow-hidden shadow hover:shadow-lg transition-shadow">
            <div class="bg-indigo-100 px-6 py-3 border-b border-gray-200">
              <span class="inline-block px-3 py-1 text-xs font-semibold text-indigo-700 bg-indigo-200 rounded-full">
                Update
              </span>
            </div>
            <div class="p-6">
              <h3 class="text-lg font-semibold text-gray-900 mb-2">Infrastructure Development Program</h3>
              <p class="text-gray-600 text-sm mb-4">Road rehabilitation project in Barangay Bagumbayan progressing on schedule.</p>
              <p class="text-xs text-gray-500">Oct 5, 2024</p>
            </div>
          </article>
        </div>
      </section>

      <!-- Newsletter Signup -->
      <section class="bg-primary-50 rounded-lg border border-primary-200 p-8 text-center">
        <h3 class="text-2xl font-bold text-primary-900 mb-2">Stay Updated</h3>
        <p class="text-primary-800 mb-6">Subscribe to receive the latest news and announcements from LGU Kananga</p>
        <form class="flex gap-2 max-w-md mx-auto">
          <input
            type="email"
            placeholder="Enter your email"
            class="flex-1 px-4 py-2 border border-primary-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
          />
          <button type="submit" class="px-6 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 font-semibold">
            Subscribe
          </button>
        </form>
      </section>
    </div>
  </div>
</template>
