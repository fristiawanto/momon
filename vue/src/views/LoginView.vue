
<template>
     <img src="@/assets/logo/momon.svg" class="mon-login-logo"/>
        <!-- Start Block Form -->
            <form method="post" action="DashboardView.vue" class="mon-boxlogin" @submit.stop.prevent="onSubmit">
                    <div class="mon-rowinput">
                        <img src="@/assets/icon/@ at.svg" class="input-icon">
                        <div class="mon-colinput">
                            <label>Email</label>
                            <input type="email" name="email" class="forminput" placeholder="Tulis email disini" required />
                        </div>
                    </div>
                    <div class="mon-rowinput">
                        <img src="@/assets/icon/kunci.svg" class="input-icon">
                        <div class="mon-colinput">
                            <label>Password</label>
                            <input type="password" name="password" placeholder="******" class="forminput" required />
                        </div>
                    </div>
                    <a class="button-trans" href="">Ganti Pasword</a>
                <router-link to="/dashboard" custom v-slot="{navigate}">
                <input type="submit" class="button-primary" value="Login" @click.prevent="onSubmit" role="link">
                </router-link>        
            </form>
        <!-- End Block Form -->
    <div class="mon-cta">
        <a>Belum punya akun?</a>
        <a class="button-secondary">Buat Akun</a>
    </div>
</template>

<script>
import ButtonPrimary from '@/components/ButtonPrimary.vue'
import ButtonSecondary from '@/components/ButtonSecondary.vue'
//import console from 'console'
import axios from 'axios'
export default {
    name: "LoginView",
    components: {
        ButtonPrimary,
        ButtonSecondary,
    },
    data(){
        return {
            title: 'Login aplikasi momon',
            urlLogin: 'localhost:5173',
            form: {
                email: '',
                password: '',
            },
            active: true
        }
    },
    created() {
        console.log("Created");
    },
    methods: {
        async onSubmit() {
            try {
                //sukses
                const response = await axios({
                    method: "post",
                    url: this.urlLogin,
                    data: this.form,
                });
                if(response.data.status == 'success') {
                    const access_token = response.data.access_token;
                    const expired_token = response.data.expired_in;

                    //save to localStorage
                    localStorage.setItem("access_token",access_token);
                    localStorage.setItem("expired_token",expired_token);

                    //redirect dashboard
                    console.log("Sukses login "+access_token);
                }
            } catch (error) {
                // error
                console.log(Error);
            }
        }
    }    
}

</script>

<style>

</style>