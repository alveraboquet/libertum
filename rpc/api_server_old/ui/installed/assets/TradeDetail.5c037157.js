import{f as o,b as d,a as l}from"./numberformat.a1b2908a.js";import{d as s,n as i,t as n}from"./index.061ad1de.js";import{T as c,D as p}from"./TradeProfit.df90b345.js";var m=s({name:"ValuePair",props:{description:{type:String,required:!0},classLabel:{type:String,default:"col-4 font-weight-bold mb-0"},classValue:{type:String,default:"col-8"}}});var u=function(){var e=this,t=e._self._c;return e._self._setupProxy,t("div",{staticClass:"row"},[t("label",{class:e.classLabel},[e._v(e._s(e.description))]),t("div",{class:e.classValue},[e._t("default")],2)])},f=[],v=i(m,u,f,!1,null,"22e700b4",null,null),P=v.exports,g=s({name:"TradeDetail",components:{ValuePair:P,TradeProfit:c,DateTimeTZ:p},props:{trade:{required:!0,type:Object},stakeCurrency:{required:!0,type:String}},setup(){return{timestampms:n,formatPercent:o,formatPrice:d,formatPriceCurrency:l}}});var V=function(){var e=this,t=e._self._c;return e._self._setupProxy,t("div",{staticClass:"container text-left"},[t("div",{staticClass:"row"},[t("div",{staticClass:"col-lg-5"},[t("h5",{staticClass:"detail-header"},[e._v("General")]),t("ValuePair",{attrs:{description:"TradeId"}},[e._v(e._s(e.trade.trade_id))]),t("ValuePair",{attrs:{description:"Pair"}},[e._v(e._s(e.trade.pair))]),t("ValuePair",{attrs:{description:"Open date"}},[e._v(e._s(e.timestampms(e.trade.open_timestamp)))]),e.trade.buy_tag?t("ValuePair",{attrs:{description:"Entry tag"}},[e._v(e._s(e.trade.buy_tag))]):e._e(),t("ValuePair",{attrs:{description:"Stake"}},[e._v(e._s(e.formatPriceCurrency(e.trade.stake_amount,e.stakeCurrency))+" "+e._s(e.trade.leverage&&e.trade.leverage!==1?`(${e.trade.leverage}x)`:""))]),t("ValuePair",{attrs:{description:"Amount"}},[e._v(e._s(e.trade.amount))]),t("ValuePair",{attrs:{description:"Open Rate"}},[e._v(e._s(e.formatPrice(e.trade.open_rate)))]),!e.trade.is_open&&e.trade.close_rate?t("ValuePair",{attrs:{description:"Close Rate"}},[e._v(e._s(e.formatPrice(e.trade.close_rate)))]):e._e(),e.trade.close_timestamp?t("ValuePair",{attrs:{description:"Close date"}},[e._v(e._s(e.timestampms(e.trade.close_timestamp)))]):e._e(),e.trade.profit_ratio&&e.trade.profit_abs?t("ValuePair",{attrs:{description:`${e.trade.is_open?"Current Profit":"Close Profit"}`}},[t("trade-profit",{staticClass:"ml-2",attrs:{trade:e.trade}})],1):e._e(),t("details",[t("summary",[e._v("Details")]),e.trade.min_rate?t("ValuePair",{attrs:{description:"Min Rate"}},[e._v(e._s(e.formatPrice(e.trade.min_rate)))]):e._e(),e.trade.max_rate?t("ValuePair",{attrs:{description:"Max Rate"}},[e._v(e._s(e.formatPrice(e.trade.max_rate)))]):e._e(),t("ValuePair",{attrs:{description:"Open-Fees"}},[e._v(" "+e._s(e.trade.fee_open_cost)+" "+e._s(e.trade.fee_open_currency)+" ("+e._s(e.formatPercent(e.trade.fee_open))+") ")]),e.trade.fee_close_cost&&e.trade.fee_close?t("ValuePair",{attrs:{description:"Fees close"}},[e._v(" "+e._s(e.trade.fee_close_cost)+" "+e._s(e.trade.fee_close_currency)+" ("+e._s(e.formatPercent(e.trade.fee_close))+") ")]):e._e()],1)],1),t("div",{staticClass:"mt-2 mt-lg-0 col-lg-7"},[t("h5",{staticClass:"detail-header"},[e._v("Stoploss")]),t("ValuePair",{attrs:{description:"Stoploss"}},[e._v(" "+e._s(e.formatPercent(e.trade.stop_loss_pct/100))+" | "+e._s(e.formatPrice(e.trade.stop_loss_abs))+" ")]),e.trade.initial_stop_loss_pct&&e.trade.initial_stop_loss_abs?t("ValuePair",{attrs:{description:"Initial Stoploss"}},[e._v(" "+e._s(e.formatPercent(e.trade.initial_stop_loss_pct/100))+" | "+e._s(e.formatPrice(e.trade.initial_stop_loss_abs))+" ")]):e._e(),e.trade.is_open&&e.trade.stoploss_current_dist_ratio&&e.trade.stoploss_current_dist?t("ValuePair",{attrs:{description:"Current stoploss dist"}},[e._v(" "+e._s(e.formatPercent(e.trade.stoploss_current_dist_ratio))+" | "+e._s(e.formatPrice(e.trade.stoploss_current_dist))+" ")]):e._e(),e.trade.stoploss_last_update_timestamp?t("ValuePair",{attrs:{description:"Stoploss last updated"}},[e._v(" "+e._s(e.timestampms(e.trade.stoploss_last_update_timestamp))+" ")]):e._e(),e.trade.trading_mode!==void 0&&e.trade.trading_mode!=="spot"?t("div",[t("h5",{staticClass:"detail-header"},[e._v("Futures/Margin")]),t("ValuePair",{attrs:{description:"Direction"}},[e._v(" "+e._s(e.trade.is_short?"short":"long")+" - "+e._s(e.trade.leverage)+"x ")]),e.trade.funding_fees!==void 0?t("ValuePair",{attrs:{description:"Funding fees"}},[e._v(" "+e._s(e.formatPrice(e.trade.funding_fees))+" ")]):e._e(),e.trade.interest_rate!==void 0?t("ValuePair",{attrs:{description:"Interest rate"}},[e._v(" "+e._s(e.formatPrice(e.trade.interest_rate))+" ")]):e._e()],1):e._e(),e.trade.orders?t("details",[t("summary",[e._v("Orders "+e._s(e.trade.orders.length>1?`[${e.trade.orders.length}]`:""))]),e._l(e.trade.orders,function(a,r){return t("div",{key:r},[t("span",[e._v(" (#"+e._s(r+1)+") "),a.order_timestamp?t("DateTimeTZ",{attrs:{date:a.order_timestamp,"show-timezone":""}}):e._e(),t("b",{staticClass:"ml-1"},[e._v(e._s(a.ft_order_side))]),e._v(" for "),t("b",[e._v(e._s(e.formatPrice(a.safe_price)))]),e._v(" | "),a.remaining!==0?t("span",{attrs:{title:"remaining"}},[e._v(e._s(e.formatPrice(a.remaining,8))+" / ")]):e._e(),t("span",{attrs:{title:"Filled"}},[e._v(e._s(e.formatPrice(a.filled,8)))])],1)])})],2):e._e()],1)])])},y=[],C=i(g,V,y,!1,null,"634285a8",null,null),T=C.exports;export{T};
//# sourceMappingURL=TradeDetail.5c037157.js.map