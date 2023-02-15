import { Client, Functions } from "appwrite";
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  name: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method === "POST") {
    const client = new Client();
    client
      .setEndpoint(process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT || "")
      .setProject(process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID || "");
    try {
      const functions = new Functions(client);
      let promise: any = await functions.createExecution(
        process.env.NEXT_PUBLIC_SEND_MAIL_FUNCTION_ID || "",
        JSON.stringify({ documentId: JSON.parse(req.body).id })
      );
      res.status(200).json(promise);
    } catch (error: any) {
      res.status(500).json(error);
    }
  }
}
