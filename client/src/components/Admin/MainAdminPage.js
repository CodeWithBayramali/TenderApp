import React from "react";
import AdminTenderList from "./AdminComponent/AdminTenderList";
import { Container, Divider } from "@mui/material";
import AdminCreateTender from "./AdminComponent/AdminCreateTender";

const MainAdminPage = () => {
  return (
    <div>
      <Container className="mt-5 mb-5">
        
        <AdminCreateTender />

        <Divider className="my-4" />

        <AdminTenderList />
      </Container>
    </div>
  );
};

export default MainAdminPage;
