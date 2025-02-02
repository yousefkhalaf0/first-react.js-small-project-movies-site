const INITIAL_VALUE = {
    allMovies: [],
    currentPageMovies: [],
    genres: [],
};

export default function moviesReducer(state = INITIAL_VALUE, action) {
    switch (action.type) {
        case "SET_MOVIES":
            const newMovies = action.payload.filter(
                (movie) => !state.allMovies.some((m) => m.id === movie.id)
            );
            return {
                ...state,
                allMovies: [...state.allMovies, ...newMovies],
                currentPageMovies: action.payload,
            };
        case "UPDATE_MOVIE_DETAILS":
            const updatedMovie = action.payload;
            const updatedMovies = state.allMovies.map((movie) =>
                movie.id === updatedMovie.id ? updatedMovie : movie
            );
            return {
                ...state,
                allMovies: updatedMovies,
            };
        case "SET_CURRENT_PAGE_MOVIES":
            return {
                ...state,
                currentPageMovies: action.payload,
            };
        case "SET_GENRES":
            return {
                ...state,
                genres: action.payload,
            };
        default:
            return state;
    }
}