import HeroBikeViewer from "./components/HeroBikeViewer";

function App(){
  return(
    <main className="app">
      <section className="hero">
        <div className="hero-copy">
          <p className="hero-label">Motorcycle Tracker</p>
          
          <h1>
            FIND YOUR
            <br />
            Motorcycle
          </h1>

            <p>React homepage test for Motorcycle Tracker</p>
        </div>

        <HeroBikeViewer/>
      </section>
    </main>
  )
}

export default App;