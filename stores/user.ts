import { defineStore } from "pinia";

const useAuthUser = defineStore("auth", () => {
  const currentPopup = ref<string | null>(null);

  const openPopup = (popupName: string) => {
    currentPopup.value = popupName;
  };

  const closePopup = () => {
    currentPopup.value = null;
  };

  const switchPopup = (popupName: string) => {
    currentPopup.value = popupName;
  };

  return {
    currentPopup,
    openPopup,
    closePopup,
    switchPopup,
  };
});
export default useAuthUser;
