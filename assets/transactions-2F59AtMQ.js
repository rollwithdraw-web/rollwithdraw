import{i as s,a as f,x as p}from"./CheckoutPage-DgkXQHSn.js";import{c as a}from"./if-defined-DeBZsm6E.js";import"./index-BgRyKkrs.js";import"./index-t1zYFWiZ.js";import"./invoiceUtils-JaN1LTMs.js";import"./gamepad-2-DKr8XYjW.js";import"./shield-check-CIV-ynOk.js";import"./file-text-DDGcsazb.js";import"./index-CTipIFkI.js";import"./index-BwfyGO4r.js";import"./index-BdYMw-lL.js";import"./index-CPL_5dtt.js";import"./index-DRbcKJ2n.js";const d=s`
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
