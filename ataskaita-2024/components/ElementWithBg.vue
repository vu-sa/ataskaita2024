<template>
  <div class="rounded-lg w-full relative">
    <img
      class="absolute w-full h-full object-cover rounded-lg saturate-0 brightness-125 dark:brightness-75 dark:contrast-150 z-10"
      :src="imgSrc"
    />
    <div
      :class="colorClasses"
      class="absolute inset-0 rounded-lg mix-blend-multiply z-20 shadow-lg"
    ></div>
    <div class="z-30 text-white relative p-8 my-auto h-full flex flex-col">
      <p class="text-2xl font-black mb-4 tracking-tight">
        <slot name="title" />
      </p>
      <div class="text-sm/5 font-light max-w-[65ch]">
        <slot />
      </div>
      <VPButton
        v-if="href"
        class="z-10 mt-auto w-fit"
        :text="buttonText ?? 'Skaityti daugiau'"
        :href="href"
      ></VPButton>
    </div>
  </div>
</template>

<script setup lang="ts">
import VPButton from "vitepress/dist/client/theme-default/components/VPButton.vue";

defineProps<{
  imgSrc: string;
  href: string;
  buttonText?: string;
  colorClasses?: string;
}>();
</script>
