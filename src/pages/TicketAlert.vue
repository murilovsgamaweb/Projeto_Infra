
<template>
  <Navbar />
  <div class="min-h-screen flex flex-col items-center justify-center p-4 gradient-bg border-[#DFDEDE]">
    <img :src="LogoRemaza" alt="Remaza" class="w-[150px] md:w-[200px] lg:w-[250px] mx-auto mb-6" />

    <div class="p-6 md:p-8 w-full max-w-md rounded-[30px] border border-[#DFDEDE] bg-[#F0F4F8] shadow-md text-center">
      <img :src="Alert" alt="Alerta" class="w-16 h-16 md:w-20 md:h-20 mx-auto mb-4" />

      <h2 class="text-lg md:text-2xl font-bold gradient-title">Ticket em andamento</h2>
      <p class="text-base md:text-lg text-[#414040]">Número do ticket atual</p>

      <div class="mt-2 p-4 rounded-[10px] border border-[#CBC8C8] bg-white shadow-md flex justify-center items-center gap-2">
        <p class="text-3xl font-bold gradient-title">{{ ticketNumber }}</p>
        <span class="material-icons text-3xl copy-icon cursor-pointer" @click="copyToClipboard">
          content_copy
        </span>
      </div>

      <p class="mt-4 text-sm md:text-base text-[#414040] font-medium">
        Parece que este ticket já está em andamento. Se precisar de suporte adicional, você pode abrir um novo ticket.
      </p>

      <div class="mt-6 flex gap-4 justify-center">
        <router-link to="Ticket">
          <button class="btn-custom bg-green-600 border-green-600 hover:bg-green-700 focus:ring-green-600">
            Abrir Ticket
          </button>
        </router-link>
        <router-link to="/">

          <button class="btn-custom bg-[#FF8C00] border-[#FF9E01] hover:bg-[#FF7F00] focus:ring-[#FF9E01]">
            Cancelar 
          </button>
        </router-link>

      </div>
    </div>
    <FooterWS />
  </div>
</template>




<style scoped>
.gradient-bg {
  background: linear-gradient(224deg, rgba(255, 255, 255, 0.6) -8.95%, rgba(240, 244, 248, 0.6) 22.3%, rgba(74, 144, 226, 0.6) 132.39%);
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px solid #dfdede;
}

.gradient-title {
  background: linear-gradient(269deg, #ff7500 -28.6%, #995f01 173.18%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.copy-icon {
  color: #f07201;
}

.btn-custom {
  width: 100%;
  max-width: 200px;
  padding: 8px 20px;
  color: white;
  border-radius: 15px;
  border-width: 1px;
  box-shadow: inset 0px 4px 4px 0px #fff4e1;
  transition: background-color 0.2s ease-in-out, transform 0.1s ease-in-out;
  font-size: 1rem;
  font-weight: 500;
  text-align: center;
}

.btn-custom:hover {
  transform: scale(1.03);
}

.btn-custom:focus {
  outline: none;
  ring-width: 2px;
  ring-opacity: 50;
}
</style>




<script setup lang="ts">
import { ref, onMounted } from 'vue';
import LogoRemaza from '@/assets/images/Logoremaza.png';
import Alert from '@/assets/images/alert.svg';
import Navbar from '@/shared/components/Navbar.vue';
import FooterWS from '@/shared/components/FooterWS.vue';

const ticketNumber = ref('123456');


const copyToClipboard = () => {
  navigator.clipboard.writeText(ticketNumber.value);
};


onMounted(() => {
  const robotoFont = document.createElement('link');
  robotoFont.href = 'https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;700&display=swap';
  robotoFont.rel = 'stylesheet';
  document.head.appendChild(robotoFont);

  const materialIcons = document.createElement('link');
  materialIcons.href = 'https://fonts.googleapis.com/icon?family=Material+Icons';
  materialIcons.rel = 'stylesheet';
  document.head.appendChild(materialIcons);
});
</script>
