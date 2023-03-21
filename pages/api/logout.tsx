import { Account, Client, Functions } from "appwrite";
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
    const account = new Account(client);

    client
      .setEndpoint(process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT || "")
      .setProject(process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID || "");
    try {
      const promise: any = await account.deleteSession("current");

      res.status(200).json(promise);
    } catch (error: any) {
      res.status(500).json(error);
    }
  }
}
