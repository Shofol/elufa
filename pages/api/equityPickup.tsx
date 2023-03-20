import { Account, Client, Databases, Functions, ID, Query } from "appwrite";
import type { NextApiRequest, NextApiResponse } from "next";
import { CustomerData } from "../../types/Customer";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<CustomerData>
) {
  const client = new Client();
  client
    .setEndpoint(process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT || "")
    .setProject(process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID || "");
  const databases = new Databases(client);

  // if (req.method === "GET") {
  //   // const value = req.query;
  //   const fieldName: any = req.query["fieldName"];
  //   const query: any = req.query["query"];
  //   try {
  //     const promise: any = await databases.listDocuments(
  //       "63e9e6e8739144ad7d0c",
  //       "63e9e6eda87e81e1942c",
  //       fieldName && query ? [Query.search(fieldName, query)] : []
  //     );

  //     res.status(200).json(promise);
  //   } catch (error: any) {
  //     res.status(500).json(error);
  //   }
  // }

  // if (req.method === "PUT") {
  //   const values = JSON.parse(req.body).values;
  //   const docuemntId = JSON.parse(req.body).id;
  //   try {
  //     const promise: any = await databases.updateDocument(
  //       "63e9e6e8739144ad7d0c",
  //       "63e9e6eda87e81e1942c",
  //       docuemntId,
  //       values
  //     );

  //     res.status(200).json(promise);
  //   } catch (error: any) {
  //     res.status(500).json(error);
  //   }
  // }

  if (req.method === "POST") {
    const client = new Client();
    client
      .setEndpoint(process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT || "")
      .setProject(process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID || "");
    try {
      const functions = new Functions(client);
      let promise: any = await functions.createExecution(
        process.env.NEXT_PUBLIC_EQUITY_PICKUP_FUNCTION_ID || ""
      );
      res.status(200).json(promise);
    } catch (error: any) {
      res.status(500).json(error);
    }
  }
}
