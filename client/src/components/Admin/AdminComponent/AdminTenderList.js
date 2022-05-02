import React,{useState,useEffect} from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import ButtonGroup from "@mui/material/ButtonGroup";
import Button from "@mui/material/Button";
import { getTenders } from "../../../api/tenderApi";
import axios from "axios";

export default function BasicTable() {

  const [tender, setTender] = useState([]);
  const [token, setToken] = useState();
  const [userId,setUserId] = useState();

  const getAllTenders = async () => {
    const { data } = await getTenders();
    setTender(data);
  };

  const deleteTender = (id) => {
    axios.delete(`http://localhost:5000/api/admin/delete/${id}/${userId}`,{ headers: { Authorization: `Bearer ${token}` } }).then(res => {
      res.status === 204 && alert("İhale Başarıyla silindi !")
    }).catch(err => alert(err.response.message))
  }

  useEffect(() => {
    const {data}=JSON.parse(localStorage.getItem("user"));
    setToken(data.token)
    setUserId(data.id)
  }, [token]);

  useEffect(() => {
    getAllTenders();
  }, []);

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className="fw-bold" align="left">ID</TableCell>
            <TableCell className="fw-bold" align="center">Categories</TableCell>
            <TableCell className="fw-bold" align="center">Name</TableCell>
            <TableCell className="fw-bold" align="center">Start Price</TableCell>
            <TableCell className="fw-bold" align="center">End Price</TableCell>
            <TableCell className="fw-bold" align="center"></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {tender.map((row) => (
            <TableRow key={row.tenderId} sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
              <TableCell component="th" scope="row">
                {row.tenderId}
              </TableCell>
              <TableCell align="center">{row.category}</TableCell>
              <TableCell align="center">{row.tenderName}</TableCell>
              <TableCell align="center">{row.startPrice}</TableCell>
              <TableCell align="center">{row.endPrice}</TableCell>
              <TableCell align="center">
                <ButtonGroup size="small" disableElevation variant="outlined">
                  <Button color="secondary">Update</Button>
                  <Button onClick={()=> deleteTender(row.tenderId) } color="error">Delete</Button>
                </ButtonGroup>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
