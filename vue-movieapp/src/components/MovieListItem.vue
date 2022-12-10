<script setup>
const prop = defineProps({
  movie: Object,
});
</script>

<template>
  <label for="my-modal-4">
    <div class="card lg:card-side bg-base-100 shadow-xl">
      <figure><img :src="movie?.Poster" alt="Album" /></figure>
      <div class="card-body">
        <h2 class="card-title">{{ movie?.Title }}</h2>
        <p>{{ movie?.Year }}</p>
      </div>
    </div>
  </label>
</template>
