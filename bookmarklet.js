javascript: (function(){var t={eval:'"!function(){function e(t){return\\"complete\\"!=t.readyState?void window.addEventListener(\\"load\\",function(){e(t)}):(o(t.querySelectorAll(\\"style\\"),function(e){var t=e.innerText,o=n(t);o!=t&&(e.innerHTML=o)}),void o([\\"iframe\\",\\"object\\"],function(n){o(t.querySelectorAll(n),function(n){var t=n.contentDocument;t&&e(t)})}))}function n(e){return e=t(e,\\"writing-mode\\"),e=e.replace(/(-webkit-){2,}/g,\\"-webkit-\\")}function t(e,n){return e.replace(new RegExp(n,\\"g\\"),\\"-webkit-\\"+n)}function o(e,n){for(var t=0;t<e.length;t++)n(e[t])}e(document)}();"'},e=!0;if("object"==typeof this.artoo&&(artoo.settings.reload||(artoo.log.verbose("artoo already exists within this page. No need to inject him again."),artoo.loadSettings(t),artoo.exec(),e=!1)),e){var n=document.getElementsByTagName("body")[0];n||(n=document.createElement("body"),document.documentElement.appendChild(n));var o=document.createElement("script");console.log("artoo.js is loading..."),o.src="//medialab.github.io/artoo/public/dist/artoo-latest.min.js",o.type="text/javascript",o.id="artoo_injected_script",o.setAttribute("settings",JSON.stringify(t)),n.appendChild(o)}}).call(this);