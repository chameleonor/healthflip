import React, { useState } from "react";
import MenuItem from "@mui/material/MenuItem";

import { useRecoilValue, useSetRecoilState } from "recoil";

import FloatingButton from "../../components/FloatingButton/FloatingButton";
import StyledMenu from "../../components/StyledMenu/StyledMenu";

import { entityTypesSelector } from "../../state/atoms/entity_types";

import {
  selectedCreateMenuOption,
  entityFormDrawer,
} from "../../state/atoms/entities_form";

export const CreateMenu = () => {
  const [anchorEl, setAnchorEl] = useState(null);

  const entityTypes = useRecoilValue(entityTypesSelector);
  const setMenuOption = useSetRecoilState(selectedCreateMenuOption);
  const setFormDrawerOpen = useSetRecoilState(entityFormDrawer);

  const handleOptionClick = (option) => {
    setMenuOption(option);
    setAnchorEl(null);
    setFormDrawerOpen(true);
  };

  const handleCreateEntity = (event) => setAnchorEl(event.currentTarget);

  const handleClose = () => setAnchorEl(null);

  return (
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
        {entityTypes.map((item) => (
          <MenuItem
            key={item.code}
            onClick={() => handleOptionClick(item.name)}
          >
            {item.label}
          </MenuItem>
        ))}
      </StyledMenu>
    </>
  );
};

export default CreateMenu;
