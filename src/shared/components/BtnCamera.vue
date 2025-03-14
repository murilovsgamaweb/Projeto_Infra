<!-- <template>
  <button
    class="absolute inset-y-0 right-0 px-3 flex items-center text-white rounded-[15px] focus:outline-none focus:ring-2 focus:ring-opacity-50 transition duration-200 hover:bg-[]"
    style="background-color: #FF9900;"
  >
    <i class="material-icons">camera_alt</i>
  </button>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';

onMounted(() => {
  const link = document.createElement('link');
  link.href = 'https://fonts.googleapis.com/icon?family=Material+Icons';
  link.rel = 'stylesheet';
  document.head.appendChild(link);
});
</script> -->


<template>
  <div>
   
    <button
      class="absolute inset-y-0 right-0 px-3 flex items-center text-white rounded-[15px] focus:outline-none focus:ring-2 focus:ring-opacity-50 transition duration-200 hover:bg-[]"
      style="background-color: #FF9900;"
      @click="openCamera"
    >
      <i class="material-icons">camera_alt</i>
    </button>

    <!-- Componente de escaneamento de QR code -->
    <div v-if="isCameraOpen" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div class="bg-white p-4 rounded-lg">
        <qrcode-stream @decode="onDecode" @init="onInit" :camera="camera"></qrcode-stream>
        <button @click="closeCamera" class="mt-4 px-4 py-2 bg-red-500 text-white rounded-lg">
          Fechar Câmera
        </button>
      </div>
    </div>

    <!-- Exibe os dados do QR code escaneado -->
    <div v-if="qrCodeData" class="mt-4">
      <p>Dados do QR Code: {{ qrCodeData }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { QrcodeStream } from 'vue-qrcode-reader';

// Estado da câmera (aberta ou fechada)
const isCameraOpen = ref(false);
// Dados do QR code escaneado
const qrCodeData = ref<string | null>(null);
// Estado da câmera (pode ser 'auto', 'rear', 'front' ou 'off')
const camera = ref<'auto' | 'rear' | 'front' | 'off'>('auto');

// Função para abrir a câmera
const openCamera = () => {
  isCameraOpen.value = true;
  camera.value = 'auto'; // Ativa a câmera
};

// Função para fechar a câmera
const closeCamera = () => {
  isCameraOpen.value = false;
  camera.value = 'off'; // Desliga a câmera
};

// Função chamada quando um QR code é decodificado
const onDecode = (data: string) => {
  qrCodeData.value = data;
  closeCamera(); // Fecha a câmera após o escaneamento
};

// Função para lidar com erros na inicialização da câmera
const onInit = async (promise: Promise<void>) => {
  try {
    await promise;
  } catch (error) {
    console.error('Erro ao acessar a câmera:', error);
    alert('Não foi possível acessar a câmera. Verifique as permissões.');
  }
};
</script>

<style scoped>
/* Estilos para o modal da câmera */
.fixed {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}
.bg-black {
  background-color: rgba(0, 0, 0, 0.5);
}
.flex {
  display: flex;
}
.items-center {
  align-items: center;
}
.justify-center {
  justify-content: center;
}
.bg-white {
  background-color: white;
}
.p-4 {
  padding: 1rem;
}
.rounded-lg {
  border-radius: 0.5rem;
}
.mt-4 {
  margin-top: 1rem;
}
</style>

