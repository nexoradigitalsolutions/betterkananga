import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useAppStore = defineStore('app', () => {
  // Language state
  const language = ref<'en' | 'fil' | 'bis'>('en')
  const languages = ref(['en', 'fil', 'bis'])

  // Theme state (future)
  const isDarkMode = ref(false)

  // Navigation state
  const isMobileMenuOpen = ref(false)

  // Set language
  function setLanguage(lang: 'en' | 'fil' | 'bis') {
    language.value = lang
    localStorage.setItem('language', lang)
  }

  // Toggle mobile menu
  function toggleMobileMenu() {
    isMobileMenuOpen.value = !isMobileMenuOpen.value
  }

  // Close mobile menu
  function closeMobileMenu() {
    isMobileMenuOpen.value = false
  }

  // Toggle dark mode
  function toggleDarkMode() {
    isDarkMode.value = !isDarkMode.value
    localStorage.setItem('darkMode', isDarkMode.value.toString())
  }

  // Initialize from localStorage
  function initializeApp() {
    const savedLanguage = localStorage.getItem('language') as 'en' | 'fil' | 'bis' || 'en'
    const savedDarkMode = localStorage.getItem('darkMode') === 'true'
    
    language.value = savedLanguage
    isDarkMode.value = savedDarkMode
  }

  return {
    language,
    languages,
    isDarkMode,
    isMobileMenuOpen,
    setLanguage,
    toggleMobileMenu,
    closeMobileMenu,
    toggleDarkMode,
    initializeApp
  }
})
