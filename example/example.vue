<template>
  <div>
    123
    <CzzToast :data="data"></CzzToast>
  </div>
</template>
<script>
import CzzToast from '../src/components/toast.vue';

export default {
  components: {
    CzzToast
  },
  data() {
    return {
      data: {
        name: 'nick',
      },
    }
  }
}
</script>
