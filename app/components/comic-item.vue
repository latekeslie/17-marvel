<template lang="html">
  <div class="item">
    <img :src="`${comic.images[0].path}.${comic.images[0].extension}`" alt="">
    <p>{{ comic.issueNumber }}</p>
    <p>{{ comic.title }}</p>
    <p>{{ comic.dates[0].date }}</p>
    <button type="button" name="button">Read More</button>

  </div>
</template>

<script>
export default {
  props: ['comic'],

  data() {
    return {
    };
  },

  methods: {

  },
};
</script>
