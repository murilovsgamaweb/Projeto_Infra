<script lang="ts">
import { ref, onMounted } from 'vue';
import LogoRemaza from '@/assets/images/Logoremaza.png';
import Check from '@/assets/images/check.svg'

export default {
  setup() {
    const ticketNumber = ref('123456');

    onMounted(() => {
      const link = document.createElement('link');
      link.href = 'https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;700&display=swap';
      link.rel = 'stylesheet';
      document.head.appendChild(link);
    });

    return { ticketNumber, LogoRemaza, Check };
  },
};
</script>

<template>
  <div class="min-h-screen flex flex-col items-center justify-center p-4 gradient-bg">
    <img :src="LogoRemaza" alt="Remaza" class="w-[150px] md:w-[200px] lg:w-[250px] mx-auto mb-6" />

    <div class="p-6 md:p-8 w-full max-w-md bg-white shadow-lg rounded-2xl text-center">
      <img :src="Check" alt="Success" class="w-12 h-12 mx-auto mb-4" />

      <h2 class="text-lg md:text-xl font-bold text-[#D99100]">Chamado aberto com sucesso!</h2>

      <div class="mt-4 p-4 border rounded-lg bg-gray-100">
        <p class="text-sm text-gray-600">Número do Ticket</p>
        <p class="text-2xl font-bold text-gray-800">{{ ticketNumber }}</p>
      </div>

      <p class="mt-4 text-sm text-gray-600">Aguarde atendimento. Nossa equipe entrará em contato em breve.</p>

      <button class="mt-6 px-4 py-2 bg-yellow-100 text-yellow-700 font-medium rounded-lg border border-yellow-400">
        ⏳ Chamado em andamento
      </button>
    </div>
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
