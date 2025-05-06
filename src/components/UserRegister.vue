<template>
    <div class="min-h-screen flex items-center justify-center bg-gray-100">
      <div class="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h2 class="text-2xl font-bold mb-6 text-center">Registro</h2>
        <form @submit.prevent="register">
          <div class="mb-4">
            <label class="block mb-1">Nombre</label>
            <input v-model="name" type="text" class="w-full border p-2 rounded" required />
          </div>
          <div class="mb-4">
            <label class="block mb-1">Correo</label>
            <input v-model="email" type="email" class="w-full border p-2 rounded" required />
          </div>
          <div class="mb-6">
            <label class="block mb-1">Contraseña</label>
            <input v-model="password" type="password" class="w-full border p-2 rounded" required />
          </div>
          <button type="submit" class="bg-blue-600 text-white w-full py-2 rounded hover:bg-blue-700">
            Registrarse
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
        name: '',
        email: '',
        password: '',
      }
    },
    methods: {
      async register() {
        try {
          const res = await axios.post('http://localhost:5000/api/register', {
            name: this.name,
            email: this.email,
            password: this.password,
          })
          alert(res.data.message)
          this.$router.push('/login')
        } catch (err) {
          alert(err.response?.data?.message || 'Error en el registro')
        }
      },
    },
  }
  </script>
  