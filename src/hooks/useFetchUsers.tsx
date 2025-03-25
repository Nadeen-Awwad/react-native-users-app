import { useState, useEffect } from 'react';
import { User } from '../models/User';

const useFetchUsers = (url: string) => {
  const [data, setData] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await fetch(url);
      console.log('User dataaaaaa:', response);  // تحقق من أن البيانات تأتي بشكل صحيح

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const result: User[] = await response.json();
      console.log(result);
      setData(result);
    } catch (error: any) {
      setError(error.message); 
      console.error("Fetching users failed:", error); 
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [url]);

  const refetch = () => {
    setError(null); 
    fetchData();
  };

  return { data, loading, error, refetch };
};

export default useFetchUsers;
