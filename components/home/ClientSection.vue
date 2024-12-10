<template lang="pug">
    div(class='expert-section  px-5 section  md:px-24 relative') 
      .container.mx-auto
        div.flex.justify-between.items-start.flex-wrap
              div
                button(class="rounded-full py-3 px-9 w-fit mb-4 text-main font-bold text-base bg-[#3162DA0A]")  
                  |  تقييماتنا
                h1(class='text-font font-extrabold text-[40px]')
                  | اراء عملائنا
              div(class="flex flex-row-reverse  items-center justify-start gap-5 ")
                  div.prev-button(class="rounded-full flex items-center bg-[#D9D9E959] justify-center p-3 cursor-pointer" )
                    ion-icon(name="chevron-back-outline" class='text-2xl text-[#ffffff]')
                  div.next-button( class="rounded-full flex items-center bg-main justify-center p-3 cursor-pointer")
                    ion-icon(name="chevron-forward-outline" class='text-2xl text-[#ffffff]')
        div.grid.grid-cols-2.gap-5.mt-10
          ReviewCart
          ReviewCart
</template>

<script setup lang="ts">
import ReviewCart from "../util/ReviewCart.vue";
</script>

<style scoped></style>
