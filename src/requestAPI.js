const API_URL = 'http://localhost:5000';

export default async function requestAPI(path, method = 'GET', body = {}) {
  let requestOptions = {};
  let isFormData = body instanceof FormData;

  switch (method) {
    case 'POST':
      requestOptions = {
        method: 'POST',
        cache: 'no-store',
        headers: new Headers({
          Accept: 'application/json',
          ...(isFormData ? {} : { 'Content-Type': 'application/json' }),
        }),
        body: isFormData ? body : JSON.stringify(body),
      };
      break;

    default: // GET
      requestOptions = {
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      };
      break;
  }

  const data = await fetch(`${API_URL}${path}`, requestOptions);
  const response = await data.json();
  return response;
}
