import{h as o,i as t}from"./chunk-B2AKHGYH.js";import{a as r}from"./chunk-TCPYXQGZ.js";var s={delete:"delete",clear_all:"clear_all",email:"email",sms:"sms",power_settings_new:"power_settings_new",announcement:"announcement",messages:"messages",language:"language",theme:"theme",account_circle:"account_circle",badge:"badge",content_copy:"content_copy",edit:"edit",print:"print",printer:"printer",menu_vert:"more_vert",add:"add",show:"show",hide:"hide",label:"label",visibility:"visibility",visibility_off:"visibility_off",grid_view:"grid_view",lab_profile:"lab_profile",person:"person",bookmarks:"bookmarks",qr:"qr_code",search:"search",filter_list:"filter_list",filter_alt:"filter_alt",import_export:"import_export",science:"science",biotech:"biotech",info:"info",summarize:"summarize",group:"group",groups:"groups",qr_code_scanner:"qr_code_scanner",save:"save",supervisor_account:"supervisor_account",compare_arrows:"compare_arrows",people_outline:"people_outline",local_offer:"local_offer",type_specimen:"type_specimen",notifications:"notifications"};var n=class{static default(){return new t().setType(o.Item)}static divider(){return new t().setType(o.Divider)}static menu(e){return new t().setIcon(s.menu_vert).setSubItems(e)}static edit(e){return new t().setTitle(r.edit).setIcon(s.edit).setClickFn(e)}static clone(e){return new t().setTitle(r.clone).setIcon(s.content_copy).setClickFn(e)}static add(e){return new t().setTitle(r.add).setIcon(s.add).setClickFn(e)}static search(e="search"){return new t().setTitle(r.search).setIcon(s.search).setTooltip(r.search).setClickFn(e)}static filter(e="filter"){return new t().setTitle(r.filter).setIcon(s.filter_list).setTooltip(r.filter).setClickFn(e)}static addGroup(e){return new t().setTitle(r.add_group).setIcon(s.group).setClickFn(e)}static import(e){return new t().setTitle(r.import).setIcon(s.import_export).setClickFn(e)}static show(e){return new t().setTitle(r.show).setIcon(s.visibility).setClickFn(e)}static hide(e){return new t().setTitle(r.hide).setIcon(s.visibility_off).setClickFn(e)}static manage(e){return new t().setTitle(r.manage).setIcon(s.grid_view).setClickFn(e)}static delete(e){return new t().setTitle(r.delete).setIcon(s.delete).setIconColor("warn").setClickFn(e)}static clear(e){return new t().setTitle(r.clear).setIcon(s.clear_all).setIconColor("warn").setClickFn(e)}static print(e){return new t().setTitle(r.print).setIcon(s.print).setClickFn(e)}static report(e){return new t().setTitle(r.report).setIcon(s.summarize).setClickFn(e)}static barcode(e){return new t().setTitle(r.barcode).setIcon(s.qr).setClickFn(e)}static barcodeScanner(e){return new t().setTooltip(r.scan).setIcon(s.qr_code_scanner).setClickFn(e)}static info(e){return new t().setTitle(r.info).setIcon(s.info).setClickFn(e)}static cancel(e){return new t().setTitle(r.cancel).setClickFn(e)}static save(e){return new t().setTitle(r.save).setIcon(s.save).setClickFn(e)}static close(e){return new t().setTitle(r.close).setClickFn(e)}static submit(e){return new t().setTitle(r.submit).setClickFn(e)}static create(e){return new t().setTitle(r.create).setClickFn(e)}};var i=class{constructor(){this.items=[]}setData(e){return this.data=e,this}setItems(e){return this.items=e,this}};var a=class{static more(e,l=s.menu_vert){return new i().setItems([n.menu(e).setIcon(l)])}static default(){return new i}};export{s as a,n as b,a as c};
/**i18n:71c33448fc84035c6ee56f25f20b16a3c311d1f911de884d4bce9857c4574a16*/
