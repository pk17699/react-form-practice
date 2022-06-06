import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';
import * as yup from 'yup';
import { useFormik } from 'formik'

const taskSchema = yup.object({
    firstName:yup.string().required("first name is required").min(8),
    lastName:yup.string().required("last name is required").min(8),
    address:yup.string().required("address is required").min(32),
    city:yup.string().required("city is required"),
    zip:yup.string().required("zip is required and should be 5 characters long").length(5),
    country:yup.string().required("country is required")
})
function UserForm(){

    const taskFormik = useFormik({
        initialValues:{
            firstName:"",
            lastName:"",
            address:"",
            city:"",
            zip:"",
            country:"",
        },
        validationSchema: taskSchema,
        onSubmit:(values)=>{
            console.log(values);
        }
    })

    return (
        <Box component="form" sx={{'& > :not(style)': { m: 1, width: '25ch' },}} noValidate autoComplete="off">
            <h1 style={{textAlign: "center"}}>Checkout</h1>
            <br></br>
            <br></br>
            <br></br>
            <h4>Shipping Address</h4>

            <TextField required label="First name" name="firstName" onChange={taskFormik.handleChange} error={taskFormik.touched.firstName && Boolean(taskFormik.errors.firstName)}
                helperText={taskFormik.touched.firstName && taskFormik.errors.firstName} variant="standard" />

            <TextField required label="Last name" name="lastName" onChange={taskFormik.handleChange} error={taskFormik.touched.lastName && Boolean(taskFormik.errors.lastName)}
                helperText={taskFormik.touched.lastName && taskFormik.errors.lastName} variant="standard" />
            <br></br>

            <TextField fullwidth required label="Address line 1" name="address" onChange={taskFormik.handleChange} error={taskFormik.touched.address && Boolean(taskFormik.errors.address)}
                helperText={taskFormik.touched.address && taskFormik.errors.address} variant="standard" />
            <br></br>

            <TextField fullWidth label="Address line 2" variant="standard" />
            <br></br>

            <TextField required label="City" name="city" onChange={taskFormik.handleChange} error={taskFormik.touched.city && Boolean(taskFormik.errors.city)}
                helperText={taskFormik.touched.city && taskFormik.errors.city} variant="standard" />

            <TextField label="State/Province/Region" variant="standard" />
            <br></br>

            <TextField required label="Zip/Postal Code" name="zip" onChange={taskFormik.handleChange} error={taskFormik.touched.zip && Boolean(taskFormik.errors.zip)}
                helperText={taskFormik.touched.zip && taskFormik.errors.zip} variant="standard" />

            <TextField required label="Country" name="country" onChange={taskFormik.handleChange} error={taskFormik.touched.country && Boolean(taskFormik.errors.country)}
                helperText={taskFormik.touched.country && taskFormik.errors.country} variant="standard" />

            <FormGroup>
                <FormControlLabel control={<Checkbox defaultChecked />} label="Use this address for payment details" />
            </FormGroup>

            <Button variant="contained" size="small" onClick={taskFormik.handleSubmit}>Next</Button>
        </Box>
      );
}
export default UserForm;