import React, { useState } from "react";
import axios from "axios";

const Search = () => {
  const [username, setUsername] = useState("");
  const [location, setLocation] = useState("");
  const [minRepos, setMinRepos] = useState("");
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const buildQuery = () => {
    let query = "";

    if (username) query += `${username}`;
    if (location) query += `+location:${location}`;
    if (minRepos) query += `+repos:>${minRepos}`;

    return query;
  };

  const fetchUsers = async (isNewSearch = false) => {
    const query = buildQuery();

    if (!query) {
      setError("Please enter at least one search criteria.");
      return;
    }

    setLoading(true);
    setError("");

    try {
      const currentPage = isNewSearch ? 1 : page;
      const res = await axios.get(
        `https://api.github.com/search/users?q=${query}&page=${currentPage}&per_page=5`
      );

      if (res.data.items.length === 0) {
        setError("No users found.");
      }

      const usersData = await Promise.all(
        res.data.items.map(async (user) => {
          const details = await axios.get(
            `https://api.github.com/users/${user.login}`
          );
          return details.data;
        })
      );

      setUsers((prev) => (isNewSearch ? usersData : [...prev, ...usersData]));
      setPage(currentPage + 1);
    } catch (err) {
      setError("Something went wrong while searching.");
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setUsers([]);
    setPage(1);
    fetchUsers(true);
  };

  return (
    <div className="search-container max-w-xl mx-auto p-4">
      <h1 className="text-2xl font-bold text-center text-gray-800 mb-4">
        GitHub Advanced Search
      </h1>

      <form onSubmit={handleSubmit} className="mb-4 flex flex-col gap-3">
        <input
          type="text"
          value={username}
          placeholder="Username (optional)"
          onChange={(e) => setUsername(e.target.value)}
          className="border p-2 rounded"
        />
        <input
          type="text"
          value={location}
          placeholder="Location (e.g., Kenya)"
          onChange={(e) => setLocation(e.target.value)}
          className="border p-2 rounded"
        />
        <input
          type="number"
          value={minRepos}
          placeholder="Minimum Repos (e.g., 10)"
          onChange={(e) => setMinRepos(e.target.value)}
          className="border p-2 rounded"
        />
        <button
          type="submit"
          className="bg-blue-600 text-white p-2 rounded hover:bg-blue-700"
        >
          Search
        </button>
      </form>

      {loading && <p className="text-center text-blue-500">Loading...</p>}
      {error && <p className="text-center text-red-500">{error}</p>}

      <div className="grid gap-4">
        {users.map((user) => (
          <div
            key={user.id}
            className="border p-4 rounded shadow-md flex flex-col items-center text-center"
          >
            <img
              src={user.avatar_url}
              alt={user.login}
              width="80"
              className="rounded-full mb-2"
            />
            <h2 className="text-lg font-semibold">{user.name || user.login}</h2>
            <p>{user.location || "No location provided"}</p>
            <p>Public Repos: {user.public_repos}</p>
            <p>Followers: {user.followers}</p>
            <a
              href={user.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 mt-2"
            >
              View GitHub Profile
            </a>
          </div>
        ))}
      </div>

      {users.length > 0 && !loading && (
        <div className="text-center mt-4">
          <button
            onClick={() => fetchUsers()}
            className="bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-700"
          >
            Load More
          </button>
        </div>
      )}
    </div>
  );
};

export default Search;
