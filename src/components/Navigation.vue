<script setup lang="ts">
import { ref } from 'vue'

const servicesDropdown = ref(false)
const legislativeDropdown = ref(false)

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
  <nav class="flex gap-1">
    <RouterLink
      to="/"
      class="px-2 md:px-3 py-2 text-sm md:text-base text-gray-700 hover:text-primary-600 rounded-lg hover:bg-gray-50 transition-colors"
      active-class="text-primary-600 bg-primary-50 font-semibold"
    >
      Home
    </RouterLink>

    <!-- Services Dropdown -->
    <div class="relative group">
      <button
        @mouseover="servicesDropdown = true"
        @mouseleave="servicesDropdown = false"
        @click="servicesDropdown = !servicesDropdown"
        class="px-2 md:px-3 py-2 text-sm md:text-base text-gray-700 hover:text-primary-600 rounded-lg hover:bg-gray-50 transition-colors flex items-center gap-1"
      >
        Services
        <span :class="['transition-transform text-xs', servicesDropdown ? 'rotate-180' : '']">▼</span>
      </button>
      
      <div
        v-show="servicesDropdown"
        @mouseover="servicesDropdown = true"
        @mouseleave="servicesDropdown = false"
        class="absolute left-0 mt-0 w-48 md:w-56 bg-white rounded-lg shadow-xl border border-gray-100 py-2 z-50 opacity-0 group-hover:opacity-100 group-hover:pointer-events-auto pointer-events-none transition-opacity"
      >
        <RouterLink
          to="/services"
          class="block px-4 py-2 text-sm text-gray-700 hover:text-primary-600 hover:bg-gray-50 border-b border-gray-100 font-semibold"
          @click="servicesDropdown = false"
        >
          View All Services
        </RouterLink>
        <div class="border-t border-gray-100 pt-1">
          <RouterLink
            v-for="cat in servicesCategories"
            :key="cat.categoryId"
            :to="{ path: '/services', query: { category: cat.categoryId } }"
            class="block px-4 py-2 text-sm text-gray-700 hover:text-primary-600 hover:bg-primary-50 transition-colors"
            @click="servicesDropdown = false"
          >
            {{ cat.name }}
          </RouterLink>
        </div>
      </div>
    </div>

    <RouterLink
      to="/government"
      class="px-2 md:px-3 py-2 text-sm md:text-base text-gray-700 hover:text-primary-600 rounded-lg hover:bg-gray-50 transition-colors"
      active-class="text-primary-600 bg-primary-50 font-semibold"
    >
      Government
    </RouterLink>

    <RouterLink
      to="/statistics"
      class="px-2 md:px-3 py-2 text-sm md:text-base text-gray-700 hover:text-primary-600 rounded-lg hover:bg-gray-50 transition-colors"
      active-class="text-primary-600 bg-primary-50 font-semibold"
    >
      Statistics
    </RouterLink>

    <!-- Legislative Dropdown -->
    <div class="relative group">
      <button
        @mouseover="legislativeDropdown = true"
        @mouseleave="legislativeDropdown = false"
        @click="legislativeDropdown = !legislativeDropdown"
        class="px-2 md:px-3 py-2 text-sm md:text-base text-gray-700 hover:text-primary-600 rounded-lg hover:bg-gray-50 transition-colors flex items-center gap-1"
      >
        Legislative
        <span :class="['transition-transform text-xs', legislativeDropdown ? 'rotate-180' : '']">▼</span>
      </button>
      
      <div
        v-show="legislativeDropdown"
        @mouseover="legislativeDropdown = true"
        @mouseleave="legislativeDropdown = false"
        class="absolute left-0 mt-0 w-56 bg-white rounded-lg shadow-xl border border-gray-100 py-2 z-50 opacity-0 group-hover:opacity-100 group-hover:pointer-events-auto pointer-events-none transition-opacity"
      >
        <RouterLink
          to="/legislative"
          class="block px-4 py-2.5 text-gray-700 hover:text-primary-600 hover:bg-gray-50 border-b border-gray-100 font-semibold text-sm"
          @click="legislativeDropdown = false"
        >
          View All
        </RouterLink>
        <div class="border-t border-gray-100 pt-1">
          <RouterLink
            v-for="item in legislativeItems"
            :key="item.path"
            :to="item.path"
            class="block px-4 py-2 text-gray-700 hover:text-primary-600 hover:bg-primary-50 text-sm transition-colors"
            @click="legislativeDropdown = false"
          >
            {{ item.name }}
          </RouterLink>
        </div>
      </div>
    </div>

    <RouterLink
      to="/budget"
      class="px-3 py-2 text-gray-700 hover:text-primary-600 rounded-lg hover:bg-gray-50 transition-colors"
      active-class="text-primary-600 bg-primary-50 font-semibold"
    >
      Transparency
    </RouterLink>

    <RouterLink
      to="/contact"
      class="px-3 py-2 text-gray-700 hover:text-primary-600 rounded-lg hover:bg-gray-50 transition-colors"
      active-class="text-primary-600 bg-primary-50 font-semibold"
    >
      Contact
    </RouterLink>
  </nav>
</template>

<style scoped>
</style>
