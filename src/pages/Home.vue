<script setup lang="ts">
import { ref } from 'vue'
import { useTranslations } from '@/composables/useTranslations'
import WeatherWidget from '@/components/WeatherWidget.vue'
import MapComponent from '@/components/MapComponent.vue'

const { t } = useTranslations()

const popularServices = ref([
  {
    id: 'birth-certificate',
    title: 'Birth Certificate',
    icon: '📄',
    description: 'Get certified copy of birth certificate'
  },
  {
    id: 'business-permit-new',
    title: 'Business Permits',
    icon: '🏪',
    description: 'New permits and renewals'
  },
  {
    id: 'real-property-tax',
    title: 'Tax Payments',
    icon: '💰',
    description: 'Property and business taxes'
  },
  {
    id: 'senior-citizen-id',
    title: 'Social Services',
    icon: '👥',
    description: 'Senior citizen & PWD services'
  },
  {
    id: 'vaccination',
    title: 'Health Services',
    icon: '❤️',
    description: 'Medical assistance & programs'
  },
  {
    id: 'cedula',
    title: 'Community Tax Certificate',
    icon: '📋',
    description: 'Community tax certificate (Cedula)'
  }
])

const stats = ref([
  { label: 'Population', value: '60,885', icon: '👥' },
  { label: 'Barangays', value: '23', icon: '📍' },
  { label: 'Classification', value: '1st Class', icon: '🏅' },
  { label: 'Land Area', value: '144.20 km²', icon: '📐' }
])

const news = ref([
  {
    id: 'business-permit-renewal-2025',
    title: 'Business Permit Renewal 2025',
    date: 'Nov 28, 2025',
    badge: 'Announcement',
    description: 'Deadline for business permit renewal is set for January 20, 2025.'
  },
  {
    id: 'new-public-market-wing',
    title: 'New Public Market Wing Opens',
    date: 'Nov 15, 2025',
    badge: 'Project',
    description: 'The renovated wing of the Kananga Public Market is now open.',
  },
  {
    id: 'scheduled-power-interruption',
    title: 'Scheduled Power Interruption',
    date: 'Nov 10, 2025',
    badge: 'Advisory',
    description: 'Maintenance scheduled for Barangay Osmeña on Dec 1.'
  }
])
</script>

<template>
  <div>
    <!-- Hero Section -->
    <section class="bg-gradient-to-br from-primary-600 via-primary-650 to-primary-700 text-white min-h-screen flex items-center relative overflow-hidden">
      <!-- Animated Background Elements -->
      <div class="absolute top-0 right-0 w-96 h-96 bg-primary-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
      <div class="absolute bottom-0 left-0 w-96 h-96 bg-accent/20 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
      
      <div class="max-w-container mx-auto px-4 relative z-10 w-full py-12 md:py-0">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div class="animate-fadeInUp">
            <div class="mb-6 inline-block px-4 py-2 bg-white/10 backdrop-blur border border-white/20 rounded-full text-sm font-semibold">
              🏛️ Municipality of Kananga, Leyte
            </div>
            <h1 class="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 leading-tight">{{ t('hero-title') }}</h1>
            <p class="text-lg sm:text-xl text-primary-100 mb-8 leading-relaxed">{{ t('hero-subtitle') }}</p>
            <div class="flex gap-4 flex-wrap">
              <RouterLink to="/services" class="px-6 sm:px-8 py-3 sm:py-4 bg-white text-primary-600 rounded-xl font-bold hover:shadow-2xl hover:scale-105 transition-all duration-200 flex items-center gap-2 text-sm sm:text-base">
                🔍 {{ t('hero-browse-services') }}
              </RouterLink>
              <RouterLink to="/contact" class="px-6 sm:px-8 py-3 sm:py-4 bg-white/20 backdrop-blur border border-white/30 text-white rounded-xl font-bold hover:bg-white/30 transition-all duration-200 flex items-center gap-2 hover:shadow-xl text-sm sm:text-base">
                📞 {{ t('hero-contact-us') }}
              </RouterLink>
            </div>
          </div>
          <div class="bg-white/10 backdrop-blur-lg rounded-2xl p-6 sm:p-8 border border-white/20 shadow-2xl hover:shadow-2xl transition-all duration-300">
            <h2 class="text-xl sm:text-2xl font-bold mb-6">{{ t('hero-find-service') }}</h2>
            <form class="space-y-4">
              <input
                type="search"
                :placeholder="t('hero-search-placeholder')"
                class="w-full px-4 py-3 rounded-lg text-sm sm:text-base text-gray-900 bg-white/90 focus:outline-none focus:ring-2 focus:ring-accent"
              />
              <button type="submit" class="w-full bg-accent text-white px-4 py-3 rounded-lg font-bold hover:shadow-lg hover:scale-105 transition-all duration-200 text-sm sm:text-base">
                Search Services
              </button>
            </form>
            <div class="mt-6 pt-6 border-t border-white/20">
              <p class="text-xs sm:text-sm mb-3 font-semibold">Popular services:</p>
              <div class="flex flex-wrap gap-2">
                <RouterLink to="/services/birth-certificate" class="text-xs sm:text-sm bg-primary-700/60 hover:bg-primary-700 px-2 sm:px-3 py-1 rounded-full transition-all duration-200 cursor-pointer">📄 Birth Certificate</RouterLink>
                <RouterLink to="/services/business-permit-new" class="text-xs sm:text-sm bg-primary-700/60 hover:bg-primary-700 px-2 sm:px-3 py-1 rounded-full transition-all duration-200 cursor-pointer">💼 Business Permit</RouterLink>
                <RouterLink to="/services/real-property-tax" class="text-xs sm:text-sm bg-primary-700/60 hover:bg-primary-700 px-2 sm:px-3 py-1 rounded-full transition-all duration-200 cursor-pointer">💰 Tax Payment</RouterLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Popular Services -->
    <section class="py-12 md:py-20">
      <div class="max-w-container mx-auto px-4">
        <div class="flex items-center justify-between mb-8 md:mb-12">
          <div>
            <h2 class="text-3xl sm:text-4xl font-bold text-gray-900">{{ t('section-popular') }}</h2>
            <p class="text-sm sm:text-base text-gray-600 mt-2">{{ t('section-popular-desc') }}</p>
          </div>
          <RouterLink to="/services" class="hidden md:inline-flex px-6 py-3 bg-primary-600 text-white rounded-xl font-semibold hover:bg-primary-700 hover:shadow-lg transition-all duration-200">
            {{ t('btn-view-all-services') }} →
          </RouterLink>
        </div>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-6">
          <RouterLink
            v-for="service in popularServices"
            :key="service.id"
            :to="`/services/${service.id}`"
            class="group bg-white rounded-xl sm:rounded-2xl border border-gray-100 p-4 sm:p-6 md:p-8 shadow-sm hover:shadow-xl hover:border-primary-200 transition-all duration-300 hover:-translate-y-1"
          >
            <div class="text-3xl sm:text-4xl md:text-5xl mb-2 sm:mb-3 md:mb-4 group-hover:scale-125 transition-transform duration-300 inline-block">{{ service.icon }}</div>
            <h3 class="text-base sm:text-lg md:text-lg font-bold text-gray-900 group-hover:text-primary-600 transition-colors duration-200">{{ service.title }}</h3>
            <p class="text-gray-600 text-xs sm:text-sm mt-1 sm:mt-2 leading-relaxed">{{ service.description }}</p>
            <div class="mt-2 sm:mt-3 md:mt-4 text-primary-600 font-semibold text-xs sm:text-sm group-hover:gap-1 flex items-center gap-0 transition-all duration-200">
              Learn more <span>→</span>
            </div>
          </RouterLink>
        </div>
        <RouterLink to="/services" class="md:hidden block mt-6 w-full px-6 py-3 bg-primary-600 text-white rounded-xl font-semibold hover:bg-primary-700 hover:shadow-lg transition-all duration-200 text-center">
          {{ t('btn-view-all-services') }} →
        </RouterLink>
      </div>
    </section>

    <!-- Statistics -->
    <section class="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div class="max-w-container mx-auto px-4">
        <div class="flex justify-between items-center mb-12">
          <div>
            <h2 class="text-4xl font-bold text-gray-900">Kananga at a Glance</h2>
            <p class="text-gray-600 mt-2">Key demographics and statistics</p>
          </div>
          <RouterLink to="/statistics" class="hidden md:inline-block px-6 py-3 bg-primary-600 text-white rounded-xl font-semibold hover:bg-primary-700 hover:shadow-lg transition-all duration-200">
            Full Statistics →
          </RouterLink>
        </div>
        <div class="grid grid-cols-2 md:grid-cols-4 gap-6">
          <a
            v-for="stat in stats"
            :key="stat.label"
            href="#"
            class="group bg-gradient-to-br from-primary-50 to-primary-100/50 rounded-2xl border border-primary-200 p-8 text-center hover:shadow-lg hover:border-primary-300 transition-all duration-300 hover:-translate-y-1"
          >
            <div class="text-4xl mb-3">{{ stat.icon }}</div>
            <div class="text-3xl font-bold text-primary-600 group-hover:text-primary-700">{{ stat.value }}</div>
            <div class="text-gray-600 mt-2">{{ stat.label }}</div>
          </a>
        </div>
      </div>
    </section>

    <!-- Weather & Map Section -->
    <section class="w-full py-12 sm:py-16 md:py-20 lg:py-24 bg-gray-50">
      <div class="max-w-container mx-auto px-4">
        <h2 class="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-8 sm:mb-10 md:mb-12">🌍 Weather & Location</h2>
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-10">
          <WeatherWidget />
          <MapComponent />
        </div>
      </div>
    </section>

    <!-- Why Kananga Section -->
    <section class="w-full py-12 sm:py-16 md:py-20 lg:py-24 bg-gradient-to-r from-accent/5 via-orange-50/50 to-accent/10">
      <div class="w-full px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 mx-auto flex justify-center">
        <div class="max-w-4xl w-full">
          <div class="inline-block px-3 sm:px-4 py-2 bg-accent/15 rounded-full text-accent font-semibold mb-4 sm:mb-6 text-xs sm:text-sm">
            ⚡ Key Economic Feature
          </div>
          <h2 class="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6 md:mb-8 leading-tight">Asia's Geothermal Capital</h2>
          <p class="text-base sm:text-lg md:text-xl text-gray-700 mb-8 sm:mb-10 md:mb-12 leading-relaxed max-w-3xl">
            Kananga is home to the <strong>Tongonan Geothermal Powerplant</strong>, one of the largest and most efficient geothermal power facilities in the Philippines and Asia. This landmark facility generates clean, renewable energy and positions Kananga as a global leader in sustainable power generation.
          </p>
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            <div class="bg-white/80 backdrop-blur-sm rounded-lg sm:rounded-xl p-4 sm:p-6 md:p-8 border border-accent/20 hover:border-accent/40 hover:shadow-lg transition-all duration-300">
              <div class="text-4xl sm:text-5xl mb-3 sm:mb-4">⚡</div>
              <h3 class="font-bold text-gray-900 mb-2 sm:mb-3 text-base sm:text-lg">Clean Energy</h3>
              <p class="text-gray-600 text-sm sm:text-base leading-relaxed">Renewable geothermal power generation supports sustainable development</p>
            </div>
            <div class="bg-white/80 backdrop-blur-sm rounded-lg sm:rounded-xl p-4 sm:p-6 md:p-8 border border-accent/20 hover:border-accent/40 hover:shadow-lg transition-all duration-300">
              <div class="text-4xl sm:text-5xl mb-3 sm:mb-4">🏭</div>
              <h3 class="font-bold text-gray-900 mb-2 sm:mb-3 text-base sm:text-lg">Economic Growth</h3>
              <p class="text-gray-600 text-sm sm:text-base leading-relaxed">Major employer and contributor to the municipal economy</p>
            </div>
            <div class="bg-white/80 backdrop-blur-sm rounded-lg sm:rounded-xl p-4 sm:p-6 md:p-8 border border-accent/20 hover:border-accent/40 hover:shadow-lg transition-all duration-300">
              <div class="text-4xl sm:text-5xl mb-3 sm:mb-4">🌍</div>
              <h3 class="font-bold text-gray-900 mb-2 sm:mb-3 text-base sm:text-lg">Global Impact</h3>
              <p class="text-gray-600 text-sm sm:text-base leading-relaxed">Part of Philippines' renewable energy infrastructure</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Latest News -->
    <section class="py-16">
      <div class="max-w-container mx-auto px-4">
        <div class="flex justify-between items-center mb-12">
          <h2 class="text-3xl font-bold text-gray-900">Latest Updates</h2>
          <RouterLink to="/news" class="text-primary-600 hover:text-primary-700 font-semibold">
            View All →
          </RouterLink>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <RouterLink 
            v-for="(item, idx) in news"
            :key="idx"
            :to="`/news/${item.id}`"
            class="block group"
          >
            <article
              class="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg hover:border-primary-400 transition-all duration-200 h-full cursor-pointer"
            >
              <div class="flex items-center gap-3 mb-3">
                <span
                  :class="['text-xs font-semibold px-3 py-1 rounded-full', {
                    'bg-blue-100 text-blue-700': item.badge === 'Announcement',
                    'bg-green-100 text-green-700': item.badge === 'Project',
                    'bg-amber-100 text-amber-700': item.badge === 'Advisory'
                  }]"
                >
                  {{ item.badge }}
                </span>
                <span class="text-sm text-gray-500">{{ item.date }}</span>
              </div>
              <h3 class="text-lg font-semibold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors">{{ item.title }}</h3>
              <p class="text-gray-600">{{ item.description }}</p>
            </article>
          </RouterLink>
        </div>
      </div>
    </section>

    <!-- Contact CTA -->
    <section class="py-16 bg-primary-50">
      <div class="max-w-container mx-auto px-4">
        <h2 class="text-3xl font-bold text-center text-gray-900 mb-8">Need Help?</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <a href="tel:0788053581" class="bg-white rounded-lg p-6 text-center hover:shadow-lg transition-all border border-gray-200">
            <div class="text-3xl mb-3">☎️</div>
            <h3 class="font-semibold mb-1">(078) 805-3581</h3>
            <p class="text-sm text-gray-600">Mon-Fri: 8:00 AM - 5:00 PM</p>
          </a>
          <a href="mailto:lgukanangaleyte@gmail.com" class="bg-white rounded-lg p-6 text-center hover:shadow-lg transition-all border border-gray-200">
            <div class="text-3xl mb-3">✉️</div>
            <h3 class="font-semibold mb-1">lgukanangaleyte@gmail.com</h3>
            <p class="text-sm text-gray-600">We'll respond within 24 hours</p>
          </a>
          <div class="bg-white rounded-lg p-6 text-center border border-gray-200">
            <div class="text-3xl mb-3">📍</div>
            <h3 class="font-semibold mb-1">Municipal Hall</h3>
            <p class="text-sm text-gray-600">Kananga, Leyte 6531</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
</style>
