import{i as s,a as f,x as p}from"./CheckoutPage-BeE7gX_u.js";import{c as a}from"./if-defined-DFz-Y_HY.js";import"./index-HLzbdd1G.js";import"./index-Ckbf-WCj.js";import"./invoiceUtils-BYOTLLE2.js";import"./gamepad-2-BME8yo3l.js";import"./shield-check-CMZRv0V2.js";import"./file-text-B04ZfDju.js";import"./index-VGnEfFR5.js";import"./index-BK8-EMlm.js";import"./index-DmOflX7Z.js";import"./index-B-uy3gIJ.js";import"./index-yfATfQzd.js";const d=s`
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
