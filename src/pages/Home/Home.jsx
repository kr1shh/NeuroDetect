import { Link } from "react-router-dom"
import hero_bg from "../../assets/images/hero_bg.jpg"
import "./Home.scss"

const Home = () => {
  return (
    <>
        <div className="hero_container">
            <div className="hero_content">
                <h1>See Beyond the Surface</h1>
                <p>Neuro Detect is dedicated to providing early detection tools for autism, empowering families and individuals with timely information and resources. Discover a new path towards understanding and support with our innovative detection technology.</p>
                <Link to="/analyze">
                    <button>
                        Get Started
                    </button>
                </Link>
            </div>

            <img src={ hero_bg } alt="Hero Background" />
        </div>
    </>
  )
}

export default Home