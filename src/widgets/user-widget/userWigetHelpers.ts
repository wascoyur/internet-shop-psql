import { Roles } from "../../app/types/user.ts";

export const isAnyRolesIsExist = (props: Roles) => {
  return Object.keys(props).length;
};
export const getPermissions = (props: Roles): string[] => {
  const permissions: string[] = [];
  for (const key in props) {
    permissions.push(key[0]);
  }
  return permissions;
};
