import { ErrorService, ResponseService } from "models/services";

const responseService: ResponseService = {
  sigIn: "Iniciaste sesión correctamente",
  sigUp: "Registraste correctamente",
  saveAccount: "Cuenta actualizada",
  saveUser: "Usuario actualizado",
  updateAvatarAccount: "Avatar actualizado",
  updatePassword: "Contraseña actualizada",
  recoveryPassword: "Se ha enviado un correo para recuperar tu contraseña",
  resetPassword: "Contraseña actualizada",
  verifyEmail: "Se ha enviado un correo para verificar tu cuenta",
  default: "Todo salió bien",
};

const errorAuthService: ErrorService | any = {
  400: "Email o nombre de usuario invalido",
  401: "Email o contraseña incorrectos",
  403: "Email o nombre de usuario ya en uso",
  500: "Error del servidor",
  default: "Error de autenticación",
};

const errorSaveDataAccountService: ErrorService | any = {
  400: "Error al guardar los datos",
  500: "Error del servidor",
  default: "Error al guardar los datos",
};

const errorUpdateAvatar: ErrorService | any = {
  400: "Tienes que añadir una imagen",
  404: "Cuenta no encontrada",
  500: "Error del servidor",
  default: "Error al actualizar la imagen",
};

const errorUpdatePassword: ErrorService | any = {
  400: "Contraseña actual incorrecta",
  500: "Error del servidor",
  default: "Error al actualizar la contraseña",
};

const errorPasswordRecovery: ErrorService | any = {
  403: "Error al recuperar la contraseña",
  404: "Usuario no encontrado",
  500: "Error del servidor",
  default: "Error al recuperar la contraseña",
};

const errorResetPassword: ErrorService | any = {
  400: "Error al actualizar la contraseña",
  500: "Error del servidor",
  default: "Error al actualizar la contraseña",
};

const errorTokenValidation: ErrorService | any = {
  default: "Error al validar el token",
};

const errorVerifyEmail: ErrorService | any = {
  400: "Error al verificar el email",
  500: "Error del servidor",
  default: "Error al verificar el email",
};

export {
  errorAuthService,
  responseService,
  errorSaveDataAccountService,
  errorUpdateAvatar,
  errorUpdatePassword,
  errorPasswordRecovery,
  errorResetPassword,
  errorTokenValidation,
  errorVerifyEmail,
};
