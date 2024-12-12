<template lang="pug">
    section(class='ourService-section  bg-[#003773] text-white px-5 section  md:px-24 relative') 
      .container.mx-auto.pt-20(class='')
        div(class='grid grid-cols-1 gap-y-6 xl:gap-x-6 xl:grid-cols-3 justify-between ')
          div(class='flex flex-col  items-start gap-[30px] xl:gap-[132px]')
            div(class='flex max-w-[293px]  flex-wrap sm:flex-nowrap items-center  gap-3')
                OurHelp(title='مهارة وخبرة فريق العمل ' description='يتمتع فريقنا بسنوات من الخبرة في المجال لضمان تقديم خدمات عالية الجودة.')
            div(class='flex max-w-[293px] flex-wrap sm:flex-nowrap items-center  gap-3')
                OurHelp(title='رضا العملاء ' description='نحن نسعى جاهدين لتقديم خدمة ممتازة وتجربة إيجابية لكل عميل')
          div(class='hidden xl:flex  items-end justify-end h-full relative mx-auto')
            div(class='max-w-[400px] from-[#3265E226] to-[#FFFFFF00] rounded-t-[55px]').absolute.-top-10.w-full.h-full.bg-gradient-to-b
            img.z-10.relative(src="~/assets/img/Heros-02.png" alt="Worker" loading="lazy")
          div(class='flex flex-col pb-10   md:justify-end items-start md:items-end gap-[30px] xl:gap-[132px]')
            div(class='flex max-w-[293px]  flex-wrap sm:flex-nowrap items-center  gap-3')
                OurHelp(title='مجموعة واسعة من الخدمات' description='نحن قادرون على التعامل مع مشاكل متنوعة وتلبية احتياجات العملاء بشكل شامل.')
            div(class='flex max-w-[293px] flex-wrap sm:flex-nowrap  items-start  gap-3')
                OurHelp(title='التكلفة العادلة' description='نحن نعتقد في تقديم خدمات ذات قيمة مقابل المال. ونقدم أسعارًا عادلة وشفافة لعملائنا')

</template>

<script setup lang="ts"></script>

<style scoped>
h1 {
  color: #ffffff;
}

p {
  color: #f7f7fc;
}
</style>
