# 토익스피킹 Web App (Vue.js)

## Todo List
- [✔] Vue Setting
- [✔] App
- [✔] Home
- [❌] Login
- [🛠] 문제풀기
- [❌] 학습현황
- [❌] 시험 일정
- [❌] 시험 지원하기
- [🤔] 커뮤니티

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

## [✔] App
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


## [✔] Home
- Background 설정
- [✔]v-for로 menu 설정
  - ```['문제풀기', '학습현황', '시험 일정', '토스 지원하기']```

## [❌] Login

## [🛠] Solve
### Part1
- 🛠⏱ Timer Component 따로 팠다. 아우 진짜 귀찮아 [(참고사이트)](https://moonspam.github.io/Lets-make-a-Timer/)
  - ✔ props 로 시간 떤져주면 그 시간에 맞춰 timer 작동
  - 🛠 mounted 되면 Description 읽기 -> 45초 Preparation -> 45초 Response
  - ❌녹음버튼 -> 끝나면 밑에 재생버튼
- 🛠 Amazon Polly TTS(Text-To-Speach) 연동
  - ❌서버..를 파야하네? [(참고 사이트)](https://medium.com/@anaptfox/getting-started-with-amazon-polly-using-node-js-345e84dbd23d) 아자아자!
  - 🛠 문장마다 TTS 해주는 기능 추가하자.


### Part2

### Part3

### Part4

### Part5

### Part6