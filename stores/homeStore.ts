import { defineStore } from "pinia";

interface HomeData {
  homeSlider: any[];
  homeAbout: any;
  homeExperts: any[];
  homeServices: any[];
  services: any[];
  testimonials: any[];
  whatWeOffers: any[];
  advantages: any[];
}

interface ApiResponse {
  data: {
    home_slider: any;
    home_about: any;
    home_experts: any[];
    home_services: any[];
    services: any[];
    testimonials: any[];
    what_we_offers: any[];
    advantages: any[];
  };
}

export const useHomeStore = defineStore("home", () => {
  const sections = reactive<HomeData>({
    homeSlider: [],
    homeAbout: null,
    homeExperts: [],
    homeServices: [],
    services: [],
    testimonials: [],
    whatWeOffers: [],
    advantages: [],
  });
  const loading = ref<boolean>(false);
  const error = ref<string | null>(null);
  const fetchHomeSections = async () => {
    const { fetchHomeData } = useFetchHomeData();
    loading.value = true;
    error.value = null;
    try {
      const resp: ApiResponse = await fetchHomeData("home");
      if (resp?.data) {
        sections.homeSlider = resp.data.home_slider;
        sections.homeAbout = resp.data.home_about;
        sections.homeExperts = resp.data.home_experts || [];
        sections.homeServices = resp.data.home_services || [];
        sections.services = resp.data.services || [];
        sections.testimonials = resp.data.testimonials || [];
        sections.whatWeOffers = resp.data.what_we_offers || [];
        sections.advantages = resp.data.advantages || [];
      }
    } catch (error: any) {
      error = error.message || "An error occurred";
    } finally {
      loading.value = false;
    }
  };
  return {
    fetchHomeSections,
    sections,
  };
});
