"use strict";(self.webpackChunkmovie_app=self.webpackChunkmovie_app||[]).push([[916],{7438:function(e,t,i){i.d(t,{Z:function(){return s}});var c=i(184),s=function(e){return(0,c.jsx)("div",{className:e.clazz?"cast__card ".concat(e.clazz):"cast__card",children:(0,c.jsxs)("figure",{className:"cast__card-img_container",children:[(0,c.jsx)("img",{className:"cast__card-img",src:e.image,alt:e.alt}),(0,c.jsxs)("figcaption",{className:"cast__card-info",children:[(0,c.jsx)("p",{className:"cast__card-actorName",children:e.actorName}),(0,c.jsx)("p",{className:"cast__card-charName",children:e.charName})]})]})})}},6806:function(e,t,i){i.d(t,{Z:function(){return a}});var c=i(7691),s=i(184),a=function(e){return(0,s.jsxs)("div",{className:e.clazz?"movie__card  ".concat(e.clazz):"movie__card ",children:[(0,s.jsx)(c.Z,{clazz:"movie__cover",imgSrc:e.image,alt:e.title}),(0,s.jsx)("h3",{className:"movie__card-title ",children:e.title})]})}},2685:function(e,t,i){i.r(t);var c=i(4165),s=i(5861),a=i(9439),n=i(2791),o=i(7689),r=i(1087),l=i(1921),d=i(4270),m=i(4230),u=i(3733),p=i(7691),h=i(7438),_=i(6806),g=i(3941),v=i(898),f=i(3418),j=i(7715),x=i(6147),Z=(i(4544),i(184));t.default=function(e){var t=(0,n.useState)(""),i=(0,a.Z)(t,2),z=i[0],N=i[1],S=(0,o.UO)().id,k=(0,f.T)(),w=(0,j.C)((function(e){return e.detailPageReducer})),y=w.castFetchStatus,T=w.trailersFetchStatus,b=w.recommendationsFetchStatus,C=w.movie,I=w.cast,F=w.trailers,O=w.recommendations;(0,n.useEffect)((function(){k((0,x.d0)({mediaType:e.type,movieId:"".concat(S)})),k((0,x.IQ)({mediaType:e.type,movieId:"".concat(S)})),k((0,x.Jq)({mediaType:e.type,movieId:"".concat(S)})),k((0,x.$K)({mediaType:e.type,movieId:"".concat(S)}))}),[S]);var q=function(){var e=(0,s.Z)((0,c.Z)().mark((function e(t){return(0,c.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:N("https://www.youtube.com/embed/".concat(t,"?autoplay=1"));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return(0,Z.jsxs)(Z.Fragment,{children:[(0,Z.jsxs)(d.q,{children:[(0,Z.jsx)("meta",{name:"description",content:"".concat(C.title," page")}),(0,Z.jsx)("title",{children:C.title})]}),(0,Z.jsxs)("main",{children:[(0,Z.jsx)(v.Z,{onHide:function(){return N("")},videoId:"".concat(z)}),(0,Z.jsx)("section",{className:"movie__hero",children:(0,Z.jsx)(p.Z,{imgSrc:C.cover?"https://image.tmdb.org/t/p/original".concat(C.cover):"https://image.tmdb.org/t/p/original".concat(C.poster),alt:"".concat(C.title),clazz:"movie__hero-img"})}),(0,Z.jsxs)(m.Z,{children:[(0,Z.jsxs)("section",{className:"section movie__poster",children:[(0,Z.jsx)(p.Z,{imgSrc:C.poster?"https://image.tmdb.org/t/p/original".concat(C.poster):"https://image.tmdb.org/t/p/original".concat(C.cover),alt:"".concat(C.title),clazz:"poster"}),(0,Z.jsxs)("article",{className:"movie__poster-info",children:[(0,Z.jsx)("h3",{className:"movie__poster-title",children:C.title}),(0,Z.jsx)("ul",{className:"movie__poster-genres",children:C.genres?C.genres.map((function(e,t){return(0,Z.jsx)("li",{className:"movie__poster-genres_items",children:e.name},t)})):""}),(0,Z.jsx)("p",{className:"movie__poster-description",children:C.description})]})]}),0===I.length?"":(0,Z.jsxs)("section",{className:"section movie__casts",children:[(0,Z.jsx)("h2",{children:"top casts"}),"idle"!==y?(0,Z.jsx)(l.Z,{color:"#582904",cssOverride:{margin:"0 auto"}}):(0,Z.jsx)(u.Z,{clazz:"slick__scroll",autoplay:!0,infinite:!(I.length<=5),children:I.map((function(e,t){return(0,Z.jsx)(r.rU,{to:"/person/".concat(e.id),children:(0,Z.jsx)(h.Z,{image:"https://image.tmdb.org/t/p/original".concat(e.cover),actorName:e.name,charName:e.charName,alt:"".concat(e.name)})},t)}))})]}),0===F.length?"":(0,Z.jsxs)("section",{className:"section movie__trailers",children:[(0,Z.jsx)("h2",{children:"trailers"}),"idle"!==T?(0,Z.jsx)(l.Z,{color:"#582904",cssOverride:{margin:"0 auto"}}):(0,Z.jsx)(u.Z,{clazz:"slick__scroll",autoplay:!1,infinite:!(F.length<=5),children:F.map((function(e,t){return(0,Z.jsx)(g.Z,{image:"https://img.youtube.com/vi/".concat(e.key,"/mqdefault.jpg"),title:"",onClick:function(){return q(e.key)}},t)}))})]}),0===O.length?"":(0,Z.jsxs)("section",{className:"section movie__recommendations",children:[(0,Z.jsx)("h2",{children:"recommendations"}),"idle"!==b?(0,Z.jsx)(l.Z,{color:"#582904",cssOverride:{margin:"0 auto"}}):(0,Z.jsx)(u.Z,{autoplay:!1,swipe:!0,clazz:"slick__scroll",infinite:!(O.length<=5),children:O.map((function(e,t){return(0,Z.jsx)(r.rU,{to:"/".concat(e.mediaType,"/").concat(e.id),children:(0,Z.jsx)(_.Z,{image:e.poster?"https://image.tmdb.org/t/p/original".concat(e.poster):"https://image.tmdb.org/t/p/original".concat(e.cover),title:e.title})},t)}))})]})]})]})]})}},3733:function(e,t,i){i.d(t,{Z:function(){return n}});var c=i(8683),s=i(5717),a=(i(8944),i(4217),i(184)),n=function(e){var t=(0,c.Z)({},e);return"slick__cards"===e.clazz&&(t=(0,c.Z)((0,c.Z)({slidesToShow:5,slidesToScroll:1,swipe:!1},t),{},{responsive:[{breakpoint:1025,settings:{slidesToShow:3,slidesToScroll:1,swipe:!0}},{breakpoint:480,settings:{slidesToShow:2,slidesToScroll:1,swipe:!0}},{breakpoint:391,settings:{slidesToShow:1,slidesToScroll:1,swipe:!0}}]})),"slick__scroll"===e.clazz&&(t=(0,c.Z)((0,c.Z)({slidesToShow:5,slidesToScroll:1,swipeToSlide:!0,infinite:!0,autoplaySpeed:2e3},t),{},{responsive:[{breakpoint:1025,settings:{slidesToShow:3}},{breakpoint:992,settings:{slidesToShow:2}},{breakpoint:391,settings:{slidesToShow:1,slidesToScroll:1}}]})),(0,a.jsx)(s.Z,(0,c.Z)((0,c.Z)({className:e.clazz,autoplaySpeed:5e3},t),{},{children:e.children}))}},3941:function(e,t,i){i.d(t,{Z:function(){return a}});var c=i(7691),s=i(184),a=function(e){return(0,s.jsx)("div",{className:e.clazz?"trailer__card ".concat(e.clazz):"trailer__card",onClick:function(){return e.onClick?e.onClick():""},children:(0,s.jsx)(c.Z,{clazz:"movie__cover trailer__cover",imgSrc:e.image,alt:e.title})})}},898:function(e,t,i){i.d(t,{Z:function(){return n}});var c=i(9439),s=i(2791),a=i(184),n=function(e){var t=(0,s.useState)(!1),i=(0,c.Z)(t,2),n=i[0],o=i[1],r=function(){o(!1),e.onHide()};return(0,s.useEffect)((function(){e.videoId&&o(!0)}),[e.videoId]),(0,a.jsxs)("div",{className:"modal ".concat(n?"show":""),onClick:function(){return r()},children:[(0,a.jsx)("div",{className:"modal__overlay"}),(0,a.jsxs)("div",{className:"modal__content",children:[(0,a.jsx)("div",{className:"modal__header",children:(0,a.jsx)("button",{className:"modal__close-button",onClick:function(){return r()},children:"\u2715"})}),n?(0,a.jsx)("iframe",{src:e.videoId,title:"trailer"}):null]})]})}}}]);
//# sourceMappingURL=916.b52b08d4.chunk.js.map