import http from '../../utils/requester';

export const loadUsersList = async (
  sort = 'createdAt,desc',
  pageNumber = 0
) => {
  return http.get(`/admin/users/list?page=${pageNumber}&sort=${sort}`);
};
