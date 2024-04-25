export const fetchMovies = async () => {
    const res = await fetch(
        "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
        {
            headers: {
                Authorization:
                    "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0YmNmZTdiMTdiYTVmYWQzOWNhMWQ3ZWY5NzY2NmE3MCIsInN1YiI6IjY2Mjg4ZmZjMzc4MDYyMDE2NWRhNDBiOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.UArvznR8er9-ptDTWh6AKAqWfprUb8ViQJunuG80NxI"
            },
        }
    );
    const data = await res.json();
    console.log(data, "data");

    return data;
}

export const fetchTvShows = async () => {
    const res = await fetch(
        "https://api.themoviedb.org/3/tv/popular?language=en-US&page=1",
        {
            headers: {
                Authorization:
                    "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0YmNmZTdiMTdiYTVmYWQzOWNhMWQ3ZWY5NzY2NmE3MCIsInN1YiI6IjY2Mjg4ZmZjMzc4MDYyMDE2NWRhNDBiOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.UArvznR8er9-ptDTWh6AKAqWfprUb8ViQJunuG80NxI"
            },
        }
    );
    const data = await res.json();
    console.log(data, "data");

    return data;
}