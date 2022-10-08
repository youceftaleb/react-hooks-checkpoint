export const MovieCard = ({movie}) => {
    return (
        <div className="card bg-dark text-light border-info text-center" style={{height:600}}>
            <div className="card-body">
                <img src={movie.posterURL} alt={movie.title} style={{ maxWidth: '70%' }} />
            </div>
            <div className="card-footer border-info">
                <h2>{movie.title}</h2>
                <h6>{movie.rating}</h6>
                <p>{movie.desc}</p>
            </div>
        </div>
    )
}