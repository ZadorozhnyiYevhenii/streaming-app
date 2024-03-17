"use client"

import { BASE_URL } from "@/api/core";
import { StreamPlayer } from "@/components/StreamPlayer/StreamPlayer";
import { IUser } from "@/types/IUser";

// const fetchUserInfo = async (id: string) => {
//   try {
//     const response = await fetch(
//       `${BASE_URL}/user/${id}`,
//       { cache: "no-store" }
//     );
//     const data: IUser = await response.json();
//     console.log("user data", data);

//     return data
//   } catch (error) {
//     console.error(error);
//     throw new Error();
//   }
// };

// interface DashBoardPage {
//   params: {
//     id: string
//   }
// }

export default async function UserDashBoard() {
  // const user = fetchUserInfo(params.id)
  return (
    <div>
      <h1>Stream Preview</h1>
      <StreamPlayer />
    </div>
  )
}