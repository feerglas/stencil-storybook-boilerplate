import{attachShadow,h,proxyCustomElement}from"@stencil/core/internal/client";export{setAssetPath}from"@stencil/core/internal/client";function format(first,middle,last){return(first||"")+(middle?" "+middle:"")+(last?" "+last:"")}const myComponentCss=":host{display:block;font-family:sans-serif}.name{color:#191970;font-weight:800}",MyComponent=class extends HTMLElement{constructor(){super(),this.__registerHost(),attachShadow(this)}getText(){return format(this.first,this.middle,this.last)}render(){return h("div",null,"Hello, World! I'm ",h("span",{class:"name"},this.getText()))}static get style(){return myComponentCss}},MyComponent$1=proxyCustomElement(MyComponent,[1,"my-component",{first:[1],middle:[1],last:[1]}]),defineCustomElements=opts=>{"undefined"!=typeof customElements&&[MyComponent$1].forEach(cmp=>{customElements.get(cmp.is)||customElements.define(cmp.is,cmp,opts)})};export{MyComponent$1 as MyComponent,defineCustomElements};