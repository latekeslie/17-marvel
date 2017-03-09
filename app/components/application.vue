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
      <div v-for="character in characters"class="item">
        <img :src="`${character.thumbnail.path}.${character.thumbnail.extension}`" alt="">
        <p>{{ character.name }}</p>
      </div>
    </div>


    <h1>Comics</h1>
    <div class="lower-character__container">
      <div v-for="comic in comics"class="item">
        <img :src="`${comic.images[0].path}.${comic.images[0].extension}`" alt="">
        <p>{{ comic.issueNumber }}</p>
        <p>{{ comic.title }}</p>
        <p>{{ comic.dates[0].date }}</p>
        <button type="button" name="button">Read More</button>
      </div>
    </div>

  </div>
</div>

</div>
</div>
</template>

<script>
import store from '../store';
import { seriesInfoSearch } from '../actions';

export default {
  data() {
    // showModal()
    return {
      series: this.$select('series'),
      characters: this.$select('characters'),
      comics: this.$select('comics'),
    };
  },

  mounted() {
    store.dispatch(seriesInfoSearch('Hulk'));
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
