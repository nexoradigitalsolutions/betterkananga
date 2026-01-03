<script setup lang="ts">
import { useTranslations } from '@/composables/useTranslations'

const { t } = useTranslations()
</script>

<template>
  <div>
    <!-- Hero Section -->
    <section class="bg-gradient-to-br from-primary-600 to-primary-700 text-white py-12 md:py-16">
      <div class="max-w-container mx-auto px-4">
        <h1 class="text-4xl md:text-5xl font-bold mb-4">{{ t('contact-title') }}</h1>
        <p class="text-xl text-primary-100">{{ t('contact-desc') }}</p>
      </div>
    </section>

    <!-- Main Content -->
    <div class="max-w-container mx-auto px-4 py-12">
      <!-- Main Contact Info -->
      <section class="mb-12">
        <h2 class="text-3xl font-bold text-gray-900 mb-8">{{ t('contact-get-in-touch') }}</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <!-- Phone -->
          <div class="bg-white rounded-lg border border-gray-200 p-8 shadow hover:shadow-lg transition-shadow">
            <div class="text-5xl mb-4">☎️</div>
            <h3 class="text-lg font-semibold text-gray-900 mb-2">{{ t('contact-phone') }}</h3>
            <p class="text-gray-600 mb-2">{{ t('contact-phone-desc') }}</p>
            <a href="tel:0788053581" class="text-primary-600 hover:text-primary-700 font-semibold text-lg">
              (078) 805-3581
            </a>
            <p class="text-sm text-gray-600 mt-2">{{ t('contact-hours') }}</p>
          </div>

          <!-- Email -->
          <div class="bg-white rounded-lg border border-gray-200 p-8 shadow hover:shadow-lg transition-shadow">
            <div class="text-5xl mb-4">✉️</div>
            <h3 class="text-lg font-semibold text-gray-900 mb-2">{{ t('contact-email') }}</h3>
            <p class="text-gray-600 mb-2">{{ t('contact-email-desc') }}</p>
            <a href="mailto:lgukanangaleyte@gmail.com" class="text-primary-600 hover:text-primary-700 font-semibold text-sm break-all">
              lgukanangaleyte@gmail.com
            </a>
            <p class="text-sm text-gray-600 mt-2">{{ t('contact-response') }}</p>
          </div>

          <!-- Address -->
          <div class="bg-white rounded-lg border border-gray-200 p-8 shadow hover:shadow-lg transition-shadow">
            <div class="text-5xl mb-4">📍</div>
            <h3 class="text-lg font-semibold text-gray-900 mb-2">{{ t('contact-address') }}</h3>
            <p class="text-gray-600 mb-2">{{ t('contact-address-desc') }}</p>
            <div class="text-primary-600 hover:text-primary-700 font-semibold">
              Municipal Hall<br/>
              Kananga, Leyte 6531
            </div>
            <p class="text-sm text-gray-600 mt-2">{{ t('contact-open-mon-fri') }}</p>
          </div>
        </div>
      </section>

      <!-- Department Contacts -->
      <section class="mb-12">
        <h2 class="text-3xl font-bold text-gray-900 mb-8">Department Contacts</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div class="bg-white rounded-lg border border-gray-200 p-6 shadow">
            <h3 class="text-lg font-semibold text-gray-900 mb-4">Office of the Mayor</h3>
            <p class="text-gray-600 text-sm mb-3">For general inquiries and executive matters</p>
            <a href="tel:0783265002" class="text-primary-600 hover:underline text-sm">📞 (078) 326-5002</a>
          </div>
          <div class="bg-white rounded-lg border border-gray-200 p-6 shadow">
            <h3 class="text-lg font-semibold text-gray-900 mb-4">Municipal Treasurer</h3>
            <p class="text-gray-600 text-sm mb-3">For tax payments and financial matters</p>
            <a href="tel:0783265005" class="text-primary-600 hover:underline text-sm">📞 (078) 326-5005</a>
          </div>
          <div class="bg-white rounded-lg border border-gray-200 p-6 shadow">
            <h3 class="text-lg font-semibold text-gray-900 mb-4">Civil Registrar</h3>
            <p class="text-gray-600 text-sm mb-3">For vital records and certificates</p>
            <a href="tel:0783265010" class="text-primary-600 hover:underline text-sm">📞 (078) 326-5010</a>
          </div>
          <div class="bg-white rounded-lg border border-gray-200 p-6 shadow">
            <h3 class="text-lg font-semibold text-gray-900 mb-4">Health Office</h3>
            <p class="text-gray-600 text-sm mb-3">For health services and programs</p>
            <a href="tel:0783265021" class="text-primary-600 hover:underline text-sm">📞 (078) 326-5021</a>
          </div>
        </div>
      </section>

      <!-- Emergency Hotlines -->
      <section>
        <h2 class="text-3xl font-bold text-gray-900 mb-8">Emergency Hotlines</h2>
        <div class="bg-danger/10 rounded-lg border-2 border-danger p-8">
          <h3 class="text-xl font-semibold text-danger mb-4">Available 24/7</h3>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
            <div class="flex items-center gap-3">
              <span class="text-2xl">🚔</span>
              <div>
                <p class="font-semibold text-gray-900">Police</p>
                <a href="tel:09274008033" class="text-danger hover:underline">0927 400 8033</a>
              </div>
            </div>
            <div class="flex items-center gap-3">
              <span class="text-2xl">🔥</span>
              <div>
                <p class="font-semibold text-gray-900">Fire Department</p>
                <a href="tel:09360620305" class="text-danger hover:underline">0936 062 0305</a>
              </div>
            </div>
            <div class="flex items-center gap-3">
              <span class="text-2xl">❤️</span>
              <div>
                <p class="font-semibold text-gray-900">Social Services</p>
                <a href="tel:09162840885" class="text-danger hover:underline">0916 284 0885</a>
              </div>
            </div>
            <div class="flex items-center gap-3">
              <span class="text-2xl">⚠️</span>
              <div>
                <p class="font-semibold text-gray-900">Disaster Response</p>
                <a href="tel:09263833744" class="text-danger hover:underline">0926 383 3744</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>
