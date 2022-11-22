import {  GetServerSideProps, NextPage } from "next";
import Link from "next/link";
import { useRouter } from "next/router";

import Layout from "../components/layout";
import { allAirports } from "../models/airport";
import { AirPortResponse} from "../types/airport";


const Page: NextPage<AirPortResponse> = (props) => {
  const router = useRouter();
  const { page = 1 } = router.query;
  const { data: airports, currentPage, totalPages } = props;

  const searchItem = (e) => {
    e.preventDefault();
    const search = e.target.value;
    router.push(`/?searchTerm=${search}`);
  }

    return (
      <Layout>
        <h1 className="text-2xl font-bold">Code Challenge: Airports</h1>
        <h2 className="mt-10 text-xl font-semibold">All Airports</h2>
        <input className="p-2 border-1 m-2" placeholder="search airports" onChange={searchItem}/>
        <div>
          {
            airports?.map((airport) => (
              <Link
                className="flex items-center p-5 mt-5 text-gray-800 border border-gray-200 rounded-lg shadow-sm hover:border-blue-600 focus:border-blue-600 focus:ring focus:ring-blue-200 focus:outline-none"
                href={`/airports/${airport.iata.toLowerCase()}`}
                key={airport.iata}
              >
                <span>
                  {airport.name}, {airport.city}
                </span>
                <span className="ml-auto text-gray-500">{airport.country}</span>
              </Link>
            ))
          }
          <div className="flex my-6 p-6 justify-between">
            <Link href={"/?page="+ ((+page - 1) || 1)}>
              prev                                                                            
            </Link>
            <p>
              Page: {currentPage} / {totalPages}
            </p>
            <Link href={"/?page="+ (+page + 1)}>
              next                                                                            
            </Link>
          </div>
        </div>
      </Layout>
    );
  };


  export const getServerSideProps: GetServerSideProps = async ({ query }) => {
    const { page, searchTerm } = query;
    const {data, currentPage, totalPages} = await allAirports({
      page: Number(page) || 1,
      take: 10,
      searchTerm: searchTerm || "",
    });
  
    return {
      props: {
        data,
        currentPage,
        totalPages
      },
    };
  };

export default Page;
