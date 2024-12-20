import { generatePathForOption } from '@/features/search/model/generatePathForOption';
import { highlightMatch } from '@/features/search/model/highlightMatch';
import { useSearch } from '@/features/search/model/useSearch';
import clsx from 'clsx';
import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';

import { Autocomplete, TextField } from '@mui/material';

import classes from './Search.module.scss';

interface SearchProps {
  className?: string;
}

export const Search = ({ className }: SearchProps) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const { data, search, setSearch } = useSearch();
  const navigate = useNavigate();

  return (
    <Autocomplete
      className={clsx(classes.search, className)}
      filterOptions={(x) => x}
      disablePortal
      inputValue={search}
      onInputChange={(_, value, reason) => {
        if (reason === 'input') {
          setSearch(value);
        }
      }}
      onChange={(_, newValue) => {
        if (newValue) {
          navigate(generatePathForOption(newValue));
          setSearch('');

          if (inputRef.current) {
            inputRef.current.blur();
          }
        }
      }}
      noOptionsText='Ничего не найдено'
      options={data ?? []}
      popupIcon={false}
      getOptionLabel={(option) => option.title}
      getOptionKey={(option) => `${option.id}-${option.title}`}
      renderOption={(props, option) => {
        const { key, ...restOptions } = props;
        return (
          <li key={key} {...restOptions}>
            {highlightMatch(option.title, search)}
          </li>
        );
      }}
      renderInput={(params) => (
        <TextField
          {...params}
          label='Поиск по всем справочникам'
          size='small'
          inputRef={inputRef}
        />
      )}
    />
  );
};
