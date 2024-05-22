import useNowPlayingMovies from '../hooks/useNowPlayingMovies'
import Header from './Header'
import MainContainer from './MainContainer'



const Browse = () => {

  useNowPlayingMovies()

  return (
    <div>
     <Header />
     <MainContainer />
    </div>
  )
}

export default Browse
