import { User } from "../../app/types/user.ts";

export const addUser = async (props: Omit<User, "id"> | undefined) => {
  const URL = `http://${import.meta.env.VITE_APP_DEV_API}/account/user`;
  if (!props) return;

  try {
    const response = await fetch(URL, {
      method: "POST",
      mode: "no-cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ...props,
      }),
    });

    console.log(await response.json());

    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
    return await response.json();
  } catch (e) {
    console.error("There was a problem with the fetch operation: ", e);
    return null;
  }
};
