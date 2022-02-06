"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[58570],{68006:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return u},default:function(){return p}});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),i=["components"],s={keywords:["Smart Contracts","EVM","Solidity","limitations","fees","sand-boxed"],description:"EVM based smart contract limitations. The current implementation is fully sand-boxed and not aware of IOTA or IOTA Smart Contracts. You start an EVM chain with a new supply of EVM specific tokens assigned to a single address.",image:"/img/logo/WASP_logo_dark.png"},c="EVM Limitations within IOTA Smart Contracts",l={unversionedId:"guide/evm/limitations",id:"guide/evm/limitations",title:"EVM Limitations within IOTA Smart Contracts",description:"EVM based smart contract limitations. The current implementation is fully sand-boxed and not aware of IOTA or IOTA Smart Contracts. You start an EVM chain with a new supply of EVM specific tokens assigned to a single address.",source:"@site/external/wasp/documentation/docs/guide/evm/limitations.md",sourceDirName:"guide/evm",slug:"/guide/evm/limitations",permalink:"/smart-contracts/guide/evm/limitations",editUrl:"https://github.com/iotaledger/wasp/edit/develop/external/wasp/documentation/docs/guide/evm/limitations.md",tags:[],version:"current",frontMatter:{keywords:["Smart Contracts","EVM","Solidity","limitations","fees","sand-boxed"],description:"EVM based smart contract limitations. The current implementation is fully sand-boxed and not aware of IOTA or IOTA Smart Contracts. You start an EVM chain with a new supply of EVM specific tokens assigned to a single address.",image:"/img/logo/WASP_logo_dark.png"},sidebar:"tutorialSidebar",previous:{title:"EVM/Solidity Based Smart Contracts",permalink:"/smart-contracts/guide/evm/introduction"},next:{title:"Creating an EVM Chain",permalink:"/smart-contracts/guide/evm/create-chain"}},u=[],m={toc:u};function p(t){var e=t.components,n=(0,a.Z)(t,i);return(0,o.kt)("wrapper",(0,r.Z)({},m,n,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"evm-limitations-within-iota-smart-contracts"},"EVM Limitations within IOTA Smart Contracts"),(0,o.kt)("p",null,"The current experimental EVM support for IOTA Smart Contracts allows developers to get a preview of EVM based smart contract solutions on top of IOTA. There are some limitations you should be aware of at the time, which we will be addressing in the months to come:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"The current implementation is fully sand-boxed and not aware of IOTA or IOTA Smart Contracts"),". It currently can not communicate with non-EVM smart contracts, nor can it interact with assets outside the EVM sandbox yet."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"You start an EVM chain with a new supply of EVM specific tokens assigned to a single address")," (the main token on the chain which is used for gas as well, comparable to ETH on the Ethereum network). These new tokens are in no way connected to IOTA, or any other token, but are specific for that chain for now."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Because EVM runs inside an IOTA Smart Contracts smart contract, any fees that need to be paid for that IOTA Smart Contracts smart contract have to be taken into account")," while invoking a function on that contract. To support this right now the JSON-RPC gateway uses the wallet account connected to it. "),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"You need to manually deposit some IOTA to the chain")," you are using to be able to invoke these functions. We are planning to resolve this at a later phase in a more user-friendly way.")),(0,o.kt)("p",null,"Overall these are temporary solutions, the next release of the IOTA Smart Contracts will see a lot of these improved or resolved."))}p.isMDXComponent=!0},3905:function(t,e,n){n.d(e,{Zo:function(){return u},kt:function(){return d}});var r=n(67294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function s(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},o=Object.keys(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var c=r.createContext({}),l=function(t){var e=r.useContext(c),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},u=function(t){var e=l(t.components);return r.createElement(c.Provider,{value:e},t.children)},m={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},p=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,o=t.originalType,c=t.parentName,u=s(t,["components","mdxType","originalType","parentName"]),p=l(n),d=a,f=p["".concat(c,".").concat(d)]||p[d]||m[d]||o;return n?r.createElement(f,i(i({ref:e},u),{},{components:n})):r.createElement(f,i({ref:e},u))}));function d(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var o=n.length,i=new Array(o);i[0]=p;var s={};for(var c in e)hasOwnProperty.call(e,c)&&(s[c]=e[c]);s.originalType=t,s.mdxType="string"==typeof t?t:a,i[1]=s;for(var l=2;l<o;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"}}]);