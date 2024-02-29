export function ValidateEmail(mail) {
  if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(mail)) {
    return true;
  }
  return false;
}

export const URL = 'https://backend-production-fc84.up.railway.app/api/designers';

export const EDIT_PROFILE_URL =
  'https://backend-production-fc84.up.railway.app/api/designers/65dd0835f130375b22b5f23d';
