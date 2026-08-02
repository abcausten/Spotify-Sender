export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const query = searchParams.get("q");

  const tokenRes = await fetch("https://accounts.spotify.com/api/token", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      Authorization: "Basic " + btoa(`${process.env.SPOTIFY_CLIENT_ID}:${process.env.SPOTIFY_CLIENT_SECRET}`),
    },
    body: "grant_type=client_credentials",
  });
 const tokenData = await tokenRes.json();
const { access_token } = tokenData;
    console.log("Token response:", tokenData);
  
     if (!tokenData.access_token) {
    return Response.json({ error: "Failed to get token" }, { status: 401 });
  }

  const searchRes = await fetch(
    `https://api.spotify.com/v1/search?q=${query}&type=track&limit=10`,
    { headers: { Authorization: `Bearer ${access_token}` } }
  );
  const data = await searchRes.json();
    console.log("Search response:", data);

  if (!data.tracks) {
    return Response.json({ error: "No tracks found" }, { status: 404 });
  }

  return Response.json(data.tracks.items);
}