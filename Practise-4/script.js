let movieTitle = document.getElementById("titleInput");
let review = document.getElementById("reviewTextarea");
let reviewContainer = document.getElementById("reviewsContainer");

function showReview() {
    let finalTitle = document.createElement("p");
    let finalReview = document.createElement("p");

    let userMovieTitle = movieTitle.value;
    let userMovieReview = review.value;

    finalTitle.textContent = "Movie Title:" + userMovieTitle;
    finalReview.textContent = userMovieReview;

    reviewContainer.appendChild(finalTitle);
    reviewContainer.appendChild(finalReview);

    movieTitle.value = null;
    review.value = null;
}
