interface Airport {
  name: string
  iata: string
  city: string
  country: string
  longitude: number
  latitude: number
}


export interface AirPortResponse {
  data: Airport[]
  currentPage: number
  totalPages: number
}

export default Airport
