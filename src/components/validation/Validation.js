import * as yup from "yup";
export const signUpSchema = yup.object({
  firstName: yup.string().required("First Name is required"),
  lastName: yup.string().required("Last Name is required"),
  email: yup
    .string()
    .email("Invalid email format")
    .required("Email is required"),
  password: yup
    .string()
    .required("Password is required")
    .min(6, "Password must be at least 6 characters"),
  // role: yup.string().default("parent"),
  // id: yup
  //   .string()
  //   .required("Parent id is required")
  //   .min(8, "ID must be at least 8 characters"),
});
export const signInSchema = yup.object({
  email: yup
    .string()
    .email("Invalid email format")
    .required("Email is required"),
  password: yup
    .string()
    .required("Password is required")
    .min(6, "Password must be at least 6 characters"),
});

export const editStudentSchema = yup.object({
  name: yup.string().required("Student name is required"),
  birth_date: yup.string().required("Date of birth is required"),
  medicines: yup.string().required("Medicines are required"),
  phone: yup.string().required("Phone number is required"),
  pathological_case: yup.string().required("Pathological case required"),
  parent_id: yup.string().required("Parent ID is required"),
  class_id: yup.number().required("Class is required"),
});

export const addStudentSchema = yup.object({
  name: yup.string().required("Student name is required"),
  st_id: yup
    .string()
    .required("Student ID is required")
    .min(9, "ID must be at least 9 characters"),
  birth_date: yup.string().required("Date of birth is required"),
  medicines: yup.string().required("Medicines are required"),
  phone: yup.string().required("Phone number is required"),
  pathological_case: yup.string().required("Pathological case required"),
  parent_id: yup.string().required("Parent ID is required"),
  class_id: yup.number().required("Class is required"),
});
