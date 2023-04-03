import axios from "axios"
const juandevAPI = axios.create({
  baseURL: "https://juan02042023-dev-73694-prod.herokuapp.com",
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
function api_v1_login_create(payload) {
  return juandevAPI.post(`/api/v1/login/`, payload.data)
}
function api_v1_signup_create(payload) {
  return juandevAPI.post(`/api/v1/signup/`, payload.data)
}
function rest_auth_user_retrieve(payload) {
  return juandevAPI.get(`/rest-auth/user/`)
}
function rest_auth_user_update(payload) {
  return juandevAPI.put(`/rest-auth/user/`, payload.data)
}
function rest_auth_user_partial_update(payload) {
  return juandevAPI.patch(`/rest-auth/user/`, payload.data)
}
function api_docs_schema_retrieve(payload) {
  return juandevAPI.get(`/api-docs/schema/`, { params: { lang: payload.lang } })
}
function api_v1_newmodel_list(payload) {
  return juandevAPI.get(`/api/v1/newmodel/`)
}
function api_v1_newmodel_create(payload) {
  return juandevAPI.post(`/api/v1/newmodel/`, payload.data)
}
function rest_auth_login_create(payload) {
  return juandevAPI.post(`/rest-auth/login/`, payload.data)
}
function rest_auth_logout_retrieve(payload) {
  return juandevAPI.get(`/rest-auth/logout/`)
}
function rest_auth_logout_create(payload) {
  return juandevAPI.post(`/rest-auth/logout/`)
}
function api_v1_newmodel_retrieve(payload) {
  return juandevAPI.get(`/api/v1/newmodel/${payload.id}/`)
}
function api_v1_newmodel_update(payload) {
  return juandevAPI.put(`/api/v1/newmodel/${payload.id}/`, payload.data)
}
function api_v1_newmodel_partial_update(payload) {
  return juandevAPI.patch(`/api/v1/newmodel/${payload.id}/`, payload.data)
}
function api_v1_newmodel_destroy(payload) {
  return juandevAPI.delete(`/api/v1/newmodel/${payload.id}/`)
}
function rest_auth_registration_create(payload) {
  return juandevAPI.post(`/rest-auth/registration/`, payload.data)
}
function rest_auth_password_reset_create(payload) {
  return juandevAPI.post(`/rest-auth/password/reset/`, payload.data)
}
function rest_auth_password_change_create(payload) {
  return juandevAPI.post(`/rest-auth/password/change/`, payload.data)
}
function rest_auth_password_reset_confirm_create(payload) {
  return juandevAPI.post(`/rest-auth/password/reset/confirm/`, payload.data)
}
function rest_auth_registration_verify_email_create(payload) {
  return juandevAPI.post(`/rest-auth/registration/verify-email/`, payload.data)
}
export const apiService = {
  api_v1_login_create,
  api_v1_signup_create,
  rest_auth_user_retrieve,
  rest_auth_user_update,
  rest_auth_user_partial_update,
  api_docs_schema_retrieve,
  api_v1_newmodel_list,
  api_v1_newmodel_create,
  rest_auth_login_create,
  rest_auth_logout_retrieve,
  rest_auth_logout_create,
  api_v1_newmodel_retrieve,
  api_v1_newmodel_update,
  api_v1_newmodel_partial_update,
  api_v1_newmodel_destroy,
  rest_auth_registration_create,
  rest_auth_password_reset_create,
  rest_auth_password_change_create,
  rest_auth_password_reset_confirm_create,
  rest_auth_registration_verify_email_create
}
