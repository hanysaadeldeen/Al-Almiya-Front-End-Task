<template lang="pug">
    section(class='team-section  px-5 section  md:px-24 relative') 
      .container.mx-auto
        button(class="rounded-full py-3 px-9 text-main font-bold text-base bg-[#3162DA0A]")  
              |  من نحن
        div(class=' flex  flex-wrap justify-between items-center  mt-5')      
          div(class='flex flex-col  justify-between items-start gap-9 mb-8')
              h1(class='text-font font-extrabold text-3xl md:text-[40px]') 
                |أفضل الفنيين الخبراء لخدمتك 
              div(v-if='advantages' class='grid grid-cols-1 md:grid-cols-2 gap-x-5 gap-y-7 md:gap-x-5 md:gap-y-10') 
                  ServiceContent( title='خدمة سريعة' desc="نحرص علي توفير الوصول السريع لخدمتك")
                    img(v-if='advantages[1]?.image' :src='advantages[1]?.image' loading='lazy' alt='worker-for-solve' class='w-full h-full object-contain ')
                  ServiceContent(title='فريق مؤهل' desc="فريق متدرب و مؤهل")
                    img(v-if='advantages[0]?.image' :src='advantages[0]?.image' loading='lazy' alt='worker-for-solve' class='w-full h-full object-contain ')
                  ServiceContent(title='عروض حصرية' desc="عروض متوفرة دائما و نحرص علي اقل التكاليف")
                    img(v-if='advantages[2]?.image' :src='advantages[2]?.image' loading='lazy' alt='worker-for-solve' class='w-full h-full object-contain ')
                  ServiceContent(title='تقييمات عالية' desc="تتميز حدماتنا و خبرائنا بأفضل تقييمات رضا العملاء")
                    img(v-if='advantages[3]?.image' :src='advantages[3]?.image' loading='lazy' alt='worker-for-solve' class='w-full h-full object-contain ')
              BaseButton(title='اعرف المزيد')
          div(v-if='teamabout' class='relative hidden md:block ')
              div(class='absolute -top-7 -left-5 w-[370px] h-[370px] bg-stroke rounded-full z-0')
              div(v-if="!isVideoVisible" @click="toggleVideo" class='absolute top-[43%] cursor-pointer left-[43%] w-[62px] h-[62px] bg-main rounded-full z-30 flex items-center justify-center')
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5.00024 7.55551V17.1255C5.00024 19.0855 7.13024 20.3155 8.83024 19.3355L12.9802 16.9455L17.1302 14.5455C18.8302 13.5655 18.8302 11.1155 17.1302 10.1355L12.9802 7.73551L8.83024 5.34551C7.13024 4.36551 5.00024 5.58551 5.00024 7.55551Z" fill="#F8F8FF"/>
                  </svg>
              img(v-if="!isVideoVisible" :src="teamabout?.image" alt="team-img" loading="lazy" class='relative w-full h-full object-contain z-20')
              div( v-if="isVideoVisible" class="z-30 relative w-[417px] h-[417px] rounded-full overflow-hidden")
                video(:src="teamabout?.video" class="w-full h-full object-cover" @ended="resetToImage" autoplay)
              div(class='absolute -bottom-2 -right-2 w-[370px] h-[370px] bg-transparent border border-main rounded-full z-0')
</template>

<script setup lang="ts">
interface HomeAbout {
  id: number;
  title: string;
  image: string;
  video: string;
}
interface advantage {
  id: number;
  title: string;
  image: string;
  desc: string;
}
interface Props {
  teamabout: HomeAbout;
  advantages: advantage[];
}
defineProps<Props>();

const isVideoVisible = ref(false);
const toggleVideo = () => {
  isVideoVisible.value = !isVideoVisible.value;
};

const resetToImage = () => {
  isVideoVisible.value = false;
};
</script>

<style scoped></style>
