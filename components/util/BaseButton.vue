<template lang="pug">
    button(class="rounded-full py-4 px-14 bg-main font-bold text-base text-white" :class="{'w-full': full}")  
      |  {{title}}
</template>

<script setup lang="ts">
interface Props {
  title: string;
  full?: boolean;
}

defineProps<Props>();
</script>

<style scoped></style>
