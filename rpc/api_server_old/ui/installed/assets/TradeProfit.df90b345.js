import{d as a,c as i,j as c,k as s,t as l,n as o}from"./index.061ad1de.js";import{b as _,f as u}from"./numberformat.a1b2908a.js";var d=a({name:"DateTimeTZ",props:{date:{required:!0,type:Number},showTimezone:{required:!1,type:Boolean,default:!1},dateOnly:{required:!1,type:Boolean,default:!1}},setup(e){const t=i(()=>e.dateOnly?c(e.date):e.showTimezone?s(e.date):l(e.date)),r=i(()=>{const f=s(e.date),n=s(e.date,"UTC");return f===n?n:`${f}
${n}`});return{formattedDate:t,timezoneTooltip:r}}});var p=function(){var t=this,r=t._self._c;return t._self._setupProxy,r("span",{attrs:{title:t.timezoneTooltip}},[t._v(t._s(t.formattedDate))])},m=[],v=o(d,p,m,!1,null,"779972a1",null,null),w=v.exports,y=a({name:"ProfitSymbol",props:{profit:{type:Number,required:!0}},setup(e){return{isProfitable:i(()=>e.profit>0)}}});var b=function(){var t=this,r=t._self._c;return t._self._setupProxy,r("div",{staticClass:"d-inline-block"},[r("div",{class:t.isProfitable?"triangle-up":"triangle-down"})])},P=[],T=o(y,b,P,!1,null,"8155f3ba",null,null),$=T.exports,g=a({name:"ProfitPill",components:{ProfitSymbol:$},props:{profitRatio:{required:!1,default:void 0,type:Number},profitAbs:{required:!1,default:void 0,type:Number},stakeCurrency:{required:!0,type:String},profitDesc:{required:!1,default:"",type:String}},setup(e){const t=i(()=>e.profitRatio!==void 0&&e.profitRatio>0||e.profitRatio===void 0&&e.profitAbs!==void 0&&e.profitAbs>0);return{profitString:i(()=>e.profitRatio!==void 0&&e.profitAbs!==void 0?`(${_(e.profitAbs,3)})`:e.profitAbs!==void 0?`${_(e.profitAbs,3)}`:""),isProfitable:t,formatPercent:u}}});var x=function(){var t=this,r=t._self._c;return t._self._setupProxy,r("div",{staticClass:"d-flex justify-content-between align-items-center profit-pill pl-2 pr-1",class:t.isProfitable?"profit-pill-profit":"",attrs:{title:t.profitDesc}},[r("profit-symbol",{attrs:{profit:t.profitRatio||t.profitAbs}}),r("div",{staticClass:"d-flex justify-content-center align-items-center flex-grow-1"},[t._v(" "+t._s(t.profitRatio!==void 0?t.formatPercent(t.profitRatio,2):"")+" "),t.profitString?r("span",{staticClass:"ml-1",class:t.profitRatio?"small":"",attrs:{title:t.stakeCurrency}},[t._v(t._s(t.profitString))]):t._e()])],1)},D=[],R=o(g,x,D,!1,null,"7fe4233f",null,null),C=R.exports,S=a({name:"TradeProfit",components:{ProfitPill:C},props:{trade:{required:!0,type:Object}},setup(e){return{profitDesc:i(()=>{let r=`Current profit: ${u(e.trade.profit_ratio)} (${e.trade.profit_abs})`;return r+=`
Open since: ${l(e.trade.open_timestamp)}`,r})}}});var q=function(){var t=this,r=t._self._c;return t._self._setupProxy,r("profit-pill",{attrs:{"profit-ratio":t.trade.profit_ratio,"profit-abs":t.trade.profit_abs,"profit-desc":t.profitDesc,"stake-currency":"USDT"}})},A=[],h=o(S,q,A,!1,null,"077a1454",null,null),j=h.exports;export{w as D,C as P,j as T};
//# sourceMappingURL=TradeProfit.df90b345.js.map