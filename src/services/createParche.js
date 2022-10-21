const ENDPOINT = "https://parchapp.herokuapp.com/api/parches";

export default function createParche({ parche, token }) {
  return fetch(ENDPOINT, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      city: parche.city,
      place: parche.place,
      category: parche.category,
      description: parche.description,
      media: parche.media,
    }),
  }).then((res) => {
    if (!res.ok) {
      throw new Error("Response is no OK");
    }
    return res.json();
  });
}
