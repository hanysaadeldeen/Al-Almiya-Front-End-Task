<template lang="pug">
    section(class='expert-section  px-5 section  md:px-24 relative') 
      .container.mx-auto
        div.flex.justify-between.items-start.flex-wrap.gap-1
            button(class="rounded-full py-3 px-9 w-fit mb-4 text-main font-bold text-base bg-[#3162DA0A]")  
              |  خبرائنا
            BaseButton(title='تواصل معنا ' class='')
        h1(class='text-font font-extrabold text-3xl md:text-[40px] mt-7 sm:mt-0')
              | افضل خبراء لدينا
        div(v-if="homeExperts" class='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-7 md:gap-3  mt-10')
          TeamCart(title='ندي علي' desc='خبير تسريب المياه')
              img(v-if="homeExperts[0]?.image" :src='homeExperts[0]?.image' alt='worker-member' loading='lazy' class='w-full h-full object-contain')
          TeamCart(title='احمد جلال' desc='خبير تسريب المياه')
              img(v-if="homeExperts[1]?.image" :src='homeExperts[1]?.image' alt='worker-member' loading='lazy' class='w-full h-full object-contain')
          TeamCart(title='نادر كمال' desc='خبير تسريب المياه')
              img(v-if="homeExperts[2]?.image" :src='homeExperts[2]?.image' alt='worker-member' loading='lazy' class='w-full h-full object-contain')
</template>

<script setup lang="ts">
interface Expert {
  id: number;
  image: string;
  name: string;
  job: string;
}
interface Props {
  homeExperts: Expert[];
}
defineProps<Props>();
</script>

<style scoped></style>
