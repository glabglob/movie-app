"use strict";(self.webpackChunkmovie_app=self.webpackChunkmovie_app||[]).push([[898],{4921:function(e,a,t){t.d(a,{Z:function(){return u}});var n=t(2791),i=t(8741),s=t(3418),c=t(7715),r=t(1087),l=t(8219),o=t(6048),m=t.n(o),p=t(6806),g=t(184),u=function(e){var a=(0,s.T)(),t=(0,c.C)((function(e){return e.paginateReducer})),o=t.paginateResultFetchStatus,u=t.currentPage,d=t.totalPages,h=t.paginateResult;(0,n.useEffect)((function(){a((0,l.b)({mediaType:e.type,pageNumber:"".concat(u)}))}),[u,a]);return(0,g.jsxs)("section",{className:"section catalog",children:[(0,g.jsx)("div",{className:"catalog__items",children:"idle"!==o?(0,g.jsx)(i.Z,{color:"#582904",cssOverride:{margin:"0 auto"}}):h.map((function(e,a){return(0,g.jsx)(r.rU,{to:"/".concat(e.mediaType,"/").concat(e.id),children:(0,g.jsx)(p.Z,{image:e.cover?"https://image.tmdb.org/t/p/original".concat(e.cover):"https://image.tmdb.org/t/p/original".concat(e.poster),title:e.title})},a)}))}),(0,g.jsx)(m(),{onPageChange:function(t){a((0,l.b)({mediaType:e.type,pageNumber:"".concat(t.selected+1)})),window.scrollTo(0,0)},pageRangeDisplayed:1,marginPagesDisplayed:1,pageCount:d,breakLabel:"...",nextLabel:">",previousLabel:"<",containerClassName:"pagination",pageLinkClassName:"page-link",previousLinkClassName:"page-link",nextClassName:"page-item",nextLinkClassName:"page-link",breakClassName:"page-item",breakLinkClassName:"page-link",activeClassName:"active__pagination",renderOnZeroPageCount:function(){return null}})]})}},6806:function(e,a,t){t.d(a,{Z:function(){return s}});var n=t(7691),i=t(184),s=function(e){return(0,i.jsxs)("div",{className:e.clazz?"movie__card  ".concat(e.clazz):"movie__card ",children:[(0,i.jsx)(n.Z,{clazz:"movie__cover",imgSrc:e.image,alt:e.title}),(0,i.jsx)("h3",{className:"movie__card-title ",children:e.title})]})}},1898:function(e,a,t){t.r(a);var n=t(4270),i=t(4230),s=t(4921),c=t(184);a.default=function(e){return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsxs)(n.q,{children:[(0,c.jsx)("meta",{name:"description",content:"Actors list"}),(0,c.jsx)("title",{children:"Actors list"})]}),(0,c.jsxs)("main",{children:[(0,c.jsx)("section",{className:"page__hero",children:(0,c.jsx)(i.Z,{children:(0,c.jsx)("h2",{className:"page__hero-title",children:"actors"})})}),(0,c.jsx)(i.Z,{children:(0,c.jsx)(s.Z,{itemsPerPage:24,type:"person"})})]})]})}}}]);
//# sourceMappingURL=898.240b29c3.chunk.js.map