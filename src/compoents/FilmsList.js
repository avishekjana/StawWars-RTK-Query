import { useGetFilmsQuery } from '../reduxStore/services/starWarsApi'

const FilmsList = () => {

  const responseFromQuery = useGetFilmsQuery()
  console.log(responseFromQuery)
  const { data, isLoading, error } = responseFromQuery;

  return (
    <div>
      <h3>Star Wars Movies</h3>
      {error ? (
        <>Oh no, there was an error</>
      ) : isLoading ? (
        <>Loading...</>
      ) : data ? (
        <div>
          {data.results.map(movie => (
            <section item key={movie.episode_id} xs={4}>
              <h2>{movie.title}</h2>
              <p>{movie.opening_crawl}</p>
            </section>
          ))}
        </div>        
      ) : null}
  </div>
  )
}

export default FilmsList;