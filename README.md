# Issue [20941](https://github.com/nuxt/nuxt/issues/20941) reproduction steps


**Objective:** 
1. Fetch data on the sever-side using Nuxt plugin  `(/plugins/init.server.ts)`
2. Set data in the Pinia store `(/store/post.ts)`
3. And finally, access this data on `app.vue` or Nuxt pages `(/app.vue)`

--- 

**Happy path:**

- clone the branch `issue-20941`
- `yarn install` & `yarn dev`
- visit [http://localhost:3000/](http://localhost:3000/) - see the data loading just fine from the server-side Nuxt plugin

**Broken path:**

- `yarn add -D @nuxt/devtools` 
- uncomment `// '@nuxt/devtools'` in the `nuxt.config.ts`
- `yarn dev`
- visit [http://localhost:3000/](http://localhost:3000/) - see empty []

**Back to happy path:**

- `yarn remove @nuxt/devtools` 
- comment `// '@nuxt/devtools'` in the `nuxt.config.ts`
- yarn dev 
- visit [http://localhost:3000/](http://localhost:3000/) - see the data loading just fine from the server-side Nuxt plugin