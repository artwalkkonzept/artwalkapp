(this["webpackJsonpartwalk-frontend"]=this["webpackJsonpartwalk-frontend"]||[]).push([[0],{159:function(e,t,s){"use strict";s.r(t);var a=s(1),i=s(17),n=s.n(i),r=s(5),l=s(4),c=(s(60),s(61),s(13)),o=s.n(c),h=o.a.create({baseURL:"http://localhost:8080/api",headers:{"Content-type":"application/json"}});const d="http://localhost:8080/api/artwalk/";var j=new class{login(e,t){return o.a.post(d+"signin",{username:e,password:t}).then((e=>(e.data.accessToken&&localStorage.setItem("user",JSON.stringify(e.data)),e.data)))}logout(){localStorage.removeItem("user")}register(e,t,s){return o.a.post(d+"signup",{username:e,email:t,password:s})}getCurrentUser(){return JSON.parse(localStorage.getItem("user"))}getAll(e){return h.get("/artwalks",{params:e})}get(e){return h.get("/artwalks/".concat(e))}create(e){return h.post("/artwalks",e)}update(e,t){return h.put("/artwalks/".concat(e),t)}delete(e){return h.delete("/artwalks/".concat(e))}deleteAll(){return h.delete("/artwalks")}findByTitle(e){return h.get("/artwalks?title=".concat(e))}},m=s(22),b=s.n(m),u=s(16),g=s.n(u),p=s(23),x=s.n(p),O=s(0);const v=e=>{if(!e)return Object(O.jsx)("div",{className:"alert alert-danger",role:"alert",children:"This field is required!"})};class k extends a.Component{constructor(e){super(e),this.handleLogin=this.handleLogin.bind(this),this.onChangeUsername=this.onChangeUsername.bind(this),this.onChangePassword=this.onChangePassword.bind(this),this.state={username:"",password:"",loading:!1,message:""}}onChangeUsername(e){this.setState({username:e.target.value})}onChangePassword(e){this.setState({password:e.target.value})}handleLogin(e){e.preventDefault(),this.setState({message:"",loading:!0}),this.form.validateAll(),0===this.checkBtn.context._errors.length?j.login(this.state.username,this.state.password).then((()=>{this.props.history.push("/profile"),window.location.reload()}),(e=>{const t=e.response&&e.response.data&&e.response.data.message||e.message||e.toString();this.setState({loading:!1,message:t})})):this.setState({loading:!1})}render(){return Object(O.jsx)("div",{className:"col-md-12",children:Object(O.jsxs)("div",{className:"card card-container",children:[Object(O.jsx)("img",{src:"//ssl.gstatic.com/accounts/ui/avatar_2x.png",alt:"profile-img",className:"profile-img-card"}),Object(O.jsxs)(b.a,{onSubmit:this.handleLogin,ref:e=>{this.form=e},children:[Object(O.jsxs)("div",{className:"form-group",children:[Object(O.jsx)("label",{htmlFor:"username",children:"Username"}),Object(O.jsx)(g.a,{type:"text",className:"form-control",name:"username",value:this.state.username,onChange:this.onChangeUsername,validations:[v]})]}),Object(O.jsxs)("div",{className:"form-group",children:[Object(O.jsx)("label",{htmlFor:"password",children:"Password"}),Object(O.jsx)(g.a,{type:"password",className:"form-control",name:"password",value:this.state.password,onChange:this.onChangePassword,validations:[v]})]}),Object(O.jsx)("div",{className:"form-group",children:Object(O.jsxs)("button",{className:"btn btn-primary btn-block",disabled:this.state.loading,children:[this.state.loading&&Object(O.jsx)("span",{className:"spinner-border spinner-border-sm"}),Object(O.jsx)("span",{children:"Login"})]})}),this.state.message&&Object(O.jsx)("div",{className:"form-group",children:Object(O.jsx)("div",{className:"alert alert-danger",role:"alert",children:this.state.message})}),Object(O.jsx)(x.a,{style:{display:"none"},ref:e=>{this.checkBtn=e}})]})]})})}}var N=s(51);const f=e=>{if(!e)return Object(O.jsx)("div",{className:"alert alert-danger",role:"alert",children:"This field is required!"})},A=e=>{if(!Object(N.isEmail)(e))return Object(O.jsx)("div",{className:"alert alert-danger",role:"alert",children:"This is not a valid email."})},C=e=>{if(e.length<3||e.length>20)return Object(O.jsx)("div",{className:"alert alert-danger",role:"alert",children:"The username must be between 3 and 20 characters."})},w=e=>{if(e.length<6||e.length>40)return Object(O.jsx)("div",{className:"alert alert-danger",role:"alert",children:"The password must be between 6 and 40 characters."})};class S extends a.Component{constructor(e){super(e),this.handleRegister=this.handleRegister.bind(this),this.onChangeUsername=this.onChangeUsername.bind(this),this.onChangeEmail=this.onChangeEmail.bind(this),this.onChangePassword=this.onChangePassword.bind(this),this.state={username:"",email:"",password:"",successful:!1,message:""}}onChangeUsername(e){this.setState({username:e.target.value})}onChangeEmail(e){this.setState({email:e.target.value})}onChangePassword(e){this.setState({password:e.target.value})}handleRegister(e){e.preventDefault(),this.setState({message:"",successful:!1}),this.form.validateAll(),0===this.checkBtn.context._errors.length&&j.register(this.state.username,this.state.email,this.state.password).then((e=>{this.setState({message:e.data.message,successful:!0})}),(e=>{const t=e.response&&e.response.data&&e.response.data.message||e.message||e.toString();this.setState({successful:!1,message:t})}))}render(){return Object(O.jsx)("div",{className:"col-md-12",children:Object(O.jsxs)("div",{className:"card card-container",children:[Object(O.jsx)("img",{src:"//ssl.gstatic.com/accounts/ui/avatar_2x.png",alt:"profile-img",className:"profile-img-card"}),Object(O.jsxs)(b.a,{onSubmit:this.handleRegister,ref:e=>{this.form=e},children:[!this.state.successful&&Object(O.jsxs)("div",{children:[Object(O.jsxs)("div",{className:"form-group",children:[Object(O.jsx)("label",{htmlFor:"username",children:"Username"}),Object(O.jsx)(g.a,{type:"text",className:"form-control",name:"username",value:this.state.username,onChange:this.onChangeUsername,validations:[f,C]})]}),Object(O.jsxs)("div",{className:"form-group",children:[Object(O.jsx)("label",{htmlFor:"email",children:"Email"}),Object(O.jsx)(g.a,{type:"text",className:"form-control",name:"email",value:this.state.email,onChange:this.onChangeEmail,validations:[f,A]})]}),Object(O.jsxs)("div",{className:"form-group",children:[Object(O.jsx)("label",{htmlFor:"password",children:"Password"}),Object(O.jsx)(g.a,{type:"password",className:"form-control",name:"password",value:this.state.password,onChange:this.onChangePassword,validations:[f,w]})]}),Object(O.jsx)("div",{className:"form-group",children:Object(O.jsx)("button",{className:"btn btn-primary btn-block",children:"Sign Up"})})]}),this.state.message&&Object(O.jsx)("div",{className:"form-group",children:Object(O.jsx)("div",{className:this.state.successful?"alert alert-success":"alert alert-danger",role:"alert",children:this.state.message})}),Object(O.jsx)(x.a,{style:{display:"none"},ref:e=>{this.checkBtn=e}})]})]})})}}function W(){const e=JSON.parse(localStorage.getItem("user"));return e&&e.accessToken?{"x-access-token":e.accessToken}:{}}const T="http://localhost:8080/api/test/";var y=new class{getPublicContent(){return o.a.get(T+"all")}getUserBoard(){return o.a.get(T+"user",{headers:W()})}getModeratorBoard(){return o.a.get(T+"mod",{headers:W()})}getAdminBoard(){return o.a.get(T+"admin",{headers:W()})}};class I extends a.Component{constructor(e){super(e),this.state={content:""}}componentDidMount(){y.getPublicContent().then((e=>{this.setState({content:e.data})}),(e=>{this.setState({content:e.response&&e.response.data||e.message||e.toString()})}))}render(){return Object(O.jsx)("div",{className:"container",children:Object(O.jsx)("header",{className:"jumbotron",children:Object(O.jsx)("h3",{children:this.state.content})})})}}class P extends a.Component{constructor(e){super(e),this.state={redirect:null,userReady:!1,currentUser:{username:""}}}componentDidMount(){const e=j.getCurrentUser();e||this.setState({redirect:"/home"}),this.setState({currentUser:e,userReady:!0})}render(){if(this.state.redirect)return Object(O.jsx)(l.a,{to:this.state.redirect});const{currentUser:e}=this.state;return Object(O.jsx)("div",{className:"container",children:this.state.userReady?Object(O.jsxs)("div",{children:[Object(O.jsx)("header",{className:"jumbotron",children:Object(O.jsxs)("h3",{children:[Object(O.jsx)("strong",{children:e.username})," Profile"]})}),Object(O.jsxs)("p",{children:[Object(O.jsx)("strong",{children:"Token:"})," ",e.accessToken.substring(0,20)," ..."," ",e.accessToken.substr(e.accessToken.length-20)]}),Object(O.jsxs)("p",{children:[Object(O.jsx)("strong",{children:"Id:"})," ",e.id]}),Object(O.jsxs)("p",{children:[Object(O.jsx)("strong",{children:"Email:"})," ",e.email]}),Object(O.jsx)("strong",{children:"Artwalkorities:"}),Object(O.jsx)("ul",{children:e.roles&&e.roles.map(((e,t)=>Object(O.jsx)("li",{children:e},t)))})]}):null})}}class D extends a.Component{constructor(e){super(e),this.state={redirect:null,userReady:!1,currentUser:{username:""}}}componentDidMount(){const e=j.getCurrentUser();e||this.setState({redirect:"/home"}),this.setState({currentUser:e,userReady:!0})}render(){if(this.state.redirect)return Object(O.jsx)(l.a,{to:this.state.redirect});const{currentUser:e}=this.state;return Object(O.jsx)("div",{className:"container",children:this.state.userReady?Object(O.jsx)("div",{children:Object(O.jsxs)("header",{className:"jumbotron",children:[Object(O.jsxs)("h3",{children:["The ",Object(O.jsx)("strong",{children:"login user page"})," of all users."]}),Object(O.jsxs)("p",{children:[Object(O.jsx)("strong",{children:"The current user is "}),e.username]})]})}):null})}}class U extends a.Component{constructor(e){super(e),this.state={content:""}}componentDidMount(){y.getUserBoard().then((e=>{this.setState({content:e.data})}),(e=>{this.setState({content:e.response&&e.response.data&&e.response.data.message||e.message||e.toString()})}))}render(){return Object(O.jsx)("div",{className:"container",children:Object(O.jsx)("header",{className:"jumbotron",children:Object(O.jsx)("h3",{children:this.state.content})})})}}class F extends a.Component{constructor(e){super(e),this.onChangeTitle=this.onChangeTitle.bind(this),this.onChangeDescription=this.onChangeDescription.bind(this),this.saveArtWalk=this.saveArtWalk.bind(this),this.newArtWalk=this.newArtWalk.bind(this),this.state={id:null,title:"",description:"",published:!1,submitted:!1,content:""}}componentDidMount(){y.getModeratorBoard().then((e=>{this.setState({content:e.data})}),(e=>{this.setState({content:e.response&&e.response.data&&e.response.data.message||e.message||e.toString()})}))}onChangeTitle(e){this.setState({title:e.target.value})}onChangeDescription(e){this.setState({description:e.target.value})}saveArtWalk(){var e={title:this.state.title,description:this.state.description};j.create(e).then((e=>{this.setState({id:e.data.id,title:e.data.title,description:e.data.description,published:e.data.published,submitted:!0}),console.log(e.data)})).catch((e=>{console.log(e)}))}newArtWalk(){this.setState({id:null,title:"",description:"",published:!1,submitted:!1})}render(){return Object(O.jsxs)("div",{className:"submit-form",children:[Object(O.jsx)("h3",{children:this.state.content}),this.state.submitted?Object(O.jsxs)("div",{children:[Object(O.jsx)("p",{children:"You submitted successfully!"}),Object(O.jsx)("button",{className:"btn btn-success",onClick:this.newArtWalk,children:"Add"})]}):Object(O.jsxs)("div",{children:[Object(O.jsxs)("div",{className:"form-group",children:[Object(O.jsx)("label",{htmlFor:"title",children:"Title"}),Object(O.jsx)("input",{type:"text",className:"form-control",id:"title",required:!0,value:this.state.title,onChange:this.onChangeTitle,name:"title"})]}),Object(O.jsxs)("div",{className:"form-group",children:[Object(O.jsx)("label",{htmlFor:"description",children:"Description"}),Object(O.jsx)("input",{type:"text",className:"form-control",id:"description",required:!0,value:this.state.description,onChange:this.onChangeDescription,name:"description"})]}),Object(O.jsx)("button",{onClick:this.saveArtWalk,className:"btn btn-success",children:"Submit"})]})]})}}class L extends a.Component{constructor(e){super(e),this.onChangeTitle=this.onChangeTitle.bind(this),this.onChangeDescription=this.onChangeDescription.bind(this),this.saveArtWalk=this.saveArtWalk.bind(this),this.newArtWalk=this.newArtWalk.bind(this),this.state={id:null,title:"",description:"",published:!1,submitted:!1,content:""}}componentDidMount(){y.getAdminBoard().then((e=>{this.setState({content:e.data})}),(e=>{this.setState({content:e.response&&e.response.data&&e.response.data.message||e.message||e.toString()})}))}onChangeTitle(e){this.setState({title:e.target.value})}onChangeDescription(e){this.setState({description:e.target.value})}saveArtWalk(){var e={title:this.state.title,description:this.state.description};j.create(e).then((e=>{this.setState({id:e.data.id,title:e.data.title,description:e.data.description,published:e.data.published,submitted:!0}),console.log(e.data)})).catch((e=>{console.log(e)}))}newArtWalk(){this.setState({id:null,title:"",description:"",published:!1,submitted:!1})}render(){return Object(O.jsxs)("div",{className:"submit-form",children:[Object(O.jsx)("h3",{children:this.state.content}),this.state.submitted?Object(O.jsxs)("div",{children:[Object(O.jsx)("h4",{children:"You submitted successfully!"}),Object(O.jsx)("button",{className:"btn btn-success",onClick:this.newArtWalk,children:"Add"})]}):Object(O.jsxs)("div",{children:[Object(O.jsxs)("div",{className:"form-group",children:[Object(O.jsx)("label",{htmlFor:"title",children:"Title"}),Object(O.jsx)("input",{type:"text",className:"form-control",id:"title",required:!0,value:this.state.title,onChange:this.onChangeTitle,name:"title"})]}),Object(O.jsxs)("div",{className:"form-group",children:[Object(O.jsx)("label",{htmlFor:"description",children:"Description"}),Object(O.jsx)("input",{type:"text",className:"form-control",id:"description",required:!0,value:this.state.description,onChange:this.onChangeDescription,name:"description"})]}),Object(O.jsx)("button",{onClick:this.saveArtWalk,className:"btn btn-success",children:"Submit"})]})]})}}class R extends a.Component{constructor(e){super(e),this.onChangeTitle=this.onChangeTitle.bind(this),this.onChangeDescription=this.onChangeDescription.bind(this),this.saveArtWalk=this.saveArtWalk.bind(this),this.newArtWalk=this.newArtWalk.bind(this),this.state={id:null,title:"",description:"",published:!1,submitted:!1}}onChangeTitle(e){this.setState({title:e.target.value})}onChangeDescription(e){this.setState({description:e.target.value})}saveArtWalk(){var e={title:this.state.title,description:this.state.description};j.create(e).then((e=>{this.setState({id:e.data.id,title:e.data.title,description:e.data.description,published:e.data.published,submitted:!0}),console.log(e.data)})).catch((e=>{console.log(e)}))}newArtWalk(){this.setState({id:null,title:"",description:"",published:!1,submitted:!1})}render(){return Object(O.jsx)("div",{className:"submit-form",children:this.state.submitted?Object(O.jsxs)("div",{children:[Object(O.jsx)("p",{children:"You submitted successfully!"}),Object(O.jsx)("button",{className:"btn btn-success",onClick:this.newArtWalk,children:"Add"})]}):Object(O.jsxs)("div",{children:[Object(O.jsxs)("div",{className:"form-group",children:[Object(O.jsx)("label",{htmlFor:"title",children:"Title"}),Object(O.jsx)("input",{type:"text",className:"form-control",id:"title",required:!0,value:this.state.title,onChange:this.onChangeTitle,name:"title"})]}),Object(O.jsxs)("div",{className:"form-group",children:[Object(O.jsx)("label",{htmlFor:"description",children:"Description"}),Object(O.jsx)("input",{type:"text",className:"form-control",id:"description",required:!0,value:this.state.description,onChange:this.onChangeDescription,name:"description"})]}),Object(O.jsx)("button",{onClick:this.saveArtWalk,className:"btn btn-success",children:"Submit"})]})})}}class B extends a.Component{constructor(e){super(e),this.onChangeTitle=this.onChangeTitle.bind(this),this.onChangeDescription=this.onChangeDescription.bind(this),this.getArtWalk=this.getArtWalk.bind(this),this.updatePublished=this.updatePublished.bind(this),this.updateArtWalk=this.updateArtWalk.bind(this),this.deleteArtWalk=this.deleteArtWalk.bind(this),this.state={currentArtWalk:{id:null,title:"",description:"",published:!1},message:""}}componentDidMount(){this.getArtWalk(this.props.match.params.id)}onChangeTitle(e){const t=e.target.value;this.setState((function(e){return{currentArtWalk:{...e.currentArtWalk,title:t}}}))}onChangeDescription(e){const t=e.target.value;this.setState((e=>({currentArtWalk:{...e.currentArtWalk,description:t}})))}getArtWalk(e){j.get(e).then((e=>{this.setState({currentArtWalk:e.data}),console.log(e.data)})).catch((e=>{console.log(e)}))}updatePublished(e){var t={id:this.state.currentArtWalk.id,title:this.state.currentArtWalk.title,description:this.state.currentArtWalk.description,published:e};j.update(this.state.currentArtWalk.id,t).then((t=>{this.setState((t=>({currentArtWalk:{...t.currentArtWalk,published:e}}))),console.log(t.data)})).catch((e=>{console.log(e)}))}updateArtWalk(){j.update(this.state.currentArtWalk.id,this.state.currentArtWalk).then((e=>{console.log(e.data),this.setState({message:"The artwalk was updated successfully!"})})).catch((e=>{console.log(e)}))}deleteArtWalk(){j.delete(this.state.currentArtWalk.id).then((e=>{console.log(e.data),this.props.history.push("/artwalks")})).catch((e=>{console.log(e)}))}render(){const{currentArtWalk:e}=this.state;return Object(O.jsx)("div",{children:e?Object(O.jsxs)("div",{className:"edit-form",children:[Object(O.jsx)("h4",{children:"ArtWalk"}),Object(O.jsxs)("form",{children:[Object(O.jsxs)("div",{className:"form-group",children:[Object(O.jsx)("label",{htmlFor:"title",children:"Title"}),Object(O.jsx)("input",{type:"text",className:"form-control",id:"title",value:e.title,onChange:this.onChangeTitle})]}),Object(O.jsxs)("div",{className:"form-group",children:[Object(O.jsx)("label",{htmlFor:"description",children:"Description"}),Object(O.jsx)("input",{type:"text",className:"form-control",id:"description",value:e.description,onChange:this.onChangeDescription})]}),Object(O.jsxs)("div",{className:"form-group",children:[Object(O.jsx)("label",{children:Object(O.jsx)("strong",{children:"Status:"})}),e.published?"Published":"Pending"]})]}),e.published?Object(O.jsx)("button",{className:"btn btn-primary mr-2",onClick:()=>this.updatePublished(!1),children:"UnPublish"}):Object(O.jsx)("button",{className:"btn btn-primary mr-2",onClick:()=>this.updatePublished(!0),children:"Publish"}),Object(O.jsx)("button",{className:"btn btn-danger mr-2",onClick:this.deleteArtWalk,children:"Delete"}),Object(O.jsx)("button",{type:"submit",className:"btn btn-success",onClick:this.updateArtWalk,children:"Update"}),Object(O.jsx)("p",{children:this.state.message})]}):Object(O.jsxs)("div",{children:[Object(O.jsx)("br",{}),Object(O.jsx)("p",{children:"Please click on a ArtWalk news post"})]})})}}var M=s(175);class z extends a.Component{constructor(e){super(e),this.onChangeSearchTitle=this.onChangeSearchTitle.bind(this),this.retrieveArtwalks=this.retrieveArtwalks.bind(this),this.refreshList=this.refreshList.bind(this),this.setActiveArtWalk=this.setActiveArtWalk.bind(this),this.removeAllArtWalks=this.removeAllArtWalks.bind(this),this.searchTitle=this.searchTitle.bind(this),this.handlePageChange=this.handlePageChange.bind(this),this.handlePageSizeChange=this.handlePageSizeChange.bind(this),this.state={artwalks:[],currentArtWalk:null,currentIndex:-1,searchTitle:"",page:1,count:0,pageSize:1},this.pageSizes=[1,6,9]}componentDidMount(){this.retrieveArtwalks()}onChangeSearchTitle(e){const t=e.target.value;this.setState({searchTitle:t})}getRequestParams(e,t,s){let a={};return e&&(a.title=e),t&&(a.page=t-1),s&&(a.size=s),a}retrieveArtwalks(){const{searchTitle:e,page:t,pageSize:s}=this.state,a=this.getRequestParams(e,t,s);j.getAll(a).then((e=>{const{artwalks:t,totalPages:s}=e.data;this.setState({artwalks:t,count:s}),console.log(e.data)})).catch((e=>{console.log(e)}))}refreshList(){this.retrieveArtWalks(),this.setState({currentArtWalk:null,currentIndex:-1})}setActiveArtWalk(e,t){this.setState({currentArtWalk:e,currentIndex:t})}removeAllArtWalks(){j.deleteAll().then((e=>{console.log(e.data),this.refreshList()})).catch((e=>{console.log(e)}))}handlePageChange(e,t){this.setState({page:t},(()=>{this.retrieveArtwalks()}))}handlePageSizeChange(e){this.setState({pageSize:e.target.value,page:1},(()=>{this.retrieveArtwalks()}))}searchTitle(){this.setState({currentArtWalk:null,currentIndex:-1}),j.findByTitle(this.state.searchTitle).then((e=>{this.setState({artwalks:e.data}),console.log(e.data)})).catch((e=>{console.log(e)}))}render(){const{searchTitle:e,artwalks:t,currentArtWalk:s,currentIndex:a,page:i,count:n,pageSize:l}=this.state;return Object(O.jsxs)("div",{className:"list row",children:[Object(O.jsx)("div",{className:"col-md-8",children:Object(O.jsxs)("div",{className:"input-group mb-3",children:[Object(O.jsx)("input",{type:"text",className:"form-control",placeholder:"Search by title",value:e,onChange:this.onChangeSearchTitle}),Object(O.jsx)("div",{className:"input-group-append",children:Object(O.jsx)("button",{className:"btn btn-outline-secondary",type:"button",onClick:this.retrieveArtwalks,children:"Search"})})]})}),Object(O.jsxs)("div",{className:"col-md-6",children:[Object(O.jsx)("h4",{children:"ArtWalk post list"}),Object(O.jsxs)("div",{className:"mt-3",children:["Items per Page: ",Object(O.jsx)("select",{onChange:this.handlePageSizeChange,value:l,children:this.pageSizes.map((e=>Object(O.jsx)("option",{value:e,children:e},e)))}),Object(O.jsx)(M.a,{className:"my-3",count:n,page:i,siblingCount:1,boundaryCount:1,variant:"outlined",shape:"rounded",onChange:this.handlePageChange})]}),Object(O.jsx)("ul",{className:"list-group",children:t&&t.map(((e,t)=>Object(O.jsxs)("li",{className:"list-group-item "+(t===a?"active":""),onClick:()=>this.setActiveArtWalk(e,t),children:[e.title,Object(O.jsx)("h4",{children:e.title}),Object(O.jsx)("p",{children:e.createdAt})]},t)))}),Object(O.jsx)("button",{className:"m-3 btn btn-danger",onClick:this.removeAllArtWalks,children:"Remove All"})]}),Object(O.jsx)("div",{className:"col-md-6",children:s?Object(O.jsxs)("div",{children:[Object(O.jsx)("h4",{children:"ArtWalk"}),Object(O.jsxs)("div",{children:[Object(O.jsx)("label",{children:Object(O.jsx)("strong",{children:"Title:"})})," ",s.title]}),Object(O.jsxs)("div",{children:[Object(O.jsx)("label",{children:Object(O.jsx)("strong",{children:"Moment:"})})," ",s.createdAt]}),Object(O.jsxs)("div",{children:[Object(O.jsx)("label",{children:Object(O.jsx)("strong",{children:"Description:"})})," ",s.description]}),Object(O.jsxs)("div",{children:[Object(O.jsx)("label",{children:Object(O.jsx)("strong",{children:"Status:"})})," ",s.published?"Published":"Pending"]}),Object(O.jsx)(r.b,{to:"/artwalks/"+s.id,className:"btn btn-warning",children:"Edit"})]}):Object(O.jsxs)("div",{children:[Object(O.jsx)("br",{}),Object(O.jsx)("p",{children:"Please click on an ArtWalk news post"})]})})]})}}var E=new class{getAll(){return h.get("/artwalks/published")}get(e){return h.get("/artwalks/published/".concat(e))}create(e){return h.post("/artwalks/published",e)}update(e,t){return h.put("/artwalks/published/".concat(e),t)}delete(e){return h.delete("/artwalks/published/".concat(e))}deleteAll(){return h.delete("/artwalks/published")}findByTitle(e){return h.get("/artwalks/published?title=".concat(e))}};class q extends a.Component{constructor(e){super(e),this.onChangeSearchTitle=this.onChangeSearchTitle.bind(this),this.retrieveArtwalks=this.retrieveArtwalks.bind(this),this.refreshList=this.refreshList.bind(this),this.setActiveArtWalk=this.setActiveArtWalk.bind(this),this.removeAllArtWalks=this.removeAllArtWalks.bind(this),this.searchTitle=this.searchTitle.bind(this),this.handlePageChange=this.handlePageChange.bind(this),this.handlePageSizeChange=this.handlePageSizeChange.bind(this),this.state={artwalks:[],currentArtWalk:null,currentIndex:-1,searchTitle:"",page:1,count:0,pageSize:1},this.pageSizes=[1,6,9]}componentDidMount(){this.retrieveArtwalks()}onChangeSearchTitle(e){const t=e.target.value;this.setState({searchTitle:t})}getRequestParams(e,t,s){let a={};return e&&(a.title=e),t&&(a.page=t-1),s&&(a.size=s),a}retrieveArtwalks(){const{searchTitle:e,page:t,pageSize:s}=this.state,a=this.getRequestParams(e,t,s);E.getAll(a).then((e=>{const{artwalks:t,totalPages:s}=e.data;this.setState({artwalks:t,count:s}),console.log(e.data)})).catch((e=>{console.log(e)}))}refreshList(){this.retrieveArtWalks(),this.setState({currentArtWalk:null,currentIndex:-1})}setActiveArtWalk(e,t){this.setState({currentArtWalk:e,currentIndex:t})}removeAllArtWalks(){E.deleteAll().then((e=>{console.log(e.data),this.refreshList()})).catch((e=>{console.log(e)}))}handlePageChange(e,t){this.setState({page:t},(()=>{this.retrieveArtwalks()}))}handlePageSizeChange(e){this.setState({pageSize:e.target.value,page:1},(()=>{this.retrieveArtwalks()}))}searchTitle(){this.setState({currentArtWalk:null,currentIndex:-1}),E.findByTitle(this.state.searchTitle).then((e=>{this.setState({artwalks:e.data}),console.log(e.data)})).catch((e=>{console.log(e)}))}render(){const{searchTitle:e,artwalks:t,currentArtWalk:s,currentIndex:a}=this.state;return Object(O.jsxs)("div",{className:"list row",children:[Object(O.jsx)("div",{className:"col-md-8",children:Object(O.jsxs)("div",{className:"input-group mb-3",children:[Object(O.jsx)("input",{type:"text",className:"form-control",placeholder:"Search by title",value:e,onChange:this.onChangeSearchTitle}),Object(O.jsx)("div",{className:"input-group-append",children:Object(O.jsx)("button",{className:"btn btn-outline-secondary",type:"button",onClick:this.retrieveArtwalks,children:"Search"})})]})}),Object(O.jsxs)("div",{className:"col-md-6",children:[Object(O.jsx)("h4",{children:"ArtWalk post"}),Object(O.jsx)("ul",{className:"list-group",children:t&&t.map(((e,t)=>Object(O.jsx)("li",{className:"list-group-item "+(t===a?"active":""),ref:this.simulateClick,onClick:()=>this.setActiveArtWalk(e,t),children:Object(O.jsx)("h4",{children:e.title})},t)))})]}),Object(O.jsx)("div",{className:"col-md-6",children:s?Object(O.jsxs)("div",{children:[Object(O.jsx)("h4",{children:"ArtWalk"}),Object(O.jsxs)("div",{children:[Object(O.jsx)("label",{children:Object(O.jsx)("strong",{children:"Title:"})})," ",s.title]}),Object(O.jsxs)("div",{children:[Object(O.jsx)("label",{children:Object(O.jsx)("strong",{children:"Description:"})})," ",s.description]})]}):Object(O.jsx)("div",{})})]})}}var _=o.a.create({baseURL:"http://localhost:8080/",headers:{"Content-type":"application/json"}});var J=new class{upload(e,t){let s=new FormData;return s.append("file",e),_.post("/upload",s,{headers:{"Content-Type":"multipart/form-data"},onUploadProgress:t})}getFiles(){return _.get("/files")}};class Y extends a.Component{constructor(e){super(e),this.selectFiles=this.selectFiles.bind(this),this.upload=this.upload.bind(this),this.uploadImages=this.uploadImages.bind(this),this.state={selectedFiles:void 0,previewImages:[],progressInfos:[],message:[],imageInfos:[]}}componentDidMount(){J.getFiles().then((e=>{this.setState({imageInfos:e.data})}))}selectFiles(e){let t=[];for(let s=0;s<e.target.files.length;s++)t.push(URL.createObjectURL(e.target.files[s]));this.setState({progressInfos:[],message:[],selectedFiles:e.target.files,previewImages:t})}upload(e,t){let s=[...this.state.progressInfos];J.upload(t,(t=>{s[e].percentage=Math.round(100*t.loaded/t.total),this.setState({progressInfos:s})})).then((()=>(this.setState((e=>({message:[...e.message,"Uploaded the image successfully: "+t.name]}))),J.getFiles()))).then((e=>{this.setState({imageInfos:e.data})})).catch((()=>{s[e].percentage=0,this.setState((e=>{let a=[...e.message,"Could not upload the image: "+t.name];return{progressInfos:s,message:a}}))}))}uploadImages(){const e=this.state.selectedFiles;let t=[];for(let s=0;s<e.length;s++)t.push({percentage:0,fileName:e[s].name});this.setState({progressInfos:t,message:[]},(()=>{for(let t=0;t<e.length;t++)this.upload(t,e[t])}))}render(){const{selectedFiles:e,previewImages:t,progressInfos:s,message:a,imageInfos:i}=this.state;return Object(O.jsxs)("div",{className:"container",children:[Object(O.jsxs)("div",{className:"row",children:[Object(O.jsx)("div",{className:"col-8",children:Object(O.jsx)("label",{className:"btn btn-default p-0",children:Object(O.jsx)("input",{type:"file",multiple:!0,accept:"image/*",onChange:this.selectFiles})})}),Object(O.jsx)("div",{className:"col-4",children:Object(O.jsx)("button",{className:"btn btn-success btn-sm",disabled:!e,onClick:this.uploadImages,children:"Upload"})})]}),s&&s.map(((e,t)=>Object(O.jsxs)("div",{className:"mb-2",children:[Object(O.jsx)("span",{children:e.fileName}),Object(O.jsx)("div",{className:"progress",children:Object(O.jsxs)("div",{className:"progress-bar progress-bar-info",role:"progressbar","aria-valuenow":e.percentage,"aria-valuemin":"0","aria-valuemax":"100",style:{width:e.percentage+"%"},children:[e.percentage,"%"]})})]},t))),t&&Object(O.jsx)("div",{children:t.map(((e,t)=>Object(O.jsx)("img",{className:"preview",src:e,alt:"image-"+t},t)))}),a.length>0&&Object(O.jsx)("div",{className:"alert alert-secondary mt-2",role:"alert",children:Object(O.jsx)("ul",{children:a.map(((e,t)=>Object(O.jsx)("li",{children:e},t)))})}),Object(O.jsxs)("div",{className:"card mt-3",children:[Object(O.jsx)("div",{className:"card-header",children:"List of Files"}),Object(O.jsx)("ul",{className:"list-group list-group-flush",children:i&&i.map(((e,t)=>Object(O.jsxs)("li",{className:"list-group-item",children:[Object(O.jsx)("p",{children:Object(O.jsx)("a",{href:e.url,children:e.name})}),Object(O.jsx)("img",{src:e.url,alt:e.name,height:"80px"})]},t)))})]})]})}}class $ extends a.Component{constructor(e){super(e),this.selectFiles=this.selectFiles.bind(this),this.upload=this.upload.bind(this),this.Images=this.Images.bind(this),this.state={selectedFiles:void 0,previewImages:[],progressInfos:[],message:[],imageInfos:[]}}componentDidMount(){J.getFiles().then((e=>{this.setState({imageInfos:e.data})}))}selectFiles(e){let t=[];for(let s=0;s<e.target.files.length;s++)t.push(URL.createObjectURL(e.target.files[s]));this.setState({progressInfos:[],message:[],selectedFiles:e.target.files,previewImages:t})}upload(e,t){let s=[...this.state.progressInfos];J.upload(t,(t=>{s[e].percentage=Math.round(100*t.loaded/t.total),this.setState({progressInfos:s})})).then((()=>(this.setState((e=>({message:[...e.message,"Uploaded the image successfully: "+t.name]}))),J.getFiles()))).then((e=>{this.setState({imageInfos:e.data})})).catch((()=>{s[e].percentage=0,this.setState((e=>{let a=[...e.message,"Could not upload the image: "+t.name];return{progressInfos:s,message:a}}))}))}Images(){const e=this.state.selectedFiles;let t=[];for(let s=0;s<e.length;s++)t.push({percentage:0,fileName:e[s].name});this.setState({progressInfos:t,message:[]},(()=>{for(let t=0;t<e.length;t++)this.upload(t,e[t])}))}render(){const{previewImages:e,progressInfos:t,message:s,imageInfos:a}=this.state;return Object(O.jsxs)("div",{className:"container",children:[Object(O.jsx)("div",{className:"row",children:Object(O.jsx)("div",{className:"col-8"})}),t&&t.map(((e,t)=>Object(O.jsxs)("div",{className:"mb-2",children:[Object(O.jsx)("span",{children:e.fileName}),Object(O.jsx)("div",{className:"progress",children:Object(O.jsxs)("div",{className:"progress-bar progress-bar-info",role:"progressbar","aria-valuenow":e.percentage,"aria-valuemin":"0","aria-valuemax":"100",style:{width:e.percentage+"%"},children:[e.percentage,"%"]})})]},t))),e&&Object(O.jsx)("div",{children:e.map(((e,t)=>Object(O.jsx)("img",{className:"preview",src:e,alt:"image-"+t},t)))}),s.length>0&&Object(O.jsx)("div",{className:"alert alert-secondary mt-2",role:"alert",children:Object(O.jsx)("ul",{children:s.map(((e,t)=>Object(O.jsx)("li",{children:e},t)))})}),Object(O.jsxs)("div",{className:"card mt-3",children:[Object(O.jsx)("div",{className:"card-header",children:"List of Files"}),Object(O.jsx)("ul",{className:"list-group list-group-flush",children:a&&a.map(((e,t)=>Object(O.jsxs)("li",{className:"list-group-item",children:[Object(O.jsx)("p",{children:Object(O.jsx)("a",{href:e.url,children:e.name})}),Object(O.jsx)("img",{src:e.url,alt:e.name,height:"80px"})]},t)))})]})]})}}const G=s(157)().format("llll");class H extends a.Component{constructor(e){super(e),this.logOut=this.logOut.bind(this),this.state={showModeratorBoard:!1,showAdminBoard:!1,currentUser:void 0}}componentDidMount(){const e=j.getCurrentUser();e&&this.setState({currentUser:e,showModeratorBoard:e.roles.includes("ROLE_MODERATOR"),showAdminBoard:e.roles.includes("ROLE_ADMIN")})}logOut(){j.logout()}render(){const{currentUser:e,showModeratorBoard:t,showAdminBoard:s}=this.state;return Object(O.jsxs)("div",{children:[Object(O.jsx)("nav",{className:"navbar navbar-dark bg-dark",children:Object(O.jsxs)("div",{className:"navbar-nav ",children:[Object(O.jsx)(r.b,{to:"/",className:"navbar-brand",children:"ArtWalk"}),Object(O.jsx)("li",{className:"nav-item",children:Object(O.jsx)(r.b,{to:"/home",className:"nav-link",children:"Public page"})}),t&&Object(O.jsx)("li",{className:"nav-item",children:Object(O.jsx)(r.b,{to:"/mod",className:"nav-link",children:"Moderator"})}),s&&Object(O.jsx)("li",{className:"nav-item",children:Object(O.jsx)(r.b,{to:"/admin",className:"nav-link",children:"Administrator"})}),e&&Object(O.jsx)("li",{className:"nav-item",children:Object(O.jsx)(r.b,{to:"/user",className:"nav-link",children:"Login page"})}),Object(O.jsx)("li",{className:"nav-item",children:Object(O.jsx)(r.b,{to:"/add",className:"nav-link",children:"Add post"})}),Object(O.jsx)("li",{className:"nav-item",children:Object(O.jsx)(r.b,{to:"/Artwalks",className:"nav-link",children:"All post"})}),Object(O.jsx)("li",{className:"nav-item",children:Object(O.jsx)(r.b,{to:"/artwalks/published",className:"nav-link",children:"Published post"})}),Object(O.jsx)("li",{className:"nav-item",children:Object(O.jsx)(r.b,{to:"/ImgUpload",className:"nav-link",children:"Add Image"})}),Object(O.jsx)("li",{className:"nav-item",children:Object(O.jsx)(r.b,{to:"/Images",className:"nav-link",children:"Images"})})]})}),Object(O.jsx)("div",{className:"sidebar-nav ml-auto",children:e?Object(O.jsxs)("div",{className:"navbar-nav ml-auto",children:[Object(O.jsx)("li",{className:"nav-item",children:Object(O.jsx)(r.b,{to:"/profile",className:"nav-link",children:e.username})}),Object(O.jsx)("li",{className:"nav-item",children:Object(O.jsx)("a",{href:"/login",className:"nav-link",onClick:this.logOut,children:"LogOut"})})]}):Object(O.jsxs)("div",{className:"navbar-nav ml-auto",children:[Object(O.jsx)("li",{className:"nav-item",children:Object(O.jsx)(r.b,{to:"/login",className:"nav-link",children:"Login"})}),Object(O.jsx)("li",{className:"nav-item",children:Object(O.jsx)(r.b,{to:"/register",className:"nav-link",children:"Sign Up"})}),Object(O.jsx)("li",{className:"nav-item",children:Object(O.jsxs)("p",{style:{color:"white",backgroundColor:"purple",padding:"10px",borderRadius:"2%",fontFamily:"Arial"},children:[G," "]})})]})}),Object(O.jsx)("div",{className:"container mt-3",children:Object(O.jsxs)(l.d,{children:[Object(O.jsx)(l.b,{exact:!0,path:["/","/artwalks"],component:z}),Object(O.jsx)(l.b,{exact:!0,path:["/","/ArtWalks/published"],component:q}),Object(O.jsx)(l.b,{exact:!0,path:"/add",component:R}),Object(O.jsx)(l.b,{path:"/artwalks/:id",component:B}),Object(O.jsx)(l.b,{exact:!0,path:"/ImgUpload",component:Y}),Object(O.jsx)(l.b,{exact:!0,path:"/Images",component:$}),Object(O.jsx)(l.b,{exact:!0,path:["/","/home"],component:I}),Object(O.jsx)(l.b,{exact:!0,path:"/login",component:k}),Object(O.jsx)(l.b,{exact:!0,path:"/register",component:S}),Object(O.jsx)(l.b,{exact:!0,path:"/profile",component:P}),Object(O.jsx)(l.b,{exact:!0,path:"/user",component:D}),Object(O.jsx)(l.b,{path:"/user",component:U}),Object(O.jsx)(l.b,{path:"/mod",component:F}),Object(O.jsx)(l.b,{path:"/admin",component:L}),Object(O.jsx)(l.b,{path:"*",component:Q})]})})]})}}var K=H;function Q(){return Object(O.jsx)("div",{className:"container",children:Object(O.jsx)("h1",{children:"Error 404! - This page does not exits!"})})}Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var V=e=>{e&&e instanceof Function&&s.e(3).then(s.bind(null,176)).then((t=>{let{getCLS:s,getFID:a,getFCP:i,getLCP:n,getTTFB:r}=t;s(e),a(e),i(e),n(e),r(e)}))};n.a.render(Object(O.jsx)(r.a,{children:Object(O.jsx)(K,{})}),document.getElementById("root")),V(),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((e=>{e.unregister()})).catch((e=>{console.error(e.message)}))},61:function(e,t,s){}},[[159,1,2]]]);
//# sourceMappingURL=main.780f4c19.chunk.js.map