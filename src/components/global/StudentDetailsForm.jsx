import { InputLabel, MenuItem, Select } from "@mui/material";
import Button from "@mui/joy/Button";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";

export default function StudentDetailsForm({ formik, classes, loading }) {
  return (
    <FormControl component={"form"} onSubmit={formik.handleSubmit}>
      <TextField
        margin="normal"
        label="Name"
        variant="filled"
        name="name"
        required
        onChange={formik.handleChange}
        value={formik.values.name}
        onBlur={formik.handleBlur}
        error={formik.touched.name && Boolean(formik.errors.name)}
        helperText={formik.touched.name && formik.errors.name}
      />
      {formik.values.addSt ? (
        <TextField
          margin="normal"
          label="Id"
          name="st_id"
          required
          variant="filled"
          onChange={formik.handleChange}
          value={formik.values.st_id}
          onBlur={formik.handleBlur}
          error={formik.touched.st_id && Boolean(formik.errors.st_id)}
          helperText={formik.touched.st_id && formik.errors.st_id}
        />
      ) : null}
      <TextField
        margin="normal"
        label="Date of birth"
        name="birth_date"
        InputLabelProps={{ shrink: true }}
        variant="filled"
        type="date"
        required
        onChange={formik.handleChange}
        value={formik.values.birth_date}
        onBlur={formik.handleBlur}
        error={formik.touched.birth_date && Boolean(formik.errors.birth_date)}
        helperText={formik.touched.birth_date && formik.errors.birth_date}
      />
      <TextField
        margin="normal"
        label="Pathological case"
        name="pathological_case"
        variant="filled"
        required
        onChange={formik.handleChange}
        value={formik.values.pathological_case}
        onBlur={formik.handleBlur}
        error={
          formik.touched.pathological_case &&
          Boolean(formik.errors.pathological_case)
        }
        helperText={
          formik.touched.pathological_case && formik.errors.pathological_case
        }
      />
      <TextField
        margin="normal"
        label="Phone"
        name="phone"
        required
        variant="filled"
        onChange={formik.handleChange}
        value={formik.values.phone}
        onBlur={formik.handleBlur}
        error={formik.touched.phone && formik.errors.phone}
        helperText={formik.touched.phone && formik.errors.phone}
      />
      <TextField
        margin="normal"
        label="Address"
        name="address"
        variant="filled"
        size="midum"
        onChange={formik.handleChange}
        value={formik.values.address}
        onBlur={formik.handleBlur}
        error={formik.touched.address && Boolean(formik.errors.address)}
        helperText={formik.touched.address && formik.errors.address}
      />
      <TextField
        margin="normal"
        label="Medicines"
        name="medicines"
        required
        variant="filled"
        onChange={formik.handleChange}
        value={formik.values.medicines}
        onBlur={formik.handleBlur}
        error={formik.touched.medicines && Boolean(formik.errors.medicines)}
        helperText={formik.touched.medicines && formik.errors.medicines}
      />
      <TextField
        margin="normal"
        label="Parent Id"
        name="parent_id"
        required
        variant="filled"
        onChange={formik.handleChange}
        value={formik.values.parent_id}
        onBlur={formik.handleBlur}
        error={formik.touched.medicines && Boolean(formik.errors.medicines)}
        helperText={formik.touched.parent_id && formik.errors.parent_id}
      />
      {classes[0] ? (
        <FormControl sx={{ mt: 2 }}>
          <InputLabel id="class-select-label">Class</InputLabel>
          <Select
            labelId="class-select-label"
            id="class-select"
            name="class_id"
            onChange={formik.handleChange}
            value={formik.values.class_id}
            onBlur={formik.handleBlur}
            error={formik.touched.class_id && Boolean(formik.errors.class_id)}
            helperText={formik.touched.class_id && formik.errors.class_id}
            label="Class"
          >
            {classes.map(({ class_id: classId, name }) => (
              <MenuItem key={classId} value={classId}>
                {name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      ) : (
        <></>
      )}
      <Button sx={{ mt: "1rem", py: "0.7rem" }} type="submit" variant={"solid"}>
        Submit
      </Button>
    </FormControl>
  );
}
