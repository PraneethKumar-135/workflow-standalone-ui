
// import React, { useEffect, useState } from 'react';
// import { Tabs } from 'antd';
// import { BarsOutlined, ShoppingOutlined, RiseOutlined, MessageOutlined } from '@ant-design/icons';
// import { useSelector } from "react-redux";
// // import { axios } from 'axios';


// const RequirementForm = () => {

//     const [size, setSize] = useState('small');

//     const onChange = (e) => {
//         setSize(e.target.value)
//     }

//     const [requireData, setRequireData] = useState();
//     const setUsecaseId = useSelector((state) => state.addUsecase);
//     const UsecaseId = setUsecaseId.useCaseId

//     console.log(UsecaseId);
//     useEffect(() => {
//         const axios = require('axios');
//         const fetchData = async () => {
//             try {
//                 const response = await axios.get(
//                     `https://spj7xgf470.execute-api.us-east-1.amazonaws.com/dev/usecase/${UsecaseId}`,
//                     {
//                         headers: {
//                             'Accept': 'application/json'
//                         }
//                     }
//                 );
//                 console.log(response.data);
//                 setRequireData(response.data);
//             } catch (error) {
//                 console.error("Error fetching data:", error);
//             }
//         };
//         fetchData()

//     }, [UsecaseId]);
//     console.log(requireData);
//     // const checklist = requireData.usecase.stages[0]["Stage 1"].checklist;
//     // const tasks = requireData.usecase.stages[0]["Stage 1"].tasks;
//     // console.log(checklist);
//     // console.log(tasks);

//     return (
//         <div>
//             {requireData && (

//                 <div className='flex items-center justify-between border rounded-lg p-5 mb-2'>
//                     <div className="flex space-x-2 items-center">
//                         <img src={requireData.image} alt='' className='w-[7rem] h-[7rem] rounded-md' />
//                         <div>
//                             <h1 className="my-3 text-lg font-medium leading-7 tracking-normal text-left">{requireData.assignee_name}</h1>
//                             <div className="my-3 flex space-x-2" >
//                                 <ShoppingOutlined style={{ fontSize: "1rem" }} />
//                                 <h3 className="text-base font-normal leading-normal tracking-normal text-left space-y-4">{requireData.role}</h3>
//                             </div>
//                             <div className="my-3 flex space-x-2" >
//                                 <BarsOutlined style={{ fontSize: "1rem" }} />
//                                 <h3 className="text-base font-normal leading-normal tracking-normal text-left space-y-4">{requireData.total_task}</h3>
//                             </div>
//                         </div>
//                     </div>
//                     <div>
//                         <div className="flex space-x-3 my-10">
//                             <p className="text-sm font-medium leading-snug tracking-normal text-left">Assigned date</p>
//                             <h3 className='text-base font-normal leading-tight tracking-normal text-left'>{requireData.usecase.creation_date}</h3>
//                         </div>
//                         <div className="flex space-x-3 my-10">
//                             <p className="text-sm font-medium leading-snug tracking-normal text-left">Planned date</p>
//                             <h3 className='text-base font-normal leading-tight tracking-normal text-left'>{requireData.usecase.end_date}</h3>
//                         </div>
//                     </div>
//                     <div>
//                         <div className="flex space-x-3 my-10">
//                             <p className="text-sm font-medium leading-snug tracking-normal text-left">Start date</p>
//                             <h3 className='text-base font-normal leading-tight tracking-normal text-left'>{requireData.usecase.start_date}</h3>
//                         </div>
//                         <div className="flex space-x-3 my-10">
//                             <p className="text-sm font-medium leading-snug tracking-normal text-left">Deviation</p>
//                             <h3 className='text-base font-normal leading-tight tracking-normal text-left'>00days</h3>
//                         </div>
//                     </div>
//                 </div>
//             )}


//             <div className='bg-white border rounded-md mt-3'>
//                 <Tabs
//                     defaultActiveKey="1"
//                     type="card"
//                     size={size}
//                     items={new Array(3).fill(null).map((_, i) => {
//                         const id = String(i + 1);
//                         if (id == 1) {
//                             return {
//                                 label: `All`,
//                                 key: id,
//                                 children: (
//                                     <div className='flex flex-col ml-5'>
//                                         <div className='flex items-center space-x-3 my-3'>
//                                             <RiseOutlined style={{ background: "rgba(240, 240, 240, 1)", color: "rgba(24, 144, 255, 1)", padding: "5px", fontSize: "1rem" }} className='rounded-lg' />
//                                             <h3 className='text-base font-normal leading-normal tracking-normal text-left'>Yahiyaalikhan</h3>
//                                             <p className='text-sm font-normal leading-snug tracking-normal text-left'>Created the task about 2 hours ago</p>
//                                         </div>
//                                         <div className='flex items-center space-x-3 my-3'>
//                                             <RiseOutlined style={{ background: "rgba(240, 240, 240, 1)", color: "rgba(24, 144, 255, 1)", padding: "5px", fontSize: "1rem" }} className='rounded-lg' />
//                                             <h3 className='text-base font-normal leading-normal tracking-normal text-left'>Yahiyaalikhan</h3>
//                                             <p className='text-sm font-normal leading-snug tracking-normal text-left'>assign task to Ghouse about 6 hours ago</p>
//                                         </div>
//                                         <div className='flex items-center space-x-3 my-3'>
//                                             <RiseOutlined style={{ background: "rgba(240, 240, 240, 1)", color: "rgba(24, 144, 255, 1)", padding: "5px", fontSize: "1rem" }} className='rounded-lg' />
//                                             <h3 className='text-base font-normal leading-normal tracking-normal text-left'>Ghouse</h3>
//                                             <p className='text-sm font-normal leading-snug tracking-normal text-left'>Filled the task about 6 hours ago</p>
//                                         </div>
//                                         <div className='flex items-center space-x-3 my-3'>
//                                             <RiseOutlined style={{ background: "rgba(240, 240, 240, 1)", color: "rgba(24, 144, 255, 1)", padding: "5px", fontSize: "1rem" }} className='rounded-lg' />
//                                             <h3 className='text-base font-normal leading-normal tracking-normal text-left'>Ghouse</h3>
//                                             <p className='text-sm font-normal leading-snug tracking-normal text-left'>Started the task about 8 hours ago.</p>
//                                         </div>
//                                         <div className='flex items-center space-x-3 my-3'>
//                                             <RiseOutlined style={{ background: "rgba(240, 240, 240, 1)", color: "rgba(24, 144, 255, 1)", padding: "5px", fontSize: "1rem" }} className='rounded-lg' />
//                                             <h3 className='text-base font-normal leading-normal tracking-normal text-left'>Ghouse</h3>
//                                             <p className='text-sm font-normal leading-snug tracking-normal text-left'>completed the task about 12 hours ago</p>
//                                         </div>
//                                         <div className='flex items-center space-x-3 my-3'>
//                                             <MessageOutlined style={{ background: "rgba(240, 240, 240, 1)", color: "rgba(24, 144, 255, 1)", padding: "5px", fontSize: "1rem" }} className='rounded-lg' />
//                                             <div>
//                                                 <h3 className='text-xs font-normal leading-snug tracking-normal text-left'>Ghouse</h3>
//                                                 <p className='text-xs font-normal leading-snug tracking-normal text-left'>Commented about 12 hours ago</p>
//                                             </div>
//                                         </div>
//                                         <div className='ml-10 mx-10'>
//                                             <textarea value={"A design system for enterprise-level products. Create an efficient and enjoyable work experience."} className='w-full border p-2 resize-none rounded-sm'></textarea>
//                                         </div>
//                                     </div>
//                                 ),
//                             };
//                         }
//                         else if (id == 2) {
//                             return {
//                                 label: `Detailed log`,
//                                 key: id,
//                                 children: (
//                                     <div className='flex flex-col  ml-5'>
//                                         <div className='flex items-center space-x-3 my-3'>
//                                             <RiseOutlined style={{ background: "rgba(240, 240, 240, 1)", color: "rgba(24, 144, 255, 1)", padding: "5px", fontSize: "1rem" }} className='rounded-lg' />
//                                             <h3 className='text-base font-normal leading-normal tracking-normal text-left'>Yahiyaalikhan</h3>
//                                             <p className='text-sm font-normal leading-snug tracking-normal text-left'>Created the task about 2 hours ago</p>
//                                         </div>
//                                         <div className='flex items-center space-x-3 my-3'>
//                                             <RiseOutlined style={{ background: "rgba(240, 240, 240, 1)", color: "rgba(24, 144, 255, 1)", padding: "5px", fontSize: "1rem" }} className='rounded-lg' />
//                                             <h3 className='text-base font-normal leading-normal tracking-normal text-left'>Yahiyaalikhan</h3>
//                                             <p className='text-sm font-normal leading-snug tracking-normal text-left'>assign task to Ghouse about 6 hours ago</p>
//                                         </div>
//                                         <div className='flex items-center space-x-3 my-3'>
//                                             <RiseOutlined style={{ background: "rgba(240, 240, 240, 1)", color: "rgba(24, 144, 255, 1)", padding: "5px", fontSize: "1rem" }} className='rounded-lg' />
//                                             <h3 className='text-base font-normal leading-normal tracking-normal text-left'>Ghouse</h3>
//                                             <p className='text-sm font-normal leading-snug tracking-normal text-left'>Filled the task about 6 hours ago</p>
//                                         </div>
//                                         <div className='flex items-center space-x-3 my-3'>
//                                             <RiseOutlined style={{ background: "rgba(240, 240, 240, 1)", color: "rgba(24, 144, 255, 1)", padding: "5px", fontSize: "1rem" }} className='rounded-lg' />
//                                             <h3 className='text-base font-normal leading-normal tracking-normal text-left'>Ghouse</h3>
//                                             <p className='text-sm font-normal leading-snug tracking-normal text-left'>Started the task about 8 hours ago.</p>
//                                         </div>
//                                         <div className='flex items-center space-x-3 my-3'>
//                                             <RiseOutlined style={{ background: "rgba(240, 240, 240, 1)", color: "rgba(24, 144, 255, 1)", padding: "5px", fontSize: "1rem" }} className='rounded-lg' />
//                                             <h3 className='text-base font-normal leading-normal tracking-normal text-left'>Ghouse</h3>
//                                             <p className='text-sm font-normal leading-snug tracking-normal text-left'>completed the task about 12 hours ago</p>
//                                         </div>
//                                         <div className='flex items-center space-x-3 my-3'>
//                                             <RiseOutlined style={{ background: "rgba(240, 240, 240, 1)", color: "rgba(24, 144, 255, 1)", padding: "5px", fontSize: "1rem" }} className='rounded-lg' />
//                                             <h3 className='text-base font-normal leading-normal tracking-normal text-left'>Yahiyaalikhan</h3>
//                                             <p className='text-sm font-normal leading-snug tracking-normal text-left'>Reviewed the task 24 hours ago</p>
//                                         </div>
//                                         <div className='flex items-center space-x-3 my-3'>
//                                             <RiseOutlined style={{ background: "rgba(240, 240, 240, 1)", color: "rgba(24, 144, 255, 1)", padding: "5px", fontSize: "1rem" }} className='rounded-lg' />
//                                             <h3 className='text-base font-normal leading-normal tracking-normal text-left'>Yahiyaalikhan</h3>
//                                             <p className='text-sm font-normal leading-snug tracking-normal text-left'>sended for approval to<span className='text-base font-normal leading-normal tracking-normal text-left'>Akbarkhan</span>On February 21st 2024 at 3:00PM</p>
//                                         </div>
//                                         <div className='flex items-center space-x-3 my-3'>
//                                             <RiseOutlined style={{ background: "rgba(240, 240, 240, 1)", color: "rgba(24, 144, 255, 1)", padding: "5px", fontSize: "1rem" }} className='rounded-lg' />
//                                             <h3 className='text-base font-normal leading-normal tracking-normal text-left'>Akbarkhan</h3>
//                                             <p className='text-sm font-normal leading-snug tracking-normal text-left'>Approved the design On February 22nd 2024 at 1:00PM</p>
//                                         </div>
//                                     </div>
//                                 ),
//                             };
//                         }
//                         else if (id == 3) {
//                             return {
//                                 label: `Comment`,
//                                 key: id,
//                                 children: (
//                                     <div className='flex flex-col m-3'>
//                                         <div className='flex items-center space-x-3 my-3'>
//                                             <MessageOutlined style={{ background: "rgba(240, 240, 240, 1)", color: "rgba(24, 144, 255, 1)", padding: "5px", fontSize: "1rem" }} className='rounded-lg' />
//                                             <div>
//                                                 <h3 className='text-xs font-normal leading-snug tracking-normal text-left'>Ghouse</h3>
//                                                 <p className='text-xs font-normal leading-snug tracking-normal text-left'>Commented about 12 hours ago</p>
//                                             </div>
//                                         </div>
//                                         <div className='ml-10'>
//                                             <textarea value={"A design system for enterprise-level products. Create an efficient and enjoyable work experience."} className='w-full border p-2 resize-none rounded-sm'></textarea>
//                                         </div>
//                                     </div>
//                                 ),
//                             };
//                         }
//                     })}
//                 />
//             </div >
//         </div>
//     );
// };

// export default RequirementForm;




// import React from "react";
// import { Input, Select, Form, DatePicker, Button } from "antd";
// import { ShoppingOutlined, BarsOutlined, FileAddOutlined } from "@ant-design/icons"

// const { Option } = Select;


// const axios = require('axios');
// let data = JSON.stringify({
//     "example": {
//         "name": "string",
//         "updated_by_id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
//         "stages": [
//             {
//                 "Requirements1": {
//                     "tasks": [
//                     ],
//                     "checklist": [
//                     ]
//                 }
//             },
//             {
//                 "mock1": {
//                     "tasks": [
//                         "mytask-1",
//                         "task-2",
//                         "task-3"
//                     ],
//                     "checklist": [
//                         "thing 1",
//                         "thing 2",
//                         "thing 3"
//                     ]
//                 }
//             }
//         ]
//     }
// });

// let config = {
//     method: 'put',
//     maxBodyLength: Infinity,
//     url: 'https://spj7xgf470.execute-api.us-east-1.amazonaws.com/dev/usecase/<uuid>',
//     headers: {
//         'Content-Type': 'application/json',
//         'Accept': 'application/json'
//     },
//     data: data
// };

// axios.request(config)
//     .then((response) => {
//         console.log(JSON.stringify(response.data));
//     })
//     .catch((error) => {
//         console.log(error);
//     });


// const RequirementForm = () => {
//     return (
//         <div>
//             <div className='flex items-center justify-between mb-3'>
//                 <div className="flex space-x-2 items-center">
//                     <img src={requireData.image} className='w-[7rem] h-[7rem] rounded-md' />
//                     <div>
//                         <h1 className="my-3 text-lg font-medium leading-7 tracking-normal text-left">{requireData.assignee_name}</h1>
//                         <div className="my-3 flex space-x-2" >
//                             <ShoppingOutlined style={{ fontSize: "1rem" }} />
//                             <h3 className="text-base font-normal leading-normal tracking-normal text-left space-y-4">{requireData.role}</h3>
//                         </div>
//                         <div className="my-3 flex space-x-2" >
//                             <BarsOutlined style={{ fontSize: "1rem" }} />
//                             <h3 className="text-base font-normal leading-normal tracking-normal text-left space-y-4">{requireData.total_task}</h3>
//                         </div>
//                     </div>
//                 </div>
//                 <div>
//                     <div className="flex space-x-3 my-10">
//                         <p className="text-sm font-medium leading-snug tracking-normal text-left">Assigned date</p>
//                         <h3 className='text-base font-normal leading-tight tracking-normal text-left'>{requireData.usecase.creation_date}</h3>
//                     </div>
//                     <div className="flex space-x-3 my-10">
//                         <p className="text-sm font-medium leading-snug tracking-normal text-left">Planned date</p>
//                         <h3 className='text-base font-normal leading-tight tracking-normal text-left'>{requireData.usecase.end_date}</h3>
//                     </div>
//                 </div>
//                 <div>
//                     <div className="flex space-x-3 my-10">
//                         <p className="text-sm font-medium leading-snug tracking-normal text-left">Start date</p>
//                         <h3 className='text-base font-normal leading-tight tracking-normal text-left'>{requireData.usecase.start_date}</h3>
//                     </div>
//                     <div className="flex space-x-3 my-10">
//                         <p className="text-sm font-medium leading-snug tracking-normal text-left">Deviation</p>
//                         <h3 className='text-base font-normal leading-tight tracking-normal text-left'>00days</h3>
//                     </div>
//                 </div>
//             </div>
//             <div className="flex space-x-5">
//                 <div className="w-1/2 space-y-5 h-1/2">
//                     <div className="space-y-5 p-3 border h-1/4">
//                         <h3 className="text-sm font-bold leading-snug tracking-normal text-left">Create Usecase Document</h3>
//                         <FileAddOutlined className="flex justify-center items-center py-8" style={{ fontSize: "70px" }} />
//                     </div>
//                     <div className="border p-4 h-1/4">
//                         <h3>Checklist for requirement</h3>
//                         <div className="flex items-center m-4 space-x-3">
//                             <input type="checkbox" />
//                             <h3 className="text-sm font-normal leading-snug tracking-normal text-left">Use Case Document is stitched in netlify site in Use Cases Matrix</h3>
//                         </div>
//                         <div className="flex items-center m-4 space-x-3">
//                             <input type="checkbox" />
//                             <h3 className="text-sm font-normal leading-snug tracking-normal text-left">Screen Design is stitched in netlify site in Use Cases Matrix</h3>
//                         </div>
//                         <div className="flex items-center m-4 space-x-3">
//                             <input type="checkbox" />
//                             <h3 className="text-sm font-normal leading-snug tracking-normal text-left">Functional Design Review meeting is done with Technical Team</h3>
//                         </div>
//                         <div className="flex items-center m-4 space-x-3">
//                             <input type="checkbox" />
//                             <h3 className="text-sm font-normal leading-snug tracking-normal text-left">Scrum Planning with Micro Level Task Allocation is done</h3>
//                         </div>
//                     </div>
//                 </div>
//                 <div className="w-1/2 border">
//                     <div className="flex justify-between m-2 border px-2 py-5 rounded-md">
//                         <div className="flex space-x-1">
//                             <img src="" className="w-8 h-8 rounded-full" />
//                             <div>
//                                 <p className="text-sm font-bold leading-tight tracking-normal text-left">Olivia Rhye @olivia</p>
//                                 <p className="text-sm font-normal leading-tight tracking-normal text-left">Product Manager, Integrations</p>
//                             </div>
//                         </div>
//                         <input type="checkbox" />
//                     </div>
//                     <div className="flex justify-between m-2 border px-2 py-5 rounded-md">
//                         <div className="flex space-x-1">
//                             <img src="" className="w-8 h-8 rounded-full" />
//                             <div>
//                                 <p className="text-sm font-bold leading-tight tracking-normal text-left">Phoenix Baker @phoenix</p>
//                                 <p className="text-sm font-normal leading-tight tracking-normal text-left">Product Manager, Integrations</p>
//                             </div>
//                         </div>
//                         <input type="checkbox" />
//                     </div>
//                     <div className="flex justify-between m-2 border px-2 py-5 rounded-md">
//                         <div className="flex space-x-1">
//                             <img src="" className="w-8 h-8 rounded-full" />
//                             <div>
//                                 <p className="text-sm font-bold leading-tight tracking-normal text-left">Lori Bryson @lori</p>
//                                 <p className="text-sm font-normal leading-tight tracking-normal text-left">Product Manager, Integrations</p>
//                             </div>
//                         </div>
//                         <input type="checkbox" />
//                     </div>
//                     <div className="flex justify-between m-2 border px-2 py-5 rounded-md">
//                         <div className="flex space-x-1">
//                             <img src="" className="w-8 h-8 rounded-full" />
//                             <div>
//                                 <p className="text-sm font-bold leading-tight tracking-normal text-left">Orlando Diggs @orlando</p>
//                                 <p className="text-sm font-normal leading-tight tracking-normal text-left">Product Manager, Integrations</p>
//                             </div>
//                         </div>
//                         <input type="checkbox" />
//                     </div>
//                     <div className="flex justify-between m-2 border px-2 py-5 rounded-md">
//                         <div className="flex space-x-1">
//                             <img src="" className="w-8 h-8 rounded-full" />
//                             <div>
//                                 <p className="text-sm font-bold leading-tight tracking-normal text-left">Kate Morrison @kate</p>
//                                 <p className="text-sm font-normal leading-tight tracking-normal text-left">Product Manager, Integrations</p>
//                             </div>
//                         </div>
//                         <input type="checkbox" />
//                     </div>

//                 </div>
//             </div>
//             <div className="flex items-center justify-center m-3">
//                 <Button type="primary" style={{ background: "rgba(24, 144, 255, 1)" }}>Next</Button>
//             </div>
//         </div>
//     );
// };

// export default RequirementForm;



import React, { useState } from 'react';
import { Button, Modal, Dropdown, Menu, Upload, Input, Space } from 'antd';
import { DownOutlined, FileImageOutlined, PlusOutlined, UploadOutlined, BugOutlined, InboxOutlined } from '@ant-design/icons'
import { MessageOutlined, CaretDownOutlined } from "@ant-design/icons";

const InsideDropDown = ({ name }) => {
    const display = (value) => {
        console.log(`${name} + ${value}`);
    };

    const items = [
        { key: '1', label: `Item 1` },
        { key: '2', label: 'Item 2' },
        { key: '3', label: 'Item 3' },
    ];

    const menu = (
        <Menu>
            {items.map(item => (
                <Menu.Item key={item.key} onClick={() => display(item.label)}>
                    {item.label}
                </Menu.Item>
            ))}
        </Menu>
    );

    return (
        <Space>
            <Dropdown overlay={menu} trigger={['click']}>
                <Button className='flex items-center justify-between w-full'>
                    <p className='w-full'>{name}</p> <CaretDownOutlined />
                </Button>
            </Dropdown>
        </Space>
    );
};
const { Search } = Input;
const getBase64 = (file) =>
    new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = (error) => reject(error);
    });

const RequirementForm = () => {
    const items1 = [
        { label: <InsideDropDown name="UI Designer" />, key: '0' },
        { label: <InsideDropDown name="API Developer" />, key: '1' },
        { label: <InsideDropDown name="Tester" />, key: '2' },
        { label: <InsideDropDown name="UX Designer" />, key: '3' },
    ];
    const [isModalOpenDoc, setIsModalOpenDoc] = useState(false);
    const [isModalOpenLink, setIsModalOpenlink] = useState(false);
    const [isModalOpenIssue, setIsModalOpenIssue] = useState(false);
    //Img
    const showModalImg = () => {
        setIsModalOpenDoc(true);
    };
    //link
    const showModalLink = () => {
        setIsModalOpenlink(true);
    };
    //Issue
    const showModalIssue = () => {
        setIsModalOpenIssue(true);
    };
    const handleOk = () => {
        setIsModalOpenDoc(false);
        setIsModalOpenlink(false)
        setIsModalOpenIssue(false)
    };
    const handleCancel = () => {
        setIsModalOpenDoc(false);
        setIsModalOpenlink(false)
        setIsModalOpenIssue(false)
    };
    const items = [
        {
            label: <Button className=' border-none flex items-center justify-around' icon={<FileImageOutlined className='ml-3' />} onClick={showModalImg}>Upload Document</Button>,
            key: '0'
        },

        {
            label: <Button className='ml-3 border-none flex items-center justify-around ' icon={<UploadOutlined />} onClick={showModalLink}>Upload LInk</Button>,
            key: '2'
        },
        {
            label: <Button className='ml-3 border-none flex items-center justify-around' icon={<BugOutlined />} onClick={showModalIssue}>Raise Issue</Button>,
            key: '3'
        },

    ];

    //UploadDoc

    const [previewOpen, setPreviewOpen] = useState(false);
    const [previewImage, setPreviewImage] = useState('');
    const [previewTitle, setPreviewTitle] = useState('');
    const [fileList, setFileList] = useState([
        {
            uid: '-1',
            name: 'image.png',
            status: 'done',
            url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
        },
        {
            uid: '-2',
            name: 'image.png',
            status: 'done',
            url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
        },
        {
            uid: '-3',
            name: 'image.png',
            status: 'done',
            url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
        },
        {
            uid: '-4',
            name: 'image.png',
            status: 'done',
            url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
        },
    ]);
    // const handleCancel = () => setPreviewOpen(false);
    const handlePreview = async (file) => {
        if (!file.url && !file.preview) {
            file.preview = await getBase64(file.originFileObj);
        }
        setPreviewImage(file.url || file.preview);
        setPreviewOpen(true);
        setPreviewTitle(file.name || file.url.substring(file.url.lastIndexOf('/') + 1));
    };
    const handleChange = ({ fileList: newFileList }) => setFileList(newFileList);
    const uploadButton = (
        <button
            style={{
                border: 0,
                background: 'none',
            }}
            type="button"
        >
            <PlusOutlined />
            <div
                style={{
                    marginTop: 8,
                }}
            >
                Upload
            </div>
        </button>
    );

    //search
    const onSearch = (value, _e, info) => console.log(info?.source, value);



    return (
        <div className='flex flex-col space-y-5'>
        

            <div>
                <div className='flex items-center justify-between py-3 px-2' style={{ background: "rgba(230, 247, 255, 1)" }}>
                    <h1 className='text-base font-bold leading-tight tracking-normal text-left'>Create Usecase Document</h1>
                    <DownOutlined />
                </div>
                <div className='flex items-center justify-between mt-2 py-5'>
                    <Dropdown
                        overlay={<Menu>{items1.map(item => <Menu.Item key={item.key}>{item.label}</Menu.Item>)}</Menu>}
                        trigger={['click']}
                    >
                        <Button className='flex items-center'>
                            Assign <DownOutlined />
                        </Button>
                    </Dropdown>
                    <div className='flex items-center space-x-2'>
                        <MessageOutlined />
                        <div>
                            <Dropdown
                                overlay={<Menu>{items.map(item => <Menu.Item key={item.key}>{item.label}</Menu.Item>)}</Menu>}
                                trigger={['click']}
                            >
                                <Button className='flex items-center text-white' style={{ background: "rgba(24, 144, 255, 1)", color: "white" }}>
                                    Action
                                </Button>
                            </Dropdown>
                            {/* UploadDoc */}
                            <Modal open={isModalOpenDoc} onOk={handleOk} onCancel={handleCancel} footer={null}>
                                <div className='flex flex-col items-center justify-center space-y-3 p-5'>
                                    <div className='flex items-center justify-center' style={{ fontSize: "4rem", color: "rgba(24, 144, 255, 1)" }}><InboxOutlined /></div>
                                    <div>
                                        <h1 className='text-base font-semibold leading-normal tracking-normal text-center'>Click or drag file to this area to upload</h1>
                                        <p className='text-sm font-normal leading-snug tracking-normal text-center'>Support for a single or bulk upload. Strictly prohibit from uploading company data or other band files</p>
                                    </div>
                                    <div className='ml-12'>
                                        <Upload
                                            action="https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188"
                                            listType="picture-card"
                                            fileList={fileList}
                                            onPreview={handlePreview}
                                            onChange={handleChange}
                                        >
                                            {fileList.length >= 8 ? null : uploadButton}
                                        </Upload>
                                        <Modal open={previewOpen} title={previewTitle} footer={null} onCancel={handleCancel}>
                                            <img
                                                alt="example"
                                                style={{
                                                    width: '100%',
                                                }}
                                                src={previewImage}
                                            />
                                        </Modal>
                                    </div>
                                    <div>
                                        <Button className='flex items-center text-white' style={{ background: "rgba(24, 144, 255, 1)", color: "white" }}>
                                            Save
                                        </Button>
                                    </div>
                                </div>
                            </Modal>
                            <Modal open={isModalOpenLink} onOk={handleOk} onCancel={handleCancel} footer={null}>
                                <div className='flex flex-col space-y-3 p-5 '>
                                    <Input placeholder="Link Name" />
                                    <Search
                                        styles={{ width: "100%" }}
                                        addonBefore="https://"
                                        placeholder="input search text"
                                        allowClear
                                        onSearch={onSearch}
                                        style={{
                                            width: 304,
                                        }}
                                    />
                                    <div className='flex justify-center'>
                                        <Button className='flex items-center text-white' style={{ background: "rgba(24, 144, 255, 1)", color: "white" }}>
                                            Save
                                        </Button>
                                    </div>
                                </div>
                            </Modal>
                            <Modal title="Basic Modal" open={isModalOpenIssue} onOk={handleOk} onCancel={handleCancel}>
                                <p>Some isModal contents...</p>
                                <p>Some isModal contents...</p>
                                <p>Some isModal contents...</p>
                            </Modal>
                        </div>
                    </div>
                </div>
            </div>


            <div>
                <div className='flex items-center justify-between py-3 px-2' style={{ background: "rgba(230, 247, 255, 1)" }}>
                    <h1 className='text-base font-bold leading-tight tracking-normal text-left'>Create Screen Design</h1>
                    <DownOutlined />
                </div>
                <div className='flex items-center justify-between mt-2 py-5'>
                    <Dropdown
                        overlay={<Menu>{items1.map(item => <Menu.Item key={item.key}>{item.label}</Menu.Item>)}</Menu>}
                        trigger={['click']}
                    >
                        <Button className='flex items-center'>
                            Assign <DownOutlined />
                        </Button>
                    </Dropdown>
                    <div className='flex items-center space-x-2'>
                        <MessageOutlined />
                        <div>
                            <Dropdown
                                overlay={<Menu>{items.map(item => <Menu.Item key={item.key}>{item.label}</Menu.Item>)}</Menu>}
                                trigger={['click']}
                            >
                                <Button className='flex items-center text-white' style={{ background: "rgba(24, 144, 255, 1)", color: "white" }}>
                                    Action
                                </Button>
                            </Dropdown>
                            {/* UploadDoc */}
                            <Modal open={isModalOpenDoc} onOk={handleOk} onCancel={handleCancel} footer={null}>
                                <div className='flex flex-col items-center justify-center space-y-3 p-5'>
                                    <div className='flex items-center justify-center' style={{ fontSize: "4rem", color: "rgba(24, 144, 255, 1)" }}><InboxOutlined /></div>
                                    <div>
                                        <h1 className='text-base font-semibold leading-normal tracking-normal text-center'>Click or drag file to this area to upload</h1>
                                        <p className='text-sm font-normal leading-snug tracking-normal text-center'>Support for a single or bulk upload. Strictly prohibit from uploading company data or other band files</p>
                                    </div>
                                    <div className='ml-12'>
                                        <Upload
                                            action="https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188"
                                            listType="picture-card"
                                            fileList={fileList}
                                            onPreview={handlePreview}
                                            onChange={handleChange}
                                        >
                                            {fileList.length >= 8 ? null : uploadButton}
                                        </Upload>
                                        <Modal open={previewOpen} title={previewTitle} footer={null} onCancel={handleCancel}>
                                            <img
                                                alt="example"
                                                style={{
                                                    width: '100%',
                                                }}
                                                src={previewImage}
                                            />
                                        </Modal>
                                    </div>
                                    <div>
                                        <Button className='flex items-center text-white' style={{ background: "rgba(24, 144, 255, 1)", color: "white" }}>
                                            Save
                                        </Button>
                                    </div>
                                </div>
                            </Modal>
                            <Modal open={isModalOpenLink} onOk={handleOk} onCancel={handleCancel} footer={null}>
                                <div className='flex flex-col space-y-3 p-5 '>
                                    <Input placeholder="Link Name" />
                                    <Search
                                        styles={{ width: "100%" }}
                                        addonBefore="https://"
                                        placeholder="input search text"
                                        allowClear
                                        onSearch={onSearch}
                                        style={{
                                            width: 304,
                                        }}
                                    />
                                    <div className='flex justify-center'>
                                        <Button className='flex items-center text-white' style={{ background: "rgba(24, 144, 255, 1)", color: "white" }}>
                                            Save
                                        </Button>
                                    </div>
                                </div>
                            </Modal>
                            <Modal title="Basic Modal" open={isModalOpenIssue} onOk={handleOk} onCancel={handleCancel}>
                                <p>Some isModal contents...</p>
                                <p>Some isModal contents...</p>
                                <p>Some isModal contents...</p>
                            </Modal>
                        </div>
                    </div>
                </div>
            </div>


            <div>
                <h1 className='text-sm font-bold leading-snug tracking-normal text-left'>Checklist for requirement</h1>
                <div>
                    <div className="flex items-center m-4 space-x-3">
                        <input type="checkbox" />
                        <h3 className="text-sm font-normal leading-snug tracking-normal text-left">Use Case Document is stitched in netlify site in Use Cases Matrix</h3>
                    </div>
                    <div className="flex items-center m-4 space-x-3">
                        <input type="checkbox" />
                        <h3 className="text-sm font-normal leading-snug tracking-normal text-left">Screen Design is stitched in netlify site in Use Cases Matrix</h3>
                    </div>
                    <div className="flex items-center m-4 space-x-3">
                        <input type="checkbox" />
                        <h3 className="text-sm font-normal leading-snug tracking-normal text-left">Functional Design Review meeting is done with Technical Team</h3>
                    </div>
                    <div className="flex items-center m-4 space-x-3">
                        <input type="checkbox" />
                        <h3 className="text-sm font-normal leading-snug tracking-normal text-left">Scrum Planning with Micro Level Task Allocation is done</h3>
                    </div>
                </div>
            </div>

            
        </div>
    );
};

export default RequirementForm;



