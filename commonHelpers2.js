import{i as n}from"./assets/icon-error-5c07fbe1.js";/* empty css                      */import{i}from"./assets/vendor-77e16229.js";const c="/goit-js-hw-10/assets/icon-success-286069d5.svg",s=document.querySelector(".form"),l=({delay:e,shouldFulfilled:r})=>new Promise((t,o)=>{setTimeout(()=>{r?t(e):o(e)},e)});s?s.addEventListener("submit",e=>{e.preventDefault();const r=parseInt(s.elements.delay.value),t=s.elements.state.value==="fulfilled";l({delay:r,shouldFulfilled:t}).then(o=>{i.success({title:"Success",message:`✅ Fulfilled promise in ${o}ms`,backgroundColor:"#59a10d",theme:"dark",color:"green",iconUrl:c,position:"topRight"})}).catch(o=>{i.error({title:"Error",message:`❌ Rejected promise in ${o}ms`,backgroundColor:"#ef4040",theme:"dark",color:"red",iconUrl:n,position:"topRight"})})}):console.error("Form not found");
//# sourceMappingURL=commonHelpers2.js.map
