<template lang="pug">
  div
    HeroSection(:slider="sections?.homeSlider")
    ServiceSection(:services="sections?.services")
    TeamSection(:teamabout="sections?.homeAbout" :advantages="sections?.advantages")
    FeatureSection(:homeServices="sections?.homeServices")
    ExpertSection(:homeExperts="sections?.homeExperts")  
    ClientSection(:testimonials="sections?.testimonials")    
    OurServices(:whatWeOffers="sections?.whatWeOffers") 
    OurMobile
    PopupContainer
</template>

<script setup lang="ts">
const store = useHomeStore();
const { fetchHomeSections } = store;
const { sections } = storeToRefs(store);

onMounted(() => {
  fetchHomeSections();
});
</script>
