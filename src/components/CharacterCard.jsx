import { Space } from "antd";
import { Card } from "antd";
import React from "react";
import { Link } from "react-router-dom";

const CharacterCard = (props) => {
  return (
    <Space
      style={{ backgroundColor: "#1F2937", alignItems: "center", justifyContent: "center", margin: "38px", color:"#F5F5F5", }}
      wrap
    >
      <Card
        key={props.id}
        style={{
          width: 300,
          color:"#BBF7D0",
          borderColor: "#F5F5F5",
          backgroundColor: "#525252",
        }}
        cover={
          <Link to={`/${props.id}`}>
            <img alt={props.name} src={props.image} />
          </Link>
        }
      >
        <p style={{ color:"#86EFAC",fontSize:"20px"}}>{props.name}</p>
        <p style={{fontSize:"15px", }}>{props.gender}</p>
      </Card>
    </Space>
  );
};

export default CharacterCard;
