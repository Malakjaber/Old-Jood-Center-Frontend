import Button from "@mui/material/Button";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import { useFormik } from "formik";

export default function EditStudentPageLayout() {
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
      console.log(values);
    },
  });
  return (
    <div className="flex justify-around p-16">
      <div className="flex flex-col min-w-[25rem]">
        <h1 className="text-4xl font-Itim mb-14">EDit Student Information</h1>
        <FormControl
          component={"form"}
          noValidate
          onSubmit={formik.handleSubmit}
        >
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
      </div>
      <div className="flex flex-col">
        <img
          className="max-h-[700px]"
          src="/assets/student/student.png"
          alt=""
        />
      </div>
    </div>
  );
}
