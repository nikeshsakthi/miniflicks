import Footer from "./components/Footer"
import Header from "./components/Header"
import HomeCarousel from "./components/HomeCarousel"
import RoomBookingCard from "./components/RoomBooking"
import RoomsData from "./components/RoomsData"
// import BasicDatePicker from "./components/date"

function App() {
  return (
    <div>
      <Header />
      <HomeCarousel/>
      <RoomsData/>
      <RoomBookingCard/>
      {/* <BasicDatePicker/> */}
      <Footer/>

    </div>
  )
}

export default App


