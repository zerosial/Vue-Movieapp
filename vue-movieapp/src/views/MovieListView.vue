<script setup>
import { watch, ref } from "vue";
import { useRoute } from "vue-router";
import getMovieDetail from "../utils/getMovieDetail";
import MovieDetail from "../components/MovieDetail.vue";
import MovieListItem from "../components/MovieListItem.vue";

const route = useRoute();
const { movieDetail, errorMovieDetail, loadMovieDetail } = getMovieDetail();
const clickId = ref("null");
loadMovieDetail({
  type: "Thumbnail",
  keyword: route.params.id,
});

watch(
  () => route.params.id,
  async () => {
    loadMovieDetail({
      type: "Thumbnail",
      keyword: route.params.id,
    });
  }
);

const onClickMovieDetail = (id, e) => {
  clickId.value = id;
};
</script>

<template>
  <div v-if="errorMovieDetail">{{ errorMovieDetail }}</div>
  <div v-if="movieDetail.Response === 'True'" class="min-h-screen">
    <div class="grid grid-cols-2">
      <MovieListItem
        v-for="movie in movieDetail.Search"
        :id="movie.imdbID"
        :movie="movie"
        @click="onClickMovieDetail(movie.imdbID)"
        class="m-10"
      />
    </div>
  </div>
  <div
    v-else-if="movieDetail.Response === 'False'"
    class="flex justify-center mt-20 h-screen"
  >
    검색 결과가 없습니다
  </div>
  <div v-else class="flex justify-center mt-20 h-screen">
    <progress class="progress w-56"></progress>
  </div>
  <input type="checkbox" id="my-modal-4" class="modal-toggle" />
  <label for="my-modal-4" class="modal cursor-pointer">
    <label class="modal-box relative" for="">
      <MovieDetail :clickId="clickId" />
    </label>
  </label>
</template>
