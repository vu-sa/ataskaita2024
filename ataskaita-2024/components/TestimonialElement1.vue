<template>
  <figure class="flex flex-col md:flex-row items-center gap-8">
    <div class="sm:p-8 md:w-5/12">
      <img style="object-position: 70% 20%;" class="shadow-md max-h-96 w-full object-cover" :src="imgSrc" alt="" />
    </div>
    <div class="relative sm:p-8 flex items-start flex-col md:w-7/12">
      <svg
        class="absolute w-36 h-36 text-zinc-500/10 dark:text-zinc-100/20 right-8 -bottom-8"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        viewBox="0 0 24 24"
      >
        <g
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path d="M6 15h15"></path>
          <path d="M21 19H6"></path>
          <path d="M15 11h6"></path>
          <path d="M21 7h-6"></path>
          <path d="M9 9h1a1 1 0 1 1-1 1V7.5a2 2 0 0 1 2-2"></path>
          <path d="M3 9h1a1 1 0 1 1-1 1V7.5a2 2 0 0 1 2-2"></path>
        </g>
      </svg>
      <blockquote class="mx-8 sm:mx-0">
        <p class="font-bold text-md/6 sm:text-xl/8 tracking-normal italic text-left">
          <slot />
        </p>
      </blockquote>
      <figcaption class="leading-4 my-8 text-left">
        <div class="text-lg font-bold">{{ personName }}</div>
        <div class="opacity-80 text-sm">{{ personPosition }}</div>
      </figcaption>
      <VPButton class="z-10" :href="href" :text="buttonText"></VPButton>
    </div>
  </figure>
</template>

<script setup lang="ts">
import VPButton from "vitepress/dist/client/theme-default/components/VPButton.vue";

defineProps<{
  imgSrc: string;
  href: string;
  buttonText: string;
  personName: string;
  personPosition: string;
}>();
</script>
