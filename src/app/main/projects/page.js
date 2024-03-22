"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { PlusSquareFilled, DownOutlined, SettingOutlined, PlusOutlined } from "@ant-design/icons";

import { addProjectId } from "@/Context/AddresourcesSlice/addresourcesSlice";

import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

import { addResources } from "@/Context/AddresourcesSlice/addresourcesSlice";

import {
  Avatar,
  Space,
  Button,
  Card,
  Typography,
  Col,
  Row,
  Dropdown,
  message,
  Menu,
  Breadcrumb,
  Skeleton
} from "antd";
import axios from "axios";
import { Pagination } from "antd";

import { InProgress, Completed, Unassigned } from "@/Components/Badges";
import api from "@/api";
import Meta from "antd/es/card/Meta";
import Image from "next/image";
import slice from "@/Context/Slice";
import { MdOutlineWatchLater } from "react-icons/md";
import { updateProjectName } from "@/Context/AddNewProjectSlice/addProjectSlice";
// import { useDispatch } from "react-redux";

const { Title, Paragraph, Text } = Typography;

const ProjectLayout = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [data, setData] = useState([]);
  const [selectedStatus, setSelectedStatus] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [itemsPerPage, setItemsPerPage] = useState(12);


  const getData = async () => {
    try {
      setIsLoading(true);
      const response = await api.get("/project");
      setIsLoading(false);
      console.log(response.data)
      return response.data;
    } catch (error) {
      console.error("Error fetching data: ", error);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      const result = await getData();
      setData(result);
    };
    fetchData();
  }, []);

  const toggleSider = () => {
    setCollapsed(!collapsed);
  };

  const handleMenuClick = (e) => {
    setSelectedStatus(e.key === "all" ? null : e.key);
  };

  const capitalizeText = (text) => {
    return text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
  };

  const dropdownText = selectedStatus
    ? `${capitalizeText(selectedStatus)}`
    : "All Projects";

  const menuProps = {
    onClick: handleMenuClick,
  };

  // const filteredData = selectedStatus
  //   ? data.filter((item) => item.status.toLowerCase() === selectedStatus)
  //   : data;

  // const filteredData = data.filter((item) => {
  //   const matchesStatus =
  //     !selectedStatus || item.status.toLowerCase() === selectedStatus;
  //   const matchesSearch =
  //     item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
  //     item.description.toLowerCase().includes(searchTerm.toLowerCase());
  //   return matchesStatus && matchesSearch;
  // });
  const filteredData = data.filter((item) => {
    const statusLowerCase = item.status ? item.status.toLowerCase() : null;

    const matchesStatus =
      !selectedStatus || (statusLowerCase && statusLowerCase === selectedStatus);

    const matchesSearch =
      item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (item.description && item.description.toLowerCase().includes(searchTerm.toLowerCase()));

    return matchesStatus && matchesSearch;
  });


  const checkStatus = (status) => {
    switch (status.toLowerCase()) {
      case "inprogress":
        return <InProgress />;
      case "completed":
        return <Completed />;
      case "unassigned":
        return <Unassigned />;
      default:
        return null;
    }
  };

  // const totalItems = filteredData.length;
  // const itemsPerPage = 8;
  // const totalPages = Math.ceil(totalItems / itemsPerPage);

  // const paginatedData = filteredData.slice(
  //   (currentPage - 1) * itemsPerPage,
  //   currentPage * itemsPerPage
  // );
  const totalItems = filteredData.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const paginatedData = filteredData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );
  // const totalItems = filteredData.length;
  // const paginatedData = filteredData.slice(
  //   (currentPage - 1) * itemsPerPage,
  //   currentPage * itemsPerPage
  // );


  const handlePageChange = (page) => {
    setCurrentPage(page);
  };
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    setCurrentPage(1); // Reset page when search term changes
  };
  const dispatch = useDispatch();
  const ProjectId = (id) => {
    dispatch(addProjectId(id));
  };
  const updateProjectNames = (name) => {
    dispatch(updateProjectName(name));
  };

  return (
    <>

      <div style={{ margin: "18px 16px", padding: "0px 0px", minHeight: 280 }}>
        <div className="bg-white px-10 py-5 space-y-3 mb-6">
          <Breadcrumb
            items={[
              {
                title: <a href="/main">Home</a>,
              },
              {
                title: 'Projects Overview',
              },
            ]}
          />
          <h1 className="capitalize text-2xl">Projects Overview</h1>
          <label className="flex items-center justify-center">
            <input
              type="text"
              placeholder="Search projects..."
              value={searchTerm}
              onChange={handleSearchChange}
              className="border-2 rounded-none border-gray-200 border-r-0 p-1 w-[38vw] focus:border focus:border-gray-400 focus:outline-none rounded-l transition duration-300"
            /><span className="py-1 px-4 bg-[#1890FF] hover:bg-blue-600 active:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-300 cursor-default text-white hover:text-white"><SettingOutlined className='mr-3' />Search</span>
          </label>
        </div>
        <div className="bg-white flex flex-row justify-between items-center py-4 px-5">
          <Dropdown className="border border-gray-300 rounded-none p-2"
            overlay={
              <Menu onClick={handleMenuClick}>
                <Menu.Item key="all">All Projects</Menu.Item>
                <Menu.Item key="inprogress">In Progress</Menu.Item>
                <Menu.Item key="completed">Completed</Menu.Item>
                <Menu.Item key="unassigned">Unassigned</Menu.Item>
              </Menu>
            }
          >
            <a key="all" onClick={(e) => e.preventDefault()}>
              <Space>
                {dropdownText}
                <DownOutlined />
              </Space>
            </a>
          </Dropdown>

          <div className="flex items-center space-x-60">

              <Link className="py-2 px-4 bg-blue-500 text-white  hover:bg-blue-700 hover:text-white"  href="/main/projects/addNewProject"> <PlusOutlined className='mr-4' />Create Project</Link>

          </div>
        </div>

        <div className="my-5">
          <Row gutter={16}>
            {isLoading ? (
              Array.from({ length: 8 }).map((_, index) => (
                // <Skeleton.Node active headerFontSize={22} bordered={false}>
                //   <Card headerFontSize={22} bordered={false}>
                //     <Skeleton active />
                //   </Card>
                // </Skeleton.Node>
                <Skeleton.Node
                  active
                  style={{
                    width: "220px",
                    height: "200px",
                    padding: "0.2rem",
                    margin: "0.5rem",
                  }}
                >
                  <Col span={8} className="mb-4" key={index}>
                    <Skeleton active />
                  </Col>
                </Skeleton.Node>
              ))
            ) : (
              <>
                {paginatedData.map((item, index) => (
                  <Col span={6} className="mb-4" key={index}>
                    <Link
                      href="/main/projects/workflowlist"
                      onClick={() => {
                        ProjectId(item.id);
                        updateProjectNames(item.name)
                      }}
                    >
                      <Card headerFontSize={22} bordered={false}>
                        <Meta
                          avatar={
                            <Avatar
                              className="bg-blue-200 rounded-full p-2"
                              src={item.image_url}
                              size={34}
                              shape="square"
                            />
                          }
                          title={item.name}
                          className="text-lg flex align-middle"
                        />
                        <div className="w-full h-[2px] bg-gray-100 mt-2 mb-4"></div>

                        <div className="flex flex-row justify-start items-center p-0">
                          <Text className="text-xl">
                            Total Use cases : {item.total_usecases}
                          </Text>
                        </div>
                        <div className="flex flex-row justify-start items-center my-4">
                          <h4>{item.total_resources} Use cases in Progress</h4>
                        </div>

                        <div className="flex ">
                          {" "}
                          <MdOutlineWatchLater className="size-6" />{" "}
                          <div className="pl-6 pb-2"> 7 Days</div>{" "}
                        </div>

                        <div className="flex items-center justify-between">
                          <div className="flex flex-row justify-start items-center pt-1">
                            {checkStatus(item.status)}
                          </div>

                          <div className="pl-5 flex">
                            <Avatar src="{}" />
                            <Avatar src="{}" />
                            <Avatar src="{}" />
                          </div>
                        </div>
                      </Card>
                    </Link>
                  </Col>
                ))}
              </>
            )}
          </Row>
          <Row>
            <div className="flex ml-auto">
              <Pagination
                total={totalItems}
                showTotal={(totalItems, range) => `${range[0]}-${range[1]} of ${totalItems} items`}
                pageSize={itemsPerPage}
                current={currentPage}
                onChange={handlePageChange}
                className="flex justify-end"
              />
            </div>
          </Row>
        </div>
      </div>
    </>
  );
};

export default ProjectLayout;
