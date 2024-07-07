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
export const getFormData = (formData: FormData) => {
  const email = formData.get("email");
  const password = formData.get("password");
  const firstName = formData.get("firstname");
  const lastName = formData.get("lastname");
  const roles = formData.get("roles");
  const phone = formData.get("phone");

  return {
    email,
    password,
    firstName,
    lastName,
    roles,
    phone,
  };
};

export const validateFields = (formData: FormData): boolean => {
  const requiredFields = [
    "email",
    "password",
    "firstname",
    "lastname",
    "roles",
    "phone",
  ];

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
    const allowedVals = ["A", "U", "M", "O"].sort();
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
