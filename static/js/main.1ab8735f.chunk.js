(this["webpackJsonpreact-complete-guide"]=this["webpackJsonpreact-complete-guide"]||[]).push([[0],[,,,,function(e,t,n){e.exports={"cart-item":"CartItem_cart-item__2xuAq",summary:"CartItem_summary__2pJvP",price:"CartItem_price__2ga9G",amount:"CartItem_amount__3z-tB",actions:"CartItem_actions__12ROR"}},function(e,t,n){e.exports={"cart-items":"Cart_cart-items__DFdtt",total:"Cart_total__wGeEt",actions:"Cart_actions__2Fx4a","button--alt":"Cart_button--alt__3vX3N",button:"Cart_button__DCQpL"}},,,function(e,t,n){e.exports={button:"HeaderCartButton_button__xxfxG",icon:"HeaderCartButton_icon__3Ex74",badge:"HeaderCartButton_badge__eTixJ",bump:"HeaderCartButton_bump__3c_cK"}},,function(e,t,n){e.exports={backdrop:"Modal_backdrop__1x2mW",modal:"Modal_modal__35h7J","slide-down":"Modal_slide-down__EK0Qj"}},function(e,t,n){e.exports={meal:"MealItem_meal__2qjIH",description:"MealItem_description__9DSeM",price:"MealItem_price__24Iyr"}},,function(e,t,n){e.exports={header:"Header_header__hFuno","main-image":"Header_main-image__38uhe"}},,function(e,t,n){e.exports={summary:"MealsSummary_summary__3UoAe"}},function(e,t,n){e.exports={card:"Card_card__6_0xS"}},function(e,t,n){e.exports={meals:"AvailableMeals_meals__2J82V","meals-appear":"AvailableMeals_meals-appear__3K-f_"}},function(e,t,n){e.exports={input:"Input_input__1IZ-e"}},function(e,t,n){e.exports={form:"MealItemForm_form__Z4RXR"}},,,,,function(e,t,n){},,function(e,t,n){"use strict";n.r(t);var a=n(6),c=n.n(a),i=(n(24),n(3)),r=n(1),s=n.n(r),o=n(2),l=s.a.createContext({items:[],totalAmount:0,addItem:function(e){},removeItem:function(e){}}),m=n(4),d=n.n(m),u=n(0),j=function(e){var t="$".concat(e.price.toFixed(2));return Object(u.jsxs)("li",{className:d.a["cart-item"],children:[Object(u.jsxs)("div",{children:[Object(u.jsx)("h2",{children:e.name}),Object(u.jsxs)("div",{className:d.a.summary,children:[Object(u.jsx)("span",{className:d.a.price,children:t}),Object(u.jsxs)("span",{className:d.a.amount,children:["x ",e.amount]})]})]}),Object(u.jsxs)("div",{className:d.a.actions,children:[Object(u.jsx)("button",{onClick:e.onRemove,children:"\u2212"}),Object(u.jsx)("button",{onClick:e.onAdd,children:"+"})]})]})},b=n(10),x=n.n(b),O=function(e){return Object(u.jsx)("div",{onClick:e.onClose,className:x.a.backdrop})},p=function(e){return Object(u.jsx)("div",{className:x.a.modal,children:Object(u.jsx)("div",{className:x.a.content,children:e.children})})},h=document.getElementById("overlays"),_=function(e){return Object(u.jsxs)(r.Fragment,{children:[c.a.createPortal(Object(u.jsx)(O,{onClose:e.onClose}),h),c.a.createPortal(Object(u.jsx)(p,{children:e.children}),h)]})},f=n(5),v=n.n(f),C=function(e){var t=Object(r.useContext)(l),n="$".concat(t.totalAmount.toFixed(2)),a=t.items.length>0,c=function(e){t.removeItem(e)},i=function(e){t.addItem(Object(o.a)(Object(o.a)({},e),{},{amount:1}))},s=Object(u.jsx)("ul",{className:v.a["cart-items"],children:t.items.map((function(e){return Object(u.jsx)(j,{name:e.name,price:e.price,amount:e.amount,onRemove:c.bind(null,e.id),onAdd:i.bind(null,e)},e.id)}))});return Object(u.jsxs)(_,{onClose:e.onHide,children:[s,Object(u.jsxs)("div",{className:v.a.total,children:[Object(u.jsx)("span",{children:"Total Amount"}),Object(u.jsx)("span",{children:n})]}),Object(u.jsxs)("div",{className:v.a.actions,children:[Object(u.jsx)("button",{onClick:e.onHide,className:v.a["button--alt"],children:"Close"}),a&&Object(u.jsx)("button",{className:v.a.button,children:"Order"})]})]})},g=n(13),A=n.n(g),N=n.p+"static/media/meals.2971f633.jpg",I=function(){return Object(u.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",children:Object(u.jsx)("path",{d:"M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"})})},y=n(8),M=n.n(y),w=function(e){var t=Object(r.useState)(!1),n=Object(i.a)(t,2),a=n[0],c=n[1],s=Object(r.useContext)(l).items,o=s.reduce((function(e,t){return e+t.amount}),0);Object(r.useEffect)((function(){if(0!==s.length){c(!0);var e=setTimeout((function(){c(!1)}),300);return function(){clearTimeout(e)}}}),[s]);var m="".concat(M.a.button," ").concat(a?M.a.bump:"");return Object(u.jsxs)("button",{onClick:e.onClick,className:m,children:[Object(u.jsx)("span",{className:M.a.icon,children:Object(u.jsx)(I,{})}),Object(u.jsx)("span",{children:"Your Cart"}),Object(u.jsx)("span",{className:M.a.badge,children:o})]})},H=function(e){return Object(u.jsxs)(r.Fragment,{children:[Object(u.jsxs)("header",{className:A.a.header,children:[Object(u.jsx)("h1",{children:"ReactMeals"}),Object(u.jsx)(w,{onClick:e.onShowCart})]}),Object(u.jsx)("div",{className:A.a["main-image"],children:Object(u.jsx)("img",{src:N,alt:"A table full of meals"})})]})},k=n(15),F=n.n(k),R=function(){return Object(u.jsxs)("section",{className:F.a.summary,children:[Object(u.jsx)("h2",{children:"Delicious Food, Delivered To You"}),Object(u.jsx)("p",{children:"Choose your favorite meal from our broad selection of available meals and enjoy a delicious lunch or dinner at home."}),Object(u.jsx)("p",{children:"All our meals are cooked with high-quality ingredients, just-in-time and of course by experienced chefs!"})]})},B=n(16),S=n.n(B),D=function(e){return Object(u.jsx)("div",{className:S.a.card,children:e.children})},E=n(17),T=n.n(E),J=n(11),z=n.n(J),P=n(18),G=n.n(P),V=s.a.forwardRef((function(e,t){return Object(u.jsxs)("div",{className:G.a.input,children:[Object(u.jsx)("label",{htmlFor:e.input.id,children:e.label}),Object(u.jsx)("input",Object(o.a)({ref:t},e.input))]})})),q=n(19),K=n.n(q),$=function(e){var t=Object(r.useState)(!0),n=Object(i.a)(t,2),a=n[0],c=n[1],s=Object(r.useRef)();return Object(u.jsxs)("form",{className:K.a.form,onSubmit:function(t){t.preventDefault();var n=s.current.value,a=+n;0===n.trim()||a<1||a>5?c(!1):e.onAddToCart(a)},children:[Object(u.jsx)(V,{ref:s,label:"Amount",input:{id:"amount_"+e.id,type:"number",min:"1",max:"5",step:"1",defaultValue:"1"}}),Object(u.jsx)("button",{children:"+ Add"}),!a&&Object(u.jsx)("p",{children:"Please enter valid amount (1-5)"})]})},Q=function(e){var t="$".concat(e.price.toFixed(2)),n=Object(r.useContext)(l);return Object(u.jsxs)("li",{className:z.a.meal,children:[Object(u.jsxs)("div",{children:[Object(u.jsx)("h3",{children:e.name}),Object(u.jsx)("div",{className:z.a.description,children:e.description}),Object(u.jsx)("div",{className:z.a.price,children:t})]}),Object(u.jsx)("div",{children:Object(u.jsx)($,{id:e.id,onAddToCart:function(t){n.addItem({id:e.id,name:e.name,price:e.price,amount:t})}})})]})},X=[{id:"m1",name:"Sushi",description:"Finest fish and veggies",price:22.99},{id:"m2",name:"Schnitzel",description:"A german specialty!",price:16.5},{id:"m3",name:"Barbecue Burger",description:"American, raw, meaty",price:12.99},{id:"m4",name:"Green Bowl",description:"Healthy...and green...",price:18.99}],Y=function(){var e=X.map((function(e){return Object(u.jsx)(Q,{id:e.id,name:e.name,descripton:e.description,price:e.price},e.id)}));return Object(u.jsx)("section",{className:T.a.meals,children:Object(u.jsx)(D,{children:Object(u.jsx)("ul",{children:e})})})},Z=function(){return Object(u.jsxs)(r.Fragment,{children:[Object(u.jsx)(R,{}),Object(u.jsx)(Y,{})]})},L=n(14),U={items:[],totalAmount:0},W=function(e,t){if("ADD"===t.type){var n,a=e.totalAmount+t.item.price*t.item.amount,c=e.items.findIndex((function(e){return e.id===t.item.id})),i=e.items[c];if(i){var r=Object(o.a)(Object(o.a)({},i),{},{amount:i.amount+t.item.amount});(n=Object(L.a)(e.items))[c]=r}else n=e.items.concat(t.item);return{items:n,totalAmount:a}}if("REMOVE"===t.type){var s,l=e.items.findIndex((function(e){return e.id===t.id})),m=e.items[l],d=e.totalAmount-m.price;if(1===m.amount)s=e.items.filter((function(e){return e.id!==t.id}));else{var u=Object(o.a)(Object(o.a)({},m),{},{amount:m.amount-1});(s=Object(L.a)(e.items))[l]=u}return{items:s,totalAmount:d}}return U},ee=function(e){var t=Object(r.useReducer)(W,U),n=Object(i.a)(t,2),a=n[0],c=n[1],s={items:a.items,totalAmount:a.totalAmount,addItem:function(e){c({type:"ADD",item:e})},removeItem:function(e){c({type:"REMOVE",id:e})}};return Object(u.jsx)(l.Provider,{value:s,children:e.children})};var te=function(){var e=Object(r.useState)(!1),t=Object(i.a)(e,2),n=t[0],a=t[1];return Object(u.jsxs)(ee,{children:[n&&Object(u.jsx)(C,{onHide:function(){a(!1)}}),Object(u.jsx)(H,{onShowCart:function(){a(!0)}}),Object(u.jsx)("main",{children:Object(u.jsx)(Z,{})})]})};c.a.render(Object(u.jsx)(te,{}),document.getElementById("root"))}],[[26,1,2]]]);
//# sourceMappingURL=main.1ab8735f.chunk.js.map