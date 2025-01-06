<template>
  <v-app>
    <v-navigation-drawer v-model="drawer" app>
      <v-list>
        <v-list-item to="/" prepend-icon="mdi-folder">
          <v-list-item-title>Assets</v-list-item-title>
        </v-list-item>
        <v-list-item to="/upload" prepend-icon="mdi-upload">
          <v-list-item-title>Upload</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>Asset Management System</v-toolbar-title>
    </v-app-bar>

    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: 'App',
  data: () => ({
    drawer: true
  })
}
</script>