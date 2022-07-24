export const getdatareducer = (state = "", { type, payload }) => {
  switch (type) {
    case "getdata":
      return payload;
    default:
      return state;
  }
};
export const sign_upreducer = (state = "", { type, payload }) => {
  switch (type) {
    case "login":
      return payload;
    case "logout":
      return payload;
    default:
      return state;
  }
};
export const productreducer = (state = [], { type, payload }) => {
  switch (type) {
    case "product_info":
      return payload;
    default:
      return state;
  }
};

export const flagloginreducer = (state = false, { type, payload }) => {
  switch (type) {
    case "enter":
      return payload;
    default:
      return state;
  }
};

export const cartreduser = (state = [], { type, payload }) => {
  switch (type) {
    case "cart":
      return [...state, payload];
    case "qty":
      return [...state];
    case "hazf":
      return [...state];
    case "hazf_all":
      return payload;

    default:
      return state;
  }
};

export const emailreducer = (state = "", { type, payload }) => {
  switch (type) {
    case "email":
      return payload;
    default:
      return state;
  }
};
export const addressreducer = (
  state = { address: "", city: "", postalCode: "", phone: "" },
  { type, payload }
) => {
  switch (type) {
    case "address":
      return { ...state, address: payload };
    case "city":
      return { ...state, city: payload };
    case "postalcode":
      return { ...state, postalCode: payload };
    case "phone":
      return { ...state, phone: payload };
    default:
      return state;
  }
};
export const totalcostreducer = (state = "", { type, payload }) => {
  switch (type) {
    case "totalcost":
      return payload.toFixed(2);
    default:
      return state;
  }
};

export const ordersreducer = (state = [], { type, payload }) => {
  switch (type) {
    case "orders":
      return payload;

    default:
      return state;
  }
};
export const theorderreducer = (state = [], { type, payload }) => {
  switch (type) {
    case "theorder":
      return payload;

    default:
      return state;
  }
};
