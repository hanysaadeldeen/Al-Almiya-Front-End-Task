<template lang="pug">
    div(class='flex w-[284px]  items-center pl-5 gap-2')
      div(class='bg-stroke h-[80px] w-[80px] flex justify-center items-center rounded-full')
        slot
      div
          h3(class='text-[#000000] font-semibold text-xl mb-')
            |{{title}}
          p(class='text-light font-medium text-base') 
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
