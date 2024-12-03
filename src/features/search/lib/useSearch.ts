import { useSearchQuery } from '@/features/search/api';
import { useState } from 'react';

import { useDebounce } from '@/shared/lib/hooks/useDebounce';

export const useSearch = () => {
  const [search, setSearch] = useState('');

  const debouncedSearch = useDebounce(search, 500);
  const { data } = useSearchQuery({ search: debouncedSearch });

  return { data, search, setSearch };
};
