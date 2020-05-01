# 토익스피킹 Web App (Vue.js)

## Todo List
- [✔] Vue Setting
- [🛠] App
- [🛠] Home
- [❌] Login

## [✔] Vue Setting
[Vue CLI](https://cli.vuejs.org/) 로 'tos' 프로젝트를 생성
```
npm install -g @vue/cli
vue create tos
```
```
Vue CLI v4.3.1
? Please pick a preset: Manually select features
? Check the features needed for your project: Babel, Router, Vuex, Linter
? Use history mode for router? (Requires proper server setup for index fallback in production) Yes
? Pick a linter / formatter config: Basic
? Pick additional lint features: Lint on save
? Where do you prefer placing config for Babel, ESLint, etc.? In package.json
? Save this as a preset for future projects? No
```
[Vuetify](https://vuetifyjs.com/) Vuetify plugin
```
cd tos
vue add vuetify
```
```
? Choose a preset: Default (recommended)
```

## [🛠] App
```router-view``` 설정

📁 Router<br>
&nbsp;ㄴ&nbsp;/<br>
&nbsp;ㄴ&nbsp;/login<br>
&nbsp;ㄴ&nbsp;/solve<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ㄴ&nbsp;/part1/:id<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ㄴ&nbsp;/part2/:id<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ㄴ&nbsp;/part3/:id<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ㄴ&nbsp;/part4/:id<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ㄴ&nbsp;/part5/:id<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ㄴ&nbsp;/part6/:id<br>
&nbsp;ㄴ&nbsp;/status<br>
&nbsp;ㄴ&nbsp;/schedule<br>
&nbsp;ㄴ&nbsp;/apply<br>

[🛠]```Appbar.vue```&nbsp;&nbsp;[🛠]```Footer.vue``` 구성
- Nav-bar 설정 해야함 (뭘 넣을지 모르겠넴)


## [🛠] Home
- Background 설정
- [🛠]v-for로 menu 설정
  - ```['문제풀기', '학습현황', '시험 일정', '토스 지원하기']```

## [❌] Login