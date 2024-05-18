<template>
    <div class="flex flex-col items-center">
        <div class="text-6xl font-bold bg-gradient-to-tr from-[#ffa900] to-[#fab939] mb-1 text-transparent bg-clip-text">
            <NumberCounter :end-number="endNumber"></NumberCounter>
        </div>
        <div class="w-60 text-center"><slot /></div>
    </div>
</template>

<script setup lang="ts">
import NumberCounter from "./NumberCounter.vue";

defineProps<{
    endNumber: number;
}>();
</script>