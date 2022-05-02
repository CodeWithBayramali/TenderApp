import React, { useEffect, useState } from "react";
import { Grid } from "@mui/material";
import Box from "@mui/material/Box";
import MenuItem from "@mui/material/MenuItem";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import { useFormik } from "formik";
import axios from "axios";
import { Snackbar, Alert } from "@mui/material";

const AdminCreateTender = () => {
  const [message, setMessage] = useState("");

  const [open, setOpen] = useState(false);
  const [token, setToken] = useState();
  const [userId,setUserId] = useState();

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  useEffect(() => {
    const {data}=JSON.parse(localStorage.getItem("user"));
    setToken(data.token)
    setUserId(data.id)
  }, [token,message]);

  const formik = useFormik({
    initialValues: {
      tenderName: "",
      startPrice: 0,
      Category: "",
      Description: "",
    },
    onSubmit: (values, { resetForm }) => {
      axios
        .post(
          `http://localhost:5000/api/admin/create/${userId}`,
          values,
          { headers: { Authorization: `Bearer ${token}` } }
        )
        .then(function (res) {
          if (res) {
            setMessage("İhale Başarıyla oluşturuldu");
            resetForm();
          }
        })
        .catch((err) => setMessage(err.response.data));
    },
  });

  return (
    <Box component="form" onSubmit={formik.handleSubmit} sx={{ flexGrow: 1 }}>
      <h4 className="mb-5">Create Tender</h4>
      {message !=="" && (
          <Alert onClose={handleClose} severity="success" sx={{ width: "100%" }}>
            {message}
          </Alert>
      )}
      <Grid container spacing={3}>
        <Grid item xs={6}>
          <TextField
            onChange={formik.handleChange("tenderName")}
            value={formik.values.tenderName}
            fullWidth
            id="outlined-basic"
            label="Name"
            variant="outlined"
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            onChange={formik.handleChange("Category")}
            value={formik.values.Category}
            select
            fullWidth
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            label="Category"
          >
            <MenuItem value={"Telefon"}>Telefon</MenuItem>
            <MenuItem value={"Bilgisayar"}>Bilgisayar</MenuItem>
            <MenuItem value={"Araba"}>Araba</MenuItem>
            <MenuItem value={"Robot"}>Robot</MenuItem>
          </TextField>
        </Grid>

        <Grid item xs={12}>
          <TextField
            onChange={formik.handleChange("startPrice")}
            value={formik.values.startPrice}
            fullWidth
            id="outlined-basic"
            label="Start Price"
            variant="outlined"
          />
        </Grid>

        <Grid mt={3} pl={3} xs={12}>
          <TextField
            onChange={formik.handleChange("Description")}
            value={formik.values.Description}
            fullWidth
            id="outlined-multiline-static"
            label="Description"
            multiline
            rows={3}
          />
        </Grid>

        <Grid mt={3} pl={3} xs={12}>
          <Button type="submit" fullWidth variant="contained" color="primary">
            Create
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default AdminCreateTender;
