import axios from 'axios';
import { AuthContext } from 'HOC/WithAuth';
import React from 'react';
import { useNavigate } from 'react-router';
import { useInput, useInputSession } from './useInput';

const usePost = (url: string, postData: any, path?: any) => {
  const navigate = useNavigate();
  const { setAuth } = React.useContext(AuthContext);
  const [value, setValue] = React.useState<any>('');
  const [loading, setLoading] = React.useState<boolean>(false);
  const [error, setError] = React.useState<string>('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    try {
      const result = await axios.post(url, {
        ...postData
      });
      console.log('response', result.data);
      if (result.data.success === 'Successfully logged in') {
        setAuth(result.data.tokens.access.token);
      }
      setValue(result.data);
      setLoading(false);
      navigate(path);
    } catch (err: any) {
      console.log('err===>', err.message);
      setError(err.message);
      setLoading(false);
    }
  };
  return {
    value,
    loading,
    error,
    handleSubmit
  };
};

export default usePost;
