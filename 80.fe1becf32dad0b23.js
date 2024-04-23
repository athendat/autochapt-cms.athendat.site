"use strict";(self.webpackChunkfuse=self.webpackChunkfuse||[]).push([[80],{2080:(Y,b,a)=>{a.r(b),a.d(b,{default:()=>Q});var e=a(4438),d=a(8834),s=a(2102),u=a(9213),h=a(9042),c=a(5351),x=a(5416),v=a(177),y=a(33),p=a(9079),C=a(6601),f=a(4794),M=a(467),r=a(9417),F=a(450),k=a(9768);const _=o=>({"cursor-not-allowed":o});function j(o,l){1&o&&(e.j41(0,"h2",2),e.EFF(1,"Agregar miembro"),e.k0s())}function T(o,l){1&o&&(e.j41(0,"h2",2),e.EFF(1,"Editar miembro"),e.k0s())}function E(o,l){1&o&&(e.j41(0,"mat-error"),e.EFF(1," El nombre del cargo es obligatorio. "),e.k0s())}function R(o,l){1&o&&(e.j41(0,"mat-error"),e.EFF(1," El nombre del cargo debe contener entre 3 y 255 caracteres. "),e.k0s())}function $(o,l){1&o&&(e.j41(0,"mat-error"),e.EFF(1," El nombre del cargo es obligatorio. "),e.k0s())}function w(o,l){1&o&&(e.j41(0,"mat-error"),e.EFF(1," El nombre del cargo debe contener entre 3 y 255 caracteres. "),e.k0s())}function G(o,l){if(1&o){const t=e.RV6();e.j41(0,"button",15),e.bIt("click",function(){e.eBV(t);const n=e.XpG();return e.Njj(n.updateMember())}),e.EFF(1," Actualizar "),e.k0s()}if(2&o){const t=e.XpG();e.Y8G("color","primary")("disabled",t.memberForm.invalid)("ngClass",e.eq3(3,_,t.memberForm.invalid))}}function D(o,l){if(1&o){const t=e.RV6();e.j41(0,"button",15),e.bIt("click",function(){e.eBV(t);const n=e.XpG();return e.Njj(n.createMember())}),e.EFF(1," Agregar "),e.k0s()}if(2&o){const t=e.XpG();e.Y8G("color","primary")("disabled",t.memberForm.invalid)("ngClass",e.eq3(3,_,t.memberForm.invalid))}}let X=(()=>{class o{#e=(0,e.WQX)(e.gRc);#t=(0,e.WQX)(e.abz);#n=(0,e.WQX)(c.CP);#i=(0,e.WQX)(r.ok);#o=(0,e.WQX)(C.G);#a=(0,e.WQX)(x.UG);#r=(0,e.WQX)(k.h);constructor(t){this.data=t}ngOnInit(){this.memberForm=this.#i.group({$id:new r.MJ(null),active:new r.MJ(!0,[r.k0.required]),name:new r.MJ(null,[r.k0.required,r.k0.maxLength(255)]),position:new r.MJ(null,[r.k0.required,r.k0.maxLength(255)])}),"edit"===this.data.dialogMode&&this.memberForm.patchValue(this.data.member)}createMember(){var t=this;return(0,M.A)(function*(){const i=t.memberForm.getRawValue();delete i.$id,t.#o.open({title:"Crear Miembro",message:"\xbfEsta seguro que todos los datos son correctos?",icon:{show:!0,name:"heroicons_outline:question-mark-circle",color:"info"},actions:{confirm:{label:"Aceptar",color:"primary"}}}).afterClosed().pipe((0,p.pQ)(t.#t)).subscribe(m=>{"confirmed"===m&&t.#r.create(i).then(()=>{t.#a.openFromComponent(f.p,{panelClass:["p-0","bg-transparent"],horizontalPosition:"end",verticalPosition:"bottom",duration:5e3,data:{message:"Miembro creado correctamente",title:"Confirmaci\xf3n",type:"success",appearance:"fill"}}),t.#r.loadAll(),t.#e.markForCheck(),t.#n.close()})})})()}updateMember(){const t=this.memberForm.getRawValue();this.#o.open({title:"Actualizar Miembro",message:"\xbfEsta seguro que todos los datos son correctos?",icon:{show:!0,name:"heroicons_outline:question-mark-circle",color:"info"},actions:{confirm:{label:"Aceptar",color:"primary"}}}).afterClosed().pipe((0,p.pQ)(this.#t)).subscribe(n=>{"confirmed"===n&&this.#r.update(t).then(m=>{this.#a.openFromComponent(f.p,{panelClass:["p-0","bg-transparent"],horizontalPosition:"end",verticalPosition:"bottom",duration:5e3,data:{message:"Miembro actualizado correctamente",title:"Confirmaci\xf3n",type:"success",appearance:"fill"}}),this.#e.markForCheck(),this.#n.close()})})}static#l=this.\u0275fac=function(i){return new(i||o)(e.rXU(c.Vh))};static#m=this.\u0275cmp=e.VBU({type:o,selectors:[["team-member-dialog"]],standalone:!0,features:[e.aNF],decls:30,vars:26,consts:[[1,"relative","flex","flex-col","w-full","h-full"],[1,"flex","flex-col","items-center","px-8","pt-4","space-y-1","text-center","border-b","sm:items-start","sm:mt-0","sm:pr-8","sm:text-left"],[1,"text-2xl","text-gray-400"],[1,"flex","flex-col","w-full","px-8","py-6","sm:py-8"],[1,"w-full","overflow-hidden"],[1,"flex"],[1,"flex","flex-col","w-full","space-y-4",3,"formGroup","autocomplete"],[1,"fuse-mat-dense",3,"subscriptSizing"],["matInput","","required","",3,"type","formControlName","minlength","maxlength","placeholder"],[1,"flex","flex-col","sm:col-span-2"],[1,"font-medium"],[1,"mt-1","sm:mt-3",3,"formControlName","color"],[1,"flex","items-center","justify-center","px-6","py-4","space-x-3","sm:justify-end","bg-gray-50","dark:bg-black","dark:bg-opacity-10"],["mat-stroked-button","",3,"matDialogClose"],["mat-flat-button","",3,"color","disabled","ngClass"],["mat-flat-button","",3,"click","color","disabled","ngClass"]],template:function(i,n){1&i&&(e.j41(0,"div",0)(1,"div",1),e.DNE(2,j,2,0,"h2",2)(3,T,2,0,"h2",2),e.k0s(),e.j41(4,"div",3)(5,"div",4)(6,"div",5)(7,"form",6)(8,"mat-form-field",7)(9,"mat-label"),e.EFF(10,"Nombre"),e.k0s(),e.nrm(11,"input",8),e.DNE(12,E,2,0,"mat-error")(13,R,2,0,"mat-error"),e.k0s(),e.j41(14,"mat-form-field",7)(15,"mat-label"),e.EFF(16,"Cargo"),e.k0s(),e.nrm(17,"input",8),e.DNE(18,$,2,0,"mat-error")(19,w,2,0,"mat-error"),e.k0s(),e.j41(20,"div",9)(21,"span",10),e.EFF(22,"Estado"),e.k0s(),e.j41(23,"mat-slide-toggle",11),e.EFF(24),e.k0s()()()()()(),e.j41(25,"div",12)(26,"button",13),e.EFF(27," Cancelar "),e.k0s(),e.DNE(28,G,2,5,"button",14)(29,D,2,5,"button",14),e.k0s()()),2&i&&(e.R7$(2),e.vxM(2,"create"===n.data.dialogMode?2:-1),e.R7$(),e.vxM(3,"edit"===n.data.dialogMode?3:-1),e.R7$(4),e.Y8G("formGroup",n.memberForm)("autocomplete","off"),e.R7$(),e.Y8G("subscriptSizing","dynamic"),e.R7$(3),e.Y8G("type","text")("formControlName","name")("minlength",3)("maxlength",255)("placeholder","Nombre del cargo"),e.R7$(),e.vxM(12,n.memberForm.get("name").hasError("required")?12:-1),e.R7$(),e.vxM(13,n.memberForm.get("name").hasError("maxlength")||n.memberForm.get("name").hasError("minlength")?13:-1),e.R7$(),e.Y8G("subscriptSizing","dynamic"),e.R7$(3),e.Y8G("type","text")("formControlName","position")("minlength",3)("maxlength",255)("placeholder","Nombre del cargo"),e.R7$(),e.vxM(18,n.memberForm.get("position").hasError("required")?18:-1),e.R7$(),e.vxM(19,n.memberForm.get("position").hasError("maxlength")||n.memberForm.get("position").hasError("minlength")?19:-1),e.R7$(4),e.Y8G("formControlName","active")("color","primary"),e.R7$(),e.SpI(" ",!0===n.memberForm.get("active").value?"Activo":"Inactivo"," "),e.R7$(2),e.Y8G("matDialogClose","cancelled"),e.R7$(2),e.vxM(28,"edit"===n.data.dialogMode?28:-1),e.R7$(),e.vxM(29,"create"===n.data.dialogMode?29:-1))},dependencies:[d.Hl,d.$z,c.hM,c.tx,s.RG,s.rl,s.nJ,s.TL,u.m_,h.fS,h.fg,F.mV,F.sG,v.YU,r.X1,r.qT,r.me,r.BC,r.cb,r.YS,r.xh,r.tU,r.j4,r.JD],encapsulation:2,changeDetection:0})}return o})();var g=a(3587);const I=(o,l)=>l.$id;function N(o,l){if(1&o){const t=e.RV6();e.j41(0,"div",28),e.bIt("click",function(){e.eBV(t);const n=e.XpG().$implicit,m=e.XpG(2);return e.Njj(m.deleteMemberPhoto(n))}),e.nrm(1,"img",29),e.k0s()}if(2&o){const t=e.XpG().$implicit;e.R7$(),e.Y8G("ngSrc","/c_scale,h_128,w_128/"+t.photo)}}function z(o,l){if(1&o){const t=e.RV6();e.j41(0,"div",30),e.bIt("click",function(){e.eBV(t);const n=e.XpG().$implicit,m=e.XpG(2);return e.Njj(m.openCloudinaryWidget(n))}),e.nrm(1,"mat-icon",31),e.k0s()}2&o&&(e.R7$(),e.Y8G("svgIcon","heroicons_outline:camera"))}function W(o,l){if(1&o){const t=e.RV6();e.j41(0,"div",16)(1,"div",17),e.DNE(2,N,2,1,"div",18)(3,z,2,1),e.j41(4,"div",19),e.EFF(5),e.k0s(),e.j41(6,"div",20),e.EFF(7),e.k0s()(),e.j41(8,"div",21)(9,"a",22),e.bIt("click",function(){const n=e.eBV(t).$implicit,m=e.XpG(2);return e.Njj(m.deleteMember(n.$id))}),e.nrm(10,"mat-icon",23),e.j41(11,"span",24),e.EFF(12,"Eliminar"),e.k0s()(),e.j41(13,"a",25),e.bIt("click",function(){const n=e.eBV(t).$implicit,m=e.XpG(2);return e.Njj(m.openMemberDialog(n,"edit"))}),e.nrm(14,"mat-icon",26),e.j41(15,"span",27),e.EFF(16,"Editar"),e.k0s()()()()}if(2&o){const t=l.$implicit;e.R7$(2),e.vxM(2,t.photo?2:3),e.R7$(3),e.JRh(t.name),e.R7$(2),e.JRh(t.position),e.R7$(3),e.Y8G("svgIcon","heroicons_outline:trash"),e.R7$(4),e.Y8G("svgIcon","heroicons_outline:pencil")}}function A(o,l){if(1&o&&(e.j41(0,"div",15),e.Z7z(1,W,17,5,"div",16,I),e.k0s()),2&o){const t=e.XpG();e.R7$(),e.Dyx(t.store.team())}}function V(o,l){1&o&&(e.j41(0,"div",32),e.EFF(1," \xa1No se ha creado creado ning\xfan miembro a\xfan!' "),e.k0s())}const Q=[{path:"",component:(()=>{class o{constructor(){this.store=(0,e.WQX)(k.h),this.selectedMember=null,this.#e=(0,e.WQX)(e.gRc),this.#t=(0,e.WQX)(e.abz),this.#n=(0,e.WQX)(c.bZ),this.#i=(0,e.WQX)(C.G),this.#o=(0,e.WQX)(x.UG)}#e;#t;#n;#i;#o;ngOnInit(){this.myWidget=cloudinary.createUploadWidget({cloudName:g.c.cloudName,uploadPreset:g.c.uploadPreset,cropping:!0,multiple:!1,folder:g.c.cloudinaryFolder,tags:["employee","team"],maxImageFileSize:2e6,maxImageWidth:500},(t,i)=>{!t&&i&&"success"===i.event&&(this.selectedMember.photo=i.info.public_id,this.updateMember(this.selectedMember))})}openCloudinaryWidget(t){this.selectedMember=t,this.myWidget.open()}openMemberDialog(t=null,i="create"){this.#n.open(X,{data:{member:t,dialogMode:i},disableClose:!0,panelClass:"ath-dialog-panel"})}updateMember(t){this.store.update(t).then(()=>{this.#o.openFromComponent(f.p,{panelClass:["p-0","bg-transparent"],horizontalPosition:"end",verticalPosition:"bottom",duration:5e3,data:{message:"Miembro actualizado correctamente",title:"Confirmaci\xf3n",type:"success",appearance:"fill"}})}),this.store.loadAll(),this.#e.markForCheck()}deleteMember(t){this.#i.open({title:"Eliminar miembro del equipo",message:"\xbfEsta seguro que desea eliminar este miembro?",icon:{show:!0,name:"heroicons_outline:question-mark-circle",color:"info"},actions:{confirm:{label:"Aceptar",color:"primary"}}}).afterClosed().pipe((0,p.pQ)(this.#t)).subscribe(n=>{"confirmed"===n&&this.store.delete(t).then(()=>{this.#o.openFromComponent(f.p,{panelClass:["p-0","bg-transparent"],horizontalPosition:"end",verticalPosition:"bottom",duration:5e3,data:{message:"Miembro eliminado correctamente",title:"Confirmaci\xf3n",type:"success",appearance:"fill"}}),this.store.loadAll(),this.#e.markForCheck()})})}deleteMemberPhoto(t){const i={...t,photo:null};this.#i.open({title:"Eliminar foto del miembro",message:"\xbfEsta seguro que desea eliminar esta foto?",icon:{show:!0,name:"heroicons_outline:question-mark-circle",color:"info"},actions:{confirm:{label:"Aceptar",color:"primary"}}}).afterClosed().pipe((0,p.pQ)(this.#t)).subscribe(m=>{"confirmed"===m&&this.updateMember(i),this.store.loadAll(),this.#e.markForCheck()})}static#a=this.\u0275fac=function(i){return new(i||o)};static#r=this.\u0275cmp=e.VBU({type:o,selectors:[["app-team"]],standalone:!0,features:[e.aNF],decls:22,vars:3,consts:[["cdkScrollable","",1,"absolute","inset-0","flex","flex-col","flex-auto","min-w-0","overflow-x-auto","overflow-y-auto","bg-card","dark:bg-transparent","lg:overflow-x-hidden"],[1,"relative","flex","flex-col","px-6","py-8","border-b","lg:flex-row","flex-0","lg:items-center","lg:justify-between","md:px-8"],[1,"flex-1","min-w-0"],[1,"flex","flex-wrap","items-center","font-medium"],["routerLink","/home",1,"whitespace-nowrap","text-primary-500"],[1,"flex","items-center","ml-1","whitespace-nowrap"],[1,"icon-size-3","text-secondary",3,"svgIcon"],[1,"ml-1","text-primary-500"],[1,"mt-2"],[1,"text-3xl","font-extrabold","leading-7","tracking-tight","truncate","md:text-4xl","sm:leading-10"],[1,"flex","items-center","gap-2","mt-6","shrink-0","lg:mt-0","lg:ml-4"],["mat-raised-button","",1,"mt-4","text-white","sm:mt-0","bg-gradient-to-r","from-primary-500","to-primary-600","hover:to-primary-900","hover:shadow-lg",3,"click"],[3,"svgIcon"],[1,"hidden","ml-2","mr-1","text-white","sm:block"],[1,"flex","items-center","justify-center","flex-auto","p-6","sm:p-8"],[1,"flex","flex-wrap","items-start","w-full","gap-5","-m-4"],[1,"flex","flex-col","items-center","flex-auto","overflow-hidden","shadow","bg-card","rounded-2xl","max-w-72"],[1,"flex","flex-col","flex-auto","w-full","p-8","text-center"],[1,"w-32","h-32","mx-auto","overflow-hidden","rounded-full","cursor-pointer"],[1,"mt-6","font-medium"],[1,"text-secondary"],[1,"flex","items-center","w-full","border-t","divide-x"],[1,"flex","items-center","justify-center","flex-auto","py-4","cursor-pointer","transitions","group","hover:bg-red-500",3,"click"],[1,"transitions","icon-size-5","text-hint","group-hover:text-white",3,"svgIcon"],[1,"ml-2","transitions","group-hover:text-white"],[1,"flex","items-center","justify-center","flex-auto","py-4","cursor-pointer","transitions","hover:bg-hover",3,"click"],[1,"transitions","icon-size-5","text-hint",3,"svgIcon"],[1,"ml-2","transitions"],[1,"w-32","h-32","mx-auto","overflow-hidden","rounded-full","cursor-pointer",3,"click"],["height","128","width","128","placeholder","","priority","",1,"object-cover","w-full","h-full",3,"ngSrc"],[1,"flex","items-center","justify-center","w-32","h-32","p-5","mx-auto","overflow-hidden","rounded-full","cursor-pointer","bg-primary-100","dark:bg-gray-600",3,"click"],[1,"icon-size-10","text-primary-500","dark:text-primary-300",3,"svgIcon"],[1,"w-full","p-8","text-4xl","font-semibold","tracking-tight","text-center","sm:p-16"]],template:function(i,n){1&i&&(e.j41(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div")(5,"a",4),e.EFF(6,"Inicio"),e.k0s()(),e.j41(7,"div",5),e.nrm(8,"mat-icon",6),e.j41(9,"a",7),e.EFF(10,"Equipo"),e.k0s()()(),e.j41(11,"div",8)(12,"h2",9),e.EFF(13," Miembros del equipo "),e.k0s()()(),e.j41(14,"div",10)(15,"button",11),e.bIt("click",function(){return n.openMemberDialog()}),e.nrm(16,"mat-icon",12),e.j41(17,"span",13),e.EFF(18,"Agregar"),e.k0s()()()(),e.j41(19,"div",14),e.DNE(20,A,3,0,"div",15)(21,V,2,0),e.k0s()()),2&i&&(e.R7$(8),e.Y8G("svgIcon","heroicons_outline:chevron-right"),e.R7$(8),e.Y8G("svgIcon","heroicons_outline:plus"),e.R7$(4),e.vxM(20,n.store.team().length>0?20:21))},dependencies:[d.Hl,d.$z,s.RG,u.m_,u.An,h.fS,v.kt,y.Wk],encapsulation:2,changeDetection:0})}return o})()}]}}]);