"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { PlusSquareFilled, DownOutlined } from "@ant-design/icons";

import { addProjectId } from "@/Context/AddresourcesSlice/addresourcesSlice";

import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

import { addResources } from "@/Context/AddresourcesSlice/addresourcesSlice";
import { Skeleton } from "antd";

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
} from "antd";
import axios from "axios";
import { Pagination } from "antd";

import { InProgress, Completed, Unassigned } from "@/Components/Badges";
import api from "@/api";
import Meta from "antd/es/card/Meta";
import Image from "next/image";
import slice from "@/Context/Slice";
import { MdOutlineWatchLater } from "react-icons/md";
// import { useDispatch } from "react-redux";

const { Title, Paragraph, Text } = Typography;

const ProjectLayout = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [data, setData] = useState([]);
  const [selectedStatus, setSelectedStatus] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(true);

  const getData = async () => {
    try {
      setIsLoading(true);
      const response = await api.get("/project");
      setIsLoading(false);
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

  const filteredData = selectedStatus
    ? data.filter((item) => item.status.toLowerCase() === selectedStatus)
    : data;

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

  const totalItems = filteredData.length;
  const itemsPerPage = 8;
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const paginatedData = filteredData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };
  const dispatch = useDispatch();
  const ProjectId = (id) => {
    dispatch(addProjectId(id));
  };

  return (
    <>
      <div style={{ margin: "18px 16px", padding: "0px 10px", minHeight: 280 }}>
        <h1 className="ml-2 uppercase text-3xl">workflow Management</h1>

        <div className="bg-white flex flex-row justify-between items-center py-2 px-5  ">
          <Dropdown
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
          <div className="">
            <button className="   py-1  px-4 bg-blue-500 text-white bg-primary-6">
              <Link href="/main/projects/addNewProject"> Create Project</Link>
            </button>
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
            <div className="mt-5 flex justify-center">
              <Pagination
                total={totalItems}
                pageSize={itemsPerPage}
                current={currentPage}
                onChange={handlePageChange}
              />
            </div>
          </Row>
        </div>
      </div>
    </>
  );
};

export default ProjectLayout;
