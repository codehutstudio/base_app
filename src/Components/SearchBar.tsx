import { IconButton } from '@mui/material';
import {TextField, InputAdornment} from '@mui/material';
import { ChangeEvent } from 'react';
import Icons from './Icons';

export default function SearchBar({value, onChange, clear, placeholder}: any) {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => onChange(e.target.value);
  return (
    <TextField
      size="small"
      value={value}
      onChange={handleChange}
      placeholder={placeholder ? placeholder : 'Search...'}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <Icons icon="search" />
          </InputAdornment>
        ),
        endAdornment: (
          <InputAdornment position="end">
            {value != '' && (
              <IconButton onClick={clear}>
                <Icons icon="clear" />
              </IconButton>
            )}
          </InputAdornment>
        ),
      }}
    />
  );
}