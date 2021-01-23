<template>
  <h3>{{ name }}</h3>
  <USerProfile />
</template>

<script>
import USerProfile from './components/user-profile';

export default {
  data() {
    return {
      name: '宁浩网',
    };
  },

  methods: {
    onTapAppButton(text) {
      console.log('on tap app button', text);
    },

    onInitAppButton() {
      console.log('on init app button');
    },
  },

  components: { USerProfile },
};
</script>

<style>
@import './styles/app.css';
</style>
