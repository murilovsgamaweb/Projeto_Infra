<script setup lang="ts">
import { ref, onMounted } from 'vue';
import LogoRemaza from '@/assets/images/Logoremaza.png';
import iconSuporte from '@/assets/images/iconSuporte.png';
import Navbar from '@/shared/components/Navbar.vue';


const nome = ref('Julia Santos');
const email = ref('julia.santos@email.com');
const celular = ref('11940028922');
const tituloChamado = ref('');
const descricaoProblema = ref('');


const validatePhone = (event: Event) => {
  const input = event.target as HTMLInputElement;
  input.value = input.value.replace(/\D/g, '').slice(0, 11);
  celular.value = input.value;
};


onMounted(() => {
  const link = document.createElement('link');
  link.href = 'https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;700&display=swap';
  link.rel = 'stylesheet';
  document.head.appendChild(link);
});
</script>

<template>
  <Navbar />
  <div class="min-h-screen flex flex-col items-center justify-center p-4 gradient-bg">
    <img :src="LogoRemaza" alt="Remaza" class="w-[150px] md:w-[200px] lg:w-[250px] mx-auto mb-4" />

    <div class="p-6 md:p-8 w-full max-w-md border bg-white shadow-lg rounded-2xl custom-border">
      <div class="flex items-center justify-center mb-4">
        <img :src="iconSuporte" alt="Ícone de suporte" class="w-10 h-10" />
      </div>


      <div class="mb-4">
        <label class="flex items-center text-gray-600 text-sm mb-1">
          <i class="material-icons text-gray-500 mr-2">person</i> Nome
        </label>
        <input v-model="nome" class="w-full px-3 py-2 border rounded-lg input-style" placeholder="Digite seu nome" />
      </div>

      <div class="mb-4">
        <label class="flex items-center text-gray-600 text-sm mb-1">
          <i class="material-icons text-gray-500 mr-2">email</i> E-mail
        </label>
        <input v-model="email" class="w-full px-3 py-2 border rounded-lg input-style" placeholder="Digite seu e-mail" />
      </div>

      <div class="mb-4">
        <label class="flex items-center text-gray-600 text-sm mb-1">
          <i class="material-icons text-gray-500 mr-2">phone</i> Celular
        </label>
        <input
          v-model="celular"
          @input="validatePhone"
          class="w-full px-3 py-2 border rounded-lg input-style"
          placeholder="Digite seu número"
          maxlength="11"
        />
      </div>

      <div class="mb-4">
        <label class="flex items-center text-gray-600 text-sm mb-1">
          <i class="material-icons text-gray-500 mr-2">assignment</i> Título do chamado
        </label>
        <select v-model="tituloChamado" class="w-full px-3 py-2 border rounded-lg input-style">
          <option disabled value="">Selecione o título do chamado</option>
          <option value="problema1">1- Problema com impressora</option>
          <option value="problema2">2- Problema com a máquina</option>
          <option value="problema3">3- Instalação de software</option>
          <option value="problema4">4- Problema com equipamentos</option>
          <option value="problema5">5- Instalação TEF</option>
          <option value="problema6">6- Configurar máquina para usuário</option>
        </select>
      </div>


      <div class="mb-6">
        <label class="flex items-center text-gray-600 text-sm mb-1">
          <i class="material-icons text-gray-500 mr-2">description</i> Descrição do problema
        </label>
        <textarea
          v-model="descricaoProblema"
          class="w-full px-3 py-2 border rounded-lg input-style"
          placeholder="Descreva o problema detalhadamente"
        ></textarea>
      </div>


      <router-link to="/Ticket">
        <button
          class="w-3/4 py-1.5 rounded-xl bg-[#FF9E01] text-white font-semibold flex items-center justify-center gap-2 transition mx-auto border border-[#FF9E01] bg-[#FF8C00] shadow-[inset_0px_4px_4px_0px_#FFF4E1] hover:bg-[#FF7F00] focus:outline-none focus:ring-2 focus:ring-[#FF9E01] focus:ring-opacity-50 duration-200"
        >
          Abrir ticket
        </button>
      </router-link>
    </div>
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
}

.custom-border {
  border: 1px solid #dfdede;
  background: #f0f4f8;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
}

.input-style {
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  border: 1px solid #cbc8c8;
  background-color: #ffffff;
  color: #000000;
}

.input-style:focus {
  border-color: #cbc8c8;
  outline: none;
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
