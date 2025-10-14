// src/api/api.js
import axios from 'axios'
const URL_API = 'http://localhost:5555/api/prompt'

export const makeRequest = async (message) => {
  try {
    const { data } = await axios.post(URL_API, { prompt: message })
    return data?.data ?? 'Sem resposta do servidor.'
  } catch (error) {
    console.error('Erro ao fazer a requisição:', error)
    return 'Desculpe, não foi possível obter uma resposta. Tente novamente.'
  }
}
