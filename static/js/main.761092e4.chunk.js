(this["webpackJsonpportfolio-project"]=this["webpackJsonpportfolio-project"]||[]).push([[0],{26:function(n,e,t){},30:function(n,e,t){"use strict";t.r(e);var r,a=t(2),i=t.n(a),o=t(16),s=t.n(o),c=t(4),d=t(7),l=t(3),m=(t(26),t(6)),b=t(5),u=t(1),j=b.c.div(r||(r=Object(m.a)(["\n  width: 100%;\n  padding: 1rem 0;\n\n  div {\n    padding: 1rem;\n    background: rgba(255, 255, 255, 0.1);\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    border-top: 2px solid #fff;\n  }\n\n  div span {\n    display: block;\n  }\n"])));var h=function(n){var e=n.total,t=n.calculateEstimate,r=Object(a.useState)(),i=Object(l.a)(r,2),o=i[0],s=i[1];return Object(a.useEffect)((function(){var n=new Date;n.setMinutes(n.getMinutes()+t());var e="".concat(n.getHours()>9?n.getHours():"0".concat(n.getHours()),":").concat(n.getMinutes()>9?n.getMinutes():"0".concat(n.getMinutes()));s(e)}),[t]),Object(u.jsx)(j,{children:Object(u.jsxs)("div",{children:[Object(u.jsxs)("span",{children:["Tasks: ",e]}),Object(u.jsxs)("span",{children:["Task #: ",e]}),Object(u.jsxs)("span",{children:["Finish at: ",o]})]})})};var f,g=function(){return Object(u.jsxs)("div",{className:"info",children:[Object(u.jsx)("h1",{children:"Online Pomodoro timer to boost your productivity"}),Object(u.jsxs)("section",{children:[Object(u.jsx)("h2",{children:"What is Pomodoro Technique?"}),Object(u.jsx)("p",{children:"The Pomodoro Technique is created by Francesco Cirillo for a more productive way to work and study. The technique uses a timer to break down work into intervals, traditionally 25 minutes in length, separated by short breaks. Each interval is known as a pomodoro, from the Italian word for 'tomato', after the tomato-shaped kitchen timer that Cirillo used as a university student"})]}),Object(u.jsxs)("section",{children:[Object(u.jsx)("h2",{children:"How to use it?"}),Object(u.jsxs)("ol",{children:[Object(u.jsx)("li",{children:"Add tasks to work on today"}),Object(u.jsx)("li",{children:"Set estimate pomdoros for each task"}),Object(u.jsx)("li",{children:"Select a task that you wanna work on"}),Object(u.jsx)("li",{children:"Start Timer and focus for as many minutes as you have set for focus"}),Object(u.jsx)("li",{children:"Take a break when focus time hits 00:00"}),Object(u.jsx)("li",{children:"Repeat it until you finish the task"})]})]})]})},p=b.c.div(f||(f=Object(m.a)(["\n  width: 100%;\n  height: 1.5px;\n  background: ",";\n"])),(function(n){return n.color}));var k=function(n){n.activeProgress;var e=n.color;return Object(u.jsx)(p,{className:"line",color:e})},O=t(20);var x=function(n){var e=n.showSettings;return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsxs)("nav",{children:[Object(u.jsx)("h3",{className:"brand",children:"Pomodoro"}),Object(u.jsx)("div",{className:"nav-buttons",children:Object(u.jsx)("button",{className:"btn set-btn",onClick:e,children:Object(u.jsx)(O.a,{})})})]}),Object(u.jsx)(k,{color:"#333"})]})},v=t(8),w={pomodoro:25,shortBreak:5,longBreak:15,longBreakAfter:4,autoBreak:!0,autoPomodoro:!0,darkMode:!1};function y(n){localStorage.setItem("pomodoro-tasks",JSON.stringify(n))}function N(n){localStorage.setItem("pomodoro-settings",JSON.stringify(n))}var S=function(n){var e=n.settingsProps,t=e.settings,r=e.hideSettings,i=e.show,o=e.onSettingsChanged,s=Object(a.useState)(Object(c.a)({},t)),d=Object(l.a)(s,2),m=d[0],b=d[1],j=function(n){b((function(e){return Object(c.a)(Object(c.a)({},e),{},Object(v.a)({},n.target.name,Number(n.target.value)))}))},h=function(n){b((function(e){return Object(c.a)(Object(c.a)({},e),{},Object(v.a)({},n.target.name,n.target.checked))})),console.log(m)};return Object(u.jsx)("div",{className:i?"settings-container show-settings":"settings-container",onClick:function(n){return n.target.classList.contains("settings-container")&&r()},children:Object(u.jsxs)("div",{className:"settings",children:[Object(u.jsxs)("div",{className:"setting-header",children:[Object(u.jsx)("h1",{className:"off-white",children:"Timer"}),Object(u.jsx)("div",{className:"X btn",onClick:r,children:"X"})]}),Object(u.jsx)("div",{className:"timers-container"}),Object(u.jsx)("hr",{}),Object(u.jsx)("h2",{children:"Time (minutes)"}),Object(u.jsxs)("div",{className:"timers",children:[Object(u.jsxs)("div",{className:"timer",children:[Object(u.jsx)("label",{htmlFor:"pomodoro",className:"off-white",children:"Pomodoro"}),Object(u.jsx)("input",{type:"number",id:"pomodoro",name:"pomodoro",value:m.pomodoro.toString().replace(/^0+/,""),onChange:j,min:"1"})]}),Object(u.jsxs)("div",{className:"timer",children:[Object(u.jsx)("label",{htmlFor:"break",className:"off-white",children:"Break"}),Object(u.jsx)("input",{type:"number",id:"break",name:"shortBreak",value:m.shortBreak.toString().replace(/^0+/,""),onChange:j,min:"1"})]}),Object(u.jsxs)("div",{className:"timer",children:[Object(u.jsx)("label",{htmlFor:"long-break",className:"off-white",children:"Long Break"}),Object(u.jsx)("input",{type:"number",id:"long-break",name:"longBreak",value:m.longBreak.toString().replace(/^0+/,""),onChange:j,min:"1"})]})]}),Object(u.jsx)("hr",{}),Object(u.jsxs)("div",{className:"setting-component",children:[Object(u.jsx)("p",{children:"Auto start Pomodoro?"}),Object(u.jsxs)("label",{className:"switch",children:[Object(u.jsx)("input",{type:"checkbox",checked:m.autoPomodoro,value:m.autoPomodoro,onChange:h,name:"autoPomodoro"}),Object(u.jsx)("span",{className:"slider round"})]})]}),Object(u.jsx)("hr",{}),Object(u.jsxs)("div",{className:"setting-component",children:[Object(u.jsx)("p",{children:"Auto start Breaks?"}),Object(u.jsxs)("label",{className:"switch",children:[Object(u.jsx)("input",{type:"checkbox",checked:m.autoBreak,value:m.autoBreak,onChange:h,name:"autoBreak"}),Object(u.jsx)("span",{className:"slider round"})]})]}),Object(u.jsx)("hr",{}),Object(u.jsxs)("div",{className:"setting-component",children:[Object(u.jsx)("p",{children:Object(u.jsx)("label",{htmlFor:"longBreakAfter",children:"Long Break Intervals"})}),Object(u.jsx)("div",{children:Object(u.jsx)("input",{type:"number",id:"longBreakAfter",value:m.longBreakAfter.toString().replace(/^0+/,""),name:"longBreakAfter",min:"1",onChange:j})})]}),Object(u.jsx)("hr",{}),Object(u.jsxs)("div",{className:"setting-component",children:[Object(u.jsx)("p",{children:"Dark Mode"}),Object(u.jsxs)("label",{className:"switch",children:[Object(u.jsx)("input",{type:"checkbox",checked:m.darkMode,value:m.darkMode,onChange:h,name:"darkMode"}),Object(u.jsx)("span",{className:"slider round"})]})]}),Object(u.jsx)("button",{className:"btn btn-xxl",onClick:function(){var n=Object(c.a)({},m);o(n),N(n),r()},children:"Save"})]})})},B=t(21),C=t.n(B),T=t(12);var F,z=function(n){var e=n.handleForm,t=n.handleCancel,r=n.title,i=n.plannedSessions,o=Object(a.useState)(r),s=Object(l.a)(o,2),c=s[0],d=s[1],m=Object(a.useState)(i),b=Object(l.a)(m,2),j=b[0],h=b[1],f=Object(a.createRef)(null);return Object(a.useEffect)((function(){f.current.focus()}),[]),Object(u.jsx)("div",{className:"task-form",children:Object(u.jsxs)("div",{className:"form show-form",children:[Object(u.jsx)("input",{type:"text",className:"task-title",name:"inputValue",value:c,onChange:function(n){return d(n.target.value)},ref:f,placeholder:"What are you working on?"}),Object(u.jsx)("label",{htmlFor:"task-number",children:"Planned sections:"}),Object(u.jsx)("br",{}),Object(u.jsx)("input",{type:"number",className:"task-number",value:j.toString().replace(/^0+/,""),onChange:function(n){return h(n.target.value)},min:"0",max:"20",id:"task-number"}),Object(u.jsx)("button",{className:"number-counter btn",onClick:function(){return h((function(n){return n+1}))},children:"\u21e7"}),Object(u.jsx)("button",{className:"number-counter btn",onClick:function(){return h((function(n){return n-1}))},children:"\u21e9"}),Object(u.jsxs)("div",{className:"task-footer",children:[Object(u.jsx)("button",{className:"btn",onClick:function(){return t(!1)},children:"Cancel"}),Object(u.jsx)("button",{className:c&&j?"btn save success":"btn save active",onClick:function(){return e(c,j)},children:"Save"})]})]})})},A=b.c.div(F||(F=Object(m.a)(["\n  margin: 0.3rem 0;\n\n  .single-task {\n    width: 100%;\n    padding: 0.3rem;\n    border-left: 3px solid #000;\n    border-radius: 4px;\n    font-size: 1.2rem;\n    background: #f4f4f4;\n    color: #000;\n    display: flex;\n    justify-content: space-between;\n    margin: 0.5rem 0;\n  }\n\n  .single-task div {\n    display: flex;\n    align-items: center;\n  }\n\n  span {\n    display: inline-block;\n    margin: 0.4rem;\n  }\n\n  .icon,\n  .check {\n    color: rgba(0, 0, 0, 0.5);\n    font-size: 1.2rem;\n    position: relative;\n  }\n\n  .check {\n    font-size: 1.8rem;\n  }\n\n  .btn-cover {\n    display: inline-block;\n    position: absolute;\n    left: 0;\n    top: 0;\n    width: 100%;\n    margin: 0;\n    padding: 0;\n    height: 100%;\n  }\n"])));var M=function(n){var e=n.tasks,t=n.task,r=n.handleTask,i=Object(a.useState)(!1),o=Object(l.a)(i,2),s=o[0],c=o[1],m=function(n){return c(!0),e.findIndex((function(e){return e.id===n}))};return s?Object(u.jsx)(z,{handleForm:function(n,a){var i=m(t.id),o=e[i];if(o.title=n,o.plannedSessions=a,!o.title&&!n.plannedSessions)return window.alert("Fields must not be empty");var s=Object(d.a)(e);s[i]=o,c(!1),r(s),y(s)},handleCancel:function(){return c(!1)},title:t.title,plannedSessions:t.plannedSessions}):Object(u.jsx)(A,{children:Object(u.jsxs)("div",{className:"single-task",children:[Object(u.jsxs)("div",{children:[Object(u.jsx)("span",{className:"check",children:Object(u.jsx)(T.a,{})}),Object(u.jsx)("span",{children:t.title})]}),Object(u.jsxs)("div",{children:[Object(u.jsxs)("span",{children:["0/","".concat(t.plannedSessions)]}),Object(u.jsxs)("span",{className:"icon",onClick:function(){return m(t.id)},children:[Object(u.jsx)(T.b,{}),Object(u.jsx)("span",{className:"btn-cover"})]}),Object(u.jsxs)("span",{className:"icon",onClick:function(){return function(n){var t=e.findIndex((function(e){return e.id===n}));if(window.confirm("Are you sure you want to delete ".concat(e[t].title,"?"))){var a=e;return a.splice(t,1),y(a),r(a)}}(t.id)},children:[Object(u.jsx)(T.c,{}),Object(u.jsx)("span",{className:"btn-cover"})]})]})]},t.id)})};var P=function(n){var e=n.tasks,t=n.handleTask,r=Object(a.useState)(!1),i=Object(l.a)(r,2),o=i[0],s=i[1],c=function(n){return s(n)};return Object(u.jsxs)("div",{children:[Object(u.jsxs)("div",{className:"tasks-header",children:[Object(u.jsx)("h3",{children:"Tasks"}),Object(u.jsx)("button",{className:"options btn",children:Object(u.jsx)("span",{className:"dot"})})]}),Object(u.jsx)("div",{className:"tasks-list"}),Object(u.jsx)(k,{color:"#ccc"}),e.map((function(n){return Object(u.jsx)(M,{task:n,tasks:e,handleTask:t},n.id)})),o&&Object(u.jsx)(z,{handleCancel:c,handleForm:function(n,r){if(n&&r){var a={id:C()(),title:n,completed:!1,date:new Date,plannedSessions:r};c(!1),t([].concat(Object(d.a)(e),[a])),y([].concat(Object(d.a)(e),[a]))}else window.alert("Fields must not be empty")},title:"",plannedSessions:0}),Object(u.jsxs)("button",{className:o?"hide-task":"btn task-btn",onClick:function(){return s(!0)},children:[Object(u.jsx)("span",{children:"+"})," Add Task"]})]})},I={mainColor:"#121212",trackerBg:"#181818",mainOverlay:"#222",mainFg:"#f4f4f4",trackerFg:"#f4f4f4",mainTransparency:"rgba(255, 255, 255, 0.1)",focusTransparency:"rgba(0, 0, 0, 0.2)",shortBreak:"rgba(76, 145, 149)",longBreak:"rgb(69, 214, 163)",mainTransition:"all .3s",mainRed:"#d95550"},E={mainColor:"#fff",trackerBg:"#d95550",mainOverlay:"#fff",mainFg:"#000",trackerFg:"#f4f4f4",mainTransparency:"rgba(255, 255, 255, 0.1)",focusTransparency:"rgba(0, 0, 0, 0.2)",shortBreak:"rgba(76, 145, 149)",longBreak:"rgb(69, 214, 163)",mainTransition:"all .3s",mainRed:"#d95550"};var R=function(n){var e=n.darkMode,t=n.children;return Object(u.jsx)(b.a,{theme:e?I:E,children:t})};var J,L=function(n){var e=n.settings,t=Object(a.useState)({mode:"pomodoro",pomodoroCount:1,ticking:!1}),r=Object(l.a)(t,2),i=r[0],o=r[1],s=i.mode,d=Object(a.useState)({mins:0,secs:0}),m=Object(l.a)(d,2),b=m[0],j=m[1];return Object(a.useEffect)((function(){var n,t=b.mins,r=b.secs;return i.ticking&&(n=setInterval((function(){if(0===t&&0===r)if("pomodoro"===i.mode){var n;n=i.pomodoroCount===e.longBreakAfter?"longBreak":"shortBreak";var a=i.pomodoroCount===e.longBreakAfter?1:i.pomodoroCount+1;o((function(e){return Object(c.a)(Object(c.a)({},e),{},{mode:n,pomodoroCount:a})}))}else o((function(n){return Object(c.a)(Object(c.a)({},n),{},{mode:"pomodoro"})}));else j(0===r?{mins:t-1,secs:59}:{mins:t,secs:r-1})}),1e3)),function(){return clearInterval(n)}}),[e,b,e.longBreakAfter,i]),Object(a.useEffect)((function(){console.log(s),j({mins:e[s],secs:0})}),[s,e]),Object(u.jsxs)("div",{className:"tracker",children:[Object(u.jsxs)("div",{className:"modes",children:[Object(u.jsx)("button",{className:"pomodoro"===s?"btn mode active":"btn mode",children:"Focus"}),Object(u.jsx)("button",{className:"shortBreak"===s?"btn mode active":"btn mode",children:"Break"}),Object(u.jsx)("button",{className:"longBreak"===s?"btn mode active":"btn mode",children:"Long Break"})]}),Object(u.jsxs)("div",{className:"tracker-timer",children:[Object(u.jsx)("span",{children:b.mins>9?"".concat(b.mins):"0".concat(b.mins)}),":",Object(u.jsx)("span",{children:b.secs>9?"".concat(b.secs):"0".concat(b.secs)})]}),Object(u.jsx)("div",{className:"tracker-buttons",children:Object(u.jsx)("button",{className:"btn timer-btn",onClick:function(){return o((function(n){return Object(c.a)(Object(c.a)({},n),{},{ticking:!n.ticking})}))},children:i.ticking?"Stop":"Start"})})]})},X=Object(b.b)(J||(J=Object(m.a)(["\n\n  body {\n    font-size: 1.1rem;\n    background: ",";\n    color: ","\n  }\n  \n  .off-white {\n    color: #bbb;\n  }\n  \n  .bg-off-white {\n    background: #rgba(0, 0, 0, 0.5);\n  }\n  \n  .btn {\n    color: inherit;\n    border: none;\n    background: none;\n    cursor: pointer;\n  }\n  \n  .set-btn {\n    font-size: 1.5rem;\n    background: ",";\n    padding: 0.2rem;\n    display: flex;\n  }\n  \n  .btn-xxl {\n    display: block;\n    width: 100%;\n    text-align: center;\n  }\n  \n  .active {\n    background: "," !important;\n  }\n  \n  .text-center {\n    text-align: center;\n  }\n  \n  /* Nav section starts */\n  \n  .settings-container {\n    position: fixed;\n    overflow: scroll;\n    width: 100vw;\n    height: 100vh;\n    top: 0;\n    left: 0;\n    background: rgba(0, 0, 0, 0.4);\n    z-index: 1000;\n    transform: scale(0, 0);\n    transform-origin: right top;\n    transition: ",";\n  }\n  \n  .show-settings {\n    transform: scale(1, 1);\n  }\n  \n  .settings {\n    width: 80%;\n    margin: 2rem auto;\n    padding: 0.5rem;\n    background: ",";\n    color: ",";  }\n  \n  .setting-header {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    padding: 0.5rem 0;\n    margin: 0.5rem 0;\n  }\n  \n  .timers {\n    display: flex;\n    justify-content: space-between;\n    margin-bottom: 1rem;\n  }\n  \n  .timer input {\n    width: 80%;\n    display: block;\n    padding: 0.5rem 0.3rem;\n    background: ",';\n    color: inherit;\n    border: none;\n  }\n  \n  .switch {\n    position: relative;\n    display: inline-block;\n    width: 50px;\n    height: 25px;\n  }\n  \n  .switch input {\n    opacity: 0;\n    width: 0;\n    height: 0;\n  }\n  .slider {\n    position: absolute;\n    cursor: pointer;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    background-color: #ccc;\n    -webkit-transition: 0.4s;\n    transition: 0.4s;\n  }\n  \n  .slider:before {\n    position: absolute;\n    content: "";\n    height: 17px;\n    width: 17px;\n    left: 4px;\n    bottom: 4px;\n    background-color: white;\n    -webkit-transition: 0.4s;\n    transition: 0.4s;\n  }\n  \n  input:checked + .slider {\n    background-color: #2196f3;\n  }\n  \n  input:focus + .slider {\n    box-shadow: 0 0 1px #2196f3;\n  }\n  \n  input:checked + .slider:before {\n    -webkit-transform: translateX(26px);\n    -ms-transform: translateX(26px);\n    transform: translateX(26px);\n  }\n  \n  /* Rounded sliders */\n  .slider.round {\n    border-radius: 34px;\n  }\n  \n  .slider.round:before {\n    border-radius: 50%;\n  }\n  \n  .setting-component {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    padding: 1rem 0;\n  }\n\n  .setting-component input {\n    width: 4rem;\n    height: 1rem;\n    padding: 1rem 0.4rem;\n    background: ',";\n    color: inherit;\n    border: none;\n  }\n  \n  .settings button {\n    margin: 1rem 0 0;\n    padding: 1rem;\n    background: green;\n    color: #fff;\n  }\n  \n  .main-container {\n    width: 100%;\n    padding: 0 0.5rem;\n    background: ",";\n    color: ",";\n    min-height: 100vh;\n  }\n  \n  .break {\n    background: ",";\n  }\n\n  .long-break {\n    background: ",";\n  }\n  \n  .success {\n    background: green;\n    border-radius: 5px;\n    color: #fff !important;\n  }\n  \n  nav {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    min-height: 60px;\n  }\n  \n  .tracker-container {\n    max-width: 468px;\n    margin: auto;\n  }\n  \n  .tracker {\n    width: 100%;\n    min-height: 30vh;\n    padding: 0.5rem;\n    margin: 1rem 0;\n    text-align: center;\n    justify-content: center;\n    align-items: center;\n    background: ",';\n  }\n  \n  .modes {\n    width: 80%;\n    margin: 0.5rem auto;\n    display: flex;\n    justify-content: space-between;\n  }\n  \n  .modes .mode {\n    padding: 0.2rem;\n    font-size: 1.2rem;\n  }\n  \n  .tracker-timer {\n    font-size: 7rem;\n    margin: 0.5rem 0;\n    font-family: "Varela Round";\n  }\n  \n  .timer-btn {\n    font-size: 1.3rem;\n    background: ',";\n    padding: 1rem;\n    width: 100%;\n    margin: 0.5rem auto;\n  }\n  \n  .task-form {\n    position: relative;\n    width: 100%;\n    padding: 0.5rem 0;\n  }\n  \n  .task-btn {\n    display: block;\n    opacity: 0.7;\n    font-size: 1.3rem;\n    width: 100%;\n    margin: 0.5rem 0;\n    color: ",";\n    background: ",";\n    padding: 1rem;\n    border: 1px dashed ",";\n    transition: ",";\n  }\n  \n  .hide-task {\n    display: none;\n  }\n  \n  .task-btn:hover,\n  .task-btn:focus {\n    opacity: 1;\n  }\n  \n  .task-btn span {\n    display: inline-block;\n    margin-right: 0.3rem;\n    height: 1.5rem;\n    width: 1.5rem;\n    background: ",";\n    border-radius: 50%;\n  }\n  \n  .form {\n    width: 100%;\n    padding: 0.5rem;\n    background: #f4f4f4;\n    color: #000;\n    border-radius: 5px;\n    top: 0;\n    left: 0;\n    z-index: 2;\n    transform: scale(0, 0);\n    transform-origin: center;\n    transition: ",";\n  }\n  \n  .show-form {\n    transform: scale(1, 1);\n  }\n  \n  .task-title {\n    display: block;\n    width: 100%;\n    font-size: 1.3rem;\n    padding: 0.75rem 0;\n    outline: none;\n  }\n  \n  .form input {\n    margin: 1rem 0;\n    border: none;\n    background: none;\n  }\n  \n  .form .task-number {\n    background: #e4e4e4;\n    font-size: 1.2rem;\n    padding: 0.5rem;\n    width: 5rem;\n    height: 3rem;\n  }\n  \n  .number-counter {\n    display: inline-block;\n    margin: 0 0.2rem;\n    padding: 0.5rem;\n    font-size: 1.2rem;\n    border: 1px solid #ccc;\n  }\n  \n  .task-footer {\n    text-align: right;\n    padding: 0.3rem;\n    background: #e4e4e4;\n    width: 100%;\n  }\n  \n  .task-footer button {\n    padding: 0.75rem;\n    margin: 0 1rem;\n    color: inherit;\n  }\n  \n  .active {\n    background: #000;\n    border-radius: 5px;\n    color: #fff;\n  }\n  \n  /* Tasks section starts */\n  \n  .tasks-header {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    margin: 1rem 0;\n  }\n  \n  .options {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    height: 2rem;\n    background: ",';\n    width: 2rem;\n  }\n  \n  .dot,\n  .dot::after,\n  .dot::before {\n    position: relative;\n    display: inline-block;\n    width: 4px;\n    height: 4px;\n    background: #f4f4f4;\n  }\n  \n  .dot::after {\n    content: "";\n    position: absolute;\n    top: 8px;\n    left: 0;\n  }\n  \n  .dot::before {\n    content: "";\n    position: absolute;\n    bottom: 8px;\n    left: 0;\n  }\n  \n  .info {\n    width: 95%;\n    margin: 1rem auto;\n  }\n  \n  .info section {\n    margin: 1rem 0;\n  }\n  \n  .info section h1,\n  .info section h2 {\n    position: relative;\n    padding: 1rem 0;\n    margin: 1rem 0;\n  }\n  \n  .info section h1::after,\n  .info section h2::after {\n    content: "";\n    position: absolute;\n    width: 5vw;\n    height: 0.3rem;\n    bottom: 0;\n    left: 0;\n    background: ',";\n  }\n  \n  ol {\n    padding: 0 1rem;\n  }\n  \n  @media screen and (min-width: 768px) {\n    .container {\n      width: 50%;\n      margin: auto;\n    }\n  \n    .settings-container {\n      transform-origin: center;\n    }\n  \n    .info {\n      width: 50%;\n      margin: 1rem auto;\n    }\n  }  \n"])),(function(n){return n.theme.mainColor}),(function(n){return n.theme.mainFg}),(function(n){return n.theme.mainTransparency}),(function(n){return n.theme.focusTransparency}),(function(n){return n.theme.mainTransition}),(function(n){return n.theme.mainOverlay}),(function(n){return n.theme.mainFg}),(function(n){return n.theme.mainTransparency}),(function(n){return n.theme.mainTransparency}),(function(n){return n.theme.trackerBg}),(function(n){return n.theme.trackerFg}),(function(n){return n.theme.shortBreak}),(function(n){return n.theme.longBreak}),(function(n){return n.theme.mainTransparency}),(function(n){return n.theme.mainTransparency}),(function(n){return n.theme.overlayFg}),(function(n){return n.theme.mainTransparency}),(function(n){return n.theme.overlayFg}),(function(n){return n.theme.mainTransition}),(function(n){return n.theme.mainTransition}),(function(n){return n.theme.mainTransition}),(function(n){return n.theme.mainTransparency}),(function(n){return n.theme.mainRed}));var H=function(){var n=Object(a.useState)(!1),e=Object(l.a)(n,2),t=e[0],r=e[1],i=Object(a.useState)(),o=Object(l.a)(i,2),s=o[0],m=o[1],b=Object(a.useState)(),j=Object(l.a)(b,2),f=j[0],p=j[1],k=function(n){m(Object(c.a)({},n))};return Object(a.useEffect)((function(){m(JSON.parse(localStorage.getItem("pomodoro-settings"))||(N(w),w)),p(function(){var n=localStorage.getItem("pomodoro-tasks");return n?JSON.parse(n):[]}())}),[]),s||f?Object(u.jsx)(u.Fragment,{children:Object(u.jsxs)(R,{darkMode:s.darkMode,children:[Object(u.jsx)(X,{}),Object(u.jsx)(S,{settingsProps:{show:t,hideSettings:function(){return r(!1)},settings:s,onSettingsChanged:k}}),Object(u.jsx)("main",{className:"main-container",children:Object(u.jsxs)("div",{className:"container",children:[Object(u.jsx)(x,{showSettings:function(){return r(!0)}}),Object(u.jsxs)("div",{className:"tracker-container",children:[Object(u.jsx)(L,{settings:s,onSettingsChanged:k}),Object(u.jsx)(P,{tasks:f,handleTask:function(n){p(Object(d.a)(n))}}),f.length>0&&Object(u.jsx)(h,{calculateEstimate:function(){for(var n=f.reduce((function(n,e){return n+Number(e.plannedSessions)}),0),e=n*s.pomodoro,t=0;t<n;t++)s.longBreakAfter%t?e+=s.longBreak:e+=s.shortBreak;return e},total:f.length})]})]})}),Object(u.jsx)(g,{})]})}):Object(u.jsx)("div",{children:"Loading"})};s.a.render(Object(u.jsx)(i.a.StrictMode,{children:Object(u.jsx)(H,{})}),document.getElementById("root"))}},[[30,1,2]]]);
//# sourceMappingURL=main.761092e4.chunk.js.map