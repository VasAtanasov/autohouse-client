import http from '../../utils/requester';

export const DEFAULT_PAGE_SIZE = 50;

const contentTypeV1 = {
  'Content-Type': 'application/bg.autohouse.api-v1+json',
};

export const loadUsersList = async (sort = 'createdAt,asc', pageNumber = 0) => {
  return http.get(
    `/admin/users/list?page=${pageNumber}&sort=${sort}&size=${DEFAULT_PAGE_SIZE}`
  );
};

export const loadUserDetails = async (userId) => {
  return http.get(`/admin/user/details/${userId}`);
};

export const toggleActive = async (userId) => {
  return http.get(`/admin/user/toggle-active/${userId}`);
};

export const updateUserRole = async (userId, currentRole, newRole) => {
  return http.post(`/admin/user/update-roles`, {
    data: { userId, currentRole, newRole },
    headers: {
      ...contentTypeV1,
    },
  });
};
