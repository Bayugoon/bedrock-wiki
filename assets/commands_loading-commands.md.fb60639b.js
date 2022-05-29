import{_ as l,c as r,a as s,w as o,b as e,d as a,e as t,r as i,o as d}from"./404.md.bf142133.js";const N='{"title":"Loading Commands","description":"","frontmatter":{"title":"Loading Commands","category":"Tutorials","mention":["MedicalJewel105","Hatchibombotar"],"tags":["easy"]},"headers":[{"level":2,"title":"Player Join","slug":"player-join"},{"level":2,"title":"First World Load","slug":"first-world-load"}],"relativePath":"commands/loading-commands.md"}',c={},p=e("p",null,"Sometimes when creating an add-on you need to run commands on a players first join or on the first time a world has been loaded. We will go through both.",-1),u=e("h2",{id:"player-join",tabindex:"-1"},[a("Player Join "),e("a",{class:"header-anchor",href:"#player-join","aria-hidden":"true"},"#")],-1),_=e("p",null,[a("In order to check if a new player has joined the world we need to run commands every tick. For this we use "),e("a",{href:"/commands/mcfunction.html#creating-tick-json"},"tick.json"),a(".")],-1),m=e("p",null,"Here is what your file could look like:",-1),h=a("BP/functions/tick.json"),b=t(`<div class="language-json line-numbers-mode"><pre><code><span class="token punctuation">{</span>
    <span class="token property">&quot;values&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token string">&quot;load_commands&quot;</span>
    <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p><code>load_commands</code> is name of our function that is going to check for new players.</p>`,2),g=a("BP/functions/load_commands.mcfunction"),f=t(`<div class="language-"><pre><code>msg @a[tag=!joined] Welcome
tag @a add joined
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>Here the player gets a welcome message. You can swap it out for anything you&#39;d like that targets a player without the joined tag such as teleporting them somewhere, giving them something or spawning an entity. You can also make a delay with scoreboard and tags so player is fully loaded into the world and will see it.</p><h2 id="first-world-load" tabindex="-1">First World Load <a class="header-anchor" href="#first-world-load" aria-hidden="true">#</a></h2><p>Unlike entities, worlds can not be applied tags. Instead we have to use scoreboards. Because of that, it is a bit more complicated.</p>`,4),w=a("BP/functions/tick.json"),y=t(`<div class="language-json line-numbers-mode"><pre><code><span class="token punctuation">{</span>
    <span class="token property">&quot;values&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token string">&quot;load_check&quot;</span>
    <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div>`,1),v=a("BP/functions/load_check.mcfunction"),k=e("div",{class:"language-"},[e("pre",null,[e("code",null,`execute @a[c=1] ~ ~ ~ function load_commands
`)]),e("div",{class:"line-numbers-wrapper"},[e("span",{class:"line-number"},"1"),e("br")])],-1),T=e("p",null,[a("Here, we are running it from one player, this could be from any "),e("strong",null,"entity"),a(" though.")],-1),P=a("BP/functions/load_commands.mcfunction"),j=t(`<div class="language-"><pre><code>scoreboard objectives add loaded dummy
scoreboard players add global loaded 0
scoreboard players operation @s loaded = global loaded
execute @s[scores={loaded=0}] ~ ~ ~ say The world is loaded!
scoreboard players set global loaded 1
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>The above function seems rather complicated, but it is actually quite simple. The first two lines check that a scoreboard called <code>loaded</code> has been created and that a player called <code>global</code> exists on it. The third line copies the value that the player <code>global</code> has. The fourth line executes commands after the world is loaded, and the last line sets the value of loaded to 1.</p>`,2);function C(S,A,V,x,I,q){const n=i("CodeHeader");return d(),r("div",null,[p,u,_,m,s(n,null,{default:o(()=>[h]),_:1}),b,s(n,null,{default:o(()=>[g]),_:1}),f,s(n,null,{default:o(()=>[w]),_:1}),y,s(n,null,{default:o(()=>[v]),_:1}),k,T,s(n,null,{default:o(()=>[P]),_:1}),j])}var H=l(c,[["render",C]]);export{N as __pageData,H as default};