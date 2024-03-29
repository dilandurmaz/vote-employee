"use client";
import React from "react";
import styled from "styled-components";
import { EmployeeItem } from "../../pages/Employee/type";
import Avatar from "../../components/Avatar";
import DetailItem from "../../components/DetailItem";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const DetailContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid #ccc;
  border-radius: 8px;
  margin: 20px;
  padding: 20px;
  background-color: #DDDDDD;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  width: 25%;
  margin-top: 10px;

  @media (max-width: 768px) {
    width: 80%;
  }
`;

const AvatarContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const EmployeeDetail: React.FC<{ employeeDetail: EmployeeItem }> = ({
  employeeDetail,
}) => {
  const filteredProperties = ["__typename", "imageUrl"];

  return (
    <Container>
      <DetailContainer>
        <AvatarContainer>
          <Avatar src={employeeDetail.imageUrl} alt={employeeDetail.fullName} />
        </AvatarContainer>
        {Object.entries(employeeDetail)
          .filter(([key, _]) => !filteredProperties.includes(key))
          .map(([key, value]) => (
            <DetailItem key={key} label={key} value={value} />
          ))}
      </DetailContainer>
    </Container>
  );
};

export default EmployeeDetail;
