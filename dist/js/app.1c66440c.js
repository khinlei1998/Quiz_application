(function(e){function t(t){for(var n,o,c=t[0],a=t[1],u=t[2],l=0,h=[];l<c.length;l++)o=c[l],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&h.push(r[o][0]),r[o]=0;for(n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n]);d&&d(t);while(h.length)h.shift()();return s.push.apply(s,u||[]),i()}function i(){for(var e,t=0;t<s.length;t++){for(var i=s[t],n=!0,c=1;c<i.length;c++){var a=i[c];0!==r[a]&&(n=!1)}n&&(s.splice(t--,1),e=o(o.s=i[0]))}return e}var n={},r={app:0},s=[];function o(t){if(n[t])return n[t].exports;var i=n[t]={i:t,l:!1,exports:{}};return e[t].call(i.exports,i,i.exports,o),i.l=!0,i.exports}o.m=e,o.c=n,o.d=function(e,t,i){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(o.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)o.d(i,n,function(t){return e[t]}.bind(null,n));return i},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],a=c.push.bind(c);c.push=t,c=c.slice();for(var u=0;u<c.length;u++)t(c[u]);var d=a;s.push([0,"chunk-vendors"]),i()})({0:function(e,t,i){e.exports=i("56d7")},"56d7":function(e,t,i){"use strict";i.r(t);i("e260"),i("e6cf"),i("cca6"),i("a79d");var n=i("2b0e"),r=(i("4989"),i("ab8b"),function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{attrs:{id:"app"}},[i("h3",[e._v("Vue Quiz")]),i("h3",{directives:[{name:"show",rawName:"v-show",value:e.questionindex!=e.questions.length,expression:"questionindex != questions.length"}]},[e._v("Question:"+e._s(this.questionno)+"/"+e._s(e.questions.length)+" ")]),e._l(e.questions,(function(t,n){return i("div",{directives:[{name:"show",rawName:"v-show",value:n==e.questionindex,expression:"index == questionindex"}],key:t.text,staticClass:"container-fluid",attrs:{id:"bes_border"}},[i("h2",[e._v(e._s(t.text))]),e._l(e.questions[n].responses,(function(t,n){return i("p",{key:t.id,class:{red:t.id==e.selectedanswer},on:{click:function(i){return e.clickanswer(t.id)}}},[e._v(" "+e._s(t.text)+" "+e._s(n.text)+" ")])})),i("button",{directives:[{name:"show",rawName:"v-show",value:e.questionindex!=e.questions.length,expression:"questionindex != questions.length"}],staticClass:"btn btn-success",on:{click:function(t){return e.next()}}},[e._v(" Next ")])],2)})),i("div",{directives:[{name:"show",rawName:"v-show",value:e.questionindex===e.questions.length,expression:"questionindex === questions.length"}],attrs:{id:"showresult"}},[e._v(" Total Score:"+e._s(e.score)+" / "+e._s(e.questions.length)+" ")])],2)}),s=[],o=(i("4de4"),i("caad"),i("2532"),{data:function(){return{questionindex:0,questionno:1,nextbutton:!1,score:0,selectedanswer:"null",selected:"false",correctQuestion:[],questions:[{id:1,text:"How many novels did the Bronte sisters write in total?",responses:[{id:1,text:"Six",correct:!1},{id:2,text:"Seven",correct:!0},{id:3,text:"Eight",correct:!1},{id:4,text:"Nine",correct:!1}]},{id:2,text:"Which is the India's largest and the oldest museum?",responses:[{id:5,text:"\tIndian Museum, Kolkata",correct:!0},{id:6,text:"National Museum, New Delhi",correct:!1},{id:7,text:"Allahabad Museum",correct:!1},{id:8,text:"Salar Jung Museum, Hyderabad",correct:!1}]},{id:3,text:"What is the longest that an elephant has ever lived?",responses:[{id:9,text:"\t17 years",correct:!1},{id:10,text:"49 years",correct:!1},{id:11,text:"86 years ",correct:!0},{id:12,text:"142 years",correct:!1}]},{id:4,text:"Which of these animals does NOT appear in the Chinese zodiac?",responses:[{id:13,text:"\tBear",correct:!1},{id:14,text:"Rabbit",correct:!1},{id:15,text:"Dragon ",correct:!0},{id:16,text:"Dog",correct:!1}]},{id:5,text:"What is the longest river in France?",responses:[{id:17,text:"\tLoire",correct:!0},{id:18,text:"Seine",correct:!1},{id:19,text:"Rhone ",correct:!1},{id:20,text:"Gironde",correct:!1}]},{id:6,text:"Which U.S. state is known as the sunflower state?",responses:[{id:21,text:"\tFlorida",correct:!1},{id:22,text:"California",correct:!1},{id:23,text:"Maine ",correct:!1},{id:24,text:"Kansas",correct:!0}]},{id:7,text:"What language is the most spoken worldwide?",responses:[{id:25,text:"\tChinese",correct:!0},{id:26,text:"Spanish",correct:!1},{id:27,text:"Arabic ",correct:!1},{id:28,text:"English",correct:!1}]},{id:8,text:"Which ocean is the largest?",responses:[{id:29,text:"\tIndian",correct:!1},{id:30,text:"Pacific",correct:!0},{id:31,text:"Atlantic ",correct:!1},{id:32,text:"Arctic",correct:!1}]},{id:9,text:"Who painted the Mona Lisa?",responses:[{id:33,text:"\tVan Gogh",correct:!1},{id:34,text:" Da Vinci",correct:!0},{id:35,text:" Picasso ",correct:!1},{id:36,text:"Monet",correct:!1}]},{id:10,text:"How many degrees are in a circle?",responses:[{id:37,text:"360",correct:!0},{id:38,text:"  180",correct:!1},{id:39,text:" 150 ",correct:!1},{id:40,text:"359",correct:!1}]}]}},methods:{clickanswer:function(e){var t,i,n=this;for(t=0;t<this.questions.length;t++)for(console.log(this.questions.length),i=0;i<this.questions[t].responses.length;i++)if(this.questions[t].responses[i].id==e){if(this.questions[t].responses[i].correct){this.correctQuestion.includes(this.questions[t].id)||(this.correctQuestion.push(this.questions[t].id),this.score+=1);break}if(this.correctQuestion.includes(this.questions[t].id)){this.correctQuestion=this.correctQuestion.filter((function(e){return e!=n.questions[t].id})),this.score-=1;break}}this.nextbutton=!0,this.selectedanswer=e},next:function(){this.questionindex<this.questions.length?(this.questionindex++,this.questionno++):console.log("false")}}}),c=o,a=(i("5810"),i("2877")),u=Object(a["a"])(c,r,s,!1,null,"2814b955",null),d=u.exports;n["a"].config.productionTip=!1,new n["a"]({render:function(e){return e(d)}}).$mount("#app")},5810:function(e,t,i){"use strict";var n=i("af4e"),r=i.n(n);r.a},af4e:function(e,t,i){}});
//# sourceMappingURL=app.1c66440c.js.map