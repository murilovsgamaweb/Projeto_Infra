<template>
  <Navbar />
  <div class="min-h-screen flex flex-col items-center justify-center p-4 gradient-bg border-[#DFDEDE]">
    <img :src="LogoRemaza" alt="Remaza" class="w-[150px] md:w-[200px] lg:w-[250px] mx-auto mb-6" />

    <div class="p-6 md:p-8 w-full max-w-md rounded-[30px] border border-[#DFDEDE] bg-[#F0F4F8] shadow-md text-center">
      <img :src="Check" alt="Success" class="w-20 h-20 md:w-24 md:h-24 mx-auto mb-4" />

      <h2 class="text-lg md:text-2xl font-bold gradient-text">
        Chamado aberto com sucesso!
      </h2>

      <div class="mt-4 p-4 rounded-[10px] border border-[#DFDEDE] bg-white shadow-md">
        <div class="flex items-center justify-center gap-2 text-[#A6A6A6] font-normal">
          <span class="material-icons text-lg">confirmation_number</span>
          <p class="text-sm">Número do Ticket</p>
        </div>

        <div class="flex items-center justify-center gap-2 mt-2">
          <p class="text-3xl font-bold gradient-number">{{ ticketNumber }}</p>
          <span class="material-icons text-3xl gradient-copy cursor-pointer" @click="copyToClipboard">
            content_copy
          </span>
        </div>
      </div>

      <p class="mt-4 text-base md:text-lg font-semibold text-[#565555]">
        Aguarde atendimento.
        <br>
        Nossa equipe entrará em contato em breve.
      </p>

      <div class="mt-4 px-4 py-2 w-full max-w-xs mx-auto flex items-center justify-center gap-2 rounded-[10px] border border-[#DFDEDE] bg-[#FF9E01]">
        <span class="material-icons text-[#ffff] text-lg">schedule</span>
        <p class="text-[#FFffff] font-roboto font-normal text-sm">Chamado em andamento</p>
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

.gradient-text {
  background: linear-gradient(269deg, #ff9e01 -28.6%, #995f01 173.18%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.gradient-number {
  background: linear-gradient(262deg, #ff9e01 -9.35%, #995f01 143.16%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-weight: 700;
}

.gradient-copy {
  color: #e99001;
}
</style>


<script setup lang="ts">
import { ref, onMounted } from 'vue';
import LogoRemaza from '@/assets/images/Logoremaza.png';
import Check from '@/assets/images/check.svg';
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
