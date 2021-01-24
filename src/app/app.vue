<template>
  <div class="page">
    <div class="card">
      <div class="card_header">
        <h3 class="card-title">{{ name }}</h3>
        <div class="card-subtitle">Transition & Animation</div>
      </div>
      <div class="card_content">
        <div class="emoji">🌲</div>
      </div>
      <div class="card_action">
        <button>请按这里</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: '宁浩网',
    };
  },
};
</script>

<style>
@import './styles/app.css';
@import './styles/card.css';
</style>
