<template>
  <section class="hero-section bg-background px-5 pt-12 md:px-24 relative">
    <div class="container mx-auto h-full relative overflow-x-hidden">
      <div
        class="z-30 relative flex flex-col md:flex-row items-start justify-between gap-10"
      >
        <div
          class="text-white font-extrabold text-2xl md:text-[32px] max-w-[367px] leading-[47px]"
        >
          <p>مرحبًا بكم في موقعنا الخاص</p>
          <p>بخدمات كشف العوازل</p>
          <p>وتسريب المياه</p>
        </div>

        <div
          class="hidden sm:block bg-[#0A4088] text-white font-normal text-justify p-6 text-base rounded-full max-w-[350px]"
        >
          نهتم بتلبية احتياجاتكم. سواء كنتم تحتاجون إلى إصلاح أو تركيب أنابيب
          الماء أو الصرف الصحي.
        </div>
      </div>

      <div
        class="z-10 grid grid-cols-1 lg:grid-cols-3 absolute w-full bottom-0 left-0 gap-4 items-end text-center"
      >
        <div class="hidden lg:block relative w-[213px] h-[213px] mb-20">
          <div
            v-if="!isVideoVisible"
            class="absolute top-[40%] cursor-pointer left-[40%] w-[46px] h-[46px] bg-main rounded-full z-30 flex items-center justify-center"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              @click="toggleVideo"
            >
              <path
                d="M5.00024 7.55551V17.1255C5.00024 19.0855 7.13024 20.3155 8.83024 19.3355L12.9802 16.9455L17.1302 14.5455C18.8302 13.5655 18.8302 11.1155 17.1302 10.1355L12.9802 7.73551L8.83024 5.34551C7.13024 4.36551 5.00024 5.58551 5.00024 7.55551Z"
                fill="#F8F8FF"
              />
            </svg>
          </div>
          <div
            v-if="isVideoVisible"
            class="w-[213px] h-[213px] rounded-full overflow-hidden"
          >
            <video
              :src="slider?.video"
              class="w-full h-full object-cover"
              @ended="resetToImage"
              autoplay
            />
          </div>
          <img
            v-else
            src="~/assets/img/Ellipse 53.png"
            alt="Decorative Circle"
            class="w-full h-full"
            loading="lazy"
          />
        </div>
        <div
          class="relative mx-auto max-w-[400px] z-10"
          v-if="slider && slider.big_image"
        >
          <!-- <div
            class="absolute -top-10 w-full h-full max-w-[400px] bg-gradient-to-b from-[#3265E226] to-[#FFFFFF00] rounded-t-[55px]"
          ></div> -->
          <div
            class="backImgUrl absolute max-w-[192px] w-[192px] h-[139px] p-3 top-1/2 lg:top-1/4 left-0 lg:-left-32 z-20"
          >
            <div class="relative">
              <div class="flex justify-start gap-1.5 items-center">
                <div class="w-14 h-14">
                  <img
                    src="~/assets/img/worker-img.png"
                    class="w-full h-full rounded-full"
                    alt="worker-Img"
                    loading="lazy"
                    width="56"
                    height="56"
                  />
                </div>
                <div class="">
                  <h1 class="text-start text-white font-medium text-base">
                    احمد محمد
                  </h1>
                  <p class="text-light font-normal text-xs">فني كشف تسريبات</p>
                </div>
              </div>
              <div
                class="w-fit rounded-[20px] mt-5 bg-[#F5BE0B0F] flex gap-1 items-center px-2 py-1"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14.4399 4.53675L15.0999 6.53675C15.3982 7.46244 16.2574 8.09174 17.2299 8.09675H19.3099C20.2854 8.09056 21.1528 8.7164 21.4544 9.64412C21.756 10.5718 21.4226 11.5881 20.6299 12.1568L18.9199 13.3968C18.1328 13.9682 17.802 14.9808 18.0999 15.9068L18.7599 17.9068C19.0864 18.8359 18.7677 19.8692 17.9746 20.4531C17.1816 21.037 16.1002 21.0344 15.3099 20.4468L13.6299 19.1968C12.8424 18.6262 11.7775 18.6262 10.9899 19.1968L9.30993 20.4468C8.52407 21.0219 7.45662 21.0235 6.66913 20.4505C5.88163 19.8776 5.55454 18.8615 5.85993 17.9368L6.51993 15.9368C6.81789 15.0108 6.48709 13.9982 5.69993 13.4268L3.94993 12.1668C3.14123 11.5969 2.80211 10.5641 3.11564 9.62575C3.42918 8.68745 4.32111 8.06595 5.30993 8.09675H7.38993C8.35713 8.09459 9.21473 7.47454 9.51993 6.55675L10.1799 4.55675C10.4758 3.63296 11.3327 3.00458 12.3027 3.00002C13.2727 2.99547 14.1354 3.61578 14.4399 4.53675Z"
                    fill="#F5BE0B"
                  />
                </svg>
                <p class="text-[#F5BE0B] font-medium text-sm">4.5</p>
              </div>
              <div
                class="absolute -bottom-[18px] flex items-center justify-center -left-[13px] rounded-full w-11 h-11 bg-[#0A4088]"
              >
                <svg
                  width="16"
                  height="14"
                  viewBox="0 0 16 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1.69107 11.475C1.83836 11.595 2.02987 11.6607 2.24091 11.6392C2.64891 11.5976 2.95211 11.2254 2.91048 10.8174L2.11509 3.02318L9.90936 2.22779C10.3174 2.18615 10.6206 1.81404 10.5789 1.40604C10.5373 0.998033 10.1652 0.694833 9.75717 0.736468L1.21724 1.60795C0.809242 1.64958 0.506042 2.0217 0.547677 2.4297L1.41916 10.9696C1.44069 11.1807 1.54377 11.3549 1.69107 11.475Z"
                    fill="white"
                  />
                  <path
                    d="M0.951378 3.04242L13.9987 13.6734C14.3165 13.9324 14.7949 13.8836 15.0538 13.5657C15.3128 13.2479 15.264 12.7695 14.9462 12.5105L1.89888 1.87956C1.58103 1.62058 1.10268 1.66939 0.843699 1.98724C0.584716 2.30509 0.63353 2.78344 0.951378 3.04242Z"
                    fill="white"
                  />
                </svg>
              </div>
            </div>
          </div>
          <img
            :src="slider?.big_image"
            alt="Worker"
            class="w-full z-10 relative"
            loading="lazy"
          />
        </div>
        <div class="hidden lg:flex justify-end mb-20">
          <div
            class="bg-main rounded-full w-24 h-24 flex justify-center items-center"
          >
            <svg
              width="52"
              height="51"
              viewBox="0 0 52 51"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M17.0814 36.1739C16.8631 35.9907 16.7122 35.7271 16.6845 35.4101L15.5622 22.5827C15.5086 21.9698 15.9714 21.4183 16.5843 21.3647C17.1971 21.311 17.7487 21.7739 17.8023 22.3867L18.8266 34.0941L30.5339 33.0698C31.1468 33.0162 31.6983 33.479 31.752 34.0919C31.8056 34.7047 31.3428 35.2562 30.7299 35.3099L17.9025 36.4321C17.5855 36.4599 17.2997 36.3571 17.0814 36.1739Z"
                fill="white"
              />
              <path
                d="M17.2454 35.9786C16.7742 35.5833 16.7114 34.8648 17.1067 34.3937L33.3339 15.0549C33.7292 14.5838 34.4477 14.5209 34.9188 14.9163C35.3899 15.3116 35.4528 16.0301 35.0575 16.5012L18.8303 35.84C18.435 36.3111 17.7165 36.374 17.2454 35.9786Z"
                fill="white"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
interface Props {
  slider: {
    big_image: string;
    id: number;
    image: string;
    video: string;
  };
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

<style scoped>
.hero-section {
  height: calc(100vh - 104px);
}
@media (max-width: 768px) {
  .hero-section {
    height: calc(100vh - 93px);
  }
}
.backImgUrl {
  background-image: url("~/assets/img/Vector.png");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}
</style>
