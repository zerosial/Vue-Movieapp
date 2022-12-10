<script setup>
import { watch, ref } from "vue";
import getMovieDetail from "../utils/getMovieDetail";

const { movieDetail, loadMovieDetail } = getMovieDetail();
const prop = defineProps({
  clickId: String,
});
const apiData = ref("");
watch(
  () => prop.clickId,
  async () => {
    apiData.value = "";
    loadMovieDetail(prop.clickId);
  }
);
watch(
  () => movieDetail.value,
  () => {
    apiData.value = movieDetail.value;
  }
);
</script>

<template>
  <div v-if="apiData?.Response === 'True'">
    <div>
      <div>
        <img :src="apiData.Poster" />
      </div>
      <div>
        <h1>{{ apiData.Title }}</h1>
        <div>{{ apiData.Released }}, {{ apiData.Country }}</div>
        <div>
          <div><b>Genre</b></div>
          <div>{{ apiData.Genre }}</div>
        </div>
        <div>
          <div><b>Plot</b></div>
          <p>
            {{ apiData.Plot }}
          </p>
        </div>
        <div>
          <div><b>Ratings</b></div>
          <div>
            <div v-for="rating in apiData.Ratings" :key="rating.Source">
              {{ rating.Source }} : {{ rating.Value }}
            </div>
          </div>
        </div>
        <div>
          <div><b>Director</b></div>
          <div>{{ apiData.Director }}</div>
        </div>
        <div>
          <div><b>Actors</b></div>
          <div>{{ apiData.Actors }}</div>
        </div>
      </div>
    </div>
  </div>
  <div v-else-if="movieDetail?.Response === 'False'">결과가 없습니다</div>
  <div v-else>loading...</div>
</template>
