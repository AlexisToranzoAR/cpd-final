import Button from "@mui/material/Button";

export default function MyButton({
  color,
  disabled,
  endIcon,
  fullWidth,
  id,
  children,
  onClick,
  size,
  startIcon,
  variant,
}) {
  return (
    <Button
      {...{
        color,
        disabled,
        endIcon,
        fullWidth,
        id,
        onClick,
        size,
        startIcon,
        variant,
      }}
    >
      {children}
    </Button>
  );
}
