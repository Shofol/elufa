export type CustomerData = {
  $collectionId?: string;
  $createdAt?: string;
  $databaseId?: string;
  $id?: string;
  $permissions?: string[];
  $updatedAt?: string;
  company?: string;
  email?: string;
  firstName?: string;
  lastName?: string;
  licenseNumber?: string;
  licenseEndDate?: string;
  licenseStartDate?: string;
  licenseStatus?: LicenseStatus;
  isTrial?: boolean;
  trialLicenseEndDate?: string;
  tiralLicenseStartDate?: string;
  password?: string;
  phoneNumber?: string;
  userId?: string;
};

export enum LicenseStatus {
  ACTIVE = "ACTIVE",
  INACTIVE = "INACTIVE",
  PENDING = "PENDING",
}

export type LoginUser = {
  email?: string;
  userId: string;
  password: string;
};

export type UpdatePassword = {
  password: string;
  confirmPassword: string;
};
