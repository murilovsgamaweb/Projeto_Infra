<script lang="ts">
import { defineComponent } from 'vue';
import { useRouter } from 'vue-router';
import iconSair from '@/assets/images/mdi_arrow-left-bold.svg';

export default defineComponent({
  setup() {
    const router = useRouter();

    const goBack = () => {
      router.back();
    };

    console.log("Caminho do ícone:", iconSair);

    return { goBack, iconSair };
  }
});
</script>

<template>
  <nav class="fixed top-0 left-0 w-full p-4 bg-transparent flex items-center">
    <button @click="goBack" class="p-2">
      <img :src="iconSair" alt="Voltar" class="w-8 h-8 opacity-80 transition-opacity" />
    </button>
  </nav>
</template>
