<script lang="ts">
import { defineComponent } from 'vue';
import { useRouter } from 'vue-router';
import logoWSq from '@/assets/images/202001-websupply-shield-02-02 (1).svg?url';

export default defineComponent({
  setup() {
    const router = useRouter();

    const goBack = () => {
      router.back();
    };

    console.log("Caminho da logo:", logoWSq);

    return { goBack, logoWSq };
  }
});
</script>
