import React from "react";

// components
import CustomForm from "../CustomForm/CustomForm";

// recoil imports
import { useRecoilValue } from "recoil";
import { entityTypesSelector } from "../../state/atoms/entity_types";
import { selectedCreateMenuOption } from "../../state/atoms/entities_form";

// form configs
import { formConfigs } from "./formConfigs";

// hooks imports
import { operationMap } from "../../hooks/fetch";

// firebase imports
import { collection } from "firebase/firestore";
import { db } from "../../config/firestore";

const EntitiesForm = () => {
  const createMenuOption = useRecoilValue(selectedCreateMenuOption);

  const {
    formInputs,
    formButtons,
    initialValues,
    validationSchema,
    fieldsData,
  } = formConfigs[createMenuOption];

  const atomsMap = {
    entityTypesSelector: useRecoilValue(entityTypesSelector),
  };

  for (const field of Object.keys(fieldsData)) {
    const data = atomsMap[fieldsData[field].selector];
    fieldsData[field] = {
      ...fieldsData[field],
      data,
    };
  }

  const handleCreateData = (result) => {
    console.log("data created -> ", result);
  };

  const handleSubmit = (values, actions) => {
    actions.setSubmitting(true);
    const formatedData = formConfigs[createMenuOption].formatData(values);
    operationMap.create(
      collection(db, "entities"),
      handleCreateData,
      formatedData
    );
  };

  return (
    <CustomForm
      inputs={formInputs}
      buttons={formButtons}
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
      fieldsData={fieldsData}
    />
  );
};

export default EntitiesForm;
