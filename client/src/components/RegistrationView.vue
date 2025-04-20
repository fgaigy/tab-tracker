<script setup>
import AuthenticationService from '@/services/AuthenticationService.js'
</script>

<template>
  <h1>Register</h1>

  <div class="form-container">
  <label for="email">Email</label>
  <input type="email" name="email" id="email" v-model="email">

  <label for="password">Password</label>
  <input type="password" name="password" id="password" v-model="password">
  <div class="error" v-html="error" />
  <button @click="register">Register</button>
</div>

</template>

<style scoped>
.form-container {
  max-width: 400px;
  margin: 50px auto;
  padding: 30px;
  background-color: #ffffff;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  font-family: sans-serif;
}

.form-container label {
  display: block;
  margin-bottom: 8px;
  font-weight: 600;
  color: #333;
}

.form-container input {
  width: 100%;
  padding: 10px 12px;
  margin-bottom: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
  box-sizing: border-box;
  font-size: 14px;
}

.form-container input:focus {
  border-color: #4f46e5;
  outline: none;
  box-shadow: 0 0 0 2px rgba(79, 70, 229, 0.2);
}

.form-container button {
  width: 100%;
  padding: 12px;
  background-color: #4f46e5;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.2s ease;
}

.form-container button:hover {
  background-color: #4338ca;
}

.error {
  color: red;
  font-size: small;
  text-align: center;
}
</style>

<script>
export default {
  data() {
    return {
      email: '',
      password: '',
      error: null
    }
  },
  methods: {
    async register() {
      try {
        await AuthenticationService.register({
        email: this.email,
        password: this.password
      })
      } catch (error) {
        this.error = error.response.data.error
      }
    }
  }
}
</script>
