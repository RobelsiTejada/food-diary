'use strict'

const app = require('../app')
const getFormFields = require('../../../lib/get-form-fields.js')

// authApi.signUp(authUi.success, authUi.failure, data)
const signUp = function (data) {
  // console.log(data)
  return $.ajax({
    url: app.host + '/sign-up/',
    method: 'POST',
    data
  })
}

const signIn = function (data) {
  console.log('data === ' + data)
  return $.ajax({
    url: app.host + '/sign-in/',
    method: 'POST',
    data
  })
}

const signOut = function () {
  return $.ajax({
    method: 'DELETE',
    url: app.host + '/sign-out/' + app.user.id,
    headers: {
      Authorization: 'Token token=' + app.user.token
    }
  })
}

const changePassword = function (data) {
  return $.ajax({
    method: 'PATCH',
    url: app.host + '/change-password/' + app.user.id,
    headers: {
      Authorization: 'Token token=' + app.user.token
    },
    data: data
  })
}

const getDateMasters = function (data) {
  console.log('getDateMasters in api.js')
  return $.ajax({
    method: 'GET',
    url: app.host + '/date_masters/' + app.user.id,
    headers: {
      Authorization: 'Token token=' + app.user.token
    }
  })
}

const getFoodLogs = function (data) {
  console.log('getFoodLogs')
  console.log(data) // undefined
  return $.ajax({
    method: 'GET',
    url: app.host + '/food_logs/' + app.user.id,
    headers: {
      Authorization: 'Token token=' + app.user.token
    }
  })
}

module.exports = {
  signUp,
  signIn,
  signOut,
  changePassword,
  getFoodLogs,
  getDateMasters,
  getFormFields
}
