<template>
  <div class="container mx-auto mt-20">
    <div class="flex-col items-center justify-center">
      <div
        class="
          bg-primary
          text-main-600
          max-w-lg
          mx-auto
          md:p-12
          p-8
          rounded-lg
          shadow-2xl
        "
      >
        <div>
          <h1 class="flex justify-center font-bold text-3xl">Register</h1>
        </div>
        <div class="mt-8">
          <form
            action=""
            method="POST"
            class="flex flex-col"
            autocomplete="off"
            @submit.prevent="registerHandler"
          >
            <div class="pt-3 rounded">
              <label class="block text-md font-bold mb-2">Name</label>
              <input
                v-model="name"
                type="text"
                class="
                  bg-secondary
                  border-b-4 border-gray-500
                  focus:border-main
                  text-white
                  rounded
                  w-full
                  focus:outline-none
                  shadow-2xl
                  transition
                  duration-500
                "
              />
            </div>
            <div class="pt-3 rounded">
              <label class="block text-md font-bold mb-2">Email</label>
              <input
                v-model="email"
                type="email"
                name="email"
                class="
                  bg-secondary
                  border-b-4 border-gray-500
                  focus:border-main
                  text-white
                  rounded
                  w-full
                  focus:outline-none
                  shadow-2xl
                  transition
                  duration-500
                "
              />
            </div>
            <div class="pt-3 rounded">
              <label class="block text-md font-bold mb-2">Password</label>
              <input
                v-model="password"
                type="password"
                name="password"
                class="
                  bg-secondary
                  border-b-4 border-gray-500
                  focus:border-main
                  text-white
                  rounded
                  w-full
                  focus:outline-none
                  shadow-2xl
                  transition
                  duration-500
                "
              />
            </div>
            <button
              class="
                mt-5
                h-10
                border-2 border-main-600
                rounded-lg
                hover:bg-main-600 hover:text-white
              "
            >
              Submit
            </button>
          </form>
        </div>
      </div>
      <div class="flex justify-center">
        <p class="text-white">
          Already registered ? Login
          <router-link class="font-bold hover:text-main-600" to="/login"
            >Here</router-link
          >
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Register",
  data() {
    return {
      name: "",
      email: "",
      password: "",
    };
  },
  methods: {
    registerHandler() {
      const data = {
        name: this.name,
        email: this.email,
        password: this.password,
      };
      this.$store.dispatch("register", data);
    },
  },
};
</script>

<style></style>
