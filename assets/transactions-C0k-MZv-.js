import{i as s,a as f,x as p}from"./CheckoutPage-BvTqBsBT.js";import{c as a}from"./if-defined-Cqec9Cfh.js";import"./index-Bf7XTgIW.js";import"./index-C7rZzNNw.js";import"./invoiceUtils-Bc3wf7o4.js";import"./gamepad-2-BvfmEme9.js";import"./shield-check-DV-mvALe.js";import"./file-text-DtNk0wp-.js";import"./index-soqQiPru.js";import"./index-2N8iksjB.js";import"./index-B6EMBgIo.js";import"./index-BgyMZSV2.js";import"./index-BU3MnOTH.js";const d=s`
  :host > wui-flex:first-child {
    height: 500px;
    overflow-y: auto;
    overflow-x: hidden;
    scrollbar-width: none;
  }

  :host > wui-flex:first-child::-webkit-scrollbar {
    display: none;
  }
`;var u=function(o,i,e,r){var n=arguments.length,t=n<3?i:r===null?r=Object.getOwnPropertyDescriptor(i,e):r,l;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")t=Reflect.decorate(o,i,e,r);else for(var m=o.length-1;m>=0;m--)(l=o[m])&&(t=(n<3?l(t):n>3?l(i,e,t):l(i,e))||t);return n>3&&t&&Object.defineProperty(i,e,t),t};let c=class extends f{render(){return p`
      <wui-flex flexDirection="column" .padding=${["0","m","m","m"]} gap="s">
        <w3m-activity-list page="activity"></w3m-activity-list>
      </wui-flex>
    `}};c.styles=d;c=u([a("w3m-transactions-view")],c);export{c as W3mTransactionsView};
