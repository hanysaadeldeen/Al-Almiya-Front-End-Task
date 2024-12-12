<template lang="pug">
        div(class='bg-main h-[64px] min-w-[64px] w-[64px] max-w-[64px] flex justify-center items-center rounded-full')
            slot
        div
            h3(class=' font-semibold text-base ')
              | {{title}}
            p(class='text-light text-justify font-medium text-sm') 
              | {{description}}
</template>

<script setup lang="ts">
interface Props {
  title: string;
  description: string;
}

defineProps<Props>();
</script>

<style scoped></style>
