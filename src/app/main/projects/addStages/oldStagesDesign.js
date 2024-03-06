"use client";

// export default page;
import React, { useState } from "react";
import { Input, Button, notification } from "antd";
import Link from "next/link";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import {
  DeleteFilled,
  SaveOutlined,
  CloseCircleFilled,
} from "@ant-design/icons";
import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";
import axios from "axios";
import { CgLaptop } from "react-icons/cg";

const Page = () => {
  const [allSubStages,setAllSubStages] = useState([]);
  const [workFlowName, setWorkFlowName] = useState("");
  const [stages, setStages] = useState([]);
  const setprojectIds = useSelector((state) => state.addResources);
  const ProjectId = setprojectIds.id[0].prjectId;
  const [api, contextHolder] = notification.useNotification();
  const [error, setError] = useState("");
  const [Stageerror, setStagError] = useState("");
  const [SubStageerror, setSubStageError] = useState("");
  let currentIndex = null;
  const handleChange = (e) => {
    const { value } = e.target;
    setWorkFlowName(value);
    // Define the regex pattern to match disallowed characters

    const disallowedRegex = /[#%^&*}{;:"><,?`|\\@]/;
    // Check if the value contains any disallowed characters
    if (disallowedRegex.test(value)) {
      setError(
        'Workflow name cannot contain special characters: #%^&*}{;:"><,?`@|'
      );
    } else {
      setError("");
    }
  };

  const openNotification = (placement, type, message) => {
    notification[type]({
      message: message,
      placement: placement,
    });
  };

  const router = useRouter();
  console.log(ProjectId);

  const postWorkflow = async () => {
    const axios = require("axios");
    let data = JSON.stringify({
      name: `${workFlowName}`,
      created_by_id: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
      project_id: `${ProjectId}`,
      stages: stages.map((stage) => ({
        name: stage.stageName,
        tasks: stage.subStages,
        checklist: stage.checklist,
      })),
    });
    console.log(data);
    let config = {
      method: "post",
      maxBodyLength: Infinity,
      url: "https://spj7xgf470.execute-api.us-east-1.amazonaws.com/dev/workflow",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      data: data,
    };

    axios
      .request(config)
      .then((response) => {
        console.log("success:", response);
        openNotification("topRight", "success", "UseCase saved successfully!");

        router.push("/main/projects/workflowlist");
      })
      .catch((error) => {
        const seterror = { error };
        console.log(seterror);
        const errorStatus = error.response.data.message;
        console.log(errorStatus);
        openNotification("topRight", "error", ` ${errorStatus}`);
        console.log(error);
      });
  };
  console.log(allSubStages)
  const handleAddStage = () => {
    setStages([
      ...stages,
      {
        stageName: "",
        subStages: [],
        checklist: [],
      },
    ]);
  };

  // const handleWorkFlowNameChange = (index, value) => {
  //   const updatedStages = [...stages];
  //   updatedStages[index].workFlowName = value;
  //   setStages(updatedStages);
  // };

  //   const isDuplicateSubStageName = (name) => {
  //     const substageNames = stages.map(stage => stage.stageName);
  //     const count = substageNames.filter(stageName => stageName === name).length;
  //     return count > 1;
  // };

  const handleStageNameChange = (index, value) => {
    currentIndex = index;
    const updatedStages = [...stages];
    const nameExists = stages.some((stage) => stage.stageName === value);
    if (nameExists) {
      setStagError("Workflow name already exists in stage names");
    } else {
      setStagError(
        (updatedStages[index].stageName = value),
        setStages(updatedStages)
      );
    }
  };
  console.log(currentIndex);

  const handleAddSubstage = (index) => {
    const updatedStages = [...stages];
    updatedStages[index].subStages.push("");
    setStages(updatedStages);
  };

  const handleAddChecklist = (index) => {
    const updatedStages = [...stages];
    updatedStages[index].checklist.push("");
    setStages(updatedStages);
  };

  return (
    <div>
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-semibold leading-snug tracking-normal text-left">
          Workflow Management
        </h1>
        <CloseCircleFilled style={{ fontSize: "20px", color: "blue" }} />
      </div>
      <h3 className="text-2xl font-medium leading-loose tracking-normal text-left pl-3">
        Creating Workflow
      </h3>
      <div className="flex justify-between p-4 items-center bg-white">
        <div className="w-[100%] flex flex-col">
          <Input
            placeholder="example"
            className="w-1/2"
            onChange={(e) => {
              setWorkFlowName(e.target.value), handleChange(e);
            }}
          />
          {error && <div className="error text-red-400">{error}</div>}
        </div>
        <Button
          icon={<SaveOutlined />}
          type="primary"
          className="bg-blue-500"
          onClick={handleAddStage}
        >
          Add Stage
        </Button>
      </div>

      {stages.map((stage, index) => (
        <div key={index} className="py-2 mt-2 flex flex-col space-y-2">
          <h3 className="text-base font-medium leading-normal tracking-normal text-left">
            Add Stage
          </h3>
          <div className="bg-white p-4 flex items-center justify-between">
            <h4 className="text-sm font-normal leading-snug tracking-normal">
              Stage Name :
            </h4>
            <div className="w-[50%] flex flex-col">
              <Input
                placeholder="Requirement"
                className="w-1/2"
                value={stage.stageName}
                onChange={(e) => {
                  handleStageNameChange(index, e.target.value);
                }}
              />
              {/* {Stageerror && (
                <div className="error text-red-400">{Stageerror}</div>
              )} */}
            </div>
            <DeleteFilled
              style={{ color: "red" }}
              onClick={() => {
                const updatedStages = stages.filter((_, i) => i !== index);
                setStages(updatedStages);
              }}
            />

            <Button
              type="primary"
              className="bg-blue-500"
              onClick={() => {
                handleAddChecklist(index);
              }}
            >
              Add Checklist
            </Button>
            <Button
              type="primary"
              className="bg-blue-500"
              onClick={() => handleAddSubstage(index)}
            >
              Add Sub Stages
            </Button>
          </div>

          <div>
            {/* Render Substages */}
            {stage.subStages.map((subStage, subIndex) => (
              <div
                key={subIndex}
                className="bg-white p-4 flex items-center justify-between my-1 ml-10"
              >
                <h4 className="text-sm font-normal leading-snug tracking-normal">
                  Sub Stage Name :
                </h4>
                <div className="w-[50%]">
                  <Input
                    placeholder="Substage"
                    className="w-1/2"
                    value={subStage}
                    onChange={(e) => {
                      const updatedStages = [...stages];
                    updatedStages[index].checklist.splice(checklistIndex, 1); // Remove the checklist item at checklistIndex
                    setStages(updatedStages);
                    }}
                  />
                  {SubStageerror && (
                    <div className="error text-red-400">{SubStageerror}</div>
                  )}
                </div>
                <Button
                  type="primary"
                  danger
                  onClick={() => {
                    const updatedStages = [...stages];
                    updatedStages[index].subStages.splice(subIndex, 1); // Remove the sub-stage at subIndex
                    setStages(updatedStages);
                  }}
                >
                  Remove
                </Button>
              </div>
            ))}
          </div>

          <div>
            {/* Render Checklists */}
            {stage.checklist.map((checklist, checklistIndex) => (
              <div
                key={checklistIndex}
                className="bg-white p-4 flex items-center justify-between my-1 ml-10"
              >
                <h4 className="text-sm font-normal leading-snug tracking-normal">
                  Checklist :
                </h4>
                <Input
                  placeholder="Checklist Item"
                  className="w-1/2"
                  value={checklist}
                  onChange={(e) => {
                    const updatedStages = [...stages];
                    updatedStages[index].checklist[checklistIndex] =
                      e.target.value;
                    setStages(updatedStages);
                  }}
                />
                <Button
                  type="primary"
                  danger
                  onClick={() => {
                    const updatedStages = [...stages];
                    updatedStages[index].checklist.splice(checklistIndex, 1); // Remove the checklist item at checklistIndex
                    setStages(updatedStages);
                  }}
                >
                  Remove
                </Button>
              </div>
            ))}
          </div>
        </div>
      ))}

      <div className="flex justify-center mt-6 w-[100%]">
        {/* <Link href="/main/projects/workflowlist"> */}
        <Button className="bg-blue-500 text-white" onClick={postWorkflow}>
          Save
        </Button>
        {contextHolder}
        {/* </Link> */}
      </div>
    </div>
  );
};

export default Page;
