import Header from "../components/Header"
import Sidebar from "../components/Sidebar"

const Home = () => {
  return (
    <div className="flex">
        <Sidebar />
        <Header />
    </div>
  )
}

export default Home