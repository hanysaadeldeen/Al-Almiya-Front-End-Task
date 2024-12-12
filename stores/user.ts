import { defineStore } from "pinia";

const useAuthUser = defineStore("auth", () => {
  const currentPopup = ref<string | null>(null);

  const openPopup = (popupName: string) => {
    document.body.classList.add("no-scroll");
    currentPopup.value = popupName;
  };

  const closePopup = () => {
    currentPopup.value = null;
    document.body.classList.remove("no-scroll");
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
