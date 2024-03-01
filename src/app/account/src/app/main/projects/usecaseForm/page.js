"use client";
import { Form, Input, Upload, Button, message, DatePicker } from "antd";
import Link from "next/link";
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
// import { useRouter } from "next/router";
import { useRouter } from "next/navigation";
import moment from "moment";

const layout = {
  labelCol: {
    span: 8,
    labelCol: {
      span: 8,
      style: {
        fontsize: "medium", // Darken the label color
      },
    },
    wrapperCol: {
      span: 16,
    },
  },
  wrapperCol: {
    span: 16,
  },
};

const newform = () => {
  const setprojectIds = useSelector((state) => state.addResources);
  const projectId = setprojectIds.id[0].prjectId;
  const setWorkFlowIds = useSelector((state) => state.addResources);
  const workFlowId = setWorkFlowIds.id[0].workFlowId;

  const router = useRouter();

  const [project, setProject] = useState({
    usecase_name: "",
    assigned_to_id: "e252ea71-6452-49b1-b32b-449112303af2",
    description: "",
    start_date: null,
    end_date: null,
    workflow_id: `${workFlowId}`,
    project_id: `${projectId}`,
    created_by_id: "5b5e750a-3244-402d-b7cb-50f035badf51",
  });
  console.log(project);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setProject({ ...project, [name]: value });
  };

  const handleStartDateChange = (date, dateString) => {
    setProject({
      ...project,
      start_date: moment(dateString).format("YYYY-MM-DD"),
    });
  };

  const handleEndDateChange = (date, dateString) => {
    setProject({
      ...project,
      end_date: moment(dateString).format("YYYY-MM-DD"),
    });
  };

  const axios = require("axios");
  const handleSubmit = async () => {
    let data = JSON.stringify({
      project_id: `${project.project_id}`,
      created_by_id: `${project.created_by_id}`,
      usecase_name: `${project.usecase_name}`,
      assigned_to_id: `${project.assigned_to_id}`,
      // assigned_to_id: ,
      description: `${project.description}`,
      workflow_id: `${project.workflow_id}`,
      start_date: `${project.start_date}`,
      end_date: `${project.end_date}`,
    });
    console.log("data:", data);
    console.log("data:", data);
    let config = {
      method: "post",
      maxBodyLength: Infinity,
      url: "https://spj7xgf470.execute-api.us-east-1.amazonaws.com/dev/usecase",
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

        router.push("/main/projects/developmentUsecases");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="">
      <div className="flex w-[100%] flex-col items-start gap-5">
        <div className=" bg-white px-4 py-4 w-[100%] ">
          <h1 className="flex w-[100%] h-7 flex-col justify-center text-black  text-2xl non-italic font-semibold leading-snug">
            Procurement (Development workflow)
          </h1>
          <p>
            Form pages are used to collect or verify information to users, and
            basic forms are common in scenarios where there are fewer data
            items.
          </p>
        </div>
      </div>

      <section className="flex flex-col items-center flex-shrink-0 mt-4  w-auto py-1 h-screen bg-white">
        <h1 className="text-black text-2xl font-semibold leading-normal  px-4 py-4 w-[100%] flex items-center">
          Basic Details
        </h1>
        <Form
          {...layout}
          name="nest-messages"
          style={{
            maxWidth: 600,
          }}
        >
          <Form.Item
            name={["UsecaseName"]}
            label="Usecase Name :"
            rules={[
              {
                message: "Please input the project name!",
              },
            ]}
          >
            <Input
              value={project.usecase_name}
              name={["usecase_name"]}
              label="Usecase Name :"
              id="projectName"
              onChange={handleChange}
            />
          </Form.Item>

          <Form.Item
            name={["AssignTo"]}
            label="Assign To :"
            rules={[
              {
                message: "Please input the project description!",
              },
            ]}
          >
            <Input
              name="assigned_to_id"
              id="assigned_to_id"
              value={project.assigned_to_id}
              // onChange={handleChange}
            />
          </Form.Item>

          <Form.Item
            name={["UsecaseDescription"]}
            label="Usecase Description :"
            rules={[
              {
                message: "Please input the project department!",
              },
            ]}
          >
            <Input
              name="description"
              id="description"
              value={project.description}
              onChange={handleChange}
            />
          </Form.Item>

          <Form.Item name="range-time-picker" label="Project Duration">
            <div className="flex">
              <DatePicker
                id="projectStartDate"
                placeholder="Start Date"
                className="text-slate-500 font-sans text-sm font-normal not-italic leading-6 pb-1 self-stretch items-center flex-1 border rounded-sm border-slate-200  px-1 py-1 h-8 w-[184px] m-1"
                onChange={handleStartDateChange}

                // value={project.startDate}
              />
              <span>-</span>
              <DatePicker
                id="projectEndDate"
                placeholder="End Date"
                className="text-slate-500 font-sans text-sm font-normal not-italic leading-6 pb-1 self-stretch items-center flex-1 border rounded-sm border-slate-200shadow px-1 py-1 h-8 w-[184px] m-1"
                // onChange={(date, dateString) =>
                //   setProject({
                //     ...project,
                //     endDate: moment(dateString).format(
                //       "YYYY-MM-DDTHH:mm:ss.SSS[Z]"
                //     ),
                //   })
                // }
                // value={project.endDate}
                onChange={handleEndDateChange}
              />
            </div>
          </Form.Item>

          {/* <Button
            type="submit"
            className="ml-[90%] m-10 px-2 py-1 justify-center items-center rounded-sm border border-blue-500 bg-blue-500 shadow-sm h-8 font-sans text-center text-white text-sm font-normal not-italic leading-3 flex-row-reverse"
            onClick={handleSubmit}
          >
            Submit
          </Button> */}

          <Button
            onClick={() => {
              handleSubmit();
            }}
          >
            Next
          </Button>
        </Form>
      </section>

      {/* //Workflow Head section */}
    </div>
  );
};

export default newform;
