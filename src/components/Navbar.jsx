import React from "react";
import { Select, Space, Input } from "antd";
import { useCharacterContext } from "../context/context";
import Link from "antd/es/typography/Link";
import "./navbar.css"
const { Search } = Input;

const Navbar = ({ filter }) => {
  const { setName, setStatus, setGender } = useCharacterContext();

  return (
    <nav
      className="navbar"
      style={{
        backgroundColor: "#A3A3A3",
        height: "80px",
        color: "#F5F5F5",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-around",
        position: "sticky",
        top: 0,
        zIndex: 1,
      }}
    >
      <Space>
        <Link href="/">
          <img
            src="https://static.wikia.nocookie.net/rickandmorty/images/c/c8/Rick_and_Morty_logo.png"
            alt="Rick and Morty"
            width={260}
            height={70}
          />
        </Link>
      </Space>
      <Space style={{ visibility: filter }}>
        <Search
          placeholder="Who is your favorite character?"
          style={{ width: 260 }}
          onSearch={(value) => setName(value)}
          enterButton
        />

        <Select
          defaultValue="Status"
          style={{ width: 120 }}
          onChange={(value) => setStatus(value)}
          allowClear
          options={[
            { value: "alive", label: "Alive" },
            { value: "dead", label: "Dead" },
            { value: "unknown", label: "Unknown" },
            { value: null, label: "Status" },
          ]}
        />
        <Select
          defaultValue="Gender"
          style={{ width: 120 }}
          onChange={(value) => setGender(value)}
          allowClear
          options={[
            { value: "female", label: "Female" },
            { value: "male", label: "Male" },
            { value: "unknown", label: "Unknown" },
            { value: null, label: "Gender" },
          ]}
        />
      </Space>
    </nav>
  );
};

export default Navbar;
