class Avatar{constructor(a,b){let c=this,d=[],e=0x0,f=-0x1;this['AvatarUserType']=-0x1,this['ShowAvatar']=![],this['AvatarCurrentTime']=0x0,this['AvatarZoom']=0xbb8,this['ZoomRate']=0x12c,this['AvatarZoomMax']=0x1388,this['AvatarZoomMin']=0x1f4;let g=-0x3c,h=0x5a;i();function i(){}this['Clear']=function(){for(let k=e-0x1;k>=0x0;k--){c['DeleteObject'](d[k]['uuid']);}d=[],e=0x0,f=-0x1;},this['Visible']=function(k){if(c['ShowAvatar']===k)return;c['ShowAvatar']=k;if(k){let l=a['Control']['GetMode']();if(l!==b['Enum']['CONTROL_STATE']['WALKTHROUGH'])return;c['InitPosAndDirection']();}},this['AddObject']=function(k){d['push'](k);for(let l=0x0;l<k['object']['length'];l++){a['RenderWGL']['SetDataByObject'](k['object'][l]),k['enableSelection']=![];}e++;if(f<0x0)f=0x0;c['SetAnimationByIndex'](k['uuid'],0x0,0x0);},this['GetObject']=function(k){if(k===undefined){if(f>=0x0)return d[f];}for(let l=0x0;l<d['length'];l++){if(d[l]['uuid']!==k)continue;return d[l];}return undefined;},this['SetUserAvatar']=function(k){for(let l=0x0;l<d['length'];l++){if(d[l]['uuid']!==k)continue;f=l;break;}},this['AddAnimationData']=function(k,l,m,n){let o=c['GetObject'](k);if(o===undefined)return;if(l<0x0)l=0x0;if(o['animation'][l]===undefined)o['animation'][l]=n;else{if(m>=0x0)for(let p=0x0;p<n['layer']['length'];p++){o['animation'][l]['layer'][m+p]=n['layer'][p];}else for(let q=0x0;q<n['layer']['length'];q++){o['animation'][l]['layer']['push'](n['layer'][q]);}}},this['SetAnimationByIndex']=function(k,l,m){let n=c['GetObject'](k);if(n===undefined)return;if(m<n['animation'][l]['layer']['length'])c['SetAnimation'](n['uuid'],l,n['animation'][l]['layer'][m]['ID']);},this['SetAnimation']=function(k,l,m){let n=c['GetObject'](k);if(n===undefined)return;let o=![];n['currentAnimationNum']!==l&&(o=!![]);let p=-0x1;for(let q=0x0;q<n['animation'][l]['layer']['length'];q++){if(n['animation'][l]['layer'][q]['ID']!==m)continue;p=q;break;}if(!o&&n['animation'][l]['playAnimation']===p)return;n['currentAnimationNum']=l,n['animation'][l]['lastAnimation']=n['animation'][l]['playAnimation'],n['animation'][l]['lastAnimationSecond']=n['animation'][l]['animationSecond'],n['animation'][l]['playAnimation']=-0x1;p>=0x0&&(n['animation'][l]['playAnimation']=p,n['animation'][l]['animationSecond']=0x0);if(o)n['animation'][l]['lastAnimation']=-0x1;},this['SetPosAndDirection']=function(l,n,o,p){let q=c['GetObject'](l);if(q===undefined)return;if(n!=undefined)q['position']['copy'](n);if(o!=undefined)q['direction']['copy'](o);if(p!=undefined)q['up']['copy'](p);let r=new b['Vector3']()['copy'](q['direction']),s=new b['Vector3']()['copy'](q['up']),t=new b['Vector3']()['crossVectors'](s,r),u=new b['Vector3']()['copy'](r);u['cross'](t),u['normalize']();let v=new b['Matrix4']()['makeBasis'](r,t,u),w=new b['Matrix4']()['setPosition'](q['position']),x=new b['Matrix4']()['multiplyMatrices'](w,v);for(let y=0x0;y<q['object']['length'];y++){for(let z=0x0;z<q['object'][y]['tag']['length'];z++){q['object'][y]['tag'][z]['action']['transform']['copy'](x);}q['object'][y]['flag']['updateProcess']=!![];}a['Renderer']['Render']();},this['InitPosAndDirection']=function(k,l){let m=c['GetObject']();if(m===undefined)return;let n=new b['Vector3']()['copy'](m['position']),o=new b['Vector3']()['copy'](m['direction']),p=new b['Vector3'](0x0,0x0,0x1),q=new b['Matrix4']()['copy'](a['Camera']['matMV']),r=new b['Matrix4']()['copy'](a['Camera']['matMVP']),s=new b['Matrix4']()['getInverse'](q),t=s['multiplyVector'](a['Camera']['cameraPosition']);const u=a['Renderer']['GetSizeWidth'](),v=a['Renderer']['GetSizeHeight']();let w=new b['Vector3'](u/0x2,v/0x2,0x0),x=new b['Vector3'](u/0x2,v/0x2,0.5),y=a['Camera']['screen2WorldWithMatrix'](r,w),z=a['Camera']['screen2WorldWithMatrix'](r,x),A=new b['Vector3']()['subVectors'](z,y);A['normalize']();let B=c['AvatarZoom'];B=Math['max'](c['AvatarZoomMin'],B),B=Math['min'](c['AvatarZoomMax'],B),n=new b['Vector3']()['addVectors'](t,A['multiplyScalar'](B)),n['z']-=0x690,A['z']=0x0,A['normalize'](),o['copy'](A);let C=new b['Matrix4']()['makeRotationZ'](0x5a*Math['PI']/0xb4);o['applyMatrix4'](C);if(k!==undefined)n['copy'](k);if(l!==undefined)o['copy'](l);c['SetPosAndDirection'](m['uuid'],n,o,p);},this['UpdateCamera']=function(){let k=c['GetObject']();if(k===undefined)return;let l=new b['Vector3']()['copy'](k['position']),m=new b['Vector3']()['copy'](k['direction']),n=new b['Vector3']()['copy'](k['up']),o=new b['Matrix4']()['copy'](a['Camera']['matMV']),p=new b['Matrix4']()['copy'](a['Camera']['matMVP']),q=new b['Matrix4']()['getInverse'](o),r=q['multiplyVector'](a['Camera']['cameraPosition']),s=o['multiplyVector'](new b['Vector3']());l['z']+=0x690;let t=c['AvatarZoom'];t=Math['max'](c['AvatarZoomMin'],t),t=Math['min'](c['AvatarZoomMax'],t);let u=new b['Vector3']()['subVectors'](l,r),v=o['multiplyVector'](u);v=new b['Vector3']()['subVectors'](v,s);let w=new b['Vector3'](0x0,0x0,0x1);w['normalize'](),v=new b['Vector3']()['addVectors'](v,w['multiplyScalar'](t)),a['Camera']['cameraMatrix']['translate'](-v['x'],-v['y'],-v['z']),a['Camera']['ResizeGLWindow']();},this['SetZoom']=function(k){k=Math['max'](c['AvatarZoomMin'],k),k=Math['min'](c['AvatarZoomMax'],k),c['AvatarZoom']=k,c['UpdateCamera']();},this['CameraRotate']=function(k,l){let m=new b['Matrix4']()['makeRotationX'](k['x']),n=new b['Matrix4']()['makeRotationY'](k['y']),o=new b['Matrix4']()['makeRotationZ'](k['z']);{let p=new b['Matrix4']()['copy'](a['Camera']['matMV']);{let t=new b['Matrix4']()['copy'](p);t['setPosition'](new b['Vector3'](0x0,0x0,0x0));let u=new b['Vector3'](0x0,0x0,0x1),v=new b['Vector3'](0x0,0x0,0x0);u['applyMatrix4'](t),v['applyMatrix4'](t);if(u['y']<v['y'])o=new b['Matrix4']()['makeRotationZ'](-k['z']);}let q=new b['Matrix4'](),r=new b['Matrix4']();{let w=new b['Vector3']()['copy'](l);w['applyMatrix4'](p);let x=new b['Matrix4'](),y=new b['Vector3']()['copy'](w)['multiplyScalar'](-0x1);x['setPosition'](y);let z=new b['Matrix4']()['copy'](m),A=new b['Matrix4']()['setPosition'](w),B=new b['Matrix4']()['multiplyMatrices'](z,x);q=new b['Matrix4']()['multiplyMatrices'](A,B);}{let C=new b['Vector3']()['copy'](l),D=new b['Matrix4'](),E=new b['Vector3']()['copy'](C)['multiplyScalar'](-0x1);D['setPosition'](E);let F=new b['Matrix4']()['copy'](o),G=new b['Matrix4']()['setPosition'](C),H=new b['Matrix4']()['multiplyMatrices'](F,D);r=new b['Matrix4']()['multiplyMatrices'](G,H);}{let I=new b['Matrix4']()['multiplyMatrices'](p,r),J=new b['Matrix4']()['multiplyMatrices'](q,I),K=new b['Vector3'](0x0,0x0,0x1),L=new b['Matrix4']()['copy'](J);L['setPosition'](new b['Vector3'](0x0,0x0,0x0)),K['applyMatrix4'](L);let M=Math['acos'](K['y']),N=g*Math['PI']/0xb4,O=h*Math['PI']/0xb4;if(K['z']<0x0)M*=-0x1;if(M<N){k['x']=N-M+k['x'],c['CameraRotate'](k,l);return;}if(M>O){k['x']=O-M+k['x'],c['CameraRotate'](k,l);return;}}let s=new b['Matrix4']()['multiplyMatrices'](a['Camera']['cameraMatrix'],r);a['Camera']['cameraMatrix']=new b['Matrix4']()['multiplyMatrices'](q,s),a['Camera']['ResizeGLWindow'](),a['Avatar']['UpdateCamera']();}};function j(){for(let l=0x0;l<e;l++){for(let m=0x0;m<d[l]['object']['length'];m++){a['RenderWGL']['InitRenderPipeline'](d[l]['object'][m]);}}if(f>=0x0)a['SHWebSocket']['UpdatePlayerChatBoxPos'](d[f]['position']);}this['Render']=function(){if(c['ShowAvatar']===![])return;let l=a['Control']['GetMode']();if(l!==b['Enum']['CONTROL_STATE']['WALKTHROUGH'])return;if(f<0x0)return;j();let m=c['AvatarCurrentTime'];a['Shader']['BeginShader'](b['Enum']['SHADER_TYPES']['ANIMATIONPBR']),a['Shader']['SetGLCameraData'](),a['Shader']['SetGLLight'](),a['gl']['enable'](a['gl']['BLEND']),a['gl']['enable'](a['gl']['DEPTH_TEST']);const n=new b['Matrix4']()['copy'](a['Camera']['matMV']),o=new b['Matrix4']()['copy'](a['Camera']['matMVP']);a['Shader']['SetMatrix'](o,n),a['Shader']['SetClipping'](undefined);if(f>=0x0&&f<d['length']){let p=f;a['Shader']['SetUpdateCurrentMatrixData']();if(d[p]['visible']){if(d[p]['currentAnimationNum']>=0x0){let q=d[p]['animation'][d[p]['currentAnimationNum']],r=q['playAnimation'],s=q['lastAnimation'];if(r>=0x0)q['animationSecond']+=m;if(s>=0x0)q['lastAnimationSecond']+=m;if(r>=0x0){let t=0x0,u=0x0;if(r>=0x0)t=q['animationSecond']/q['layer'][r]['step'];if(s>=0x0)u=q['lastAnimationSecond']/q['layer'][s]['step'];let v=[];for(let x=0x0;x<q['layer'][r]['data']['length'];x++){if(q['layer'][r]['data'][x]['transform']['length']>0x0){let y=Math['floor'](t)%Math['floor'](q['layer'][r]['data'][x]['transform']['length']);v['push'](new b['Matrix4']()['copy'](q['layer'][r]['data'][x]['transform'][y]));}else v['push'](new b['Matrix4']());}let w=0.5;if(q['animationSecond']<w&&s>=0x0){let z=q['animationSecond']/w;for(let A=0x0;A<q['layer'][s]['data']['length'];A++){let B=new b['Matrix4']();if(q['layer'][s]['data'][A]['transform']['length']>0x0){let E=Math['floor'](u)%Math['floor'](q['layer'][s]['data'][A]['transform']['length']);B['copy'](q['layer'][s]['data'][A]['transform'][E]);}let C=new b['Matrix4']()['copy'](v[A])['multiplyScalar'](z),D=B['multiplyScalar'](0x1-z);for(let F=0x0;F<0x10;F++){v[A]['elements'][F]=C['elements'][F]+D['elements'][F];}}}a['Shader']['SetUpdateCurrentMatrixData'](v);}}for(let G=0x0;G<d[p]['object']['length'];G++){a['RenderWGL']['UpdateRenderProcessByAnimationObject_v2'](d[p]['object'][G]);}}}a['gl']['disable'](a['gl']['BLEND']),a['gl']['depthMask'](!![]),a['gl']['disable'](a['gl']['BLEND']),a['gl']['disable'](a['gl']['DEPTH_TEST']),a['Shader']['EndShader'](),c['AvatarCurrentTime']=0x0;},this['PickRender']=function(){if(c['ShowAvatar']===![])return;let l=a['Control']['GetMode']();if(l!==b['Enum']['CONTROL_STATE']['WALKTHROUGH'])return;if(f<0x0)return;j(),a['Shader']['BeginShader'](b['Enum']['SHADER_TYPES']['PICK']),a['Shader']['SetGLCameraData'](),a['gl']['enable'](a['gl']['BLEND']),a['gl']['enable'](a['gl']['DEPTH_TEST']);const m=new b['Matrix4']()['copy'](a['Camera']['matMV']),n=new b['Matrix4']()['copy'](a['Camera']['matMVP']);a['Shader']['SetMatrix'](n,m),a['Shader']['SetClipping'](undefined);if(f>=0x0&&f<d['length']){let o=f;a['Shader']['SetUpdateCurrentMatrixData']();if(d[o]['visible'])for(let p=0x0;p<d[o]['object']['length'];p++){a['RenderWGL']['UpdateRenderProcessByPickAnimationObject_v2'](d[o]['object'][p]);}}a['gl']['disable'](a['gl']['BLEND']),a['gl']['depthMask'](!![]),a['gl']['disable'](a['gl']['BLEND']),a['gl']['disable'](a['gl']['DEPTH_TEST']),a['Shader']['EndShader']();},this['OneColorRender']=function(l,m){if(c['ShowAvatar']===![])return;let n=a['Control']['GetMode']();if(n!==b['Enum']['CONTROL_STATE']['WALKTHROUGH'])return;if(f<0x0)return;if(l===undefined)l=b['Enum']['SHADER_TYPES']['BASIC2D'];let o=new b['Matrix4']()['copy'](a['Camera']['matMVP']),p=new b['Matrix4']()['copy'](a['Camera']['matMV']);a['Shader']['BeginShader'](l),a['Shader']['SetGLCameraData'](),a['gl']['enable'](a['gl']['BLEND']),a['gl']['enable'](a['gl']['DEPTH_TEST']),a['Shader']['SetMatrix'](o,p),a['Shader']['SetClipping'](undefined);if(f>=0x0&&f<d['length']){let q=f;a['Shader']['SetUpdateCurrentMatrixData']();if(d[q]['visible']){if(d[q]['currentAnimationNum']>=0x0){let r=d[q]['animation'][d[q]['currentAnimationNum']],s=r['playAnimation'],t=r['lastAnimation'];if(s>=0x0){let u=0x0,v=0x0;if(s>=0x0)u=r['animationSecond']/r['layer'][s]['step'];if(t>=0x0)v=r['lastAnimationSecond']/r['layer'][t]['step'];let w=[];for(let y=0x0;y<r['layer'][s]['data']['length'];y++){if(r['layer'][s]['data'][y]['transform']['length']>0x0){let z=Math['floor'](u)%Math['floor'](r['layer'][s]['data'][y]['transform']['length']);w['push'](new b['Matrix4']()['copy'](r['layer'][s]['data'][y]['transform'][z]));}else w['push'](new b['Matrix4']());}let x=0.5;if(r['animationSecond']<x&&t>=0x0){let A=r['animationSecond']/x;for(let B=0x0;B<r['layer'][t]['data']['length'];B++){let C=new b['Matrix4']();if(r['layer'][t]['data'][B]['transform']['length']>0x0){let F=Math['floor'](v)%Math['floor'](r['layer'][t]['data'][B]['transform']['length']);C['copy'](r['layer'][t]['data'][B]['transform'][F]);}let D=new b['Matrix4']()['copy'](w[B])['multiplyScalar'](A),E=C['multiplyScalar'](0x1-A);for(let G=0x0;G<0x10;G++){w[B]['elements'][G]=D['elements'][G]+E['elements'][G];}}}a['Shader']['SetUpdateCurrentMatrixData'](w);}}for(let H=0x0;H<d[q]['object']['length'];H++){a['RenderWGL']['UpdateRenderProcessByAnimationObjectOneColor_v2'](d[q]['object'][H],m);}}}a['Shader']['EndShader'](),a['gl']['disable'](a['gl']['BLEND']),a['gl']['depthMask'](!![]),a['gl']['disable'](a['gl']['BLEND']),a['gl']['disable'](a['gl']['DEPTH_TEST']);},this['GLSLPreprocessing']=function(k,l){{a['Shader']['BeginFramebuffer'](b['Enum']['FB_RENDER_TYPES']['AVATAROBJECT']),a['gl']['disable'](a['gl']['BLEND']),a['gl']['enable'](a['gl']['DEPTH_TEST']);k&&(a['gl']['clearColor'](0x0,0x0,0x0,0x0),a['gl']['clear'](a['gl']['COLOR_BUFFER_BIT']|a['gl']['DEPTH_BUFFER_BIT']));let m=new b['Color'](0xff,0xff,0xff,0xff),n=a['Renderer']['GetAvatarEdgeTypeEffect']();n==0x0&&c['OneColorRender'](b['Enum']['SHADER_TYPES']['ANIMATIONBASIC2D'],m);if(n==0x1){a['gl']['depthFunc'](a['gl']['LEQUAL']);let o=new b['Color'](0x0,0x0,0x0,0xff);{a['Shader']['BeginShader'](b['Enum']['SHADER_TYPES']['BASIC2D']);for(let p=0x0;p<l;p++){a['RenderWGL']['UpdateRenderProcessByObjectOneColor_v2'](a['Data']['Objects'][p],o);}a['Shader']['EndShader']();}{a['CustomObject']['OneColorRender'](b['Enum']['SHADER_TYPES']['BASIC2D'],o);}a['gl']['depthFunc'](a['gl']['GREATER']),c['OneColorRender'](b['Enum']['SHADER_TYPES']['ANIMATIONBASIC2D'],m),a['gl']['depthFunc'](a['gl']['LEQUAL']);}a['Shader']['EndFramebuffer']();}};}}export default Avatar;