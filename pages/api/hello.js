export function getStrapiURL(path = "") {
  return `${process.env.API_BASE_URL}${path}`;
}

// Helper to make GET requests to Strapi
export async function fetchAPI(path) {
  const requestUrl = getStrapiURL(path);
  console.log("requsturl", requestUrl);
  const response = await fetch(requestUrl);
  const data = await response.json();
  return data;
}
