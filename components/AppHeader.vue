<template lang="pug">
  header(class="bg-background border-b border-[#FFFFFF1A] py-7 px-5 md:px-24")
    .container.mx-auto.flex.justify-between.items-center
      div.logo.flex.items-center(class='gap-[6px]' )
        img(src="~assets/img/Group.png" alt="logo" class="w-4 h-9 object-fill"  width="16" height="36" )
        img(src="~assets/img/Group 1.png" alt="logo" class="w-12 h-9"  width="48" height="36" )
      ul(class='hidden md:flex').items-center.gap-12.justify-between.h-12
          li 
              NuxtLink(to="/") الرئيسية
          li 
              NuxtLink(to="/") خدمات
          li 
              NuxtLink(to="/") من نحن
          li 
              NuxtLink(to="/") تواصل معانا
      .flex.gap-5.items-center
        .flex.items-center.gap-4(class="hidden md:flex")
          div(class="notification cursor-pointer relative w-12 h-12 rounded-xl text-center flex  items-center justify-center bg-[#FFFFFF0D]")
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M11 9.64308C10.6242 9.64308 10.3125 9.33141 10.3125 8.95558V5.90308C10.3125 5.52724 10.6242 5.21558 11 5.21558C11.3758 5.21558 11.6875 5.52724 11.6875 5.90308V8.95558C11.6875 9.34058 11.3758 9.64308 11 9.64308Z" fill="white"/>
              <path d="M11.0184 18.6542C8.65342 18.6542 6.29758 18.2784 4.05175 17.5267C3.21758 17.2517 2.58508 16.6559 2.31008 15.9042C2.03508 15.1526 2.12675 14.2909 2.57591 13.5392L3.74008 11.5959C3.99675 11.1651 4.22591 10.3584 4.22591 9.85422V7.92922C4.22591 4.18005 7.26925 1.13672 11.0184 1.13672C14.7676 1.13672 17.8109 4.18005 17.8109 7.92922V9.85422C17.8109 10.3492 18.0401 11.1651 18.2967 11.5959L19.4609 13.5392C19.8917 14.2542 19.9651 15.1067 19.6809 15.8859C19.3967 16.6651 18.7734 17.2609 17.9851 17.5267C15.7392 18.2876 13.3834 18.6542 11.0184 18.6542ZM11.0184 2.52089C8.03008 2.52089 5.60091 4.95005 5.60091 7.93839V9.86339C5.60091 10.6059 5.30758 11.6784 4.92258 12.3109L3.75841 14.2634C3.52008 14.6576 3.46508 15.0792 3.60258 15.4459C3.74008 15.8126 4.05175 16.0876 4.49175 16.2342C8.70842 17.6367 13.3467 17.6367 17.5634 16.2342C17.9576 16.1059 18.2601 15.8126 18.3976 15.4276C18.5442 15.0426 18.4984 14.6209 18.2876 14.2634L17.1234 12.3201C16.7384 11.6876 16.4451 10.6151 16.4451 9.87255V7.94755C16.4359 4.95005 14.0067 2.52089 11.0184 2.52089Z" fill="white"/>
              <path d="M11.0001 20.9915C10.0193 20.9915 9.0568 20.5881 8.36013 19.8915C7.66346 19.1948 7.26013 18.2323 7.26013 17.2515H8.63513C8.63513 17.8748 8.8918 18.4798 9.3318 18.9198C9.7718 19.3598 10.3768 19.6165 11.0001 19.6165C12.3018 19.6165 13.3651 18.5531 13.3651 17.2515H14.7401C14.7401 19.314 13.0626 20.9915 11.0001 20.9915Z" fill="white"/>
              </svg>
            span.bg-style.rounded-full.absolute(class='w-4 h-4 -right-1 -top-1  border-[3px] border-background')
          div(class="userAuth cursor-pointer w-12 h-12 rounded-xl  relative text-center flex  items-center justify-center bg-[#FFFFFF0D]" @click='openPopup("login")')  
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12.1596 11.62C12.1296 11.62 12.1096 11.62 12.0796 11.62C12.0296 11.61 11.9596 11.61 11.8996 11.62C8.99957 11.53 6.80957 9.25 6.80957 6.44C6.80957 3.58 9.13957 1.25 11.9996 1.25C14.8596 1.25 17.1896 3.58 17.1896 6.44C17.1796 9.25 14.9796 11.53 12.1896 11.62C12.1796 11.62 12.1696 11.62 12.1596 11.62ZM11.9996 2.75C9.96957 2.75 8.30957 4.41 8.30957 6.44C8.30957 8.44 9.86957 10.05 11.8596 10.12C11.9096 10.11 12.0496 10.11 12.1796 10.12C14.1396 10.03 15.6796 8.42 15.6896 6.44C15.6896 4.41 14.0296 2.75 11.9996 2.75Z" fill="white"/>
              <path d="M12.1696 22.55C10.2096 22.55 8.23961 22.05 6.74961 21.05C5.35961 20.13 4.59961 18.87 4.59961 17.5C4.59961 16.13 5.35961 14.86 6.74961 13.93C9.74961 11.94 14.6096 11.94 17.5896 13.93C18.9696 14.85 19.7396 16.11 19.7396 17.48C19.7396 18.85 18.9796 20.12 17.5896 21.05C16.0896 22.05 14.1296 22.55 12.1696 22.55ZM7.57961 15.19C6.61961 15.83 6.09961 16.65 6.09961 17.51C6.09961 18.36 6.62961 19.18 7.57961 19.81C10.0696 21.48 14.2696 21.48 16.7596 19.81C17.7196 19.17 18.2396 18.35 18.2396 17.49C18.2396 16.64 17.7096 15.82 16.7596 15.19C14.2696 13.53 10.0696 13.53 7.57961 15.19Z" fill="white"/>
              </svg>
        .flex.items-center.gap-1.cursor-pointer.justify-center
          <ion-icon name="chevron-down-outline" class='mt-0.5'></ion-icon>
          h2.text-stroke.font-medium.text-sm EN
          <ion-icon name="globe-outline" class='text-stroke'></ion-icon>  
        button(class="md:hidden" @click="toggleMenu")
          <ion-icon name="menu-outline" class="text-2xl text-white mt-1.5"></ion-icon> 
    div(class="fixed inset-y-0 left-0 bg-background z-50 w-64 transform px-5 pt-10  md:hidden  border-r-2" :class="{ '-translate-x-full': !isMenuOpen }" enter-active-class="transition-transform duration-300")
        ul.flex.flex-col.gap-5  
          li 
              NuxtLink(to="/") الرئيسية
          li 
              NuxtLink(to="/") خدمات
          li 
              NuxtLink(to="/") من نحن
          li 
              NuxtLink(to="/") تواصل معانا
        .flex.gap-4.mt-5
          div.relative(class="w-12 h-12 rounded-xl text-center flex items-center justify-center bg-[#FFFFFF0D]")
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M11 9.64308C10.6242 9.64308 10.3125 9.33141 10.3125 8.95558V5.90308C10.3125 5.52724 10.6242 5.21558 11 5.21558C11.3758 5.21558 11.6875 5.52724 11.6875 5.90308V8.95558C11.6875 9.34058 11.3758 9.64308 11 9.64308Z" fill="white"/>
              <path d="M11.0184 18.6542C8.65342 18.6542 6.29758 18.2784 4.05175 17.5267C3.21758 17.2517 2.58508 16.6559 2.31008 15.9042C2.03508 15.1526 2.12675 14.2909 2.57591 13.5392L3.74008 11.5959C3.99675 11.1651 4.22591 10.3584 4.22591 9.85422V7.92922C4.22591 4.18005 7.26925 1.13672 11.0184 1.13672C14.7676 1.13672 17.8109 4.18005 17.8109 7.92922V9.85422C17.8109 10.3492 18.0401 11.1651 18.2967 11.5959L19.4609 13.5392C19.8917 14.2542 19.9651 15.1067 19.6809 15.8859C19.3967 16.6651 18.7734 17.2609 17.9851 17.5267C15.7392 18.2876 13.3834 18.6542 11.0184 18.6542ZM11.0184 2.52089C8.03008 2.52089 5.60091 4.95005 5.60091 7.93839V9.86339C5.60091 10.6059 5.30758 11.6784 4.92258 12.3109L3.75841 14.2634C3.52008 14.6576 3.46508 15.0792 3.60258 15.4459C3.74008 15.8126 4.05175 16.0876 4.49175 16.2342C8.70842 17.6367 13.3467 17.6367 17.5634 16.2342C17.9576 16.1059 18.2601 15.8126 18.3976 15.4276C18.5442 15.0426 18.4984 14.6209 18.2876 14.2634L17.1234 12.3201C16.7384 11.6876 16.4451 10.6151 16.4451 9.87255V7.94755C16.4359 4.95005 14.0067 2.52089 11.0184 2.52089Z" fill="white"/>
              <path d="M11.0001 20.9915C10.0193 20.9915 9.0568 20.5881 8.36013 19.8915C7.66346 19.1948 7.26013 18.2323 7.26013 17.2515H8.63513C8.63513 17.8748 8.8918 18.4798 9.3318 18.9198C9.7718 19.3598 10.3768 19.6165 11.0001 19.6165C12.3018 19.6165 13.3651 18.5531 13.3651 17.2515H14.7401C14.7401 19.314 13.0626 20.9915 11.0001 20.9915Z" fill="white"/>
              </svg>
            span.bg-style.rounded-full.absolute(class='w-4 h-4 -right-1 -top-1  border-[3px] border-background')
          div.relative(class="w-12 h-12 rounded-xl text-center flex items-center justify-center bg-[#FFFFFF0D] cursor-pointer" @click='openPopup("login")')
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12.1596 11.62C12.1296 11.62 12.1096 11.62 12.0796 11.62C12.0296 11.61 11.9596 11.61 11.8996 11.62C8.99957 11.53 6.80957 9.25 6.80957 6.44C6.80957 3.58 9.13957 1.25 11.9996 1.25C14.8596 1.25 17.1896 3.58 17.1896 6.44C17.1796 9.25 14.9796 11.53 12.1896 11.62C12.1796 11.62 12.1696 11.62 12.1596 11.62ZM11.9996 2.75C9.96957 2.75 8.30957 4.41 8.30957 6.44C8.30957 8.44 9.86957 10.05 11.8596 10.12C11.9096 10.11 12.0496 10.11 12.1796 10.12C14.1396 10.03 15.6796 8.42 15.6896 6.44C15.6896 4.41 14.0296 2.75 11.9996 2.75Z" fill="white"/>
              <path d="M12.1696 22.55C10.2096 22.55 8.23961 22.05 6.74961 21.05C5.35961 20.13 4.59961 18.87 4.59961 17.5C4.59961 16.13 5.35961 14.86 6.74961 13.93C9.74961 11.94 14.6096 11.94 17.5896 13.93C18.9696 14.85 19.7396 16.11 19.7396 17.48C19.7396 18.85 18.9796 20.12 17.5896 21.05C16.0896 22.05 14.1296 22.55 12.1696 22.55ZM7.57961 15.19C6.61961 15.83 6.09961 16.65 6.09961 17.51C6.09961 18.36 6.62961 19.18 7.57961 19.81C10.0696 21.48 14.2696 21.48 16.7596 19.81C17.7196 19.17 18.2396 18.35 18.2396 17.49C18.2396 16.64 17.7096 15.82 16.7596 15.19C14.2696 13.53 10.0696 13.53 7.57961 15.19Z" fill="white"/>
              </svg>
        button(class=" bg-stroke mt-4 text-background rounded-full px-5 py-2 font-extrabold tracking-wide " @click="toggleMenu") 
          |  اغلاق
</template>
<script setup lang="ts">
import useAuthUser from "~/stores/user";

const isMenuOpen = ref(false);
const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};
const { openPopup } = useAuthUser();
</script>

<style scoped>
ul li {
  color: #ffffff;
  font-size: 16px;
  font-weight: 500;
}
</style>
