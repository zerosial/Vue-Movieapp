<script setup>
import { RouterLink, RouterView, useRouter } from "vue-router";
const router = useRouter();
const onSearch = (e) => {
  if (e.key === "Enter") {
    router.push(`/movie/${e.target.value}`);
  }
};
</script>

<template>
  <header class="flex text-center relative justify-center mt-10">
    <div class="form-control">
      <div class="input-group">
        <input
          type="text"
          placeholder="검색어를 적어주세요"
          class="input input-bordered"
          @keypress="onSearch($event)"
        />
        <button class="btn btn-square">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </button>
      </div>
    </div>
  </header>
  <main>
    <RouterLink to="/">Home</RouterLink>
    <RouterView />
  </main>
</template>
