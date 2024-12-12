<template lang="pug">
      div(class='flex flex-col justify-center items-center gap-2 md:gap-5')
        div(class='bg-[#8080800F] rounded-lg pt-2 px-2')
          slot
        div
          h3(class='text-font text-center font-bold text-2xl')
            | {{title}}
          p(class='text-subtitle font-medium text-base')
            | {{desc}}
</template>

<script setup lang="ts">
defineProps({
  title: {
    type: String,
    required: true,
  },
  desc: {
    type: String,
    required: true,
  },
});
</script>

<style scoped></style>
