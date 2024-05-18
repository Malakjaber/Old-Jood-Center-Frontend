import {
  Autocomplete,
  Button,
  FormControl,
  FormHelperText,
  FormLabel,
  Grid,
  Input,
} from "@mui/joy";
import { useFormik } from "formik";

export default function EditClassForm({ editClass, classData, teachers }) {
  const formik = useFormik({
    initialValues: {
      className: classData?.className || "",
      selectedTeacher: classData?.teacherName || "",
    },
    onSubmit: (values) => {
      const selectedTeacher = teachers.find(
        (teacher) => teacher.username === values.selectedTeacher
      );
      const teacherId = selectedTeacher ? selectedTeacher.id : null;
      editClass(classData.class_id, classData.className, teacherId);
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <Grid container columns={1} rowGap={3}>
        <Grid xs={12}>
          <FormControl
            error={formik.touched.className && formik.errors.className}
          >
            <FormLabel>Class Name</FormLabel>
            <Input
              size="lg"
              placeholder="Class Name"
              sx={{ width: 400 }}
              {...formik.getFieldProps("className")}
              required
            />
            {formik.touched.className && formik.errors.className ? (
              <FormHelperText>{formik.errors.className}.</FormHelperText>
            ) : null}
          </FormControl>
        </Grid>
        <Grid xs={12}>
          <FormControl>
            <FormLabel>Select Teacher</FormLabel>
            <Autocomplete
              size="lg"
              placeholder="Select Teacher"
              value={
                teachers.find(
                  (teacher) =>
                    teacher.username === formik.values.selectedTeacher
                ) || null
              }
              onChange={(event, newValue) => {
                formik.setFieldValue(
                  "selectedTeacher",
                  newValue?.username || ""
                );
              }}
              inputValue={formik.values.selectedTeacher}
              onInputChange={(event, newInputValue) => {
                formik.setFieldValue("selectedTeacher", newInputValue);
              }}
              getOptionLabel={(option) => option.username || ""}
              options={teachers}
              sx={{ width: 400 }}
              required
            />
          </FormControl>
        </Grid>
        <Grid xs={12}>
          <Button size="lg" type="submit">
            Submit
          </Button>
        </Grid>
      </Grid>
    </form>
  );
}
