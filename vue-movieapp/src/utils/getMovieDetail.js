import { ref } from "vue";
const getMovieDetail = () => {
  const movieDetail = ref([]);
  const errorMovieDetail = ref(null);
  const { VITE_API_END_POINT, VITE_API_KEY } = import.meta.env;

  const loadMovieDetail = async ({ type, keyword }) => {
    let url;
    if (type === "Thumbnail") {
      url = `s=${keyword}&page=1`;
    }
    if (type === "Detail") {
      url = `i=${keyword}&plot=full`;
    }
    try {
      let res = await fetch(
        `${VITE_API_END_POINT}?apikey=${VITE_API_KEY}&${url}`
      );
      if (!res.ok) {
        throw Error("fail");
      }
      movieDetail.value = await res.json();
    } catch (err) {
      errorMovieDetail.value = err.message;
    }
  };

  return { movieDetail, errorMovieDetail, loadMovieDetail };
};

export default getMovieDetail;
