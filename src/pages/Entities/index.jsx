import React, { useEffect, useState } from "react";

// material-ui imports
import Card from "@mui/material/Card";
import Box from "@mui/material/Box";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import { useTheme } from "@mui/material/styles";
import ClickAwayListener from "@mui/material/ClickAwayListener";

// icons
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

// recoil imports
import { useSetRecoilState, useRecoilValue, useRecoilState } from "recoil";
import {
  entityTypesState,
  entityTypesSelector,
} from "../../state/atoms/entity_types";
import {
  selectedCreateMenuOption,
  entityFormDrawer,
} from "../../state/atoms/entities_form";

// db imports
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../config/firestore";

// components imports
import EntitiesForm from "../../components/EntitiesForm/EntitiesForm";
import FormDrawer from "../../components/FormDrawer/FormDrawer";
import { CreateMenu } from "./CreateMenu";
import SelectEntity from "./SelectEntity";

// styles imports
import { cardStyle, iconStyle, icon } from "./styles";

// import constants
import { FIRESTORE_COLLECTION_ENTITIES } from "../../utils/constants";

// import hooks

const Entities = () => {
  const theme = useTheme();

  const [entities, setEntities] = useState([]);

  const createMenuOption = useRecoilValue(selectedCreateMenuOption);
  const [formDrawerOpen, setFormDrawerOpen] = useRecoilState(entityFormDrawer);

  const entityTypes = useRecoilValue(entityTypesSelector);
  const setEntityTypes = useSetRecoilState(entityTypesState);

  useEffect(() => {
    setEntityTypes(entityTypes);
  }, [entityTypes, setEntityTypes]);

  useEffect(() => {
    const fetchData = async () => {
      const querySnapshot = await getDocs(
        collection(db, FIRESTORE_COLLECTION_ENTITIES)
      );
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

  const renderEntities = () => {
    return entities.map((entity) => (
      <Box key={entity.name} minWidth="260px" width="calc(25% - 8px)" p={1}>
        <Card sx={cardStyle}>
          <CardContent>
            <Typography variant="h5" component="div">
              {entity.name}
            </Typography>
            <DeleteIcon color="error" style={icon} onClick={handleOnDelete} />
            <EditIcon color="primary" onClick={handleOnEdit} />
          </CardContent>
        </Card>
      </Box>
    ));
  };

  return (
    <Stack
      sx={{
        display: "flex",
        justifyContent: "space-between",
        flexDirection: "column",
        flexWrap: "wrap",
        width: "100%",
      }}
      spacing={theme.spacing(2)}
    >
      <Stack
        sx={{
          display: "flex",
          justifyContent: "flex-start",
          flexDirection: "row",
          flexWrap: "wrap",
          width: "100%",
          height: 50,
        }}
        spacing={theme.spacing(2)}
      >
        <SelectEntity />
      </Stack>

      <Box
        display="flex"
        flexWrap="wrap"
        flexDirection="row"
        justifyContent="flex-start"
        spacing={theme.spacing(1)}
      >
        {renderEntities()}
      </Box>

      <CreateMenu />

      {createMenuOption && (
        <ClickAwayListener onClickAway={() => console.log("here")}>
          <FormDrawer
            open={formDrawerOpen}
            onClose={() => setFormDrawerOpen(false)}
            form={<EntitiesForm />}
          />
        </ClickAwayListener>
      )}
    </Stack>
  );
};

export default Entities;
