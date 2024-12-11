<template lang="pug">
    div(class='client-section  px-5 section  md:px-24 relative') 
      .container.mx-auto
        div.flex.justify-between.items-start.flex-wrap
              div
                button(class="rounded-full py-3 px-9 w-fit mb-4 text-main font-bold text-base bg-[#3162DA0A]")  
                  |  تقييماتنا
                h1(class='text-font font-extrabold  text-[40px]')
                  | اراء عملائنا
              div(class="flex flex-row-reverse  items-center justify-start gap-5 ")
                  div(class="prev-button rounded-full flex items-center justify-center p-3 cursor-pointer " :disabled="isPrevDisabled"  @click="swiperRef.value?.prev()" :style="{ backgroundColor: isPrevDisabled ? '#D9D9E959' : '#3162DA' }")
                    ion-icon(name="chevron-back-outline" class='text-2xl text-[#ffffff]')
                  div(class="next-button rounded-full flex items-center justify-center p-3 cursor-pointer " :disabled="isNextDisabled"  @click="swiperRef.value?.next()" :style="{ backgroundColor: isNextDisabled ? '#D9D9E959' : '#3162DA' }" )  
                    ion-icon(name="chevron-forward-outline" class='text-2xl text-[#ffffff]')
        Swiper(@swiper="onSwiper" @slideChange="onSlideChange" ref="swiperRef" :pagination="{ dynamicBullets: true }" :breakpoints="{968: { slidesPerView: 2}}" :slides-per-view="1" :space-between="20")
              SwiperSlide
                ReviewCart(name="نرمين علي" company="مؤسس شركة CAS" desc="لقد استدعيت فريق تسريب المياه الخاص بكم لإصلاح تسريب في منزلي، وأنا سعيد جدًا بالخدمة التي تلقيتها. كان الفريق محترفًا وودودًا، وأصلحوا المشكلة بسرعة وبأعلى جودة. أوصي بشدة بخدماتكم.")
                    img(src='~/assets/img/Ellipse 57.png' alt='client-image' loading='lazy' class='object-contain')   
              SwiperSlide
                ReviewCart(name="احمد عامر" company="مؤسس شركة CAS" desc="لقد استدعيت فريق تسريب المياه الخاص بكم لإصلاح تسريب في منزلي، وأنا سعيد جدًا بالخدمة التي تلقيتها. كان الفريق محترفًا وودودًا، وأصلحوا المشكلة بسرعة وبأعلى جودة. أوصي بشدة بخدماتكم.")
                    img(src='~/assets/img/Ellipse 58.png' alt='client-image' loading='lazy' class='object-contain')   
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/swiper-bundle.css";

const isPrevDisabled = ref(false);
const isNextDisabled = ref(false);

const swiperRef = ref(null);

const onSwiper = (swiperInstance: any) => {
  swiperRef.value = swiperInstance;
};

const onSlideChange = (swiperInstance: any) => {
  isPrevDisabled.value = swiperInstance.isBeginning;
  isNextDisabled.value = swiperInstance.isEnd;
};
</script>
<style scoped></style>
