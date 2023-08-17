import axios from "axios";

const prompt = "Get all the employees who were hired after 2005?";

try {
  const response = await axios.get(
    `http://localhost:5000/api/query?prompt=${encodeURIComponent(prompt)}`
  );

  const data = response.data;

  console.log(data);

} catch (error) {
  console.log(error);
}