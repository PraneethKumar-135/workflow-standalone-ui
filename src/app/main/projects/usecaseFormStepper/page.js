"use client"
import React, { useState, useEffect } from "react";
import { Steps, Tooltip, Breadcrumb } from "antd";
import { TiTick } from "react-icons/ti";
import { useSelector, useDispatch } from "react-redux";
// import { UseCase1Comments } from "../useCaseWorkViewDetailsComments/UseCaseComments";
// import { UseCase2Comments } from "../useCaseWorkViewDetailsComments/UseCaseComments";
// import { UseCase3Comments } from "../useCaseWorkViewDetailsComments/UseCaseComments";
// import CustomPopover from "./customPopover";

import Mock from "@/Components/AddUsecaseStepperForms/Mock";
import ActualDevelopmentForm from "@/Components/AddUsecaseStepperForms/ActualDevelopmentForm";
import CICDTestForm from "@/Components/AddUsecaseStepperForms/CI-CD-TestForm";
import StageReleaseForm from "@/Components/AddUsecaseStepperForms/Stage-ReleaseForm";
import PublishandOperateForm from "@/Components/AddUsecaseStepperForms/PublishandOperateForm";
import RequirementForm from "@/Components/AddUsecaseStepperForms/RequirementForm";
import { Tabs } from 'antd';


Mock


const Stepper = ({ popoverVisible, setWorkFlowView }) => {
  const [currentStep, setCurrentStep] = useState(0);

  const handleStepClick = (stepIndex) => {
    setCurrentStep(stepIndex);
  };

  const [requireData, setRequireData] = useState();
  const setUsecaseId = useSelector((state) => state.addUsecase);
  const UsecaseId = setUsecaseId.useCaseId

  useEffect(() => {
    const axios = require('axios');
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://spj7xgf470.execute-api.us-east-1.amazonaws.com/dev/usecase/${UsecaseId}`,
          {
            headers: {
              'Accept': 'application/json'
            }
          }
        );
        // console.log(response.data);
        setRequireData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData()
  }, [UsecaseId]);

  const handleContentChange = () => {
    switch (currentStep) {
      case 0:
        return <RequirementForm />;

      default:
        return null;
    }
  };

  const mappedSteps = requireData && requireData.usecase
    ? requireData.usecase.stages.map(stage => ({
      title: Object.keys(stage)[0], // Extracting the stage name from the dynamic key
      titlevalue: Object.values(stage)[0],
    }))
    : [];

  // mappedSteps.forEach(step => {
  //   const titlevalue = step.titlevalue;
  //   const checklist = titlevalue.checklist;
  //   const tasks = titlevalue.tasks;

  //   console.log(checklist);
  //   // console.log(tasks);

  //   const descriptions = checklist.map(item => item.description);

  //   console.log(descriptions);
  // });




  // console.log(mappedSteps)
  const Contentdata = () => {
    return (
      <div className="flex w-100% space-x-4">
        <div className="w-10% border rounded-xl bg-white">
          <Steps
            current={currentStep}
            onChange={handleStepClick}
            direction="vertical"
            className="w-[200px] gap-4 p-5 justify-center"
          >
            {mappedSteps.map((step, index) => (
              <Steps.Step
                key={index}
                title={step.title}
                icon={index < currentStep ? <TiTick size={24} fontWeight={1} /> : null}
              />
            ))}
          </Steps>
        </div>
        <div className="w-screen bg-white">{handleContentChange()}</div>
      </div>
    )
  }


  const items = [
    {
      key: '1',
      label: 'Overview',
      children: 'Content of Tab Pane 2',
    },
    {
      key: '2',
      label: 'Workflow View',
      children: <Contentdata />,
    },
    {
      key: '3',
      label: 'Asset view',
      children: 'Content of Tab Pane 3',
    },
    {
      key: '4',
      label: 'Planning',
      children: 'Content of Tab Pane 3',
    },
  ];

  const dispatch = useDispatch()

  // const DispatchData = () => {
  //   dispatch()
  // }
  return (
    <div className="flex flex-col p-5 bg-white ">
      <Breadcrumb
        className="mb-2"
        items={[
          {
            title: 'Home',
          },
          {
            title: <a href="">Procurement</a>,
          },
          {
            title: <a href="">Development workflow</a>,
          },
          {
            title: 'Use case 1',
          },
        ]}
      />
      <h1 className="text-base font-medium leading-normal tracking-normal text-left">Use case 1</h1>
      <div>
        <Tabs defaultActiveKey="1" items={items} />
      </div>
    </div>
  );
};

export default Stepper;
