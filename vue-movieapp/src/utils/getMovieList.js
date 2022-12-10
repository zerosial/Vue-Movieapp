import { ref } from "vue";
const getMovieList = () => {
  const movieList = ref([]);
  const errorMovieList = ref(null);
  const { VITE_API_END_POINT, VITE_API_KEY } = import.meta.env;

  const loadMovieList = async (input) => {
    try {
      let res = await fetch(
        `${VITE_API_END_POINT}?apikey=${VITE_API_KEY}&s=${input}&page=1`
      );
      if (!res.ok) {
        throw Error("fail");
      }
      movieList.value = await res.json();
    } catch (err) {
      errorMovieList.value = err.message;
    }
  };

  return { movieList, errorMovieList, loadMovieList };
};

export default getMovieList;
