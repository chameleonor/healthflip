import React, { useEffect, useState } from "react";

import { collection, getDocs } from "firebase/firestore";
import { db } from "../config/firestore";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

const cardStyle = {
  width: 300,
  transition: "box-shadow 0.3s ease-in-out",
  position: "relative",
  "&:hover": {
    cursor: "pointer",
    boxShadow: "0 8px 16px 0 rgba(0, 0, 0, 0.2)",
  },
};

const iconStyle = {
  position: "absolute",
  bottom: 10,
  right: 10,
};

const icon = {
  opacity: 0.2,
  transition: "background-color 298ms ease-in-out",
  "&:hover": {
    cursor: "pointer",
    opacity: 1,
  },
};

const Entities = () => {
  const [entities, setEntities] = useState([]);

  useEffect(() => {
    const entitiesMap = Array.from(new Set([]));

    const fetchData = async () => {
      const querySnapshot = await getDocs(collection(db, "entities"));
      querySnapshot.forEach((doc) => {
        entitiesMap.push(doc.data());
      });
      setEntities(entitiesMap);
    };

    fetchData();
  }, []);

  const handleOnDelete = () => console.log(`delete`);
  const handleOnEdit = () => console.log(`edit`);

  const renderEntities = () => {
    return entities.map((entity) => (
      <div key={entity.name}>
        <Card sx={cardStyle}>
          <CardContent>
            <Typography variant="h5" component="div">
              {entity.name}
            </Typography>
          </CardContent>
          <div className="icons" style={iconStyle}>
            <DeleteIcon color="error" style={icon} onClick={handleOnDelete} />
            <div style={icon}>
              <EditIcon
                color="primary"
                // style={icon}
                onClick={handleOnEdit}
              />
            </div>
          </div>
        </Card>
      </div>
    ));
  };

  return (
    <>{renderEntities()}</>
    // <>test</>
  );
};

export default Entities;
