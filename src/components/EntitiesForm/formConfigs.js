import * as Yup from "yup";

import TextField from "@mui/material/TextField";
import Select from "@mui/material/Select";

export const formConfigs = {
  company: {
    formInputs: [
      {
        name: "name",
        label: "Nome",
        id: "name",
        as: TextField,
        type: "TextField",
      },
      {
        name: "industry",
        label: "Indústria",
        id: "industry",
        as: TextField,
        type: "TextField",
      },
      {
        name: "cnpj",
        label: "CNPJ",
        id: "cnpj",
        as: TextField,
        type: "TextField",
      },
      {
        name: "email",
        label: "Email",
        id: "email",
        as: TextField,
        type: "TextField",
      },
      {
        name: "phone",
        label: "Telefone",
        id: "phone",
        as: TextField,
        type: "TextField",
      },
      {
        name: "website",
        label: "Website",
        id: "website",
        as: TextField,
        type: "TextField",
      },
      {
        name: "street",
        label: "Rua",
        id: "street",
        as: TextField,
        type: "TextField",
      },
      {
        name: "city",
        label: "Cidade",
        id: "city",
        as: TextField,
        type: "TextField",
      },
      {
        name: "state",
        label: "Estado",
        id: "state",
        as: TextField,
        type: "TextField",
      },
      {
        name: "zipCode",
        label: "CEP",
        id: "zipCode",
        as: TextField,
        type: "TextField",
      },
      {
        name: "country",
        label: "País",
        id: "country",
        as: TextField,
        type: "TextField",
      },
      {
        name: "type_id",
        label: "Tipo",
        id: "type_id",
        as: Select,
        type: "Select",
      },
      // Adicione mais inputs conforme necessário
    ],

    formButtons: [
      { id: "submit", type: "submit", color: "primary", label: "Salvar" },
      { id: "cancel", type: "error", color: "secondary", label: "Cancelar" },
      // Adicione mais botões conforme necessário
    ],

    initialValues: {
      name: "",
      // Adicione valores iniciais para outros campos
    },

    validationSchema: {
      name: Yup.string().required("Required"),
      // Adicione validações para outros campos
    },

    formatData: (data) => {
      const transformObject = (input) => {
        return {
          address: {
            street: input.street,
            city: input.city,
            state: input.state,
            zipCode: input.zipCode,
            country: input.country,
          },
          name: input.name,
          industry: input.industry,
          cnpj: input.cnpj,
          contact: {
            email: input.email,
            phone: input.phone,
            website: input.website,
          },
          type_id: input.type_id,
        };
      };
      return transformObject(data);
    },

    fieldsData: {
      type_id: {
        selector: "entityTypesSelector",
        data: [],
      },
    },
  },
  patient: {
    formInputs: [
      { name: "name", label: "Name", id: "name" },
      // Adicione mais inputs conforme necessário
    ],

    formButtons: [
      { id: "submit", type: "submit", label: "Submit" },
      // Adicione mais botões conforme necessário
    ],

    initialValues: {
      name: "",
      // Adicione valores iniciais para outros campos
    },

    validationSchema: {
      name: Yup.string().required("Required"),
      // Adicione validações para outros campos
    },
  },
  hospital: {
    formInputs: [
      { name: "name", label: "Name", id: "name" },
      // Adicione mais inputs conforme necessário
    ],

    formButtons: [
      { id: "submit", type: "submit", label: "Submit" },
      // Adicione mais botões conforme necessário
    ],

    initialValues: {
      name: "",
      // Adicione valores iniciais para outros campos
    },

    validationSchema: {
      name: Yup.string().required("Required"),
      // Adicione validações para outros campos
    },
  },
  client: {
    formInputs: [
      { name: "name", label: "Name", id: "name" },
      // Adicione mais inputs conforme necessário
    ],

    formButtons: [
      { id: "submit", type: "submit", label: "Submit" },
      // Adicione mais botões conforme necessário
    ],

    initialValues: {
      name: "",
      // Adicione valores iniciais para outros campos
    },

    validationSchema: {
      name: Yup.string().required("Required"),
      // Adicione validações para outros campos
    },
  },
  scrub_nurse: {
    formInputs: [
      { name: "name", label: "Name", id: "name" },
      // Adicione mais inputs conforme necessário
    ],

    formButtons: [
      { id: "submit", type: "submit", label: "Submit" },
      // Adicione mais botões conforme necessário
    ],

    initialValues: {
      name: "",
      // Adicione valores iniciais para outros campos
    },

    validationSchema: {
      name: Yup.string().required("Required"),
      // Adicione validações para outros campos
    },
  },
  health_insurance: {
    formInputs: [
      { name: "name", label: "Name", id: "name" },
      // Adicione mais inputs conforme necessário
    ],

    formButtons: [
      { id: "submit", type: "submit", label: "Submit" },
      // Adicione mais botões conforme necessário
    ],

    initialValues: {
      name: "",
      // Adicione valores iniciais para outros campos
    },

    validationSchema: {
      name: Yup.string().required("Required"),
      // Adicione validações para outros campos
    },
  },
  surgeon: {
    formInputs: [
      { name: "name", label: "Name", id: "name" },
      // Adicione mais inputs conforme necessário
    ],

    formButtons: [
      { id: "submit", type: "submit", label: "Submit" },
      // Adicione mais botões conforme necessário
    ],

    initialValues: {
      name: "",
      // Adicione valores iniciais para outros campos
    },

    validationSchema: {
      name: Yup.string().required("Required"),
      // Adicione validações para outros campos
    },
  },
  undefined: {
    formInputs: [
      { name: "name", label: "Name", id: "name" },
      // Adicione mais inputs conforme necessário
    ],

    formButtons: [
      { id: "submit", type: "submit", label: "Submit" },
      // Adicione mais botões conforme necessário
    ],

    initialValues: {
      name: "",
      // Adicione valores iniciais para outros campos
    },

    validationSchema: {
      name: Yup.string().required("Required"),
      // Adicione validações para outros campos
    },
  },
};
