import React, { useEffect, useState } from 'react'
import './Add.css'
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import axios from 'axios'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button } from '@mui/material';
import { Helmet } from 'react-helmet'; 

function index() {
  let [rows,setRow]=useState([])

  useEffect(() => {
    axios.get(`http://localhost:3000/products/`)
      .then((res) => {
        setRow(res.data);
      });
  }, [rows.length]);

  function handleDelete(id) {
    axios.delete(`http://localhost:3000/products/${id}`)
      .then(() => {

        setRow(prevRows => prevRows.filter(row => row._id !== id));
      })

  }

  const SignupSchema = Yup.object().shape({
    name: Yup.string()
      .min(2, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Required'),
    desc: Yup.string()
      .min(2, 'Too Short!')
      .max(100, 'Too Long!')
      .required('Required'),
      image: Yup.string()
      .required('Required'),
    price: Yup.number().required('Required'),
  });

  return (
    <div>
        <Helmet>
        <title>Add Your Product</title> 
        <meta name="description" content='You can add your product' /> 
      </Helmet>
  
      <section id='add'>
        <h2>Add Product</h2>
        <Formik
       initialValues={{
         name: '',
         desc: '',
         price: '',
       }}
       validationSchema={SignupSchema}
       onSubmit={values => {
        axios.post(`http://localhost:3000/products`,values)
         console.log(values);
       }}
     >
       {({ errors, touched }) => (
         <Form>
           <Field placeholder='Name' name="name" />
           {errors.name && touched.name ? (
             <div>{errors.name}</div>
           ) : null}
           <Field placeholder='Description' name="desc" />
           {errors.desc && touched.desc ? (
             <div>{errors.desc}</div>
           ) : null}
           <Field placeholder='Image url' name="image" />
           {errors.image && touched.image ? (
             <div>{errors.image}</div>
           ) : null}
           <Field placeholder='Price' name="price" type="number" />
           {errors.price && touched.price ? <div>{errors.price}</div> : null}
           <button type="submit">Submit</button>
         </Form>
       )}
     </Formik>

     <div className="tableim">
     <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="right">Description</TableCell>
            <TableCell align="right">Price</TableCell>
            <TableCell align="right">Function</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row._id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.desc}</TableCell>
              <TableCell align="right">{row.price}$</TableCell>
              <TableCell align="right"><Button onClick={()=>handleDelete(row._id)} variant="outlined" color="error">Delete</Button></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
     </div>
      </section>
    </div>
  )
}

export default index
