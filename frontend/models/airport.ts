import axios from 'axios'
import Airport, { AirPortResponse } from '../types/airport'

export type Pagination = {
  take: string
  page: string
  searchTerm: string
}

axios.defaults.baseURL = 'http://localhost:3001'

export const findAirportByIata = async (iata: string): Promise<Airport | undefined> => {
  return (await axios.get('/airports/' + iata)).data
}

export const allAirports = async ({ take, page, searchTerm }): Promise<AirPortResponse> => {
  return (await axios.get('/airports', { params: { take, page, searchTerm } })).data
}
