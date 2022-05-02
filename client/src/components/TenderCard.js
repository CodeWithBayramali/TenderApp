import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Chip from "@mui/material/Chip";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import Popover from "@mui/material/Popover";
import FormControl from "@mui/material/FormControl";
import { OutlinedInput, InputAdornment, InputLabel } from "@mui/material";
import { useFormik } from "formik";
import axios from "axios";
import OfferList from "./OfferList";
import { useLocation } from "react-router-dom";


export default function TenderCard({ tender }) {
  const [userId, setUserId] = useState();
  const [userNm, setUserNm] = useState();
  const [offer, setOffer] = useState([]);
  const [openn, setOpen] = useState(false);
  const location = useLocation()

  const formik = useFormik({
    initialValues: {
      Offer: 0,
      Id: null,
      tenderId: tender.tenderId,
      UserName: null,
    },
    onSubmit: (values, { resetForm }) => {
      axios
        .post(`http://localhost:5000/api/tender/offer/`, { ...values, Id: userId, UserName: userNm })
        .then(function (res) {
          if (res) {
            alert("Teklif başarıyla eklendi !");
            resetForm();
          }
        })
        .catch((err) => alert(err));
    },
  });

  useEffect(() => {
    if (JSON.parse(localStorage.getItem("user")) && !userId) {
      const { data } = JSON.parse(localStorage.getItem("user"));
      setUserId(data.id);
      setUserNm(data.username);
    }
  }, [offer,location,userId]);

  const getOfferItem = async (tenderId) => {
    await axios.get(`http://localhost:5000/api/tender/offer/${tenderId}`).then(function (res) {
      if (res) {
        setOffer(res.data)
        setOpen(true);
      }
    });
  }

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <>
      <Box boxShadow={1} m={2} sx={{ width: "100%", maxWidth: 360, bgcolor: "Window" }}>
        <Box sx={{ my: 3, mx: 2 }}>
          <Grid container alignItems="center">
            <Grid item xs>
              <Typography gutterBottom variant="h6" component="div">
                {tender.tenderName}
              </Typography>
            </Grid>
            <Grid item>
              <Typography gutterBottom variant="h6" component="div">
                ${tender.startPrice}
              </Typography>
            </Grid>
          </Grid>
          <Typography color="text.secondary" variant="body2">
            {tender.description}
          </Typography>
        </Box>
        <Divider variant="middle" />
        <Box sx={{ m: 2 }}>
          <Typography gutterBottom variant="body1">
            Category
          </Typography>
          <Stack direction="row" spacing={1}>
            <Chip color="primary" label={tender.category} />
          </Stack>
        </Box>
        {userId ? (
          <Box sx={{ mt: 3, ml: 1, mb: 1 }}>
            <div className="d-inline">
              <Button color="success" aria-describedby={id} variant="contained" onClick={handleClick}>
                Teklif Ver
              </Button>
              <Popover
                className="w-100"
                id={id}
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
              >
                <Box component="form" onSubmit={formik.handleSubmit}>
                  <FormControl sx={{ m: 1 }}>
                    <InputLabel htmlFor="outlined-adornment-amount">Amount</InputLabel>
                    <OutlinedInput
                      id="outlined-adornment-amount"
                      startAdornment={<InputAdornment position="start">$</InputAdornment>}
                      onChange={formik.handleChange("Offer")}
                      value={formik.values.Offer}
                      label="Amount"
                    />
                    <Button type="submit" variant="outlined" color="success">
                      Send
                    </Button>
                  </FormControl>
                </Box>
              </Popover>
            </div>
            <Button
              key={tender.tenderId}
              className="mx-2"
              onClick={() => getOfferItem(tender.tenderId)}
              variant="outlined"
              color="secondary"
            >
              Teklifleri Gör
            </Button>
          </Box>
        ):
        <></>
      }
      </Box>
      <OfferList op={openn} ofer={offer} setOpen={setOpen} />
    </>
  );
}
