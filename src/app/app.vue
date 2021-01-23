<template>
  <h3>{{ name }}</h3>
  <AppButton text="确定"></AppButton>
  <AppButton />
  <app-button></app-button>
  <app-button />
</template>

<script>
import AppButton from './components/app-button';

export default {
  data() {
    return {
      name: '宁浩网',
    };
  },

  components: { AppButton },
};
</script>

<style>
@import './styles/app.css';
</style>
