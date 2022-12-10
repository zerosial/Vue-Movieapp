<script setup>
import { watch, ref } from "vue";
import { useRoute } from "vue-router";
import getMovieList from "../utils/getMovieList";
import MovieDetail from "../components/MovieDetail.vue";
import MovieListItem from "../components/MovieListItem.vue";

const route = useRoute();
const { movieList, errorMovieList, loadMovieList } = getMovieList();
const clickId = ref("null");
loadMovieList(route.params.id);
watch(
  () => route.params.id,
  async () => {
    loadMovieList(route.params.id);
  }
);

const onClickMovieDetail = (id, e) => {
  console.log(e);
  clickId.value = id;
};
</script>

<template>
  <div v-if="errorMovieList">{{ errorMovieList }}</div>
  <div v-if="movieList.Response === 'True'">
    <div class="grid grid-cols-2">
      <MovieListItem
        v-for="movie in movieList.Search"
        :id="movie.imdbID"
        :movie="movie"
        @click="onClickMovieDetail(movie.imdbID)"
        class="m-10"
      />
      >
    </div>
  </div>
  <div v-else-if="movieList.Response === 'False'">검색 결과가 없습니다</div>
  <div v-else>loading...</div>
  <input type="checkbox" id="my-modal-4" class="modal-toggle" />
  <label for="my-modal-4" class="modal cursor-pointer">
    <label class="modal-box relative" for="">
      <MovieDetail :clickId="clickId" />
    </label>
  </label>
</template>
