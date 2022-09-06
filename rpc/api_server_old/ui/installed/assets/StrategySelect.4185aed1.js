import{d,r as u,c as n,w as g,o as v,j as c,A as f,F as p,n as m,u as y}from"./index.061ad1de.js";const _=new Date;var b=d({name:"TimeRangeSelect",props:{value:{required:!0,type:String}},setup(r,{emit:e}){const t=u(""),a=u(""),s=n(()=>t.value!==""||a.value!==""?`${f(t.value)}-${f(a.value)}`:""),l=()=>{e("input",s.value)},i=()=>{const o=r.value.split("-");o[0]&&(t.value=c(p(o[0],"yyyyMMdd"))),o.length>1&&o[1]&&(a.value=c(p(o[1],"yyyyMMdd"))),l()};return g(()=>s.value,()=>l()),v(()=>{r.value?i():t.value=c(new Date(_.getFullYear(),_.getMonth()-1,1)),e("input",s.value)}),{dateFrom:t,dateTo:a,timeRange:s,updated:l}}});var S=function(){var e=this,t=e._self._c;return e._self._setupProxy,t("div",[t("div",{staticClass:"d-flex"},[t("b-form-group",{staticClass:"col-md-6",attrs:{label:"Start date","label-for":"dp_dateFrom"}},[t("b-input-group",[t("b-input-group-prepend",[t("b-form-datepicker",{staticClass:"mb-1",attrs:{"button-only":""},model:{value:e.dateFrom,callback:function(a){e.dateFrom=a},expression:"dateFrom"}})],1),t("b-form-input",{attrs:{id:"dp_dateFrom",type:"text",placeholder:"YYYY-MM-DD",autocomplete:"off"},model:{value:e.dateFrom,callback:function(a){e.dateFrom=a},expression:"dateFrom"}})],1)],1),t("b-form-group",{staticClass:"ml-2 col-md-6",attrs:{label:"End date","label-for":"dp_dateTo"}},[t("b-input-group",[t("b-input-group-prepend",[t("b-form-datepicker",{staticClass:"mb-1",attrs:{"button-only":""},model:{value:e.dateTo,callback:function(a){e.dateTo=a},expression:"dateTo"}})],1),t("b-form-input",{attrs:{id:"dp_dateTo",type:"text",placeholder:"YYYY-MM-DD",autocomplete:"off"},model:{value:e.dateTo,callback:function(a){e.dateTo=a},expression:"dateTo"}})],1)],1)],1),t("label",{staticClass:"text-left"},[e._v(" Timerange: "),t("b",[e._v(e._s(e.timeRange))])])])},T=[],x=m(b,S,T,!1,null,"f99d880c",null,null),R=x.exports,h=d({name:"TimefameSelect",props:{value:{default:"",type:String},belowTimeframe:{required:!1,default:"",type:String}},emits:["input"],setup(r,{emit:e}){const t=u(""),a=[{value:"",text:"Use strategy default"},"1m","3m","5m","15m","30m","1h","2h","4h","6h","8h","12h","1d","3d","1w","2w","1M","1y"],s=n(()=>{if(!r.belowTimeframe)return a;const i=a.findIndex(o=>o===r.belowTimeframe);return[...a].splice(0,i)});return{availableTimeframesBase:a,availableTimeframes:s,emitSelectedTimeframe:()=>{e("input",t.value)},selectedTimeframe:t}}});var C=function(){var e=this,t=e._self._c;return e._self._setupProxy,t("b-form-select",{attrs:{placeholder:"Use strategy default",options:e.availableTimeframes},on:{change:e.emitSelectedTimeframe},model:{value:e.selectedTimeframe,callback:function(a){e.selectedTimeframe=a},expression:"selectedTimeframe"}})},w=[],F=m(h,C,w,!1,null,"47169beb",null,null),Y=F.exports,B=d({name:"StrategySelect",props:{value:{type:String,required:!0},showDetails:{default:!1,required:!1,type:Boolean}},emits:["input"],setup(r,{emit:e}){const t=y(),a=n(()=>{var l;return(l=t.activeBot.strategy)==null?void 0:l.code}),s=n({get(){return r.value},set(l){t.activeBot.getStrategy(l),e("input",l)}});return v(()=>{t.activeBot.strategyList.length===0&&t.activeBot.getStrategyList()}),{botStore:t,strategyCode:a,locStrategy:s}}});var M=function(){var e=this,t=e._self._c;return e._self._setupProxy,t("div",[t("div",{staticClass:"w-100 d-flex"},[t("b-form-select",{attrs:{id:"strategy-select",options:e.botStore.activeBot.strategyList},model:{value:e.locStrategy,callback:function(a){e.locStrategy=a},expression:"locStrategy"}}),t("div",{staticClass:"ml-2"},[t("b-button",{on:{click:e.botStore.activeBot.getStrategyList}},[e._v("\u21BB")])],1)],1),e.showDetails&&e.botStore.activeBot.strategy?t("textarea",{directives:[{name:"model",rawName:"v-model",value:e.strategyCode,expression:"strategyCode"}],staticClass:"w-100 h-100",domProps:{value:e.strategyCode},on:{input:function(a){a.target.composing||(e.strategyCode=a.target.value)}}}):e._e()])},$=[],k=m(B,M,$,!1,null,null,null,null),q=k.exports;export{q as S,R as T,Y as a};
//# sourceMappingURL=StrategySelect.4185aed1.js.map