<template>
    <div class="grid grid-cols-ą sm:grid-cols-2 gap-8 mt-16">
        <div v-for="photo in photos" class="flex flex-col items-center gap-3">
            <a :href="photo.href">
                <img class="rounded-md shadow-sm hover:shadow-xl transition-shadow w-full h-60 object-cover" :src="photo.link" style="object-position: 50% 30%;" />
            </a>
            <strong class="tracking-tight text-lg/5 text-center">{{ photo.title }}</strong>
        </div>
    </div>
</template>

<script setup lang="ts">
defineProps<{
    photos: {
        href?: string;
        link: string;
        title: string;
    }[];
}>();
</script>