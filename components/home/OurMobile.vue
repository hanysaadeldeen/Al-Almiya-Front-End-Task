<template>
  <section class="mobile-section px-5 section md:px-24 relative">
    <div class="container mx-auto">
      <div
        class="flex justify-between items-start lg:items-center flex-col lg:flex-row gap-10"
      >
        <div class="flex flex-col gap-32">
          <div class="w-full lg:max-w-[487px]">
            <h1 class="text-3xl md:text-[40px] mb-4 font-semibold text-justify">
              مهمتنا هي توفير خدمات منزلك بأقل التكاليف
            </h1>
            <p class="text-light text-justify font-medium text-xl">
              حمل تطبيقنا مجانا
            </p>
            <p class="text-light text-justify font-medium text-xl">
              استمتع بالطلب السريع للفني و الخدمة في اي وقت
            </p>
          </div>

          <div class="relative w-fit">
            <div class="absolute -top-[133px] -left-[25px]">
              <img
                src="~/assets/img/Frame (1).png"
                alt="frame"
                class="w-full h-full object-contain"
              />
            </div>

            <div class="flex gap-2">
              <div class="">
                <img
                  src="~/assets/img/image 17.png"
                  alt="app Store"
                  loading="lazy"
                  class="w-full h-full object-contain"
                />
              </div>
              <div class="">
                <img
                  src="~/assets/img/image 18.png"
                  alt="Google Play"
                  loading="lazy"
                  class="w-full h-full object-contain"
                />
              </div>
            </div>
          </div>
        </div>
        <div class="max-w-[500px] max-h-[579px] hidden md:block">
          <img
            src="~/assets/img/pic9.png"
            alt="Mobile"
            class="w-full h-full object-contain"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts"></script>

<style scoped></style>
