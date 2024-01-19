import { useRecoilValue } from "recoil";

import { formConfigs } from "./formConfigs";
import CustomForm from "../CustomForm/CustomForm";

import { entityTypesSelector } from "../../state/atoms/entity_types";

const EntitiesForm = ({ entity, handleSubmit }) => {
  const {
    formInputs,
    formButtons,
    initialValues,
    validationSchema,
    fieldsData,
  } = formConfigs[entity];

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
