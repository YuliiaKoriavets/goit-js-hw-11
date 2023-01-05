'use strict';
import axios from 'axios';

const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '32583880-eecf7687874c4983951318f6f';

export async function fetchPhotos(searchQuery, page) {
  return await axios.get(
    `${BASE_URL}?key=${API_KEY}&q=${searchQuery}&image_type=photo&orientation=horizontal&safesearch=true&per_page=40&page=${page}`
  ).then(response => response.data)
}
