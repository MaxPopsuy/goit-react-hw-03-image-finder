(this["webpackJsonpgoit-react-hw-03-image-finder"]=this["webpackJsonpgoit-react-hw-03-image-finder"]||[]).push([[0],{54:function(e,t,a){},55:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(10),c=a.n(r),i=a(7),s=a(3),u=a(4),l=a(6),h=a(5),d=a(22),p=a(23),g=a.n(p),m=a(1),j=function(e){Object(l.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))).state={query:""},e.PropTypes={onSubmit:g.a.func.isRequired},e.onChange=function(t){e.setState(Object(d.a)({},t.currentTarget.name,t.currentTarget.value))},e.handleSubmit=function(t){t.preventDefault(),e.props.onSubmit(e.state.query),e.setState({query:""})},e}return Object(u.a)(a,[{key:"render",value:function(){var e=this.state.query;return Object(m.jsx)("header",{className:"Searchbar",children:Object(m.jsxs)("form",{className:"SearchForm",onSubmit:this.handleSubmit,children:[Object(m.jsx)("button",{type:"submit",className:"SearchForm-button",children:Object(m.jsx)("span",{className:"icon-search"})}),Object(m.jsx)("input",{onChange:this.onChange,name:"query",className:"SearchForm-input",type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos",value:e})]})})}}]),a}(n.Component),b=j;function f(e){var t=e.onClick;return Object(m.jsx)("button",{className:"Button",type:"button",onClick:t,children:"Load more"})}var y=function(e){var t=e.url,a=e.description,n=e.onClick,o=e.id;return Object(m.jsx)("li",{onClick:n,className:"gallery-item",children:Object(m.jsx)("img",{src:t,alt:a,className:"ImageGalleryItem-image"})},o)},O=y;y.defaultProps={description:"photo preview"};var v=function(e){var t=e.photoData,a=e.children,n=e.setLargeImage;return Object(m.jsxs)("ul",{className:"ImageGallery",children:[t.map((function(e){return Object(m.jsx)(O,{url:e.webformatURL,description:e.tags,onClick:function(){return n(e.largeImageURL,e.tags)},id:e.id},e.id)})),a]})},w=a(24),x=function(){var e=Object(i.a)(Array(12).keys());return Object(m.jsx)(m.Fragment,{children:e.map((function(e){return Object(m.jsx)(w.a,{foregroundColor:"#cac0c0",viewBox:"0 0 720 520",className:"LoaderPart",speed:1,children:Object(m.jsx)("rect",{x:"0",y:"0",rx:"2",ry:"2",width:"720",height:"520"})},e)}))})},S=a(12),k=a.n(S);k.a.defaults.baseURL="https://pixabay.com/api";var M=function(e,t){return k.a.get("/?image_type=photo&key=".concat("25101281-0090f5d9635a12b4d0ee56ce5","&orientation=horizontal&q=").concat(e,"&page=").concat(t,"&per_page=12"))},L=document.querySelector("#root-modal"),C=function(e){Object(l.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))).closeKeydownModal=function(t){return"Escape"===t.code&&e.props.onClick()},e.closeOverlayModal=function(t){return t.target===t.currentTarget&&e.props.onClick()},e}return Object(u.a)(a,[{key:"componentDidMount",value:function(){window.addEventListener("keydown",this.closeKeydownModal)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("keydown",this.closeKeydownModal)}},{key:"render",value:function(){return Object(r.createPortal)(Object(m.jsx)("div",{onClick:this.closeOverlayModal,className:"Overlay",children:Object(m.jsx)("div",{className:"Modal",children:this.props.children})}),L)}}]),a}(n.Component),q=a(25),I=(a(52),a(53),function(e){Object(l.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))).state={isLoading:!1,photoData:[],page:1,showLoadMoreButton:!1,query:"",error:"",largeImage:"",showModal:!1,description:""},e.onSubmit=function(t){e.setState({query:t,error:"",page:1,photoData:[]})},e.onClickLoadMore=function(){e.setState((function(e){return{page:e.page+1}}))},e.findImages=function(){var t=e.state.page;e.setState({isLoading:!0,showLoadMoreButton:!1}),M(e.state.query,t).then((function(t){var a=t.data;e.setState((function(e){return{photoData:[].concat(Object(i.a)(e.photoData),Object(i.a)(a.hits)),showLoadMoreButton:12===a.hits.length&&!0,error:0===a.hits.length&&"Opps, nothing found"}})),window.scrollBy({top:260,behavior:"smooth"})})).catch((function(){return e.setState({error:"Oops, something went wrong"})})).finally((function(){return e.setState({isLoading:!1})}))},e.setLargeImage=function(t,a){e.toggleModal(),e.setState({largeImage:t,description:a})},e.toggleModal=function(){return e.setState((function(e){return{showModal:!e.showModal}}))},e}return Object(u.a)(a,[{key:"componentDidMount",value:function(){Object(q.info)({text:"Type your query and find photos"})}},{key:"componentDidUpdate",value:function(e,t){this.state.query!==t.query&&(this.findImages(),window.scrollTo(0,0)),this.state.page!==t.page&&1!==this.state&&this.findImages()}},{key:"render",value:function(){return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(b,{onSubmit:this.onSubmit}),this.state.error&&Object(m.jsx)("h2",{className:"errorMesage",children:this.state.error}),!this.state.error&&Object(m.jsx)(v,{setLargeImage:this.setLargeImage,photoData:this.state.photoData,children:this.state.isLoading&&Object(m.jsx)(x,{})}),this.state.showLoadMoreButton&&Object(m.jsx)(f,{onClick:this.onClickLoadMore}),this.state.showModal&&Object(m.jsx)(C,{onClick:this.toggleModal,children:Object(m.jsx)("img",{src:this.state.largeImage,alt:this.state.description})})]})}}]),a}(n.Component)),N=I;a(54);c.a.render(Object(m.jsx)(o.a.StrictMode,{children:Object(m.jsx)(N,{})}),document.querySelector("#root"))}},[[55,1,2]]]);
//# sourceMappingURL=main.7b454105.chunk.js.map