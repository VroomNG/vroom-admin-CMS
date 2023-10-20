/*!
floating-scroll v3.2.0
https://amphiluke.github.io/floating-scroll/
(c) 2022 Amphiluke
*/
!function(t,i){"object"==typeof exports&&"undefined"!=typeof module?i(require("jquery")):"function"==typeof define&&define.amd?define(["jquery"],i):i((t="undefined"!=typeof globalThis?globalThis:t||self).jQuery)}(this,(function(t){"use strict";var i="horizontal",n="vertical",e={init:function(t,n){var e=this;e.orientationProps=function(t){var n=t===i;return{ORIENTATION:t,SIZE:n?"width":"height",X_SIZE:n?"height":"width",OFFSET_SIZE:n?"offsetWidth":"offsetHeight",OFFSET_X_SIZE:n?"offsetHeight":"offsetWidth",CLIENT_SIZE:n?"clientWidth":"clientHeight",CLIENT_X_SIZE:n?"clientHeight":"clientWidth",INNER_X_SIZE:n?"innerHeight":"innerWidth",SCROLL_SIZE:n?"scrollWidth":"scrollHeight",SCROLL_POS:n?"scrollLeft":"scrollTop",START:n?"left":"top",X_START:n?"top":"left",X_END:n?"bottom":"right"}}(n);var o=t.closest(".fl-scrolls-body");o.length&&(e.scrollBody=o),e.container=t[0],e.visible=!0,e.initWidget(),e.updateAPI(),e.addEventHandlers(),e.skipSyncContainer=e.skipSyncWidget=!1},initWidget:function(){var i=this,n=i.orientationProps,e=n.ORIENTATION,o=n.SIZE,r=n.SCROLL_SIZE,c=i.widget=t('<div class="fl-scrolls" data-orientation="'+e+'"></div>');t("<div></div>").appendTo(c)[o](i.container[r]),c.appendTo(i.container)},addEventHandlers:function(){var i=this;(i.eventHandlers=[{$el:t(window),handlers:{"destroyDetached.fscroll":function(t){"fscroll"===t.namespace&&i.destroyDetachedAPI()}}},{$el:i.scrollBody||t(window),handlers:{scroll:function(){i.updateAPI()},resize:function(){i.updateAPI()}}},{$el:i.widget,handlers:{scroll:function(){i.visible&&!i.skipSyncContainer&&i.syncContainer(),i.skipSyncContainer=!1}}},{$el:t(i.container),handlers:{scroll:function(){i.skipSyncWidget||i.syncWidget(),i.skipSyncWidget=!1},focusin:function(){setTimeout((function(){i.widget&&i.syncWidget()}),0)},"update.fscroll":function(t){"fscroll"===t.namespace&&i.updateAPI()},"destroy.fscroll":function(t){"fscroll"===t.namespace&&i.destroyAPI()}}}]).forEach((function(t){var i=t.$el,n=t.handlers;return i.bind(n)}))},checkVisibility:function(){var t=this,i=t.widget,n=t.container,e=t.scrollBody,o=t.orientationProps,r=o.SCROLL_SIZE,c=o.OFFSET_SIZE,l=o.X_START,s=o.X_END,d=o.INNER_X_SIZE,a=o.CLIENT_X_SIZE,f=i[0][r]<=i[0][c];if(!f){var h=n.getBoundingClientRect(),u=e?e[0].getBoundingClientRect()[s]:window[d]||document.documentElement[a];f=h[s]<=u||h[l]>u}t.visible===f&&(t.visible=!f,i.toggleClass("fl-scrolls-hidden"))},syncContainer:function(){var t=this,i=t.orientationProps.SCROLL_POS,n=t.widget[0][i];t.container[i]!==n&&(t.skipSyncWidget=!0,t.container[i]=n)},syncWidget:function(){var t=this,i=t.orientationProps.SCROLL_POS,n=t.container[i];t.widget[0][i]!==n&&(t.skipSyncContainer=!0,t.widget[0][i]=n)},updateAPI:function(){var i=this,n=i.orientationProps,e=n.SIZE,o=n.X_SIZE,r=n.OFFSET_X_SIZE,c=n.CLIENT_SIZE,l=n.CLIENT_X_SIZE,s=n.SCROLL_SIZE,d=n.START,a=i.widget,f=i.container,h=i.scrollBody,u=f[c],S=f[s];a[e](u),h||a.css(d,f.getBoundingClientRect()[d]+"px"),t("div",a)[e](S),S>u&&a[o](a[0][r]-a[0][l]+1),i.syncWidget(),i.checkVisibility()},destroyAPI:function(){var t=this;t.eventHandlers.forEach((function(t){var i=t.$el,n=t.handlers;return i.unbind(n)})),t.widget.remove(),t.eventHandlers=t.widget=t.container=t.scrollBody=null},destroyDetachedAPI:function(){t.contains(document.body,this.container)||this.destroyAPI()}};t.fn.floatingScroll=function(o,r){if(void 0===o&&(o="init"),void 0===r&&(r={}),"init"===o){var c=r.orientation,l=void 0===c?i:c;if(l!==i&&l!==n)throw new Error("Scrollbar orientation should be either “horizontal” or “vertical”");this.each((function(i,n){return Object.create(e).init(t(n),l)}))}else Object.prototype.hasOwnProperty.call(e,o+"API")&&this.trigger(o+".fscroll");return this},t((function(){t("body [data-fl-scrolls]").each((function(i,n){var e=t(n);e.floatingScroll("init",e.data("flScrolls")||{})}))}))}));