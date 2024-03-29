"use client";
import React from "react";
import styled from "styled-components";

type DetailtemProps = {
  label: String;
  value: string;
  className?: string;
};

const Label = styled.span`
  font-weight: bold;
  text-transform: capitalize;
`;

const Value = styled.span`
  margin-left: 5px;
`;

const DetailItem = ({ label, value, className }: DetailtemProps) => {
  return (
    <p className={className}>
      <Label>{label}:</Label>
      <Value>{value}</Value>
    </p>
  );
};

export default DetailItem;
