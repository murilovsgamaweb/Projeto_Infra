<script lang = 'ts'>
import { ref, onMounted } from 'vue';
import LogoRemaza from '@/assets/images/Logoremaza.png';
import iconSuporte from '@/assets/images/iconSuporte.png';
import navbar from '@/shared/components/navbar.vue';
import Footer from '@/shared/components/footer.vue';

export default {
  components: { navbar, Footer },
  setup() {
    const nome = ref('Julia Santos');
    const email = ref('julia.santos@email.com');
    const celular = ref('');
    const tituloChamado = ref('');
    const descricaoProblema = ref('');

    onMounted(() => {
      const link = document.createElement('link');
      link.href = 'https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;700&display=swap';
      link.rel = 'stylesheet';
      document.head.appendChild(link);
    });

    return { nome, email, celular, tituloChamado, descricaoProblema, LogoRemaza, iconSuporte };
  }
};
</script>

<template>
  <navbar />
  <div class="min-h-screen flex flex-col items-center justify-center p-4 gradient-bg">
    <img :src="LogoRemaza" alt="Remaza" class="w-[150px] md:w-[200px] lg:w-[250px] mx-auto mb-4" />

    <div class="p-6 md:p-8 w-full max-w-md border border-gray-300 bg-white shadow-lg rounded-2xl">
      <div class="flex items-center justify-center mb-4">
        <img :src="iconSuporte" alt="Ícone de suporte" class="w-10 h-10" />
      </div>

      <div class="mb-4">
        <label class="flex items-center text-gray-600 text-sm mb-1">
          <i class="material-icons text-gray-500 mr-2">person</i> Nome
        </label>
        <input v-model="nome" class="w-full px-3 py-2 border rounded-lg" placeholder="Digite seu nome" />
      </div>

      <div class="mb-4">
        <label class="flex items-center text-gray-600 text-sm mb-1">
          <i class="material-icons text-gray-500 mr-2">email</i> E-mail
        </label>
        <input v-model="email" class="w-full px-3 py-2 border rounded-lg" placeholder="Digite seu e-mail" />
      </div>

      <div class="mb-4">
        <label class="flex items-center text-gray-600 text-sm mb-1">
          <i class="material-icons text-gray-500 mr-2">phone</i> Celular
        </label>
        <input v-model="celular" class="w-full px-3 py-2 border rounded-lg" placeholder="Digite seu número" />
      </div>

      <div class="mb-4">
        <label class="flex items-center text-gray-600 text-sm mb-1">
          <i class="material-icons text-gray-500 mr-2">assignment</i> Título do chamado
        </label>
        <select v-model="tituloChamado" class="w-full px-3 py-2 border rounded-lg">
          <option disabled value="">Selecione o título do chamado</option>
          <option value="problema1">Problema 1</option>
          <option value="problema2">Problema 2</option>
          <option value="problema3">Problema 3</option>
          <option value="problema4">Problema 4</option>
          <option value="problema5">Problema 5</option>
          <option value="problema6">Problema 6</option>
        </select>
      </div>

      <div class="mb-6">
        <label class="flex items-center text-gray-600 text-sm mb-1">
          <i class="material-icons text-gray-500 mr-2">description</i> Descrição do problema
        </label>
        <textarea v-model="descricaoProblema" class="w-full px-3 py-2 border rounded-lg" placeholder="Descreva o problema detalhadamente"></textarea>
      </div>

      <button class="w-full py-2 rounded-lg bg-orange-500 text-white font-semibold flex items-center justify-center gap-2 hover:bg-orange-600 transition">
        Abrir ticket
      </button>
    </div>
  </div>
  <Footer />
</template>

<style scoped>
.gradient-bg {
  background: linear-gradient(224deg, rgba(255, 255, 255, 0.60) -8.95%, rgba(240, 244, 248, 0.60) 22.3%, rgba(74, 144, 226, 0.60) 132.39%);
  width: 100%;
  height: 100vh;
}

@media (max-width: 768px) {
  .gradient-bg {
    padding: 1rem;
  }

  .w-full {
    width: 100%;
  }
}
</style>
