<template>
    <section class="bg-white dark:bg-gray-800 lg:px-8 px-4 py-12">
      <div class="max-w-6xl mx-auto">
        <div class="flex flex-col md:flex-row items-center md:gap-8">
          <div class="md:w-1/3">
            <img class="rounded-full shadow-lg" :src="imgSrc" alt="" />
          </div>
          <div class="md:w-2/3 mt-8 md:mt-0">
            <blockquote class="font-medium text-lg leading-relaxed">
              <p class="mb-4">{{ quote }}</p>
              <cite class="block font-bold">{{ author }}</cite>
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  </template>
  
<script setup lang="ts">
// Made by Copilot, need to check

defineProps<{
  imgSrc: string,
  quote: string,
  author: string,
}>();
</script>

<style scoped>
section {
    background-image: linear-gradient(to bottom, rgba(255, 255, 255, 0), rgba(255, 255, 255, 1));
}
</style>