<script lang="ts">
import logoWS from '../../assets/images/logoWS.png';
import { useRouter } from 'vue-router';

export default {
  setup() {
    const router = useRouter();

    const goBack = () => {
      router.back();
    };

    return { goBack, logoWS };
  }
};
</script>

<template>
  <footer class="fixed bottom-0 left-0 w-full p-4 bg-transparent flex justify-center items-center">
    <img :src="logoWS" alt="Logo" class="w-12 h-12 opacity-80 transition-opacity" />
  </footer>
</template>


