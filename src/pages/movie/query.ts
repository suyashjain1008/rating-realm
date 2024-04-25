export const fetchMovieDetails = async (movieId: string) => {
    const res = await fetch(
        `https://api.themoviedb.org/3/movie/${movieId}?language=en-US`,
        {
            headers: {
                Authorization:
                    "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0YmNmZTdiMTdiYTVmYWQzOWNhMWQ3ZWY5NzY2NmE3MCIsInN1YiI6IjY2Mjg4ZmZjMzc4MDYyMDE2NWRhNDBiOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.UArvznR8er9-ptDTWh6AKAqWfprUb8ViQJunuG80NxI"
            },
        }
    );
    // const data = await res.json();
    // console.log(data, "data");

    return res.json();
}