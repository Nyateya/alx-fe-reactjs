import axios from "axios";
import BASE_URL from "./config";

// Fetch a single user's data
export const fetchUserData = async (username) => {
  try {
    const response = await axios.get(`${BASE_URL}/users/${username}`);
    return response.data;
  } catch (error) {
    console.error("User not found", error);
    throw error;
  }
};

// Search users based on location and minimum repos
export const searchUsers = async ({ location = "", minRepos = 0 }) => {
  try {
    let query = "";

    if (location) {
      query += `location:${location}`;
    }

    if (minRepos) {
      query += `${query ? "+" : ""}repos:>${minRepos}`;
    }

    if (!query) {
      throw new Error("No search criteria provided");
    }

    const response = await axios.get(`${BASE_URL}/search/users?q=${query}`);
    const users = response.data.items;

    if (!users.length) {
      throw new Error("No users found");
    }

    const userDetails = await axios.get(`${BASE_URL}/users/${users[0].login}`);
    return userDetails.data;
  } catch (error) {
    console.error("Search failed", error);
    throw error;
  }
};
export const onSearch = (username) => {
  console.log(`Searching for user: ${username}`);
};