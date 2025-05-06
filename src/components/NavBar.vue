<template>
    <nav class="bg-white shadow-md">
      <div class="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        <router-link to="/" class="text-xl font-semibold text-blue-600">Mi App</router-link>
        <div class="space-x-4">
          <router-link to="/UserRegister" class="text-gray-700 hover:text-blue-600">Registrarse</router-link>
          <router-link to="/UserLogin" class="text-gray-700 hover:text-blue-600">Iniciar Sesión</router-link>
        </div>
      </div>
    </nav>
  </template>
  
  <script>
  export default {}
  </script>
  