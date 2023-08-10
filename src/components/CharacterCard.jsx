import { Space } from "antd";
import { Card } from "antd";
import Meta from "antd/es/card/Meta";
import React from "react";
import { Link } from "react-router-dom";

const CharacterCard = (props) => {
  return (
    <Space
      style={{ alignItems: "center", justifyContent: "center", margin: "38px" }}
      wrap
    >
      <Card
        key={props.id}
        style={{
          width: 300,
          borderColor: "lightgrey",
          backgroundColor: "rgb(151,206,76)",
        }}
        cover={
          <Link to={`/${props.id}`}>
            <img alt={props.name} src={props.image} />
          </Link>
        }
      >
        <Meta title={props.name} description={props.gender} />
      </Card>
    </Space>
  );
};

export default CharacterCard;
