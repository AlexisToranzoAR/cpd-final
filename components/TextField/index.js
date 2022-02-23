import TextField from "@mui/material/TextField";

export default function Input({
  color,
  disabled,
  formik,
  fullWidth,
  id,
  label,
  onChange,
  placeholder,
  size,
  style,
  type,
  value,
  variant,
}) {
  return (
    <>
      {formik ? (
        <TextField
          color={color}
          disabled={disabled}
          error={!!formik?.errors[id]}
          fullWidth={fullWidth}
          id={id}
          label={label}
          onChange={formik?.handleChange}
          placeholder={placeholder}
          size={size}
          style={style}
          type={type}
          value={formik?.values[id]}
          variant={variant}
        />
      ) : (
        <TextField
          color={color}
          disabled={disabled}
          fullWidth={fullWidth}
          id={id}
          label={label}
          onChange={onChange}
          placeholder={placeholder}
          size={size}
          style={style}
          type={type}
          value={value}
          variant={variant}
        />
      )}
    </>
  );
}
