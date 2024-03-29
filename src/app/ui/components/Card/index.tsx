"use client";
import React, { useState } from "react";
import styled from "styled-components";
import { useRouter } from "next/navigation";
import { CardProps } from "./type";
import { logEvent } from "@/app/lib/logEvent";
import Avatar from "../Avatar";

const CardContainer = styled.div`
  display: flex;
  align-items: center;
  width: 50%;
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 10px;
  margin: 20px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  flex-wrap: wrap;
  background-color: #DDDDDD;
  @media (max-width: 768px) {
    width: 80%;
    flex-direction: column;
    margin: 10px;
    text-align: center;
  }
`;

// const Image = styled.img`
//   width: 80px;
//   height: 80px;
//   border-radius: 50%;
//   margin: 15px;
// `;

const ImageContainer = styled.div`
  display: flex;
  align-items: center;
  @media (max-width: 768px) {
    flex-direction: row;
    align-items: center;
  }
`;

const ContentContainer = styled.div`
  cursor: pointer;
`;

const Title = styled.h2`
  color: #333;
  font-size: 1.5em;
`;

const Content = styled.p`
  color: #666;
`;

const ScoreContainer = styled.div`
  display: flex;
  align-items: center;
`;

const ScoreButton = styled.button`
  margin-left: 15px;
  background-color: #f0f0f0;
  border: none;
  color: #333;
  font-size: 1em;
  padding: 5px 10px;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color: #ddd;
  }
  &:focus {
    outline: none;
  }
`;

const Span = styled.span`
  margin-left: 5px;
`;

const Card = ({
  index,
  imageUrl,
  redirectUrl,
  fullName,
  title,
  numberOfVotes,
  onVote,
}: CardProps) => {
  const [score, setScore] = useState(0);
  const router = useRouter();
  const handleScoreChange = (newScore: number) => {
    setScore(newScore);
    onVote(index);
  };

  const redirectDetailPage = () => {
    logEvent("Detail Page Button Pressed");
    router.push(redirectUrl);
  };

  return (
    <CardContainer>
      <ImageContainer>
        <Title>{index + 1}</Title>
        <Avatar src={imageUrl} alt={fullName} />
      </ImageContainer>
      <ContentContainer onClick={() => redirectDetailPage()}>
        <Title>{fullName}</Title>
        <Content>{title}</Content>
      </ContentContainer>
      <ScoreContainer>
        {[1, 2, 3, 4, 5].map((value) => (
          <ScoreButton
            style={{
              backgroundColor: `${score === value ? "#76885B" : ""}`,
              color: `${score === value ? "white" : ""}`,
            }}
            key={value}
            onClick={() => handleScoreChange(value)}
          >
            {value}
          </ScoreButton>
        ))}
        <Span>Total Votes: {numberOfVotes}</Span>
      </ScoreContainer>
    </CardContainer>
  );
};

export default Card;
