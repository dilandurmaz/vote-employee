import Image from "next/image";
import styles from "./page.module.css";
import { client } from "./lib/apolloClient";
import { gql } from "@apollo/client";
import Employee from "./ui/pages/Employee";

const getEmployees = async () => { 
  const { data } = await client.query({
    query: gql`
      query {
        Employees {
            id
            imageUrl
            fullName
            title
        }
      }
    `
  });

  return data.Employees;
}
export default async function Home() {
  const employee = await getEmployees()

  return (
    <main className={styles.main}>
      <Employee employeesInf={employee} />
    </main>
  );
}


