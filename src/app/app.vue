<template>
  <h3 @click="changeName">{{ nameEmoji }}</h3>
</template>

<script>
import { ref, onMounted, watch, computed } from 'vue';

export default {
  setup() {
    const name = ref('宁浩网');

    const changeName = () => {
      name.value = 'NINGHAO';
    };

    // 生命周期
    onMounted(() => {
      console.log('Mounted');
    });

    // 监视数据
    watch(name, (newName, oldName) => {
      console.log(newName, oldName);
    });

    // 计算属性
    const nameEmoji = computed(() => `${name.value} 🦕`);

    return {
      name,
      changeName,
      nameEmoji,
    };
  },
};
</script>

<style>
@import './styles/app.css';
</style>
