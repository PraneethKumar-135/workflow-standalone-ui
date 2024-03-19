"use client";
"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Button, message, Steps, theme } from "antd";
import AddResourcePool2 from "@/Components/AddResourcePool/AddresoucrePool2";
import AddNewProjectForm from "@/Components/AddNewProjectForm/AddNewProjectForm";
import AddEmployReview from "@/Components/AddEmployeeReview/AddEmployReview";
import { useDispatch, useSelector } from "react-redux";
import { updateId } from "@/Context/AddNewProjectSlice/addProjectSlice";
import { addProjectId } from "@/Context/AddresourcesSlice/addresourcesSlice";
import Link from "next/link";
import { setNavigateToFirstPage, setNavigateToSecondPage } from "@/Context/AddNewProjectSlice/addProjectSlice";


const { Step } = Steps;

const steps = [
  {
    title: "Set up Project",
    content: <AddNewProjectForm />,
  },
  {
    title: "Resource pool",
    content: <AddResourcePool2 />,
  },
  {
    title: "Review",
    content: <AddEmployReview />,
  },
];

export default function page({ formNext }) {
  const currentStep = useSelector(state => state.addProject);
  const shouldNavigateToFirstPage = currentStep.shouldNavigateToFirstPage;
  const shouldNavigateToSecondPage = currentStep.shouldNavigateToSecondPage;

  const projectData = useSelector((state) => state.addProject);
  console.log(projectData)

  // const resourcesId = setresourcesId.id[0].resourcesId


  // console.log("TesterId", TesterId)
  // 
  // const ValueresourcesId = resourcesId.map((obj) => Object.values(obj));
  // console.log(ValueresourcesId);
  // console.log("resoursesId", resourcesId);
  // const str = useSelector((state) => state);
  console.log(projectData);

  const [toggleValue, setToggleValue] = useState(false);
  const [formData, setFormData] = useState({});

  // Function to receive the form data from the child component
  const receiveFormDataFromChild = (data) => {
    console.log("Received data from child:", data);
    setFormData(data); // Update the state in the parent component
  };

  const nonViewsteps = [
    {
      title: "Set up Project",
      content: <AddNewProjectForm />,
    },
    {
      title: "Resource pool",
      content: <AddResourcePool2 />,
    },
    {
      title: "Review",
      content: <AddEmployReview />,
    },
  ];

  const { token } = theme.useToken();
  const [current, setCurrent] = useState(0);
  // setCurrent(shouldNavigateToFirstPage);

  const prev = () => {
    setCurrent(current - 1);
  };

  // const next = () => {
  //   setCurrent(current + 1);

  // };  
  const items = steps.map((item) => ({
    key: item.title,
    title: item.title,
  }));

  const contentStyle = {
    textAlign: "center",
    color: token.colorTextTertiary,
    marginTop: 16,
  };


  // Api project push

  const handleSubmit = async () => {
   
    if (current === 1) {
      setCurrent(current + 1)
    }
    if (current === 0) {

      try {
        // console.log(projectData)
        await Apisubmit(projectData);

      } catch (error) {
        console.error("Error submitting data:", error);
      }
    }

  };

  const axios = require("axios");

  const Apisubmit = async (project) => {
    const projectname = project.projectName;
    console.log(projectname);
    let data = JSON.stringify({
      name: project.projectName,
      description: project.projectDescription,
      department: project.projectDepartment,
      start_date: project.startDate,
      end_date: project.endDate,
      image_url: project.image_url,
    });

    let config = {
      method: "post",
      maxBodyLength: Infinity,
      url: "https://spj7xgf470.execute-api.us-east-1.amazonaws.com/dev/project",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      data: data,
    };

    axios
      .request(config)
      .then((response) => {
        console.log(JSON.stringify(response.data));
        const result = response.data;
        console.log("success:", result, result.id);
        dispatch(updateId(result.id));
        setCurrent(current + 1);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const dispatch = useDispatch();

  useEffect(() => {
    if (shouldNavigateToFirstPage) {
      setCurrent(0);
      dispatch(setNavigateToFirstPage(false));
    }
    else if (shouldNavigateToSecondPage) {
      setCurrent(1);
      dispatch(setNavigateToSecondPage(false));
    }
  }, [shouldNavigateToSecondPage, dispatch]);

  return (
    <>
      <div className="w-auto py-2 px-1 mb-2 bg-white">
        <h1 className="text-2xl font-semibold ">Create Project</h1>
        <p>
          Form pages are used to collect or verify information to users, and
          basic forms are common in scenarios where there are fewer data items.
        </p>
        {toggleValue.toString()}
      </div>
      <div className="w-auto py-1 p-1 bg-white">
        <Steps current={current} items={items} className="px-[10rem] py-3 p-5" />
        <div style={contentStyle}>
          {/* Render content based on current step */}
          {steps[current].content}
        </div>

        <div style={{ marginTop: 24 }}>
          {current <= steps.length - 1 && (
            <Button
              type="primary"
              onClick={() => handleSubmit()}
              className="ml-[90%] m-10 px-2 py-1 justify-center items-center rounded-sm border border-blue-500 bg-blue-500 shadow-sm h-8 font-sans text-center text-white text-sm font-normal not-italic leading-3 flex-row-reverse"
            >
              Next
            </Button>
          )}


          {current === steps.length - 1 && (
            <Link href="/main/projects/workflowlist">
              <Button
                type="primary"
                className="ml-[90%] m-10 px-2 py-1 justify-center items-center rounded-sm border border-blue-500 bg-blue-500 shadow-sm h-8 font-sans text-center text-white text-sm font-normal not-italic leading-3 flex-row-reverse"
              >
                Create
              </Button>
            </Link>
          )}
        </div>
      </div>
    </>
  );
}
