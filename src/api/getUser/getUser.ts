import { HttpErrorResponse } from "types";

export default async function getUser(page: number): Promise<any> {
  const response = await fetch(`/user/${page}`);

  try {
    if (response.ok) {
      return await response.json();
    } else {
      throw new HttpErrorResponse(response);
    }
  } catch (e) {
    throw new HttpErrorResponse(response);
  }
}
