<template>
  <div id="app">
    <div class="menu">
      <router-link to="/">Home</router-link> | 
      <router-link to="/login">Login</router-link> | 
      <router-link to="/Solicitud">Solicitud</router-link> | 
      <router-link to="/admin/dashboard">Dashboard Adm</router-link> | 
      <router-link to="/tecnico/dashboard">Dashboard Tecnico</router-link>
    </div>
    <router-view />
  </div>
</template>