
import { createSlice } from "@reduxjs/toolkit";

const isBrowser = typeof window !== "undefined";

const initialState = {
  name: "",
  description: "",
  department: "",
  start_date: "",
  end_date: "",
  image_url: "",
  id: isBrowser ? JSON.parse(localStorage.getItem("ProjectId")) || [] : [],
  shouldNavigateToFirstPage: false,
  shouldNavigateToSecondPage: false,
};

const addProjectSlice = createSlice({
  name: "addProject",
  initialState,
  reducers: {
    updateFormData: (state, action) => {
      // Update the form data in the state
      console.log(action.payload);
      return { ...state, ...action.payload };
    },
    updateId: (state, action) => {
      console.log("project d", action.payload);
      state.id = action.payload;

      let setProjectId = JSON.stringify(state.id);
      localStorage.setItem("ProjectId", setProjectId);
    },
    setNavigateToFirstPage: (state) => {
      state.shouldNavigateToFirstPage = true;
    },
    setNavigateToSecondPage: (state) => {
      state.shouldNavigateToSecondPage = true;
    },
  },
});

export const { updateFormData, updateId, setNavigateToFirstPage, setNavigateToSecondPage } = addProjectSlice.actions;

export default addProjectSlice.reducer;
