<template lang="html">
  <div class="">
    <div class="modal"><div class="modal-content">Filler content</div></div>
      <div class="container">
        <nav class='navbar'>
          <div>Marvel
            </div>
        </nav>

    <div class="main-container">
        <aside class="" v-if="series">
          <img :src="`${series.thumbnail.path}.${series.thumbnail.extension}`" alt="">
          <h3>{{series.title}}</h3>
          <p>{{ series.startYear }} - {{ series.endYear }}</p>
          <h2>Creators</h2>
          <ul>
            <li v-for="creator in series.creators.items">{{creator.name}}</li>
          </ul>
        </aside>

    <div class="character-container">
      <div class="grid-wrapper">
      <h1>Characters</h1>
    <div class="upper-character__container">
      <character-item v-for="item in characters" :character="item"></character-item>
    </div>


    <h1>Comics</h1>
    <div class="lower-character__container">
        <comic-item v-for="item in comics" :comic="item"></comic-item>
    </div>

  </div>
</div>

</div>
</div>
</template>

<script>
import store from '../store';
import { seriesInfoSearch } from '../actions';
import characterItem from './character-item.vue';
import comicItem from './comic-item.vue';

export default {
  components: { characterItem, comicItem },
  data() {
    // showModal()
    return {
      series: this.$select('series'),
      characters: this.$select('characters'),
      comics: this.$select('comics'),
    };
  },

  mounted() {
    store.dispatch(seriesInfoSearch('hulk'));
  },

  methods: {
    // modal() {
    //   this.showModal = true;
    // },
    //
    // close() {
    //   this.showModal = false;
    // }

  },
};
</script>
