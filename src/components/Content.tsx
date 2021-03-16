import {MovieCard} from '../components/MovieCard'

interface MovieInfos{
  poster:string;
  title:string;
  runtime:string;
  rating:string

}

export function Content({poster,title,runtime,rating}:MovieInfos) {
  // Complete aqui

  return (
    <>

    <MovieCard
    poster={poster}
    title={title}
    runtime={runtime}
    rating={rating}
    
    />



    </>
  )
}