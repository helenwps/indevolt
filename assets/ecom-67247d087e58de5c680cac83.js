/* Publish by EComposer at 2025-04-08 03:49:58*/
                (function(){
                    const Func = (function() {
                        'use strict';
window.__ectimmers = window.__ectimmers ||{};window.__ectimmers["ecom-7aipdh09y1h"]=  window.__ectimmers["ecom-7aipdh09y1h"] || {};
var s,n;let e=this.$el;if(!e)return;let t=e.querySelector("afterpay-placement.ecom-afterpay-integrate"),i=this.$el.closest(".ecom-product-form--single");if(i){let a=i.querySelector('[name="id"]');if(a&&a.dispatchEvent(new window.Event("ecomUpdate")),this.settings.show_total_price){const r=i.querySelector(".ecom-product-single__quantity-input"),l=e.querySelector(".ecom-product-single__price--sale");if(!l)return;r&&r.addEventListener("change",function(){l.innerHTML=window.EComposer.formatMoney(parseInt(l.getAttribute("data-price"))*parseInt(this.value))}),i.addEventListener("ecomVariantChange",function(p){if(p.detail.variant){const c=p.detail.variant,m=r?parseInt(r.value):1;l.setAttribute("data-price",c.price),m>1&&(l.innerHTML=window.EComposer.formatMoney(c.price*parseInt(m)))}})}}if(this.settings.enable_afterpay){let a=window.document.querySelector("#ecom-after-pay-script");if(window.afterpay_min=this.settings.lower_limit||1,a)a.dataset.analyticsEnabled=!0,a.dataset.min=(s=this.settings.lower_limit)!=null?s:1,a.dataset.max=(n=this.settings.upper_limit)!=null?n:1e3;else{let r=window.document.createElement("script");r.id="ecom-after-pay-script",r.dataset.analyticsEnabled=!0,r.dataset.min=this.settings.lower_limit||1,r.dataset.max=this.settings.upper_limit||1e3,r.src="https://js.afterpay.com/afterpay-1.x.js",window.document.head.appendChild(r)}t&&this.isLive&&window.jQuery&&window.Afterpay&&window.Afterpay.initProductPage&&window.Afterpay.initProductPage(window.jQuery)}let o=e.querySelector(".ecom-product-single__price--badges-sale");if(o&&o.dataset.haveSale=="true"){let a=o.dataset.sale,r=o.dataset.text;r=r.replace(/\{.*\}/g,a),o.innerHTML=r,o.style.display="block"}

                    });
                    
                        document.querySelectorAll('.ecom-7aipdh09y1h').forEach(function(el){
                            Func.call({$el: el, id: 'ecom-7aipdh09y1h', settings: {"enable_afterpay":false,"lower_limit":"100","upper_limit":"600"},isLive: true});
                        });
                    

                })();
            
                (function(){
                    const Func = (function() {
                        'use strict';
window.__ectimmers = window.__ectimmers ||{};window.__ectimmers["ecom-otvooemaxc"]=  window.__ectimmers["ecom-otvooemaxc"] || {};
if(!this.$el)return;const e=this.$el,t=e.querySelector(".ecom-text_view-more-btn"),i=e.querySelector(".ecom-text_view-less-btn"),o=e.querySelector(".text-content.ecom-html");!o||(t&&t.addEventListener("click",()=>{o.classList.remove("ecom-text--is-mark"),o.style.maxHeight="",t.style.display="none",i.style.display=""}),i&&i.addEventListener("click",()=>{o.classList.add("ecom-text--is-mark"),o.style.maxHeight="var(--ecom-text-height)",i.style.display="none",t.style.display=""}))

                    });
                    
                        document.querySelectorAll('.ecom-otvooemaxc').forEach(function(el){
                            Func.call({$el: el, id: 'ecom-otvooemaxc', settings: {},isLive: true});
                        });
                    
                        document.querySelectorAll('.ecom-iwjo7jmx8zj').forEach(function(el){
                            Func.call({$el: el, id: 'ecom-iwjo7jmx8zj', settings: {},isLive: true});
                        });
                    
                        document.querySelectorAll('.ecom-nf6ta0x4uq8').forEach(function(el){
                            Func.call({$el: el, id: 'ecom-nf6ta0x4uq8', settings: {},isLive: true});
                        });
                    
                        document.querySelectorAll('.ecom-ufabr6uzqq').forEach(function(el){
                            Func.call({$el: el, id: 'ecom-ufabr6uzqq', settings: {},isLive: true});
                        });
                    
                        document.querySelectorAll('.ecom-fjuooxbo35a').forEach(function(el){
                            Func.call({$el: el, id: 'ecom-fjuooxbo35a', settings: {},isLive: true});
                        });
                    
                        document.querySelectorAll('.ecom-g0rmpulzecv').forEach(function(el){
                            Func.call({$el: el, id: 'ecom-g0rmpulzecv', settings: {},isLive: true});
                        });
                    
                        document.querySelectorAll('.ecom-ubtitju1uri').forEach(function(el){
                            Func.call({$el: el, id: 'ecom-ubtitju1uri', settings: {},isLive: true});
                        });
                    
                        document.querySelectorAll('.ecom-u5dg8sytogo').forEach(function(el){
                            Func.call({$el: el, id: 'ecom-u5dg8sytogo', settings: {},isLive: true});
                        });
                    
                        document.querySelectorAll('.ecom-340bp28nrun').forEach(function(el){
                            Func.call({$el: el, id: 'ecom-340bp28nrun', settings: {},isLive: true});
                        });
                    
                        document.querySelectorAll('.ecom-97yuxgnthbu').forEach(function(el){
                            Func.call({$el: el, id: 'ecom-97yuxgnthbu', settings: {},isLive: true});
                        });
                    
                        document.querySelectorAll('.ecom-9ujzvk0fhmg').forEach(function(el){
                            Func.call({$el: el, id: 'ecom-9ujzvk0fhmg', settings: {},isLive: true});
                        });
                    
                        document.querySelectorAll('.ecom-i38e7xqln1l').forEach(function(el){
                            Func.call({$el: el, id: 'ecom-i38e7xqln1l', settings: {},isLive: true});
                        });
                    
                        document.querySelectorAll('.ecom-arcm9junmv').forEach(function(el){
                            Func.call({$el: el, id: 'ecom-arcm9junmv', settings: {},isLive: true});
                        });
                    
                        document.querySelectorAll('.ecom-c1q3l37wjq9').forEach(function(el){
                            Func.call({$el: el, id: 'ecom-c1q3l37wjq9', settings: {},isLive: true});
                        });
                    
                        document.querySelectorAll('.ecom-h6ejtdy4go').forEach(function(el){
                            Func.call({$el: el, id: 'ecom-h6ejtdy4go', settings: {},isLive: true});
                        });
                    
                        document.querySelectorAll('.ecom-baat77w556j').forEach(function(el){
                            Func.call({$el: el, id: 'ecom-baat77w556j', settings: {},isLive: true});
                        });
                    
                        document.querySelectorAll('.ecom-y2v1b3ao1i').forEach(function(el){
                            Func.call({$el: el, id: 'ecom-y2v1b3ao1i', settings: {},isLive: true});
                        });
                    
                        document.querySelectorAll('.ecom-plv3j35pai').forEach(function(el){
                            Func.call({$el: el, id: 'ecom-plv3j35pai', settings: {},isLive: true});
                        });
                    
                        document.querySelectorAll('.ecom-8cmmc3wlqv7').forEach(function(el){
                            Func.call({$el: el, id: 'ecom-8cmmc3wlqv7', settings: {},isLive: true});
                        });
                    
                        document.querySelectorAll('.ecom-t9hnzne8bhl').forEach(function(el){
                            Func.call({$el: el, id: 'ecom-t9hnzne8bhl', settings: {},isLive: true});
                        });
                    
                        document.querySelectorAll('.ecom-e5g06jvijqq').forEach(function(el){
                            Func.call({$el: el, id: 'ecom-e5g06jvijqq', settings: {},isLive: true});
                        });
                    
                        document.querySelectorAll('.ecom-wqmtbbp7m5e').forEach(function(el){
                            Func.call({$el: el, id: 'ecom-wqmtbbp7m5e', settings: {},isLive: true});
                        });
                    
                        document.querySelectorAll('.ecom-pmqnuark5ej').forEach(function(el){
                            Func.call({$el: el, id: 'ecom-pmqnuark5ej', settings: {},isLive: true});
                        });
                    
                        document.querySelectorAll('.ecom-b4plqt9ege').forEach(function(el){
                            Func.call({$el: el, id: 'ecom-b4plqt9ege', settings: {},isLive: true});
                        });
                    
                        document.querySelectorAll('.ecom-2bn8uloc41x').forEach(function(el){
                            Func.call({$el: el, id: 'ecom-2bn8uloc41x', settings: {},isLive: true});
                        });
                    
                        document.querySelectorAll('.ecom-86uqobqq29').forEach(function(el){
                            Func.call({$el: el, id: 'ecom-86uqobqq29', settings: {},isLive: true});
                        });
                    
                        document.querySelectorAll('.ecom-u8xsj3ud4un').forEach(function(el){
                            Func.call({$el: el, id: 'ecom-u8xsj3ud4un', settings: {},isLive: true});
                        });
                    
                        document.querySelectorAll('.ecom-6yq0v00ws6e').forEach(function(el){
                            Func.call({$el: el, id: 'ecom-6yq0v00ws6e', settings: {},isLive: true});
                        });
                    
                        document.querySelectorAll('.ecom-w63df4ohjd').forEach(function(el){
                            Func.call({$el: el, id: 'ecom-w63df4ohjd', settings: {},isLive: true});
                        });
                    
                        document.querySelectorAll('.ecom-voeisto76m').forEach(function(el){
                            Func.call({$el: el, id: 'ecom-voeisto76m', settings: {},isLive: true});
                        });
                    
                        document.querySelectorAll('.ecom-1b0fq8qhpw').forEach(function(el){
                            Func.call({$el: el, id: 'ecom-1b0fq8qhpw', settings: {},isLive: true});
                        });
                    
                        document.querySelectorAll('.ecom-0t16mgl8wql').forEach(function(el){
                            Func.call({$el: el, id: 'ecom-0t16mgl8wql', settings: {},isLive: true});
                        });
                    
                        document.querySelectorAll('.ecom-h13ohbgekd6').forEach(function(el){
                            Func.call({$el: el, id: 'ecom-h13ohbgekd6', settings: {},isLive: true});
                        });
                    
                        document.querySelectorAll('.ecom-pyfygecnqam').forEach(function(el){
                            Func.call({$el: el, id: 'ecom-pyfygecnqam', settings: {},isLive: true});
                        });
                    
                        document.querySelectorAll('.ecom-rjwzwx7sj9g').forEach(function(el){
                            Func.call({$el: el, id: 'ecom-rjwzwx7sj9g', settings: {},isLive: true});
                        });
                    
                        document.querySelectorAll('.ecom-oxi6o02m4kg').forEach(function(el){
                            Func.call({$el: el, id: 'ecom-oxi6o02m4kg', settings: {},isLive: true});
                        });
                    
                        document.querySelectorAll('.ecom-aes8nukqi5t').forEach(function(el){
                            Func.call({$el: el, id: 'ecom-aes8nukqi5t', settings: {},isLive: true});
                        });
                    
                        document.querySelectorAll('.ecom-4xx3o101nk').forEach(function(el){
                            Func.call({$el: el, id: 'ecom-4xx3o101nk', settings: {},isLive: true});
                        });
                    
                        document.querySelectorAll('.ecom-0z0e2aj6si5r').forEach(function(el){
                            Func.call({$el: el, id: 'ecom-0z0e2aj6si5r', settings: {},isLive: true});
                        });
                    
                        document.querySelectorAll('.ecom-5or9b5x4o44').forEach(function(el){
                            Func.call({$el: el, id: 'ecom-5or9b5x4o44', settings: {},isLive: true});
                        });
                    
                        document.querySelectorAll('.ecom-vvjlk2w4gis').forEach(function(el){
                            Func.call({$el: el, id: 'ecom-vvjlk2w4gis', settings: {},isLive: true});
                        });
                    
                        document.querySelectorAll('.ecom-9l74hwgidgm').forEach(function(el){
                            Func.call({$el: el, id: 'ecom-9l74hwgidgm', settings: {},isLive: true});
                        });
                    
                        document.querySelectorAll('.ecom-xxgdwjy3sqq').forEach(function(el){
                            Func.call({$el: el, id: 'ecom-xxgdwjy3sqq', settings: {},isLive: true});
                        });
                    
                        document.querySelectorAll('.ecom-vpzcxmq3b6').forEach(function(el){
                            Func.call({$el: el, id: 'ecom-vpzcxmq3b6', settings: {},isLive: true});
                        });
                    
                        document.querySelectorAll('.ecom-lwg47e2ekdr').forEach(function(el){
                            Func.call({$el: el, id: 'ecom-lwg47e2ekdr', settings: {},isLive: true});
                        });
                    
                        document.querySelectorAll('.ecom-wcowduv5pt').forEach(function(el){
                            Func.call({$el: el, id: 'ecom-wcowduv5pt', settings: {},isLive: true});
                        });
                    
                        document.querySelectorAll('.ecom-b92gc2kjio9').forEach(function(el){
                            Func.call({$el: el, id: 'ecom-b92gc2kjio9', settings: {},isLive: true});
                        });
                    
                        document.querySelectorAll('.ecom-x98x4dr0il').forEach(function(el){
                            Func.call({$el: el, id: 'ecom-x98x4dr0il', settings: {},isLive: true});
                        });
                    
                        document.querySelectorAll('.ecom-b65xg1aijn6').forEach(function(el){
                            Func.call({$el: el, id: 'ecom-b65xg1aijn6', settings: {},isLive: true});
                        });
                    
                        document.querySelectorAll('.ecom-3784rr7zn7u').forEach(function(el){
                            Func.call({$el: el, id: 'ecom-3784rr7zn7u', settings: {},isLive: true});
                        });
                    
                        document.querySelectorAll('.ecom-oyrzy7omlm').forEach(function(el){
                            Func.call({$el: el, id: 'ecom-oyrzy7omlm', settings: {},isLive: true});
                        });
                    
                        document.querySelectorAll('.ecom-qugawti21xn').forEach(function(el){
                            Func.call({$el: el, id: 'ecom-qugawti21xn', settings: {},isLive: true});
                        });
                    
                        document.querySelectorAll('.ecom-viqf259xcd').forEach(function(el){
                            Func.call({$el: el, id: 'ecom-viqf259xcd', settings: {},isLive: true});
                        });
                    
                        document.querySelectorAll('.ecom-grabh2865m5').forEach(function(el){
                            Func.call({$el: el, id: 'ecom-grabh2865m5', settings: {},isLive: true});
                        });
                    
                        document.querySelectorAll('.ecom-tpdezhg877q').forEach(function(el){
                            Func.call({$el: el, id: 'ecom-tpdezhg877q', settings: {},isLive: true});
                        });
                    
                        document.querySelectorAll('.ecom-z25q7fuahz').forEach(function(el){
                            Func.call({$el: el, id: 'ecom-z25q7fuahz', settings: {},isLive: true});
                        });
                    
                        document.querySelectorAll('.ecom-8ziahx5uxbo').forEach(function(el){
                            Func.call({$el: el, id: 'ecom-8ziahx5uxbo', settings: {},isLive: true});
                        });
                    
                        document.querySelectorAll('.ecom-74zhu1rbps').forEach(function(el){
                            Func.call({$el: el, id: 'ecom-74zhu1rbps', settings: {},isLive: true});
                        });
                    
                        document.querySelectorAll('.ecom-ako1352zjcs').forEach(function(el){
                            Func.call({$el: el, id: 'ecom-ako1352zjcs', settings: {},isLive: true});
                        });
                    
                        document.querySelectorAll('.ecom-98s4a2adns').forEach(function(el){
                            Func.call({$el: el, id: 'ecom-98s4a2adns', settings: {},isLive: true});
                        });
                    
                        document.querySelectorAll('.ecom-wpvt36e0i0h').forEach(function(el){
                            Func.call({$el: el, id: 'ecom-wpvt36e0i0h', settings: {},isLive: true});
                        });
                    
                        document.querySelectorAll('.ecom-phdywcs22k').forEach(function(el){
                            Func.call({$el: el, id: 'ecom-phdywcs22k', settings: {},isLive: true});
                        });
                    
                        document.querySelectorAll('.ecom-db6b0ybour').forEach(function(el){
                            Func.call({$el: el, id: 'ecom-db6b0ybour', settings: {},isLive: true});
                        });
                    
                        document.querySelectorAll('.ecom-vudnidbr26p').forEach(function(el){
                            Func.call({$el: el, id: 'ecom-vudnidbr26p', settings: {},isLive: true});
                        });
                    
                        document.querySelectorAll('.ecom-0wl0lxexoao').forEach(function(el){
                            Func.call({$el: el, id: 'ecom-0wl0lxexoao', settings: {},isLive: true});
                        });
                    
                        document.querySelectorAll('.ecom-50h1cx6h1ek').forEach(function(el){
                            Func.call({$el: el, id: 'ecom-50h1cx6h1ek', settings: {},isLive: true});
                        });
                    

                })();
            
                (function(){
                    const Func = (function() {
                        'use strict';
window.__ectimmers = window.__ectimmers ||{};window.__ectimmers["ecom-1o1117jnx5c"]=  window.__ectimmers["ecom-1o1117jnx5c"] || {};
var a,r,l,p;if(!this.$el)return;const e=this.$el.querySelector(".ecom-product-single__description-view-more-btn");if(this.settings.type==="tab"){const c=this.$el.querySelectorAll(".ecom-product-description-tab__item"),m=this.$el.querySelectorAll(".ecom-product-description-tab__content");c.length&&c.forEach((B,_)=>{B.onclick=function(){this.classList&&!this.classList.contains("ecom-item-active")&&(c.forEach(u=>u.classList.remove("ecom-item-active")),m.forEach(u=>u.classList.remove("ecom-item-active")),B.classList.add("ecom-item-active"),m[_].classList.add("ecom-item-active"))}})}if(this.settings.type==="accordion"){let d=function(y){y.classList.remove("ecom-item-active"),y.querySelector(".ecom-accordion__body").style.height="0"},f=function(y){y.forEach((x,w)=>{let v=x.parentNode,C=v.querySelector(".ecom-accordion__body");!_&&C&&C.classList.add("ecom-effect-accodion"),w==0&&v.querySelector(".ecom-item-active")?C.style.height=_?"auto":C.clientHeight+"px":C.style.height=0,x.onclick=function(S){S.preventDefault();let A=this.parentNode,$=v.parentNode,L=$.querySelectorAll(".ecom-product-description__accordion-item"),T=$.querySelectorAll(".ecom-product-description__accordion-title");if(this.classList&&this.classList.contains("ecom-item-active"))B&&innerWidth<768||m&&innerWidth>767&&innerWidth<1025||c&&innerWidth>1024?(this.classList.remove("ecom-item-active"),v.querySelector(".ecom-accordion__body").style.height="0px",v.classList.remove("ecom-item-active")):(L.forEach(D=>d(D)),T.forEach(D=>D.classList.remove("ecom-item-active")));else{B&&innerWidth<768||m&&innerWidth>767&&innerWidth<1025||c&&innerWidth>1024||(L.forEach(z=>d(z)),T.forEach(z=>z.classList.remove("ecom-item-active"))),x.classList.add("ecom-item-active"),A.classList.add("ecom-item-active");let D=x.parentNode.querySelector(".ecom-accordion__body"),H="auto";_||(H=D.scrollHeight+"px",D.classList.add("ecom-effect-accodion")),setTimeout(()=>{D.style.height=H},20)}}})};const c=(a=this.settings.disable_auto_close)!=null?a:!1,m=(r=this.settings.disable_auto_close__tablet)!=null?r:!1,B=(l=this.settings.disable_auto_close__mobile)!=null?l:!1,_=(p=this.settings.disable_effect)!=null?p:!1,u=this.$el.querySelectorAll(".ecom-product-description__accordion-item > .ecom-product-description__accordion-title");f(u)}const t=this.settings.content_type,i=this.$el.querySelector(".ecom-product-single__description--full"),o=this.$el.querySelector(".ecom-product-single__description-view-less-btn"),s=this.$el.querySelector(".ecom-product-single__description--paragraph .ecom-text-des"),n=this.$el.querySelector(".ecom-product-single__description--paragraph .ecom-html-des");e&&(e&&e.addEventListener("click",function(){t==="text"&&i?(i.style.display="block",s.style.display="none"):n.style.maxHeight=null,this.style.display="none",o&&(o.style.display="flex")}),o&&o.addEventListener("click",function(){e.style.display="flex",this.style.display="none",t==="text"&&i?(i&&(i.style.display="none"),s.style.display="block"):n.style.maxHeight="var(--ecom-description-height)"}))

                    });
                    
                        document.querySelectorAll('.ecom-1o1117jnx5c').forEach(function(el){
                            Func.call({$el: el, id: 'ecom-1o1117jnx5c', settings: {"type":"full","disable_effect":false,"content_type":"html"},isLive: true});
                        });
                    

                })();
            
                (function(){
                    const Func = (function() {
                        'use strict';
window.__ectimmers = window.__ectimmers ||{};window.__ectimmers["ecom-zgpocmynmek"]=  window.__ectimmers["ecom-zgpocmynmek"] || {};
var p,c;const e=this.$el;if(!e)return;let t=this.settings.type,i=this.settings.use_quantity_limit?this.settings.use_quantity_limit:!1,o=this.settings.quantity_step?this.settings.quantity_step:1,s=(p=this.settings)!=null&&p.quantity_min?this.settings.quantity_min:1,n=(c=this.settings)!=null&&c.quantity_max?this.settings.quantity_max:"",a=1;const r=e.closest(".ecom-product-form--single"),l=e.querySelector(".ecom-product-single__quantity-dropdown");if(r&&(this.isLive||r.dispatchEvent(new CustomEvent("ecomQuantityType"))),t!=="dropdown"){const m=e.querySelector(".ecom-product-single__quantity-controls-plus"),B=e.querySelector(".ecom-product-single__quantity-controls-minus"),_=e.querySelector(".ecom-product-single__quantity-input");if(!m||!B||!_)return;_.value===""&&(_.value=this.settings.quantity_min&&parseInt(this.settings.quantity_min)>0?parseInt(this.settings.quantity_min):"1"),m.addEventListener("click",function(u){u.preventDefault(),_.stepUp(),_.dispatchEvent(new Event("change"))}),B.addEventListener("click",function(u){u.preventDefault(),_.stepDown(),_.dispatchEvent(new Event("change"))}),_.addEventListener("change",function(u){_.dataset.maxValue&&parseInt(_.dataset.maxValue)<parseInt(u.target.value)&&(u.target.value=parseInt(_.dataset.maxValue)),_.dataset.minValue&&parseInt(u.target.value)<parseInt(_.dataset.minValue)&&(u.target.value=parseInt(_.dataset.minValue))})}else{let f=function(x=null){if(!_)return;let w=u?_.variants[0]:x,v=w==null?void 0:w.inventory_quantity,C=w==null?void 0:w.inventory_management,S=w==null?void 0:w.inventory_policy,A=0;if(!w||!w.available)return a=s,l.setAttribute("disabled",!0),s;if((!a||s>0&&a<s)&&(a=s),l.removeAttribute("disabled"),C){if(v<1&&S=="continue"){let $=n&&n>0?n:"";A=y(C,v,$)}if(v>0){if(v<s&&(a=v),S==="deny"){let $=n&&n<=v?n:v;A=y(C,v,$)}if(S==="continue"){let $=n&&n<=v?n:v;A=y(C,v,$)}}}else{let $=n&&n>0?n:"";A=y(C,v,$)}return n&&s>n&&(a=n,A=n,l.setAttribute("disabled",!0)),A<0&&(A=0),A&&a>A&&(a=A),a=isNaN(a)||!a?1:a,l.dataset.value=a,A},y=function(x,w=0,v=0){if(n&&n>0)return v;let C=s,S=1;for(let A=1;A<10&&(!v||C+o<=v);A++)C=C+o,S++;return S<10&&x&&w&&C+o>w&&w<w+o&&(C=w),C};const m=e.closest(".ecom-product-form--single");if(!m)return!1;let B=m.querySelector('[name="id"]'),_=null,u=!1;if(B){B.classList.contains("ecom-product-single__picker-default-variant")&&(u=!0);const x=m.querySelector("#"+B.dataset.jsonProduct);try{_=JSON.parse(x.innerHTML)}catch(w){console.log(w);return}this.isLive||setTimeout(()=>{B.dispatchEvent(new window.Event("ecomUpdate"))},50)}const d=(x=null)=>{let w=[],v=f(x),C=i&&s?s:1,S=v>0?v:0;if(C<=S){for(let A=C;A<=S;A+=o)w.push(A);w[w.length-1]<S&&w.push(S)}else C>S&&(w=[a]);Array.isArray(w)&&w.length&&(l.innerHTML="",w.forEach(A=>{let $=document.createElement("option");$.setAttribute("value",A),$.text=A,l.add($)}))};d(),m.addEventListener("ecomVariantChange",function(x){x.detail.variant&&d(x.detail.variant)})}

                    });
                    
                        document.querySelectorAll('.ecom-zgpocmynmek').forEach(function(el){
                            Func.call({$el: el, id: 'ecom-zgpocmynmek', settings: {},isLive: true});
                        });
                    

                })();
            
                (function(){
                    const Func = (function() {
                        'use strict';
window.__ectimmers = window.__ectimmers ||{};window.__ectimmers["ecom-lky7pihrixe"]=  window.__ectimmers["ecom-lky7pihrixe"] || {};
if(!this.$el)return!1;const e=this.$el,t=e.closest(".ecom-product-form--single");if(!t)return!1;if(t&&this.settings.show_total_price){let p=function(m){r.innerHTML=window.EComposer.formatMoney(parseInt(r.getAttribute("data-price"))*parseInt(m.value))},c=function(m){setTimeout(()=>{p(m)},100),m.addEventListener("change",function(){p(m)})};const r=e.querySelector(".ecom-product-single__price--sale");let l=t.querySelector("#quantity");if(!r||!l)return;c(l),t.addEventListener("ecomQuantityType",function(){l=t.querySelector("#quantity"),l&&c(l)}),t.addEventListener("ecomVariantChange",function(m){if(m.detail.variant){const B=m.detail.variant,_=l?parseInt(l.value):1;r.setAttribute("data-price",B.price),_>1&&(r.innerHTML=window.EComposer.formatMoney(B.price*parseInt(_)))}})}const i=t.querySelector('select[name="id"]'),o=e.querySelector(".ecom-product-single__add-to-cart--submit"),s=e.closest("form");if(!s)return;function n(){let r=null;const l=s.dataset.product_id;let p=null;if(l?p=s.querySelector("[id^=product-json-"+l+"]"):p=e.querySelector("[id^=addtocart-product-json]"),!p)return;try{r=JSON.parse(p.innerHTML)}catch(m){return}let c=r.variants[0];if(c){const m=o.querySelector(".ecom-add-to-cart-text");if(!m)return;c.available==!1?(o.setAttribute("disabled","disabled"),m.innerText=o.dataset.textOutstock,o.classList.remove("ecom-product-single__pre-order")):c.inventory_quantity<=0&&c.inventory_policy=="continue"&&c.inventory_management&&(m.innerText=o.dataset.textPreOrder,o.classList.add("ecom-product-single__pre-order"))}}if(!this.isLive)t&&(i&&!i.classList.contains("ecom-product-single__picker-default-variant")?i.dispatchEvent(new window.Event("ecomUpdate")):n());else{let r=function(l){const p=t.querySelectorAll(".ecom-required--checkbox");p.length>0&&p.forEach(function(_){let u=_.querySelectorAll("input[type=checkbox]");if(u.length==0)return;let d=!1;u.forEach(function(f){f.checked&&(d=!0)}),d?u.forEach(function(f){f.required=!1}):u.forEach(function(f){f.required=!0})});const c=t.querySelectorAll(".ecom-product-single__property-file");let m=!1,B;c.length&&c.forEach(function(_){if(_.required&&(!_.value||_.value=="")){_.parentNode.parentNode.querySelector(".ecom-product-single-form--text-error").style.display="block",m=!0,B=_;return}else m=!1}),m&&(l.preventDefault(),l.stopPropagation(),B.scrollIntoView({behavior:"smooth",block:"center",inline:"nearest"}))};if((!s.querySelector("select[name=id]")||s.querySelector("select[name=id]")&&i.classList.contains("ecom-product-single__picker-default-variant"))&&n(),!i&&o&&o.dataset.variant_id){const l=document.createElement("input");l.type="hidden",l.value=o.dataset.variant_id,e.appendChild(l)}o.addEventListener("click",r)}const a=function(r){if(!e)return;const l=e.querySelector(".ecom-product-single__add-to-cart--submit");if(!l)return;let p=parseInt(r.settings.animation_loop_time)*1e3||6e3,c=1e3;window.__ectimmers["ecom-lky7pihrixe"]["52wd5d4d7"] = setInterval(function(){l.classList.add("animated"),setTimeout(function(){l.classList.remove("animated")},c)},p)};this.settings.animation&&a(this)

                    });
                    
                        document.querySelectorAll('.ecom-lky7pihrixe').forEach(function(el){
                            Func.call({$el: el, id: 'ecom-lky7pihrixe', settings: {"animation":false},isLive: true});
                        });
                    

                })();
            
                (function(){
                    const Func = (function() {
                        'use strict';
window.__ectimmers = window.__ectimmers ||{};window.__ectimmers["ecom-m2aznj50kt9"]=  window.__ectimmers["ecom-m2aznj50kt9"] || {};
if(!this.$el)return!1;const e=this.$el;let t=e.closest(".ecom-product-form--single");if(!t){const o=e.closest(".ecom-builder");o&&(t=o.querySelector(".ecom-product-form--single"))}if(!t)return!1;if(this.isLive){let o=t.querySelector("select[name=id]");const s=e.querySelector(".ecom-product-single__buy_it_now_btn--checkout"),n=t.dataset.product_id;if(!n)return;let a=null;const r=t.querySelector("[id^=product-json-"+n+"]");if(!r)return;try{a=JSON.parse(r.innerHTML)}catch(l){return}s&&s.addEventListener("click",function(l){l.preventDefault();let p=1;t.querySelector("[name=quantity]")&&(p=t.querySelector("[name=quantity]").value);let c=t.querySelector("select[name=id]")||t.querySelector("input[name=id]");c||console.warn("EC error: Select id or input id not found!");let m=c.value,B=a.variants.find(u=>u.id==m);if(!B||B.available===!1)return;window.Shopify.analytics&&Shopify.analytics.publish("ec_buy_now",{cartLine:{cost:{totalAmount:{amount:B.price*p,currencyCode:window.Shopify.currency.active}},merchandise:{id:B.id,image:B.image,price:{amount:B.price,currencyCode:window.Shopify.currency.active},product:{id:a.id,title:a.title,vendor:a.vendor},sku:B.sku,title:B.title},quantity:p}});let _=`${window.EComposer.routes.cart_url}/${m}:${p}`;if(window.location.search.includes("selling_plan")){const u=/selling_plan=(\d+)/,d=window.location.search.match(u);if(d){const f=d[1];_=`${window.EComposer.routes.cart_url}/clear?return_to=/cart/add?items[][id]=${m}%26items[][quantity]=${p}%26items[][selling_plan]=${f}%26return_to=/checkout`}}location.href=_}),a.available||(s.classList.add("ecom-disable-buy"),s.disabled=!0),o&&o.addEventListener("change",function(){let l=this.value;if(!l)return;a.variants.find(c=>c.id==l).available===!1?(s.classList.add("ecom-disable-buy"),s.disabled=!0):(s.classList.remove("ecom-disable-buy"),s.disabled=!1)})}const i=function(o){if(!e)return;const s=e.querySelector(".ecom-product-single__buy_it_now_btn--checkout");if(!s)return;let n=parseInt(o.settings.animation_loop_time)*1e3||6e3,a=1e3;window.__ectimmers["ecom-m2aznj50kt9"]["zc91yw01m"] = setInterval(function(){s.classList.add("animated"),setTimeout(function(){s.classList.remove("animated")},a)},n)};this.settings.animation&&i(this)

                    });
                    
                        document.querySelectorAll('.ecom-m2aznj50kt9').forEach(function(el){
                            Func.call({$el: el, id: 'ecom-m2aznj50kt9', settings: {"animation":false},isLive: true});
                        });
                    

                })();
            
                (function(){
                    const Func = (function() {
                        'use strict';
window.__ectimmers = window.__ectimmers ||{};window.__ectimmers["ecom-ir0wse88p9"]=  window.__ectimmers["ecom-ir0wse88p9"] || {};
if(!this.$el)return;let e=this.$el;this.isLive;var t=this.id;const i=function(){const s=document.querySelectorAll(".ecom-container-lightbox-"+t);s.length&&s.forEach(function(n){const a=n.querySelector("iframe");a!=null&&(a.contentWindow.postMessage('{"method":"pause"}',"*"),a.src="");const r=n.querySelector("video");r!=null&&r.pause()})};if(e&&window.EComModal){var o=e.querySelector("[ecom-modal]");new window.EComModal(o,{cssClass:["ecom-container-lightbox-"+this.id,"ecom-html","ecom-modal","ecommodal-slide"],onOpen:function(){const s=document.querySelectorAll(".ecom-container-lightbox-"+t);s.length&&s.forEach(function(n){const a=n.querySelector("iframe");if(a!=null){const l=a.src.replace("muted=1","muted=0").replace("mute=1","mute=0");a.src=l}const r=n.querySelector("video");r!=null&&r.play()})},onClose:i})}i()

                    });
                    
                        document.querySelectorAll('.ecom-ir0wse88p9').forEach(function(el){
                            Func.call({$el: el, id: 'ecom-ir0wse88p9', settings: {},isLive: true});
                        });
                    

                })();
            
                (function(){
                    const Func = (function() {
                        'use strict';
window.__ectimmers = window.__ectimmers ||{};window.__ectimmers["ecom-0inuj78rgov"]=  window.__ectimmers["ecom-0inuj78rgov"] || {};
if(this.settings.link==="lightbox"&&this.settings.lightbox==="yes"&&window.EComModal&&this.$el){var e=this.$el.querySelector("[ecom-modal]");new window.EComModal(e,{cssClass:["ecom-container-lightbox-"+this.id]})}let t=this.$el;if(!t)return;function i(s){const n=s.getBoundingClientRect();return n.top>=0&&n.left>=0&&n.bottom-s.offsetHeight/2<=(window.innerHeight||document.documentElement.clientHeight)&&n.right<=(window.innerWidth||document.documentElement.clientWidth)}function o(){let s=t.querySelector(".ecom-element.ecom-base-image"),n=t.closest(".core__row--columns");s&&(i(s)?(s.classList.add("image-highlight"),n.setAttribute("style","z-index: unset")):(s.classList.remove("image-highlight"),n.setAttribute("style","z-index: 1")))}this.settings.highligh_on_viewport&&window.addEventListener("scroll",function(){o()})

                    });
                    
                        document.querySelectorAll('.ecom-0inuj78rgov').forEach(function(el){
                            Func.call({$el: el, id: 'ecom-0inuj78rgov', settings: {"link":"none","lightbox":"no"},isLive: true});
                        });
                    
                        document.querySelectorAll('.ecom-cir6xahjo6t').forEach(function(el){
                            Func.call({$el: el, id: 'ecom-cir6xahjo6t', settings: {"link":"none","lightbox":"no","highligh_on_viewport":false},isLive: true});
                        });
                    
                        document.querySelectorAll('.ecom-l4zp8iys0t').forEach(function(el){
                            Func.call({$el: el, id: 'ecom-l4zp8iys0t', settings: {"link":"none","lightbox":"no","highligh_on_viewport":false},isLive: true});
                        });
                    
                        document.querySelectorAll('.ecom-z69itnvig1').forEach(function(el){
                            Func.call({$el: el, id: 'ecom-z69itnvig1', settings: {"link":"none","lightbox":"no","highligh_on_viewport":false},isLive: true});
                        });
                    
                        document.querySelectorAll('.ecom-d5qisccmmbv').forEach(function(el){
                            Func.call({$el: el, id: 'ecom-d5qisccmmbv', settings: {"link":"none","lightbox":"no","highligh_on_viewport":false},isLive: true});
                        });
                    
                        document.querySelectorAll('.ecom-1s7ashwbt77').forEach(function(el){
                            Func.call({$el: el, id: 'ecom-1s7ashwbt77', settings: {"link":"none","lightbox":"no","highligh_on_viewport":false},isLive: true});
                        });
                    
                        document.querySelectorAll('.ecom-x3cecqh74dl').forEach(function(el){
                            Func.call({$el: el, id: 'ecom-x3cecqh74dl', settings: {"link":"none","lightbox":"no","highligh_on_viewport":false},isLive: true});
                        });
                    

                })();
            
                (function(){
                    const Func = (function() {
                        'use strict';
window.__ectimmers = window.__ectimmers ||{};window.__ectimmers["ecom-dxpxly4o7co"]=  window.__ectimmers["ecom-dxpxly4o7co"] || {};
const $el = this.$el;
                if(!$el) return;
                const products_item = $el.querySelectorAll('.ecom-product-upsell__item');
                
                const no_item = $el.querySelector('.ecom-product-upsell-no-item');
                const heading = $el.querySelector('.ecom-products-upsell-design-2');
                if(no_item && heading)
                    heading.style.display = 'none';



                // ==========
                
                if(this.settings?.layout_type == 'horizontal' && this.settings?.design == 'design_2'){
                    const $container = $el.querySelector('.ecom-swiper');
                    let optionSwiper = $container && $container.dataset.optionSwiper;
                    optionSwiper = JSON.parse(optionSwiper);
                    optionSwiper.navigation = {
                        nextEl: $el.querySelector(".ecom-product-upsell__next"),
                        prevEl: $el.querySelector(".ecom-product-upsell__prev")
                    };
                    optionSwiper.slidesPerView = 1;
                    optionSwiper.loop = false;
                    optionSwiper.breakpoints = {
                                                768: {
                                                    slidesPerView: 'auto'
                                                }
                                            };
                    let ecomSlider = new window.EComSwiper($container, optionSwiper);
                    function ecomSliderInit() {
                        ecomSlider.init(); // Gọi phương thức init() để khởi tạo swiper
                    }
                    if(window.EComSwiper){
                        ecomSliderInit();
                    }
                }

                
                // ==========

                if (products_item.length == 0) {
                    return;
                }

                const handleVariantSelect = () => {

                    if ( products_item ) {
                        products_item.forEach( (item, index) => {
                            let select_id = item.querySelector('select[name=ecom-product-upsell-select]'),
                                item_image =  item.querySelector('.ecom-product-upsell__image'),
                                item_btn_atc =  item.querySelector('.ecom-product-upsell__item--atc-btn');
                            
                            let item_btn_atc_text = null, atc_text = null, unavailable_text = null;
                            if(item_btn_atc) {
                                item_btn_atc_text = item_btn_atc.querySelector('span.ecom-product-upsell__item--atc-btn-text');
                                atc_text = item_btn_atc.dataset.atcText;
                                unavailable_text = item_btn_atc.dataset.unavailableText;
                            }

                            if ( ! select_id ) return;
                            select_id.addEventListener('change', (e) => {
                                let selected_index = select_id.options[select_id.selectedIndex];

                                if ( ! selected_index ) return;

                                let price = selected_index.getAttribute('data-price'),
                                    compare_at_price = selected_index.getAttribute('data-compare-price') || 0,
                                    image = selected_index.getAttribute('data-image'),
                                    available = selected_index.getAttribute('data-available'),
                                    product_id = selected_index.value;

                                item.querySelector('input[name=product_id]').value = product_id;
                                updatePrice(price, compare_at_price, item);

                                if(item_btn_atc_text) {
                                    if(available == 'false') {
                                        item_btn_atc.setAttribute('disabled', 'disabled');
                                        if(unavailable_text && item_btn_atc_text) {
                                            item_btn_atc_text.innerText = unavailable_text
                                        }
                                    } else {
                                        item_btn_atc.removeAttribute('disabled');
                                        if(atc_text && item_btn_atc_text) {
                                            item_btn_atc_text.innerText = atc_text
                                        }
                                    }
                                }

                                item_image.classList.add('ecom-loading-image');
                                item_image.querySelector('img').setAttribute('src', image);
                                item_image.querySelector('img').onload = () => {
                                    item_image.classList.remove('ecom-loading-image');
                                }

                            })

                        });
                    }

                    function updatePrice(price, compare_at_price, el) {
                        const $price_regular = el.querySelector(
                            '.ecom-product-upsell__price--regular'
                        );
                        const $price = el.querySelector('.ecom-product-upsell__price--sale');

                        if ($price) {
                            $price.innerHTML = window.EComposer.formatMoney(price);
                        }

                        if ($price_regular) {
                            $price_regular.innerHTML = window.EComposer.formatMoney(
                                compare_at_price
                            );
                            if (compare_at_price > price) {
                                $price_regular.style.display = 'inherit';
                            } else {
                                $price_regular.style.display = 'none';
                            }
                        }
                    }
                }

                const handleATC = ()=> {
                    const $btn_atc = $el.querySelectorAll('.ecom-product-upsell__item--atc-btn');

                    if($btn_atc) {
                        $btn_atc.forEach(function(btn) {
                            let item_btn_atc_text = btn.querySelector('span.ecom-product-upsell__item--atc-btn-text'),
                                added_text = btn.dataset.addedText,
                                action = btn.dataset.action,
                                target = btn.dataset.target,
                                href = btn.dataset.href;

                            btn.addEventListener('click', (e) => {
                                e.preventDefault();
                                const _this = e.target;
                                btn.classList.add('ecom-loading');
                                let product_id = null
                                try {
                                    product_id = btn.closest('.ecom-product-upsell__item').querySelector('input[name=product_id]').value;
                                } catch (error) {
                                    console.log(error);
                                }
                                if(!product_id) return;

                                let item = {
                                    'id': product_id,
                                    'quantity': 1
                                };
                                console.log('click');
                                fetch('/cart/add.js', {
                                    method: 'POST',
                                    headers: {
                                    'Content-Type': 'application/json'
                                    },
                                    body: JSON.stringify(item)
                                })
                                .then(response => {
                                    return response.json();
                                })
                                .then(response => {
                                    if ( window.EComposer.ajaxCartSuccess )
                                    // window.EComposer.ajaxCartSuccess(response);
                                    switch (action) {
                                        case "popup":
                                            window.EComposer.ajaxCartSuccess(response);
                                            break;
                                        case "cart":
                                            return (window.location.href =
                                                window.EComposer.routes.cart_url);
                                        case "reload":
                                            return window.location.reload();
                                        case "checkout":
                                            return (window.location.href =
                                                window.EComposer.routes.root_url +
                                                (window.EComposer.routes.root_url === "/" ? "" : "/") +
                                                "checkout");
                                        case "message":
                                            if(response.message)
                                                window.EComposer.showToast(response.message + ' - ' + response?.description);
                                            else if(added_text!=''){
                                                window.EComposer.showToast(added_text);
                                            }
                                            break;
                                        case "link":
                                            if (href && href !=  '') {
                                                if (target === "_blank") {
                                                    return window.open(href);
                                                } else {
                                                    return (window.location.href = href);
                                                }
                                            }
                                        default:
                                            window.EComposer.ajaxCartSuccess(response);
                                            break;
                                    }
                                    btn.classList.remove('ecom-loading');
                                    if(!response.message && added_text) {
                                        item_btn_atc_text.innerText = added_text;
                                    }

                                })
                                .catch((error) => {
                                    console.error('Error:', error);
                                });
                            })
                        })
                    }
                }

                const handleAnimation = function(_this) {
                    if (!$el) return;

                    const $btn_wrapper = $el.querySelectorAll('.ecom-product-upsell__item--atc-btn');
                    if (!$btn_wrapper) return;

                    $btn_wrapper.forEach(function(btn) {
                        let intervalTime = parseInt(_this.settings.animation_loop_time) * 1000 || 6000,
                            animTime = 1000;window.__ectimmers["ecom-dxpxly4o7co"]["fetzxhbfl"] = setInterval(function() {
                            btn.classList.add('animated');
                            setTimeout(function(){
                                btn.classList.remove('animated');
                            }, animTime);
                        }, intervalTime);
                    })

                }

                if (this.settings.animation) {
                  handleAnimation(this);
                }

                handleVariantSelect();
                if(!window.ECOM_LIVE)
                    handleATC();

                    });
                    
                        document.querySelectorAll('.ecom-dxpxly4o7co').forEach(function(el){
                            Func.call({$el: el, id: 'ecom-dxpxly4o7co', settings: {"layout_type":"vertical","design":"design_2","animation":false},isLive: true});
                        });
                    

                })();
            
                (function(){
                    const Func = (function() {
                        'use strict';
window.__ectimmers = window.__ectimmers ||{};window.__ectimmers["ecom-lt23ids9ivb"]=  window.__ectimmers["ecom-lt23ids9ivb"] || {};
var le,re,de,me;if(!this.$el)return!1;const e=this,a=this.id,t=this.$el,n=this.isLive,_={width:this.settings.zoom_width,height:this.settings.zoom_height},o=t.closest(".ecom-product-form--single"),E=this.settings.show_thumbnails?this.settings.show_thumbnails:!1,P=this.settings.layout?this.settings.layout:"slider",T=this.settings.enable_zoom?this.settings.enable_zoom:!1,j=this.settings.image_action&&this.settings.image_action==="lightbox";var k,w,M=this.settings.thumbnail_position,A=this.settings.thumbnail_position__tablet,B=this.settings.thumbnail_position__mobile,V=!!this.settings.show_pagination,I=(le=this.settings.enable_gallery)!=null?le:!1,q=(re=this.settings.gallery_name)!=null?re:!1,O=(de=this.settings.centeredSlides)!=null?de:!1,H=(me=this.settings.slide_loop)!=null?me:!1,F=this.settings.disable_auto_height,S=this.settings.video_auto_play;function X(){if(P==="slider")try{if(E){const l=e.$el.querySelector(".ecom-product-single__media--thumbs");let u=JSON.parse(l.dataset.breakpoints);Object.keys(u).forEach(x=>{let p=u[x].__screen_name,R="thumbnail_position";u[x].direction=["row","row-reverse"].includes(u[x][R])?"vertical":"horizontal"}),l.hasChildNodes()&&(k=new window.EComSwiper(l,{freeMode:!1,centeredSlides:!1,loop:!1,centeredSlidesBounds:!0,slideToClickedSlide:!0,autoHeight:!!(["row","row-reverse"].includes(M)&&window.screen.width>1024||["row","row-reverse"].includes(A)&&(window.screen.width>=768||window.screen.width<=1024)||["row","row-reverse"].includes(B)&&window.screen.width<768),navigation:{nextEl:e.$el.querySelector(".ecom-product-single__media--thumbs .ecom-swiper-button-next"),prevEl:e.$el.querySelector(".ecom-product-single__media--thumbs .ecom-swiper-button-prev")},allowTouchMove:n,watchSlidesProgress:!0,grabCursor:!0,breakpoints:u,direction:["row","row-reverse"].includes(M)?"vertical":"horizontal",on:{slideChangeTransitionEnd:function(){},breakpoint:function(){setTimeout(()=>window.dispatchEvent(new window.Event("resize")),500)},init:function(){setTimeout(()=>{this.el&&this.el.classList.remove("ecom-product-single__init-thumb-hidden")},50)}}}));let $=null;l.querySelectorAll("img").forEach(function(x){x.addEventListener("load",function(){clearTimeout($),$=setTimeout(()=>window.dispatchEvent(new window.Event("resize")),500)})})}const d=t.querySelector(".ecom-product-single__media--featured");var i=d.dataset.breakpoints;i=i?JSON.parse(i):{0:{slidesPerView:1,spaceBetween:20}},w=new window.EComSwiper(d,{autoHeight:F!=null?F:!0,lazy:!0,allowTouchMove:n,pagination:V?{el:d.querySelector(".ecom-swiper-pagination"),dynamicBullets:!0,clickable:!0}:!1,navigation:{nextEl:t.querySelector(".ecom-product-single__media--featured .ecom-swiper-button-next"),prevEl:t.querySelector(".ecom-product-single__media--featured .ecom-swiper-button-prev")},thumbs:E&&k?{swiper:k}:void 0,noSwiping:!0,longSwipes:!0,loop:H,centeredSlides:O,touchStartPreventDefault:!0,noSwipingSelector:"model-viewer",noSwipingClass:"ecom-product-single__media--model",grabCursor:!0,preloadImages:!0,breakpoints:i,on:{breakpoint:function(){setTimeout(()=>window.dispatchEvent(new window.Event("resize")),500)},slideChange:function(l){var $,x;if(I)return;l.activeIndex!==l.lastIndex&&(l.lastIndex=l.activeIndex+"");const u=o&&o.querySelector('[name="id"]');if(u){let p=null;if(!w||!w.slides[w.activeIndex])return;if(p=(x=($=w.slides[w.activeIndex])==null?void 0:$.dataset)==null?void 0:x.variant_id,p){p=p+"";const R=u.value;(!R||!p.includes(R.toString()))&&(u.value=p.split(",")[0],u.dispatchEvent(new Event("swatch")))}}l.slides[l.activeIndex]&&T&&N(l.slides[l.activeIndex])},activeIndexChange:function(l){const u=l.slides[l.activeIndex];if(!u)return;const $=u.querySelector(".ecom-media-video");$&&S&&$.play()},slideChangeTransitionEnd:function(l){var u,$;window.dispatchEvent(new window.Event("resize")),l.slides.forEach(x=>{if(x.classList.contains("ecom-swiper-slide-active")){let p=x.querySelector("video");p&&p.hasAttribute("autoplay")&&p.play()}else{let p=x.querySelector("iframe,video");p&&(p.nodeName==="IFRAME"?p.src=p.src:p.pause())}}),n&&(E&&k&&k.update(),l.allowTouchMove=!(($=(u=l.slides[w.activeIndex])==null?void 0:u.classList)!=null&&$.contains("ecom-swiper-no-swiping")))},init:function(l){l.slides[l.activeIndex]&&T&&N(l.slides[l.activeIndex])}}});let f=null;d.querySelectorAll("img").forEach(function(l){l.addEventListener("load",function(){clearTimeout(f),f=setTimeout(()=>window.dispatchEvent(new window.Event("resize")),500)})}),n||setTimeout(()=>{d.classList.remove("ecom-before-init")},200)}catch(d){console.info(d.message)}}X();async function ae(i){const d=await window.fetch(i,{method:"GET",headers:{Accept:"application/json","Content-Type":"application/json"}});if(d.ok){const f=await d.json();if(f)return f.product}return!1}async function be(){const i=t.querySelectorAll(".ecom-product-single__media--image img"),d=t&&t.querySelector(".ecom-product-single__media--featured .ecom-product-single__media--images-layout__slider"),f=d&&d.querySelectorAll(".ecom-product-single__media--image"),l=t&&t.querySelector(".ecom-product-single__media--featured"),u=t&&t.querySelector(".ecom-product-single__media--thumbs"),$=t&&t.querySelector(".ecom-product-single__media--slider .ecom-product-single__media--thumbs .ecom-swiper-wrapper"),x=u&&u.querySelectorAll(".ecom-product-single__media--thumbnail"),p=t&&t.querySelector(".ecom-product-single__media--grid .ecom-product-single__media--images-layout__grid"),R=p&&p.querySelectorAll(".ecom-product-single__media--image");let ce=!0;if(i&&i.forEach(function(y,C){if(y&&y.alt&&y.alt.includes("ecomposer-")){ce=!1;return}}),ce)return;let v=null,G=o&&o.querySelector(".ecom-product-single-select-id[name=id]");if(!G)return;const pe=o&&o.querySelector("#"+G.dataset.jsonProduct);if(!pe)return;try{v=JSON.parse(pe.innerHTML)}catch(y){return}let U=null;if(n&&window.Shopify&&window.Shopify.routes.root!="/"){let y=window.location.origin+"/products/"+v.handle+".json";U=await ae(y),U||(y=window.location.origin+window.Shopify.routes.root+"products/"+v.handle+".json",U=await ae(y)),v.options_with_values=U.options,v.variants=U.variants}let Y={detail:{variant:null}};Y.detail.variant=v.variants.find(function(y){if(y.id==G.value)return y});let K=t.querySelector("#ecom-single-product-default-variant"),ve=K&&K.innerText,_e=K.dataset.dontSetAlt;if(_e&&_e=="true")return;function ue(y){if(y.detail.variant&&(y.target&&y.target.querySelector(".ecom-product-single__variant-picker-container"),I&&q)){let Z=function(g){let r=g.options_with_values,m=[];q.includes(",")?q.split(",").forEach((h,z)=>{r&&r.forEach(function(b){b.name.trim().toLowerCase()===h.trim().toLowerCase()&&(m=m.concat({key:b.name.trim(),value:b.values}))})}):r&&r.forEach(function(s){if(s.name.trim().toLowerCase()===q.toLowerCase()){m=m.concat({key:s.name.trim(),value:s.values});return}});let c=[];return m&&m.forEach(function(s,h){s.value.forEach(z=>{C.option1==z&&c.push(`ecomposer-${s.key.toLowerCase()}-${C.option1.replaceAll(" ","-").toLowerCase()}`),C.option2==z&&c.push(`ecomposer-${s.key.toLowerCase()}-${C.option2.replaceAll(" ","-").toLowerCase()}`),C.option3==z&&c.push(`ecomposer-${s.key.toLowerCase()}-${C.option3.replaceAll(" ","-").toLowerCase()}`)})}),c},ge=function(g,r,m,c,s){if(c&&r&&v&&m.length){const h={};for(let b in s)s.hasOwnProperty(b)&&(h[b]=s[b]);r.innerHTML="",m.forEach(function(b){let L=b.querySelector("img")&&b.querySelector("img").alt;if(L)if(!L.includes(","))Z(v).includes(L.toLowerCase())&&(b.querySelector("img").removeAttribute("loading"),r.appendChild(b));else{L=L.split(","),L=L.map(function(oe){return oe.trim().toLowerCase()});let ie=Z(v).filter(oe=>L.indexOf(oe)!==-1);(Q(ie,L)||ee(ie,L)&&ie.length===te(L))&&(b.querySelector("img").removeAttribute("loading"),r.appendChild(b))}}),h&&Object.keys(h).length>0&&Object.keys(h).forEach(b=>{try{r.style.setProperty(b,h[b])}catch(L){console.warn(`Could not set style property ${b}:`,L)}}),g.prepend(r);const z=e.$el.querySelector(".ecom-product-single__media--thumbs");k&&(k.destroy(),z.classList.add("ecom-product-single__init-thumb-hidden")),w&&(w.destroy(),X())}},Q=function(g,r){return g.sort().join()===r.sort().join()},ee=function(g,r){return g.every(c=>r.includes(c))},te=function(g){const r=new Set;let m=0;for(const c of g){const s=c.indexOf("-",c.indexOf("-")+1),h=c.substring(10,s);r.has(h)||(r.add(h),m++)}return m},$e=function(g){const r=o&&o.querySelector(".ecom-product-single__media--grid_default");if(!r||!g||!v)return;let m=r&&r.querySelectorAll(".ecom-product-single__media--image");m.length&&(q&&I?m.forEach(function(c){c.style.display="none";let s=c.querySelector("img").alt;if(!s.includes(","))Z(v).includes(s.toLowerCase())&&(c.style.display="block");else{s=s.split(","),s=s.map(function(z){return z.trim().toLowerCase()});let h=Z(v).filter(z=>s.indexOf(z)!==-1);(Q(h,s)||ee(h,s)&&h.length===te(s))&&(c.style.display="block")}}):m.forEach(function(c){c.style.display="flex"}))},xe=function(g){if(g&&p&&v){p.innerHTML="";let r=[];R.forEach(function(m,c){let s=m.querySelector("img").alt;if(!s.includes(","))Z(v).includes(s.toLowerCase())&&r.push(m);else{s=s.split(","),s=s.map(function(z){return z.trim().toLowerCase()});let h=Z(v).filter(z=>s.indexOf(z)!==-1);(Q(h,s)||ee(h,s)&&h.length===te(s))&&r.push(m)}}),r.forEach(function(m,c){c==0||c>=5&&c%5==0||c%5!=0&&(c+1)%2==0&&c==r.length-1||c==1&&r.length==2?m.style.paddingTop=`${m.dataset.fullWidth}%`:m.style.paddingTop=`${m.dataset.halfWidth}%`,p.appendChild(m)})}},C=y.detail.variant;n&&window.Shopify&&window.Shopify.routes.root!="/"&&(C=v.variants.find(function(g){if(g.id==o.querySelector(".ecom-product-single-select-id[name=id]").value)return g}));const ye=$&&$.style,we=d&&d.style;if(ge(l,d,f,C,we),ge(u,$,x,C,ye),$e(C),xe(C),ne(),T){let g=t.querySelectorAll(".ecom-image-zoom");if(g.length==0)return;N(g),n&&g.forEach(function(r){r.querySelector("a")&&r.querySelector("a").addEventListener("click",function(m){m.preventDefault()})})}}}Y&&ve==="false"&&(ue(Y),o&&o.addEventListener("ecomVariantChange",ue))}if(I&&be(),t.querySelectorAll(".ecom-product-single__media--play-control").forEach(function(i){i.addEventListener("click",function(d){this.style.display="none",this.parentNode.querySelector("video").play()})}),!this.isLive)try{e.$el.querySelectorAll("model-viewer").forEach(function(i){const d=element.outerHTML;i.replaceWith(d)})}catch(i){console.info(i.message)}function fe(i){if(i)return;const d=t.querySelectorAll("model-viewer");d&&d.forEach(f=>{if(f)try{new window.Shopify.ModelViewerUI(f)}catch(l){console.warn(l.message)}}),t.querySelectorAll("button").forEach(function(f){f.setAttribute("type","button")})}function se(){if(!window.ShopifyXR)document.addEventListener("shopify_xr_initialized",function(){se()});else{try{const i=e.$el.querySelector('[id^="Product-model-"]');i&&(window.ShopifyXR.addModels(JSON.parse(i.textContent)),i.remove())}catch(i){console.log(i.message)}window.ShopifyXR.setupXRElements()}}if(document.querySelector("model-viewer")&&!document.getElementById("ModelViewerStyle")){let i=document.createElement("link");i.id="ModelViewerStyle",i.rel="stylesheet",i.href="https://cdn.shopify.com/shopifycloud/model-viewer-ui/assets/v1.0/model-viewer-ui.css",i.media="print",i.onload=function(){this.media="all"},document.head.appendChild(i)}window.Shopify&&window.Shopify.loadFeatures&&window.Shopify.loadFeatures([{name:"shopify-xr",version:"1.0",onLoad:se},{name:"model-viewer-ui",version:"1.0",onLoad:fe}]);function ne(){if(j&&n){let i=t.querySelectorAll("[ecom-modal]");i.length&&window.EComModal&&new window.EComModal(i,{gallery:!0,cssClass:["ecom-container-lightbox-"+a]})}}if(ne(),this.settings.position_sticky&&window.innerWidth>1024&&t.parentElement&&(this.isLive?t.style.height="100%":t.parentElement.style.height="100%"),T){let i=t.querySelectorAll(".ecom-image-zoom");if(i.length==0)return;P!=="slider"&&N(i),n&&i.forEach(function(d){d.querySelector("a")&&d.querySelector("a").addEventListener("click",function(f){f.preventDefault()})})}function N(i){if(!(!n||window.innerWidth<768)&&window.EcomImgZoom)if(i.length>0)for(var d=0,f=i.length;d<f;d++)new window.EcomImgZoom(i[d],_);else new window.EcomImgZoom(i,_)}

                    });
                    
                        document.querySelectorAll('.ecom-lt23ids9ivb').forEach(function(el){
                            Func.call({$el: el, id: 'ecom-lt23ids9ivb', settings: {"zoom_width":"500px","zoom_height":"500px","show_thumbnails":true,"layout":"slider","enable_zoom":false,"image_action":"lightbox","thumbnail_position":"column","thumbnail_position__tablet":"column","thumbnail_position__mobile":"column","show_pagination":false,"enable_gallery":true,"centeredSlides":false,"video_auto_play":true,"position_sticky":true},isLive: true});
                        });
                    

                })();
            
                (function(){
                    const Func = (function() {
                        'use strict';
window.__ectimmers = window.__ectimmers ||{};window.__ectimmers["ecom-g1xf0w9gvgg"]=  window.__ectimmers["ecom-g1xf0w9gvgg"] || {};
const s=this.$el;if(!s)return;const _=this.isLive,v=this.settings.show_option_selected?this.settings.show_option_selected:!1,S=this.settings.history_state?this.settings.history_state:!1,h=this.settings.auto_variant_disable,f=this.settings.hide_soldout_variant,k=this.settings.hide_unavaiable_variant,b=this.settings.type,g=s.querySelector('[name="id"]'),l=s.closest(".ecom-product-form--single");if(!l)return;h&&b!=="dropdown"&&l.classList.add("ecom_auto_variant_disable");const y=s.querySelector(".ecom-product-single__variant-picker-container");let T=null;if(!g)return;const x=this.$el.querySelector("#"+g.dataset.jsonProduct);if(!x)return;let m=null;try{m=JSON.parse(x.innerHTML)}catch(e){return}function V(e){if(l.classList.contains("ecom_auto_variant_disable")&&h&&e===null)return;const o=l.querySelector(".ecom-product-single__price--badges");if(o&&o.querySelectorAll("span").forEach(function(t){t.style.display="none"}),e)if(e.available&&e.price<e.compare_at_price){if(o&&o.querySelector(".ecom-product-single__price--badges-sale")){const t=o.querySelector(".ecom-product-single__price--badges-sale");t.style.display="block";let i=0;i=Math.round((e.compare_at_price-e.price)*100/e.compare_at_price),t.dataset.type==="amount"&&(i=window.EComposer.formatMoney(e.compare_at_price-e.price));let d=t.dataset.text;d=d.replace(/\{.*\}/g,i),t.innerHTML=d}}else e.available||o&&(o.querySelector(".ecom-product-single__price--badges-sold-out").style.display="block")}function B(e){const o=l.querySelector(".ecom-product-single__quantity-input");if(o){const t=o&&o.dataset.minValue?parseInt(o.dataset.minValue):"",i=o&&o.dataset.maxValue?parseInt(o.dataset.maxValue):"";if(e)e.available?((!o.value||t&&t>0&&o.value<t)&&(o.value=t),o.removeAttribute("disabled","disabled")):(t&&t>0&&(o.value=t),o.setAttribute("disabled","disabled"));else{o.value=t&&t>0?t:1,o.setAttribute("disabled","disabled");return}const d=e.inventory_quantity,r=e.inventory_policy;let n=i&&i>0?i:9999;e.inventory_management&&r==="deny"&&(n=i&&i>0&&i<d?i:d,(d<t||!o.value||t&&t>0&&o.value<t)&&(o.value=t)),d<1&&r=="continue"&&((!o.value||t&&t>0&&o.value<t)&&(o.value=t),n=i&&i>0?i:999999),(e&&d&&d>t||e&&r=="continue")&&(e.inventory_management&&r==="deny"?n=i&&i>0&&i<d?i:d:e.inventory_management&&r==="continue"&&(n=i&&i>0?i:999999),o.value<t&&(o.value=t)),n<0&&(n=0);let a=parseInt(o.value);!t&&a>n&&(a=n),a=isNaN(a)||!a?1:a,!t&&!e.available&&(a=0),a=a>=0?a:1,o.value=a,o.setAttribute("max",n)}}function P(e){const o=l.querySelectorAll(".ecom-product-single__media--slider");if(o.length&&e)o.forEach(function(t){var a,c;const i=t.querySelector(".ecom-product-single__media--featured"),d=i.querySelector('.ecom-product-single__media--image[data-variant_id*="'+e.id+'"]');if(!d||i.getAttribute("data-priority")==="featured")return;const r=d.dataset.index,n=(c=(a=i==null?void 0:i.swiper)==null?void 0:a.realIndex)!=null?c:0;r!=n&&i&&i.swiper&&i.swiper.slideTo(r,200)});else if(e&&e.featured_image){const t=l.querySelector(".ecom-product-single__media--single");if(t){const i=t.querySelector("img");i&&(i.setAttribute("src",e.featured_image.src),i.setAttribute("alt",e.featured_image.alt),i.setAttribute("srcset",e.featured_image.src))}}}function O(e){const o=l.querySelectorAll(".ecom-product-single__add-to-cart--submit");o.length&&o.forEach(function(t){if(l.classList.contains("ecom_auto_variant_disable")&&h)t.setAttribute("disabled","disabled");else if(e)e.available||e.inventory_management===null?(t.removeAttribute("disabled"),t.querySelector(".ecom-add-to-cart-text")&&(!e.inventory_management||e.inventory_management&&e.inventory_quantity>0?(t.querySelector(".ecom-add-to-cart-text").innerHTML=t.dataset.textAddCart,t.classList.remove("ecom-product-single__pre-order")):e.inventory_quantity<=0&&e.inventory_policy=="continue"&&(t.querySelector(".ecom-add-to-cart-text").innerHTML=t.dataset.textPreOrder,t.classList.add("ecom-product-single__pre-order")))):(t.setAttribute("disabled",!0),t.querySelector(".ecom-add-to-cart-text")&&(t.querySelector(".ecom-add-to-cart-text").innerHTML=t.dataset.textOutstock,t.classList.remove("ecom-product-single__pre-order")));else if(t.setAttribute("disabled","disabled"),t.querySelector(".ecom-add-to-cart-text")){let i=!1;y.querySelectorAll(".single-option-selector").forEach(function(d){if(d.value===""){i=!0;return}}),i?t.querySelector(".ecom-add-to-cart-text").innerHTML=t.dataset.textAddCart:t.querySelector(".ecom-add-to-cart-text").innerHTML=t.dataset.textUnavailable}})}function D(e){if(!(l.classList.contains("ecom_auto_variant_disable")&&h)&&e&&e.options.length)for(let o=0;o<e.options.length;o++)l.querySelectorAll(`.ecom-product-single__swatch-item[data-option-index="${o}"][data-value="${e.options[o].replace(/'/g,"'").replace(/"/g,'\\"')}"]`).forEach(t=>{t.parentNode.childNodes.forEach(function(i){i.classList&&(i.classList.remove("ecom-box-active"),i.classList.remove("ecom-button-active"),i.classList.remove("ecom-image-active"))}),t.classList.add("ecom-box-active"),t.classList.add("ecom-button-active"),t.classList.add("ecom-image-active")}),l.querySelectorAll(`select.ecom-product-single__swatch-select[data-option-index="${o}"]`).forEach(function(t){t.value=e.options[o]})}function W(e){const o=l.querySelector(".ecom-product-single__countdown");o&&e&&(_||(o.firstElementChild.style.display=""),o.dataset.showOnSale==="true"?e.compare_at_price>e.price&&e.available?(o.style.display="inherit",o.classList.remove("ecom-placeholder-on-builder-mode")):(_&&(o.style.display="none"),o.classList.add("ecom-placeholder-on-builder-mode"),o.classList.add("ecom-force-show"),o.dataset.ecomPlaceholder="This feature not match with your condition",_||(o.firstElementChild.style.display="none")):(o.classList.remove("ecom-placeholder-on-builder-mode"),o.style.display="inherit"))}function F(e){const o=l.querySelectorAll(".ecom-product-single__media-label");e&&o.length&&o.forEach(function(t){const i=t.querySelector("span.ecom-product-single__media-label-sale");i&&(i.style.display=e.available&&e.compare_at_price&&e.compare_at_price>e.price?"block":"none");const d=t.querySelector(".ecom-product-single__media-label-sold-out");d&&(d.style.display=e.available?"none":"block");const r=t.querySelector(".ecom-product-single__media-label--bage-sale");if(r){const n=r.dataset.labelType;if(e.compare_at_price>e.price){let a=r.dataset.sale,c="";n==="amount"?(c=e.compare_at_price-e.price,r.style.display="inherit",r.innerHTML=a.replace(/\[.*\]/g,window.EComposer.formatMoney(c))):(c=Math.round((e.compare_at_price-e.price)*100/e.compare_at_price),r.style.display="inherit",r.innerHTML=a.replace(/\[.*\]/g,Math.floor(c))),r.style.display=e.available?"inherit":"none"}else r.style.display="none"}})}function R(e){const o=l.querySelectorAll(".ecom-product-single__price--regular"),t=l.querySelectorAll(".ecom-product-single__price--sale"),i=l.querySelectorAll(".ecom-product-single__price--badges-pecent-wrapper"),d=l.querySelectorAll(".ecom-product_ground-price"),r=l.querySelector(".ecom-unit-price"),n=l.querySelectorAll(".ecom-ground-price_unit-price-measurement");e&&(l.querySelector("shopify-payment-terms")&&l.querySelector("shopify-payment-terms").setAttribute("variant-id",e.id),t.length&&a(t,e),i.length&&i.forEach(function(c){const u=c.dataset.labelType;if(e.compare_at_price&&e.compare_at_price>e.price){let p=Math.round((e.compare_at_price-e.price)/e.compare_at_price*100);u==="amount"&&(p=window.EComposer.formatMoney(e.compare_at_price-e.price)),c.querySelector("span")&&(c.style.display="block",c.querySelector("span").innerText=`-${p}%`)}else c.style.display="none"}),o.length&&o.forEach(function(c){c.innerHTML=window.EComposer.formatMoney(e.compare_at_price),e.compare_at_price>e.price?c.style.display="inherit":c.style.display="none"}),d.length&&(d.forEach(function(c){e.unit_price?(c.style.display="block",r&&(r.style.display="block")):(c.style.display="none",r&&(r.style.display="none"));const u=c.querySelector(".ecom-ground-price_unit-price");u&&(u.innerHTML=window.EComposer.formatMoney(e.unit_price))}),n.length&&n.forEach(function(c){e.unit_price_measurement.reference_value!=1?c.innerHTML=e.unit_price_measurement.reference_value+e.unit_price_measurement.reference_unit:c.innerHTML=e.unit_price_measurement.reference_unit})));function a(c,u){c.forEach(function(p){!u.compare_at_price||u.compare_at_price<u.price?p.classList.add("ecom-product-single__price-normal"):p.classList.remove("ecom-product-single__price-normal"),p.innerHTML=window.EComposer.formatMoney(u.price)})}}function Z(e){const o=l.querySelector(".ecom-product-single__variant-attributes--barcode"),t=l.querySelector(".ecom-product-single__variant-attributes--sku");e?(o&&(o.style.removeProperty("display"),o.querySelector(".ecom-product-single__variant-attributes--text").innerHTML=`${e.barcode?e.barcode:"N/A"}`),t&&(t.style.removeProperty("display"),t.querySelector(".ecom-product-single__variant-attributes--text").innerHTML=`${e.sku?e.sku:"N/A"}`)):(o&&(o.style.display="none"),t&&(t.style.display="none"))}function J(e){if(l.classList.contains("ecom_auto_variant_disable")&&h)return;const o=l.querySelectorAll(".ecom-product-single__variant-picker-container");if(!o.length||!e)return!1;g.dispatchEvent(new Event("change")),o.forEach(t=>{t.querySelectorAll(".ecom-product-single__variant-picker--selected-value").forEach(function(n){n.remove()}),h&&l.classList.contains("ecom_auto_variant_disable")&&(l.classList.remove("ecom_auto_variant_disable"),l.querySelectorAll(".ecom-product-single__add-to-cart--submit").forEach(function(n){n.removeAttribute("disabled")}));const i=s.querySelectorAll('.selector-wrapper label[for*="ecom-variant-selector"');if(i.length>0&&i.forEach(n=>{const a=n.textContent;n.childNodes.length&&n.childNodes[0].remove();const c=document.createElement("span");c.className="ecom-product-variant--option-label-text",c.innerText=`${a}${a.endsWith(":")?"":":"}`,n.prepend(c)}),!v)return 1;const d=e.options.length,r=t.querySelectorAll(".selector-wrapper");for(let n=0;n<d;n++)r[n]&&r[n].querySelectorAll("label").forEach(a=>{const c=document.createElement("span");c.className="ecom-product-single__variant-picker--selected-value",c.innerHTML=e.options[n],a.appendChild(c)}),t.querySelectorAll(`.ecom-product-single__picker--option-label[data-option-index="${n}"]`).forEach(function(a){let c=document.createElement("span");c.classList.add("ecom-product-single__variant-picker--selected-value"),c.innerHTML=e.options[n],a.appendChild(c)})})}function I(e){V(e),P(e),O(e),B(e),D(e),R(e),W(e),Z(e),J(e),F(e),l.dispatchEvent(new CustomEvent("ecomVariantChange",{detail:{variant:e}}))}if((!g||!g.classList.contains("ecom-product-single__picker-default-variant"))&&window.EComposer&&window.EComposer.OptionSelectors){let e=function(){const a=o.product.getVariantById(g.value);a&&I(a)},t=function(a,c){const u=m.options.length;let p=null;if(u===2){const L=a===0?1:0,w=l.querySelector(`.ecom-product-single__swatch-item.ecom-button-active[data-option-index="${L}"]`),$=w?w.dataset.value:null;if(!$)return;const A=L===0?m.variants.find(q=>q.option1===$&&q.option2===c):m.variants.find(q=>q.option2===$&&q.option1===c);p=A&&A.featured_image?A.featured_image.src:null}return p};const o=new window.EComposer.OptionSelectors(g.id,{product:m,onVariantSelected:function(a,c){I(a),a&&a.id&&l.querySelectorAll('select[name="id"]').forEach(p=>{p.value=a.id})},enableHistoryState:S,autoVariantDisabled:h});g.addEventListener("swatch",function(a){o.selectVariant(a.target.value)}),g.addEventListener("ecomUpdate",function(){clearTimeout(T),T=setTimeout(e,1e3)});const i={};let d=null;const r=function(a,c=!0){switch(a){case 0:var u="root",p=y.querySelectorAll(".single-option-selector")[0];break;case 1:var u=y.querySelectorAll(".single-option-selector")[0].value,p=y.querySelectorAll(".single-option-selector")[1];break;case 2:var u=y.querySelectorAll(".single-option-selector")[0].value;u+=" / "+y.querySelectorAll(".single-option-selector")[1].value;var p=y.querySelectorAll(".single-option-selector")[2];break}if(!c){const E=l.querySelector(`select[data-option-index="${a}"]`);if(E&&E.classList.contains("ecom-product-single__picker-dropdown-list"))return}if(!!p){var L=p.value;p.innerHTML="";var w=i[u]||[];if(!!w){for(var $=0;$<w.length;$++){var A=w[$],q=document.createElement("option");q.value=A,q.innerHTML=A,p.append(q)}var z=l.querySelector('.ecom-product-single__swatch-select[data-option-index="'+a+'"]');z&&(z.innerHTML=p.innerHTML),l.querySelectorAll('.ecom-product-single__swatch-item[data-option-index="'+a+'"]').forEach(E=>{var C=E.dataset.value;if(b==="image"&&E.querySelector("img")){const N=t(a,C);N&&E.querySelector("img").setAttribute("src",N)}(f||k)&&(C&&w.indexOf(C)!==-1?E.classList.remove("ecom-variant-disable"):E.classList.add("ecom-variant-disable"))}),w.indexOf(L)!==-1&&(p.value=L),clearTimeout(d),d=setTimeout(()=>{c&&p.dispatchEvent(new Event("change"))},50)}}},n=function(a){for(var c=0;c<a.variants.length;c++){var u=a.variants[c];if(f?u.available:!0){if(i.root=i.root||[],i.root.push(u.option1),i.root=EComposer.uniq(i.root),a.options.length>1){var p=u.option1;i[p]=i[p]||[],i[p].push(u.option2),i[p]=EComposer.uniq(i[p])}if(a.options.length===3){var p=u.option1+" / "+u.option2;i[p]=i[p]||[],i[p].push(u.option3),i[p]=EComposer.uniq(i[p])}}}r(0,u),a.options.length>1&&r(1),a.options.length===3&&r(2);var L=y.querySelectorAll(".single-option-selector")[0];L&&L.addEventListener("change",function($){return a.options.length>1&&r(1),a.options.length===3&&r(2),!0});var w=y.querySelectorAll(".single-option-selector")[1];w&&w.addEventListener("change",function($){return r(0,!1),a.options.length===3&&r(2),!0})};if(window.MutationObserver&&l&&(b==="image"||f||k)){typeof M=="object"&&typeof M.disconnect=="function"&&M.disconnect();var G={childList:!0,subtree:!0},M=new MutationObserver(function(){n(m),M.disconnect()});M.observe(l,G)}}if(!this.settings.hasOwnProperty("show_option_selected")&&!this.settings.show_option_selected){const e=s.querySelectorAll('.selector-wrapper label[for*="ecom-variant-selector"');e.length>0&&e.forEach(o=>{const t=o.textContent;o.childNodes.length&&o.childNodes[0].remove();const i=document.createElement("span");i.className="ecom-product-variant--option-label-text",i.innerText=`${t}:`,o.prepend(i)})}l.querySelectorAll(".ecom-product-single__swatch-item[data-option-index]").forEach(e=>{e.addEventListener("click",function(o){o.preventDefault();const t=l.querySelectorAll(".ecom-product-single__media--featured");let i=null;if(!t)return;t.length>1?t.forEach(function(n,a){i||(_?(window.screen.width>1024&&!n.closest(".hide-on-desktop")||window.screen.width>767&&window.screen.width<=1024&&!n.closest(".hide-on-tablet")||window.screen.width<=767&&!n.closest(".hide-on-mobile"))&&(i=n):(window.innerWidth>1024&&!n.closest(".hide-on-desktop")||window.innerWidth>767&&window.innerWidth<=1024&&!n.closest(".hide-on-tablet")||window.innerWidth<=767&&!n.closest(".hide-on-mobile"))&&(i=n))}):i=t[0],i&&i.removeAttribute("data-priority");const d=this;if(this.classList.contains("ecom-button-active")&&this.classList.contains("ecom-image-button"))return;this.parentNode.childNodes.forEach(function(n){n.classList&&(n.classList.remove("ecom-button-active"),n.classList.remove("ecom-image-button"))}),this.classList.add("ecom-button-active"),this.classList.add("ecom-image-button");const r=this.dataset.optionIndex;l.classList.remove("ecom_auto_variant_disable"),l.querySelectorAll("select#"+g.id+"-option-"+r).forEach(function(n){n.value=d.dataset.value,n.dispatchEvent(new Event("change"))})})}),l.querySelectorAll(".ecom-product-single__swatch-select").length?l.querySelectorAll(".ecom-product-single__swatch-select").forEach(function(e){e.addEventListener("change",function(o){const t=l.querySelectorAll(".ecom-product-single__media--featured");let i=null;if(!t)return;t.length>1?t.forEach(function(n,a){i||(window.screen.width>1024&&!n.closest(".hide-on-desktop")||window.screen.width>767&&window.screen.width<=1024&&!n.closest(".hide-on-tablet")||window.screen.width<=767&&!n.closest(".hide-on-mobile"))&&(i=n)}):i=t[0],i&&i.removeAttribute("data-priority");let d=o.target.getAttribute("data-option-index"),r=o.target.value;l.classList.remove("ecom_auto_variant_disable"),l.querySelectorAll("select#"+g.id+"-option-"+d).forEach(function(n){n.value=r,n.dispatchEvent(new Event("change"))})})}):setTimeout(function(){const e=l.querySelectorAll(".ecom-product-single__media--featured");let o=null;!e||(e.length>1?e.forEach(function(t,i){o||(window.screen.width>1024&&!t.closest(".hide-on-desktop")||window.screen.width>767&&window.screen.width<=1024&&!t.closest(".hide-on-tablet")||window.screen.width<=767&&!t.closest(".hide-on-mobile"))&&(o=t)}):o=e[0],o&&o.removeAttribute("data-priority"))},_?500:2500)

                    });
                    
                        document.querySelectorAll('.ecom-g1xf0w9gvgg').forEach(function(el){
                            Func.call({$el: el, id: 'ecom-g1xf0w9gvgg', settings: {"show_option_selected":false,"type":"image"},isLive: true});
                        });
                    

                })();
            
;try{
 
} catch(error){console.error(error);}