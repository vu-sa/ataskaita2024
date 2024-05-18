<template>
  <section class="grid grid-cols-1 sm:grid-cols-2 gap-6 p-4">
    <PersonAvatar size="normal" :src="member.avatar" v-for="member in members">
      <div class="flex flex-col leading-5">
        <strong class="text-md/4">{{
          member.name ? member.name : getName(member.avatar)
        }}</strong>
        <span class="text-xs">{{ member.title }}</span>
      </div>
    </PersonAvatar>
  </section>
</template>

<script setup lang="tsx">
import PersonAvatar from "./PersonAvatar.vue";

const props = defineProps<{
  members: Record<"name" | "title" | "avatar", string>[];
}>();

// get name from src if none
// e.g from this ataskaita-2023/src//img/koordinatoriu-nuotraukos/organizacines-srities-koordinatoriai/Vidmantė-Krušinskaitė-(TSPMI).jpg to this Vidmantė Krušinskaitė
const getName = (src: string) => {
  const name = src
    .split("/")
    .pop()
    ?.split(".")[0]
    ?.split("-")
    .slice(0, 2)
    .join(" ");
  return name ? name : "";
};
</script>
