<script setup lang="ts">
import { useAppStore } from '@/stores/app'
import { ref, computed } from 'vue'
import Navigation from './Navigation.vue'

const appStore = useAppStore()
const showMobileMenu = computed(() => appStore.isMobileMenuOpen)
const mobileServicesOpen = ref(false)
const mobileLegislativeOpen = ref(false)

const servicesCategories = [
  { name: 'Certificates', categoryId: 'certificates' },
  { name: 'Business', categoryId: 'business' },
  { name: 'Tax Payments', categoryId: 'tax-payments' },
  { name: 'Social Services', categoryId: 'social-services' },
  { name: 'Health', categoryId: 'health' },
  { name: 'Agriculture', categoryId: 'agriculture' },
  { name: 'Infrastructure', categoryId: 'infrastructure' },
  { name: 'Education', categoryId: 'education' },
  { name: 'Public Safety', categoryId: 'public-safety' },
  { name: 'Environment', categoryId: 'environment' }
]

const legislativeItems = [
  { name: 'Ordinance Framework', path: '/legislative' },
  { name: 'Resolution Framework', path: '/legislative' }
]
</script>

<template>
  <header class="sticky top-0 z-50 bg-white/95 backdrop-blur-lg border-b border-gray-100 shadow-sm">
    <!-- Hotline Bar -->
    <div class="bg-gradient-to-r from-red-600 via-red-600 to-red-700 text-white py-2.5 text-sm">
      <div class="max-w-container mx-auto px-4">
        <div class="flex flex-wrap justify-center gap-4 md:gap-8">
          <a href="tel:09274008033" class="flex items-center gap-2 hover:text-red-100 transition duration-200 hover:scale-105 transform">
            <span>🚔 Police: 0927 400 8033</span>
          </a>
          <a href="tel:09162840885" class="flex items-center gap-2 hover:text-red-100 transition duration-200 hover:scale-105 transform">
            <span>❤️ MSWDO: 0916 284 0885</span>
          </a>
          <a href="tel:09360620305" class="flex items-center gap-2 hover:text-red-100 transition duration-200 hover:scale-105 transform">
            <span>🔥 Fire: 0936 062 0305</span>
          </a>
          <a href="tel:0906188086" class="flex items-center gap-2 hover:text-red-100 transition duration-200 hover:scale-105 transform">
            <span>🏢 DILG: 0906 188 086</span>
          </a>
        </div>
      </div>
    </div>

    <!-- Main Header -->
    <div class="max-w-container mx-auto px-4 py-4">
      <div class="flex items-center justify-between">
        <!-- Logo -->
        <RouterLink to="/" class="flex items-center gap-2 font-bold text-xl group">
          <div class="w-10 h-10 bg-gradient-to-br from-primary-600 to-primary-700 rounded-lg flex items-center justify-center text-white font-bold shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-200 transform">BK</div>
          <span class="bg-gradient-to-r from-primary-600 to-primary-700 bg-clip-text text-transparent">BetterKananga</span>
        </RouterLink>

        <!-- Desktop Navigation + Language Selector -->
        <div class="hidden md:flex items-center gap-4">
          <!-- Desktop Navigation -->
          <Navigation />

          <!-- Language Selector -->
          <div class="flex items-center gap-2 bg-gray-100/80 rounded-full p-1.5 backdrop-blur">
            <button
              @click="appStore.setLanguage('en')"
              :class="['px-3.5 py-1.5 rounded-full text-sm font-semibold transition duration-200', appStore.language === 'en' ? 'bg-gradient-to-r from-primary-600 to-primary-700 text-white shadow-lg scale-105' : 'text-gray-600 hover:text-gray-900']"
            >
              EN
            </button>
            <button
              @click="appStore.setLanguage('fil')"
              :class="['px-3.5 py-1.5 rounded-full text-sm font-semibold transition duration-200', appStore.language === 'fil' ? 'bg-gradient-to-r from-primary-600 to-primary-700 text-white shadow-lg scale-105' : 'text-gray-600 hover:text-gray-900']"
            >
              FIL
            </button>
            <button
              @click="appStore.setLanguage('bis')"
              :class="['px-3.5 py-1.5 rounded-full text-sm font-semibold transition duration-200', appStore.language === 'bis' ? 'bg-gradient-to-r from-primary-600 to-primary-700 text-white shadow-lg scale-105' : 'text-gray-600 hover:text-gray-900']"
            >
              BIS
            </button>
          </div>
        </div>

        <!-- Mobile Language Selector & Menu Toggle -->
        <div class="flex items-center gap-2 md:hidden">
          <div class="hidden sm:flex gap-2 bg-gray-100/80 rounded-full p-1.5 backdrop-blur">
            <button
              @click="appStore.setLanguage('en')"
              :class="['px-3.5 py-1.5 rounded-full text-sm font-semibold transition duration-200', appStore.language === 'en' ? 'bg-gradient-to-r from-primary-600 to-primary-700 text-white shadow-lg scale-105' : 'text-gray-600 hover:text-gray-900']"
            >
              EN
            </button>
            <button
              @click="appStore.setLanguage('fil')"
              :class="['px-3.5 py-1.5 rounded-full text-sm font-semibold transition duration-200', appStore.language === 'fil' ? 'bg-gradient-to-r from-primary-600 to-primary-700 text-white shadow-lg scale-105' : 'text-gray-600 hover:text-gray-900']"
            >
              FIL
            </button>
            <button
              @click="appStore.setLanguage('bis')"
              :class="['px-3.5 py-1.5 rounded-full text-sm font-semibold transition duration-200', appStore.language === 'bis' ? 'bg-gradient-to-r from-primary-600 to-primary-700 text-white shadow-lg scale-105' : 'text-gray-600 hover:text-gray-900']"
            >
              BIS
            </button>
          </div>

          <!-- Mobile Menu Toggle -->
          <button
            @click="appStore.toggleMobileMenu()"
            class="px-3 py-2 rounded-lg hover:bg-gray-200 text-gray-700 transition duration-200 hover:scale-110 transform"
            :aria-expanded="showMobileMenu"
          >
            <span v-if="!showMobileMenu">☰</span>
            <span v-else>✕</span>
          </button>
        </div>
      </div>

      <!-- Mobile Navigation -->
      <nav v-if="showMobileMenu" class="md:hidden mt-4 border-t pt-4 space-y-1">
        <RouterLink
          to="/"
          class="block py-2 px-4 text-gray-700 hover:text-primary-600 hover:bg-gray-50 rounded transition-colors"
          @click="appStore.closeMobileMenu()"
        >
          Home
        </RouterLink>

        <!-- Mobile Services Dropdown -->
        <div>
          <button
            @click="mobileServicesOpen = !mobileServicesOpen"
            class="w-full text-left py-2 px-4 text-gray-700 hover:text-primary-600 hover:bg-gray-50 rounded transition-colors flex items-center justify-between"
          >
            <span>Services</span>
            <span :class="['transition-transform', mobileServicesOpen ? 'rotate-180' : '']">▼</span>
          </button>
          <div v-show="mobileServicesOpen" class="bg-gray-50 rounded">
            <RouterLink
              to="/services"
              class="block py-2 px-8 text-sm text-gray-700 hover:text-primary-600 hover:bg-primary-50 rounded transition-colors"
              @click="appStore.closeMobileMenu(); mobileServicesOpen = false"
            >
              View All Services
            </RouterLink>
            <RouterLink
              v-for="cat in servicesCategories"
              :key="cat.categoryId"
              :to="{ path: '/services', query: { category: cat.categoryId } }"
              class="block py-2 px-8 text-sm text-gray-700 hover:text-primary-600 hover:bg-primary-50 rounded transition-colors"
              @click="appStore.closeMobileMenu(); mobileServicesOpen = false"
            >
              {{ cat.name }}
            </RouterLink>
          </div>
        </div>

        <RouterLink
          to="/government"
          class="block py-2 px-4 text-gray-700 hover:text-primary-600 hover:bg-gray-50 rounded transition-colors"
          @click="appStore.closeMobileMenu()"
        >
          Government
        </RouterLink>

        <RouterLink
          to="/statistics"
          class="block py-2 px-4 text-gray-700 hover:text-primary-600 hover:bg-gray-50 rounded transition-colors"
          @click="appStore.closeMobileMenu()"
        >
          Statistics
        </RouterLink>

        <!-- Mobile Legislative Dropdown -->
        <div>
          <button
            @click="mobileLegislativeOpen = !mobileLegislativeOpen"
            class="w-full text-left py-2 px-4 text-gray-700 hover:text-primary-600 hover:bg-gray-50 rounded transition-colors flex items-center justify-between"
          >
            <span>Legislative</span>
            <span :class="['transition-transform', mobileLegislativeOpen ? 'rotate-180' : '']">▼</span>
          </button>
          <div v-show="mobileLegislativeOpen" class="bg-gray-50 rounded">
            <RouterLink
              to="/legislative"
              class="block py-2 px-8 text-sm text-gray-700 hover:text-primary-600 hover:bg-primary-50 rounded transition-colors"
              @click="appStore.closeMobileMenu(); mobileLegislativeOpen = false"
            >
              View All
            </RouterLink>
            <RouterLink
              v-for="item in legislativeItems"
              :key="item.path"
              :to="item.path"
              class="block py-2 px-8 text-sm text-gray-700 hover:text-primary-600 hover:bg-primary-50 rounded transition-colors"
              @click="appStore.closeMobileMenu(); mobileLegislativeOpen = false"
            >
              {{ item.name }}
            </RouterLink>
          </div>
        </div>

        <RouterLink
          to="/budget"
          class="block py-2 px-4 text-gray-700 hover:text-primary-600 hover:bg-gray-50 rounded transition-colors"
          @click="appStore.closeMobileMenu()"
        >
          Transparency
        </RouterLink>

        <RouterLink
          to="/contact"
          class="block py-2 px-4 text-gray-700 hover:text-primary-600 hover:bg-gray-50 rounded transition-colors"
          @click="appStore.closeMobileMenu()"
        >
          Contact
        </RouterLink>
      </nav>
    </div>
  </header>
</template>

<style scoped>
</style>
