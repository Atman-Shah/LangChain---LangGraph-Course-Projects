const apiKey = process.env.GOOGLE_API_KEY;

if (!apiKey) {
  console.error("GOOGLE_API_KEY is not set in .env file");
} else {
  console.log("API Key loaded successfully");
}