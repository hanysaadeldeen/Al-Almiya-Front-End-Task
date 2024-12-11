<template lang="pug">
    Popup( :visible="currentPopup === 'login'" @close="closePopup")
      div(class='main')
        h2
          | تسجيل دخول
        form(@submit.prevent="signIn")
          div
            label( for="usernumber"  ) رقم الهاتف
            input( type="number" id='usernumber' class="p-5" placeholder="رقم الهاتف" )
          div
            label( for="userpassword" ) كلمه المرور
            input( type="password" id='userpassword' placeholder="كلمه المرور" )
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
            label( for="userName"  ) الاسم
            input( type="text" id='userName' class="p-5" placeholder="الاسم" )
          div
            label( for="usernumber"  ) رقم الهاتف
            input( type="number" id='usernumber' class="p-5" placeholder="رقم الهاتف" )
          div
            label( for="userpassword" ) كلمه المرور
            input( type="password" id='userpassword' placeholder="كلمه المرور" )
          div
            label( for="verifyPass" ) تاكيد كلمة المرور
            input( type="password" id='verifyPass' placeholder="تأكيد كلمه المرور" )
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
        form(@submit.prevent="signUp")
          div
            label( for="usernumber"  ) رقم الهاتف
            input( type="number" id='usernumber' class="p-5" placeholder="رقم الهاتف" )
          BaseButton(@click.prevent="switchPopup('verifyAuth')" title='ارسال ' full)
    Popup( :visible="currentPopup === 'verifyAuth'" @close="closePopup")
      div(class='main')
        h2 
          | تاكيد الهوية
        p(class='text-center text-[#ABABAB] text-base font-normal')
          | ادخل الكود المرسل اليك من خلال رقم الهاتف
        form(@submit.prevent="signUp")
          div
            p(class='switch cursor-pointer' @click.prevent="switchPopup('forgotPassword')") 
              | تعديل رقم الهاتف
            input( type="number" id='usernumber' class="p-5" placeholder="رقم الهاتف" )
          BaseButton(@click.prevent="switchPopup('changePass')" title='ارسال ' full)
    Popup( :visible="currentPopup === 'changePass'" @close="closePopup")
      div(class='main')
        h2 
          |تغيير كلمة المرور  
        form(@submit.prevent="signUp")
          div
            label( for="userpassword" ) كلمه المرور
            input( type="password" id='userpassword' placeholder="كلمه المرور" )
          div
            label( for="verifyPass" ) تاكيد كلمة المرور
            input( type="password" id='verifyPass' placeholder="تأكيد كلمه المرور" )
          BaseButton(@click.prevent="switchPopup('login')" title='تاكيد ' full)
</template>

<script setup lang="ts">
import useAuthUser from "~/stores/user";
const auth = useAuthUser();
const { openPopup, closePopup, switchPopup } = useAuthUser();
const { currentPopup } = storeToRefs(auth);
</script>

<style scoped></style>
