import { Roles } from "../../app/types/user.ts";
import { UserData } from "./FormInput.tsx";

export const ROLES_MAP: { [key: string]: string } = {
  A: "ADMIN",
  U: "USER",
  M: "MANAGER",
  O: "OWNER",
};

const requiredFields = [
  "email",
  "password",
  "firstname",
  "lastname",
  "roles",
  "phone",
  "name",
  "login",
];

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

export const getFormData = (formData: FormData): UserData | undefined => {
  // @ts-expect-error неизвестная ошибка
  let data: UserData = {};

  const isKeyRequired = (key: string) => {
    return requiredFields.some((requiredField) => requiredField === key);
  };

  const isValueString = (fieldValue: FormDataEntryValue): boolean => {
    return typeof fieldValue === "string" && fieldValue.length > 0;
  };

  for (const [key, value] of formData.entries()) {
    if (!isKeyRequired(key) || !isValueString(value)) {
      return undefined;
    }
    data = { ...data, [key]: value };
  }

  return data;
};

export const validateFields = (formData: FormData): boolean => {
  for (const field of requiredFields) {
    if (!formData.has(field) || !isExistValue(field)) {
      return false; // Если хотя бы одно обязательное поле отсутствует
    }

    if (field === "roles") {
      const roles = formData.get("roles");
      return rolesVerify(roles);
    }
  }

  function rolesVerify(arg: FormDataEntryValue | null) {
    const allowedVals = Object.keys(ROLES_MAP).sort();

    if (typeof arg === "string") {
      const rolesValue = [...new Set(arg.toUpperCase().split(""))].sort();

      return rolesValue.length > 0
        ? rolesValue.every((role) => {
            return allowedVals.some((allowRole) => {
              return allowRole === role;
            });
          })
        : false;
    }
    return false;
  }

  function isExistValue(key: string): boolean {
    const value = formData.get(key) as string;
    return value.length > 0;
  }

  return true; // Все обязательные поля присутствуют
};
