<template lang="pug"> 
    div(class='feature-section  px-5 section  md:px-24 relative') 
      .container.mx-auto
        div(class='flex  main-content  flex-wrap items-center justify-between gap-14 xl:gap-[103px]')
          div(class='relative w-[438px] h-[397px] hidden md:block')
            div(class='bg-stroke rounded-[20px] absolute top-0 left-0 max-w-[436.68px] w-[436.68px] h-[397.84px] max-h-[397.84px]  transform -rotate-[14deg] ')
            img(src='~/assets/img/Rectangle 4455.png' loading='lazy' alt='worker-for-solve' class='w-full h-full object-contain rounded-[20px] relative z-10')
          div(class='flex flex-col gap-5 w-full md:max-w-[447px]')
            button(class="rounded-full py-3 px-9 w-fit text-main font-bold text-base bg-[#3162DA0A]")  
              |  خدمة تسريب المياه
            h1(class='text-font font-extrabold text-[40px]') 
                |إصلاح وتسريب المياه
            p(class=" text-subtitle text-justify  font-medium  text-base")
              | نحن فريق من الخبراء نهتم بتلبية احتياجاتكم في مجال الصيانة . سواء كنتم تحتاجون إلى إصلاح أو تركيب أنابيب الماء أو الصرف الصحي، أو تركيب أجهزة الحمام والمطبخ، فإننا هنا لنساعدكم. نحن نقدم خدماتنا للعملاء في جميع أنحاء المدينة  ونضمن لكم جودة العمل والموثوقية في كل مشروع نقوم به.
            div(class='flex items-start flex-col gap-3 mt-1')
                div.flex.items-center.gap-3
                  <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2.5C6.49 2.5 2 6.99 2 12.5C2 18.01 6.49 22.5 12 22.5C17.51 22.5 22 18.01 22 12.5C22 6.99 17.51 2.5 12 2.5ZM16.78 10.2L11.11 15.87C10.97 16.01 10.78 16.09 10.58 16.09C10.38 16.09 10.19 16.01 10.05 15.87L7.22 13.04C6.93 12.75 6.93 12.27 7.22 11.98C7.51 11.69 7.99 11.69 8.28 11.98L10.58 14.28L15.72 9.14C16.01 8.85 16.49 8.85 16.78 9.14C17.07 9.43 17.07 9.9 16.78 10.2Z" fill="#3162DA"/>
                    </svg>
                  p.text-font.font-medium.text-base 
                    | مدة الضمان قد تختلف حسب نوع الخدمة التي تم تقديمها
                div.flex.items-center.gap-3
                  <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2.5C6.49 2.5 2 6.99 2 12.5C2 18.01 6.49 22.5 12 22.5C17.51 22.5 22 18.01 22 12.5C22 6.99 17.51 2.5 12 2.5ZM16.78 10.2L11.11 15.87C10.97 16.01 10.78 16.09 10.58 16.09C10.38 16.09 10.19 16.01 10.05 15.87L7.22 13.04C6.93 12.75 6.93 12.27 7.22 11.98C7.51 11.69 7.99 11.69 8.28 11.98L10.58 14.28L15.72 9.14C16.01 8.85 16.49 8.85 16.78 9.14C17.07 9.43 17.07 9.9 16.78 10.2Z" fill="#3162DA"/>
                    </svg>
                  p.text-font.font-medium.text-base 
                    | ضمانًا على المواد التي نستخدمها في الأعمال التي نقوم بها
                div.flex.items-center.gap-3
                  <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2.5C6.49 2.5 2 6.99 2 12.5C2 18.01 6.49 22.5 12 22.5C17.51 22.5 22 18.01 22 12.5C22 6.99 17.51 2.5 12 2.5ZM16.78 10.2L11.11 15.87C10.97 16.01 10.78 16.09 10.58 16.09C10.38 16.09 10.19 16.01 10.05 15.87L7.22 13.04C6.93 12.75 6.93 12.27 7.22 11.98C7.51 11.69 7.99 11.69 8.28 11.98L10.58 14.28L15.72 9.14C16.01 8.85 16.49 8.85 16.78 9.14C17.07 9.43 17.07 9.9 16.78 10.2Z" fill="#3162DA"/>
                    </svg>
                  p.text-font.font-medium.text-base 
                    | تقديم خدمات عالية الجودة ونضمن رضا العملاء
            BaseButton(title='تواصل معنا ' class='w-fit mt-2')
            

</template>

<script setup lang="ts"></script>

<style scoped>
@media (max-width: 1150px) {
  .main-content {
    flex-direction: column-reverse;
    align-items: start;
  }
}
</style>
