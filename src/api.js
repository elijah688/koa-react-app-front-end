const api = async (path, method, body, auth) => {
  const url = process.env.REACT_APP_API_ENDPOINT;
  const response = await fetch(path ? `${url}/${path}` : url, {
    method,
    mode: 'cors',
    cache: 'no-cache',
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json',
      Authorization: auth,
    },
    redirect: 'follow',
    referrerPolicy: 'no-referrer',
    body: body && JSON.stringify(body),
  });
  console.log(body, url, path);

  return response.json();
};

export const getItems = () => api('items', 'GET', null, null);
export const postItems = (body) => api('items', 'POST', body, null);
export const deleteItem = (id) => api(`items/${id}`, 'DELETE', null, null);
export const updateItem = (id, body) => api(`items/${id}`, 'PUT', body, null);
