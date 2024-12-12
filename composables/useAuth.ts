export const useAuth = () => {
  const config = useRuntimeConfig();

  // register
  const register = async (data: {
    full_name: string;
    phone: number | null;
    password: string;
    password_confirmation: string;
  }) => {
    var myHeaders = new Headers();
    myHeaders.append("Accept", "application/json");
    myHeaders.append("Accept-Language", "ar");
    var formdata = new FormData();
    formdata.append("image", "test.jpg");
    formdata.append("full_name", data.full_name);
    formdata.append("phone_code", "966");
    formdata.append("phone", data.phone);
    formdata.append("password", data.password);
    try {
      const response = await $fetch(`${config.public.apiBase}register-driver`, {
        method: "POST",
        body: formdata,
        headers: myHeaders,
      });
      return response;
    } catch (error) {
      throw new Error("Failed to sign in");
    }
  };

  // login

  const login = async (data: { phone: number | null; password: string }) => {
    var myHeaders = new Headers();
    myHeaders.append("Accept", "application/json");
    myHeaders.append("Accept-Language", "ar");

    var formdata = new FormData();
    formdata.append("phone_code", "966");
    formdata.append("phone", data.phone);
    formdata.append("password", data.password);

    try {
      const response = await $fetch(`${config.public.apiBase}login`, {
        method: "POST",
        headers: myHeaders,
        body: formdata,
      });
      return response;
    } catch (error) {
      throw new Error("Failed to sign up");
    }
  };

  // forget password (send code )

  const sendCode = async (data: { phone: number | null }) => {
    var myHeaders = new Headers();
    myHeaders.append("Accept", "application/json");
    myHeaders.append("Accept-Language", "ar");

    var formdata = new FormData();
    formdata.append("phone_code", "966");
    formdata.append("phone", data.phone);

    try {
      const response = await $fetch(`${config.public.apiBase}send-code`, {
        method: "POST",
        headers: myHeaders,
        body: formdata,
      });
      return response;
    } catch (error) {
      throw new Error("Failed to sign up");
    }
  };

  // verify code

  const verifyCodeSend = async (data: { code: number | null }) => {
    var myHeaders = new Headers();
    myHeaders.append("Accept", "application/json");
    myHeaders.append("Accept-Language", "ar");

    var formdata = new FormData();
    formdata.append("phone_code", "966");
    formdata.append("phone", "123456789");
    formdata.append("code", data.code);

    try {
      const response = await $fetch(`${config.public.apiBase}verify`, {
        method: "POST",
        headers: myHeaders,
        body: formdata,
      });
      return response;
    } catch (error) {
      throw new Error("Failed to sign up");
    }
  };

  // reset password

  const resetPassword = async (data: {
    password: string;
    password_confirmation: string;
  }) => {
    var myHeaders = new Headers();
    myHeaders.append("Accept", "application/json");
    myHeaders.append("Accept-Language", "ar");

    var formdata = new FormData();
    formdata.append("_method", "PATCH");
    formdata.append("phone_code", "966");
    formdata.append("phone", "123456789");
    formdata.append("code", "1111");
    formdata.append("password", data.password);

    try {
      const response = await $fetch(`${config.public.apiBase}reset-password`, {
        method: "POST",
        headers: myHeaders,
        body: formdata,
      });
      return response;
    } catch (error) {
      throw new Error("Failed to sign up");
    }
  };

  return { register, login, sendCode, verifyCodeSend, resetPassword };
};
