<script lang = 'ts'>
import iconSair from '../../assets/images/iconSair.png';
import { useRouter } from 'vue-router';

export default {
  setup() {
    const router = useRouter();

    const goBack = () => {
      router.back();
    };

    return { goBack, iconSair };
  }
};
</script>

<template>
  <nav class="fixed top-0 left-0 w-full p-4 bg-transparent flex items-center">
    <button @click="goBack" class="p-2">
      <img :src="iconSair" alt="Voltar" class="w-8 h-8 opacity-80 transition-opacity" />
    </button>
  </nav>
</template>



