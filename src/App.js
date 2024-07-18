import './App.css'
import LeftNav from './components/LeftNav'
import TopNav from './components/TopNav'
import Home from './pages/Home'

function App() {
    return (
        <>
            <TopNav />
            <div className="leftNav__Home">
                <LeftNav />
                <Home />
            </div>
        </>
    )
}

export default App
