<template>
  <div id="app">

    <Body />
    <NuxtLoadingIndicator />

    <AppNav />

    <NuxtPage class="min-h-screen w-full" />
  </div>
</template>
<script setup>
useHead({
  link: [
    {
      rel: 'stylesheet',
      href: '/css/main.css'
    },
    {
      href: "https://unpkg.com/boxicons@2.0.9/css/boxicons.min.css",
      rel: 'stylesheet'
    }
  ],
  script: [
    {
      src: 'https://code.jquery.com/jquery-3.6.0.min.js'
    },
    {
      src: 'https://code.jquery.com/ui/1.12.1/jquery-ui.min.js'
    }
  ]
});
</script>