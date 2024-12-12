export const useFetchHomeData = () => {
  const config = useRuntimeConfig();
  const fetchHomeData = async (endpoint: string) => {
    try {
      const response = await $fetch(`${config.public.apiBase}${endpoint}`);
      return response;
    } catch (error) {
      throw new Error(`Failed to fetch data from ${endpoint}`);
    }
  };

  return { fetchHomeData };
};
