var x=function(r){return r[r.Success=0]="Success",r[r.Error=1]="Error",r[r.Info=2]="Info",r[r.Warning=3]="Warning",r}(x||{});var o=class r{static default(e,t){return{pageSize:t??50,pageIndex:e??1}}static minimal(){return r.default(1,10)}static unpaged(){return{pageSize:-1,pageIndex:1}}static count(){return{pageIndex:1,pageSize:0}}};export{x as a,o as b};
/**i18n:3415fba6ca40c85db6a6c1f427335a940d891078c77c172d8c69b98bbabeac73*/