import { NextApiRequest, NextApiResponse } from 'next'
import { allAirports, Pagination } from '../../models/airport'

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const airports = await allAirports(req.query as Pagination)
  res.status(200).json(airports)
}
