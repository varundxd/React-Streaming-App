export const addMovieLocal = (movie) => {
  let historyMovie = localStorage.getItem("phimmoi-history")
    ? JSON.parse(localStorage.getItem("phimmoi-history"))
    : [];

  const existMovie = historyMovie.some((p) => p.id === movie.id);

  if (existMovie) {
    historyMovie = historyMovie.filter((item) => item.id !== movie.id);
  }

  historyMovie.push(movie);
  localStorage.setItem("phimmoi-history", JSON.stringify(historyMovie));
};

export const getMovieHistory = () => {
  const historyMovie = localStorage.getItem("phimmoi-history")
    ? JSON.parse(localStorage.getItem("phimmoi-history"))
    : [];

  const result = historyMovie.sort((a, b) => b.viewAt - a.viewAt);


  return result;
};

// export const getMovieHistory = () => {
//   const historyMovieString = localStorage.getItem("streamify-history");

//   if (!historyMovieString) {
//     return []; // Return an empty array if the history is not present in localStorage
//   }

//   try {
//     const historyMovie = JSON.parse(historyMovieString);

//     if (!Array.isArray(historyMovie)) {
//       throw new Error("Invalid data stored in localStorage");
//     }

//     const result = historyMovie.sort((a, b) => b.viewAt - a.viewAt);
//     return result;
//   } catch (error) {
//     console.error("Error parsing or sorting movie history:", error);
//     return []; // Return an empty array in case of any error
//   }
// };
