"use client";
import React from "react";
import styled from "styled-components";

type AvatarProps = {
  src: String;
  alt: string;
};
const Image = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  margin: 15px;
`;

const Avatar = ({ src, alt }: AvatarProps) => {
  return <Image src={src as string} alt={alt} />;
};

export default Avatar;
