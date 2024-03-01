"use client"
import { createSlice } from "@reduxjs/toolkit";
const addresourcesSlice = createSlice({
  name: "addResource",
  initialState: {
    id: [{ prjectId: {}, workFlowId: {}, }],
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
      state.id.push(action.payload);
      console.log(action.payload);
    },

    addProjectId: (state, action) => {
      state.id[0].prjectId = action.payload;
      console.log(action.payload);
    },
    addWorkFlowId: (state, action) => {
      state.id[0].workFlowId = action.payload;
      console.log("workFlowData: ", action.payload);
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
