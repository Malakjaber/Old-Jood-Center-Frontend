import Button from "@mui/material/Button";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import { useFormik } from "formik";

export default function StudentDetailsForm({ onSubmit, defaults }) {
  const formik = useFormik({
    initialValues: {
      name: "asd",
      id: "123",
      dateOfBirth: "",
      pathologicalCase: "ssss",
      phone: "",
      address: "",
      medicines: "",
      parentId: "",
    },
    //     validationSchema: signUpSchema,
    onSubmit: async (values) => {
      // const body = {
      //   username: values.firstName + " " + values.lastName,
      //   email: values.email,
      //   password: values.password,
      //   role: "teacher",
      // };
      onSubmit(values);
    },
  });
  return (
    <FormControl component={"form"} noValidate onSubmit={formik.handleSubmit}>
      <TextField
        margin="normal"
        label="Name"
        variant="filled"
        name="name"
        required
        // defaultValue={"helloww"}
        onChange={formik.handleChange}
        value={formik.values.name}
        onBlur={formik.handleBlur}
        // error={formik.touched.firstName && formik.errors.firstName}
        // helperText={formik.touched.firstName && formik.errors.firstName}
      />
      <TextField
        margin="normal"
        label="Id"
        name="id"
        required
        variant="filled"
        // defaultValue={2342}
        onChange={formik.handleChange}
        value={formik.values.id}
        onBlur={formik.handleBlur}
        // error={formik.touched.firstName && formik.errors.firstName}
        // helperText={formik.touched.firstName && formik.errors.firstName}
      />
      <TextField
        margin="normal"
        label="Date of birth"
        name="dateOfBirth"
        InputLabelProps={{ shrink: true }}
        variant="filled"
        type="date"
        required
        onChange={formik.handleChange}
        value={formik.values.dateOfBirth}
        onBlur={formik.handleBlur}
        // error={formik.touched.firstName && formik.errors.firstName}
        // helperText={formik.touched.firstName && formik.errors.firstName}

        // defaultValue={}
      />
      <TextField
        margin="normal"
        label="Pathological case"
        name={"pathologicalCase"}
        variant="filled"
        required
        onChange={formik.handleChange}
        value={formik.values.pathologicalCase}
        onBlur={formik.handleBlur}
        // error={formik.touched.firstName && formik.errors.firstName}
        // helperText={formik.touched.firstName && formik.errors.firstName}
        // defaultValue={}
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
        // error={formik.touched.firstName && formik.errors.firstName}
        // helperText={formik.touched.firstName && formik.errors.firstName}
        // defaultValue={}
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
        // error={formik.touched.firstName && formik.errors.firstName}
        // helperText={formik.touched.firstName && formik.errors.firstName}
        // defaultValue={}
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
        // error={formik.touched.firstName && formik.errors.firstName}
        // helperText={formik.touched.firstName && formik.errors.firstName}
        // defaultValue={}
      />
      <TextField
        margin="normal"
        label="Parent Id"
        name="parentId"
        required
        variant="filled"
        onChange={formik.handleChange}
        value={formik.values.parentId}
        onBlur={formik.handleBlur}
        // error={formik.touched.firstName && formik.errors.firstName}
        // helperText={formik.touched.firstName && formik.errors.firstName}
        // defaultValue={}
      />
      <Button sx={{ mt: "1rem" }} type="submit" variant="contained">
        Submit
      </Button>
    </FormControl>
  );
}
