// Asynchronous function to fetch a random cat GIF
async function fetchCatGif() {
  try {
    // Fetching the cat GIF from the API
    const response = await fetch(
      "http://thecatapi.com/api/images/get?format=src&type=gif"
    );

    // Checking if the response is successful
    if (!response.ok) {
      throw new Error("Failed to fetch cat GIF");
    }

    // Extracting the URL of the fetched cat GIF
    const imageUrl = response.url;

    // Logging the URL of the fetched cat GIF
    console.log(imageUrl);
  } catch (error) {
    // Handling any errors that occur during the fetch process
    console.error("Error fetching cat GIF:", error.message);
  }
}

// Calling the function to fetch a random cat GIF
fetchCatGif();

//Faulty dropbox url: http://thecatapi.com/api/images/get?format=src&type=gif
//Confirmed on tutorial REPEAT AJAX by Zahra, updated this url with the one used on that cohort (mine_types)
