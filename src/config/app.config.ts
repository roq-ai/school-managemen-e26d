interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Admin'],
  customerRoles: [],
  tenantRoles: ['Admin', 'Teacher', 'Accountant', 'Parent', 'Student'],
  tenantName: 'School',
  applicationName: 'School Management',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
};
