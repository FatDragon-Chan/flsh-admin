const getters = {
  sidebar: state => state.app.sidebar,
  device: state => state.app.device,
  token: state => state.user.token,
  avatar: state => state.user.avatar,
  name: state => state.user.name,
  roles: state => state.user.roles,
  permission_routes: state => state.permission.routes,
  categoryData: state => state.filterData.categoryData,
  tagData: state => state.filterData.tagData,
  accountStatus: state => state.filterData.accountStatus,
  typeData: state => state.filterData.typeData,
  loading: state => state.settings.loading
}
export default getters
