var O=function(l){return l.DATA_MATRIX="Data Matrix",l.QR_CODE="QR",l.PDF_417="PDF417",l}(O||{});var P=function(l){return l[l.Unknown=0]="Unknown",l[l.SyrianId=1]="SyrianId",l[l.SyrianMsId=2]="SyrianMsId",l[l.AnalysisId=3]="AnalysisId",l[l.PersonId=4]="PersonId",l[l.SpecimenId=5]="SpecimenId",l}(P||{}),F=class l{static decode(s){if(!s)return null;let i={format:s.format,type:P.Unknown,data:s.text};return s.format===O.PDF_417?l.isSyrianId(s.text)?(i.type=P.SyrianId,i.value=l.decodeSyrianId(s.text)):l.isSyrianMsId(s.text)&&(i.type=P.SyrianMsId,i.value=l.decodeSyrianMsId(s.text)):s.format===O.QR_CODE?s.text.startsWith("analysisid.")?(i.type=P.AnalysisId,i.value=l.decodeId(s.text)):s.text.startsWith("personid.")&&(i.type=P.PersonId,i.value=l.decodeId(s.text)):s.format===O.DATA_MATRIX&&s.text.startsWith("specimenid.")&&(i.type=P.SpecimenId,i.value=l.decodeId(s.text)),i}static decodeId(s){let i=s.indexOf(".");return s.substring(i+1)}static isSyrianId(s){return this.decodeSyrianIdItems(s).length>=6}static decodeSyrianIdItems(s){let i=this.toUint8Array(s),t=[],e=0,r=0;for(;i.length>=e&&i.length>0;)r=i.indexOf(35,e),r<0&&(r=i.length),t.push(i.slice(e,r)),e=r+1;return t}static decodeSyrianId(s){let i=this.decodeSyrianIdItems(s);if(i.length<6)return null;let t=new TextDecoder("windows-1256"),e={firstName:t.decode(i[0]),lastName:t.decode(i[1]),fatherFirstName:t.decode(i[2]),motherName:t.decode(i[3]),ssn:t.decode(i[5]),birthDate:null,address:null},r=this.extractBirthAddress(t.decode(i[4]));return r&&(e.birthDate=r.birthDate,e.address=r.address),e}static extractBirthAddress(s){let i=null,t=null;for(let e of s.split(" "))if(t=this.extractDate(e),!!t){i=s.replace(e,"").trim();break}return t&&i?{birthDate:t,address:i}:null}static extractDate(s){if(s.length!==10)return null;for(let e=0;e<s.length;e++){let r=s[e];if(!(r==="-"||r==="/")&&(r<"0"||r>"9"))return null}let t=s.replace(/\//g,"-").split("-");return t.length!==3?null:t[0].length===4?new Date(parseInt(t[0]),parseInt(t[1])-1,parseInt(t[2])):t[2].length===4?new Date(parseInt(t[2]),parseInt(t[1])-1,parseInt(t[0])):null}static toUint8Array(s){return Uint8Array.from(s.split("").map(i=>i.charCodeAt()))}static isSyrianMsId(s){return s.endsWith("*HIP*")&&(s.length-5)%3===0}static decodeSyrianMsId(s){let i=this.decodeSyrianMsIdItems(s).map(e=>this.syrianMsCharactorMap(e));return{firstName:i[0],lastName:i[1],fatherFirstName:i[2],motherName:i[6],ssn:void 0,birthDate:this.extractDate(i[11]),address:i[10]}}static decodeSyrianMsIdItems(s){let i=s.substring(0,s.length-5),t=[],e=[];for(let r=0;r<i.length;r+=3){let a=parseInt(i.substring(r,r+3));if(a===999){e.length>0&&(t.push(e),e=[]);continue}e.push(a)}return e.length>0&&t.push(e),t}static syrianMsCharactorMap(s){let i="";return s.forEach(t=>{t===604?i+="\u0642":t===605?i+="\u0641":t===607?i+="\u0639":t===611?i+="\u062D":t===613?i+="\u062F":t===614?i+="\u0634":t===615?i+="\u0633":t===616?i+="\u064A":t===617?i+="\u0628":t===618?i+="\u0644":t===620?i+="\u0627":t===621?i+="\u062A":t===622?i+="\u0646":t===623?i+="\u0645":t===624?i+="\u0643":t===630?i+="\u0631":t===632?i+="\u0649":t===633?i+="\u0629":t===634?i+="\u0648":t===637?i+=" ":t===755?i+="O":t===801?i+="0":t===802?i+="1":t===803?i+="2":t===804?i+="3":t===805?i+="4":t===806?i+="5":t===807?i+="6":t===808?i+="7":t===810?i+="8":t===811?i+="9":t===824?i+="-":t===827&&(i+="+")}),i}};var R=class l{static ishex(s){return/^#[0-9a-f]{3}(?:[0-9a-f]{3})?$/i.test(s)}static createElement(s,i,t){let e=document.createElementNS(s,i);for(let r in t||{})e.setAttribute(r,t[r]);return e}static toBase64(s,i){return`data:image/svg+xml;base64,${btoa(l.toString(s,i))}`}static toString(s,i){return new XMLSerializer().serializeToString(this.toSVG(s,i))}static toSVG(s,i){let t="http://www.w3.org/2000/svg",e="",r=i??{dimension:256,padding:2,background:"#000",verbose:!1},a=Math.abs(r.dimension),h=Math.abs(r.padding);h=h>-1?h:2;let n=[1,0,0,1,h,h],o=s.xx+h*2,d=s.yy+h*2,g=s.yy,m,u;for(;g--;)for(u=0,m=s.xx;m--;)s.m[g][m]&&(r.verbose?(u++,s.m[g][m-1]||(e+="M"+m+","+g+"h"+u+"v1h-"+u+"v-1z",u=0)):e+="M"+m+","+g+"h1v1h-1v-1z");let f=l.createElement(t,"svg",{viewBox:[0,0,o,d].join(" "),width:`${a/d*o|0}`,height:`${a}`,fill:r.foreground&&this.ishex(r.foreground)?r.foreground:"#000","shape-rendering":"crispEdges",xmlns:t,version:"1.1"});return r.background&&this.ishex(r.background)&&f.appendChild(l.createElement(t,"path",{fill:r.background,d:"M0,0v"+d+"h"+o+"V0H0Z"})),f.appendChild(l.createElement(t,"path",{transform:"matrix("+n+")",d:e})),f}};var T=class l{static bit(s,i,t){s[t]=s[t]||[],s[t][i]=1}static toBase(s){let i=[231],t=s.length;250<t&&i.push(37+(t/250|0)&255),i.push(t%250+149*(i.length+1)%255+1&255);for(let e=0;e<t;e++)i.push(s.charCodeAt(e)+149*(i.length+1)%255+1&255);return i}static toAscii(s){let i=[];for(let t=0;t<s.length;t++){let e=s.charCodeAt(t),r=t+1<s.length?s.charCodeAt(t+1):0;e>47&&e<58&&r>47&&r<58?(i.push((e-48)*10+r+82),t++):e>127?(i.push(235),i.push(e-127&255)):i.push(e+1)}return i}static toText(s,i){let t,e,r=0,a=0,h=s.length,n=[i[0]],o=function(d){a=40*a+d,r++==2&&(n.push(++a>>8),n.push(a&255),r=a=0)};for(t=0;t<h&&!(r==0&&t==h-1);t++){let d=s.charCodeAt(t);for(d>127&&n[0]!=238&&(o(1),o(30),d-=128),e=1;d>i[e];e+=3);let g=i[e+1];if(g==8||g==9&&r==0&&t==h-1)return[];if(g<5&&r==2&&t==h-1)break;g<5&&o(g),o(d-i[e+2])}return r==2&&n[0]!==238&&o(0),n.push(254),(r>0||t<h)&&(n=n.concat(this.toAscii(s.substr(t-r)))),n}static toEdifact(s){let i=s.length+1&-4,t=0,e,r=i>0?[240]:[];for(let a=0;a<i;a++){if(a<i-1){if(e=s.charCodeAt(a),e<32||e>94)return[]}else e=31;t=t*64+(e&63),(a&3)==3&&(r.push(t>>16),r.push(t>>8&255),r.push(t&255),t=0)}return i>s.length?r:r.concat(l.toAscii(s.substr(i==0?0:i-1)))}};var H=class{static encode(s,i){let t={m:[],xx:0,yy:0};s=decodeURI(encodeURI(s));let e=T.toAscii(s),r=e.length,a=T.toText(s,[230,31,0,0,32,9,29,47,1,33,57,9,44,64,1,43,90,9,51,95,1,69,127,2,96,255,1,0]),h=a.length;h>0&&h<r&&(e=a,r=h),a=T.toText(s,[239,31,0,0,32,9,29,47,1,33,57,9,44,64,1,43,90,2,64,95,1,69,122,9,83,127,2,96,255,1,0]),h=a.length,h>0&&h<r&&(e=a,r=h),a=T.toText(s,[238,12,8,0,13,9,13,31,8,0,32,9,29,41,8,0,42,9,41,47,8,0,57,9,44,64,8,0,90,9,51,255,8,0]),h=a.length,h>0&&h<r&&(e=a,r=h),a=T.toEdifact(s),h=a.length,h>0&&h<r&&(e=a,r=h),a=T.toBase(s),h=a.length,h>0&&h<r&&(e=a,r=h);let n,o,d=1,g=1,m,u,f,c=-1,p,x,A,w=1,y=new Array(70),N=new Array(70),S=new Array(256),U=new Array(255);if(i&&r<50){a=[16,7,28,11,24,14,32,18,32,24,44,28];do o=a[++c],n=6+(c&12),h=o*n/8;while(h-a[++c]<r);o>25&&(d=2)}else{o=n=6,f=2,a=[5,7,10,12,14,18,20,24,28,36,42,48,56,68,84,112,144,192,224,272,336,408,496,620];do{if(++c==a.length)throw new Error("msg is too long");o>11*f&&(f=4+f&12),o=n+=f,h=o*n>>3}while(h-a[c]<r);o>27&&(g=d=2*(o/54|0)+2),h>255&&(w=2*(h>>9)+2)}for(A=a[c],m=o/d,u=n/g,r<h-A&&(e[r++]=129);r<h-A;)e[r++]=(149*r%253+130)%254;A/=w;let G;for(c=1,f=0;f<255;f++)U[f]=c,S[c]=f,c+=c,c>255&&(c^=301);for(y[A]=0,f=1;f<=A;f++)for(c=A-f,y[c]=1;c<A;c++)y[c]=y[c+1]^U[(S[y[c]]+f)%255];for(p=0;p<w;p++){for(f=0;f<=A;f++)N[f]=0;for(f=p;f<r;f+=w)for(c=0,G=N[0]^e[f];c<A;c++)N[c]=N[c+1]^(G?U[(S[y[c]]+S[G])%255]:0);for(f=0;f<A;f++)e[r+p+f*w]=N[f]}for(f=0;f<n+2*g;f+=u+2)for(c=0;c<o+2*d;c++)T.bit(t.m,c,f+u+1),c&1||T.bit(t.m,c,f);for(f=0;f<o+2*d;f+=m+2)for(c=0;c<n;c++)T.bit(t.m,f,c+(c/u|0)*2+1),(c&1)==1&&T.bit(t.m,f+m+1,c+(c/u|0)*2);A=2,p=0,x=4;let J=[0,0,-1,0,-2,0,0,-1,-1,-1,-2,-1,-1,-2,-2,-2];for(f=0;f<h;x-=A,p+=A){if(x==n-3&&p==-1)a=[o,6-n,o,5-n,o,4-n,o,3-n,o-1,3-n,3,2,2,2,1,2];else if(x==n+1&&p==1&&!(o&7)&&(n&7)==6)a=[o-2,-n,o-3,-n,o-4,-n,o-2,-1-n,o-3,-1-n,o-4,-1-n,o-2,-2,-1,-2];else{if(x==0&&p==o-2&&o&3)continue;if(x<0||p>=o||x>=n||p<0)for(A=-A,x+=2+A/2,p+=2-A/2;x<0||p>=o||x>=n||p<0;)x-=A,p+=A;if(x==n-2&&p==0&&o&3)a=[o-1,3-n,o-1,2-n,o-2,2-n,o-3,2-n,o-4,2-n,0,1,0,0,0,-1];else if(x==n-2&&p==0&&(o&7)==4)a=[o-1,5-n,o-1,4-n,o-1,3-n,o-1,2-n,o-2,2-n,0,1,0,0,0,-1];else{if(x==1&&p==o-1&&!(o&7)&&(n&7)==6)continue;a=J}}for(r=e[f++],c=0;r>0;c+=2,r>>=1)if(r&1){let B=p+a[c],M=x+a[c+1];B<0&&(B+=o,M+=4-(o+4&7)),M<0&&(M+=n,B+=4-(n+4&7)),T.bit(t.m,B+2*(B/m|0)+1,M+2*(M/u|0)+1)}}for(f=o;f&3;f--)T.bit(t.m,f,f);return t.xx=o+2*d,t.yy=n+2*g,t}};var K=class{constructor(s){this.mode=I.MODE_8BIT_BYTE,this.data=s,this.parsedData=[];for(let i=0,t=this.data.length;i<t;i++){let e=[],r=this.data.charCodeAt(i);r>65536?(e[0]=240|(r&1835008)>>>18,e[1]=128|(r&258048)>>>12,e[2]=128|(r&4032)>>>6,e[3]=128|r&63):r>2048?(e[0]=224|(r&61440)>>>12,e[1]=128|(r&4032)>>>6,e[2]=128|r&63):r>128?(e[0]=192|(r&1984)>>>6,e[1]=128|r&63):e[0]=r,this.parsedData.push(...e)}this.parsedData=Array.prototype.concat.apply([],this.parsedData),this.parsedData.length!=this.data.length&&(this.parsedData.unshift(191),this.parsedData.unshift(187),this.parsedData.unshift(239))}getLength(){return this.parsedData.length}write(s){for(let i=0,t=this.parsedData.length;i<t;i++)s.put(this.parsedData[i],8)}},$=(()=>{let s=class s{constructor(t,e){this.typeNumber=t,this.errorCorrectLevel=e,this.modules=[],this.moduleCount=0,this.dataCache=null,this.dataList=[]}addData(t){let e=new K(t);this.dataList.push(e),this.dataCache=null}isDark(t,e){if(t<0||this.moduleCount<=t||e<0||this.moduleCount<=e)throw new Error(t+","+e);return this.modules[t][e]}getModuleCount(){return this.moduleCount}make(){this.makeImpl(!1,this.getBestMaskPattern())}makeImpl(t,e){this.moduleCount=this.typeNumber*4+17,this.modules=new Array(this.moduleCount);for(let r=0;r<this.moduleCount;r++){this.modules[r]=new Array(this.moduleCount);for(let a=0;a<this.moduleCount;a++)this.modules[r][a]=null}this.setupPositionProbePattern(0,0),this.setupPositionProbePattern(this.moduleCount-7,0),this.setupPositionProbePattern(0,this.moduleCount-7),this.setupPositionAdjustPattern(),this.setupTimingPattern(),this.setupTypeInfo(t,e),this.typeNumber>=7&&this.setupTypeNumber(t),this.dataCache==null&&(this.dataCache=s.createData(this.typeNumber,this.errorCorrectLevel,this.dataList)),this.mapData(this.dataCache,e)}setupPositionProbePattern(t,e){for(let r=-1;r<=7;r++)if(!(t+r<=-1||this.moduleCount<=t+r))for(let a=-1;a<=7;a++)e+a<=-1||this.moduleCount<=e+a||(0<=r&&r<=6&&(a==0||a==6)||0<=a&&a<=6&&(r==0||r==6)||2<=r&&r<=4&&2<=a&&a<=4?this.modules[t+r][e+a]=!0:this.modules[t+r][e+a]=!1)}getBestMaskPattern(){let t=0,e=0;for(let r=0;r<8;r++){this.makeImpl(!0,r);let a=L.getLostPoint(this);(r==0||t>a)&&(t=a,e=r)}return e}setupTimingPattern(){for(let t=8;t<this.moduleCount-8;t++)this.modules[t][6]==null&&(this.modules[t][6]=t%2==0);for(let t=8;t<this.moduleCount-8;t++)this.modules[6][t]==null&&(this.modules[6][t]=t%2==0)}setupPositionAdjustPattern(){let t=L.getPatternPosition(this.typeNumber);for(let e=0;e<t.length;e++)for(let r=0;r<t.length;r++){let a=t[e],h=t[r];if(this.modules[a][h]==null)for(let n=-2;n<=2;n++)for(let o=-2;o<=2;o++)n==-2||n==2||o==-2||o==2||n==0&&o==0?this.modules[a+n][h+o]=!0:this.modules[a+n][h+o]=!1}}setupTypeNumber(t){let e=L.getBCHTypeNumber(this.typeNumber);for(let r=0;r<18;r++){let a=!t&&(e>>r&1)==1;this.modules[Math.floor(r/3)][r%3+this.moduleCount-8-3]=a}for(let r=0;r<18;r++){let a=!t&&(e>>r&1)==1;this.modules[r%3+this.moduleCount-8-3][Math.floor(r/3)]=a}}setupTypeInfo(t,e){let r=this.errorCorrectLevel<<3|e,a=L.getBCHTypeInfo(r);for(let h=0;h<15;h++){let n=!t&&(a>>h&1)==1;h<6?this.modules[h][8]=n:h<8?this.modules[h+1][8]=n:this.modules[this.moduleCount-15+h][8]=n}for(let h=0;h<15;h++){let n=!t&&(a>>h&1)==1;h<8?this.modules[8][this.moduleCount-h-1]=n:h<9?this.modules[8][15-h-1+1]=n:this.modules[8][15-h-1]=n}this.modules[this.moduleCount-8][8]=!t}mapData(t,e){let r=-1,a=this.moduleCount-1,h=7,n=0;for(let o=this.moduleCount-1;o>0;o-=2)for(o==6&&o--;;){for(let d=0;d<2;d++)if(this.modules[a][o-d]==null){let g=!1;n<t.length&&(g=(t[n]>>>h&1)==1),L.getMask(e,a,o-d)&&(g=!g),this.modules[a][o-d]=g,h--,h==-1&&(n++,h=7)}if(a+=r,a<0||this.moduleCount<=a){a-=r,r=-r;break}}}static createData(t,e,r){let a=V.getRSBlocks(t,e),h=new X;for(let o=0;o<r.length;o++){let d=r[o];h.put(d.mode,4),h.put(d.getLength(),L.getLengthInBits(d.mode,t)),d.write(h)}let n=0;for(let o=0;o<a.length;o++)n+=a[o].dataCount;if(h.getLengthInBits()>n*8)throw new Error("code length overflow. ("+h.getLengthInBits()+">"+n*8+")");for(h.getLengthInBits()+4<=n*8&&h.put(0,4);h.getLengthInBits()%8!=0;)h.putBit(!1);for(;!(h.getLengthInBits()>=n*8||(h.put(s.PAD0,8),h.getLengthInBits()>=n*8));)h.put(s.PAD1,8);return s.createBytes(h,a)}static createBytes(t,e){let r=0,a=0,h=0,n=new Array(e.length),o=new Array(e.length);for(let u=0;u<e.length;u++){let f=e[u].dataCount,c=e[u].totalCount-f;a=Math.max(a,f),h=Math.max(h,c),n[u]=new Array(f);for(let w=0;w<n[u].length;w++)n[u][w]=255&t.buffer[w+r];r+=f;let p=L.getErrorCorrectPolynomial(c),A=new k(n[u],p.getLength()-1).mod(p);o[u]=new Array(p.getLength()-1);for(let w=0;w<o[u].length;w++){let y=w+A.getLength()-o[u].length;o[u][w]=y>=0?A.get(y):0}}let d=0;for(let u=0;u<e.length;u++)d+=e[u].totalCount;let g=new Array(d),m=0;for(let u=0;u<a;u++)for(let f=0;f<e.length;f++)u<n[f].length&&(g[m++]=n[f][u]);for(let u=0;u<h;u++)for(let f=0;f<e.length;f++)u<o[f].length&&(g[m++]=o[f][u]);return g}};s.PAD0=236,s.PAD1=17;let l=s;return l})(),I=function(l){return l[l.MODE_NUMBER=1]="MODE_NUMBER",l[l.MODE_ALPHA_NUM=2]="MODE_ALPHA_NUM",l[l.MODE_8BIT_BYTE=4]="MODE_8BIT_BYTE",l[l.MODE_KANJI=8]="MODE_KANJI",l}(I||{}),D=function(l){return l[l.L=1]="L",l[l.M=0]="M",l[l.Q=3]="Q",l[l.H=2]="H",l}(D||{}),b=function(l){return l[l.PATTERN000=0]="PATTERN000",l[l.PATTERN001=1]="PATTERN001",l[l.PATTERN010=2]="PATTERN010",l[l.PATTERN011=3]="PATTERN011",l[l.PATTERN100=4]="PATTERN100",l[l.PATTERN101=5]="PATTERN101",l[l.PATTERN110=6]="PATTERN110",l[l.PATTERN111=7]="PATTERN111",l}(b||{}),L=(()=>{let s=class s{static getBCHTypeInfo(t){let e=t<<10;for(;s.getBCHDigit(e)-s.getBCHDigit(s.G15)>=0;)e^=s.G15<<s.getBCHDigit(e)-s.getBCHDigit(s.G15);return(t<<10|e)^s.G15_MASK}static getBCHTypeNumber(t){let e=t<<12;for(;s.getBCHDigit(e)-s.getBCHDigit(s.G18)>=0;)e^=s.G18<<s.getBCHDigit(e)-s.getBCHDigit(s.G18);return t<<12|e}static getBCHDigit(t){let e=0;for(;t!=0;)e++,t>>>=1;return e}static getPatternPosition(t){return s.PATTERN_POSITION_TABLE[t-1]}static getMask(t,e,r){switch(t){case b.PATTERN000:return(e+r)%2==0;case b.PATTERN001:return e%2==0;case b.PATTERN010:return r%3==0;case b.PATTERN011:return(e+r)%3==0;case b.PATTERN100:return(Math.floor(e/2)+Math.floor(r/3))%2==0;case b.PATTERN101:return e*r%2+e*r%3==0;case b.PATTERN110:return(e*r%2+e*r%3)%2==0;case b.PATTERN111:return(e*r%3+(e+r)%2)%2==0;default:throw new Error("bad maskPattern:"+t)}}static getErrorCorrectPolynomial(t){let e=new k([1],0);for(let r=0;r<t;r++)e=e.multiply(new k([1,E.gexp(r)],0));return e}static getLengthInBits(t,e){if(1<=e&&e<10)switch(t){case I.MODE_NUMBER:return 10;case I.MODE_ALPHA_NUM:return 9;case I.MODE_8BIT_BYTE:return 8;case I.MODE_KANJI:return 8;default:throw new Error("mode:"+t)}else if(e<27)switch(t){case I.MODE_NUMBER:return 12;case I.MODE_ALPHA_NUM:return 11;case I.MODE_8BIT_BYTE:return 16;case I.MODE_KANJI:return 10;default:throw new Error("mode:"+t)}else if(e<41)switch(t){case I.MODE_NUMBER:return 14;case I.MODE_ALPHA_NUM:return 13;case I.MODE_8BIT_BYTE:return 16;case I.MODE_KANJI:return 12;default:throw new Error("mode:"+t)}else throw new Error("type:"+e)}static getLostPoint(t){let e=t.getModuleCount(),r=0;for(let n=0;n<e;n++)for(let o=0;o<e;o++){let d=0,g=t.isDark(n,o);for(let m=-1;m<=1;m++)if(!(n+m<0||e<=n+m))for(let u=-1;u<=1;u++)o+u<0||e<=o+u||m==0&&u==0||g==t.isDark(n+m,o+u)&&d++;d>5&&(r+=3+d-5)}for(let n=0;n<e-1;n++)for(let o=0;o<e-1;o++){let d=0;t.isDark(n,o)&&d++,t.isDark(n+1,o)&&d++,t.isDark(n,o+1)&&d++,t.isDark(n+1,o+1)&&d++,(d==0||d==4)&&(r+=3)}for(let n=0;n<e;n++)for(let o=0;o<e-6;o++)t.isDark(n,o)&&!t.isDark(n,o+1)&&t.isDark(n,o+2)&&t.isDark(n,o+3)&&t.isDark(n,o+4)&&!t.isDark(n,o+5)&&t.isDark(n,o+6)&&(r+=40);for(let n=0;n<e;n++)for(let o=0;o<e-6;o++)t.isDark(o,n)&&!t.isDark(o+1,n)&&t.isDark(o+2,n)&&t.isDark(o+3,n)&&t.isDark(o+4,n)&&!t.isDark(o+5,n)&&t.isDark(o+6,n)&&(r+=40);let a=0;for(let n=0;n<e;n++)for(let o=0;o<e;o++)t.isDark(o,n)&&a++;let h=Math.abs(100*a/e/e-50)/5;return r+=h*10,r}};s.PATTERN_POSITION_TABLE=[[],[6,18],[6,22],[6,26],[6,30],[6,34],[6,22,38],[6,24,42],[6,26,46],[6,28,50],[6,30,54],[6,32,58],[6,34,62],[6,26,46,66],[6,26,48,70],[6,26,50,74],[6,30,54,78],[6,30,56,82],[6,30,58,86],[6,34,62,90],[6,28,50,72,94],[6,26,50,74,98],[6,30,54,78,102],[6,28,54,80,106],[6,32,58,84,110],[6,30,58,86,114],[6,34,62,90,118],[6,26,50,74,98,122],[6,30,54,78,102,126],[6,26,52,78,104,130],[6,30,56,82,108,134],[6,34,60,86,112,138],[6,30,58,86,114,142],[6,34,62,90,118,146],[6,30,54,78,102,126,150],[6,24,50,76,102,128,154],[6,28,54,80,106,132,158],[6,32,58,84,110,136,162],[6,26,54,82,110,138,166],[6,30,58,86,114,142,170]],s.G15=1335,s.G18=7973,s.G15_MASK=21522;let l=s;return l})(),C=class C{static glog(s){if(s<1)throw new Error("glog("+s+")");return C.LOG_TABLE[s]}static gexp(s){for(;s<0;)s+=255;for(;s>=256;)s-=255;return C.EXP_TABLE[s]}};C.EXP_TABLE=new Array(256),C.LOG_TABLE=new Array(256);var E=C;for(let l=0;l<8;l++)E.EXP_TABLE[l]=1<<l;for(let l=8;l<256;l++)E.EXP_TABLE[l]=E.EXP_TABLE[l-4]^E.EXP_TABLE[l-5]^E.EXP_TABLE[l-6]^E.EXP_TABLE[l-8];for(let l=0;l<255;l++)E.LOG_TABLE[E.EXP_TABLE[l]]=l;var k=class l{constructor(s,i){if(s.length==null)throw new Error(s.length+"/"+i);let t=0;for(;t<s.length&&s[t]==0;)t++;this.num=new Array(s.length-t+i);for(let e=0;e<s.length-t;e++)this.num[e]=s[e+t]}get(s){return this.num[s]}getLength(){return this.num.length}multiply(s){let i=new Array(this.getLength()+s.getLength()-1);for(let t=0;t<this.getLength();t++)for(let e=0;e<s.getLength();e++)i[t+e]^=E.gexp(E.glog(this.get(t))+E.glog(s.get(e)));return new l(i,0)}mod(s){if(this.getLength()-s.getLength()<0)return this;let i=E.glog(this.get(0))-E.glog(s.get(0)),t=new Array(this.getLength());for(let e=0;e<this.getLength();e++)t[e]=this.get(e);for(let e=0;e<s.getLength();e++)t[e]^=E.gexp(E.glog(s.get(e))+i);return new l(t,0).mod(s)}},V=(()=>{let s=class s{constructor(t,e){this.totalCount=t,this.dataCount=e}static getRsBlockTable(t,e){switch(e){case D.L:return s.RS_BLOCK_TABLE[(t-1)*4+0];case D.M:return s.RS_BLOCK_TABLE[(t-1)*4+1];case D.Q:return s.RS_BLOCK_TABLE[(t-1)*4+2];case D.H:return s.RS_BLOCK_TABLE[(t-1)*4+3];default:return}}static getRSBlocks(t,e){let r=s.getRsBlockTable(t,e);if(r==null)throw new Error("bad rs block @ typeNumber:"+t+"/errorCorrectLevel:"+e);let a=r.length/3,h=[];for(let n=0;n<a;n++){let o=r[n*3+0],d=r[n*3+1],g=r[n*3+2];for(let m=0;m<o;m++)h.push(new s(d,g))}return h}};s.RS_BLOCK_TABLE=[[1,26,19],[1,26,16],[1,26,13],[1,26,9],[1,44,34],[1,44,28],[1,44,22],[1,44,16],[1,70,55],[1,70,44],[2,35,17],[2,35,13],[1,100,80],[2,50,32],[2,50,24],[4,25,9],[1,134,108],[2,67,43],[2,33,15,2,34,16],[2,33,11,2,34,12],[2,86,68],[4,43,27],[4,43,19],[4,43,15],[2,98,78],[4,49,31],[2,32,14,4,33,15],[4,39,13,1,40,14],[2,121,97],[2,60,38,2,61,39],[4,40,18,2,41,19],[4,40,14,2,41,15],[2,146,116],[3,58,36,2,59,37],[4,36,16,4,37,17],[4,36,12,4,37,13],[2,86,68,2,87,69],[4,69,43,1,70,44],[6,43,19,2,44,20],[6,43,15,2,44,16],[4,101,81],[1,80,50,4,81,51],[4,50,22,4,51,23],[3,36,12,8,37,13],[2,116,92,2,117,93],[6,58,36,2,59,37],[4,46,20,6,47,21],[7,42,14,4,43,15],[4,133,107],[8,59,37,1,60,38],[8,44,20,4,45,21],[12,33,11,4,34,12],[3,145,115,1,146,116],[4,64,40,5,65,41],[11,36,16,5,37,17],[11,36,12,5,37,13],[5,109,87,1,110,88],[5,65,41,5,66,42],[5,54,24,7,55,25],[11,36,12],[5,122,98,1,123,99],[7,73,45,3,74,46],[15,43,19,2,44,20],[3,45,15,13,46,16],[1,135,107,5,136,108],[10,74,46,1,75,47],[1,50,22,15,51,23],[2,42,14,17,43,15],[5,150,120,1,151,121],[9,69,43,4,70,44],[17,50,22,1,51,23],[2,42,14,19,43,15],[3,141,113,4,142,114],[3,70,44,11,71,45],[17,47,21,4,48,22],[9,39,13,16,40,14],[3,135,107,5,136,108],[3,67,41,13,68,42],[15,54,24,5,55,25],[15,43,15,10,44,16],[4,144,116,4,145,117],[17,68,42],[17,50,22,6,51,23],[19,46,16,6,47,17],[2,139,111,7,140,112],[17,74,46],[7,54,24,16,55,25],[34,37,13],[4,151,121,5,152,122],[4,75,47,14,76,48],[11,54,24,14,55,25],[16,45,15,14,46,16],[6,147,117,4,148,118],[6,73,45,14,74,46],[11,54,24,16,55,25],[30,46,16,2,47,17],[8,132,106,4,133,107],[8,75,47,13,76,48],[7,54,24,22,55,25],[22,45,15,13,46,16],[10,142,114,2,143,115],[19,74,46,4,75,47],[28,50,22,6,51,23],[33,46,16,4,47,17],[8,152,122,4,153,123],[22,73,45,3,74,46],[8,53,23,26,54,24],[12,45,15,28,46,16],[3,147,117,10,148,118],[3,73,45,23,74,46],[4,54,24,31,55,25],[11,45,15,31,46,16],[7,146,116,7,147,117],[21,73,45,7,74,46],[1,53,23,37,54,24],[19,45,15,26,46,16],[5,145,115,10,146,116],[19,75,47,10,76,48],[15,54,24,25,55,25],[23,45,15,25,46,16],[13,145,115,3,146,116],[2,74,46,29,75,47],[42,54,24,1,55,25],[23,45,15,28,46,16],[17,145,115],[10,74,46,23,75,47],[10,54,24,35,55,25],[19,45,15,35,46,16],[17,145,115,1,146,116],[14,74,46,21,75,47],[29,54,24,19,55,25],[11,45,15,46,46,16],[13,145,115,6,146,116],[14,74,46,23,75,47],[44,54,24,7,55,25],[59,46,16,1,47,17],[12,151,121,7,152,122],[12,75,47,26,76,48],[39,54,24,14,55,25],[22,45,15,41,46,16],[6,151,121,14,152,122],[6,75,47,34,76,48],[46,54,24,10,55,25],[2,45,15,64,46,16],[17,152,122,4,153,123],[29,74,46,14,75,47],[49,54,24,10,55,25],[24,45,15,46,46,16],[4,152,122,18,153,123],[13,74,46,32,75,47],[48,54,24,14,55,25],[42,45,15,32,46,16],[20,147,117,4,148,118],[40,75,47,7,76,48],[43,54,24,22,55,25],[10,45,15,67,46,16],[19,148,118,6,149,119],[18,75,47,31,76,48],[34,54,24,34,55,25],[20,45,15,61,46,16]];let l=s;return l})(),X=class{constructor(){this.buffer=[],this.length=0}get(s){let i=Math.floor(s/8);return(this.buffer[i]>>>7-s%8&1)==1}put(s,i){for(let t=0;t<i;t++)this.putBit((s>>>i-t-1&1)==1)}getLengthInBits(){return this.length}putBit(s){let i=Math.floor(this.length/8);this.buffer.length<=i&&this.buffer.push(0),s&&(this.buffer[i]|=128>>>this.length%8),this.length++}},_=[[17,14,11,7],[32,26,20,14],[53,42,32,24],[78,62,46,34],[106,84,60,44],[134,106,74,58],[154,122,86,64],[192,152,108,84],[230,180,130,98],[271,213,151,119],[321,251,177,137],[367,287,203,155],[425,331,241,177],[458,362,258,194],[520,412,292,220],[586,450,322,250],[644,504,364,280],[718,560,394,310],[792,624,442,338],[858,666,482,382],[929,711,509,403],[1003,779,565,439],[1091,857,611,461],[1171,911,661,511],[1273,997,715,535],[1367,1059,751,593],[1465,1125,805,625],[1528,1190,868,658],[1628,1264,908,698],[1732,1370,982,742],[1840,1452,1030,790],[1952,1538,1112,842],[2068,1628,1168,898],[2188,1722,1228,958],[2303,1809,1283,983],[2431,1911,1351,1051],[2563,1989,1423,1093],[2699,2099,1499,1139],[2809,2213,1579,1219],[2953,2331,1663,1273]],v=class l{static getUTF8Length(s){let i=encodeURI(s).toString().replace(/%[0-9a-fA-F]{2}/g,"a");return i.length+(i.length!=s.length?3:0)}static getTypeNumber(s,i){let t=1,e=0,r=l.getUTF8Length(s),a=_.length;for(let h=0;h<=a;h++){let n=_[h];if(!n)throw new Error("Content too long: expected "+e+" but got "+r);switch(i){case D.L:e=n[0];break;case D.M:e=n[1];break;case D.Q:e=n[2];break;case D.H:e=n[3];break;default:e=n[0]}if(r<=e)break;t++}if(t>_.length)throw new Error("Content too long");return t}static encode(s,i,t){if(!s||s.length==0)throw new Error("Expected {msg} should not be empty!");t||(t=l.getTypeNumber(s,i));let e=new $(t,i);return e.addData(s),e.make(),{m:e.modules.map(a=>a.map(h=>h?1:0)),xx:e.getModuleCount(),yy:e.getModuleCount()}}};var Y=class{static datamatrix(s,i){return H.encode(s,i)}static qr(s,i,t){let e=i??D.M;return v.encode(s,e,t)}};export{O as a,P as b,F as c,R as d,Y as e};
/**i18n:7274145596894140ce8dc809ecf6b222e8bea6098fe1553d5bf6245265c46bf4*/
