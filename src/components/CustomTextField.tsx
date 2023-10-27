import TextField from '@mui/material/TextField';
import { Controller } from 'react-hook-form';

export default function CustomTextField({ props }: { props: any }) {
  return (
    <Controller
      name='name'
      control={props.control}
      render={({ field }) => (
        <TextField
          {...field}
          label='Name'
          variant='outlined'
          type='text'
          error={!!props.errors[props.label]?.message}
          helperText={props.name ? props.name?.message : ''}
        />
      )}
    />
  );
}
