"use client";
import { useState } from "react";
import Card from "../../components/Card";
import { EmployeeItem } from "./type";
import { logEvent } from "@/app/lib/logEvent";

interface EmployeeListProps {
  employeesInf: EmployeeItem[];
}

export default function Employee({ employeesInf }: EmployeeListProps) {
  const employeesWithVotes = employeesInf.map((emp: EmployeeItem) => {
    return { ...emp, numberOfVotes: 0 };
  });
  const [employees, setEmployees] = useState(employeesWithVotes);

  const handleVote = (index: number) => {
    setEmployees((prevEmployees) => {
      const updatedEmployees = prevEmployees.map((emp) => ({ ...emp }));
      updatedEmployees[index].numberOfVotes += 1;
      updatedEmployees.sort((a, b) => b.numberOfVotes - a.numberOfVotes);
      logEvent("Vote Button Pressed");
      return updatedEmployees;
    });
  };

  return (
    <>
      {employees.map((employee, index) => (
        <Card
          key={index}
          index={index}
          redirectUrl={`/employee/${employee.id}`}
          imageUrl={employee.imageUrl}
          fullName={employee.fullName}
          title={employee.title}
          numberOfVotes={employee.numberOfVotes}
          onVote={handleVote}
        />
      ))}
    </>
  );
}
