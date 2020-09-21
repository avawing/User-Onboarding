import * as yup from 'yup'
import "yup-phone"

const formSchema = yup.object().shape({
  email: yup
    .string()
    .email("Email must be valid")
    .required("Email is required"),
  name: yup
    .string()
    .min(3, "Name must be at least 3 characters")
    .required("Name is Required"),
    password: yup
    .string()
    .min(8, "Password must be at least 3 characters")
    .required("Password is Required"),
  role: yup
    .string()
    .oneOf(['UI/UX', 'Front-End Designer', 'Front-End Architect', 'Back-End Badass', 'Team Leader'], "Role is required"),
  termsOfService: yup
    .boolean()
    .oneOf([true], "Tearms of Service Required")
})

export default formSchema
