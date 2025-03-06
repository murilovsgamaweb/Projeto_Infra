<script lang="ts">
import { ref, onMounted } from 'vue';
import LogoRemaza from '@/assets/images/Logoremaza.png';
import iconSuporte from '@/assets/images/iconSuporte.png';
import navbar from '@/shared/components/navbar.vue';
import footer from '@/shared/components/footer.vue';
export default {
  components: { navbar, footer },
  setup() {
    const empresa = ref('Websupply');
    const departamento = ref('TI');
    const ipEquipamento = ref('123456789');

    onMounted(() => {
      const link = document.createElement('link');
      link.href = 'https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;700&display=swap';
      link.rel = 'stylesheet';
      document.head.appendChild(link);

      const materialIconsLink = document.createElement('link');
      materialIconsLink.href = 'https://fonts.googleapis.com/icon?family=Material+Icons';
      materialIconsLink.rel = 'stylesheet';
      document.head.appendChild(materialIconsLink);
    });

    return { empresa, departamento, ipEquipamento, LogoRemaza, iconSuporte };
  },
};
</script>

<template>
  <navbar />
  <div class="min-h-screen flex flex-col items-center justify-center p-4 gradient-bg">
    <img :src="LogoRemaza" alt="Remaza" class="w-[150px] md:w-[200px] lg:w-[250px] mx-auto mb-4" />

    <div class="p-6 md:p-8 w-full max-w-md border border-gray-300 bg-[#F0F4F8] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] rounded-[20px]">
      <div class="flex items-center justify-center mb-4">
        <img :src="iconSuporte" alt="Ícone de suporte" class="w-10 h-10" />
      </div>

      <div class="flex items-center gap-4 mb-4">
        <div class="w-20 h-20 bg-gray-200 rounded-lg flex items-center justify-center">
          <i class="material-icons text-gray-500 text-3xl">photo_camera</i>
        </div>
        <div>
          <p class="text-[#102155] font-bold">Marca: <span class="font-normal">DELL</span></p>
          <p class="text-[#102155] font-bold">Modelo: <span class="font-normal">Exemplo</span></p>
        </div>
      </div>

      <div class="mb-4">
        <label class="flex items-center text-gray-600 text-sm mb-1">
          <i class="material-icons text-gray-500 mr-2">business</i> Empresa
        </label>
        <input v-model="empresa" class="w-full px-3 py-2 border rounded-lg bg-white" disabled />
      </div>

      <div class="mb-4">
        <label class="flex items-center text-gray-600 text-sm mb-1">
          <i class="material-icons text-gray-500 mr-2">people</i> Departamento
        </label>
        <input v-model="departamento" class="w-full px-3 py-2 border rounded-lg bg-white" disabled />
      </div>

      <div class="mb-6">
        <label class="flex items-center text-gray-600 text-sm mb-1">
          <i class="material-icons text-gray-500 mr-2">wifi</i> IP do equipamento
        </label>
        <input v-model="ipEquipamento" class="w-full px-3 py-2 border rounded-lg bg-white" disabled />
      </div>

      <router-link to="./Cadastro">
        <button class="w-full py-2 rounded-[15px] border border-[#FF9E01] bg-[#F90] text-white font-semibold flex items-center justify-center gap-2 mb-3 shadow-[inset_0px_4px_4px_0px_#FFF4E1] hover:bg-[#FF9E01] transition">
          <i class="material-icons">headset</i> Abrir Chamado
        </button>
      </router-link>

      <button class="w-full py-2 rounded-lg border border-green-500 text-green-600 font-semibold flex items-center justify-center gap-2 hover:bg-100green- transition">
        <i class="material-icons">chat</i> Falar no Whatsapp
      </button>
    </div>
  </div>
</template>

<style scoped>
.gradient-bg {
  background: linear-gradient(224deg, rgba(255, 255, 255, 0.60) -8.95%, rgba(240, 244, 248, 0.60) 22.3%, rgba(74, 144, 226, 0.60) 132.39%);
  width: 100%;
  height: 100vh;
}

body {
  font-family: 'Roboto', sans-serif;
}
</style>
