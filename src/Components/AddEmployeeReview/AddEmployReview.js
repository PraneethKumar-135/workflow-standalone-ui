"use client"
import React, { useState } from "react";
import { Button } from "antd";
import { Input } from "antd";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import { useSelector, useDispatch } from "react-redux";
import { addProjectId, removeResources } from "@/Context/AddresourcesSlice/addresourcesSlice";
import { setNavigateToFirstPage, setNavigateToSecondPage } from "@/Context/AddNewProjectSlice/addProjectSlice";

import Image from "next/image";

import user from "../../../public/assets/user.png"

const { Search } = Input;

const onSearch = (value, _e, info) => console.log(info?.source, value);

const AddEmployReview = () => {
  const ResourcesInfo = useSelector((state) => state.addResources);
  


  const dispatch = useDispatch();
  const ResourceAdded = ResourcesInfo.resoucesInfo;
  console.log(ResourceAdded)

  const projectData = useSelector((state) => state.addProject);
  console.log(projectData);

  const handleDelete = (resource) => {
    dispatch(removeResources(resource));
    console.log(resource);
  };

  const ProjectId = (ProjectId) => {
    dispatch(addProjectId(ProjectId));
    // console.log(ProjectId)
  };


  // const [current, setcurrent] = useState(0)
  // const handletableedit = () => {
  //   setcurrent(2)
  //   dispatch()
  // }



  const handleFirstEditButton = () => {
    dispatch(setNavigateToFirstPage());
  }
  const handleSecondEditButton = () => {
    dispatch(setNavigateToSecondPage());
  }

  return (
    <div>
      <div>
        <div className="rounded-md mt-5 space-y-5 p-5 bg-white">
          <div className="flex justify-between">
            <h1 className="text-xl font-bold leading-snug tracking-normal text-left">
              Setup project
            </h1>
            <div className="space-x-8">
              <Button icon={<EditOutlined />} onClick={handleFirstEditButton}>Edit</Button>
              <Button type="primary" className="bg-blue-500">
                create
              </Button>
            </div>
          </div>
          <div className="flex space-x-10 w-screen items-center">
            <div>
              <img
                src={projectData.image_url}
                className="w-[7rem] h-[7rem] rounded-md"
              />
            </div>
            <div className="flex  ">
              <div className="p-5 space-y-10 mx-5">
                <div>
                  <p>Project Name</p>
                  <h3 className="font-semibold">{projectData.projectName}</h3>
                </div>
                <div>
                  <p>Project department</p>
                  <h3 className="font-semibold">
                    {projectData.projectDepartment}
                  </h3>
                </div>
              </div>

              <div className="p-5 space-y-10 mx-5">
                <div>
                  <p>Project Description</p>
                  <h3 className="font-semibold">
                    {projectData.projectDescription}
                  </h3>
                </div>
                <div>
                  <p>Project Duration</p>
                  <h3 className="font-semibold">
                    {projectData.startDate}TO {projectData.endDate}
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* //REsourcess------------------------------ */}

      <div className="mt-5 flex flex-col space-y-4 bg-white rounded-md p-10">
        <div className="flex justify-between">
          <h1 className="text-2xl font-semibold leading-normal tracking-normal text-left">
            Resource Pool
          </h1>
          <div>
            <Search
              placeholder="Search employe"
              onSearch={onSearch}
              style={{
                width: "16.5rem",
                height: "2rem",
              }}
            />
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full divide-y">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-black uppercase tracking-wider" style={{ width: '25%' }}>
                  Name
                </th>
                <th className="px-6 py-3 text-center text-xs font-medium text-black uppercase tracking-wider" style={{ width: '25%' }}>
                  Designation
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-black uppercase tracking-wider pl-10" style={{ width: '25%' }}>
                  Mail ID
                </th>
                <th className="px-6 ml-9 py-3 text-left text-xs font-medium text-black uppercase tracking-wider" colSpan={2} style={{ width: '25%' }}>
                  Actions
                </th>
              </tr>
            </thead>
            {ResourceAdded.map((resource, index) => (
              <tbody key={index} className="bg-white divide-y divide-gray-200">
                <tr className="bg-white">
                  <td className="py-2 whitespace-nowrap">
                    <div className="flex items-center space-x-5">
                      <Image src={resource.image ? resource.image : user} height={35} width={35} />
                      <div className="text-sm font-medium text-gray-900">
                        {resource.name}
                      </div>
                    </div>
                  </td>
                  <td className="py-2 text-sm text-center font-medium text-gray-900">
                    {resource.Designation}
                  </td>
                  <td className="py-2 text-sm font-medium text-gray-900">
                    {resource.email}
                  </td>
                  <td className="py-2 whitespace-nowrap text-sm space-x-5">
                    <Button icon={<EditOutlined />} onClick={handleSecondEditButton}>Edit</Button>
                    <Button
                      type="primary"
                      danger
                      icon={<DeleteOutlined />}
                      onClick={() => handleDelete(resource.id)}
                    >
                      Remove
                    </Button>
                  </td>
                </tr>
              </tbody>
            ))}
          </table>
        </div>
      </div>
    </div>
  );
};
export default AddEmployReview;


