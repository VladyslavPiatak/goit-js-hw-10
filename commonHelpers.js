import"./assets/modulepreload-polyfill-3cfb730f.js";import{f,i as v}from"./assets/vendor-77e16229.js";let r=0,o=0;const t=document.querySelector("[data-start]"),T=document.querySelectorAll(".value"),[a,i,c,d]=T;t.disabled=!0;const p={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(e){r=e[0],o=r-new Date,o<1?(v.error({message:"Please choose a date in the future",position:"topRight"}),t.disabled=!0,t.classList.remove("btn-active"),a.innerText="00",i.innerText="00",c.innerText="00",d.innerText="00"):(t.disabled=!1,t.classList.add("btn-active"))}};f("#datetime-picker",p);t.addEventListener("click",e=>{e.preventDefault();const s=setInterval(()=>{if(o<1e3){clearInterval(s);return}o=r-new Date,t.classList.remove("btn-active");const n=S(o);a.innerText=n.days.toString().padStart(2,"0"),i.innerText=n.hours.toString().padStart(2,"0"),c.innerText=n.minutes.toString().padStart(2,"0"),d.innerText=n.seconds.toString().padStart(2,"0")},1e3)});function S(e){const u=Math.floor(e/864e5),l=Math.floor(e%864e5/36e5),m=Math.floor(e%864e5%36e5/6e4),h=Math.floor(e%864e5%36e5%6e4/1e3);return{days:u,hours:l,minutes:m,seconds:h}}
//# sourceMappingURL=commonHelpers.js.map