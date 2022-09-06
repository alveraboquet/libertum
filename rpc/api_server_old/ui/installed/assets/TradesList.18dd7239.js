import{b as m,f as C}from"./numberformat.a1b2908a.js";import{d as u,n as i,u as v,r as f,c as p,g as b}from"./index.061ad1de.js";import{D as x,T as g}from"./TradeProfit.df90b345.js";import{T as h}from"./TradeDetail.5c037157.js";var k=u({components:{DateTimeTZ:x,TradeProfit:g},props:{trade:{type:Object,required:!0},stakeCurrencyDecimals:{type:Number,required:!0},showDetails:{type:Boolean,default:!1}},setup(){return{formatPrice:m,formatPercent:C}}});var B=function(){var e=this,t=e._self._c;return e._self._setupProxy,t("div",{staticClass:"d-flex"},[t("div",{staticClass:"px-1 d-flex flex-row flex-fill text-left justify-content-between align-items-center"},[t("span",[t("span",{staticClass:"mr-1 font-weight-bold"},[e._v(e._s(e.trade.pair))]),t("small",{staticClass:"text-secondary"},[e._v("(#"+e._s(e.trade.trade_id)+")")])]),t("small",[t("DateTimeTZ",{attrs:{date:e.trade.open_timestamp,"date-only":!0}})],1)]),t("trade-profit",{staticClass:"col-5",attrs:{trade:e.trade}})],1)},S=[],$=i(k,B,S,!1,null,"e92ac328",null,null),L=$.exports,w=u({name:"CustomTradeList",components:{CustomTradeListEntry:L},props:{trades:{required:!0,type:Array},title:{default:"Trades",type:String},stakeCurrency:{required:!1,default:"",type:String},activeTrades:{default:!1,type:Boolean},showFilter:{default:!1,type:Boolean},multiBotView:{default:!1,type:Boolean},emptyText:{default:"No Trades to show.",type:String},stakeCurrencyDecimals:{default:3,type:Number}},setup(s){const e=b(),t=v(),a=f(1),_=f(""),c=s.activeTrades?200:25,y=p(()=>s.trades.length),T=p(()=>s.trades.slice((a.value-1)*c,a.value*c));return{currentPage:a,filterText:_,perPage:c,filteredTrades:T,formatPriceWithDecimals:r=>m(r,s.stakeCurrencyDecimals),forcesellHandler:(r,o=void 0)=>{e==null||e.proxy.$bvModal.msgBoxConfirm(`Really forcesell trade ${r.trade_id} (Pair ${r.pair})?`).then(l=>{if(l){const n={tradeid:String(r.trade_id),botId:r.botId};o&&(n.ordertype=o),t.forceSellMulti(n).then(d=>console.log(d)).catch(d=>console.log(d.response))}})},handleContextMenuEvent:(r,o,l)=>{!s.activeTrades||(l.preventDefault(),console.log(r))},removeTradeHandler:r=>{console.log(r),e==null||e.proxy.$bvModal.msgBoxConfirm(`Really delete trade ${r.trade_id} (Pair ${r.pair})?`).then(o=>{if(o){const l={tradeid:String(r.trade_id),botId:r.botId};t.deleteTradeMulti(l).catch(n=>console.log(n.response))}})},tradeClick:r=>{t.activeBot.setDetailTrade(r)},botStore:t,rows:y}}});var D=function(){var e=this,t=e._self._c;return e._self._setupProxy,t("div",{staticClass:"h-100 overflow-auto p-1"},[t("b-list-group",{attrs:{id:"tradeList"}},e._l(e.filteredTrades,function(a){return t("b-list-group-item",{key:a.trade_id,staticClass:"border border-secondary rounded my-05 px-1",on:{click:function(_){return e.tradeClick(a)}}},[t("CustomTradeListEntry",{attrs:{trade:a,"stake-currency-decimals":e.stakeCurrencyDecimals}})],1)}),1),e.trades.length==0?t("span",{staticClass:"mt-5"},[e._v(e._s(e.emptyText))]):e._e(),t("div",{staticClass:"w-100 d-flex justify-content-between mt-1"},[e.activeTrades?e._e():t("b-pagination",{attrs:{"total-rows":e.rows,"per-page":e.perPage,"aria-controls":"tradeList"},model:{value:e.currentPage,callback:function(a){e.currentPage=a},expression:"currentPage"}}),e.showFilter?t("b-input",{staticStyle:{width:"unset"},attrs:{type:"text",placeholder:"Filter",size:"sm"},model:{value:e.filterText,callback:function(a){e.filterText=a},expression:"filterText"}}):e._e()],1)],1)},P=[],I=i(w,D,P,!1,null,"599ca8f8",null,null),F=I.exports;const M={name:"ArrowLeftIcon",emits:["click"],props:{title:{type:String},fillColor:{type:String,default:"currentColor"},size:{type:Number,default:24}}};var z=function(){var e=this,t=e._self._c;return t("span",e._b({staticClass:"material-design-icon arrow-left-icon",attrs:{"aria-hidden":!e.title,"aria-label":e.title,role:"img"},on:{click:function(a){return e.$emit("click",a)}}},"span",e.$attrs,!1),[t("svg",{staticClass:"material-design-icon__svg",attrs:{fill:e.fillColor,width:e.size,height:e.size,viewBox:"0 0 24 24"}},[t("path",{attrs:{d:"M20,11V13H8L13.5,18.5L12.08,19.92L4.16,12L12.08,4.08L13.5,5.5L8,11H20Z"}},[e.title?t("title",[e._v(e._s(e.title))]):e._e()])])])},H=[],N=i(M,z,H,!1,null,null,null,null),R=N.exports,E=u({name:"TradesList",components:{CustomTradeList:F,TradeDetail:h,BackIcon:R},props:{history:{default:!1,type:Boolean}},setup(){return{botStore:v()}}});var q=function(){var e=this,t=e._self._c;return e._self._setupProxy,t("div",[!e.history&&!e.botStore.activeBot.detailTradeId?t("CustomTradeList",{attrs:{trades:e.botStore.activeBot.openTrades,title:"Open trades","active-trades":!0,"stake-currency-decimals":e.botStore.activeBot.stakeCurrencyDecimals,"empty-text":"No open Trades."}}):e._e(),e.history&&!e.botStore.activeBot.detailTradeId?t("CustomTradeList",{attrs:{trades:e.botStore.activeBot.closedTrades,title:"Trade history","stake-currency-decimals":e.botStore.activeBot.stakeCurrencyDecimals,"empty-text":"No closed trades so far."}}):e._e(),e.botStore.activeBot.detailTradeId?t("div",{staticClass:"d-flex flex-column"},[t("b-button",{staticClass:"align-self-start mt-1 ml-1",attrs:{size:"sm"},on:{click:function(a){return e.botStore.activeBot.setDetailTrade(null)}}},[t("BackIcon"),e._v(" Back")],1),t("TradeDetail",{attrs:{trade:e.botStore.activeBot.tradeDetail,"stake-currency":e.botStore.activeBot.stakeCurrency}})],1):e._e()],1)},j=[],Z=i(E,q,j,!1,null,"c98ba9f3",null,null),X=Z.exports;export{X as default};
//# sourceMappingURL=TradesList.18dd7239.js.map