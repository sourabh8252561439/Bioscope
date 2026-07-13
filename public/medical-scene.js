(()=>{var{defineProperty:G6,getOwnPropertyNames:rW,getOwnPropertyDescriptor:tW}=Object,eW=Object.prototype.hasOwnProperty;function JK(J){return this[J]}var QK=(J)=>{var Q=(_$??=new WeakMap).get(J),$;if(Q)return Q;if(Q=G6({},"__esModule",{value:!0}),J&&typeof J==="object"||typeof J==="function"){for(var Z of rW(J))if(!eW.call(Q,Z))G6(Q,Z,{get:JK.bind(J,Z),enumerable:!($=tW(J,Z))||$.enumerable})}return _$.set(J,Q),Q},_$;var $K=(J)=>J;function ZK(J,Q){this[J]=$K.bind(null,Q)}var WK=(J,Q)=>{for(var $ in Q)G6(J,$,{get:Q[$],enumerable:!0,configurable:!0,set:ZK.bind(Q,$)})};var CG={};WK(CG,{initMedicalScene:()=>uW});var t$="185";var e$=0,h6=1,JZ=2;var j8=1,w7=2,R8=3,C9=0,_J=1,bJ=2,J9=0,y8=1,x6=2,g6=3,p6=4,QZ=5;var k8=100,$Z=101,ZZ=102,WZ=103,KZ=104,HZ=200,YZ=201,XZ=202,UZ=203,GZ=204,NZ=205,EZ=206,qZ=207,FZ=208,DZ=209,OZ=210,RZ=211,kZ=212,MZ=213,LZ=214,VZ=0,BZ=1,zZ=2,m6=3,IZ=4,AZ=5,wZ=6,_Z=7,CZ=0,PZ=1,TZ=2,iJ=0,d6=1,l6=2,u6=3,v8=4,c6=5,n6=6,s6=7;var M8=301,m9=302,_7=303,C7=304,f8=306,SZ=1000,P7=1001,jZ=1002,P9=1003,yZ=1004;var b8=1005;var jJ=1006,T7=1007;var d9=1008;var oJ=1009,vZ=1010,fZ=1011,h8=1012,i6=1013,T9=1014,F9=1015,D9=1016,o6=1017,a6=1018,L8=1020,bZ=35902,hZ=35899,xZ=1021,gZ=1022,Q9=1023,l9=1026,u9=1027,pZ=1028,r6=1029,c9=1030,t6=1031;var e6=1033,S7=33776,j7=33777,y7=33778,v7=33779,JQ=35840,QQ=35841,$Q=35842,ZQ=35843,WQ=36196,KQ=37492,HQ=37496,YQ=37488,XQ=37489,f7=37490,UQ=37491,GQ=37808,NQ=37809,EQ=37810,qQ=37811,FQ=37812,DQ=37813,OQ=37814,RQ=37815,kQ=37816,MQ=37817,LQ=37818,VQ=37819,BQ=37820,zQ=37821,IQ=36492,AQ=36494,wQ=36495,_Q=36283,CQ=36284,b7=36285,PQ=36286;var TQ=0,mZ=1,n9="",dZ="srgb",SQ="srgb-linear",jQ="linear",$J="srgb";var lZ=512,uZ=513,cZ=514,h7=515,nZ=516,sZ=517,x7=518,iZ=519;var yQ="300 es",vQ=2000;function KK(J){for(let Q=J.length-1;Q>=0;--Q)if(J[Q]>=65535)return!0;return!1}function HK(J){return ArrayBuffer.isView(J)&&!(J instanceof DataView)}function T8(J){return document.createElementNS("http://www.w3.org/1999/xhtml",J)}function oZ(){let J=T8("canvas");return J.style.display="block",J}var C$={},O8=null;function fQ(...J){let Q="THREE."+J.shift();if(O8)O8("log",Q,...J);else console.log(Q,...J)}function aZ(J){let Q=J[0];if(typeof Q==="string"&&Q.startsWith("TSL:")){let $=J[1];if($&&$.isStackTrace)J[0]+=" "+$.getLocation();else J[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return J}function _0(...J){J=aZ(J);let Q="THREE."+J.shift();if(O8)O8("warn",Q,...J);else{let $=J[0];if($&&$.isStackTrace)console.warn($.getError(Q));else console.warn(Q,...J)}}function P0(...J){J=aZ(J);let Q="THREE."+J.shift();if(O8)O8("error",Q,...J);else{let $=J[0];if($&&$.isStackTrace)console.error($.getError(Q));else console.error(Q,...J)}}function p9(...J){let Q=J.join(" ");if(Q in C$)return;C$[Q]=!0,_0(...J)}function rZ(J,Q,$){return new Promise(function(Z,W){function K(){switch(J.clientWaitSync(Q,J.SYNC_FLUSH_COMMANDS_BIT,0)){case J.WAIT_FAILED:W();break;case J.TIMEOUT_EXPIRED:setTimeout(K,$);break;default:Z()}}setTimeout(K,$)})}var tZ={[0]:1,[2]:6,[4]:7,[3]:5,[1]:0,[6]:2,[7]:4,[5]:3};class O9{addEventListener(J,Q){if(this._listeners===void 0)this._listeners={};let $=this._listeners;if($[J]===void 0)$[J]=[];if($[J].indexOf(Q)===-1)$[J].push(Q)}hasEventListener(J,Q){let $=this._listeners;if($===void 0)return!1;return $[J]!==void 0&&$[J].indexOf(Q)!==-1}removeEventListener(J,Q){let $=this._listeners;if($===void 0)return;let Z=$[J];if(Z!==void 0){let W=Z.indexOf(Q);if(W!==-1)Z.splice(W,1)}}dispatchEvent(J){let Q=this._listeners;if(Q===void 0)return;let $=Q[J.type];if($!==void 0){J.target=this;let Z=$.slice(0);for(let W=0,K=Z.length;W<K;W++)Z[W].call(this,J);J.target=null}}}var IJ=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var N6=Math.PI/180,S8=180/Math.PI;function x8(){let J=Math.random()*4294967295|0,Q=Math.random()*4294967295|0,$=Math.random()*4294967295|0,Z=Math.random()*4294967295|0;return(IJ[J&255]+IJ[J>>8&255]+IJ[J>>16&255]+IJ[J>>24&255]+"-"+IJ[Q&255]+IJ[Q>>8&255]+"-"+IJ[Q>>16&15|64]+IJ[Q>>24&255]+"-"+IJ[$&63|128]+IJ[$>>8&255]+"-"+IJ[$>>16&255]+IJ[$>>24&255]+IJ[Z&255]+IJ[Z>>8&255]+IJ[Z>>16&255]+IJ[Z>>24&255]).toLowerCase()}function m0(J,Q,$){return Math.max(Q,Math.min($,J))}function YK(J,Q){return(J%Q+Q)%Q}function E6(J,Q,$){return(1-$)*J+$*Q}function I8(J,Q){switch(Q.constructor){case Float32Array:return J;case Uint32Array:return J/4294967295;case Uint16Array:return J/65535;case Uint8Array:return J/255;case Int32Array:return Math.max(J/2147483647,-1);case Int16Array:return Math.max(J/32767,-1);case Int8Array:return Math.max(J/127,-1);default:throw Error("THREE.MathUtils: Invalid component type.")}}function SJ(J,Q){switch(Q.constructor){case Float32Array:return J;case Uint32Array:return Math.round(J*4294967295);case Uint16Array:return Math.round(J*65535);case Uint8Array:return Math.round(J*255);case Int32Array:return Math.round(J*2147483647);case Int16Array:return Math.round(J*32767);case Int8Array:return Math.round(J*127);default:throw Error("THREE.MathUtils: Invalid component type.")}}class p0{static{p0.prototype.isVector2=!0}constructor(J=0,Q=0){this.x=J,this.y=Q}get width(){return this.x}set width(J){this.x=J}get height(){return this.y}set height(J){this.y=J}set(J,Q){return this.x=J,this.y=Q,this}setScalar(J){return this.x=J,this.y=J,this}setX(J){return this.x=J,this}setY(J){return this.y=J,this}setComponent(J,Q){switch(J){case 0:this.x=Q;break;case 1:this.y=Q;break;default:throw Error("THREE.Vector2: index is out of range: "+J)}return this}getComponent(J){switch(J){case 0:return this.x;case 1:return this.y;default:throw Error("THREE.Vector2: index is out of range: "+J)}}clone(){return new this.constructor(this.x,this.y)}copy(J){return this.x=J.x,this.y=J.y,this}add(J){return this.x+=J.x,this.y+=J.y,this}addScalar(J){return this.x+=J,this.y+=J,this}addVectors(J,Q){return this.x=J.x+Q.x,this.y=J.y+Q.y,this}addScaledVector(J,Q){return this.x+=J.x*Q,this.y+=J.y*Q,this}sub(J){return this.x-=J.x,this.y-=J.y,this}subScalar(J){return this.x-=J,this.y-=J,this}subVectors(J,Q){return this.x=J.x-Q.x,this.y=J.y-Q.y,this}multiply(J){return this.x*=J.x,this.y*=J.y,this}multiplyScalar(J){return this.x*=J,this.y*=J,this}divide(J){return this.x/=J.x,this.y/=J.y,this}divideScalar(J){return this.multiplyScalar(1/J)}applyMatrix3(J){let Q=this.x,$=this.y,Z=J.elements;return this.x=Z[0]*Q+Z[3]*$+Z[6],this.y=Z[1]*Q+Z[4]*$+Z[7],this}min(J){return this.x=Math.min(this.x,J.x),this.y=Math.min(this.y,J.y),this}max(J){return this.x=Math.max(this.x,J.x),this.y=Math.max(this.y,J.y),this}clamp(J,Q){return this.x=m0(this.x,J.x,Q.x),this.y=m0(this.y,J.y,Q.y),this}clampScalar(J,Q){return this.x=m0(this.x,J,Q),this.y=m0(this.y,J,Q),this}clampLength(J,Q){let $=this.length();return this.divideScalar($||1).multiplyScalar(m0($,J,Q))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(J){return this.x*J.x+this.y*J.y}cross(J){return this.x*J.y-this.y*J.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(J){let Q=Math.sqrt(this.lengthSq()*J.lengthSq());if(Q===0)return Math.PI/2;let $=this.dot(J)/Q;return Math.acos(m0($,-1,1))}distanceTo(J){return Math.sqrt(this.distanceToSquared(J))}distanceToSquared(J){let Q=this.x-J.x,$=this.y-J.y;return Q*Q+$*$}manhattanDistanceTo(J){return Math.abs(this.x-J.x)+Math.abs(this.y-J.y)}setLength(J){return this.normalize().multiplyScalar(J)}lerp(J,Q){return this.x+=(J.x-this.x)*Q,this.y+=(J.y-this.y)*Q,this}lerpVectors(J,Q,$){return this.x=J.x+(Q.x-J.x)*$,this.y=J.y+(Q.y-J.y)*$,this}equals(J){return J.x===this.x&&J.y===this.y}fromArray(J,Q=0){return this.x=J[Q],this.y=J[Q+1],this}toArray(J=[],Q=0){return J[Q]=this.x,J[Q+1]=this.y,J}fromBufferAttribute(J,Q){return this.x=J.getX(Q),this.y=J.getY(Q),this}rotateAround(J,Q){let $=Math.cos(Q),Z=Math.sin(Q),W=this.x-J.x,K=this.y-J.y;return this.x=W*$-K*Z+J.x,this.y=W*Z+K*$+J.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class R9{constructor(J=0,Q=0,$=0,Z=1){this.isQuaternion=!0,this._x=J,this._y=Q,this._z=$,this._w=Z}static slerpFlat(J,Q,$,Z,W,K,H){let Y=$[Z+0],X=$[Z+1],U=$[Z+2],q=$[Z+3],F=W[K+0],G=W[K+1],D=W[K+2],M=W[K+3];if(q!==M||Y!==F||X!==G||U!==D){let z=Y*F+X*G+U*D+q*M;if(z<0)F=-F,G=-G,D=-D,M=-M,z=-z;let E=1-H;if(z<0.9995){let N=Math.acos(z),C=Math.sin(N);E=Math.sin(E*N)/C,H=Math.sin(H*N)/C,Y=Y*E+F*H,X=X*E+G*H,U=U*E+D*H,q=q*E+M*H}else{Y=Y*E+F*H,X=X*E+G*H,U=U*E+D*H,q=q*E+M*H;let N=1/Math.sqrt(Y*Y+X*X+U*U+q*q);Y*=N,X*=N,U*=N,q*=N}}J[Q]=Y,J[Q+1]=X,J[Q+2]=U,J[Q+3]=q}static multiplyQuaternionsFlat(J,Q,$,Z,W,K){let H=$[Z],Y=$[Z+1],X=$[Z+2],U=$[Z+3],q=W[K],F=W[K+1],G=W[K+2],D=W[K+3];return J[Q]=H*D+U*q+Y*G-X*F,J[Q+1]=Y*D+U*F+X*q-H*G,J[Q+2]=X*D+U*G+H*F-Y*q,J[Q+3]=U*D-H*q-Y*F-X*G,J}get x(){return this._x}set x(J){this._x=J,this._onChangeCallback()}get y(){return this._y}set y(J){this._y=J,this._onChangeCallback()}get z(){return this._z}set z(J){this._z=J,this._onChangeCallback()}get w(){return this._w}set w(J){this._w=J,this._onChangeCallback()}set(J,Q,$,Z){return this._x=J,this._y=Q,this._z=$,this._w=Z,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(J){return this._x=J.x,this._y=J.y,this._z=J.z,this._w=J.w,this._onChangeCallback(),this}setFromEuler(J,Q=!0){let{_x:$,_y:Z,_z:W,_order:K}=J,H=Math.cos,Y=Math.sin,X=H($/2),U=H(Z/2),q=H(W/2),F=Y($/2),G=Y(Z/2),D=Y(W/2);switch(K){case"XYZ":this._x=F*U*q+X*G*D,this._y=X*G*q-F*U*D,this._z=X*U*D+F*G*q,this._w=X*U*q-F*G*D;break;case"YXZ":this._x=F*U*q+X*G*D,this._y=X*G*q-F*U*D,this._z=X*U*D-F*G*q,this._w=X*U*q+F*G*D;break;case"ZXY":this._x=F*U*q-X*G*D,this._y=X*G*q+F*U*D,this._z=X*U*D+F*G*q,this._w=X*U*q-F*G*D;break;case"ZYX":this._x=F*U*q-X*G*D,this._y=X*G*q+F*U*D,this._z=X*U*D-F*G*q,this._w=X*U*q+F*G*D;break;case"YZX":this._x=F*U*q+X*G*D,this._y=X*G*q+F*U*D,this._z=X*U*D-F*G*q,this._w=X*U*q-F*G*D;break;case"XZY":this._x=F*U*q-X*G*D,this._y=X*G*q-F*U*D,this._z=X*U*D+F*G*q,this._w=X*U*q+F*G*D;break;default:_0("Quaternion: .setFromEuler() encountered an unknown order: "+K)}if(Q===!0)this._onChangeCallback();return this}setFromAxisAngle(J,Q){let $=Q/2,Z=Math.sin($);return this._x=J.x*Z,this._y=J.y*Z,this._z=J.z*Z,this._w=Math.cos($),this._onChangeCallback(),this}setFromRotationMatrix(J){let Q=J.elements,$=Q[0],Z=Q[4],W=Q[8],K=Q[1],H=Q[5],Y=Q[9],X=Q[2],U=Q[6],q=Q[10],F=$+H+q;if(F>0){let G=0.5/Math.sqrt(F+1);this._w=0.25/G,this._x=(U-Y)*G,this._y=(W-X)*G,this._z=(K-Z)*G}else if($>H&&$>q){let G=2*Math.sqrt(1+$-H-q);this._w=(U-Y)/G,this._x=0.25*G,this._y=(Z+K)/G,this._z=(W+X)/G}else if(H>q){let G=2*Math.sqrt(1+H-$-q);this._w=(W-X)/G,this._x=(Z+K)/G,this._y=0.25*G,this._z=(Y+U)/G}else{let G=2*Math.sqrt(1+q-$-H);this._w=(K-Z)/G,this._x=(W+X)/G,this._y=(Y+U)/G,this._z=0.25*G}return this._onChangeCallback(),this}setFromUnitVectors(J,Q){let $=J.dot(Q)+1;if($<0.00000001)if($=0,Math.abs(J.x)>Math.abs(J.z))this._x=-J.y,this._y=J.x,this._z=0,this._w=$;else this._x=0,this._y=-J.z,this._z=J.y,this._w=$;else this._x=J.y*Q.z-J.z*Q.y,this._y=J.z*Q.x-J.x*Q.z,this._z=J.x*Q.y-J.y*Q.x,this._w=$;return this.normalize()}angleTo(J){return 2*Math.acos(Math.abs(m0(this.dot(J),-1,1)))}rotateTowards(J,Q){let $=this.angleTo(J);if($===0)return this;let Z=Math.min(1,Q/$);return this.slerp(J,Z),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(J){return this._x*J._x+this._y*J._y+this._z*J._z+this._w*J._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let J=this.length();if(J===0)this._x=0,this._y=0,this._z=0,this._w=1;else J=1/J,this._x=this._x*J,this._y=this._y*J,this._z=this._z*J,this._w=this._w*J;return this._onChangeCallback(),this}multiply(J){return this.multiplyQuaternions(this,J)}premultiply(J){return this.multiplyQuaternions(J,this)}multiplyQuaternions(J,Q){let{_x:$,_y:Z,_z:W,_w:K}=J,H=Q._x,Y=Q._y,X=Q._z,U=Q._w;return this._x=$*U+K*H+Z*X-W*Y,this._y=Z*U+K*Y+W*H-$*X,this._z=W*U+K*X+$*Y-Z*H,this._w=K*U-$*H-Z*Y-W*X,this._onChangeCallback(),this}slerp(J,Q){let{_x:$,_y:Z,_z:W,_w:K}=J,H=this.dot(J);if(H<0)$=-$,Z=-Z,W=-W,K=-K,H=-H;let Y=1-Q;if(H<0.9995){let X=Math.acos(H),U=Math.sin(X);Y=Math.sin(Y*X)/U,Q=Math.sin(Q*X)/U,this._x=this._x*Y+$*Q,this._y=this._y*Y+Z*Q,this._z=this._z*Y+W*Q,this._w=this._w*Y+K*Q,this._onChangeCallback()}else this._x=this._x*Y+$*Q,this._y=this._y*Y+Z*Q,this._z=this._z*Y+W*Q,this._w=this._w*Y+K*Q,this.normalize();return this}slerpQuaternions(J,Q,$){return this.copy(J).slerp(Q,$)}random(){let J=2*Math.PI*Math.random(),Q=2*Math.PI*Math.random(),$=Math.random(),Z=Math.sqrt(1-$),W=Math.sqrt($);return this.set(Z*Math.sin(J),Z*Math.cos(J),W*Math.sin(Q),W*Math.cos(Q))}equals(J){return J._x===this._x&&J._y===this._y&&J._z===this._z&&J._w===this._w}fromArray(J,Q=0){return this._x=J[Q],this._y=J[Q+1],this._z=J[Q+2],this._w=J[Q+3],this._onChangeCallback(),this}toArray(J=[],Q=0){return J[Q]=this._x,J[Q+1]=this._y,J[Q+2]=this._z,J[Q+3]=this._w,J}fromBufferAttribute(J,Q){return this._x=J.getX(Q),this._y=J.getY(Q),this._z=J.getZ(Q),this._w=J.getW(Q),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(J){return this._onChangeCallback=J,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class v{static{v.prototype.isVector3=!0}constructor(J=0,Q=0,$=0){this.x=J,this.y=Q,this.z=$}set(J,Q,$){if($===void 0)$=this.z;return this.x=J,this.y=Q,this.z=$,this}setScalar(J){return this.x=J,this.y=J,this.z=J,this}setX(J){return this.x=J,this}setY(J){return this.y=J,this}setZ(J){return this.z=J,this}setComponent(J,Q){switch(J){case 0:this.x=Q;break;case 1:this.y=Q;break;case 2:this.z=Q;break;default:throw Error("THREE.Vector3: index is out of range: "+J)}return this}getComponent(J){switch(J){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw Error("THREE.Vector3: index is out of range: "+J)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(J){return this.x=J.x,this.y=J.y,this.z=J.z,this}add(J){return this.x+=J.x,this.y+=J.y,this.z+=J.z,this}addScalar(J){return this.x+=J,this.y+=J,this.z+=J,this}addVectors(J,Q){return this.x=J.x+Q.x,this.y=J.y+Q.y,this.z=J.z+Q.z,this}addScaledVector(J,Q){return this.x+=J.x*Q,this.y+=J.y*Q,this.z+=J.z*Q,this}sub(J){return this.x-=J.x,this.y-=J.y,this.z-=J.z,this}subScalar(J){return this.x-=J,this.y-=J,this.z-=J,this}subVectors(J,Q){return this.x=J.x-Q.x,this.y=J.y-Q.y,this.z=J.z-Q.z,this}multiply(J){return this.x*=J.x,this.y*=J.y,this.z*=J.z,this}multiplyScalar(J){return this.x*=J,this.y*=J,this.z*=J,this}multiplyVectors(J,Q){return this.x=J.x*Q.x,this.y=J.y*Q.y,this.z=J.z*Q.z,this}applyEuler(J){return this.applyQuaternion(P$.setFromEuler(J))}applyAxisAngle(J,Q){return this.applyQuaternion(P$.setFromAxisAngle(J,Q))}applyMatrix3(J){let Q=this.x,$=this.y,Z=this.z,W=J.elements;return this.x=W[0]*Q+W[3]*$+W[6]*Z,this.y=W[1]*Q+W[4]*$+W[7]*Z,this.z=W[2]*Q+W[5]*$+W[8]*Z,this}applyNormalMatrix(J){return this.applyMatrix3(J).normalize()}applyMatrix4(J){let Q=this.x,$=this.y,Z=this.z,W=J.elements,K=1/(W[3]*Q+W[7]*$+W[11]*Z+W[15]);return this.x=(W[0]*Q+W[4]*$+W[8]*Z+W[12])*K,this.y=(W[1]*Q+W[5]*$+W[9]*Z+W[13])*K,this.z=(W[2]*Q+W[6]*$+W[10]*Z+W[14])*K,this}applyQuaternion(J){let Q=this.x,$=this.y,Z=this.z,W=J.x,K=J.y,H=J.z,Y=J.w,X=2*(K*Z-H*$),U=2*(H*Q-W*Z),q=2*(W*$-K*Q);return this.x=Q+Y*X+K*q-H*U,this.y=$+Y*U+H*X-W*q,this.z=Z+Y*q+W*U-K*X,this}project(J){return this.applyMatrix4(J.matrixWorldInverse).applyMatrix4(J.projectionMatrix)}unproject(J){return this.applyMatrix4(J.projectionMatrixInverse).applyMatrix4(J.matrixWorld)}transformDirection(J){let Q=this.x,$=this.y,Z=this.z,W=J.elements;return this.x=W[0]*Q+W[4]*$+W[8]*Z,this.y=W[1]*Q+W[5]*$+W[9]*Z,this.z=W[2]*Q+W[6]*$+W[10]*Z,this.normalize()}divide(J){return this.x/=J.x,this.y/=J.y,this.z/=J.z,this}divideScalar(J){return this.multiplyScalar(1/J)}min(J){return this.x=Math.min(this.x,J.x),this.y=Math.min(this.y,J.y),this.z=Math.min(this.z,J.z),this}max(J){return this.x=Math.max(this.x,J.x),this.y=Math.max(this.y,J.y),this.z=Math.max(this.z,J.z),this}clamp(J,Q){return this.x=m0(this.x,J.x,Q.x),this.y=m0(this.y,J.y,Q.y),this.z=m0(this.z,J.z,Q.z),this}clampScalar(J,Q){return this.x=m0(this.x,J,Q),this.y=m0(this.y,J,Q),this.z=m0(this.z,J,Q),this}clampLength(J,Q){let $=this.length();return this.divideScalar($||1).multiplyScalar(m0($,J,Q))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(J){return this.x*J.x+this.y*J.y+this.z*J.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(J){return this.normalize().multiplyScalar(J)}lerp(J,Q){return this.x+=(J.x-this.x)*Q,this.y+=(J.y-this.y)*Q,this.z+=(J.z-this.z)*Q,this}lerpVectors(J,Q,$){return this.x=J.x+(Q.x-J.x)*$,this.y=J.y+(Q.y-J.y)*$,this.z=J.z+(Q.z-J.z)*$,this}cross(J){return this.crossVectors(this,J)}crossVectors(J,Q){let{x:$,y:Z,z:W}=J,K=Q.x,H=Q.y,Y=Q.z;return this.x=Z*Y-W*H,this.y=W*K-$*Y,this.z=$*H-Z*K,this}projectOnVector(J){let Q=J.lengthSq();if(Q===0)return this.set(0,0,0);let $=J.dot(this)/Q;return this.copy(J).multiplyScalar($)}projectOnPlane(J){return q6.copy(this).projectOnVector(J),this.sub(q6)}reflect(J){return this.sub(q6.copy(J).multiplyScalar(2*this.dot(J)))}angleTo(J){let Q=Math.sqrt(this.lengthSq()*J.lengthSq());if(Q===0)return Math.PI/2;let $=this.dot(J)/Q;return Math.acos(m0($,-1,1))}distanceTo(J){return Math.sqrt(this.distanceToSquared(J))}distanceToSquared(J){let Q=this.x-J.x,$=this.y-J.y,Z=this.z-J.z;return Q*Q+$*$+Z*Z}manhattanDistanceTo(J){return Math.abs(this.x-J.x)+Math.abs(this.y-J.y)+Math.abs(this.z-J.z)}setFromSpherical(J){return this.setFromSphericalCoords(J.radius,J.phi,J.theta)}setFromSphericalCoords(J,Q,$){let Z=Math.sin(Q)*J;return this.x=Z*Math.sin($),this.y=Math.cos(Q)*J,this.z=Z*Math.cos($),this}setFromCylindrical(J){return this.setFromCylindricalCoords(J.radius,J.theta,J.y)}setFromCylindricalCoords(J,Q,$){return this.x=J*Math.sin(Q),this.y=$,this.z=J*Math.cos(Q),this}setFromMatrixPosition(J){let Q=J.elements;return this.x=Q[12],this.y=Q[13],this.z=Q[14],this}setFromMatrixScale(J){let Q=this.setFromMatrixColumn(J,0).length(),$=this.setFromMatrixColumn(J,1).length(),Z=this.setFromMatrixColumn(J,2).length();return this.x=Q,this.y=$,this.z=Z,this}setFromMatrixColumn(J,Q){return this.fromArray(J.elements,Q*4)}setFromMatrix3Column(J,Q){return this.fromArray(J.elements,Q*3)}setFromEuler(J){return this.x=J._x,this.y=J._y,this.z=J._z,this}setFromColor(J){return this.x=J.r,this.y=J.g,this.z=J.b,this}equals(J){return J.x===this.x&&J.y===this.y&&J.z===this.z}fromArray(J,Q=0){return this.x=J[Q],this.y=J[Q+1],this.z=J[Q+2],this}toArray(J=[],Q=0){return J[Q]=this.x,J[Q+1]=this.y,J[Q+2]=this.z,J}fromBufferAttribute(J,Q){return this.x=J.getX(Q),this.y=J.getY(Q),this.z=J.getZ(Q),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let J=Math.random()*Math.PI*2,Q=Math.random()*2-1,$=Math.sqrt(1-Q*Q);return this.x=$*Math.cos(J),this.y=Q,this.z=$*Math.sin(J),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}var q6=new v,P$=new R9;class j0{static{j0.prototype.isMatrix3=!0}constructor(J,Q,$,Z,W,K,H,Y,X){if(this.elements=[1,0,0,0,1,0,0,0,1],J!==void 0)this.set(J,Q,$,Z,W,K,H,Y,X)}set(J,Q,$,Z,W,K,H,Y,X){let U=this.elements;return U[0]=J,U[1]=Z,U[2]=H,U[3]=Q,U[4]=W,U[5]=Y,U[6]=$,U[7]=K,U[8]=X,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(J){let Q=this.elements,$=J.elements;return Q[0]=$[0],Q[1]=$[1],Q[2]=$[2],Q[3]=$[3],Q[4]=$[4],Q[5]=$[5],Q[6]=$[6],Q[7]=$[7],Q[8]=$[8],this}extractBasis(J,Q,$){return J.setFromMatrix3Column(this,0),Q.setFromMatrix3Column(this,1),$.setFromMatrix3Column(this,2),this}setFromMatrix4(J){let Q=J.elements;return this.set(Q[0],Q[4],Q[8],Q[1],Q[5],Q[9],Q[2],Q[6],Q[10]),this}multiply(J){return this.multiplyMatrices(this,J)}premultiply(J){return this.multiplyMatrices(J,this)}multiplyMatrices(J,Q){let $=J.elements,Z=Q.elements,W=this.elements,K=$[0],H=$[3],Y=$[6],X=$[1],U=$[4],q=$[7],F=$[2],G=$[5],D=$[8],M=Z[0],z=Z[3],E=Z[6],N=Z[1],C=Z[4],_=Z[7],L=Z[2],A=Z[5],I=Z[8];return W[0]=K*M+H*N+Y*L,W[3]=K*z+H*C+Y*A,W[6]=K*E+H*_+Y*I,W[1]=X*M+U*N+q*L,W[4]=X*z+U*C+q*A,W[7]=X*E+U*_+q*I,W[2]=F*M+G*N+D*L,W[5]=F*z+G*C+D*A,W[8]=F*E+G*_+D*I,this}multiplyScalar(J){let Q=this.elements;return Q[0]*=J,Q[3]*=J,Q[6]*=J,Q[1]*=J,Q[4]*=J,Q[7]*=J,Q[2]*=J,Q[5]*=J,Q[8]*=J,this}determinant(){let J=this.elements,Q=J[0],$=J[1],Z=J[2],W=J[3],K=J[4],H=J[5],Y=J[6],X=J[7],U=J[8];return Q*K*U-Q*H*X-$*W*U+$*H*Y+Z*W*X-Z*K*Y}invert(){let J=this.elements,Q=J[0],$=J[1],Z=J[2],W=J[3],K=J[4],H=J[5],Y=J[6],X=J[7],U=J[8],q=U*K-H*X,F=H*Y-U*W,G=X*W-K*Y,D=Q*q+$*F+Z*G;if(D===0)return this.set(0,0,0,0,0,0,0,0,0);let M=1/D;return J[0]=q*M,J[1]=(Z*X-U*$)*M,J[2]=(H*$-Z*K)*M,J[3]=F*M,J[4]=(U*Q-Z*Y)*M,J[5]=(Z*W-H*Q)*M,J[6]=G*M,J[7]=($*Y-X*Q)*M,J[8]=(K*Q-$*W)*M,this}transpose(){let J,Q=this.elements;return J=Q[1],Q[1]=Q[3],Q[3]=J,J=Q[2],Q[2]=Q[6],Q[6]=J,J=Q[5],Q[5]=Q[7],Q[7]=J,this}getNormalMatrix(J){return this.setFromMatrix4(J).invert().transpose()}transposeIntoArray(J){let Q=this.elements;return J[0]=Q[0],J[1]=Q[3],J[2]=Q[6],J[3]=Q[1],J[4]=Q[4],J[5]=Q[7],J[6]=Q[2],J[7]=Q[5],J[8]=Q[8],this}setUvTransform(J,Q,$,Z,W,K,H){let Y=Math.cos(W),X=Math.sin(W);return this.set($*Y,$*X,-$*(Y*K+X*H)+K+J,-Z*X,Z*Y,-Z*(-X*K+Y*H)+H+Q,0,0,1),this}scale(J,Q){return p9("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(F6.makeScale(J,Q)),this}rotate(J){return p9("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(F6.makeRotation(-J)),this}translate(J,Q){return p9("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(F6.makeTranslation(J,Q)),this}makeTranslation(J,Q){if(J.isVector2)this.set(1,0,J.x,0,1,J.y,0,0,1);else this.set(1,0,J,0,1,Q,0,0,1);return this}makeRotation(J){let Q=Math.cos(J),$=Math.sin(J);return this.set(Q,-$,0,$,Q,0,0,0,1),this}makeScale(J,Q){return this.set(J,0,0,0,Q,0,0,0,1),this}equals(J){let Q=this.elements,$=J.elements;for(let Z=0;Z<9;Z++)if(Q[Z]!==$[Z])return!1;return!0}fromArray(J,Q=0){for(let $=0;$<9;$++)this.elements[$]=J[$+Q];return this}toArray(J=[],Q=0){let $=this.elements;return J[Q]=$[0],J[Q+1]=$[1],J[Q+2]=$[2],J[Q+3]=$[3],J[Q+4]=$[4],J[Q+5]=$[5],J[Q+6]=$[6],J[Q+7]=$[7],J[Q+8]=$[8],J}clone(){return new this.constructor().fromArray(this.elements)}}var F6=new j0,T$=new j0().set(0.4123908,0.3575843,0.1804808,0.212639,0.7151687,0.0721923,0.0193308,0.1191948,0.9505322),S$=new j0().set(3.2409699,-1.5373832,-0.4986108,-0.9692436,1.8759675,0.0415551,0.0556301,-0.203977,1.0569715);function XK(){let J={enabled:!0,workingColorSpace:"srgb-linear",spaces:{},convert:function(W,K,H){if(this.enabled===!1||K===H||!K||!H)return W;if(this.spaces[K].transfer==="srgb")W.r=E9(W.r),W.g=E9(W.g),W.b=E9(W.b);if(this.spaces[K].primaries!==this.spaces[H].primaries)W.applyMatrix3(this.spaces[K].toXYZ),W.applyMatrix3(this.spaces[H].fromXYZ);if(this.spaces[H].transfer==="srgb")W.r=D8(W.r),W.g=D8(W.g),W.b=D8(W.b);return W},workingToColorSpace:function(W,K){return this.convert(W,this.workingColorSpace,K)},colorSpaceToWorking:function(W,K){return this.convert(W,K,this.workingColorSpace)},getPrimaries:function(W){return this.spaces[W].primaries},getTransfer:function(W){if(W==="")return"linear";return this.spaces[W].transfer},getToneMappingMode:function(W){return this.spaces[W].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(W,K=this.workingColorSpace){return W.fromArray(this.spaces[K].luminanceCoefficients)},define:function(W){Object.assign(this.spaces,W)},_getMatrix:function(W,K,H){return W.copy(this.spaces[K].toXYZ).multiply(this.spaces[H].fromXYZ)},_getDrawingBufferColorSpace:function(W){return this.spaces[W].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(W=this.workingColorSpace){return this.spaces[W].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(W,K){return p9("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),J.workingToColorSpace(W,K)},toWorkingColorSpace:function(W,K){return p9("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),J.colorSpaceToWorking(W,K)}},Q=[0.64,0.33,0.3,0.6,0.15,0.06],$=[0.2126,0.7152,0.0722],Z=[0.3127,0.329];return J.define({["srgb-linear"]:{primaries:Q,whitePoint:Z,transfer:"linear",toXYZ:T$,fromXYZ:S$,luminanceCoefficients:$,workingColorSpaceConfig:{unpackColorSpace:"srgb"},outputColorSpaceConfig:{drawingBufferColorSpace:"srgb"}},["srgb"]:{primaries:Q,whitePoint:Z,transfer:"srgb",toXYZ:T$,fromXYZ:S$,luminanceCoefficients:$,outputColorSpaceConfig:{drawingBufferColorSpace:"srgb"}}}),J}var l0=XK();function E9(J){return J<0.04045?J*0.0773993808:Math.pow(J*0.9478672986+0.0521327014,2.4)}function D8(J){return J<0.0031308?J*12.92:1.055*Math.pow(J,0.41666)-0.055}var Z8;class bQ{static getDataURL(J,Q="image/png"){if(/^data:/i.test(J.src))return J.src;if(typeof HTMLCanvasElement>"u")return J.src;let $;if(J instanceof HTMLCanvasElement)$=J;else{if(Z8===void 0)Z8=T8("canvas");Z8.width=J.width,Z8.height=J.height;let Z=Z8.getContext("2d");if(J instanceof ImageData)Z.putImageData(J,0,0);else Z.drawImage(J,0,0,J.width,J.height);$=Z8}return $.toDataURL(Q)}static sRGBToLinear(J){if(typeof HTMLImageElement<"u"&&J instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&J instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&J instanceof ImageBitmap){let Q=T8("canvas");Q.width=J.width,Q.height=J.height;let $=Q.getContext("2d");$.drawImage(J,0,0,J.width,J.height);let Z=$.getImageData(0,0,J.width,J.height),W=Z.data;for(let K=0;K<W.length;K++)W[K]=E9(W[K]/255)*255;return $.putImageData(Z,0,0),Q}else if(J.data){let Q=J.data.slice(0);for(let $=0;$<Q.length;$++)if(Q instanceof Uint8Array||Q instanceof Uint8ClampedArray)Q[$]=Math.floor(E9(Q[$]/255)*255);else Q[$]=E9(Q[$]);return{data:Q,width:J.width,height:J.height}}else return _0("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),J}}var UK=0;class g8{constructor(J=null){this.isSource=!0,Object.defineProperty(this,"id",{value:UK++}),this.uuid=x8(),this.data=J,this.dataReady=!0,this.version=0}getSize(J){let Q=this.data;if(typeof HTMLVideoElement<"u"&&Q instanceof HTMLVideoElement)J.set(Q.videoWidth,Q.videoHeight,0);else if(typeof VideoFrame<"u"&&Q instanceof VideoFrame)J.set(Q.displayWidth,Q.displayHeight,0);else if(Q!==null)J.set(Q.width,Q.height,Q.depth||0);else J.set(0,0,0);return J}set needsUpdate(J){if(J===!0)this.version++}toJSON(J){let Q=J===void 0||typeof J==="string";if(!Q&&J.images[this.uuid]!==void 0)return J.images[this.uuid];let $={uuid:this.uuid,url:""},Z=this.data;if(Z!==null){let W;if(Array.isArray(Z)){W=[];for(let K=0,H=Z.length;K<H;K++)if(Z[K].isDataTexture)W.push(D6(Z[K].image));else W.push(D6(Z[K]))}else W=D6(Z);$.url=W}if(!Q)J.images[this.uuid]=$;return $}}function D6(J){if(typeof HTMLImageElement<"u"&&J instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&J instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&J instanceof ImageBitmap)return bQ.getDataURL(J);else if(J.data)return{data:Array.from(J.data),width:J.width,height:J.height,type:J.data.constructor.name};else return _0("Texture: Unable to serialize Texture."),{}}var GK=0,O6=new v;class wJ extends O9{constructor(J=wJ.DEFAULT_IMAGE,Q=wJ.DEFAULT_MAPPING,$=1001,Z=1001,W=1006,K=1008,H=1023,Y=1009,X=wJ.DEFAULT_ANISOTROPY,U=""){super();this.isTexture=!0,Object.defineProperty(this,"id",{value:GK++}),this.uuid=x8(),this.name="",this.source=new g8(J),this.mipmaps=[],this.mapping=Q,this.channel=0,this.wrapS=$,this.wrapT=Z,this.magFilter=W,this.minFilter=K,this.anisotropy=X,this.format=H,this.internalFormat=null,this.type=Y,this.offset=new p0(0,0),this.repeat=new p0(1,1),this.center=new p0(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new j0,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=U,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=J&&J.depth&&J.depth>1?!0:!1,this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(O6).x}get height(){return this.source.getSize(O6).y}get depth(){return this.source.getSize(O6).z}get image(){return this.source.data}set image(J){this.source.data=J}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(J,Q){this.updateRanges.push({start:J,count:Q})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(J){return this.name=J.name,this.source=J.source,this.mipmaps=J.mipmaps.slice(0),this.mapping=J.mapping,this.channel=J.channel,this.wrapS=J.wrapS,this.wrapT=J.wrapT,this.magFilter=J.magFilter,this.minFilter=J.minFilter,this.anisotropy=J.anisotropy,this.format=J.format,this.internalFormat=J.internalFormat,this.type=J.type,this.normalized=J.normalized,this.offset.copy(J.offset),this.repeat.copy(J.repeat),this.center.copy(J.center),this.rotation=J.rotation,this.matrixAutoUpdate=J.matrixAutoUpdate,this.matrix.copy(J.matrix),this.generateMipmaps=J.generateMipmaps,this.premultiplyAlpha=J.premultiplyAlpha,this.flipY=J.flipY,this.unpackAlignment=J.unpackAlignment,this.colorSpace=J.colorSpace,this.renderTarget=J.renderTarget,this.isRenderTargetTexture=J.isRenderTargetTexture,this.isArrayTexture=J.isArrayTexture,this.userData=JSON.parse(JSON.stringify(J.userData)),this.needsUpdate=!0,this}setValues(J){for(let Q in J){let $=J[Q];if($===void 0){_0(`Texture.setValues(): parameter '${Q}' has value of undefined.`);continue}let Z=this[Q];if(Z===void 0){_0(`Texture.setValues(): property '${Q}' does not exist.`);continue}if(Z&&$&&(Z.isVector2&&$.isVector2))Z.copy($);else if(Z&&$&&(Z.isVector3&&$.isVector3))Z.copy($);else if(Z&&$&&(Z.isMatrix3&&$.isMatrix3))Z.copy($);else this[Q]=$}}toJSON(J){let Q=J===void 0||typeof J==="string";if(!Q&&J.textures[this.uuid]!==void 0)return J.textures[this.uuid];let $={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(J).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};if(Object.keys(this.userData).length>0)$.userData=this.userData;if(!Q)J.textures[this.uuid]=$;return $}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(J){if(this.mapping!==300)return J;if(J.applyMatrix3(this.matrix),J.x<0||J.x>1)switch(this.wrapS){case 1000:J.x=J.x-Math.floor(J.x);break;case 1001:J.x=J.x<0?0:1;break;case 1002:if(Math.abs(Math.floor(J.x)%2)===1)J.x=Math.ceil(J.x)-J.x;else J.x=J.x-Math.floor(J.x);break}if(J.y<0||J.y>1)switch(this.wrapT){case 1000:J.y=J.y-Math.floor(J.y);break;case 1001:J.y=J.y<0?0:1;break;case 1002:if(Math.abs(Math.floor(J.y)%2)===1)J.y=Math.ceil(J.y)-J.y;else J.y=J.y-Math.floor(J.y);break}if(this.flipY)J.y=1-J.y;return J}set needsUpdate(J){if(J===!0)this.version++,this.source.needsUpdate=!0}set needsPMREMUpdate(J){if(J===!0)this.pmremVersion++}}wJ.DEFAULT_IMAGE=null;wJ.DEFAULT_MAPPING=300;wJ.DEFAULT_ANISOTROPY=1;class GJ{static{GJ.prototype.isVector4=!0}constructor(J=0,Q=0,$=0,Z=1){this.x=J,this.y=Q,this.z=$,this.w=Z}get width(){return this.z}set width(J){this.z=J}get height(){return this.w}set height(J){this.w=J}set(J,Q,$,Z){return this.x=J,this.y=Q,this.z=$,this.w=Z,this}setScalar(J){return this.x=J,this.y=J,this.z=J,this.w=J,this}setX(J){return this.x=J,this}setY(J){return this.y=J,this}setZ(J){return this.z=J,this}setW(J){return this.w=J,this}setComponent(J,Q){switch(J){case 0:this.x=Q;break;case 1:this.y=Q;break;case 2:this.z=Q;break;case 3:this.w=Q;break;default:throw Error("THREE.Vector4: index is out of range: "+J)}return this}getComponent(J){switch(J){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw Error("THREE.Vector4: index is out of range: "+J)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(J){return this.x=J.x,this.y=J.y,this.z=J.z,this.w=J.w!==void 0?J.w:1,this}add(J){return this.x+=J.x,this.y+=J.y,this.z+=J.z,this.w+=J.w,this}addScalar(J){return this.x+=J,this.y+=J,this.z+=J,this.w+=J,this}addVectors(J,Q){return this.x=J.x+Q.x,this.y=J.y+Q.y,this.z=J.z+Q.z,this.w=J.w+Q.w,this}addScaledVector(J,Q){return this.x+=J.x*Q,this.y+=J.y*Q,this.z+=J.z*Q,this.w+=J.w*Q,this}sub(J){return this.x-=J.x,this.y-=J.y,this.z-=J.z,this.w-=J.w,this}subScalar(J){return this.x-=J,this.y-=J,this.z-=J,this.w-=J,this}subVectors(J,Q){return this.x=J.x-Q.x,this.y=J.y-Q.y,this.z=J.z-Q.z,this.w=J.w-Q.w,this}multiply(J){return this.x*=J.x,this.y*=J.y,this.z*=J.z,this.w*=J.w,this}multiplyScalar(J){return this.x*=J,this.y*=J,this.z*=J,this.w*=J,this}applyMatrix4(J){let Q=this.x,$=this.y,Z=this.z,W=this.w,K=J.elements;return this.x=K[0]*Q+K[4]*$+K[8]*Z+K[12]*W,this.y=K[1]*Q+K[5]*$+K[9]*Z+K[13]*W,this.z=K[2]*Q+K[6]*$+K[10]*Z+K[14]*W,this.w=K[3]*Q+K[7]*$+K[11]*Z+K[15]*W,this}divide(J){return this.x/=J.x,this.y/=J.y,this.z/=J.z,this.w/=J.w,this}divideScalar(J){return this.multiplyScalar(1/J)}setAxisAngleFromQuaternion(J){this.w=2*Math.acos(J.w);let Q=Math.sqrt(1-J.w*J.w);if(Q<0.0001)this.x=1,this.y=0,this.z=0;else this.x=J.x/Q,this.y=J.y/Q,this.z=J.z/Q;return this}setAxisAngleFromRotationMatrix(J){let Q,$,Z,W,K=0.01,H=0.1,Y=J.elements,X=Y[0],U=Y[4],q=Y[8],F=Y[1],G=Y[5],D=Y[9],M=Y[2],z=Y[6],E=Y[10];if(Math.abs(U-F)<0.01&&Math.abs(q-M)<0.01&&Math.abs(D-z)<0.01){if(Math.abs(U+F)<0.1&&Math.abs(q+M)<0.1&&Math.abs(D+z)<0.1&&Math.abs(X+G+E-3)<0.1)return this.set(1,0,0,0),this;Q=Math.PI;let C=(X+1)/2,_=(G+1)/2,L=(E+1)/2,A=(U+F)/4,I=(q+M)/4,P=(D+z)/4;if(C>_&&C>L)if(C<0.01)$=0,Z=0.707106781,W=0.707106781;else $=Math.sqrt(C),Z=A/$,W=I/$;else if(_>L)if(_<0.01)$=0.707106781,Z=0,W=0.707106781;else Z=Math.sqrt(_),$=A/Z,W=P/Z;else if(L<0.01)$=0.707106781,Z=0.707106781,W=0;else W=Math.sqrt(L),$=I/W,Z=P/W;return this.set($,Z,W,Q),this}let N=Math.sqrt((z-D)*(z-D)+(q-M)*(q-M)+(F-U)*(F-U));if(Math.abs(N)<0.001)N=1;return this.x=(z-D)/N,this.y=(q-M)/N,this.z=(F-U)/N,this.w=Math.acos((X+G+E-1)/2),this}setFromMatrixPosition(J){let Q=J.elements;return this.x=Q[12],this.y=Q[13],this.z=Q[14],this.w=Q[15],this}min(J){return this.x=Math.min(this.x,J.x),this.y=Math.min(this.y,J.y),this.z=Math.min(this.z,J.z),this.w=Math.min(this.w,J.w),this}max(J){return this.x=Math.max(this.x,J.x),this.y=Math.max(this.y,J.y),this.z=Math.max(this.z,J.z),this.w=Math.max(this.w,J.w),this}clamp(J,Q){return this.x=m0(this.x,J.x,Q.x),this.y=m0(this.y,J.y,Q.y),this.z=m0(this.z,J.z,Q.z),this.w=m0(this.w,J.w,Q.w),this}clampScalar(J,Q){return this.x=m0(this.x,J,Q),this.y=m0(this.y,J,Q),this.z=m0(this.z,J,Q),this.w=m0(this.w,J,Q),this}clampLength(J,Q){let $=this.length();return this.divideScalar($||1).multiplyScalar(m0($,J,Q))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(J){return this.x*J.x+this.y*J.y+this.z*J.z+this.w*J.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(J){return this.normalize().multiplyScalar(J)}lerp(J,Q){return this.x+=(J.x-this.x)*Q,this.y+=(J.y-this.y)*Q,this.z+=(J.z-this.z)*Q,this.w+=(J.w-this.w)*Q,this}lerpVectors(J,Q,$){return this.x=J.x+(Q.x-J.x)*$,this.y=J.y+(Q.y-J.y)*$,this.z=J.z+(Q.z-J.z)*$,this.w=J.w+(Q.w-J.w)*$,this}equals(J){return J.x===this.x&&J.y===this.y&&J.z===this.z&&J.w===this.w}fromArray(J,Q=0){return this.x=J[Q],this.y=J[Q+1],this.z=J[Q+2],this.w=J[Q+3],this}toArray(J=[],Q=0){return J[Q]=this.x,J[Q+1]=this.y,J[Q+2]=this.z,J[Q+3]=this.w,J}fromBufferAttribute(J,Q){return this.x=J.getX(Q),this.y=J.getY(Q),this.z=J.getZ(Q),this.w=J.getW(Q),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class hQ extends O9{constructor(J=1,Q=1,$={}){super();$=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:1006,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},$),this.isRenderTarget=!0,this.width=J,this.height=Q,this.depth=$.depth,this.scissor=new GJ(0,0,J,Q),this.scissorTest=!1,this.viewport=new GJ(0,0,J,Q),this.textures=[];let Z={width:J,height:Q,depth:$.depth},W=new wJ(Z),K=$.count;for(let H=0;H<K;H++)this.textures[H]=W.clone(),this.textures[H].isRenderTargetTexture=!0,this.textures[H].renderTarget=this;this._setTextureOptions($),this.depthBuffer=$.depthBuffer,this.stencilBuffer=$.stencilBuffer,this.resolveDepthBuffer=$.resolveDepthBuffer,this.resolveStencilBuffer=$.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=$.depthTexture,this.samples=$.samples,this.multiview=$.multiview,this.useArrayDepthTexture=$.useArrayDepthTexture}_setTextureOptions(J={}){let Q={minFilter:1006,generateMipmaps:!1,flipY:!1,internalFormat:null};if(J.mapping!==void 0)Q.mapping=J.mapping;if(J.wrapS!==void 0)Q.wrapS=J.wrapS;if(J.wrapT!==void 0)Q.wrapT=J.wrapT;if(J.wrapR!==void 0)Q.wrapR=J.wrapR;if(J.magFilter!==void 0)Q.magFilter=J.magFilter;if(J.minFilter!==void 0)Q.minFilter=J.minFilter;if(J.format!==void 0)Q.format=J.format;if(J.type!==void 0)Q.type=J.type;if(J.anisotropy!==void 0)Q.anisotropy=J.anisotropy;if(J.colorSpace!==void 0)Q.colorSpace=J.colorSpace;if(J.flipY!==void 0)Q.flipY=J.flipY;if(J.generateMipmaps!==void 0)Q.generateMipmaps=J.generateMipmaps;if(J.internalFormat!==void 0)Q.internalFormat=J.internalFormat;for(let $=0;$<this.textures.length;$++)this.textures[$].setValues(Q)}get texture(){return this.textures[0]}set texture(J){this.textures[0]=J}set depthTexture(J){if(this._depthTexture!==null)this._depthTexture.renderTarget=null;if(J!==null)J.renderTarget=this;this._depthTexture=J}get depthTexture(){return this._depthTexture}setSize(J,Q,$=1){if(this.width!==J||this.height!==Q||this.depth!==$){this.width=J,this.height=Q,this.depth=$;for(let Z=0,W=this.textures.length;Z<W;Z++)if(this.textures[Z].image.width=J,this.textures[Z].image.height=Q,this.textures[Z].image.depth=$,this.textures[Z].isData3DTexture!==!0)this.textures[Z].isArrayTexture=this.textures[Z].image.depth>1;this.dispose()}this.viewport.set(0,0,J,Q),this.scissor.set(0,0,J,Q)}clone(){return new this.constructor().copy(this)}copy(J){this.width=J.width,this.height=J.height,this.depth=J.depth,this.scissor.copy(J.scissor),this.scissorTest=J.scissorTest,this.viewport.copy(J.viewport),this.textures.length=0;for(let Q=0,$=J.textures.length;Q<$;Q++){this.textures[Q]=J.textures[Q].clone(),this.textures[Q].isRenderTargetTexture=!0,this.textures[Q].renderTarget=this;let Z=Object.assign({},J.textures[Q].image);this.textures[Q].source=new g8(Z)}if(this.depthBuffer=J.depthBuffer,this.stencilBuffer=J.stencilBuffer,this.resolveDepthBuffer=J.resolveDepthBuffer,this.resolveStencilBuffer=J.resolveStencilBuffer,J.depthTexture!==null)this.depthTexture=J.depthTexture.clone();return this.samples=J.samples,this.multiview=J.multiview,this.useArrayDepthTexture=J.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class mJ extends hQ{constructor(J=1,Q=1,$={}){super(J,Q,$);this.isWebGLRenderTarget=!0}}class g7 extends wJ{constructor(J=null,Q=1,$=1,Z=1){super(null);this.isDataArrayTexture=!0,this.image={data:J,width:Q,height:$,depth:Z},this.magFilter=1003,this.minFilter=1003,this.wrapR=1001,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(J){this.layerUpdates.add(J)}clearLayerUpdates(){this.layerUpdates.clear()}}class xQ extends wJ{constructor(J=null,Q=1,$=1,Z=1){super(null);this.isData3DTexture=!0,this.image={data:J,width:Q,height:$,depth:Z},this.magFilter=1003,this.minFilter=1003,this.wrapR=1001,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class HJ{static{HJ.prototype.isMatrix4=!0}constructor(J,Q,$,Z,W,K,H,Y,X,U,q,F,G,D,M,z){if(this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],J!==void 0)this.set(J,Q,$,Z,W,K,H,Y,X,U,q,F,G,D,M,z)}set(J,Q,$,Z,W,K,H,Y,X,U,q,F,G,D,M,z){let E=this.elements;return E[0]=J,E[4]=Q,E[8]=$,E[12]=Z,E[1]=W,E[5]=K,E[9]=H,E[13]=Y,E[2]=X,E[6]=U,E[10]=q,E[14]=F,E[3]=G,E[7]=D,E[11]=M,E[15]=z,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new HJ().fromArray(this.elements)}copy(J){let Q=this.elements,$=J.elements;return Q[0]=$[0],Q[1]=$[1],Q[2]=$[2],Q[3]=$[3],Q[4]=$[4],Q[5]=$[5],Q[6]=$[6],Q[7]=$[7],Q[8]=$[8],Q[9]=$[9],Q[10]=$[10],Q[11]=$[11],Q[12]=$[12],Q[13]=$[13],Q[14]=$[14],Q[15]=$[15],this}copyPosition(J){let Q=this.elements,$=J.elements;return Q[12]=$[12],Q[13]=$[13],Q[14]=$[14],this}setFromMatrix3(J){let Q=J.elements;return this.set(Q[0],Q[3],Q[6],0,Q[1],Q[4],Q[7],0,Q[2],Q[5],Q[8],0,0,0,0,1),this}extractBasis(J,Q,$){if(this.determinantAffine()===0)return J.set(1,0,0),Q.set(0,1,0),$.set(0,0,1),this;return J.setFromMatrixColumn(this,0),Q.setFromMatrixColumn(this,1),$.setFromMatrixColumn(this,2),this}makeBasis(J,Q,$){return this.set(J.x,Q.x,$.x,0,J.y,Q.y,$.y,0,J.z,Q.z,$.z,0,0,0,0,1),this}extractRotation(J){if(J.determinantAffine()===0)return this.identity();let Q=this.elements,$=J.elements,Z=1/W8.setFromMatrixColumn(J,0).length(),W=1/W8.setFromMatrixColumn(J,1).length(),K=1/W8.setFromMatrixColumn(J,2).length();return Q[0]=$[0]*Z,Q[1]=$[1]*Z,Q[2]=$[2]*Z,Q[3]=0,Q[4]=$[4]*W,Q[5]=$[5]*W,Q[6]=$[6]*W,Q[7]=0,Q[8]=$[8]*K,Q[9]=$[9]*K,Q[10]=$[10]*K,Q[11]=0,Q[12]=0,Q[13]=0,Q[14]=0,Q[15]=1,this}makeRotationFromEuler(J){let Q=this.elements,$=J.x,Z=J.y,W=J.z,K=Math.cos($),H=Math.sin($),Y=Math.cos(Z),X=Math.sin(Z),U=Math.cos(W),q=Math.sin(W);if(J.order==="XYZ"){let F=K*U,G=K*q,D=H*U,M=H*q;Q[0]=Y*U,Q[4]=-Y*q,Q[8]=X,Q[1]=G+D*X,Q[5]=F-M*X,Q[9]=-H*Y,Q[2]=M-F*X,Q[6]=D+G*X,Q[10]=K*Y}else if(J.order==="YXZ"){let F=Y*U,G=Y*q,D=X*U,M=X*q;Q[0]=F+M*H,Q[4]=D*H-G,Q[8]=K*X,Q[1]=K*q,Q[5]=K*U,Q[9]=-H,Q[2]=G*H-D,Q[6]=M+F*H,Q[10]=K*Y}else if(J.order==="ZXY"){let F=Y*U,G=Y*q,D=X*U,M=X*q;Q[0]=F-M*H,Q[4]=-K*q,Q[8]=D+G*H,Q[1]=G+D*H,Q[5]=K*U,Q[9]=M-F*H,Q[2]=-K*X,Q[6]=H,Q[10]=K*Y}else if(J.order==="ZYX"){let F=K*U,G=K*q,D=H*U,M=H*q;Q[0]=Y*U,Q[4]=D*X-G,Q[8]=F*X+M,Q[1]=Y*q,Q[5]=M*X+F,Q[9]=G*X-D,Q[2]=-X,Q[6]=H*Y,Q[10]=K*Y}else if(J.order==="YZX"){let F=K*Y,G=K*X,D=H*Y,M=H*X;Q[0]=Y*U,Q[4]=M-F*q,Q[8]=D*q+G,Q[1]=q,Q[5]=K*U,Q[9]=-H*U,Q[2]=-X*U,Q[6]=G*q+D,Q[10]=F-M*q}else if(J.order==="XZY"){let F=K*Y,G=K*X,D=H*Y,M=H*X;Q[0]=Y*U,Q[4]=-q,Q[8]=X*U,Q[1]=F*q+M,Q[5]=K*U,Q[9]=G*q-D,Q[2]=D*q-G,Q[6]=H*U,Q[10]=M*q+F}return Q[3]=0,Q[7]=0,Q[11]=0,Q[12]=0,Q[13]=0,Q[14]=0,Q[15]=1,this}makeRotationFromQuaternion(J){return this.compose(NK,J,EK)}lookAt(J,Q,$){let Z=this.elements;if(vJ.subVectors(J,Q),vJ.lengthSq()===0)vJ.z=1;if(vJ.normalize(),B9.crossVectors($,vJ),B9.lengthSq()===0){if(Math.abs($.z)===1)vJ.x+=0.0001;else vJ.z+=0.0001;vJ.normalize(),B9.crossVectors($,vJ)}return B9.normalize(),$7.crossVectors(vJ,B9),Z[0]=B9.x,Z[4]=$7.x,Z[8]=vJ.x,Z[1]=B9.y,Z[5]=$7.y,Z[9]=vJ.y,Z[2]=B9.z,Z[6]=$7.z,Z[10]=vJ.z,this}multiply(J){return this.multiplyMatrices(this,J)}premultiply(J){return this.multiplyMatrices(J,this)}multiplyMatrices(J,Q){let $=J.elements,Z=Q.elements,W=this.elements,K=$[0],H=$[4],Y=$[8],X=$[12],U=$[1],q=$[5],F=$[9],G=$[13],D=$[2],M=$[6],z=$[10],E=$[14],N=$[3],C=$[7],_=$[11],L=$[15],A=Z[0],I=Z[4],P=Z[8],O=Z[12],V=Z[1],p=Z[5],w=Z[9],h=Z[13],s=Z[2],g=Z[6],u=Z[10],c=Z[14],f=Z[3],t=Z[7],Q0=Z[11],H0=Z[15];return W[0]=K*A+H*V+Y*s+X*f,W[4]=K*I+H*p+Y*g+X*t,W[8]=K*P+H*w+Y*u+X*Q0,W[12]=K*O+H*h+Y*c+X*H0,W[1]=U*A+q*V+F*s+G*f,W[5]=U*I+q*p+F*g+G*t,W[9]=U*P+q*w+F*u+G*Q0,W[13]=U*O+q*h+F*c+G*H0,W[2]=D*A+M*V+z*s+E*f,W[6]=D*I+M*p+z*g+E*t,W[10]=D*P+M*w+z*u+E*Q0,W[14]=D*O+M*h+z*c+E*H0,W[3]=N*A+C*V+_*s+L*f,W[7]=N*I+C*p+_*g+L*t,W[11]=N*P+C*w+_*u+L*Q0,W[15]=N*O+C*h+_*c+L*H0,this}multiplyScalar(J){let Q=this.elements;return Q[0]*=J,Q[4]*=J,Q[8]*=J,Q[12]*=J,Q[1]*=J,Q[5]*=J,Q[9]*=J,Q[13]*=J,Q[2]*=J,Q[6]*=J,Q[10]*=J,Q[14]*=J,Q[3]*=J,Q[7]*=J,Q[11]*=J,Q[15]*=J,this}determinant(){let J=this.elements,Q=J[0],$=J[4],Z=J[8],W=J[12],K=J[1],H=J[5],Y=J[9],X=J[13],U=J[2],q=J[6],F=J[10],G=J[14],D=J[3],M=J[7],z=J[11],E=J[15],N=Y*G-X*F,C=H*G-X*q,_=H*F-Y*q,L=K*G-X*U,A=K*F-Y*U,I=K*q-H*U;return Q*(M*N-z*C+E*_)-$*(D*N-z*L+E*A)+Z*(D*C-M*L+E*I)-W*(D*_-M*A+z*I)}determinantAffine(){let J=this.elements,Q=J[0],$=J[4],Z=J[8],W=J[1],K=J[5],H=J[9],Y=J[2],X=J[6],U=J[10];return Q*(K*U-H*X)-$*(W*U-H*Y)+Z*(W*X-K*Y)}transpose(){let J=this.elements,Q;return Q=J[1],J[1]=J[4],J[4]=Q,Q=J[2],J[2]=J[8],J[8]=Q,Q=J[6],J[6]=J[9],J[9]=Q,Q=J[3],J[3]=J[12],J[12]=Q,Q=J[7],J[7]=J[13],J[13]=Q,Q=J[11],J[11]=J[14],J[14]=Q,this}setPosition(J,Q,$){let Z=this.elements;if(J.isVector3)Z[12]=J.x,Z[13]=J.y,Z[14]=J.z;else Z[12]=J,Z[13]=Q,Z[14]=$;return this}invert(){let J=this.elements,Q=J[0],$=J[1],Z=J[2],W=J[3],K=J[4],H=J[5],Y=J[6],X=J[7],U=J[8],q=J[9],F=J[10],G=J[11],D=J[12],M=J[13],z=J[14],E=J[15],N=Q*H-$*K,C=Q*Y-Z*K,_=Q*X-W*K,L=$*Y-Z*H,A=$*X-W*H,I=Z*X-W*Y,P=U*M-q*D,O=U*z-F*D,V=U*E-G*D,p=q*z-F*M,w=q*E-G*M,h=F*E-G*z,s=N*h-C*w+_*p+L*V-A*O+I*P;if(s===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let g=1/s;return J[0]=(H*h-Y*w+X*p)*g,J[1]=(Z*w-$*h-W*p)*g,J[2]=(M*I-z*A+E*L)*g,J[3]=(F*A-q*I-G*L)*g,J[4]=(Y*V-K*h-X*O)*g,J[5]=(Q*h-Z*V+W*O)*g,J[6]=(z*_-D*I-E*C)*g,J[7]=(U*I-F*_+G*C)*g,J[8]=(K*w-H*V+X*P)*g,J[9]=($*V-Q*w-W*P)*g,J[10]=(D*A-M*_+E*N)*g,J[11]=(q*_-U*A-G*N)*g,J[12]=(H*O-K*p-Y*P)*g,J[13]=(Q*p-$*O+Z*P)*g,J[14]=(M*C-D*L-z*N)*g,J[15]=(U*L-q*C+F*N)*g,this}scale(J){let Q=this.elements,$=J.x,Z=J.y,W=J.z;return Q[0]*=$,Q[4]*=Z,Q[8]*=W,Q[1]*=$,Q[5]*=Z,Q[9]*=W,Q[2]*=$,Q[6]*=Z,Q[10]*=W,Q[3]*=$,Q[7]*=Z,Q[11]*=W,this}getMaxScaleOnAxis(){let J=this.elements,Q=J[0]*J[0]+J[1]*J[1]+J[2]*J[2],$=J[4]*J[4]+J[5]*J[5]+J[6]*J[6],Z=J[8]*J[8]+J[9]*J[9]+J[10]*J[10];return Math.sqrt(Math.max(Q,$,Z))}makeTranslation(J,Q,$){if(J.isVector3)this.set(1,0,0,J.x,0,1,0,J.y,0,0,1,J.z,0,0,0,1);else this.set(1,0,0,J,0,1,0,Q,0,0,1,$,0,0,0,1);return this}makeRotationX(J){let Q=Math.cos(J),$=Math.sin(J);return this.set(1,0,0,0,0,Q,-$,0,0,$,Q,0,0,0,0,1),this}makeRotationY(J){let Q=Math.cos(J),$=Math.sin(J);return this.set(Q,0,$,0,0,1,0,0,-$,0,Q,0,0,0,0,1),this}makeRotationZ(J){let Q=Math.cos(J),$=Math.sin(J);return this.set(Q,-$,0,0,$,Q,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(J,Q){let $=Math.cos(Q),Z=Math.sin(Q),W=1-$,K=J.x,H=J.y,Y=J.z,X=W*K,U=W*H;return this.set(X*K+$,X*H-Z*Y,X*Y+Z*H,0,X*H+Z*Y,U*H+$,U*Y-Z*K,0,X*Y-Z*H,U*Y+Z*K,W*Y*Y+$,0,0,0,0,1),this}makeScale(J,Q,$){return this.set(J,0,0,0,0,Q,0,0,0,0,$,0,0,0,0,1),this}makeShear(J,Q,$,Z,W,K){return this.set(1,$,W,0,J,1,K,0,Q,Z,1,0,0,0,0,1),this}compose(J,Q,$){let Z=this.elements,W=Q._x,K=Q._y,H=Q._z,Y=Q._w,X=W+W,U=K+K,q=H+H,F=W*X,G=W*U,D=W*q,M=K*U,z=K*q,E=H*q,N=Y*X,C=Y*U,_=Y*q,L=$.x,A=$.y,I=$.z;return Z[0]=(1-(M+E))*L,Z[1]=(G+_)*L,Z[2]=(D-C)*L,Z[3]=0,Z[4]=(G-_)*A,Z[5]=(1-(F+E))*A,Z[6]=(z+N)*A,Z[7]=0,Z[8]=(D+C)*I,Z[9]=(z-N)*I,Z[10]=(1-(F+M))*I,Z[11]=0,Z[12]=J.x,Z[13]=J.y,Z[14]=J.z,Z[15]=1,this}decompose(J,Q,$){let Z=this.elements;J.x=Z[12],J.y=Z[13],J.z=Z[14];let W=this.determinantAffine();if(W===0)return $.set(1,1,1),Q.identity(),this;let K=W8.set(Z[0],Z[1],Z[2]).length(),H=W8.set(Z[4],Z[5],Z[6]).length(),Y=W8.set(Z[8],Z[9],Z[10]).length();if(W<0)K=-K;uJ.copy(this);let X=1/K,U=1/H,q=1/Y;return uJ.elements[0]*=X,uJ.elements[1]*=X,uJ.elements[2]*=X,uJ.elements[4]*=U,uJ.elements[5]*=U,uJ.elements[6]*=U,uJ.elements[8]*=q,uJ.elements[9]*=q,uJ.elements[10]*=q,Q.setFromRotationMatrix(uJ),$.x=K,$.y=H,$.z=Y,this}makePerspective(J,Q,$,Z,W,K,H=2000,Y=!1){let X=this.elements,U=2*W/(Q-J),q=2*W/($-Z),F=(Q+J)/(Q-J),G=($+Z)/($-Z),D,M;if(Y)D=W/(K-W),M=K*W/(K-W);else if(H===2000)D=-(K+W)/(K-W),M=-2*K*W/(K-W);else if(H===2001)D=-K/(K-W),M=-K*W/(K-W);else throw Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+H);return X[0]=U,X[4]=0,X[8]=F,X[12]=0,X[1]=0,X[5]=q,X[9]=G,X[13]=0,X[2]=0,X[6]=0,X[10]=D,X[14]=M,X[3]=0,X[7]=0,X[11]=-1,X[15]=0,this}makeOrthographic(J,Q,$,Z,W,K,H=2000,Y=!1){let X=this.elements,U=2/(Q-J),q=2/($-Z),F=-(Q+J)/(Q-J),G=-($+Z)/($-Z),D,M;if(Y)D=1/(K-W),M=K/(K-W);else if(H===2000)D=-2/(K-W),M=-(K+W)/(K-W);else if(H===2001)D=-1/(K-W),M=-W/(K-W);else throw Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+H);return X[0]=U,X[4]=0,X[8]=0,X[12]=F,X[1]=0,X[5]=q,X[9]=0,X[13]=G,X[2]=0,X[6]=0,X[10]=D,X[14]=M,X[3]=0,X[7]=0,X[11]=0,X[15]=1,this}equals(J){let Q=this.elements,$=J.elements;for(let Z=0;Z<16;Z++)if(Q[Z]!==$[Z])return!1;return!0}fromArray(J,Q=0){for(let $=0;$<16;$++)this.elements[$]=J[$+Q];return this}toArray(J=[],Q=0){let $=this.elements;return J[Q]=$[0],J[Q+1]=$[1],J[Q+2]=$[2],J[Q+3]=$[3],J[Q+4]=$[4],J[Q+5]=$[5],J[Q+6]=$[6],J[Q+7]=$[7],J[Q+8]=$[8],J[Q+9]=$[9],J[Q+10]=$[10],J[Q+11]=$[11],J[Q+12]=$[12],J[Q+13]=$[13],J[Q+14]=$[14],J[Q+15]=$[15],J}}var W8=new v,uJ=new HJ,NK=new v(0,0,0),EK=new v(1,1,1),B9=new v,$7=new v,vJ=new v,j$=new HJ,y$=new R9;class q9{constructor(J=0,Q=0,$=0,Z=q9.DEFAULT_ORDER){this.isEuler=!0,this._x=J,this._y=Q,this._z=$,this._order=Z}get x(){return this._x}set x(J){this._x=J,this._onChangeCallback()}get y(){return this._y}set y(J){this._y=J,this._onChangeCallback()}get z(){return this._z}set z(J){this._z=J,this._onChangeCallback()}get order(){return this._order}set order(J){this._order=J,this._onChangeCallback()}set(J,Q,$,Z=this._order){return this._x=J,this._y=Q,this._z=$,this._order=Z,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(J){return this._x=J._x,this._y=J._y,this._z=J._z,this._order=J._order,this._onChangeCallback(),this}setFromRotationMatrix(J,Q=this._order,$=!0){let Z=J.elements,W=Z[0],K=Z[4],H=Z[8],Y=Z[1],X=Z[5],U=Z[9],q=Z[2],F=Z[6],G=Z[10];switch(Q){case"XYZ":if(this._y=Math.asin(m0(H,-1,1)),Math.abs(H)<0.9999999)this._x=Math.atan2(-U,G),this._z=Math.atan2(-K,W);else this._x=Math.atan2(F,X),this._z=0;break;case"YXZ":if(this._x=Math.asin(-m0(U,-1,1)),Math.abs(U)<0.9999999)this._y=Math.atan2(H,G),this._z=Math.atan2(Y,X);else this._y=Math.atan2(-q,W),this._z=0;break;case"ZXY":if(this._x=Math.asin(m0(F,-1,1)),Math.abs(F)<0.9999999)this._y=Math.atan2(-q,G),this._z=Math.atan2(-K,X);else this._y=0,this._z=Math.atan2(Y,W);break;case"ZYX":if(this._y=Math.asin(-m0(q,-1,1)),Math.abs(q)<0.9999999)this._x=Math.atan2(F,G),this._z=Math.atan2(Y,W);else this._x=0,this._z=Math.atan2(-K,X);break;case"YZX":if(this._z=Math.asin(m0(Y,-1,1)),Math.abs(Y)<0.9999999)this._x=Math.atan2(-U,X),this._y=Math.atan2(-q,W);else this._x=0,this._y=Math.atan2(H,G);break;case"XZY":if(this._z=Math.asin(-m0(K,-1,1)),Math.abs(K)<0.9999999)this._x=Math.atan2(F,X),this._y=Math.atan2(H,W);else this._x=Math.atan2(-U,G),this._y=0;break;default:_0("Euler: .setFromRotationMatrix() encountered an unknown order: "+Q)}if(this._order=Q,$===!0)this._onChangeCallback();return this}setFromQuaternion(J,Q,$){return j$.makeRotationFromQuaternion(J),this.setFromRotationMatrix(j$,Q,$)}setFromVector3(J,Q=this._order){return this.set(J.x,J.y,J.z,Q)}reorder(J){return y$.setFromEuler(this),this.setFromQuaternion(y$,J)}equals(J){return J._x===this._x&&J._y===this._y&&J._z===this._z&&J._order===this._order}fromArray(J){if(this._x=J[0],this._y=J[1],this._z=J[2],J[3]!==void 0)this._order=J[3];return this._onChangeCallback(),this}toArray(J=[],Q=0){return J[Q]=this._x,J[Q+1]=this._y,J[Q+2]=this._z,J[Q+3]=this._order,J}_onChange(J){return this._onChangeCallback=J,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}q9.DEFAULT_ORDER="XYZ";class p8{constructor(){this.mask=1}set(J){this.mask=(1<<J|0)>>>0}enable(J){this.mask|=1<<J|0}enableAll(){this.mask=-1}toggle(J){this.mask^=1<<J|0}disable(J){this.mask&=~(1<<J|0)}disableAll(){this.mask=0}test(J){return(this.mask&J.mask)!==0}isEnabled(J){return(this.mask&(1<<J|0))!==0}}var qK=0,v$=new v,K8=new R9,H9=new HJ,Z7=new v,A8=new v,FK=new v,DK=new R9,f$=new v(1,0,0),b$=new v(0,1,0),h$=new v(0,0,1),x$={type:"added"},OK={type:"removed"},H8={type:"childadded",child:null},R6={type:"childremoved",child:null};class DJ extends O9{constructor(){super();this.isObject3D=!0,Object.defineProperty(this,"id",{value:qK++}),this.uuid=x8(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=DJ.DEFAULT_UP.clone();let J=new v,Q=new q9,$=new R9,Z=new v(1,1,1);function W(){$.setFromEuler(Q,!1)}function K(){Q.setFromQuaternion($,void 0,!1)}Q._onChange(W),$._onChange(K),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:J},rotation:{configurable:!0,enumerable:!0,value:Q},quaternion:{configurable:!0,enumerable:!0,value:$},scale:{configurable:!0,enumerable:!0,value:Z},modelViewMatrix:{value:new HJ},normalMatrix:{value:new j0}}),this.matrix=new HJ,this.matrixWorld=new HJ,this.matrixAutoUpdate=DJ.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=DJ.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new p8,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(J){if(this.matrixAutoUpdate)this.updateMatrix();this.matrix.premultiply(J),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(J){return this.quaternion.premultiply(J),this}setRotationFromAxisAngle(J,Q){this.quaternion.setFromAxisAngle(J,Q)}setRotationFromEuler(J){this.quaternion.setFromEuler(J,!0)}setRotationFromMatrix(J){this.quaternion.setFromRotationMatrix(J)}setRotationFromQuaternion(J){this.quaternion.copy(J)}rotateOnAxis(J,Q){return K8.setFromAxisAngle(J,Q),this.quaternion.multiply(K8),this}rotateOnWorldAxis(J,Q){return K8.setFromAxisAngle(J,Q),this.quaternion.premultiply(K8),this}rotateX(J){return this.rotateOnAxis(f$,J)}rotateY(J){return this.rotateOnAxis(b$,J)}rotateZ(J){return this.rotateOnAxis(h$,J)}translateOnAxis(J,Q){return v$.copy(J).applyQuaternion(this.quaternion),this.position.add(v$.multiplyScalar(Q)),this}translateX(J){return this.translateOnAxis(f$,J)}translateY(J){return this.translateOnAxis(b$,J)}translateZ(J){return this.translateOnAxis(h$,J)}localToWorld(J){return this.updateWorldMatrix(!0,!1),J.applyMatrix4(this.matrixWorld)}worldToLocal(J){return this.updateWorldMatrix(!0,!1),J.applyMatrix4(H9.copy(this.matrixWorld).invert())}lookAt(J,Q,$){if(J.isVector3)Z7.copy(J);else Z7.set(J,Q,$);let Z=this.parent;if(this.updateWorldMatrix(!0,!1),A8.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight)H9.lookAt(A8,Z7,this.up);else H9.lookAt(Z7,A8,this.up);if(this.quaternion.setFromRotationMatrix(H9),Z)H9.extractRotation(Z.matrixWorld),K8.setFromRotationMatrix(H9),this.quaternion.premultiply(K8.invert())}add(J){if(arguments.length>1){for(let Q=0;Q<arguments.length;Q++)this.add(arguments[Q]);return this}if(J===this)return P0("Object3D.add: object can't be added as a child of itself.",J),this;if(J&&J.isObject3D)J.removeFromParent(),J.parent=this,this.children.push(J),J.dispatchEvent(x$),H8.child=J,this.dispatchEvent(H8),H8.child=null;else P0("Object3D.add: object not an instance of THREE.Object3D.",J);return this}remove(J){if(arguments.length>1){for(let $=0;$<arguments.length;$++)this.remove(arguments[$]);return this}let Q=this.children.indexOf(J);if(Q!==-1)J.parent=null,this.children.splice(Q,1),J.dispatchEvent(OK),R6.child=J,this.dispatchEvent(R6),R6.child=null;return this}removeFromParent(){let J=this.parent;if(J!==null)J.remove(this);return this}clear(){return this.remove(...this.children)}attach(J){if(this.updateWorldMatrix(!0,!1),H9.copy(this.matrixWorld).invert(),J.parent!==null)J.parent.updateWorldMatrix(!0,!1),H9.multiply(J.parent.matrixWorld);return J.applyMatrix4(H9),J.removeFromParent(),J.parent=this,this.children.push(J),J.updateWorldMatrix(!1,!0),J.dispatchEvent(x$),H8.child=J,this.dispatchEvent(H8),H8.child=null,this}getObjectById(J){return this.getObjectByProperty("id",J)}getObjectByName(J){return this.getObjectByProperty("name",J)}getObjectByProperty(J,Q){if(this[J]===Q)return this;for(let $=0,Z=this.children.length;$<Z;$++){let K=this.children[$].getObjectByProperty(J,Q);if(K!==void 0)return K}return}getObjectsByProperty(J,Q,$=[]){if(this[J]===Q)$.push(this);let Z=this.children;for(let W=0,K=Z.length;W<K;W++)Z[W].getObjectsByProperty(J,Q,$);return $}getWorldPosition(J){return this.updateWorldMatrix(!0,!1),J.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(J){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(A8,J,FK),J}getWorldScale(J){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(A8,DK,J),J}getWorldDirection(J){this.updateWorldMatrix(!0,!1);let Q=this.matrixWorld.elements;return J.set(Q[8],Q[9],Q[10]).normalize()}raycast(){}traverse(J){J(this);let Q=this.children;for(let $=0,Z=Q.length;$<Z;$++)Q[$].traverse(J)}traverseVisible(J){if(this.visible===!1)return;J(this);let Q=this.children;for(let $=0,Z=Q.length;$<Z;$++)Q[$].traverseVisible(J)}traverseAncestors(J){let Q=this.parent;if(Q!==null)J(Q),Q.traverseAncestors(J)}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let J=this.pivot;if(J!==null){let{x:Q,y:$,z:Z}=J,W=this.matrix.elements;W[12]+=Q-W[0]*Q-W[4]*$-W[8]*Z,W[13]+=$-W[1]*Q-W[5]*$-W[9]*Z,W[14]+=Z-W[2]*Q-W[6]*$-W[10]*Z}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(J){if(this.matrixAutoUpdate)this.updateMatrix();if(this.matrixWorldNeedsUpdate||J){if(this.matrixWorldAutoUpdate===!0)if(this.parent===null)this.matrixWorld.copy(this.matrix);else this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix);this.matrixWorldNeedsUpdate=!1,J=!0}let Q=this.children;for(let $=0,Z=Q.length;$<Z;$++)Q[$].updateMatrixWorld(J)}updateWorldMatrix(J,Q,$=!1){let Z=this.parent;if(J===!0&&Z!==null)Z.updateWorldMatrix(!0,!1);if(this.matrixAutoUpdate)this.updateMatrix();if(this.matrixWorldNeedsUpdate||$){if(this.matrixWorldAutoUpdate===!0)if(this.parent===null)this.matrixWorld.copy(this.matrix);else this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix);this.matrixWorldNeedsUpdate=!1,$=!0}if(Q===!0){let W=this.children;for(let K=0,H=W.length;K<H;K++)W[K].updateWorldMatrix(!1,!0,$)}}toJSON(J){let Q=J===void 0||typeof J==="string",$={};if(Q)J={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},$.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"};let Z={};if(Z.uuid=this.uuid,Z.type=this.type,this.name!=="")Z.name=this.name;if(this.castShadow===!0)Z.castShadow=!0;if(this.receiveShadow===!0)Z.receiveShadow=!0;if(this.visible===!1)Z.visible=!1;if(this.frustumCulled===!1)Z.frustumCulled=!1;if(this.renderOrder!==0)Z.renderOrder=this.renderOrder;if(this.static!==!1)Z.static=this.static;if(Object.keys(this.userData).length>0)Z.userData=this.userData;if(Z.layers=this.layers.mask,Z.matrix=this.matrix.toArray(),Z.up=this.up.toArray(),this.pivot!==null)Z.pivot=this.pivot.toArray();if(this.matrixAutoUpdate===!1)Z.matrixAutoUpdate=!1;if(this.morphTargetDictionary!==void 0)Z.morphTargetDictionary=Object.assign({},this.morphTargetDictionary);if(this.morphTargetInfluences!==void 0)Z.morphTargetInfluences=this.morphTargetInfluences.slice();if(this.isInstancedMesh){if(Z.type="InstancedMesh",Z.count=this.count,Z.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null)Z.instanceColor=this.instanceColor.toJSON()}if(this.isBatchedMesh){if(Z.type="BatchedMesh",Z.perObjectFrustumCulled=this.perObjectFrustumCulled,Z.sortObjects=this.sortObjects,Z.drawRanges=this._drawRanges,Z.reservedRanges=this._reservedRanges,Z.geometryInfo=this._geometryInfo.map((H)=>({...H,boundingBox:H.boundingBox?H.boundingBox.toJSON():void 0,boundingSphere:H.boundingSphere?H.boundingSphere.toJSON():void 0})),Z.instanceInfo=this._instanceInfo.map((H)=>({...H})),Z.availableInstanceIds=this._availableInstanceIds.slice(),Z.availableGeometryIds=this._availableGeometryIds.slice(),Z.nextIndexStart=this._nextIndexStart,Z.nextVertexStart=this._nextVertexStart,Z.geometryCount=this._geometryCount,Z.maxInstanceCount=this._maxInstanceCount,Z.maxVertexCount=this._maxVertexCount,Z.maxIndexCount=this._maxIndexCount,Z.geometryInitialized=this._geometryInitialized,Z.matricesTexture=this._matricesTexture.toJSON(J),Z.indirectTexture=this._indirectTexture.toJSON(J),this._colorsTexture!==null)Z.colorsTexture=this._colorsTexture.toJSON(J);if(this.boundingSphere!==null)Z.boundingSphere=this.boundingSphere.toJSON();if(this.boundingBox!==null)Z.boundingBox=this.boundingBox.toJSON()}function W(H,Y){if(H[Y.uuid]===void 0)H[Y.uuid]=Y.toJSON(J);return Y.uuid}if(this.isScene){if(this.background){if(this.background.isColor)Z.background=this.background.toJSON();else if(this.background.isTexture)Z.background=this.background.toJSON(J).uuid}if(this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0)Z.environment=this.environment.toJSON(J).uuid}else if(this.isMesh||this.isLine||this.isPoints){Z.geometry=W(J.geometries,this.geometry);let H=this.geometry.parameters;if(H!==void 0&&H.shapes!==void 0){let Y=H.shapes;if(Array.isArray(Y))for(let X=0,U=Y.length;X<U;X++){let q=Y[X];W(J.shapes,q)}else W(J.shapes,Y)}}if(this.isSkinnedMesh){if(Z.bindMode=this.bindMode,Z.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0)W(J.skeletons,this.skeleton),Z.skeleton=this.skeleton.uuid}if(this.material!==void 0)if(Array.isArray(this.material)){let H=[];for(let Y=0,X=this.material.length;Y<X;Y++)H.push(W(J.materials,this.material[Y]));Z.material=H}else Z.material=W(J.materials,this.material);if(this.children.length>0){Z.children=[];for(let H=0;H<this.children.length;H++)Z.children.push(this.children[H].toJSON(J).object)}if(this.animations.length>0){Z.animations=[];for(let H=0;H<this.animations.length;H++){let Y=this.animations[H];Z.animations.push(W(J.animations,Y))}}if(Q){let H=K(J.geometries),Y=K(J.materials),X=K(J.textures),U=K(J.images),q=K(J.shapes),F=K(J.skeletons),G=K(J.animations),D=K(J.nodes);if(H.length>0)$.geometries=H;if(Y.length>0)$.materials=Y;if(X.length>0)$.textures=X;if(U.length>0)$.images=U;if(q.length>0)$.shapes=q;if(F.length>0)$.skeletons=F;if(G.length>0)$.animations=G;if(D.length>0)$.nodes=D}return $.object=Z,$;function K(H){let Y=[];for(let X in H){let U=H[X];delete U.metadata,Y.push(U)}return Y}}clone(J){return new this.constructor().copy(this,J)}copy(J,Q=!0){if(this.name=J.name,this.up.copy(J.up),this.position.copy(J.position),this.rotation.order=J.rotation.order,this.quaternion.copy(J.quaternion),this.scale.copy(J.scale),this.pivot=J.pivot!==null?J.pivot.clone():null,this.matrix.copy(J.matrix),this.matrixWorld.copy(J.matrixWorld),this.matrixAutoUpdate=J.matrixAutoUpdate,this.matrixWorldAutoUpdate=J.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=J.matrixWorldNeedsUpdate,this.layers.mask=J.layers.mask,this.visible=J.visible,this.castShadow=J.castShadow,this.receiveShadow=J.receiveShadow,this.frustumCulled=J.frustumCulled,this.renderOrder=J.renderOrder,this.static=J.static,this.animations=J.animations.slice(),this.userData=JSON.parse(JSON.stringify(J.userData)),Q===!0)for(let $=0;$<J.children.length;$++){let Z=J.children[$];this.add(Z.clone())}return this}}DJ.DEFAULT_UP=new v(0,1,0);DJ.DEFAULT_MATRIX_AUTO_UPDATE=!0;DJ.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class N9 extends DJ{constructor(){super();this.isGroup=!0,this.type="Group"}}var RK={type:"move"};class m8{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){if(this._hand===null)this._hand=new N9,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1};return this._hand}getTargetRaySpace(){if(this._targetRay===null)this._targetRay=new N9,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new v,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new v;return this._targetRay}getGripSpace(){if(this._grip===null)this._grip=new N9,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new v,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new v,this._grip.eventsEnabled=!1;return this._grip}dispatchEvent(J){if(this._targetRay!==null)this._targetRay.dispatchEvent(J);if(this._grip!==null)this._grip.dispatchEvent(J);if(this._hand!==null)this._hand.dispatchEvent(J);return this}connect(J){if(J&&J.hand){let Q=this._hand;if(Q)for(let $ of J.hand.values())this._getHandJoint(Q,$)}return this.dispatchEvent({type:"connected",data:J}),this}disconnect(J){if(this.dispatchEvent({type:"disconnected",data:J}),this._targetRay!==null)this._targetRay.visible=!1;if(this._grip!==null)this._grip.visible=!1;if(this._hand!==null)this._hand.visible=!1;return this}update(J,Q,$){let Z=null,W=null,K=null,H=this._targetRay,Y=this._grip,X=this._hand;if(J&&Q.session.visibilityState!=="visible-blurred"){if(X&&J.hand){K=!0;for(let M of J.hand.values()){let z=Q.getJointPose(M,$),E=this._getHandJoint(X,M);if(z!==null)E.matrix.fromArray(z.transform.matrix),E.matrix.decompose(E.position,E.rotation,E.scale),E.matrixWorldNeedsUpdate=!0,E.jointRadius=z.radius;E.visible=z!==null}let U=X.joints["index-finger-tip"],q=X.joints["thumb-tip"],F=U.position.distanceTo(q.position),G=0.02,D=0.005;if(X.inputState.pinching&&F>G+D)X.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:J.handedness,target:this});else if(!X.inputState.pinching&&F<=G-D)X.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:J.handedness,target:this})}else if(Y!==null&&J.gripSpace){if(W=Q.getPose(J.gripSpace,$),W!==null){if(Y.matrix.fromArray(W.transform.matrix),Y.matrix.decompose(Y.position,Y.rotation,Y.scale),Y.matrixWorldNeedsUpdate=!0,W.linearVelocity)Y.hasLinearVelocity=!0,Y.linearVelocity.copy(W.linearVelocity);else Y.hasLinearVelocity=!1;if(W.angularVelocity)Y.hasAngularVelocity=!0,Y.angularVelocity.copy(W.angularVelocity);else Y.hasAngularVelocity=!1;if(Y.eventsEnabled)Y.dispatchEvent({type:"gripUpdated",data:J,target:this})}}if(H!==null){if(Z=Q.getPose(J.targetRaySpace,$),Z===null&&W!==null)Z=W;if(Z!==null){if(H.matrix.fromArray(Z.transform.matrix),H.matrix.decompose(H.position,H.rotation,H.scale),H.matrixWorldNeedsUpdate=!0,Z.linearVelocity)H.hasLinearVelocity=!0,H.linearVelocity.copy(Z.linearVelocity);else H.hasLinearVelocity=!1;if(Z.angularVelocity)H.hasAngularVelocity=!0,H.angularVelocity.copy(Z.angularVelocity);else H.hasAngularVelocity=!1;this.dispatchEvent(RK)}}}if(H!==null)H.visible=Z!==null;if(Y!==null)Y.visible=W!==null;if(X!==null)X.visible=K!==null;return this}_getHandJoint(J,Q){if(J.joints[Q.jointName]===void 0){let $=new N9;$.matrixAutoUpdate=!1,$.visible=!1,J.joints[Q.jointName]=$,J.add($)}return J.joints[Q.jointName]}}var eZ={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},z9={h:0,s:0,l:0},W7={h:0,s:0,l:0};function k6(J,Q,$){if($<0)$+=1;if($>1)$-=1;if($<0.16666666666666666)return J+(Q-J)*6*$;if($<0.5)return Q;if($<0.6666666666666666)return J+(Q-J)*6*(0.6666666666666666-$);return J}class y0{constructor(J,Q,$){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(J,Q,$)}set(J,Q,$){if(Q===void 0&&$===void 0){let Z=J;if(Z&&Z.isColor)this.copy(Z);else if(typeof Z==="number")this.setHex(Z);else if(typeof Z==="string")this.setStyle(Z)}else this.setRGB(J,Q,$);return this}setScalar(J){return this.r=J,this.g=J,this.b=J,this}setHex(J,Q="srgb"){return J=Math.floor(J),this.r=(J>>16&255)/255,this.g=(J>>8&255)/255,this.b=(J&255)/255,l0.colorSpaceToWorking(this,Q),this}setRGB(J,Q,$,Z=l0.workingColorSpace){return this.r=J,this.g=Q,this.b=$,l0.colorSpaceToWorking(this,Z),this}setHSL(J,Q,$,Z=l0.workingColorSpace){if(J=YK(J,1),Q=m0(Q,0,1),$=m0($,0,1),Q===0)this.r=this.g=this.b=$;else{let W=$<=0.5?$*(1+Q):$+Q-$*Q,K=2*$-W;this.r=k6(K,W,J+0.3333333333333333),this.g=k6(K,W,J),this.b=k6(K,W,J-0.3333333333333333)}return l0.colorSpaceToWorking(this,Z),this}setStyle(J,Q="srgb"){function $(W){if(W===void 0)return;if(parseFloat(W)<1)_0("Color: Alpha component of "+J+" will be ignored.")}let Z;if(Z=/^(\w+)\(([^\)]*)\)/.exec(J)){let W,K=Z[1],H=Z[2];switch(K){case"rgb":case"rgba":if(W=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(H))return $(W[4]),this.setRGB(Math.min(255,parseInt(W[1],10))/255,Math.min(255,parseInt(W[2],10))/255,Math.min(255,parseInt(W[3],10))/255,Q);if(W=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(H))return $(W[4]),this.setRGB(Math.min(100,parseInt(W[1],10))/100,Math.min(100,parseInt(W[2],10))/100,Math.min(100,parseInt(W[3],10))/100,Q);break;case"hsl":case"hsla":if(W=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(H))return $(W[4]),this.setHSL(parseFloat(W[1])/360,parseFloat(W[2])/100,parseFloat(W[3])/100,Q);break;default:_0("Color: Unknown color model "+J)}}else if(Z=/^\#([A-Fa-f\d]+)$/.exec(J)){let W=Z[1],K=W.length;if(K===3)return this.setRGB(parseInt(W.charAt(0),16)/15,parseInt(W.charAt(1),16)/15,parseInt(W.charAt(2),16)/15,Q);else if(K===6)return this.setHex(parseInt(W,16),Q);else _0("Color: Invalid hex color "+J)}else if(J&&J.length>0)return this.setColorName(J,Q);return this}setColorName(J,Q="srgb"){let $=eZ[J.toLowerCase()];if($!==void 0)this.setHex($,Q);else _0("Color: Unknown color "+J);return this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(J){return this.r=J.r,this.g=J.g,this.b=J.b,this}copySRGBToLinear(J){return this.r=E9(J.r),this.g=E9(J.g),this.b=E9(J.b),this}copyLinearToSRGB(J){return this.r=D8(J.r),this.g=D8(J.g),this.b=D8(J.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(J="srgb"){return l0.workingToColorSpace(AJ.copy(this),J),Math.round(m0(AJ.r*255,0,255))*65536+Math.round(m0(AJ.g*255,0,255))*256+Math.round(m0(AJ.b*255,0,255))}getHexString(J="srgb"){return("000000"+this.getHex(J).toString(16)).slice(-6)}getHSL(J,Q=l0.workingColorSpace){l0.workingToColorSpace(AJ.copy(this),Q);let{r:$,g:Z,b:W}=AJ,K=Math.max($,Z,W),H=Math.min($,Z,W),Y,X,U=(H+K)/2;if(H===K)Y=0,X=0;else{let q=K-H;switch(X=U<=0.5?q/(K+H):q/(2-K-H),K){case $:Y=(Z-W)/q+(Z<W?6:0);break;case Z:Y=(W-$)/q+2;break;case W:Y=($-Z)/q+4;break}Y/=6}return J.h=Y,J.s=X,J.l=U,J}getRGB(J,Q=l0.workingColorSpace){return l0.workingToColorSpace(AJ.copy(this),Q),J.r=AJ.r,J.g=AJ.g,J.b=AJ.b,J}getStyle(J="srgb"){l0.workingToColorSpace(AJ.copy(this),J);let{r:Q,g:$,b:Z}=AJ;if(J!=="srgb")return`color(${J} ${Q.toFixed(3)} ${$.toFixed(3)} ${Z.toFixed(3)})`;return`rgb(${Math.round(Q*255)},${Math.round($*255)},${Math.round(Z*255)})`}offsetHSL(J,Q,$){return this.getHSL(z9),this.setHSL(z9.h+J,z9.s+Q,z9.l+$)}add(J){return this.r+=J.r,this.g+=J.g,this.b+=J.b,this}addColors(J,Q){return this.r=J.r+Q.r,this.g=J.g+Q.g,this.b=J.b+Q.b,this}addScalar(J){return this.r+=J,this.g+=J,this.b+=J,this}sub(J){return this.r=Math.max(0,this.r-J.r),this.g=Math.max(0,this.g-J.g),this.b=Math.max(0,this.b-J.b),this}multiply(J){return this.r*=J.r,this.g*=J.g,this.b*=J.b,this}multiplyScalar(J){return this.r*=J,this.g*=J,this.b*=J,this}lerp(J,Q){return this.r+=(J.r-this.r)*Q,this.g+=(J.g-this.g)*Q,this.b+=(J.b-this.b)*Q,this}lerpColors(J,Q,$){return this.r=J.r+(Q.r-J.r)*$,this.g=J.g+(Q.g-J.g)*$,this.b=J.b+(Q.b-J.b)*$,this}lerpHSL(J,Q){this.getHSL(z9),J.getHSL(W7);let $=E6(z9.h,W7.h,Q),Z=E6(z9.s,W7.s,Q),W=E6(z9.l,W7.l,Q);return this.setHSL($,Z,W),this}setFromVector3(J){return this.r=J.x,this.g=J.y,this.b=J.z,this}applyMatrix3(J){let Q=this.r,$=this.g,Z=this.b,W=J.elements;return this.r=W[0]*Q+W[3]*$+W[6]*Z,this.g=W[1]*Q+W[4]*$+W[7]*Z,this.b=W[2]*Q+W[5]*$+W[8]*Z,this}equals(J){return J.r===this.r&&J.g===this.g&&J.b===this.b}fromArray(J,Q=0){return this.r=J[Q],this.g=J[Q+1],this.b=J[Q+2],this}toArray(J=[],Q=0){return J[Q]=this.r,J[Q+1]=this.g,J[Q+2]=this.b,J}fromBufferAttribute(J,Q){return this.r=J.getX(Q),this.g=J.getY(Q),this.b=J.getZ(Q),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}var AJ=new y0;y0.NAMES=eZ;class d8{constructor(J,Q=1,$=1000){this.isFog=!0,this.name="",this.color=new y0(J),this.near=Q,this.far=$}clone(){return new d8(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class p7 extends DJ{constructor(){super();if(this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new q9,this.environmentIntensity=1,this.environmentRotation=new q9,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u")__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(J,Q){if(super.copy(J,Q),J.background!==null)this.background=J.background.clone();if(J.environment!==null)this.environment=J.environment.clone();if(J.fog!==null)this.fog=J.fog.clone();if(this.backgroundBlurriness=J.backgroundBlurriness,this.backgroundIntensity=J.backgroundIntensity,this.backgroundRotation.copy(J.backgroundRotation),this.environmentIntensity=J.environmentIntensity,this.environmentRotation.copy(J.environmentRotation),J.overrideMaterial!==null)this.overrideMaterial=J.overrideMaterial.clone();return this.matrixAutoUpdate=J.matrixAutoUpdate,this}toJSON(J){let Q=super.toJSON(J);if(this.fog!==null)Q.object.fog=this.fog.toJSON();if(this.backgroundBlurriness>0)Q.object.backgroundBlurriness=this.backgroundBlurriness;if(this.backgroundIntensity!==1)Q.object.backgroundIntensity=this.backgroundIntensity;if(Q.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1)Q.object.environmentIntensity=this.environmentIntensity;return Q.object.environmentRotation=this.environmentRotation.toArray(),Q}}var cJ=new v,Y9=new v,M6=new v,X9=new v,Y8=new v,X8=new v,g$=new v,L6=new v,V6=new v,B6=new v,z6=new GJ,I6=new GJ,A6=new GJ;class gJ{constructor(J=new v,Q=new v,$=new v){this.a=J,this.b=Q,this.c=$}static getNormal(J,Q,$,Z){Z.subVectors($,Q),cJ.subVectors(J,Q),Z.cross(cJ);let W=Z.lengthSq();if(W>0)return Z.multiplyScalar(1/Math.sqrt(W));return Z.set(0,0,0)}static getBarycoord(J,Q,$,Z,W){cJ.subVectors(Z,Q),Y9.subVectors($,Q),M6.subVectors(J,Q);let K=cJ.dot(cJ),H=cJ.dot(Y9),Y=cJ.dot(M6),X=Y9.dot(Y9),U=Y9.dot(M6),q=K*X-H*H;if(q===0)return W.set(0,0,0),null;let F=1/q,G=(X*Y-H*U)*F,D=(K*U-H*Y)*F;return W.set(1-G-D,D,G)}static containsPoint(J,Q,$,Z){if(this.getBarycoord(J,Q,$,Z,X9)===null)return!1;return X9.x>=0&&X9.y>=0&&X9.x+X9.y<=1}static getInterpolation(J,Q,$,Z,W,K,H,Y){if(this.getBarycoord(J,Q,$,Z,X9)===null){if(Y.x=0,Y.y=0,"z"in Y)Y.z=0;if("w"in Y)Y.w=0;return null}return Y.setScalar(0),Y.addScaledVector(W,X9.x),Y.addScaledVector(K,X9.y),Y.addScaledVector(H,X9.z),Y}static getInterpolatedAttribute(J,Q,$,Z,W,K){return z6.setScalar(0),I6.setScalar(0),A6.setScalar(0),z6.fromBufferAttribute(J,Q),I6.fromBufferAttribute(J,$),A6.fromBufferAttribute(J,Z),K.setScalar(0),K.addScaledVector(z6,W.x),K.addScaledVector(I6,W.y),K.addScaledVector(A6,W.z),K}static isFrontFacing(J,Q,$,Z){return cJ.subVectors($,Q),Y9.subVectors(J,Q),cJ.cross(Y9).dot(Z)<0}set(J,Q,$){return this.a.copy(J),this.b.copy(Q),this.c.copy($),this}setFromPointsAndIndices(J,Q,$,Z){return this.a.copy(J[Q]),this.b.copy(J[$]),this.c.copy(J[Z]),this}setFromAttributeAndIndices(J,Q,$,Z){return this.a.fromBufferAttribute(J,Q),this.b.fromBufferAttribute(J,$),this.c.fromBufferAttribute(J,Z),this}clone(){return new this.constructor().copy(this)}copy(J){return this.a.copy(J.a),this.b.copy(J.b),this.c.copy(J.c),this}getArea(){return cJ.subVectors(this.c,this.b),Y9.subVectors(this.a,this.b),cJ.cross(Y9).length()*0.5}getMidpoint(J){return J.addVectors(this.a,this.b).add(this.c).multiplyScalar(0.3333333333333333)}getNormal(J){return gJ.getNormal(this.a,this.b,this.c,J)}getPlane(J){return J.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(J,Q){return gJ.getBarycoord(J,this.a,this.b,this.c,Q)}getInterpolation(J,Q,$,Z,W){return gJ.getInterpolation(J,this.a,this.b,this.c,Q,$,Z,W)}containsPoint(J){return gJ.containsPoint(J,this.a,this.b,this.c)}isFrontFacing(J){return gJ.isFrontFacing(this.a,this.b,this.c,J)}intersectsBox(J){return J.intersectsTriangle(this)}closestPointToPoint(J,Q){let $=this.a,Z=this.b,W=this.c,K,H;Y8.subVectors(Z,$),X8.subVectors(W,$),L6.subVectors(J,$);let Y=Y8.dot(L6),X=X8.dot(L6);if(Y<=0&&X<=0)return Q.copy($);V6.subVectors(J,Z);let U=Y8.dot(V6),q=X8.dot(V6);if(U>=0&&q<=U)return Q.copy(Z);let F=Y*q-U*X;if(F<=0&&Y>=0&&U<=0)return K=Y/(Y-U),Q.copy($).addScaledVector(Y8,K);B6.subVectors(J,W);let G=Y8.dot(B6),D=X8.dot(B6);if(D>=0&&G<=D)return Q.copy(W);let M=G*X-Y*D;if(M<=0&&X>=0&&D<=0)return H=X/(X-D),Q.copy($).addScaledVector(X8,H);let z=U*D-G*q;if(z<=0&&q-U>=0&&G-D>=0)return g$.subVectors(W,Z),H=(q-U)/(q-U+(G-D)),Q.copy(Z).addScaledVector(g$,H);let E=1/(z+M+F);return K=M*E,H=F*E,Q.copy($).addScaledVector(Y8,K).addScaledVector(X8,H)}equals(J){return J.a.equals(this.a)&&J.b.equals(this.b)&&J.c.equals(this.c)}}class s9{constructor(J=new v(1/0,1/0,1/0),Q=new v(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=J,this.max=Q}set(J,Q){return this.min.copy(J),this.max.copy(Q),this}setFromArray(J){this.makeEmpty();for(let Q=0,$=J.length;Q<$;Q+=3)this.expandByPoint(nJ.fromArray(J,Q));return this}setFromBufferAttribute(J){this.makeEmpty();for(let Q=0,$=J.count;Q<$;Q++)this.expandByPoint(nJ.fromBufferAttribute(J,Q));return this}setFromPoints(J){this.makeEmpty();for(let Q=0,$=J.length;Q<$;Q++)this.expandByPoint(J[Q]);return this}setFromCenterAndSize(J,Q){let $=nJ.copy(Q).multiplyScalar(0.5);return this.min.copy(J).sub($),this.max.copy(J).add($),this}setFromObject(J,Q=!1){return this.makeEmpty(),this.expandByObject(J,Q)}clone(){return new this.constructor().copy(this)}copy(J){return this.min.copy(J.min),this.max.copy(J.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(J){return this.isEmpty()?J.set(0,0,0):J.addVectors(this.min,this.max).multiplyScalar(0.5)}getSize(J){return this.isEmpty()?J.set(0,0,0):J.subVectors(this.max,this.min)}expandByPoint(J){return this.min.min(J),this.max.max(J),this}expandByVector(J){return this.min.sub(J),this.max.add(J),this}expandByScalar(J){return this.min.addScalar(-J),this.max.addScalar(J),this}expandByObject(J,Q=!1){J.updateWorldMatrix(!1,!1);let $=J.geometry;if($!==void 0){let W=$.getAttribute("position");if(Q===!0&&W!==void 0&&J.isInstancedMesh!==!0)for(let K=0,H=W.count;K<H;K++){if(J.isMesh===!0)J.getVertexPosition(K,nJ);else nJ.fromBufferAttribute(W,K);nJ.applyMatrix4(J.matrixWorld),this.expandByPoint(nJ)}else{if(J.boundingBox!==void 0){if(J.boundingBox===null)J.computeBoundingBox();K7.copy(J.boundingBox)}else{if($.boundingBox===null)$.computeBoundingBox();K7.copy($.boundingBox)}K7.applyMatrix4(J.matrixWorld),this.union(K7)}}let Z=J.children;for(let W=0,K=Z.length;W<K;W++)this.expandByObject(Z[W],Q);return this}containsPoint(J){return J.x>=this.min.x&&J.x<=this.max.x&&J.y>=this.min.y&&J.y<=this.max.y&&J.z>=this.min.z&&J.z<=this.max.z}containsBox(J){return this.min.x<=J.min.x&&J.max.x<=this.max.x&&this.min.y<=J.min.y&&J.max.y<=this.max.y&&this.min.z<=J.min.z&&J.max.z<=this.max.z}getParameter(J,Q){return Q.set((J.x-this.min.x)/(this.max.x-this.min.x),(J.y-this.min.y)/(this.max.y-this.min.y),(J.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(J){return J.max.x>=this.min.x&&J.min.x<=this.max.x&&J.max.y>=this.min.y&&J.min.y<=this.max.y&&J.max.z>=this.min.z&&J.min.z<=this.max.z}intersectsSphere(J){return this.clampPoint(J.center,nJ),nJ.distanceToSquared(J.center)<=J.radius*J.radius}intersectsPlane(J){let Q,$;if(J.normal.x>0)Q=J.normal.x*this.min.x,$=J.normal.x*this.max.x;else Q=J.normal.x*this.max.x,$=J.normal.x*this.min.x;if(J.normal.y>0)Q+=J.normal.y*this.min.y,$+=J.normal.y*this.max.y;else Q+=J.normal.y*this.max.y,$+=J.normal.y*this.min.y;if(J.normal.z>0)Q+=J.normal.z*this.min.z,$+=J.normal.z*this.max.z;else Q+=J.normal.z*this.max.z,$+=J.normal.z*this.min.z;return Q<=-J.constant&&$>=-J.constant}intersectsTriangle(J){if(this.isEmpty())return!1;this.getCenter(w8),H7.subVectors(this.max,w8),U8.subVectors(J.a,w8),G8.subVectors(J.b,w8),N8.subVectors(J.c,w8),I9.subVectors(G8,U8),A9.subVectors(N8,G8),b9.subVectors(U8,N8);let Q=[0,-I9.z,I9.y,0,-A9.z,A9.y,0,-b9.z,b9.y,I9.z,0,-I9.x,A9.z,0,-A9.x,b9.z,0,-b9.x,-I9.y,I9.x,0,-A9.y,A9.x,0,-b9.y,b9.x,0];if(!w6(Q,U8,G8,N8,H7))return!1;if(Q=[1,0,0,0,1,0,0,0,1],!w6(Q,U8,G8,N8,H7))return!1;return Y7.crossVectors(I9,A9),Q=[Y7.x,Y7.y,Y7.z],w6(Q,U8,G8,N8,H7)}clampPoint(J,Q){return Q.copy(J).clamp(this.min,this.max)}distanceToPoint(J){return this.clampPoint(J,nJ).distanceTo(J)}getBoundingSphere(J){if(this.isEmpty())J.makeEmpty();else this.getCenter(J.center),J.radius=this.getSize(nJ).length()*0.5;return J}intersect(J){if(this.min.max(J.min),this.max.min(J.max),this.isEmpty())this.makeEmpty();return this}union(J){return this.min.min(J.min),this.max.max(J.max),this}applyMatrix4(J){if(this.isEmpty())return this;return U9[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(J),U9[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(J),U9[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(J),U9[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(J),U9[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(J),U9[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(J),U9[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(J),U9[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(J),this.setFromPoints(U9),this}translate(J){return this.min.add(J),this.max.add(J),this}equals(J){return J.min.equals(this.min)&&J.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(J){return this.min.fromArray(J.min),this.max.fromArray(J.max),this}}var U9=[new v,new v,new v,new v,new v,new v,new v,new v],nJ=new v,K7=new s9,U8=new v,G8=new v,N8=new v,I9=new v,A9=new v,b9=new v,w8=new v,H7=new v,Y7=new v,h9=new v;function w6(J,Q,$,Z,W){for(let K=0,H=J.length-3;K<=H;K+=3){h9.fromArray(J,K);let Y=W.x*Math.abs(h9.x)+W.y*Math.abs(h9.y)+W.z*Math.abs(h9.z),X=Q.dot(h9),U=$.dot(h9),q=Z.dot(h9);if(Math.max(-Math.max(X,U,q),Math.min(X,U,q))>Y)return!1}return!0}var OJ=new v,X7=new p0,kK=0;class pJ extends O9{constructor(J,Q,$=!1){super();if(Array.isArray(J))throw TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:kK++}),this.name="",this.array=J,this.itemSize=Q,this.count=J!==void 0?J.length/Q:0,this.normalized=$,this.usage=35044,this.updateRanges=[],this.gpuType=1015,this.version=0}onUploadCallback(){}set needsUpdate(J){if(J===!0)this.version++}setUsage(J){return this.usage=J,this}addUpdateRange(J,Q){this.updateRanges.push({start:J,count:Q})}clearUpdateRanges(){this.updateRanges.length=0}copy(J){return this.name=J.name,this.array=new J.array.constructor(J.array),this.itemSize=J.itemSize,this.count=J.count,this.normalized=J.normalized,this.usage=J.usage,this.gpuType=J.gpuType,this}copyAt(J,Q,$){J*=this.itemSize,$*=Q.itemSize;for(let Z=0,W=this.itemSize;Z<W;Z++)this.array[J+Z]=Q.array[$+Z];return this}copyArray(J){return this.array.set(J),this}applyMatrix3(J){if(this.itemSize===2)for(let Q=0,$=this.count;Q<$;Q++)X7.fromBufferAttribute(this,Q),X7.applyMatrix3(J),this.setXY(Q,X7.x,X7.y);else if(this.itemSize===3)for(let Q=0,$=this.count;Q<$;Q++)OJ.fromBufferAttribute(this,Q),OJ.applyMatrix3(J),this.setXYZ(Q,OJ.x,OJ.y,OJ.z);return this}applyMatrix4(J){for(let Q=0,$=this.count;Q<$;Q++)OJ.fromBufferAttribute(this,Q),OJ.applyMatrix4(J),this.setXYZ(Q,OJ.x,OJ.y,OJ.z);return this}applyNormalMatrix(J){for(let Q=0,$=this.count;Q<$;Q++)OJ.fromBufferAttribute(this,Q),OJ.applyNormalMatrix(J),this.setXYZ(Q,OJ.x,OJ.y,OJ.z);return this}transformDirection(J){for(let Q=0,$=this.count;Q<$;Q++)OJ.fromBufferAttribute(this,Q),OJ.transformDirection(J),this.setXYZ(Q,OJ.x,OJ.y,OJ.z);return this}set(J,Q=0){return this.array.set(J,Q),this}getComponent(J,Q){let $=this.array[J*this.itemSize+Q];if(this.normalized)$=I8($,this.array);return $}setComponent(J,Q,$){if(this.normalized)$=SJ($,this.array);return this.array[J*this.itemSize+Q]=$,this}getX(J){let Q=this.array[J*this.itemSize];if(this.normalized)Q=I8(Q,this.array);return Q}setX(J,Q){if(this.normalized)Q=SJ(Q,this.array);return this.array[J*this.itemSize]=Q,this}getY(J){let Q=this.array[J*this.itemSize+1];if(this.normalized)Q=I8(Q,this.array);return Q}setY(J,Q){if(this.normalized)Q=SJ(Q,this.array);return this.array[J*this.itemSize+1]=Q,this}getZ(J){let Q=this.array[J*this.itemSize+2];if(this.normalized)Q=I8(Q,this.array);return Q}setZ(J,Q){if(this.normalized)Q=SJ(Q,this.array);return this.array[J*this.itemSize+2]=Q,this}getW(J){let Q=this.array[J*this.itemSize+3];if(this.normalized)Q=I8(Q,this.array);return Q}setW(J,Q){if(this.normalized)Q=SJ(Q,this.array);return this.array[J*this.itemSize+3]=Q,this}setXY(J,Q,$){if(J*=this.itemSize,this.normalized)Q=SJ(Q,this.array),$=SJ($,this.array);return this.array[J+0]=Q,this.array[J+1]=$,this}setXYZ(J,Q,$,Z){if(J*=this.itemSize,this.normalized)Q=SJ(Q,this.array),$=SJ($,this.array),Z=SJ(Z,this.array);return this.array[J+0]=Q,this.array[J+1]=$,this.array[J+2]=Z,this}setXYZW(J,Q,$,Z,W){if(J*=this.itemSize,this.normalized)Q=SJ(Q,this.array),$=SJ($,this.array),Z=SJ(Z,this.array),W=SJ(W,this.array);return this.array[J+0]=Q,this.array[J+1]=$,this.array[J+2]=Z,this.array[J+3]=W,this}onUpload(J){return this.onUploadCallback=J,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let J={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};if(this.name!=="")J.name=this.name;if(this.usage!==35044)J.usage=this.usage;return J}dispose(){this.dispatchEvent({type:"dispose"})}}class m7 extends pJ{constructor(J,Q,$){super(new Uint16Array(J),Q,$)}}class d7 extends pJ{constructor(J,Q,$){super(new Uint32Array(J),Q,$)}}class UJ extends pJ{constructor(J,Q,$){super(new Float32Array(J),Q,$)}}var MK=new s9,_8=new v,_6=new v;class V8{constructor(J=new v,Q=-1){this.isSphere=!0,this.center=J,this.radius=Q}set(J,Q){return this.center.copy(J),this.radius=Q,this}setFromPoints(J,Q){let $=this.center;if(Q!==void 0)$.copy(Q);else MK.setFromPoints(J).getCenter($);let Z=0;for(let W=0,K=J.length;W<K;W++)Z=Math.max(Z,$.distanceToSquared(J[W]));return this.radius=Math.sqrt(Z),this}copy(J){return this.center.copy(J.center),this.radius=J.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(J){return J.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(J){return J.distanceTo(this.center)-this.radius}intersectsSphere(J){let Q=this.radius+J.radius;return J.center.distanceToSquared(this.center)<=Q*Q}intersectsBox(J){return J.intersectsSphere(this)}intersectsPlane(J){return Math.abs(J.distanceToPoint(this.center))<=this.radius}clampPoint(J,Q){let $=this.center.distanceToSquared(J);if(Q.copy(J),$>this.radius*this.radius)Q.sub(this.center).normalize(),Q.multiplyScalar(this.radius).add(this.center);return Q}getBoundingBox(J){if(this.isEmpty())return J.makeEmpty(),J;return J.set(this.center,this.center),J.expandByScalar(this.radius),J}applyMatrix4(J){return this.center.applyMatrix4(J),this.radius=this.radius*J.getMaxScaleOnAxis(),this}translate(J){return this.center.add(J),this}expandByPoint(J){if(this.isEmpty())return this.center.copy(J),this.radius=0,this;_8.subVectors(J,this.center);let Q=_8.lengthSq();if(Q>this.radius*this.radius){let $=Math.sqrt(Q),Z=($-this.radius)*0.5;this.center.addScaledVector(_8,Z/$),this.radius+=Z}return this}union(J){if(J.isEmpty())return this;if(this.isEmpty())return this.copy(J),this;if(this.center.equals(J.center)===!0)this.radius=Math.max(this.radius,J.radius);else _6.subVectors(J.center,this.center).setLength(J.radius),this.expandByPoint(_8.copy(J.center).add(_6)),this.expandByPoint(_8.copy(J.center).sub(_6));return this}equals(J){return J.center.equals(this.center)&&J.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(J){return this.radius=J.radius,this.center.fromArray(J.center),this}}var LK=0,xJ=new HJ,C6=new DJ,E8=new v,fJ=new s9,C8=new s9,LJ=new v;class BJ extends O9{constructor(){super();this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:LK++}),this.uuid=x8(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(J){if(Array.isArray(J))this.index=new((KK(J))?d7:m7)(J,1);else this.index=J;return this}setIndirect(J,Q=0){return this.indirect=J,this.indirectOffset=Q,this}getIndirect(){return this.indirect}getAttribute(J){return this.attributes[J]}setAttribute(J,Q){return this.attributes[J]=Q,this}deleteAttribute(J){return delete this.attributes[J],this}hasAttribute(J){return this.attributes[J]!==void 0}addGroup(J,Q,$=0){this.groups.push({start:J,count:Q,materialIndex:$})}clearGroups(){this.groups=[]}setDrawRange(J,Q){this.drawRange.start=J,this.drawRange.count=Q}applyMatrix4(J){let Q=this.attributes.position;if(Q!==void 0)Q.applyMatrix4(J),Q.needsUpdate=!0;let $=this.attributes.normal;if($!==void 0){let W=new j0().getNormalMatrix(J);$.applyNormalMatrix(W),$.needsUpdate=!0}let Z=this.attributes.tangent;if(Z!==void 0)Z.transformDirection(J),Z.needsUpdate=!0;if(this.boundingBox!==null)this.computeBoundingBox();if(this.boundingSphere!==null)this.computeBoundingSphere();return this._transformed=!0,this}applyQuaternion(J){return xJ.makeRotationFromQuaternion(J),this.applyMatrix4(xJ),this}rotateX(J){return xJ.makeRotationX(J),this.applyMatrix4(xJ),this}rotateY(J){return xJ.makeRotationY(J),this.applyMatrix4(xJ),this}rotateZ(J){return xJ.makeRotationZ(J),this.applyMatrix4(xJ),this}translate(J,Q,$){return xJ.makeTranslation(J,Q,$),this.applyMatrix4(xJ),this}scale(J,Q,$){return xJ.makeScale(J,Q,$),this.applyMatrix4(xJ),this}lookAt(J){return C6.lookAt(J),C6.updateMatrix(),this.applyMatrix4(C6.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(E8).negate(),this.translate(E8.x,E8.y,E8.z),this}setFromPoints(J){let Q=this.getAttribute("position");if(Q===void 0){let $=[];for(let Z=0,W=J.length;Z<W;Z++){let K=J[Z];$.push(K.x,K.y,K.z||0)}this.setAttribute("position",new UJ($,3))}else{let $=Math.min(J.length,Q.count);for(let Z=0;Z<$;Z++){let W=J[Z];Q.setXYZ(Z,W.x,W.y,W.z||0)}if(J.length>Q.count)_0("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry.");Q.needsUpdate=!0}return this}computeBoundingBox(){if(this.boundingBox===null)this.boundingBox=new s9;let J=this.attributes.position,Q=this.morphAttributes.position;if(J&&J.isGLBufferAttribute){P0("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new v(-1/0,-1/0,-1/0),new v(1/0,1/0,1/0));return}if(J!==void 0){if(this.boundingBox.setFromBufferAttribute(J),Q)for(let $=0,Z=Q.length;$<Z;$++){let W=Q[$];if(fJ.setFromBufferAttribute(W),this.morphTargetsRelative)LJ.addVectors(this.boundingBox.min,fJ.min),this.boundingBox.expandByPoint(LJ),LJ.addVectors(this.boundingBox.max,fJ.max),this.boundingBox.expandByPoint(LJ);else this.boundingBox.expandByPoint(fJ.min),this.boundingBox.expandByPoint(fJ.max)}}else this.boundingBox.makeEmpty();if(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))P0('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){if(this.boundingSphere===null)this.boundingSphere=new V8;let J=this.attributes.position,Q=this.morphAttributes.position;if(J&&J.isGLBufferAttribute){P0("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new v,1/0);return}if(J){let $=this.boundingSphere.center;if(fJ.setFromBufferAttribute(J),Q)for(let W=0,K=Q.length;W<K;W++){let H=Q[W];if(C8.setFromBufferAttribute(H),this.morphTargetsRelative)LJ.addVectors(fJ.min,C8.min),fJ.expandByPoint(LJ),LJ.addVectors(fJ.max,C8.max),fJ.expandByPoint(LJ);else fJ.expandByPoint(C8.min),fJ.expandByPoint(C8.max)}fJ.getCenter($);let Z=0;for(let W=0,K=J.count;W<K;W++)LJ.fromBufferAttribute(J,W),Z=Math.max(Z,$.distanceToSquared(LJ));if(Q)for(let W=0,K=Q.length;W<K;W++){let H=Q[W],Y=this.morphTargetsRelative;for(let X=0,U=H.count;X<U;X++){if(LJ.fromBufferAttribute(H,X),Y)E8.fromBufferAttribute(J,X),LJ.add(E8);Z=Math.max(Z,$.distanceToSquared(LJ))}}if(this.boundingSphere.radius=Math.sqrt(Z),isNaN(this.boundingSphere.radius))P0('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let J=this.index,Q=this.attributes;if(J===null||Q.position===void 0||Q.normal===void 0||Q.uv===void 0){P0("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let{position:$,normal:Z,uv:W}=Q,K=this.getAttribute("tangent");if(K===void 0||K.count!==$.count)K=new pJ(new Float32Array(4*$.count),4),this.setAttribute("tangent",K);let H=[],Y=[];for(let P=0;P<$.count;P++)H[P]=new v,Y[P]=new v;let X=new v,U=new v,q=new v,F=new p0,G=new p0,D=new p0,M=new v,z=new v;function E(P,O,V){X.fromBufferAttribute($,P),U.fromBufferAttribute($,O),q.fromBufferAttribute($,V),F.fromBufferAttribute(W,P),G.fromBufferAttribute(W,O),D.fromBufferAttribute(W,V),U.sub(X),q.sub(X),G.sub(F),D.sub(F);let p=1/(G.x*D.y-D.x*G.y);if(!isFinite(p))return;M.copy(U).multiplyScalar(D.y).addScaledVector(q,-G.y).multiplyScalar(p),z.copy(q).multiplyScalar(G.x).addScaledVector(U,-D.x).multiplyScalar(p),H[P].add(M),H[O].add(M),H[V].add(M),Y[P].add(z),Y[O].add(z),Y[V].add(z)}let N=this.groups;if(N.length===0)N=[{start:0,count:J.count}];for(let P=0,O=N.length;P<O;++P){let V=N[P],p=V.start,w=V.count;for(let h=p,s=p+w;h<s;h+=3)E(J.getX(h+0),J.getX(h+1),J.getX(h+2))}let C=new v,_=new v,L=new v,A=new v;function I(P){L.fromBufferAttribute(Z,P),A.copy(L);let O=H[P];C.copy(O),C.sub(L.multiplyScalar(L.dot(O))).normalize(),_.crossVectors(A,O);let p=_.dot(Y[P])<0?-1:1;K.setXYZW(P,C.x,C.y,C.z,p)}for(let P=0,O=N.length;P<O;++P){let V=N[P],p=V.start,w=V.count;for(let h=p,s=p+w;h<s;h+=3)I(J.getX(h+0)),I(J.getX(h+1)),I(J.getX(h+2))}this._transformed=!0}computeVertexNormals(){let J=this.index,Q=this.getAttribute("position");if(Q!==void 0){let $=this.getAttribute("normal");if($===void 0||$.count!==Q.count)$=new pJ(new Float32Array(Q.count*3),3),this.setAttribute("normal",$);else for(let F=0,G=$.count;F<G;F++)$.setXYZ(F,0,0,0);let Z=new v,W=new v,K=new v,H=new v,Y=new v,X=new v,U=new v,q=new v;if(J)for(let F=0,G=J.count;F<G;F+=3){let D=J.getX(F+0),M=J.getX(F+1),z=J.getX(F+2);Z.fromBufferAttribute(Q,D),W.fromBufferAttribute(Q,M),K.fromBufferAttribute(Q,z),U.subVectors(K,W),q.subVectors(Z,W),U.cross(q),H.fromBufferAttribute($,D),Y.fromBufferAttribute($,M),X.fromBufferAttribute($,z),H.add(U),Y.add(U),X.add(U),$.setXYZ(D,H.x,H.y,H.z),$.setXYZ(M,Y.x,Y.y,Y.z),$.setXYZ(z,X.x,X.y,X.z)}else for(let F=0,G=Q.count;F<G;F+=3)Z.fromBufferAttribute(Q,F+0),W.fromBufferAttribute(Q,F+1),K.fromBufferAttribute(Q,F+2),U.subVectors(K,W),q.subVectors(Z,W),U.cross(q),$.setXYZ(F+0,U.x,U.y,U.z),$.setXYZ(F+1,U.x,U.y,U.z),$.setXYZ(F+2,U.x,U.y,U.z);this.normalizeNormals(),$.needsUpdate=!0}}normalizeNormals(){let J=this.attributes.normal;for(let Q=0,$=J.count;Q<$;Q++)LJ.fromBufferAttribute(J,Q),LJ.normalize(),J.setXYZ(Q,LJ.x,LJ.y,LJ.z)}toNonIndexed(){function J(H,Y){let{array:X,itemSize:U,normalized:q}=H,F=new X.constructor(Y.length*U),G=0,D=0;for(let M=0,z=Y.length;M<z;M++){if(H.isInterleavedBufferAttribute)G=Y[M]*H.data.stride+H.offset;else G=Y[M]*U;for(let E=0;E<U;E++)F[D++]=X[G++]}return new pJ(F,U,q)}if(this.index===null)return _0("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let Q=new BJ,$=this.index.array,Z=this.attributes;for(let H in Z){let Y=Z[H],X=J(Y,$);Q.setAttribute(H,X)}let W=this.morphAttributes;for(let H in W){let Y=[],X=W[H];for(let U=0,q=X.length;U<q;U++){let F=X[U],G=J(F,$);Y.push(G)}Q.morphAttributes[H]=Y}Q.morphTargetsRelative=this.morphTargetsRelative;let K=this.groups;for(let H=0,Y=K.length;H<Y;H++){let X=K[H];Q.addGroup(X.start,X.count,X.materialIndex)}return Q}toJSON(){let J={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(J.uuid=this.uuid,J.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,this.name!=="")J.name=this.name;if(Object.keys(this.userData).length>0)J.userData=this.userData;if(this.parameters!==void 0&&this._transformed!==!0){let Y=this.parameters;for(let X in Y)if(Y[X]!==void 0)J[X]=Y[X];return J}J.data={attributes:{}};let Q=this.index;if(Q!==null)J.data.index={type:Q.array.constructor.name,array:Array.prototype.slice.call(Q.array)};let $=this.attributes;for(let Y in $){let X=$[Y];J.data.attributes[Y]=X.toJSON(J.data)}let Z={},W=!1;for(let Y in this.morphAttributes){let X=this.morphAttributes[Y],U=[];for(let q=0,F=X.length;q<F;q++){let G=X[q];U.push(G.toJSON(J.data))}if(U.length>0)Z[Y]=U,W=!0}if(W)J.data.morphAttributes=Z,J.data.morphTargetsRelative=this.morphTargetsRelative;let K=this.groups;if(K.length>0)J.data.groups=JSON.parse(JSON.stringify(K));let H=this.boundingSphere;if(H!==null)J.data.boundingSphere=H.toJSON();return J}clone(){return new this.constructor().copy(this)}copy(J){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let Q={};this.name=J.name;let $=J.index;if($!==null)this.setIndex($.clone());let Z=J.attributes;for(let X in Z){let U=Z[X];this.setAttribute(X,U.clone(Q))}let W=J.morphAttributes;for(let X in W){let U=[],q=W[X];for(let F=0,G=q.length;F<G;F++)U.push(q[F].clone(Q));this.morphAttributes[X]=U}this.morphTargetsRelative=J.morphTargetsRelative;let K=J.groups;for(let X=0,U=K.length;X<U;X++){let q=K[X];this.addGroup(q.start,q.count,q.materialIndex)}let H=J.boundingBox;if(H!==null)this.boundingBox=H.clone();let Y=J.boundingSphere;if(Y!==null)this.boundingSphere=Y.clone();return this.drawRange.start=J.drawRange.start,this.drawRange.count=J.drawRange.count,this.userData=J.userData,this._transformed=J._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}var VK=0;class k9 extends O9{constructor(){super();this.isMaterial=!0,Object.defineProperty(this,"id",{value:VK++}),this.uuid=x8(),this.name="",this.type="Material",this.blending=1,this.side=0,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=204,this.blendDst=205,this.blendEquation=100,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new y0(0,0,0),this.blendAlpha=0,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=7680,this.stencilZFail=7680,this.stencilZPass=7680,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(J){if(this._alphaTest>0!==J>0)this.version++;this._alphaTest=J}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(J){if(J===void 0)return;for(let Q in J){let $=J[Q];if($===void 0){_0(`Material: parameter '${Q}' has value of undefined.`);continue}let Z=this[Q];if(Z===void 0){_0(`Material: '${Q}' is not a property of THREE.${this.type}.`);continue}if(Z&&Z.isColor)Z.set($);else if(Z&&Z.isVector2&&($&&$.isVector2)||Z&&Z.isEuler&&($&&$.isEuler)||Z&&Z.isVector3&&($&&$.isVector3))Z.copy($);else this[Q]=$}}toJSON(J){let Q=J===void 0||typeof J==="string";if(Q)J={textures:{},images:{}};let $={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};if($.uuid=this.uuid,$.type=this.type,this.name!=="")$.name=this.name;if(this.color&&this.color.isColor)$.color=this.color.getHex();if(this.roughness!==void 0)$.roughness=this.roughness;if(this.metalness!==void 0)$.metalness=this.metalness;if(this.sheen!==void 0)$.sheen=this.sheen;if(this.sheenColor&&this.sheenColor.isColor)$.sheenColor=this.sheenColor.getHex();if(this.sheenRoughness!==void 0)$.sheenRoughness=this.sheenRoughness;if(this.emissive&&this.emissive.isColor)$.emissive=this.emissive.getHex();if(this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1)$.emissiveIntensity=this.emissiveIntensity;if(this.specular&&this.specular.isColor)$.specular=this.specular.getHex();if(this.specularIntensity!==void 0)$.specularIntensity=this.specularIntensity;if(this.specularColor&&this.specularColor.isColor)$.specularColor=this.specularColor.getHex();if(this.shininess!==void 0)$.shininess=this.shininess;if(this.clearcoat!==void 0)$.clearcoat=this.clearcoat;if(this.clearcoatRoughness!==void 0)$.clearcoatRoughness=this.clearcoatRoughness;if(this.clearcoatMap&&this.clearcoatMap.isTexture)$.clearcoatMap=this.clearcoatMap.toJSON(J).uuid;if(this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture)$.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(J).uuid;if(this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture)$.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(J).uuid,$.clearcoatNormalScale=this.clearcoatNormalScale.toArray();if(this.sheenColorMap&&this.sheenColorMap.isTexture)$.sheenColorMap=this.sheenColorMap.toJSON(J).uuid;if(this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture)$.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(J).uuid;if(this.dispersion!==void 0)$.dispersion=this.dispersion;if(this.iridescence!==void 0)$.iridescence=this.iridescence;if(this.iridescenceIOR!==void 0)$.iridescenceIOR=this.iridescenceIOR;if(this.iridescenceThicknessRange!==void 0)$.iridescenceThicknessRange=this.iridescenceThicknessRange;if(this.iridescenceMap&&this.iridescenceMap.isTexture)$.iridescenceMap=this.iridescenceMap.toJSON(J).uuid;if(this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture)$.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(J).uuid;if(this.anisotropy!==void 0)$.anisotropy=this.anisotropy;if(this.anisotropyRotation!==void 0)$.anisotropyRotation=this.anisotropyRotation;if(this.anisotropyMap&&this.anisotropyMap.isTexture)$.anisotropyMap=this.anisotropyMap.toJSON(J).uuid;if(this.map&&this.map.isTexture)$.map=this.map.toJSON(J).uuid;if(this.matcap&&this.matcap.isTexture)$.matcap=this.matcap.toJSON(J).uuid;if(this.alphaMap&&this.alphaMap.isTexture)$.alphaMap=this.alphaMap.toJSON(J).uuid;if(this.lightMap&&this.lightMap.isTexture)$.lightMap=this.lightMap.toJSON(J).uuid,$.lightMapIntensity=this.lightMapIntensity;if(this.aoMap&&this.aoMap.isTexture)$.aoMap=this.aoMap.toJSON(J).uuid,$.aoMapIntensity=this.aoMapIntensity;if(this.bumpMap&&this.bumpMap.isTexture)$.bumpMap=this.bumpMap.toJSON(J).uuid,$.bumpScale=this.bumpScale;if(this.normalMap&&this.normalMap.isTexture)$.normalMap=this.normalMap.toJSON(J).uuid,$.normalMapType=this.normalMapType,$.normalScale=this.normalScale.toArray();if(this.displacementMap&&this.displacementMap.isTexture)$.displacementMap=this.displacementMap.toJSON(J).uuid,$.displacementScale=this.displacementScale,$.displacementBias=this.displacementBias;if(this.roughnessMap&&this.roughnessMap.isTexture)$.roughnessMap=this.roughnessMap.toJSON(J).uuid;if(this.metalnessMap&&this.metalnessMap.isTexture)$.metalnessMap=this.metalnessMap.toJSON(J).uuid;if(this.emissiveMap&&this.emissiveMap.isTexture)$.emissiveMap=this.emissiveMap.toJSON(J).uuid;if(this.specularMap&&this.specularMap.isTexture)$.specularMap=this.specularMap.toJSON(J).uuid;if(this.specularIntensityMap&&this.specularIntensityMap.isTexture)$.specularIntensityMap=this.specularIntensityMap.toJSON(J).uuid;if(this.specularColorMap&&this.specularColorMap.isTexture)$.specularColorMap=this.specularColorMap.toJSON(J).uuid;if(this.envMap&&this.envMap.isTexture){if($.envMap=this.envMap.toJSON(J).uuid,this.combine!==void 0)$.combine=this.combine}if(this.envMapRotation!==void 0)$.envMapRotation=this.envMapRotation.toArray();if(this.envMapIntensity!==void 0)$.envMapIntensity=this.envMapIntensity;if(this.reflectivity!==void 0)$.reflectivity=this.reflectivity;if(this.refractionRatio!==void 0)$.refractionRatio=this.refractionRatio;if(this.gradientMap&&this.gradientMap.isTexture)$.gradientMap=this.gradientMap.toJSON(J).uuid;if(this.transmission!==void 0)$.transmission=this.transmission;if(this.transmissionMap&&this.transmissionMap.isTexture)$.transmissionMap=this.transmissionMap.toJSON(J).uuid;if(this.thickness!==void 0)$.thickness=this.thickness;if(this.thicknessMap&&this.thicknessMap.isTexture)$.thicknessMap=this.thicknessMap.toJSON(J).uuid;if(this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0)$.attenuationDistance=this.attenuationDistance;if(this.attenuationColor!==void 0)$.attenuationColor=this.attenuationColor.getHex();if(this.size!==void 0)$.size=this.size;if(this.shadowSide!==null)$.shadowSide=this.shadowSide;if(this.sizeAttenuation!==void 0)$.sizeAttenuation=this.sizeAttenuation;if(this.blending!==1)$.blending=this.blending;if(this.side!==0)$.side=this.side;if(this.vertexColors===!0)$.vertexColors=!0;if(this.opacity<1)$.opacity=this.opacity;if(this.transparent===!0)$.transparent=!0;if(this.blendSrc!==204)$.blendSrc=this.blendSrc;if(this.blendDst!==205)$.blendDst=this.blendDst;if(this.blendEquation!==100)$.blendEquation=this.blendEquation;if(this.blendSrcAlpha!==null)$.blendSrcAlpha=this.blendSrcAlpha;if(this.blendDstAlpha!==null)$.blendDstAlpha=this.blendDstAlpha;if(this.blendEquationAlpha!==null)$.blendEquationAlpha=this.blendEquationAlpha;if(this.blendColor&&this.blendColor.isColor)$.blendColor=this.blendColor.getHex();if(this.blendAlpha!==0)$.blendAlpha=this.blendAlpha;if(this.depthFunc!==3)$.depthFunc=this.depthFunc;if(this.depthTest===!1)$.depthTest=this.depthTest;if(this.depthWrite===!1)$.depthWrite=this.depthWrite;if(this.colorWrite===!1)$.colorWrite=this.colorWrite;if(this.stencilWriteMask!==255)$.stencilWriteMask=this.stencilWriteMask;if(this.stencilFunc!==519)$.stencilFunc=this.stencilFunc;if(this.stencilRef!==0)$.stencilRef=this.stencilRef;if(this.stencilFuncMask!==255)$.stencilFuncMask=this.stencilFuncMask;if(this.stencilFail!==7680)$.stencilFail=this.stencilFail;if(this.stencilZFail!==7680)$.stencilZFail=this.stencilZFail;if(this.stencilZPass!==7680)$.stencilZPass=this.stencilZPass;if(this.stencilWrite===!0)$.stencilWrite=this.stencilWrite;if(this.rotation!==void 0&&this.rotation!==0)$.rotation=this.rotation;if(this.polygonOffset===!0)$.polygonOffset=!0;if(this.polygonOffsetFactor!==0)$.polygonOffsetFactor=this.polygonOffsetFactor;if(this.polygonOffsetUnits!==0)$.polygonOffsetUnits=this.polygonOffsetUnits;if(this.linewidth!==void 0&&this.linewidth!==1)$.linewidth=this.linewidth;if(this.dashSize!==void 0)$.dashSize=this.dashSize;if(this.gapSize!==void 0)$.gapSize=this.gapSize;if(this.scale!==void 0)$.scale=this.scale;if(this.dithering===!0)$.dithering=!0;if(this.alphaTest>0)$.alphaTest=this.alphaTest;if(this.alphaHash===!0)$.alphaHash=!0;if(this.alphaToCoverage===!0)$.alphaToCoverage=!0;if(this.premultipliedAlpha===!0)$.premultipliedAlpha=!0;if(this.forceSinglePass===!0)$.forceSinglePass=!0;if(this.allowOverride===!1)$.allowOverride=!1;if(this.wireframe===!0)$.wireframe=!0;if(this.wireframeLinewidth>1)$.wireframeLinewidth=this.wireframeLinewidth;if(this.wireframeLinecap!=="round")$.wireframeLinecap=this.wireframeLinecap;if(this.wireframeLinejoin!=="round")$.wireframeLinejoin=this.wireframeLinejoin;if(this.flatShading===!0)$.flatShading=!0;if(this.visible===!1)$.visible=!1;if(this.toneMapped===!1)$.toneMapped=!1;if(this.fog===!1)$.fog=!1;if(Object.keys(this.userData).length>0)$.userData=this.userData;function Z(W){let K=[];for(let H in W){let Y=W[H];delete Y.metadata,K.push(Y)}return K}if(Q){let W=Z(J.textures),K=Z(J.images);if(W.length>0)$.textures=W;if(K.length>0)$.images=K}return $}fromJSON(J,Q){if(J.uuid!==void 0)this.uuid=J.uuid;if(J.name!==void 0)this.name=J.name;if(J.color!==void 0&&this.color!==void 0)this.color.setHex(J.color);if(J.roughness!==void 0)this.roughness=J.roughness;if(J.metalness!==void 0)this.metalness=J.metalness;if(J.sheen!==void 0)this.sheen=J.sheen;if(J.sheenColor!==void 0)this.sheenColor=new y0().setHex(J.sheenColor);if(J.sheenRoughness!==void 0)this.sheenRoughness=J.sheenRoughness;if(J.emissive!==void 0&&this.emissive!==void 0)this.emissive.setHex(J.emissive);if(J.specular!==void 0&&this.specular!==void 0)this.specular.setHex(J.specular);if(J.specularIntensity!==void 0)this.specularIntensity=J.specularIntensity;if(J.specularColor!==void 0&&this.specularColor!==void 0)this.specularColor.setHex(J.specularColor);if(J.shininess!==void 0)this.shininess=J.shininess;if(J.clearcoat!==void 0)this.clearcoat=J.clearcoat;if(J.clearcoatRoughness!==void 0)this.clearcoatRoughness=J.clearcoatRoughness;if(J.dispersion!==void 0)this.dispersion=J.dispersion;if(J.iridescence!==void 0)this.iridescence=J.iridescence;if(J.iridescenceIOR!==void 0)this.iridescenceIOR=J.iridescenceIOR;if(J.iridescenceThicknessRange!==void 0)this.iridescenceThicknessRange=J.iridescenceThicknessRange;if(J.transmission!==void 0)this.transmission=J.transmission;if(J.thickness!==void 0)this.thickness=J.thickness;if(J.attenuationDistance!==void 0)this.attenuationDistance=J.attenuationDistance;if(J.attenuationColor!==void 0&&this.attenuationColor!==void 0)this.attenuationColor.setHex(J.attenuationColor);if(J.anisotropy!==void 0)this.anisotropy=J.anisotropy;if(J.anisotropyRotation!==void 0)this.anisotropyRotation=J.anisotropyRotation;if(J.fog!==void 0)this.fog=J.fog;if(J.flatShading!==void 0)this.flatShading=J.flatShading;if(J.blending!==void 0)this.blending=J.blending;if(J.combine!==void 0)this.combine=J.combine;if(J.side!==void 0)this.side=J.side;if(J.shadowSide!==void 0)this.shadowSide=J.shadowSide;if(J.opacity!==void 0)this.opacity=J.opacity;if(J.transparent!==void 0)this.transparent=J.transparent;if(J.alphaTest!==void 0)this.alphaTest=J.alphaTest;if(J.alphaHash!==void 0)this.alphaHash=J.alphaHash;if(J.depthFunc!==void 0)this.depthFunc=J.depthFunc;if(J.depthTest!==void 0)this.depthTest=J.depthTest;if(J.depthWrite!==void 0)this.depthWrite=J.depthWrite;if(J.colorWrite!==void 0)this.colorWrite=J.colorWrite;if(J.blendSrc!==void 0)this.blendSrc=J.blendSrc;if(J.blendDst!==void 0)this.blendDst=J.blendDst;if(J.blendEquation!==void 0)this.blendEquation=J.blendEquation;if(J.blendSrcAlpha!==void 0)this.blendSrcAlpha=J.blendSrcAlpha;if(J.blendDstAlpha!==void 0)this.blendDstAlpha=J.blendDstAlpha;if(J.blendEquationAlpha!==void 0)this.blendEquationAlpha=J.blendEquationAlpha;if(J.blendColor!==void 0&&this.blendColor!==void 0)this.blendColor.setHex(J.blendColor);if(J.blendAlpha!==void 0)this.blendAlpha=J.blendAlpha;if(J.stencilWriteMask!==void 0)this.stencilWriteMask=J.stencilWriteMask;if(J.stencilFunc!==void 0)this.stencilFunc=J.stencilFunc;if(J.stencilRef!==void 0)this.stencilRef=J.stencilRef;if(J.stencilFuncMask!==void 0)this.stencilFuncMask=J.stencilFuncMask;if(J.stencilFail!==void 0)this.stencilFail=J.stencilFail;if(J.stencilZFail!==void 0)this.stencilZFail=J.stencilZFail;if(J.stencilZPass!==void 0)this.stencilZPass=J.stencilZPass;if(J.stencilWrite!==void 0)this.stencilWrite=J.stencilWrite;if(J.wireframe!==void 0)this.wireframe=J.wireframe;if(J.wireframeLinewidth!==void 0)this.wireframeLinewidth=J.wireframeLinewidth;if(J.wireframeLinecap!==void 0)this.wireframeLinecap=J.wireframeLinecap;if(J.wireframeLinejoin!==void 0)this.wireframeLinejoin=J.wireframeLinejoin;if(J.rotation!==void 0)this.rotation=J.rotation;if(J.linewidth!==void 0)this.linewidth=J.linewidth;if(J.dashSize!==void 0)this.dashSize=J.dashSize;if(J.gapSize!==void 0)this.gapSize=J.gapSize;if(J.scale!==void 0)this.scale=J.scale;if(J.polygonOffset!==void 0)this.polygonOffset=J.polygonOffset;if(J.polygonOffsetFactor!==void 0)this.polygonOffsetFactor=J.polygonOffsetFactor;if(J.polygonOffsetUnits!==void 0)this.polygonOffsetUnits=J.polygonOffsetUnits;if(J.dithering!==void 0)this.dithering=J.dithering;if(J.alphaToCoverage!==void 0)this.alphaToCoverage=J.alphaToCoverage;if(J.premultipliedAlpha!==void 0)this.premultipliedAlpha=J.premultipliedAlpha;if(J.forceSinglePass!==void 0)this.forceSinglePass=J.forceSinglePass;if(J.allowOverride!==void 0)this.allowOverride=J.allowOverride;if(J.visible!==void 0)this.visible=J.visible;if(J.toneMapped!==void 0)this.toneMapped=J.toneMapped;if(J.userData!==void 0)this.userData=J.userData;if(J.vertexColors!==void 0)if(typeof J.vertexColors==="number")this.vertexColors=J.vertexColors>0;else this.vertexColors=J.vertexColors;if(J.size!==void 0)this.size=J.size;if(J.sizeAttenuation!==void 0)this.sizeAttenuation=J.sizeAttenuation;if(J.map!==void 0)this.map=Q[J.map]||null;if(J.matcap!==void 0)this.matcap=Q[J.matcap]||null;if(J.alphaMap!==void 0)this.alphaMap=Q[J.alphaMap]||null;if(J.bumpMap!==void 0)this.bumpMap=Q[J.bumpMap]||null;if(J.bumpScale!==void 0)this.bumpScale=J.bumpScale;if(J.normalMap!==void 0)this.normalMap=Q[J.normalMap]||null;if(J.normalMapType!==void 0)this.normalMapType=J.normalMapType;if(J.normalScale!==void 0){let $=J.normalScale;if(Array.isArray($)===!1)$=[$,$];this.normalScale=new p0().fromArray($)}if(J.displacementMap!==void 0)this.displacementMap=Q[J.displacementMap]||null;if(J.displacementScale!==void 0)this.displacementScale=J.displacementScale;if(J.displacementBias!==void 0)this.displacementBias=J.displacementBias;if(J.roughnessMap!==void 0)this.roughnessMap=Q[J.roughnessMap]||null;if(J.metalnessMap!==void 0)this.metalnessMap=Q[J.metalnessMap]||null;if(J.emissiveMap!==void 0)this.emissiveMap=Q[J.emissiveMap]||null;if(J.emissiveIntensity!==void 0)this.emissiveIntensity=J.emissiveIntensity;if(J.specularMap!==void 0)this.specularMap=Q[J.specularMap]||null;if(J.specularIntensityMap!==void 0)this.specularIntensityMap=Q[J.specularIntensityMap]||null;if(J.specularColorMap!==void 0)this.specularColorMap=Q[J.specularColorMap]||null;if(J.envMap!==void 0)this.envMap=Q[J.envMap]||null;if(J.envMapRotation!==void 0)this.envMapRotation.fromArray(J.envMapRotation);if(J.envMapIntensity!==void 0)this.envMapIntensity=J.envMapIntensity;if(J.reflectivity!==void 0)this.reflectivity=J.reflectivity;if(J.refractionRatio!==void 0)this.refractionRatio=J.refractionRatio;if(J.lightMap!==void 0)this.lightMap=Q[J.lightMap]||null;if(J.lightMapIntensity!==void 0)this.lightMapIntensity=J.lightMapIntensity;if(J.aoMap!==void 0)this.aoMap=Q[J.aoMap]||null;if(J.aoMapIntensity!==void 0)this.aoMapIntensity=J.aoMapIntensity;if(J.gradientMap!==void 0)this.gradientMap=Q[J.gradientMap]||null;if(J.clearcoatMap!==void 0)this.clearcoatMap=Q[J.clearcoatMap]||null;if(J.clearcoatRoughnessMap!==void 0)this.clearcoatRoughnessMap=Q[J.clearcoatRoughnessMap]||null;if(J.clearcoatNormalMap!==void 0)this.clearcoatNormalMap=Q[J.clearcoatNormalMap]||null;if(J.clearcoatNormalScale!==void 0)this.clearcoatNormalScale=new p0().fromArray(J.clearcoatNormalScale);if(J.iridescenceMap!==void 0)this.iridescenceMap=Q[J.iridescenceMap]||null;if(J.iridescenceThicknessMap!==void 0)this.iridescenceThicknessMap=Q[J.iridescenceThicknessMap]||null;if(J.transmissionMap!==void 0)this.transmissionMap=Q[J.transmissionMap]||null;if(J.thicknessMap!==void 0)this.thicknessMap=Q[J.thicknessMap]||null;if(J.anisotropyMap!==void 0)this.anisotropyMap=Q[J.anisotropyMap]||null;if(J.sheenColorMap!==void 0)this.sheenColorMap=Q[J.sheenColorMap]||null;if(J.sheenRoughnessMap!==void 0)this.sheenRoughnessMap=Q[J.sheenRoughnessMap]||null;return this}clone(){return new this.constructor().copy(this)}copy(J){this.name=J.name,this.blending=J.blending,this.side=J.side,this.vertexColors=J.vertexColors,this.opacity=J.opacity,this.transparent=J.transparent,this.blendSrc=J.blendSrc,this.blendDst=J.blendDst,this.blendEquation=J.blendEquation,this.blendSrcAlpha=J.blendSrcAlpha,this.blendDstAlpha=J.blendDstAlpha,this.blendEquationAlpha=J.blendEquationAlpha,this.blendColor.copy(J.blendColor),this.blendAlpha=J.blendAlpha,this.depthFunc=J.depthFunc,this.depthTest=J.depthTest,this.depthWrite=J.depthWrite,this.stencilWriteMask=J.stencilWriteMask,this.stencilFunc=J.stencilFunc,this.stencilRef=J.stencilRef,this.stencilFuncMask=J.stencilFuncMask,this.stencilFail=J.stencilFail,this.stencilZFail=J.stencilZFail,this.stencilZPass=J.stencilZPass,this.stencilWrite=J.stencilWrite;let Q=J.clippingPlanes,$=null;if(Q!==null){let Z=Q.length;$=Array(Z);for(let W=0;W!==Z;++W)$[W]=Q[W].clone()}return this.clippingPlanes=$,this.clipIntersection=J.clipIntersection,this.clipShadows=J.clipShadows,this.shadowSide=J.shadowSide,this.colorWrite=J.colorWrite,this.precision=J.precision,this.polygonOffset=J.polygonOffset,this.polygonOffsetFactor=J.polygonOffsetFactor,this.polygonOffsetUnits=J.polygonOffsetUnits,this.dithering=J.dithering,this.alphaTest=J.alphaTest,this.alphaHash=J.alphaHash,this.alphaToCoverage=J.alphaToCoverage,this.premultipliedAlpha=J.premultipliedAlpha,this.forceSinglePass=J.forceSinglePass,this.allowOverride=J.allowOverride,this.visible=J.visible,this.toneMapped=J.toneMapped,this.userData=JSON.parse(JSON.stringify(J.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(J){if(J===!0)this.version++}}var G9=new v,P6=new v,U7=new v,w9=new v,T6=new v,G7=new v,S6=new v;class l8{constructor(J=new v,Q=new v(0,0,-1)){this.origin=J,this.direction=Q}set(J,Q){return this.origin.copy(J),this.direction.copy(Q),this}copy(J){return this.origin.copy(J.origin),this.direction.copy(J.direction),this}at(J,Q){return Q.copy(this.origin).addScaledVector(this.direction,J)}lookAt(J){return this.direction.copy(J).sub(this.origin).normalize(),this}recast(J){return this.origin.copy(this.at(J,G9)),this}closestPointToPoint(J,Q){Q.subVectors(J,this.origin);let $=Q.dot(this.direction);if($<0)return Q.copy(this.origin);return Q.copy(this.origin).addScaledVector(this.direction,$)}distanceToPoint(J){return Math.sqrt(this.distanceSqToPoint(J))}distanceSqToPoint(J){let Q=G9.subVectors(J,this.origin).dot(this.direction);if(Q<0)return this.origin.distanceToSquared(J);return G9.copy(this.origin).addScaledVector(this.direction,Q),G9.distanceToSquared(J)}distanceSqToSegment(J,Q,$,Z){P6.copy(J).add(Q).multiplyScalar(0.5),U7.copy(Q).sub(J).normalize(),w9.copy(this.origin).sub(P6);let W=J.distanceTo(Q)*0.5,K=-this.direction.dot(U7),H=w9.dot(this.direction),Y=-w9.dot(U7),X=w9.lengthSq(),U=Math.abs(1-K*K),q,F,G,D;if(U>0)if(q=K*Y-H,F=K*H-Y,D=W*U,q>=0)if(F>=-D)if(F<=D){let M=1/U;q*=M,F*=M,G=q*(q+K*F+2*H)+F*(K*q+F+2*Y)+X}else F=W,q=Math.max(0,-(K*F+H)),G=-q*q+F*(F+2*Y)+X;else F=-W,q=Math.max(0,-(K*F+H)),G=-q*q+F*(F+2*Y)+X;else if(F<=-D)q=Math.max(0,-(-K*W+H)),F=q>0?-W:Math.min(Math.max(-W,-Y),W),G=-q*q+F*(F+2*Y)+X;else if(F<=D)q=0,F=Math.min(Math.max(-W,-Y),W),G=F*(F+2*Y)+X;else q=Math.max(0,-(K*W+H)),F=q>0?W:Math.min(Math.max(-W,-Y),W),G=-q*q+F*(F+2*Y)+X;else F=K>0?-W:W,q=Math.max(0,-(K*F+H)),G=-q*q+F*(F+2*Y)+X;if($)$.copy(this.origin).addScaledVector(this.direction,q);if(Z)Z.copy(P6).addScaledVector(U7,F);return G}intersectSphere(J,Q){G9.subVectors(J.center,this.origin);let $=G9.dot(this.direction),Z=G9.dot(G9)-$*$,W=J.radius*J.radius;if(Z>W)return null;let K=Math.sqrt(W-Z),H=$-K,Y=$+K;if(Y<0)return null;if(H<0)return this.at(Y,Q);return this.at(H,Q)}intersectsSphere(J){if(J.radius<0)return!1;return this.distanceSqToPoint(J.center)<=J.radius*J.radius}distanceToPlane(J){let Q=J.normal.dot(this.direction);if(Q===0){if(J.distanceToPoint(this.origin)===0)return 0;return null}let $=-(this.origin.dot(J.normal)+J.constant)/Q;return $>=0?$:null}intersectPlane(J,Q){let $=this.distanceToPlane(J);if($===null)return null;return this.at($,Q)}intersectsPlane(J){let Q=J.distanceToPoint(this.origin);if(Q===0)return!0;if(J.normal.dot(this.direction)*Q<0)return!0;return!1}intersectBox(J,Q){let $,Z,W,K,H,Y,X=1/this.direction.x,U=1/this.direction.y,q=1/this.direction.z,F=this.origin;if(X>=0)$=(J.min.x-F.x)*X,Z=(J.max.x-F.x)*X;else $=(J.max.x-F.x)*X,Z=(J.min.x-F.x)*X;if(U>=0)W=(J.min.y-F.y)*U,K=(J.max.y-F.y)*U;else W=(J.max.y-F.y)*U,K=(J.min.y-F.y)*U;if($>K||W>Z)return null;if(W>$||isNaN($))$=W;if(K<Z||isNaN(Z))Z=K;if(q>=0)H=(J.min.z-F.z)*q,Y=(J.max.z-F.z)*q;else H=(J.max.z-F.z)*q,Y=(J.min.z-F.z)*q;if($>Y||H>Z)return null;if(H>$||$!==$)$=H;if(Y<Z||Z!==Z)Z=Y;if(Z<0)return null;return this.at($>=0?$:Z,Q)}intersectsBox(J){return this.intersectBox(J,G9)!==null}intersectTriangle(J,Q,$,Z,W){T6.subVectors(Q,J),G7.subVectors($,J),S6.crossVectors(T6,G7);let K=this.direction.dot(S6),H;if(K>0){if(Z)return null;H=1}else if(K<0)H=-1,K=-K;else return null;w9.subVectors(this.origin,J);let Y=H*this.direction.dot(G7.crossVectors(w9,G7));if(Y<0)return null;let X=H*this.direction.dot(T6.cross(w9));if(X<0)return null;if(Y+X>K)return null;let U=-H*w9.dot(S6);if(U<0)return null;return this.at(U/K,W)}applyMatrix4(J){return this.origin.applyMatrix4(J),this.direction.transformDirection(J),this}equals(J){return J.origin.equals(this.origin)&&J.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class aJ extends k9{constructor(J){super();this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new y0(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new q9,this.combine=0,this.reflectivity=1,this.refractionRatio=0.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(J)}copy(J){return super.copy(J),this.color.copy(J.color),this.map=J.map,this.lightMap=J.lightMap,this.lightMapIntensity=J.lightMapIntensity,this.aoMap=J.aoMap,this.aoMapIntensity=J.aoMapIntensity,this.specularMap=J.specularMap,this.alphaMap=J.alphaMap,this.envMap=J.envMap,this.envMapRotation.copy(J.envMapRotation),this.combine=J.combine,this.reflectivity=J.reflectivity,this.refractionRatio=J.refractionRatio,this.wireframe=J.wireframe,this.wireframeLinewidth=J.wireframeLinewidth,this.wireframeLinecap=J.wireframeLinecap,this.wireframeLinejoin=J.wireframeLinejoin,this.fog=J.fog,this}}var p$=new HJ,x9=new l8,N7=new V8,m$=new v,E7=new v,q7=new v,F7=new v,j6=new v,D7=new v,d$=new v,O7=new v;class RJ extends DJ{constructor(J=new BJ,Q=new aJ){super();this.isMesh=!0,this.type="Mesh",this.geometry=J,this.material=Q,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(J,Q){if(super.copy(J,Q),J.morphTargetInfluences!==void 0)this.morphTargetInfluences=J.morphTargetInfluences.slice();if(J.morphTargetDictionary!==void 0)this.morphTargetDictionary=Object.assign({},J.morphTargetDictionary);return this.material=Array.isArray(J.material)?J.material.slice():J.material,this.geometry=J.geometry,this}updateMorphTargets(){let Q=this.geometry.morphAttributes,$=Object.keys(Q);if($.length>0){let Z=Q[$[0]];if(Z!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let W=0,K=Z.length;W<K;W++){let H=Z[W].name||String(W);this.morphTargetInfluences.push(0),this.morphTargetDictionary[H]=W}}}}getVertexPosition(J,Q){let $=this.geometry,Z=$.attributes.position,W=$.morphAttributes.position,K=$.morphTargetsRelative;Q.fromBufferAttribute(Z,J);let H=this.morphTargetInfluences;if(W&&H){D7.set(0,0,0);for(let Y=0,X=W.length;Y<X;Y++){let U=H[Y],q=W[Y];if(U===0)continue;if(j6.fromBufferAttribute(q,J),K)D7.addScaledVector(j6,U);else D7.addScaledVector(j6.sub(Q),U)}Q.add(D7)}return Q}raycast(J,Q){let $=this.geometry,Z=this.material,W=this.matrixWorld;if(Z===void 0)return;if($.boundingSphere===null)$.computeBoundingSphere();if(N7.copy($.boundingSphere),N7.applyMatrix4(W),x9.copy(J.ray).recast(J.near),N7.containsPoint(x9.origin)===!1){if(x9.intersectSphere(N7,m$)===null)return;if(x9.origin.distanceToSquared(m$)>(J.far-J.near)**2)return}if(p$.copy(W).invert(),x9.copy(J.ray).applyMatrix4(p$),$.boundingBox!==null){if(x9.intersectsBox($.boundingBox)===!1)return}this._computeIntersections(J,Q,x9)}_computeIntersections(J,Q,$){let Z,W=this.geometry,K=this.material,H=W.index,Y=W.attributes.position,X=W.attributes.uv,U=W.attributes.uv1,q=W.attributes.normal,F=W.groups,G=W.drawRange;if(H!==null)if(Array.isArray(K))for(let D=0,M=F.length;D<M;D++){let z=F[D],E=K[z.materialIndex],N=Math.max(z.start,G.start),C=Math.min(H.count,Math.min(z.start+z.count,G.start+G.count));for(let _=N,L=C;_<L;_+=3){let A=H.getX(_),I=H.getX(_+1),P=H.getX(_+2);if(Z=R7(this,E,J,$,X,U,q,A,I,P),Z)Z.faceIndex=Math.floor(_/3),Z.face.materialIndex=z.materialIndex,Q.push(Z)}}else{let D=Math.max(0,G.start),M=Math.min(H.count,G.start+G.count);for(let z=D,E=M;z<E;z+=3){let N=H.getX(z),C=H.getX(z+1),_=H.getX(z+2);if(Z=R7(this,K,J,$,X,U,q,N,C,_),Z)Z.faceIndex=Math.floor(z/3),Q.push(Z)}}else if(Y!==void 0)if(Array.isArray(K))for(let D=0,M=F.length;D<M;D++){let z=F[D],E=K[z.materialIndex],N=Math.max(z.start,G.start),C=Math.min(Y.count,Math.min(z.start+z.count,G.start+G.count));for(let _=N,L=C;_<L;_+=3){let A=_,I=_+1,P=_+2;if(Z=R7(this,E,J,$,X,U,q,A,I,P),Z)Z.faceIndex=Math.floor(_/3),Z.face.materialIndex=z.materialIndex,Q.push(Z)}}else{let D=Math.max(0,G.start),M=Math.min(Y.count,G.start+G.count);for(let z=D,E=M;z<E;z+=3){let N=z,C=z+1,_=z+2;if(Z=R7(this,K,J,$,X,U,q,N,C,_),Z)Z.faceIndex=Math.floor(z/3),Q.push(Z)}}}}function BK(J,Q,$,Z,W,K,H,Y){let X;if(Q.side===1)X=Z.intersectTriangle(H,K,W,!0,Y);else X=Z.intersectTriangle(W,K,H,Q.side===0,Y);if(X===null)return null;O7.copy(Y),O7.applyMatrix4(J.matrixWorld);let U=$.ray.origin.distanceTo(O7);if(U<$.near||U>$.far)return null;return{distance:U,point:O7.clone(),object:J}}function R7(J,Q,$,Z,W,K,H,Y,X,U){J.getVertexPosition(Y,E7),J.getVertexPosition(X,q7),J.getVertexPosition(U,F7);let q=BK(J,Q,$,Z,E7,q7,F7,d$);if(q){let F=new v;if(gJ.getBarycoord(d$,E7,q7,F7,F),W)q.uv=gJ.getInterpolatedAttribute(W,Y,X,U,F,new p0);if(K)q.uv1=gJ.getInterpolatedAttribute(K,Y,X,U,F,new p0);if(H){if(q.normal=gJ.getInterpolatedAttribute(H,Y,X,U,F,new v),q.normal.dot(Z.direction)>0)q.normal.multiplyScalar(-1)}let G={a:Y,b:X,c:U,normal:new v,materialIndex:0};gJ.getNormal(E7,q7,F7,G.normal),q.face=G,q.barycoord=F}return q}class gQ extends wJ{constructor(J=null,Q=1,$=1,Z,W,K,H,Y,X=1003,U=1003,q,F){super(null,K,H,Y,X,U,Z,W,q,F);this.isDataTexture=!0,this.image={data:J,width:Q,height:$},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}var y6=new v,zK=new v,IK=new j0;class sJ{constructor(J=new v(1,0,0),Q=0){this.isPlane=!0,this.normal=J,this.constant=Q}set(J,Q){return this.normal.copy(J),this.constant=Q,this}setComponents(J,Q,$,Z){return this.normal.set(J,Q,$),this.constant=Z,this}setFromNormalAndCoplanarPoint(J,Q){return this.normal.copy(J),this.constant=-Q.dot(this.normal),this}setFromCoplanarPoints(J,Q,$){let Z=y6.subVectors($,Q).cross(zK.subVectors(J,Q)).normalize();return this.setFromNormalAndCoplanarPoint(Z,J),this}copy(J){return this.normal.copy(J.normal),this.constant=J.constant,this}normalize(){let J=1/this.normal.length();return this.normal.multiplyScalar(J),this.constant*=J,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(J){return this.normal.dot(J)+this.constant}distanceToSphere(J){return this.distanceToPoint(J.center)-J.radius}projectPoint(J,Q){return Q.copy(J).addScaledVector(this.normal,-this.distanceToPoint(J))}intersectLine(J,Q,$=!0){let Z=J.delta(y6),W=this.normal.dot(Z);if(W===0){if(this.distanceToPoint(J.start)===0)return Q.copy(J.start);return null}let K=-(J.start.dot(this.normal)+this.constant)/W;if($===!0&&(K<0||K>1))return null;return Q.copy(J.start).addScaledVector(Z,K)}intersectsLine(J){let Q=this.distanceToPoint(J.start),$=this.distanceToPoint(J.end);return Q<0&&$>0||$<0&&Q>0}intersectsBox(J){return J.intersectsPlane(this)}intersectsSphere(J){return J.intersectsPlane(this)}coplanarPoint(J){return J.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(J,Q){let $=Q||IK.getNormalMatrix(J),Z=this.coplanarPoint(y6).applyMatrix4(J),W=this.normal.applyMatrix3($).normalize();return this.constant=-Z.dot(W),this}translate(J){return this.constant-=J.dot(this.normal),this}equals(J){return J.normal.equals(this.normal)&&J.constant===this.constant}clone(){return new this.constructor().copy(this)}}var g9=new V8,AK=new p0(0.5,0.5),k7=new v;class u8{constructor(J=new sJ,Q=new sJ,$=new sJ,Z=new sJ,W=new sJ,K=new sJ){this.planes=[J,Q,$,Z,W,K]}set(J,Q,$,Z,W,K){let H=this.planes;return H[0].copy(J),H[1].copy(Q),H[2].copy($),H[3].copy(Z),H[4].copy(W),H[5].copy(K),this}copy(J){let Q=this.planes;for(let $=0;$<6;$++)Q[$].copy(J.planes[$]);return this}setFromProjectionMatrix(J,Q=2000,$=!1){let Z=this.planes,W=J.elements,K=W[0],H=W[1],Y=W[2],X=W[3],U=W[4],q=W[5],F=W[6],G=W[7],D=W[8],M=W[9],z=W[10],E=W[11],N=W[12],C=W[13],_=W[14],L=W[15];if(Z[0].setComponents(X-K,G-U,E-D,L-N).normalize(),Z[1].setComponents(X+K,G+U,E+D,L+N).normalize(),Z[2].setComponents(X+H,G+q,E+M,L+C).normalize(),Z[3].setComponents(X-H,G-q,E-M,L-C).normalize(),$)Z[4].setComponents(Y,F,z,_).normalize(),Z[5].setComponents(X-Y,G-F,E-z,L-_).normalize();else if(Z[4].setComponents(X-Y,G-F,E-z,L-_).normalize(),Q===2000)Z[5].setComponents(X+Y,G+F,E+z,L+_).normalize();else if(Q===2001)Z[5].setComponents(Y,F,z,_).normalize();else throw Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+Q);return this}intersectsObject(J){if(J.boundingSphere!==void 0){if(J.boundingSphere===null)J.computeBoundingSphere();g9.copy(J.boundingSphere).applyMatrix4(J.matrixWorld)}else{let Q=J.geometry;if(Q.boundingSphere===null)Q.computeBoundingSphere();g9.copy(Q.boundingSphere).applyMatrix4(J.matrixWorld)}return this.intersectsSphere(g9)}intersectsSprite(J){g9.center.set(0,0,0);let Q=AK.distanceTo(J.center);return g9.radius=0.7071067811865476+Q,g9.applyMatrix4(J.matrixWorld),this.intersectsSphere(g9)}intersectsSphere(J){let Q=this.planes,$=J.center,Z=-J.radius;for(let W=0;W<6;W++)if(Q[W].distanceToPoint($)<Z)return!1;return!0}intersectsBox(J){let Q=this.planes;for(let $=0;$<6;$++){let Z=Q[$];if(k7.x=Z.normal.x>0?J.max.x:J.min.x,k7.y=Z.normal.y>0?J.max.y:J.min.y,k7.z=Z.normal.z>0?J.max.z:J.min.z,Z.distanceToPoint(k7)<0)return!1}return!0}containsPoint(J){let Q=this.planes;for(let $=0;$<6;$++)if(Q[$].distanceToPoint(J)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class c8 extends k9{constructor(J){super();this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new y0(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(J)}copy(J){return super.copy(J),this.color.copy(J.color),this.map=J.map,this.linewidth=J.linewidth,this.linecap=J.linecap,this.linejoin=J.linejoin,this.fog=J.fog,this}}var I7=new v,A7=new v,l$=new HJ,P8=new l8,M7=new V8,v6=new v,u$=new v;class l7 extends DJ{constructor(J=new BJ,Q=new c8){super();this.isLine=!0,this.type="Line",this.geometry=J,this.material=Q,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(J,Q){return super.copy(J,Q),this.material=Array.isArray(J.material)?J.material.slice():J.material,this.geometry=J.geometry,this}computeLineDistances(){let J=this.geometry;if(J.index===null){let Q=J.attributes.position,$=[0];for(let Z=1,W=Q.count;Z<W;Z++)I7.fromBufferAttribute(Q,Z-1),A7.fromBufferAttribute(Q,Z),$[Z]=$[Z-1],$[Z]+=I7.distanceTo(A7);J.setAttribute("lineDistance",new UJ($,1))}else _0("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(J,Q){let $=this.geometry,Z=this.matrixWorld,W=J.params.Line.threshold,K=$.drawRange;if($.boundingSphere===null)$.computeBoundingSphere();if(M7.copy($.boundingSphere),M7.applyMatrix4(Z),M7.radius+=W,J.ray.intersectsSphere(M7)===!1)return;l$.copy(Z).invert(),P8.copy(J.ray).applyMatrix4(l$);let H=W/((this.scale.x+this.scale.y+this.scale.z)/3),Y=H*H,X=this.isLineSegments?2:1,U=$.index,F=$.attributes.position;if(U!==null){let G=Math.max(0,K.start),D=Math.min(U.count,K.start+K.count);for(let M=G,z=D-1;M<z;M+=X){let E=U.getX(M),N=U.getX(M+1),C=L7(this,J,P8,Y,E,N,M);if(C)Q.push(C)}if(this.isLineLoop){let M=U.getX(D-1),z=U.getX(G),E=L7(this,J,P8,Y,M,z,D-1);if(E)Q.push(E)}}else{let G=Math.max(0,K.start),D=Math.min(F.count,K.start+K.count);for(let M=G,z=D-1;M<z;M+=X){let E=L7(this,J,P8,Y,M,M+1,M);if(E)Q.push(E)}if(this.isLineLoop){let M=L7(this,J,P8,Y,D-1,G,D-1);if(M)Q.push(M)}}}updateMorphTargets(){let Q=this.geometry.morphAttributes,$=Object.keys(Q);if($.length>0){let Z=Q[$[0]];if(Z!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let W=0,K=Z.length;W<K;W++){let H=Z[W].name||String(W);this.morphTargetInfluences.push(0),this.morphTargetDictionary[H]=W}}}}}function L7(J,Q,$,Z,W,K,H){let Y=J.geometry.attributes.position;if(I7.fromBufferAttribute(Y,W),A7.fromBufferAttribute(Y,K),$.distanceSqToSegment(I7,A7,v6,u$)>Z)return;v6.applyMatrix4(J.matrixWorld);let U=Q.ray.origin.distanceTo(v6);if(U<Q.near||U>Q.far)return;return{distance:U,point:u$.clone().applyMatrix4(J.matrixWorld),index:H,face:null,faceIndex:null,barycoord:null,object:J}}class u7 extends wJ{constructor(J=[],Q=301,$,Z,W,K,H,Y,X,U){super(J,Q,$,Z,W,K,H,Y,X,U);this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(J){this.image=J}}class S9 extends wJ{constructor(J,Q,$=1014,Z,W,K,H=1003,Y=1003,X,U=1026,q=1){if(U!==1026&&U!==1027)throw Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let F={width:J,height:Q,depth:q};super(F,Z,W,K,H,Y,U,$,X);this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(J){return super.copy(J),this.source=new g8(Object.assign({},J.image)),this.compareFunction=J.compareFunction,this}toJSON(J){let Q=super.toJSON(J);if(this.compareFunction!==null)Q.compareFunction=this.compareFunction;return Q}}class pQ extends S9{constructor(J,Q=1014,$=301,Z,W,K=1003,H=1003,Y,X=1026){let U={width:J,height:J,depth:1},q=[U,U,U,U,U,U];super(J,J,Q,$,Z,W,K,H,Y,X);this.image=q,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(J){this.image=J}}class c7 extends wJ{constructor(J=null){super();this.sourceTexture=J,this.isExternalTexture=!0}copy(J){return super.copy(J),this.sourceTexture=J.sourceTexture,this}}class j9 extends BJ{constructor(J=1,Q=1,$=1,Z=1,W=1,K=1){super();this.type="BoxGeometry",this.parameters={width:J,height:Q,depth:$,widthSegments:Z,heightSegments:W,depthSegments:K};let H=this;Z=Math.floor(Z),W=Math.floor(W),K=Math.floor(K);let Y=[],X=[],U=[],q=[],F=0,G=0;D("z","y","x",-1,-1,$,Q,J,K,W,0),D("z","y","x",1,-1,$,Q,-J,K,W,1),D("x","z","y",1,1,J,$,Q,Z,K,2),D("x","z","y",1,-1,J,$,-Q,Z,K,3),D("x","y","z",1,-1,J,Q,$,Z,W,4),D("x","y","z",-1,-1,J,Q,-$,Z,W,5),this.setIndex(Y),this.setAttribute("position",new UJ(X,3)),this.setAttribute("normal",new UJ(U,3)),this.setAttribute("uv",new UJ(q,2));function D(M,z,E,N,C,_,L,A,I,P,O){let V=_/I,p=L/P,w=_/2,h=L/2,s=A/2,g=I+1,u=P+1,c=0,f=0,t=new v;for(let Q0=0;Q0<u;Q0++){let H0=Q0*p-h;for(let L0=0;L0<g;L0++){let M0=L0*V-w;t[M]=M0*N,t[z]=H0*C,t[E]=s,X.push(t.x,t.y,t.z),t[M]=0,t[z]=0,t[E]=A>0?1:-1,U.push(t.x,t.y,t.z),q.push(L0/I),q.push(1-Q0/P),c+=1}}for(let Q0=0;Q0<P;Q0++)for(let H0=0;H0<I;H0++){let L0=F+H0+g*Q0,M0=F+H0+g*(Q0+1),YJ=F+(H0+1)+g*(Q0+1),o0=F+(H0+1)+g*Q0;Y.push(L0,M0,o0),Y.push(M0,YJ,o0),f+=6}H.addGroup(G,f,O),G+=f,F+=c}}copy(J){return super.copy(J),this.parameters=Object.assign({},J.parameters),this}static fromJSON(J){return new j9(J.width,J.height,J.depth,J.widthSegments,J.heightSegments,J.depthSegments)}}class n8 extends BJ{constructor(J=1,Q=1,$=4,Z=8,W=1){super();this.type="CapsuleGeometry",this.parameters={radius:J,height:Q,capSegments:$,radialSegments:Z,heightSegments:W},Q=Math.max(0,Q),$=Math.max(1,Math.floor($)),Z=Math.max(3,Math.floor(Z)),W=Math.max(1,Math.floor(W));let K=[],H=[],Y=[],X=[],U=Q/2,q=Math.PI/2*J,F=Q,G=2*q+F,D=$*2+W,M=Z+1,z=new v,E=new v;for(let N=0;N<=D;N++){let C=0,_=0,L=0,A=0;if(N<=$){let O=N/$,V=O*Math.PI/2;_=-U-J*Math.cos(V),L=J*Math.sin(V),A=-J*Math.cos(V),C=O*q}else if(N<=$+W){let O=(N-$)/W;_=-U+O*Q,L=J,A=0,C=q+O*F}else{let O=(N-$-W)/$,V=O*Math.PI/2;_=U+J*Math.sin(V),L=J*Math.cos(V),A=J*Math.sin(V),C=q+F+O*q}let I=Math.max(0,Math.min(1,C/G)),P=0;if(N===0)P=0.5/Z;else if(N===D)P=-0.5/Z;for(let O=0;O<=Z;O++){let V=O/Z,p=V*Math.PI*2,w=Math.sin(p),h=Math.cos(p);E.x=-L*h,E.y=_,E.z=L*w,H.push(E.x,E.y,E.z),z.set(-L*h,A,L*w),z.normalize(),Y.push(z.x,z.y,z.z),X.push(V+P,I)}if(N>0){let O=(N-1)*M;for(let V=0;V<Z;V++){let p=O+V,w=O+V+1,h=N*M+V,s=N*M+V+1;K.push(p,w,h),K.push(w,s,h)}}}this.setIndex(K),this.setAttribute("position",new UJ(H,3)),this.setAttribute("normal",new UJ(Y,3)),this.setAttribute("uv",new UJ(X,2))}copy(J){return super.copy(J),this.parameters=Object.assign({},J.parameters),this}static fromJSON(J){return new n8(J.radius,J.height,J.capSegments,J.radialSegments,J.heightSegments)}}class s8 extends BJ{constructor(J=1,Q=1,$=1,Z=32,W=1,K=!1,H=0,Y=Math.PI*2){super();this.type="CylinderGeometry",this.parameters={radiusTop:J,radiusBottom:Q,height:$,radialSegments:Z,heightSegments:W,openEnded:K,thetaStart:H,thetaLength:Y};let X=this;Z=Math.floor(Z),W=Math.floor(W);let U=[],q=[],F=[],G=[],D=0,M=[],z=$/2,E=0;if(N(),K===!1){if(J>0)C(!0);if(Q>0)C(!1)}this.setIndex(U),this.setAttribute("position",new UJ(q,3)),this.setAttribute("normal",new UJ(F,3)),this.setAttribute("uv",new UJ(G,2));function N(){let _=new v,L=new v,A=0,I=(Q-J)/$;for(let P=0;P<=W;P++){let O=[],V=P/W,p=V*(Q-J)+J;for(let w=0;w<=Z;w++){let h=w/Z,s=h*Y+H,g=Math.sin(s),u=Math.cos(s);L.x=p*g,L.y=-V*$+z,L.z=p*u,q.push(L.x,L.y,L.z),_.set(g,I,u).normalize(),F.push(_.x,_.y,_.z),G.push(h,1-V),O.push(D++)}M.push(O)}for(let P=0;P<Z;P++)for(let O=0;O<W;O++){let V=M[O][P],p=M[O+1][P],w=M[O+1][P+1],h=M[O][P+1];if(J>0||O!==0)U.push(V,p,h),A+=3;if(Q>0||O!==W-1)U.push(p,w,h),A+=3}X.addGroup(E,A,0),E+=A}function C(_){let L=D,A=new p0,I=new v,P=0,O=_===!0?J:Q,V=_===!0?1:-1;for(let w=1;w<=Z;w++)q.push(0,z*V,0),F.push(0,V,0),G.push(0.5,0.5),D++;let p=D;for(let w=0;w<=Z;w++){let s=w/Z*Y+H,g=Math.cos(s),u=Math.sin(s);I.x=O*u,I.y=z*V,I.z=O*g,q.push(I.x,I.y,I.z),F.push(0,V,0),A.x=g*0.5+0.5,A.y=u*0.5*V+0.5,G.push(A.x,A.y),D++}for(let w=0;w<Z;w++){let h=L+w,s=p+w;if(_===!0)U.push(s,s+1,h);else U.push(s+1,s,h);P+=3}X.addGroup(E,P,_===!0?1:2),E+=P}}copy(J){return super.copy(J),this.parameters=Object.assign({},J.parameters),this}static fromJSON(J){return new s8(J.radiusTop,J.radiusBottom,J.height,J.radialSegments,J.heightSegments,J.openEnded,J.thetaStart,J.thetaLength)}}class y9 extends BJ{constructor(J=1,Q=1,$=1,Z=1){super();this.type="PlaneGeometry",this.parameters={width:J,height:Q,widthSegments:$,heightSegments:Z};let W=J/2,K=Q/2,H=Math.floor($),Y=Math.floor(Z),X=H+1,U=Y+1,q=J/H,F=Q/Y,G=[],D=[],M=[],z=[];for(let E=0;E<U;E++){let N=E*F-K;for(let C=0;C<X;C++){let _=C*q-W;D.push(_,-N,0),M.push(0,0,1),z.push(C/H),z.push(1-E/Y)}}for(let E=0;E<Y;E++)for(let N=0;N<H;N++){let C=N+X*E,_=N+X*(E+1),L=N+1+X*(E+1),A=N+1+X*E;G.push(C,_,A),G.push(_,L,A)}this.setIndex(G),this.setAttribute("position",new UJ(D,3)),this.setAttribute("normal",new UJ(M,3)),this.setAttribute("uv",new UJ(z,2))}copy(J){return super.copy(J),this.parameters=Object.assign({},J.parameters),this}static fromJSON(J){return new y9(J.width,J.height,J.widthSegments,J.heightSegments)}}class $9 extends BJ{constructor(J=1,Q=32,$=16,Z=0,W=Math.PI*2,K=0,H=Math.PI){super();this.type="SphereGeometry",this.parameters={radius:J,widthSegments:Q,heightSegments:$,phiStart:Z,phiLength:W,thetaStart:K,thetaLength:H},Q=Math.max(3,Math.floor(Q)),$=Math.max(2,Math.floor($));let Y=Math.min(K+H,Math.PI),X=0,U=[],q=new v,F=new v,G=[],D=[],M=[],z=[];for(let E=0;E<=$;E++){let N=[],C=E/$,_=K+C*H,L=J*Math.cos(_),A=Math.sqrt(J*J-L*L),I=0;if(E===0&&K===0)I=0.5/Q;else if(E===$&&Y===Math.PI)I=-0.5/Q;for(let P=0;P<=Q;P++){let O=P/Q,V=Z+O*W;q.x=-A*Math.cos(V),q.y=L,q.z=A*Math.sin(V),D.push(q.x,q.y,q.z),F.copy(q).normalize(),M.push(F.x,F.y,F.z),z.push(O+I,1-C),N.push(X++)}U.push(N)}for(let E=0;E<$;E++)for(let N=0;N<Q;N++){let C=U[E][N+1],_=U[E][N],L=U[E+1][N],A=U[E+1][N+1];if(E!==0||K>0)G.push(C,_,A);if(E!==$-1||Y<Math.PI)G.push(_,L,A)}this.setIndex(G),this.setAttribute("position",new UJ(D,3)),this.setAttribute("normal",new UJ(M,3)),this.setAttribute("uv",new UJ(z,2))}copy(J){return super.copy(J),this.parameters=Object.assign({},J.parameters),this}static fromJSON(J){return new $9(J.radius,J.widthSegments,J.heightSegments,J.phiStart,J.phiLength,J.thetaStart,J.thetaLength)}}class i8 extends BJ{constructor(J=1,Q=0.4,$=12,Z=48,W=Math.PI*2,K=0,H=Math.PI*2){super();this.type="TorusGeometry",this.parameters={radius:J,tube:Q,radialSegments:$,tubularSegments:Z,arc:W,thetaStart:K,thetaLength:H},$=Math.floor($),Z=Math.floor(Z);let Y=[],X=[],U=[],q=[],F=new v,G=new v,D=new v;for(let M=0;M<=$;M++){let z=K+M/$*H;for(let E=0;E<=Z;E++){let N=E/Z*W;G.x=(J+Q*Math.cos(z))*Math.cos(N),G.y=(J+Q*Math.cos(z))*Math.sin(N),G.z=Q*Math.sin(z),X.push(G.x,G.y,G.z),F.x=J*Math.cos(N),F.y=J*Math.sin(N),D.subVectors(G,F).normalize(),U.push(D.x,D.y,D.z),q.push(E/Z),q.push(M/$)}}for(let M=1;M<=$;M++)for(let z=1;z<=Z;z++){let E=(Z+1)*M+z-1,N=(Z+1)*(M-1)+z-1,C=(Z+1)*(M-1)+z,_=(Z+1)*M+z;Y.push(E,N,_),Y.push(N,C,_)}this.setIndex(Y),this.setAttribute("position",new UJ(X,3)),this.setAttribute("normal",new UJ(U,3)),this.setAttribute("uv",new UJ(q,2))}copy(J){return super.copy(J),this.parameters=Object.assign({},J.parameters),this}static fromJSON(J){return new i8(J.radius,J.tube,J.radialSegments,J.tubularSegments,J.arc)}}class n7 extends k9{constructor(J){super();this.isShadowMaterial=!0,this.type="ShadowMaterial",this.color=new y0(0),this.transparent=!0,this.fog=!0,this.setValues(J)}copy(J){return super.copy(J),this.color.copy(J.color),this.fog=J.fog,this}}function i9(J){let Q={};for(let $ in J){Q[$]={};for(let Z in J[$]){let W=J[$][Z];if(c$(W))if(W.isRenderTargetTexture)_0("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),Q[$][Z]=null;else Q[$][Z]=W.clone();else if(Array.isArray(W))if(c$(W[0])){let K=[];for(let H=0,Y=W.length;H<Y;H++)K[H]=W[H].clone();Q[$][Z]=K}else Q[$][Z]=W.slice();else Q[$][Z]=W}}return Q}function CJ(J){let Q={};for(let $=0;$<J.length;$++){let Z=i9(J[$]);for(let W in Z)Q[W]=Z[W]}return Q}function c$(J){return J&&(J.isColor||J.isMatrix3||J.isMatrix4||J.isVector2||J.isVector3||J.isVector4||J.isTexture||J.isQuaternion)}function wK(J){let Q=[];for(let $=0;$<J.length;$++)Q.push(J[$].clone());return Q}function mQ(J){let Q=J.getRenderTarget();if(Q===null)return J.outputColorSpace;if(Q.isXRRenderTarget===!0)return Q.texture.colorSpace;return l0.workingColorSpace}var JW={clone:i9,merge:CJ},_K=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,CK=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class dJ extends k9{constructor(J){super();if(this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=_K,this.fragmentShader=CK,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,J!==void 0)this.setValues(J)}copy(J){return super.copy(J),this.fragmentShader=J.fragmentShader,this.vertexShader=J.vertexShader,this.uniforms=i9(J.uniforms),this.uniformsGroups=wK(J.uniformsGroups),this.defines=Object.assign({},J.defines),this.wireframe=J.wireframe,this.wireframeLinewidth=J.wireframeLinewidth,this.fog=J.fog,this.lights=J.lights,this.clipping=J.clipping,this.extensions=Object.assign({},J.extensions),this.glslVersion=J.glslVersion,this.defaultAttributeValues=Object.assign({},J.defaultAttributeValues),this.index0AttributeName=J.index0AttributeName,this.uniformsNeedUpdate=J.uniformsNeedUpdate,this}toJSON(J){let Q=super.toJSON(J);Q.glslVersion=this.glslVersion,Q.uniforms={};for(let Z in this.uniforms){let K=this.uniforms[Z].value;if(K&&K.isTexture)Q.uniforms[Z]={type:"t",value:K.toJSON(J).uuid};else if(K&&K.isColor)Q.uniforms[Z]={type:"c",value:K.getHex()};else if(K&&K.isVector2)Q.uniforms[Z]={type:"v2",value:K.toArray()};else if(K&&K.isVector3)Q.uniforms[Z]={type:"v3",value:K.toArray()};else if(K&&K.isVector4)Q.uniforms[Z]={type:"v4",value:K.toArray()};else if(K&&K.isMatrix3)Q.uniforms[Z]={type:"m3",value:K.toArray()};else if(K&&K.isMatrix4)Q.uniforms[Z]={type:"m4",value:K.toArray()};else Q.uniforms[Z]={value:K}}if(Object.keys(this.defines).length>0)Q.defines=this.defines;Q.vertexShader=this.vertexShader,Q.fragmentShader=this.fragmentShader,Q.lights=this.lights,Q.clipping=this.clipping;let $={};for(let Z in this.extensions)if(this.extensions[Z]===!0)$[Z]=!0;if(Object.keys($).length>0)Q.extensions=$;return Q}fromJSON(J,Q){if(super.fromJSON(J,Q),J.uniforms!==void 0)for(let $ in J.uniforms){let Z=J.uniforms[$];switch(this.uniforms[$]={},Z.type){case"t":this.uniforms[$].value=Q[Z.value]||null;break;case"c":this.uniforms[$].value=new y0().setHex(Z.value);break;case"v2":this.uniforms[$].value=new p0().fromArray(Z.value);break;case"v3":this.uniforms[$].value=new v().fromArray(Z.value);break;case"v4":this.uniforms[$].value=new GJ().fromArray(Z.value);break;case"m3":this.uniforms[$].value=new j0().fromArray(Z.value);break;case"m4":this.uniforms[$].value=new HJ().fromArray(Z.value);break;default:this.uniforms[$].value=Z.value}}if(J.defines!==void 0)this.defines=J.defines;if(J.vertexShader!==void 0)this.vertexShader=J.vertexShader;if(J.fragmentShader!==void 0)this.fragmentShader=J.fragmentShader;if(J.glslVersion!==void 0)this.glslVersion=J.glslVersion;if(J.extensions!==void 0)for(let $ in J.extensions)this.extensions[$]=J.extensions[$];if(J.lights!==void 0)this.lights=J.lights;if(J.clipping!==void 0)this.clipping=J.clipping;return this}}class dQ extends dJ{constructor(J){super(J);this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class s7 extends k9{constructor(J){super();this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new y0(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new y0(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new p0(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new q9,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(J)}copy(J){return super.copy(J),this.defines={STANDARD:""},this.color.copy(J.color),this.roughness=J.roughness,this.metalness=J.metalness,this.map=J.map,this.lightMap=J.lightMap,this.lightMapIntensity=J.lightMapIntensity,this.aoMap=J.aoMap,this.aoMapIntensity=J.aoMapIntensity,this.emissive.copy(J.emissive),this.emissiveMap=J.emissiveMap,this.emissiveIntensity=J.emissiveIntensity,this.bumpMap=J.bumpMap,this.bumpScale=J.bumpScale,this.normalMap=J.normalMap,this.normalMapType=J.normalMapType,this.normalScale.copy(J.normalScale),this.displacementMap=J.displacementMap,this.displacementScale=J.displacementScale,this.displacementBias=J.displacementBias,this.roughnessMap=J.roughnessMap,this.metalnessMap=J.metalnessMap,this.alphaMap=J.alphaMap,this.envMap=J.envMap,this.envMapRotation.copy(J.envMapRotation),this.envMapIntensity=J.envMapIntensity,this.wireframe=J.wireframe,this.wireframeLinewidth=J.wireframeLinewidth,this.wireframeLinecap=J.wireframeLinecap,this.wireframeLinejoin=J.wireframeLinejoin,this.flatShading=J.flatShading,this.fog=J.fog,this}}class lQ extends k9{constructor(J){super();this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=3200,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(J)}copy(J){return super.copy(J),this.depthPacking=J.depthPacking,this.map=J.map,this.alphaMap=J.alphaMap,this.displacementMap=J.displacementMap,this.displacementScale=J.displacementScale,this.displacementBias=J.displacementBias,this.wireframe=J.wireframe,this.wireframeLinewidth=J.wireframeLinewidth,this}}class uQ extends k9{constructor(J){super();this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(J)}copy(J){return super.copy(J),this.map=J.map,this.alphaMap=J.alphaMap,this.displacementMap=J.displacementMap,this.displacementScale=J.displacementScale,this.displacementBias=J.displacementBias,this}}function V7(J,Q){if(!J||J.constructor===Q)return J;if(typeof Q.BYTES_PER_ELEMENT==="number")return new Q(J);return Array.prototype.slice.call(J)}class o9{constructor(J,Q,$,Z){this.parameterPositions=J,this._cachedIndex=0,this.resultBuffer=Z!==void 0?Z:new Q.constructor($),this.sampleValues=Q,this.valueSize=$,this.settings=null,this.DefaultSettings_={}}evaluate(J){let Q=this.parameterPositions,$=this._cachedIndex,Z=Q[$],W=Q[$-1];$:{J:{let K;Q:{Z:if(!(J<Z)){for(let H=$+2;;){if(Z===void 0){if(J<W)break Z;return $=Q.length,this._cachedIndex=$,this.copySampleValue_($-1)}if($===H)break;if(W=Z,Z=Q[++$],J<Z)break J}K=Q.length;break Q}if(!(J>=W)){let H=Q[1];if(J<H)$=2,W=H;for(let Y=$-2;;){if(W===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if($===Y)break;if(Z=W,W=Q[--$-1],J>=W)break J}K=$,$=0;break Q}break $}while($<K){let H=$+K>>>1;if(J<Q[H])K=H;else $=H+1}if(Z=Q[$],W=Q[$-1],W===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(Z===void 0)return $=Q.length,this._cachedIndex=$,this.copySampleValue_($-1)}this._cachedIndex=$,this.intervalChanged_($,W,Z)}return this.interpolate_($,W,J,Z)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(J){let Q=this.resultBuffer,$=this.sampleValues,Z=this.valueSize,W=J*Z;for(let K=0;K!==Z;++K)Q[K]=$[W+K];return Q}interpolate_(){throw Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}}class cQ extends o9{constructor(J,Q,$,Z){super(J,Q,$,Z);this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:2400,endingEnd:2400}}intervalChanged_(J,Q,$){let Z=this.parameterPositions,W=J-2,K=J+1,H=Z[W],Y=Z[K];if(H===void 0)switch(this.getSettings_().endingStart){case 2401:W=J,H=2*Q-$;break;case 2402:W=Z.length-2,H=Q+Z[W]-Z[W+1];break;default:W=J,H=$}if(Y===void 0)switch(this.getSettings_().endingEnd){case 2401:K=J,Y=2*$-Q;break;case 2402:K=1,Y=$+Z[1]-Z[0];break;default:K=J-1,Y=Q}let X=($-Q)*0.5,U=this.valueSize;this._weightPrev=X/(Q-H),this._weightNext=X/(Y-$),this._offsetPrev=W*U,this._offsetNext=K*U}interpolate_(J,Q,$,Z){let W=this.resultBuffer,K=this.sampleValues,H=this.valueSize,Y=J*H,X=Y-H,U=this._offsetPrev,q=this._offsetNext,F=this._weightPrev,G=this._weightNext,D=($-Q)/(Z-Q),M=D*D,z=M*D,E=-F*z+2*F*M-F*D,N=(1+F)*z+(-1.5-2*F)*M+(-0.5+F)*D+1,C=(-1-G)*z+(1.5+G)*M+0.5*D,_=G*z-G*M;for(let L=0;L!==H;++L)W[L]=E*K[U+L]+N*K[X+L]+C*K[Y+L]+_*K[q+L];return W}}class nQ extends o9{constructor(J,Q,$,Z){super(J,Q,$,Z)}interpolate_(J,Q,$,Z){let W=this.resultBuffer,K=this.sampleValues,H=this.valueSize,Y=J*H,X=Y-H,U=($-Q)/(Z-Q),q=1-U;for(let F=0;F!==H;++F)W[F]=K[X+F]*q+K[Y+F]*U;return W}}class sQ extends o9{constructor(J,Q,$,Z){super(J,Q,$,Z)}interpolate_(J){return this.copySampleValue_(J-1)}}class iQ extends o9{interpolate_(J,Q,$,Z){let W=this.resultBuffer,K=this.sampleValues,H=this.valueSize,Y=J*H,X=Y-H,U=this.inTangents,q=this.outTangents;if(!U||!q){let D=($-Q)/(Z-Q),M=1-D;for(let z=0;z!==H;++z)W[z]=K[X+z]*M+K[Y+z]*D;return W}let F=H*2,G=J-1;for(let D=0;D!==H;++D){let M=K[X+D],z=K[Y+D],E=G*F+D*2,N=q[E],C=q[E+1],_=J*F+D*2,L=U[_],A=U[_+1],I=($-Q)/(Z-Q),P,O,V,p,w;for(let h=0;h<8;h++){P=I*I,O=P*I,V=1-I,p=V*V,w=p*V;let g=w*Q+3*p*I*N+3*V*P*L+O*Z-$;if(Math.abs(g)<0.0000000001)break;let u=3*p*(N-Q)+6*V*I*(L-N)+3*P*(Z-L);if(Math.abs(u)<0.0000000001)break;I=I-g/u,I=Math.max(0,Math.min(1,I))}W[D]=w*M+3*p*I*C+3*V*P*A+O*z}return W}}class lJ{constructor(J,Q,$,Z){if(J===void 0)throw Error("THREE.KeyframeTrack: track name is undefined");if(Q===void 0||Q.length===0)throw Error("THREE.KeyframeTrack: no keyframes in track named "+J);this.name=J,this.times=V7(Q,this.TimeBufferType),this.values=V7($,this.ValueBufferType),this.setInterpolation(Z||this.DefaultInterpolation)}static toJSON(J){let Q=J.constructor,$;if(Q.toJSON!==this.toJSON)$=Q.toJSON(J);else{$={name:J.name,times:V7(J.times,Array),values:V7(J.values,Array)};let Z=J.getInterpolation();if(Z!==J.DefaultInterpolation)$.interpolation=Z}return $.type=J.ValueTypeName,$}InterpolantFactoryMethodDiscrete(J){return new sQ(this.times,this.values,this.getValueSize(),J)}InterpolantFactoryMethodLinear(J){return new nQ(this.times,this.values,this.getValueSize(),J)}InterpolantFactoryMethodSmooth(J){return new cQ(this.times,this.values,this.getValueSize(),J)}InterpolantFactoryMethodBezier(J){let Q=new iQ(this.times,this.values,this.getValueSize(),J);if(this.settings)Q.inTangents=this.settings.inTangents,Q.outTangents=this.settings.outTangents;return Q}setInterpolation(J){let Q;switch(J){case 2300:Q=this.InterpolantFactoryMethodDiscrete;break;case 2301:Q=this.InterpolantFactoryMethodLinear;break;case 2302:Q=this.InterpolantFactoryMethodSmooth;break;case 2303:Q=this.InterpolantFactoryMethodBezier;break}if(Q===void 0){let $="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(J!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw Error($);return _0("KeyframeTrack:",$),this}return this.createInterpolant=Q,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return 2300;case this.InterpolantFactoryMethodLinear:return 2301;case this.InterpolantFactoryMethodSmooth:return 2302;case this.InterpolantFactoryMethodBezier:return 2303}}getValueSize(){return this.values.length/this.times.length}shift(J){if(J!==0){let Q=this.times;for(let $=0,Z=Q.length;$!==Z;++$)Q[$]+=J}return this}scale(J){if(J!==1){let Q=this.times;for(let $=0,Z=Q.length;$!==Z;++$)Q[$]*=J}return this}trim(J,Q){let $=this.times,Z=$.length,W=0,K=Z-1;while(W!==Z&&$[W]<J)++W;while(K!==-1&&$[K]>Q)--K;if(++K,W!==0||K!==Z){if(W>=K)K=Math.max(K,1),W=K-1;let H=this.getValueSize();this.times=$.slice(W,K),this.values=this.values.slice(W*H,K*H)}return this}validate(){let J=!0,Q=this.getValueSize();if(Q-Math.floor(Q)!==0)P0("KeyframeTrack: Invalid value size in track.",this),J=!1;let $=this.times,Z=this.values,W=$.length;if(W===0)P0("KeyframeTrack: Track is empty.",this),J=!1;let K=null;for(let H=0;H!==W;H++){let Y=$[H];if(typeof Y==="number"&&isNaN(Y)){P0("KeyframeTrack: Time is not a valid number.",this,H,Y),J=!1;break}if(K!==null&&K>Y){P0("KeyframeTrack: Out of order keys.",this,H,Y,K),J=!1;break}K=Y}if(Z!==void 0){if(HK(Z))for(let H=0,Y=Z.length;H!==Y;++H){let X=Z[H];if(isNaN(X)){P0("KeyframeTrack: Value is not a valid number.",this,H,X),J=!1;break}}}return J}optimize(){let J=this.times.slice(),Q=this.values.slice(),$=this.getValueSize(),Z=this.getInterpolation()===2302,W=J.length-1,K=1;for(let H=1;H<W;++H){let Y=!1,X=J[H],U=J[H+1];if(X!==U&&(H!==1||X!==J[0]))if(!Z){let q=H*$,F=q-$,G=q+$;for(let D=0;D!==$;++D){let M=Q[q+D];if(M!==Q[F+D]||M!==Q[G+D]){Y=!0;break}}}else Y=!0;if(Y){if(H!==K){J[K]=J[H];let q=H*$,F=K*$;for(let G=0;G!==$;++G)Q[F+G]=Q[q+G]}++K}}if(W>0){J[K]=J[W];for(let H=W*$,Y=K*$,X=0;X!==$;++X)Q[Y+X]=Q[H+X];++K}if(K!==J.length)this.times=J.slice(0,K),this.values=Q.slice(0,K*$);else this.times=J,this.values=Q;return this}clone(){let J=this.times.slice(),Q=this.values.slice(),Z=new this.constructor(this.name,J,Q);return Z.createInterpolant=this.createInterpolant,Z}}lJ.prototype.ValueTypeName="";lJ.prototype.TimeBufferType=Float32Array;lJ.prototype.ValueBufferType=Float32Array;lJ.prototype.DefaultInterpolation=2301;class a9 extends lJ{constructor(J,Q,$){super(J,Q,$)}}a9.prototype.ValueTypeName="bool";a9.prototype.ValueBufferType=Array;a9.prototype.DefaultInterpolation=2300;a9.prototype.InterpolantFactoryMethodLinear=void 0;a9.prototype.InterpolantFactoryMethodSmooth=void 0;class oQ extends lJ{constructor(J,Q,$,Z){super(J,Q,$,Z)}}oQ.prototype.ValueTypeName="color";class aQ extends lJ{constructor(J,Q,$,Z){super(J,Q,$,Z)}}aQ.prototype.ValueTypeName="number";class rQ extends o9{constructor(J,Q,$,Z){super(J,Q,$,Z)}interpolate_(J,Q,$,Z){let W=this.resultBuffer,K=this.sampleValues,H=this.valueSize,Y=($-Q)/(Z-Q),X=J*H;for(let U=X+H;X!==U;X+=4)R9.slerpFlat(W,0,K,X-H,K,X,Y);return W}}class i7 extends lJ{constructor(J,Q,$,Z){super(J,Q,$,Z)}InterpolantFactoryMethodLinear(J){return new rQ(this.times,this.values,this.getValueSize(),J)}}i7.prototype.ValueTypeName="quaternion";i7.prototype.InterpolantFactoryMethodSmooth=void 0;class r9 extends lJ{constructor(J,Q,$){super(J,Q,$)}}r9.prototype.ValueTypeName="string";r9.prototype.ValueBufferType=Array;r9.prototype.DefaultInterpolation=2300;r9.prototype.InterpolantFactoryMethodLinear=void 0;r9.prototype.InterpolantFactoryMethodSmooth=void 0;class tQ extends lJ{constructor(J,Q,$,Z){super(J,Q,$,Z)}}tQ.prototype.ValueTypeName="vector";class eQ{constructor(J,Q,$){let Z=this,W=!1,K=0,H=0,Y=void 0,X=[];this.onStart=void 0,this.onLoad=J,this.onProgress=Q,this.onError=$,this._abortController=null,this.itemStart=function(U){if(H++,W===!1){if(Z.onStart!==void 0)Z.onStart(U,K,H)}W=!0},this.itemEnd=function(U){if(K++,Z.onProgress!==void 0)Z.onProgress(U,K,H);if(K===H){if(W=!1,Z.onLoad!==void 0)Z.onLoad()}},this.itemError=function(U){if(Z.onError!==void 0)Z.onError(U)},this.resolveURL=function(U){if(U=U.normalize("NFC"),Y)return Y(U);return U},this.setURLModifier=function(U){return Y=U,this},this.addHandler=function(U,q){return X.push(U,q),this},this.removeHandler=function(U){let q=X.indexOf(U);if(q!==-1)X.splice(q,2);return this},this.getHandler=function(U){for(let q=0,F=X.length;q<F;q+=2){let G=X[q],D=X[q+1];if(G.global)G.lastIndex=0;if(G.test(U))return D}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){if(!this._abortController)this._abortController=new AbortController;return this._abortController}}var QW=new eQ;class J${constructor(J){if(this.manager=J!==void 0?J:QW,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u")__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(J,Q){let $=this;return new Promise(function(Z,W){$.load(J,Z,Q,W)})}parse(){}setCrossOrigin(J){return this.crossOrigin=J,this}setWithCredentials(J){return this.withCredentials=J,this}setPath(J){return this.path=J,this}setResourcePath(J){return this.resourcePath=J,this}setRequestHeader(J){return this.requestHeader=J,this}abort(){return this}}J$.DEFAULT_MATERIAL_NAME="__DEFAULT";class t9 extends DJ{constructor(J,Q=1){super();this.isLight=!0,this.type="Light",this.color=new y0(J),this.intensity=Q}dispose(){this.dispatchEvent({type:"dispose"})}copy(J,Q){return super.copy(J,Q),this.color.copy(J.color),this.intensity=J.intensity,this}toJSON(J){let Q=super.toJSON(J);return Q.object.color=this.color.getHex(),Q.object.intensity=this.intensity,Q}}class o7 extends t9{constructor(J,Q,$){super(J,$);this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(DJ.DEFAULT_UP),this.updateMatrix(),this.groundColor=new y0(Q)}copy(J,Q){return super.copy(J,Q),this.groundColor.copy(J.groundColor),this}toJSON(J){let Q=super.toJSON(J);return Q.object.groundColor=this.groundColor.getHex(),Q}}var f6=new HJ,n$=new v,s$=new v;class a7{constructor(J){this.camera=J,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new p0(512,512),this.mapType=1009,this.map=null,this.mapPass=null,this.matrix=new HJ,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new u8,this._frameExtents=new p0(1,1),this._viewportCount=1,this._viewports=[new GJ(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(J){let Q=this.camera,$=this.matrix;if(n$.setFromMatrixPosition(J.matrixWorld),Q.position.copy(n$),s$.setFromMatrixPosition(J.target.matrixWorld),Q.lookAt(s$),Q.updateMatrixWorld(),f6.multiplyMatrices(Q.projectionMatrix,Q.matrixWorldInverse),this._frustum.setFromProjectionMatrix(f6,Q.coordinateSystem,Q.reversedDepth),Q.coordinateSystem===2001||Q.reversedDepth)$.set(0.5,0,0,0.5,0,0.5,0,0.5,0,0,1,0,0,0,0,1);else $.set(0.5,0,0,0.5,0,0.5,0,0.5,0,0,0.5,0.5,0,0,0,1);$.multiply(f6)}getViewport(J){return this._viewports[J]}getFrameExtents(){return this._frameExtents}dispose(){if(this.map)this.map.dispose();if(this.mapPass)this.mapPass.dispose()}copy(J){return this.camera=J.camera.clone(),this.intensity=J.intensity,this.bias=J.bias,this.radius=J.radius,this.autoUpdate=J.autoUpdate,this.needsUpdate=J.needsUpdate,this.normalBias=J.normalBias,this.blurSamples=J.blurSamples,this.mapSize.copy(J.mapSize),this.biasNode=J.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let J={};if(this.intensity!==1)J.intensity=this.intensity;if(this.bias!==0)J.bias=this.bias;if(this.normalBias!==0)J.normalBias=this.normalBias;if(this.radius!==1)J.radius=this.radius;if(this.mapSize.x!==512||this.mapSize.y!==512)J.mapSize=this.mapSize.toArray();return J.camera=this.camera.toJSON(!1).object,delete J.camera.matrix,J}}var B7=new v,z7=new R9,eJ=new v;class r7 extends DJ{constructor(){super();this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new HJ,this.projectionMatrix=new HJ,this.projectionMatrixInverse=new HJ,this.coordinateSystem=2000,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(J,Q){return super.copy(J,Q),this.matrixWorldInverse.copy(J.matrixWorldInverse),this.projectionMatrix.copy(J.projectionMatrix),this.projectionMatrixInverse.copy(J.projectionMatrixInverse),this.coordinateSystem=J.coordinateSystem,this}getWorldDirection(J){return super.getWorldDirection(J).negate()}updateMatrixWorld(J){if(super.updateMatrixWorld(J),this.matrixWorld.decompose(B7,z7,eJ),eJ.x===1&&eJ.y===1&&eJ.z===1)this.matrixWorldInverse.copy(this.matrixWorld).invert();else this.matrixWorldInverse.compose(B7,z7,eJ.set(1,1,1)).invert()}updateWorldMatrix(J,Q,$=!1){if(super.updateWorldMatrix(J,Q,$),this.matrixWorld.decompose(B7,z7,eJ),eJ.x===1&&eJ.y===1&&eJ.z===1)this.matrixWorldInverse.copy(this.matrixWorld).invert();else this.matrixWorldInverse.compose(B7,z7,eJ.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}var _9=new v,i$=new p0,o$=new p0;class VJ extends r7{constructor(J=50,Q=1,$=0.1,Z=2000){super();this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=J,this.zoom=1,this.near=$,this.far=Z,this.focus=10,this.aspect=Q,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(J,Q){return super.copy(J,Q),this.fov=J.fov,this.zoom=J.zoom,this.near=J.near,this.far=J.far,this.focus=J.focus,this.aspect=J.aspect,this.view=J.view===null?null:Object.assign({},J.view),this.filmGauge=J.filmGauge,this.filmOffset=J.filmOffset,this}setFocalLength(J){let Q=0.5*this.getFilmHeight()/J;this.fov=S8*2*Math.atan(Q),this.updateProjectionMatrix()}getFocalLength(){let J=Math.tan(N6*0.5*this.fov);return 0.5*this.getFilmHeight()/J}getEffectiveFOV(){return S8*2*Math.atan(Math.tan(N6*0.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(J,Q,$){_9.set(-1,-1,0.5).applyMatrix4(this.projectionMatrixInverse),Q.set(_9.x,_9.y).multiplyScalar(-J/_9.z),_9.set(1,1,0.5).applyMatrix4(this.projectionMatrixInverse),$.set(_9.x,_9.y).multiplyScalar(-J/_9.z)}getViewSize(J,Q){return this.getViewBounds(J,i$,o$),Q.subVectors(o$,i$)}setViewOffset(J,Q,$,Z,W,K){if(this.aspect=J/Q,this.view===null)this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1};this.view.enabled=!0,this.view.fullWidth=J,this.view.fullHeight=Q,this.view.offsetX=$,this.view.offsetY=Z,this.view.width=W,this.view.height=K,this.updateProjectionMatrix()}clearViewOffset(){if(this.view!==null)this.view.enabled=!1;this.updateProjectionMatrix()}updateProjectionMatrix(){let J=this.near,Q=J*Math.tan(N6*0.5*this.fov)/this.zoom,$=2*Q,Z=this.aspect*$,W=-0.5*Z,K=this.view;if(this.view!==null&&this.view.enabled){let{fullWidth:Y,fullHeight:X}=K;W+=K.offsetX*Z/Y,Q-=K.offsetY*$/X,Z*=K.width/Y,$*=K.height/X}let H=this.filmOffset;if(H!==0)W+=J*H/this.getFilmWidth();this.projectionMatrix.makePerspective(W,W+Z,Q,Q-$,J,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(J){let Q=super.toJSON(J);if(Q.object.fov=this.fov,Q.object.zoom=this.zoom,Q.object.near=this.near,Q.object.far=this.far,Q.object.focus=this.focus,Q.object.aspect=this.aspect,this.view!==null)Q.object.view=Object.assign({},this.view);return Q.object.filmGauge=this.filmGauge,Q.object.filmOffset=this.filmOffset,Q}}class $W extends a7{constructor(){super(new VJ(50,1,0.5,500));this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(J){let Q=this.camera,$=S8*2*J.angle*this.focus,Z=this.mapSize.width/this.mapSize.height*this.aspect,W=J.distance||Q.far;if($!==Q.fov||Z!==Q.aspect||W!==Q.far)Q.fov=$,Q.aspect=Z,Q.far=W,Q.updateProjectionMatrix();super.updateMatrices(J)}copy(J){return super.copy(J),this.focus=J.focus,this}}class t7 extends t9{constructor(J,Q,$=0,Z=Math.PI/3,W=0,K=2){super(J,Q);this.isSpotLight=!0,this.type="SpotLight",this.position.copy(DJ.DEFAULT_UP),this.updateMatrix(),this.target=new DJ,this.distance=$,this.angle=Z,this.penumbra=W,this.decay=K,this.map=null,this.shadow=new $W}get power(){return this.intensity*Math.PI}set power(J){this.intensity=J/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(J,Q){return super.copy(J,Q),this.distance=J.distance,this.angle=J.angle,this.penumbra=J.penumbra,this.decay=J.decay,this.target=J.target.clone(),this.map=J.map,this.shadow=J.shadow.clone(),this}toJSON(J){let Q=super.toJSON(J);if(Q.object.distance=this.distance,Q.object.angle=this.angle,Q.object.decay=this.decay,Q.object.penumbra=this.penumbra,Q.object.target=this.target.uuid,this.map&&this.map.isTexture)Q.object.map=this.map.toJSON(J).uuid;return Q.object.shadow=this.shadow.toJSON(),Q}}class ZW extends a7{constructor(){super(new VJ(90,1,0.5,500));this.isPointLightShadow=!0}}class e7 extends t9{constructor(J,Q,$=0,Z=2){super(J,Q);this.isPointLight=!0,this.type="PointLight",this.distance=$,this.decay=Z,this.shadow=new ZW}get power(){return this.intensity*4*Math.PI}set power(J){this.intensity=J/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(J,Q){return super.copy(J,Q),this.distance=J.distance,this.decay=J.decay,this.shadow=J.shadow.clone(),this}toJSON(J){let Q=super.toJSON(J);return Q.object.distance=this.distance,Q.object.decay=this.decay,Q.object.shadow=this.shadow.toJSON(),Q}}class e9 extends r7{constructor(J=-1,Q=1,$=1,Z=-1,W=0.1,K=2000){super();this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=J,this.right=Q,this.top=$,this.bottom=Z,this.near=W,this.far=K,this.updateProjectionMatrix()}copy(J,Q){return super.copy(J,Q),this.left=J.left,this.right=J.right,this.top=J.top,this.bottom=J.bottom,this.near=J.near,this.far=J.far,this.zoom=J.zoom,this.view=J.view===null?null:Object.assign({},J.view),this}setViewOffset(J,Q,$,Z,W,K){if(this.view===null)this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1};this.view.enabled=!0,this.view.fullWidth=J,this.view.fullHeight=Q,this.view.offsetX=$,this.view.offsetY=Z,this.view.width=W,this.view.height=K,this.updateProjectionMatrix()}clearViewOffset(){if(this.view!==null)this.view.enabled=!1;this.updateProjectionMatrix()}updateProjectionMatrix(){let J=(this.right-this.left)/(2*this.zoom),Q=(this.top-this.bottom)/(2*this.zoom),$=(this.right+this.left)/2,Z=(this.top+this.bottom)/2,W=$-J,K=$+J,H=Z+Q,Y=Z-Q;if(this.view!==null&&this.view.enabled){let X=(this.right-this.left)/this.view.fullWidth/this.zoom,U=(this.top-this.bottom)/this.view.fullHeight/this.zoom;W+=X*this.view.offsetX,K=W+X*this.view.width,H-=U*this.view.offsetY,Y=H-U*this.view.height}this.projectionMatrix.makeOrthographic(W,K,H,Y,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(J){let Q=super.toJSON(J);if(Q.object.zoom=this.zoom,Q.object.left=this.left,Q.object.right=this.right,Q.object.top=this.top,Q.object.bottom=this.bottom,Q.object.near=this.near,Q.object.far=this.far,this.view!==null)Q.object.view=Object.assign({},this.view);return Q}}class WW extends a7{constructor(){super(new e9(-5,5,5,-5,0.5,500));this.isDirectionalLightShadow=!0}}class o8 extends t9{constructor(J,Q){super(J,Q);this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(DJ.DEFAULT_UP),this.updateMatrix(),this.target=new DJ,this.shadow=new WW}dispose(){super.dispose(),this.shadow.dispose()}copy(J){return super.copy(J),this.target=J.target.clone(),this.shadow=J.shadow.clone(),this}toJSON(J){let Q=super.toJSON(J);return Q.object.shadow=this.shadow.toJSON(),Q.object.target=this.target.uuid,Q}}class J6 extends t9{constructor(J,Q){super(J,Q);this.isAmbientLight=!0,this.type="AmbientLight"}}var q8=-90,F8=1;class Q$ extends DJ{constructor(J,Q,$){super();this.type="CubeCamera",this.renderTarget=$,this.coordinateSystem=null,this.activeMipmapLevel=0;let Z=new VJ(q8,F8,J,Q);Z.layers=this.layers,this.add(Z);let W=new VJ(q8,F8,J,Q);W.layers=this.layers,this.add(W);let K=new VJ(q8,F8,J,Q);K.layers=this.layers,this.add(K);let H=new VJ(q8,F8,J,Q);H.layers=this.layers,this.add(H);let Y=new VJ(q8,F8,J,Q);Y.layers=this.layers,this.add(Y);let X=new VJ(q8,F8,J,Q);X.layers=this.layers,this.add(X)}updateCoordinateSystem(){let J=this.coordinateSystem,Q=this.children.concat(),[$,Z,W,K,H,Y]=Q;for(let X of Q)this.remove(X);if(J===2000)$.up.set(0,1,0),$.lookAt(1,0,0),Z.up.set(0,1,0),Z.lookAt(-1,0,0),W.up.set(0,0,-1),W.lookAt(0,1,0),K.up.set(0,0,1),K.lookAt(0,-1,0),H.up.set(0,1,0),H.lookAt(0,0,1),Y.up.set(0,1,0),Y.lookAt(0,0,-1);else if(J===2001)$.up.set(0,-1,0),$.lookAt(-1,0,0),Z.up.set(0,-1,0),Z.lookAt(1,0,0),W.up.set(0,0,1),W.lookAt(0,1,0),K.up.set(0,0,-1),K.lookAt(0,-1,0),H.up.set(0,-1,0),H.lookAt(0,0,1),Y.up.set(0,-1,0),Y.lookAt(0,0,-1);else throw Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+J);for(let X of Q)this.add(X),X.updateMatrixWorld()}update(J,Q){if(this.parent===null)this.updateMatrixWorld();let{renderTarget:$,activeMipmapLevel:Z}=this;if(this.coordinateSystem!==J.coordinateSystem)this.coordinateSystem=J.coordinateSystem,this.updateCoordinateSystem();let[W,K,H,Y,X,U]=this.children,q=J.getRenderTarget(),F=J.getActiveCubeFace(),G=J.getActiveMipmapLevel(),D=J.xr.enabled;J.xr.enabled=!1;let M=$.texture.generateMipmaps;$.texture.generateMipmaps=!1;let z=!1;if(J.isWebGLRenderer===!0)z=J.state.buffers.depth.getReversed();else z=J.reversedDepthBuffer;if(J.setRenderTarget($,0,Z),z&&J.autoClear===!1)J.clearDepth();if(J.render(Q,W),J.setRenderTarget($,1,Z),z&&J.autoClear===!1)J.clearDepth();if(J.render(Q,K),J.setRenderTarget($,2,Z),z&&J.autoClear===!1)J.clearDepth();if(J.render(Q,H),J.setRenderTarget($,3,Z),z&&J.autoClear===!1)J.clearDepth();if(J.render(Q,Y),J.setRenderTarget($,4,Z),z&&J.autoClear===!1)J.clearDepth();if(J.render(Q,X),$.texture.generateMipmaps=M,J.setRenderTarget($,5,Z),z&&J.autoClear===!1)J.clearDepth();J.render(Q,U),J.setRenderTarget(q,F,G),J.xr.enabled=D,$.texture.needsPMREMUpdate=!0}}class $$ extends VJ{constructor(J=[]){super();this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=J}}var Z$="\\[\\]\\.:\\/",PK=new RegExp("["+Z$+"]","g"),W$="[^"+Z$+"]",TK="[^"+Z$.replace("\\.","")+"]",SK=/((?:WC+[\/:])*)/.source.replace("WC",W$),jK=/(WCOD+)?/.source.replace("WCOD",TK),yK=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",W$),vK=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",W$),fK=new RegExp("^"+SK+jK+yK+vK+"$"),bK=["material","materials","bones","map"];class KW{constructor(J,Q,$){let Z=$||r0.parseTrackName(Q);this._targetGroup=J,this._bindings=J.subscribe_(Q,Z)}getValue(J,Q){this.bind();let $=this._targetGroup.nCachedObjects_,Z=this._bindings[$];if(Z!==void 0)Z.getValue(J,Q)}setValue(J,Q){let $=this._bindings;for(let Z=this._targetGroup.nCachedObjects_,W=$.length;Z!==W;++Z)$[Z].setValue(J,Q)}bind(){let J=this._bindings;for(let Q=this._targetGroup.nCachedObjects_,$=J.length;Q!==$;++Q)J[Q].bind()}unbind(){let J=this._bindings;for(let Q=this._targetGroup.nCachedObjects_,$=J.length;Q!==$;++Q)J[Q].unbind()}}class r0{constructor(J,Q,$){this.path=Q,this.parsedPath=$||r0.parseTrackName(Q),this.node=r0.findNode(J,this.parsedPath.nodeName),this.rootNode=J,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(J,Q,$){if(!(J&&J.isAnimationObjectGroup))return new r0(J,Q,$);else return new r0.Composite(J,Q,$)}static sanitizeNodeName(J){return J.replace(/\s/g,"_").replace(PK,"")}static parseTrackName(J){let Q=fK.exec(J);if(Q===null)throw Error("THREE.PropertyBinding: Cannot parse trackName: "+J);let $={nodeName:Q[2],objectName:Q[3],objectIndex:Q[4],propertyName:Q[5],propertyIndex:Q[6]},Z=$.nodeName&&$.nodeName.lastIndexOf(".");if(Z!==void 0&&Z!==-1){let W=$.nodeName.substring(Z+1);if(bK.indexOf(W)!==-1)$.nodeName=$.nodeName.substring(0,Z),$.objectName=W}if($.propertyName===null||$.propertyName.length===0)throw Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+J);return $}static findNode(J,Q){if(Q===void 0||Q===""||Q==="."||Q===-1||Q===J.name||Q===J.uuid)return J;if(J.skeleton){let $=J.skeleton.getBoneByName(Q);if($!==void 0)return $}if(J.children){let $=function(W){for(let K=0;K<W.length;K++){let H=W[K];if(H.name===Q||H.uuid===Q)return H;let Y=$(H.children);if(Y)return Y}return null},Z=$(J.children);if(Z)return Z}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(J,Q){J[Q]=this.targetObject[this.propertyName]}_getValue_array(J,Q){let $=this.resolvedProperty;for(let Z=0,W=$.length;Z!==W;++Z)J[Q++]=$[Z]}_getValue_arrayElement(J,Q){J[Q]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(J,Q){this.resolvedProperty.toArray(J,Q)}_setValue_direct(J,Q){this.targetObject[this.propertyName]=J[Q]}_setValue_direct_setNeedsUpdate(J,Q){this.targetObject[this.propertyName]=J[Q],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(J,Q){this.targetObject[this.propertyName]=J[Q],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(J,Q){let $=this.resolvedProperty;for(let Z=0,W=$.length;Z!==W;++Z)$[Z]=J[Q++]}_setValue_array_setNeedsUpdate(J,Q){let $=this.resolvedProperty;for(let Z=0,W=$.length;Z!==W;++Z)$[Z]=J[Q++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(J,Q){let $=this.resolvedProperty;for(let Z=0,W=$.length;Z!==W;++Z)$[Z]=J[Q++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(J,Q){this.resolvedProperty[this.propertyIndex]=J[Q]}_setValue_arrayElement_setNeedsUpdate(J,Q){this.resolvedProperty[this.propertyIndex]=J[Q],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(J,Q){this.resolvedProperty[this.propertyIndex]=J[Q],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(J,Q){this.resolvedProperty.fromArray(J,Q)}_setValue_fromArray_setNeedsUpdate(J,Q){this.resolvedProperty.fromArray(J,Q),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(J,Q){this.resolvedProperty.fromArray(J,Q),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(J,Q){this.bind(),this.getValue(J,Q)}_setValue_unbound(J,Q){this.bind(),this.setValue(J,Q)}bind(){let J=this.node,Q=this.parsedPath,$=Q.objectName,Z=Q.propertyName,W=Q.propertyIndex;if(!J)J=r0.findNode(this.rootNode,Q.nodeName),this.node=J;if(this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!J){_0("PropertyBinding: No target node found for track: "+this.path+".");return}if($){let X=Q.objectIndex;switch($){case"materials":if(!J.material){P0("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!J.material.materials){P0("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}J=J.material.materials;break;case"bones":if(!J.skeleton){P0("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}J=J.skeleton.bones;for(let U=0;U<J.length;U++)if(J[U].name===X){X=U;break}break;case"map":if("map"in J){J=J.map;break}if(!J.material){P0("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!J.material.map){P0("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}J=J.material.map;break;default:if(J[$]===void 0){P0("PropertyBinding: Can not bind to objectName of node undefined.",this);return}J=J[$]}if(X!==void 0){if(J[X]===void 0){P0("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,J);return}J=J[X]}}let K=J[Z];if(K===void 0){let X=Q.nodeName;P0("PropertyBinding: Trying to update property for track: "+X+"."+Z+" but it wasn't found.",J);return}let H=this.Versioning.None;if(this.targetObject=J,J.isMaterial===!0)H=this.Versioning.NeedsUpdate;else if(J.isObject3D===!0)H=this.Versioning.MatrixWorldNeedsUpdate;let Y=this.BindingType.Direct;if(W!==void 0){if(Z==="morphTargetInfluences"){if(!J.geometry){P0("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!J.geometry.morphAttributes){P0("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}if(J.morphTargetDictionary[W]!==void 0)W=J.morphTargetDictionary[W]}Y=this.BindingType.ArrayElement,this.resolvedProperty=K,this.propertyIndex=W}else if(K.fromArray!==void 0&&K.toArray!==void 0)Y=this.BindingType.HasFromToArray,this.resolvedProperty=K;else if(Array.isArray(K))Y=this.BindingType.EntireArray,this.resolvedProperty=K;else this.propertyName=Z;this.getValue=this.GetterByBindingType[Y],this.setValue=this.SetterByBindingTypeAndVersioning[Y][H]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}r0.Composite=KW;r0.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};r0.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};r0.prototype.GetterByBindingType=[r0.prototype._getValue_direct,r0.prototype._getValue_array,r0.prototype._getValue_arrayElement,r0.prototype._getValue_toArray];r0.prototype.SetterByBindingTypeAndVersioning=[[r0.prototype._setValue_direct,r0.prototype._setValue_direct_setNeedsUpdate,r0.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[r0.prototype._setValue_array,r0.prototype._setValue_array_setNeedsUpdate,r0.prototype._setValue_array_setMatrixWorldNeedsUpdate],[r0.prototype._setValue_arrayElement,r0.prototype._setValue_arrayElement_setNeedsUpdate,r0.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[r0.prototype._setValue_fromArray,r0.prototype._setValue_fromArray_setNeedsUpdate,r0.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var TG=new Float32Array(1);var a$=new HJ;class Q6{constructor(J,Q,$=0,Z=1/0){this.ray=new l8(J,Q),this.near=$,this.far=Z,this.camera=null,this.layers=new p8,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(J,Q){this.ray.set(J,Q)}setFromCamera(J,Q){if(Q.isPerspectiveCamera)this.ray.origin.setFromMatrixPosition(Q.matrixWorld),this.ray.direction.set(J.x,J.y,0.5).unproject(Q).sub(this.ray.origin).normalize(),this.camera=Q;else if(Q.isOrthographicCamera)this.ray.origin.set(J.x,J.y,Q.projectionMatrix.elements[14]).unproject(Q),this.ray.direction.set(0,0,-1).transformDirection(Q.matrixWorld),this.camera=Q;else P0("Raycaster: Unsupported camera type: "+Q.type)}setFromXRController(J){return a$.identity().extractRotation(J.matrixWorld),this.ray.origin.setFromMatrixPosition(J.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(a$),this}intersectObject(J,Q=!0,$=[]){return b6(J,this,$,Q),$.sort(r$),$}intersectObjects(J,Q=!0,$=[]){for(let Z=0,W=J.length;Z<W;Z++)b6(J[Z],this,$,Q);return $.sort(r$),$}}function r$(J,Q){return J.distance-Q.distance}function b6(J,Q,$,Z){let W=!0;if(J.layers.test(Q.layers)){if(J.raycast(Q,$)===!1)W=!1}if(W===!0&&Z===!0){let K=J.children;for(let H=0,Y=K.length;H<Y;H++)b6(K[H],Q,$,!0)}}class $6{constructor(J=!0){this.autoStart=J,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,_0("Clock: This module has been deprecated. Please use THREE.Timer instead.")}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let J=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let Q=performance.now();J=(Q-this.oldTime)/1000,this.oldTime=Q,this.elapsedTime+=J}return J}}class Z6{constructor(J=1,Q=0,$=0){this.radius=J,this.phi=Q,this.theta=$}set(J,Q,$){return this.radius=J,this.phi=Q,this.theta=$,this}copy(J){return this.radius=J.radius,this.phi=J.phi,this.theta=J.theta,this}makeSafe(){return this.phi=m0(this.phi,0.000001,Math.PI-0.000001),this}setFromVector3(J){return this.setFromCartesianCoords(J.x,J.y,J.z)}setFromCartesianCoords(J,Q,$){if(this.radius=Math.sqrt(J*J+Q*Q+$*$),this.radius===0)this.theta=0,this.phi=0;else this.theta=Math.atan2(J,$),this.phi=Math.acos(m0(Q/this.radius,-1,1));return this}clone(){return new this.constructor().copy(this)}}class K${static{K$.prototype.isMatrix2=!0}constructor(J,Q,$,Z){if(this.elements=[1,0,0,1],J!==void 0)this.set(J,Q,$,Z)}identity(){return this.set(1,0,0,1),this}fromArray(J,Q=0){for(let $=0;$<4;$++)this.elements[$]=J[$+Q];return this}set(J,Q,$,Z){let W=this.elements;return W[0]=J,W[2]=Q,W[1]=$,W[3]=Z,this}}function H$(J,Q,$,Z){let W=hK(Z);switch($){case 1021:return J*Q;case 1028:return J*Q/W.components*W.byteLength;case 1029:return J*Q/W.components*W.byteLength;case 1030:return J*Q*2/W.components*W.byteLength;case 1031:return J*Q*2/W.components*W.byteLength;case 1022:return J*Q*3/W.components*W.byteLength;case 1023:return J*Q*4/W.components*W.byteLength;case 1033:return J*Q*4/W.components*W.byteLength;case 33776:case 33777:return Math.floor((J+3)/4)*Math.floor((Q+3)/4)*8;case 33778:case 33779:return Math.floor((J+3)/4)*Math.floor((Q+3)/4)*16;case 35841:case 35843:return Math.max(J,16)*Math.max(Q,8)/4;case 35840:case 35842:return Math.max(J,8)*Math.max(Q,8)/2;case 36196:case 37492:case 37488:case 37489:return Math.floor((J+3)/4)*Math.floor((Q+3)/4)*8;case 37496:case 37490:case 37491:return Math.floor((J+3)/4)*Math.floor((Q+3)/4)*16;case 37808:return Math.floor((J+3)/4)*Math.floor((Q+3)/4)*16;case 37809:return Math.floor((J+4)/5)*Math.floor((Q+3)/4)*16;case 37810:return Math.floor((J+4)/5)*Math.floor((Q+4)/5)*16;case 37811:return Math.floor((J+5)/6)*Math.floor((Q+4)/5)*16;case 37812:return Math.floor((J+5)/6)*Math.floor((Q+5)/6)*16;case 37813:return Math.floor((J+7)/8)*Math.floor((Q+4)/5)*16;case 37814:return Math.floor((J+7)/8)*Math.floor((Q+5)/6)*16;case 37815:return Math.floor((J+7)/8)*Math.floor((Q+7)/8)*16;case 37816:return Math.floor((J+9)/10)*Math.floor((Q+4)/5)*16;case 37817:return Math.floor((J+9)/10)*Math.floor((Q+5)/6)*16;case 37818:return Math.floor((J+9)/10)*Math.floor((Q+7)/8)*16;case 37819:return Math.floor((J+9)/10)*Math.floor((Q+9)/10)*16;case 37820:return Math.floor((J+11)/12)*Math.floor((Q+9)/10)*16;case 37821:return Math.floor((J+11)/12)*Math.floor((Q+11)/12)*16;case 36492:case 36494:case 36495:return Math.ceil(J/4)*Math.ceil(Q/4)*16;case 36283:case 36284:return Math.ceil(J/4)*Math.ceil(Q/4)*8;case 36285:case 36286:return Math.ceil(J/4)*Math.ceil(Q/4)*16}throw Error(`Unable to determine texture byte length for ${$} format.`)}function hK(J){switch(J){case 1009:case 1010:return{byteLength:1,components:1};case 1012:case 1011:case 1016:return{byteLength:2,components:1};case 1017:case 1018:return{byteLength:2,components:4};case 1014:case 1013:case 1015:return{byteLength:4,components:1};case 35902:case 35899:return{byteLength:4,components:3}}throw Error(`THREE.TextureUtils: Unknown texture type ${J}.`)}if(typeof __THREE_DEVTOOLS__<"u")__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"185"}}));if(typeof window<"u")if(window.__THREE__)_0("WARNING: Multiple instances of Three.js being imported.");else window.__THREE__="185";function CW(){let J=null,Q=!1,$=null,Z=null;function W(K,H){$(K,H),Z=J.requestAnimationFrame(W)}return{start:function(){if(Q===!0)return;if($===null)return;if(J===null)return;Z=J.requestAnimationFrame(W),Q=!0},stop:function(){if(J!==null)J.cancelAnimationFrame(Z);Q=!1},setAnimationLoop:function(K){$=K},setContext:function(K){J=K}}}function xK(J){let Q=new WeakMap;function $(Y,X){let{array:U,usage:q}=Y,F=U.byteLength,G=J.createBuffer();J.bindBuffer(X,G),J.bufferData(X,U,q),Y.onUploadCallback();let D;if(U instanceof Float32Array)D=J.FLOAT;else if(typeof Float16Array<"u"&&U instanceof Float16Array)D=J.HALF_FLOAT;else if(U instanceof Uint16Array)if(Y.isFloat16BufferAttribute)D=J.HALF_FLOAT;else D=J.UNSIGNED_SHORT;else if(U instanceof Int16Array)D=J.SHORT;else if(U instanceof Uint32Array)D=J.UNSIGNED_INT;else if(U instanceof Int32Array)D=J.INT;else if(U instanceof Int8Array)D=J.BYTE;else if(U instanceof Uint8Array)D=J.UNSIGNED_BYTE;else if(U instanceof Uint8ClampedArray)D=J.UNSIGNED_BYTE;else throw Error("THREE.WebGLAttributes: Unsupported buffer data format: "+U);return{buffer:G,type:D,bytesPerElement:U.BYTES_PER_ELEMENT,version:Y.version,size:F}}function Z(Y,X,U){let{array:q,updateRanges:F}=X;if(J.bindBuffer(U,Y),F.length===0)J.bufferSubData(U,0,q);else{F.sort((D,M)=>D.start-M.start);let G=0;for(let D=1;D<F.length;D++){let M=F[G],z=F[D];if(z.start<=M.start+M.count+1)M.count=Math.max(M.count,z.start+z.count-M.start);else++G,F[G]=z}F.length=G+1;for(let D=0,M=F.length;D<M;D++){let z=F[D];J.bufferSubData(U,z.start*q.BYTES_PER_ELEMENT,q,z.start,z.count)}X.clearUpdateRanges()}X.onUploadCallback()}function W(Y){if(Y.isInterleavedBufferAttribute)Y=Y.data;return Q.get(Y)}function K(Y){if(Y.isInterleavedBufferAttribute)Y=Y.data;let X=Q.get(Y);if(X)J.deleteBuffer(X.buffer),Q.delete(Y)}function H(Y,X){if(Y.isInterleavedBufferAttribute)Y=Y.data;if(Y.isGLBufferAttribute){let q=Q.get(Y);if(!q||q.version<Y.version)Q.set(Y,{buffer:Y.buffer,type:Y.type,bytesPerElement:Y.elementSize,version:Y.version});return}let U=Q.get(Y);if(U===void 0)Q.set(Y,$(Y,X));else if(U.version<Y.version){if(U.size!==Y.array.byteLength)throw Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");Z(U.buffer,Y,X),U.version=Y.version}}return{get:W,remove:K,update:H}}var gK=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,pK=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,mK=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,dK=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,lK=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,uK=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,cK=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,nK=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,sK=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,iK=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,oK=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,aK=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,rK=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,tK=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,eK=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,JH=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,QH=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,$H=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,ZH=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,WH=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,KH=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,HH=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,YH=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,XH=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,UH=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,GH=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,NH=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,EH=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,qH=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,FH=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,DH="gl_FragColor = linearToOutputTexel( gl_FragColor );",OH=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,RH=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,kH=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,MH=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,LH=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,VH=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,BH=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,zH=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,IH=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,AH=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,wH=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,_H=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,CH=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,PH=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,TH=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,SH=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,jH=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,yH=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,vH=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,fH=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,bH=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,hH=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,xH=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,gH=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,pH=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,mH=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,dH=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,lH=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,uH=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,cH=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,nH=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,sH=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,iH=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,oH=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,aH=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,rH=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,tH=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,eH=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,JY=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,QY=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,$Y=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ZY=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,WY=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,KY=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,HY=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,YY=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,XY=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,UY=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,GY=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,NY=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,EY=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,qY=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,FY=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,DY=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,OY=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,RY=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,kY=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,MY=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,LY=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,VY=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,BY=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,zY=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,IY=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,AY=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,wY=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,_Y=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,CY=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,PY=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,TY=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,SY=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,jY=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,yY=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,vY=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,fY=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,bY=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,hY=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,xY=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,gY=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,pY=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,mY=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,dY=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,lY=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,uY=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cY=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,nY=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,sY=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,iY=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,oY=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,aY=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,rY=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,tY=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,eY=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,JX=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,QX=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,$X=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ZX=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,WX=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,KX=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,HX=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,YX=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,XX=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,UX=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,GX=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,NX=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,EX=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,qX=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,FX=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,DX=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,OX=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,RX=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,kX=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,x0={alphahash_fragment:gK,alphahash_pars_fragment:pK,alphamap_fragment:mK,alphamap_pars_fragment:dK,alphatest_fragment:lK,alphatest_pars_fragment:uK,aomap_fragment:cK,aomap_pars_fragment:nK,batching_pars_vertex:sK,batching_vertex:iK,begin_vertex:oK,beginnormal_vertex:aK,bsdfs:rK,iridescence_fragment:tK,bumpmap_pars_fragment:eK,clipping_planes_fragment:JH,clipping_planes_pars_fragment:QH,clipping_planes_pars_vertex:$H,clipping_planes_vertex:ZH,color_fragment:WH,color_pars_fragment:KH,color_pars_vertex:HH,color_vertex:YH,common:XH,cube_uv_reflection_fragment:UH,defaultnormal_vertex:GH,displacementmap_pars_vertex:NH,displacementmap_vertex:EH,emissivemap_fragment:qH,emissivemap_pars_fragment:FH,colorspace_fragment:DH,colorspace_pars_fragment:OH,envmap_fragment:RH,envmap_common_pars_fragment:kH,envmap_pars_fragment:MH,envmap_pars_vertex:LH,envmap_physical_pars_fragment:SH,envmap_vertex:VH,fog_vertex:BH,fog_pars_vertex:zH,fog_fragment:IH,fog_pars_fragment:AH,gradientmap_pars_fragment:wH,lightmap_pars_fragment:_H,lights_lambert_fragment:CH,lights_lambert_pars_fragment:PH,lights_pars_begin:TH,lights_toon_fragment:jH,lights_toon_pars_fragment:yH,lights_phong_fragment:vH,lights_phong_pars_fragment:fH,lights_physical_fragment:bH,lights_physical_pars_fragment:hH,lights_fragment_begin:xH,lights_fragment_maps:gH,lights_fragment_end:pH,lightprobes_pars_fragment:mH,logdepthbuf_fragment:dH,logdepthbuf_pars_fragment:lH,logdepthbuf_pars_vertex:uH,logdepthbuf_vertex:cH,map_fragment:nH,map_pars_fragment:sH,map_particle_fragment:iH,map_particle_pars_fragment:oH,metalnessmap_fragment:aH,metalnessmap_pars_fragment:rH,morphinstance_vertex:tH,morphcolor_vertex:eH,morphnormal_vertex:JY,morphtarget_pars_vertex:QY,morphtarget_vertex:$Y,normal_fragment_begin:ZY,normal_fragment_maps:WY,normal_pars_fragment:KY,normal_pars_vertex:HY,normal_vertex:YY,normalmap_pars_fragment:XY,clearcoat_normal_fragment_begin:UY,clearcoat_normal_fragment_maps:GY,clearcoat_pars_fragment:NY,iridescence_pars_fragment:EY,opaque_fragment:qY,packing:FY,premultiplied_alpha_fragment:DY,project_vertex:OY,dithering_fragment:RY,dithering_pars_fragment:kY,roughnessmap_fragment:MY,roughnessmap_pars_fragment:LY,shadowmap_pars_fragment:VY,shadowmap_pars_vertex:BY,shadowmap_vertex:zY,shadowmask_pars_fragment:IY,skinbase_vertex:AY,skinning_pars_vertex:wY,skinning_vertex:_Y,skinnormal_vertex:CY,specularmap_fragment:PY,specularmap_pars_fragment:TY,tonemapping_fragment:SY,tonemapping_pars_fragment:jY,transmission_fragment:yY,transmission_pars_fragment:vY,uv_pars_fragment:fY,uv_pars_vertex:bY,uv_vertex:hY,worldpos_vertex:xY,background_vert:gY,background_frag:pY,backgroundCube_vert:mY,backgroundCube_frag:dY,cube_vert:lY,cube_frag:uY,depth_vert:cY,depth_frag:nY,distance_vert:sY,distance_frag:iY,equirect_vert:oY,equirect_frag:aY,linedashed_vert:rY,linedashed_frag:tY,meshbasic_vert:eY,meshbasic_frag:JX,meshlambert_vert:QX,meshlambert_frag:$X,meshmatcap_vert:ZX,meshmatcap_frag:WX,meshnormal_vert:KX,meshnormal_frag:HX,meshphong_vert:YX,meshphong_frag:XX,meshphysical_vert:UX,meshphysical_frag:GX,meshtoon_vert:NX,meshtoon_frag:EX,points_vert:qX,points_frag:FX,shadow_vert:DX,shadow_frag:OX,sprite_vert:RX,sprite_frag:kX},E0={common:{diffuse:{value:new y0(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new j0},alphaMap:{value:null},alphaMapTransform:{value:new j0},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new j0}},envmap:{envMap:{value:null},envMapRotation:{value:new j0},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:0.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new j0}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new j0}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new j0},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new j0},normalScale:{value:new p0(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new j0},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new j0}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new j0}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new j0}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:0.00025},fogNear:{value:1},fogFar:{value:2000},fogColor:{value:new y0(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new v},probesMax:{value:new v},probesResolution:{value:new v}},points:{diffuse:{value:new y0(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new j0},alphaTest:{value:0},uvTransform:{value:new j0}},sprite:{diffuse:{value:new y0(16777215)},opacity:{value:1},center:{value:new p0(0.5,0.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new j0},alphaMap:{value:null},alphaMapTransform:{value:new j0},alphaTest:{value:0}}},W9={basic:{uniforms:CJ([E0.common,E0.specularmap,E0.envmap,E0.aomap,E0.lightmap,E0.fog]),vertexShader:x0.meshbasic_vert,fragmentShader:x0.meshbasic_frag},lambert:{uniforms:CJ([E0.common,E0.specularmap,E0.envmap,E0.aomap,E0.lightmap,E0.emissivemap,E0.bumpmap,E0.normalmap,E0.displacementmap,E0.fog,E0.lights,{emissive:{value:new y0(0)},envMapIntensity:{value:1}}]),vertexShader:x0.meshlambert_vert,fragmentShader:x0.meshlambert_frag},phong:{uniforms:CJ([E0.common,E0.specularmap,E0.envmap,E0.aomap,E0.lightmap,E0.emissivemap,E0.bumpmap,E0.normalmap,E0.displacementmap,E0.fog,E0.lights,{emissive:{value:new y0(0)},specular:{value:new y0(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:x0.meshphong_vert,fragmentShader:x0.meshphong_frag},standard:{uniforms:CJ([E0.common,E0.envmap,E0.aomap,E0.lightmap,E0.emissivemap,E0.bumpmap,E0.normalmap,E0.displacementmap,E0.roughnessmap,E0.metalnessmap,E0.fog,E0.lights,{emissive:{value:new y0(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:x0.meshphysical_vert,fragmentShader:x0.meshphysical_frag},toon:{uniforms:CJ([E0.common,E0.aomap,E0.lightmap,E0.emissivemap,E0.bumpmap,E0.normalmap,E0.displacementmap,E0.gradientmap,E0.fog,E0.lights,{emissive:{value:new y0(0)}}]),vertexShader:x0.meshtoon_vert,fragmentShader:x0.meshtoon_frag},matcap:{uniforms:CJ([E0.common,E0.bumpmap,E0.normalmap,E0.displacementmap,E0.fog,{matcap:{value:null}}]),vertexShader:x0.meshmatcap_vert,fragmentShader:x0.meshmatcap_frag},points:{uniforms:CJ([E0.points,E0.fog]),vertexShader:x0.points_vert,fragmentShader:x0.points_frag},dashed:{uniforms:CJ([E0.common,E0.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:x0.linedashed_vert,fragmentShader:x0.linedashed_frag},depth:{uniforms:CJ([E0.common,E0.displacementmap]),vertexShader:x0.depth_vert,fragmentShader:x0.depth_frag},normal:{uniforms:CJ([E0.common,E0.bumpmap,E0.normalmap,E0.displacementmap,{opacity:{value:1}}]),vertexShader:x0.meshnormal_vert,fragmentShader:x0.meshnormal_frag},sprite:{uniforms:CJ([E0.sprite,E0.fog]),vertexShader:x0.sprite_vert,fragmentShader:x0.sprite_frag},background:{uniforms:{uvTransform:{value:new j0},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:x0.background_vert,fragmentShader:x0.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new j0}},vertexShader:x0.backgroundCube_vert,fragmentShader:x0.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:x0.cube_vert,fragmentShader:x0.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:x0.equirect_vert,fragmentShader:x0.equirect_frag},distance:{uniforms:CJ([E0.common,E0.displacementmap,{referencePosition:{value:new v},nearDistance:{value:1},farDistance:{value:1000}}]),vertexShader:x0.distance_vert,fragmentShader:x0.distance_frag},shadow:{uniforms:CJ([E0.lights,E0.fog,{color:{value:new y0(0)},opacity:{value:1}}]),vertexShader:x0.shadow_vert,fragmentShader:x0.shadow_frag}};W9.physical={uniforms:CJ([W9.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new j0},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new j0},clearcoatNormalScale:{value:new p0(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new j0},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new j0},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new j0},sheen:{value:0},sheenColor:{value:new y0(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new j0},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new j0},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new j0},transmissionSamplerSize:{value:new p0},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new j0},attenuationDistance:{value:0},attenuationColor:{value:new y0(0)},specularColor:{value:new y0(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new j0},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new j0},anisotropyVector:{value:new p0},anisotropyMap:{value:null},anisotropyMapTransform:{value:new j0}}]),vertexShader:x0.meshphysical_vert,fragmentShader:x0.meshphysical_frag};var W6={r:0,b:0,g:0},MX=new HJ,PW=new j0;PW.set(-1,0,0,0,1,0,0,0,1);function LX(J,Q,$,Z,W,K){let H=new y0(0),Y=W===!0?0:1,X,U,q=null,F=0,G=null;function D(C){let _=C.isScene===!0?C.background:null;if(_&&_.isTexture){let L=C.backgroundBlurriness>0;_=Q.get(_,L)}return _}function M(C){let _=!1,L=D(C);if(L===null)E(H,Y);else if(L&&L.isColor)E(L,1),_=!0;let A=J.xr.getEnvironmentBlendMode();if(A==="additive")$.buffers.color.setClear(0,0,0,1,K);else if(A==="alpha-blend")$.buffers.color.setClear(0,0,0,0,K);if(J.autoClear||_)$.buffers.depth.setTest(!0),$.buffers.depth.setMask(!0),$.buffers.color.setMask(!0),J.clear(J.autoClearColor,J.autoClearDepth,J.autoClearStencil)}function z(C,_){let L=D(_);if(L&&(L.isCubeTexture||L.mapping===f8)){if(U===void 0)U=new RJ(new j9(1,1,1),new dJ({name:"BackgroundCubeMaterial",uniforms:i9(W9.backgroundCube.uniforms),vertexShader:W9.backgroundCube.vertexShader,fragmentShader:W9.backgroundCube.fragmentShader,side:_J,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),U.geometry.deleteAttribute("normal"),U.geometry.deleteAttribute("uv"),U.onBeforeRender=function(A,I,P){this.matrixWorld.copyPosition(P.matrixWorld)},Object.defineProperty(U.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),Z.update(U);if(U.material.uniforms.envMap.value=L,U.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,U.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,U.material.uniforms.backgroundRotation.value.setFromMatrix4(MX.makeRotationFromEuler(_.backgroundRotation)).transpose(),L.isCubeTexture&&L.isRenderTargetTexture===!1)U.material.uniforms.backgroundRotation.value.premultiply(PW);if(U.material.toneMapped=l0.getTransfer(L.colorSpace)!==$J,q!==L||F!==L.version||G!==J.toneMapping)U.material.needsUpdate=!0,q=L,F=L.version,G=J.toneMapping;U.layers.enableAll(),C.unshift(U,U.geometry,U.material,0,0,null)}else if(L&&L.isTexture){if(X===void 0)X=new RJ(new y9(2,2),new dJ({name:"BackgroundMaterial",uniforms:i9(W9.background.uniforms),vertexShader:W9.background.vertexShader,fragmentShader:W9.background.fragmentShader,side:C9,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),X.geometry.deleteAttribute("normal"),Object.defineProperty(X.material,"map",{get:function(){return this.uniforms.t2D.value}}),Z.update(X);if(X.material.uniforms.t2D.value=L,X.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,X.material.toneMapped=l0.getTransfer(L.colorSpace)!==$J,L.matrixAutoUpdate===!0)L.updateMatrix();if(X.material.uniforms.uvTransform.value.copy(L.matrix),q!==L||F!==L.version||G!==J.toneMapping)X.material.needsUpdate=!0,q=L,F=L.version,G=J.toneMapping;X.layers.enableAll(),C.unshift(X,X.geometry,X.material,0,0,null)}}function E(C,_){C.getRGB(W6,mQ(J)),$.buffers.color.setClear(W6.r,W6.g,W6.b,_,K)}function N(){if(U!==void 0)U.geometry.dispose(),U.material.dispose(),U=void 0;if(X!==void 0)X.geometry.dispose(),X.material.dispose(),X=void 0}return{getClearColor:function(){return H},setClearColor:function(C,_=1){H.set(C),Y=_,E(H,Y)},getClearAlpha:function(){return Y},setClearAlpha:function(C){Y=C,E(H,Y)},render:M,addToRenderList:z,dispose:N}}function VX(J,Q){let $=J.getParameter(J.MAX_VERTEX_ATTRIBS),Z={},W=G(null),K=W,H=!1;function Y(w,h,s,g,u){let c=!1,f=F(w,g,s,h);if(K!==f)K=f,U(K.object);if(c=D(w,g,s,u),c)M(w,g,s,u);if(u!==null)Q.update(u,J.ELEMENT_ARRAY_BUFFER);if(c||H){if(H=!1,L(w,h,s,g),u!==null)J.bindBuffer(J.ELEMENT_ARRAY_BUFFER,Q.get(u).buffer)}}function X(){return J.createVertexArray()}function U(w){return J.bindVertexArray(w)}function q(w){return J.deleteVertexArray(w)}function F(w,h,s,g){let u=g.wireframe===!0,c=Z[h.id];if(c===void 0)c={},Z[h.id]=c;let f=w.isInstancedMesh===!0?w.id:0,t=c[f];if(t===void 0)t={},c[f]=t;let Q0=t[s.id];if(Q0===void 0)Q0={},t[s.id]=Q0;let H0=Q0[u];if(H0===void 0)H0=G(X()),Q0[u]=H0;return H0}function G(w){let h=[],s=[],g=[];for(let u=0;u<$;u++)h[u]=0,s[u]=0,g[u]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:h,enabledAttributes:s,attributeDivisors:g,object:w,attributes:{},index:null}}function D(w,h,s,g){let u=K.attributes,c=h.attributes,f=0,t=s.getAttributes();for(let Q0 in t)if(t[Q0].location>=0){let L0=u[Q0],M0=c[Q0];if(M0===void 0){if(Q0==="instanceMatrix"&&w.instanceMatrix)M0=w.instanceMatrix;if(Q0==="instanceColor"&&w.instanceColor)M0=w.instanceColor}if(L0===void 0)return!0;if(L0.attribute!==M0)return!0;if(M0&&L0.data!==M0.data)return!0;f++}if(K.attributesNum!==f)return!0;if(K.index!==g)return!0;return!1}function M(w,h,s,g){let u={},c=h.attributes,f=0,t=s.getAttributes();for(let Q0 in t)if(t[Q0].location>=0){let L0=c[Q0];if(L0===void 0){if(Q0==="instanceMatrix"&&w.instanceMatrix)L0=w.instanceMatrix;if(Q0==="instanceColor"&&w.instanceColor)L0=w.instanceColor}let M0={};if(M0.attribute=L0,L0&&L0.data)M0.data=L0.data;u[Q0]=M0,f++}K.attributes=u,K.attributesNum=f,K.index=g}function z(){let w=K.newAttributes;for(let h=0,s=w.length;h<s;h++)w[h]=0}function E(w){N(w,0)}function N(w,h){let{newAttributes:s,enabledAttributes:g,attributeDivisors:u}=K;if(s[w]=1,g[w]===0)J.enableVertexAttribArray(w),g[w]=1;if(u[w]!==h)J.vertexAttribDivisor(w,h),u[w]=h}function C(){let{newAttributes:w,enabledAttributes:h}=K;for(let s=0,g=h.length;s<g;s++)if(h[s]!==w[s])J.disableVertexAttribArray(s),h[s]=0}function _(w,h,s,g,u,c,f){if(f===!0)J.vertexAttribIPointer(w,h,s,u,c);else J.vertexAttribPointer(w,h,s,g,u,c)}function L(w,h,s,g){z();let u=g.attributes,c=s.getAttributes(),f=h.defaultAttributeValues;for(let t in c){let Q0=c[t];if(Q0.location>=0){let H0=u[t];if(H0===void 0){if(t==="instanceMatrix"&&w.instanceMatrix)H0=w.instanceMatrix;if(t==="instanceColor"&&w.instanceColor)H0=w.instanceColor}if(H0!==void 0){let{normalized:L0,itemSize:M0}=H0,YJ=Q.get(H0);if(YJ===void 0)continue;let{buffer:o0,type:o,bytesPerElement:W0}=YJ,r=o===J.INT||o===J.UNSIGNED_INT||H0.gpuType===i6;if(H0.isInterleavedBufferAttribute){let n=H0.data,Y0=n.stride,S0=H0.offset;if(n.isInstancedInterleavedBuffer){for(let T0=0;T0<Q0.locationSize;T0++)N(Q0.location+T0,n.meshPerAttribute);if(w.isInstancedMesh!==!0&&g._maxInstanceCount===void 0)g._maxInstanceCount=n.meshPerAttribute*n.count}else for(let T0=0;T0<Q0.locationSize;T0++)E(Q0.location+T0);J.bindBuffer(J.ARRAY_BUFFER,o0);for(let T0=0;T0<Q0.locationSize;T0++)_(Q0.location+T0,M0/Q0.locationSize,o,L0,Y0*W0,(S0+M0/Q0.locationSize*T0)*W0,r)}else{if(H0.isInstancedBufferAttribute){for(let n=0;n<Q0.locationSize;n++)N(Q0.location+n,H0.meshPerAttribute);if(w.isInstancedMesh!==!0&&g._maxInstanceCount===void 0)g._maxInstanceCount=H0.meshPerAttribute*H0.count}else for(let n=0;n<Q0.locationSize;n++)E(Q0.location+n);J.bindBuffer(J.ARRAY_BUFFER,o0);for(let n=0;n<Q0.locationSize;n++)_(Q0.location+n,M0/Q0.locationSize,o,L0,M0*W0,M0/Q0.locationSize*n*W0,r)}}else if(f!==void 0){let L0=f[t];if(L0!==void 0)switch(L0.length){case 2:J.vertexAttrib2fv(Q0.location,L0);break;case 3:J.vertexAttrib3fv(Q0.location,L0);break;case 4:J.vertexAttrib4fv(Q0.location,L0);break;default:J.vertexAttrib1fv(Q0.location,L0)}}}}C()}function A(){V();for(let w in Z){let h=Z[w];for(let s in h){let g=h[s];for(let u in g){let c=g[u];for(let f in c)q(c[f].object),delete c[f];delete g[u]}}delete Z[w]}}function I(w){if(Z[w.id]===void 0)return;let h=Z[w.id];for(let s in h){let g=h[s];for(let u in g){let c=g[u];for(let f in c)q(c[f].object),delete c[f];delete g[u]}}delete Z[w.id]}function P(w){for(let h in Z){let s=Z[h];for(let g in s){let u=s[g];if(u[w.id]===void 0)continue;let c=u[w.id];for(let f in c)q(c[f].object),delete c[f];delete u[w.id]}}}function O(w){for(let h in Z){let s=Z[h],g=w.isInstancedMesh===!0?w.id:0,u=s[g];if(u===void 0)continue;for(let c in u){let f=u[c];for(let t in f)q(f[t].object),delete f[t];delete u[c]}if(delete s[g],Object.keys(s).length===0)delete Z[h]}}function V(){if(p(),H=!0,K===W)return;K=W,U(K.object)}function p(){W.geometry=null,W.program=null,W.wireframe=!1}return{setup:Y,reset:V,resetDefaultState:p,dispose:A,releaseStatesOfGeometry:I,releaseStatesOfObject:O,releaseStatesOfProgram:P,initAttributes:z,enableAttribute:E,disableUnusedAttributes:C}}function BX(J,Q,$){let Z;function W(X){Z=X}function K(X,U){J.drawArrays(Z,X,U),$.update(U,Z,1)}function H(X,U,q){if(q===0)return;J.drawArraysInstanced(Z,X,U,q),$.update(U,Z,q)}function Y(X,U,q){if(q===0)return;Q.get("WEBGL_multi_draw").multiDrawArraysWEBGL(Z,X,0,U,0,q);let G=0;for(let D=0;D<q;D++)G+=U[D];$.update(G,Z,1)}this.setMode=W,this.render=K,this.renderInstances=H,this.renderMultiDraw=Y}function zX(J,Q,$,Z){let W;function K(){if(W!==void 0)return W;if(Q.has("EXT_texture_filter_anisotropic")===!0){let P=Q.get("EXT_texture_filter_anisotropic");W=J.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else W=0;return W}function H(P){if(P!==Q9&&Z.convert(P)!==J.getParameter(J.IMPLEMENTATION_COLOR_READ_FORMAT))return!1;return!0}function Y(P){let O=P===D9&&(Q.has("EXT_color_buffer_half_float")||Q.has("EXT_color_buffer_float"));if(P!==oJ&&Z.convert(P)!==J.getParameter(J.IMPLEMENTATION_COLOR_READ_TYPE)&&P!==F9&&!O)return!1;return!0}function X(P){if(P==="highp"){if(J.getShaderPrecisionFormat(J.VERTEX_SHADER,J.HIGH_FLOAT).precision>0&&J.getShaderPrecisionFormat(J.FRAGMENT_SHADER,J.HIGH_FLOAT).precision>0)return"highp";P="mediump"}if(P==="mediump"){if(J.getShaderPrecisionFormat(J.VERTEX_SHADER,J.MEDIUM_FLOAT).precision>0&&J.getShaderPrecisionFormat(J.FRAGMENT_SHADER,J.MEDIUM_FLOAT).precision>0)return"mediump"}return"lowp"}let U=$.precision!==void 0?$.precision:"highp",q=X(U);if(q!==U)_0("WebGLRenderer:",U,"not supported, using",q,"instead."),U=q;let F=$.logarithmicDepthBuffer===!0,G=$.reversedDepthBuffer===!0&&Q.has("EXT_clip_control");if($.reversedDepthBuffer===!0&&G===!1)_0("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let D=J.getParameter(J.MAX_TEXTURE_IMAGE_UNITS),M=J.getParameter(J.MAX_VERTEX_TEXTURE_IMAGE_UNITS),z=J.getParameter(J.MAX_TEXTURE_SIZE),E=J.getParameter(J.MAX_CUBE_MAP_TEXTURE_SIZE),N=J.getParameter(J.MAX_VERTEX_ATTRIBS),C=J.getParameter(J.MAX_VERTEX_UNIFORM_VECTORS),_=J.getParameter(J.MAX_VARYING_VECTORS),L=J.getParameter(J.MAX_FRAGMENT_UNIFORM_VECTORS),A=J.getParameter(J.MAX_SAMPLES),I=J.getParameter(J.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:K,getMaxPrecision:X,textureFormatReadable:H,textureTypeReadable:Y,precision:U,logarithmicDepthBuffer:F,reversedDepthBuffer:G,maxTextures:D,maxVertexTextures:M,maxTextureSize:z,maxCubemapSize:E,maxAttributes:N,maxVertexUniforms:C,maxVaryings:_,maxFragmentUniforms:L,maxSamples:A,samples:I}}function IX(J){let Q=this,$=null,Z=0,W=!1,K=!1,H=new sJ,Y=new j0,X={value:null,needsUpdate:!1};this.uniform=X,this.numPlanes=0,this.numIntersection=0,this.init=function(F,G){let D=F.length!==0||G||Z!==0||W;return W=G,Z=F.length,D},this.beginShadows=function(){K=!0,q(null)},this.endShadows=function(){K=!1},this.setGlobalState=function(F,G){$=q(F,G,0)},this.setState=function(F,G,D){let{clippingPlanes:M,clipIntersection:z,clipShadows:E}=F,N=J.get(F);if(!W||M===null||M.length===0||K&&!E)if(K)q(null);else U();else{let C=K?0:Z,_=C*4,L=N.clippingState||null;X.value=L,L=q(M,G,_,D);for(let A=0;A!==_;++A)L[A]=$[A];N.clippingState=L,this.numIntersection=z?this.numPlanes:0,this.numPlanes+=C}};function U(){if(X.value!==$)X.value=$,X.needsUpdate=Z>0;Q.numPlanes=Z,Q.numIntersection=0}function q(F,G,D,M){let z=F!==null?F.length:0,E=null;if(z!==0){if(E=X.value,M!==!0||E===null){let N=D+z*4,C=G.matrixWorldInverse;if(Y.getNormalMatrix(C),E===null||E.length<N)E=new Float32Array(N);for(let _=0,L=D;_!==z;++_,L+=4)H.copy(F[_]).applyMatrix4(C,Y),H.normal.toArray(E,L),E[L+3]=H.constant}X.value=E,X.needsUpdate=!0}return Q.numPlanes=z,Q.numIntersection=0,E}}var v9=4,HW=[0.125,0.215,0.35,0.446,0.526,0.582],J8=20,AX=256,a8=new e9,YW=new y0,Y$=null,X$=0,U$=0,G$=!1,wX=new v;class q${constructor(J){this._renderer=J,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(J,Q=0,$=0.1,Z=100,W={}){let{size:K=256,position:H=wX}=W;Y$=this._renderer.getRenderTarget(),X$=this._renderer.getActiveCubeFace(),U$=this._renderer.getActiveMipmapLevel(),G$=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(K);let Y=this._allocateTargets();if(Y.depthBuffer=!0,this._sceneToCubeUV(J,$,Z,Y,H),Q>0)this._blur(Y,0,0,Q);return this._applyPMREM(Y),this._cleanup(Y),Y}fromEquirectangular(J,Q=null){return this._fromTexture(J,Q)}fromCubemap(J,Q=null){return this._fromTexture(J,Q)}compileCubemapShader(){if(this._cubemapMaterial===null)this._cubemapMaterial=GW(),this._compileMaterial(this._cubemapMaterial)}compileEquirectangularShader(){if(this._equirectMaterial===null)this._equirectMaterial=UW(),this._compileMaterial(this._equirectMaterial)}dispose(){if(this._dispose(),this._cubemapMaterial!==null)this._cubemapMaterial.dispose();if(this._equirectMaterial!==null)this._equirectMaterial.dispose();if(this._backgroundBox!==null)this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose()}_setSize(J){this._lodMax=Math.floor(Math.log2(J)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){if(this._blurMaterial!==null)this._blurMaterial.dispose();if(this._ggxMaterial!==null)this._ggxMaterial.dispose();if(this._pingPongRenderTarget!==null)this._pingPongRenderTarget.dispose();for(let J=0;J<this._lodMeshes.length;J++)this._lodMeshes[J].geometry.dispose()}_cleanup(J){this._renderer.setRenderTarget(Y$,X$,U$),this._renderer.xr.enabled=G$,J.scissorTest=!1,B8(J,0,0,J.width,J.height)}_fromTexture(J,Q){if(J.mapping===M8||J.mapping===m9)this._setSize(J.image.length===0?16:J.image[0].width||J.image[0].image.width);else this._setSize(J.image.width/4);Y$=this._renderer.getRenderTarget(),X$=this._renderer.getActiveCubeFace(),U$=this._renderer.getActiveMipmapLevel(),G$=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let $=Q||this._allocateTargets();return this._textureToCubeUV(J,$),this._applyPMREM($),this._cleanup($),$}_allocateTargets(){let J=3*Math.max(this._cubeSize,112),Q=4*this._cubeSize,$={magFilter:jJ,minFilter:jJ,generateMipmaps:!1,type:D9,format:Q9,colorSpace:SQ,depthBuffer:!1},Z=XW(J,Q,$);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==J||this._pingPongRenderTarget.height!==Q){if(this._pingPongRenderTarget!==null)this._dispose();this._pingPongRenderTarget=XW(J,Q,$);let{_lodMax:W}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=_X(W)),this._blurMaterial=PX(W,J,Q),this._ggxMaterial=CX(W,J,Q)}return Z}_compileMaterial(J){let Q=new RJ(new BJ,J);this._renderer.compile(Q,a8)}_sceneToCubeUV(J,Q,$,Z,W){let Y=new VJ(90,1,Q,$),X=[1,-1,1,1,1,1],U=[1,1,1,-1,-1,-1],q=this._renderer,F=q.autoClear,G=q.toneMapping;if(q.getClearColor(YW),q.toneMapping=iJ,q.autoClear=!1,q.state.buffers.depth.getReversed())q.setRenderTarget(Z),q.clearDepth(),q.setRenderTarget(null);if(this._backgroundBox===null)this._backgroundBox=new RJ(new j9,new aJ({name:"PMREM.Background",side:_J,depthWrite:!1,depthTest:!1}));let M=this._backgroundBox,z=M.material,E=!1,N=J.background;if(N){if(N.isColor)z.color.copy(N),J.background=null,E=!0}else z.color.copy(YW),E=!0;for(let C=0;C<6;C++){let _=C%3;if(_===0)Y.up.set(0,X[C],0),Y.position.set(W.x,W.y,W.z),Y.lookAt(W.x+U[C],W.y,W.z);else if(_===1)Y.up.set(0,0,X[C]),Y.position.set(W.x,W.y,W.z),Y.lookAt(W.x,W.y+U[C],W.z);else Y.up.set(0,X[C],0),Y.position.set(W.x,W.y,W.z),Y.lookAt(W.x,W.y,W.z+U[C]);let L=this._cubeSize;if(B8(Z,_*L,C>2?L:0,L,L),q.setRenderTarget(Z),E)q.render(M,Y);q.render(J,Y)}q.toneMapping=G,q.autoClear=F,J.background=N}_textureToCubeUV(J,Q){let $=this._renderer,Z=J.mapping===M8||J.mapping===m9;if(Z){if(this._cubemapMaterial===null)this._cubemapMaterial=GW();this._cubemapMaterial.uniforms.flipEnvMap.value=J.isRenderTargetTexture===!1?-1:1}else if(this._equirectMaterial===null)this._equirectMaterial=UW();let W=Z?this._cubemapMaterial:this._equirectMaterial,K=this._lodMeshes[0];K.material=W;let H=W.uniforms;H.envMap.value=J;let Y=this._cubeSize;B8(Q,0,0,3*Y,2*Y),$.setRenderTarget(Q),$.render(K,a8)}_applyPMREM(J){let Q=this._renderer,$=Q.autoClear;Q.autoClear=!1;let Z=this._lodMeshes.length;for(let W=1;W<Z;W++)this._applyGGXFilter(J,W-1,W);Q.autoClear=$}_applyGGXFilter(J,Q,$){let Z=this._renderer,W=this._pingPongRenderTarget,K=this._ggxMaterial,H=this._lodMeshes[$];H.material=K;let Y=K.uniforms,X=$/(this._lodMeshes.length-1),U=Q/(this._lodMeshes.length-1),q=Math.sqrt(X*X-U*U),F=0+X*1.25,G=q*F,{_lodMax:D}=this,M=this._sizeLods[$],z=3*M*($>D-v9?$-D+v9:0),E=4*(this._cubeSize-M);Y.envMap.value=J.texture,Y.roughness.value=G,Y.mipInt.value=D-Q,B8(W,z,E,3*M,2*M),Z.setRenderTarget(W),Z.render(H,a8),Y.envMap.value=W.texture,Y.roughness.value=0,Y.mipInt.value=D-$,B8(J,z,E,3*M,2*M),Z.setRenderTarget(J),Z.render(H,a8)}_blur(J,Q,$,Z,W){let K=this._pingPongRenderTarget;this._halfBlur(J,K,Q,$,Z,"latitudinal",W),this._halfBlur(K,J,$,$,Z,"longitudinal",W)}_halfBlur(J,Q,$,Z,W,K,H){let Y=this._renderer,X=this._blurMaterial;if(K!=="latitudinal"&&K!=="longitudinal")P0("blur direction must be either latitudinal or longitudinal!");let U=3,q=this._lodMeshes[Z];q.material=X;let F=X.uniforms,G=this._sizeLods[$]-1,D=isFinite(W)?Math.PI/(2*G):2*Math.PI/(2*J8-1),M=W/D,z=isFinite(W)?1+Math.floor(U*M):J8;if(z>J8)_0(`sigmaRadians, ${W}, is too large and will clip, as it requested ${z} samples when the maximum is set to ${J8}`);let E=[],N=0;for(let I=0;I<J8;++I){let P=I/M,O=Math.exp(-P*P/2);if(E.push(O),I===0)N+=O;else if(I<z)N+=2*O}for(let I=0;I<E.length;I++)E[I]=E[I]/N;if(F.envMap.value=J.texture,F.samples.value=z,F.weights.value=E,F.latitudinal.value=K==="latitudinal",H)F.poleAxis.value=H;let{_lodMax:C}=this;F.dTheta.value=D,F.mipInt.value=C-$;let _=this._sizeLods[Z],L=3*_*(Z>C-v9?Z-C+v9:0),A=4*(this._cubeSize-_);B8(Q,L,A,3*_,2*_),Y.setRenderTarget(Q),Y.render(q,a8)}}function _X(J){let Q=[],$=[],Z=[],W=J,K=J-v9+1+HW.length;for(let H=0;H<K;H++){let Y=Math.pow(2,W);Q.push(Y);let X=1/Y;if(H>J-v9)X=HW[H-J+v9-1];else if(H===0)X=0;$.push(X);let U=1/(Y-2),q=-U,F=1+U,G=[q,q,F,q,F,F,q,q,F,F,q,F],D=6,M=6,z=3,E=2,N=1,C=new Float32Array(z*M*D),_=new Float32Array(E*M*D),L=new Float32Array(N*M*D);for(let I=0;I<D;I++){let P=I%3*2/3-1,O=I>2?0:-1,V=[P,O,0,P+0.6666666666666666,O,0,P+0.6666666666666666,O+1,0,P,O,0,P+0.6666666666666666,O+1,0,P,O+1,0];C.set(V,z*M*I),_.set(G,E*M*I);let p=[I,I,I,I,I,I];L.set(p,N*M*I)}let A=new BJ;if(A.setAttribute("position",new pJ(C,z)),A.setAttribute("uv",new pJ(_,E)),A.setAttribute("faceIndex",new pJ(L,N)),Z.push(new RJ(A,null)),W>v9)W--}return{lodMeshes:Z,sizeLods:Q,sigmas:$}}function XW(J,Q,$){let Z=new mJ(J,Q,$);return Z.texture.mapping=f8,Z.texture.name="PMREM.cubeUv",Z.scissorTest=!0,Z}function B8(J,Q,$,Z,W){J.viewport.set(Q,$,Z,W),J.scissor.set(Q,$,Z,W)}function CX(J,Q,$){return new dJ({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:AX,CUBEUV_TEXEL_WIDTH:1/Q,CUBEUV_TEXEL_HEIGHT:1/$,CUBEUV_MAX_MIP:`${J}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:H6(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:J9,depthTest:!1,depthWrite:!1})}function PX(J,Q,$){let Z=new Float32Array(J8),W=new v(0,1,0);return new dJ({name:"SphericalGaussianBlur",defines:{n:J8,CUBEUV_TEXEL_WIDTH:1/Q,CUBEUV_TEXEL_HEIGHT:1/$,CUBEUV_MAX_MIP:`${J}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:Z},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:W}},vertexShader:H6(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:J9,depthTest:!1,depthWrite:!1})}function UW(){return new dJ({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:H6(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:J9,depthTest:!1,depthWrite:!1})}function GW(){return new dJ({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:H6(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:J9,depthTest:!1,depthWrite:!1})}function H6(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}class O$ extends mJ{constructor(J=1,Q={}){super(J,J,Q);this.isWebGLCubeRenderTarget=!0;let $={width:J,height:J,depth:1},Z=[$,$,$,$,$,$];this.texture=new u7(Z),this._setTextureOptions(Q),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(J,Q){this.texture.type=Q.type,this.texture.colorSpace=Q.colorSpace,this.texture.generateMipmaps=Q.generateMipmaps,this.texture.minFilter=Q.minFilter,this.texture.magFilter=Q.magFilter;let $={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},Z=new j9(5,5,5),W=new dJ({name:"CubemapFromEquirect",uniforms:i9($.uniforms),vertexShader:$.vertexShader,fragmentShader:$.fragmentShader,side:_J,blending:J9});W.uniforms.tEquirect.value=Q;let K=new RJ(Z,W),H=Q.minFilter;if(Q.minFilter===d9)Q.minFilter=jJ;return new Q$(1,10,this).update(J,K),Q.minFilter=H,K.geometry.dispose(),K.material.dispose(),this}clear(J,Q=!0,$=!0,Z=!0){let W=J.getRenderTarget();for(let K=0;K<6;K++)J.setRenderTarget(this,K),J.clear(Q,$,Z);J.setRenderTarget(W)}}function TX(J){let Q=new WeakMap,$=new WeakMap,Z=null;function W(G,D=!1){if(G===null||G===void 0)return null;if(D)return H(G);return K(G)}function K(G){if(G&&G.isTexture){let D=G.mapping;if(D===_7||D===C7)if(Q.has(G)){let M=Q.get(G).texture;return Y(M,G.mapping)}else{let M=G.image;if(M&&M.height>0){let z=new O$(M.height);return z.fromEquirectangularTexture(J,G),Q.set(G,z),G.addEventListener("dispose",U),Y(z.texture,G.mapping)}else return null}}return G}function H(G){if(G&&G.isTexture){let D=G.mapping,M=D===_7||D===C7,z=D===M8||D===m9;if(M||z){let E=$.get(G),N=E!==void 0?E.texture.pmremVersion:0;if(G.isRenderTargetTexture&&G.pmremVersion!==N){if(Z===null)Z=new q$(J);return E=M?Z.fromEquirectangular(G,E):Z.fromCubemap(G,E),E.texture.pmremVersion=G.pmremVersion,$.set(G,E),E.texture}else if(E!==void 0)return E.texture;else{let C=G.image;if(M&&C&&C.height>0||z&&C&&X(C)){if(Z===null)Z=new q$(J);return E=M?Z.fromEquirectangular(G):Z.fromCubemap(G),E.texture.pmremVersion=G.pmremVersion,$.set(G,E),G.addEventListener("dispose",q),E.texture}else return null}}}return G}function Y(G,D){if(D===_7)G.mapping=M8;else if(D===C7)G.mapping=m9;return G}function X(G){let D=0,M=6;for(let z=0;z<M;z++)if(G[z]!==void 0)D++;return D===M}function U(G){let D=G.target;D.removeEventListener("dispose",U);let M=Q.get(D);if(M!==void 0)Q.delete(D),M.dispose()}function q(G){let D=G.target;D.removeEventListener("dispose",q);let M=$.get(D);if(M!==void 0)$.delete(D),M.dispose()}function F(){if(Q=new WeakMap,$=new WeakMap,Z!==null)Z.dispose(),Z=null}return{get:W,dispose:F}}function SX(J){let Q={};function $(Z){if(Q[Z]!==void 0)return Q[Z];let W=J.getExtension(Z);return Q[Z]=W,W}return{has:function(Z){return $(Z)!==null},init:function(){$("EXT_color_buffer_float"),$("WEBGL_clip_cull_distance"),$("OES_texture_float_linear"),$("EXT_color_buffer_half_float"),$("WEBGL_multisampled_render_to_texture"),$("WEBGL_render_shared_exponent")},get:function(Z){let W=$(Z);if(W===null)p9("WebGLRenderer: "+Z+" extension not supported.");return W}}}function jX(J,Q,$,Z){let W={},K=new WeakMap;function H(F){let G=F.target;if(G.index!==null)Q.remove(G.index);for(let M in G.attributes)Q.remove(G.attributes[M]);G.removeEventListener("dispose",H),delete W[G.id];let D=K.get(G);if(D)Q.remove(D),K.delete(G);if(Z.releaseStatesOfGeometry(G),G.isInstancedBufferGeometry===!0)delete G._maxInstanceCount;$.memory.geometries--}function Y(F,G){if(W[G.id]===!0)return G;return G.addEventListener("dispose",H),W[G.id]=!0,$.memory.geometries++,G}function X(F){let G=F.attributes;for(let D in G)Q.update(G[D],J.ARRAY_BUFFER)}function U(F){let G=[],D=F.index,M=F.attributes.position,z=0;if(M===void 0)return;if(D!==null){let C=D.array;z=D.version;for(let _=0,L=C.length;_<L;_+=3){let A=C[_+0],I=C[_+1],P=C[_+2];G.push(A,I,I,P,P,A)}}else{let C=M.array;z=M.version;for(let _=0,L=C.length/3-1;_<L;_+=3){let A=_+0,I=_+1,P=_+2;G.push(A,I,I,P,P,A)}}let E=new(M.count>=65535?d7:m7)(G,1);E.version=z;let N=K.get(F);if(N)Q.remove(N);K.set(F,E)}function q(F){let G=K.get(F);if(G){let D=F.index;if(D!==null){if(G.version<D.version)U(F)}}else U(F);return K.get(F)}return{get:Y,update:X,getWireframeAttribute:q}}function yX(J,Q,$){let Z;function W(F){Z=F}let K,H;function Y(F){K=F.type,H=F.bytesPerElement}function X(F,G){J.drawElements(Z,G,K,F*H),$.update(G,Z,1)}function U(F,G,D){if(D===0)return;J.drawElementsInstanced(Z,G,K,F*H,D),$.update(G,Z,D)}function q(F,G,D){if(D===0)return;Q.get("WEBGL_multi_draw").multiDrawElementsWEBGL(Z,G,0,K,F,0,D);let z=0;for(let E=0;E<D;E++)z+=G[E];$.update(z,Z,1)}this.setMode=W,this.setIndex=Y,this.render=X,this.renderInstances=U,this.renderMultiDraw=q}function vX(J){let Q={geometries:0,textures:0},$={frame:0,calls:0,triangles:0,points:0,lines:0};function Z(K,H,Y){switch($.calls++,H){case J.TRIANGLES:$.triangles+=Y*(K/3);break;case J.LINES:$.lines+=Y*(K/2);break;case J.LINE_STRIP:$.lines+=Y*(K-1);break;case J.LINE_LOOP:$.lines+=Y*K;break;case J.POINTS:$.points+=Y*K;break;default:P0("WebGLInfo: Unknown draw mode:",H);break}}function W(){$.calls=0,$.triangles=0,$.points=0,$.lines=0}return{memory:Q,render:$,programs:null,autoReset:!0,reset:W,update:Z}}function fX(J,Q,$){let Z=new WeakMap,W=new GJ;function K(H,Y,X){let U=H.morphTargetInfluences,q=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,F=q!==void 0?q.length:0,G=Z.get(Y);if(G===void 0||G.count!==F){let V=function(){P.dispose(),Z.delete(Y),Y.removeEventListener("dispose",V)};if(G!==void 0)G.texture.dispose();let D=Y.morphAttributes.position!==void 0,M=Y.morphAttributes.normal!==void 0,z=Y.morphAttributes.color!==void 0,E=Y.morphAttributes.position||[],N=Y.morphAttributes.normal||[],C=Y.morphAttributes.color||[],_=0;if(D===!0)_=1;if(M===!0)_=2;if(z===!0)_=3;let L=Y.attributes.position.count*_,A=1;if(L>Q.maxTextureSize)A=Math.ceil(L/Q.maxTextureSize),L=Q.maxTextureSize;let I=new Float32Array(L*A*4*F),P=new g7(I,L,A,F);P.type=F9,P.needsUpdate=!0;let O=_*4;for(let p=0;p<F;p++){let w=E[p],h=N[p],s=C[p],g=L*A*4*p;for(let u=0;u<w.count;u++){let c=u*O;if(D===!0)W.fromBufferAttribute(w,u),I[g+c+0]=W.x,I[g+c+1]=W.y,I[g+c+2]=W.z,I[g+c+3]=0;if(M===!0)W.fromBufferAttribute(h,u),I[g+c+4]=W.x,I[g+c+5]=W.y,I[g+c+6]=W.z,I[g+c+7]=0;if(z===!0)W.fromBufferAttribute(s,u),I[g+c+8]=W.x,I[g+c+9]=W.y,I[g+c+10]=W.z,I[g+c+11]=s.itemSize===4?W.w:1}}G={count:F,texture:P,size:new p0(L,A)},Z.set(Y,G),Y.addEventListener("dispose",V)}if(H.isInstancedMesh===!0&&H.morphTexture!==null)X.getUniforms().setValue(J,"morphTexture",H.morphTexture,$);else{let D=0;for(let z=0;z<U.length;z++)D+=U[z];let M=Y.morphTargetsRelative?1:1-D;X.getUniforms().setValue(J,"morphTargetBaseInfluence",M),X.getUniforms().setValue(J,"morphTargetInfluences",U)}X.getUniforms().setValue(J,"morphTargetsTexture",G.texture,$),X.getUniforms().setValue(J,"morphTargetsTextureSize",G.size)}return{update:K}}function bX(J,Q,$,Z,W){let K=new WeakMap;function H(U){let q=W.render.frame,F=U.geometry,G=Q.get(U,F);if(K.get(G)!==q)Q.update(G),K.set(G,q);if(U.isInstancedMesh){if(U.hasEventListener("dispose",X)===!1)U.addEventListener("dispose",X);if(K.get(U)!==q){if($.update(U.instanceMatrix,J.ARRAY_BUFFER),U.instanceColor!==null)$.update(U.instanceColor,J.ARRAY_BUFFER);K.set(U,q)}}if(U.isSkinnedMesh){let D=U.skeleton;if(K.get(D)!==q)D.update(),K.set(D,q)}return G}function Y(){K=new WeakMap}function X(U){let q=U.target;if(q.removeEventListener("dispose",X),Z.releaseStatesOfObject(q),$.remove(q.instanceMatrix),q.instanceColor!==null)$.remove(q.instanceColor)}return{update:H,dispose:Y}}var hX={[d6]:"LINEAR_TONE_MAPPING",[l6]:"REINHARD_TONE_MAPPING",[u6]:"CINEON_TONE_MAPPING",[v8]:"ACES_FILMIC_TONE_MAPPING",[n6]:"AGX_TONE_MAPPING",[s6]:"NEUTRAL_TONE_MAPPING",[c6]:"CUSTOM_TONE_MAPPING"};function xX(J,Q,$,Z,W,K){let H=new mJ(Q,$,{type:J,depthBuffer:W,stencilBuffer:K,samples:Z?4:0,depthTexture:W?new S9(Q,$):void 0}),Y=new mJ(Q,$,{type:D9,depthBuffer:!1,stencilBuffer:!1}),X=new BJ;X.setAttribute("position",new UJ([-1,3,0,-1,-1,0,3,-1,0],3)),X.setAttribute("uv",new UJ([0,2,0,0,2,0],2));let U=new dQ({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),q=new RJ(X,U),F=new e9(-1,1,1,-1,0,1),G=null,D=null,M=!1,z,E=null,N=[],C=!1;this.setSize=function(_,L){H.setSize(_,L),Y.setSize(_,L);for(let A=0;A<N.length;A++){let I=N[A];if(I.setSize)I.setSize(_,L)}},this.setEffects=function(_){N=_,C=N.length>0&&N[0].isRenderPass===!0;let{width:L,height:A}=H;for(let I=0;I<N.length;I++){let P=N[I];if(P.setSize)P.setSize(L,A)}},this.begin=function(_,L){if(M)return!1;if(_.toneMapping===iJ&&N.length===0)return!1;if(E=L,L!==null){let{width:A,height:I}=L;if(H.width!==A||H.height!==I)this.setSize(A,I)}if(C===!1)_.setRenderTarget(H);return z=_.toneMapping,_.toneMapping=iJ,!0},this.hasRenderPass=function(){return C},this.end=function(_,L){_.toneMapping=z,M=!0;let A=H,I=Y;for(let P=0;P<N.length;P++){let O=N[P];if(O.enabled===!1)continue;if(O.render(_,I,A,L),O.needsSwap!==!1){let V=A;A=I,I=V}}if(G!==_.outputColorSpace||D!==_.toneMapping){if(G=_.outputColorSpace,D=_.toneMapping,U.defines={},l0.getTransfer(G)===$J)U.defines.SRGB_TRANSFER="";let P=hX[D];if(P)U.defines[P]="";U.needsUpdate=!0}U.uniforms.tDiffuse.value=A.texture,_.setRenderTarget(E),_.render(q,F),E=null,M=!1},this.isCompositing=function(){return M},this.dispose=function(){if(H.depthTexture)H.depthTexture.dispose();H.dispose(),Y.dispose(),X.dispose(),U.dispose()}}var TW=new wJ,F$=new S9(1,1),SW=new g7,jW=new xQ,yW=new u7,NW=[],EW=[],qW=new Float32Array(16),FW=new Float32Array(9),DW=new Float32Array(4);function z8(J,Q,$){let Z=J[0];if(Z<=0||Z>0)return J;let W=Q*$,K=NW[W];if(K===void 0)K=new Float32Array(W),NW[W]=K;if(Q!==0){Z.toArray(K,0);for(let H=1,Y=0;H!==Q;++H)Y+=$,J[H].toArray(K,Y)}return K}function kJ(J,Q){if(J.length!==Q.length)return!1;for(let $=0,Z=J.length;$<Z;$++)if(J[$]!==Q[$])return!1;return!0}function MJ(J,Q){for(let $=0,Z=Q.length;$<Z;$++)J[$]=Q[$]}function Y6(J,Q){let $=EW[Q];if($===void 0)$=new Int32Array(Q),EW[Q]=$;for(let Z=0;Z!==Q;++Z)$[Z]=J.allocateTextureUnit();return $}function gX(J,Q){let $=this.cache;if($[0]===Q)return;J.uniform1f(this.addr,Q),$[0]=Q}function pX(J,Q){let $=this.cache;if(Q.x!==void 0){if($[0]!==Q.x||$[1]!==Q.y)J.uniform2f(this.addr,Q.x,Q.y),$[0]=Q.x,$[1]=Q.y}else{if(kJ($,Q))return;J.uniform2fv(this.addr,Q),MJ($,Q)}}function mX(J,Q){let $=this.cache;if(Q.x!==void 0){if($[0]!==Q.x||$[1]!==Q.y||$[2]!==Q.z)J.uniform3f(this.addr,Q.x,Q.y,Q.z),$[0]=Q.x,$[1]=Q.y,$[2]=Q.z}else if(Q.r!==void 0){if($[0]!==Q.r||$[1]!==Q.g||$[2]!==Q.b)J.uniform3f(this.addr,Q.r,Q.g,Q.b),$[0]=Q.r,$[1]=Q.g,$[2]=Q.b}else{if(kJ($,Q))return;J.uniform3fv(this.addr,Q),MJ($,Q)}}function dX(J,Q){let $=this.cache;if(Q.x!==void 0){if($[0]!==Q.x||$[1]!==Q.y||$[2]!==Q.z||$[3]!==Q.w)J.uniform4f(this.addr,Q.x,Q.y,Q.z,Q.w),$[0]=Q.x,$[1]=Q.y,$[2]=Q.z,$[3]=Q.w}else{if(kJ($,Q))return;J.uniform4fv(this.addr,Q),MJ($,Q)}}function lX(J,Q){let $=this.cache,Z=Q.elements;if(Z===void 0){if(kJ($,Q))return;J.uniformMatrix2fv(this.addr,!1,Q),MJ($,Q)}else{if(kJ($,Z))return;DW.set(Z),J.uniformMatrix2fv(this.addr,!1,DW),MJ($,Z)}}function uX(J,Q){let $=this.cache,Z=Q.elements;if(Z===void 0){if(kJ($,Q))return;J.uniformMatrix3fv(this.addr,!1,Q),MJ($,Q)}else{if(kJ($,Z))return;FW.set(Z),J.uniformMatrix3fv(this.addr,!1,FW),MJ($,Z)}}function cX(J,Q){let $=this.cache,Z=Q.elements;if(Z===void 0){if(kJ($,Q))return;J.uniformMatrix4fv(this.addr,!1,Q),MJ($,Q)}else{if(kJ($,Z))return;qW.set(Z),J.uniformMatrix4fv(this.addr,!1,qW),MJ($,Z)}}function nX(J,Q){let $=this.cache;if($[0]===Q)return;J.uniform1i(this.addr,Q),$[0]=Q}function sX(J,Q){let $=this.cache;if(Q.x!==void 0){if($[0]!==Q.x||$[1]!==Q.y)J.uniform2i(this.addr,Q.x,Q.y),$[0]=Q.x,$[1]=Q.y}else{if(kJ($,Q))return;J.uniform2iv(this.addr,Q),MJ($,Q)}}function iX(J,Q){let $=this.cache;if(Q.x!==void 0){if($[0]!==Q.x||$[1]!==Q.y||$[2]!==Q.z)J.uniform3i(this.addr,Q.x,Q.y,Q.z),$[0]=Q.x,$[1]=Q.y,$[2]=Q.z}else{if(kJ($,Q))return;J.uniform3iv(this.addr,Q),MJ($,Q)}}function oX(J,Q){let $=this.cache;if(Q.x!==void 0){if($[0]!==Q.x||$[1]!==Q.y||$[2]!==Q.z||$[3]!==Q.w)J.uniform4i(this.addr,Q.x,Q.y,Q.z,Q.w),$[0]=Q.x,$[1]=Q.y,$[2]=Q.z,$[3]=Q.w}else{if(kJ($,Q))return;J.uniform4iv(this.addr,Q),MJ($,Q)}}function aX(J,Q){let $=this.cache;if($[0]===Q)return;J.uniform1ui(this.addr,Q),$[0]=Q}function rX(J,Q){let $=this.cache;if(Q.x!==void 0){if($[0]!==Q.x||$[1]!==Q.y)J.uniform2ui(this.addr,Q.x,Q.y),$[0]=Q.x,$[1]=Q.y}else{if(kJ($,Q))return;J.uniform2uiv(this.addr,Q),MJ($,Q)}}function tX(J,Q){let $=this.cache;if(Q.x!==void 0){if($[0]!==Q.x||$[1]!==Q.y||$[2]!==Q.z)J.uniform3ui(this.addr,Q.x,Q.y,Q.z),$[0]=Q.x,$[1]=Q.y,$[2]=Q.z}else{if(kJ($,Q))return;J.uniform3uiv(this.addr,Q),MJ($,Q)}}function eX(J,Q){let $=this.cache;if(Q.x!==void 0){if($[0]!==Q.x||$[1]!==Q.y||$[2]!==Q.z||$[3]!==Q.w)J.uniform4ui(this.addr,Q.x,Q.y,Q.z,Q.w),$[0]=Q.x,$[1]=Q.y,$[2]=Q.z,$[3]=Q.w}else{if(kJ($,Q))return;J.uniform4uiv(this.addr,Q),MJ($,Q)}}function JU(J,Q,$){let Z=this.cache,W=$.allocateTextureUnit();if(Z[0]!==W)J.uniform1i(this.addr,W),Z[0]=W;let K;if(this.type===J.SAMPLER_2D_SHADOW)F$.compareFunction=$.isReversedDepthBuffer()?x7:h7,K=F$;else K=TW;$.setTexture2D(Q||K,W)}function QU(J,Q,$){let Z=this.cache,W=$.allocateTextureUnit();if(Z[0]!==W)J.uniform1i(this.addr,W),Z[0]=W;$.setTexture3D(Q||jW,W)}function $U(J,Q,$){let Z=this.cache,W=$.allocateTextureUnit();if(Z[0]!==W)J.uniform1i(this.addr,W),Z[0]=W;$.setTextureCube(Q||yW,W)}function ZU(J,Q,$){let Z=this.cache,W=$.allocateTextureUnit();if(Z[0]!==W)J.uniform1i(this.addr,W),Z[0]=W;$.setTexture2DArray(Q||SW,W)}function WU(J){switch(J){case 5126:return gX;case 35664:return pX;case 35665:return mX;case 35666:return dX;case 35674:return lX;case 35675:return uX;case 35676:return cX;case 5124:case 35670:return nX;case 35667:case 35671:return sX;case 35668:case 35672:return iX;case 35669:case 35673:return oX;case 5125:return aX;case 36294:return rX;case 36295:return tX;case 36296:return eX;case 35678:case 36198:case 36298:case 36306:case 35682:return JU;case 35679:case 36299:case 36307:return QU;case 35680:case 36300:case 36308:case 36293:return $U;case 36289:case 36303:case 36311:case 36292:return ZU}}function KU(J,Q){J.uniform1fv(this.addr,Q)}function HU(J,Q){let $=z8(Q,this.size,2);J.uniform2fv(this.addr,$)}function YU(J,Q){let $=z8(Q,this.size,3);J.uniform3fv(this.addr,$)}function XU(J,Q){let $=z8(Q,this.size,4);J.uniform4fv(this.addr,$)}function UU(J,Q){let $=z8(Q,this.size,4);J.uniformMatrix2fv(this.addr,!1,$)}function GU(J,Q){let $=z8(Q,this.size,9);J.uniformMatrix3fv(this.addr,!1,$)}function NU(J,Q){let $=z8(Q,this.size,16);J.uniformMatrix4fv(this.addr,!1,$)}function EU(J,Q){J.uniform1iv(this.addr,Q)}function qU(J,Q){J.uniform2iv(this.addr,Q)}function FU(J,Q){J.uniform3iv(this.addr,Q)}function DU(J,Q){J.uniform4iv(this.addr,Q)}function OU(J,Q){J.uniform1uiv(this.addr,Q)}function RU(J,Q){J.uniform2uiv(this.addr,Q)}function kU(J,Q){J.uniform3uiv(this.addr,Q)}function MU(J,Q){J.uniform4uiv(this.addr,Q)}function LU(J,Q,$){let Z=this.cache,W=Q.length,K=Y6($,W);if(!kJ(Z,K))J.uniform1iv(this.addr,K),MJ(Z,K);let H;if(this.type===J.SAMPLER_2D_SHADOW)H=F$;else H=TW;for(let Y=0;Y!==W;++Y)$.setTexture2D(Q[Y]||H,K[Y])}function VU(J,Q,$){let Z=this.cache,W=Q.length,K=Y6($,W);if(!kJ(Z,K))J.uniform1iv(this.addr,K),MJ(Z,K);for(let H=0;H!==W;++H)$.setTexture3D(Q[H]||jW,K[H])}function BU(J,Q,$){let Z=this.cache,W=Q.length,K=Y6($,W);if(!kJ(Z,K))J.uniform1iv(this.addr,K),MJ(Z,K);for(let H=0;H!==W;++H)$.setTextureCube(Q[H]||yW,K[H])}function zU(J,Q,$){let Z=this.cache,W=Q.length,K=Y6($,W);if(!kJ(Z,K))J.uniform1iv(this.addr,K),MJ(Z,K);for(let H=0;H!==W;++H)$.setTexture2DArray(Q[H]||SW,K[H])}function IU(J){switch(J){case 5126:return KU;case 35664:return HU;case 35665:return YU;case 35666:return XU;case 35674:return UU;case 35675:return GU;case 35676:return NU;case 5124:case 35670:return EU;case 35667:case 35671:return qU;case 35668:case 35672:return FU;case 35669:case 35673:return DU;case 5125:return OU;case 36294:return RU;case 36295:return kU;case 36296:return MU;case 35678:case 36198:case 36298:case 36306:case 35682:return LU;case 35679:case 36299:case 36307:return VU;case 35680:case 36300:case 36308:case 36293:return BU;case 36289:case 36303:case 36311:case 36292:return zU}}class vW{constructor(J,Q,$){this.id=J,this.addr=$,this.cache=[],this.type=Q.type,this.setValue=WU(Q.type)}}class fW{constructor(J,Q,$){this.id=J,this.addr=$,this.cache=[],this.type=Q.type,this.size=Q.size,this.setValue=IU(Q.type)}}class bW{constructor(J){this.id=J,this.seq=[],this.map={}}setValue(J,Q,$){let Z=this.seq;for(let W=0,K=Z.length;W!==K;++W){let H=Z[W];H.setValue(J,Q[H.id],$)}}}var N$=/(\w+)(\])?(\[|\.)?/g;function OW(J,Q){J.seq.push(Q),J.map[Q.id]=Q}function AU(J,Q,$){let Z=J.name,W=Z.length;N$.lastIndex=0;while(!0){let K=N$.exec(Z),H=N$.lastIndex,Y=K[1],X=K[2]==="]",U=K[3];if(X)Y=Y|0;if(U===void 0||U==="["&&H+2===W){OW($,U===void 0?new vW(Y,J,Q):new fW(Y,J,Q));break}else{let F=$.map[Y];if(F===void 0)F=new bW(Y),OW($,F);$=F}}}class e8{constructor(J,Q){this.seq=[],this.map={};let $=J.getProgramParameter(Q,J.ACTIVE_UNIFORMS);for(let K=0;K<$;++K){let H=J.getActiveUniform(Q,K),Y=J.getUniformLocation(Q,H.name);AU(H,Y,this)}let Z=[],W=[];for(let K of this.seq)if(K.type===J.SAMPLER_2D_SHADOW||K.type===J.SAMPLER_CUBE_SHADOW||K.type===J.SAMPLER_2D_ARRAY_SHADOW)Z.push(K);else W.push(K);if(Z.length>0)this.seq=Z.concat(W)}setValue(J,Q,$,Z){let W=this.map[Q];if(W!==void 0)W.setValue(J,$,Z)}setOptional(J,Q,$){let Z=Q[$];if(Z!==void 0)this.setValue(J,$,Z)}static upload(J,Q,$,Z){for(let W=0,K=Q.length;W!==K;++W){let H=Q[W],Y=$[H.id];if(Y.needsUpdate!==!1)H.setValue(J,Y.value,Z)}}static seqWithValue(J,Q){let $=[];for(let Z=0,W=J.length;Z!==W;++Z){let K=J[Z];if(K.id in Q)$.push(K)}return $}}function RW(J,Q,$){let Z=J.createShader(Q);return J.shaderSource(Z,$),J.compileShader(Z),Z}var wU=37297,_U=0;function CU(J,Q){let $=J.split(`
`),Z=[],W=Math.max(Q-6,0),K=Math.min(Q+6,$.length);for(let H=W;H<K;H++){let Y=H+1;Z.push(`${Y===Q?">":" "} ${Y}: ${$[H]}`)}return Z.join(`
`)}var kW=new j0;function PU(J){l0._getMatrix(kW,l0.workingColorSpace,J);let Q=`mat3( ${kW.elements.map(($)=>$.toFixed(4))} )`;switch(l0.getTransfer(J)){case jQ:return[Q,"LinearTransferOETF"];case $J:return[Q,"sRGBTransferOETF"];default:return _0("WebGLProgram: Unsupported color space: ",J),[Q,"LinearTransferOETF"]}}function MW(J,Q,$){let Z=J.getShaderParameter(Q,J.COMPILE_STATUS),K=(J.getShaderInfoLog(Q)||"").trim();if(Z&&K==="")return"";let H=/ERROR: 0:(\d+)/.exec(K);if(H){let Y=parseInt(H[1]);return $.toUpperCase()+`

`+K+`

`+CU(J.getShaderSource(Q),Y)}else return K}function TU(J,Q){let $=PU(Q);return[`vec4 ${J}( vec4 value ) {`,`	return ${$[1]}( vec4( value.rgb * ${$[0]}, value.a ) );`,"}"].join(`
`)}var SU={[d6]:"Linear",[l6]:"Reinhard",[u6]:"Cineon",[v8]:"ACESFilmic",[n6]:"AgX",[s6]:"Neutral",[c6]:"Custom"};function jU(J,Q){let $=SU[Q];if($===void 0)return _0("WebGLProgram: Unsupported toneMapping:",Q),"vec3 "+J+"( vec3 color ) { return LinearToneMapping( color ); }";return"vec3 "+J+"( vec3 color ) { return "+$+"ToneMapping( color ); }"}var K6=new v;function yU(){l0.getLuminanceCoefficients(K6);let J=K6.x.toFixed(4),Q=K6.y.toFixed(4),$=K6.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${J}, ${Q}, ${$} );`,"\treturn dot( weights, rgb );","}"].join(`
`)}function vU(J){return[J.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",J.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(t8).join(`
`)}function fU(J){let Q=[];for(let $ in J){let Z=J[$];if(Z===!1)continue;Q.push("#define "+$+" "+Z)}return Q.join(`
`)}function bU(J,Q){let $={},Z=J.getProgramParameter(Q,J.ACTIVE_ATTRIBUTES);for(let W=0;W<Z;W++){let K=J.getActiveAttrib(Q,W),H=K.name,Y=1;if(K.type===J.FLOAT_MAT2)Y=2;if(K.type===J.FLOAT_MAT3)Y=3;if(K.type===J.FLOAT_MAT4)Y=4;$[H]={type:K.type,location:J.getAttribLocation(Q,H),locationSize:Y}}return $}function t8(J){return J!==""}function LW(J,Q){let $=Q.numSpotLightShadows+Q.numSpotLightMaps-Q.numSpotLightShadowsWithMaps;return J.replace(/NUM_DIR_LIGHTS/g,Q.numDirLights).replace(/NUM_SPOT_LIGHTS/g,Q.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,Q.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,$).replace(/NUM_RECT_AREA_LIGHTS/g,Q.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,Q.numPointLights).replace(/NUM_HEMI_LIGHTS/g,Q.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,Q.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,Q.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,Q.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,Q.numPointLightShadows)}function VW(J,Q){return J.replace(/NUM_CLIPPING_PLANES/g,Q.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,Q.numClippingPlanes-Q.numClipIntersection)}var hU=/^[ \t]*#include +<([\w\d./]+)>/gm;function D$(J){return J.replace(hU,gU)}var xU=new Map;function gU(J,Q){let $=x0[Q];if($===void 0){let Z=xU.get(Q);if(Z!==void 0)$=x0[Z],_0('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',Q,Z);else throw Error("THREE.WebGLProgram: Can not resolve #include <"+Q+">")}return D$($)}var pU=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function BW(J){return J.replace(pU,mU)}function mU(J,Q,$,Z){let W="";for(let K=parseInt(Q);K<parseInt($);K++)W+=Z.replace(/\[\s*i\s*\]/g,"[ "+K+" ]").replace(/UNROLLED_LOOP_INDEX/g,K);return W}function zW(J){let Q=`precision ${J.precision} float;
	precision ${J.precision} int;
	precision ${J.precision} sampler2D;
	precision ${J.precision} samplerCube;
	precision ${J.precision} sampler3D;
	precision ${J.precision} sampler2DArray;
	precision ${J.precision} sampler2DShadow;
	precision ${J.precision} samplerCubeShadow;
	precision ${J.precision} sampler2DArrayShadow;
	precision ${J.precision} isampler2D;
	precision ${J.precision} isampler3D;
	precision ${J.precision} isamplerCube;
	precision ${J.precision} isampler2DArray;
	precision ${J.precision} usampler2D;
	precision ${J.precision} usampler3D;
	precision ${J.precision} usamplerCube;
	precision ${J.precision} usampler2DArray;
	`;if(J.precision==="highp")Q+=`
#define HIGH_PRECISION`;else if(J.precision==="mediump")Q+=`
#define MEDIUM_PRECISION`;else if(J.precision==="lowp")Q+=`
#define LOW_PRECISION`;return Q}var dU={[j8]:"SHADOWMAP_TYPE_PCF",[R8]:"SHADOWMAP_TYPE_VSM"};function lU(J){return dU[J.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var uU={[M8]:"ENVMAP_TYPE_CUBE",[m9]:"ENVMAP_TYPE_CUBE",[f8]:"ENVMAP_TYPE_CUBE_UV"};function cU(J){if(J.envMap===!1)return"ENVMAP_TYPE_CUBE";return uU[J.envMapMode]||"ENVMAP_TYPE_CUBE"}var nU={[m9]:"ENVMAP_MODE_REFRACTION"};function sU(J){if(J.envMap===!1)return"ENVMAP_MODE_REFLECTION";return nU[J.envMapMode]||"ENVMAP_MODE_REFLECTION"}var iU={[CZ]:"ENVMAP_BLENDING_MULTIPLY",[PZ]:"ENVMAP_BLENDING_MIX",[TZ]:"ENVMAP_BLENDING_ADD"};function oU(J){if(J.envMap===!1)return"ENVMAP_BLENDING_NONE";return iU[J.combine]||"ENVMAP_BLENDING_NONE"}function aU(J){let Q=J.envMapCubeUVHeight;if(Q===null)return null;let $=Math.log2(Q)-2,Z=1/Q;return{texelWidth:1/(3*Math.max(Math.pow(2,$),112)),texelHeight:Z,maxMip:$}}function rU(J,Q,$,Z){let W=J.getContext(),K=$.defines,H=$.vertexShader,Y=$.fragmentShader,X=lU($),U=cU($),q=sU($),F=oU($),G=aU($),D=vU($),M=fU(K),z=W.createProgram(),E,N,C=$.glslVersion?"#version "+$.glslVersion+`
`:"";if($.isRawShaderMaterial){if(E=["#define SHADER_TYPE "+$.shaderType,"#define SHADER_NAME "+$.shaderName,M].filter(t8).join(`
`),E.length>0)E+=`
`;if(N=["#define SHADER_TYPE "+$.shaderType,"#define SHADER_NAME "+$.shaderName,M].filter(t8).join(`
`),N.length>0)N+=`
`}else E=[zW($),"#define SHADER_TYPE "+$.shaderType,"#define SHADER_NAME "+$.shaderName,M,$.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",$.batching?"#define USE_BATCHING":"",$.batchingColor?"#define USE_BATCHING_COLOR":"",$.instancing?"#define USE_INSTANCING":"",$.instancingColor?"#define USE_INSTANCING_COLOR":"",$.instancingMorph?"#define USE_INSTANCING_MORPH":"",$.useFog&&$.fog?"#define USE_FOG":"",$.useFog&&$.fogExp2?"#define FOG_EXP2":"",$.map?"#define USE_MAP":"",$.envMap?"#define USE_ENVMAP":"",$.envMap?"#define "+q:"",$.lightMap?"#define USE_LIGHTMAP":"",$.aoMap?"#define USE_AOMAP":"",$.bumpMap?"#define USE_BUMPMAP":"",$.normalMap?"#define USE_NORMALMAP":"",$.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",$.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",$.displacementMap?"#define USE_DISPLACEMENTMAP":"",$.emissiveMap?"#define USE_EMISSIVEMAP":"",$.anisotropy?"#define USE_ANISOTROPY":"",$.anisotropyMap?"#define USE_ANISOTROPYMAP":"",$.clearcoatMap?"#define USE_CLEARCOATMAP":"",$.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",$.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",$.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",$.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",$.specularMap?"#define USE_SPECULARMAP":"",$.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",$.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",$.roughnessMap?"#define USE_ROUGHNESSMAP":"",$.metalnessMap?"#define USE_METALNESSMAP":"",$.alphaMap?"#define USE_ALPHAMAP":"",$.alphaHash?"#define USE_ALPHAHASH":"",$.transmission?"#define USE_TRANSMISSION":"",$.transmissionMap?"#define USE_TRANSMISSIONMAP":"",$.thicknessMap?"#define USE_THICKNESSMAP":"",$.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",$.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",$.mapUv?"#define MAP_UV "+$.mapUv:"",$.alphaMapUv?"#define ALPHAMAP_UV "+$.alphaMapUv:"",$.lightMapUv?"#define LIGHTMAP_UV "+$.lightMapUv:"",$.aoMapUv?"#define AOMAP_UV "+$.aoMapUv:"",$.emissiveMapUv?"#define EMISSIVEMAP_UV "+$.emissiveMapUv:"",$.bumpMapUv?"#define BUMPMAP_UV "+$.bumpMapUv:"",$.normalMapUv?"#define NORMALMAP_UV "+$.normalMapUv:"",$.displacementMapUv?"#define DISPLACEMENTMAP_UV "+$.displacementMapUv:"",$.metalnessMapUv?"#define METALNESSMAP_UV "+$.metalnessMapUv:"",$.roughnessMapUv?"#define ROUGHNESSMAP_UV "+$.roughnessMapUv:"",$.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+$.anisotropyMapUv:"",$.clearcoatMapUv?"#define CLEARCOATMAP_UV "+$.clearcoatMapUv:"",$.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+$.clearcoatNormalMapUv:"",$.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+$.clearcoatRoughnessMapUv:"",$.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+$.iridescenceMapUv:"",$.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+$.iridescenceThicknessMapUv:"",$.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+$.sheenColorMapUv:"",$.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+$.sheenRoughnessMapUv:"",$.specularMapUv?"#define SPECULARMAP_UV "+$.specularMapUv:"",$.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+$.specularColorMapUv:"",$.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+$.specularIntensityMapUv:"",$.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+$.transmissionMapUv:"",$.thicknessMapUv?"#define THICKNESSMAP_UV "+$.thicknessMapUv:"",$.vertexTangents&&$.flatShading===!1?"#define USE_TANGENT":"",$.vertexNormals?"#define HAS_NORMAL":"",$.vertexColors?"#define USE_COLOR":"",$.vertexAlphas?"#define USE_COLOR_ALPHA":"",$.vertexUv1s?"#define USE_UV1":"",$.vertexUv2s?"#define USE_UV2":"",$.vertexUv3s?"#define USE_UV3":"",$.pointsUvs?"#define USE_POINTS_UV":"",$.flatShading?"#define FLAT_SHADED":"",$.skinning?"#define USE_SKINNING":"",$.morphTargets?"#define USE_MORPHTARGETS":"",$.morphNormals&&$.flatShading===!1?"#define USE_MORPHNORMALS":"",$.morphColors?"#define USE_MORPHCOLORS":"",$.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+$.morphTextureStride:"",$.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+$.morphTargetsCount:"",$.doubleSided?"#define DOUBLE_SIDED":"",$.flipSided?"#define FLIP_SIDED":"",$.shadowMapEnabled?"#define USE_SHADOWMAP":"",$.shadowMapEnabled?"#define "+X:"",$.sizeAttenuation?"#define USE_SIZEATTENUATION":"",$.numLightProbes>0?"#define USE_LIGHT_PROBES":"",$.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",$.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","\tattribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","\tattribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","\tuniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","\tattribute vec2 uv1;","#endif","#ifdef USE_UV2","\tattribute vec2 uv2;","#endif","#ifdef USE_UV3","\tattribute vec2 uv3;","#endif","#ifdef USE_TANGENT","\tattribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","\tattribute vec4 color;","#elif defined( USE_COLOR )","\tattribute vec3 color;","#endif","#ifdef USE_SKINNING","\tattribute vec4 skinIndex;","\tattribute vec4 skinWeight;","#endif",`
`].filter(t8).join(`
`),N=[zW($),"#define SHADER_TYPE "+$.shaderType,"#define SHADER_NAME "+$.shaderName,M,$.useFog&&$.fog?"#define USE_FOG":"",$.useFog&&$.fogExp2?"#define FOG_EXP2":"",$.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",$.map?"#define USE_MAP":"",$.matcap?"#define USE_MATCAP":"",$.envMap?"#define USE_ENVMAP":"",$.envMap?"#define "+U:"",$.envMap?"#define "+q:"",$.envMap?"#define "+F:"",G?"#define CUBEUV_TEXEL_WIDTH "+G.texelWidth:"",G?"#define CUBEUV_TEXEL_HEIGHT "+G.texelHeight:"",G?"#define CUBEUV_MAX_MIP "+G.maxMip+".0":"",$.lightMap?"#define USE_LIGHTMAP":"",$.aoMap?"#define USE_AOMAP":"",$.bumpMap?"#define USE_BUMPMAP":"",$.normalMap?"#define USE_NORMALMAP":"",$.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",$.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",$.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",$.emissiveMap?"#define USE_EMISSIVEMAP":"",$.anisotropy?"#define USE_ANISOTROPY":"",$.anisotropyMap?"#define USE_ANISOTROPYMAP":"",$.clearcoat?"#define USE_CLEARCOAT":"",$.clearcoatMap?"#define USE_CLEARCOATMAP":"",$.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",$.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",$.dispersion?"#define USE_DISPERSION":"",$.iridescence?"#define USE_IRIDESCENCE":"",$.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",$.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",$.specularMap?"#define USE_SPECULARMAP":"",$.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",$.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",$.roughnessMap?"#define USE_ROUGHNESSMAP":"",$.metalnessMap?"#define USE_METALNESSMAP":"",$.alphaMap?"#define USE_ALPHAMAP":"",$.alphaTest?"#define USE_ALPHATEST":"",$.alphaHash?"#define USE_ALPHAHASH":"",$.sheen?"#define USE_SHEEN":"",$.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",$.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",$.transmission?"#define USE_TRANSMISSION":"",$.transmissionMap?"#define USE_TRANSMISSIONMAP":"",$.thicknessMap?"#define USE_THICKNESSMAP":"",$.vertexTangents&&$.flatShading===!1?"#define USE_TANGENT":"",$.vertexColors||$.instancingColor?"#define USE_COLOR":"",$.vertexAlphas||$.batchingColor?"#define USE_COLOR_ALPHA":"",$.vertexUv1s?"#define USE_UV1":"",$.vertexUv2s?"#define USE_UV2":"",$.vertexUv3s?"#define USE_UV3":"",$.pointsUvs?"#define USE_POINTS_UV":"",$.gradientMap?"#define USE_GRADIENTMAP":"",$.flatShading?"#define FLAT_SHADED":"",$.doubleSided?"#define DOUBLE_SIDED":"",$.flipSided?"#define FLIP_SIDED":"",$.shadowMapEnabled?"#define USE_SHADOWMAP":"",$.shadowMapEnabled?"#define "+X:"",$.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",$.numLightProbes>0?"#define USE_LIGHT_PROBES":"",$.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",$.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",$.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",$.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",$.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",$.toneMapping!==iJ?"#define TONE_MAPPING":"",$.toneMapping!==iJ?x0.tonemapping_pars_fragment:"",$.toneMapping!==iJ?jU("toneMapping",$.toneMapping):"",$.dithering?"#define DITHERING":"",$.opaque?"#define OPAQUE":"",x0.colorspace_pars_fragment,TU("linearToOutputTexel",$.outputColorSpace),yU(),$.useDepthPacking?"#define DEPTH_PACKING "+$.depthPacking:"",`
`].filter(t8).join(`
`);if(H=D$(H),H=LW(H,$),H=VW(H,$),Y=D$(Y),Y=LW(Y,$),Y=VW(Y,$),H=BW(H),Y=BW(Y),$.isRawShaderMaterial!==!0)C=`#version 300 es
`,E=[D,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+E,N=["#define varying in",$.glslVersion===yQ?"":"layout(location = 0) out highp vec4 pc_fragColor;",$.glslVersion===yQ?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+N;let _=C+E+H,L=C+N+Y,A=RW(W,W.VERTEX_SHADER,_),I=RW(W,W.FRAGMENT_SHADER,L);if(W.attachShader(z,A),W.attachShader(z,I),$.index0AttributeName!==void 0)W.bindAttribLocation(z,0,$.index0AttributeName);else if($.hasPositionAttribute===!0)W.bindAttribLocation(z,0,"position");W.linkProgram(z);function P(w){if(J.debug.checkShaderErrors){let h=W.getProgramInfoLog(z)||"",s=W.getShaderInfoLog(A)||"",g=W.getShaderInfoLog(I)||"",u=h.trim(),c=s.trim(),f=g.trim(),t=!0,Q0=!0;if(W.getProgramParameter(z,W.LINK_STATUS)===!1)if(t=!1,typeof J.debug.onShaderError==="function")J.debug.onShaderError(W,z,A,I);else{let H0=MW(W,A,"vertex"),L0=MW(W,I,"fragment");P0("WebGLProgram: Shader Error "+W.getError()+" - VALIDATE_STATUS "+W.getProgramParameter(z,W.VALIDATE_STATUS)+`

Material Name: `+w.name+`
Material Type: `+w.type+`

Program Info Log: `+u+`
`+H0+`
`+L0)}else if(u!=="")_0("WebGLProgram: Program Info Log:",u);else if(c===""||f==="")Q0=!1;if(Q0)w.diagnostics={runnable:t,programLog:u,vertexShader:{log:c,prefix:E},fragmentShader:{log:f,prefix:N}}}W.deleteShader(A),W.deleteShader(I),O=new e8(W,z),V=bU(W,z)}let O;this.getUniforms=function(){if(O===void 0)P(this);return O};let V;this.getAttributes=function(){if(V===void 0)P(this);return V};let p=$.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){if(p===!1)p=W.getProgramParameter(z,wU);return p},this.destroy=function(){Z.releaseStatesOfProgram(this),W.deleteProgram(z),this.program=void 0},this.type=$.shaderType,this.name=$.shaderName,this.id=_U++,this.cacheKey=Q,this.usedTimes=1,this.program=z,this.vertexShader=A,this.fragmentShader=I,this}var tU=0;class hW{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(J,Q,$){let Z=this._getShaderCacheForMaterial(J);if(Z.has(Q)===!1)Z.add(Q),Q.usedTimes++;if(Z.has($)===!1)Z.add($),$.usedTimes++;return this}remove(J){let Q=this.materialCache.get(J);for(let $ of Q)if($.usedTimes--,$.usedTimes===0)this.shaderCache.delete($.code);return this.materialCache.delete(J),this}getVertexShaderStage(J){return this._getShaderStage(J.vertexShader)}getFragmentShaderStage(J){return this._getShaderStage(J.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(J){let Q=this.materialCache,$=Q.get(J);if($===void 0)$=new Set,Q.set(J,$);return $}_getShaderStage(J){let Q=this.shaderCache,$=Q.get(J);if($===void 0)$=new xW(J),Q.set(J,$);return $}}class xW{constructor(J){this.id=tU++,this.code=J,this.usedTimes=0}}function eU(J){return J===c9||J===f7||J===b7}function JG(J,Q,$,Z,W,K){let H=new p8,Y=new hW,X=new Set,U=[],q=new Map,F=Z.logarithmicDepthBuffer,G=Z.precision,D={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function M(O){if(X.add(O),O===0)return"uv";return`uv${O}`}function z(O,V,p,w,h,s){let g=w.fog,u=h.geometry,c=O.isMeshStandardMaterial||O.isMeshLambertMaterial||O.isMeshPhongMaterial?w.environment:null,f=O.isMeshStandardMaterial||O.isMeshLambertMaterial&&!O.envMap||O.isMeshPhongMaterial&&!O.envMap,t=Q.get(O.envMap||c,f),Q0=!!t&&t.mapping===f8?t.image.height:null,H0=D[O.type];if(O.precision!==null){if(G=Z.getMaxPrecision(O.precision),G!==O.precision)_0("WebGLProgram.getParameters:",O.precision,"not supported, using",G,"instead.")}let L0=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,M0=L0!==void 0?L0.length:0,YJ=0;if(u.morphAttributes.position!==void 0)YJ=1;if(u.morphAttributes.normal!==void 0)YJ=2;if(u.morphAttributes.color!==void 0)YJ=3;let o0,o,W0,r;if(H0){let v0=W9[H0];o0=v0.vertexShader,o=v0.fragmentShader}else{o0=O.vertexShader,o=O.fragmentShader;let v0=Y.getVertexShaderStage(O),NJ=Y.getFragmentShaderStage(O);Y.update(O,v0,NJ),W0=v0.id,r=NJ.id}let n=J.getRenderTarget(),Y0=J.state.buffers.depth.getReversed(),S0=h.isInstancedMesh===!0,T0=h.isBatchedMesh===!0,A0=!!O.map,i0=!!O.matcap,d0=!!t,b0=!!O.aoMap,c0=!!O.lightMap,TJ=!!O.bumpMap&&O.wireframe===!1,t0=!!O.normalMap,h0=!!O.displacementMap,ZJ=!!O.emissiveMap,a0=!!O.metalnessMap,S=!!O.roughnessMap,PJ=O.anisotropy>0,n0=O.clearcoat>0,XJ=O.dispersion>0,B=O.iridescence>0,R=O.sheen>0,T=O.transmission>0,d=PJ&&!!O.anisotropyMap,J0=n0&&!!O.clearcoatMap,$0=n0&&!!O.clearcoatNormalMap,G0=n0&&!!O.clearcoatRoughnessMap,l=B&&!!O.iridescenceMap,a=B&&!!O.iridescenceThicknessMap,D0=R&&!!O.sheenColorMap,B0=R&&!!O.sheenRoughnessMap,N0=!!O.specularMap,Z0=!!O.specularColorMap,w0=!!O.specularIntensityMap,C0=T&&!!O.transmissionMap,s0=T&&!!O.thicknessMap,j=!!O.gradientMap,K0=!!O.alphaMap,i=O.alphaTest>0,X0=!!O.alphaHash,O0=!!O.extensions,e=iJ;if(O.toneMapped){if(n===null||n.isXRRenderTarget===!0)e=J.toneMapping}let U0={shaderID:H0,shaderType:O.type,shaderName:O.name,vertexShader:o0,fragmentShader:o,defines:O.defines,customVertexShaderID:W0,customFragmentShaderID:r,isRawShaderMaterial:O.isRawShaderMaterial===!0,glslVersion:O.glslVersion,precision:G,batching:T0,batchingColor:T0&&h._colorsTexture!==null,instancing:S0,instancingColor:S0&&h.instanceColor!==null,instancingMorph:S0&&h.morphTexture!==null,outputColorSpace:n===null?J.outputColorSpace:n.isXRRenderTarget===!0?n.texture.colorSpace:l0.workingColorSpace,alphaToCoverage:!!O.alphaToCoverage,map:A0,matcap:i0,envMap:d0,envMapMode:d0&&t.mapping,envMapCubeUVHeight:Q0,aoMap:b0,lightMap:c0,bumpMap:TJ,normalMap:t0,displacementMap:h0,emissiveMap:ZJ,normalMapObjectSpace:t0&&O.normalMapType===mZ,normalMapTangentSpace:t0&&O.normalMapType===TQ,packedNormalMap:t0&&O.normalMapType===TQ&&eU(O.normalMap.format),metalnessMap:a0,roughnessMap:S,anisotropy:PJ,anisotropyMap:d,clearcoat:n0,clearcoatMap:J0,clearcoatNormalMap:$0,clearcoatRoughnessMap:G0,dispersion:XJ,iridescence:B,iridescenceMap:l,iridescenceThicknessMap:a,sheen:R,sheenColorMap:D0,sheenRoughnessMap:B0,specularMap:N0,specularColorMap:Z0,specularIntensityMap:w0,transmission:T,transmissionMap:C0,thicknessMap:s0,gradientMap:j,opaque:O.transparent===!1&&O.blending===y8&&O.alphaToCoverage===!1,alphaMap:K0,alphaTest:i,alphaHash:X0,combine:O.combine,mapUv:A0&&M(O.map.channel),aoMapUv:b0&&M(O.aoMap.channel),lightMapUv:c0&&M(O.lightMap.channel),bumpMapUv:TJ&&M(O.bumpMap.channel),normalMapUv:t0&&M(O.normalMap.channel),displacementMapUv:h0&&M(O.displacementMap.channel),emissiveMapUv:ZJ&&M(O.emissiveMap.channel),metalnessMapUv:a0&&M(O.metalnessMap.channel),roughnessMapUv:S&&M(O.roughnessMap.channel),anisotropyMapUv:d&&M(O.anisotropyMap.channel),clearcoatMapUv:J0&&M(O.clearcoatMap.channel),clearcoatNormalMapUv:$0&&M(O.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:G0&&M(O.clearcoatRoughnessMap.channel),iridescenceMapUv:l&&M(O.iridescenceMap.channel),iridescenceThicknessMapUv:a&&M(O.iridescenceThicknessMap.channel),sheenColorMapUv:D0&&M(O.sheenColorMap.channel),sheenRoughnessMapUv:B0&&M(O.sheenRoughnessMap.channel),specularMapUv:N0&&M(O.specularMap.channel),specularColorMapUv:Z0&&M(O.specularColorMap.channel),specularIntensityMapUv:w0&&M(O.specularIntensityMap.channel),transmissionMapUv:C0&&M(O.transmissionMap.channel),thicknessMapUv:s0&&M(O.thicknessMap.channel),alphaMapUv:K0&&M(O.alphaMap.channel),vertexTangents:!!u.attributes.tangent&&(t0||PJ),vertexNormals:!!u.attributes.normal,vertexColors:O.vertexColors,vertexAlphas:O.vertexColors===!0&&!!u.attributes.color&&u.attributes.color.itemSize===4,pointsUvs:h.isPoints===!0&&!!u.attributes.uv&&(A0||K0),fog:!!g,useFog:O.fog===!0,fogExp2:!!g&&g.isFogExp2,flatShading:O.wireframe===!1&&(O.flatShading===!0||u.attributes.normal===void 0&&t0===!1&&(O.isMeshLambertMaterial||O.isMeshPhongMaterial||O.isMeshStandardMaterial||O.isMeshPhysicalMaterial)),sizeAttenuation:O.sizeAttenuation===!0,logarithmicDepthBuffer:F,reversedDepthBuffer:Y0,skinning:h.isSkinnedMesh===!0,hasPositionAttribute:u.attributes.position!==void 0,morphTargets:u.morphAttributes.position!==void 0,morphNormals:u.morphAttributes.normal!==void 0,morphColors:u.morphAttributes.color!==void 0,morphTargetsCount:M0,morphTextureStride:YJ,numDirLights:V.directional.length,numPointLights:V.point.length,numSpotLights:V.spot.length,numSpotLightMaps:V.spotLightMap.length,numRectAreaLights:V.rectArea.length,numHemiLights:V.hemi.length,numDirLightShadows:V.directionalShadowMap.length,numPointLightShadows:V.pointShadowMap.length,numSpotLightShadows:V.spotShadowMap.length,numSpotLightShadowsWithMaps:V.numSpotLightShadowsWithMaps,numLightProbes:V.numLightProbes,numLightProbeGrids:s.length,numClippingPlanes:K.numPlanes,numClipIntersection:K.numIntersection,dithering:O.dithering,shadowMapEnabled:J.shadowMap.enabled&&p.length>0,shadowMapType:J.shadowMap.type,toneMapping:e,decodeVideoTexture:A0&&O.map.isVideoTexture===!0&&l0.getTransfer(O.map.colorSpace)===$J,decodeVideoTextureEmissive:ZJ&&O.emissiveMap.isVideoTexture===!0&&l0.getTransfer(O.emissiveMap.colorSpace)===$J,premultipliedAlpha:O.premultipliedAlpha,doubleSided:O.side===bJ,flipSided:O.side===_J,useDepthPacking:O.depthPacking>=0,depthPacking:O.depthPacking||0,index0AttributeName:O.index0AttributeName,extensionClipCullDistance:O0&&O.extensions.clipCullDistance===!0&&$.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(O0&&O.extensions.multiDraw===!0||T0)&&$.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:$.has("KHR_parallel_shader_compile"),customProgramCacheKey:O.customProgramCacheKey()};return U0.vertexUv1s=X.has(1),U0.vertexUv2s=X.has(2),U0.vertexUv3s=X.has(3),X.clear(),U0}function E(O){let V=[];if(O.shaderID)V.push(O.shaderID);else V.push(O.customVertexShaderID),V.push(O.customFragmentShaderID);if(O.defines!==void 0)for(let p in O.defines)V.push(p),V.push(O.defines[p]);if(O.isRawShaderMaterial===!1)N(V,O),C(V,O),V.push(J.outputColorSpace);return V.push(O.customProgramCacheKey),V.join()}function N(O,V){O.push(V.precision),O.push(V.outputColorSpace),O.push(V.envMapMode),O.push(V.envMapCubeUVHeight),O.push(V.mapUv),O.push(V.alphaMapUv),O.push(V.lightMapUv),O.push(V.aoMapUv),O.push(V.bumpMapUv),O.push(V.normalMapUv),O.push(V.displacementMapUv),O.push(V.emissiveMapUv),O.push(V.metalnessMapUv),O.push(V.roughnessMapUv),O.push(V.anisotropyMapUv),O.push(V.clearcoatMapUv),O.push(V.clearcoatNormalMapUv),O.push(V.clearcoatRoughnessMapUv),O.push(V.iridescenceMapUv),O.push(V.iridescenceThicknessMapUv),O.push(V.sheenColorMapUv),O.push(V.sheenRoughnessMapUv),O.push(V.specularMapUv),O.push(V.specularColorMapUv),O.push(V.specularIntensityMapUv),O.push(V.transmissionMapUv),O.push(V.thicknessMapUv),O.push(V.combine),O.push(V.fogExp2),O.push(V.sizeAttenuation),O.push(V.morphTargetsCount),O.push(V.morphAttributeCount),O.push(V.numDirLights),O.push(V.numPointLights),O.push(V.numSpotLights),O.push(V.numSpotLightMaps),O.push(V.numHemiLights),O.push(V.numRectAreaLights),O.push(V.numDirLightShadows),O.push(V.numPointLightShadows),O.push(V.numSpotLightShadows),O.push(V.numSpotLightShadowsWithMaps),O.push(V.numLightProbes),O.push(V.shadowMapType),O.push(V.toneMapping),O.push(V.numClippingPlanes),O.push(V.numClipIntersection),O.push(V.depthPacking)}function C(O,V){if(H.disableAll(),V.instancing)H.enable(0);if(V.instancingColor)H.enable(1);if(V.instancingMorph)H.enable(2);if(V.matcap)H.enable(3);if(V.envMap)H.enable(4);if(V.normalMapObjectSpace)H.enable(5);if(V.normalMapTangentSpace)H.enable(6);if(V.clearcoat)H.enable(7);if(V.iridescence)H.enable(8);if(V.alphaTest)H.enable(9);if(V.vertexColors)H.enable(10);if(V.vertexAlphas)H.enable(11);if(V.vertexUv1s)H.enable(12);if(V.vertexUv2s)H.enable(13);if(V.vertexUv3s)H.enable(14);if(V.vertexTangents)H.enable(15);if(V.anisotropy)H.enable(16);if(V.alphaHash)H.enable(17);if(V.batching)H.enable(18);if(V.dispersion)H.enable(19);if(V.batchingColor)H.enable(20);if(V.gradientMap)H.enable(21);if(V.packedNormalMap)H.enable(22);if(V.vertexNormals)H.enable(23);if(O.push(H.mask),H.disableAll(),V.fog)H.enable(0);if(V.useFog)H.enable(1);if(V.flatShading)H.enable(2);if(V.logarithmicDepthBuffer)H.enable(3);if(V.reversedDepthBuffer)H.enable(4);if(V.skinning)H.enable(5);if(V.morphTargets)H.enable(6);if(V.morphNormals)H.enable(7);if(V.morphColors)H.enable(8);if(V.premultipliedAlpha)H.enable(9);if(V.shadowMapEnabled)H.enable(10);if(V.doubleSided)H.enable(11);if(V.flipSided)H.enable(12);if(V.useDepthPacking)H.enable(13);if(V.dithering)H.enable(14);if(V.transmission)H.enable(15);if(V.sheen)H.enable(16);if(V.opaque)H.enable(17);if(V.pointsUvs)H.enable(18);if(V.decodeVideoTexture)H.enable(19);if(V.decodeVideoTextureEmissive)H.enable(20);if(V.alphaToCoverage)H.enable(21);if(V.numLightProbeGrids>0)H.enable(22);if(V.hasPositionAttribute)H.enable(23);O.push(H.mask)}function _(O){let V=D[O.type],p;if(V){let w=W9[V];p=JW.clone(w.uniforms)}else p=O.uniforms;return p}function L(O,V){let p=q.get(V);if(p!==void 0)++p.usedTimes;else p=new rU(J,V,O,W),U.push(p),q.set(V,p);return p}function A(O){if(--O.usedTimes===0){let V=U.indexOf(O);U[V]=U[U.length-1],U.pop(),q.delete(O.cacheKey),O.destroy()}}function I(O){Y.remove(O)}function P(){Y.dispose()}return{getParameters:z,getProgramCacheKey:E,getUniforms:_,acquireProgram:L,releaseProgram:A,releaseShaderCache:I,programs:U,dispose:P}}function QG(){let J=new WeakMap;function Q(H){return J.has(H)}function $(H){let Y=J.get(H);if(Y===void 0)Y={},J.set(H,Y);return Y}function Z(H){J.delete(H)}function W(H,Y,X){J.get(H)[Y]=X}function K(){J=new WeakMap}return{has:Q,get:$,remove:Z,update:W,dispose:K}}function $G(J,Q){if(J.groupOrder!==Q.groupOrder)return J.groupOrder-Q.groupOrder;else if(J.renderOrder!==Q.renderOrder)return J.renderOrder-Q.renderOrder;else if(J.material.id!==Q.material.id)return J.material.id-Q.material.id;else if(J.materialVariant!==Q.materialVariant)return J.materialVariant-Q.materialVariant;else if(J.z!==Q.z)return J.z-Q.z;else return J.id-Q.id}function IW(J,Q){if(J.groupOrder!==Q.groupOrder)return J.groupOrder-Q.groupOrder;else if(J.renderOrder!==Q.renderOrder)return J.renderOrder-Q.renderOrder;else if(J.z!==Q.z)return Q.z-J.z;else return J.id-Q.id}function AW(){let J=[],Q=0,$=[],Z=[],W=[];function K(){Q=0,$.length=0,Z.length=0,W.length=0}function H(G){let D=0;if(G.isInstancedMesh)D+=2;if(G.isSkinnedMesh)D+=1;return D}function Y(G,D,M,z,E,N){let C=J[Q];if(C===void 0)C={id:G.id,object:G,geometry:D,material:M,materialVariant:H(G),groupOrder:z,renderOrder:G.renderOrder,z:E,group:N},J[Q]=C;else C.id=G.id,C.object=G,C.geometry=D,C.material=M,C.materialVariant=H(G),C.groupOrder=z,C.renderOrder=G.renderOrder,C.z=E,C.group=N;return Q++,C}function X(G,D,M,z,E,N){let C=Y(G,D,M,z,E,N);if(M.transmission>0)Z.push(C);else if(M.transparent===!0)W.push(C);else $.push(C)}function U(G,D,M,z,E,N){let C=Y(G,D,M,z,E,N);if(M.transmission>0)Z.unshift(C);else if(M.transparent===!0)W.unshift(C);else $.unshift(C)}function q(G,D,M){if($.length>1)$.sort(G||$G);if(Z.length>1)Z.sort(D||IW);if(W.length>1)W.sort(D||IW);if(M)$.reverse(),Z.reverse(),W.reverse()}function F(){for(let G=Q,D=J.length;G<D;G++){let M=J[G];if(M.id===null)break;M.id=null,M.object=null,M.geometry=null,M.material=null,M.group=null}}return{opaque:$,transmissive:Z,transparent:W,init:K,push:X,unshift:U,finish:F,sort:q}}function ZG(){let J=new WeakMap;function Q(Z,W){let K=J.get(Z),H;if(K===void 0)H=new AW,J.set(Z,[H]);else if(W>=K.length)H=new AW,K.push(H);else H=K[W];return H}function $(){J=new WeakMap}return{get:Q,dispose:$}}function WG(){let J={};return{get:function(Q){if(J[Q.id]!==void 0)return J[Q.id];let $;switch(Q.type){case"DirectionalLight":$={direction:new v,color:new y0};break;case"SpotLight":$={position:new v,direction:new v,color:new y0,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":$={position:new v,color:new y0,distance:0,decay:0};break;case"HemisphereLight":$={direction:new v,skyColor:new y0,groundColor:new y0};break;case"RectAreaLight":$={color:new y0,position:new v,halfWidth:new v,halfHeight:new v};break}return J[Q.id]=$,$}}}function KG(){let J={};return{get:function(Q){if(J[Q.id]!==void 0)return J[Q.id];let $;switch(Q.type){case"DirectionalLight":$={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new p0};break;case"SpotLight":$={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new p0};break;case"PointLight":$={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new p0,shadowCameraNear:1,shadowCameraFar:1000};break}return J[Q.id]=$,$}}}var HG=0;function YG(J,Q){return(Q.castShadow?2:0)-(J.castShadow?2:0)+(Q.map?1:0)-(J.map?1:0)}function XG(J){let Q=new WG,$=KG(),Z={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let U=0;U<9;U++)Z.probe.push(new v);let W=new v,K=new HJ,H=new HJ;function Y(U){let q=0,F=0,G=0;for(let V=0;V<9;V++)Z.probe[V].set(0,0,0);let D=0,M=0,z=0,E=0,N=0,C=0,_=0,L=0,A=0,I=0,P=0;U.sort(YG);for(let V=0,p=U.length;V<p;V++){let w=U[V],h=w.color,s=w.intensity,g=w.distance,u=null;if(w.shadow&&w.shadow.map)if(w.shadow.map.texture.format===c9)u=w.shadow.map.texture;else u=w.shadow.map.depthTexture||w.shadow.map.texture;if(w.isAmbientLight)q+=h.r*s,F+=h.g*s,G+=h.b*s;else if(w.isLightProbe){for(let c=0;c<9;c++)Z.probe[c].addScaledVector(w.sh.coefficients[c],s);P++}else if(w.isDirectionalLight){let c=Q.get(w);if(c.color.copy(w.color).multiplyScalar(w.intensity),w.castShadow){let f=w.shadow,t=$.get(w);t.shadowIntensity=f.intensity,t.shadowBias=f.bias,t.shadowNormalBias=f.normalBias,t.shadowRadius=f.radius,t.shadowMapSize=f.mapSize,Z.directionalShadow[D]=t,Z.directionalShadowMap[D]=u,Z.directionalShadowMatrix[D]=w.shadow.matrix,C++}Z.directional[D]=c,D++}else if(w.isSpotLight){let c=Q.get(w);c.position.setFromMatrixPosition(w.matrixWorld),c.color.copy(h).multiplyScalar(s),c.distance=g,c.coneCos=Math.cos(w.angle),c.penumbraCos=Math.cos(w.angle*(1-w.penumbra)),c.decay=w.decay,Z.spot[z]=c;let f=w.shadow;if(w.map){if(Z.spotLightMap[A]=w.map,A++,f.updateMatrices(w),w.castShadow)I++}if(Z.spotLightMatrix[z]=f.matrix,w.castShadow){let t=$.get(w);t.shadowIntensity=f.intensity,t.shadowBias=f.bias,t.shadowNormalBias=f.normalBias,t.shadowRadius=f.radius,t.shadowMapSize=f.mapSize,Z.spotShadow[z]=t,Z.spotShadowMap[z]=u,L++}z++}else if(w.isRectAreaLight){let c=Q.get(w);c.color.copy(h).multiplyScalar(s),c.halfWidth.set(w.width*0.5,0,0),c.halfHeight.set(0,w.height*0.5,0),Z.rectArea[E]=c,E++}else if(w.isPointLight){let c=Q.get(w);if(c.color.copy(w.color).multiplyScalar(w.intensity),c.distance=w.distance,c.decay=w.decay,w.castShadow){let f=w.shadow,t=$.get(w);t.shadowIntensity=f.intensity,t.shadowBias=f.bias,t.shadowNormalBias=f.normalBias,t.shadowRadius=f.radius,t.shadowMapSize=f.mapSize,t.shadowCameraNear=f.camera.near,t.shadowCameraFar=f.camera.far,Z.pointShadow[M]=t,Z.pointShadowMap[M]=u,Z.pointShadowMatrix[M]=w.shadow.matrix,_++}Z.point[M]=c,M++}else if(w.isHemisphereLight){let c=Q.get(w);c.skyColor.copy(w.color).multiplyScalar(s),c.groundColor.copy(w.groundColor).multiplyScalar(s),Z.hemi[N]=c,N++}}if(E>0)if(J.has("OES_texture_float_linear")===!0)Z.rectAreaLTC1=E0.LTC_FLOAT_1,Z.rectAreaLTC2=E0.LTC_FLOAT_2;else Z.rectAreaLTC1=E0.LTC_HALF_1,Z.rectAreaLTC2=E0.LTC_HALF_2;Z.ambient[0]=q,Z.ambient[1]=F,Z.ambient[2]=G;let O=Z.hash;if(O.directionalLength!==D||O.pointLength!==M||O.spotLength!==z||O.rectAreaLength!==E||O.hemiLength!==N||O.numDirectionalShadows!==C||O.numPointShadows!==_||O.numSpotShadows!==L||O.numSpotMaps!==A||O.numLightProbes!==P)Z.directional.length=D,Z.spot.length=z,Z.rectArea.length=E,Z.point.length=M,Z.hemi.length=N,Z.directionalShadow.length=C,Z.directionalShadowMap.length=C,Z.pointShadow.length=_,Z.pointShadowMap.length=_,Z.spotShadow.length=L,Z.spotShadowMap.length=L,Z.directionalShadowMatrix.length=C,Z.pointShadowMatrix.length=_,Z.spotLightMatrix.length=L+A-I,Z.spotLightMap.length=A,Z.numSpotLightShadowsWithMaps=I,Z.numLightProbes=P,O.directionalLength=D,O.pointLength=M,O.spotLength=z,O.rectAreaLength=E,O.hemiLength=N,O.numDirectionalShadows=C,O.numPointShadows=_,O.numSpotShadows=L,O.numSpotMaps=A,O.numLightProbes=P,Z.version=HG++}function X(U,q){let F=0,G=0,D=0,M=0,z=0,E=q.matrixWorldInverse;for(let N=0,C=U.length;N<C;N++){let _=U[N];if(_.isDirectionalLight){let L=Z.directional[F];L.direction.setFromMatrixPosition(_.matrixWorld),W.setFromMatrixPosition(_.target.matrixWorld),L.direction.sub(W),L.direction.transformDirection(E),F++}else if(_.isSpotLight){let L=Z.spot[D];L.position.setFromMatrixPosition(_.matrixWorld),L.position.applyMatrix4(E),L.direction.setFromMatrixPosition(_.matrixWorld),W.setFromMatrixPosition(_.target.matrixWorld),L.direction.sub(W),L.direction.transformDirection(E),D++}else if(_.isRectAreaLight){let L=Z.rectArea[M];L.position.setFromMatrixPosition(_.matrixWorld),L.position.applyMatrix4(E),H.identity(),K.copy(_.matrixWorld),K.premultiply(E),H.extractRotation(K),L.halfWidth.set(_.width*0.5,0,0),L.halfHeight.set(0,_.height*0.5,0),L.halfWidth.applyMatrix4(H),L.halfHeight.applyMatrix4(H),M++}else if(_.isPointLight){let L=Z.point[G];L.position.setFromMatrixPosition(_.matrixWorld),L.position.applyMatrix4(E),G++}else if(_.isHemisphereLight){let L=Z.hemi[z];L.direction.setFromMatrixPosition(_.matrixWorld),L.direction.transformDirection(E),z++}}}return{setup:Y,setupView:X,state:Z}}function wW(J){let Q=new XG(J),$=[],Z=[],W=[];function K(G){F.camera=G,$.length=0,Z.length=0,W.length=0}function H(G){$.push(G)}function Y(G){Z.push(G)}function X(G){W.push(G)}function U(){Q.setup($)}function q(G){Q.setupView($,G)}let F={lightsArray:$,shadowsArray:Z,lightProbeGridArray:W,camera:null,lights:Q,transmissionRenderTarget:{},textureUnits:0};return{init:K,state:F,setupLights:U,setupLightsView:q,pushLight:H,pushShadow:Y,pushLightProbeGrid:X}}function UG(J){let Q=new WeakMap;function $(W,K=0){let H=Q.get(W),Y;if(H===void 0)Y=new wW(J),Q.set(W,[Y]);else if(K>=H.length)Y=new wW(J),H.push(Y);else Y=H[K];return Y}function Z(){Q=new WeakMap}return{get:$,dispose:Z}}var GG=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,NG=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,EG=[new v(1,0,0),new v(-1,0,0),new v(0,1,0),new v(0,-1,0),new v(0,0,1),new v(0,0,-1)],qG=[new v(0,-1,0),new v(0,-1,0),new v(0,0,1),new v(0,0,-1),new v(0,-1,0),new v(0,-1,0)],_W=new HJ,r8=new v,E$=new v;function FG(J,Q,$){let Z=new u8,W=new p0,K=new p0,H=new GJ,Y=new lQ,X=new uQ,U={},q=$.maxTextureSize,F={[C9]:_J,[_J]:C9,[bJ]:bJ},G=new dJ({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new p0},radius:{value:4}},vertexShader:GG,fragmentShader:NG}),D=G.clone();D.defines.HORIZONTAL_PASS=1;let M=new BJ;M.setAttribute("position",new pJ(new Float32Array([-1,-1,0.5,3,-1,0.5,-1,3,0.5]),3));let z=new RJ(M,G),E=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=j8;let N=this.type;this.render=function(I,P,O){if(E.enabled===!1)return;if(E.autoUpdate===!1&&E.needsUpdate===!1)return;if(I.length===0)return;if(this.type===w7)_0("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=j8;let V=J.getRenderTarget(),p=J.getActiveCubeFace(),w=J.getActiveMipmapLevel(),h=J.state;if(h.setBlending(J9),h.buffers.depth.getReversed()===!0)h.buffers.color.setClear(0,0,0,0);else h.buffers.color.setClear(1,1,1,1);h.buffers.depth.setTest(!0),h.setScissorTest(!1);let s=N!==this.type;if(s)P.traverse(function(g){if(g.material)if(Array.isArray(g.material))g.material.forEach((u)=>u.needsUpdate=!0);else g.material.needsUpdate=!0});for(let g=0,u=I.length;g<u;g++){let c=I[g],f=c.shadow;if(f===void 0){_0("WebGLShadowMap:",c,"has no shadow.");continue}if(f.autoUpdate===!1&&f.needsUpdate===!1)continue;W.copy(f.mapSize);let t=f.getFrameExtents();if(W.multiply(t),K.copy(f.mapSize),W.x>q||W.y>q){if(W.x>q)K.x=Math.floor(q/t.x),W.x=K.x*t.x,f.mapSize.x=K.x;if(W.y>q)K.y=Math.floor(q/t.y),W.y=K.y*t.y,f.mapSize.y=K.y}let Q0=J.state.buffers.depth.getReversed();if(f.camera._reversedDepth=Q0,f.map===null||s===!0){if(f.map!==null){if(f.map.depthTexture!==null)f.map.depthTexture.dispose(),f.map.depthTexture=null;f.map.dispose()}if(this.type===R8){if(c.isPointLight){_0("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}f.map=new mJ(W.x,W.y,{format:c9,type:D9,minFilter:jJ,magFilter:jJ,generateMipmaps:!1}),f.map.texture.name=c.name+".shadowMap",f.map.depthTexture=new S9(W.x,W.y,F9),f.map.depthTexture.name=c.name+".shadowMapDepth",f.map.depthTexture.format=l9,f.map.depthTexture.compareFunction=null,f.map.depthTexture.minFilter=P9,f.map.depthTexture.magFilter=P9}else{if(c.isPointLight)f.map=new O$(W.x),f.map.depthTexture=new pQ(W.x,T9);else f.map=new mJ(W.x,W.y),f.map.depthTexture=new S9(W.x,W.y,T9);if(f.map.depthTexture.name=c.name+".shadowMap",f.map.depthTexture.format=l9,this.type===j8)f.map.depthTexture.compareFunction=Q0?x7:h7,f.map.depthTexture.minFilter=jJ,f.map.depthTexture.magFilter=jJ;else f.map.depthTexture.compareFunction=null,f.map.depthTexture.minFilter=P9,f.map.depthTexture.magFilter=P9}f.camera.updateProjectionMatrix()}let H0=f.map.isWebGLCubeRenderTarget?6:1;for(let L0=0;L0<H0;L0++){if(f.map.isWebGLCubeRenderTarget)J.setRenderTarget(f.map,L0),J.clear();else{if(L0===0)J.setRenderTarget(f.map),J.clear();let M0=f.getViewport(L0);H.set(K.x*M0.x,K.y*M0.y,K.x*M0.z,K.y*M0.w),h.viewport(H)}if(c.isPointLight){let{camera:M0,matrix:YJ}=f,o0=c.distance||M0.far;if(o0!==M0.far)M0.far=o0,M0.updateProjectionMatrix();r8.setFromMatrixPosition(c.matrixWorld),M0.position.copy(r8),E$.copy(M0.position),E$.add(EG[L0]),M0.up.copy(qG[L0]),M0.lookAt(E$),M0.updateMatrixWorld(),YJ.makeTranslation(-r8.x,-r8.y,-r8.z),_W.multiplyMatrices(M0.projectionMatrix,M0.matrixWorldInverse),f._frustum.setFromProjectionMatrix(_W,M0.coordinateSystem,M0.reversedDepth)}else f.updateMatrices(c);Z=f.getFrustum(),L(P,O,f.camera,c,this.type)}if(f.isPointLightShadow!==!0&&this.type===R8)C(f,O);f.needsUpdate=!1}N=this.type,E.needsUpdate=!1,J.setRenderTarget(V,p,w)};function C(I,P){let O=Q.update(z);if(G.defines.VSM_SAMPLES!==I.blurSamples)G.defines.VSM_SAMPLES=I.blurSamples,D.defines.VSM_SAMPLES=I.blurSamples,G.needsUpdate=!0,D.needsUpdate=!0;if(I.mapPass===null)I.mapPass=new mJ(W.x,W.y,{format:c9,type:D9});G.uniforms.shadow_pass.value=I.map.depthTexture,G.uniforms.resolution.value=I.mapSize,G.uniforms.radius.value=I.radius,J.setRenderTarget(I.mapPass),J.clear(),J.renderBufferDirect(P,null,O,G,z,null),D.uniforms.shadow_pass.value=I.mapPass.texture,D.uniforms.resolution.value=I.mapSize,D.uniforms.radius.value=I.radius,J.setRenderTarget(I.map),J.clear(),J.renderBufferDirect(P,null,O,D,z,null)}function _(I,P,O,V){let p=null,w=O.isPointLight===!0?I.customDistanceMaterial:I.customDepthMaterial;if(w!==void 0)p=w;else if(p=O.isPointLight===!0?X:Y,J.localClippingEnabled&&P.clipShadows===!0&&Array.isArray(P.clippingPlanes)&&P.clippingPlanes.length!==0||P.displacementMap&&P.displacementScale!==0||P.alphaMap&&P.alphaTest>0||P.map&&P.alphaTest>0||P.alphaToCoverage===!0){let h=p.uuid,s=P.uuid,g=U[h];if(g===void 0)g={},U[h]=g;let u=g[s];if(u===void 0)u=p.clone(),g[s]=u,P.addEventListener("dispose",A);p=u}if(p.visible=P.visible,p.wireframe=P.wireframe,V===R8)p.side=P.shadowSide!==null?P.shadowSide:P.side;else p.side=P.shadowSide!==null?P.shadowSide:F[P.side];if(p.alphaMap=P.alphaMap,p.alphaTest=P.alphaToCoverage===!0?0.5:P.alphaTest,p.map=P.map,p.clipShadows=P.clipShadows,p.clippingPlanes=P.clippingPlanes,p.clipIntersection=P.clipIntersection,p.displacementMap=P.displacementMap,p.displacementScale=P.displacementScale,p.displacementBias=P.displacementBias,p.wireframeLinewidth=P.wireframeLinewidth,p.linewidth=P.linewidth,O.isPointLight===!0&&p.isMeshDistanceMaterial===!0){let h=J.properties.get(p);h.light=O}return p}function L(I,P,O,V,p){if(I.visible===!1)return;if(I.layers.test(P.layers)&&(I.isMesh||I.isLine||I.isPoints)){if((I.castShadow||I.receiveShadow&&p===R8)&&(!I.frustumCulled||Z.intersectsObject(I))){I.modelViewMatrix.multiplyMatrices(O.matrixWorldInverse,I.matrixWorld);let s=Q.update(I),g=I.material;if(Array.isArray(g)){let u=s.groups;for(let c=0,f=u.length;c<f;c++){let t=u[c],Q0=g[t.materialIndex];if(Q0&&Q0.visible){let H0=_(I,Q0,V,p);I.onBeforeShadow(J,I,P,O,s,H0,t),J.renderBufferDirect(O,null,s,H0,I,t),I.onAfterShadow(J,I,P,O,s,H0,t)}}}else if(g.visible){let u=_(I,g,V,p);I.onBeforeShadow(J,I,P,O,s,u,null),J.renderBufferDirect(O,null,s,u,I,null),I.onAfterShadow(J,I,P,O,s,u,null)}}}let h=I.children;for(let s=0,g=h.length;s<g;s++)L(h[s],P,O,V,p)}function A(I){I.target.removeEventListener("dispose",A);for(let O in U){let V=U[O],p=I.target.uuid;if(p in V)V[p].dispose(),delete V[p]}}}function DG(J,Q){function $(){let j=!1,K0=new GJ,i=null,X0=new GJ(0,0,0,0);return{setMask:function(O0){if(i!==O0&&!j)J.colorMask(O0,O0,O0,O0),i=O0},setLocked:function(O0){j=O0},setClear:function(O0,e,U0,v0,NJ){if(NJ===!0)O0*=v0,e*=v0,U0*=v0;if(K0.set(O0,e,U0,v0),X0.equals(K0)===!1)J.clearColor(O0,e,U0,v0),X0.copy(K0)},reset:function(){j=!1,i=null,X0.set(-1,0,0,0)}}}function Z(){let j=!1,K0=!1,i=null,X0=null,O0=null;return{setReversed:function(e){if(K0!==e){let U0=Q.get("EXT_clip_control");if(e)U0.clipControlEXT(U0.LOWER_LEFT_EXT,U0.ZERO_TO_ONE_EXT);else U0.clipControlEXT(U0.LOWER_LEFT_EXT,U0.NEGATIVE_ONE_TO_ONE_EXT);K0=e;let v0=O0;O0=null,this.setClear(v0)}},getReversed:function(){return K0},setTest:function(e){if(e)n(J.DEPTH_TEST);else Y0(J.DEPTH_TEST)},setMask:function(e){if(i!==e&&!j)J.depthMask(e),i=e},setFunc:function(e){if(K0)e=tZ[e];if(X0!==e){switch(e){case VZ:J.depthFunc(J.NEVER);break;case BZ:J.depthFunc(J.ALWAYS);break;case zZ:J.depthFunc(J.LESS);break;case m6:J.depthFunc(J.LEQUAL);break;case IZ:J.depthFunc(J.EQUAL);break;case AZ:J.depthFunc(J.GEQUAL);break;case wZ:J.depthFunc(J.GREATER);break;case _Z:J.depthFunc(J.NOTEQUAL);break;default:J.depthFunc(J.LEQUAL)}X0=e}},setLocked:function(e){j=e},setClear:function(e){if(O0!==e){if(O0=e,K0)e=1-e;J.clearDepth(e)}},reset:function(){j=!1,i=null,X0=null,O0=null,K0=!1}}}function W(){let j=!1,K0=null,i=null,X0=null,O0=null,e=null,U0=null,v0=null,NJ=null;return{setTest:function(WJ){if(!j)if(WJ)n(J.STENCIL_TEST);else Y0(J.STENCIL_TEST)},setMask:function(WJ){if(K0!==WJ&&!j)J.stencilMask(WJ),K0=WJ},setFunc:function(WJ,rJ,K9){if(i!==WJ||X0!==rJ||O0!==K9)J.stencilFunc(WJ,rJ,K9),i=WJ,X0=rJ,O0=K9},setOp:function(WJ,rJ,K9){if(e!==WJ||U0!==rJ||v0!==K9)J.stencilOp(WJ,rJ,K9),e=WJ,U0=rJ,v0=K9},setLocked:function(WJ){j=WJ},setClear:function(WJ){if(NJ!==WJ)J.clearStencil(WJ),NJ=WJ},reset:function(){j=!1,K0=null,i=null,X0=null,O0=null,e=null,U0=null,v0=null,NJ=null}}}let K=new $,H=new Z,Y=new W,X=new WeakMap,U=new WeakMap,q={},F={},G={},D=new WeakMap,M=[],z=null,E=!1,N=null,C=null,_=null,L=null,A=null,I=null,P=null,O=new y0(0,0,0),V=0,p=!1,w=null,h=null,s=null,g=null,u=null,c=J.getParameter(J.MAX_COMBINED_TEXTURE_IMAGE_UNITS),f=!1,t=0,Q0=J.getParameter(J.VERSION);if(Q0.indexOf("WebGL")!==-1)t=parseFloat(/^WebGL (\d)/.exec(Q0)[1]),f=t>=1;else if(Q0.indexOf("OpenGL ES")!==-1)t=parseFloat(/^OpenGL ES (\d)/.exec(Q0)[1]),f=t>=2;let H0=null,L0={},M0=J.getParameter(J.SCISSOR_BOX),YJ=J.getParameter(J.VIEWPORT),o0=new GJ().fromArray(M0),o=new GJ().fromArray(YJ);function W0(j,K0,i,X0){let O0=new Uint8Array(4),e=J.createTexture();J.bindTexture(j,e),J.texParameteri(j,J.TEXTURE_MIN_FILTER,J.NEAREST),J.texParameteri(j,J.TEXTURE_MAG_FILTER,J.NEAREST);for(let U0=0;U0<i;U0++)if(j===J.TEXTURE_3D||j===J.TEXTURE_2D_ARRAY)J.texImage3D(K0,0,J.RGBA,1,1,X0,0,J.RGBA,J.UNSIGNED_BYTE,O0);else J.texImage2D(K0+U0,0,J.RGBA,1,1,0,J.RGBA,J.UNSIGNED_BYTE,O0);return e}let r={};r[J.TEXTURE_2D]=W0(J.TEXTURE_2D,J.TEXTURE_2D,1),r[J.TEXTURE_CUBE_MAP]=W0(J.TEXTURE_CUBE_MAP,J.TEXTURE_CUBE_MAP_POSITIVE_X,6),r[J.TEXTURE_2D_ARRAY]=W0(J.TEXTURE_2D_ARRAY,J.TEXTURE_2D_ARRAY,1,1),r[J.TEXTURE_3D]=W0(J.TEXTURE_3D,J.TEXTURE_3D,1,1),K.setClear(0,0,0,1),H.setClear(1),Y.setClear(0),n(J.DEPTH_TEST),H.setFunc(m6),TJ(!1),t0(h6),n(J.CULL_FACE),b0(J9);function n(j){if(q[j]!==!0)J.enable(j),q[j]=!0}function Y0(j){if(q[j]!==!1)J.disable(j),q[j]=!1}function S0(j,K0){if(G[j]!==K0){if(J.bindFramebuffer(j,K0),G[j]=K0,j===J.DRAW_FRAMEBUFFER)G[J.FRAMEBUFFER]=K0;if(j===J.FRAMEBUFFER)G[J.DRAW_FRAMEBUFFER]=K0;return!0}return!1}function T0(j,K0){let i=M,X0=!1;if(j){if(i=D.get(K0),i===void 0)i=[],D.set(K0,i);let O0=j.textures;if(i.length!==O0.length||i[0]!==J.COLOR_ATTACHMENT0){for(let e=0,U0=O0.length;e<U0;e++)i[e]=J.COLOR_ATTACHMENT0+e;i.length=O0.length,X0=!0}}else if(i[0]!==J.BACK)i[0]=J.BACK,X0=!0;if(X0)J.drawBuffers(i)}function A0(j){if(z!==j)return J.useProgram(j),z=j,!0;return!1}let i0={[k8]:J.FUNC_ADD,[$Z]:J.FUNC_SUBTRACT,[ZZ]:J.FUNC_REVERSE_SUBTRACT};i0[WZ]=J.MIN,i0[KZ]=J.MAX;let d0={[HZ]:J.ZERO,[YZ]:J.ONE,[XZ]:J.SRC_COLOR,[GZ]:J.SRC_ALPHA,[OZ]:J.SRC_ALPHA_SATURATE,[FZ]:J.DST_COLOR,[EZ]:J.DST_ALPHA,[UZ]:J.ONE_MINUS_SRC_COLOR,[NZ]:J.ONE_MINUS_SRC_ALPHA,[DZ]:J.ONE_MINUS_DST_COLOR,[qZ]:J.ONE_MINUS_DST_ALPHA,[RZ]:J.CONSTANT_COLOR,[kZ]:J.ONE_MINUS_CONSTANT_COLOR,[MZ]:J.CONSTANT_ALPHA,[LZ]:J.ONE_MINUS_CONSTANT_ALPHA};function b0(j,K0,i,X0,O0,e,U0,v0,NJ,WJ){if(j===J9){if(E===!0)Y0(J.BLEND),E=!1;return}if(E===!1)n(J.BLEND),E=!0;if(j!==QZ){if(j!==N||WJ!==p){if(C!==k8||A!==k8)J.blendEquation(J.FUNC_ADD),C=k8,A=k8;if(WJ)switch(j){case y8:J.blendFuncSeparate(J.ONE,J.ONE_MINUS_SRC_ALPHA,J.ONE,J.ONE_MINUS_SRC_ALPHA);break;case x6:J.blendFunc(J.ONE,J.ONE);break;case g6:J.blendFuncSeparate(J.ZERO,J.ONE_MINUS_SRC_COLOR,J.ZERO,J.ONE);break;case p6:J.blendFuncSeparate(J.DST_COLOR,J.ONE_MINUS_SRC_ALPHA,J.ZERO,J.ONE);break;default:P0("WebGLState: Invalid blending: ",j);break}else switch(j){case y8:J.blendFuncSeparate(J.SRC_ALPHA,J.ONE_MINUS_SRC_ALPHA,J.ONE,J.ONE_MINUS_SRC_ALPHA);break;case x6:J.blendFuncSeparate(J.SRC_ALPHA,J.ONE,J.ONE,J.ONE);break;case g6:P0("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case p6:P0("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:P0("WebGLState: Invalid blending: ",j);break}_=null,L=null,I=null,P=null,O.set(0,0,0),V=0,N=j,p=WJ}return}if(O0=O0||K0,e=e||i,U0=U0||X0,K0!==C||O0!==A)J.blendEquationSeparate(i0[K0],i0[O0]),C=K0,A=O0;if(i!==_||X0!==L||e!==I||U0!==P)J.blendFuncSeparate(d0[i],d0[X0],d0[e],d0[U0]),_=i,L=X0,I=e,P=U0;if(v0.equals(O)===!1||NJ!==V)J.blendColor(v0.r,v0.g,v0.b,NJ),O.copy(v0),V=NJ;N=j,p=!1}function c0(j,K0){j.side===bJ?Y0(J.CULL_FACE):n(J.CULL_FACE);let i=j.side===_J;if(K0)i=!i;TJ(i),j.blending===y8&&j.transparent===!1?b0(J9):b0(j.blending,j.blendEquation,j.blendSrc,j.blendDst,j.blendEquationAlpha,j.blendSrcAlpha,j.blendDstAlpha,j.blendColor,j.blendAlpha,j.premultipliedAlpha),H.setFunc(j.depthFunc),H.setTest(j.depthTest),H.setMask(j.depthWrite),K.setMask(j.colorWrite);let X0=j.stencilWrite;if(Y.setTest(X0),X0)Y.setMask(j.stencilWriteMask),Y.setFunc(j.stencilFunc,j.stencilRef,j.stencilFuncMask),Y.setOp(j.stencilFail,j.stencilZFail,j.stencilZPass);ZJ(j.polygonOffset,j.polygonOffsetFactor,j.polygonOffsetUnits),j.alphaToCoverage===!0?n(J.SAMPLE_ALPHA_TO_COVERAGE):Y0(J.SAMPLE_ALPHA_TO_COVERAGE)}function TJ(j){if(w!==j){if(j)J.frontFace(J.CW);else J.frontFace(J.CCW);w=j}}function t0(j){if(j!==e$){if(n(J.CULL_FACE),j!==h)if(j===h6)J.cullFace(J.BACK);else if(j===JZ)J.cullFace(J.FRONT);else J.cullFace(J.FRONT_AND_BACK)}else Y0(J.CULL_FACE);h=j}function h0(j){if(j!==s){if(f)J.lineWidth(j);s=j}}function ZJ(j,K0,i){if(j){if(n(J.POLYGON_OFFSET_FILL),g!==K0||u!==i){if(g=K0,u=i,H.getReversed())K0=-K0;J.polygonOffset(K0,i)}}else Y0(J.POLYGON_OFFSET_FILL)}function a0(j){if(j)n(J.SCISSOR_TEST);else Y0(J.SCISSOR_TEST)}function S(j){if(j===void 0)j=J.TEXTURE0+c-1;if(H0!==j)J.activeTexture(j),H0=j}function PJ(j,K0,i){if(i===void 0)if(H0===null)i=J.TEXTURE0+c-1;else i=H0;let X0=L0[i];if(X0===void 0)X0={type:void 0,texture:void 0},L0[i]=X0;if(X0.type!==j||X0.texture!==K0){if(H0!==i)J.activeTexture(i),H0=i;J.bindTexture(j,K0||r[j]),X0.type=j,X0.texture=K0}}function n0(){let j=L0[H0];if(j!==void 0&&j.type!==void 0)J.bindTexture(j.type,null),j.type=void 0,j.texture=void 0}function XJ(){try{J.compressedTexImage2D(...arguments)}catch(j){P0("WebGLState:",j)}}function B(){try{J.compressedTexImage3D(...arguments)}catch(j){P0("WebGLState:",j)}}function R(){try{J.texSubImage2D(...arguments)}catch(j){P0("WebGLState:",j)}}function T(){try{J.texSubImage3D(...arguments)}catch(j){P0("WebGLState:",j)}}function d(){try{J.compressedTexSubImage2D(...arguments)}catch(j){P0("WebGLState:",j)}}function J0(){try{J.compressedTexSubImage3D(...arguments)}catch(j){P0("WebGLState:",j)}}function $0(){try{J.texStorage2D(...arguments)}catch(j){P0("WebGLState:",j)}}function G0(){try{J.texStorage3D(...arguments)}catch(j){P0("WebGLState:",j)}}function l(){try{J.texImage2D(...arguments)}catch(j){P0("WebGLState:",j)}}function a(){try{J.texImage3D(...arguments)}catch(j){P0("WebGLState:",j)}}function D0(j){if(F[j]!==void 0)return F[j];else return J.getParameter(j)}function B0(j,K0){if(F[j]!==K0)J.pixelStorei(j,K0),F[j]=K0}function N0(j){if(o0.equals(j)===!1)J.scissor(j.x,j.y,j.z,j.w),o0.copy(j)}function Z0(j){if(o.equals(j)===!1)J.viewport(j.x,j.y,j.z,j.w),o.copy(j)}function w0(j,K0){let i=U.get(K0);if(i===void 0)i=new WeakMap,U.set(K0,i);let X0=i.get(j);if(X0===void 0)X0=J.getUniformBlockIndex(K0,j.name),i.set(j,X0)}function C0(j,K0){let X0=U.get(K0).get(j);if(X.get(K0)!==X0)J.uniformBlockBinding(K0,X0,j.__bindingPointIndex),X.set(K0,X0)}function s0(){J.disable(J.BLEND),J.disable(J.CULL_FACE),J.disable(J.DEPTH_TEST),J.disable(J.POLYGON_OFFSET_FILL),J.disable(J.SCISSOR_TEST),J.disable(J.STENCIL_TEST),J.disable(J.SAMPLE_ALPHA_TO_COVERAGE),J.blendEquation(J.FUNC_ADD),J.blendFunc(J.ONE,J.ZERO),J.blendFuncSeparate(J.ONE,J.ZERO,J.ONE,J.ZERO),J.blendColor(0,0,0,0),J.colorMask(!0,!0,!0,!0),J.clearColor(0,0,0,0),J.depthMask(!0),J.depthFunc(J.LESS),H.setReversed(!1),J.clearDepth(1),J.stencilMask(4294967295),J.stencilFunc(J.ALWAYS,0,4294967295),J.stencilOp(J.KEEP,J.KEEP,J.KEEP),J.clearStencil(0),J.cullFace(J.BACK),J.frontFace(J.CCW),J.polygonOffset(0,0),J.activeTexture(J.TEXTURE0),J.bindFramebuffer(J.FRAMEBUFFER,null),J.bindFramebuffer(J.DRAW_FRAMEBUFFER,null),J.bindFramebuffer(J.READ_FRAMEBUFFER,null),J.useProgram(null),J.lineWidth(1),J.scissor(0,0,J.canvas.width,J.canvas.height),J.viewport(0,0,J.canvas.width,J.canvas.height),J.pixelStorei(J.PACK_ALIGNMENT,4),J.pixelStorei(J.UNPACK_ALIGNMENT,4),J.pixelStorei(J.UNPACK_FLIP_Y_WEBGL,!1),J.pixelStorei(J.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),J.pixelStorei(J.UNPACK_COLORSPACE_CONVERSION_WEBGL,J.BROWSER_DEFAULT_WEBGL),J.pixelStorei(J.PACK_ROW_LENGTH,0),J.pixelStorei(J.PACK_SKIP_PIXELS,0),J.pixelStorei(J.PACK_SKIP_ROWS,0),J.pixelStorei(J.UNPACK_ROW_LENGTH,0),J.pixelStorei(J.UNPACK_IMAGE_HEIGHT,0),J.pixelStorei(J.UNPACK_SKIP_PIXELS,0),J.pixelStorei(J.UNPACK_SKIP_ROWS,0),J.pixelStorei(J.UNPACK_SKIP_IMAGES,0),q={},F={},H0=null,L0={},G={},D=new WeakMap,M=[],z=null,E=!1,N=null,C=null,_=null,L=null,A=null,I=null,P=null,O=new y0(0,0,0),V=0,p=!1,w=null,h=null,s=null,g=null,u=null,o0.set(0,0,J.canvas.width,J.canvas.height),o.set(0,0,J.canvas.width,J.canvas.height),K.reset(),H.reset(),Y.reset()}return{buffers:{color:K,depth:H,stencil:Y},enable:n,disable:Y0,bindFramebuffer:S0,drawBuffers:T0,useProgram:A0,setBlending:b0,setMaterial:c0,setFlipSided:TJ,setCullFace:t0,setLineWidth:h0,setPolygonOffset:ZJ,setScissorTest:a0,activeTexture:S,bindTexture:PJ,unbindTexture:n0,compressedTexImage2D:XJ,compressedTexImage3D:B,texImage2D:l,texImage3D:a,pixelStorei:B0,getParameter:D0,updateUBOMapping:w0,uniformBlockBinding:C0,texStorage2D:$0,texStorage3D:G0,texSubImage2D:R,texSubImage3D:T,compressedTexSubImage2D:d,compressedTexSubImage3D:J0,scissor:N0,viewport:Z0,reset:s0}}function OG(J,Q,$,Z,W,K,H){let Y=Q.has("WEBGL_multisampled_render_to_texture")?Q.get("WEBGL_multisampled_render_to_texture"):null,X=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),U=new p0,q=new WeakMap,F=new Set,G,D=new WeakMap,M=!1;try{M=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch(B){}function z(B,R){return M?new OffscreenCanvas(B,R):T8("canvas")}function E(B,R,T){let d=1,J0=XJ(B);if(J0.width>T||J0.height>T)d=T/Math.max(J0.width,J0.height);if(d<1)if(typeof HTMLImageElement<"u"&&B instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&B instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&B instanceof ImageBitmap||typeof VideoFrame<"u"&&B instanceof VideoFrame){let $0=Math.floor(d*J0.width),G0=Math.floor(d*J0.height);if(G===void 0)G=z($0,G0);let l=R?z($0,G0):G;return l.width=$0,l.height=G0,l.getContext("2d").drawImage(B,0,0,$0,G0),_0("WebGLRenderer: Texture has been resized from ("+J0.width+"x"+J0.height+") to ("+$0+"x"+G0+")."),l}else{if("data"in B)_0("WebGLRenderer: Image in DataTexture is too big ("+J0.width+"x"+J0.height+").");return B}return B}function N(B){return B.generateMipmaps}function C(B){J.generateMipmap(B)}function _(B){if(B.isWebGLCubeRenderTarget)return J.TEXTURE_CUBE_MAP;if(B.isWebGL3DRenderTarget)return J.TEXTURE_3D;if(B.isWebGLArrayRenderTarget||B.isCompressedArrayTexture)return J.TEXTURE_2D_ARRAY;return J.TEXTURE_2D}function L(B,R,T,d,J0,$0=!1){if(B!==null){if(J[B]!==void 0)return J[B];_0("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+B+"'")}let G0;if(d){if(G0=Q.get("EXT_texture_norm16"),!G0)_0("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension")}let l=R;if(R===J.RED){if(T===J.FLOAT)l=J.R32F;if(T===J.HALF_FLOAT)l=J.R16F;if(T===J.UNSIGNED_BYTE)l=J.R8;if(T===J.UNSIGNED_SHORT&&G0)l=G0.R16_EXT;if(T===J.SHORT&&G0)l=G0.R16_SNORM_EXT}if(R===J.RED_INTEGER){if(T===J.UNSIGNED_BYTE)l=J.R8UI;if(T===J.UNSIGNED_SHORT)l=J.R16UI;if(T===J.UNSIGNED_INT)l=J.R32UI;if(T===J.BYTE)l=J.R8I;if(T===J.SHORT)l=J.R16I;if(T===J.INT)l=J.R32I}if(R===J.RG){if(T===J.FLOAT)l=J.RG32F;if(T===J.HALF_FLOAT)l=J.RG16F;if(T===J.UNSIGNED_BYTE)l=J.RG8;if(T===J.UNSIGNED_SHORT&&G0)l=G0.RG16_EXT;if(T===J.SHORT&&G0)l=G0.RG16_SNORM_EXT}if(R===J.RG_INTEGER){if(T===J.UNSIGNED_BYTE)l=J.RG8UI;if(T===J.UNSIGNED_SHORT)l=J.RG16UI;if(T===J.UNSIGNED_INT)l=J.RG32UI;if(T===J.BYTE)l=J.RG8I;if(T===J.SHORT)l=J.RG16I;if(T===J.INT)l=J.RG32I}if(R===J.RGB_INTEGER){if(T===J.UNSIGNED_BYTE)l=J.RGB8UI;if(T===J.UNSIGNED_SHORT)l=J.RGB16UI;if(T===J.UNSIGNED_INT)l=J.RGB32UI;if(T===J.BYTE)l=J.RGB8I;if(T===J.SHORT)l=J.RGB16I;if(T===J.INT)l=J.RGB32I}if(R===J.RGBA_INTEGER){if(T===J.UNSIGNED_BYTE)l=J.RGBA8UI;if(T===J.UNSIGNED_SHORT)l=J.RGBA16UI;if(T===J.UNSIGNED_INT)l=J.RGBA32UI;if(T===J.BYTE)l=J.RGBA8I;if(T===J.SHORT)l=J.RGBA16I;if(T===J.INT)l=J.RGBA32I}if(R===J.RGB){if(T===J.UNSIGNED_SHORT&&G0)l=G0.RGB16_EXT;if(T===J.SHORT&&G0)l=G0.RGB16_SNORM_EXT;if(T===J.UNSIGNED_INT_5_9_9_9_REV)l=J.RGB9_E5;if(T===J.UNSIGNED_INT_10F_11F_11F_REV)l=J.R11F_G11F_B10F}if(R===J.RGBA){let a=$0?jQ:l0.getTransfer(J0);if(T===J.FLOAT)l=J.RGBA32F;if(T===J.HALF_FLOAT)l=J.RGBA16F;if(T===J.UNSIGNED_BYTE)l=a===$J?J.SRGB8_ALPHA8:J.RGBA8;if(T===J.UNSIGNED_SHORT&&G0)l=G0.RGBA16_EXT;if(T===J.SHORT&&G0)l=G0.RGBA16_SNORM_EXT;if(T===J.UNSIGNED_SHORT_4_4_4_4)l=J.RGBA4;if(T===J.UNSIGNED_SHORT_5_5_5_1)l=J.RGB5_A1}if(l===J.R16F||l===J.R32F||l===J.RG16F||l===J.RG32F||l===J.RGBA16F||l===J.RGBA32F)Q.get("EXT_color_buffer_float");return l}function A(B,R){let T;if(B){if(R===null||R===T9||R===L8)T=J.DEPTH24_STENCIL8;else if(R===F9)T=J.DEPTH32F_STENCIL8;else if(R===h8)T=J.DEPTH24_STENCIL8,_0("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")}else if(R===null||R===T9||R===L8)T=J.DEPTH_COMPONENT24;else if(R===F9)T=J.DEPTH_COMPONENT32F;else if(R===h8)T=J.DEPTH_COMPONENT16;return T}function I(B,R){if(N(B)===!0||B.isFramebufferTexture&&B.minFilter!==P9&&B.minFilter!==jJ)return Math.log2(Math.max(R.width,R.height))+1;else if(B.mipmaps!==void 0&&B.mipmaps.length>0)return B.mipmaps.length;else if(B.isCompressedTexture&&Array.isArray(B.image))return R.mipmaps.length;else return 1}function P(B){let R=B.target;if(R.removeEventListener("dispose",P),V(R),R.isVideoTexture)q.delete(R);if(R.isHTMLTexture)F.delete(R)}function O(B){let R=B.target;R.removeEventListener("dispose",O),w(R)}function V(B){let R=Z.get(B);if(R.__webglInit===void 0)return;let T=B.source,d=D.get(T);if(d){let J0=d[R.__cacheKey];if(J0.usedTimes--,J0.usedTimes===0)p(B);if(Object.keys(d).length===0)D.delete(T)}Z.remove(B)}function p(B){let R=Z.get(B);J.deleteTexture(R.__webglTexture);let T=B.source,d=D.get(T);delete d[R.__cacheKey],H.memory.textures--}function w(B){let R=Z.get(B);if(B.depthTexture)B.depthTexture.dispose(),Z.remove(B.depthTexture);if(B.isWebGLCubeRenderTarget)for(let d=0;d<6;d++){if(Array.isArray(R.__webglFramebuffer[d]))for(let J0=0;J0<R.__webglFramebuffer[d].length;J0++)J.deleteFramebuffer(R.__webglFramebuffer[d][J0]);else J.deleteFramebuffer(R.__webglFramebuffer[d]);if(R.__webglDepthbuffer)J.deleteRenderbuffer(R.__webglDepthbuffer[d])}else{if(Array.isArray(R.__webglFramebuffer))for(let d=0;d<R.__webglFramebuffer.length;d++)J.deleteFramebuffer(R.__webglFramebuffer[d]);else J.deleteFramebuffer(R.__webglFramebuffer);if(R.__webglDepthbuffer)J.deleteRenderbuffer(R.__webglDepthbuffer);if(R.__webglMultisampledFramebuffer)J.deleteFramebuffer(R.__webglMultisampledFramebuffer);if(R.__webglColorRenderbuffer){for(let d=0;d<R.__webglColorRenderbuffer.length;d++)if(R.__webglColorRenderbuffer[d])J.deleteRenderbuffer(R.__webglColorRenderbuffer[d])}if(R.__webglDepthRenderbuffer)J.deleteRenderbuffer(R.__webglDepthRenderbuffer)}let T=B.textures;for(let d=0,J0=T.length;d<J0;d++){let $0=Z.get(T[d]);if($0.__webglTexture)J.deleteTexture($0.__webglTexture),H.memory.textures--;Z.remove(T[d])}Z.remove(B)}let h=0;function s(){h=0}function g(){return h}function u(B){h=B}function c(){let B=h;if(B>=W.maxTextures)_0("WebGLTextures: Trying to use "+B+" texture units while this GPU supports only "+W.maxTextures);return h+=1,B}function f(B){let R=[];return R.push(B.wrapS),R.push(B.wrapT),R.push(B.wrapR||0),R.push(B.magFilter),R.push(B.minFilter),R.push(B.anisotropy),R.push(B.internalFormat),R.push(B.format),R.push(B.type),R.push(B.generateMipmaps),R.push(B.premultiplyAlpha),R.push(B.flipY),R.push(B.unpackAlignment),R.push(B.colorSpace),R.join()}function t(B,R){let T=Z.get(B);if(B.isVideoTexture)PJ(B);if(B.isRenderTargetTexture===!1&&B.isExternalTexture!==!0&&B.version>0&&T.__version!==B.version){let d=B.image;if(d===null)_0("WebGLRenderer: Texture marked for update but no image data found.");else if(d.complete===!1)_0("WebGLRenderer: Texture marked for update but image is incomplete");else{Y0(T,B,R);return}}else if(B.isExternalTexture)T.__webglTexture=B.sourceTexture?B.sourceTexture:null;$.bindTexture(J.TEXTURE_2D,T.__webglTexture,J.TEXTURE0+R)}function Q0(B,R){let T=Z.get(B);if(B.isRenderTargetTexture===!1&&B.version>0&&T.__version!==B.version){Y0(T,B,R);return}else if(B.isExternalTexture)T.__webglTexture=B.sourceTexture?B.sourceTexture:null;$.bindTexture(J.TEXTURE_2D_ARRAY,T.__webglTexture,J.TEXTURE0+R)}function H0(B,R){let T=Z.get(B);if(B.isRenderTargetTexture===!1&&B.version>0&&T.__version!==B.version){Y0(T,B,R);return}$.bindTexture(J.TEXTURE_3D,T.__webglTexture,J.TEXTURE0+R)}function L0(B,R){let T=Z.get(B);if(B.isCubeDepthTexture!==!0&&B.version>0&&T.__version!==B.version){S0(T,B,R);return}$.bindTexture(J.TEXTURE_CUBE_MAP,T.__webglTexture,J.TEXTURE0+R)}let M0={[SZ]:J.REPEAT,[P7]:J.CLAMP_TO_EDGE,[jZ]:J.MIRRORED_REPEAT},YJ={[P9]:J.NEAREST,[yZ]:J.NEAREST_MIPMAP_NEAREST,[b8]:J.NEAREST_MIPMAP_LINEAR,[jJ]:J.LINEAR,[T7]:J.LINEAR_MIPMAP_NEAREST,[d9]:J.LINEAR_MIPMAP_LINEAR},o0={[lZ]:J.NEVER,[iZ]:J.ALWAYS,[uZ]:J.LESS,[h7]:J.LEQUAL,[cZ]:J.EQUAL,[x7]:J.GEQUAL,[nZ]:J.GREATER,[sZ]:J.NOTEQUAL};function o(B,R){if(R.type===F9&&Q.has("OES_texture_float_linear")===!1&&(R.magFilter===jJ||R.magFilter===T7||R.magFilter===b8||R.magFilter===d9||R.minFilter===jJ||R.minFilter===T7||R.minFilter===b8||R.minFilter===d9))_0("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device.");if(J.texParameteri(B,J.TEXTURE_WRAP_S,M0[R.wrapS]),J.texParameteri(B,J.TEXTURE_WRAP_T,M0[R.wrapT]),B===J.TEXTURE_3D||B===J.TEXTURE_2D_ARRAY)J.texParameteri(B,J.TEXTURE_WRAP_R,M0[R.wrapR]);if(J.texParameteri(B,J.TEXTURE_MAG_FILTER,YJ[R.magFilter]),J.texParameteri(B,J.TEXTURE_MIN_FILTER,YJ[R.minFilter]),R.compareFunction)J.texParameteri(B,J.TEXTURE_COMPARE_MODE,J.COMPARE_REF_TO_TEXTURE),J.texParameteri(B,J.TEXTURE_COMPARE_FUNC,o0[R.compareFunction]);if(Q.has("EXT_texture_filter_anisotropic")===!0){if(R.magFilter===P9)return;if(R.minFilter!==b8&&R.minFilter!==d9)return;if(R.type===F9&&Q.has("OES_texture_float_linear")===!1)return;if(R.anisotropy>1||Z.get(R).__currentAnisotropy){let T=Q.get("EXT_texture_filter_anisotropic");J.texParameterf(B,T.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(R.anisotropy,W.getMaxAnisotropy())),Z.get(R).__currentAnisotropy=R.anisotropy}}}function W0(B,R){let T=!1;if(B.__webglInit===void 0)B.__webglInit=!0,R.addEventListener("dispose",P);let d=R.source,J0=D.get(d);if(J0===void 0)J0={},D.set(d,J0);let $0=f(R);if($0!==B.__cacheKey){if(J0[$0]===void 0)J0[$0]={texture:J.createTexture(),usedTimes:0},H.memory.textures++,T=!0;J0[$0].usedTimes++;let G0=J0[B.__cacheKey];if(G0!==void 0){if(J0[B.__cacheKey].usedTimes--,G0.usedTimes===0)p(R)}B.__cacheKey=$0,B.__webglTexture=J0[$0].texture}return T}function r(B,R,T){return Math.floor(Math.floor(B/T)/R)}function n(B,R,T,d){let $0=B.updateRanges;if($0.length===0)$.texSubImage2D(J.TEXTURE_2D,0,0,0,R.width,R.height,T,d,R.data);else{$0.sort((B0,N0)=>B0.start-N0.start);let G0=0;for(let B0=1;B0<$0.length;B0++){let N0=$0[G0],Z0=$0[B0],w0=N0.start+N0.count,C0=r(Z0.start,R.width,4),s0=r(N0.start,R.width,4);if(Z0.start<=w0+1&&C0===s0&&r(Z0.start+Z0.count-1,R.width,4)===C0)N0.count=Math.max(N0.count,Z0.start+Z0.count-N0.start);else++G0,$0[G0]=Z0}$0.length=G0+1;let l=$.getParameter(J.UNPACK_ROW_LENGTH),a=$.getParameter(J.UNPACK_SKIP_PIXELS),D0=$.getParameter(J.UNPACK_SKIP_ROWS);$.pixelStorei(J.UNPACK_ROW_LENGTH,R.width);for(let B0=0,N0=$0.length;B0<N0;B0++){let Z0=$0[B0],w0=Math.floor(Z0.start/4),C0=Math.ceil(Z0.count/4),s0=w0%R.width,j=Math.floor(w0/R.width),K0=C0,i=1;$.pixelStorei(J.UNPACK_SKIP_PIXELS,s0),$.pixelStorei(J.UNPACK_SKIP_ROWS,j),$.texSubImage2D(J.TEXTURE_2D,0,s0,j,K0,1,T,d,R.data)}B.clearUpdateRanges(),$.pixelStorei(J.UNPACK_ROW_LENGTH,l),$.pixelStorei(J.UNPACK_SKIP_PIXELS,a),$.pixelStorei(J.UNPACK_SKIP_ROWS,D0)}}function Y0(B,R,T){let d=J.TEXTURE_2D;if(R.isDataArrayTexture||R.isCompressedArrayTexture)d=J.TEXTURE_2D_ARRAY;if(R.isData3DTexture)d=J.TEXTURE_3D;let J0=W0(B,R),$0=R.source;$.bindTexture(d,B.__webglTexture,J.TEXTURE0+T);let G0=Z.get($0);if($0.version!==G0.__version||J0===!0){if($.activeTexture(J.TEXTURE0+T),(typeof ImageBitmap<"u"&&R.image instanceof ImageBitmap)===!1){let i=l0.getPrimaries(l0.workingColorSpace),X0=R.colorSpace===n9?null:l0.getPrimaries(R.colorSpace),O0=R.colorSpace===n9||i===X0?J.NONE:J.BROWSER_DEFAULT_WEBGL;$.pixelStorei(J.UNPACK_FLIP_Y_WEBGL,R.flipY),$.pixelStorei(J.UNPACK_PREMULTIPLY_ALPHA_WEBGL,R.premultiplyAlpha),$.pixelStorei(J.UNPACK_COLORSPACE_CONVERSION_WEBGL,O0)}$.pixelStorei(J.UNPACK_ALIGNMENT,R.unpackAlignment);let a=E(R.image,!1,W.maxTextureSize);a=n0(R,a);let D0=K.convert(R.format,R.colorSpace),B0=K.convert(R.type),N0=L(R.internalFormat,D0,B0,R.normalized,R.colorSpace,R.isVideoTexture);o(d,R);let Z0,w0=R.mipmaps,C0=R.isVideoTexture!==!0,s0=G0.__version===void 0||J0===!0,j=$0.dataReady,K0=I(R,a);if(R.isDepthTexture){if(N0=A(R.format===u9,R.type),s0)if(C0)$.texStorage2D(J.TEXTURE_2D,1,N0,a.width,a.height);else $.texImage2D(J.TEXTURE_2D,0,N0,a.width,a.height,0,D0,B0,null)}else if(R.isDataTexture)if(w0.length>0){if(C0&&s0)$.texStorage2D(J.TEXTURE_2D,K0,N0,w0[0].width,w0[0].height);for(let i=0,X0=w0.length;i<X0;i++)if(Z0=w0[i],C0){if(j)$.texSubImage2D(J.TEXTURE_2D,i,0,0,Z0.width,Z0.height,D0,B0,Z0.data)}else $.texImage2D(J.TEXTURE_2D,i,N0,Z0.width,Z0.height,0,D0,B0,Z0.data);R.generateMipmaps=!1}else if(C0){if(s0)$.texStorage2D(J.TEXTURE_2D,K0,N0,a.width,a.height);if(j)n(R,a,D0,B0)}else $.texImage2D(J.TEXTURE_2D,0,N0,a.width,a.height,0,D0,B0,a.data);else if(R.isCompressedTexture)if(R.isCompressedArrayTexture){if(C0&&s0)$.texStorage3D(J.TEXTURE_2D_ARRAY,K0,N0,w0[0].width,w0[0].height,a.depth);for(let i=0,X0=w0.length;i<X0;i++)if(Z0=w0[i],R.format!==Q9)if(D0!==null)if(C0){if(j)if(R.layerUpdates.size>0){let O0=H$(Z0.width,Z0.height,R.format,R.type);for(let e of R.layerUpdates){let U0=Z0.data.subarray(e*O0/Z0.data.BYTES_PER_ELEMENT,(e+1)*O0/Z0.data.BYTES_PER_ELEMENT);$.compressedTexSubImage3D(J.TEXTURE_2D_ARRAY,i,0,0,e,Z0.width,Z0.height,1,D0,U0)}R.clearLayerUpdates()}else $.compressedTexSubImage3D(J.TEXTURE_2D_ARRAY,i,0,0,0,Z0.width,Z0.height,a.depth,D0,Z0.data)}else $.compressedTexImage3D(J.TEXTURE_2D_ARRAY,i,N0,Z0.width,Z0.height,a.depth,0,Z0.data,0,0);else _0("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else if(C0){if(j)$.texSubImage3D(J.TEXTURE_2D_ARRAY,i,0,0,0,Z0.width,Z0.height,a.depth,D0,B0,Z0.data)}else $.texImage3D(J.TEXTURE_2D_ARRAY,i,N0,Z0.width,Z0.height,a.depth,0,D0,B0,Z0.data)}else{if(C0&&s0)$.texStorage2D(J.TEXTURE_2D,K0,N0,w0[0].width,w0[0].height);for(let i=0,X0=w0.length;i<X0;i++)if(Z0=w0[i],R.format!==Q9)if(D0!==null)if(C0){if(j)$.compressedTexSubImage2D(J.TEXTURE_2D,i,0,0,Z0.width,Z0.height,D0,Z0.data)}else $.compressedTexImage2D(J.TEXTURE_2D,i,N0,Z0.width,Z0.height,0,Z0.data);else _0("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else if(C0){if(j)$.texSubImage2D(J.TEXTURE_2D,i,0,0,Z0.width,Z0.height,D0,B0,Z0.data)}else $.texImage2D(J.TEXTURE_2D,i,N0,Z0.width,Z0.height,0,D0,B0,Z0.data)}else if(R.isDataArrayTexture)if(C0){if(s0)$.texStorage3D(J.TEXTURE_2D_ARRAY,K0,N0,a.width,a.height,a.depth);if(j)if(R.layerUpdates.size>0){let i=H$(a.width,a.height,R.format,R.type);for(let X0 of R.layerUpdates){let O0=a.data.subarray(X0*i/a.data.BYTES_PER_ELEMENT,(X0+1)*i/a.data.BYTES_PER_ELEMENT);$.texSubImage3D(J.TEXTURE_2D_ARRAY,0,0,0,X0,a.width,a.height,1,D0,B0,O0)}R.clearLayerUpdates()}else $.texSubImage3D(J.TEXTURE_2D_ARRAY,0,0,0,0,a.width,a.height,a.depth,D0,B0,a.data)}else $.texImage3D(J.TEXTURE_2D_ARRAY,0,N0,a.width,a.height,a.depth,0,D0,B0,a.data);else if(R.isData3DTexture)if(C0){if(s0)$.texStorage3D(J.TEXTURE_3D,K0,N0,a.width,a.height,a.depth);if(j)$.texSubImage3D(J.TEXTURE_3D,0,0,0,0,a.width,a.height,a.depth,D0,B0,a.data)}else $.texImage3D(J.TEXTURE_3D,0,N0,a.width,a.height,a.depth,0,D0,B0,a.data);else if(R.isFramebufferTexture){if(s0)if(C0)$.texStorage2D(J.TEXTURE_2D,K0,N0,a.width,a.height);else{let{width:i,height:X0}=a;for(let O0=0;O0<K0;O0++)$.texImage2D(J.TEXTURE_2D,O0,N0,i,X0,0,D0,B0,null),i>>=1,X0>>=1}}else if(R.isHTMLTexture){if("texElementImage2D"in J){let i=J.canvas;if(!i.hasAttribute("layoutsubtree"))i.setAttribute("layoutsubtree","true");if(a.parentNode!==i){i.appendChild(a),F.add(R),i.onpaint=(X0)=>{let O0=X0.changedElements;for(let e of F)if(O0.includes(e.image))e.needsUpdate=!0},i.requestPaint();return}if(J.texElementImage2D.length===3)J.texElementImage2D(J.TEXTURE_2D,J.RGBA8,a);else{let{RGBA:O0,RGBA:e,UNSIGNED_BYTE:U0}=J;J.texElementImage2D(J.TEXTURE_2D,0,O0,e,U0,a)}J.texParameteri(J.TEXTURE_2D,J.TEXTURE_MIN_FILTER,J.LINEAR),J.texParameteri(J.TEXTURE_2D,J.TEXTURE_WRAP_S,J.CLAMP_TO_EDGE),J.texParameteri(J.TEXTURE_2D,J.TEXTURE_WRAP_T,J.CLAMP_TO_EDGE)}}else if(w0.length>0){if(C0&&s0){let i=XJ(w0[0]);$.texStorage2D(J.TEXTURE_2D,K0,N0,i.width,i.height)}for(let i=0,X0=w0.length;i<X0;i++)if(Z0=w0[i],C0){if(j)$.texSubImage2D(J.TEXTURE_2D,i,0,0,D0,B0,Z0)}else $.texImage2D(J.TEXTURE_2D,i,N0,D0,B0,Z0);R.generateMipmaps=!1}else if(C0){if(s0){let i=XJ(a);$.texStorage2D(J.TEXTURE_2D,K0,N0,i.width,i.height)}if(j)$.texSubImage2D(J.TEXTURE_2D,0,0,0,D0,B0,a)}else $.texImage2D(J.TEXTURE_2D,0,N0,D0,B0,a);if(N(R))C(d);if(G0.__version=$0.version,R.onUpdate)R.onUpdate(R)}B.__version=R.version}function S0(B,R,T){if(R.image.length!==6)return;let d=W0(B,R),J0=R.source;$.bindTexture(J.TEXTURE_CUBE_MAP,B.__webglTexture,J.TEXTURE0+T);let $0=Z.get(J0);if(J0.version!==$0.__version||d===!0){$.activeTexture(J.TEXTURE0+T);let G0=l0.getPrimaries(l0.workingColorSpace),l=R.colorSpace===n9?null:l0.getPrimaries(R.colorSpace),a=R.colorSpace===n9||G0===l?J.NONE:J.BROWSER_DEFAULT_WEBGL;$.pixelStorei(J.UNPACK_FLIP_Y_WEBGL,R.flipY),$.pixelStorei(J.UNPACK_PREMULTIPLY_ALPHA_WEBGL,R.premultiplyAlpha),$.pixelStorei(J.UNPACK_ALIGNMENT,R.unpackAlignment),$.pixelStorei(J.UNPACK_COLORSPACE_CONVERSION_WEBGL,a);let D0=R.isCompressedTexture||R.image[0].isCompressedTexture,B0=R.image[0]&&R.image[0].isDataTexture,N0=[];for(let e=0;e<6;e++){if(!D0&&!B0)N0[e]=E(R.image[e],!0,W.maxCubemapSize);else N0[e]=B0?R.image[e].image:R.image[e];N0[e]=n0(R,N0[e])}let Z0=N0[0],w0=K.convert(R.format,R.colorSpace),C0=K.convert(R.type),s0=L(R.internalFormat,w0,C0,R.normalized,R.colorSpace),j=R.isVideoTexture!==!0,K0=$0.__version===void 0||d===!0,i=J0.dataReady,X0=I(R,Z0);o(J.TEXTURE_CUBE_MAP,R);let O0;if(D0){if(j&&K0)$.texStorage2D(J.TEXTURE_CUBE_MAP,X0,s0,Z0.width,Z0.height);for(let e=0;e<6;e++){O0=N0[e].mipmaps;for(let U0=0;U0<O0.length;U0++){let v0=O0[U0];if(R.format!==Q9)if(w0!==null)if(j){if(i)$.compressedTexSubImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+e,U0,0,0,v0.width,v0.height,w0,v0.data)}else $.compressedTexImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+e,U0,s0,v0.width,v0.height,0,v0.data);else _0("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()");else if(j){if(i)$.texSubImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+e,U0,0,0,v0.width,v0.height,w0,C0,v0.data)}else $.texImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+e,U0,s0,v0.width,v0.height,0,w0,C0,v0.data)}}}else{if(O0=R.mipmaps,j&&K0){if(O0.length>0)X0++;let e=XJ(N0[0]);$.texStorage2D(J.TEXTURE_CUBE_MAP,X0,s0,e.width,e.height)}for(let e=0;e<6;e++)if(B0){if(j){if(i)$.texSubImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+e,0,0,0,N0[e].width,N0[e].height,w0,C0,N0[e].data)}else $.texImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+e,0,s0,N0[e].width,N0[e].height,0,w0,C0,N0[e].data);for(let U0=0;U0<O0.length;U0++){let NJ=O0[U0].image[e].image;if(j){if(i)$.texSubImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+e,U0+1,0,0,NJ.width,NJ.height,w0,C0,NJ.data)}else $.texImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+e,U0+1,s0,NJ.width,NJ.height,0,w0,C0,NJ.data)}}else{if(j){if(i)$.texSubImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+e,0,0,0,w0,C0,N0[e])}else $.texImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+e,0,s0,w0,C0,N0[e]);for(let U0=0;U0<O0.length;U0++){let v0=O0[U0];if(j){if(i)$.texSubImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+e,U0+1,0,0,w0,C0,v0.image[e])}else $.texImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+e,U0+1,s0,w0,C0,v0.image[e])}}}if(N(R))C(J.TEXTURE_CUBE_MAP);if($0.__version=J0.version,R.onUpdate)R.onUpdate(R)}B.__version=R.version}function T0(B,R,T,d,J0,$0){let G0=K.convert(T.format,T.colorSpace),l=K.convert(T.type),a=L(T.internalFormat,G0,l,T.normalized,T.colorSpace),D0=Z.get(R),B0=Z.get(T);if(B0.__renderTarget=R,!D0.__hasExternalTextures){let N0=Math.max(1,R.width>>$0),Z0=Math.max(1,R.height>>$0);if(J0===J.TEXTURE_3D||J0===J.TEXTURE_2D_ARRAY)$.texImage3D(J0,$0,a,N0,Z0,R.depth,0,G0,l,null);else $.texImage2D(J0,$0,a,N0,Z0,0,G0,l,null)}if($.bindFramebuffer(J.FRAMEBUFFER,B),S(R))Y.framebufferTexture2DMultisampleEXT(J.FRAMEBUFFER,d,J0,B0.__webglTexture,0,a0(R));else if(J0===J.TEXTURE_2D||J0>=J.TEXTURE_CUBE_MAP_POSITIVE_X&&J0<=J.TEXTURE_CUBE_MAP_NEGATIVE_Z)J.framebufferTexture2D(J.FRAMEBUFFER,d,J0,B0.__webglTexture,$0);$.bindFramebuffer(J.FRAMEBUFFER,null)}function A0(B,R,T){if(J.bindRenderbuffer(J.RENDERBUFFER,B),R.depthBuffer){let d=R.depthTexture,J0=d&&d.isDepthTexture?d.type:null,$0=A(R.stencilBuffer,J0),G0=R.stencilBuffer?J.DEPTH_STENCIL_ATTACHMENT:J.DEPTH_ATTACHMENT;if(S(R))Y.renderbufferStorageMultisampleEXT(J.RENDERBUFFER,a0(R),$0,R.width,R.height);else if(T)J.renderbufferStorageMultisample(J.RENDERBUFFER,a0(R),$0,R.width,R.height);else J.renderbufferStorage(J.RENDERBUFFER,$0,R.width,R.height);J.framebufferRenderbuffer(J.FRAMEBUFFER,G0,J.RENDERBUFFER,B)}else{let d=R.textures;for(let J0=0;J0<d.length;J0++){let $0=d[J0],G0=K.convert($0.format,$0.colorSpace),l=K.convert($0.type),a=L($0.internalFormat,G0,l,$0.normalized,$0.colorSpace);if(S(R))Y.renderbufferStorageMultisampleEXT(J.RENDERBUFFER,a0(R),a,R.width,R.height);else if(T)J.renderbufferStorageMultisample(J.RENDERBUFFER,a0(R),a,R.width,R.height);else J.renderbufferStorage(J.RENDERBUFFER,a,R.width,R.height)}}J.bindRenderbuffer(J.RENDERBUFFER,null)}function i0(B,R,T){let d=R.isWebGLCubeRenderTarget===!0;if($.bindFramebuffer(J.FRAMEBUFFER,B),!(R.depthTexture&&R.depthTexture.isDepthTexture))throw Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let J0=Z.get(R.depthTexture);if(J0.__renderTarget=R,!J0.__webglTexture||R.depthTexture.image.width!==R.width||R.depthTexture.image.height!==R.height)R.depthTexture.image.width=R.width,R.depthTexture.image.height=R.height,R.depthTexture.needsUpdate=!0;if(d){if(J0.__webglInit===void 0)J0.__webglInit=!0,R.depthTexture.addEventListener("dispose",P);if(J0.__webglTexture===void 0){J0.__webglTexture=J.createTexture(),$.bindTexture(J.TEXTURE_CUBE_MAP,J0.__webglTexture),o(J.TEXTURE_CUBE_MAP,R.depthTexture);let D0=K.convert(R.depthTexture.format),B0=K.convert(R.depthTexture.type),N0;if(R.depthTexture.format===l9)N0=J.DEPTH_COMPONENT24;else if(R.depthTexture.format===u9)N0=J.DEPTH24_STENCIL8;for(let Z0=0;Z0<6;Z0++)J.texImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+Z0,0,N0,R.width,R.height,0,D0,B0,null)}}else t(R.depthTexture,0);let $0=J0.__webglTexture,G0=a0(R),l=d?J.TEXTURE_CUBE_MAP_POSITIVE_X+T:J.TEXTURE_2D,a=R.depthTexture.format===u9?J.DEPTH_STENCIL_ATTACHMENT:J.DEPTH_ATTACHMENT;if(R.depthTexture.format===l9)if(S(R))Y.framebufferTexture2DMultisampleEXT(J.FRAMEBUFFER,a,l,$0,0,G0);else J.framebufferTexture2D(J.FRAMEBUFFER,a,l,$0,0);else if(R.depthTexture.format===u9)if(S(R))Y.framebufferTexture2DMultisampleEXT(J.FRAMEBUFFER,a,l,$0,0,G0);else J.framebufferTexture2D(J.FRAMEBUFFER,a,l,$0,0);else throw Error("THREE.WebGLTextures: Unknown depthTexture format.")}function d0(B){let R=Z.get(B),T=B.isWebGLCubeRenderTarget===!0;if(R.__boundDepthTexture!==B.depthTexture){let d=B.depthTexture;if(R.__depthDisposeCallback)R.__depthDisposeCallback();if(d){let J0=()=>{delete R.__boundDepthTexture,delete R.__depthDisposeCallback,d.removeEventListener("dispose",J0)};d.addEventListener("dispose",J0),R.__depthDisposeCallback=J0}R.__boundDepthTexture=d}if(B.depthTexture&&!R.__autoAllocateDepthBuffer)if(T)for(let d=0;d<6;d++)i0(R.__webglFramebuffer[d],B,d);else{let d=B.texture.mipmaps;if(d&&d.length>0)i0(R.__webglFramebuffer[0],B,0);else i0(R.__webglFramebuffer,B,0)}else if(T){R.__webglDepthbuffer=[];for(let d=0;d<6;d++)if($.bindFramebuffer(J.FRAMEBUFFER,R.__webglFramebuffer[d]),R.__webglDepthbuffer[d]===void 0)R.__webglDepthbuffer[d]=J.createRenderbuffer(),A0(R.__webglDepthbuffer[d],B,!1);else{let J0=B.stencilBuffer?J.DEPTH_STENCIL_ATTACHMENT:J.DEPTH_ATTACHMENT,$0=R.__webglDepthbuffer[d];J.bindRenderbuffer(J.RENDERBUFFER,$0),J.framebufferRenderbuffer(J.FRAMEBUFFER,J0,J.RENDERBUFFER,$0)}}else{let d=B.texture.mipmaps;if(d&&d.length>0)$.bindFramebuffer(J.FRAMEBUFFER,R.__webglFramebuffer[0]);else $.bindFramebuffer(J.FRAMEBUFFER,R.__webglFramebuffer);if(R.__webglDepthbuffer===void 0)R.__webglDepthbuffer=J.createRenderbuffer(),A0(R.__webglDepthbuffer,B,!1);else{let J0=B.stencilBuffer?J.DEPTH_STENCIL_ATTACHMENT:J.DEPTH_ATTACHMENT,$0=R.__webglDepthbuffer;J.bindRenderbuffer(J.RENDERBUFFER,$0),J.framebufferRenderbuffer(J.FRAMEBUFFER,J0,J.RENDERBUFFER,$0)}}$.bindFramebuffer(J.FRAMEBUFFER,null)}function b0(B,R,T){let d=Z.get(B);if(R!==void 0)T0(d.__webglFramebuffer,B,B.texture,J.COLOR_ATTACHMENT0,J.TEXTURE_2D,0);if(T!==void 0)d0(B)}function c0(B){let R=B.texture,T=Z.get(B),d=Z.get(R);B.addEventListener("dispose",O);let J0=B.textures,$0=B.isWebGLCubeRenderTarget===!0,G0=J0.length>1;if(!G0){if(d.__webglTexture===void 0)d.__webglTexture=J.createTexture();d.__version=R.version,H.memory.textures++}if($0){T.__webglFramebuffer=[];for(let l=0;l<6;l++)if(R.mipmaps&&R.mipmaps.length>0){T.__webglFramebuffer[l]=[];for(let a=0;a<R.mipmaps.length;a++)T.__webglFramebuffer[l][a]=J.createFramebuffer()}else T.__webglFramebuffer[l]=J.createFramebuffer()}else{if(R.mipmaps&&R.mipmaps.length>0){T.__webglFramebuffer=[];for(let l=0;l<R.mipmaps.length;l++)T.__webglFramebuffer[l]=J.createFramebuffer()}else T.__webglFramebuffer=J.createFramebuffer();if(G0)for(let l=0,a=J0.length;l<a;l++){let D0=Z.get(J0[l]);if(D0.__webglTexture===void 0)D0.__webglTexture=J.createTexture(),H.memory.textures++}if(B.samples>0&&S(B)===!1){T.__webglMultisampledFramebuffer=J.createFramebuffer(),T.__webglColorRenderbuffer=[],$.bindFramebuffer(J.FRAMEBUFFER,T.__webglMultisampledFramebuffer);for(let l=0;l<J0.length;l++){let a=J0[l];T.__webglColorRenderbuffer[l]=J.createRenderbuffer(),J.bindRenderbuffer(J.RENDERBUFFER,T.__webglColorRenderbuffer[l]);let D0=K.convert(a.format,a.colorSpace),B0=K.convert(a.type),N0=L(a.internalFormat,D0,B0,a.normalized,a.colorSpace,B.isXRRenderTarget===!0),Z0=a0(B);J.renderbufferStorageMultisample(J.RENDERBUFFER,Z0,N0,B.width,B.height),J.framebufferRenderbuffer(J.FRAMEBUFFER,J.COLOR_ATTACHMENT0+l,J.RENDERBUFFER,T.__webglColorRenderbuffer[l])}if(J.bindRenderbuffer(J.RENDERBUFFER,null),B.depthBuffer)T.__webglDepthRenderbuffer=J.createRenderbuffer(),A0(T.__webglDepthRenderbuffer,B,!0);$.bindFramebuffer(J.FRAMEBUFFER,null)}}if($0){$.bindTexture(J.TEXTURE_CUBE_MAP,d.__webglTexture),o(J.TEXTURE_CUBE_MAP,R);for(let l=0;l<6;l++)if(R.mipmaps&&R.mipmaps.length>0)for(let a=0;a<R.mipmaps.length;a++)T0(T.__webglFramebuffer[l][a],B,R,J.COLOR_ATTACHMENT0,J.TEXTURE_CUBE_MAP_POSITIVE_X+l,a);else T0(T.__webglFramebuffer[l],B,R,J.COLOR_ATTACHMENT0,J.TEXTURE_CUBE_MAP_POSITIVE_X+l,0);if(N(R))C(J.TEXTURE_CUBE_MAP);$.unbindTexture()}else if(G0){for(let l=0,a=J0.length;l<a;l++){let D0=J0[l],B0=Z.get(D0),N0=J.TEXTURE_2D;if(B.isWebGL3DRenderTarget||B.isWebGLArrayRenderTarget)N0=B.isWebGL3DRenderTarget?J.TEXTURE_3D:J.TEXTURE_2D_ARRAY;if($.bindTexture(N0,B0.__webglTexture),o(N0,D0),T0(T.__webglFramebuffer,B,D0,J.COLOR_ATTACHMENT0+l,N0,0),N(D0))C(N0)}$.unbindTexture()}else{let l=J.TEXTURE_2D;if(B.isWebGL3DRenderTarget||B.isWebGLArrayRenderTarget)l=B.isWebGL3DRenderTarget?J.TEXTURE_3D:J.TEXTURE_2D_ARRAY;if($.bindTexture(l,d.__webglTexture),o(l,R),R.mipmaps&&R.mipmaps.length>0)for(let a=0;a<R.mipmaps.length;a++)T0(T.__webglFramebuffer[a],B,R,J.COLOR_ATTACHMENT0,l,a);else T0(T.__webglFramebuffer,B,R,J.COLOR_ATTACHMENT0,l,0);if(N(R))C(l);$.unbindTexture()}if(B.depthBuffer)d0(B)}function TJ(B){let R=B.textures;for(let T=0,d=R.length;T<d;T++){let J0=R[T];if(N(J0)){let $0=_(B),G0=Z.get(J0).__webglTexture;$.bindTexture($0,G0),C($0),$.unbindTexture()}}}let t0=[],h0=[];function ZJ(B){if(B.samples>0){if(S(B)===!1){let{textures:R,width:T,height:d}=B,J0=J.COLOR_BUFFER_BIT,$0=B.stencilBuffer?J.DEPTH_STENCIL_ATTACHMENT:J.DEPTH_ATTACHMENT,G0=Z.get(B),l=R.length>1;if(l)for(let D0=0;D0<R.length;D0++)$.bindFramebuffer(J.FRAMEBUFFER,G0.__webglMultisampledFramebuffer),J.framebufferRenderbuffer(J.FRAMEBUFFER,J.COLOR_ATTACHMENT0+D0,J.RENDERBUFFER,null),$.bindFramebuffer(J.FRAMEBUFFER,G0.__webglFramebuffer),J.framebufferTexture2D(J.DRAW_FRAMEBUFFER,J.COLOR_ATTACHMENT0+D0,J.TEXTURE_2D,null,0);$.bindFramebuffer(J.READ_FRAMEBUFFER,G0.__webglMultisampledFramebuffer);let a=B.texture.mipmaps;if(a&&a.length>0)$.bindFramebuffer(J.DRAW_FRAMEBUFFER,G0.__webglFramebuffer[0]);else $.bindFramebuffer(J.DRAW_FRAMEBUFFER,G0.__webglFramebuffer);for(let D0=0;D0<R.length;D0++){if(B.resolveDepthBuffer){if(B.depthBuffer)J0|=J.DEPTH_BUFFER_BIT;if(B.stencilBuffer&&B.resolveStencilBuffer)J0|=J.STENCIL_BUFFER_BIT}if(l){J.framebufferRenderbuffer(J.READ_FRAMEBUFFER,J.COLOR_ATTACHMENT0,J.RENDERBUFFER,G0.__webglColorRenderbuffer[D0]);let B0=Z.get(R[D0]).__webglTexture;J.framebufferTexture2D(J.DRAW_FRAMEBUFFER,J.COLOR_ATTACHMENT0,J.TEXTURE_2D,B0,0)}if(J.blitFramebuffer(0,0,T,d,0,0,T,d,J0,J.NEAREST),X===!0){if(t0.length=0,h0.length=0,t0.push(J.COLOR_ATTACHMENT0+D0),B.depthBuffer&&B.resolveDepthBuffer===!1)t0.push($0),h0.push($0),J.invalidateFramebuffer(J.DRAW_FRAMEBUFFER,h0);J.invalidateFramebuffer(J.READ_FRAMEBUFFER,t0)}}if($.bindFramebuffer(J.READ_FRAMEBUFFER,null),$.bindFramebuffer(J.DRAW_FRAMEBUFFER,null),l)for(let D0=0;D0<R.length;D0++){$.bindFramebuffer(J.FRAMEBUFFER,G0.__webglMultisampledFramebuffer),J.framebufferRenderbuffer(J.FRAMEBUFFER,J.COLOR_ATTACHMENT0+D0,J.RENDERBUFFER,G0.__webglColorRenderbuffer[D0]);let B0=Z.get(R[D0]).__webglTexture;$.bindFramebuffer(J.FRAMEBUFFER,G0.__webglFramebuffer),J.framebufferTexture2D(J.DRAW_FRAMEBUFFER,J.COLOR_ATTACHMENT0+D0,J.TEXTURE_2D,B0,0)}$.bindFramebuffer(J.DRAW_FRAMEBUFFER,G0.__webglMultisampledFramebuffer)}else if(B.depthBuffer&&B.resolveDepthBuffer===!1&&X){let R=B.stencilBuffer?J.DEPTH_STENCIL_ATTACHMENT:J.DEPTH_ATTACHMENT;J.invalidateFramebuffer(J.DRAW_FRAMEBUFFER,[R])}}}function a0(B){return Math.min(W.maxSamples,B.samples)}function S(B){let R=Z.get(B);return B.samples>0&&Q.has("WEBGL_multisampled_render_to_texture")===!0&&R.__useRenderToTexture!==!1}function PJ(B){let R=H.render.frame;if(q.get(B)!==R)q.set(B,R),B.update()}function n0(B,R){let{colorSpace:T,format:d,type:J0}=B;if(B.isCompressedTexture===!0||B.isVideoTexture===!0)return R;if(T!==SQ&&T!==n9)if(l0.getTransfer(T)===$J){if(d!==Q9||J0!==oJ)_0("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.")}else P0("WebGLTextures: Unsupported texture color space:",T);return R}function XJ(B){if(typeof HTMLImageElement<"u"&&B instanceof HTMLImageElement)U.width=B.naturalWidth||B.width,U.height=B.naturalHeight||B.height;else if(typeof VideoFrame<"u"&&B instanceof VideoFrame)U.width=B.displayWidth,U.height=B.displayHeight;else U.width=B.width,U.height=B.height;return U}this.allocateTextureUnit=c,this.resetTextureUnits=s,this.getTextureUnits=g,this.setTextureUnits=u,this.setTexture2D=t,this.setTexture2DArray=Q0,this.setTexture3D=H0,this.setTextureCube=L0,this.rebindTextures=b0,this.setupRenderTarget=c0,this.updateRenderTargetMipmap=TJ,this.updateMultisampleRenderTarget=ZJ,this.setupDepthRenderbuffer=d0,this.setupFrameBufferTexture=T0,this.useMultisampledRTT=S,this.isReversedDepthBuffer=function(){return $.buffers.depth.getReversed()}}function RG(J,Q){function $(Z,W=n9){let K,H=l0.getTransfer(W);if(Z===oJ)return J.UNSIGNED_BYTE;if(Z===o6)return J.UNSIGNED_SHORT_4_4_4_4;if(Z===a6)return J.UNSIGNED_SHORT_5_5_5_1;if(Z===bZ)return J.UNSIGNED_INT_5_9_9_9_REV;if(Z===hZ)return J.UNSIGNED_INT_10F_11F_11F_REV;if(Z===vZ)return J.BYTE;if(Z===fZ)return J.SHORT;if(Z===h8)return J.UNSIGNED_SHORT;if(Z===i6)return J.INT;if(Z===T9)return J.UNSIGNED_INT;if(Z===F9)return J.FLOAT;if(Z===D9)return J.HALF_FLOAT;if(Z===xZ)return J.ALPHA;if(Z===gZ)return J.RGB;if(Z===Q9)return J.RGBA;if(Z===l9)return J.DEPTH_COMPONENT;if(Z===u9)return J.DEPTH_STENCIL;if(Z===pZ)return J.RED;if(Z===r6)return J.RED_INTEGER;if(Z===c9)return J.RG;if(Z===t6)return J.RG_INTEGER;if(Z===e6)return J.RGBA_INTEGER;if(Z===S7||Z===j7||Z===y7||Z===v7)if(H===$J)if(K=Q.get("WEBGL_compressed_texture_s3tc_srgb"),K!==null){if(Z===S7)return K.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(Z===j7)return K.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(Z===y7)return K.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(Z===v7)return K.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(K=Q.get("WEBGL_compressed_texture_s3tc"),K!==null){if(Z===S7)return K.COMPRESSED_RGB_S3TC_DXT1_EXT;if(Z===j7)return K.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(Z===y7)return K.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(Z===v7)return K.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(Z===JQ||Z===QQ||Z===$Q||Z===ZQ)if(K=Q.get("WEBGL_compressed_texture_pvrtc"),K!==null){if(Z===JQ)return K.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(Z===QQ)return K.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(Z===$Q)return K.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(Z===ZQ)return K.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(Z===WQ||Z===KQ||Z===HQ||Z===YQ||Z===XQ||Z===f7||Z===UQ)if(K=Q.get("WEBGL_compressed_texture_etc"),K!==null){if(Z===WQ||Z===KQ)return H===$J?K.COMPRESSED_SRGB8_ETC2:K.COMPRESSED_RGB8_ETC2;if(Z===HQ)return H===$J?K.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:K.COMPRESSED_RGBA8_ETC2_EAC;if(Z===YQ)return K.COMPRESSED_R11_EAC;if(Z===XQ)return K.COMPRESSED_SIGNED_R11_EAC;if(Z===f7)return K.COMPRESSED_RG11_EAC;if(Z===UQ)return K.COMPRESSED_SIGNED_RG11_EAC}else return null;if(Z===GQ||Z===NQ||Z===EQ||Z===qQ||Z===FQ||Z===DQ||Z===OQ||Z===RQ||Z===kQ||Z===MQ||Z===LQ||Z===VQ||Z===BQ||Z===zQ)if(K=Q.get("WEBGL_compressed_texture_astc"),K!==null){if(Z===GQ)return H===$J?K.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:K.COMPRESSED_RGBA_ASTC_4x4_KHR;if(Z===NQ)return H===$J?K.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:K.COMPRESSED_RGBA_ASTC_5x4_KHR;if(Z===EQ)return H===$J?K.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:K.COMPRESSED_RGBA_ASTC_5x5_KHR;if(Z===qQ)return H===$J?K.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:K.COMPRESSED_RGBA_ASTC_6x5_KHR;if(Z===FQ)return H===$J?K.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:K.COMPRESSED_RGBA_ASTC_6x6_KHR;if(Z===DQ)return H===$J?K.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:K.COMPRESSED_RGBA_ASTC_8x5_KHR;if(Z===OQ)return H===$J?K.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:K.COMPRESSED_RGBA_ASTC_8x6_KHR;if(Z===RQ)return H===$J?K.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:K.COMPRESSED_RGBA_ASTC_8x8_KHR;if(Z===kQ)return H===$J?K.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:K.COMPRESSED_RGBA_ASTC_10x5_KHR;if(Z===MQ)return H===$J?K.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:K.COMPRESSED_RGBA_ASTC_10x6_KHR;if(Z===LQ)return H===$J?K.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:K.COMPRESSED_RGBA_ASTC_10x8_KHR;if(Z===VQ)return H===$J?K.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:K.COMPRESSED_RGBA_ASTC_10x10_KHR;if(Z===BQ)return H===$J?K.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:K.COMPRESSED_RGBA_ASTC_12x10_KHR;if(Z===zQ)return H===$J?K.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:K.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(Z===IQ||Z===AQ||Z===wQ)if(K=Q.get("EXT_texture_compression_bptc"),K!==null){if(Z===IQ)return H===$J?K.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:K.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(Z===AQ)return K.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(Z===wQ)return K.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(Z===_Q||Z===CQ||Z===b7||Z===PQ)if(K=Q.get("EXT_texture_compression_rgtc"),K!==null){if(Z===_Q)return K.COMPRESSED_RED_RGTC1_EXT;if(Z===CQ)return K.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(Z===b7)return K.COMPRESSED_RED_GREEN_RGTC2_EXT;if(Z===PQ)return K.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;if(Z===L8)return J.UNSIGNED_INT_24_8;return J[Z]!==void 0?J[Z]:null}return{convert:$}}var kG=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,MG=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class gW{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(J,Q){if(this.texture===null){let $=new c7(J.texture);if(J.depthNear!==Q.depthNear||J.depthFar!==Q.depthFar)this.depthNear=J.depthNear,this.depthFar=J.depthFar;this.texture=$}}getMesh(J){if(this.texture!==null){if(this.mesh===null){let Q=J.cameras[0].viewport,$=new dJ({vertexShader:kG,fragmentShader:MG,uniforms:{depthColor:{value:this.texture},depthWidth:{value:Q.z},depthHeight:{value:Q.w}}});this.mesh=new RJ(new y9(20,20),$)}}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class pW extends O9{constructor(J,Q){super();let $=this,Z=null,W=1,K=null,H="local-floor",Y=1,X=null,U=null,q=null,F=null,G=null,D=null,M=typeof XRWebGLBinding<"u",z=new gW,E={},N=Q.getContextAttributes(),C=null,_=null,L=[],A=[],I=new p0,P=null,O=new VJ;O.viewport=new GJ;let V=new VJ;V.viewport=new GJ;let p=[O,V],w=new $$,h=null,s=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(o){let W0=L[o];if(W0===void 0)W0=new m8,L[o]=W0;return W0.getTargetRaySpace()},this.getControllerGrip=function(o){let W0=L[o];if(W0===void 0)W0=new m8,L[o]=W0;return W0.getGripSpace()},this.getHand=function(o){let W0=L[o];if(W0===void 0)W0=new m8,L[o]=W0;return W0.getHandSpace()};function g(o){let W0=A.indexOf(o.inputSource);if(W0===-1)return;let r=L[W0];if(r!==void 0)r.update(o.inputSource,o.frame,X||K),r.dispatchEvent({type:o.type,data:o.inputSource})}function u(){Z.removeEventListener("select",g),Z.removeEventListener("selectstart",g),Z.removeEventListener("selectend",g),Z.removeEventListener("squeeze",g),Z.removeEventListener("squeezestart",g),Z.removeEventListener("squeezeend",g),Z.removeEventListener("end",u),Z.removeEventListener("inputsourceschange",c);for(let o=0;o<L.length;o++){let W0=A[o];if(W0===null)continue;A[o]=null,L[o].disconnect(W0)}h=null,s=null,z.reset();for(let o in E)delete E[o];J.setRenderTarget(C),G=null,F=null,q=null,Z=null,_=null,o0.stop(),$.isPresenting=!1,J.setPixelRatio(P),J.setSize(I.width,I.height,!1),$.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(o){if(W=o,$.isPresenting===!0)_0("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(o){if(H=o,$.isPresenting===!0)_0("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return X||K},this.setReferenceSpace=function(o){X=o},this.getBaseLayer=function(){return F!==null?F:G},this.getBinding=function(){if(q===null&&M)q=new XRWebGLBinding(Z,Q);return q},this.getFrame=function(){return D},this.getSession=function(){return Z},this.setSession=async function(o){if(Z=o,Z!==null){if(C=J.getRenderTarget(),Z.addEventListener("select",g),Z.addEventListener("selectstart",g),Z.addEventListener("selectend",g),Z.addEventListener("squeeze",g),Z.addEventListener("squeezestart",g),Z.addEventListener("squeezeend",g),Z.addEventListener("end",u),Z.addEventListener("inputsourceschange",c),N.xrCompatible!==!0)await Q.makeXRCompatible();if(P=J.getPixelRatio(),J.getSize(I),!(M&&("createProjectionLayer"in XRWebGLBinding.prototype))){let r={antialias:N.antialias,alpha:!0,depth:N.depth,stencil:N.stencil,framebufferScaleFactor:W};G=new XRWebGLLayer(Z,Q,r),Z.updateRenderState({baseLayer:G}),J.setPixelRatio(1),J.setSize(G.framebufferWidth,G.framebufferHeight,!1),_=new mJ(G.framebufferWidth,G.framebufferHeight,{format:Q9,type:oJ,colorSpace:J.outputColorSpace,stencilBuffer:N.stencil,resolveDepthBuffer:G.ignoreDepthValues===!1,resolveStencilBuffer:G.ignoreDepthValues===!1})}else{let r=null,n=null,Y0=null;if(N.depth)Y0=N.stencil?Q.DEPTH24_STENCIL8:Q.DEPTH_COMPONENT24,r=N.stencil?u9:l9,n=N.stencil?L8:T9;let S0={colorFormat:Q.RGBA8,depthFormat:Y0,scaleFactor:W};q=this.getBinding(),F=q.createProjectionLayer(S0),Z.updateRenderState({layers:[F]}),J.setPixelRatio(1),J.setSize(F.textureWidth,F.textureHeight,!1),_=new mJ(F.textureWidth,F.textureHeight,{format:Q9,type:oJ,depthTexture:new S9(F.textureWidth,F.textureHeight,n,void 0,void 0,void 0,void 0,void 0,void 0,r),stencilBuffer:N.stencil,colorSpace:J.outputColorSpace,samples:N.antialias?4:0,resolveDepthBuffer:F.ignoreDepthValues===!1,resolveStencilBuffer:F.ignoreDepthValues===!1})}_.isXRRenderTarget=!0,this.setFoveation(Y),X=null,K=await Z.requestReferenceSpace(H),o0.setContext(Z),o0.start(),$.isPresenting=!0,$.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(Z!==null)return Z.environmentBlendMode},this.getDepthTexture=function(){return z.getDepthTexture()};function c(o){for(let W0=0;W0<o.removed.length;W0++){let r=o.removed[W0],n=A.indexOf(r);if(n>=0)A[n]=null,L[n].disconnect(r)}for(let W0=0;W0<o.added.length;W0++){let r=o.added[W0],n=A.indexOf(r);if(n===-1){for(let S0=0;S0<L.length;S0++)if(S0>=A.length){A.push(r),n=S0;break}else if(A[S0]===null){A[S0]=r,n=S0;break}if(n===-1)break}let Y0=L[n];if(Y0)Y0.connect(r)}}let f=new v,t=new v;function Q0(o,W0,r){f.setFromMatrixPosition(W0.matrixWorld),t.setFromMatrixPosition(r.matrixWorld);let n=f.distanceTo(t),Y0=W0.projectionMatrix.elements,S0=r.projectionMatrix.elements,T0=Y0[14]/(Y0[10]-1),A0=Y0[14]/(Y0[10]+1),i0=(Y0[9]+1)/Y0[5],d0=(Y0[9]-1)/Y0[5],b0=(Y0[8]-1)/Y0[0],c0=(S0[8]+1)/S0[0],TJ=T0*b0,t0=T0*c0,h0=n/(-b0+c0),ZJ=h0*-b0;if(W0.matrixWorld.decompose(o.position,o.quaternion,o.scale),o.translateX(ZJ),o.translateZ(h0),o.matrixWorld.compose(o.position,o.quaternion,o.scale),o.matrixWorldInverse.copy(o.matrixWorld).invert(),Y0[10]===-1)o.projectionMatrix.copy(W0.projectionMatrix),o.projectionMatrixInverse.copy(W0.projectionMatrixInverse);else{let a0=T0+h0,S=A0+h0,PJ=TJ-ZJ,n0=t0+(n-ZJ),XJ=i0*A0/S*a0,B=d0*A0/S*a0;o.projectionMatrix.makePerspective(PJ,n0,XJ,B,a0,S),o.projectionMatrixInverse.copy(o.projectionMatrix).invert()}}function H0(o,W0){if(W0===null)o.matrixWorld.copy(o.matrix);else o.matrixWorld.multiplyMatrices(W0.matrixWorld,o.matrix);o.matrixWorldInverse.copy(o.matrixWorld).invert()}this.updateCamera=function(o){if(Z===null)return;let{near:W0,far:r}=o;if(z.texture!==null){if(z.depthNear>0)W0=z.depthNear;if(z.depthFar>0)r=z.depthFar}if(w.near=V.near=O.near=W0,w.far=V.far=O.far=r,h!==w.near||s!==w.far)Z.updateRenderState({depthNear:w.near,depthFar:w.far}),h=w.near,s=w.far;w.layers.mask=o.layers.mask|6,O.layers.mask=w.layers.mask&-5,V.layers.mask=w.layers.mask&-3;let n=o.parent,Y0=w.cameras;H0(w,n);for(let S0=0;S0<Y0.length;S0++)H0(Y0[S0],n);if(Y0.length===2)Q0(w,O,V);else w.projectionMatrix.copy(O.projectionMatrix);L0(o,w,n)};function L0(o,W0,r){if(r===null)o.matrix.copy(W0.matrixWorld);else o.matrix.copy(r.matrixWorld),o.matrix.invert(),o.matrix.multiply(W0.matrixWorld);if(o.matrix.decompose(o.position,o.quaternion,o.scale),o.updateMatrixWorld(!0),o.projectionMatrix.copy(W0.projectionMatrix),o.projectionMatrixInverse.copy(W0.projectionMatrixInverse),o.isPerspectiveCamera)o.fov=S8*2*Math.atan(1/o.projectionMatrix.elements[5]),o.zoom=1}this.getCamera=function(){return w},this.getFoveation=function(){if(F===null&&G===null)return;return Y},this.setFoveation=function(o){if(Y=o,F!==null)F.fixedFoveation=o;if(G!==null&&G.fixedFoveation!==void 0)G.fixedFoveation=o},this.hasDepthSensing=function(){return z.texture!==null},this.getDepthSensingMesh=function(){return z.getMesh(w)},this.getCameraTexture=function(o){return E[o]};let M0=null;function YJ(o,W0){if(U=W0.getViewerPose(X||K),D=W0,U!==null){let r=U.views;if(G!==null)J.setRenderTargetFramebuffer(_,G.framebuffer),J.setRenderTarget(_);let n=!1;if(r.length!==w.cameras.length)w.cameras.length=0,n=!0;for(let A0=0;A0<r.length;A0++){let i0=r[A0],d0=null;if(G!==null)d0=G.getViewport(i0);else{let c0=q.getViewSubImage(F,i0);if(d0=c0.viewport,A0===0)J.setRenderTargetTextures(_,c0.colorTexture,c0.depthStencilTexture),J.setRenderTarget(_)}let b0=p[A0];if(b0===void 0)b0=new VJ,b0.layers.enable(A0),b0.viewport=new GJ,p[A0]=b0;if(b0.matrix.fromArray(i0.transform.matrix),b0.matrix.decompose(b0.position,b0.quaternion,b0.scale),b0.projectionMatrix.fromArray(i0.projectionMatrix),b0.projectionMatrixInverse.copy(b0.projectionMatrix).invert(),b0.viewport.set(d0.x,d0.y,d0.width,d0.height),A0===0)w.matrix.copy(b0.matrix),w.matrix.decompose(w.position,w.quaternion,w.scale);if(n===!0)w.cameras.push(b0)}let Y0=Z.enabledFeatures;if(Y0&&Y0.includes("depth-sensing")&&Z.depthUsage=="gpu-optimized"&&M){q=$.getBinding();let A0=q.getDepthInformation(r[0]);if(A0&&A0.isValid&&A0.texture)z.init(A0,Z.renderState)}if(Y0&&Y0.includes("camera-access")&&M){J.state.unbindTexture(),q=$.getBinding();for(let A0=0;A0<r.length;A0++){let i0=r[A0].camera;if(i0){let d0=E[i0];if(!d0)d0=new c7,E[i0]=d0;let b0=q.getCameraImage(i0);d0.sourceTexture=b0}}}}for(let r=0;r<L.length;r++){let n=A[r],Y0=L[r];if(n!==null&&Y0!==void 0)Y0.update(n,W0,X||K)}if(M0)M0(o,W0);if(W0.detectedPlanes)$.dispatchEvent({type:"planesdetected",data:W0});D=null}let o0=new CW;o0.setAnimationLoop(YJ),this.setAnimationLoop=function(o){M0=o},this.dispose=function(){}}}var LG=new HJ,mW=new j0;mW.set(-1,0,0,0,1,0,0,0,1);function VG(J,Q){function $(E,N){if(E.matrixAutoUpdate===!0)E.updateMatrix();N.value.copy(E.matrix)}function Z(E,N){if(N.color.getRGB(E.fogColor.value,mQ(J)),N.isFog)E.fogNear.value=N.near,E.fogFar.value=N.far;else if(N.isFogExp2)E.fogDensity.value=N.density}function W(E,N,C,_,L){if(N.isNodeMaterial)N.uniformsNeedUpdate=!1;else if(N.isMeshBasicMaterial)K(E,N);else if(N.isMeshLambertMaterial){if(K(E,N),N.envMap)E.envMapIntensity.value=N.envMapIntensity}else if(N.isMeshToonMaterial)K(E,N),F(E,N);else if(N.isMeshPhongMaterial){if(K(E,N),q(E,N),N.envMap)E.envMapIntensity.value=N.envMapIntensity}else if(N.isMeshStandardMaterial){if(K(E,N),G(E,N),N.isMeshPhysicalMaterial)D(E,N,L)}else if(N.isMeshMatcapMaterial)K(E,N),M(E,N);else if(N.isMeshDepthMaterial)K(E,N);else if(N.isMeshDistanceMaterial)K(E,N),z(E,N);else if(N.isMeshNormalMaterial)K(E,N);else if(N.isLineBasicMaterial){if(H(E,N),N.isLineDashedMaterial)Y(E,N)}else if(N.isPointsMaterial)X(E,N,C,_);else if(N.isSpriteMaterial)U(E,N);else if(N.isShadowMaterial)E.color.value.copy(N.color),E.opacity.value=N.opacity;else if(N.isShaderMaterial)N.uniformsNeedUpdate=!1}function K(E,N){if(E.opacity.value=N.opacity,N.color)E.diffuse.value.copy(N.color);if(N.emissive)E.emissive.value.copy(N.emissive).multiplyScalar(N.emissiveIntensity);if(N.map)E.map.value=N.map,$(N.map,E.mapTransform);if(N.alphaMap)E.alphaMap.value=N.alphaMap,$(N.alphaMap,E.alphaMapTransform);if(N.bumpMap){if(E.bumpMap.value=N.bumpMap,$(N.bumpMap,E.bumpMapTransform),E.bumpScale.value=N.bumpScale,N.side===_J)E.bumpScale.value*=-1}if(N.normalMap){if(E.normalMap.value=N.normalMap,$(N.normalMap,E.normalMapTransform),E.normalScale.value.copy(N.normalScale),N.side===_J)E.normalScale.value.negate()}if(N.displacementMap)E.displacementMap.value=N.displacementMap,$(N.displacementMap,E.displacementMapTransform),E.displacementScale.value=N.displacementScale,E.displacementBias.value=N.displacementBias;if(N.emissiveMap)E.emissiveMap.value=N.emissiveMap,$(N.emissiveMap,E.emissiveMapTransform);if(N.specularMap)E.specularMap.value=N.specularMap,$(N.specularMap,E.specularMapTransform);if(N.alphaTest>0)E.alphaTest.value=N.alphaTest;let C=Q.get(N),_=C.envMap,L=C.envMapRotation;if(_){if(E.envMap.value=_,E.envMapRotation.value.setFromMatrix4(LG.makeRotationFromEuler(L)).transpose(),_.isCubeTexture&&_.isRenderTargetTexture===!1)E.envMapRotation.value.premultiply(mW);E.reflectivity.value=N.reflectivity,E.ior.value=N.ior,E.refractionRatio.value=N.refractionRatio}if(N.lightMap)E.lightMap.value=N.lightMap,E.lightMapIntensity.value=N.lightMapIntensity,$(N.lightMap,E.lightMapTransform);if(N.aoMap)E.aoMap.value=N.aoMap,E.aoMapIntensity.value=N.aoMapIntensity,$(N.aoMap,E.aoMapTransform)}function H(E,N){if(E.diffuse.value.copy(N.color),E.opacity.value=N.opacity,N.map)E.map.value=N.map,$(N.map,E.mapTransform)}function Y(E,N){E.dashSize.value=N.dashSize,E.totalSize.value=N.dashSize+N.gapSize,E.scale.value=N.scale}function X(E,N,C,_){if(E.diffuse.value.copy(N.color),E.opacity.value=N.opacity,E.size.value=N.size*C,E.scale.value=_*0.5,N.map)E.map.value=N.map,$(N.map,E.uvTransform);if(N.alphaMap)E.alphaMap.value=N.alphaMap,$(N.alphaMap,E.alphaMapTransform);if(N.alphaTest>0)E.alphaTest.value=N.alphaTest}function U(E,N){if(E.diffuse.value.copy(N.color),E.opacity.value=N.opacity,E.rotation.value=N.rotation,N.map)E.map.value=N.map,$(N.map,E.mapTransform);if(N.alphaMap)E.alphaMap.value=N.alphaMap,$(N.alphaMap,E.alphaMapTransform);if(N.alphaTest>0)E.alphaTest.value=N.alphaTest}function q(E,N){E.specular.value.copy(N.specular),E.shininess.value=Math.max(N.shininess,0.0001)}function F(E,N){if(N.gradientMap)E.gradientMap.value=N.gradientMap}function G(E,N){if(E.metalness.value=N.metalness,N.metalnessMap)E.metalnessMap.value=N.metalnessMap,$(N.metalnessMap,E.metalnessMapTransform);if(E.roughness.value=N.roughness,N.roughnessMap)E.roughnessMap.value=N.roughnessMap,$(N.roughnessMap,E.roughnessMapTransform);if(N.envMap)E.envMapIntensity.value=N.envMapIntensity}function D(E,N,C){if(E.ior.value=N.ior,N.sheen>0){if(E.sheenColor.value.copy(N.sheenColor).multiplyScalar(N.sheen),E.sheenRoughness.value=N.sheenRoughness,N.sheenColorMap)E.sheenColorMap.value=N.sheenColorMap,$(N.sheenColorMap,E.sheenColorMapTransform);if(N.sheenRoughnessMap)E.sheenRoughnessMap.value=N.sheenRoughnessMap,$(N.sheenRoughnessMap,E.sheenRoughnessMapTransform)}if(N.clearcoat>0){if(E.clearcoat.value=N.clearcoat,E.clearcoatRoughness.value=N.clearcoatRoughness,N.clearcoatMap)E.clearcoatMap.value=N.clearcoatMap,$(N.clearcoatMap,E.clearcoatMapTransform);if(N.clearcoatRoughnessMap)E.clearcoatRoughnessMap.value=N.clearcoatRoughnessMap,$(N.clearcoatRoughnessMap,E.clearcoatRoughnessMapTransform);if(N.clearcoatNormalMap){if(E.clearcoatNormalMap.value=N.clearcoatNormalMap,$(N.clearcoatNormalMap,E.clearcoatNormalMapTransform),E.clearcoatNormalScale.value.copy(N.clearcoatNormalScale),N.side===_J)E.clearcoatNormalScale.value.negate()}}if(N.dispersion>0)E.dispersion.value=N.dispersion;if(N.iridescence>0){if(E.iridescence.value=N.iridescence,E.iridescenceIOR.value=N.iridescenceIOR,E.iridescenceThicknessMinimum.value=N.iridescenceThicknessRange[0],E.iridescenceThicknessMaximum.value=N.iridescenceThicknessRange[1],N.iridescenceMap)E.iridescenceMap.value=N.iridescenceMap,$(N.iridescenceMap,E.iridescenceMapTransform);if(N.iridescenceThicknessMap)E.iridescenceThicknessMap.value=N.iridescenceThicknessMap,$(N.iridescenceThicknessMap,E.iridescenceThicknessMapTransform)}if(N.transmission>0){if(E.transmission.value=N.transmission,E.transmissionSamplerMap.value=C.texture,E.transmissionSamplerSize.value.set(C.width,C.height),N.transmissionMap)E.transmissionMap.value=N.transmissionMap,$(N.transmissionMap,E.transmissionMapTransform);if(E.thickness.value=N.thickness,N.thicknessMap)E.thicknessMap.value=N.thicknessMap,$(N.thicknessMap,E.thicknessMapTransform);E.attenuationDistance.value=N.attenuationDistance,E.attenuationColor.value.copy(N.attenuationColor)}if(N.anisotropy>0){if(E.anisotropyVector.value.set(N.anisotropy*Math.cos(N.anisotropyRotation),N.anisotropy*Math.sin(N.anisotropyRotation)),N.anisotropyMap)E.anisotropyMap.value=N.anisotropyMap,$(N.anisotropyMap,E.anisotropyMapTransform)}if(E.specularIntensity.value=N.specularIntensity,E.specularColor.value.copy(N.specularColor),N.specularColorMap)E.specularColorMap.value=N.specularColorMap,$(N.specularColorMap,E.specularColorMapTransform);if(N.specularIntensityMap)E.specularIntensityMap.value=N.specularIntensityMap,$(N.specularIntensityMap,E.specularIntensityMapTransform)}function M(E,N){if(N.matcap)E.matcap.value=N.matcap}function z(E,N){let C=Q.get(N).light;E.referencePosition.value.setFromMatrixPosition(C.matrixWorld),E.nearDistance.value=C.shadow.camera.near,E.farDistance.value=C.shadow.camera.far}return{refreshFogUniforms:Z,refreshMaterialUniforms:W}}function BG(J,Q,$,Z){let W={},K={},H=[],Y=J.getParameter(J.MAX_UNIFORM_BUFFER_BINDINGS);function X(L,A){let I=A.program;Z.uniformBlockBinding(L,I)}function U(L,A){let I=W[L.id];if(I===void 0)E(L),I=q(L),W[L.id]=I,L.addEventListener("dispose",C);let P=A.program;Z.updateUBOMapping(L,P);let O=Q.render.frame;if(K[L.id]!==O)G(L),K[L.id]=O}function q(L){let A=F();L.__bindingPointIndex=A;let I=J.createBuffer(),P=L.__size,O=L.usage;return J.bindBuffer(J.UNIFORM_BUFFER,I),J.bufferData(J.UNIFORM_BUFFER,P,O),J.bindBuffer(J.UNIFORM_BUFFER,null),J.bindBufferBase(J.UNIFORM_BUFFER,A,I),I}function F(){for(let L=0;L<Y;L++)if(H.indexOf(L)===-1)return H.push(L),L;return P0("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function G(L){let A=W[L.id],I=L.uniforms,P=L.__cache;J.bindBuffer(J.UNIFORM_BUFFER,A);for(let O=0,V=I.length;O<V;O++){let p=I[O];if(Array.isArray(p))for(let w=0,h=p.length;w<h;w++)D(p[w],O,w,P);else D(p,O,0,P)}J.bindBuffer(J.UNIFORM_BUFFER,null)}function D(L,A,I,P){if(z(L,A,I,P)===!0){let{__offset:O,value:V}=L;if(Array.isArray(V)){let p=0;for(let w=0;w<V.length;w++){let h=V[w],s=N(h);if(M(h,L.__data,p),typeof h!=="number"&&typeof h!=="boolean"&&!h.isMatrix3&&!ArrayBuffer.isView(h))p+=s.storage/Float32Array.BYTES_PER_ELEMENT}}else M(V,L.__data,0);J.bufferSubData(J.UNIFORM_BUFFER,O,L.__data)}}function M(L,A,I){if(typeof L==="number"||typeof L==="boolean")A[0]=L;else if(L.isMatrix3)A[0]=L.elements[0],A[1]=L.elements[1],A[2]=L.elements[2],A[3]=0,A[4]=L.elements[3],A[5]=L.elements[4],A[6]=L.elements[5],A[7]=0,A[8]=L.elements[6],A[9]=L.elements[7],A[10]=L.elements[8],A[11]=0;else if(ArrayBuffer.isView(L))A.set(new L.constructor(L.buffer,L.byteOffset,A.length));else L.toArray(A,I)}function z(L,A,I,P){let O=L.value,V=A+"_"+I;if(P[V]===void 0){if(typeof O==="number"||typeof O==="boolean")P[V]=O;else if(ArrayBuffer.isView(O))P[V]=O.slice();else P[V]=O.clone();return!0}else{let p=P[V];if(typeof O==="number"||typeof O==="boolean"){if(p!==O)return P[V]=O,!0}else if(ArrayBuffer.isView(O))return!0;else if(p.equals(O)===!1)return p.copy(O),!0}return!1}function E(L){let A=L.uniforms,I=0,P=16;for(let V=0,p=A.length;V<p;V++){let w=Array.isArray(A[V])?A[V]:[A[V]];for(let h=0,s=w.length;h<s;h++){let g=w[h],u=Array.isArray(g.value)?g.value:[g.value];for(let c=0,f=u.length;c<f;c++){let t=u[c],Q0=N(t),H0=I%P,L0=H0%Q0.boundary,M0=H0+L0;if(I+=L0,M0!==0&&P-M0<Q0.storage)I+=P-M0;g.__data=new Float32Array(Q0.storage/Float32Array.BYTES_PER_ELEMENT),g.__offset=I,I+=Q0.storage}}}let O=I%P;if(O>0)I+=P-O;return L.__size=I,L.__cache={},this}function N(L){let A={boundary:0,storage:0};if(typeof L==="number"||typeof L==="boolean")A.boundary=4,A.storage=4;else if(L.isVector2)A.boundary=8,A.storage=8;else if(L.isVector3||L.isColor)A.boundary=16,A.storage=12;else if(L.isVector4)A.boundary=16,A.storage=16;else if(L.isMatrix3)A.boundary=48,A.storage=48;else if(L.isMatrix4)A.boundary=64,A.storage=64;else if(L.isTexture)_0("WebGLRenderer: Texture samplers can not be part of an uniforms group.");else if(ArrayBuffer.isView(L))A.boundary=16,A.storage=L.byteLength;else _0("WebGLRenderer: Unsupported uniform value type.",L);return A}function C(L){let A=L.target;A.removeEventListener("dispose",C);let I=H.indexOf(A.__bindingPointIndex);H.splice(I,1),J.deleteBuffer(W[A.id]),delete W[A.id],delete K[A.id]}function _(){for(let L in W)J.deleteBuffer(W[L]);H=[],W={},K={}}return{bind:X,update:U,dispose:_}}var zG=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Z9=null;function IG(){if(Z9===null)Z9=new gQ(zG,16,16,c9,D9),Z9.name="DFG_LUT",Z9.minFilter=jJ,Z9.magFilter=jJ,Z9.wrapS=P7,Z9.wrapT=P7,Z9.generateMipmaps=!1,Z9.needsUpdate=!0;return Z9}class R${constructor(J={}){let{canvas:Q=oZ(),context:$=null,depth:Z=!0,stencil:W=!1,alpha:K=!1,antialias:H=!1,premultipliedAlpha:Y=!0,preserveDrawingBuffer:X=!1,powerPreference:U="default",failIfMajorPerformanceCaveat:q=!1,reversedDepthBuffer:F=!1,outputBufferType:G=oJ}=J;this.isWebGLRenderer=!0;let D;if($!==null){if(typeof WebGLRenderingContext<"u"&&$ instanceof WebGLRenderingContext)throw Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");D=$.getContextAttributes().alpha}else D=K;let M=G,z=new Set([e6,t6,r6]),E=new Set([oJ,T9,h8,L8,o6,a6]),N=new Uint32Array(4),C=new Int32Array(4),_=new v,L=null,A=null,I=[],P=[],O=null;this.domElement=Q,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=iJ,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let V=this,p=!1,w=null,h=null,s=null,g=null;this._outputColorSpace=dZ;let u=0,c=0,f=null,t=-1,Q0=null,H0=new GJ,L0=new GJ,M0=null,YJ=new y0(0),o0=0,o=Q.width,W0=Q.height,r=1,n=null,Y0=null,S0=new GJ(0,0,o,W0),T0=new GJ(0,0,o,W0),A0=!1,i0=new u8,d0=!1,b0=!1,c0=new HJ,TJ=new v,t0=new GJ,h0={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},ZJ=!1;function a0(){return f===null?r:1}let S=$;function PJ(k,y){return Q.getContext(k,y)}try{let k={alpha:!0,depth:Z,stencil:W,antialias:H,premultipliedAlpha:Y,preserveDrawingBuffer:X,powerPreference:U,failIfMajorPerformanceCaveat:q};if("setAttribute"in Q)Q.setAttribute("data-engine",`three.js r${t$}`);if(Q.addEventListener("webglcontextlost",v0,!1),Q.addEventListener("webglcontextrestored",NJ,!1),Q.addEventListener("webglcontextcreationerror",WJ,!1),S===null){if(S=PJ("webgl2",k),S===null)if(PJ("webgl2"))throw Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes.");else throw Error("THREE.WebGLRenderer: Error creating WebGL context.")}}catch(k){throw P0("WebGLRenderer: "+k.message),k}let n0,XJ,B,R,T,d,J0,$0,G0,l,a,D0,B0,N0,Z0,w0,C0,s0,j,K0,i,X0,O0;function e(){if(n0=new SX(S),n0.init(),i=new RG(S,n0),XJ=new zX(S,n0,J,i),B=new DG(S,n0),XJ.reversedDepthBuffer&&F)B.buffers.depth.setReversed(!0);h=S.createFramebuffer(),s=S.createFramebuffer(),g=S.createFramebuffer(),R=new vX(S),T=new QG,d=new OG(S,n0,B,T,XJ,i,R),J0=new TX(V),$0=new xK(S),X0=new VX(S,$0),G0=new jX(S,$0,R,X0),l=new bX(S,G0,$0,X0,R),s0=new fX(S,XJ,d),Z0=new IX(T),a=new JG(V,J0,n0,XJ,X0,Z0),D0=new VG(V,T),B0=new ZG,N0=new UG(n0),C0=new LX(V,J0,B,l,D,Y),w0=new FG(V,l,XJ),O0=new BG(S,R,XJ,B),j=new BX(S,n0,R),K0=new yX(S,n0,R),R.programs=a.programs,V.capabilities=XJ,V.extensions=n0,V.properties=T,V.renderLists=B0,V.shadowMap=w0,V.state=B,V.info=R}if(e(),M!==oJ)O=new xX(M,Q.width,Q.height,H,Z,W);let U0=new pW(V,S);this.xr=U0,this.getContext=function(){return S},this.getContextAttributes=function(){return S.getContextAttributes()},this.forceContextLoss=function(){let k=n0.get("WEBGL_lose_context");if(k)k.loseContext()},this.forceContextRestore=function(){let k=n0.get("WEBGL_lose_context");if(k)k.restoreContext()},this.getPixelRatio=function(){return r},this.setPixelRatio=function(k){if(k===void 0)return;r=k,this.setSize(o,W0,!1)},this.getSize=function(k){return k.set(o,W0)},this.setSize=function(k,y,m=!0){if(U0.isPresenting){_0("WebGLRenderer: Can't change size while VR device is presenting.");return}if(o=k,W0=y,Q.width=Math.floor(k*r),Q.height=Math.floor(y*r),m===!0)Q.style.width=k+"px",Q.style.height=y+"px";if(O!==null)O.setSize(Q.width,Q.height);this.setViewport(0,0,k,y)},this.getDrawingBufferSize=function(k){return k.set(o*r,W0*r).floor()},this.setDrawingBufferSize=function(k,y,m){o=k,W0=y,r=m,Q.width=Math.floor(k*m),Q.height=Math.floor(y*m),this.setViewport(0,0,k,y)},this.setEffects=function(k){if(M===oJ){P0("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(k){for(let y=0;y<k.length;y++)if(k[y].isOutputPass===!0){_0("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}O.setEffects(k||[])},this.getCurrentViewport=function(k){return k.copy(H0)},this.getViewport=function(k){return k.copy(S0)},this.setViewport=function(k,y,m,b){if(k.isVector4)S0.set(k.x,k.y,k.z,k.w);else S0.set(k,y,m,b);B.viewport(H0.copy(S0).multiplyScalar(r).round())},this.getScissor=function(k){return k.copy(T0)},this.setScissor=function(k,y,m,b){if(k.isVector4)T0.set(k.x,k.y,k.z,k.w);else T0.set(k,y,m,b);B.scissor(L0.copy(T0).multiplyScalar(r).round())},this.getScissorTest=function(){return A0},this.setScissorTest=function(k){B.setScissorTest(A0=k)},this.setOpaqueSort=function(k){n=k},this.setTransparentSort=function(k){Y0=k},this.getClearColor=function(k){return k.copy(C0.getClearColor())},this.setClearColor=function(){C0.setClearColor(...arguments)},this.getClearAlpha=function(){return C0.getClearAlpha()},this.setClearAlpha=function(){C0.setClearAlpha(...arguments)},this.clear=function(k=!0,y=!0,m=!0){let b=0;if(k){let x=!1;if(f!==null){let F0=f.texture.format;x=z.has(F0)}if(x){let F0=f.texture.type,k0=E.has(F0),q0=C0.getClearColor(),V0=C0.getClearAlpha(),z0=q0.r,f0=q0.g,g0=q0.b;if(k0)N[0]=z0,N[1]=f0,N[2]=g0,N[3]=V0,S.clearBufferuiv(S.COLOR,0,N);else C[0]=z0,C[1]=f0,C[2]=g0,C[3]=V0,S.clearBufferiv(S.COLOR,0,C)}else b|=S.COLOR_BUFFER_BIT}if(y)b|=S.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0);if(m)b|=S.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295);if(b!==0)S.clear(b)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(k){k.setRenderer(this),w=k},this.dispose=function(){Q.removeEventListener("webglcontextlost",v0,!1),Q.removeEventListener("webglcontextrestored",NJ,!1),Q.removeEventListener("webglcontextcreationerror",WJ,!1),C0.dispose(),B0.dispose(),N0.dispose(),T.dispose(),J0.dispose(),l.dispose(),X0.dispose(),O0.dispose(),a.dispose(),U0.dispose(),U0.removeEventListener("sessionstart",M$),U0.removeEventListener("sessionend",L$),f9.stop()};function v0(k){k.preventDefault(),fQ("WebGLRenderer: Context Lost."),p=!0}function NJ(){fQ("WebGLRenderer: Context Restored."),p=!1;let k=R.autoReset,y=w0.enabled,m=w0.autoUpdate,b=w0.needsUpdate,x=w0.type;e(),R.autoReset=k,w0.enabled=y,w0.autoUpdate=m,w0.needsUpdate=b,w0.type=x}function WJ(k){P0("WebGLRenderer: A WebGL context could not be created. Reason: ",k.statusMessage)}function rJ(k){let y=k.target;y.removeEventListener("dispose",rJ),K9(y)}function K9(k){cW(k),T.remove(k)}function cW(k){let y=T.get(k).programs;if(y!==void 0){if(y.forEach(function(m){a.releaseProgram(m)}),k.isShaderMaterial)a.releaseShaderCache(k)}}this.renderBufferDirect=function(k,y,m,b,x,F0){if(y===null)y=h0;let k0=x.isMesh&&x.matrixWorld.determinantAffine()<0,q0=iW(k,y,m,b,x);B.setMaterial(b,k0);let V0=m.index,z0=1;if(b.wireframe===!0){if(V0=G0.getWireframeAttribute(m),V0===void 0)return;z0=2}let f0=m.drawRange,g0=m.attributes.position,I0=f0.start*z0,e0=(f0.start+f0.count)*z0;if(F0!==null)I0=Math.max(I0,F0.start*z0),e0=Math.min(e0,(F0.start+F0.count)*z0);if(V0!==null)I0=Math.max(I0,0),e0=Math.min(e0,V0.count);else if(g0!==void 0&&g0!==null)I0=Math.max(I0,0),e0=Math.min(e0,g0.count);let qJ=e0-I0;if(qJ<0||qJ===1/0)return;X0.setup(x,b,q0,m,V0);let EJ,JJ=j;if(V0!==null)EJ=$0.get(V0),JJ=K0,JJ.setIndex(EJ);if(x.isMesh)if(b.wireframe===!0)B.setLineWidth(b.wireframeLinewidth*a0()),JJ.setMode(S.LINES);else JJ.setMode(S.TRIANGLES);else if(x.isLine){let zJ=b.linewidth;if(zJ===void 0)zJ=1;if(B.setLineWidth(zJ*a0()),x.isLineSegments)JJ.setMode(S.LINES);else if(x.isLineLoop)JJ.setMode(S.LINE_LOOP);else JJ.setMode(S.LINE_STRIP)}else if(x.isPoints)JJ.setMode(S.POINTS);else if(x.isSprite)JJ.setMode(S.TRIANGLES);if(x.isBatchedMesh)if(!n0.get("WEBGL_multi_draw")){let{_multiDrawStarts:zJ,_multiDrawCounts:R0,_multiDrawCount:yJ}=x,u0=V0?$0.get(V0).bytesPerElement:1,hJ=T.get(b).currentProgram.getUniforms();for(let tJ=0;tJ<yJ;tJ++)hJ.setValue(S,"_gl_DrawID",tJ),JJ.render(zJ[tJ]/u0,R0[tJ])}else JJ.renderMultiDraw(x._multiDrawStarts,x._multiDrawCounts,x._multiDrawCount);else if(x.isInstancedMesh)JJ.renderInstances(I0,qJ,x.count);else if(m.isInstancedBufferGeometry){let zJ=m._maxInstanceCount!==void 0?m._maxInstanceCount:1/0,R0=Math.min(m.instanceCount,zJ);JJ.renderInstances(I0,qJ,R0)}else JJ.render(I0,qJ)};function k$(k,y,m){if(k.transparent===!0&&k.side===bJ&&k.forceSinglePass===!1)k.side=_J,k.needsUpdate=!0,Q7(k,y,m),k.side=C9,k.needsUpdate=!0,Q7(k,y,m),k.side=bJ;else Q7(k,y,m)}this.compile=function(k,y,m=null){if(m===null)m=k;if(A=N0.get(m),A.init(y),P.push(A),m.traverseVisible(function(x){if(x.isLight&&x.layers.test(y.layers)){if(A.pushLight(x),x.castShadow)A.pushShadow(x)}}),k!==m)k.traverseVisible(function(x){if(x.isLight&&x.layers.test(y.layers)){if(A.pushLight(x),x.castShadow)A.pushShadow(x)}});A.setupLights();let b=new Set;return k.traverse(function(x){if(!(x.isMesh||x.isPoints||x.isLine||x.isSprite))return;let F0=x.material;if(F0)if(Array.isArray(F0))for(let k0=0;k0<F0.length;k0++){let q0=F0[k0];k$(q0,m,x),b.add(q0)}else k$(F0,m,x),b.add(F0)}),A=P.pop(),b},this.compileAsync=function(k,y,m=null){let b=this.compile(k,y,m);return new Promise((x)=>{function F0(){if(b.forEach(function(k0){if(T.get(k0).currentProgram.isReady())b.delete(k0)}),b.size===0){x(k);return}setTimeout(F0,10)}if(n0.get("KHR_parallel_shader_compile")!==null)F0();else setTimeout(F0,10)})};let X6=null;function nW(k){if(X6)X6(k)}function M$(){f9.stop()}function L$(){f9.start()}let f9=new CW;if(f9.setAnimationLoop(nW),typeof self<"u")f9.setContext(self);this.setAnimationLoop=function(k){X6=k,U0.setAnimationLoop(k),k===null?f9.stop():f9.start()},U0.addEventListener("sessionstart",M$),U0.addEventListener("sessionend",L$),this.render=function(k,y){if(y!==void 0&&y.isCamera!==!0){P0("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(p===!0)return;if(w!==null)w.renderStart(k,y);let m=U0.enabled===!0&&U0.isPresenting===!0,b=O!==null&&(f===null||m)&&O.begin(V,f);if(k.matrixWorldAutoUpdate===!0)k.updateMatrixWorld();if(y.parent===null&&y.matrixWorldAutoUpdate===!0)y.updateMatrixWorld();if(U0.enabled===!0&&U0.isPresenting===!0&&(O===null||O.isCompositing()===!1)){if(U0.cameraAutoUpdate===!0)U0.updateCamera(y);y=U0.getCamera()}if(k.isScene===!0)k.onBeforeRender(V,k,y,f);if(A=N0.get(k,P.length),A.init(y),A.state.textureUnits=d.getTextureUnits(),P.push(A),c0.multiplyMatrices(y.projectionMatrix,y.matrixWorldInverse),i0.setFromProjectionMatrix(c0,vQ,y.reversedDepth),b0=this.localClippingEnabled,d0=Z0.init(this.clippingPlanes,b0),L=B0.get(k,I.length),L.init(),I.push(L),U0.enabled===!0&&U0.isPresenting===!0){let k0=V.xr.getDepthSensingMesh();if(k0!==null)U6(k0,y,-1/0,V.sortObjects)}if(U6(k,y,0,V.sortObjects),L.finish(),V.sortObjects===!0)L.sort(n,Y0,y.reversedDepth);if(ZJ=U0.enabled===!1||U0.isPresenting===!1||U0.hasDepthSensing()===!1,ZJ)C0.addToRenderList(L,k);if(this.info.render.frame++,this.info.autoReset===!0)this.info.reset();if(d0===!0)Z0.beginShadows();let x=A.state.shadowsArray;if(w0.render(x,k,y),d0===!0)Z0.endShadows();if((b&&O.hasRenderPass())===!1){let{opaque:k0,transmissive:q0}=L;if(A.setupLights(),y.isArrayCamera){let V0=y.cameras;if(q0.length>0)for(let z0=0,f0=V0.length;z0<f0;z0++){let g0=V0[z0];B$(k0,q0,k,g0)}if(ZJ)C0.render(k);for(let z0=0,f0=V0.length;z0<f0;z0++){let g0=V0[z0];V$(L,k,g0,g0.viewport)}}else{if(q0.length>0)B$(k0,q0,k,y);if(ZJ)C0.render(k);V$(L,k,y)}}if(f!==null&&c===0)d.updateMultisampleRenderTarget(f),d.updateRenderTargetMipmap(f);if(b)O.end(V);if(k.isScene===!0)k.onAfterRender(V,k,y);if(X0.resetDefaultState(),t=-1,Q0=null,P.pop(),P.length>0){if(A=P[P.length-1],d.setTextureUnits(A.state.textureUnits),d0===!0)Z0.setGlobalState(V.clippingPlanes,A.state.camera)}else A=null;if(I.pop(),I.length>0)L=I[I.length-1];else L=null;if(w!==null)w.renderEnd()};function U6(k,y,m,b){if(k.visible===!1)return;if(k.layers.test(y.layers)){if(k.isGroup)m=k.renderOrder;else if(k.isLOD){if(k.autoUpdate===!0)k.update(y)}else if(k.isLightProbeGrid)A.pushLightProbeGrid(k);else if(k.isLight){if(A.pushLight(k),k.castShadow)A.pushShadow(k)}else if(k.isSprite){if(!k.frustumCulled||i0.intersectsSprite(k)){if(b)t0.setFromMatrixPosition(k.matrixWorld).applyMatrix4(c0);let k0=l.update(k),q0=k.material;if(q0.visible)L.push(k,k0,q0,m,t0.z,null)}}else if(k.isMesh||k.isLine||k.isPoints){if(!k.frustumCulled||i0.intersectsObject(k)){let k0=l.update(k),q0=k.material;if(b){if(k.boundingSphere!==void 0){if(k.boundingSphere===null)k.computeBoundingSphere();t0.copy(k.boundingSphere.center)}else{if(k0.boundingSphere===null)k0.computeBoundingSphere();t0.copy(k0.boundingSphere.center)}t0.applyMatrix4(k.matrixWorld).applyMatrix4(c0)}if(Array.isArray(q0)){let V0=k0.groups;for(let z0=0,f0=V0.length;z0<f0;z0++){let g0=V0[z0],I0=q0[g0.materialIndex];if(I0&&I0.visible)L.push(k,k0,I0,m,t0.z,g0)}}else if(q0.visible)L.push(k,k0,q0,m,t0.z,null)}}}let F0=k.children;for(let k0=0,q0=F0.length;k0<q0;k0++)U6(F0[k0],y,m,b)}function V$(k,y,m,b){let{opaque:x,transmissive:F0,transparent:k0}=k;if(A.setupLightsView(m),d0===!0)Z0.setGlobalState(V.clippingPlanes,m);if(b)B.viewport(H0.copy(b));if(x.length>0)J7(x,y,m);if(F0.length>0)J7(F0,y,m);if(k0.length>0)J7(k0,y,m);B.buffers.depth.setTest(!0),B.buffers.depth.setMask(!0),B.buffers.color.setMask(!0),B.setPolygonOffset(!1)}function B$(k,y,m,b){if((m.isScene===!0?m.overrideMaterial:null)!==null)return;if(A.state.transmissionRenderTarget[b.id]===void 0){let I0=n0.has("EXT_color_buffer_half_float")||n0.has("EXT_color_buffer_float");A.state.transmissionRenderTarget[b.id]=new mJ(1,1,{generateMipmaps:!0,type:I0?D9:oJ,minFilter:d9,samples:Math.max(4,XJ.samples),stencilBuffer:W,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:l0.workingColorSpace})}let F0=A.state.transmissionRenderTarget[b.id],k0=b.viewport||H0;F0.setSize(k0.z*V.transmissionResolutionScale,k0.w*V.transmissionResolutionScale);let q0=V.getRenderTarget(),V0=V.getActiveCubeFace(),z0=V.getActiveMipmapLevel();if(V.setRenderTarget(F0),V.getClearColor(YJ),o0=V.getClearAlpha(),o0<1)V.setClearColor(16777215,0.5);if(V.clear(),ZJ)C0.render(m);let f0=V.toneMapping;V.toneMapping=iJ;let g0=b.viewport;if(b.viewport!==void 0)b.viewport=void 0;if(A.setupLightsView(b),d0===!0)Z0.setGlobalState(V.clippingPlanes,b);if(J7(k,m,b),d.updateMultisampleRenderTarget(F0),d.updateRenderTargetMipmap(F0),n0.has("WEBGL_multisampled_render_to_texture")===!1){let I0=!1;for(let e0=0,qJ=y.length;e0<qJ;e0++){let EJ=y[e0],{object:JJ,geometry:zJ,material:R0,group:yJ}=EJ;if(R0.side===bJ&&JJ.layers.test(b.layers)){let u0=R0.side;R0.side=_J,R0.needsUpdate=!0,z$(JJ,m,b,zJ,R0,yJ),R0.side=u0,R0.needsUpdate=!0,I0=!0}}if(I0===!0)d.updateMultisampleRenderTarget(F0),d.updateRenderTargetMipmap(F0)}if(V.setRenderTarget(q0,V0,z0),V.setClearColor(YJ,o0),g0!==void 0)b.viewport=g0;V.toneMapping=f0}function J7(k,y,m){let b=y.isScene===!0?y.overrideMaterial:null;for(let x=0,F0=k.length;x<F0;x++){let k0=k[x],{object:q0,geometry:V0,group:z0}=k0,f0=k0.material;if(f0.allowOverride===!0&&b!==null)f0=b;if(q0.layers.test(m.layers))z$(q0,y,m,V0,f0,z0)}}function z$(k,y,m,b,x,F0){if(k.onBeforeRender(V,y,m,b,x,F0),k.modelViewMatrix.multiplyMatrices(m.matrixWorldInverse,k.matrixWorld),k.normalMatrix.getNormalMatrix(k.modelViewMatrix),x.onBeforeRender(V,y,m,b,k,F0),x.transparent===!0&&x.side===bJ&&x.forceSinglePass===!1)x.side=_J,x.needsUpdate=!0,V.renderBufferDirect(m,y,b,x,k,F0),x.side=C9,x.needsUpdate=!0,V.renderBufferDirect(m,y,b,x,k,F0),x.side=bJ;else V.renderBufferDirect(m,y,b,x,k,F0);k.onAfterRender(V,y,m,b,x,F0)}function Q7(k,y,m){if(y.isScene!==!0)y=h0;let b=T.get(k),x=A.state.lights,F0=A.state.shadowsArray,k0=x.state.version,q0=a.getParameters(k,x.state,F0,y,m,A.state.lightProbeGridArray),V0=a.getProgramCacheKey(q0),z0=b.programs;b.environment=k.isMeshStandardMaterial||k.isMeshLambertMaterial||k.isMeshPhongMaterial?y.environment:null,b.fog=y.fog;let f0=k.isMeshStandardMaterial||k.isMeshLambertMaterial&&!k.envMap||k.isMeshPhongMaterial&&!k.envMap;if(b.envMap=J0.get(k.envMap||b.environment,f0),b.envMapRotation=b.environment!==null&&k.envMap===null?y.environmentRotation:k.envMapRotation,z0===void 0)k.addEventListener("dispose",rJ),z0=new Map,b.programs=z0;let g0=z0.get(V0);if(g0!==void 0){if(b.currentProgram===g0&&b.lightsStateVersion===k0)return A$(k,q0),g0}else{if(q0.uniforms=a.getUniforms(k),w!==null&&k.isNodeMaterial)w.build(k,m,q0);k.onBeforeCompile(q0,V),g0=a.acquireProgram(q0,V0),z0.set(V0,g0),b.uniforms=q0.uniforms}let I0=b.uniforms;if(!k.isShaderMaterial&&!k.isRawShaderMaterial||k.clipping===!0)I0.clippingPlanes=Z0.uniform;if(A$(k,q0),b.needsLights=aW(k),b.lightsStateVersion=k0,b.needsLights)I0.ambientLightColor.value=x.state.ambient,I0.lightProbe.value=x.state.probe,I0.directionalLights.value=x.state.directional,I0.directionalLightShadows.value=x.state.directionalShadow,I0.spotLights.value=x.state.spot,I0.spotLightShadows.value=x.state.spotShadow,I0.rectAreaLights.value=x.state.rectArea,I0.ltc_1.value=x.state.rectAreaLTC1,I0.ltc_2.value=x.state.rectAreaLTC2,I0.pointLights.value=x.state.point,I0.pointLightShadows.value=x.state.pointShadow,I0.hemisphereLights.value=x.state.hemi,I0.directionalShadowMatrix.value=x.state.directionalShadowMatrix,I0.spotLightMatrix.value=x.state.spotLightMatrix,I0.spotLightMap.value=x.state.spotLightMap,I0.pointShadowMatrix.value=x.state.pointShadowMatrix;return b.lightProbeGrid=A.state.lightProbeGridArray.length>0,b.currentProgram=g0,b.uniformsList=null,g0}function I$(k){if(k.uniformsList===null){let y=k.currentProgram.getUniforms();k.uniformsList=e8.seqWithValue(y.seq,k.uniforms)}return k.uniformsList}function A$(k,y){let m=T.get(k);m.outputColorSpace=y.outputColorSpace,m.batching=y.batching,m.batchingColor=y.batchingColor,m.instancing=y.instancing,m.instancingColor=y.instancingColor,m.instancingMorph=y.instancingMorph,m.skinning=y.skinning,m.morphTargets=y.morphTargets,m.morphNormals=y.morphNormals,m.morphColors=y.morphColors,m.morphTargetsCount=y.morphTargetsCount,m.numClippingPlanes=y.numClippingPlanes,m.numIntersection=y.numClipIntersection,m.vertexAlphas=y.vertexAlphas,m.vertexTangents=y.vertexTangents,m.toneMapping=y.toneMapping}function sW(k,y){if(k.length===0)return null;if(k.length===1)return k[0].texture!==null?k[0]:null;_.setFromMatrixPosition(y.matrixWorld);for(let m=0,b=k.length;m<b;m++){let x=k[m];if(x.texture!==null&&x.boundingBox.containsPoint(_))return x}return null}function iW(k,y,m,b,x){if(y.isScene!==!0)y=h0;d.resetTextureUnits();let F0=y.fog,k0=b.isMeshStandardMaterial||b.isMeshLambertMaterial||b.isMeshPhongMaterial?y.environment:null,q0=f===null?V.outputColorSpace:f.isXRRenderTarget===!0?f.texture.colorSpace:l0.workingColorSpace,V0=b.isMeshStandardMaterial||b.isMeshLambertMaterial&&!b.envMap||b.isMeshPhongMaterial&&!b.envMap,z0=J0.get(b.envMap||k0,V0),f0=b.vertexColors===!0&&!!m.attributes.color&&m.attributes.color.itemSize===4,g0=!!m.attributes.tangent&&(!!b.normalMap||b.anisotropy>0),I0=!!m.morphAttributes.position,e0=!!m.morphAttributes.normal,qJ=!!m.morphAttributes.color,EJ=iJ;if(b.toneMapped){if(f===null||f.isXRRenderTarget===!0)EJ=V.toneMapping}let JJ=m.morphAttributes.position||m.morphAttributes.normal||m.morphAttributes.color,zJ=JJ!==void 0?JJ.length:0,R0=T.get(b),yJ=A.state.lights;if(d0===!0){if(b0===!0||k!==Q0){let KJ=k===Q0&&b.id===t;Z0.setState(b,k,KJ)}}let u0=!1;if(b.version===R0.__version){if(R0.needsLights&&R0.lightsStateVersion!==yJ.state.version)u0=!0;else if(R0.outputColorSpace!==q0)u0=!0;else if(x.isBatchedMesh&&R0.batching===!1)u0=!0;else if(!x.isBatchedMesh&&R0.batching===!0)u0=!0;else if(x.isBatchedMesh&&R0.batchingColor===!0&&x.colorTexture===null)u0=!0;else if(x.isBatchedMesh&&R0.batchingColor===!1&&x.colorTexture!==null)u0=!0;else if(x.isInstancedMesh&&R0.instancing===!1)u0=!0;else if(!x.isInstancedMesh&&R0.instancing===!0)u0=!0;else if(x.isSkinnedMesh&&R0.skinning===!1)u0=!0;else if(!x.isSkinnedMesh&&R0.skinning===!0)u0=!0;else if(x.isInstancedMesh&&R0.instancingColor===!0&&x.instanceColor===null)u0=!0;else if(x.isInstancedMesh&&R0.instancingColor===!1&&x.instanceColor!==null)u0=!0;else if(x.isInstancedMesh&&R0.instancingMorph===!0&&x.morphTexture===null)u0=!0;else if(x.isInstancedMesh&&R0.instancingMorph===!1&&x.morphTexture!==null)u0=!0;else if(R0.envMap!==z0)u0=!0;else if(b.fog===!0&&R0.fog!==F0)u0=!0;else if(R0.numClippingPlanes!==void 0&&(R0.numClippingPlanes!==Z0.numPlanes||R0.numIntersection!==Z0.numIntersection))u0=!0;else if(R0.vertexAlphas!==f0)u0=!0;else if(R0.vertexTangents!==g0)u0=!0;else if(R0.morphTargets!==I0)u0=!0;else if(R0.morphNormals!==e0)u0=!0;else if(R0.morphColors!==qJ)u0=!0;else if(R0.toneMapping!==EJ)u0=!0;else if(R0.morphTargetsCount!==zJ)u0=!0;else if(!!R0.lightProbeGrid!==A.state.lightProbeGridArray.length>0)u0=!0}else u0=!0,R0.__version=b.version;let hJ=R0.currentProgram;if(u0===!0){if(hJ=Q7(b,y,x),w&&b.isNodeMaterial)w.onUpdateProgram(b,hJ,R0)}let tJ=!1,M9=!1,Q8=!1,QJ=hJ.getUniforms(),FJ=R0.uniforms;if(B.useProgram(hJ.program))tJ=!0,M9=!0,Q8=!0;if(b.id!==t)t=b.id,M9=!0;if(R0.needsLights){let KJ=sW(A.state.lightProbeGridArray,x);if(R0.lightProbeGrid!==KJ)R0.lightProbeGrid=KJ,M9=!0}if(tJ||Q0!==k){if(B.buffers.depth.getReversed()&&k.reversedDepth!==!0)k._reversedDepth=!0,k.updateProjectionMatrix();QJ.setValue(S,"projectionMatrix",k.projectionMatrix),QJ.setValue(S,"viewMatrix",k.matrixWorldInverse);let V9=QJ.map.cameraPosition;if(V9!==void 0)V9.setValue(S,TJ.setFromMatrixPosition(k.matrixWorld));if(XJ.logarithmicDepthBuffer)QJ.setValue(S,"logDepthBufFC",2/(Math.log(k.far+1)/Math.LN2));if(b.isMeshPhongMaterial||b.isMeshToonMaterial||b.isMeshLambertMaterial||b.isMeshBasicMaterial||b.isMeshStandardMaterial||b.isShaderMaterial)QJ.setValue(S,"isOrthographic",k.isOrthographicCamera===!0);if(Q0!==k)Q0=k,M9=!0,Q8=!0}if(R0.needsLights){if(yJ.state.directionalShadowMap.length>0)QJ.setValue(S,"directionalShadowMap",yJ.state.directionalShadowMap,d);if(yJ.state.spotShadowMap.length>0)QJ.setValue(S,"spotShadowMap",yJ.state.spotShadowMap,d);if(yJ.state.pointShadowMap.length>0)QJ.setValue(S,"pointShadowMap",yJ.state.pointShadowMap,d)}if(x.isSkinnedMesh){QJ.setOptional(S,x,"bindMatrix"),QJ.setOptional(S,x,"bindMatrixInverse");let KJ=x.skeleton;if(KJ){if(KJ.boneTexture===null)KJ.computeBoneTexture();QJ.setValue(S,"boneTexture",KJ.boneTexture,d)}}if(x.isBatchedMesh){if(QJ.setOptional(S,x,"batchingTexture"),QJ.setValue(S,"batchingTexture",x._matricesTexture,d),QJ.setOptional(S,x,"batchingIdTexture"),QJ.setValue(S,"batchingIdTexture",x._indirectTexture,d),QJ.setOptional(S,x,"batchingColorTexture"),x._colorsTexture!==null)QJ.setValue(S,"batchingColorTexture",x._colorsTexture,d)}let L9=m.morphAttributes;if(L9.position!==void 0||L9.normal!==void 0||L9.color!==void 0)s0.update(x,m,hJ);if(M9||R0.receiveShadow!==x.receiveShadow)R0.receiveShadow=x.receiveShadow,QJ.setValue(S,"receiveShadow",x.receiveShadow);if((b.isMeshStandardMaterial||b.isMeshLambertMaterial||b.isMeshPhongMaterial)&&b.envMap===null&&y.environment!==null)FJ.envMapIntensity.value=y.environmentIntensity;if(FJ.dfgLUT!==void 0)FJ.dfgLUT.value=IG();if(M9){if(QJ.setValue(S,"toneMappingExposure",V.toneMappingExposure),R0.needsLights)oW(FJ,Q8);if(F0&&b.fog===!0)D0.refreshFogUniforms(FJ,F0);if(D0.refreshMaterialUniforms(FJ,b,r,W0,A.state.transmissionRenderTarget[k.id]),R0.needsLights&&R0.lightProbeGrid){let KJ=R0.lightProbeGrid;FJ.probesSH.value=KJ.texture,FJ.probesMin.value.copy(KJ.boundingBox.min),FJ.probesMax.value.copy(KJ.boundingBox.max),FJ.probesResolution.value.copy(KJ.resolution)}e8.upload(S,I$(R0),FJ,d)}if(b.isShaderMaterial&&b.uniformsNeedUpdate===!0)e8.upload(S,I$(R0),FJ,d),b.uniformsNeedUpdate=!1;if(b.isSpriteMaterial)QJ.setValue(S,"center",x.center);if(QJ.setValue(S,"modelViewMatrix",x.modelViewMatrix),QJ.setValue(S,"normalMatrix",x.normalMatrix),QJ.setValue(S,"modelMatrix",x.matrixWorld),b.uniformsGroups!==void 0){let KJ=b.uniformsGroups;for(let V9=0,$8=KJ.length;V9<$8;V9++){let w$=KJ[V9];O0.update(w$,hJ),O0.bind(w$,hJ)}}return hJ}function oW(k,y){k.ambientLightColor.needsUpdate=y,k.lightProbe.needsUpdate=y,k.directionalLights.needsUpdate=y,k.directionalLightShadows.needsUpdate=y,k.pointLights.needsUpdate=y,k.pointLightShadows.needsUpdate=y,k.spotLights.needsUpdate=y,k.spotLightShadows.needsUpdate=y,k.rectAreaLights.needsUpdate=y,k.hemisphereLights.needsUpdate=y}function aW(k){return k.isMeshLambertMaterial||k.isMeshToonMaterial||k.isMeshPhongMaterial||k.isMeshStandardMaterial||k.isShadowMaterial||k.isShaderMaterial&&k.lights===!0}if(this.getActiveCubeFace=function(){return u},this.getActiveMipmapLevel=function(){return c},this.getRenderTarget=function(){return f},this.setRenderTargetTextures=function(k,y,m){let b=T.get(k);if(b.__autoAllocateDepthBuffer=k.resolveDepthBuffer===!1,b.__autoAllocateDepthBuffer===!1)b.__useRenderToTexture=!1;T.get(k.texture).__webglTexture=y,T.get(k.depthTexture).__webglTexture=b.__autoAllocateDepthBuffer?void 0:m,b.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(k,y){let m=T.get(k);m.__webglFramebuffer=y,m.__useDefaultFramebuffer=y===void 0},this.setRenderTarget=function(k,y=0,m=0){f=k,u=y,c=m;let b=null,x=!1,F0=!1;if(k){let q0=T.get(k);if(q0.__useDefaultFramebuffer!==void 0){B.bindFramebuffer(S.FRAMEBUFFER,q0.__webglFramebuffer),H0.copy(k.viewport),L0.copy(k.scissor),M0=k.scissorTest,B.viewport(H0),B.scissor(L0),B.setScissorTest(M0),t=-1;return}else if(q0.__webglFramebuffer===void 0)d.setupRenderTarget(k);else if(q0.__hasExternalTextures)d.rebindTextures(k,T.get(k.texture).__webglTexture,T.get(k.depthTexture).__webglTexture);else if(k.depthBuffer){let f0=k.depthTexture;if(q0.__boundDepthTexture!==f0){if(f0!==null&&T.has(f0)&&(k.width!==f0.image.width||k.height!==f0.image.height))throw Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");d.setupDepthRenderbuffer(k)}}let V0=k.texture;if(V0.isData3DTexture||V0.isDataArrayTexture||V0.isCompressedArrayTexture)F0=!0;let z0=T.get(k).__webglFramebuffer;if(k.isWebGLCubeRenderTarget){if(Array.isArray(z0[y]))b=z0[y][m];else b=z0[y];x=!0}else if(k.samples>0&&d.useMultisampledRTT(k)===!1)b=T.get(k).__webglMultisampledFramebuffer;else if(Array.isArray(z0))b=z0[m];else b=z0;H0.copy(k.viewport),L0.copy(k.scissor),M0=k.scissorTest}else H0.copy(S0).multiplyScalar(r).floor(),L0.copy(T0).multiplyScalar(r).floor(),M0=A0;if(m!==0)b=h;if(B.bindFramebuffer(S.FRAMEBUFFER,b))B.drawBuffers(k,b);if(B.viewport(H0),B.scissor(L0),B.setScissorTest(M0),x){let q0=T.get(k.texture);S.framebufferTexture2D(S.FRAMEBUFFER,S.COLOR_ATTACHMENT0,S.TEXTURE_CUBE_MAP_POSITIVE_X+y,q0.__webglTexture,m)}else if(F0){let q0=y;for(let V0=0;V0<k.textures.length;V0++){let z0=T.get(k.textures[V0]);S.framebufferTextureLayer(S.FRAMEBUFFER,S.COLOR_ATTACHMENT0+V0,z0.__webglTexture,m,q0)}}else if(k!==null&&m!==0){let q0=T.get(k.texture);S.framebufferTexture2D(S.FRAMEBUFFER,S.COLOR_ATTACHMENT0,S.TEXTURE_2D,q0.__webglTexture,m)}t=-1},this.readRenderTargetPixels=function(k,y,m,b,x,F0,k0,q0=0){if(!(k&&k.isWebGLRenderTarget)){P0("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let V0=T.get(k).__webglFramebuffer;if(k.isWebGLCubeRenderTarget&&k0!==void 0)V0=V0[k0];if(V0){B.bindFramebuffer(S.FRAMEBUFFER,V0);try{let z0=k.textures[q0],f0=z0.format,g0=z0.type;if(k.textures.length>1)S.readBuffer(S.COLOR_ATTACHMENT0+q0);if(!XJ.textureFormatReadable(f0)){P0("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!XJ.textureTypeReadable(g0)){P0("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}if(y>=0&&y<=k.width-b&&(m>=0&&m<=k.height-x))S.readPixels(y,m,b,x,i.convert(f0),i.convert(g0),F0)}finally{let z0=f!==null?T.get(f).__webglFramebuffer:null;B.bindFramebuffer(S.FRAMEBUFFER,z0)}}},this.readRenderTargetPixelsAsync=async function(k,y,m,b,x,F0,k0,q0=0){if(!(k&&k.isWebGLRenderTarget))throw Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let V0=T.get(k).__webglFramebuffer;if(k.isWebGLCubeRenderTarget&&k0!==void 0)V0=V0[k0];if(V0)if(y>=0&&y<=k.width-b&&(m>=0&&m<=k.height-x)){B.bindFramebuffer(S.FRAMEBUFFER,V0);let z0=k.textures[q0],f0=z0.format,g0=z0.type;if(k.textures.length>1)S.readBuffer(S.COLOR_ATTACHMENT0+q0);if(!XJ.textureFormatReadable(f0))throw Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!XJ.textureTypeReadable(g0))throw Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let I0=S.createBuffer();S.bindBuffer(S.PIXEL_PACK_BUFFER,I0),S.bufferData(S.PIXEL_PACK_BUFFER,F0.byteLength,S.STREAM_READ),S.readPixels(y,m,b,x,i.convert(f0),i.convert(g0),0);let e0=f!==null?T.get(f).__webglFramebuffer:null;B.bindFramebuffer(S.FRAMEBUFFER,e0);let qJ=S.fenceSync(S.SYNC_GPU_COMMANDS_COMPLETE,0);return S.flush(),await rZ(S,qJ,4),S.bindBuffer(S.PIXEL_PACK_BUFFER,I0),S.getBufferSubData(S.PIXEL_PACK_BUFFER,0,F0),S.deleteBuffer(I0),S.deleteSync(qJ),F0}else throw Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(k,y=null,m=0){let b=Math.pow(2,-m),x=Math.floor(k.image.width*b),F0=Math.floor(k.image.height*b),k0=y!==null?y.x:0,q0=y!==null?y.y:0;d.setTexture2D(k,0),S.copyTexSubImage2D(S.TEXTURE_2D,m,0,0,k0,q0,x,F0),B.unbindTexture()},this.copyTextureToTexture=function(k,y,m=null,b=null,x=0,F0=0){let k0,q0,V0,z0,f0,g0,I0,e0,qJ,EJ=k.isCompressedTexture?k.mipmaps[F0]:k.image;if(m!==null)k0=m.max.x-m.min.x,q0=m.max.y-m.min.y,V0=m.isBox3?m.max.z-m.min.z:1,z0=m.min.x,f0=m.min.y,g0=m.isBox3?m.min.z:0;else{let FJ=Math.pow(2,-x);if(k0=Math.floor(EJ.width*FJ),q0=Math.floor(EJ.height*FJ),k.isDataArrayTexture)V0=EJ.depth;else if(k.isData3DTexture)V0=Math.floor(EJ.depth*FJ);else V0=1;z0=0,f0=0,g0=0}if(b!==null)I0=b.x,e0=b.y,qJ=b.z;else I0=0,e0=0,qJ=0;let JJ=i.convert(y.format),zJ=i.convert(y.type),R0;if(y.isData3DTexture)d.setTexture3D(y,0),R0=S.TEXTURE_3D;else if(y.isDataArrayTexture||y.isCompressedArrayTexture)d.setTexture2DArray(y,0),R0=S.TEXTURE_2D_ARRAY;else d.setTexture2D(y,0),R0=S.TEXTURE_2D;B.activeTexture(S.TEXTURE0),B.pixelStorei(S.UNPACK_FLIP_Y_WEBGL,y.flipY),B.pixelStorei(S.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),B.pixelStorei(S.UNPACK_ALIGNMENT,y.unpackAlignment);let yJ=B.getParameter(S.UNPACK_ROW_LENGTH),u0=B.getParameter(S.UNPACK_IMAGE_HEIGHT),hJ=B.getParameter(S.UNPACK_SKIP_PIXELS),tJ=B.getParameter(S.UNPACK_SKIP_ROWS),M9=B.getParameter(S.UNPACK_SKIP_IMAGES);B.pixelStorei(S.UNPACK_ROW_LENGTH,EJ.width),B.pixelStorei(S.UNPACK_IMAGE_HEIGHT,EJ.height),B.pixelStorei(S.UNPACK_SKIP_PIXELS,z0),B.pixelStorei(S.UNPACK_SKIP_ROWS,f0),B.pixelStorei(S.UNPACK_SKIP_IMAGES,g0);let Q8=k.isDataArrayTexture||k.isData3DTexture,QJ=y.isDataArrayTexture||y.isData3DTexture;if(k.isDepthTexture){let FJ=T.get(k),L9=T.get(y),KJ=T.get(FJ.__renderTarget),V9=T.get(L9.__renderTarget);B.bindFramebuffer(S.READ_FRAMEBUFFER,KJ.__webglFramebuffer),B.bindFramebuffer(S.DRAW_FRAMEBUFFER,V9.__webglFramebuffer);for(let $8=0;$8<V0;$8++){if(Q8)S.framebufferTextureLayer(S.READ_FRAMEBUFFER,S.COLOR_ATTACHMENT0,T.get(k).__webglTexture,x,g0+$8),S.framebufferTextureLayer(S.DRAW_FRAMEBUFFER,S.COLOR_ATTACHMENT0,T.get(y).__webglTexture,F0,qJ+$8);S.blitFramebuffer(z0,f0,k0,q0,I0,e0,k0,q0,S.DEPTH_BUFFER_BIT,S.NEAREST)}B.bindFramebuffer(S.READ_FRAMEBUFFER,null),B.bindFramebuffer(S.DRAW_FRAMEBUFFER,null)}else if(x!==0||k.isRenderTargetTexture||T.has(k)){let FJ=T.get(k),L9=T.get(y);B.bindFramebuffer(S.READ_FRAMEBUFFER,s),B.bindFramebuffer(S.DRAW_FRAMEBUFFER,g);for(let KJ=0;KJ<V0;KJ++){if(Q8)S.framebufferTextureLayer(S.READ_FRAMEBUFFER,S.COLOR_ATTACHMENT0,FJ.__webglTexture,x,g0+KJ);else S.framebufferTexture2D(S.READ_FRAMEBUFFER,S.COLOR_ATTACHMENT0,S.TEXTURE_2D,FJ.__webglTexture,x);if(QJ)S.framebufferTextureLayer(S.DRAW_FRAMEBUFFER,S.COLOR_ATTACHMENT0,L9.__webglTexture,F0,qJ+KJ);else S.framebufferTexture2D(S.DRAW_FRAMEBUFFER,S.COLOR_ATTACHMENT0,S.TEXTURE_2D,L9.__webglTexture,F0);if(x!==0)S.blitFramebuffer(z0,f0,k0,q0,I0,e0,k0,q0,S.COLOR_BUFFER_BIT,S.NEAREST);else if(QJ)S.copyTexSubImage3D(R0,F0,I0,e0,qJ+KJ,z0,f0,k0,q0);else S.copyTexSubImage2D(R0,F0,I0,e0,z0,f0,k0,q0)}B.bindFramebuffer(S.READ_FRAMEBUFFER,null),B.bindFramebuffer(S.DRAW_FRAMEBUFFER,null)}else if(QJ)if(k.isDataTexture||k.isData3DTexture)S.texSubImage3D(R0,F0,I0,e0,qJ,k0,q0,V0,JJ,zJ,EJ.data);else if(y.isCompressedArrayTexture)S.compressedTexSubImage3D(R0,F0,I0,e0,qJ,k0,q0,V0,JJ,EJ.data);else S.texSubImage3D(R0,F0,I0,e0,qJ,k0,q0,V0,JJ,zJ,EJ);else if(k.isDataTexture)S.texSubImage2D(S.TEXTURE_2D,F0,I0,e0,k0,q0,JJ,zJ,EJ.data);else if(k.isCompressedTexture)S.compressedTexSubImage2D(S.TEXTURE_2D,F0,I0,e0,EJ.width,EJ.height,JJ,EJ.data);else S.texSubImage2D(S.TEXTURE_2D,F0,I0,e0,k0,q0,JJ,zJ,EJ);if(B.pixelStorei(S.UNPACK_ROW_LENGTH,yJ),B.pixelStorei(S.UNPACK_IMAGE_HEIGHT,u0),B.pixelStorei(S.UNPACK_SKIP_PIXELS,hJ),B.pixelStorei(S.UNPACK_SKIP_ROWS,tJ),B.pixelStorei(S.UNPACK_SKIP_IMAGES,M9),F0===0&&y.generateMipmaps)S.generateMipmap(R0);B.unbindTexture()},this.initRenderTarget=function(k){if(T.get(k).__webglFramebuffer===void 0)d.setupRenderTarget(k)},this.initTexture=function(k){if(k.isCubeTexture)d.setTextureCube(k,0);else if(k.isData3DTexture)d.setTexture3D(k,0);else if(k.isDataArrayTexture||k.isCompressedArrayTexture)d.setTexture2DArray(k,0);else d.setTexture2D(k,0);B.unbindTexture()},this.resetState=function(){u=0,c=0,f=null,B.reset(),X0.reset()},typeof __THREE_DEVTOOLS__<"u")__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return vQ}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(J){this._outputColorSpace=J;let Q=this.getContext();Q.drawingBufferColorSpace=l0._getDrawingBufferColorSpace(J),Q.unpackColorSpace=l0._getUnpackColorSpace()}}var dW=[{id:"skeletal",name:"Skeletal System",latinName:"Systema Skeletale",icon:"Bone",color:"#e8e0d0",tagline:"The living scaffold that carries us through life.",description:"The skeletal system forms the rigid internal framework of the human body, composed of 206 bones at adulthood along with cartilage, ligaments, and joints. Beyond mechanical support, it protects vital organs, anchors muscles for movement, stores minerals, and houses the red bone marrow where blood cells are produced.",funFact:"Babies are born with about 270 cartilaginous bones that fuse into 206 — and the smallest, the stapes in the middle ear, is barely 3 mm long.",stats:[{label:"Bones",value:"206"},{label:"Joints",value:"360+"},{label:"% Body Weight",value:"~15%"},{label:"New Bone / Year",value:"~10%"}],layers:["Skin","Subcutaneous tissue","Deep fascia","Muscle","Bone"],imagingModality:"X-ray",organs:[{id:"skull",name:"Skull",latinName:"Cranium",weight:"~700 g",overview:"The skull is the bony skeleton of the head, formed by 22 bones divided into the neurocranium (which encases the brain) and the viscerocranium (which forms the face). Most bones are joined by immovable fibrous joints called sutures.",location:"Superior portion of the axial skeleton, resting on the vertebral column at the atlanto-occipital joint.",function:"Protects the brain and special sense organs, provides attachment for muscles of mastication and facial expression, and forms the upper airway and oral cavity.",bloodSupply:"Supplied by branches of the external carotid (middle meningeal, maxillary) and internal carotid (ophthalmic) arteries.",nerveSupply:"Innervated by the trigeminal (V), facial (VII), glossopharyngeal (IX), and vagus (X) nerves.",clinicalImportance:"Skull fractures risk epidural hematomas via middle meningeal artery tears and can compress cranial nerves at foraminal exits.",commonDiseases:["Skull Fracture","Craniosynostosis","Osteomyelitis","Basilar Invagination"],relationships:"Sits atop the vertebral column at the atlanto-occipital joint; houses and protects the brain, eyes, ears, nasal cavity, and oral cavity, and articulates with the mandible at the temporomandibular joint.",imaging:"CT is preferred for fractures and surgical planning; MRI better evaluates intracranial contents, meninges, and soft tissues.",clinicalNote:"Battle sign (bruising behind the ear) and raccoon eyes indicate a basilar skull fracture with potential cavernous sinus injury.",histology:"Flat bones with three layers: outer and inner compact bone tables sandwiching diploic trabecular bone that houses red marrow.",quizRef:0},{id:"vertebral-column",name:"Vertebral Column",latinName:"Columna Vertebralis",weight:"~2 kg",overview:"A flexible column of 33 vertebrae — 7 cervical, 12 thoracic, 5 lumbar, 5 sacral (fused), and 4 coccygeal (fused) — separated by fibrocartilaginous intervertebral discs.",location:"Central axis of the body, extending from the skull to the coccyx.",function:"Protects the spinal cord, supports the head and trunk, transmits weight to the pelvis, and provides flexible attachment points for ribs and muscles.",bloodSupply:"Segmental supply from vertebral, ascending cervical, intercostal, and lumbar arteries via segmental medullary and radicular branches.",nerveSupply:"Recurrent meningeal nerves (sinuvertebral nerves) from spinal nerves supply the discs, ligaments, and meninges.",clinicalImportance:"Disc herniation typically posterolaterally compresses the exiting nerve root below the affected level, causing radiculopathy.",commonDiseases:["Herniated Disc","Scoliosis","Spinal Stenosis","Vertebral Compression Fracture"],relationships:"Forms the central axis surrounding the spinal cord; articulates with the skull at C1 superiorly and the pelvis at the sacroiliac joints inferiorly, with ribs attaching at T1–T12.",imaging:"MRI is preferred for disc herniation, cord compression, and ligamentous injury; CT defines bony canal and fracture detail.",clinicalNote:"Lumbar puncture is performed at the L3–L4 or L4–L5 interspace, safely below the conus medullaris which ends at L1–L2.",histology:"Vertebrae are short bones with an outer cortical shell of compact bone over a trabecular marrow-filled interior; intervertebral discs are fibrocartilage with a gelatinous nucleus pulposus."},{id:"rib-cage",name:"Rib Cage",latinName:"Cavea Thoracis",overview:"A bony cartilaginous cage formed by 12 pairs of ribs, the sternum, and thoracic vertebrae. Ribs 1–7 are true, 8–10 false, and 11–12 floating.",location:"Anterior thorax, extending from T1 to T12 vertebrae.",function:"Protects the heart, lungs, and great vessels while expanding during respiration to drive ventilation.",bloodSupply:"Supplied by the intercostal arteries (posterior from aorta, anterior from internal thoracic) and subclavian branches.",nerveSupply:"Intercostal nerves (T1–T11) and subcostal nerve (T12) provide segmental innervation.",clinicalImportance:"Flail chest — three or more segmental fractures in adjacent ribs — causes paradoxical chest wall motion and respiratory failure.",commonDiseases:["Rib Fracture","Flail Chest","Costochondritis","Pectus Excavatum"]},{id:"femur",name:"Femur",latinName:"Os Femoris",weight:"~290 g (paired)",overview:"The longest, heaviest, and strongest bone in the human body, the femur forms the skeleton of the thigh and articulates with the acetabulum at the hip and the tibia at the knee.",location:"Thigh, between the hip joint and knee joint.",function:"Bears the entire weight of the body during standing and gait, provides attachment for powerful locomotor muscles, and stores marrow.",bloodSupply:"Crucially dependent on the medial and lateral circumflex femoral arteries and the artery of the ligamentum teres for the femoral head.",nerveSupply:"Nerves to the surrounding thigh compartments: femoral, obturator, and sciatic nerves.",clinicalImportance:"Femoral neck fractures in the elderly risk avascular necrosis of the head due to disruption of the circumflex blood supply.",commonDiseases:["Femoral Neck Fracture","Avascular Necrosis","Femoral Stress Fracture","Osteosarcoma"],relationships:"Articulates proximally with the acetabulum of the pelvis and distally with the tibia and patella at the knee; the femoral head receives blood via the ligamentum teres and circumflex arteries.",imaging:"Plain radiographs in two planes diagnose most fractures; MRI detects occult stress fractures and early avascular necrosis before collapse.",clinicalNote:"A shortened, externally rotated leg in an elderly patient after a fall is classic for femoral neck fracture and requires urgent orthopedic management.",histology:"Typical long bone: thick cortical compact bone diaphysis with a medullary cavity, and trabecular metaphyseal and epiphyseal bone housing red and yellow marrow."},{id:"pelvis",name:"Pelvis",latinName:"Pelvis",weight:"~1.5 kg",overview:"A basin-shaped ring formed by the two hip bones (ilium, ischium, pubis), the sacrum, and the coccyx. It transfers weight from the spine to the lower limbs and supports the pelvic viscera.",location:"Inferior trunk, between the abdomen and lower limbs.",function:"Transmits body weight to the lower limbs, protects pelvic organs, anchors pelvic floor muscles, and forms the birth canal in females.",bloodSupply:"Internal iliac, external iliac, ovarian/testicular, and median sacral arteries.",nerveSupply:"Lumbosacral plexus (L1–S4) including obturator, sciatic, pudendal, and sacral nerves.",clinicalImportance:"Pelvic fractures can cause life-threatening hemorrhage from the rich presacral venous plexus and internal iliac branches.",commonDiseases:["Pelvic Fracture","Hip Osteoarthritis","Pelvic Floor Dysfunction","Sacral Insufficiency Fracture"],relationships:"Connects the axial skeleton via the sacrum to the lower limbs at the hip joints; supports the bladder, rectum, and reproductive organs, and forms the birth canal.",imaging:"CT is the gold standard for pelvic fractures and sacral injuries; MRI assesses pelvic floor disorders and soft-tissue pathology.",clinicalNote:"Application of a pelvic binder at the level of the greater trochanters can be life-saving in unstable pelvic fractures by reducing pelvic volume and tamponade bleeding.",histology:"Flat bones with thin cortices and abundant trabecular marrow; the sacrum encloses the sacral canal containing nerve roots."},{id:"humerus",name:"Humerus",latinName:"Humerus",overview:"The single long bone of the arm, articulating proximally with the scapula at the glenohumeral joint and distally with the radius and ulna at the elbow.",location:"Arm, between shoulder and elbow.",function:"Acts as a lever for upper limb movement, transmits forces between shoulder and forearm, and anchors major arm muscles.",bloodSupply:"Profunda brachii (artery of the arm), plus circumflex humeral and brachial arterial branches.",nerveSupply:"Musculocutaneous, radial, median, and ulnar nerves lie in close proximity, especially around the spiral groove.",clinicalImportance:"Midshaft fractures commonly injure the radial nerve in the spiral groove, causing wrist drop.",commonDiseases:["Humeral Shaft Fracture","Radial Nerve Palsy","Proximal Humeral Fracture","Supracondylar Fracture"]},{id:"sternum",name:"Sternum",latinName:"Sternum",weight:"~70 g",overview:"A flat elongated bone in the anterior chest wall divided into the manubrium, body, and xiphoid process. It is a primary site for cardiopulmonary resuscitation and bone marrow biopsy.",location:"Anterior midline of the thorax, articulating with clavicles and ribs 1–7.",function:"Forms the anterior anchor of the rib cage and protects mediastinal structures including the heart.",bloodSupply:"Internal thoracic arteries via perforating branches and the pericardiophrenic artery.",nerveSupply:"Anterior intercostal nerves from T1–T7.",clinicalImportance:"Sternal fractures from blunt trauma indicate high-energy injury and are associated with cardiac and pulmonary contusions.",commonDiseases:["Sternal Fracture","Pectus Carinatum","Sternal Osteomyelitis","Sternal Non-Union"]},{id:"clavicle",name:"Clavicle",latinName:"Clavicula",overview:"The only long bone to lie horizontally, the S-shaped clavicle connects the upper limb to the trunk and is the most commonly fractured bone in the body.",location:"Between the sternum (medially) and the acromion of the scapula (laterally).",function:"Braces the shoulder, transmits forces from the upper limb to the axial skeleton, and serves as a muscle attachment site.",bloodSupply:"Branches of the suprascapular, thoracoacromial, and internal thoracic arteries.",nerveSupply:"Supraclavicular nerves (C3–C4) for sensation; no muscles attach solely to it.",clinicalImportance:"Midshaft fractures are most common and present with a drooped shoulder and palpable deformity.",commonDiseases:["Clavicle Fracture","Acromioclavicular Separation","Sternoclavicular Dislocation","Clavicular Osteomyelitis"]}]},{id:"muscular",name:"Muscular System",latinName:"Systema Musculare",icon:"Dumbbell",color:"#c0392b",tagline:"Over 600 muscles turn thought into motion.",description:"The muscular system comprises more than 600 skeletal muscles that produce movement, maintain posture, generate heat, and stabilize joints. Each muscle is a bundled organ of contractile fibers under voluntary or involuntary control.",funFact:"The masseter is the strongest muscle by force generated on a surface area basis — your bite can exert up to 90 kg of force.",stats:[{label:"Muscles",value:"600+"},{label:"% Body Mass",value:"~40%"},{label:"Strongest (force)",value:"Masseter"},{label:"Largest",value:"Gluteus Maximus"}],layers:["Skin","Subcutaneous tissue","Deep fascia","Skeletal muscle","Bone"],imagingModality:"MRI",organs:[{id:"deltoid",name:"Deltoid",latinName:"Musculus Deltoideus",weight:"~200 g",overview:"A thick, triangular muscle covering the shoulder that gives it its rounded contour. It has three distinct heads — anterior, middle, and posterior — each contributing to different movements of the arm.",location:"Lateral aspect of the shoulder, draping the glenohumeral joint.",function:"Anterior head flexes and medially rotates the arm; middle head abducts; posterior head extends and laterally rotates the arm.",bloodSupply:"Posterior circumflex humeral artery and deltoid branch of the thoracoacromial artery.",nerveSupply:"Axillary nerve (C5–C6), making it a key clinical landmark for axillary nerve integrity.",clinicalImportance:"Axillary nerve injury after shoulder dislocation causes deltoid paralysis and anesthesia over the 'regimental badge' patch.",commonDiseases:["Deltoid Strain","Axillary Nerve Palsy","Calcific Tendinitis","Frozen Shoulder"],relationships:"Overlies the glenohumeral joint and the axillary nerve passing through the quadrangular space; the cephalic vein runs in the deltopectoral groove medially.",imaging:"Ultrasound and MRI evaluate rotator cuff and deltoid tears; ultrasound guides intramuscular injections and aspiration.",clinicalNote:"Intramuscular injections target the mid-deltoid, 2–3 finger-breadths below the acromion, to avoid the axillary nerve and circumflex vessels.",histology:"Multipennate skeletal muscle: fibers organized into fascicles bounded by epimysium, perimysium, and endomysium of connective tissue."},{id:"biceps-brachii",name:"Biceps Brachii",latinName:"Musculus Biceps Brachii",overview:"A two-headed fusiform muscle of the anterior arm. The long head originates at the supraglenoid tubercle and the short head at the coracoid process, converging to insert on the radial tuberosity.",location:"Anterior compartment of the arm.",function:"Flexes the elbow and powerfully supinates the forearm; assists in shoulder flexion and stabilization.",bloodSupply:"Branches of the brachial artery, especially the bicipital and superior ulnar collateral arteries.",nerveSupply:"Musculocutaneous nerve (C5–C6).",clinicalImportance:"Long head rupture produces the classic 'Popeye sign' — a bulging muscle belly retracted distally.",commonDiseases:["Biceps Tendon Rupture","Proximal Biceps Tendinitis","SLAP Tear","Bicipital Tendinopathy"],relationships:"Long head tendon runs through the bicipital groove and intracapsular space of the shoulder; the musculocutaneous nerve passes deep between the biceps and brachialis.",imaging:"MRI best visualizes the long head tendon and SLAP tears; ultrasound dynamically assesses tendon subluxation and rupture.",clinicalNote:"The biceps reflex tests the musculocutaneous nerve (C5–C6) and is part of the standard neurological exam.",histology:"Bipennate skeletal muscle with two heads of origin converging on a common distal tendon inserting on the radial tuberosity."},{id:"pectoralis-major",name:"Pectoralis Major",latinName:"Musculus Pectoralis Major",weight:"~430 g",overview:"A large, fan-shaped chest muscle with clavicular, sternocostal, and abdominal heads that converge on the intertubercular sulcus of the humerus.",location:"Anterior thoracic wall, superficial to pectoralis minor.",function:"Adducts and medially rotates the arm; the clavicular head flexes, and the sternocostal head extends the flexed arm.",bloodSupply:"Pectoral branch of thoracoacromial, internal thoracic perforators, and lateral thoracic arteries.",nerveSupply:"Medial and lateral pectoral nerves (C5–T1).",clinicalImportance:"Pectoralis major rupture occurs in weightlifters during eccentric bench press, requiring surgical repair to restore strength.",commonDiseases:["Pectoralis Major Rupture","Poland Syndrome","Costoclavicular Syndrome","Pectoralis Strain"]},{id:"rectus-abdominis",name:"Rectus Abdominis",latinName:"Musculus Rectus Abdominis",overview:"The paired vertical strap muscles of the anterior abdominal wall, segmented by three transverse tendinous intersections giving the 'six-pack' appearance.",location:"Anterior abdominal wall, enclosed in the rectus sheath on either side of the linea alba.",function:"Flexes the trunk, compresses the abdomen to aid in defecation, urination, and forced expiration, and stabilizes the pelvis.",bloodSupply:"Superior epigastric (continuation of internal thoracic) and inferior epigastric (external iliac) arteries.",nerveSupply:"Thoracoabdominal nerves T7–T12, segmentally.",clinicalImportance:"Rectus sheath hematomas can mimic acute abdominal pathology; the linea alba is a common surgical access plane.",commonDiseases:["Rectus Diastasis","Rectus Sheath Hematoma","Abdominal Hernia","Rectus Strain"],relationships:"Enclosed in the rectus sheath formed by the aponeuroses of the external oblique, internal oblique, and transversus abdominis; the linea alba separates the two bellies.",imaging:"Ultrasound evaluates rectus sheath hematomas and diastasis; CT assesses hernias, abscesses, and abdominal wall pathology.",clinicalNote:"Midline laparotomy through the avascular linea alba minimizes bleeding and avoids injuring segmental nerves and vessels.",histology:"Strap-like parallel skeletal muscle fibers segmented by three transverse tendinous intersections anchored to the anterior rectus sheath."},{id:"quadriceps",name:"Quadriceps Femoris",latinName:"Musculus Quadriceps Femoris",weight:"~2 kg (paired)",overview:"The four-headed extensor of the knee — vastus medialis, lateralis, intermedius, and rectus femoris — converging into the quadriceps tendon that envelops the patella.",location:"Anterior compartment of the thigh.",function:"Powerful knee extension; the rectus femoris also flexes the hip. Vital for gait, stairs, and rising from sitting.",bloodSupply:"Branches of the femoral and profunda femoris arteries (lateral and medial circumflex femoral).",nerveSupply:"Femoral nerve (L2–L4).",clinicalImportance:"Quadriceps tendon rupture in older adults causes inability to actively extend the knee and requires urgent repair.",commonDiseases:["Quadriceps Tendon Rupture","Patellofemoral Pain Syndrome","Quadriceps Strain","Myositis Ossificans"],relationships:"Converges into the quadriceps tendon that envelops the patella and continues as the patellar ligament to the tibial tuberosity; the femoral nerve lies deep between the rectus femoris and vastus intermedius.",imaging:"MRI is preferred for tendon ruptures, muscle strains, and patellofemoral assessment; ultrasound dynamically evaluates the patellar ligament.",clinicalNote:"The patellar reflex (L2–L4) tests femoral nerve integrity and quadriceps function; an absent reflex suggests upper or lower motor neuron lesion.",histology:"Four skeletal muscle bellies (vastus medialis, lateralis, intermedius, and rectus femoris) converging on a common tendon."},{id:"gastrocnemius",name:"Gastrocnemius",latinName:"Musculus Gastrocnemius",overview:"A two-headed superficial calf muscle that, with the soleus, forms the triceps surae. Its tendinous continuation is the Achilles tendon inserting on the calcaneus.",location:"Superficial posterior compartment of the leg.",function:"Plantarflexes the ankle, flexes the knee, and propels gait; the key muscle for push-off during walking and jumping.",bloodSupply:"Medial and lateral sural branches of the popliteal artery.",nerveSupply:"Tibial nerve (S1–S2).",clinicalImportance:"Medial head rupture presents as 'tennis leg' — sudden calf pain mimicking deep vein thrombosis.",commonDiseases:["Achilles Tendinopathy","Tennis Leg","Gastrocnemius Strain","Achilles Tendon Rupture"]},{id:"gluteus-maximus",name:"Gluteus Maximus",latinName:"Musculus Gluteus Maximus",weight:"~750 g",overview:"The largest and most superficial of the gluteal muscles, forming the bulk of the buttock and uniquely developed in humans for upright posture.",location:"Posterior gluteal region, superficial to gluteus medius.",function:"Extends and laterally rotates the hip; powerfully extends the trunk from the flexed position during climbing and rising.",bloodSupply:"Superior and inferior gluteal arteries, with the inferior being the dominant supply.",nerveSupply:"Inferior gluteal nerve (L5–S2).",clinicalImportance:"Intramuscular injections target the superolateral quadrant to avoid the sciatic nerve and inferior gluteal vessels.",commonDiseases:["Gluteal Bursitis","Piriformis Syndrome","Hamstring Origin Tendinopathy","Sacroiliac Dysfunction"]},{id:"trapezius",name:"Trapezius",latinName:"Musculus Trapezius",overview:"A large, triangular superficial muscle of the upper back with descending, transverse, and ascending parts that together resemble a trapezoid when paired.",location:"Posterior neck and upper thorax, from occipital bone to T12.",function:"Elevates, retracts, and depresses the scapula; rotates the glenoid superiorly and supports the weight of the upper limb.",bloodSupply:"Transverse cervical and dorsal scapular arteries (and occipital branch for the upper fibers).",nerveSupply:"Spinal accessory nerve (CN XI) for motor; C2–C4 for proprioception.",clinicalImportance:"Accessory nerve injury during cervical lymph node biopsy results in shoulder droop and inability to elevate the arm above horizontal.",commonDiseases:["Trapezius Strain","Accessory Nerve Palsy","Myofascial Pain Syndrome","Thoracic Outlet Syndrome"],relationships:"Spans from the occipital bone and spinous processes of C7–T12 to the lateral clavicle, acromion, and scapular spine; the spinal accessory nerve (CN XI) crosses the posterior triangle of the neck.",imaging:"MRI evaluates muscle strains and atrophy; ultrasound can localize the accessory nerve in the posterior triangle.",clinicalNote:"CN XI injury during cervical lymph node biopsy causes trapezius palsy with shoulder droop and inability to elevate the arm above 90°.",histology:"Triangular skeletal muscle with descending, transverse, and ascending fibers bounded by standard epimysial, perimysial, and endomysial connective tissue layers.",quizRef:2}]},{id:"nervous",name:"Nervous System",latinName:"Systema Nervosum",icon:"Brain",color:"#f1c40f",tagline:"The body's command network — electricity made flesh.",description:"The nervous system integrates sensory input, coordinates motor output, and underlies cognition, emotion, and homeostasis. It is divided into the central nervous system (brain and spinal cord) and peripheral nervous system (cranial and spinal nerves).",funFact:"The human brain generates about 20 watts of power — enough to dimly light a bulb — while comprising just 2% of body weight.",stats:[{label:"Neurons",value:"~86 billion"},{label:"Brain Weight",value:"~1.4 kg"},{label:"Nerve Conduction",value:"120 m/s"},{label:"Cranial Nerves",value:"12 pairs"}],layers:["Skin","Subcutaneous tissue","Skull/Vertebrae","Meninges","Nervous tissue"],imagingModality:"MRI",organs:[{id:"cerebrum",name:"Cerebrum",latinName:"Cerebrum",weight:"~1.1 kg",overview:"The largest part of the brain, divided into two hemispheres connected by the corpus callosum and partitioned into four lobes: frontal, parietal, temporal, and occipital.",location:"Supratentorial cranial cavity, occupying most of the cranial vault.",function:"Houses higher cognition, voluntary motor control, sensory perception, language, memory, and emotional processing.",bloodSupply:"Anterior (ACA), middle (MCA), and posterior (PCA) cerebral arteries forming the Circle of Willis.",nerveSupply:"Internally by intrinsic networks of glutamatergic, GABAergic, and modulatory neurons; sensation via the meninges from the trigeminal nerve.",clinicalImportance:"Stroke in MCA territory causes contralateral face and arm weakness with sensory loss and, in the dominant hemisphere, aphasia.",commonDiseases:["Ischemic Stroke","Glioblastoma","Alzheimer Disease","Epilepsy"],relationships:"Sits above the brainstem and cerebellum in the anterior and middle cranial fossae; the two hemispheres are connected by the corpus callosum, with basal ganglia and diencephalon deep within.",imaging:"MRI is preferred for stroke, tumors, demyelination, and cortical anatomy; CT is faster for acute hemorrhage screening.",clinicalNote:"MCA territory stroke causes contralateral face and arm weakness with sensory loss, and aphasia if the dominant hemisphere is affected.",histology:"Six-layered neocortex of pyramidal and stellate neurons overlying white matter tracts; glia outnumber neurons roughly three to one."},{id:"cerebellum",name:"Cerebellum",latinName:"Cerebellum",weight:"~150 g",overview:"A cauliflower-shaped structure dorsal to the pons and medulla, comprising a vermis and two hemispheres. Despite only 10% of brain volume, it contains over half of all neurons.",location:"Posterior cranial fossa, beneath the tentorium cerebelli.",function:"Coordinates voluntary movement, balance, posture, and motor learning by comparing intended with actual movement.",bloodSupply:"Superior, anterior inferior, and posterior inferior cerebellar arteries (SCA, AICA, PICA).",nerveSupply:"Connected via the three cerebellar peduncles; intrinsic Purkinje and granule cell networks.",clinicalImportance:"Cerebellar lesions produce ipsilateral ataxia, dysmetria (past-pointing), intention tremor, and dysarthric speech.",commonDiseases:["Cerebellar Stroke","Ataxia","Medulloblastoma","Cerebellar Herniation"],relationships:"Lies posterior to the pons and medulla in the posterior cranial fossa beneath the tentorium cerebelli; connected to the brainstem via the superior, middle, and inferior cerebellar peduncles.",imaging:"MRI is the modality of choice for evaluating cerebellar strokes, tumors, atrophy, and malformations such as Chiari.",clinicalNote:"Finger-to-nose and heel-to-shin testing assesses ipsilateral cerebellar coordination; dysmetria and intention tremor localize to the affected hemisphere.",histology:"Three-layered cortex (molecular, Purkinje, granular cell) overlying deep white matter and nuclei; contains more than half of all brain neurons."},{id:"brainstem",name:"Brainstem",latinName:"Truncus Encephali",weight:"~70 g",overview:"The stalk-like structure continuous with the spinal cord, comprising the midbrain, pons, and medulla oblongata. It contains nuclei of cranial nerves III–XII.",location:"Central core of the brain between the diencephalon and spinal cord.",function:"Relays signals between cerebrum and spinal cord, controls vital autonomic functions including respiration and cardiovascular tone, and houses cranial nerve nuclei.",bloodSupply:"Vertebral and basilar arteries with their paramedian, short circumferential, and long circumferential branches.",nerveSupply:"Contains nuclei of cranial nerves III–XII and the reticular activating system.",clinicalImportance:"Brainstem stroke is life-threatening; locked-in syndrome follows basilar artery occlusion with preserved consciousness but quadriplegia.",commonDiseases:["Brainstem Stroke","Locked-In Syndrome","Central Herniation","Pontine Hemorrhage"],relationships:"Continuous with the spinal cord inferiorly at the foramen magnum and the diencephalon superiorly; cranial nerves III–XII emerge from its ventral and lateral surfaces.",imaging:"MRI is essential for localizing brainstem strokes, tumors, and demyelination; CT is limited by posterior fossa beam-hardening artifacts.",clinicalNote:"Cushing triad (hypertension, bradycardia, irregular respiration) signals rising intracranial pressure and impending brainstem herniation — an emergency.",histology:"Mixed gray matter (cranial nerve nuclei, reticular formation) traversed by ascending and descending white matter tracts across the midbrain, pons, and medulla."},{id:"spinal-cord",name:"Spinal Cord",latinName:"Medulla Spinalis",weight:"~30 g",overview:"A cylindrical bundle of nervous tissue extending from the medulla at the foramen magnum to the conus medullaris at L1–L2 in adults. It gives rise to 31 pairs of spinal nerves.",location:"Within the vertebral canal, surrounded by the three meningeal layers.",function:"Conveys sensory, motor, and autonomic signals between the brain and body, and mediates spinal reflexes.",bloodSupply:"Anterior spinal artery (anterior 2/3) and paired posterior spinal arteries (posterior 1/3), reinforced by radicular arteries.",nerveSupply:"Organized into dorsal (sensory) and ventral (motor) roots forming 31 spinal nerve pairs.",clinicalImportance:"Anterior spinal artery syndrome causes bilateral motor and pain/temperature loss with preserved dorsal column sensation.",commonDiseases:["Spinal Cord Injury","Syringomyelia","Multiple Sclerosis","Amyotrophic Lateral Sclerosis"],relationships:"Travels within the vertebral canal from the foramen magnum to the conus medullaris at L1–L2, giving off 31 pairs of spinal nerves via the dorsal and ventral roots through intervertebral foramina.",imaging:"MRI is essential to evaluate cord compression, syrinx, demyelination, and trauma; CT best defines the bony spinal canal.",clinicalNote:"The cord ends at L1–L2 as the conus medullaris — lumbar punctures below this level avoid cord injury and sample the cauda equina.",histology:"Butterfly-shaped central gray matter (anterior motor and posterior sensory horns) surrounded by ascending and descending white matter tracts in funiculi."},{id:"medulla",name:"Medulla Oblongata",latinName:"Medulla Oblongata",overview:"The most caudal portion of the brainstem, continuous with the spinal cord. It contains vital autonomic centers and decussation of the corticospinal tracts.",location:"Inferior brainstem, just above the foramen magnum.",function:"Controls respiration, heart rate, and blood pressure; relays signals; and houses nuclei of CN IX, X, XI, and XII.",bloodSupply:"Vertebral arteries, anterior spinal artery, and posterior inferior cerebellar artery (PICA).",nerveSupply:"Contains cranial nerve nuclei IX–XII and the nucleus of the solitary tract.",clinicalImportance:"Lateral medullary (Wallenberg) syndrome from PICA occlusion causes ipsilateral facial and contralateral body sensory loss with ataxia.",commonDiseases:["Wallenberg Syndrome","Medial Medullary Syndrome","Respiratory Center Failure","Arnold-Chiari Malformation"]},{id:"hypothalamus",name:"Hypothalamus",latinName:"Hypothalamus",weight:"~4 g",overview:"A small but pivotal diencephalic structure forming the floor and walls of the third ventricle. It is the master regulator of homeostasis and the hormonal axis.",location:"Inferior diencephalon, below the thalamus, forming the floor of the third ventricle.",function:"Regulates body temperature, hunger, thirst, sleep–wake cycles, autonomic output, and pituitary hormone release via the hypophyseal portal system.",bloodSupply:"Branches of the anterior cerebral, posterior communicating, and posterior cerebral arteries.",nerveSupply:"Reciprocal connections with the limbic system, brainstem, and autonomic centers; itself controls the pituitary.",clinicalImportance:"Craniopharyngiomas compressing the hypothalamus cause growth failure, diabetes insipidus, and visual field defects.",commonDiseases:["Craniopharyngioma","Diabetes Insipidus","Hypothalamic Hamartoma","Prader-Willi Syndrome"]},{id:"optic-nerve",name:"Optic Nerve",latinName:"Nervus Opticus",overview:"The second cranial nerve (CN II), a myelinated sensory tract of approximately 1.2 million retinal ganglion cell axons that is technically part of the central nervous system.",location:"From the retina through the optic canal to the optic chiasm.",function:"Conveys visual information from the retina to the lateral geniculate nucleus and pretectal nuclei.",bloodSupply:"Ophthalmic artery branches: central retinal artery and posterior ciliary arteries.",nerveSupply:"It is itself a CNS tract, ensheathed by meninges and surrounded by cerebrospinal fluid.",clinicalImportance:"Papilledema on fundoscopy reflects raised intracranial pressure transmitted along the subarachnoid sheath.",commonDiseases:["Optic Neuritis","Papilledema","Glaucoma","Anterior Ischemic Optic Neuropathy"]},{id:"vagus-nerve",name:"Vagus Nerve",latinName:"Nervus Vagus",overview:"The tenth cranial nerve (CN X), the longest and most widely distributed cranial nerve, providing parasympathetic output to most thoracic and abdominal viscera.",location:"From the medulla through the jugular foramen into the neck, thorax, and abdomen.",function:"Provides parasympathetic supply to the heart, lungs, and gastrointestinal tract; mediates the baroreceptor reflex, swallowing, and phonation.",bloodSupply:"Meningeal, auricular, and nodose ganglion branches from the posterior meningeal, occipital, and ascending pharyngeal arteries.",nerveSupply:"Contains afferent, efferent, and parasympathetic fibers; nuclei in the medulla (nucleus ambiguus, dorsal motor nucleus).",clinicalImportance:"Unilateral vagal injury causes hoarseness from recurrent laryngeal nerve palsy; vagal stimulation is used to treat refractory epilepsy.",commonDiseases:["Vocal Cord Paralysis","Gastroparesis","Vasovagal Syncope","Vagal Schwannoma"]}]},{id:"cardiovascular",name:"Cardiovascular System",latinName:"Systema Cardiovasculare",icon:"Heart",color:"#e74c3c",tagline:"A pump, a network, and a river of life.",description:"The cardiovascular system comprises the heart, blood, and a vast vascular tree estimated at 100,000 km in length. It delivers oxygen and nutrients to tissues, removes waste, and transports hormones, immune cells, and heat throughout the body.",funFact:"Your heart beats around 100,000 times per day, pumping roughly 7,500 liters of blood — enough to fill about 40 bathtubs daily.",stats:[{label:"Heart Rate",value:"60–100 bpm"},{label:"Blood Vessels",value:"~100,000 km"},{label:"Cardiac Output",value:"~5 L/min"},{label:"Blood Volume",value:"~5 L"}],layers:["Skin","Subcutaneous tissue","Deep fascia","Muscle","Heart/Vessels"],imagingModality:"CT",organs:[{id:"heart",name:"Heart",latinName:"Cor",weight:"~300 g",overview:"A four-chambered muscular pump located in the middle mediastinum. Its walls — epicardium, myocardium, and endocardium — contract in a precisely timed cycle driven by the intrinsic conduction system.",location:"Middle mediastinum, behind the sternum, level T5–T8.",function:"Pumps deoxygenated blood to the lungs via the pulmonary circulation and oxygenated blood to the body via the systemic circulation.",bloodSupply:"Right and left coronary arteries arising from the aortic sinuses, drained by the coronary sinus and cardiac veins.",nerveSupply:"Autonomic innervation by sympathetic cardiac nerves (accelerator) and the vagus nerve (depressor), plus the intrinsic SA and AV nodes.",clinicalImportance:"Occlusion of a coronary artery causes myocardial infarction; the left anterior descending is colloquially the 'widow-maker'.",commonDiseases:["Myocardial Infarction","Heart Failure","Atrial Fibrillation","Infective Endocarditis"],relationships:"Lies in the middle mediastinum between the lungs, with the diaphragm below and great vessels above; the pericardium anchors it via sternopericardial and vertebropericardial ligaments.",imaging:"Echocardiography is first-line for function and valves; CT coronary angiography visualizes coronary stenosis; MRI assesses function, viability, and tissue characterization.",clinicalNote:"Chest pain with ST elevation on ECG is treated as STEMI — immediate reperfusion by primary PCI or thrombolysis is lifesaving.",histology:"Three layers: outer epicardium (visceral pericardium with coronary vessels), thick myocardium of branching cardiac muscle cells joined by intercalated discs, and inner endocardium."},{id:"aorta",name:"Aorta",latinName:"Aorta",weight:"~100 g",overview:"The largest artery in the body, originating from the left ventricle. It is divided into ascending, arch, thoracic, and abdominal segments.",location:"From the left ventricle, arching over the left main bronchus, descending through the diaphragm to bifurcate at L4.",function:"Conducts oxygenated blood from the heart to all systemic arteries; the elastic recoil maintains diastolic pressure and coronary flow.",bloodSupply:"Nourished by vasa vasorum from intercostal, lumbar, and visceral branches.",nerveSupply:"Sympathetic fibers from the cardiac and splanchnic plexuses provide vasomotor control.",clinicalImportance:"Aortic dissection — a tear in the intima — causes tearing chest/back pain and risks catastrophic rupture or malperfusion.",commonDiseases:["Aortic Dissection","Aortic Aneurysm","Coarctation of the Aorta","Aortic Stenosis"],relationships:"Originates from the left ventricle, arches over the left main bronchus and pulmonary artery, then descends through the diaphragm to bifurcate at L4 into the common iliac arteries.",imaging:"CT angiography is the gold standard for dissection, aneurysm, and rupture; transesophageal echo is used in unstable patients.",clinicalNote:"Stanford type A dissection (ascending aorta) requires emergent surgical repair; type B is often managed medically with blood pressure control.",histology:"Largest elastic artery with intima, thick media of elastic lamellae and smooth muscle, and adventitia containing the vasa vasorum that nourish the outer wall."},{id:"coronary-arteries",name:"Coronary Arteries",latinName:"Arteriae Coronariae",overview:"The first branches of the aorta — left (LCA) and right (RCA) — that supply the myocardium. The LCA divides into the left anterior descending and circumflex arteries.",location:"Epicardial surface of the heart, within the atrioventricular and interventricular grooves.",function:"Deliver oxygenated blood to the myocardium; the LAD supplies the anterior wall, the RCA the inferior wall, and the LCx the lateral wall.",bloodSupply:"Receive their own microvascular supply via vasa vasorum of the arterial wall.",nerveSupply:"Sympathetic and parasympathetic fibers mediate vasomotor tone, with metabolic autoregulation dominating control.",clinicalImportance:"Atherosclerotic plaque rupture here causes acute coronary syndromes and is the leading cause of death worldwide.",commonDiseases:["Atherosclerosis","Myocardial Infarction","Coronary Artery Spasm","Coronary Artery Dissection"],relationships:"Course over the epicardial surface in the atrioventricular and interventricular grooves; the LAD runs in the anterior interventricular groove and the PDA in the posterior interventricular groove.",imaging:"Invasive coronary angiography is the gold standard; CT coronary angiography is a non-invasive alternative for screening intermediate-risk patients.",clinicalNote:"Acute proximal LAD occlusion causes the 'widow-maker' anterior MI — emergent PCI is critical to salvage myocardium.",histology:"Medium muscular arteries with internal and external elastic laminae; atherosclerosis begins with endothelial dysfunction and subintimal lipid deposition (fatty streaks).",quizRef:1},{id:"pulmonary-artery",name:"Pulmonary Artery",latinName:"Truncus Pulmonalis",overview:"The only artery in the adult that carries deoxygenated blood. It arises from the right ventricle and bifurcates into the right and left pulmonary arteries beneath the aortic arch.",location:"Anterior mediastinum, from the right ventricle to the lung hila.",function:"Transports deoxygenated blood to the pulmonary capillaries for gas exchange, the only artery carrying venous blood.",bloodSupply:"Nourished by bronchial and vasa vasorum vessels.",nerveSupply:"Sympathetic fibers from the cardiac plexus modulate pulmonary vasomotor tone.",clinicalImportance:"Pulmonary embolism — obstruction by an embolus — is a leading cause of sudden death and presents with dyspnea and hypoxia.",commonDiseases:["Pulmonary Embolism","Pulmonary Hypertension","Patent Ductus Arteriosus","Pulmonary Stenosis"],relationships:"Arises from the right ventricle, passes upward and to the left, and bifurcates under the aortic arch into the right and left pulmonary arteries entering the lung hila.",imaging:"CT pulmonary angiography is the gold standard for pulmonary embolism; ventilation-perfusion scanning is used when contrast is contraindicated.",clinicalNote:"It is the only artery in the adult that carries deoxygenated blood — a key exception tested in clinical and basic science exams.",histology:"Elastic artery with thinner walls than the aorta; vasa vasorum supply the adventitia, and the wall accommodates the lower pressures of the pulmonary circulation.",quizRef:4},{id:"superior-vena-cava",name:"Superior Vena Cava",latinName:"Vena Cava Superior",overview:"A large valveless vein formed by the union of the left and right brachiocephalic veins. It drains blood from the upper half of the body into the right atrium.",location:"Superior mediastinum, to the right of the ascending aorta.",function:"Returns deoxygenated blood from the head, neck, upper limbs, and upper thorax to the right atrium.",bloodSupply:"Vasa vasorum from pericardiophrenic and bronchial arteries.",nerveSupply:"Sympathetic fibers from the cardiac plexus.",clinicalImportance:"External compression, classically by a lung tumor, causes superior vena cava syndrome with facial and upper limb edema.",commonDiseases:["Superior Vena Cava Syndrome","Central Venous Thrombosis","Catheter-Related Stenosis"]},{id:"carotid-artery",name:"Carotid Artery",latinName:"Arteria Carotis Communis",overview:"The paired common carotid arteries bifurcate at the level of C4 into the internal carotid (supplying the brain) and external carotid (supplying the face and neck).",location:"Lateral neck within the carotid sheath, beside the internal jugular vein and vagus nerve.",function:"Supplies the brain (internal) and structures of the face, scalp, and neck (external); the bifurcation houses the carotid sinus and body.",bloodSupply:"Supplies blood itself; its wall nourished by vasa vasorum.",nerveSupply:"Carotid sinus (baroreceptor) and carotid body (chemoreceptor) innervated by the glossopharyngeal nerve.",clinicalImportance:"Carotid bifurcation is a prime site of atherosclerosis; emboli here cause transient ischemic attacks and stroke.",commonDiseases:["Carotid Stenosis","Carotid Dissection","Stroke","Carotid Body Tumor"]},{id:"capillaries",name:"Capillaries",latinName:"Vasa Capillaria",overview:"The smallest blood vessels — 5–10 µm in diameter — forming a vast network where gas, nutrient, and waste exchange occurs between blood and tissues.",location:"Throughout every tissue, between arterioles and venules.",function:"Site of diffusion of oxygen, carbon dioxide, nutrients, and waste; total surface area estimated at 600–1000 m².",bloodSupply:"Supplied by postcapillary venules and arterioles; themselves the exchange endpoint.",nerveSupply:"Precapillary sphincters respond to local metabolic autoregulation rather than direct innervation.",clinicalImportance:"Capillary leak underlies septic shock, anaphylaxis, and burns; loss of capillary integrity drives edema.",commonDiseases:["Capillary Leak Syndrome","Diabetic Microangiopathy","Systemic Capillary Leak Syndrome"]}]},{id:"respiratory",name:"Respiratory System",latinName:"Systema Respiratorium",icon:"Wind",color:"#16a085",tagline:"The 20,000-breath-a-day engine of oxygen.",description:"The respiratory system delivers oxygen to the blood and removes carbon dioxide through a series of branching airways ending in 300–500 million alveoli. It also phonates, smells, and helps maintain acid–base balance.",funFact:"If unfolded flat, the alveolar surface of your lungs would cover roughly the area of a tennis court — about 70 m².",stats:[{label:"Breaths / Day",value:"~23,000"},{label:"Alveoli",value:"~480 million"},{label:"Surface Area",value:"~70 m²"},{label:"Tidal Volume",value:"~500 mL"}],layers:["Skin","Subcutaneous tissue","Muscle","Pleura","Lung parenchyma"],imagingModality:"X-ray",organs:[{id:"nasal-cavity",name:"Nasal Cavity",latinName:"Cavitas Nasi",overview:"A paired, air-filled space lined by respiratory and olfactory mucosa, divided by the nasal septum and bounded by three turbinate bones that warm, humidify, and filter inspired air.",location:"Center of the face, between the orbits and above the hard palate.",function:"Warms, humidifies, and filters air; houses olfactory receptors; resonates the voice; and drains the paranasal sinuses.",bloodSupply:"Branches of the maxillary, facial, and ophthalmic arteries — Kiesselbach's plexus on the anterior septum is the source of most nosebleeds.",nerveSupply:"Trigeminal nerve (V1, V2) for general sensation; olfactory nerve (CN I) for smell.",clinicalImportance:"Epistaxis is most often anterior at Kiesselbach's plexus and managed with pressure or cautery; chronic obstruction can indicate deviated septum.",commonDiseases:["Epistaxis","Allergic Rhinitis","Deviated Septum","Sinusitis"]},{id:"trachea",name:"Trachea",latinName:"Trachea",weight:"~30 g",overview:"A 10–12 cm fibrocartilaginous tube held open by 16–20 C-shaped cartilage rings, lined by pseudostratified ciliated columnar epithelium.",location:"Anterior mediastinum, from the cricoid cartilage (C6) to the carina (T4/5).",function:"Conducts air to and from the lungs; its cartilage rings prevent collapse while the posterior membrane allows food passage during swallowing.",bloodSupply:"Inferior thyroid and bronchial arteries.",nerveSupply:"Vagus nerve (parasympathetic secretion and bronchoconstriction) and sympathetic fibers (bronchodilation).",clinicalImportance:"Tracheostomy is performed at levels 2–4 to secure an airway; foreign body aspiration preferentially enters the right main bronchus.",commonDiseases:["Tracheitis","Tracheal Stenosis","Foreign Body Aspiration","Tracheomalacia"],relationships:"Lies anterior to the esophagus in the neck and superior mediastinum; bifurcates at the carina (T4–T5) into the right (more vertical) and left main bronchi.",imaging:"CT visualizes tracheal stenosis, tumors, and malacia; bronchoscopy allows direct visualization, biopsy, and foreign-body removal.",clinicalNote:"Emergency cricothyroidotomy provides a surgical airway at the cricothyroid membrane when orotracheal intubation is impossible.",histology:"C-shaped hyaline cartilage rings with a posterior smooth muscle (trachealis) wall; lined by pseudostratified ciliated columnar epithelium with goblet cells."},{id:"bronchi",name:"Bronchi",latinName:"Bronchi",overview:"The conducting airways that branch from the tracheal bifurcation into the right and left main bronchi, then lobar, segmental, and subsegmental branches down to terminal bronchioles.",location:"Within the lungs, branching through the hilum into each lobe.",function:"Distribute air through 23 generations of branching to reach the respiratory zone; mucociliary clearance protects against pathogens.",bloodSupply:"Bronchial arteries from the aorta provide oxygenated blood to the airway walls.",nerveSupply:"Pulmonary plexus (vagal parasympathetic and sympathetic fibers).",clinicalImportance:"Asthma involves reversible bronchoconstriction; chronic bronchitis is defined by productive cough for ≥3 months over 2 consecutive years.",commonDiseases:["Asthma","Chronic Bronchitis","Bronchiectasis","Bronchogenic Carcinoma"]},{id:"left-lung",name:"Left Lung",latinName:"Pulmo Sinister",weight:"~450 g",overview:"The left lung has two lobes — superior and inferior — separated by the oblique fissure, and features the cardiac notch to accommodate the heart's left ventricle.",location:"Left thoracic cavity, surrounding the heart laterally and posteriorly.",function:"Performs gas exchange via its alveolar surface; the left lung is slightly smaller than the right due to the heart's position.",bloodSupply:"Deoxygenated blood via the left pulmonary artery; oxygenated wall supply via the bronchial arteries.",nerveSupply:"Pulmonary plexus (vagal parasympathetic and sympathetic fibers); visceral pleura is insensitive.",clinicalImportance:"The left lung has 8 bronchopulmonary segments and is the typical site of aspiration in right-sided lying patients.",commonDiseases:["Pneumonia","Lung Cancer","Pulmonary Embolism","Tuberculosis"],relationships:"Sits in the left pleural cavity with the heart in its cardiac notch and the aortic arch above; the left main bronchus and pulmonary vessels enter at the hilum.",imaging:"Chest X-ray is the first-line modality; CT evaluates nodules, masses, consolidation, and interstitial disease; PET-CT assesses metabolic activity.",clinicalNote:"The left lung has two lobes (superior and inferior) separated by the oblique fissure, and is smaller than the right to accommodate the heart.",histology:"The bronchial tree branches 23 times to reach alveolar ducts and sacs; the visceral pleura of mesothelium and connective tissue covers its surface."},{id:"right-lung",name:"Right Lung",latinName:"Pulmo Dexter",weight:"~500 g",overview:"The larger of the two lungs, with three lobes — superior, middle, and inferior — divided by horizontal and oblique fissures, and 10 bronchopulmonary segments.",location:"Right thoracic cavity.",function:"Provides the larger share of gas exchange; the right main bronchus is shorter, wider, and more vertical, predisposing to aspiration.",bloodSupply:"Right pulmonary artery (functional) and bronchial arteries (nutritive).",nerveSupply:"Right pulmonary plexus surrounding the right main bronchus.",clinicalImportance:"Aspirated material and inhaled foreign bodies preferentially lodge in the right lower lobe due to airway geometry.",commonDiseases:["Pneumonia","Aspiration Pneumonitis","Mesothelioma","Pulmonary Edema"],relationships:"Sits in the right pleural cavity; the right main bronchus is shorter, wider, and more vertical than the left — favoring aspiration of foreign material.",imaging:"Chest X-ray and CT are the mainstays; bedside ultrasound detects pleural effusion and pneumothorax (BLUE protocol).",clinicalNote:"Aspirated material and inhaled foreign bodies preferentially lodge in the right lower lobe bronchus due to its vertical geometry.",histology:"Three lobes (superior, middle, inferior) divided by horizontal and oblique fissures, with 10 bronchopulmonary segments each with its own segmental bronchus and artery."},{id:"alveoli",name:"Alveoli",latinName:"Alveoli Pulmonis",overview:"Thin-walled, cup-shaped sacs (~0.2 mm diameter) where gas exchange occurs. Their walls are lined by type I pneumocytes for diffusion, type II pneumocytes producing surfactant, and alveolar macrophages.",location:"Terminal ends of the respiratory bronchioles and alveolar ducts.",function:"Provide an enormous surface (~70 m²) and an ultrathin blood–air barrier for rapid oxygen and CO₂ exchange.",bloodSupply:"Dense capillary networks from the pulmonary arteries.",nerveSupply:"Minimally innervated; response is via local chemical and mechanical signals rather than direct nerves.",clinicalImportance:"Surfactant deficiency causes neonatal respiratory distress syndrome; alveolar destruction is the hallmark of emphysema.",commonDiseases:["Emphysema","Neonatal Respiratory Distress Syndrome","Acute Respiratory Distress Syndrome","Pulmonary Fibrosis"],relationships:"Terminal air spaces wrapped in dense pulmonary capillary networks; the blood–air barrier of type I pneumocyte, fused basement membrane, and capillary endothelium is only 0.2–2.5 µm thick.",imaging:"High-resolution CT shows the 'honeycomb' pattern of pulmonary fibrosis and the hyperlucency of emphysematous destruction.",clinicalNote:"Surfactant deficiency in premature infants causes neonatal respiratory distress syndrome; exogenous surfactant replacement is lifesaving.",histology:"Type I pneumocytes (gas exchange), type II pneumocytes (surfactant production), and alveolar macrophages (phagocytosis) line the ~0.2 mm cup-shaped sacs."},{id:"diaphragm",name:"Diaphragm",latinName:"Diaphragma",weight:"~250 g",overview:"The dome-shaped primary muscle of inspiration, separating the thoracic and abdominal cavities. It has peripheral muscular fibers converging on a central tendon.",location:"Between the thoracic and abdominal cavities, attaching to the lower ribs, sternum, and lumbar vertebrae.",function:"Contracts to flatten and descend, increasing thoracic volume during inspiration; also contributes to esophageal and venous return functions.",bloodSupply:"Pericardiophrenic, musculophrenic, superior phrenic, and inferior phrenic arteries.",nerveSupply:"Right and left phrenic nerves (C3–C5) — 'C3, 4, 5 keeps the diaphragm alive'.",clinicalImportance:"Diaphragmatic paralysis from phrenic nerve injury causes paradoxical respiration and breathlessness, especially when supine.",commonDiseases:["Diaphragmatic Hernia","Phrenic Nerve Palsy","Eventration","Hiccups (Singultus)"]},{id:"pleura",name:"Pleura",latinName:"Pleura",overview:"A thin serous membrane forming a closed sac around each lung, with a visceral layer adherent to the lung and a parietal layer lining the thoracic wall; the potential pleural space contains a few milliliters of lubricating fluid.",location:"Lining the thoracic cavity and covering each lung.",function:"Reduces friction during respiration and couples lung expansion to chest wall movement via surface tension of pleural fluid.",bloodSupply:"Parietal pleura from intercostal and internal thoracic arteries; visceral pleura from bronchial arteries.",nerveSupply:"Parietal pleura is pain-sensitive via intercostal and phrenic nerves; visceral pleura is insensitive.",clinicalImportance:"Air in the pleural space (pneumothorax) uncouples the lung from the chest wall and causes collapse; tension pneumothorax is life-threatening.",commonDiseases:["Pneumothorax","Pleural Effusion","Pleuritis","Mesothelioma"]}]},{id:"digestive",name:"Digestive System",latinName:"Systema Digestorium",icon:"Stomach",color:"#d35400",tagline:"A 9-meter journey from bite to building block.",description:"The digestive system breaks food into absorbable molecules through a continuous tube from mouth to anus, aided by accessory organs including the liver, gallbladder, and pancreas. It also houses the gut microbiome and a major portion of the immune system.",funFact:"The gut microbiome contains roughly 100 trillion microbes — about 10 times more bacterial cells than you have human cells.",stats:[{label:"GI Tract Length",value:"~9 m"},{label:"Transit Time",value:"24–72 h"},{label:"Surface Area",value:"~32 m²"},{label:"Gut Microbes",value:"~100 trillion"}],layers:["Skin","Subcutaneous tissue","Muscle","Peritoneum","GI tract/Viscera"],imagingModality:"CT",organs:[{id:"tongue",name:"Tongue",latinName:"Lingua",weight:"~70 g",overview:"A muscular hydrostat covered in mucosa, anchored to the floor of the mouth and containing taste buds within papillae. Its intrinsic and extrinsic muscles allow remarkable dexterity.",location:"Oral cavity, occupying the floor of the mouth.",function:"Manipulates food during mastication, forms the bolus, initiates swallowing, houses taste receptors, and shapes speech.",bloodSupply:"Lingual artery (a branch of the external carotid) with venous drainage to the lingual vein.",nerveSupply:"Hypoglossal nerve (CN XII) for motor; lingual nerve (CN V3) for general sensation; chorda tympani (CN VII) for taste anteriorly; glossopharyngeal (CN IX) posteriorly.",clinicalImportance:"Hypoglossal palsy causes the tongue to deviate TOWARD the affected side on protrusion; oral cancer often arises on the lateral tongue.",commonDiseases:["Oral Squamous Cell Carcinoma","Geographic Tongue","Glossitis","Hypoglossal Palsy"]},{id:"esophagus",name:"Esophagus",latinName:"Esophagus",weight:"~50 g",overview:"A 25-cm muscular tube lined by non-keratinized stratified squamous epithelium that conveys food from the pharynx to the stomach using peristalsis.",location:"Posterior mediastinum, from the pharynx (C6) through the diaphragm to the cardia of the stomach (T11).",function:"Transports the food bolus to the stomach via primary and secondary peristaltic waves; the lower esophageal sphincter prevents reflux.",bloodSupply:"Inferior thyroid, esophageal, bronchial, left gastric, and left phrenic arteries — segmental supply with poor anastomosis.",nerveSupply:"Vagus nerve and sympathetic trunks forming the esophageal plexus.",clinicalImportance:"Chronic acid reflux (GERD) can cause Barrett's esophagus, a premalignant metaplasia predisposing to adenocarcinoma.",commonDiseases:["GERD","Barrett's Esophagus","Esophageal Cancer","Achalasia"]},{id:"stomach",name:"Stomach",latinName:"Gaster",weight:"~150 g empty",overview:"A J-shaped reservoir divided into cardia, fundus, body, antrum, and pylorus. Its glandular mucosa contains parietal, chief, G, and mucous cells producing acid, pepsin, gastrin, and mucus.",location:"Left upper quadrant, beneath the left hemidiaphragm.",function:"Stores and mechanically churns food, mixes it with gastric acid and pepsin to begin protein digestion, and regulates release into the duodenum.",bloodSupply:"Left and right gastric, left and right gastro-omental, and short gastric arteries — all derived from the celiac trunk.",nerveSupply:"Anterior and posterior vagal trunks (parasympathetic) and sympathetic fibers from the celiac plexus.",clinicalImportance:"Helicobacter pylori infection causes chronic gastritis and peptic ulcer disease and is a Class I gastric carcinogen.",commonDiseases:["Peptic Ulcer Disease","Gastric Cancer","Gastritis","Gastroesophageal Reflux Disease"],relationships:"Lies in the left upper quadrant connecting the esophagus at the cardia to the duodenum at the pylorus; the lesser sac lies posterior to it and the greater omentum hangs from its greater curvature.",imaging:"Upper endoscopy directly visualizes the mucosa for ulcers and tumors; CT evaluates tumor staging, perforation, and obstruction.",clinicalNote:"Coffee-ground emesis suggests upper GI bleeding requiring urgent endoscopy; a rigid abdomen signals perforation with free air.",histology:"Mucosa with gastric pits leading to glands containing parietal (acid/intrinsic factor), chief (pepsinogen), G (gastrin), and mucous cells; rugae allow expansion."},{id:"liver",name:"Liver",latinName:"Hepar",weight:"~1.5 kg",overview:"The largest internal organ and largest gland in the body, organized into hexagonal lobules around central veins. It performs over 500 functions and receives both portal venous and hepatic arterial blood.",location:"Right upper quadrant, beneath the right hemidiaphragm.",function:"Metabolizes carbohydrates, lipids, and proteins; synthesizes plasma proteins and clotting factors; detoxifies drugs and toxins; stores glycogen, vitamins, and iron; and produces bile.",bloodSupply:"Dual supply — ~75% portal vein (nutrient-rich) and ~25% hepatic artery (oxygen-rich); drained by hepatic veins to the IVC.",nerveSupply:"Hepatic nerve plexus from the celiac plexus and vagus nerve.",clinicalImportance:"Cirrhosis — end-stage fibrosis — causes portal hypertension, ascites, varices, and hepatic encephalopathy.",commonDiseases:["Cirrhosis","Hepatitis","Hepatocellular Carcinoma","Non-Alcoholic Fatty Liver Disease"],relationships:"Occupies the right upper quadrant beneath the diaphragm; the portal triad (portal vein, hepatic artery, bile duct) enters at the porta hepatis, and hepatic veins drain to the IVC.",imaging:"Ultrasound is first-line for liver lesions; contrast CT and MRI characterize masses; elastography quantifies fibrosis non-invasively.",clinicalNote:"The liver's dual blood supply (portal vein and hepatic artery) makes it relatively resistant to ischemia but susceptible to portal hypertension in cirrhosis.",histology:"Hexagonal lobules with a central vein and peripheral portal triads; plates of hepatocytes separated by sinusoids lined by fenestrated endothelium and Kupffer cells."},{id:"gallbladder",name:"Gallbladder",latinName:"Vesica Biliaris",weight:"~50 g",overview:"A pear-shaped reservoir lying under the liver that stores and concentrates bile produced by the liver. It releases bile into the duodenum via the cystic and common bile ducts in response to cholecystokinin.",location:"Inferior surface of the liver, in the gallbladder fossa.",function:"Concentrates bile up to 10-fold and ejects it into the duodenum to emulsify dietary fats.",bloodSupply:"Cystic artery, typically a branch of the right hepatic artery.",nerveSupply:"Celiac plexus (sympathetic), vagus (parasympathetic), and right phrenic nerve (sensory, explaining referred shoulder pain).",clinicalImportance:"Gallstones may obstruct the cystic duct (biliary colic, cholecystitis) or common bile duct (obstructive jaundice, pancreatitis).",commonDiseases:["Cholelithiasis","Acute Cholecystitis","Biliary Colic","Gallstone Pancreatitis"]},{id:"pancreas",name:"Pancreas",latinName:"Pancreas",weight:"~100 g",overview:"A retroperitoneal gland with dual exocrine and endocrine functions. Acinar cells secrete digestive enzymes, while the islets of Langerhans secrete insulin, glucagon, and other hormones.",location:"Retroperitoneum, crossing L1–L2, behind the stomach.",function:"Exocrine: secretes trypsinogen, lipase, amylase, and bicarbonate into the duodenum. Endocrine: regulates blood glucose via insulin (β-cells) and glucagon (α-cells).",bloodSupply:"Splenic, pancreaticoduodenal, and gastroduodenal arteries, all branches of the celiac trunk and SMA.",nerveSupply:"Celiac and superior mesenteric plexuses; vagal parasympathetic input.",clinicalImportance:"Acute pancreatitis is most commonly caused by gallstones and alcohol; chronic pancreatitis leads to endocrine and exocrine insufficiency.",commonDiseases:["Acute Pancreatitis","Pancreatic Cancer","Chronic Pancreatitis","Diabetes Mellitus"],relationships:"Retroperitoneal, crossing L1–L2 behind the stomach; the head nestles in the C-loop of the duodenum and the tail reaches the splenic hilum.",imaging:"Contrast CT is the modality of choice for pancreatitis and cancer; MRCP visualizes the pancreatic and biliary ducts non-invasively.",clinicalNote:"The pancreas contains the islets of Langerhans whose β-cells secrete insulin — their autoimmune destruction causes type 1 diabetes.",histology:"Exocrine acini (enzyme-secreting) clustered around ducts; endocrine islets of Langerhans scattered among acini with α, β, δ, and PP cells.",quizRef:3},{id:"small-intestine",name:"Small Intestine",latinName:"Intestinum Tenue",weight:"~1 kg",overview:"A 6–7 m convoluted tube divided into duodenum, jejunum, and ileum. Its inner surface is amplified by circular folds, villi, and microvilli to reach ~32 m² of absorptive area.",location:"Central and lower abdomen, framed by the large intestine.",function:"Completes digestion using pancreatic enzymes and bile; absorbs ~90% of nutrients, vitamins, minerals, and water.",bloodSupply:"Superior mesenteric artery (most); the duodenum also receives supply from the celiac trunk via the pancreaticoduodenal arcades.",nerveSupply:"Vagus (parasympathetic) and superior mesenteric plexus (sympathetic).",clinicalImportance:"Celiac disease, Crohn disease (especially terminal ileum), and small bowel obstruction are common clinically significant disorders.",commonDiseases:["Crohn Disease","Celiac Disease","Small Bowel Obstruction","Malabsorption Syndromes"],relationships:"Coiled in the central abdomen between the stomach (at the duodenum) and the cecum (at the ileocecal valve); the mesentery suspends the jejunum and ileum.",imaging:"CT enterography evaluates Crohn disease, obstruction, and tumors; capsule endoscopy visualizes the small-bowel mucosa non-invasively.",clinicalNote:"The ligament of Treitz marks the duodenojejunal flexure — the anatomic boundary between upper and lower GI bleeding.",histology:"Mucosa with villi and microvilli amplifying surface area ~600-fold; crypts of Lieberkühn contain stem cells, Paneth cells, and enteroendocrine cells."},{id:"large-intestine",name:"Large Intestine",latinName:"Intestinum Crassum",weight:"~1.5 kg (with contents)",overview:"A 1.5 m tube comprising cecum, appendix, ascending, transverse, descending, sigmoid colon, rectum, and anal canal. The colonic wall features haustra, teniae coli, and epiploic appendages.",location:"Framing the abdomen, from the right iliac fossa around to the rectum.",function:"Absorbs water and electrolytes, houses gut microbiota that ferment undigested carbohydrates into short-chain fatty acids, and forms and stores feces.",bloodSupply:"Superior mesenteric (right and transverse) and inferior mesenteric (descending and sigmoid) arteries; watershed area at the splenic flexure.",nerveSupply:"Vagus (parasympathetic proximal); pelvic splanchnic nerves (parasympathetic distal); sympathetic from superior and inferior mesenteric plexuses.",clinicalImportance:"The splenic flexure is vulnerable to ischemic colitis; colorectal cancer is one of the most common and screenable cancers.",commonDiseases:["Colorectal Cancer","Ulcerative Colitis","Appendicitis","Diverticulitis"],relationships:"Frames the abdomen from the right iliac fossa (cecum) around to the rectum; the transverse and sigmoid colons are intraperitoneal while the ascending and descending are secondarily retroperitoneal.",imaging:"Colonoscopy directly visualizes the mucosa for screening and biopsy; CT colonography is a non-invasive alternative for cancer screening.",clinicalNote:"The splenic flexure is a watershed area vulnerable to ischemic colitis due to its limited collateral blood supply.",histology:"Mucosa with straight crypts (no villi) and abundant goblet cells over lamina propria with lymphoid tissue; teniae coli, haustra, and epiploic appendages characterize the colon."}]},{id:"urinary",name:"Urinary System",latinName:"Systema Urinarium",icon:"Droplet",color:"#1abc9c",tagline:"The body's chemical filtration plant.",description:"The urinary system filters blood to remove waste and excess fluid, regulates electrolyte and acid–base balance, and produces urine for excretion. The kidneys also secrete renin and erythropoietin, linking urinary function to blood pressure and red cell production.",funFact:"The two kidneys filter about 180 liters of plasma per day, yet you excrete only ~1.5 liters of urine — 99% is reabsorbed.",stats:[{label:"Nephrons / Kidney",value:"~1 million"},{label:"Filtrate / Day",value:"~180 L"},{label:"Urine / Day",value:"~1.5 L"},{label:"Renal Blood Flow",value:"~1.1 L/min"}],layers:["Skin","Subcutaneous tissue","Muscle","Perirenal fascia","Kidney parenchyma"],imagingModality:"Ultrasound",organs:[{id:"kidneys",name:"Kidneys",latinName:"Renes",weight:"~150 g each",overview:"Paired bean-shaped retroperitoneal organs containing about one million nephrons each. They are organized into an outer cortex, inner medulla with pyramids, and a central renal pelvis.",location:"Posterior abdominal wall, retroperitoneal, at level T12–L3, with the right kidney slightly lower due to the liver.",function:"Filter blood to form urine, regulate fluid and electrolyte balance and acid–base status, and secrete renin and erythropoietin.",bloodSupply:"Renal arteries from the aorta, dividing into segmental, interlobar, arcuate, and interlobular arteries supplying the nephrons.",nerveSupply:"Renal plexus from the sympathetic trunk (T10–L1) regulates renin release and vascular tone.",clinicalImportance:"Chronic kidney disease is silent until late; bilateral renal artery stenosis can cause refractory hypertension.",commonDiseases:["Chronic Kidney Disease","Acute Kidney Injury","Nephrolithiasis","Glomerulonephritis"],relationships:"Retroperitoneal at T12–L3 with the adrenal glands superomedially; the liver above the right kidney makes it lower, and the spleen sits above the left.",imaging:"Ultrasound is first-line for hydronephrosis and renal masses; CT urography is the gold standard for stones and tumors; MRI for staging and contrast allergy.",clinicalNote:"Costovertebral angle tenderness is a clinical sign of pyelonephritis; a palpable flank mass may suggest polycystic kidney disease or tumor.",histology:"Outer cortex with glomeruli and convoluted tubules, inner medulla with loops of Henle and collecting ducts arranged in pyramids; the nephron is the functional unit."},{id:"ureters",name:"Ureters",latinName:"Ureteres",weight:"~30 g",overview:"Two 25–30 cm muscular tubes transporting urine from the renal pelvis to the bladder via peristalsis. Three narrow points are clinically important sites of stone impaction.",location:"Retroperitoneum, descending along the psoas muscle into the pelvis.",function:"Propel urine from kidneys to bladder by peristaltic contractions of smooth muscle layers.",bloodSupply:"Segmental supply from renal, gonadal, common iliac, and inferior vesical arteries.",nerveSupply:"Renal, aortic, and pelvic plexuses — visceral afferents follow sympathetic paths to T11–L2.",clinicalImportance:"Ureteric stones cause severe colicky pain radiating from loin to groin; the pain is referred to the T11–L2 dermatomes.",commonDiseases:["Ureteric Calculus","Ureteral Stricture","Ureteral Cancer","Vesicoureteral Reflux"]},{id:"bladder",name:"Urinary Bladder",latinName:"Vesica Urinaria",weight:"~50 g (empty)",overview:"A hollow muscular reservoir with a capacity of ~400–600 mL. Its wall features the detrusor muscle and an internal trigone, and it is supported by the pelvic floor.",location:"Retropubic space of the lesser pelvis, behind the pubic symphysis.",function:"Stores urine and contracts during micturition; the detrusor and sphincter coordination is governed by sacral reflexes and cortical control.",bloodSupply:"Superior and inferior vesical arteries from the internal iliac arteries.",nerveSupply:"Pelvic splanchnic nerves (S2–S4, parasympathetic) cause detrusor contraction; pudendal nerve controls the external sphincter.",clinicalImportance:"Urinary retention in men is usually due to benign prostatic hyperplasia; cystoscopy evaluates hematuria and bladder tumors.",commonDiseases:["Urinary Tract Infection","Bladder Cancer","Urinary Incontinence","Benign Prostatic Hyperplasia"],relationships:"Sits behind the pubic symphysis in the retropubic space; in males the prostate and seminal vesicles lie inferior and the rectum posterior, in females the uterus and vagina lie posterior.",imaging:"Ultrasound estimates post-void residual and detects stones; CT evaluates hematuria and bladder tumors; cystoscopy directly visualizes the mucosa.",clinicalNote:"Suprapubic distension with inability to void in an elderly man suggests urinary retention from benign prostatic hyperplasia, requiring catheterization.",histology:"Transitional epithelium (urothelium) overlying a distensible lamina propria and thick detrusor smooth muscle arranged in inner longitudinal, middle circular, and outer longitudinal layers."},{id:"urethra",name:"Urethra",latinName:"Urethra",overview:"The tube conveying urine from the bladder to the exterior. In males it averages 20 cm (prostatic, membranous, spongy parts) and serves both urinary and reproductive functions; in females it is ~4 cm.",location:"From the internal urethral meatus of the bladder to the external urethral orifice.",function:"Conducts urine during micturition; in males also transports semen during ejaculation.",bloodSupply:"Inferior vesical, middle rectal, and internal pudendal arteries.",nerveSupply:"Pudendal nerve (somatic, external sphincter); pelvic plexus (autonomic).",clinicalImportance:"The female urethra's short length predisposes to urinary tract infections; male membranous urethra is at risk in pelvic fractures.",commonDiseases:["Urethritis","Urethral Stricture","Urethral Trauma","Urethral Caruncle"]},{id:"nephrons",name:"Nephrons",latinName:"Nephron",overview:"The functional filtering units of the kidney — each kidney contains about one million. Each nephron consists of a renal corpuscle (glomerulus and Bowman's capsule) and a renal tubule (proximal, loop of Henle, distal, collecting duct).",location:"Throughout the renal cortex (corpuscles) and medulla (loops and collecting ducts).",function:"Filter plasma, reabsorb nutrients and water, and secrete waste to form urine; regulate blood pressure, osmolality, and acid–base balance.",bloodSupply:"Afferent arteriole feeds the glomerular capillary tuft; efferent arteriole forms peritubular capillaries and vasa recta.",nerveSupply:"Sympathetic renal nerves regulate renin release and arteriolar tone.",clinicalImportance:"Diabetic nephropathy begins with glomerular hyperfiltration and progresses to proteinuria and chronic kidney disease.",commonDiseases:["Diabetic Nephropathy","Glomerulonephritis","Acute Tubular Necrosis","Nephrotic Syndrome"],relationships:"Span the cortex (renal corpuscle and convoluted tubules) and medulla (loop of Henle and collecting duct); each kidney contains about one million nephrons.",imaging:"Cannot be directly imaged due to microscopic size; renal biopsy with light, immunofluorescence, and electron microscopy assesses glomerular pathology.",clinicalNote:"ACE inhibitors reduce intraglomerular pressure by dilating the efferent arteriole, slowing progression of proteinuric kidney disease.",histology:"Renal corpuscle (glomerular capillary tuft within Bowman's capsule) plus proximal convoluted tubule, loop of Henle, distal convoluted tubule, and collecting duct."},{id:"renal-cortex",name:"Renal Cortex",latinName:"Cortex Renalis",overview:"The outer granular layer of the kidney containing all renal corpuscles and the convoluted tubules. It extends between the medullary pyramids as the columns of Bertin.",location:"Outer third of the kidney, beneath the fibrous renal capsule.",function:"Houses the glomeruli where plasma filtration occurs and the proximal/distal convoluted tubules where the bulk of reabsorption takes place.",bloodSupply:"Interlobular arteries branching from the arcuate arteries, supplying the afferent arterioles of each glomerulus.",nerveSupply:"Renal sympathetic nerves (T10–L1).",clinicalImportance:"Cortical necrosis from severe ischemia (e.g., post-partum hemorrhage) causes acute kidney injury that may be irreversible.",commonDiseases:["Renal Cortical Necrosis","Acute Interstitial Nephritis","Renal Cell Carcinoma","Cortical Cyst"]}]},{id:"endocrine",name:"Endocrine System",latinName:"Systema Endocrinum",icon:"Activity",color:"#9b59b6",tagline:"Hormones: the body's slow but powerful messengers.",description:"The endocrine system is a network of ductless glands that secrete hormones into the bloodstream to regulate metabolism, growth, reproduction, and homeostasis. It works in concert with the nervous system to maintain long-term balance.",funFact:"The pituitary gland — the master gland controlling most others — is only the size of a pea and weighs about 0.5 g.",stats:[{label:"Major Glands",value:"~10"},{label:"Hormones",value:"50+"},{label:"Master Gland",value:"Pituitary"},{label:"Largest Gland",value:"Thyroid"}],layers:["Skin","Subcutaneous tissue","Muscle/Deep fascia","Gland capsule","Glandular tissue"],imagingModality:"MRI",organs:[{id:"pituitary",name:"Pituitary Gland",latinName:"Hypophysis",weight:"~0.5 g",overview:"The 'master gland' suspended from the hypothalamus by the infundibulum and housed in the sella turcica. It has an anterior adenohypophysis and a posterior neurohypophysis with distinct embryological origins.",location:"Sella turcica of the sphenoid bone, just behind the optic chiasm.",function:"Anterior lobe secretes GH, ACTH, TSH, FSH, LH, and PRL. Posterior lobe releases oxytocin and ADH synthesized in the hypothalamus.",bloodSupply:"Superior, middle, and inferior hypophyseal arteries from the internal carotid; the hypophyseal portal system delivers hypothalamic releasing factors.",nerveSupply:"Posterior pituitary is supplied by hypothalamo-hypophyseal nerve tract from the supraoptic and paraventricular nuclei.",clinicalImportance:"Pituitary adenomas compressing the optic chiasm cause bitemporal hemianopia; prolactinomas are the most common subtype.",commonDiseases:["Pituitary Adenoma","Acromegaly","Prolactinoma","Sheehan Syndrome"]},{id:"thyroid",name:"Thyroid Gland",latinName:"Glandula Thyroidea",weight:"~25 g",overview:"A butterfly-shaped endocrine gland with two lateral lobes connected by an isthmus. Its follicular cells produce T3 and T4 from iodinated tyrosine, while parafollicular C cells produce calcitonin.",location:"Anterior neck, at levels C5–T1, anterior to the trachea and deep to the sternothyroid muscle.",function:"Regulates basal metabolic rate via T3 and T4, influences growth and development, and lowers blood calcium via calcitonin.",bloodSupply:"Superior (from external carotid) and inferior (from subclavian) thyroid arteries; rarely a thyroid ima artery.",nerveSupply:"Sympathetic fibers from the superior and middle cervical ganglia.",clinicalImportance:"The recurrent laryngeal nerve runs close to the inferior thyroid artery and is at risk during thyroidectomy, causing voice changes.",commonDiseases:["Hyperthyroidism","Hypothyroidism","Hashimoto Thyroiditis","Thyroid Cancer"]},{id:"parathyroid",name:"Parathyroid Glands",latinName:"Glandulae Parathyroideae",weight:"~0.04 g",overview:"Usually four small glands (two superior, two inferior) embedded in the posterior thyroid capsule. Chief cells secrete parathyroid hormone (PTH), the master regulator of blood calcium.",location:"Posterior surface of the thyroid lobes, typically two on each side.",function:"PTH raises blood calcium by stimulating osteoclasts, increasing renal calcium reabsorption, and activating vitamin D for intestinal absorption.",bloodSupply:"Inferior thyroid artery is the dominant supply; superior thyroid artery contributes variably.",nerveSupply:"Sympathetic vasomotor fibers from the cervical ganglia.",clinicalImportance:"Accidental removal during thyroidectomy causes hypocalcemia with tetany and perioral tingling — Chvostek and Trousseau signs.",commonDiseases:["Hyperparathyroidism","Hypoparathyroidism","Parathyroid Adenoma","Hypocalcemia"]},{id:"adrenal-glands",name:"Adrenal Glands",latinName:"Glandulae Suprarenales",weight:"~5 g each",overview:"Paired triangular glands sitting atop each kidney, comprising an outer cortex (zona glomerulosa, fasciculata, reticularis) and an inner medulla derived from neural crest cells.",location:"Superomedial to each kidney, in the retroperitoneum.",function:"Cortex secretes mineralocorticoids (aldosterone), glucocorticoids (cortisol), and androgens. Medulla secretes adrenaline and noradrenaline as part of the sympathetic response.",bloodSupply:"Superior, middle, and inferior suprarenal arteries from the inferior phrenic, aorta, and renal artery; a single central vein drains to the IVC (right) or renal vein (left).",nerveSupply:"Preganglionic sympathetic fibers from the splanchnic nerves directly innervate the chromaffin cells of the medulla.",clinicalImportance:"Pheochromocytoma causes episodic severe hypertension; Cushing syndrome results from chronic cortisol excess.",commonDiseases:["Cushing Syndrome","Addison Disease","Pheochromocytoma","Congenital Adrenal Hyperplasia"]},{id:"pancreatic-islets",name:"Pancreatic Islets",latinName:"Insulae Pancreaticae",weight:"~1–2 g total",overview:"The endocrine portion of the pancreas — clusters of ~1 million islets of Langerhans scattered among the exocrine acini, comprising 1–2% of pancreatic mass.",location:"Distributed throughout the pancreas, more concentrated in the tail.",function:"β-cells secrete insulin (lowers blood glucose), α-cells glucagon (raises it), δ-cells somatostatin, and PP-cells pancreatic polypeptide.",bloodSupply:"Splenic, pancreaticoduodenal, and gastroduodenal arteries.",nerveSupply:"Sympathetic and parasympathetic (vagal) fibers from the celiac and superior mesenteric plexuses.",clinicalImportance:"Autoimmune destruction of β-cells causes type 1 diabetes; insulin resistance with β-cell dysfunction underlies type 2 diabetes.",commonDiseases:["Type 1 Diabetes Mellitus","Type 2 Diabetes Mellitus","Insulinoma","Diabetic Ketoacidosis"],relationships:"Scattered throughout the pancreas, more concentrated in the tail; their β-cells secrete insulin directly into the capillaries in response to blood glucose.",imaging:"Most islets are too small to image; functional PET with radiolabeled tracers and selective arterial calcium stimulation localize insulinomas.",clinicalNote:"β-cell destruction causes type 1 diabetes; insulinoma presents with Whipple triad — fasting hypoglycemia, symptoms, and relief with glucose.",histology:"Pale-staining clusters of endocrine cells surrounded by a fenestrated capillary network; β-cells dominate (~70%), with α (~20%), δ, and PP cells.",quizRef:3},{id:"pineal",name:"Pineal Gland",latinName:"Glandula Pinealis",weight:"~0.15 g",overview:"A small neuroendocrine gland shaped like a pinecone, named for its appearance. It is a circumventricular organ outside the blood–brain barrier and produces melatonin in response to darkness.",location:"Epithalamus, midline, posterior to the third ventricle near the corpora quadrigemina.",function:"Secretes melatonin, regulating circadian rhythms and seasonal reproductive functions in some species.",bloodSupply:"Branches of the posterior cerebral artery.",nerveSupply:"Sympathetic fibers from the superior cervical ganglion via the nervi conarii relay light-dark information.",clinicalImportance:"Pineal region tumors can compress the superior colliculus causing Parinaud syndrome (paralysis of upward gaze).",commonDiseases:["Pinealoma","Parinaud Syndrome","Pineal Cyst","Circadian Rhythm Disorders"]},{id:"thymus-endocrine",name:"Thymus",latinName:"Thymus",weight:"~25 g (adult)",overview:"A bilobed lymphoepithelial gland largest in childhood and involuting after puberty. It is both a primary lymphoid organ and an endocrine gland through its secretion of thymopoietin and thymulin.",location:"Anterosuperior mediastinum, behind the sternum and anterior to the great vessels.",function:"Site of T-lymphocyte maturation; thymic hormones promote T-cell differentiation and self-tolerance.",bloodSupply:"Inferior thyroid, internal thoracic, and pericardiophrenic arteries.",nerveSupply:"Vagus and sympathetic fibers from the cervical ganglia.",clinicalImportance:"Myasthenia gravis is associated with thymic hyperplasia or thymoma; thymectomy can improve symptoms.",commonDiseases:["Myasthenia Gravis","Thymoma","DiGeorge Syndrome","Thymic Hyperplasia"]},{id:"gonads",name:"Gonads",latinName:"Glandulae Genitales",overview:"The primary reproductive organs — testes in males and ovaries in females — which serve dual exocrine (gametes) and endocrine (sex steroids) functions.",location:"Testes in the scrotum; ovaries in the lateral pelvic wall.",function:"Testes produce testosterone and sperm. Ovaries produce estrogen and progesterone and release oocytes in cyclic fashion.",bloodSupply:"Testicular/ovarian arteries from the aorta; venous drainage to the IVC (right) and renal vein (left).",nerveSupply:"Testicular/ovarian plexus from the aortic and renal plexuses; sympathetic T10–L1.",clinicalImportance:"Polycystic ovary syndrome is the leading cause of anovulatory infertility; testicular tumors often present as a painless scrotal mass.",commonDiseases:["Polycystic Ovary Syndrome","Testicular Cancer","Ovarian Cancer","Hypogonadism"]}]},{id:"lymphatic",name:"Lymphatic System",latinName:"Systema Lymphoideum",icon:"Shield",color:"#2ecc71",tagline:"The body's drainage and defense network.",description:"The lymphatic system returns interstitial fluid to the bloodstream, transports dietary lipids from the gut, and provides immune surveillance through a network of vessels, nodes, and lymphoid organs. It is the highway of adaptive immunity.",funFact:"You have about 600–700 lymph nodes — the smallest are barely a millimeter, and they collectively filter lymph from nearly every tissue.",stats:[{label:"Lymph Nodes",value:"~600–700"},{label:"Lymph / Day",value:"~3 L"},{label:"Largest Node Cluster",value:"Cervical"},{label:"Primary Lymphoid",value:"Thymus, Marrow"}],layers:["Skin","Subcutaneous tissue","Deep fascia","Lymphoid tissue","Lymph node medulla"],imagingModality:"MRI",organs:[{id:"spleen",name:"Spleen",latinName:"Splen",weight:"~150 g",overview:"The largest lymphoid organ, organized into red pulp (for red blood cell filtration) and white pulp (for immune responses). It is highly vascular and lies protected by ribs 9–11.",location:"Left upper quadrant, beneath ribs 9–11, deep to the stomach.",function:"Filters blood, removes aged or abnormal red cells and platelets, recycles iron, mounts immune responses to blood-borne pathogens, and stores a reservoir of blood.",bloodSupply:"Splenic artery from the celiac trunk; splenic vein joins the superior mesenteric vein to form the portal vein.",nerveSupply:"Celiac plexus (sympathetic vasomotor fibers).",clinicalImportance:"Splenic rupture from blunt trauma causes life-threatening intra-abdominal hemorrhage; post-splenectomy patients need vaccination against encapsulated organisms.",commonDiseases:["Splenic Rupture","Hypersplenism","Splenomegaly","Asplenia"]},{id:"thymus-lymphatic",name:"Thymus",latinName:"Thymus",weight:"~25 g (adult)",overview:"A primary lymphoid organ and the site of T-cell maturation. It is largest relative to body size at birth and reaches its absolute peak around puberty, then gradually involutes into fat.",location:"Anterosuperior mediastinum, behind the sternum.",function:"Develops and selects immunocompetent, self-tolerant T-lymphocytes; thymic epithelial cells secrete thymopoietin and thymulin.",bloodSupply:"Inferior thyroid and internal thoracic arteries.",nerveSupply:"Vagus and sympathetic fibers.",clinicalImportance:"DiGeorge syndrome (22q11 deletion) causes thymic aplasia and T-cell deficiency; thymoma is associated with myasthenia gravis.",commonDiseases:["Thymoma","DiGeorge Syndrome","Myasthenia Gravis","Severe Combined Immunodeficiency"]},{id:"lymph-nodes",name:"Lymph Nodes",latinName:"Nodi Lymphatici",weight:"~1 g each",overview:"Small bean-shaped encapsulated structures that filter lymph before it returns to the bloodstream. Each node contains a cortex with lymphoid follicles, a paracortex of T-cells, and a medulla with medullary sinuses and cords.",location:"Distributed throughout the body in regional clusters — cervical, axillary, mediastinal, mesenteric, inguinal.",function:"Trap particulate antigens, present them to lymphocytes, and generate adaptive immune responses; site of lymphocyte proliferation and antibody production.",bloodSupply:"Segmental arteries from adjacent vessels entering at the hilum, forming capillaries that exit via high endothelial venules for lymphocyte trafficking.",nerveSupply:"Sympathetic fibers accompany blood vessels.",clinicalImportance:"Lymphadenopathy — node enlargement — is a key sign of infection, malignancy, or autoimmune disease; biopsy of sentinel nodes stages cancer.",commonDiseases:["Lymphadenopathy","Lymphoma","Metastatic Carcinoma","Lymphadenitis"]},{id:"tonsils",name:"Tonsils",latinName:"Tonsillae",weight:"~5 g",overview:"Clusters of lymphoid tissue encircling the pharynx — the pharyngeal, palatine, lingual, and tubal tonsils forming Waldeyer's ring — that provide a first line of immune defense at mucosal entry points.",location:"Pharyngeal wall, especially the oropharynx and nasopharynx.",function:"Sample ingested and inhaled antigens, generate immune responses, and produce lymphocytes; the palatine tonsils are the largest and most clinically prominent.",bloodSupply:"Tonsillar branch of the facial artery, plus ascending palatine, descending palatine, and pharyngeal branches.",nerveSupply:"Glossopharyngeal nerve (CN IX) and the tonsillar plexus of the lesser palatine nerves.",clinicalImportance:"Tonsillitis is a common childhood infection; peritonsillar abscess (quinsy) is a feared complication requiring drainage.",commonDiseases:["Tonsillitis","Peritonsillar Abscess","Tonsillar Hypertrophy","Tonsillar Cancer"]},{id:"bone-marrow",name:"Bone Marrow",latinName:"Medulla Ossium",weight:"~2.6 kg",overview:"The primary hematopoietic tissue of the body, filling the medullary cavities of bones. In adults, red marrow is restricted to the axial skeleton and proximal long bones, while yellow marrow fills the rest.",location:"Medullary cavities of bones — vertebrae, sternum, ribs, pelvis, skull, and proximal femur/humerus in adults.",function:"Produces red blood cells, white blood cells, and platelets (red marrow); stores fat (yellow marrow); also serves as a primary lymphoid organ where B-cells mature.",bloodSupply:"Nutrient arteries entering via nutrient foramina; sinusoidal capillaries drain to central veins.",nerveSupply:"Sympathetic nerves accompany nutrient vessels.",clinicalImportance:"Bone marrow aspiration and biopsy diagnose leukemias, lymphomas, and myelodysplastic syndromes; marrow transplantation treats many hematologic diseases.",commonDiseases:["Leukemia","Aplastic Anemia","Multiple Myeloma","Myelodysplastic Syndrome"]},{id:"lymph-vessels",name:"Lymph Vessels",latinName:"Vasa Lymphatica",overview:"A one-way vascular network that drains interstitial fluid as lymph and returns it to the venous circulation via the thoracic duct and right lymphatic duct. Lactals in the intestine absorb dietary fats as chyle.",location:"Throughout nearly all tissues except CNS, bone marrow, cartilage, and avascular structures.",function:"Drain excess interstitial fluid, transport dietary lipids from the gut, and conduct lymphocytes and antigens to lymph nodes.",bloodSupply:"Lymphatic vessels themselves are nourished by their surrounding tissue vasa vasorum; terminal ducts drain into the venous system at the jugulo-subclavian junctions.",nerveSupply:"Sympathetic fibers accompany larger trunks.",clinicalImportance:"Lymphatic obstruction from surgery, radiation, or filariasis causes lymphedema — chronic swelling of the affected limb.",commonDiseases:["Lymphedema","Lymphangitis","Filariasis","Chylothorax"]}]},{id:"reproductive",name:"Reproductive System",latinName:"Systema Reproductionis",icon:"Baby",color:"#e84393",tagline:"The continuity of life, anatomically explained.",description:"The reproductive system produces gametes, supports fertilization and embryonic development, and governs secondary sexual characteristics through hormonal control. This module is presented in a strictly scientific, educational context.",funFact:"The ovary contains all the oocytes a female will ever have at birth — about 1–2 million — declining to ~400,000 by puberty, of which only ~400 will ovulate.",stats:[{label:"Sperm / Ejaculate",value:"~200 million"},{label:"Oocytes at Birth",value:"~1–2 million"},{label:"Menstrual Cycle",value:"~28 days"},{label:"Gestation",value:"~40 weeks"}],layers:["Skin","Subcutaneous tissue","Muscle","Peritoneum/Fascia","Reproductive organs"],imagingModality:"Ultrasound",organs:[{id:"testes",name:"Testes",latinName:"Testes",weight:"~25 g each",overview:"Paired oval male gonads located in the scrotum, descended from the abdomen during fetal development to maintain a temperature ~2°C below core for spermatogenesis. They contain ~800 seminiferous tubules.",location:"Scrotum, outside the body cavity.",function:"Produce spermatozoa in the seminiferous tubules and testosterone via Leydig cells.",bloodSupply:"Testicular artery from the aorta; anastomoses with cremasteric and deferential arteries.",nerveSupply:"Testicular plexus (T10–L1 sympathetic and vagal parasympathetic); genitofemoral nerve to the cremaster.",clinicalImportance:"Cryptorchidism (undescended testis) increases risk of infertility and testicular cancer; testicular torsion is a surgical emergency.",commonDiseases:["Testicular Torsion","Testicular Cancer","Cryptorchidism","Varicocele"]},{id:"epididymis",name:"Epididymis",latinName:"Epididymis",weight:"~3 g",overview:"A tightly coiled 6-meter tube caped over the posterior testis where sperm mature and acquire motility over 2–3 weeks before passing to the vas deferens.",location:"Posterolateral surface of each testis.",function:"Stores, matures, and propels sperm during ejaculation; absorbs fluid and concentrates sperm.",bloodSupply:"Testicular, deferential, and cremasteric arteries.",nerveSupply:"Inferior hypogastric and testicular plexuses.",clinicalImportance:"Acute epididymitis in young men is often sexually transmitted; it must be distinguished from testicular torsion.",commonDiseases:["Epididymitis","Epididymal Cyst","Spermatocele","Chronic Epididymitis"]},{id:"prostate",name:"Prostate Gland",latinName:"Prostata",weight:"~20 g",overview:"A walnut-sized fibromuscular gland surrounding the proximal urethra, composed of multiple zones — peripheral, central, transitional, and anterior fibromuscular stroma — each with distinct clinical significance.",location:"Inferior to the bladder neck, anterior to the rectum, surrounding the prostatic urethra.",function:"Secretes a milky alkaline fluid rich in enzymes, citrate, and zinc that supports sperm motility and counteracts vaginal acidity.",bloodSupply:"Inferior vesical and middle rectal arteries (from the internal iliac).",nerveSupply:"Pelvic splanchnic nerves (parasympathetic) and inferior hypogastric plexus (sympathetic).",clinicalImportance:"Benign prostatic hyperplasia arises in the transitional zone causing urinary obstruction; cancer most often arises in the peripheral zone.",commonDiseases:["Benign Prostatic Hyperplasia","Prostate Cancer","Prostatitis","Prostatic Abscess"]},{id:"ovaries",name:"Ovaries",latinName:"Ovaria",weight:"~7 g each",overview:"Paired almond-shaped female gonads attached to the broad ligament by the mesovarium. They contain follicles at various stages and undergo cyclic ovulation under hypothalamic-pituitary control.",location:"Lateral pelvic wall, in the ovarian fossa near the bifurcation of the iliac artery.",function:"Produce oocytes through folliculogenesis and secrete estrogen, progesterone, inhibin, and relaxin to regulate the menstrual cycle.",bloodSupply:"Ovarian artery (aorta) and ovarian branch of uterine artery, forming an anastomotic arcade.",nerveSupply:"Ovarian plexus from the aortic and renal plexuses (T10–T11).",clinicalImportance:"Polycystic ovary syndrome is a leading cause of infertility; ovarian cancer is often detected late due to vague symptoms.",commonDiseases:["Polycystic Ovary Syndrome","Ovarian Cancer","Ovarian Cyst","Endometrioma"]},{id:"uterus",name:"Uterus",latinName:"Uterus",weight:"~50–70 g (non-pregnant)",overview:"A thick-walled, pear-shaped muscular organ consisting of fundus, body, isthmus, and cervix. The endometrium undergoes cyclic proliferation and shedding, and the myometrium contracts during labor.",location:"Pelvic cavity, between bladder (anterior) and rectum (posterior).",function:"Receives and supports the fertilized ovum, houses the developing embryo/fetus, and contracts during labor to deliver the baby.",bloodSupply:"Uterine artery from the internal iliac, with anastomoses to the ovarian artery; veins drain to the internal iliac.",nerveSupply:"Pelvic splanchnic nerves (parasympathetic S2–S4) and inferior hypogastric plexus (sympathetic T10–L1).",clinicalImportance:"Endometriosis — endometrial tissue outside the uterus — causes dysmenorrhea and infertility; fibroids are the most common benign uterine tumor.",commonDiseases:["Endometriosis","Uterine Fibroids","Endometrial Cancer","Adenomyosis"]},{id:"fallopian-tubes",name:"Fallopian Tubes",latinName:"Tubae Uterinae",weight:"~5 g",overview:"Paired 10-cm muscular tubes with fimbriated openings near the ovaries. Their ampulla is the usual site of fertilization, after which the embryo travels to the uterus over ~3–4 days.",location:"Within the upper free edge of the broad ligament, extending laterally from the uterine cornua.",function:"Capture the released ovum, provide the site of fertilization, and transport the developing embryo to the uterus via ciliary action and peristalsis.",bloodSupply:"Uterine and ovarian arteries via anastomoses along the tube.",nerveSupply:"Pelvic and ovarian plexuses.",clinicalImportance:"Ectopic pregnancy most commonly implants in the ampulla and may rupture causing life-threatening hemorrhage; tubal damage from PID causes infertility.",commonDiseases:["Ectopic Pregnancy","Pelvic Inflammatory Disease","Tubal Infertility","Hydrosalpinx"]}]},{id:"integumentary",name:"Integumentary System",latinName:"Systema Integumentum",icon:"Layers",color:"#fdcb6e",tagline:"Your largest organ — and your first line of defense.",description:"The integumentary system comprises the skin and its appendages — hair, nails, and glands — and is the largest organ of the body by surface area (~2 m²) and weight (~4 kg). It protects against pathogens, regulates temperature, senses the environment, and synthesizes vitamin D.",funFact:"You shed about 30,000–40,000 dead skin cells every minute — your entire outer skin layer is replaced roughly every 28 days.",stats:[{label:"Surface Area",value:"~2 m²"},{label:"Weight",value:"~4 kg"},{label:"Layers",value:"2 main"},{label:"Renewal Cycle",value:"~28 days"}],layers:["Stratum corneum","Epidermis","Dermis","Hypodermis","Deep fascia"],imagingModality:"Dermoscopy",organs:[{id:"epidermis",name:"Epidermis",latinName:"Epidermis",overview:"The outermost stratified squamous keratinized epithelium, 0.05–1.5 mm thick, composed of 4–5 layers: stratum basale, spinosum, granulosum, lucidum (only in thick skin), and corneum. It is avascular and renews every ~28 days.",location:"Outermost layer of the skin.",function:"Provides a waterproof barrier, protects against pathogens and UV damage, and houses immune sentinel cells (Langerhans cells) and melanocytes.",bloodSupply:"Avascular; nourished by diffusion from the underlying dermal papillae.",nerveSupply:"Free nerve endings transmit pain, itch, and temperature; specialized receptors for fine touch are also present.",clinicalImportance:"The stratum basale regenerates after superficial burns; deeper burns that destroy the basal layer require skin grafting.",commonDiseases:["Basal Cell Carcinoma","Squamous Cell Carcinoma","Psoriasis","Eczema"],relationships:"Anchored to the underlying dermis at the basement membrane with dermal papillae interdigitating; sits superficial to the dermis and hypodermis.",imaging:"Dermoscopy (epiluminescence microscopy) magnifies pigmented lesions; reflectance confocal microscopy enables non-invasive cellular imaging.",clinicalNote:"The stratum basale regenerates after superficial (first-degree) burns; deeper burns that destroy the basal layer require skin grafting.",histology:"Stratified squamous keratinized epithelium with 4–5 strata (basale, spinosum, granulosum, lucidum in thick skin, corneum); the stratum basale contains mitotically active stem cells.",quizRef:5},{id:"dermis",name:"Dermis",latinName:"Dermis",weight:"~3 kg (paired with hypodermis)",overview:"A dense connective tissue layer 1–4 mm thick, divided into a superficial papillary layer and a deeper reticular layer. It gives skin its strength, elasticity, and houses most skin appendages.",location:"Between the epidermis and hypodermis.",function:"Provides mechanical strength and elasticity, houses blood vessels, nerves, sweat and sebaceous glands, hair follicles, and supports the epidermis.",bloodSupply:"Subdermal and cutaneous plexuses from perforating arteries; capillary loops in dermal papillae.",nerveSupply:"Rich innervation includes free nerve endings and encapsulated receptors — Meissner (light touch), Pacinian (pressure), Ruffini (stretch), and Krause (cold).",clinicalImportance:"Deep burns extending into the dermis heal with scarring and contracture; the dermis also houses the cells of origin of melanoma.",commonDiseases:["Melanoma","Scleroderma","Burns (Partial Thickness)","Dermatitis"]},{id:"hypodermis",name:"Hypodermis",latinName:"Hypodermis",overview:"The subcutaneous layer of loose connective tissue and adipose tissue that anchors skin to underlying structures while allowing mobility. It is not technically part of the skin but is functionally integrated.",location:"Beneath the dermis, above the deep fascia or periosteum.",function:"Insulates the body, stores energy as fat, cushions underlying structures, and provides a route for large subcutaneous vessels.",bloodSupply:"Subcutaneous arteries and veins supplying the overlying skin.",nerveSupply:"Subcutaneous sensory nerves; pressure and pain receptors are present.",clinicalImportance:"Subcutaneous injections deliver medication here; lipodystrophy and cellulitis affect this layer.",commonDiseases:["Cellulitis","Lipodystrophy","Lipoma","Subcutaneous Emphysema"]},{id:"hair-follicles",name:"Hair Follicles",latinName:"Folliculi Pili",overview:"Tubular invaginations of the epidermis that extend into the dermis and produce hair shafts. Each follicle cycles through anagen (growth), catagen (regression), and telogen (resting) phases.",location:"Distributed throughout skin except palms, soles, lips, and parts of genitalia.",function:"Produce hair for protection, insulation, and sensory detection; sebaceous glands open into follicles to lubricate hair.",bloodSupply:"Dermal papilla capillaries from cutaneous plexuses.",nerveSupply:"Each follicle is surrounded by a network of sensory nerve endings that detect hair movement.",clinicalImportance:"Androgenetic alopecia results from dihydrotestosterone-mediated miniaturization of follicles; folliculitis is common and usually staphylococcal.",commonDiseases:["Alopecia","Folliculitis","Hirsutism","Tinea Capitis"]},{id:"sweat-glands",name:"Sweat Glands",latinName:"Glandulae Sudoriferae",weight:"~100 g total",overview:"Eccrine glands (2–4 million, distributed widely) produce watery sweat for thermoregulation. Apocrine glands open into hair follicles in the axillae and groin and produce an odorless secretion metabolized by bacteria into body odor.",location:"Eccrine throughout the skin (densest on palms and soles); apocrine in axillae, groin, and areolae.",function:"Eccrine glands cool the body through evaporative heat loss; apocrine glands secrete pheromone-like compounds.",bloodSupply:"Cutaneous capillaries surrounding the secretory coil.",nerveSupply:"Eccrine glands are innervated by sympathetic cholinergic fibers (unique among sweat glands); apocrine by sympathetic adrenergic fibers.",clinicalImportance:"Hyperhidrosis causes excessive sweating affecting quality of life; cystic fibrosis is diagnosed by elevated sweat chloride.",commonDiseases:["Hyperhidrosis","Miliaria (Heat Rash)","Hidradenitis Suppurativa","Anhidrosis"]},{id:"sebaceous-glands",name:"Sebaceous Glands",latinName:"Glandulae Sebaceae",overview:"Holocrine glands that secrete sebum — a mixture of lipids — into hair follicles. They are most numerous on the face and scalp and are absent from palms and soles.",location:"Wherever hair follicles exist, especially the face, scalp, chest, and back.",function:"Produce sebum that lubricates skin and hair, maintains an acid mantle, and has mild antimicrobial properties.",bloodSupply:"Capillaries of the surrounding dermis.",nerveSupply:"Indirect; activity is primarily controlled by androgens rather than nerves.",clinicalImportance:"Excess sebum and blocked ducts contribute to acne vulgaris; sebaceous gland carcinoma is a rare but aggressive eyelid tumor.",commonDiseases:["Acne Vulgaris","Sebaceous Cyst","Seborrheic Dermatitis","Sebaceous Carcinoma"]},{id:"nails",name:"Nails",latinName:"Ungues",weight:"~3 g",overview:"Keratinized plates on the dorsal surface of each distal phalanx produced by the nail matrix. Each nail consists of a body, root, lunula, and folds, growing at ~3 mm per month for fingers and ~1 mm for toes.",location:"Dorsal surface of the tips of fingers and toes.",function:"Protect the distal phalanges, enhance fine touch, and provide a counter-pressure surface aiding grip and scratching.",bloodSupply:"Digital arteries of the distal phalanx via capillaries in the nail bed.",nerveSupply:"Digital nerves providing rich sensory supply to the nail bed.",clinicalImportance:"Nail changes can signal systemic disease — clubbing in lung or heart disease, Beau lines after severe illness, koilonychia in iron deficiency.",commonDiseases:["Onychomycosis","Ingrown Nail","Paronychia","Nail Psoriasis"]},{id:"melanocytes",name:"Melanocytes",latinName:"Melanocyti",overview:"Neural crest-derived pigment cells located in the stratum basale that produce melanin and transfer it via melanosomes to surrounding keratinocytes. Each melanocyte serves ~36 keratinocytes.",location:"Stratum basale of the epidermis and hair follicles.",function:"Synthesize melanin that absorbs UV radiation and protects DNA in keratinocytes; determine skin and hair color.",bloodSupply:"Nourished by diffusion from dermal capillaries.",nerveSupply:"Not directly innervated; their activity is regulated by UV radiation and melanocyte-stimulating hormone.",clinicalImportance:"Melanoma is the most lethal skin cancer; vitiligo results from autoimmune destruction of melanocytes causing depigmentation.",commonDiseases:["Melanoma","Vitiligo","Albinism","Melasma"]}]}];var lW={skin:{color:14919816,roughness:0.55,metalness:0},muscle:{color:11022898,roughness:0.45,metalness:0},bone:{color:15525074,roughness:0.35,metalness:0.05},organ:{color:12604990,roughness:0.4,metalness:0},nerve:{color:15259808,roughness:0.5,metalness:0},vessel:{color:11546672,roughness:0.4,metalness:0},lung:{color:13144208,roughness:0.7,metalness:0},liver:{color:8007214,roughness:0.42,metalness:0},fat:{color:15257744,roughness:0.6,metalness:0}},wG=[{geo:"sphere",args:[0.34,32,32],pos:[0,2.42,0.01],layer:"skin",tissue:"skin",label:"Head"},{geo:"capsule",args:[0.13,0.12,12,20],pos:[0,2.04,0],layer:"skin",tissue:"skin"},{geo:"capsule",args:[0.48,0.62,16,28],pos:[0,1.44,0],scale:[1.18,1,0.78],layer:"skin",tissue:"skin",label:"Thorax"},{geo:"capsule",args:[0.4,0.4,16,28],pos:[0,0.72,0],scale:[1.06,1,0.78],layer:"skin",tissue:"skin"},{geo:"capsule",args:[0.44,0.2,16,28],pos:[0,0.18,0],scale:[1.2,1,0.8],layer:"skin",tissue:"skin"},{geo:"sphere",args:[0.21,24,24],pos:[0.62,1.66,0],layer:"skin",tissue:"skin"},{geo:"sphere",args:[0.21,24,24],pos:[-0.62,1.66,0],layer:"skin",tissue:"skin"},{geo:"capsule",args:[0.115,0.66,12,20],pos:[0.64,1.2,0],rot:[0,0,0.1],layer:"skin",tissue:"skin"},{geo:"capsule",args:[0.115,0.66,12,20],pos:[-0.64,1.2,0],rot:[0,0,-0.1],layer:"skin",tissue:"skin"},{geo:"capsule",args:[0.095,0.6,12,20],pos:[0.7,0.46,0],rot:[0,0,0.08],layer:"skin",tissue:"skin"},{geo:"capsule",args:[0.095,0.6,12,20],pos:[-0.7,0.46,0],rot:[0,0,-0.08],layer:"skin",tissue:"skin"},{geo:"box",args:[0.16,0.22,0.07],pos:[0.74,0.05,0],layer:"skin",tissue:"skin"},{geo:"box",args:[0.16,0.22,0.07],pos:[-0.74,0.05,0],layer:"skin",tissue:"skin"},{geo:"capsule",args:[0.165,0.78,14,24],pos:[0.23,-0.56,0],layer:"skin",tissue:"skin"},{geo:"capsule",args:[0.165,0.78,14,24],pos:[-0.23,-0.56,0],layer:"skin",tissue:"skin"},{geo:"capsule",args:[0.13,0.72,14,24],pos:[0.23,-1.48,0],layer:"skin",tissue:"skin"},{geo:"capsule",args:[0.13,0.72,14,24],pos:[-0.23,-1.48,0],layer:"skin",tissue:"skin"},{geo:"box",args:[0.2,0.1,0.4],pos:[0.23,-1.98,0.12],layer:"skin",tissue:"skin"},{geo:"box",args:[0.2,0.1,0.4],pos:[-0.23,-1.98,0.12],layer:"skin",tissue:"skin"},{geo:"sphere",args:[0.2,20,20],pos:[0.19,1.56,0.26],scale:[1,0.7,0.6],layer:"muscle",tissue:"muscle",label:"Pectoralis major"},{geo:"sphere",args:[0.2,20,20],pos:[-0.19,1.56,0.26],scale:[1,0.7,0.6],layer:"muscle",tissue:"muscle"},{geo:"sphere",args:[0.18,20,20],pos:[0.6,1.66,0.02],layer:"muscle",tissue:"muscle",label:"Deltoid"},{geo:"sphere",args:[0.18,20,20],pos:[-0.6,1.66,0.02],layer:"muscle",tissue:"muscle"},{geo:"box",args:[0.17,0.12,0.1],pos:[0.11,1.02,0.32],layer:"muscle",tissue:"muscle",label:"Rectus abdominis"},{geo:"box",args:[0.17,0.12,0.1],pos:[-0.11,1.02,0.32],layer:"muscle",tissue:"muscle"},{geo:"box",args:[0.17,0.12,0.1],pos:[0.11,0.86,0.32],layer:"muscle",tissue:"muscle"},{geo:"box",args:[0.17,0.12,0.1],pos:[-0.11,0.86,0.32],layer:"muscle",tissue:"muscle"},{geo:"box",args:[0.17,0.12,0.1],pos:[0.11,0.7,0.32],layer:"muscle",tissue:"muscle"},{geo:"box",args:[0.17,0.12,0.1],pos:[-0.11,0.7,0.32],layer:"muscle",tissue:"muscle"},{geo:"capsule",args:[0.09,0.42,10,18],pos:[0.64,1.22,0.04],rot:[0,0,0.1],layer:"muscle",tissue:"muscle",label:"Biceps brachii"},{geo:"capsule",args:[0.09,0.42,10,18],pos:[-0.64,1.22,0.04],rot:[0,0,-0.1],layer:"muscle",tissue:"muscle"},{geo:"capsule",args:[0.14,0.66,12,22],pos:[0.23,-0.54,0.04],layer:"muscle",tissue:"muscle",label:"Quadriceps femoris"},{geo:"capsule",args:[0.14,0.66,12,22],pos:[-0.23,-0.54,0.04],layer:"muscle",tissue:"muscle"},{geo:"sphere",args:[0.19,20,20],pos:[0.2,0.06,-0.16],scale:[1,0.7,0.8],layer:"muscle",tissue:"muscle",label:"Gluteus maximus"},{geo:"sphere",args:[0.19,20,20],pos:[-0.2,0.06,-0.16],scale:[1,0.7,0.8],layer:"muscle",tissue:"muscle"},{geo:"capsule",args:[0.16,0.4,10,18],pos:[0,1.78,-0.08],scale:[2.4,1,0.6],layer:"muscle",tissue:"muscle",label:"Trapezius"},{geo:"sphere",args:[0.13,24,24],pos:[-0.1,1.5,0.18],scale:[1,1.15,0.9],layer:"organs",tissue:"organ",label:"Heart"},{geo:"sphere",args:[0.22,24,24],pos:[0.3,1.42,0],scale:[0.78,1.5,0.7],layer:"organs",tissue:"lung",label:"Right lung"},{geo:"sphere",args:[0.2,24,24],pos:[-0.28,1.42,0],scale:[0.78,1.5,0.7],layer:"organs",tissue:"lung",label:"Left lung"},{geo:"cylinder",args:[0.035,0.035,0.32,16],pos:[0,1.78,0.06],layer:"organs",tissue:"organ"},{geo:"sphere",args:[0.22,24,24],pos:[0.16,1.08,0.1],scale:[1.2,0.7,0.85],layer:"organs",tissue:"liver",label:"Liver"},{geo:"capsule",args:[0.1,0.18,12,20],pos:[-0.14,1.04,0.16],rot:[0,0,0.5],layer:"organs",tissue:"organ",label:"Stomach"},{geo:"torus",pos:[0,0.62,0.14],rot:[Math.PI/2,0,0],scale:[0.5,0.5,0.28],layer:"organs",tissue:"organ",label:"Small intestine"},{geo:"sphere",args:[0.1,18,18],pos:[0.22,0.96,-0.12],scale:[0.6,1,0.7],layer:"organs",tissue:"organ",label:"Kidney"},{geo:"sphere",args:[0.1,18,18],pos:[-0.22,0.96,-0.12],scale:[0.6,1,0.7],layer:"organs",tissue:"organ"},{geo:"sphere",args:[0.1,18,18],pos:[0,0.06,0.1],scale:[1,0.85,0.8],layer:"organs",tissue:"organ",label:"Urinary bladder"},{geo:"sphere",args:[0.24,28,28],pos:[0,2.44,0],scale:[1,0.95,1.05],layer:"organs",tissue:"nerve",label:"Cerebrum"},{geo:"sphere",args:[0.32,28,28],pos:[0,2.44,0],layer:"skeleton",tissue:"bone",label:"Skull"},{geo:"capsule",args:[0.02,0.4,8,14],pos:[0.28,1.84,0.26],rot:[0,0,-0.2],layer:"skeleton",tissue:"bone",label:"Clavicle"},{geo:"capsule",args:[0.02,0.4,8,14],pos:[-0.28,1.84,0.26],rot:[0,0,0.2],layer:"skeleton",tissue:"bone"},{geo:"box",args:[0.06,0.5,0.03],pos:[0,1.5,0.32],layer:"skeleton",tissue:"bone",label:"Sternum"},{geo:"torus",pos:[0,1.66,0],rot:[Math.PI/2,0,0],scale:[1.05,0.62,1],layer:"skeleton",tissue:"bone",label:"Rib cage"},{geo:"torus",pos:[0,1.52,0],rot:[Math.PI/2,0,0],scale:[1.12,0.62,1],layer:"skeleton",tissue:"bone"},{geo:"torus",pos:[0,1.38,0],rot:[Math.PI/2,0,0],scale:[1.16,0.62,1],layer:"skeleton",tissue:"bone"},{geo:"torus",pos:[0,1.24,0],rot:[Math.PI/2,0,0],scale:[1.14,0.6,1],layer:"skeleton",tissue:"bone"},{geo:"torus",pos:[0,1.1,0],rot:[Math.PI/2,0,0],scale:[1.1,0.58,1],layer:"skeleton",tissue:"bone"},...Array.from({length:16},(J,Q)=>({geo:"sphere",args:[0.05+(Q>8?0.012*(Q-8):0),12,12],pos:[0,1.92-Q*0.15,-0.16-(Q>6?0.005*(Q-6):0)],layer:"skeleton",tissue:"bone",label:Q===0?"Vertebral column":void 0})),{geo:"torus",pos:[0,0.16,0],rot:[Math.PI/2,0,0],scale:[1.1,0.55,0.8],layer:"skeleton",tissue:"bone",label:"Pelvis"},{geo:"capsule",args:[0.035,0.62,10,16],pos:[0.62,1.22,0],rot:[0,0,0.1],layer:"skeleton",tissue:"bone",label:"Humerus"},{geo:"capsule",args:[0.035,0.62,10,16],pos:[-0.62,1.22,0],rot:[0,0,-0.1],layer:"skeleton",tissue:"bone"},{geo:"capsule",args:[0.028,0.56,10,16],pos:[0.7,0.48,0.02],rot:[0,0,0.08],layer:"skeleton",tissue:"bone"},{geo:"capsule",args:[0.028,0.56,10,16],pos:[-0.7,0.48,0.02],rot:[0,0,-0.08],layer:"skeleton",tissue:"bone"},{geo:"capsule",args:[0.045,0.72,12,18],pos:[0.23,-0.56,0],layer:"skeleton",tissue:"bone",label:"Femur"},{geo:"capsule",args:[0.045,0.72,12,18],pos:[-0.23,-0.56,0],layer:"skeleton",tissue:"bone"},{geo:"capsule",args:[0.035,0.66,12,18],pos:[0.23,-1.48,0],layer:"skeleton",tissue:"bone"},{geo:"capsule",args:[0.035,0.66,12,18],pos:[-0.23,-1.48,0],layer:"skeleton",tissue:"bone"}];function _G(J){let Q=J.args??[];switch(J.geo){case"sphere":return new $9(Q[0]??0.3,Q[1]??24,Q[2]??24);case"capsule":return new n8(Q[0]??0.1,Q[1]??0.3,Q[2]??10,Q[3]??18);case"box":return new j9(Q[0]??0.2,Q[1]??0.2,Q[2]??0.2);case"cylinder":return new s8(Q[0]??0.1,Q[1]??0.1,Q[2]??0.3,Q[3]??16);case"torus":return new i8(0.42,0.022,10,32)}}function uW(J,Q){let{clientWidth:$,clientHeight:Z}=J,W=new R$({antialias:!0,powerPreference:"high-performance"});W.setSize($,Z),W.setPixelRatio(Math.min(window.devicePixelRatio,2)),W.shadowMap.enabled=!0,W.shadowMap.type=w7,W.localClippingEnabled=!0,W.toneMapping=v8,W.toneMappingExposure=1.1,J.appendChild(W.domElement);let K=new p7;K.background=new y0(658706),K.fog=new d8(658706,10,24);let H=new VJ(40,$/Z,0.1,100),Y=new v(0,0.5,0),X=new Z6().setFromVector3(new v(0,0.5,6));K.add(new J6(16777215,0.6)),K.add(new o7(16777215,3820122,0.7));let U=new o8(16777215,2.4);U.position.set(4,6,3),U.castShadow=!0,U.shadow.mapSize.set(2048,2048),U.shadow.bias=-0.0001,U.shadow.camera=new e9(-4,4,4,-4,0.1,20),K.add(U);let q=new o8(10208472,1);q.position.set(-4,3,-2),K.add(q);let F=new e7(2282478,0.8,20);F.position.set(0,1,5),K.add(F);let G=new t7(16777215,1.6,0,Math.PI/6,0.8,1);G.position.set(0,5,2),G.castShadow=!0,K.add(G),G.target.position.copy(Y),K.add(G.target);let D=new N9;D.position.y=0.05,K.add(D);let M=[],z={};for(let r of wG){let n=_G(r),Y0=r.tissue??"organ",S0=lW[Y0],T0=new s7({color:S0.color,roughness:S0.roughness,metalness:S0.metalness,transparent:!0,opacity:1,side:r.layer==="skin"?bJ:C9,emissive:new y0(S0.color),emissiveIntensity:0.04,clipShadows:!0}),A0=new RJ(n,T0);if(A0.position.fromArray(r.pos),r.rot)A0.rotation.fromArray(r.rot);if(A0.scale.fromArray(r.scale??[1,1,1]),A0.castShadow=r.layer!=="skin",A0.receiveShadow=r.layer==="skin",D.add(A0),M.push({mesh:A0,def:r,basePos:new v(...r.pos)}),r.label&&!z[r.label])z[r.label]=A0}let E=new RJ(new y9(8,8),new n7({opacity:0.45}));E.position.y=-2.02,E.rotation.x=-Math.PI/2,E.receiveShadow=!0,K.add(E);let N=new RJ(new y9(1.6,1.6),new aJ({color:2282478,transparent:!0,opacity:0.08,side:bJ}));N.visible=!1,K.add(N);let C=new N9;K.add(C);let _=new Q6,L=new p0,A=new RJ(new $9(8,20,20),new aJ({side:_J,visible:!1}));K.add(A);let I={current:null},P="none";function O(){H.position.setFromSpherical(X).add(Y),H.lookAt(Y)}O();let V=!1,p=0,w=0,h=0,s=0;function g(r){if(Q().tool!=="none")return;V=!0,p=r.clientX,w=r.clientY,h=0,s=0}function u(r){if(!V)return;let n=r.clientX-p,Y0=r.clientY-w;p=r.clientX,w=r.clientY,X.theta-=n*0.005,X.phi=Math.max(0.15,Math.min(Math.PI-0.15,X.phi-Y0*0.005)),h=-n*0.005,s=-Y0*0.005}function c(){V=!1}function f(r){r.preventDefault(),X.radius=Math.max(3,Math.min(11,X.radius+r.deltaY*0.005))}function t(r){let n=Q();if(n.tool==="none")return;let Y0=W.domElement.getBoundingClientRect();L.x=(r.clientX-Y0.left)/Y0.width*2-1,L.y=-((r.clientY-Y0.top)/Y0.height)*2+1,_.setFromCamera(L,H);let S0=_.intersectObject(A,!1);if(S0.length===0)return;let T0=S0[0].point,A0=[Number(T0.x.toFixed(3)),Number(T0.y.toFixed(3)),Number(T0.z.toFixed(3))];if(n.tool==="annotate")n.addAnnotation({id:`ann-${Date.now()}`,position:A0,label:`Point ${n.annotations.length+1}`});else if(n.tool==="measure")if(!I.current)I.current=A0;else{let i0=Math.sqrt((A0[0]-I.current[0])**2+(A0[1]-I.current[1])**2+(A0[2]-I.current[2])**2);n.addMeasurement({id:`meas-${Date.now()}`,from:I.current,to:A0,length:Number((i0*50).toFixed(1))}),I.current=null}}let Q0=W.domElement;Q0.style.touchAction="none",Q0.addEventListener("pointerdown",g),window.addEventListener("pointermove",u),window.addEventListener("pointerup",c),Q0.addEventListener("wheel",f,{passive:!1}),Q0.addEventListener("pointerdown",t);function H0(){let{clientWidth:r,clientHeight:n}=J;H.aspect=r/n,H.updateProjectionMatrix(),W.setSize(r,n)}let L0=new ResizeObserver(H0);L0.observe(J);function M0(){let r=Q();while(C.children.length){let n=C.children[0];if(C.remove(n),n.geometry)n.geometry.dispose()}for(let n of r.measurements){let Y0=new BJ().setFromPoints([new v(...n.from),new v(...n.to)]);C.add(new l7(Y0,new c8({color:2282478})));let S0=new RJ(new $9(0.04,8,8),new aJ({color:2282478}));S0.position.fromArray(n.from),C.add(S0);let T0=new RJ(new $9(0.04,8,8),new aJ({color:2282478}));T0.position.fromArray(n.to),C.add(T0)}for(let n of r.annotations){let Y0=new RJ(new $9(0.04,10,10),new aJ({color:16436245}));Y0.position.fromArray(n.position),C.add(Y0)}if(I.current){let n=new RJ(new $9(0.045,10,10),new aJ({color:2282478}));n.position.fromArray(I.current),C.add(n)}}let YJ=new $6,o0=0,o=0;function W0(){o0=requestAnimationFrame(W0);let r=YJ.getElapsedTime(),n=Q(),Y0=Math.sin(r*0.9)*0.5+0.5,S0=Math.pow(Math.max(0,Math.sin(r*7.3)),6)+0.45*Math.pow(Math.max(0,Math.sin(r*7.3+0.9)),6);if(n.tool!==P)P=n.tool,I.current=null;if(r-o>0.1){o=r;let c0=n.explode,TJ=n.mode==="x-ray",t0=n.systemId&&n.organId?dW.find((h0)=>h0.id===n.systemId)?.organs.find((h0)=>h0.id===n.organId)?.name??null:null;for(let h0 of M){let ZJ=n.layerOpacity[h0.def.layer],a0=h0.mesh.material;if(a0.opacity=ZJ,a0.visible=ZJ>0.001,a0.wireframe=TJ,t0&&h0.def.label===t0)a0.emissive=new y0(16777215),a0.emissiveIntensity=0.3;else a0.emissive=new y0(lW[h0.def.tissue??"organ"].color),a0.emissiveIntensity=n.photoreal?0.04:0.5;let S=h0.def.layer==="skin"?c0*0.3:h0.def.layer==="fascia"?c0*0.2:h0.def.layer==="muscle"?c0*0.15:h0.def.layer==="organs"?c0*0.5:c0*0.08;h0.mesh.position.set(h0.basePos.x*(1+S),h0.basePos.y+S*0.15,h0.basePos.z*(1+S))}if(n.sliceActive){let h0=n.sliceAxis==="y"?[-2,2.6]:[-0.9,0.9],ZJ=h0[0]+(h0[1]-h0[0])*n.slicePosition,a0=n.sliceAxis==="x"?new v(-1,0,0):n.sliceAxis==="y"?new v(0,-1,0):new v(0,0,-1),S=new sJ(a0,ZJ);for(let n0 of M)n0.mesh.material.clippingPlanes=[S];N.visible=!0;let PJ=n.sliceAxis==="y"?1.6:2.4;N.scale.set(n.sliceAxis==="y"?1:PJ/1.6,n.sliceAxis==="y"?PJ/1.6:1,1),N.position.set(n.sliceAxis==="x"?ZJ:0,n.sliceAxis==="y"?ZJ:0.3,n.sliceAxis==="z"?ZJ:0),N.rotation.set(n.sliceAxis==="y"?Math.PI/2:0,n.sliceAxis==="x"?Math.PI/2:0,0)}else{for(let h0 of M)h0.mesh.material.clippingPlanes=null;N.visible=!1}M0()}D.position.y=0.05+Y0*0.02;let T0=z.Thorax;if(T0){let c0=1+Y0*0.035;T0.scale.set(1.18*c0,c0,0.78*c0)}let A0=z.Heart;if(A0){let c0=1+S0*0.14;A0.scale.set(c0,1.15*c0,0.9*c0)}let i0=z["Right lung"],d0=z["Left lung"],b0=1+Y0*0.06;if(i0)i0.scale.set(0.78*b0,1.5*(1+Y0*0.04),0.7*b0);if(d0)d0.scale.set(0.78*b0,1.5*(1+Y0*0.04),0.7*b0);if(n.autoRotate&&!V)X.theta-=0.0056;else if(!V)X.theta+=h*0.92,X.phi=Math.max(0.15,Math.min(Math.PI-0.15,X.phi+s*0.92)),h*=0.9,s*=0.9;O(),W.render(K,H)}return W0(),()=>{if(cancelAnimationFrame(o0),L0.disconnect(),Q0.removeEventListener("pointerdown",g),window.removeEventListener("pointermove",u),window.removeEventListener("pointerup",c),Q0.removeEventListener("wheel",f),Q0.removeEventListener("pointerdown",t),W.dispose(),K.traverse((r)=>{let n=r;if(n.geometry)n.geometry.dispose();let Y0=n.material;if(Y0)if(Array.isArray(Y0))Y0.forEach((S0)=>S0.dispose());else Y0.dispose()}),J.contains(Q0))J.removeChild(Q0)}}window.__initMedicalScene=uW;})();
