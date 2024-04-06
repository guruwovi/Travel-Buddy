async function getImageUrlFromUnsplash(query) {
    const API_KEY = "jbuFtvjvekr-JpTVuL-hOKF6_VfbvbuIFcAlV2bWlDQ"
    const url = `https://api.unsplash.com/photos/random?query=${query}&client_id=${API_KEY}`;
    const response = await fetch(url);
    const data = await response.json();
    return data.urls.regular;
}