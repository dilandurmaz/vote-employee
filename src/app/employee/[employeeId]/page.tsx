import { client } from "@/app/lib/apolloClient";
import { gql } from "@apollo/client";
import EmployeeDetail from "@/app/ui/pages/EmployeeDetail";

type Props = {
  params?: {
    employeeId?: string;
  };
};

const GET_EMPLOYEE = gql`
  query GetEmployee($id: ID!) {
    Employee(id: $id) {
      imageUrl
      fullName
      title
      city
      email
    }
  }
`;

const getEmployees = async (id: string) => {
  const { data } = await client.query({
    query: GET_EMPLOYEE,
    variables: {
      id: id,
    },
  });
  return data.Employee;
};

export default async function EmployeeDetailPage(props: Props) {
  const employeeDetail = await getEmployees(props.params?.employeeId as string);
  return (
    <>
      <EmployeeDetail employeeDetail={employeeDetail} />
    </>
  );
}
