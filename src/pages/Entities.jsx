import React, { useEffect, useState } from "react";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import MenuItem from "@mui/material/MenuItem";

import { collection, getDocs } from "firebase/firestore";
import { db } from "../config/firestore";

import FloatingButton from "../components/FloatingButton/FloatingButton";
import StyledMenu from "../components/StyledMenu/StyledMenu";

import { sortArrayOfObjects } from "../utils/helpers";

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
  const [entityTypes, setEntityTypes] = useState([]);
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedOption, setSelectedOption] = useState(null);

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

  useEffect(() => {
    const entityTypesMap = Array.from(new Set([]));

    const fetchData = async () => {
      const querySnapshot = await getDocs(collection(db, "entity_types"));
      querySnapshot.forEach((doc) => {
        entityTypesMap.push(doc.data());
      });
      setEntityTypes(sortArrayOfObjects(entityTypesMap, "code"));
    };

    fetchData();
  }, []);

  const handleOnDelete = () => console.log(`delete`);
  const handleOnEdit = () => console.log(`edit`);

  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setAnchorEl(null);
  };

  const handleCreateEntity = (event) => setAnchorEl(event.currentTarget);

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
            <EditIcon
              color="primary"
              // style={icon}
              onClick={handleOnEdit}
            />
          </div>
        </Card>
      </div>
    ));
  };

  const renderMenuOptions = () =>
    entityTypes.map((item) => (
      <MenuItem key={item.code} onClick={() => handleOptionClick(item.name)}>
        {item.label}
      </MenuItem>
    ));

  return (
    <>
      {renderEntities()}
      <>
        <FloatingButton
          onClick={handleCreateEntity}
          id="create-button"
          aria-controls={open ? "create-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          variant="contained"
          disableElevation
        />
        <StyledMenu
          id="create-menu"
          MenuListProps={{
            "aria-labelledby": "create-button",
          }}
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          {renderMenuOptions()}
        </StyledMenu>

        {selectedOption && <div>Opção selecionada: {selectedOption}</div>}
      </>
    </>
  );
};

export default Entities;
