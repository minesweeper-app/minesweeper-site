<script setup lang="ts">
import { withBase } from 'vitepress'
</script>

<template>
  <div class="home-badge-row">
    <a
      href="https://apps.apple.com/app/id6793471840" target="_blank" rel="noopener noreferrer"
      class="store-badge-link"
      aria-label="Minesweeper installation guide"
    >
      <img
        :src="withBase('/badges/Mac-App-Store.png')"
        alt="Download on the App Store"
        class="store-badge"
        width="156"
        height="46"
      />
    </a>
    <!-- <a
      href="/guide/installation" target="_self" rel="noopener noreferrer"
      class="store-badge-link"
      aria-label="Minesweeper installation guide"
    >
      <img
        :src="withBase('/badges/Chrome-Web-Store.png')"
        alt="Available in the Chrome Web Store"
        class="store-badge"
        width="196"
        height="46"
      />
    </a> -->
  </div>
</template>
