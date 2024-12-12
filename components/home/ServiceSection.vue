<template lang="pug">
    section(class='Service-Section  px-5 section  md:px-24 relative') 
      .container.mx-auto
        div(class="main relative  max-h-[390px]  lg:h-[390px] bg-stroke w-full rounded-[60px] pt-8 pr-9 pb-12 pl-4 ")
          div.flex.flex-col.items-start.justify-between.gap-7
            button(class="rounded-full py-3 px-9 text-main font-bold text-base bg-white")  
              |  خدماتنا
            h1(class='font-semibold text-2xl md:text-[40px] max-w-[600px] text-justify  leading-[50px]')   
              |    إختر
              span(class='text-main') 
                | الخدمة 
              |اللتي تناسب طلبك و دع الامر لخبرائنا 
            p(class='text-light font-normal text-base max-w-[400px]') 
              | إختر الخدمة و اخبرنا عن مشكلتك و سوف نرسل لك الفني المناسب في اسرع وقت
          div(class="hidden lg:flex absolute  justify-between flex-col -bottom-20 gap-3 left-5 4 xl:left-28")
            div(class='rounded-[30px] bg-white py-4 px-8 service-box')
              div(class='relative')
                div(class='absolute top-4 right-1  bg-stroke rounded-full w-[150px] h-[150px] z-0')
                img(src="~/assets/img/serves2.png" class='relative z-10' alt="serves 1")
            p(class='text-main text-center font-extrabold text-base') 
              | فني كشف عوازل
          div(class="hidden lg:flex absolute  justify-between flex-col -top-20 gap-3 left-5 xl:left-28")
            div(class='rounded-[30px]  bg-white py-4 px-8 service-box')
              div(class='relative')
                div(class='absolute top-4 -right-0  bg-stroke rounded-full w-[160px] h-[160px] z-0')
                img(src="~/assets/img/serves1.png" class='relative z-10' alt="serves 2")
            p(class='text-main text-center font-extrabold text-base')
              | فني كشف تسريبات
              

</template>

<script setup lang="ts"></script>

<style scoped>
.main {
  background-image: url("~/assets/img/Rectangle2.png");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}
.service-box {
  box-shadow: 0 0 8px 4px rgba(0, 0, 0, 0.03);
}
</style>
