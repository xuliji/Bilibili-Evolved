!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports["video/player/legacy-auto-play"]=t():e["video/player/legacy-auto-play"]=t()}(globalThis,(()=>(()=>{"use strict";var e={d:(t,i)=>{for(var o in i)e.o(i,o)&&!e.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:i[o]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t)},t={};e.d(t,{component:()=>d});const i=coreApis.componentApis.define,o=coreApis.componentApis.feeds.api,n=coreApis.componentApis.video.playerAgent,s=coreApis.observer,a=coreApis.spinQuery,l=coreApis.utils,c=coreApis.utils.log,r=coreApis.utils.urls,d=(0,i.defineComponentMetadata)({name:"legacyAutoPlay",displayName:"传统连播模式",description:"模拟传统的多 P 连播策略: 仅连播视频的分 P, 最后 1P 放完禁止连播其他推荐视频.",tags:[componentsTags.video],urlInclude:r.videoUrls,entry:async()=>{const e=(0,c.useScopedConsole)("传统连播模式"),t={enable:[":is(.base-video-sections, .base-video-sections-v1) .next-button",":is(.multi-page, .multi-page-v1) .next-button",".player-auxiliary-autoplay-switch input"],disable:[":is(.recommend-list, .recommend-list-v1) .next-button"]},i=[()=>Boolean(dq(":is(.multi-page, .multi-page-v1) .list-box li.on:last-child")),()=>Boolean(dq(".video-sections-item:last-child .video-episode-card:last-child .video-episode-card__info-playing")),()=>Boolean(dq(".video-sections-item:last-child .video-episode-card:last-child .video-episode-card__info-title-playing"))];await(0,l.playerReady)();const r=await Promise.any([(0,a.select)(".right-container-inner"),(0,a.select)(".playlist-container--right")]);if(!r)return void e.warn("未找到 rightPanelContainer 或 playListContainer");const d=async()=>{const e=await(0,a.select)([...t.disable,...t.enable].join(","));if(!e)return;var o;(t.enable.some((t=>e.matches(t)))&&i.every((e=>!e())))!==(o=e,Boolean(o.querySelector(".switch-button.on")||o.matches(":checked")))&&e.click()},p=async()=>{r.classList.contains("right-container-inner")?d():(async()=>{const e=dq(".list-count").innerHTML.split("/"),t=dq(".action-list .action-list-inner .action-list-item-wrap:last-child .action-list-item .actionlist-item-inner");let i=!1;i=t.classList.contains("singlep-list-item-inner")?t.classList.contains("siglep-active"):t.children[1].lastElementChild.classList.contains("multip-list-item-active");const n=!(e[0]>=e[1]&&i),s=document.getElementById("app");(0,o.getVueData)(s).setContinuousPlay(n)})()};(0,s.videoChange)((async()=>{p();(await n.playerAgent.query.video.element())?.addEventListener("play",p,{once:!0})})),(0,s.childListSubtree)(r,(()=>p()))},commitHash:"d4b6ea0c9609b380edb1315217b4796032db94a3",coreVersion:"2.8.10"});return t=t.component})()));