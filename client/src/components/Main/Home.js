import React, { useState, useEffect } from "react";
import TenderCard from "../TenderCard";
import { getTenders } from "../../api/tenderApi";

const Home = () => {
  const [tender, setTender] = useState([]);

  const getAllTenders = async () => {
    const { data } = await getTenders();
    setTender(data);
  };

  useEffect(() => {
    getAllTenders();
  }, []);

  return (
    <div>
      <div className="container mt-5">
        <div className="row">
          <div className="d-grid">
            {tender.map((t,index) => (
              <TenderCard key={index} tender={t} index={index} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
