import {
  FormControl,
  IconButton,
  Input,
  InputAdornment,
  InputLabel,
  OutlinedInput,
} from "@mui/material";

export default function OutlinedField({
  id,
  label,
  value,
  onChange,
  type = "text",
  fullWidth,
  icon,
}) {
  return (
    <FormControl fullWidth={fullWidth}>
      <InputLabel htmlFor="standard-adornment-password">{label}</InputLabel>
      <OutlinedInput
        id={id}
        type={type}
        value={value}
        onChange={onChange}
        label={label}
        endAdornment={
          icon && (
            <InputAdornment position="end">
              <IconButton>{icon}</IconButton>
            </InputAdornment>
          )
        }
      />
    </FormControl>
  );
}
