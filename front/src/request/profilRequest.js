import apiAxios from ".";

export async function requestLogin(
  alias,
  email,
  password,
  confirmPassword,
  presentation
) {
  try {
    const response = await apiAxios.patch("/profil/3", {
      alias,
      email,
      password,
      confirmPassword,
      presentation,
    });
    return response;
  } catch (err) {
    return err.response;
  }
}
