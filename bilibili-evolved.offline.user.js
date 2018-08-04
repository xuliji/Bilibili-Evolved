// ==UserScript==
// @name         Bilibili Evolved (Offline)
// @version      19.00
// @description  增强哔哩哔哩Web端体验.(离线版)
// @author       Grant Howard
// @match        *://*.bilibili.com/*
// @match        *://*.bilibili.com
// @updateURL    https://github.com/the1812/Bilibili-Evolved/raw/master/bilibili-evolved.offline.user.js
// @downloadURL  https://github.com/the1812/Bilibili-Evolved/raw/master/bilibili-evolved.offline.user.js
// @supportURL   https://github.com/the1812/Bilibili-Evolved/issues
// @homepage     https://github.com/the1812/Bilibili-Evolved
// @grant        unsafeWindow
// @grant        GM_getValue
// @grant        GM_setValue
// @require      https://code.jquery.com/jquery-3.2.1.min.js
// @icon         data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALQAAAC0CAYAAAA9zQYyAAAACXBIWXMAAAsTAAALEwEAmpwYAAAH0mlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDIgNzkuMTYwOTI0LCAyMDE3LzA3LzEzLTAxOjA2OjM5ICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdEV2dD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlRXZlbnQjIiB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgKFdpbmRvd3MpIiB4bXA6Q3JlYXRlRGF0ZT0iMjAxOC0wMi0yNVQxNDo1NzozOCswODowMCIgeG1wOk1ldGFkYXRhRGF0ZT0iMjAxOC0wMi0yNVQxNDo1NzozOCswODowMCIgeG1wOk1vZGlmeURhdGU9IjIwMTgtMDItMjVUMTQ6NTc6MzgrMDg6MDAiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6ODY3MDMzY2UtZjdlMy0wYTRiLWE5YWItODE3ZTI2ZmNlYTMyIiB4bXBNTTpEb2N1bWVudElEPSJhZG9iZTpkb2NpZDpwaG90b3Nob3A6YWFhN2UzZTQtM2MzOS0yOTQ4LWI1OTgtYTEzM2ZjMTMxNDMyIiB4bXBNTTpPcmlnaW5hbERvY3VtZW50SUQ9InhtcC5kaWQ6YjRjNGFjZWUtZjQyYS0yMTQwLTlmMzgtY2NlZTc3YmY2ZTM1IiBkYzpmb3JtYXQ9ImltYWdlL3BuZyIgcGhvdG9zaG9wOkhpc3Rvcnk9IjIwMTgtMDItMjVUMTQ6NTc6MTArMDg6MDAmI3g5O+aWh+S7tiDmnKrmoIfpopgtMiDlt7LmiZPlvIAmI3hBO+W7uueriyYjeDk75paw5bu6OiDmlofmoaMmI3hBO0ZBTFNFJiN4QTvmqKHlvI86IFJHQiDpopzoibLmqKHlvI8mI3hBO+WuveW6pjogMi41IOiLseWvuCYjeEE76auY5bqmOiAyLjUg6Iux5a+4JiN4QTvmr4/oi7Hlr7gg5YiG6L6o546HOiA3MiYjeEE75YOP57Sg6ZW/5a695q+UOiAxJiN4QTvloavlhYU6IOmAj+aYjiYjeEE75rex5bqmOiA4JiN4QTvphY3nva7mlofku7Y6IOKAnG5vbmXigJ0mI3hBO+WPguiAg+e6vzog5pegJiN4QTsyMTcmI3hBOyYjeEE757KY6LS0JiN4QTvnspjotLQmI3g5O+a2iOmZpOmUr+m9vzog5pegJiN4QTvkuLo6IOWDj+e0oCYjeEE7JiN4QTsyMDE4LTAyLTI1VDE0OjU3OjM4KzA4OjAwJiN4OTvmlofku7YgQzpcVXNlcnNcVGhlMThcUGljdHVyZXNcR3JhcGhpY3NcYmlsaWJpbGkgbG9nbyBzbWFsbC5wbmcg5bey5a2Y5YKoJiN4QTvlrZjlgqgmI3g5OyIgcGhvdG9zaG9wOkNvbG9yTW9kZT0iMyI+IDx4bXBNTTpIaXN0b3J5PiA8cmRmOlNlcT4gPHJkZjpsaSBzdEV2dDphY3Rpb249ImNyZWF0ZWQiIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6YjRjNGFjZWUtZjQyYS0yMTQwLTlmMzgtY2NlZTc3YmY2ZTM1IiBzdEV2dDp3aGVuPSIyMDE4LTAyLTI1VDE0OjU3OjM4KzA4OjAwIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3AgQ0MgKFdpbmRvd3MpIi8+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJzYXZlZCIg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
// ==/UserScript==
(self$ =>
{
    const $ = unsafeWindow.$ || self$;
    const settings = {
        removeAds: true,
        touchNavBar: false,
        touchVideoPlayer: false,
        watchLaterRedirect: true,
        expandDanmakuList: true,
        customStyleColor: "#00A0D8",
        blurBackgroundOpacity: 0.382,
        overrideNavBar: true,
        showBanner: true,
        useDarkStyle: false,
        useNewStyle: true
    };
    function loadSettings()
    {
        for (const key in settings)
        {
            settings[key] = GM_getValue(key, settings[key]);
        }
        settings.guiSettings = true;
    }
    function saveSettings(newSettings)
    {
        for (const key in settings)
        {
            GM_setValue(key, newSettings[key]);
        }
    }

    class SpinQuery
    {
        constructor(query, condition, action, onFailed)
        {
            this.maxRetry = 30;
            this.retry = 0;
            this.queryInterval = 500;
            this.query = query;
            this.condition = condition;
            this.action = action;
            this.onFailed = onFailed;
        }
        start()
        {
            this.tryQuery(this.query, this.condition, this.action, this.onFailed);
        }
        tryQuery(query, condition, action, onFailed)
        {
            if (this.retry >= this.maxRetry)
            {
                if (onFailed)
                {
                    onFailed();
                }
            }
            else
            {
                const result = query();
                if (condition(result))
                {
                    action(result);
                }
                else
                {
                    this.retry++;
                    setTimeout(() => this.tryQuery(query, condition, action, onFailed), this.queryInterval);
                }
            }
        }
        static any(query, action)
        {
            new SpinQuery(query, it => it.length > 0, action).start();
        }
        static count(query, count, action)
        {
            new SpinQuery(query, it => it.length === count, action).start();
        }
    }
    class ExternalResource
    {
        static get resourceUrls()
        {
            const root = "https://raw.githubusercontent.com/the1812/Bilibili-Evolved/master/";
            const urls = {
                style: "style/style.min.scss",
                oldStyle: "style/style-old.min.scss",
                darkStyle: "style/style-dark.min.scss",
                touchPlayerStyle: "style/style-touch-player.min.scss",
                navbarOverrideStyle: "style/style-navbar-override.min.css",
                noBannerStyle: "style/style-no-banner.min.css",
                removeAdsStyle: "style/style-remove-promotions.min.css",
                guiSettingsStyle: "style/style-gui-settings.min.scss",
                guiSettingsDom: "utils/gui-settings.html",
                guiSettings: "utils/gui-settings.js",
                useDarkStyle: "style/dark-styles.min.js",
                useNewStyle: "style/new-styles.min.js",
                touchNavBar: "touch/touch-navbar.min.js",
                touchVideoPlayer: "touch/touch-player.min.js",
                expandDanmakuList: "utils/expand-danmaku.min.js",
                removeAds: "utils/remove-promotions.min.js",
                watchLaterRedirect: "utils/watchlater.min.js"
            };
            for (const key in urls)
            {
                urls[key] = root + urls[key];
            }
            return urls;
        }
        constructor()
        {
            this.data = {};
            this.ajaxReload = [
                "touchVideoPlayer",
                "watchLaterRedirect",
                "expandDanmakuList"
            ];
           this.offlineData = {};
this.offlineData["https://raw.githubusercontent.com/the1812/Bilibili-Evolved/master/style/style.min.scss"] = `.bili-wrapper{display:flex!important;justify-content:center!important;align-items:center!important;height:50px!important;}.bili-header-m>.nav-menu{background:rgb(0,86,177)!important;box-shadow:rgba(17,81,150,0.48) 0px 2px 10px 1px!important;background:$customStyleColorff!important;box-shadow:$customStyleColor70 0px 2px 10px 1px!important;}div.stardust-player{background:#fff!important;}.nav-mask{background-color:transparent!important;box-shadow:none!important;}.nav-con{flex-grow:10!important;flex-shrink:0!important;}.nav-con.fl{margin-left:-2em!important;}.bili-header-m .nav-menu .nav-con .nav-item .t{color:#effbff!important;color:$foregroundd!important;}li.nav-item:hover{background-color:hsla(0,0%,$brightness,.2)!important;}li.nav-item.home:hover{background:transparent!important;}.vip-m{background:white!important;}a.t>i.bili-icon-logo,a.t>i.bili-icon{filter:grayscale(100) brightness($filterBrightness) saturate(0)!important;width:50px!important;left:-60px!important;top:0px!important;height:50px!important;opacity:0.81!important;background-position-y:12px!important;}#entryOld,.nav-search-submit,.b-icon-app,.title-icon{display:none!important;}.i-face>.face{border:1.5px solid #fff!important;border:1.5px solid #fff3!important;margin-top:-1px!important;}div.up-load{margin-left:9px!important;height:32px!important;order:4!important;flex-grow:0;flex-shrink:0;}.u-link{background-image:none!important;background-color:#D5E3F2!important;border:1px solid #effbff!important;color:#effbff!important;background:transparent!important;color:$foregroundd!important;border-radius:4px!important;line-height:30px!important;height:30px!important;border:1px solid $foregroundb!important;transition:background-color .2s!important;}.u-link:hover{opacity:1!important;background-color:hsla(0,0%,$brightness,.2)!important;}.nav-search{width:130px!important;}.nav-search-keyword{width:120px!important;}#nav_searchform{background-image:none!important;background-color:#D5E3F2!important;margin-top:0.1rem!important;border-radius:4px!important;background:#fffb!important;border:none!important;transition:background-color .2s!important;box-shadow:0px 2px 10px 1px #0002;}#nav_searchform:hover{background-color:#fff!important;}#bilibiliPlayer{box-shadow:0px 10px 30px 5px #D0E4EC!important;box-shadow:0px 10px 30px 5px $customStyleColor40!important;}.blur-bg{opacity:$blurBackgroundOpacity!important;filter:blur(20px)!important;}.cancel{width:28px!important;}ul.bilibili-suggest{margin-left:-35px!important;width:200px!important;}li.suggest-item>a{max-width:155px!important;}div.num{border:1px solid #fff8!important;}#primary_menu,#primary_menu>ul.nav-menu{display:flex!important;align-items:center!important;}div.nav-gif,#primary_menu{padding:0!important;}.filter-item.search{margin:0!important;}.input-box textarea{padding:8px!important;}@media only screen and (min-width: 1291px){.nav-con{margin:0 1em!important;}.bilibili-suggest.nav,.nav-search{width:250px!important;}.nav-search-keyword{width:240px!important;}ul.bilibili-suggest{margin-left:0px!important;width:250px!important;}li.suggest-item>a{max-width:205px!important;}}::-webkit-scrollbar{width:5px!important;height:5px!important;}::-webkit-scrollbar-corner,::-webkit-scrollbar-track{background:transparent!important;}::-webkit-resizer,::-webkit-scrollbar-thumb{background:#aaa!important;}::-webkit-scrollbar-thumb:hover{background:#888!important;}`;
this.offlineData["https://raw.githubusercontent.com/the1812/Bilibili-Evolved/master/style/style-old.min.scss"] = `.bili-header-m>.nav-menu{background:rgb(0,86,177)!important;box-shadow:rgba(17,81,150,0.48) 0px 2px 10px 1px!important;background:$customStyleColorff!important;box-shadow:$customStyleColor70 0px 2px 10px 1px!important;}.nav-mask{background-color:transparent!important;box-shadow:none!important;}.bili-header-m .nav-menu .nav-con .nav-item .t{color:#effbff!important;color:$foregroundd!important;}li.nav-item:hover{background-color:hsla(0,0%,$brightness,.2)!important;}.vip-m{background:white!important;}a.t>i.bili-icon{filter:grayscale(100) brightness($filterBrightness) saturate(0)!important;background-image:url(https://www.bilibili.com/favicon.ico)!important;background-size:cover!important;background-position:inherit!important;width:16px!important;height:16px!important;opacity:0.81!important;left:0!important;}#entryOld,.nav-search-submit,.b-icon-app,.title-icon{display:none!important;}.i-face>.face{border:1.5px solid #fff!important;border:1.5px solid #fff3!important;margin-top:-1px!important;}div.up-load{margin:5px 0 0 5px!important;height:32px!important;}.u-link{background-image:none!important;background-color:#D5E3F2!important;border:1px solid #effbff!important;color:#effbff!important;background:transparent!important;color:$foregroundd!important;border-radius:4px!important;line-height:30px!important;height:30px!important;border:1px solid $foregroundb!important;transition:background-color .2s!important;}.u-link:hover{opacity:1!important;background-color:hsla(0,0%,$brightness,.2)!important;}.nav-search{width:140px!important;}.nav-search-keyword{width:130px!important;}#nav_searchform{background-image:none!important;background-color:#D5E3F2!important;margin-top:0.1rem!important;border-radius:4px!important;background:#fffb!important;border:none!important;transition:background-color .2s!important;box-shadow:0px 2px 10px 1px #0002;}#nav_searchform:hover{background-color:#fff!important;}#bilibiliPlayer{box-shadow:0px 10px 30px 5px #D0E4EC!important;box-shadow:0px 10px 30px 5px $customStyleColor40!important;}.blur-bg{opacity:$blurBackgroundOpacity!important;filter:blur(20px)!important;}.cancel{width:28px!important;}ul.bilibili-suggest{margin-left:-30px!important;width:200px!important;}li.suggest-item>a{max-width:155px!important;}div.num{border:1px solid #fff8!important;}#primary_menu,#primary_menu>ul.nav-menu{display:flex!important;align-items:center!important;}div.nav-gif,#primary_menu{padding:0!important;}.up-nav{top:37px!important;}.filter-item.search{margin:0!important;}.input-box textarea{padding:8px!important;}@media only screen and (min-width: 1291px){.bilibili-suggest.nav,.nav-search{width:250px!important;margin-right:72px!important;}.nav-search-keyword{width:240px!important;}ul.bilibili-suggest{margin-left:0px!important;width:250px!important;}li.suggest-item>a{max-width:205px!important;}}::-webkit-scrollbar{width:5px!important;height:5px!important;}::-webkit-scrollbar-corner,::-webkit-scrollbar-track{background:transparent!important;}::-webkit-resizer,::-webkit-scrollbar-thumb{background:#aaa!important;}::-webkit-scrollbar-thumb:hover{background:#888!important;}`;
this.offlineData["https://raw.githubusercontent.com/the1812/Bilibili-Evolved/master/style/style-dark.min.scss"] = `body,html,p.num,.bili-header-m.report-wrap-module,.bili-footer,.footer-wrp,div.box,div.live-box,div.bubble-traditional,div.dd-bubble,div.ver span.tips,div.desc-tips,div.member-bottom,div.im-list-box,div.i-frame,.dynamic-m,ul.dyn_list,.history-tag,div.dyn_list_wrapper,ul.up-nav,ul.up-nav li,span.date,ul.bilibili-suggest,.b-line>p>span,.sub-nav,.video-info-module,div.stardust-player,div.danmaku-wrap,div.bilibili-player-auxiliary-area,.bilibili-player-danmaku-date-picker-container,.video-toolbar .share .share-pos .share-address ul li input,li.tag,.btn-add,form.ipt,.tag-info-pane,.bangumi-info-module,.bb-comment,.user-card-m,textarea,.bb-comment .hot-line span,.page-jump>input,.bilibili-player-video-control,.bilibili-player-video-sendbar,.bilibili-player-video-inputbar,.bilibili-player-video-progress-detail-time,.bilibili-player.mode-fullscreen .bilibili-player-area .bilibili-player-video-control .bilibili-player-video-btn.bilibili-player-video-btn-widescreen,.bilibili-player-video-volumebar-wrp,.bpui-selectmenu-list,.bpui-selectmenu-list-row[data-selected],.bilibili-player-video-time-seek,.user-card,.emoji-box,.emoji-tabs,.bilibili-player-video-btn-setting-panel,.bilibili-player-video-danmaku-setting-box,.bilibili-player-video-danmaku-setting-left,.bilibili-player-video-danmaku-setting-right,.bui-select-list,.bilibili-player-mode-selection-container,.mode .selection-span,.bilibili-player-color-picker-container,.bilibili-player-color-picker-color-code,.bilibili-player-block-string-short,.bilibili-player-block-line,.bilibili-player-modal-container,.bpm-btn,.bui-input-input,.bui-select .bui-select-border,.advanced-danmaku-group .adv-danmaku-btn-span,.advanced-danmaku-group .adv-danmaku-btn-span.bpui-button-type-small,.bui-input-wrap-disabled,.bilibili-player-block-tabpanel .bilibili-player-block-tabpanel-row.bilibili-player-border,.multi-page .cur-list li.on,.multi-page .cur-list li.on:hover,.collection-m,.coin-operated-m,.follow-dialog-window,form.searchform:hover,#app,.home-page .back-top,.repost,.not-support,.deleted,.video-container,.article-container,.imagesbox .boost-control,.history-list .r-info,.dynamic-link-hover-bg:hover,.dynamic-btn.pink.disabled,.sticky-bar,.card .focus-btn .unfocus,.bangumi-container,.textarea-container .comm-tool .comm-emoji,.emoji,.pagination,.userinfo-content,.watch-later-list header .d-btn,.tab-contain,.card .focus-btn .focus,.page-container,.right-side-bar .to-comment .comment-num,.music-container .image-area .share-img,.music-container .text-area,div.con,.audiolist-list .song-list .song-li .content .text,.audio-info-module,.audio-list .song-list .song-li .content .text,.multi-page .more-box,.h5share-container .text-area,.g-search input,.list-create,.wrapper .modal-body .choice-wrp .battery,.wrapper .modal-body .choice-wrp .battery-desp input,.be-dropdown-menu,.small-item .cover,.disabled-cover,#id-card,#page-video #submit-video-type-filter,.be-pager-options-elevator input[type=text],.be-pager-item,.be-pager-next,.be-pager-prev,.contribution-sidenav .contribution-item:hover,.my-album .tab-list,#page-setting #setting-new-tag,.imagesbox .boost-img,.bui-slider .bui-track.bui-track-video-progress .bui-bar-wrap,.gui-settings-box,.predefined-colors,#page-fav .fav-sidenav .fav-item:hover,#page-fav .fav-sidenav .icon-cursor,.space-right,.modal-wrapper,.bottom .content,.action-menu .menu-list,.action-menu .menu-list:before,.list-item:hover,.list-item.active,.emoji-box:after,.emotion-box,.emotion-box:after,.live-container,.img-content,.follow-sidenav .follow-list-container .follow-item:hover,.fans-action-follow,.fans-action-btn,#page-setting .setting-tag-list a,#pin-wrapper #pin-layer,.select-wrap .select-txt,.select-wrap .select-option,.card .more-panel,.card .more-panel:after,.bl-button--ghost,.wrapper .pay-qrcode-wrp .pay-way-wrp .pay-btn,.wrapper .content,.comment-bilibili-con{background-color:#222!important;}.back-top,.sortable,.nav-list,.more-link,.read-push,.link-more,.rank-item>.ri-num,p.update>span>a,.bili-dropdown,.dropdown-list,.c-clink,a.more,a.im-list:hover,li.d-data:hover,a.read-more,ul.up-nav li:hover,.bili-header-m .mini-wnd-nav .list li:hover,li.suggest-item:hover,.sub-nav li:hover,.num-tip,.btn.followed .b-gz,.up-info .btn .b-cd,.bilibili-player-danmaku-function,.bilibili-player-danmaku-btn-time,.bilibili-player-danmaku-btn-danmaku,.bilibili-player-danmaku-btn-date,.bilibili-player-danmaku-wrap,.mCSB_draggerRail,.bilibili-player-danmaku-btn-history,.more-ops-list,.app-look,.video-toolbar .share .share-pos,.bilibili-player-context-menu-container,.tag-info-pane .tag-header .btn-subscribe,.tag-info-pane .tag-header .btn-unsubscribe,.notice-item,.btn-box .liked,.btn-box .like,.btn-box .message,.follow-btn,.paging-box-big .tcd-number,.paging-box-big .next,.float-nav .nav-menu .item,div.drag-bar,.bpui-slider-tracker,.bilibili-player-video-progress-buffer,.bilibili-player-setting-menu-wrap,.bilibili-player-setting-menu-list,.opera-list,.tab-link.on,.emoji-text:hover,.bui-radio .bui-radio-button .bui-radio-label,.bpui-selectmenu-list-row:hover,.bpui-button.bpui-button-type-small,.fontsize .selection-span,.bilibili-player-filter-wrap.bilibili-player-block,.recommend-list .rec-footer,.bilibili-player-block-line:hover,.bilibili-player-modal-btns .bpm-btn,.bilibili-player-adv-danmaku,.multi-page,.video-page-card .card-box .pic-box,.add-btn,.collection-m .bottom .btn.disable,a.s-btn,.user-panel,.tag-panel,.section-block,.publish-panel,.tab-bar,.card,.notice-panel,.history-btn>.btn,.go-top.tag-panel .more-button .more:hover,a.more.tc-slate:hover,.bp-popup-panel,.comment-area,.comment-area .comm-main .comm-list .hot-line >span,.comment-area .comm-more a.more:hover,.emoji:hover,.emoji-cover.selected,.page-controller .prev:hover,.page-controller .next:hover,.bg-white,.feed-card .empty-content,.forw-area,.live-panel,.paging-box-big .dian,.feed-tag .publish-panel-container,.go-top-m .go-top,.right-side-bar .to-comment,.right-side-bar .to-top,.up-info-holder .fixed-box .rightside-article-list-btn,.article-list-holder-block .article-list-plane,.btn-cancel,.n .n-inner,#page-index .col-1,#page-index .col-2 .section,.wrapper .modal-header .u-info,#page-index .album .content .album-wrapper .album-item .album-top,.be-dropdown-item:hover,.elec .elec-status,.btn.default,.col-full,#page-dynamic .col-2 .section,#page-channel-index .channel-option.no-channel,#page-setting .setting-index-module,.btn.ghost,.bili-header-m .profile-m .grade .bar,.video-page-card .card-box .info .pre-mask,.bui-button.bui-button-transparent,.bb-comment .comment-list .quote,.wrapper .edit-video-modal .target-favlist .target-favitem:hover,#page-fav .fav-main .search-input input,.space-left,.space-right .space-right-top .title,.card .box,.message-list,.send-box,.emoji-box .emoji-item:hover,.emotion-item:hover .img,.link-progress-tv,.ps.ps--in-scrolling.ps--y>.ps__scrollbar-y-rail,.ps.ps--in-scrolling.ps--x>.ps__scrollbar-x-rail,.ps:hover.ps--in-scrolling.ps--y>.ps__scrollbar-y-rail,.ps:hover.ps--in-scrolling.ps--x>.ps__scrollbar-x-rail,.ps:hover>.ps__scrollbar-y-rail:hover,.ps:hover>.ps__scrollbar-x-rail:hover,.fans-medal-item .level,#page-follows .follow-main .follow-action-bottom .follow-action-fixtop,#pin-wrapper #pin-layer-search,.be-input_inner,.ban-modal,.ban-modal-h5,.select-wrap .select-option p:hover,.wrapper .elec-btn.disabled,.wrapper .pay-qrcode-wrp .pay-way-wrp .pay-btn.active,.up-article-list-block .more-article,.slim-video-card .video-info,.dyn_list li .preview{background-color:#444!important;}.brief a:hover,div.brief>a:hover,div.all>a:hover,.live-lr .banner a:hover,.bui-collapse-header,.bilibili-player-filter,.bpui-selected span,.bpui-selected,.bpui-unselecting,.bpui-selecting,.bpui-selecting>span,.context-menu-a:hover,.danmaku-info-report-btn,.danmaku-info-block-btn,.btn-box .message:hover,.bui-switch .bui-body,li.context-menu-descipline a,.bui-select .bui-select-item:hover,.multi-page .cur-list li:hover,.article-list-holder-block .article-list-plane .button:hover,.btn-cancel:hover,.btn.default:hover,.be-switch{background-color:#555!important;}.btn-add span,.bui-bar-wrap,.bui-step-dot,.ps>.ps__scrollbar-y-rail>.ps__scrollbar-y,.ps>.ps__scrollbar-x-rail>.ps__scrollbar-x{background-color:#aaa!important;}.bpui-slider-handle{background-color:#eee!important;}.bilibili-player-video-inputbar,#app,body,.wrapper .modal-header,.large-item .cover{background-image:none!important;}.bilibili-player-color-picker-mask,.bilibili-player-advanced-danmaku-control-container.mask:after,.elevator-module .nav-bg{background-color:#222e!important;}.my-info .info-modal .integral li .num,.article-holder img,.article-holder .cover-default{background-color:transparent!important;}.bilibili-player-video-sendbar .bilibili-player-video-inputbar{background:#fff1!important;}.bili-footer a,a.pic>p.title,div.desc-tips,div.r.p>div.info,a.message,div.desc,.btn.followed .b-gz,span.copyright,.danmaku-info-row,.bilibili-player-danmaku-btn-time,.bilibili-player-danmaku-btn-danmaku,.bilibili-player-danmaku-btn-date,.bilibili-player-danmaku-date-picker-header,.bilibili-player-danmaku-date-picker-btn,.day-span,.video-toolbar .ops span,.video-toolbar .share .share-btn,.video-toolbar,li.tag,.tag-info-pane .tag-footer .btn-left-box>a,.video-desc .btn span,li.tag>a,.tag-info-pane .tag-header .btn-unsubscribe,span.disabled,.btn-box .liked,.info .sign,span.like span,span.hate span,.bb-comment .comment-list .list-item .info .plad a,.float-nav .nav-menu .item,div.drag-bar,.bilibili-player-block-filter-label,.bilibili-player-block-filter-image,.mode .selection-span,.recommend-list .rec-footer,.bilibili-player-block-list-function>div,.bilibili-player-block-line.block-state-disabled,.bilibili-player-block-line-delete,.bilibili-player-block-empty,.collection-m .bottom .btn.disable,.looked,.history-list .r-info .w-info .name,.history-list .r-info .w-info .pro-txt,.history-list .l-info .lastplay-time .lastplay-t,.tc-slate,.more-button,.boost-control li,.boost-control li i,.dynamic-list-item-wrap .item-user a.user-name,.dynamic-list-item-wrap .item-user a.user-name.vip,.textarea-container .comm-tool .comm-transpond,.dynamic-list-item-wrap .info >span,.page-controller .prev.disabled,.page-controller .next.disabled,.forw-area .forw-more a,.watch-later-list header .d-btn,.tab-list .tb-item,.dynamic-list-item-wrap .view-more,.comment-area .comm-main .comm-list .hot-line >span,.up-info-block .up-info-right-block .row-2,.up-info-block .up-info-right-block .fans-num,.up-info-block .up-info-right-block .view-num,blockquote,blockquote *,blockquote .color-blue-01,blockquote .color-blue-02,blockquote .color-blue-03,blockquote .color-blue-04,blockquote .color-gray-01,blockquote .color-gray-02,blockquote .color-gray-03,blockquote .color-green-01,blockquote .color-green-02,blockquote .color-green-03,blockquote .color-green-04,blockquote .color-lblue-01,blockquote .color-lblue-02,blockquote .color-lblue-03,blockquote .color-lblue-04,blockquote .color-pink-01,blockquote .color-pink-02,blockquote .color-pink-03,blockquote .color-pink-04,blockquote .color-purple-01,blockquote .color-purple-02,blockquote .color-purple-03,blockquote .color-purple-04,blockquote .color-yellow-01,blockquote .color-yellow-02,blockquote .color-yellow-03,blockquote .color-yellow-04,.article-action .coin-btn .info-block span,.article-action .fav-btn .info-block span,.article-action .like-btn .info-block span,.article-action .share-btn .info-block span,.right-side-bar .to-comment .comment-num,.up-info-holder .fixed-box .rightside-article-list-btn .title,.article-list-holder-block .article-list-plane .button .title,.article-list-holder-block .article-list-plane .button.off .label,.multi-page .head-con .range-box .paging li,.multi-page .more-box li,.multi-page .head-con .range-box i,.n .n-data .n-data-k,.sec-empty-hint,#page-index .channel .empty-state p,.private-hint,#page-index .col-2 .section .user-auth.no-auth .no-auth-title span,.section .operation,.i-live .i-live-unfo-btn,.i-live .i-live-fo-count,.elec .elec-status,.disabled-cover,.be-pager-item a,.be-pager-next a,.be-pager-prev a,.be-pager-item-jump-next,.be-pager-item-jump-prev,.be-pager-next,.be-pager-prev,.be-pager-options-elevator,.be-pager-total,.tabs a,#id-card .idc-auth-description,#page-fav .fav-sidenav .nav-title .text,#page-fav .fav-main .fav-meta,#page-fav .fav-main .filter-item .filter-type .be-dropdown-item i,.wrapper .edit-video-modal .edit-video-subtitle,.wrapper .edit-video-modal .target-favlist .target-favitem.disabled span,.wrapper .edit-video-modal .target-favlist .target-fav-count,.side-bar .list .item,.top .time,.bottom .text,.list .list-title,.medal-box,.no-more,.msg-more,.i-pin-meta,.i-pin-desc,.article-con,.follow-sidenav .num,.list-item .desc,.fans-action-follow,.list-item .auth-description,.follow-main .follow-action-bottom .select-counter,.n .n-num,.bangumi-rank-list .rank-item .ri-total,.pub-list .info .type .bk-title,.pub-list .info dl dt,.pub-list .info .comment,.report-con dl dt,.wrapper .modal-body .elec-bcoin,.wrapper .modal-body .elec-protocol,.wrapper .modal-body .elec-protocol a,.wrapper .pay-qrcode-wrp .refresh-btn,.wrapper .pay-qrcode-wrp .pay-way-wrp .pay-btn,.bilibili-player-video-info,.slim-video-card .video-info .col,.slim-video-card .video-info .col-2,.comment-bilibili-con .reason-box dl dt{color:#aaa!important;}.bili-dropdown,.dropdown-list,a.side-link>span,h3,p.ri-title,p.t,a.name,div.bili-tab-item,.sortable,.nav-name,.more-link,.read-push,.link-more,.customize,div.r-text>.t,.c-clink,div.brief>a>span,div.all>a>span,.lf-item p,a.more,a.recommand-link,a.logout,.member-menu a,.btns-profile span,div.bar>div.num>div,div.grade span,div.lv-row>strong,a.im-list,.dynamic-m a,a.read-more,.bili-header-m .mini-wnd-nav a,.suggest-item a,.sub-nav span,.v-title,.video-title,a.username,.bi-btn,.up-info .btn .b-cd,div.info,div.title a,div.b-head,div.rec-title,.bui-collapse-arrow,.bilibili-player-filter-title,.bilibili-player-filter-menu,.danmaku-info-report-btn,.danmaku-info-block-btn,.danmaku-info-danmaku,.bilibili-player-danmaku-btn-history,.day-span.day-enable,.more-ops-list,.app-look,.video-toolbar .share .share-pos .share-address ul li input,.context-menu-a,form.ipt>input,.tag-title>a,.tag-info-pane .text,.tag-info-pane .tag-header .btn-subscribe,.tag-info-pane .btn-right-box a,.bangumi-info-module .v-preview .title,.bb-comment .reply-notice .notice-item a,.bb-comment .comment-header .tabs-order li,.result,.tcd-number,.next,.info .social a,.btn-box .like,textarea,.comment-emoji,p.text,.bb-comment .hot-line span,.page-jump>input,.follow-btn,.paging-box-big .tcd-number,.paging-box-big .next,.bilibili-player-video-btn:hover,.bilibili-player-video-danmaku-input,.bilibili-player-video-btn:hover .bilibili-player-iconfont,.bilibili-player-video-progress-detail-time,.bpui-selectmenu-list-row,.bilibili-player-video-time-seek,.bilibili-player-setting-menu-list,.opera-list,.emoji-text,.bilibili-player-video-btn-setting-panel-playtype-title,.bui-radio-label .bui-radio-text,.bui-checkbox-name,.bilibili-player-video-danmaku-setting-left-block-title,.bilibili-player-video-danmaku-setting-left-more-text,.bilibili-player-video-danmaku-setting-right,.bilibili-player-video-danmaku-setting-right-more,.bpui-button.bpui-button-type-small,.bilibili-player-video-danmaku-setting-left-area-title,.bilibili-player-video-danmaku-setting-left-block-title,.bilibili-player-video-danmaku-setting-left-fontsize-title,.bilibili-player-video-danmaku-setting-left-opacity-title,.bilibili-player-video-danmaku-setting-left-speedplus-title,.row-title,.fontsize .selection-span,.bilibili-player-color-picker-color-code,.bilibili-player-block-label,.text-con,.bilibili-player-block-string-short,.bilibili-player-block-tabpanel-row .bilibili-player-block-type-keyword,.bilibili-player-block-tabpanel-row .bilibili-player-block-type-regex,.bilibili-player-block-tabpanel-row .bilibili-player-block-type-user,.bilibili-player-block-line,.bilibili-player-modal-title,.bilibili-player-modal-info,.bilibili-player-modal-btns .bpm-btn,.advanced-danmaku-group .content-span,.bui-input-input,.bui-select .bui-select-border,.advanced-danmaku-group .adv-danmaku-pos-row .pos-span,.advanced-danmaku-group .adv-danmaku-pos-row .axias-span,.advanced-danmaku-group .adv-danmaku-btn-span,.bui-input-wrap-disabled,a.router-link-active,a.router-link-exact-active,.multi-page .cur-list li:hover,.collection-m .title,.content .group-list li,.content .group-list li label .count,.add-btn,.coin-operated-m .coin-title,.follow-dialog-window .title,.watch-later-list header .t,.watch-later-list .list-box .av-item .av-about .t,a.s-btn,span.key,form.searchform:hover input,.tc-black,.history-wrap  .b-head .b-head-t,.history-btn>.btn,.history-list .r-info .title,.history-list .r-info .w-info .username,.user-name a,.content,.video-container .text-area .title,.sticky-bar .bar-content .title,.home-page .sticky-bar .bar-content .message,.bp-popup-panel .title-ctnr .popup-title,.comment-area .comm-main .comm-tabs >ul >li,.card .focus-btn .unfocus .unfocus-text,.bangumi-container .text-area .title,.emoji-box .title,.emoji,.emoji-cover.selected,.emoji-cover,.page-controller .prev,.page-controller .next,.dynamic-list-item-wrap .item-detail .text,.userinfo-content,.tc-dark-slate,.article-container .text-area .title,.paging-box-big .dian,.feed-tag .separater-line,.nav-tab-bar .tab-item span,a.up-name,.up-info-holder .fixed-box .more .top-bar,.up-info-holder .fixed-box .more .help .title,.up-info-holder .fixed-box .more .link .title,.title-container .title,.article-holder,.article-holder .color-default,.article-holder h1,.article-action .coin-btn .info-block label,.article-action .fav-btn .info-block label,.article-action .like-btn .info-block label,.article-action .share-btn .info-block label,.up-info-holder .fixed-box .rightside-article-list-btn .label,.up-info-holder .fixed-box .up-article-list-block .block-title,.article-list-holder-block .article-list-plane .button .label,.article-holder .video-holder .title,div.con>div.txt,.btn-cancel,div.con header,.audiolist-list .song-list .song-li .content .text a,.audio-list .song-list .song-li .content .text,.audio-list .song-list .song-li .content .text a,.n .n-btn,.n .n-data .n-data-v,.g-search input,.i-pin-v .be-tab-item,.list-create .text,.large-item .title,.user-auth.no-auth .no-auth-title .goto-auth,.i-m-title,.i-m-btn,.user .info .meta .item,.wrapper .modal-header .title,.wrapper .modal-body .choice-wrp .battery-desp,.wrapper .modal-body .choice-wrp .battery-desp input,.wrapper .elec-main-title,.wrapper .elec-sub-title,.paging-box .current,.paging-box .dian,.paging-box .next,.paging-box .prev,.paging-box .tcd-number,.multi-page .cur-list li a,#page-index .channel.guest .channel-item .channel-title .channel-name,.small-item.disabled .title,#page-index .album .content .album-wrapper .album-item .album-title,#page-index .col-2 .section .user-auth .auth-description,.elec .elec-monthly-c,.elec .elec-count,.be-dropdown-item,#id-card .idc-uname,#id-card .idc-meta-item,.btn.default,.contribution-sidenav,.breadcrumb .item.cur,.be-tab-item,#page-video #submit-video-type-filter a,.be-pager-options-elevator input[type=text],#page-article .row .breadcrumb .item,.my-album .title,.my-album .tab-list .tab .name,#page-channel-index .channel-option.no-channel p,#page-channel-index .channel-item .channel-name,#page-setting .setting-privacy-item .setting-privacy-name,#page-setting #setting-new-tag,.btn.ghost,.gui-settings,.bui-button.bui-button-transparent,.gui-settings-box,.pop-live .pl__head,.pop-live .pl__title,.gui-settings-textbox-container input,#page-fav .fav-sidenav .text,#page-fav .fav-main .filter-item,#page-fav .fav-main .filter-item .filter-type .be-dropdown-item span,.wrapper .edit-video-modal .edit-video-title,.modal-wrapper .modal-header-close,.wrapper .edit-video-modal .target-favlist .target-fav-name,#page-fav .fav-main .search-types,#page-fav .fav-main .search-input input,.side-bar .title,.setting.item a,.space-right .space-right-top .title,.top .title,.action-menu .menu-list a,.card.config,.dialog .title,.list-item .name,.message .message-content.not-img,.emoji-box .emoji-item,.i-live .i-live-text,.section-right-options .operation,.article-title,.follow-sidenav .follow-list-container .follow-item,.follow-sidenav .nav-title .text,.breadcrumb .batch,.follow-main .follow-action-top .back-to-info,.follow-main .follow-action-bottom li,.modal-container li,.fans-action-btn,.tag-list a,#pin-wrapper .pin-layer-header,#pin-wrapper .pin-layer-order-tip,#pin-wrapper #pin-layer-search,.modal-wrapper .modal-title,.be-input_inner,.follow-sidenav .follow-list-container .follow-item.cur .num,.pub-list .info .name,.select-wrap .select-txt,.select-wrap .select-option,.select-wrap .select-option p:hover,.card .more-panel,.card .more-panel .child-button:hover,.report-popup .content-text,.im-popup .bp-popup-panel .title-ctnr .popup-title,.selector-box,.bl-button--ghost,.report-con dl dd,.report-other,.wrapper .modal-body .pay-info,.wrapper .pay-qrcode-wrp .pay-way-wrp .pay-btn.active,.article-info-container .title,.article-info-container .desc,.slim-video-card .video-info .title,.up-article-list-block .more-article,.comment-bilibili-con .t,.comment-bilibili-con .reason-box dl dd,.comment-bilibili-con .other p{color:#eee!important;}.bilibili-player.mode-fullscreen .bilibili-player-area .bilibili-player-video-btn-widescreen,.bilibili-player.mode-fullscreen .bilibili-player-area .bilibili-player-video-btn-widescreen .bilibili-player-iconfont{color:#99a2aa!important;}.nav-tab-bar .tab-item.on span{    color: #00a1d6 !important}.fans-medal-item .label{color:#222!important;}li.tag,form.ipt,.bilibili-player-color-picker-color-code,.history-list .l-info .lastplay-time .history-red-round,.history-list .l-info,.up-info-holder .fixed-box .more .top-bar,.tag-container .tag-item .tag-content,.up-info-holder .fixed-box .rightside-article-list-btn .label,.up-info-holder .fixed-box .up-article-list-block .block-title,.pub-list .info dl,.report-con label:before{border-color:#aaa!important;}div.dd-bubble,ul.bilibili-suggest,.video-info-module,.bilibili-player-danmaku-date-picker-container,.video-toolbar .share .share-pos .share-address ul li input,.bangumi-info-module,.user-card-m,.bilibili-player-video-control,.bilibili-player-video-inputbar,.bilibili-player-video-volumebar-wrp,.bpui-selectmenu-list,.user-card,.face,.emoji-box,.bilibili-player-video-btn-setting-panel,.bilibili-player-video-danmaku-setting-box,.bilibili-player-mode-selection-container,.bilibili-player-color-picker-container,.bilibili-player-block-string-short,.bilibili-player-modal-container,.video-container,.article-container,.card .focus-btn .unfocus,.textarea-container .comm-tool .comm-emoji,.watch-later-list header .d-btn,.card .focus-btn .focus,.slim-border:after,.music-container,.audio-info-module,.multi-page .more-box,.h5share-container,#id-card .idc-avatar,.be-pager-options-elevator input[type=text],#page-setting #setting-new-tag,#page-setting #setting-new-tag-btn,.action-menu .menu-list,.action-menu .menu-list:before,.live-container,#page-setting .setting-tag-list a,.select-wrap .select-option,.card .more-panel,.card .more-panel:after,.bl-button--ghost{border-color:#222!important;}.nav-list,.customize,#primary_menu,.bili-tab,.bili-tab-item,.bili-dropdown,.dropdown-list,.member-menu,div.bar>div.num,.dynamic-m,.day-span,.danmaku-info-report-btn,.danmaku-info-block-btn,.comment-header,.bilibili-player-video-time-seek,.pl__card,.advanced-danmaku-group,.add-btn,.looked,.history-wrap  .time-label:before,.comment-area .comm-main .comm-tabs,.dynamic-list-item-wrap,.comment-area .comm-more,.forw-area .forw-more,.userinfo-wrapper,.btn-box .message:hover,.article-action,#article-list-btn .label,#article-list-btn .title,.btn-cancel,.song-list .song-li .content .num,.multi-page .head-con .range-box .paging li,.multi-page .more-box li,.g-search input,.i-m-upload,.i-m-r2,#page-index .col-2 .section-title,.user .info .meta .row,#page-index .fav-covers,.section .operation,.i-live .i-live-unfo-btn,.i-live .i-live-fo-count,.be-dropdown-menu,.btn.default,.be-pager-item,.be-pager-next,.be-pager-prev,#page-subs .mini-item,#page-setting .setting-index-container,#page-setting .setting-index-module,.btn.ghost,.be-dropdown-item.be-dropdown-item-delimiter,#page-fav .fav-sidenav .nav-container,#page-fav .fav-main .fav-header.fav-header-info,#page-fav .fav-main .small-item,#page-fav .fav-main .search-types,.divided-line,.dialog .title,.list .list-title,.list-item,.whisper .list,.send-box,#page-index .channel .channel-item,.user .tags,.article-content,.s-content,.follow-sidenav,.follow-sidenav .nav-container.follow-container,.follow-main,.follow-main .follow-header.follow-header-info,.follow-main .follow-action-top .back-to-info,.follow-main .follow-action-top,.modal-container .modal-body .target-followlist,.fans-action-btn,#pin-wrapper .pin-layer-header,.modal-wrapper .modal-title,.report-con,.wrapper .pay-qrcode-wrp,.wrapper .pay-qrcode-wrp .pay-way-wrp .pay-btn,.wrapper .pay-qrcode-wrp .pay-way-wrp .pay-btn.active,.bilibili-player-video-inputbar .bilibili-player-video-inputbar-wrap,.article-holder .slim-video-card,.comment-bilibili-con .t{border-color:transparent!important;}.back-top,.more-link,.read-push,.link-more,.c-clink,ul.boston-postcards>li,.lf-list,a.more,a.read-more,.live-field.fl,.square-field,.v-preview,.v-data,.btn.followed .b-gz,.up-info .btn .b-cd,#arc_toolbar_report,#v_desc,.more-ops-list,.app-look,.video-toolbar .share .share-pos,.bilibili-player-context-menu-container,.notice-item,.btn-box .liked,.btn-box .like,.btn-box .message,.paging-box-big .tcd-number,.paging-box-big .next,div.con,.float-nav .nav-menu .item,textarea,.comment-emoji,.bb-comment .hot-line,.page-jump>input,.bilibili-player-setting-menu-wrap,.opera-list,.bilibili-player-video-danmaku-setting-right-separator,.bui-select .bui-select-border,.bpui-button.bpui-button-type-small,.danmaku-wrap .bilibili-player-block-wrap,.bilibili-player-block-string-short-btn,.bilibili-player-modal-btns .bpm-btn,.bilibili-player-adv-danmaku,.bui-input-stepper,.bui-input-input,.bui-input .bui-input-stepper-up,.bui-input-wrap-disabled,.bilibili-player-modal-header,.collection-m .title,.collection-m .bottom,.follow-dialog-window .title,.follow-dialog-window .bottom,.watch-later-list .list-box .av-item .av-about,a.s-btn,.history-btn>.btn,.history-list .r-info .r-txt,.history-list .r-info .w-info .username,.go-top,.btn-box .like,.paging-box-big .dian,.right-side-bar .to-comment,.right-side-bar .to-top,.right-side-bar .to-comment .comment-num,.up-info-holder .fixed-box .rightside-article-list-btn,.article-list-holder-block .article-list-plane,div.con header,#page-index .col-1,.i-pin-v .be-tab,.section,.list-create,#page-index .col-2 .section,#page-index .col-2 .section:last-child,.wrapper .modal-header .u-info,.wrapper .modal-body .choice-wrp .battery,.wrapper .modal-body .choice-wrp .battery-desp input,.wrapper .modal-body .elec-protocol .checkbox,.elec .elec-avatar,.contribution-sidenav~.main-content,.contribution-sidenav,#page-myalbum .album-content,.v-wrap .s_tag,.bui-button.bui-button-transparent,.bb-comment .comment-list .quote,.modal-wrapper .modal-title,.wrapper .edit-video-modal .modal-body,.up-info:before,#pin-wrapper #pin-layer-search,.be-input_inner{    border-color: #444 !important}li.history,li.history:hover,li.timeline,li.timeline:hover,.b-line,.b-line:hover,.bilibili-player-danmaku-date-picker-header,.video-toolbar .share .share-pos .box-b,.btn-right-box{border-color:#99a2aa!important;}p.ri-title,.read-push,.link-more,.dropdown-item,.more-link,.member-menu a,a.logout,a.im-list,.bili-header-m .mini-wnd-nav a,.video-desc .btn span,li.tag,.history-btn>.btn,.elevator-module .nav-list .item{transition:all .2s!important;}.more-link>.icon,.read-push>.icon,.link-more>.icon,.bili-dropdown>.icon,.home>a,.c-clink>.icon,a.more>.b-icon,.member-menu i,a.read-more>.b-icon,form.ipt>a,.tag-info-pane .btn-right-box a i,.icon-notice,.icon-close-notice,i.face,img[src$='0a399ff.png@22w_22h.webp'],i.btn-del,.up-info-holder .fixed-box .rightside-article-list-btn .icon-list,.list-create:hover .icon,.i-m-ra,.i-m-u-icon,.i-live-icon,.i-live-arrow,.i-m-v-icon,.icon-arrow,.side-bar .icon,.setting:before,.select-wrap .select-txt i{filter:grayscale(100) brightness(100) saturate(0)!important;}ul.up-nav li{filter:grayscale(1) brightness(1.3)!important;}#page-index .col-1 .section .more,.elec .elec-status,.elec .elec-status-bg,.small-item .cover,#page-follows .follow-main .follow-action-top .back-to-info,.article-holder .slim-video-card-error{background-image:none!important;}.dropdown-item,.bilibili-player-block-tabpanel-row.bilibili-player-border,.g-search input{border-radius:4px!important;}.back-top:hover,.go-top:hover{background-position:-713px -72px!important;}.list-create:hover .icon{background-position:-716px -332px!important;}.bp-svg-icon.radio-default{background-position:0em -9.376em!important;}.bp-svg-icon.radio-Selected{background-position:0em -8.376em!important;}.multi-page .cur-list ul{max-height:none!important;}div.live-box,div.box,div.im-list-box,.dynamic-m,.bpui-slider-handle,.bpui-selectmenu-list,.sticky-bar .bar-content .send-button,.article-container:hover .text-area,.music-container:hover .text-area,.h5share-container:hover .text-area,.n .n-inner,.large-item .cover img,.mini-item .cover img,.i-pin-c,.elec .elec-trigger,.col-full,.space-right .space-right-top .title,.card,.action-menu .menu-list,.list-item .cover img{box-shadow:none!important;}div.i-frame,div.dd-bubble,div.desc-tips,ul.up-nav,ul.bilibili-suggest,.video-info-module,.bilibili-player-context-menu-container,.tag-info-pane,.bangumi-info-module,.user-card-m,div.drag-bar,#bofqi.mini-player:before,.user-card,.emoji-box,.userinfo-wrapper,.audio-info-module,.emotion-box{box-shadow:0px 1px 20px 2px $customStyleColor30!important;}.sticky-bar{box-shadow:0px 1px 10px 0 #0003!important;}.bilibili-player-context-menu-container{text-shadow:none!important;}div.desc-tips>span.arrow-left,.bb-comment .comment-header .tabs-order li.on:after,.emoji-box:before,.up-info-holder .fixed-box .more .link .icon,.up-info-holder .fixed-box .more .help .icon,.g-search .search-btn,.wrapper .elec-message-wrp .elec-triangle,img.source-img,canvas.cliper.is-img,.loading .icon,.load-more .icon{display:none!important;}.article-action i.animation{opacity:0!important;}.bui-bar.bui-bar-buffer,.bilibili-player-video-progress-buffer-range{opacity:0.5!important;}.bilibili-player-block-label,.advanced-danmaku-group .content-span{font-weight:400!important;}.bilibili-player-video-progress-detail-sign-down{border-top-color:$customStyleColor!important;}.bilibili-player-video-progress-detail-sign-up{border-bottom-color:$customStyleColor!important;}.bilibili-player-video-control{border-bottom-color:#333!important;}.coin-operated-m .mc-box{border:2px dashed #444!important;background-color:#fff!important;}.coin-operated-m .mc-box.on{border-style:solid!important;}.go-top-m .go-top{border:none!important;}.music-container .image-area .icon{filter:brightness(0)!important;}.g-search input{padding:0 8px!important;}.up-info-holder .fixed-box .more .help,.up-info-holder .fixed-box .more .link{padding:0!important;}#page-fav .fav-main .filter-item .filter-type .be-dropdown-item{padding:0 16px!important;}.cliper{filter:brightness(16%)!important;}#page-setting #setting-new-tag-btn{background:$customStyleColor!important;}.c-clink:hover,.bili-tab-item.on,.read-push:hover,.link-more:hover,.more-link:hover,a.read-more:hover,a.more:hover,.up-info .btn .b-cd:hover,.bi-btn,.day-span.day-enable.active,li.tag:hover,.bb-comment .comment-header .tabs-order li.on,textarea:focus,.comment-submit,.page-jump>input:focus,.paging-box-big .current,.paging-box-big .tcd-number:hover,.paging-box-big .next:hover,.float-nav .nav-menu .item:hover,.bilibili-player-video-btn-send,.bpui-button.bpui-button-type-small:hover,.bilibili-player-block-tabpanel-row.active-1 .bilibili-player-block-type-keyword,.bilibili-player-block-tabpanel-row.active-2 .bilibili-player-block-type-regex,.bilibili-player-block-tabpanel-row.active-3 .bilibili-player-block-type-user,.coin-operated-m .mc-box.on.coin-operated-m .mc-box:hover,a.s-btn:hover,.history-btn>.btn:hover,.history-wrap .time-label,.history-wrap .active:before,.history-wrap .time-label:after,.go-top,.tag-panel .more-button .more:hover::after,.comment-area .comm-main .comm-tabs >ul >li.active,.up-info .up-focus-btn,.card .focus-btn .unfocus:hover,.btn-box .like:hover,.live-panel .more-button .more:hover::after,.coin-operated-m .mc-box.on,.tab-list .tb-item.active,.up-info-holder .fixed-box .follow-btn-holder .follow-btn,.up-info-holder .fixed-box .follow-btn-holder .follow-btn:hover,.right-side-bar .to-comment:hover,.right-side-bar .to-top:hover,.btn-submit,.elevator-module .nav-list .item.on,.elevator-module .nav-list .item:hover,.elevator-module .back-top:hover,.multi-page .more-box li.on,input[type=text]:focus,.be-tab-cursor,.be-tab-cursor:after,.list-create:hover,.btn.primary,.wrapper .modal-body .choice-wrp.selected .elec-input,.wrapper .modal-body .choice-wrp.selected .battery,.be-pager-item-active,.top-title .concern,.bui-button.bui-button-transparent:hover,.bb-comment .stick,.bb-comment .stick.assist,.send-btn,.bl-button--primary,.report-con input[type=radio]:checked+label:before,.wrapper .modal-back:hover{border-color:$customStyleColor!important;}.num-wrap>span,.rank-item.highlight>.ri-num,p.on>span>a,.c-clink:hover,.sortable:hover,.read-push:hover,.link-more:hover,.dropdown-item:hover,.more-link:hover,a.more:hover,.dynamic-m .dyn_menu .line,a.read-more:hover,.bi-btn,.up-info .btn .b-cd:hover,.danmaku-info-report-btn:hover,.danmaku-info-block-btn:hover,.more-ops-list li:hover,.video-toolbar .share .share-pos .share-address ul li .btn,.btn-add:hover span,.tag-info-pane .tag-header .btn-subscribe:hover,.tag-info-pane .tag-footer .btn-left-box>a:hover,.btn-box .like:hover,.comment-submit,span.reply:hover,.bb-comment .hot-line a:hover,.follow-btn,.paging-box-big .tcd-number:hover,.paging-box-big .current,.paging-box-big .next:hover,a.btn-more:hover,.float-nav .nav-menu .item:hover,.bilibili-player-video-progress-buffer-range,.bpui-slider-progress,.bilibili-player-video-btn-send,.bilibili-player-setting-menu-list:hover,.opera-list li:hover,.bui-radio-input:checked+.bui-radio-label,.bui-thumb-dot,.bui-bar,.bpui-button.bpui-button-type-small:hover,.fontsize .selection-span.active,.bui-switch .bui-checkbox:checked+.bui-body,.bilibili-player-block-string-short-btn,.advanced-danmaku-group .adv-danmaku-btn-span:hover,a.s-btn:hover,.history-btn>.btn:hover,.history-wrap .time-label.active,.history-list .cover-contain .progress,.tab-bar .line,.go-top:hover,.dynamic-btn.pink,.sticky-bar .bar-content .send-button,.textarea-container .comm-tool .comm-submit,.new-notice-bar,.card .focus-btn .unfocus:hover,.right-side-bar .to-comment:hover,.right-side-bar .to-top:hover,.btn-submit,.elevator-module .nav-list .item.on,.elevator-module .nav-list .item:hover,.elevator-module .back-top:hover,.multi-page .more-box li.on,.n .n-cursor,.btn.primary,.elec .elec-trigger,.contribution-sidenav .contribution-item.cur,.be-pager-item-active,#page-channel-index .channel-option.no-channel .create-channel,.be-switch-container.is-checked .be-switch,#page-setting #setting-new-tag-btn,.top-title .concern,.bui-button.bui-button-transparent:hover,#page-fav .fav-sidenav .fav-item.cur,.wrapper .edit-video-modal .target-favlist .target-favitem.selected,.notify,.send-btn,.live-container .status,.video-container .types,.type-label,.follow-sidenav .follow-list-container .follow-item.cur,.bl-button--primary,.report-con label:after,.wrapper .elec-btn{background-color:$customStyleColor!important;}p.t:hover,p.ri-title:hover,div.r-text>.t:hover,a.name:hover,div.bili-tab-item:hover,ul.nav-menu>li:hover,div.spread-module:hover,.bili-tab-item.on,.bili-footer a:hover,a.pic>p.title:hover,a.bbs,div.brief>a>span:hover,div.all>a>span:hover,.live-box .title,.bili-header-m .bubble-traditional .recommand .title,a.help-link,.member-menu a:hover,a.logout:hover,a.im-list:hover,.dynamic-m .dyn_menu li.on,div.info>a,.bili-header-m .mini-wnd-nav a:hover,.bilibili-player-danmaku-btn-history.bpui-state-hover,.day-span.day-enable.active,.day-span.day-enable:hover,.video-toolbar .ops span:hover,.video-toolbar .ops .app .app-look .foot-txt a,.video-toolbar .ops span.on,li.tag>a:hover,.video-desc .btn span:hover,.tag-info-pane .tag-header .btn-unsubscribe:hover,div.title a:hover,span.current,a.tcd-number:hover,.bb-comment .comment-header .tabs-order li:hover,.bb-comment .comment-header .tabs-order li.on,.bb-comment .comment-list .list-item .info .plad a:hover,a.more-hot,a.btn-more,.bilibili-player-video-hint>a:hover,.bpui-selectmenu-list-row[data-selected],.bui-checkbox:hover .bui-checkbox-name,.bilibili-player-block-filter-type.disabled .bilibili-player-block-filter-label,.bilibili-player-block-filter-type:hover .bilibili-player-block-filter-label,.bilibili-player-block-filter-type.disabled .bp-icon,.bilibili-player-block-filter-type:hover .bp-icon,.bilibili-player-video-danmaku-setting-left-more:hover .bilibili-player-video-danmaku-setting-left-more-text,.bilibili-player-video-danmaku-setting-left-more:hover,.bilibili-player-video-danmaku-setting-left-more:hover i,.bilibili-player-video-danmaku-setting-right-more:hover,.bilibili-player-video-danmaku-setting-right-more:hover i,.mode .selection-span.active,.mode .selection-span:hover,.bilibili-player-block-tabpanel-row.active-1 .bilibili-player-block-type-keyword,.bilibili-player-block-tabpanel-row.active-2 .bilibili-player-block-type-regex,.bilibili-player-block-tabpanel-row.active-3 .bilibili-player-block-type-user,.bilibili-player-block-line-state,.bilibili-player-block-line-delete:hover,.bilibili-player-block-tabpanel-row>div:hover,.multi-page .cur-list li.on i,.collection-m .content .group-list li:hover,.coin-operated-m .coin-title span,.follow-dialog-window .content .info .uname,.watch-later-list .list-box .av-item .av-about .t:hover,.tc-blue,.history-list .r-info .title:hover,.history-list .r-info .w-info .username:hover,.history-wrap .time-label,.user-name:hover,.time .detail-link:hover,.more-button:hover,.boost-control li:hover,.boost-control li:hover i,.tab-text:hover,.tab-text.selected,.tag-panel .tag-list a,.box-toggle:hover,.box-toggle:focus,.box-toggle.active,.expand-btn,.dynamic-link-hover-bg,.tag-panel .more-button .more:hover,.sticky-bar .bar-content .title:hover,.home-page .sticky-bar .bar-content .message:hover,.comment-area .comm-main .comm-tabs >ul >li.active,.comment-area .comm-more a.more:hover,.bangumi-container .text-area .title:hover,.tc-blue-hover,.live-panel .more-button .more:hover,a.up-name:hover,.up-info-holder .fixed-box .more .help .title:hover,.up-info-holder .fixed-box .more .link .title:hover,.song-list .song-li:hover .content .text a,.multi-page .head-con .range-box .paging li.on,.multi-page .head-con .range-box i:hover,.multi-page .more-box li:hover,.n .n-btn:hover,.n .n-fs:hover p,.n .n-gz:hover p,.be-tab-item.is-active,.sec-empty-hint a,.large-item .title:hover,.small-item .title:hover,.i-m-title:hover,.i-live .i-live-link:hover,.wrapper .modal-header .u-name,.wrapper .modal-body .choice-wrp.selected .battery-desp,.wrapper .elec-sub-title .up-name,.bb-comment a,.multi-page .cur-list li a:hover,.section-title .t:hover,.section .operation:hover,#page-index .channel.guest .channel-item .channel-title .channel-name:hover,.small-item.disabled .title:hover,#page-index .album .content .album-wrapper .album-item .album-title:hover,.i-live .i-live-off-guest a,#id-card .idc-uname:hover,.breadcrumb .item:hover,#page-video #submit-video-type-filter a.active,.be-pager-item:hover a,.be-pager-next:hover a,.be-pager-prev:hover a,.contribution-sidenav .contribution-item a:hover,.my-album .tab-list .tab.active .name,.album-card .title:hover,.tabs a:hover,#page-subs .detail a:hover,#page-subs .action .sub-action,#page-channel-index .no-channel-container em,.bui-switch .bui-checkbox:checked+.bui-body .bui-dot,.bilibili-player-video-danmaku-setting-left-block-content .bilibili-player-block-filter-type.disabled .bilibili-player-block-filter-label,.bui-select.bui-select-quality-menu .bui-select-item.bui-select-item-active,.bb-comment .stick,.bb-comment .stick.assist,.article-holder a,#page-fav .fav-main .filter-item .text:hover,#page-fav .fav-main .filter-item .filter-type .be-dropdown-item:hover i,#page-fav .fav-main .filter-item .filter-type .be-dropdown-item:hover span,.modal-wrapper .modal-header-close:hover,#page-fav .fav-main .search-types:hover,.list .item.active:before,.list .item.active a,.list .item:hover a,.list .item:hover:before,.bottom .link,.action-menu .menu-list a:hover,.article-title a:hover,#page-follows .follow-main .follow-action-bottom .select-cancel,.wrapper .modal-body .elec-pay .elec-coin,.wrapper .modal-body .elec-pay .elec-count,.wrapper .modal-body .elec-pay .elec-exp,.wrapper .modal-body .elec-protocol a:hover,.wrapper .modal-body .pay-info .balance,.wrapper .modal-body .pay-info .pay-tip .em-text,.wrapper .modal-back{color:$customStyleColor!important;}.sortable:hover,.read-push:hover,.link-more:hover,.num-wrap>span,.dropdown-item:hover,.more-link:hover,a.more:hover,.dynamic-m .dyn_menu li,.bili-header-m .mini-wnd-nav a:hover,.up-info .btn .b-cd:hover,.danmaku-info-report-btn:hover,.danmaku-info-block-btn:hover,.more-ops-list li:hover,.tag-info-pane .tag-header .btn-subscribe:hover,.tag-info-pane .tag-footer .btn-left-box>a:hover,.btn-box .like:hover,.comment-submit,span.reply:hover,.bb-comment .hot-line a:hover,.follow-btn,.paging-box-big .tcd-number:hover,.paging-box-big .next:hover,.paging-box-big .current,a.btn-more:hover,.float-nav .nav-menu .item:hover,.bilibili-player-video-btn-send,.bilibili-player-setting-menu-list:hover,.opera-list li:hover,.bui-radio-input:checked+.bui-radio-label .bui-radio-text,.bpui-button.bpui-button-type-small:hover,.fontsize .selection-span.active,.bilibili-player-block-string-short-btn,.advanced-danmaku-group .adv-danmaku-btn-span:hover,a.s-btn:hover,.history-btn>.btn:hover,.history-wrap .time-label.active,.dynamic-btn.pink,.sticky-bar .bar-content .send-button,.up-info .up-focus-btn,.textarea-container .comm-tool .comm-submit,.new-notice-bar .message,.card .focus-btn .unfocus .unfocus-text:hover,.article-container:hover .text-area .title,.tab-list .tb-item.active,.btn-submit,.multi-page .more-box li.on,.btn.primary,.contribution-item.cur a,.be-pager-item-active a,.contribution-sidenav .contribution-item.cur .text:hover,.be-pager-item.be-pager-item-active:hover a,.top-title .concern,.bui-button.bui-button-transparent:hover,.bb-comment .comment-list .quote,.send-btn,.live-container .status,.video-container .types,.type-label,.section-right-options .operation:hover,.follow-sidenav .follow-list-container .follow-item.cur .num,.follow-sidenav .follow-list-container .follow-item.cur .text,.follow-sidenav .follow-list-container .follow-item.cur,#page-setting #setting-new-tag-btn,.bl-button--primary,.wrapper .elec-btn{color:$foreground!important;}.bui-checkbox .bui-checkbox-input:checked+.bui-checkbox-label .bui-checkbox-icon svg,.bui-checkbox:hover .bui-checkbox-icon svg,.bui-switch .bui-checkbox:checked+.bui-body .bui-dot,.bilibili-player-block-filter-type:hover .bilibili-player-block-filter-image,.bilibili-player-video-danmaku-setting-left-block-content .bilibili-player-block-filter-type.disabled .bilibili-player-block-filter-image,.bilibili-player-mode-selection-container .bilibili-player-mode-selection-panel .bilibili-player-mode-selection-row.mode .selection-span.active,.bilibili-player-mode-selection-container .bilibili-player-mode-selection-panel .bilibili-player-mode-selection-row.mode .selection-span.active:hover,.bilibili-player-mode-selection-container .bilibili-player-mode-selection-panel .bilibili-player-mode-selection-row.mode .selection-span:hover,#page-follows .follow-main .follow-action-top .back-to-info:hover{fill:$customStyleColor!important;}.gui-settings-close path{fill:#eee;}.history-wrap .active:before,.history-wrap .time-label:after,.history-list .l-info .lastplay-time .history-red-round{border-top-color:transparent!important;border-bottom-color:transparent!important;}.tag-panel .more-button .more::after.tag-panel .more-button .more:hover::after{border-top-color:transparent!important;border-right-color:transparent!important;}.bili-tab-item:before,.dynamic-m .dyn_menu .line:before,.be-tab-cursor:after{border-color:$customStyleColor!important;border-left-color:transparent!important;border-right-color:transparent!important;}.multi-page .cur-list ul::-webkit-scrollbar-track{background:#444!important;}.multi-page .cur-list ul::-webkit-scrollbar-thumb{background:#222!important;}.multi-page .cur-list ul::-webkit-scrollbar-thumb:hover{background:#333!important;}::-webkit-scrollbar-thumb,::-webkit-resizer{background:#444!important;}::-webkit-scrollbar-thumb:hover{background:#555!important;}`;
this.offlineData["https://raw.githubusercontent.com/the1812/Bilibili-Evolved/master/style/style-touch-player.min.scss"] = `.touch-video-box-wrapper{display:flex;align-items:center;justify-content:center;width:100%;height:100%;position:absolute;top:0px;left:0px;z-index:14;pointer-events:none;}.touch-video-box{border-radius:4px;display:none;align-items:center;justify-content:center;width:50%;height:40%;background:#000;background:#000A;backdrop-filter:blur(30px);position:relative;}.touch-video-info{color:white;font-size:2rem;text-align:center;display:flex;align-items:center;justify-content:center;flex-direction:column;height:100%;width:100%;}.touch-row{flex-grow:1;display:flex;align-items:center;justify-content:center;width:100%;}.touch-info{display:block;flex-grow:1;flex-shrink:0;margin-right:1em;margin-left:0.2em;color:$customStyleColor;max-width:15em;}.touch-result{display:block;flex-grow:1;flex-shrink:0;font-size:1.5rem;}.touch-speed{display:block;flex-grow:2;flex-shrink:0;background:#444A;padding:0.5em;margin-left:1em;border-radius:4px;margin-right:0.2em;max-width:5em;}.touch-progress{position:absolute;bottom:0;left:0;background:$customStyleColor;border-radius:4px;border-top-left-radius:0;border-top-right-radius:0;width:0%;height:4px;transition:all 0.2s;}.videoshot{display:none;background-image:none;flex-grow:0;flex-shrink:0;border-radius:4px;width:80px;height:45px;background-size:1000%;margin-left:1em;}div.bilibili-player-video-control{height:38px!important;align-items:center!important;}.bilibili-player-video-btn{flex-grow:1!important;height:100%!important;display:flex!important;align-items:center!important;justify-content:center!important;}.bilibili-player-video-inputbar,.bilibili-player-video-progress{flex-grow:30!important;}.bilibili-player-video-quality-menu{display:flex!important;align-items:center!important;justify-content:center!important;}.bilibili-player-iconfont-start,.bilibili-player-iconfont-pause,.bilibili-player-iconfont-volume,.bilibili-player-iconfont-volume-max,.bilibili-player-iconfont-volume-min,.bilibili-player-iconfont-setting,.bilibili-player-iconfont-danmaku,.bilibili-player-iconfont-danmaku-off,.bilibili-player-iconfont-repeat,.bilibili-player-iconfont-widescreen,.bilibili-player-iconfont-web-fullscreen,.bilibili-player-iconfont-fullscreen,.bilibili-player-iconfont-color{font-size:2.5rem!important;}.bilibili-player-iconfont-next{font-size:2rem!important;}.bpui-selectmenu-list,.bilibili-player-video-danmaku-setting-wrap,.bilibili-player-video-btn-setting-panel,.bilibili-player.mode-fullscreen .bilibili-player-video-sendbar{left:unset!important;bottom:38px!important;}.bilibili-player-video-volumebar-wrp{left:unset!important;}.bilibili-player-video-control-wrap{padding:0!important;background:#222d!important;}.bilibili-player-video-control-bottom{align-items:center!important;}.bilibili-player-video-control-bottom-left{display:flex;align-items:center;}.bilibili-player-video-btn-danmaku{flex-grow:0!important;display:flex!important;align-items:center!important;height:100%!important;margin:0!important;padding:0!important;}.bilibili-player.mode-webfullscreen .bilibili-player-video-control-wrap .bilibili-player-video-control-bottom-right{flex-grow:1!important;}.bilibili-player.mode-fullscreen .bilibili-player-video-sendbar{bottom:0!important;}.bilibili-player .bilibili-player-area .bilibili-player-video-control .bilibili-player-video-btn.bilibili-player-video-btn-fullscreen{margin-right:0!important;}.bilibili-player .bilibili-player-area .bilibili-player-video-control .bilibili-player-video-btn.bilibili-player-video-btn-start{padding-left:0!important;flex-grow:1.2!important;margin-right:4px!important;margin-left:0!important;}.bilibili-player .bilibili-player-area .bilibili-player-video-control .bilibili-player-video-btn{padding:0 3px!important;}.bui-slider .bui-track.bui-track-video-progress .bui-bar-wrap{background:#666;}.bilibili-player .bilibili-player-area .bilibili-player-video-control-bottom,.bilibili-player-video-control-bottom-left,.bilibili-player .bilibili-player-area .bilibili-player-video-control-bottom-right{height:100%!important;margin:0!important;}.bilibili-player-video-btn-setting-panel-hover-bridge{display:none!important;}@media screen and (min-width: 750px){.bilibili-player.mode-fullscreen .bilibili-player-video-control-wrap .bilibili-player-video-control-bottom-center .bilibili-player-video-sendbar .bilibili-player-video-inputbar,.bilibili-player.mode-webfullscreen .bilibili-player-video-control-wrap .bilibili-player-video-control-bottom-center .bilibili-player-video-sendbar .bilibili-player-video-inputbar{background:#fff1!important;}.bilibili-player.mode-fullscreen .bilibili-player-video-control-wrap .bilibili-player-video-control,.bilibili-player.mode-webfullscreen .bilibili-player-video-control-wrap .bilibili-player-video-control{height:100%!important;margin:0!important;}.bilibili-player.mode-fullscreen .bilibili-player-video-control-wrap .bilibili-player-video-control-bottom,.bilibili-player.mode-webfullscreen .bilibili-player-video-control-wrap .bilibili-player-video-control-bottom{margin:0!important;}.bilibili-player.mode-fullscreen .bilibili-player-video-control-wrap .bilibili-player-video-control-bottom-left,.bilibili-player.mode-webfullscreen .bilibili-player-video-control-wrap .bilibili-player-video-control-bottom-left{height:100%!important;}.bilibili-player-video-btn.bilibili-player-video-btn-start{flex-grow:0.5!important;}.bilibili-player.mode-fullscreen .bilibili-player-video-control-wrap .bilibili-player-video-control-top,.bilibili-player.mode-webfullscreen .bilibili-player-video-control-wrap .bilibili-player-video-control-top{bottom:48px!important;}}`;
this.offlineData["https://raw.githubusercontent.com/the1812/Bilibili-Evolved/master/style/style-navbar-override.min.css"] = `div.nav-menu{width:unset!important;}div.nav-menu>div.bili-wrapper{width:1018px;margin:0 auto!important;}.search{position:relative!important;float:right!important;margin:30px 12px 5px 0!important;margin:26px 12px 5px 0!important;width:130px!important;height:30px!important;background-color:transparent!important;padding:0!important;}form.searchform{background-color:#fff!important;background-color:#fffb!important;box-shadow:0px 2px 10px 1px #0002!important;height:30px!important;}form.searchform:hover{background-color:#fff!important;}button.search-submit,a.link-ranking{display:none!important;}input.search-keyword{width:110px!important;height:30px!important;padding:0 10px!important;}@media only screen and (min-width: 1291px){div.nav-menu>div.bili-wrapper{width:1234px!important;}.search{width:250px!important;margin:30px 72px 5px 0!important;margin:26px 72px 5px 0!important;}input.search-keyword{width:230px!important;}}`;
this.offlineData["https://raw.githubusercontent.com/the1812/Bilibili-Evolved/master/style/style-no-banner.min.css"] = `#banner_link{display:none!important;}div.blur-bg{opacity:0!important;}`;
this.offlineData["https://raw.githubusercontent.com/the1812/Bilibili-Evolved/master/style/style-remove-promotions.min.css"] = `#slide_ad,#home_popularize,.gg-floor-module,.home-app-download{display:none!important;}`;
this.offlineData["https://raw.githubusercontent.com/the1812/Bilibili-Evolved/master/style/style-gui-settings.min.scss"] = `.gui-settings-icon-panel{height:100%;display:flex;justify-content:center;align-items:center;position:fixed;top:0;left:0;width:24px;z-index:10000;}.gui-settings{display:flex;justify-content:center;align-items:center;cursor:pointer;-webkit-tap-highlight-color:transparent;transform:translateX(-12px);}.gui-settings,.gui-settings-header .gui-settings-close path,.gui-settings svg path{transition:all 0.2s;}.gui-settings svg path{fill:rgba(0,0,0,0.2);fill:#8884;opacity:0.75;transform-origin:center!important;}.gui-settings:hover{transform:translateX(0px);}.gui-settings:hover svg path{opacity:1;transform:rotate(120deg);}.gui-settings-panel{transition:all 0.2s;width:100%;height:100%;background:transparent;position:fixed;left:0;top:0;z-index:10001;display:flex;opacity:0;transform:scale(0);transform-origin:center;align-items:center;justify-content:center;}.gui-settings-panel.opened{opacity:1;transform:scale(1);}.gui-settings-box{width:400px;height:90%;background:white;border-radius:8px;box-shadow:0px 3px 20px 2px rgba(0,0,0,0.2);box-shadow:0px 3px 20px 2px #0004;display:flex;flex-direction:column;}.gui-settings-footer,.gui-settings-header{flex-grow:0;height:50px;display:flex;align-items:center;flex-shrink:0;}.gui-settings-footer{height:80px;justify-content:center;}.gui-settings-content{flex-grow:1;overflow:auto;}.gui-settings-content ul li{font-size:16px;margin:16px 0;display:flex;}.gui-settings-content ul li.indent-0{margin-left:16px;}.gui-settings-content ul li.indent-1{margin-left:80px;}.gui-settings-content ul li.indent-2{margin-left:144px;}.gui-settings-title{flex-grow:1;font-size:16px;margin:16px;}.gui-settings-close{width:24px;height:24px;padding:16px;}.gui-settings-header .gui-settings-close{cursor:pointer;-webkit-tap-highlight-color:transparent;}.gui-settings-header .gui-settings-close:hover path{fill:$customStyleColor!important;}.gui-settings-close path{fill:#222;}.gui-settings-ok path{fill:transparent;}.gui-settings-textbox-container{display:flex;justify-content:center;align-items:center;-webkit-tap-highlight-color:transparent;}.gui-settings-textbox-container span{margin:0 16px;transition:all 0.2s;}.gui-settings-textbox-container input{border-radius:4px;border:none;height:100%;max-width:70px;padding:2px 8px;background:rgba(0,0,0,0.2);background:#8884;transition:all 0.2s;font-size:16px;}.gui-settings-textbox-container input:disabled,.gui-settings-textbox-container.disabled span,.gui-settings-textbox-container.disabled div{opacity:0.5;}.gui-settings-checkbox-container{cursor:pointer;display:flex;justify-content:center;align-items:center;padding:0 16px;-webkit-tap-highlight-color:transparent;}.gui-settings-checkbox-container input{opacity:0;width:0;transition:all 0.2s;}.gui-settings-checkbox-container svg{width:24px;height:24px;border-radius:4px;margin-right:16px;transition:all 0.2s;}.gui-settings-checkbox-container svg path{transform:scale(0.8);transform-origin:center;}.gui-settings-checkbox-container input ~ svg{background-color:rgba(0,0,0,0.2);background-color:#8884;}.gui-settings-checkbox-container input:checked ~ svg{background-color:$customStyleColor;}.gui-settings-checkbox-container input:checked ~ svg path{fill:$foreground;}.gui-settings-checkbox-container input:disabled ~ svg,.gui-settings-checkbox-container input:disabled ~ span{opacity:0.5;}button.save{padding:8px 32px;border:none;background:$customStyleColor;color:$foreground;border-radius:4px;font-size:16px;cursor:pointer;transition:all 0.2s;-webkit-tap-highlight-color:transparent;}button.save:focus{outline:none;}.gui-settings-footer svg{width:0;height:30px;margin-left:0;transition:all 0.2s;}.gui-settings-footer svg path{fill:$customStyleColor;}.custom-color-preview{width:40px;height:100%;border-radius:4px;background:$customStyleColor;margin-right:16px;border:1px solid rgba(0,0,0,0.2);border:1px solid #8884;position:relative;cursor:pointer;}.predefined-colors{transition:all 0.2s;display:flex;opacity:0;background:white;width:168px;height:168px;position:absolute;box-shadow:0px 3px 20px 2px rgba(0,0,0,0.2);box-shadow:0px 3px 20px 2px #0004;border-radius:4px;top:32px;left:-64px;transform:scale(0);transform-origin:top;}.predefined-colors.opened{opacity:1;transform:scale(1);}.predefined-colors-grid{display:grid;grid-template-columns:auto auto auto auto;margin:4px;flex-grow:1;}.predefined-colors-grid-block{width:32px;height:32px;border-radius:4px;justify-self:center;align-self:center;cursor:pointer;}input[key]:focus{outline:none;}`;
this.offlineData["https://raw.githubusercontent.com/the1812/Bilibili-Evolved/master/utils/gui-settings.html"] = `<div class="gui-settings-panel">
  <div class="gui-settings-box">
    <div class="gui-settings-header">
      <span class="gui-settings-title">设置</span>
      <svg
        class="gui-settings-close"
        viewBox="0 0 24 24">
        <path />
      </svg>
    </div>
    <div class="gui-settings-content">
      <ul>
        <li class="indent-0">
          <label class="gui-settings-checkbox-container">
            <input key="useNewStyle" type="checkbox" checked/>
            <svg class="gui-settings-ok" viewBox="0 0 24 24">
              <path />
            </svg>
            <span>新样式</span>
          </label>
        </li>
        <li class="indent-1">
          <label class="gui-settings-textbox-container">
            <span>自定义颜色</span>
            <div class="custom-color-preview">
              <div class="predefined-colors">
                <div class="predefined-colors-grid">

                </div>
              </div>
            </div>
            <input key="customStyleColor" dependencies="useNewStyle" spellcheck="false" type="text" />
          </label>
        </li>
        <li class="indent-1">
          <label class="gui-settings-textbox-container">
            <span>顶栏(对横幅)不透明度</span>
            <input key="blurBackgroundOpacity" dependencies="useNewStyle" spellcheck="false" type="text" />
          </label>
        </li>
        <li class="indent-1">
          <label class="gui-settings-checkbox-container">
            <input key="useDarkStyle" dependencies="useNewStyle" type="checkbox" />
            <svg class="gui-settings-ok" viewBox="0 0 24 24">
              <path />
            </svg>
            <span>夜间模式</span>
          </label>
        </li>
        <li class="indent-1">
          <label class="gui-settings-checkbox-container">
            <input key="overrideNavBar" dependencies="useNewStyle" type="checkbox"  checked />
            <svg class="gui-settings-ok" viewBox="0 0 24 24">
              <path />
            </svg>
            <span>搜索栏位置调整</span>
          </label>
        </li>
        <li class="indent-2">
          <label class="gui-settings-checkbox-container">
            <input key="showBanner" dependencies="useNewStyle overrideNavBar" type="checkbox" checked/>
            <svg class="gui-settings-ok" viewBox="0 0 24 24">
              <path />
            </svg>
            <span>显示顶部横幅</span>
          </label>
        </li>
        <li class="indent-0">
          <label class="gui-settings-checkbox-container">
            <input key="touchNavBar" type="checkbox" />
            <svg class="gui-settings-ok" viewBox="0 0 24 24">
              <path />
            </svg>
            <span>顶栏触摸优化</span>
          </label>
        </li>
        <li class="indent-0">
          <label class="gui-settings-checkbox-container">
            <input key="touchVideoPlayer" type="checkbox" />
            <svg class="gui-settings-ok" viewBox="0 0 24 24">
              <path />
            </svg>
            <span>播放器触摸支持</span>
          </label>
        </li>
        <li class="indent-0">
          <label class="gui-settings-checkbox-container">
            <input key="expandDanmakuList" type="checkbox" checked />
            <svg class="gui-settings-ok" viewBox="0 0 24 24">
              <path />
            </svg>
            <span>自动展开弹幕列表</span>
          </label>
        </li>
        <li class="indent-0">
          <label class="gui-settings-checkbox-container">
            <input key="removeAds" type="checkbox" checked />
            <svg class="gui-settings-ok" viewBox="0 0 24 24">
              <path />
            </svg>
            <span>删除广告</span>
          </label>
        </li>
        <li class="indent-0">
          <label class="gui-settings-checkbox-container">
            <input key="watchLaterRedirect" type="checkbox" checked />
            <svg class="gui-settings-ok" viewBox="0 0 24 24">
              <path />
            </svg>
            <span>稍后再看重定向</span>
          </label>
        </li>
      </ul>
    </div>
    <div class="gui-settings-footer">
      <button class="save">保存</button>
      <svg class="gui-settings-ok" viewBox="0 0 24 24">
        <path/>
      </svg>
    </div>
  </div>
</div>
`;
this.offlineData["https://raw.githubusercontent.com/the1812/Bilibili-Evolved/master/utils/gui-settings.js"] = (() =>
{
    return (settings, resources) =>
    {
        const colors = {
            red: "#e57373",
            pink: "#F06292",
            purple: "#BA68C8",
            deepPurple: "#9575CD",
            indigo: "#7986CB",
            blue: "#2196F3",
            lightBlue: "#00A0D8",
            cyan: "#00ACC1",
            teal: "#26A69A",
            green: "#81C784",
            lightGreen: "#9CCC65",
            orange: "#FF9800",
            deepOrange: "#FF7043",
            brown: "#A1887F",
            grey: "#757575",
            blueGrey: "#78909C"
        };
        const svgData = {
            settings: "M12,15.5A3.5,3.5 0 0,1 8.5,12A3.5,3.5 0 0,1 12,8.5A3.5,3.5 0 0,1 15.5,12A3.5,3.5 0 0,1 12,15.5M19.43,12.97C19.47,12.65 19.5,12.33 19.5,12C19.5,11.67 19.47,11.34 19.43,11L21.54,9.37C21.73,9.22 21.78,8.95 21.66,8.73L19.66,5.27C19.54,5.05 19.27,4.96 19.05,5.05L16.56,6.05C16.04,5.66 15.5,5.32 14.87,5.07L14.5,2.42C14.46,2.18 14.25,2 14,2H10C9.75,2 9.54,2.18 9.5,2.42L9.13,5.07C8.5,5.32 7.96,5.66 7.44,6.05L4.95,5.05C4.73,4.96 4.46,5.05 4.34,5.27L2.34,8.73C2.21,8.95 2.27,9.22 2.46,9.37L4.57,11C4.53,11.34 4.5,11.67 4.5,12C4.5,12.33 4.53,12.65 4.57,12.97L2.46,14.63C2.27,14.78 2.21,15.05 2.34,15.27L4.34,18.73C4.46,18.95 4.73,19.03 4.95,18.95L7.44,17.94C7.96,18.34 8.5,18.68 9.13,18.93L9.5,21.58C9.54,21.82 9.75,22 10,22H14C14.25,22 14.46,21.82 14.5,21.58L14.87,18.93C15.5,18.67 16.04,18.34 16.56,17.94L19.05,18.95C19.27,19.03 19.54,18.95 19.66,18.73L21.66,15.27C21.78,15.05 21.73,14.78 21.54,14.63L19.43,12.97Z",
            close: "M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z",
            ok: "M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"
        };
        const textValidate = {
            "customStyleColor": text =>
            {
                const match = text.match(/^#([0-9a-fA-F]{6}|[0-9a-fA-F]{3})$/);
                if (match)
                {
                    if (text.length < 7)
                    {
                        return `#${text[1]}${text[1]}${text[2]}${text[2]}${text[3]}${text[3]}`;
                    }
                    else
                    {
                        return text;
                    }
                }
                else
                {
                    return settings.customStyleColor;
                }
            },
            "blurBackgroundOpacity": text =>
            {
                const match = text.match(/^([-\+]?\d+)(\.\d+)?$/);
                if (match)
                {
                    const value = parseFloat(text);
                    if (value >= 0 && value <= 1)
                    {
                        return text;
                    }
                }
                return settings.blurBackgroundOpacity;
            }
        };

        function reloadGuiSettings()
        {
            for (const key in settings)
            {
                $(`input[type='checkbox'][key='${key}']`).prop("checked", settings[key]);
                $(`input[type='text'][key='${key}']`).val(settings[key]);
            }
        }
        function setupEvents()
        {
            $(".gui-settings-header .gui-settings-close").on("click", () =>
            {
                $(".gui-settings-panel").removeClass("opened");
            });
            $("input[key='customStyleColor']").on("input", () =>
            {
                const color = textValidate.customStyleColor($("input[key='customStyleColor']").val());
                $("div.custom-color-preview").css("background", color);
            });
            $("input[type='text'][key]").each((_, element) =>
            {
                $(element).attr("placeholder", settings[$(element).attr("key")]);
            });
            $("div.custom-color-preview").on("click", () =>
            {
                const box = $(".predefined-colors");
                box.toggleClass("opened");
            });
            $("button.save").on("click", () =>
            {
                $("input[type='checkbox'][key]")
                    .each((_, element) =>
                    {
                        settings[$(element).attr("key")] = $(element).prop("checked");
                    });
                $("input[type='text'][key]")
                    .each((_, element) =>
                    {
                        const key = $(element).attr("key");
                        const value = $(element).val();
                        settings[key] = textValidate[key](value);
                    });
                saveSettings(settings);
                const svg = $(".gui-settings-footer svg.gui-settings-ok");
                if (parseInt(svg.css("width")) === 0)
                {
                    svg.css({
                        width: "30px",
                        marginLeft: "3rem"
                    });
                    setTimeout(() =>
                    {
                        svg.css({
                            width: "0",
                            marginLeft: "0"
                        });
                    }, 3000);
                }
                reloadGuiSettings();
            });
        }
        function fillSvgData()
        {
            $(".gui-settings-close path").attr("d", svgData.close);
            $(".gui-settings-ok path").attr("d", svgData.ok);
            $(".gui-settings svg path").attr("d", svgData.settings);
        }
        function listenDependencies()
        {
            const dependencies = {};
            $(`input[dependencies]`).each((_, element) =>
            {
                dependencies[$(element).attr("key")] = $(element).attr("dependencies");
            });
            $(`input[type='checkbox']`).on("change", e =>
            {
                const self = $(e.target);
                const checked = self.prop("checked");
                for (const key in dependencies)
                {
                    const dependency = dependencies[key].split(" ");
                    if (dependency.indexOf(self.attr("key")) !== -1)
                    {
                        let value = true;
                        if (checked && dependency.every(k => $(`input[key='${k}']`).prop("checked")))
                        {
                            value = false;
                        }
                        $(`input[key='${key}']`).prop("disabled", value);
                        if (value)
                        {
                            $(`input[key='${key}'][type='text']`).parent().addClass("disabled");
                        }
                        else
                        {
                            $(`input[key='${key}'][type='text']`).parent().removeClass("disabled");
                        }
                    }
                }
            });
        }
        function addSettingsIcon(body)
        {
            if ($(".gui-settings").length === 0)
            {
                body.append(`<div class='gui-settings-icon-panel'><div class='gui-settings'>
                    <svg style='width:24px;height:24px' viewBox='0 0 24 24'>
                        <path/>
                    </svg>
                </div></div>`);
                $(".gui-settings").on("click", () =>
                {
                    $(".gui-settings-panel").addClass("opened");
                });
            }
            resources.applyStyle("guiSettingsStyle", "gui-settings-style");
        }
        function addPredefinedColors()
        {
            const grid = $(".predefined-colors-grid");
            for (const color of Object.values(colors))
            {
                $(`<div class='predefined-colors-grid-block'></div>`)
                    .appendTo(grid)
                    .css("background", color)
                    .attr("data-color", color)
                    .on("click", e =>
                    {
                        $(`input[key='customStyleColor']`)
                            .val($(e.target).attr("data-color"))
                            .trigger("input");
                        $("div.custom-color-preview").on("click");
                    });
            }
        }
        new SpinQuery(
            () => $("body"),
            it => it.length > 0 && unsafeWindow.$,
            it =>
            {
                addSettingsIcon(it);
                const settingsBox = resources.data.guiSettingsDom;
                if (settingsBox)
                {
                    $("body").append(settingsBox);
                    setupEvents();
                    fillSvgData();
                    reloadGuiSettings();
                    listenDependencies();
                    addPredefinedColors();
                }
            }
        ).start();
    };
})();

this.offlineData["https://raw.githubusercontent.com/the1812/Bilibili-Evolved/master/style/dark-styles.min.js"] = (()=>{return(e,l)=>{if(e.useNewStyle){l.applyStyle("darkStyle","bilibili-new-style-dark")}}})();
this.offlineData["https://raw.githubusercontent.com/the1812/Bilibili-Evolved/master/style/new-styles.min.js"] = (()=>{return(e,l)=>{new SpinQuery(()=>$(".nav-search-keyword"),e=>e.length>0&&e.attr("placeholder").length>0,e=>e.attr("placeholder","搜索")).start();SpinQuery.any(()=>$(".custom-scrollbar"),e=>e.removeClass("custom-scrollbar"));const r=document.getElementsByClassName("bili-wrapper")[0];let t=false;if(r instanceof Element){t=parseInt(window.getComputedStyle(r).height)===50}if(t){l.applyStyle("style","bilibili-new-style")}else{l.applyStyle("oldStyle","bilibili-new-style")}if(e.overrideNavBar){new SpinQuery(()=>$(".search").not(".filter-item"),e=>e.length>0&&$(".nav-con.fr").length>0,e=>{e.detach().insertAfter(".nav-con.fr")}).start();SpinQuery.any(()=>$("input.search-keyword"),e=>e.attr("placeholder","搜索"));l.applyStyle("navbarOverrideStyle","bilibili-nav-bar-override");if(!e.showBanner){l.applyStyle("noBannerStyle","bilibili-banner-override")}}}})();
this.offlineData["https://raw.githubusercontent.com/the1812/Bilibili-Evolved/master/touch/touch-navbar.min.js"] = (()=>{return()=>{SpinQuery.count(()=>$("ul.fr>li.nav-item").not(".profile-info"),6,n=>{const r=(n,r)=>{const t=$(r);t.css("cursor","pointer");const o=t.find("a.t");o.removeAttr("href")};n.each(r)})}})();
this.offlineData["https://raw.githubusercontent.com/the1812/Bilibili-Evolved/master/touch/touch-player.min.js"] = (()=>{return(i,t)=>{const e=(i,t)=>{return i.data("events")[t][0].handler};const s=i=>{let t=0;let e=0;while(i&&!isNaN(i.offsetLeft)&&!isNaN(i.offsetTop)){t+=i.offsetLeft-i.scrollLeft;e+=i.offsetTop-i.scrollTop;i=i.offsetParent}return{x:t,y:e}};const o=(i,t=1)=>{const e=i.toString();const s=e.indexOf(".");if(s!==-1){if(e.length-s>t+1){return e.substring(0,s+t+1)}else{return e}}else{return e+".0"}};const n=i=>{i=Math.abs(i);const t=Math.floor(i/3600);const e=Math.floor((i-t*3600)/60);const s=i-t*3600-e*60;let n=o(s)+"秒";if(e>0){n=e+"分"+n}if(t>0){n=t+"小时"+n}return n};const l=i=>{i=Math.abs(i);const t=Math.floor(i/3600);const e=Math.floor((i-t*3600)/60);const s=i-t*3600-e*60;let n=(s<10?"0":"")+o(s);n=(e<10?"0":"")+e+":"+n;n=(t<10?"0":"")+t+":"+n;return n};class a{constructor(i){this.action=new c(i);this.onTouchStart=null;this.onTouchEnd=null;this._direction=null;i.addEventListener("touchstart",i=>{this._xDown=i.touches[0].clientX;this._yDown=i.touches[0].clientY;if(this.onTouchStart){this.onTouchStart(i)}});i.addEventListener("touchmove",t=>{if(!this._xDown||!this._yDown){return}const e=t.touches[0].clientX;const o=t.touches[0].clientY;const n=s(i);const l={x:(t.touches[0].pageX-n.x)/i.clientWidth,y:(t.touches[0].pageY-n.y)/i.clientHeight,width:i.clientWidth,height:i.clientHeight};const a=this._xDown-e;const c=this._yDown-o;if(!this._direction){let i="";if(Math.abs(a)>Math.abs(c)){i="horizontal"}else{i="vertical"}this._direction=i;t.preventDefault()}else{if(this._direction==="vertical"){this.action.startAction(this._direction,c,l)}else if(this._direction==="horizontal"){this.action.startAction(this._direction,-a,l)}t.preventDefault()}});i.addEventListener("touchend",i=>{this._xDown=null;this._yDown=null;this._direction=null;if(this.onTouchEnd){this.onTouchEnd(i)}})}}class c{constructor(i){this.lowSpeedForward=null;this.lowSpeedBackward=null;this.mediumSpeedForward=null;this.mediumSpeedBackward=null;this.highSpeedForward=null;this.highSpeedBackward=null;this.lowVolumeUp=null;this.lowVolumeDown=null;this.mediumVolumeUp=null;this.mediumVolumeDown=null;this.highVolumeUp=null;this.highVolumeDown=null;this.speedCancel=null;this.volumeCancel=null;this.minSwipeDistance=20;this.onActionStart=null;this.onActionEnd=null;this._element=i;this._touchStart=false;this._startPosition=null;this._lastAction=null;i.addEventListener("touchstart",()=>{this._touchStart=true});i.addEventListener("touchend",()=>{this._startPosition=null;this.onActionEnd&&this.onActionEnd(this._lastAction);this._lastAction=null})}startAction(i,t,e){if(this._touchStart){this.onActionStart&&this.onActionStart();this._startPosition=e;this._touchStart=false}if(i==="vertical"){if(Math.abs(t)<this.minSwipeDistance){this.volumeCancel&&this.volumeCancel();this._lastAction=null}else{let i=0;let s=undefined;let o=undefined;if(this._startPosition.x<1/3){i=.4;s=this.lowVolumeUp;o=this.lowVolumeDown}else if(this._startPosition.x>=1/3&&this._startPosition.x<=2/3){i=1;s=this.mediumVolumeUp;o=this.mediumVolumeDown}else{i=2;s=this.highVolumeUp;o=this.highVolumeDown}if(t>0){const o=Math.round(i*100*(t-this.minSwipeDistance)/(1.5*e.height));s&&s(o);this._lastAction={type:"volume",volume:o}}else{const s=Math.round(i*100*(t+this.minSwipeDistance)/(1.5*e.height));o&&o(s);this._lastAction={type:"volume",volume:s}}}}else if(i==="horizontal"){if(e.y<1/3&&(e.x<.1||e.x>.9)||Math.abs(t)<this.minSwipeDistance){this.speedCancel&&this.speedCancel();this._lastAction=null}else{let i=0;let e=undefined;let s=undefined;if(this._startPosition.y<1/3){i=.05;e=this.lowSpeedForward;s=this.lowSpeedBackward}else if(this._startPosition.y>=1/3&&this._startPosition.y<=2/3){i=.2;e=this.mediumSpeedForward;s=this.mediumSpeedBackward}else{i=1;e=this.highSpeedForward;s=this.highSpeedBackward}if(t>0){const s=(t-this.minSwipeDistance)*i;e&&e(s);this._lastAction={type:"playback",seconds:s}}else{const e=(t+this.minSwipeDistance)*i;s&&s(e);this._lastAction={type:"playback",seconds:e}}}}}}SpinQuery.any(()=>$(".bilibili-player-video-web-fullscreen"),i=>{if(!i.hasClass("bilibili-player-video-btn")&&$(".bilibili-player-video-btn-fullscreen").data("events")){const t=e($(".bilibili-player-video-btn-fullscreen"),"click");i.detach().insertAfter(".bilibili-player-video-btn-widescreen").addClass("bilibili-player-video-btn").on("click",t)}});SpinQuery.any(()=>$(".bilibili-player-iconfont,.bilibili-player-video-quality-menu"),i=>i.unbind("click"));SpinQuery.count(()=>$(".bilibili-player-video,video"),2,i=>{if($(".touch-video-box").length===0){$(".bilibili-player-video-subtitle").before(`<div class='touch-video-box-wrapper'>\n                            <div class='touch-video-box'>\n                                <div class='touch-video-info'></div>\n                                <div class='touch-progress'></div>\n                            </div>\n                        </div>`);const t=$("video");const e=t.prop("duration");const s=new a(i.get(0));const c=document.getElementsByClassName("touch-video-info")[0];const h=document.getElementsByClassName("touch-video-box")[0];let r=Math.round(t.prop("volume")*100);const d=i=>{i/=100;if(i<0){i=0}else if(i>1){i=1}t.prop("volume",i);$(".bilibili-player-video-volume-num").text(Math.round(i*100));$(".bui-thumb").css("transform",`translateY(-${48*i}px)`);$(".bui-track-vertical .bui-bar").css("transform",`scaleY(${i})`);if(i===0){$(".bilibili-player-video-btn-volume").addClass(".video-state-volume-min");$(".bilibili-player-video-btn-volume").removeClass(".video-state-volume-max");t.prop("muted",true)}else if(i===1){$(".bilibili-player-video-btn-volume").removeClass(".video-state-volume-min");$(".bilibili-player-video-btn-volume").addClass(".video-state-volume-max");t.prop("muted",false)}else{$(".bilibili-player-video-btn-volume").removeClass(".video-state-volume-min");$(".bilibili-player-video-btn-volume").removeClass(".video-state-volume-max");t.prop("muted",false)}$(".bpui-slider-progress").css("height",i*100+"%");$(".bpui-slider-handle").css("bottom",(35+i*230)/3+"%");if(i===0){$(".icon-24soundoff").show();$(".icon-24soundlarge").hide();$(".icon-24soundsmall").hide()}else if(i>=.5){$(".icon-24soundoff").hide();$(".icon-24soundlarge").show();$(".icon-24soundsmall").hide()}else{$(".icon-24soundoff").hide();$(".icon-24soundlarge").hide();$(".icon-24soundsmall").show()}};s.action.onActionStart=(()=>{h.style.display="flex";c.innerHTML="";r=Math.round(t.prop("volume")*100)});const u=i=>{return s=>{const a=t.prop("currentTime");let h=`<div class='touch-row'><span class='touch-speed'>${i}速</span><span class='touch-info'>进度: ${s>0?"+":"-"}`;const r=`</span></div><div class='touch-row'><div class='videoshot'></div><span class='touch-result'>`;const d=a+s;let u="0%";if(d>e){u="100%";h+=`${n(e-a)}${r}${l(a)} → ${l(e)} (${u})`}else if(d<0){u="0%";h+=`${n(a)}${r}${l(a)} → ${l(0)} (${u})`}else{u=o(100*d/e)+"%";h+=`${n(s)}${r}${l(a)} → ${l(d)} (${u})`}c.innerHTML=h+`</span></div><div class='touch-progress'></div>`;$(".touch-progress").css("width",u)}};s.action.lowSpeedBackward=u("低");s.action.lowSpeedForward=u("低");s.action.mediumSpeedBackward=u("中");s.action.mediumSpeedForward=u("中");s.action.highSpeedBackward=u("高");s.action.highSpeedForward=u("高");const p=i=>{return t=>{let e=`<div class='touch-row'><span class='touch-speed'>${i}速</span><span class='touch-info'>音量: ${t>0?"+":"-"}`;const s=`</span></div><div class='touch-row'><span class='touch-result'>`;const o=r+t;if(o>100){e+=`${100-r}${s}${r} → 100`;d(100);$(".touch-progress").css("width","100%")}else if(o<0){e+=`${r}${s}${r} → 0`;d(0);$(".touch-progress").css("width","0%")}else{e+=`${Math.abs(t)}${s}${r} → ${o}`;d(o);$(".touch-progress").css("width",o+"%")}c.innerHTML=e+`</span></div><div class='touch-progress'></div>`}};s.action.lowVolumeUp=p("低");s.action.lowVolumeDown=p("低");s.action.mediumVolumeUp=p("中");s.action.mediumVolumeDown=p("中");s.action.highVolumeUp=p("高");s.action.highVolumeDown=p("高");s.action.speedCancel=(()=>{c.innerHTML=`松开手指,取消进退`});s.action.volumeCancel=(()=>{c.innerHTML=`松开手指,取消调整`;d(r)});s.action.onActionEnd=(i=>{h.style.display="none";c.innerHTML="";if(i){if(i.type==="playback"){let s=t.prop("currentTime");s+=i.seconds;if(s<0){s=0}else if(s>e){s=e}t.prop("currentTime",s)}}})}});t.applyStyle("touchPlayerStyle","bilibili-touch-video-player")}})();
this.offlineData["https://raw.githubusercontent.com/the1812/Bilibili-Evolved/master/utils/expand-danmaku.min.js"] = (()=>{return()=>{SpinQuery.any(()=>$(".bui-collapse-header"),e=>{if(parseInt($(".bui-collapse-body").css("height"))===0&&$(".bui-collapse-arrow-text").text()==="展开"){e.click()}})}})();
this.offlineData["https://raw.githubusercontent.com/the1812/Bilibili-Evolved/master/utils/remove-promotions.min.js"] = (()=>{return(e,o)=>{o.applyStyle("removeAdsStyle","remove-promotions-style")}})();
this.offlineData["https://raw.githubusercontent.com/the1812/Bilibili-Evolved/master/utils/watchlater.min.js"] = (()=>{return()=>{const t=t=>{if(t.attr("href").indexOf("watchlater")!==0){const a=t.map((t,a)=>{const r=$(a).attr("href");if(r){const t=r.match(/av[\d]+/);if(t&&t[0]){return"https://www.bilibili.com/"+t[0]}}return"javascript:;"});t.each((t,r)=>$(r).attr("href",a[t]).attr("target","_blank"))}};SpinQuery.any(()=>$(".av-item>a"),a=>t(a));SpinQuery.any(()=>$(".av-about>a"),a=>t(a));SpinQuery.any(()=>$("div.watch-later-m>ul>div>li>a"),a=>t(a));SpinQuery.any(()=>$(".read-more.mr"),t=>t.remove());SpinQuery.any(()=>$(".read-more-grp>.read-more"),t=>t.css({float:"none",width:"auto"}));new SpinQuery(()=>document.URL.match(/av[\d]+/),t=>t&&document.URL.indexOf("watchlater")!==-1,t=>{const a=t[0];if(a){window.location.replace(`https://www.bilibili.com/${a}`)}}).start()}})();
 const foreground = (() =>
            {
                const regex = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(settings.customStyleColor);
                const color = regex ? {
                    r: parseInt(regex[1], 16),
                    g: parseInt(regex[2], 16),
                    b: parseInt(regex[3], 16)
                } : undefined;
                if (color)
                {
                    const grey = 1 - (0.299 * color.r + 0.587 * color.g + 0.114 * color.b) / 255;
                    if (grey < 0.35)
                    {
                        return "#000";
                    }
                    else
                    {
                        return "#fff";
                    }
                }
                else
                {
                    return "#fff";
                }
            })();
            settings.foreground = foreground;
            settings.brightness = `${foreground === "#000" ? "100" : "0"}%`;
            settings.filterBrightness = foreground === "#000" ? "0" : "100";
        }
        ajax(url, done)
        {
            done(this.offlineData[url]);
        }
        fetch(callback)
        {
            this.callback = callback;
            const replaceCustomColor = (style) =>
            {
                for (const key of Object.keys(settings))
                {
                    style = style.replace(new RegExp("\\$" + key, "g"), settings[key]);
                }
                return style;
            };
            const urls = ExternalResource.resourceUrls;
            const resourceCount = Object.keys(urls).length;
            let downloadedCount = 0;
            for (const key in urls)
            {
                const url = urls[key];
                this.ajax(url, data =>
                {
                    if (url.indexOf(".scss") !== -1)
                    {
                        this.data[key] = replaceCustomColor(data);
                    }
                    else
                    {
                        this.data[key] = data;
                    }
                    downloadedCount++;
                    if (downloadedCount >= resourceCount)
                    {
                        this.apply();
                        if (this.callback)
                        {
                            this.callback();
                        }
                    }
                });
            }
        }
        getStyle(key, id)
        {
            return `<style id='${id}'>${this.data[key]}</style>`;
        }
        applyStyle(key, id)
        {
            if ($(`#${id}`).length === 0)
            {
                $("html").prepend(this.getStyle(key, id));
            }
        }
        apply()
        {
            for (const key in settings)
            {
                if (settings[key] === true)
                {
                    const func = this.data[key];
                    if (func)
                    {
                        func(settings, this);
                        if (this.ajaxReload.indexOf(key) !== -1)
                        {
                            $(document).ajaxComplete(() =>
                            {
                                func(settings, this);
                            });
                        }
                    }
                }
            }
        }
    }

    loadSettings();
    const resources = new ExternalResource();
    resources.fetch();
})(window.jQuery.noConflict(true));
