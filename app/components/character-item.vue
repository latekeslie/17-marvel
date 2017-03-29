

<template lang="html">
  <div class="item">
    <img :src="`${character.thumbnail.path}.${character.thumbnail.extension}`" alt="">
    <p>{{ character.name }}</p>
  </div>
</template>

<script>
export default {
  props: ['character'],

  data() {
    return {
    };
  },

  methods: {

  },
};
</script>
