<script setup lang="ts">
import { computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useServicesData } from '@/composables/useServicesData'

const route = useRoute()
const router = useRouter()
const { getById, getByCategory } = useServicesData()

const serviceId = route.params.id as string
const service = getById(serviceId)

// Get related services from same category
const relatedServices = computed(() => {
  if (!service) return []
  return getByCategory(service.categoryId).filter(s => s.id !== serviceId).slice(0, 3)
})

// Handle not found
const handleBackClick = () => {
  router.push('/services')
}
</script>

<template>
  <div v-if="service" class="min-h-screen bg-gray-50">
    <!-- Breadcrumb -->
    <div class="bg-white border-b border-gray-200">
      <div class="max-w-container mx-auto px-4 py-4">
        <div class="flex items-center gap-2 text-sm text-gray-600">
          <router-link to="/" class="hover:text-primary-600">Home</router-link>
          <span>›</span>
          <router-link to="/services" class="hover:text-primary-600">Services</router-link>
          <span>›</span>
          <span class="text-gray-900">{{ service.title }}</span>
        </div>
      </div>
    </div>

    <!-- Hero Section -->
    <section class="bg-gradient-to-br from-primary-600 to-primary-700 text-white py-8 md:py-12">
      <div class="max-w-container mx-auto px-4">
        <button
          @click="handleBackClick"
          class="mb-6 inline-flex items-center gap-2 text-primary-100 hover:text-white transition"
        >
          ← Back to Services
        </button>
        <h1 class="text-3xl md:text-4xl font-bold mb-4">{{ service.title }}</h1>
        <span class="inline-block px-4 py-2 text-sm font-semibold text-primary-700 bg-primary-100 rounded-full">
          {{ service.category }}
        </span>
      </div>
    </section>

    <!-- Main Content -->
    <div class="max-w-container mx-auto px-4 py-12">
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <!-- Main Content -->
        <div class="lg:col-span-2">
          <!-- Overview Card -->
          <div class="bg-white rounded-lg shadow p-8 mb-8">
            <h2 class="text-2xl font-bold text-gray-900 mb-6">Overview</h2>
            <p class="text-gray-700 text-lg leading-relaxed mb-8">{{ service.description }}</p>

            <!-- Key Details Grid -->
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div class="bg-primary-50 rounded-lg p-6 border border-primary-200">
                <div class="flex items-start gap-3">
                  <span class="text-3xl">💰</span>
                  <div>
                    <h3 class="font-semibold text-gray-900 mb-1">Service Fee</h3>
                    <p class="text-2xl font-bold text-primary-600">{{ service.fee }}</p>
                  </div>
                </div>
              </div>
              <div class="bg-secondary-50 rounded-lg p-6 border border-secondary-200">
                <div class="flex items-start gap-3">
                  <span class="text-3xl">⏱️</span>
                  <div>
                    <h3 class="font-semibold text-gray-900 mb-1">Processing Time</h3>
                    <p class="text-2xl font-bold text-secondary-600">{{ service.processingTime }}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Responsible Office -->
          <div class="bg-white rounded-lg shadow p-8 mb-8">
            <h2 class="text-2xl font-bold text-gray-900 mb-6">Responsible Office</h2>
            <div class="bg-accent/10 border-l-4 border-accent rounded p-6">
              <p class="text-lg font-semibold text-gray-900 mb-2">{{ service.office }}</p>
              <p class="text-gray-600">For inquiries and applications related to this service, please contact the office listed above.</p>
            </div>
          </div>

          <!-- Requirements & Process -->
          <div class="bg-white rounded-lg shadow p-8 mb-8">
            <h2 class="text-2xl font-bold text-gray-900 mb-6">Requirements & Process</h2>
            <div class="space-y-6">
              <div>
                <h3 class="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                  <span class="text-xl">📋</span> Typical Requirements
                </h3>
                <ul class="list-disc list-inside space-y-2 text-gray-700">
                  <li>Valid identification (ID, driver's license, passport)</li>
                  <li>Supporting documents as required by the service</li>
                  <li>Proof of residence or residency certificate</li>
                  <li>Relevant forms or applications (available at the office)</li>
                </ul>
              </div>
              <div>
                <h3 class="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                  <span class="text-xl">✓</span> How to Apply
                </h3>
                <ol class="list-decimal list-inside space-y-2 text-gray-700">
                  <li>Visit the responsible office during business hours</li>
                  <li>Request the necessary form or application</li>
                  <li>Fill out the form with accurate information</li>
                  <li>Submit the form with all required documents</li>
                  <li>Pay the service fee if applicable</li>
                  <li>Receive confirmation and timeline for completion</li>
                </ol>
              </div>
            </div>
          </div>

          <!-- Contact Information -->
          <div class="bg-white rounded-lg shadow p-8">
            <h2 class="text-2xl font-bold text-gray-900 mb-6">Need Help?</h2>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
              <a href="tel:0788053581" class="bg-blue-50 hover:bg-blue-100 rounded-lg p-6 transition border border-blue-200">
                <div class="text-3xl mb-2">☎️</div>
                <p class="font-semibold text-gray-900 mb-1">Call Us</p>
                <p class="text-blue-600 font-semibold">(078) 805-3581</p>
              </a>
              <a href="mailto:lgukanangaleyte@gmail.com" class="bg-purple-50 hover:bg-purple-100 rounded-lg p-6 transition border border-purple-200">
                <div class="text-3xl mb-2">✉️</div>
                <p class="font-semibold text-gray-900 mb-1">Email Us</p>
                <p class="text-purple-600 font-semibold break-all">lgukanangaleyte@gmail.com</p>
              </a>
              <div class="bg-green-50 rounded-lg p-6 border border-green-200">
                <div class="text-3xl mb-2">📍</div>
                <p class="font-semibold text-gray-900 mb-1">Visit Us</p>
                <p class="text-green-600 font-semibold">Municipal Hall<br/>Kananga, Leyte 6531</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Sidebar -->
        <div class="lg:col-span-1">
          <!-- Quick Summary -->
          <div class="bg-white rounded-lg shadow p-6 sticky top-32 mb-8">
            <h3 class="font-bold text-gray-900 mb-4 text-lg">Quick Summary</h3>
            <div class="space-y-4">
              <div>
                <p class="text-sm text-gray-600 mb-1">Category</p>
                <p class="font-semibold text-gray-900">{{ service.category }}</p>
              </div>
              <div>
                <p class="text-sm text-gray-600 mb-1">Fee</p>
                <p class="font-semibold text-primary-600 text-lg">{{ service.fee }}</p>
              </div>
              <div>
                <p class="text-sm text-gray-600 mb-1">Processing Time</p>
                <p class="font-semibold text-secondary-600">{{ service.processingTime }}</p>
              </div>
              <div class="pt-4 border-t border-gray-200">
                <p class="text-sm text-gray-600 mb-1">Office</p>
                <p class="font-semibold text-gray-900">{{ service.office }}</p>
              </div>
            </div>
          </div>

          <!-- Related Services -->
          <div v-if="relatedServices.length > 0" class="bg-white rounded-lg shadow p-6">
            <h3 class="font-bold text-gray-900 mb-4 text-lg">Related Services</h3>
            <div class="space-y-3">
              <router-link
                v-for="relatedService in relatedServices"
                :key="relatedService.id"
                :to="`/services/${relatedService.id}`"
                class="block p-3 bg-gray-50 hover:bg-primary-50 rounded-lg transition border border-gray-200 hover:border-primary-300"
              >
                <p class="font-semibold text-gray-900 hover:text-primary-600">{{ relatedService.title }}</p>
                <p class="text-sm text-gray-600">{{ relatedService.fee }}</p>
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- Service Not Found -->
  <div v-else class="min-h-screen flex items-center justify-center bg-gray-50">
    <div class="max-w-container mx-auto px-4">
      <div class="bg-white rounded-lg shadow p-12 text-center">
        <div class="text-6xl mb-6">🔍</div>
        <h1 class="text-3xl font-bold text-gray-900 mb-4">Service Not Found</h1>
        <p class="text-gray-600 mb-8">The service you're looking for doesn't exist or has been removed.</p>
        <button
          @click="handleBackClick"
          class="inline-flex items-center gap-2 px-6 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 font-semibold"
        >
          ← Back to Services
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
</style>
