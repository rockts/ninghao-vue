<template>
  <keep-alive>
    <component :is="currentComponent"></component>
  </keep-alive>
  <small @click="onClickHintText">{{ hintText }}</small>
</template>

<script>
import UserLogin from './user-login';
import UserRegister from './user-register';

export default {
  data() {
    return {
      currentComponent: 'UserLogin',
      hintText: '没还有账户，点击注册',
    };
  },

  methods: {
    onClickHintText() {
      switch (this.currentComponent) {
        case 'UserRegister':
          this.currentComponent = 'UserLogin';
          this.hintText = '还没有账户，点击注册';
          break;
        case 'UserLogin':
          this.currentComponent = 'UserRegister';
          this.hintText = '已有账户，点击登录';
          break;
      }
    },
  },
  components: {
    UserLogin,
    UserRegister,
  },
};
</script>
