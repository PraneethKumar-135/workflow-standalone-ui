"use client";
import api from "@/api";
import React from "react";
import { useState, useEffect } from "react";
import useProject from "@/HOC/Project/Project";
import Image from "next/image";
import { useSelector, useDispatch } from "react-redux";

import user from "../../../../public/assets/profile1.svg";
// import { useDispatch } from "react-redux";
import {
  addResources, addResourcesData, addResourcesPM, addResourcesUxDesigner, addResourcesUiDeveloper, addResourcesApiDeveloper, addResourcesTester, addResourcesUxResearch, addResourcesCiCd
} from "@/Context/AddresourcesSlice/addresourcesSlice";

export const Projectmanager = (props) => {
  // All Hooks
  const [projectResource, setprojectResource] = useState({
    resourcePool: [
      {
        projectManager: [],
      },
    ],
  });

  // project
  const [projectManager, setprojectManager] = useState([]);

  // select User
  const [selectUser, setSelectUser] = useState([]);
<<<<<<< HEAD


  // useProjec

=======
>>>>>>> 174299aa92d8a37c5a2223ed2b421313180a3733
  console.log(selectUser);
  // useEffect to fetch all users
  useEffect(() => {
    // Fetch data when the component mounts
    const fetchData = async () => {
      try {
        const response = await api.get("/get_resource_by_role", {
          params: {
            designation: "Project Manager",
          },
        });
        console.log(response.data);
        const data = response.data;
        setprojectManager(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  var handleResourcesAdd = (emp_id, data) => {
    dispatch(addResources({ id: emp_id}));
    dispatch(addResourcesData(data));
    console.log(emp_id, data);
  };
  const dispatch = useDispatch();
  console.log(selectUser);
<<<<<<< HEAD
  var handleResourcesAdd = (emp_id) => {
    dispatch(addResources({ id: emp_id }));

    console.log(emp_id);
  };
=======
 
>>>>>>> 174299aa92d8a37c5a2223ed2b421313180a3733
  var handleResourcesInfo = (pm) => {
    dispatch(addResourcesData(pm))
  }
  const [selectedDataPM, setSelectedDataPM] = useState([]);
  const handleAddResourcesPM = (data) => {
    const newData = [...selectedDataPM, data];
    setSelectedDataPM(newData);
    dispatch(addResourcesPM({ ProjectManager: newData }));
  };

  return (
    <div className="flex flex-col gap-4 bg-white w-[100%]">
      <div className="w-[100%] px-2 flex justify-center rounded">
        <div className=" w-[100%] ">
          {/* Project Manager useState Hook Data Map */}
          <div className="flex flex-col gap-6">
            {/* Display a static UI without mapping */}
            {projectManager.map((Manager, index) => (
              <div
                key={index}
                className="flex items-center justify-start py-3 pr-4 pl-4 gap-40 bg-white shadow-md border border-gray-200 border-t-0 rounded-lg"
              >
                <div className="flex justify-between items-center gap-6 pl-3 w-[100%]">
                  <div className="flex items-center gap-3">
                    <Image src={Manager.image_url} />
                    <div>
                      <h1 className="text-gray-800 font-segoe-ui text-base font-bold leading-normal">
                        {Manager.first_name} {Manager.last_name}
                        <span className="text-blue-300">{Manager.email}</span>
                      </h1>
                      <h3 className="text-neutral-300 font-segoe-ui text-base font-normal leading-normal"></h3>
                    </div>
                  </div>
                  <div>
                    {/* CheckBox Button */}
                    <input
                      type="checkbox"
<<<<<<< HEAD
                      onChange={(e) => {
                        // handleResourcesAdd(Manager.emp_id);
                        // dispatch(addResources( Manager.emp_id ));
                        handleResourcesAdd(Manager.emp_id)
                        handleResourcesInfo(projectManager)

                        const isChecked = e.target.checked;
                        const empId = Manager.emp_id;
                        if (isChecked) {
                          handleAddResourcesPM(empId);
                        } else {
                          // Handle deselecting the checkbox
                          const updatedSelectedData = selectedDataPM.filter(id => id !== empId);
                          setSelectedDataPM(updatedSelectedData);
                          dispatch(addResourcesPM({ ProjectManager: updatedSelectedData }));
                        }
=======
                      onChange={() => {
                        const selectedId = Manager.emp_id;
                        const selectedData = { name: Manager.first_name, last_name: Manager.last_name, email: Manager.email }; 
                        handleResourcesAdd(selectedId, selectedData); 
>>>>>>> 174299aa92d8a37c5a2223ed2b421313180a3733
                      }}
                      className="cursor-pointer"
                    />
                  </div>
                </div>
              </div>
            ))}
            {/* Repeat the above structure for each item you want to display */}
          </div>
        </div>
      </div>
    </div>
  );
};

// Api Developer
export const ApiDeveloper = (props) => {
  // All Hooks
  // const handleResourcesAdd = (emplyyId) => {
  //   dispatch(addResources({ id: emplyyId }));
  // console.log("dispatch",emplyyId)
  // if (emplyyId) {
  //   console.log("If-Else -dispatch", emplyyId);
  //   ;
  // } else {
  //   console.error("empId is undefined");
  // }
  // dispatch(addResources({id:emplyyId}));

  // API Developer
  const [apiDeveloper, setApiDeveloper] = useState([]);

  // select User
  // useEffect to fetch all API Developers
  useEffect(() => {
    // Fetch data when the component mounts
    const fetchData = async () => {
      try {
        const response = await api.get("/get_resource_by_role", {
          params: {
            designation: "API Developer",
          },
        });
        console.log(response.data);
        const data = response.data;
        setApiDeveloper(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  // HandleCheckBoxChanges
  const dispatch = useDispatch();
  var handleResourcesAdd = (emp_id) => {
    dispatch(addResources({ id: emp_id }));

    console.log(emp_id);
  };
  var handleResourcesInfo = (apiDeveloper) => {
    dispatch(addResourcesData(apiDeveloper))
  }
  const handleAddResourcesUxDesigner = (data) => {
    dispatch(addResourcesApiDeveloper({ APIDeveloper: [data] })); // Dispatch action with the modified data object
  };

  const [selectedDataApiD, setSelectedDataApiD] = useState([]);

  const handleAddResourcesApiDeveloper = (data) => {
    const newData = [...selectedDataApiD, data];
    setSelectedDataApiD(newData);
    dispatch(addResourcesApiDeveloper({ APIDeveloper: newData }));
  };

  return (
    <div className="flex flex-col gap-4 bg-white w-[100%]">
      <div className="w-[100%] px-2 flex justify-center rounded">
        <div className=" w-[100%] ">
          {/* Project Manager useState Hook Data Map */}
          <div className="flex flex-col gap-6">
            {/* Display a static UI without mapping */}

            {apiDeveloper.map((Manager, index) => {
              console.log("employ_id", Manager.emp_id);
              console.log(apiDeveloper)
              return (
                <div
                  key={index}
                  className="flex items-center justify-start py-3 pr-4 pl-4 gap-40 bg-white shadow-md border border-gray-200 border-t-0 rounded-lg"
                >
                  <div className="flex justify-between items-center gap-6 pl-3 w-[100%]">
                    <div className="flex items-center gap-3">
                      <Image src={Manager.image_url} />
                      <div>
                        <h1 className="text-gray-800 font-segoe-ui text-base font-bold leading-normal">
                          {Manager.first_name} {Manager.last_name}
                          <span className="text-blue-300">{Manager.email}</span>
                        </h1>
                        <h3 className="text-neutral-300 font-segoe-ui text-base font-normal leading-normal"></h3>
                      </div>
                    </div>
                    <div>
                      {/* CheckBox Button */}
                      <input
                        type="checkbox"
                        // onChange={()=>{
                        //   console.log("on changed",emplyyId),handleResourcesAdd(emplyyId)}}
                        className="cursor-pointer"
                        onChange={(e) => {
                          handleResourcesAdd(Manager.emp_id)
                          handleResourcesInfo(apiDeveloper)

                          const isChecked = e.target.checked;
                          const empId = Manager.emp_id;
                          if (isChecked) {
                            handleAddResourcesApiDeveloper(empId);
                          } else {
                            // Handle deselecting the checkbox
                            const updatedSelectedData = selectedDataApiD.filter(id => id !== empId);
                            setSelectedDataApiD(updatedSelectedData);
                            dispatch(addResourcesApiDeveloper({ APIDeveloper: updatedSelectedData }));
                          }
                        }}
                      />
                    </div>
                  </div>
                </div>
              );
            })}
            {/* Repeat the above structure for each item you want to display */}
          </div>
        </div>
      </div>
    </div>
  );
};

// cicd
export const CiCdResourcePool = (props) => {
  const [CiCd, setCiCd] = useState([]);
  const [selectUser, setSelectUser] = useState([]);

  // useProject
  const [project, setProject] = useProject({
    resourcePool: [
      {
        cicd: [],
      },
    ],
  });

  // handleSelectionAndCLose
  const handleSelectionAndClose = () => {
    // console.log(selectUser);

    setProject((prevProject) => {
      const updatedResourcePool = [
        {
          cicid: selectUser,
        },
      ];
      return {
        ...prevProject,
        resourcePool: updatedResourcePool,
      };
    });

    props.onSubmit();
  };

  // HandleCheckBoxChange
  var handleResourcesAdd = (emp_id) => {
    dispatch(addResources({ id: emp_id }));

    console.log(emp_id);
  };
  var handleResourcesInfo = (CiCd) => {
    dispatch(addResourcesData(CiCd))
  }

  const [selectedDataCiCd, setSelectedDataCiCd] = useState([]);


  const handleAddResourcesCiCd = (data) => {
    const newData = [...selectedDataCiCd, data];
    setSelectedDataCiCd(newData);
    dispatch(addResourcesCiCd({ CICDSpecialist: newData }));
  };

  // console.log(project);

  // useEffect to fetch all users
  useEffect(() => {
    // Fetch data when the component mounts
    const fetchData = async () => {
      try {
        const response = await api.get("/get_resource_by_role", {
          params: {
            designation: "CI/CD",
          },
        });

        console.log(response.data);
        const data = response.data;
        setCiCd(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);
  const dispatch = useDispatch();

  return (
    <div className="flex flex-col gap-4 bg-white w-[100%]">
      <div className="w-[100%] px-2 flex justify-center rounded">
        <div className=" w-[100%] ">
          {/* Project Manager useState Hook Data Map */}
          <div className="flex flex-col gap-6">
            {/* Display a static UI without mapping */}
            {CiCd.map((Manager, index) => (
              <div
                key={index}
                className="flex items-center justify-start py-3 pr-4 pl-4 gap-40 bg-white shadow-md border border-gray-200 border-t-0 rounded-lg"
              >
                <div className="flex justify-between items-center gap-6 pl-3 w-[100%]">
                  <div className="flex items-center gap-3">
                    <Image src={Manager.image_url} />
                    <div>
                      <h1 className="text-gray-800 font-segoe-ui text-base font-bold leading-normal">
                        {Manager.first_name} {Manager.last_name}
                        <span className="text-blue-300">{Manager.email}</span>
                      </h1>
                      <h3 className="text-neutral-300 font-segoe-ui text-base font-normal leading-normal"></h3>
                    </div>
                  </div>
                  <div>
                    {/* CheckBox Button */}
                    <input
                      type="checkbox"
                      onChange={(e) => {
                        handleResourcesAdd(Manager.emp_id)
                        handleResourcesInfo(CiCd)

                        const isChecked = e.target.checked;
                        const empId = Manager.emp_id;
                        if (isChecked) {
                          handleAddResourcesCiCd(empId);
                        } else {
                          // Handle deselecting the checkbox
                          const updatedSelectedData = selectedDataCiCd.filter(id => id !== empId);
                          setSelectedDataCiCd(updatedSelectedData);
                          dispatch(addResourcesCiCd({ CICDSpecialist: updatedSelectedData }));
                        }
                      }}
                      className="cursor-pointer"
                    />
                  </div>
                </div>
              </div>
            ))}
            {/* Repeat the above structure for each item you want to display */}
          </div>
        </div>
      </div>
    </div>
  );
};

// Tester
export const TesterResourcePool = (props) => {
  const [Tester, setTester] = useState([]);
  const [selectUser, setSelectUser] = useState([]);



  // useProject
  const [projectResource, setprojectResource] = useState({
    Tester: [],
  });

  // HandleCheckBoxChange

<<<<<<< HEAD
  console.log(selectUser);
  var handleResourcesAdd = (emp_id) => {
    dispatch(addResources({ id: emp_id }));

    console.log(emp_id);
  };
  var handleResourcesInfo = (Tester) => {
    dispatch(addResourcesData(Tester))
  }
=======
  // console.log(selectUser);
  // var handleResourcesAdd = (emp_id ) => {
  //   setSelectUser (emp_id)
  //   dispatch(addResources({ id: (selectUser) }));

  //   console.log(emp_id);
  // };
  // var handleResourcesInfo = (Tester) =>{
  //   console.log(Tester.emp_id)
  //   console.log(selectUser)
  //   if (selectUser ===  Tester.emp_id){
  //   dispatch(addResourcesData(Tester))
  //   }
  //   else{
  //     console.log(" notDispached")
  //   }
  // }
  var handleResourcesAdd = (emp_id, data) => {
    dispatch(addResources({ id: emp_id}));
    dispatch(addResourcesData(data));
    console.log(emp_id, data);
  };

  // var handleResourcesInfo = (emp_id) => {
  //   const selectedId = emp_id;
  //   console.log(selectedId)
  //   // Agar selected ID hai toh resources ko dispatch karein
  //   dispatch(addResourcesData({ id: selectedId }));
  // };


  // const handleResourcesAdd = (emp_id) => {
>>>>>>> 174299aa92d8a37c5a2223ed2b421313180a3733

  const [selectedDataTester, setSelectedDataTester] = useState([]);

  const handleAddResourcesTester = (data) => {
    const newData = [...selectedDataTester, data];
    setSelectedDataTester(newData);
    dispatch(addResourcesTester({ Tester: newData }));
  };


  useEffect(() => {
    // Fetch data when the component mounts
    const fetchData = async () => {
      try {
        const response = await api.get("/get_resource_by_role", {
          params: {
            designation: "Tester",
          },
        });
        console.log(response.data);
        const data = response.data;
        setTester(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);
  var dispatch = useDispatch();


  return (
    <div className="flex flex-col gap-4 bg-white w-[100%]">
      <div className="w-[100%] px-2 flex justify-center rounded">
        <div className=" w-[100%] ">
          {/* Project Manager useState Hook Data Map */}
          <div className="flex flex-col gap-6">
            {/* Display a static UI without mapping */}
            {Tester.map((Manager, index) => (

              <div
                key={index}
                className="flex items-center justify-start py-3 pr-4 pl-4 gap-40 bg-white shadow-md border border-gray-200 border-t-0 rounded-lg"
              >
                <div className="flex justify-between items-center gap-6 pl-3 w-[100%]">
                  <div className="flex items-center gap-3">
                    <Image src={Manager.image_url} />
                    <div>
                      <h1 className="text-gray-800 font-segoe-ui text-base font-bold leading-normal">
                        {Manager.first_name} {Manager.last_name}
                        <span className="text-blue-300">{Manager.email}</span>
                      </h1>
                      <h3 className="text-neutral-300 font-segoe-ui text-base font-normal leading-normal"></h3>
                    </div>
                  </div>
                  <div>
                    {/* CheckBox Button */}
                    <input
                      type="checkbox"
<<<<<<< HEAD
                      onChange={(e) => {


                        handleResourcesAdd(Manager.emp_id)
                        handleResourcesInfo(Tester)

                        const isChecked = e.target.checked;
                        const empId = Manager.emp_id;
                        if (isChecked) {
                          handleAddResourcesTester(empId);
                        } else {
                          // Handle deselecting the checkbox
                          const updatedSelectedData = selectedDataTester.filter(id => id !== empId);
                          setSelectedDataTester(updatedSelectedData);
                          dispatch(addResourcesTester({ Tester: updatedSelectedData }));
                        }
=======
                      onChange={() => {
                        const selectedId = Manager.emp_id;
                        const selectedData = { name: Manager.first_name, last_name: Manager.last_name, email: Manager.email }; 
                        handleResourcesAdd(selectedId, selectedData); 
>>>>>>> 174299aa92d8a37c5a2223ed2b421313180a3733
                      }}
                      className="cursor-pointer"
                    />
                  </div>
                </div>
              </div>
            ))}
            {/* Repeat the above structure for each item you want to display */}
          </div>
        </div>
      </div>
    </div>
  );
};

export const UxDesignResourcePool = (props) => {
  // /get_resource_by_role

  const [uxDesigner, setUxDesigners] = useState([]);
  const [selectUser, setSelectUser] = useState([]);

  // useProject
  const [project, setProject] = useProject({
    resourcePool: [
      {
        uiDesigner: [],
      },
    ],
  });

  // HandleCheckBoxChange
  var handleResourcesAdd = (emp_id) => {
    dispatch(addResources({ id: emp_id }));

    console.log(emp_id);
  };
  var handleResourcesInfo = (uxDesigner) => {
    dispatch(addResourcesData(uxDesigner))
  }


  const [selectedDataUxDesign, setSelectedDataUxDesign] = useState([]);
  const handleAddResourcesUxDesigner = (data) => {
    const newData = [...selectedDataUxDesign, data];
    setSelectedDataUxDesign(newData);
    dispatch(addResourcesUxDesigner({ UXDesigner: newData }));
  };


  console.log(selectUser);

  // console.log(project);

  // useEffect to fetch all users
  useEffect(() => {
    // Fetch data when the component mounts
    const fetchData = async () => {
      try {
        const response = await api.get("/get_resource_by_role", {
          params: {
            designation: "UI Designer",
          },
        });
        console.log(response.data);
        const data = response.data;
        setUxDesigners(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);
  const dispatch = useDispatch();

  return (
    <div className="flex flex-col gap-4 bg-white w-[100%]">
      <div className="w-[100%] px-2 flex justify-center rounded">
        <div className="rounded-lg bg-white shadow-md w-[100%] border border-gray-200 border-t-0">
          {/* Project Manager useState Hook Data Map */}
          <div>
            {/* Display a static UI without mapping */}
            <div className="flex items-center justify-start py-6 pr-4 pl-4 gap-40">
              <div className="flex justify-between items-center gap-6 pl-3 w-[100%]">
                <div className="flex flex-col gap-6">
                  {/* Display a static UI without mapping */}
                  {uxDesigner.map((Manager, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-start py-3 pr-4 pl-4 gap-40 bg-white shadow-md border border-gray-200 border-t-0 rounded-lg"
                    >
                      <div className="flex justify-between items-center gap-6 pl-3 w-[100%]">
                        <div className="flex items-center gap-3">
                          <Image src={Manager.image_url} />
                          <div>
                            <h1 className="text-gray-800 font-segoe-ui text-base font-bold leading-normal">
                              {Manager.first_name} {Manager.last_name}
                              <span className="text-blue-300">
                                {Manager.email}
                              </span>
                            </h1>
                            <h3 className="text-neutral-300 font-segoe-ui text-base font-normal leading-normal"></h3>
                          </div>
                        </div>
                        <div>
                          {/* CheckBox Button */}
                          <input
                            type="checkbox"
                            onChange={(e) => {
                              handleResourcesAdd(Manager.emp_id)
                              handleResourcesInfo(uxDesigner)
<<<<<<< HEAD
                              const isChecked = e.target.checked;
                              const empId = Manager.emp_id;
                              if (isChecked) {
                                handleAddResourcesUxDesigner(empId);
                              } else {
                                // Handle deselecting the checkbox
                                const updatedSelectedData = selectedDataUxDesign.filter(id => id !== empId);
                                setSelectedDataUxDesign(updatedSelectedData);
                                dispatch(addResourcesUxDesigner({ UXDesigner: updatedSelectedData }));
                              }
=======
>>>>>>> 174299aa92d8a37c5a2223ed2b421313180a3733
                            }}
                            className="cursor-pointer"
                          />
                        </div>
                      </div>
                    </div>
                  ))}
                  {/* Repeat the above structure for each item you want to display */}
                </div>
              </div>
            </div>
            {/* Repeat the above structure for each item you want to display */}
          </div>
        </div>
      </div>
    </div>
  );
};

export const UiDeveloperResourcePool = (props) => {
  const [uiDeveloper, setuiDeveloper] = useState([]);
  const [selectUser, setSelectUser] = useState([]);


  // useProject
  const [project, setProject] = useProject({
    resourcePool: [
      {
        uiDeveloper: [],
      },
    ],
  });

  // HandleCheckBoxChange
  var handleResourcesAdd = (emp_id) => {
    dispatch(addResources({ id: emp_id }));

    console.log(emp_id);
  };
  var handleResourcesInfo = (uiDeveloper) => {
    dispatch(addResourcesData(uiDeveloper))
  }




  const handleAddResourcesCiCd = (data) => {
    dispatch(addResourcesUiDeveloper({ UIDeveloper: [data] })); // Dispatch action with the modified data object
  };

  console.log(selectUser);




  const [selectedDataUiDeveloper, setSelectedDataUiDeveloper] = useState([]);

  const handleAddResourcesUiDeveloper = (data) => {
    const newData = [...selectedDataUiDeveloper, data];
    setSelectedDataUiDeveloper(newData);
    dispatch(addResourcesUiDeveloper({ UIDeveloper: newData }));
  };



  // console.log(project);

  // useEffect to fetch all users
  useEffect(() => {
    // Fetch data when the component mounts
    const fetchData = async () => {
      try {
        const response = await api.get("/get_resource_by_role", {
          params: {
            designation: "UI Developer",
          },
        });
        console.log(response.data);
        const data = response.data;
        setuiDeveloper(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);
  const dispatch = useDispatch();

  return (
    <div className="flex flex-col gap-4 bg-white w-[100%]">
      <div className="w-[100%] px-2 flex justify-center rounded">
        <div className=" w-[100%] ">
          {/* Project Manager useState Hook Data Map */}
          <div className="flex flex-col gap-6">
            {/* Display a static UI without mapping */}
            {uiDeveloper.map((Manager, index) => (
              <div
                key={index}
                className="flex items-center justify-start py-3 pr-4 pl-4 gap-40 bg-white shadow-md border border-gray-200 border-t-0 rounded-lg"
              >
                <div className="flex justify-between items-center gap-6 pl-3 w-[100%]">
                  <div className="flex items-center gap-3">
                    <Image src={Manager.image_url} />
                    <div>
                      <h1 className="text-gray-800 font-segoe-ui text-base font-bold leading-normal">
                        {Manager.first_name} {Manager.last_name}
                        <span className="text-blue-300">{Manager.email}</span>
                      </h1>
                      <h3 className="text-neutral-300 font-segoe-ui text-base font-normal leading-normal"></h3>
                    </div>
                  </div>
                  <div>
                    {/* CheckBox Button */}
                    <input
                      type="checkbox"
                      onChange={(e) => {
                        handleResourcesAdd(Manager.emp_id)
                        handleResourcesInfo(uiDeveloper)
<<<<<<< HEAD
                        const isChecked = e.target.checked;
                        const empId = Manager.emp_id;
                        if (isChecked) {
                          handleAddResourcesUiDeveloper(empId);
                        } else {
                          // Handle deselecting the checkbox
                          const updatedSelectedData = selectedDataUiDeveloper.filter(id => id !== empId);
                          setSelectedDataUiDeveloper(updatedSelectedData);
                          dispatch(addResourcesUiDeveloper({ UIDeveloper: updatedSelectedData }));
                        }
=======
>>>>>>> 174299aa92d8a37c5a2223ed2b421313180a3733
                      }}
                      className="cursor-pointer"
                    />
                  </div>
                </div>
              </div>
            ))}
            {/* Repeat the above structure for each item you want to display */}
          </div>
        </div>
      </div>
    </div>
  );
};

export const UxResearcher = (props) => {
  const [uxResearcher, setuxResearcher] = useState([]);
  const [selectUser, setSelectUser] = useState([]);

  // useProject
  const [project, setProject] = useProject({
    resourcePool: [
      {
        uxResearcher: [],
      },
    ],
  });

  // HandleCheckBoxChange
  // const handleCheckboxChange = (userId) => {
  //   // Check if userId is already in selectUser
  //   if (selectUser.includes(userId)) {
  //     // If yes, remove it
  //     setSelectUser((prevState) => prevState.filter((id) => id !== userId));
  //   } else {
  //     // If no, add it
  //     setSelectUser((prevState) => [...prevState, userId]);
  //   }
  // };



  // console.log(project);

  // useEffect to fetch all users
  useEffect(() => {
    // Fetch data when the component mounts
    const fetchData = async () => {
      try {
        const response = await api.get("/get_resource_by_role", {
          params: {
            designation: "Ux Researcher",
          },
        });
        console.log(response.data);
        const data = response.data;
        setuxResearcher(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);
  const dispatch = useDispatch();

  console.log(selectUser);
  var handleResourcesAdd = (emp_id) => {
    dispatch(addResources({ id: emp_id }));

    console.log(emp_id);
  };
  var handleResourcesInfo = (uxResearcher) => {
    dispatch(addResourcesData(uxResearcher))
  }

  const [selectedDataUxResearch, setSelectedDataUxResearch] = useState([]);

  const handleAddResourcesUxResearch = (data) => {
    const newData = [...selectedDataUxResearch, data];
    setSelectedDataUxResearch(newData);
    dispatch(addResourcesUxResearch({ UXResearcher: newData }));
  };

  return (
    <div className="flex flex-col gap-4 bg-white w-[100%]">
      <div className="w-[100%] px-2 flex justify-center rounded">
        <div className=" w-[100%] ">
          {/* Project Manager useState Hook Data Map */}
          <div className="flex flex-col gap-6">
            {/* Display a static UI without mapping */}
            {uxResearcher.map((Manager, index) => (
              <div
                key={index}
                className="flex items-center justify-start py-3 pr-4 pl-4 gap-40 bg-white shadow-md border border-gray-200 border-t-0 rounded-lg"
              >
                <div className="flex justify-between items-center gap-6 pl-3 w-[100%]">
                  <div className="flex items-center gap-3">
                    <Image src={Manager.image_url} />
                    <div>
                      <h1 className="text-gray-800 font-segoe-ui text-base font-bold leading-normal">
                        {Manager.first_name} {Manager.last_name}
                        <span className="text-blue-300">{Manager.email}</span>
                      </h1>
                      <h3 className="text-neutral-300 font-segoe-ui text-base font-normal leading-normal"></h3>
                    </div>
                  </div>
                  <div>
                    {/* CheckBox Button */}
                    <input
                      type="checkbox"
                      onChange={(e) => {
                        handleResourcesAdd(Manager.emp_id),
                          handleResourcesInfo(uxResearcher)
<<<<<<< HEAD


                        const isChecked = e.target.checked;
                        const empId = Manager.emp_id;
                        if (isChecked) {
                          handleAddResourcesUxResearch(empId);
                        } else {
                          // Handle deselecting the checkbox
                          const updatedSelectedData = selectedDataUxResearch.filter(id => id !== empId);
                          setSelectedDataUxResearch(updatedSelectedData);
                          dispatch(addResourcesUxResearch({ UXResearcher: updatedSelectedData }));
                        }
=======
>>>>>>> 174299aa92d8a37c5a2223ed2b421313180a3733
                      }}
                      className="cursor-pointer"
                    />
                  </div>
                </div>
              </div>
            ))}
            {/* Repeat the above structure for each item you want to display */}
          </div>
        </div>
      </div>
    </div>
  );
};
