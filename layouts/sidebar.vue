<template>
  <div>
    <Navigation :sticky="true" />
    <Banner />
    <b-container fluid>
      <b-row>
        <b-col>
          <Nuxt />
        </b-col>
        <b-col col lg="2">3 of 3</b-col>
      </b-row>
    </b-container>
  </div>
</template>
