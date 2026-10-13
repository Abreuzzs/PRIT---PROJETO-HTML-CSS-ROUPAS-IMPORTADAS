'use strict';
const A='assets/';
/* Imagem provisória (troque pelo arquivo real em assets/ quando tiver) */
function ph(t){return 'data:image/svg+xml;utf8,'+encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 330"><rect width="300" height="330" fill="#c9b28d"/><text x="150" y="170" font-family="sans-serif" font-size="22" fill="#4a3b25" text-anchor="middle">${t}</text></svg>`)}
const P=[
['m4','masculino','Camiseta Premium',109.9,'categoria_masculino/masculino_4.jpg'],
['m2','masculino','Camisa Social Slim',199.9,'categoria_masculino/masculino_2.jpg'],
['m3','masculino','Camiseta Premium Cinza',89.9,'categoria_masculino/masculino_3.jpg'],
['m5','masculino','Camiseta Estampada',109.9,'categoria_masculino/masculino_5.jpg'],
['m7','masculino','Camiseta Longline',119.9,'categoria_masculino/masculino_7.jpg'],
['m6','masculino','Camisa de Manga Longa',149.9,'categoria_masculino/masculino_6.jpg'],
['m9','masculino','Moletom Branco',219.9,'categoria_masculino/masculino_9.jpg'],
['m8','masculino','Jaqueta Bomber',199.9,'categoria_masculino/masculino_8.jpg'],
['m11','masculino','Jaqueta de Couro',379.9,'categoria_masculino/masculino_11.jpg'],
['m13','masculino','Moletom com Capuz',229.9,'categoria_masculino/masculino_13.jpg'],
['m10','masculino','Blazer Casual',349.9,'categoria_masculino/masculino_10.jpg'],
['m12','masculino','Terno Xadrez',499.9,'categoria_masculino/masculino_12.jpg'],
['m15','masculino','Calça Jeans',189.9,'categoria_masculino/masculino_15.jpg'],
['m14','masculino','Calça Chino',209.9,'categoria_masculino/masculino_14.jpg'],
['m16','masculino','Calça Cargo',219.9,'categoria_masculino/masculino_16.jpg'],
['m17','masculino','Calça Jeans Slim Fit',249.9,'categoria_masculino/masculino_17.jpg'],
['f2','feminino','Vestido Floral Regata',269.9,'categoria_feminina/feminino_2.jpg'],
['f3','feminino','Vestido Floral Manga Longa',179.9,'categoria_feminina/feminino_3.jpg'],
['f4','feminino','Vestido Jeans Curto',149.9,'categoria_feminina/feminino_4.jpg'],
['f5','feminino','Vestido Longo Vermelho',249.9,'categoria_feminina/feminino_5.jpg'],
['f6','feminino','Vestido Longo Festa',279.9,'categoria_feminina/feminino_6.jpg'],
['f7','feminino','Cardigan Longo',99.9,'categoria_feminina/feminino_7.jpg'],
['f8','feminino','Vestido Vinho',189.9,'categoria_feminina/feminino_8.jpg'],
['f9','feminino','Vestido Vermelho Curto',129.9,'categoria_feminina/feminino_9.jpg'],
['f10','feminino','Sobretudo Trench',259.9,'categoria_feminina/feminino_10.jpg'],
['f11','feminino','Cropped Rosê',84.9,'categoria_feminina/feminino_11.jpg'],
['f12','feminino','Conjunto Moletom',159.9,'categoria_feminina/feminino_12.jpg'],
['f14','feminino','Blusa Manga Longa Tricô',89.9,'categoria_feminina/feminino_14.jpg'],
['f16','feminino','Saída de Praia',79.9,'categoria_feminina/feminino_16.jpg'],
['f17','feminino','Bolsa de Couro',173.9,'categoria_feminina/feminino_17.jpg'],
['f13','feminino','Saia Rodada Preta',119.9,'categoria_feminina/feminino_13.jpg'],
['f15','feminino','Calça Mom Jeans',159.9,'categoria_feminina/feminino_15.jpg'],
['e6','esporte','Camisa da Argentina',129.9,'categoria_esportes/esportes_6.png'],
['e8','esporte','Camisa da Inglaterra',179.9,'categoria_esportes/esportes_8.png'],
['e7','esporte','Camisa da Espanha',129.9,'categoria_esportes/esportes_7.jpg'],
['e9','esporte','Camisa da Alemanha',179.9,'categoria_esportes/esportes_9.jpg'],
['e10','esporte','Camisa do Japão',109.9,'categoria_esportes/esportes_10.jpg'],
['e11','esporte','Camisa da Bélgica',139.9,'categoria_esportes/esportes_11.png'],
['e12','esporte','Camisa da Itália',139.9,'categoria_esportes/esportes_12.png'],
['e13','esporte','Camisa do Brasil',129.9,'categoria_esportes/esportes_13.jpg'],
['e14','esporte','Camisa do México',129.9,'categoria_esportes/esportes_14.jpg'],
['e17','esporte','Camisa de Portugal',139.9,'categoria_esportes/esportes_17.png'],
['e15','esporte','Camisa do Barcelona',249.9,'categoria_esportes/esportes_15.jpg'],
['e18','esporte','Camisa do Arsenal',139.9,'categoria_esportes/esportes_18.jpg'],
['e19','esporte','Camisa de Atlanta Hawks',159.9,'categoria_esportes/esportes_19.png'],
['e20','esporte','Conjunto Golden State',189.9,'categoria_esportes/esportes_20.png'],
['e21','esporte','Conjunto Chicago Bulls',219.9,'categoria_esportes/esportes_21.png'],
['e22','esporte','Jaqueta do Brasil',289.9,'categoria_esportes/esportes_22.png'],
['rel','acessorios','Relógio Cronógrafo de Ouro',4500,'novo/relogio.png'],
['tr','masculino','Traje Masculino Preto Aduana',269.9,'novo/traje.png'],
['te','calcados','Tênis Casual Masculino em Couro Café',450,'novo/tenis.png'],
['bz','feminino','Blazer Feminino Regular Abertura Frontal Preto',900,'novo/blazer.png'],
['cs','masculino','Camisa Social Masculina Manga Longa Passa Fácil',79.9,'novo/m-camisa-preta.png'],
['tm','masculino','Terno Marinho Chumbo Royal Vinho Qualidade Total',720,'novo/m-terno-cinza.png'],
['tc','masculino','Terno Cinza-Italiano Slim',186.66,'novo/m-terno-claro.png'],
['cb','masculino','Calça Wide Alfaiataria Bege',619.16,'novo/m-calca-bege.png'],
['cw','masculino','Calça Wide Alfaiataria Preta',619.16,'novo/m-calca-preta.png'],
['ct','masculino','Calça Tropical C/ Regulagem Chumbo',348,'novo/m-calca-tropical.png'],
['gr','masculino','Gravata Signature Elegance',99,'novo/m-gravata.png'],
['sp','masculino','Sapato Tela Moura EVA 635/50 Preto',714,'novo/m-sapato.png'],
['ci','masculino','Cinto Tradicional em Couro (Preto)',42,'ph:Cinto'],
['cn','masculino','Calça Social Slim Marinho',159.9,'novo/m-calca-marinho.png'],
['fb1','feminino','Blazer Las Vegas Champagne',369.9,'novo/f-blazer-champagne.png'],
['fb2','feminino','Blazer Las Vegas Preto',369.9,'novo/f-blazer-preto.png'],
['fcs','feminino','Camisa Feminina Social Manga Longa Micro Listras Blue',189.9,'novo/f-camisa-social.png'],
['fcp','feminino','Calça Social Feminina Modelo Alfaiataria Pantalona',89.14,'novo/f-calca-pantalona.png'],
['fcb','feminino','Calça PKS Alfaiataria Social Bege',69.9,'novo/f-calca-bege.png'],
['fcn','feminino','Calça PKS Alfaiataria Social Marinho',349.99,'novo/f-calca-marinho.png'],
['fm','feminino','Mocassim Feminino Casual Anna Sintético',159.9,'novo/f-mocassim.png'],
['fbo','feminino','Bolsa em Couro Saffiano Prada Re-Edition 2005',18500,'novo/f-bolsa.png'],
['fo','feminino','Ray-Ban Óculos de Sol Feminino',1050,'novo/f-oculos.png'],
['e16','retro','Camisa Retrô Manga Comprida',932,'categoria_esportes/esportes_16.jpg']
].map(([id,cat,name,price,img])=>({id,cat,name,price,img:img.startsWith('ph:')?ph(img.slice(3)):A+img}));
const BY=Object.fromEntries(P.map(p=>[p.id,p]));
const $=(s,r=document)=>r.querySelector(s), $$=(s,r=document)=>[...r.querySelectorAll(s)];
const brl=n=>n.toLocaleString('pt-BR',{style:'currency',currency:'BRL'});
const esc=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));

/* ---------- carrinho (localStorage com fallback em memória) ---------- */
let mem={};
const cart={
 get(){try{return JSON.parse(localStorage.getItem('wi_cart'))||{}}catch(e){return mem}},
 set(c){mem=c;try{localStorage.setItem('wi_cart',JSON.stringify(c))}catch(e){}updateBadge()},
 add(id){const c=this.get();c[id]=(c[id]||0)+1;this.set(c)},
 change(id,d){const c=this.get();c[id]=(c[id]||0)+d;if(c[id]<=0)delete c[id];this.set(c)},
 remove(id){const c=this.get();delete c[id];this.set(c)},
 count(){return Object.values(this.get()).reduce((a,b)=>a+b,0)}
};
const discountRate=q=>q>=4?.2:q===3?.15:q===2?.1:0;
function updateBadge(){const b=$('#cartCount');if(b){const n=cart.count();b.textContent=n;b.hidden=!n}}
function toast(msg){let t=$('.toast');if(!t){t=document.createElement('div');t.className='toast';t.setAttribute('role','status');document.body.append(t)}
 t.textContent=msg;t.classList.add('show');clearTimeout(t._t);t._t=setTimeout(()=>t.classList.remove('show'),2600)}
function dialog(title,html,actions=''){let d=$('#dlg');if(!d){d=document.createElement('dialog');d.id='dlg';document.body.append(d);
 d.addEventListener('click',e=>{if(e.target===d||e.target.closest('[data-close]'))d.close()})}
 d.setAttribute('aria-labelledby','dlgT');d.innerHTML=`<h2 id="dlgT">${title}</h2><div>${html}</div><div class="acts">${actions}<button class="btn ghost sm" data-close>Fechar</button></div>`;d.showModal();return d}

/* ---------- header / footer compartilhados ---------- */
const NAV=[['masculino','Masculino'],['feminino','Feminino'],['esporte','Esporte'],['lancamentos','Lançamentos'],['promocoes','Promoções']];
function layoutV2(){
 const NV=[['masculino','Masculino'],['feminino','Feminino'],['lancamentos','Lançamentos'],['acessorios','Acessórios'],['promocoes','Promoções']];
 $('#site-header').innerHTML=`<a class="skip" href="#main">Ir para o conteúdo</a>
 <div class="topbar"><span>Frete grátis para todo Brasil</span><span>Parcelado em até 12x sem juros</span><span>10% OFF na primeira compra</span></div>
 <header class="hdr"><div class="wrap"><a class="logo" href="index.html" aria-label="Word Imports – página inicial"><img src="${A}novo/logo.png" alt="Word Imports"></a>
 <form class="search" role="search" id="hsearch"><input type="search" name="q" placeholder="Digite o seu produto aqui" aria-label="Buscar produtos"><button aria-label="Buscar">🔍</button></form>
 <a class="login-link" href="login.html">👤 <span>Entrar / Cadastrar</span></a>
 <a class="ibtn" href="carrinho.html" aria-label="Carrinho">🛒<span class="badge" id="cartCount" hidden>0</span></a>
 <button class="ibtn burger" id="burger" aria-label="Abrir menu" aria-expanded="false" aria-controls="nav">☰</button></div></header>
 <div class="navrow"><nav class="nav" id="nav" aria-label="Principal">${NV.map(([k,l])=>`<a href="catalogo.html?c=${k}">${l}</a>`).join('')}</nav></div>`;
 $('#site-footer').innerHTML=`<footer class="ftr"><div class="wrap"><div class="fgrid">
 <div><h3>WORD IMPORTS</h3><p>Sua loja de roupas importadas de alta qualidade para toda a família. Estilo, conforto e sofisticação em cada peça.</p><p><a href="#" data-soc="Facebook">f</a> &nbsp; <a href="#" data-soc="Instagram">ig</a> &nbsp; <a href="#" data-soc="Twitter">tw</a></p></div>
 <div><h3>Links Rápidos</h3><ul><li><a href="index.html">Início</a></li><li><a href="ajuda.html">Central de Ajuda</a></li><li><a href="ajuda.html">Formas de Pagamento</a></li><li><a href="login.html">Minha Conta</a></li></ul></div>
 <div><h3>Categorias</h3><ul><li><a href="catalogo.html?c=masculino">Masculino</a></li><li><a href="catalogo.html?c=feminino">Feminino</a></li><li><a href="catalogo.html?c=esporte">Esporte</a></li><li><a href="catalogo.html?c=acessorios">Acessórios</a></li></ul></div>
 <div><h3>Contato</h3><ul><li>Av. Paulista, 1000 - São Paulo, SP</li><li><a href="tel:+551112345678">(11) 1234-5678</a></li><li><a href="mailto:contato@wordimports.com.br">contato@wordimports.com.br</a></li></ul></div></div>
 <small>© 2026 Word Imports. Projeto acadêmico (TCC).</small></div></footer>`;
 $('#burger').onclick=e=>{const o=$('#nav').classList.toggle('open');e.currentTarget.setAttribute('aria-expanded',o)};
 $('#hsearch').onsubmit=e=>{e.preventDefault();const q=e.target.q.value.trim();if(q)location.href='catalogo.html?c=busca&q='+encodeURIComponent(q)};
 $$('[data-soc]').forEach(a=>a.onclick=e=>{e.preventDefault();toast('Perfil no '+a.dataset.soc+' em breve.')});
 updateBadge();
}
function layout(){if($('#site-header'))layoutV2()}

/* ---------- produtos ---------- */
const card=p=>`<article class="card"><img src="${p.img}" alt="${esc(p.name)}" loading="lazy"><div class="in"><h3>${esc(p.name)}</h3>
<div class="stars" aria-label="5 estrelas">★★★★★ <i>(120)</i></div><div class="price">${brl(p.price)}</div><small>ou até 10x de ${brl(p.price/10)}</small>
<button class="btn sm" data-add="${p.id}" aria-label="Adicionar ${esc(p.name)} ao carrinho">Adicionar</button></div></article>`;
document.addEventListener('click',e=>{const b=e.target.closest('[data-add]');if(b){cart.add(b.dataset.add);toast(BY[b.dataset.add].name+' adicionado ao carrinho.')}});

const SUB={camisetas:'m4 m3 m5 m7',camisas:'cs m2 m6 fcs',calcas:'cb cw ct cn m15 m14 m16 m17 fcp fcb fcn f15',blazers:'tm tc m10 m12 tr fb1 fb2 bz',moletons:'m9 m13',jaquetas:'m8 m11 f7 f10 f12',tenis:'te',sociais:'sp',mocassins:'fm',relogios:'rel',cintos:'ci',oculos:'fo',
 vestidos:'f2 f3 f4 f5 f6 f8 f9 f16',blusas:'f11 f14',saias:'f13',selecoes:'e6 e7 e8 e9 e10 e11 e12 e13 e14 e17',clubes:'e15 e18',nba:'e19 e20 e21',jaq:'e22'};
const SIDE={
 masculino:['A moda vai e vem, mais sua essência prevalece.',[['Roupas',[['camisetas','Camisetas'],['camisas','Camisas sociais'],['calcas','Calças de alfaiataria'],['blazers','Blazers'],['moletons','Moletons'],['jaquetas','Jaquetas']]],['Calçados',[['tenis','Tênis casuais'],['esportivos','Tênis esportivos'],['sociais','Sapatos sociais'],['mocassins','Mocassins']]],['Acessórios',[['relogios','Relógios'],['cintos','Cintos'],['oculos','Óculos']]]]],
 feminino:['Com estilo e elegância contemporânea',[['Roupas',[['blusas','Blusas'],['camisas','Camisas'],['blazers','Blazers'],['calcas','Calças'],['vestidos','Vestidos'],['jaquetas','Jaquetas'],['saias','Saias']]],['Calçados',[['tenis','Tênis'],['sandalias','Sandálias'],['scarpins','Scarpins'],['mocassins','Mocassins']]],['Acessórios',[['relogios','Relógios'],['cintos','Cintos'],['oculos','Óculos']]]]],
 esporte:['Looks esportivos de performance.',[['Futebol',[['selecoes','Seleções'],['clubes','Clubes']]],['Basquete',[['nba','Camisas e conjuntos']]],['Agasalhos',[['jaq','Jaquetas']]]]]};
const TAN=new Set('tm cb cw gr sp fb2 fcp fbo'.split(' '));
const pcard=p=>`<article class="pc"><div class="pimg${TAN.has(p.id)?' tan':''}"><img src="${p.img}" alt="${esc(p.name)}" loading="lazy"></div><h3>${esc(p.name)}</h3><div class="price">${brl(p.price)}</div>
<div class="stars" aria-label="Nota 5,0">★★★★★ <i>(${p.id==='fb1'?'4,9':'5,0'})</i></div><button class="btn" data-add="${p.id}" aria-label="Adicionar ${esc(p.name)} ao carrinho">Adicionar</button></article>`;
function catalogo(){
 const u=new URLSearchParams(location.search),c=u.get('c')||'masculino',q=(u.get('q')||'').toLowerCase();
 const T={masculino:'Masculino',feminino:'Feminino',esporte:'Esporte',lancamentos:'Lançamentos',promocoes:'Promoções',acessorios:'Acessórios',calcados:'Calçados',busca:'Resultados para “'+(u.get('q')||'')+'”'}[c]||'Catálogo';
 let list=c==='busca'?P.filter(p=>p.name.toLowerCase().includes(q)):c==='lancamentos'?['m17','f15','e22','e21','f14','m12','e20','f17'].map(i=>BY[i]):c==='promocoes'?P.filter(p=>p.cat!=='retro')
  :c==='acessorios'?[BY.rel,BY.f17,BY.gr,BY.ci]:c==='calcados'?[BY.te,BY.sp]:P.filter(p=>p.cat===c);
 const order=c==='feminino'?['fb1','fb2','fcs','fcp','fcb','fcn','fm','fbo','fo']:['cs','tm','tc','cb','cw','ct','gr','sp','ci'];if(c==='masculino'||c==='feminino')list.sort((a,b)=>(order.indexOf(a.id)+1||99)-(order.indexOf(b.id)+1||99));
 document.title=T+' – Word Imports';
 if(SIDE[c])$('.topbar').innerHTML='<span>ÁREA DE MODA '+T.toUpperCase()+'</span>';
 const side=SIDE[c]?`<aside class="side" aria-label="Filtros"><h1>${T.toUpperCase()}</h1><p class="tag">${SIDE[c][0]}</p>
 <button class="sub on" data-sub="">Todos</button>${SIDE[c][1].map(([g,items])=>`<div class="grp"><span class="pill">${g}</span>${items.map(([k,l])=>`<button class="sub" data-sub="${k}">${l}</button>`).join('')}</div>`).join('')}</aside>`:`<aside class="side"><h1>${T.toUpperCase()}</h1></aside>`;
 $('#main').innerHTML=`<div class="wrap cat${SIDE[c]?'':' nosid'}">${side}<section><p id="cnt" class="cnt" aria-live="polite"></p><div class="pgrid" id="grid"></div></section></div>`;
 const draw=sub=>{const ids=sub?(SUB[sub]||'').split(' '):null,l=ids?list.filter(p=>ids.includes(p.id)):list;
  $('#grid').innerHTML=l.length?l.map(pcard).join(''):'<p class="empty">Em breve novos produtos nesta categoria. <button class="lnk" data-sub="">Ver todos</button></p>';$('#cnt').textContent=l.length+' produto(s)'};
 draw('');
 $('#main').addEventListener('click',e=>{const b=e.target.closest('[data-sub]');if(!b)return;$$('.sub').forEach(x=>{const on=x.dataset.sub===b.dataset.sub;x.classList.toggle('on',on);x.setAttribute('aria-pressed',on)});draw(b.dataset.sub)});
}

/* ---------- carrinho ---------- */
function renderCart(){
 const c=cart.get(),ids=Object.keys(c).filter(i=>BY[i]),box=$('#cartBox');
 if(!ids.length){box.className='cartbox empty-s';box.innerHTML=`<img src="${A}carrinho_1.png" alt=""><h2>Seu carrinho está esperando por você.</h2><p>Parece que você ainda não adicionou nenhum produto.<br>Explore nossa coleção e encontre seu próximo estilo.</p><br><a class="btn" href="catalogo.html?c=masculino">Adicionar itens</a>`;return}
 const q=cart.count(),sub=ids.reduce((s,i)=>s+BY[i].price*c[i],0),r=discountRate(q),d=sub*r;
 box.className='cartbox';box.innerHTML=ids.map(i=>`<div class="line"><img src="${BY[i].img}" alt="${esc(BY[i].name)}"><div><b>${esc(BY[i].name)}</b><div>${brl(BY[i].price)}</div>
 <div class="qty"><button data-q="${i}" data-d="-1" aria-label="Diminuir quantidade">−</button><span aria-live="polite">${c[i]}</span><button data-q="${i}" data-d="1" aria-label="Aumentar quantidade">+</button></div></div>
 <div><b>${brl(BY[i].price*c[i])}</b><br><button class="link" data-rm="${i}">Remover</button></div></div>`).join('')+
 `<div class="sum"><div>Subtotal: ${brl(sub)}</div><div class="ok">${r?`Desconto progressivo (${r*100}%): −${brl(d)}`:'Adicione mais 1 peça e ganhe 10% de desconto.'}</div><div class="tot">Total: ${brl(sub-d)}</div>
 <div><button class="btn ghost sm" id="clr">Esvaziar carrinho</button> <button class="btn" id="fin">Finalizar compra</button></div></div>`;
}
function cartPage(){renderCart();
 $('#cartBox').addEventListener('click',e=>{const t=e.target;
  if(t.dataset.q)cart.change(t.dataset.q,+t.dataset.d);else if(t.dataset.rm)cart.remove(t.dataset.rm);
  else if(t.id==='clr')cart.set({});else if(t.id==='fin'){cart.set({});toast('Pedido realizado com sucesso! (simulação)')}else return;renderCart()})}

/* ---------- validação ---------- */
function field(f,msg){const el=f.closest('label')?.querySelector('.err');f.setAttribute('aria-invalid',!!msg);if(el)el.textContent=msg||'';return !msg}
const okMail=v=>/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v);
function loginPage(){
 let reg=false;const f=$('#lf');
 const sw=()=>{reg=!reg;$('#ttl').textContent=reg?'Criar conta':'Bem-vindo!';$('#sub').textContent=reg?'Preencha os dados para se cadastrar':'Entre com suas credenciais para continuar';
  $('#nmL').hidden=!reg;$('#go').textContent=reg?'Cadastrar':'Entrar';$('#swT').innerHTML=reg?'Já tem uma conta? <button type="button" class="lnk" id="sw">Entre</button>':'Não tem uma conta? <button type="button" class="lnk" id="sw">Cadastre-se</button>';$('#sw').onclick=sw};
 $('#sw').onclick=sw;
 $('#forgot').onclick=()=>dialog('Recuperar senha','<form id="rf" novalidate><label>E-mail<input type="email" name="e" autocomplete="email"><span class="err"></span></label></form>','<button class="btn sm" id="rs">Enviar link</button>');
 document.addEventListener('click',e=>{if(e.target.id==='rs'){const i=$('#rf input');if(field(i,okMail(i.value)?'':'Informe um e-mail válido.')){$('#dlg').close();toast('Enviamos o link de recuperação para '+i.value)}}});
 f.onsubmit=e=>{e.preventDefault();let ok=true;
  if(reg)ok=field(f.nome,f.nome.value.trim().length>=3?'':'Informe seu nome completo.')&&ok;
  ok=field(f.email,okMail(f.email.value)?'':'Informe um e-mail válido.')&&ok;
  ok=field(f.senha,f.senha.value.length>=6?'':'A senha deve ter no mínimo 6 caracteres.')&&ok;
  if(!ok)return;toast(reg?'Conta criada com sucesso!':'Login realizado!');setTimeout(()=>location.href='index.html',900)};
 f.querySelectorAll('input').forEach(i=>i.addEventListener('input',()=>field(i,'')));
}

/* ---------- trocas ---------- */
function trocasPage(){
 $('#ret').onclick=()=>{const d=dialog('Iniciar uma devolução',`<form id="rf" novalidate><label>Número do pedido<input name="p" inputmode="numeric" placeholder="Ex.: 123456"><span class="err"></span></label>
 <label>E-mail da compra<input name="e" type="email"><span class="err"></span></label><label>Motivo<select name="m"><option value="">Selecione</option><option>Tamanho não serviu</option><option>Produto diferente do anunciado</option><option>Defeito</option><option>Desisti da compra</option></select><span class="err"></span></label></form>`,'<button class="btn sm" id="sr">Enviar solicitação</button>');
  $('#sr').onclick=()=>{const f=$('#rf');let ok=true;
   ok=field(f.p,/^\d{4,}$/.test(f.p.value.trim())?'':'Informe o número do pedido (mín. 4 dígitos).')&&ok;
   ok=field(f.e,okMail(f.e.value)?'':'Informe um e-mail válido.')&&ok;ok=field(f.m,f.m.value?'':'Selecione um motivo.')&&ok;
   if(ok){d.close();toast('Solicitação enviada! Você receberá o código de postagem por e-mail.')}}};
 $('#ord').onclick=()=>dialog('Consultar meus pedidos','<p>Entre na sua conta para ver o histórico e acompanhar seus pedidos.</p>','<a class="btn sm" href="login.html">Entrar</a>');
}

/* ---------- ajuda ---------- */
const INFO={ped:['Pedidos & rastreamento','Após o envio, você recebe o código de rastreio por e-mail. Acompanhe pelos Correios ou pela área “Meus pedidos”.'],ent:['Entregas & frete','Frete grátis em compras acima de R$ 299. Prazos de 3 a 10 dias úteis, conforme o CEP.'],pag:['Pagamentos & faturas','Aceitamos Pix, boleto e cartão em até 6x sem juros. Os recibos ficam disponíveis por e-mail.'],per:['Pedidos & perfil','Em “Minha conta” você altera dados pessoais, endereços e senha.'],gui:['Guia & tamanhos','Tabelas de medidas disponíveis em cada produto. Em dúvida entre dois tamanhos, escolha o maior.']};
function ajudaPage(){
 $$('[data-info]').forEach(b=>b.onclick=()=>dialog(...INFO[b.dataset.info]));
 $('#hq').addEventListener('input',e=>{const v=e.target.value.toLowerCase();$$('#faq details').forEach(d=>d.hidden=!d.textContent.toLowerCase().includes(v));$('#none').hidden=$$('#faq details:not([hidden])').length>0});
 $('#chat').onclick=()=>dialog('Chat ao vivo','<p>Nosso atendimento funciona de segunda a sexta, das 9h às 18h. Escreva sua dúvida abaixo.</p><label>Mensagem<textarea rows="3"></textarea></label>','<button class="btn sm" data-close>Enviar</button>');
 $('#mail').href='mailto:suporte@wordimports.com.br?subject=Dúvida';
 $('#tel').href='https://wa.me/551132345678';
}

/* ---------- home ---------- */
function homePage(){$('#best').innerHTML=['rel','bz','te','tr'].map(i=>{const p=BY[i];return `<article><img src="${p.img}" alt="${esc(p.name)}" loading="lazy"><h3>${esc(p.name)}</h3><div class="price">${brl(p.price)}</div><button class="btn" data-add="${p.id}" aria-label="Comprar agora ${esc(p.name)}">Comprar agora</button></article>`}).join('')}

layout();
const pg=document.body.dataset.page;
({catalogo,cart:cartPage,login:loginPage,trocas:trocasPage,ajuda:ajudaPage,home:homePage})[pg]?.();
