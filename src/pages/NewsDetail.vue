<script setup lang="ts">
import { computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useTranslations } from '@/composables/useTranslations'

const route = useRoute()
const router = useRouter()
const { t } = useTranslations()

// News data with full content
const newsDatabase = [
  {
    id: 'business-permit-renewal-2025',
    title: 'Business Permit Renewal 2025',
    date: 'Nov 28, 2025',
    badge: 'Announcement',
    description: 'Deadline for business permit renewal is set for January 20, 2025.',
    content: `
      <p>Deadline for business permit renewal is set for January 20, 2025. Early renewal is encouraged.</p>
      <p class="mt-4">All business owners are required to renew their permits before the deadline to avoid penalties and business closure notices.</p>
      <h3 class="font-semibold text-lg mt-6 mb-2">Requirements:</h3>
      <ul class="list-disc pl-6 space-y-2">
        <li>Current business permit</li>
        <li>Proof of payment of business tax</li>
        <li>Valid ID of business owner</li>
        <li>Certificate of good standing from barangay</li>
      </ul>
      <h3 class="font-semibold text-lg mt-6 mb-2">Processing Time:</h3>
      <p>5 business days from submission of complete requirements.</p>
      <h3 class="font-semibold text-lg mt-6 mb-2">Contact:</h3>
      <p>Business Licensing Department, Municipal Hall Ground Floor</p>
    `
  },
  {
    id: 'new-public-market-wing',
    title: 'New Public Market Wing Opens',
    date: 'Nov 15, 2025',
    badge: 'Project',
    description: 'The renovated wing of the Kananga Public Market is now open to vendors and the public.',
    content: `
      <p>The renovated wing of the Kananga Public Market is now open to vendors and the public.</p>
      <p class="mt-4">This marks a significant milestone in the municipality's effort to modernize commercial spaces and improve the experience for both vendors and shoppers.</p>
      <h3 class="font-semibold text-lg mt-6 mb-2">Features of the New Wing:</h3>
      <ul class="list-disc pl-6 space-y-2">
        <li>50 new vendor stalls with modern amenities</li>
        <li>Climate-controlled environment</li>
        <li>Improved sanitation and waste management systems</li>
        <li>Enhanced security and lighting</li>
        <li>Accessible parking facilities</li>
      </ul>
      <h3 class="font-semibold text-lg mt-6 mb-2">Stall Allocation:</h3>
      <p>Interested vendors can apply at the Market Management Office. Priority is given to displaced vendors from the previous market renovation phase.</p>
    `
  },
  {
    id: 'scheduled-power-interruption',
    title: 'Scheduled Power Interruption',
    date: 'Nov 10, 2025',
    badge: 'Advisory',
    description: 'Maintenance scheduled for Barangay Osmeña on Dec 1, 8:00 AM - 5:00 PM.',
    content: `
      <p>Maintenance scheduled for Barangay Osmeña on Dec 1, 8:00 AM - 5:00 PM.</p>
      <p class="mt-4">This scheduled maintenance is necessary to upgrade electrical infrastructure and ensure reliable power supply to the barangay.</p>
      <h3 class="font-semibold text-lg mt-6 mb-2">Affected Areas:</h3>
      <ul class="list-disc pl-6 space-y-2">
        <li>Barangay Osmeña (entire area)</li>
        <li>Portions of Barangay Poblacion adjacent to the lines</li>
      </ul>
      <h3 class="font-semibold text-lg mt-6 mb-2">Precautions:</h3>
      <p>Residents are advised to:</p>
      <ul class="list-disc pl-6 space-y-2">
        <li>Charge all electronic devices before the scheduled date</li>
        <li>Stock up on supplies that may require refrigeration</li>
        <li>Be cautious of potential traffic signal malfunctions</li>
      </ul>
      <h3 class="font-semibold text-lg mt-6 mb-2">Contact for Concerns:</h3>
      <p>Barangay Osmeña Office or Municipality Engineering Department</p>
    `
  }
]

const newsItem = computed(() => {
  const id = route.params.id as string
  return newsDatabase.find(item => item.id === id)
})

const goBack = () => {
  router.push('/news')
}
</script>

<template>
  <div>
    <!-- Hero Section -->
    <section class="bg-gradient-to-br from-primary-600 to-primary-700 text-white py-12 md:py-16">
      <div class="max-w-container mx-auto px-4">
        <button
          @click="goBack"
          class="mb-6 inline-flex items-center text-primary-100 hover:text-white transition-colors"
        >
          <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
          </svg>
          Back to News
        </button>
        <h1 class="text-4xl md:text-5xl font-bold mb-4">{{ t('news-title') }}</h1>
      </div>
    </section>

    <!-- News Not Found -->
    <div v-if="!newsItem" class="max-w-container mx-auto px-4 py-12">
      <div class="bg-yellow-50 border border-yellow-200 rounded-lg p-8 text-center">
        <h2 class="text-2xl font-bold text-gray-900 mb-4">News Article Not Found</h2>
        <p class="text-gray-600 mb-6">The news article you're looking for doesn't exist.</p>
        <button
          @click="goBack"
          class="inline-block bg-primary-600 hover:bg-primary-700 text-white font-medium py-2 px-6 rounded-lg transition-colors"
        >
          Return to News
        </button>
      </div>
    </div>

    <!-- News Detail -->
    <article v-else class="max-w-3xl mx-auto px-4 py-12">
      <!-- Metadata -->
      <div class="mb-8">
        <div class="flex items-center gap-3 mb-4">
          <span
            :class="['text-xs font-semibold px-3 py-1 rounded-full', {
              'bg-blue-100 text-blue-700': newsItem.badge === 'Announcement',
              'bg-green-100 text-green-700': newsItem.badge === 'Project',
              'bg-amber-100 text-amber-700': newsItem.badge === 'Advisory',
              'bg-purple-100 text-purple-700': newsItem.badge === 'Event',
              'bg-red-100 text-red-700': newsItem.badge === 'Alert'
            }]"
          >
            {{ newsItem.badge }}
          </span>
          <span class="text-gray-500 text-sm">{{ newsItem.date }}</span>
        </div>
        <h1 class="text-4xl md:text-5xl font-bold text-gray-900 mb-4">{{ newsItem.title }}</h1>
        <div class="border-b border-gray-200 pb-6">
          <p class="text-lg text-gray-600">{{ newsItem.description }}</p>
        </div>
      </div>

      <!-- Content -->
      <div class="prose prose-lg max-w-none text-gray-700 mb-12">
        <div v-html="newsItem.content" class="space-y-4"></div>
      </div>

      <!-- Back Button -->
      <div class="border-t border-gray-200 pt-8">
        <button
          @click="goBack"
          class="inline-block bg-primary-600 hover:bg-primary-700 text-white font-medium py-3 px-6 rounded-lg transition-colors"
        >
          ← Back to All News
        </button>
      </div>
    </article>
  </div>
</template>

<style scoped>
/* Prose styling for content */
:deep(.prose) {
  color: inherit;
}

:deep(.prose h3) {
  color: #1f2937;
  font-size: 1.25rem;
  font-weight: 600;
  margin-top: 1.5rem;
  margin-bottom: 0.5rem;
}

:deep(.prose ul) {
  margin: 0;
}

:deep(.prose li) {
  margin-bottom: 0.5rem;
}

:deep(.prose p) {
  margin-bottom: 1rem;
  line-height: 1.6;
}
</style>
