import{b as f,f as L}from"./numberformat.a1b2908a.js";import{n as d,d as y,D as z,u as A,r as c,c as V,w as D}from"./index.ef7539b9.js";import{D as M,T as P}from"./TradeProfit.af2e34d4.js";var R=function(){var e=this,i=e.$createElement,t=e._self._c||i;return t("span",e._b({staticClass:"material-design-icon close-box-multiple-icon",attrs:{"aria-hidden":!e.title,"aria-label":e.title,role:"img"},on:{click:function(r){return e.$emit("click",r)}}},"span",e.$attrs,!1),[t("svg",{staticClass:"material-design-icon__svg",attrs:{fill:e.fillColor,width:e.size,height:e.size,viewBox:"0 0 24 24"}},[t("path",{attrs:{d:"M4 20H18V22H4C2.9 22 2 21.11 2 20V6H4V20M20.22 2H7.78C6.8 2 6 2.8 6 3.78V16.22C6 17.2 6.8 18 7.78 18H20.22C21.2 18 22 17.2 22 16.22V3.78C22 2.8 21.2 2 20.22 2M19 13.6L17.6 15L14 11.4L10.4 15L9 13.6L12.6 10L9 6.4L10.4 5L14 8.6L17.6 5L19 6.4L15.4 10L19 13.6Z"}},[e.title?t("title",[e._v(e._s(e.title))]):e._e()])])])},H=[];const j={name:"CloseBoxMultipleIcon",props:{title:{type:String},fillColor:{type:String,default:"currentColor"},size:{type:Number,default:24}}},p={};var E=d(j,R,H,!1,N,null,null,null);function N(e){for(let i in p)this[i]=p[i]}var Z=function(){return E.exports}(),q=function(){var e=this,i=e.$createElement,t=e._self._c||i;return t("span",e._b({staticClass:"material-design-icon gesture-tap-icon",attrs:{"aria-hidden":!e.title,"aria-label":e.title,role:"img"},on:{click:function(r){return e.$emit("click",r)}}},"span",e.$attrs,!1),[t("svg",{staticClass:"material-design-icon__svg",attrs:{fill:e.fillColor,width:e.size,height:e.size,viewBox:"0 0 24 24"}},[t("path",{attrs:{d:"M10,9A1,1 0 0,1 11,8A1,1 0 0,1 12,9V13.47L13.21,13.6L18.15,15.79C18.68,16.03 19,16.56 19,17.14V21.5C18.97,22.32 18.32,22.97 17.5,23H11C10.62,23 10.26,22.85 10,22.57L5.1,18.37L5.84,17.6C6.03,17.39 6.3,17.28 6.58,17.28H6.8L10,19V9M11,5A4,4 0 0,1 15,9C15,10.5 14.2,11.77 13,12.46V11.24C13.61,10.69 14,9.89 14,9A3,3 0 0,0 11,6A3,3 0 0,0 8,9C8,9.89 8.39,10.69 9,11.24V12.46C7.8,11.77 7,10.5 7,9A4,4 0 0,1 11,5Z"}},[e.title?t("title",[e._v(e._s(e.title))]):e._e()])])])},O=[];const G={name:"GestureTapIcon",props:{title:{type:String},fillColor:{type:String,default:"currentColor"},size:{type:Number,default:24}}},v={};var U=d(G,q,O,!1,W,null,null,null);function W(e){for(let i in v)this[i]=v[i]}var J=function(){return U.exports}(),K=y({name:"TradeActions",components:{DeleteIcon:z,ForceSellIcon:Z},props:{botApiVersion:{type:Number,default:1},trade:{type:Object,required:!0}},emits:["forceSell","deleteTrade"],setup(){return{}}}),Q=function(){var e=this,i=e.$createElement,t=e._self._c||i;return t("div",{staticClass:"d-flex flex-column"},[e.botApiVersion<=1.1?t("b-button",{staticClass:"btn-xs text-left",attrs:{size:"sm",title:"Forceexit"},on:{click:function(r){return e.$emit("forceSell",e.trade)}}},[t("ForceSellIcon",{staticClass:"mr-1",attrs:{size:16,title:"Forceexit"}}),e._v("Forceexit ")],1):e._e(),e.botApiVersion>1.1?t("b-button",{staticClass:"btn-xs text-left",attrs:{size:"sm",title:"Forceexit limit"},on:{click:function(r){return e.$emit("forceSell",e.trade,"limit")}}},[t("ForceSellIcon",{staticClass:"mr-1",attrs:{size:16,title:"Forceexit limit"}}),e._v("Forceexit limit ")],1):e._e(),e.botApiVersion>1.1?t("b-button",{staticClass:"btn-xs text-left mt-1",attrs:{size:"sm",title:"Forceexit market"},on:{click:function(r){return e.$emit("forceSell",e.trade,"market")}}},[t("ForceSellIcon",{staticClass:"mr-1",attrs:{size:16,title:"Forceexit market"}}),e._v("Forceexit market ")],1):e._e(),t("b-button",{staticClass:"btn-xs text-left mt-1",attrs:{size:"sm",title:"Delete trade"},on:{click:function(r){return e.$emit("deleteTrade",e.trade)}}},[t("DeleteIcon",{staticClass:"mr-1",attrs:{size:16,title:"Delete trade"}}),e._v(" Delete ")],1)],1)},X=[];const b={};var Y=d(K,Q,X,!1,ee,null,null,null);function ee(e){for(let i in b)this[i]=b[i]}var te=function(){return Y.exports}(),re=y({name:"TradeList",components:{ActionIcon:J,DateTimeTZ:M,TradeProfit:P,TradeActions:te},props:{trades:{required:!0,type:Array},title:{default:"Trades",type:String},stakeCurrency:{required:!1,default:"",type:String},activeTrades:{default:!1,type:Boolean},showFilter:{default:!1,type:Boolean},multiBotView:{default:!1,type:Boolean},emptyText:{default:"No Trades to show.",type:String}},setup(e,{root:i}){const t=A(),r=c(1),u=c(),g=c(""),C=e.activeTrades?200:15,s=c(),$=[{key:"actions"}],T=[{key:"close_timestamp",label:"Close date"},{key:"exit_reason",label:"Close Reason"}],m=a=>f(a,t.activeBot.stakeCurrencyDecimals),h=V(()=>e.trades.length),k=[e.multiBotView?{key:"botName",label:"Bot"}:{},{key:"trade_id",label:"ID"},{key:"pair",label:"Pair"},{key:"amount",label:"Amount"},{key:"stake_amount",label:"Stake amount",formatter:a=>m(a)},{key:"open_rate",label:"Open rate",formatter:a=>f(a)},{key:e.activeTrades?"current_rate":"close_rate",label:e.activeTrades?"Current rate":"Close rate",formatter:a=>f(a)},{key:"profit",label:e.activeTrades?"Current profit %":"Profit %",formatter:(a,l,n)=>`${L(n.profit_ratio,2)} ${`(${m(n.profit_abs)})`}`},{key:"open_timestamp",label:"Open date"},...e.activeTrades?$:T],S=(a,l=void 0)=>{i.$bvModal.msgBoxConfirm(`Really forcesell trade ${a.trade_id} (Pair ${a.pair})?`).then(n=>{if(n){const o={tradeid:String(a.trade_id),botId:a.botId};l&&(o.ordertype=l),t.forceSellMulti(o).then(_=>console.log(_)).catch(_=>console.log(_.response))}})},F=(a,l,n)=>{!e.activeTrades||(n.preventDefault(),console.log(a))},I=a=>{console.log(a),i.$bvModal.msgBoxConfirm(`Really delete trade ${a.trade_id} (Pair ${a.pair})?`).then(l=>{if(l){const n={tradeid:String(a.trade_id),botId:a.botId};t.deleteTradeMulti(n).catch(o=>console.log(o.response))}})},w=(a,l)=>{var n;a&&a.trade_id!==t.activeBot.detailTradeId&&!((n=s.value)!=null&&n.isRowSelected(l))?t.activeBot.setDetailTrade(a):(console.log("unsetting item"),t.activeBot.setDetailTrade(null))},B=()=>{var a;if(t.activeBot.detailTradeId){const l=e.trades.findIndex(n=>n.trade_id===t.activeBot.detailTradeId);l>=0?(a=s.value)==null||a.selectRow(l):(console.log(`Unsetting item for tradeid ${u.value}`),u.value=void 0)}};return D(()=>t.activeBot.detailTradeId,a=>{var n;e.trades.findIndex(o=>o.trade_id===a)<0&&((n=s.value)==null||n.clearSelected())}),{botStore:t,currentPage:r,selectedItemIndex:u,filterText:g,perPage:C,tableFields:k,rows:h,tradesTable:s,forcesellHandler:S,handleContextMenuEvent:F,removeTradeHandler:I,onRowClicked:w,onRowSelected:B}}}),ae=function(){var e=this,i=e.$createElement,t=e._self._c||i;return t("div",{staticClass:"h-100 overflow-auto w-100"},[t("b-table",{ref:"tradesTable",attrs:{small:"",hover:"",stacked:"md",items:e.trades,fields:e.tableFields,"show-empty":"","empty-text":e.emptyText,"per-page":e.perPage,"current-page":e.currentPage,"primary-key":"botTradeId",selectable:"","select-mode":"single",filter:e.filterText},on:{"row-contextmenu":e.handleContextMenuEvent,"row-clicked":e.onRowClicked,"row-selected":e.onRowSelected},scopedSlots:e._u([{key:"cell(actions)",fn:function(r){return[t("b-button",{staticClass:"btn-xs",attrs:{id:`btn-actions_${r.index}`,size:"sm",title:"Actions"}},[t("ActionIcon",{attrs:{size:16,title:"Actions"}})],1),t("b-popover",{attrs:{target:`btn-actions_${r.index}`,triggers:"focus",placement:"left"}},[t("trade-actions",{attrs:{trade:r.item,"bot-api-version":e.botStore.activeBot.botApiVersion},on:{deleteTrade:e.removeTradeHandler,forceSell:e.forcesellHandler}})],1)]}},{key:"cell(pair)",fn:function(r){return[t("span",[e._v(" "+e._s(`${r.item.pair}${r.item.open_order_id===void 0||r.item.open_order_id===null?"":"*"}`)+" ")])]}},{key:"cell(trade_id)",fn:function(r){return[e._v(" "+e._s(r.item.trade_id)+" "+e._s(e.botStore.activeBot.botApiVersion>2&&r.item.trading_mode!=="spot"?"| "+(r.item.is_short?"Short":"Long"):"")+" ")]}},{key:"cell(profit)",fn:function(r){return[t("trade-profit",{attrs:{trade:r.item}})]}},{key:"cell(open_timestamp)",fn:function(r){return[t("DateTimeTZ",{attrs:{date:r.item.open_timestamp}})]}},{key:"cell(close_timestamp)",fn:function(r){return[t("DateTimeTZ",{attrs:{date:r.item.close_timestamp}})]}}])}),t("div",{staticClass:"w-100 d-flex justify-content-between"},[e.activeTrades?e._e():t("b-pagination",{attrs:{"total-rows":e.rows,"per-page":e.perPage,"aria-controls":"my-table"},model:{value:e.currentPage,callback:function(r){e.currentPage=r},expression:"currentPage"}}),e.showFilter?t("b-input",{staticStyle:{width:"unset"},attrs:{type:"text",placeholder:"Filter",size:"sm"},model:{value:e.filterText,callback:function(r){e.filterText=r},expression:"filterText"}}):e._e()],1)],1)},ie=[];const x={};var ne=d(re,ae,ie,!1,le,"5297c4ac",null,null);function le(e){for(let i in x)this[i]=x[i]}var de=function(){return ne.exports}();export{Z as F,de as T};
//# sourceMappingURL=TradeList.dad744f9.js.map