import TextField from '@mui/material/TextField';
import { Controller } from 'react-hook-form';

export default function CustomTextField({ props }: { props: any }) {
  return (
    <Controller
      name={props.label}
      control={props.control}
      rules={{ required: true }}
      render={({ field }) => (
        <TextField
          {...field}
          variant='outlined'
          type={props.type ? props.type : 'text'}
          label={props.label.charAt(0).toUpperCase() + props.label.slice(1)}
          error={!!props.errors[props.label]?.message}
          helperText={
            props.errors[props.label] ? props.errors[props.label]?.message : ''
          }
          size='small'
          fullWidth
          required
        />
      )}
    />
  );
}
