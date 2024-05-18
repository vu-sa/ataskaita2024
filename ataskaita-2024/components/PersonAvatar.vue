<template>
  <div class="grid grid-cols-[auto,1fr] gap-4 items-center">
    <!-- <img class="rounded-full object-cover" :src="src" :class="{
      'w-8 h-8': size === 'tiny',
      'w-12 h-12': size === 'small',
      'w-16 h-16': size === 'normal',
    }" /> -->

    <div><slot /></div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  src: string;
  size?: "tiny" | "small" | "normal";
}>();

const size = props.size ?? "normal";
</script>
