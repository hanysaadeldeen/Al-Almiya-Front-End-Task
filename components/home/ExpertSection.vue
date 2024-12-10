<template lang="pug">
    div(class='expert-section  px-5 section  md:px-24 relative') 
      .container.mx-auto
        div.flex.justify-between.items-start.flex-wrap
          div
            button(class="rounded-full py-3 px-9 w-fit mb-4 text-main font-bold text-base bg-[#3162DA0A]")  
              |  خبرائنا
            h1(class='text-font font-extrabold text-[40px]')
              | افضل خبراء لدينا
          BaseButton(title='تواصل معنا ' class='mt-2 sm:mt-0')
        div(class='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10')
          div(class='flex flex-col justify-center items-center gap-5')
            div(class='bg-[#8080800F] rounded-lg pt-2 px-2')
              img(src='~/assets/img/member-02.webp.png' alt='worker-member' loading='lazy' class='w-full h-full object-contain')
            div
              h3(class='text-font text-center font-bold text-2xl')
                | ندي علي
              p(class='text-subtitle font-medium text-base')
                | خبير تسريب المياه
          div(class='flex flex-col justify-center items-center gap-5')
            div(class='bg-[#8080800F] rounded-lg pt-2 px-2')
              img(src='~/assets/img/member-03.webp.png'  alt='worker-member' loading='lazy' class='w-full h-full object-contain')
            div
              h3(class='text-font text-center font-bold text-2xl')
                | نادر كمال
              p(class='text-subtitle font-medium text-base')
                | خبير تسريب المياه
          div(class='flex flex-col justify-center items-center gap-5')
            div(class='bg-[#8080800F] rounded-lg pt-2 px-2')
              img(src='~/assets/img/member-01.webp.png' alt='worker-member' loading='lazy' class='w-full h-full object-contain')
            div
              h3(class='text-font text-center font-bold text-2xl')
                | نادر كمال
              p(class='text-subtitle font-medium text-base')
                | خبير تسريب المياه
        
</template>

<script setup lang="ts"></script>

<style scoped></style>
