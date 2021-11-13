export const FetchInstance = async (url, method = 'GET', body = {}) => {

  const dataToSend = {
      method,
      crossDomain: true,
      mode: "cors",
      headers: { 'Content-Type' : 'application/json' }
  }
  if('GET' !== method && Object.keys(body).length !== 0){
      dataToSend.body = JSON.stringify(body); 
  }

  const response  = await fetch(`${url}`, dataToSend);

  if(!response.ok){
      throw Error(response.statusText);
  }
  return response.json();
}