(this["webpackJsonpreact_movies-list-add-form"]=this["webpackJsonpreact_movies-list-add-form"]||[]).push([[0],{10:function(e){e.exports=JSON.parse('[{"title":"Inception","description":"Follows the lives of eight very different couples in dealing with their love lives in various loosely interrelated tales all set during a frantic month before Christmas in London, England.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg","imdbUrl":"https://www.imdb.com/title/tt1375666","imdbId":"tt1375666"},{"title":"Love Actually","description":"A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMTY4NjQ5NDc0Nl5BMl5BanBnXkFtZTYwNjk5NDM3._V1_.jpg","imdbUrl":"https://www.imdb.com/title/tt0314331","imdbId":"tt0314331"},{"title":"The Day After Tomorrow","description":"Jack Hall, paleoclimatologist, must make a daring trek from Washington, D.C. to New York City to reach his son, trapped in the cross-hairs of a sudden international storm which plunges the planet into a new Ice Age.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMTY4YWMzMTMtZjUyOS00OGY1LTljMGUtOWU5ZjYzMjc2ZTMwXkEyXkFqcGdeQXVyMTYzMDM0NTU@._V1_SY1000_CR0,0,701,1000_AL_.jpg","imdbUrl":"https://www.imdb.com/title/tt0319262","imdbId":"tt0319262"},{"title":"Rogue One","description":"The daughter of an Imperial scientist joins the Rebel Alliance in a risky move to steal the Death Star plans.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMjEwMzMxODIzOV5BMl5BanBnXkFtZTgwNzg3OTAzMDI@._V1_SY1000_SX675_AL_.jpg","imdbUrl":"https://www.imdb.com/title/tt3748528","imdbId":"tt3748528"},{"title":"The Holiday","description":"Two women troubled with guy-problems swap homes in each other\'s countries, where they each meet a local guy and fall in love.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMTI1MDk4MzA2OF5BMl5BanBnXkFtZTYwMjQ3NDc3._V1_.jpg","imdbUrl":"https://www.imdb.com/title/tt0457939","imdbId":"tt0457939"}]')},16:function(e,t,i){},17:function(e,t,i){},19:function(e,t,i){},20:function(e,t,i){"use strict";i.r(t);var a=i(8),n=i.n(a),c=(i(15),i(7)),s=i(3),r=i(1),l=(i(16),i(17),i(0)),o=function(e){var t=e.movie;return Object(l.jsxs)("div",{className:"card","data-cy":"movie-card",children:[Object(l.jsx)("div",{className:"card-image",children:Object(l.jsx)("figure",{className:"image is-4by3",children:Object(l.jsx)("img",{src:t.imgUrl,alt:"Film logo"})})}),Object(l.jsxs)("div",{className:"card-content",children:[Object(l.jsxs)("div",{className:"media",children:[Object(l.jsx)("div",{className:"media-left",children:Object(l.jsx)("figure",{className:"image is-48x48",children:Object(l.jsx)("img",{src:"images/imdb-logo.jpeg",alt:"imdb"})})}),Object(l.jsx)("div",{className:"media-content",children:Object(l.jsx)("p",{className:"title is-8",children:t.title})})]}),Object(l.jsxs)("div",{className:"content",children:[t.description,Object(l.jsx)("br",{}),Object(l.jsx)("a",{href:t.imdbUrl,children:"IMDB"})]})]})]})},d=function(e){var t=e.movies;return Object(l.jsx)("div",{className:"movies",children:t.map((function(e){return Object(l.jsx)(o,{movie:e},e.imdbId)}))})},m=i(2),b=i(9),j=i.n(b);var u=function(e){var t=e.name,i=e.value,a=e.label,n=void 0===a?t:a,c=e.required,o=void 0!==c&&c,d=e.onChange,m=void 0===d?function(){}:d,b=Object(r.useState)((function(){return"".concat(t,"-").concat(Math.random().toString().slice(2))})),u=Object(s.a)(b,1)[0],h=Object(r.useState)(!1),g=Object(s.a)(h,2),O=g[0],p=g[1],v=O&&o&&!i;return Object(l.jsxs)("div",{className:"field",children:[Object(l.jsx)("label",{className:"label",htmlFor:u,children:n}),Object(l.jsx)("div",{className:"control",children:Object(l.jsx)("input",{id:u,"data-cy":"movie-".concat(t),className:j()("input",{"is-danger":v}),type:"text",placeholder:"Enter ".concat(n),value:i,onChange:function(e){return m(e.target.value)},onBlur:function(){return p(!0)}})}),v&&Object(l.jsx)("p",{className:"help is-danger",children:"".concat(n," is required")})]})},h=function(e){var t=e.onAdd,i=Object(r.useState)({title:"",imgUrl:"",imdbUrl:"",imdbId:"",description:""}),a=Object(s.a)(i,2),n=a[0],c=a[1],o=function(e){return""===e.trim()},d=o(n.title)||o(n.imgUrl)||o(n.imdbUrl)||o(n.imdbId);return Object(l.jsxs)("form",{className:"NewMovie",onSubmit:function(e){e.preventDefault(),n.title&&n.imgUrl&&n.imdbUrl&&n.imdbId&&(t(n),c({title:"",imgUrl:"",imdbUrl:"",imdbId:"",description:""}))},children:[Object(l.jsx)("h2",{className:"title",children:"Add a movie"}),Object(l.jsx)(u,{name:"title",label:"Title",value:n.title,onChange:function(e){return c(Object(m.a)(Object(m.a)({},n),{},{title:e}))},required:!0}),Object(l.jsx)(u,{name:"description",label:"Description",value:n.description,onChange:function(e){return c(Object(m.a)(Object(m.a)({},n),{},{description:e}))}}),Object(l.jsx)(u,{name:"imgUrl",label:"Image URL",value:n.imgUrl,onChange:function(e){return c(Object(m.a)(Object(m.a)({},n),{},{imgUrl:e}))},required:!0}),Object(l.jsx)(u,{name:"imdbUrl",label:"Imdb URL",value:n.imdbUrl,onChange:function(e){return c(Object(m.a)(Object(m.a)({},n),{},{imdbUrl:e}))},required:!0}),Object(l.jsx)(u,{name:"imdbId",label:"Imdb ID",value:n.imdbId,onChange:function(e){return c(Object(m.a)(Object(m.a)({},n),{},{imdbId:e}))},required:!0}),Object(l.jsx)("div",{className:"field is-grouped",children:Object(l.jsx)("div",{className:"control",children:Object(l.jsx)("button",{type:"submit","data-cy":"submit-button",className:"button is-link",disabled:d,children:"Add"})})})]})},g=i(10),O=(i(19),function(){var e=Object(r.useState)(Object(c.a)(g)),t=Object(s.a)(e,2),i=t[0],a=t[1];return Object(l.jsxs)("div",{className:"page",children:[Object(l.jsx)("div",{className:"page-content",children:Object(l.jsx)(d,{movies:i})}),Object(l.jsx)("div",{className:"sidebar",children:Object(l.jsx)(h,{onAdd:function(e){a((function(t){return[].concat(Object(c.a)(t),[e])}))}})})]})});n.a.render(Object(l.jsx)(O,{}),document.getElementById("root"))}},[[20,1,2]]]);
//# sourceMappingURL=main.22a7c230.chunk.js.map