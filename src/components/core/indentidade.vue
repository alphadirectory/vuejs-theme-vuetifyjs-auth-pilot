<template>
  <div>
    <img :src="logo" width="20" v-if="!full" />
    <div v-if="full">
      <img :src="logo" width="170" v-if="branco === true" />
      <img :src="logo" width="170" v-if="!branco" />
    </div>
  </div>
</template>
<script>
export default {
  props: {
    full: Boolean,
    branco: Boolean
  },
  computed: {
    logo () {
      return "/assets/images/logo.png"
    }
  }
};
</script>