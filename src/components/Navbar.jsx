import "./navbar.css"

import React from 'react';

import { Select, Space, Input, Button, Image } from 'antd';
import { CaretLeftOutlined } from '@ant-design/icons';
import { useCharacterContext } from "../context/context";
// import { useNavigate } from "react-router-dom";

const { Search } = Input;

const Navbar = () => {

    const {setName, setStatus, setGender } = useCharacterContext();
    // const navigate = useNavigate();

    return (
        <nav className='navbar'>
            <Space>
                    {/* <h2 style={{ position: 'relative', right: '15vh'  }}></h2> */}
                    <img src="https://static.wikia.nocookie.net/rickandmorty/images/c/c8/Rick_and_Morty_logo.png" alt="Rick and Morty" width={260} height={70} />
               
            </Space>
            <Space>
                <Search placeholder="Who is your favorite character?" style={{width: 260,}} 
                    onSearch={(value) => setName(value)} 
                enterButton />

                <Select
                    defaultValue="Status"
                    style={{ width: 120 }}
                    onChange={(value) => setStatus(value)}
                    allowClear
                    options={[
                        { value: 'alive', label: 'Alive' },
                        { value: 'dead', label: 'Dead' },
                        { value: 'unknown', label: 'Unknown' },
                        {value:null,label:"Status"}
                    ]}
                />
                <Select
                    defaultValue="Gender"
                    style={{ width: 120 }}
                    onChange={(value) => setGender(value)}
                    allowClear
                    options={[
                        { value: 'female', label: 'Female' },
                        { value: 'male', label: 'Male' },
                        { value: 'unknown', label: 'Unknown' },
                        {value:null,label:"Gender"}

                    ]}
                />
            </Space>

        </nav>
    )
}



export default  Navbar;