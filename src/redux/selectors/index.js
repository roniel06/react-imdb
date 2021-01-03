import {get} from 'lodash'

export const isSearchLoading = state => get(state,'search.isLoding');
export const movieResults = state => get(state, 'search.movieResults.Search');
export const movieResult = state => get(state, 'search.movieResult');