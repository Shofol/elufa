import { Account, Client, Functions, ID } from "appwrite";
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  name: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method === "POST") {
    const email = JSON.parse(req.body).email;
    const password = JSON.parse(req.body).password;

    const client = new Client();
    const account = new Account(client);
    client
      .setEndpoint(process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT || "")
      .setProject(process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID || "");
    try {
      const promise: any = await account.create(ID.unique(), email, password);
      // const newPromise: any = await account.createVerification(
      //   "http://localhost:3000"
      // );
      res.status(200).json(promise);
    } catch (error: any) {
      res.status(500).json(error);
    }
  }
}
