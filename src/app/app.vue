<template>
  <h3 @click="changeName">{{ name }}</h3>
</template>

<script>
import { ref, onMounted } from 'vue';

export default {
  setup() {
    const name = ref('宁浩网');

    const changeName = () => {
      name.value = 'NINGHAO';
    };

    // 生命周期
    onMounted(() => {
      console.log('onMounted');
    });

    return {
      name,
      changeName,
    };
  },
};
</script>

<style>
@import './styles/app.css';
</style>
