<script setup>
import { watch, ref } from "vue";
import getMovieDetail from "../utils/getMovieDetail";

const { movieDetail, loadMovieDetail } = getMovieDetail();
const prop = defineProps({
  clickId: String,
});

const movie = ref("");

watch(
  () => prop.clickId,
  async () => {
    movie.value = "";
    loadMovieDetail(prop.clickId);
  }
);

watch(
  () => movieDetail.value,
  () => {
    movie.value = movieDetail.value;
  }
);
</script>

<template>
  <div v-if="movie?.Response === 'True'">
    <div>
      <div>
        <img :src="movie.Poster" />
      </div>
      <div>
        <h1>{{ movie.Title }}</h1>
        <div>{{ movie.Released }}, {{ movie.Country }}</div>
        <div>
          <div><b>Genre</b></div>
          <div>{{ movie.Genre }}</div>
        </div>
        <div>
          <div><b>Plot</b></div>
          <p>
            {{ movie.Plot }}
          </p>
        </div>
        <div>
          <div><b>Ratings</b></div>
          <div>
            <div v-for="rating in movie.Ratings" :key="rating.Source">
              {{ rating.Source }} : {{ rating.Value }}
            </div>
          </div>
        </div>
        <div>
          <div><b>Director</b></div>
          <div>{{ movie.Director }}</div>
        </div>
        <div>
          <div><b>Actors</b></div>
          <div>{{ movie.Actors }}</div>
        </div>
      </div>
    </div>
  </div>
  <div v-else-if="movieDetail?.Response === 'False'">결과가 없습니다</div>
  <div v-else class="flex justify-center mt-20 h-screen">
    <progress class="progress w-56"></progress>
  </div>
</template>
