import { API_ROOT } from "./constants";

export const fetchData = {
  addUser: (data) => {
    fetch(API_ROOT, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((result) => console.log("Contact Added", result));
  },
  deleteContact: (userId) => {
    fetch(`${API_ROOT}/${userId}`, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then((result) => console.log("Contact Deleted", result));
  },
  updateContact: (data, userId) => {
    fetch(`${API_ROOT}/${userId}`, {
      method: "PUT",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((result) => console.log("Contact Updated Successfully", result));
  },
};
