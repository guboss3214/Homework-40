import axios from 'axios';
import { useState, useEffect } from 'react';

function ServerDataComponent() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(
    () => {
      const fetchData = async () => {
        try {
          const res = await axios.get(
            'https://jsonplaceholder.typicode.com/posts'
          );
          setData(res.data);
          setLoading(false);
        } catch (error) {
          setError(error.message);
          setLoading(false);
        }
      };
      fetchData();
    },
    setData,
    setLoading,
    setError
  );

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h1>Posts:</h1>
      <ul>
        {data.map((post) => (
          <li key={post.id}>
            <strong>{post.title}</strong>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ServerDataComponent;
