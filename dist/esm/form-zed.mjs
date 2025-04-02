import { handleError as a } from "./handle-error.mjs";
const i = {
  company: {
    maxLength: 30,
    minLength: 2,
    placeholder: "Estarlincito Support's",
    title: "",
    type: "text"
  },
  email: {
    maxLength: 30,
    minLength: 5,
    placeholder: "name@domain.com",
    title: "",
    type: "email"
  },
  "first-name": {
    maxLength: 30,
    minLength: 1,
    placeholder: "Estarlin",
    title: "",
    type: "text"
  },
  "last-name": {
    maxLength: 30,
    minLength: 1,
    placeholder: "R",
    title: "",
    type: "text"
  },
  message: {
    maxLength: 1e3,
    minLength: 1,
    placeholder: "Enter your message here…",
    title: "",
    type: "text"
  },
  password: {
    maxLength: 30,
    minLength: 8,
    placeholder: "4ppl3-1Ph0ne",
    title: "",
    type: "password"
  },
  "phone-number": {
    maxLength: 12,
    minLength: 10,
    placeholder: "123-456-7890",
    title: "",
    type: "tel"
  },
  username: {
    maxLength: 20,
    minLength: 5,
    placeholder: "estarlincito",
    title: "",
    type: "text"
  }
}, o = (e) => {
  const t = e[0], l = e.replace(t, t.toLocaleUpperCase()).replace("-", " "), n = i[e];
  if (!n) {
    a(`${e} was not found in (fields) /lib/zed.ts`);
    return;
  }
  return { ...n, title: l };
};
export {
  o as formZed
};
