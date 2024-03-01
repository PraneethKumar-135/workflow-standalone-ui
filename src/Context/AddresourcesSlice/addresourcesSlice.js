"use client"
import { createSlice } from "@reduxjs/toolkit";
const addresourcesSlice = createSlice({
  name: "addResource",
  initialState: {
<<<<<<< HEAD
    id: [{ prjectId: {}, workFlowId: {}, }],
=======
    id: [{ prjectId: {} ,resourcesId:[],workFlowId:{} }],
>>>>>>> 174299aa92d8a37c5a2223ed2b421313180a3733
    resoucesInfo: [],
    UIUXDeveloper: [{ resoucesInfo: {} }],
    FrontEndDeveloper: [{ resoucesInfo: {} }],
    BackendDeveloper: [{ resoucesInfo: {} }],
    SRE: [{ resoucesInfo: {} }],
    DevOpsEngineer: [{ resoucesInfo: {} }],
    AutomationTester: [],
    ProjectManager: [],
    UXDesigner: [],
    UIDeveloper: [],
    APIDeveloper: [],
    Tester: [],
    UXResearcher: [],
    CICDSpecialist: [],
  },

  reducers: {
    addResources: (state, action) => {
      state.id[0].resourcesId.push(action.payload);
      console.log(action.payload);
    },

    addProjectId: (state, action) => {
      state.id[0].prjectId = action.payload;
      console.log(action.payload);
    },
    addWorkFlowId: (state, action) => {
      state.id[0].workFlowId = action.payload;
<<<<<<< HEAD
      console.log("workFlowData: ", action.payload);
=======
      console.log("workFlowData: ",action.payload);
>>>>>>> 174299aa92d8a37c5a2223ed2b421313180a3733
    },
    addResourcesData: (state, action) => {
      state.resoucesInfo.push(action.payload);
      console.log("resources Data: ", action.payload);
    },
    addResourcesPM: (state, action) => {
      state.ProjectManager = action.payload;
      console.log("ProjectManager Data: ", action.payload);
    },
    addResourcesUxDesigner: (state, action) => {
      state.UXDesigner = action.payload;
      console.log("UXDesigner Data: ", action.payload);
    },
    addResourcesUiDeveloper: (state, action) => {
      state.UIDeveloper = action.payload;
      console.log("UIDeveloper Data: ", action.payload);
    },
    addResourcesApiDeveloper: (state, action) => {
      state.APIDeveloper = action.payload;
      console.log("APIDeveloper Data: ", action.payload);
    },
    addResourcesTester: (state, action) => {
      state.Tester.push(action.payload);
      console.log("Tester Data: ", action.payload);
    },
    addResourcesUxResearch: (state, action) => {
      state.UXResearcher.push(action.payload);
      console.log("UXResearcher Data: ", action.payload);
    },
    addResourcesCiCd: (state, action) => {
      state.CICDSpecialist = action.payload;
      console.log("CICDSpecialist Data: ", action.payload);
    },
    // console.log(action.title)
    removeResources(state, action) {
      return state.filter((item) => item.id !== action.payload);
    },
  },
});

export const {
  addResources,
  removeResources,
  addProjectId,
  addWorkFlowId,
  addResourcesData,
  addResourcesPM,
  addResourcesUxDesigner,
  addResourcesUiDeveloper,
  addResourcesApiDeveloper,
  addResourcesTester,
  addResourcesUxResearch,
  addResourcesCiCd,
} = addresourcesSlice.actions;
export default addresourcesSlice.reducer;






// -----



// "use client";
// import { createSlice } from "@reduxjs/toolkit";
// const addresourcesSlice = createSlice({
//   name: "addResource",
//   initialState: {
//     id: [{ prjectId: {}, workFlowId:{}, }],
//     resoucesInfo: [],
//     UIUXDeveloper: [{ resoucesInfo: {} }],
//     FrontEndDeveloper: [{ resoucesInfo: {} }],
//     BackendDeveloper: [{ resoucesInfo: {} }],
//     SRE: [{ resoucesInfo: {} }],
//     DevOpsEngineer: [{ resoucesInfo: {} }],
//     AutomationTester: [{ resoucesInfo: {} }],
//     ProjectManager: [{ resoucesInfo: {} }],
//     UXDesigner: [{ resoucesInfo: {} }],
//     UIDeveloper: [{ resoucesInfo: {} }],
//     APIDeveloper: [{ resoucesInfo: {} }],
//     Tester: [],
//     UXResearcher: [{ resoucesInfo: {} }],
//     CICDSpecialist: [{ resoucesInfo: {} }],
//   },

//   reducers: {
//     addResources: (state, action) => {
//       state.id.push(action.payload);
//       console.log(action.payload);
//     },

//     addProjectId: (state, action) => {
//       state.id[0].prjectId = action.payload;
//       console.log(action.payload);
//     },
//     addWorkFlowId: (state, action) => {
//       state.id[0].workFlowId = action.payload;
//       console.log("workFlowData: ",action.payload);
//     },
//     addResourcesData: (state, action) => {
//       state.resoucesInfo.push(action.payload);
//       console.log("resources Data: ", action.payload);
//     },
//     addResourcesPM: (state, action) => {
//       state.ProjectManager[0].resoucesInfo = action.payload;
//       console.log("resources Data: ", action.payload);
//     },
//     addResourcesUxDesigner: (state, action) => {
//       state.UXDesigner[0].resoucesInfo = action.payload;
//       console.log("resources Data: ", action.payload);
//     },
//     addResourcesUiDeveloper: (state, action) => {
//       state.UIDeveloper[0].resoucesInfo = action.payload;
//       console.log("resources Data: ", action.payload);
//     },
//     addResourcesApiDeveloper: (state, action) => {
//       state.APIDeveloper[0].resoucesInfo = action.payload;
//       console.log("resources Data: ", action.payload);
//     },
//     addResourcesTester: (state, action) => {
//       state.Tester[0].resoucesInfo = action.payload;
//       console.log("resources Data: ", action.payload);
//     },
//     addResourcesUxResearch: (state, action) => {
//       state.UXResearcher[0].resoucesInfo = action.payload;
//       console.log("resources Data: ", action.payload);
//     },
//     addResourcesCiCd: (state, action) => {
//       state.CICDSpecialist[0].resoucesInfo = action.payload;
//       console.log("resources Data: ", action.payload);
//     },
//     // console.log(action.title)
//     removeResources(state, action) {
//       return state.filter((item) => item.id !== action.payload);
//     },
//   },
// });

// export const {
//   addResources,
//   removeResources,
//   addProjectId,
//   addWorkFlowId,
//   addResourcesData,
//   addResourcesPM,
//   addResourcesUxDesigner,
//   addResourcesUiDeveloper,
//   addResourcesApiDeveloper,
//   addResourcesTester,
//   addResourcesUxResearch,
//   addResourcesCiCd,
// } = addresourcesSlice.actions;
// export default addresourcesSlice.reducer;