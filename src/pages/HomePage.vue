<script setup lang="ts">
import { ref, onMounted } from 'vue';
import LogoRemaza from '@/assets/images/Logoremaza.png';
import FooterWS from '@/shared/components/FooterWS.vue';


const code = ref<string>('');

onMounted(() => {
  const link = document.createElement('link');
  link.href = 'https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;700&display=swap';
  link.rel = 'stylesheet';
  document.head.appendChild(link);
});
</script>

<template>
  <div class="min-h-screen flex flex-col items-center justify-center p-4 gradient-bg">
    <img :src="LogoRemaza" alt="Remaza" class="w-[150px] md:w-[200px] lg:w-[250px] mx-auto mb-4" />

    <div class="p-6 md:p-8 w-full max-w-md border border-[#DFDEDE] bg-[#F0F4F8] shadow-[0px_4px_4px_rgba(0,0,0,0.25)] rounded-[20px]">
      <div class="mb-6 relative">
        <h1 class="text-xl md:text-2xl font-bold mb-4 text-center" style="color: #102155;">Bem vindo!</h1>

        <label for="qrCode" class="block text-sm md:text-base font-medium pl-2" style="color: #102155;">Digite o código ou escaneie o QR Code</label>
        <div class="relative">
          <input
            v-model="code"
            type="text"
            id="qrCode"
            class="mt-1 block w-full px-3 py-2 border border-[#CBC8C8] rounded-[15px] shadow-[0px_4px_4px_rgba(0,0,0,0.25)] focus:outline-none focus:ring-gray-500 focus:border-gray-300 text-sm md:text-base pr-12"
            placeholder="Digite o código ou QR CODE"
            maxlength="8"
            required
            style="background: #FFF;"
          />

          <button
            class="absolute inset-y-0 right-0 px-3 flex items-center text-white rounded-[15px] focus:outline-none focus:ring-2 focus:ring-opacity-50 transition duration-200 hover:bg-[]"
            style="background-color: #FF9900;"
          >
            <i class="material-icons">camera_alt</i>
          </button>
        </div>
      </div>

      <div class="flex justify-center">
        <router-link to="/initialform">
          <button
            class="w-full px-20 py-2 md:py-1.5 text-white rounded-[15px] border border-[#FF9E01] bg-[#FF8C00] shadow-[inset_0px_4px_4px_0px_#FFF4E1] hover:bg-[#FF7F00] focus:outline-none focus:ring-2 focus:ring-[#FF9E01] focus:ring-opacity-50 transition duration-200"
          >
            Buscar
          </button>
        </router-link>
      </div>
    </div>
    <FooterWS />
  </div>

</template>

<style scoped>
.gradient-bg {
  background: linear-gradient(224deg, rgba(255, 255, 255, 0.60) -8.95%, rgba(240, 244, 248, 0.60) 22.3%, rgba(74, 144, 226, 0.60) 132.39%);
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
