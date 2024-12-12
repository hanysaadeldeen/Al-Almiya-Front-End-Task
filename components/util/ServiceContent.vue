<template lang="pug">
    div(class='flex flex-col items-start  max-w-[284px] sm:flex-row  sm:items-center  gap-2')
      div(class='bg-stroke h-[80px] min-w-[80px] w-[80px] max-w-[80px] flex justify-center items-center rounded-full')
        slot
      div
          h3(class='text-[#000000] font-semibold text-xl ')
            |{{title}}
          p(class='text-light text-justify font-medium text-base') 
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
