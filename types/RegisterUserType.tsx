export interface RegisteredUser {
  email: string;
  company: string;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  licenseStartDate: string;
}

export interface LoginUser {
  email: string;
  password: string;
}
