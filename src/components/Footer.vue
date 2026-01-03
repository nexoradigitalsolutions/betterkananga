<script setup lang="ts">
</script>

<template>
  <footer class="bg-gradient-to-b from-gray-900 to-gray-950 text-white mt-16 md:mt-20 relative">
    <!-- Top Border Accent -->
    <div class="h-1 bg-gradient-to-r from-primary-600 via-secondary-600 to-accent"></div>
    
    <div class="max-w-container mx-auto px-4 py-12 md:py-16">
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 mb-8 md:mb-12">
        <!-- Brand -->
        <div class="col-span-1 sm:col-span-2 md:col-span-1">
          <div class="flex items-center gap-2 mb-4">
            <div class="w-10 h-10 bg-gradient-to-br from-primary-600 to-primary-700 rounded-lg flex items-center justify-center font-bold text-sm shadow-lg">
              BK
            </div>
            <h3 class="text-xl font-bold">BetterKananga</h3>
          </div>
          <p class="text-gray-400 text-sm mb-6 leading-relaxed">
            Empowering the people of Kananga with transparent, accessible government services.
          </p>
          <div class="flex gap-4">
            <a href="https://facebook.com" target="_blank" rel="noopener" class="w-10 h-10 bg-gray-800 hover:bg-primary-600 rounded-lg flex items-center justify-center transition-all duration-200 text-lg transform hover:scale-110">📱</a>
            <a href="https://linkedin.com" target="_blank" rel="noopener" class="w-10 h-10 bg-gray-800 hover:bg-primary-600 rounded-lg flex items-center justify-center transition-all duration-200 text-lg transform hover:scale-110">💼</a>
            <a href="https://discord.com" target="_blank" rel="noopener" class="w-10 h-10 bg-gray-800 hover:bg-primary-600 rounded-lg flex items-center justify-center transition-all duration-200 text-lg transform hover:scale-110">💬</a>
          </div>
        </div>

        <!-- Quick Links -->
        <div>
          <h4 class="text-lg font-bold mb-4 md:mb-6 text-white">Navigation</h4>
          <ul class="space-y-2 md:space-y-3 text-sm">
            <li><RouterLink to="/" class="text-gray-400 hover:text-primary-400 transition-colors duration-200 inline-flex items-center gap-2"><span>→</span> Home</RouterLink></li>
            <li><RouterLink to="/services" class="text-gray-400 hover:text-primary-400 transition-colors duration-200 inline-flex items-center gap-2"><span>→</span> Services</RouterLink></li>
            <li><RouterLink to="/government" class="text-gray-400 hover:text-primary-400 transition-colors duration-200 inline-flex items-center gap-2"><span>→</span> Government</RouterLink></li>
            <li><RouterLink to="/budget" class="text-gray-400 hover:text-primary-400 transition-colors duration-200 inline-flex items-center gap-2"><span>→</span> Budget</RouterLink></li>
          </ul>
        </div>

        <!-- Resources -->
        <div>
          <h4 class="text-lg font-bold mb-4 md:mb-6 text-white">Resources</h4>
          <ul class="space-y-2 text-sm">
            <li><a href="#" class="text-gray-400 hover:text-primary-400 transition-colors duration-200">Open Data</a></li>
            <li><a href="#" class="text-gray-400 hover:text-primary-400 transition-colors duration-200">Official Portal</a></li>
            <li><a href="#" class="text-gray-400 hover:text-primary-400 transition-colors duration-200">Freedom of Info</a></li>
            <li><a href="#" class="text-gray-400 hover:text-primary-400 transition-colors duration-200">GitHub</a></li>
          </ul>
        </div>

        <!-- Support -->
        <div>
          <h4 class="text-lg font-bold mb-4 md:mb-6 text-white">Support</h4>
          <p class="text-sm text-gray-400 mb-4">Cost to the People = <strong>₱0</strong></p>
          <div class="space-y-2">
            <a href="mailto:volunteer@betterkananga.org" class="block text-sm text-gray-400 hover:text-primary-400 transition-colors duration-200">✉️ Volunteer</a>
            <a href="https://github.com" target="_blank" rel="noopener" class="block text-sm text-gray-400 hover:text-primary-400 transition-colors duration-200">💻 Contribute</a>
          </div>
        </div>
      </div>

      <!-- Bottom -->
      <div class="border-t border-gray-800 pt-6 md:pt-8 text-center text-xs md:text-sm text-gray-400">
        <p>&copy; 2026 Better Kananga | Lead By Nexora Digital Solutions</p>
      </div>
    </div>
  </footer>
</template>

<style scoped>
</style>
