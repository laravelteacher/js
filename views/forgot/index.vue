<template>
  <div>
    <Nav />
    <div class="container">
      <div class="col-md-6 mt-5">
                    <div v-if="!emailSent">
                      <div class="text-center">
                        <h1 class="h4 text-gray-900 mb-2">
                          Forgot Your Password?
                        </h1>
                        <p class="mb-4">
                          We get it, stuff happens. Just enter your email
                          address below and we'll send you a link to reset your
                          password!
                        </p>
                      </div>
                      <form class="user" @submit.prevent="forgot">
                        <div class="form-group">
                          <input
                            type="email"
                            class="form-control form-control-user"
                            id="exampleInputEmail"
                            aria-describedby="emailHelp"
                            placeholder="Enter Email Address..."
                            v-model="email"
                          />
                        </div>
                        <LoadingButton
                          text="Reset password"
                          v-bind:isLoading="isLoading"
                        />
                      </form>
                    </div>
                    <div v-else>
                      <span class="h4">
                        <i class="far fa-check-circle text-success"></i> Check
                        your email!
                      </span>
                    </div>
                    <hr />
                    <div class="text-center">
                      <router-link class="small" to="/register"
                        >Create an Account!</router-link
                      >
                    </div>
                    <div class="text-center">
                      <router-link class="small" to="/login"
                        >Already have an account? Login!</router-link
                      >
                    </div>
                  </div>
                </div>
              </div>
            
</template>

<script>
import * as notify from "../utils/notify.js";
import Nav from "../layout/Nav";
import LoadingButton from "../layout/LoadingButton";

export default {
  name: "Forgot",
  components: {
    Nav,
    LoadingButton,
  },
  data() {
    return {
      email: this.email,
      isLoading: false,
      emailSent: false,
    };
  },
  methods: {
    async forgot() {
      this.isLoading = true;
      try {
        await axios.post("forgot", {
          email: this.email,
        });
        this.isLoading = false;
        this.emailSent = true;
      } catch (error) {
        notify.authError(error);
        this.isLoading = false;
      }
    },
  },
};
</script>