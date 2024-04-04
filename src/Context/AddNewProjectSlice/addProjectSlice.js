import { createSlice } from "@reduxjs/toolkit";

const isBrowser = typeof window !== "undefined";


const initialState = {
  name: "",
  description: "",
  department: "",
  start_date: "",
  end_date: "",
  image_url: "",
  Projectform: {
    projectName: "",
    projectDescription: "",
    projectDepartment: "",
    startDate: "",
    endDate: "",
    projectId: "",
    image_url: "",
  },
  id: isBrowser
    ? JSON.parse(localStorage.getItem("ProjectId")) || []
    : [],
  ProjectName: isBrowser
    ? JSON.parse(localStorage.getItem("ProjectName")) || []
    : [],
  ProjectStepperValue: "",
  resourcePoolProjectID: isBrowser
    ? JSON.parse(localStorage.getItem("resourcePoolID")) || []
    : [],
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
    updateProjectName: (state, action) => {
      console.log("project d", action.payload);
      state.ProjectName = action.payload;

      let setProjectName = JSON.stringify(state.ProjectName);
      localStorage.setItem("ProjectName", setProjectName);
    },
    addStepperValue(state, action) {
      state.ProjectStepperValue = action.payload;
      console.log("toggleValue", action.payload)
    },
    resourcePoolID: (state, action) => {
      state.resourcePoolProjectID = action.payload
      console.log("ResourcePoolId", action.payload)

      let setresourcePoolID = JSON.stringify(state.resourcePoolProjectID);
      localStorage.setItem("resourcePoolID", setresourcePoolID);
    },
    removeFormData: (state, action) => {
      state.Projectform = action.payload
    },
    FormData: (state, action) => {
      state.Projectform = { ...state.Projectform, ...action.payload };
    }
  },
});

export const { updateFormData, updateId, updateProjectName, addStepperValue, resourcePoolID, removeFormData, FormData } = addProjectSlice.actions;

export default addProjectSlice.reducer;

// import { createSlice } from "@reduxjs/toolkit";

// const isBrowser = typeof window !== "undefined";


// const initialState = {
//   projectName: "",
//   ProjectForm: {},
//   id: isBrowser
//     ? JSON.parse(localStorage.getItem("ProjectId")) || []
//     : [],
//   ProjectName: isBrowser
//     ? JSON.parse(localStorage.getItem("ProjectName")) || []
//     : [],
//   ProjectStepperValue: "",
//   resourcePoolProjectID: isBrowser
//     ? JSON.parse(localStorage.getItem("resourcePoolID")) || []
//     : [],
// };

// const addProjectSlice = createSlice({
//   name: "addProject",
//   initialState,
//   reducers: {
//     updateFormData: (state, action) => {
//       // // Update the form data in the state
//       // console.log(action.payload);

//       // return { ...state, ...action.payload };
//       state.ProjectForm = action.payload
//       console.log("ProjectForm", action.payload)
//     },
//     updateId: (state, action) => {
//       console.log("project d", action.payload);
//       state.id = action.payload;

//       let setProjectId = JSON.stringify(state.id);
//       localStorage.setItem("ProjectId", setProjectId);
//     },
//     updateProjectName: (state, action) => {
//       console.log("project d", action.payload);
//       state.ProjectName = action.payload;

//       let setProjectName = JSON.stringify(state.ProjectName);
//       localStorage.setItem("ProjectName", setProjectName);
//     },
//     addStepperValue(state, action) {
//       state.ProjectStepperValue = action.payload;
//       console.log("toggleValue", action.payload)
//     },
//     resourcePoolID: (state, action) => {
//       state.resourcePoolProjectID = action.payload
//       console.log("ResourcePoolId", action.payload)

//       let setresourcePoolID = JSON.stringify(state.resourcePoolProjectID);
//       localStorage.setItem("resourcePoolID", setresourcePoolID);
//     },
//     removeFormData: (state, action) => {
//       state.name = action.payload
//       state.description = action.payload
//       state.department = action.payload
//       state.start_date = action.payload
//       state.end_date = action.payload
//       state.image_url = action.payload
//     }
//   },
// });

// export const { updateFormData, updateId, updateProjectName, addStepperValue, resourcePoolID, removeFormData } = addProjectSlice.actions;

// export default addProjectSlice.reducer;
