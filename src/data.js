export const tracksSeed=[
{id:'s1',title:'Afterglow',artist:'Sora Bloom',album:'Slow Motion',genre:'Electronic',duration:24,color:'#a76c4f',art:'photo-1519608487953-e999c86e7455',freq:196},
{id:'s2',title:'Weightless',artist:'Hollow Coves',album:'Night Swim',genre:'Indie',duration:24,color:'#7891a3',art:'photo-1470252649378-9c29740c9fa8',freq:220},
{id:'s3',title:'Velvet Sky',artist:'Mira Sol',album:'Outside the Lines',genre:'R&B',duration:24,color:'#8e6c83',art:'photo-1470770841072-f978cf4d019e',freq:261.63},
{id:'s4',title:'Somewhere Else',artist:'Arlo West',album:'Elsewhere',genre:'Alternative',duration:24,color:'#c38352',art:'photo-1500534623283-312aade485b7',freq:246.94},
{id:'s5',title:'Blue Room',artist:'The Parallel',album:'Soft Focus',genre:'Chill',duration:24,color:'#4f7e9c',art:'photo-1518837695005-2083093ee35b',freq:174.61},
{id:'s6',title:'Daydreaming',artist:'Eli Monroe',album:'Dawn',genre:'Pop',duration:24,color:'#b4a268',art:'photo-1500534314209-a25ddb2bd429',freq:293.66},
{id:'s7',title:'City Lights',artist:'Kairo',album:'Midnight Radio',genre:'Electronic',duration:24,color:'#846baf',art:'photo-1519681393784-d120267933ba',freq:329.63},
{id:'s8',title:'Bloom Again',artist:'Luna Grey',album:'Paper Planes',genre:'Acoustic',duration:24,color:'#7e9b76',art:'photo-1441974231531-c6227db76b6e',freq:220},
{id:'s9',title:'Low Tide',artist:'North Coast',album:'Still Here',genre:'Chill',duration:24,color:'#598c88',art:'photo-1507525428034-b723cf961d3e',freq:164.81},
{id:'s10',title:'Falling Into Place',artist:'Nico Vale',album:'Echoes',genre:'Indie',duration:24,color:'#ad7563',art:'photo-1472214103451-9374bd1c798e',freq:392}
];
export const featured=[{id:'f1',name:'SLOW SUNDAYS',subtitle:'Take a moment. Stay awhile.',art:'photo-1470252649378-9c29740c9fa8',color:'#ba8566',filter:'Chill'},{id:'f2',name:'AFTER HOURS',subtitle:'For the nights that never end.',art:'photo-1519608487953-e999c86e7455',color:'#7689a6',filter:'Electronic'},{id:'f3',name:'IN YOUR FEELS',subtitle:'A soundtrack for everything.',art:'photo-1470770841072-f978cf4d019e',color:'#ad7394',filter:'Indie'}];
export const KEY='beatflow_premium_v3_';
export function get(k,fallback){try{return JSON.parse(localStorage.getItem(KEY+k))??fallback}catch{return fallback}}
export function put(k,val){localStorage.setItem(KEY+k,JSON.stringify(val))}
export function initialize(){if(!localStorage.getItem(KEY+'users'))put('users',[{id:'admin',name:'Studio Admin',email:'admin@music.com',password:'admin123',role:'admin'},{id:'demo',name:'Alex Morgan',email:'user@music.com',password:'user123',role:'user'}]);if(!localStorage.getItem(KEY+'tracks'))put('tracks',tracksSeed)}
export function image(id,width=500){return id?`https://images.unsplash.com/${id}?auto=format&fit=crop&w=${width}&q=80`:''}
