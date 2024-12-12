import { defineStore } from "pinia";
import { useAuth } from "~/composables/useAuth";

export const useAuthStore = defineStore("authentication", () => {
  const { register, login, sendCode, verifyCodeSend, resetPassword } =
    useAuth();

  const isLoading = ref(false);
  const error = ref<string | null>(null);

  // register
  const registerUser = async (data: {
    full_name: string;
    phone: number | null;
    password: string;
    password_confirmation: string;
  }) => {
    isLoading.value = true;
    error.value = null;
    try {
      const response = await register(data);
      isLoading.value = false;
      // return response;
    } catch (err: any) {
      isLoading.value = false;
      error.value = err.message || "Registration failed";
    }
  };

  // login
  const loginUser = async (data: {
    phone: number | null;
    password: string;
  }) => {
    isLoading.value = true;
    error.value = null;
    try {
      const response = await login(data);
      isLoading.value = false;
    } catch (err: any) {
      isLoading.value = false;
      error.value = err.message || "Registration failed";
    }
  };

  // forgot password (send code )
  const forgetPassword = async (data: { phone: number | null }) => {
    isLoading.value = true;
    error.value = null;
    try {
      const response = await sendCode(data);
      isLoading.value = false;
    } catch (err: any) {
      isLoading.value = false;
      error.value = err.message || "Registration failed";
    }
  };

  // verify code (send)

  const verifyCode = async (data: { code: number | null }) => {
    isLoading.value = true;
    error.value = null;
    try {
      const response = await verifyCodeSend(data);
      isLoading.value = false;
    } catch (err: any) {
      isLoading.value = false;
      error.value = err.message || "Registration failed";
    }
  };
  // reset password
  const resetPass = async (data: {
    password: string;
    password_confirmation: string;
  }) => {
    isLoading.value = true;
    error.value = null;
    try {
      const response = await resetPassword(data);
      isLoading.value = false;
    } catch (err: any) {
      isLoading.value = false;
      error.value = err.message || "Registration failed";
    }
  };

  return {
    loginUser,
    registerUser,
    forgetPassword,
    verifyCode,
    resetPass,
    isLoading,
    error,
  };
});
