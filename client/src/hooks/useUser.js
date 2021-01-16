import React, { useEffect, useState } from 'react';
import { GetUser } from '../api/Auth';
const useUser = () => {
  const [user, setUser] = useState();

  useEffect(() => {
    async function fetchUser() {
      const res = await GetUser();
      console.log('result from GetUser(): ', res);
      setUser(res);
    }

    fetchUser();
  }, []);
  return [user];
};

export default useUser;
