import { useLazyGetByIdQuery } from '@/entities/disease';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

type IParams = {
  id: string;
};

export const useDiseaseFetch = () => {
  const { id } = useParams<IParams>();

  const [trigger, result] = useLazyGetByIdQuery();

  useEffect(() => {
    if (id) {
      trigger(Number(id));
    }
  }, [id]);

  return result;
};
