import React, { useEffect, useState } from "react";

// material-ui imports
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import MenuItem from "@mui/material/MenuItem";

// recoil imports
import { useSetRecoilState, useRecoilValue } from "recoil";
import {
  entityTypesState,
  entityTypesSelector,
} from "../../state/atoms/entity_types";

// db imports
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../config/firestore";

// components imports
import FloatingButton from "../../components/FloatingButton/FloatingButton";
import StyledMenu from "../../components/StyledMenu/StyledMenu";
import EntitiesForm from "../../components/EntitiesForm/EntitiesForm";
import FormDrawer from "../../components/FormDrawer/FormDrawer";

// styles imports
import { cardStyle, iconStyle, icon } from "./styles";

// configs imports
import { formConfigs } from "../../components/EntitiesForm/formConfigs";

const Entities = () => {
  const [entities, setEntities] = useState([]);
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedOption, setSelectedOption] = useState(null);
  const [formOpen, setFormOpen] = useState(false);

  const entityTypes = useRecoilValue(entityTypesSelector);
  const setEntityTypes = useSetRecoilState(entityTypesState);

  useEffect(() => {
    setEntityTypes(entityTypes);
  }, [entityTypes, setEntityTypes]);

  useEffect(() => {
    const fetchData = async () => {
      const querySnapshot = await getDocs(collection(db, "entities"));
      const entitiesPromises = querySnapshot.docs.map(async (doc) => {
        let newDocData = {
          ...doc.data(),
          id: doc.id,
        };

        const typeObj = entityTypes.find(
          (type) => type.id === doc.data().type_id
        );

        if (typeObj) {
          newDocData = {
            ...doc.data(),
            id: doc.id,
            type: typeObj,
          };
        }

        return newDocData;
      });

      const entitiesMap = await Promise.all(entitiesPromises);
      setEntities(entitiesMap);
    };

    if (entityTypes.length) fetchData();
  }, [entityTypes]);

  const handleOnDelete = () => console.log(`delete`);
  const handleOnEdit = () => console.log(`edit`);
  const handleClose = () => setAnchorEl(null);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setAnchorEl(null);
    setFormOpen(true);
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
            <EditIcon color="primary" onClick={handleOnEdit} />
          </div>
        </Card>
      </div>
    ));
  };

  const renderMenuOptions = () => (
    <StyledMenu
      id="create-menu"
      MenuListProps={{
        "aria-labelledby": "create-button",
      }}
      anchorEl={anchorEl}
      open={Boolean(anchorEl)}
      onClose={handleClose}
    >
      {entityTypes.map((item) => (
        <MenuItem key={item.code} onClick={() => handleOptionClick(item.name)}>
          {item.label}
        </MenuItem>
      ))}
    </StyledMenu>
  );

  const handleSubmit = (values, actions) => {
    const formConfig = formConfigs[selectedOption];
    console.log(" handleSubmit ==> ", { values, actions });
    actions.setSubmitting(true);

    const formatedData = formConfig.formatData(values);

    console.log(formatedData);

    setTimeout(() => {
      // alert(JSON.stringify(values, null, 2));
      actions.setSubmitting(false);
    }, 1000);
  };

  const handleOnCloseDrawer = () => setFormOpen(false);

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

        {renderMenuOptions()}

        {selectedOption && (
          <FormDrawer
            open={formOpen}
            onClose={handleOnCloseDrawer}
            form={
              <EntitiesForm
                entity={selectedOption}
                handleSubmit={handleSubmit}
              />
            }
          />
        )}
      </>
    </>
  );
};

export default Entities;
