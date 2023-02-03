export const mockPrincipal = (username, permissions) => {
  return {
    id: 0,
    memberId: 0,
    accountNonExpired: false,
    accountNonLocked: false,
    permissions: permissions,
    avatar: "",
    countryIso2: "",
    credentialsExpired: false,
    credentialsNonExpired: false,
    enabled: false,
    expired: false,
    fullName: "",
    locked: false,
    password: null,
    username: username,
  };
};
