let UIMarkup_Sketch=function(a,b,c){let d=this;this['base']=c['UIMarkup_Base'],this['base'](a,b),this['SketchItem']=function(){let j={'subType':0x0,'position':[],'textarea':null};return j;};function e(j){}function f(j){let k,l=j['style']['font']['size']+'pt\x20'+j['style']['font']['face'];b['ctx_review']['font']=l;for(let m=0x0;m<j['text']['value']['length'];m++){let n=b['ctx_review']['measureText'](j['text']['value'][m]);if(m===0x0)k=n;else{if(k['width']<n['width'])k=n;}}return j['text']['value']['length']>0x0&&(k['height']=j['style']['font']['size']*1.5,k['ascent']=j['style']['font']['size']+j['style']['font']['size']*0.1),k;}function g(j,k){let l;for(let m=0x0;m<j['length'];m++){let n=b['ctx_review']['measureText'](j[m]);if(m===0x0)l=n;else{if(l['width']<n['width'])l=n;}}return j['length']>0x0&&(l['height']=k*1.5,l['ascent']=k+k*0.1),l;}function h(j){if(j['keyCode']===0x1b){let k=a['currentReviewItem']['drawitem']['custom']['textarea']['value'],l=k['split'](/(?:\r\n|\r|\n)/g);for(let m=0x0;m<l['length'];m++){a['currentReviewItem']['text']['value'][m]=l[m];}a['currentReviewItem']['text']['position']=a['currentReviewItem']['drawitem']['custom']['position'][0x0],document['body']['removeChild'](a['currentReviewItem']['drawitem']['custom']['textarea']),i();}else{let n=a['currentReviewItem']['drawitem']['custom']['textarea']['value'],o=n['split'](/(?:\r\n|\r|\n)/g);for(let t=0x0;t<o['length'];t++){a['currentReviewItem']['text']['value'][t]=o[t];}let p=a['currentReviewItem']['drawitem']['custom']['textarea'];const q=f(a['currentReviewItem']);let r=q['width']+0xa;if(r<0x64)r=0x64;p['style']['width']=r+'px';let s=a['currentReviewItem']['text']['value']['length']*q['height'];if(s<0x64)s=0x64;p['style']['height']=s+'px';}}function i(){b['Renderer']['Render'](),b['Data']['Reviews']['push'](a['currentReviewItem']),a['PreviousStep']();let j=d['MarkupSubType'];b['Review']['SetSketchMode'](!![]),b['Control']['SetSubType'](j);}this['Start']=function(){d['base']['prototype']['Start']['call'](d);{a['currentReviewItem']['itemType']=c['Enum']['REVIEW_TYPES']['RK_SKETCH'],a['currentReviewItem']['drawitem']['custom']=d['SketchItem'](),b['Measure']['UpdateReviewStyle'](a['currentReviewItem']);}},this['Release']=function(){d['base']['prototype']['Release']['call'](d);},this['PreviousStep']=function(){},this['ProcessStep']=function(j){switch(a['GetStep']()){case 0x0:{if(j===undefined)return;}break;case 0x1:{if(j===undefined)return;}break;case 0x2:{if(j===undefined)return;}break;case 0x3:{}break;}},this['mouseDown']=function(j,k,l){a['actionEnabled']=![],a['currentReviewItem']['drawitem']['custom']['subType']=d['MarkupSubType'];let m=b['Camera']['screen2WorldWithMatrix'](b['Camera']['matMVP'],new c['Vector3'](j,k,0x0));switch(d['MarkupSubType']){case c['Enum']['SKETCH_TYPES']['FREE']:{a['currentReviewItem']['drawitem']['custom']['position']['push'](new c['Vector3']()['copy'](m)),a['NextStep']();}break;case c['Enum']['SKETCH_TYPES']['LINE']:case c['Enum']['SKETCH_TYPES']['CIRCLE']:case c['Enum']['SKETCH_TYPES']['RECT']:{a['currentReviewItem']['drawitem']['custom']['position']['push'](new c['Vector3']()['copy'](m)),a['currentReviewItem']['drawitem']['custom']['position']['push'](new c['Vector3']()['copy'](m)),a['NextStep']();}break;case c['Enum']['SKETCH_TYPES']['TEXT']:{a['currentReviewItem']['drawitem']['custom']['position']['push'](new c['Vector3']()['copy'](m)),a['NextStep']();}break;}return a['actionEnabled']=!![],!![];},this['mouseMove']=function(j,k){a['base']['prototype']['mouseMove']['call'](a,j,k);let l=b['Camera']['screen2WorldWithMatrix'](b['Camera']['matMVP'],new c['Vector3'](j,k,0x0));switch(d['MarkupSubType']){case c['Enum']['SKETCH_TYPES']['FREE']:{let m=a['GetStep']();m===0x1&&(a['currentReviewItem']['drawitem']['custom']['position']['push'](new c['Vector3']()['copy'](l)),b['Renderer']['Render']());}break;case c['Enum']['SKETCH_TYPES']['LINE']:case c['Enum']['SKETCH_TYPES']['CIRCLE']:case c['Enum']['SKETCH_TYPES']['RECT']:{let n=a['GetStep']();n===0x1&&(a['currentReviewItem']['drawitem']['custom']['position'][0x1]=new c['Vector3']()['copy'](l),b['Renderer']['Render']());}break;}},this['mouseUp']=function(j,k,l){a['actionEnabled']=![],a['base']['prototype']['mouseUp']['call'](a,j,k,l),a['actionEnabled']=!![];let m=b['Camera']['screen2WorldWithMatrix'](b['Camera']['matMVP'],new c['Vector3'](j,k,0x0));switch(d['MarkupSubType']){case c['Enum']['SKETCH_TYPES']['FREE']:{let n=a['GetStep']();n===0x1&&(a['currentReviewItem']['drawitem']['custom']['position']['push'](new c['Vector3']()['copy'](m)),i());}break;case c['Enum']['SKETCH_TYPES']['LINE']:case c['Enum']['SKETCH_TYPES']['CIRCLE']:case c['Enum']['SKETCH_TYPES']['RECT']:{let o=a['GetStep']();o===0x1&&(a['currentReviewItem']['drawitem']['custom']['position'][0x1]=new c['Vector3']()['copy'](m),i());}break;case c['Enum']['SKETCH_TYPES']['TEXT']:{let p=a['GetStep']();if(p===0x1){let q=b['Camera']['screen2WorldWithMatrix'](b['Camera']['matMVP'],new c['Vector3'](j+0x64,k+0x64,0x0));a['currentReviewItem']['drawitem']['custom']['position'][0x1]=new c['Vector3']()['copy'](q);}if(!a['currentReviewItem']['drawitem']['custom']['textarea']){a['currentReviewItem']['drawitem']['custom']['position'][0x1]=new c['Vector3']()['copy'](m);let r=document['createElement']('textarea');r['className']='sketch_textarea',r['addEventListener']('mousedown',e),r['addEventListener']('keydown',h),document['body']['appendChild'](r),a['currentReviewItem']['drawitem']['custom']['textarea']=r;let s=a['currentReviewItem']['drawitem']['custom']['position'][0x0],t=b['Camera']['world2ScreenWithMatrix'](b['Camera']['matMVP'],new c['Vector3']()['copy'](s));r['style']['top']=t['y']+'px',r['style']['left']=t['x']+'px',r['style']['width']='100px',r['style']['height']='100px',r['style']['background']='transparent',r['style']['border']='solid\x201px',r['style']['fontSize']=a['currentReviewItem']['style']['font']['size']+0x4+'px',r['style']['fontFamily']=a['currentReviewItem']['style']['font']['face']+'';}}break;}return d['mouseAction'];},this['mouseWheel']=function(j,k,l){if(a['GetStep']()!==0x3)a['base']['prototype']['mouseWheel']['call'](a,j,k,l);},this['Render2D']=function(j){j['fillStyle']='rgba(0,\x20255,\x200,\x201)',j['strokeStyle']='rgba(255,\x20255,\x20255,\x201)',j['lineWidth']=0x1;switch(d['MarkupSubType']){case c['Enum']['SKETCH_TYPES']['FREE']:{let k=a['GetStep']();if(k!==0x0){j['beginPath']();for(let l=0x0;l<a['currentReviewItem']['drawitem']['custom']['position']['length'];l++){if(l===0x0)continue;let m=a['currentReviewItem']['drawitem']['custom']['position'][l-0x1],n=a['currentReviewItem']['drawitem']['custom']['position'][l],o=b['Camera']['world2ScreenWithMatrix'](b['Camera']['matMVP'],new c['Vector3']()['copy'](m)),p=b['Camera']['world2ScreenWithMatrix'](b['Camera']['matMVP'],new c['Vector3']()['copy'](n));j['moveTo'](o['x'],o['y']),j['lineTo'](p['x'],p['y']);}j['stroke']();}}break;case c['Enum']['SKETCH_TYPES']['LINE']:{let q=a['GetStep']();if(q!==0x0){let r=a['currentReviewItem']['drawitem']['custom']['position'][0x0],s=a['currentReviewItem']['drawitem']['custom']['position'][0x1],t=b['Camera']['world2ScreenWithMatrix'](b['Camera']['matMVP'],new c['Vector3']()['copy'](r)),u=b['Camera']['world2ScreenWithMatrix'](b['Camera']['matMVP'],new c['Vector3']()['copy'](s));j['beginPath'](),j['moveTo'](t['x'],t['y']),j['lineTo'](u['x'],u['y']),j['stroke']();}}break;case c['Enum']['SKETCH_TYPES']['CIRCLE']:{let v=a['GetStep']();if(v!==0x0){let w=a['currentReviewItem']['drawitem']['custom']['position'][0x0],x=a['currentReviewItem']['drawitem']['custom']['position'][0x1],y=b['Camera']['world2ScreenWithMatrix'](b['Camera']['matMVP'],new c['Vector3']()['copy'](w)),z=b['Camera']['world2ScreenWithMatrix'](b['Camera']['matMVP'],new c['Vector3']()['copy'](x)),A=0x0,B=0x2*Math['PI'],C=new c['Vector2']((y['x']+z['x'])/0x2,(y['y']+z['y'])/0x2),D=new c['Vector2']()['subVectors'](y,z),E=Math['abs'](D['length']()/0x2);j['beginPath'](),j['arc'](C['x'],C['y'],E,A,B,!![]),j['stroke']();}}break;case c['Enum']['SKETCH_TYPES']['RECT']:{let F=a['GetStep']();if(F!==0x0){let G=a['currentReviewItem']['drawitem']['custom']['position'][0x0],H=a['currentReviewItem']['drawitem']['custom']['position'][0x1],I=b['Camera']['world2ScreenWithMatrix'](b['Camera']['matMVP'],new c['Vector3']()['copy'](G)),J=b['Camera']['world2ScreenWithMatrix'](b['Camera']['matMVP'],new c['Vector3']()['copy'](H)),K=J['x']-I['x'],L=J['y']-I['y'];j['beginPath'](),j['rect'](I['x'],I['y'],K,L),j['stroke']();}}break;case c['Enum']['SKETCH_TYPES']['TEXT']:{}break;}};};export default UIMarkup_Sketch;