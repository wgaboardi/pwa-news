const params = {
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
}


//const URL = "http://localhost:3000/api"
const URL = "https://stormy-brook-79548.herokuapp.com/api"

function getNews(subject) {
  return fetch(`${URL}/${subject}`, params)
    .then((response) => response.json())
    .catch((err) => {
      console.error('Ocorreu um err', err)
    })
}

function getNewsById(subject, id) {
  return fetch(`${URL}/${subject}/${id}`, params)
    .then((response) => response.json())
    .catch((err) => {
      console.error('Ocorreu um err', err)
    })
}

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  getNews,
  getNewsById
}