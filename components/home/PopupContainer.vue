<template lang="pug">
    Popup( :visible="currentPopup === 'login'" @close="closePopup")
      div(class='main')
        h2
          | تسجيل دخول
        form(@submit.prevent="login")
          div
            label( for="usernumber"  ) رقم الهاتف
            input( type="number" id='usernumber' class="p-5" placeholder="رقم الهاتف" v-model='loginFormData.phone' )
          div
            label( for="userpassword" ) كلمه المرور
            input( type="password" id='userpassword' placeholder="كلمه المرور"  v-model='loginFormData.password')
          button(@click.prevent="switchPopup('forgotPassword')" class='switch') 
            | نسيت كلمة المرور؟
          BaseButton(title='تسجيل الدخول ' full)
          div(class='flex justify-center items-center !flex-row' ) 
            span 
              | ليس لديك حساب ؟
            span(@click.prevent="switchPopup('signUp')").switch.cursor-pointer
              | انشاء حساب جديد
              
    Popup( :visible="currentPopup === 'signUp'" @close="closePopup")
      div(class='main')
        h2 
          | انشاء حساب جديد
        form(@submit.prevent="signUp")
          div
            label( for="userName" ) الاسم
            input( type="text" id='userName' class="p-5" placeholder="الاسم"   v-model='RegisterFormData.full_name')
          div
            label( for="usernumber" ) رقم الهاتف
            input( type="number" id='usernumber' class="p-5" placeholder="رقم الهاتف"  v-model='RegisterFormData.phone' )
          div
            label( for="userpassword" ) كلمه المرور
            input( type="password" id='userpassword' placeholder="كلمه المرور"   v-model='RegisterFormData.password')
          div
            label( for="verifyPass"  ) تاكيد كلمة المرور
            input( type="password" id='verifyPass' placeholder="تأكيد كلمه المرور"  v-model='RegisterFormData.password_confirmation')
          BaseButton(title='انشاء حساب جديد ' full)
          div(class='flex justify-center flex-wrap items-center !flex-row' ) 
            span 
              | لديك حساب بالفعل؟ 
            span(@click.prevent="switchPopup('login')").switch.cursor-pointer
              | تسجيل دخول
    Popup( :visible="currentPopup === 'forgotPassword'" @close="closePopup")
      div(class='main')
        h2 
          | هل نسيت كلمة المرور؟
        p(class='text-center text-[#ABABAB] text-base font-normal')
          | قم بادخال البريد الإلكتروني او رقم الهاتف الخاص بك لتغيير كلمة المرور
        form(@submit.prevent="sendCode")
          div
            label( for="usernumber"  ) رقم الهاتف
            input( type="number" id='usernumber' class="p-5" placeholder="رقم الهاتف" v-model='forgetPasswordFormData.phone' )
          BaseButton(@click.prevent="switchPopup('verifyAuth')" title='ارسال ' full)
    Popup( :visible="currentPopup === 'verifyAuth'" @close="closePopup")
      div(class='main')
        h2 
          | تاكيد الهوية
        p(class='text-center text-[#ABABAB] text-base font-normal')
          | ادخل الكود المرسل اليك من خلال رقم الهاتف
        form(@submit.prevent="verifyBtn")
          div
            p(class='switch cursor-pointer' @click.prevent="switchPopup('forgotPassword')") 
              | تعديل رقم الهاتف
            input( type="number" id='usernumber' class="p-5" placeholder="رقم الهاتف" v-model='verifyCodeFormData.code' )
          BaseButton(@click.prevent="switchPopup('changePass')" title='ارسال ' full)
    Popup( :visible="currentPopup === 'changePass'" @close="closePopup")
      div(class='main')
        h2 
          |تغيير كلمة المرور  
        form(@submit.prevent="resetBtn")
          div
            label( for="userpassword" ) كلمه المرور
            input( type="password" id='userpassword' placeholder="كلمه المرور" v-model='resetPasswordFormData.password' )
          div
            label( for="verifyPass" ) تاكيد كلمة المرور
            input( type="password" id='verifyPass' placeholder="تأكيد كلمه المرور" v-model='resetPasswordFormData.password_confirmation' )
          BaseButton(@click.prevent="switchPopup('login')" title='تاكيد ' full)
</template>

<script setup lang="ts">
import useAuthUser from "~/stores/user";
import { useAuthStore } from "~/stores/authStore";
const authPopUp = useAuthUser();
const { openPopup, closePopup, switchPopup } = useAuthUser();
const { currentPopup } = storeToRefs(authPopUp);

const authStore = useAuthStore();
const { registerUser, loginUser, forgetPassword, verifyCode, resetPass } =
  useAuthStore();
const { isLoading, error } = storeToRefs(authStore);
// for registering
const RegisterFormData = reactive({
  full_name: "",
  phone: null,
  password: "",
  password_confirmation: "",
});

const signUp = async () => {
  if (RegisterFormData.password_confirmation === RegisterFormData.password) {
    try {
      const response = await registerUser(RegisterFormData);
      switchPopup("login");
    } catch (error) {
      console.log(error);
    }
  } else {
    console.log("password not match"); // in Toast
  }
};

// for login
const loginFormData = reactive({
  phone: null,
  password: "",
});
const login = async () => {
  if (loginFormData.phone !== "" && loginFormData.password !== "") {
    try {
      const response = await loginUser(loginFormData);
      closePopup();
    } catch (error) {
      console.log(error);
    }
  } else {
    console.log("fill all fields"); // in Toast
  }
};
// for forget password
const forgetPasswordFormData = reactive({
  phone: null,
});
const sendCode = async () => {
  if (forgetPasswordFormData.phone !== "") {
    try {
      const response = await forgetPassword(forgetPasswordFormData);
      switchPopup("verifyAuth");
    } catch (error) {
      console.log(error);
    }
  } else {
    console.log("fill field"); // in Toast
  }
};

// for forget password
const verifyCodeFormData = reactive({
  code: null,
});
const verifyBtn = async () => {
  if (verifyCodeFormData.code !== "") {
    try {
      const response = await verifyCode(verifyCodeFormData);
      switchPopup("changePass");
    } catch (error) {
      console.log(error);
    }
  } else {
    console.log("fill field"); // in Toast
  }
};
// for forget password
const resetPasswordFormData = reactive({
  password: "",
  password_confirmation: "",
});
const resetBtn = async () => {
  if (
    resetPasswordFormData.password ===
    resetPasswordFormData.password_confirmation
  ) {
    try {
      const response = await resetPass(resetPasswordFormData);
      switchPopup("login");
    } catch (error) {
      console.log(error);
    }
  } else {
    console.log("password not match"); // in Toast
  }
};
</script>

<style scoped></style>
