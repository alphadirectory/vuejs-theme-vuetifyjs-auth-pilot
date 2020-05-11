const state = {

  auth: {
    user: {
      id: "",
      code: "",
      name: "",
    },
    credentials: {
      token: "",
      expires_in: "",
      caronte: ""
    },
    logged: false
  },

  loarder: {
    color: "primary",
    visible: false,
  },

  snackbar: {
    color: "primary",
    visible: false,
    content: "",
  }

};

export default state;
