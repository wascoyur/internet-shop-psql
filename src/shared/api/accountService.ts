import { User } from "../../app/types/user.ts";

export const addUser = async (props: Omit<User, "id"> | undefined) => {
  const URL = `${import.meta.url}/account/user`;
  if (!props) return;

  try {
    const response = await fetch(URL, {
      method: "POST",
      body: JSON.stringify({ props }),
    });
    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
    return response.json();
  } catch (e) {
    console.error("There was a problem with the fetch operation: ", e);
    return null;
  }
};
