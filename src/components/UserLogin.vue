<template>
    <div class="min-h-screen flex items-center justify-center bg-gray-100">
      <div class="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h2 class="text-2xl font-bold mb-6 text-center">Iniciar Sesión</h2>
        <form @submit.prevent="login">
          <div class="mb-4">
            <label class="block mb-1">Correo</label>
            <input v-model="email" type="email" class="w-full border p-2 rounded" required />
          </div>
          <div class="mb-6">
            <label class="block mb-1">Contraseña</label>
            <input v-model="password" type="password" class="w-full border p-2 rounded" required />
          </div>
          <button type="submit" class="bg-green-600 text-white w-full py-2 rounded hover:bg-green-700">
            Iniciar Sesión
          </button>
        </form>
      </div>
    </div>
  </template>
  
  <script>
  import axios from 'axios'
  
  export default {
    data() {
      return {
        email: '',
        password: '',
      }
    },
    methods: {
      async login() {
        try {
          const res = await axios.post('http://localhost:5000/api/login', {
            email: this.email,
            password: this.password,
          })
          alert(res.data.message)
          // Puedes guardar el token si lo devuelves en el backend
          // localStorage.setItem('token', res.data.token)
          this.$router.push('/')
        } catch (err) {
          alert(err.response?.data?.message || 'Error al iniciar sesión')
        }
      },
    },
  }
  </script>
  