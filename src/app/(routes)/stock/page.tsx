"use client"
import Banner from "@/app/partials/banner/banner"
import Footer from "@/app/partials/footer/footer"
import Indices from "@/app/partials/indices/indices"
import PieChart from "@/app/partials/pieChart/pieChart"
import Stock from "@/app/partials/stock/stock"
import StockBanner from "@/app/partials/stockBanner/stockBanner"

export default function Home() {
  return (<>
  <Banner/>
  <StockBanner/>
  <Stock/>
  <PieChart/>
  <Indices/>
  <Footer/>
  </>
  )
}