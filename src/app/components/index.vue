<template>
  <div @click="onClickText">你好，欢迎访问宁浩网</div>
</template>

<script>
export default {
  methods: {
    onClickText() {
      this.$$route.push({ name: 'about' });
      //   this.$route.replace('/about');
    },
  },
};
</script>
