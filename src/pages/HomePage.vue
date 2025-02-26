<script>
import { ref } from 'vue';
import LogoRemaza from '@/assets/images/Logoremaza.png';

export default {
  setup() {
    const code = ref('');
    const submitCode = () => {
      alert(`Código enviado: ${code.value}`);
    };

    return { code, submitCode, LogoRemaza };
  },
};
</script>

<template>
  <div class="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">

    <img :src="LogoRemaza" alt="Remaza" class="w-32 mx-auto mb-4" />



    <div class="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
      <div class="mb-6 relative">
        <h1 class="text-2xl font-bold text-gray-800 mb-4">Bem vindo!</h1>
        <label for="qrCode" class="block text-sm font-medium text-gray-700">Digite o código ou escaneie o QR Code</label>
        <div class="relative">
          <input
            v-model="code"
            type="text"
            id="qrCode"
            class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm pr-12"
            placeholder="Digite o código ou QR CODE"
          />

          <button
            class="absolute inset-y-0 right-0 px-4 flex items-center bg-orange-500 text-white rounded-r-md hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-opacity-50"
          >
            <i class="material-icons">camera_alt</i>
          </button>
        </div>
      </div>


      <button
        @click="submitCode"
        class="w-full px-4 py-2 bg-orange-500 text-white rounded-md hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-opacity-50"
      >
        Buscar
      </button>
    </div>
  </div>
</template>

<style scoped>

</style>
