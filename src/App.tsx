import Card from "./Card"
import reactPic from './assets/react.svg'
function App() {
  const images = [
    "https://images.unsplash.com/photo-1706886271581-95c9af2bfc75?q=80&w=1933&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1718078814193-1dce9928dd7a?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://plus.unsplash.com/premium_photo-1711065405039-6216f2f2c7d9?q=80&w=2129&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1666073232621-88604f8dcf91?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/LeBron_James_%2851959977144%29_%28cropped2%29.jpg/800px-LeBron_James_%2851959977144%29_%28cropped2%29.jpg"
  ]
  return (
    <section className="h-screen w-screen grid grid-cols-10 bg-zinc-900 p-6 gap-3 grid-rows-10">
      <div className="h-full w-full col-span-5 row-span-5">
        <Card height="100%" width="100%">
          <div className="h-full w-full">
            <img src={images[0]} alt="react" className="h-full w-full" />
          </div>
        </Card>
      </div>

      <div className="h-full w-full col-span-3  row-span-5">
        <Card height="100%" width="100%">
          <div className="h-full w-full">
            <img src={images[1]} alt="react" className="h-full w-full" />
          </div>
        </Card>
      </div>

      <div className="h-full w-full col-span-2  row-span-5">
        <Card height="100%" width="100%">
          <div className="h-full w-full">
            <img src={images[2]} alt="react" className="h-full w-full" />
          </div>
        </Card>
      </div>

      <div className="h-full w-full col-span-4 row-span-10">
        <Card height="100%" width="100%">
          <div className="h-full w-full">
            <img src={images[3]} alt="react" className="h-full w-full" />
          </div>
        </Card>
      </div>

      <div className="h-full w-full col-span-6  row-span-10">
        <Card height="100%" width="100%">
          <div className="h-full w-full">
            <img src={images[4]} alt="react" className="h-full w-full" />
          </div>
        </Card>
      </div>
      
    </section>
  )
}

export default App
