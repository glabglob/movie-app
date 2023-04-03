"use strict";(self.webpackChunkmovie_app=self.webpackChunkmovie_app||[]).push([[61],{6806:function(e,t,i){i.d(t,{Z:function(){return c}});var s=i(7691),n=i(184),c=function(e){return(0,n.jsxs)("div",{className:e.clazz?"movie__card  ".concat(e.clazz):"movie__card ",children:[(0,n.jsx)(s.Z,{clazz:"movie__cover",imgSrc:e.image,alt:e.title}),(0,n.jsx)("h3",{className:"movie__card-title ",children:e.title})]})}},7265:function(e,t,i){i.r(t),i.d(t,{default:function(){return j}});var s=i(4270),n=i(2791),c=i(1087),o=i(1921),r=i(4230),a=i(3733),l=i(7691),d=i(184),p=function(e){return(0,d.jsx)("section",{className:"trendings__content",children:(0,d.jsxs)(c.rU,{to:"/".concat(e.mediaType,"/").concat(e.movieId),children:[(0,d.jsx)(l.Z,{clazz:"trendings__cover",imgSrc:e.image,alt:e.title}),(0,d.jsxs)("article",{className:"trendings__content-info",children:[(0,d.jsx)("p",{className:"trendings__content-title",children:e.title}),(0,d.jsx)("p",{className:"trendings__content-description",children:e.description})]})]})})},m=i(6806),h=i(3418),u=i(7715),g=i(7842),j=(i(5155),function(){var e=(0,h.T)(),t=(0,u.C)((function(e){return e.homePageReducer})),i=t.trendingsFetchStatus,l=t.inCinemaFetchStatus,j=t.popularFetchStatus,x=t.topRatedTvFetchStatus,v=t.topRatedMovieFetchStatus,_=t.trendings,T=t.inCinema,S=t.popular,Z=t.topRatedTv,z=t.topRatedMovie;return(0,n.useEffect)((function(){e((0,g.yE)()),e((0,g.uC)("movie")),e((0,g.s2)()),e((0,g.oN)("tv")),e((0,g.zE)("movie"))}),[]),(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(s.q,{children:[(0,d.jsx)("meta",{name:"description",content:"Movie App"}),(0,d.jsx)("title",{children:"Movie App"})]}),(0,d.jsx)("main",{children:(0,d.jsxs)(r.Z,{children:[(0,d.jsxs)("section",{className:"hero__trending",children:[(0,d.jsx)("h2",{children:"Trending"}),"idle"!==i?(0,d.jsx)(o.Z,{color:"#582904",cssOverride:{margin:"0 auto"}}):(0,d.jsx)(a.Z,{autoplay:!0,slidesToShow:1,slidesToScroll:1,autoplaySpeed:3500,clazz:"slick__hero",children:_.map((function(e,t){return(0,d.jsx)(p,{image:"https://image.tmdb.org/t/p/original".concat(e.cover),title:e.title,description:e.description,mediaType:e.mediaType,movieId:e.id},t)}))})]}),(0,d.jsxs)("section",{className:"section cinema",children:[(0,d.jsxs)("h2",{children:["In ",(0,d.jsx)("span",{children:"cinema"})]}),"idle"!==l?(0,d.jsx)(o.Z,{color:"#582904",cssOverride:{margin:"0 auto"}}):(0,d.jsx)(a.Z,{autoplay:!0,clazz:"slick__cards",children:T.map((function(e,t){return(0,d.jsx)(c.rU,{to:"/".concat(e.mediaType,"/").concat(e.id),children:(0,d.jsx)(m.Z,{image:e.poster?"https://image.tmdb.org/t/p/original".concat(e.poster):"https://image.tmdb.org/t/p/original".concat(e.cover),title:e.title})},t)}))})]}),(0,d.jsxs)("section",{className:"section popular",children:[(0,d.jsxs)("h2",{children:["Whats ",(0,d.jsx)("span",{children:"Popular"})]}),"idle"!==j?(0,d.jsx)(o.Z,{color:"#582904",cssOverride:{margin:"0 auto"}}):(0,d.jsx)(a.Z,{autoplay:!0,clazz:"slick__cards",children:S.map((function(e,t){return(0,d.jsx)(c.rU,{to:"/".concat(e.mediaType,"/").concat(e.id),children:(0,d.jsx)(m.Z,{image:e.poster?"https://image.tmdb.org/t/p/original".concat(e.poster):"https://image.tmdb.org/t/p/original/".concat(e.cover),title:e.title})},t)}))})]}),(0,d.jsxs)("section",{className:"section top_rated-tv",children:[(0,d.jsxs)("h2",{children:["top rated ",(0,d.jsx)("span",{children:"tv's"})]}),"idle"!==x?(0,d.jsx)(o.Z,{color:"#582904",cssOverride:{margin:"0 auto"}}):(0,d.jsx)(a.Z,{autoplay:!0,clazz:"slick__cards",children:Z.map((function(e,t){return(0,d.jsx)(c.rU,{to:"/".concat(e.mediaType,"/").concat(e.id),children:(0,d.jsx)(m.Z,{image:e.poster?"https://image.tmdb.org/t/p/original".concat(e.poster):"https://image.tmdb.org/t/p/original/".concat(e.cover),title:e.title})},t)}))})]}),(0,d.jsxs)("section",{className:"section top_rated-movies",children:[(0,d.jsxs)("h2",{children:["top rated ",(0,d.jsx)("span",{children:"movies"})]}),"idle"!==v?(0,d.jsx)(o.Z,{color:"#582904",cssOverride:{margin:"0 auto"}}):(0,d.jsx)(a.Z,{autoplay:!0,clazz:"slick__cards",children:z.map((function(e,t){return(0,d.jsx)(c.rU,{to:"/".concat(e.mediaType,"/").concat(e.id),children:(0,d.jsx)(m.Z,{image:e.poster?"https://image.tmdb.org/t/p/original".concat(e.poster):"https://image.tmdb.org/t/p/original/".concat(e.cover),title:e.title})},t)}))})]})]})})]})})},3733:function(e,t,i){i.d(t,{Z:function(){return o}});var s=i(8683),n=i(5717),c=(i(8944),i(4217),i(184)),o=function(e){var t=(0,s.Z)({},e);return"slick__cards"===e.clazz&&(t=(0,s.Z)((0,s.Z)({slidesToShow:5,slidesToScroll:1,swipe:!1},t),{},{responsive:[{breakpoint:1025,settings:{slidesToShow:3,slidesToScroll:1,swipe:!0}},{breakpoint:480,settings:{slidesToShow:2,slidesToScroll:1,swipe:!0}},{breakpoint:391,settings:{slidesToShow:1,slidesToScroll:1,swipe:!0}}]})),"slick__scroll"===e.clazz&&(t=(0,s.Z)((0,s.Z)({slidesToShow:5,slidesToScroll:1,swipeToSlide:!0,infinite:!0,autoplaySpeed:2e3},t),{},{responsive:[{breakpoint:1025,settings:{slidesToShow:3}},{breakpoint:992,settings:{slidesToShow:2}},{breakpoint:391,settings:{slidesToShow:1,slidesToScroll:1}}]})),(0,c.jsx)(n.Z,(0,s.Z)((0,s.Z)({className:e.clazz,autoplaySpeed:5e3},t),{},{children:e.children}))}}}]);
//# sourceMappingURL=61.db621f09.chunk.js.map