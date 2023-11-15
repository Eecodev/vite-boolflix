import { reactive } from "vue";

export const store = reactive ({
    apiUrl: 'https://api.themoviedb.org/3/',
    endPoint: {
        movie: 'search/movie',
        series: 'search/tv',
    },
    params:{
        api_key: 'e402304427b68d05700f0b64a7665b35',
        query: 'a',
    },

    error: '',
    loading: true,
    movieList: [],
    seriesList: [],
});