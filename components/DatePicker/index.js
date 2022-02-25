import TextField from "@mui/material/TextField";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DatePicker from "@mui/lab/DatePicker";
import { FormControl } from "@mui/material";

export default function MyDatePicker({
  label,
  value,
  onChange,
  minDate,
  maxDate,
  views = ["year", "month", "day"],
  fullWidth,
}) {
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <FormControl fullWidth={fullWidth}>
        <DatePicker
          views={views}
          label={label}
          minDate={minDate}
          maxDate={maxDate}
          value={value}
          onChange={onChange}
          renderInput={(params) => <TextField {...params} />}
        />
      </FormControl>
    </LocalizationProvider>
  );
}
