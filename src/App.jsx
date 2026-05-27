import Banner from './components/Banner'
import "./App.css"
import HouseList from './components/HouseList'

function App() {
  return (
    <>
    {/* <Banner headerText="Providing houses all over the world"/> */}
    <Banner>
      <div>Providing houses all over the world</div>
    </Banner>
    <HouseList/>
    </>
  )
}

export default App
