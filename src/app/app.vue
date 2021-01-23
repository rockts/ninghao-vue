<template>
  <h3>{{ name }}</h3>
  <AppButton></AppButton>
  <AppButton />
  <app-button></app-button>
  <app-button />
  <AppDemoButton />
</template>

<script>
import AppButton from './components/app-button';
import AppDemoButton from './components/app-demo-button';

export default {
  data() {
    return {
      name: '宁浩网',
    };
  },

  components: { AppButton, AppDemoButton },
};
</script>

<style>
@import './styles/app.css';
</style>
