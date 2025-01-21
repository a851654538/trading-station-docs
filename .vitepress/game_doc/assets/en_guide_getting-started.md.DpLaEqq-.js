import{_ as i,c as a,a2 as e,o as t}from"./chunks/framework.RuphUerr.js";const c=JSON.parse('{"title":"Getting Started","description":"","frontmatter":{},"headers":[],"relativePath":"en/guide/getting-started.md","filePath":"en/guide/getting-started.md","lastUpdated":1736853199000}'),n={name:"en/guide/getting-started.md"};function l(p,s,h,d,o,r){return t(),a("div",null,s[0]||(s[0]=[e(`<h1 id="getting-started" tabindex="-1">Getting Started <a class="header-anchor" href="#getting-started" aria-label="Permalink to &quot;Getting Started&quot;">​</a></h1><h2 id="try-it-online" tabindex="-1">Try It Online <a class="header-anchor" href="#try-it-online" aria-label="Permalink to &quot;Try It Online&quot;">​</a></h2><p>You can try VitePress directly in your browser on <a href="https://vitepress.new" target="_blank" rel="noreferrer">StackBlitz</a>.</p><h2 id="installation" tabindex="-1">Installation <a class="header-anchor" href="#installation" aria-label="Permalink to &quot;Installation&quot;">​</a></h2><h3 id="prerequisites" tabindex="-1">Prerequisites <a class="header-anchor" href="#prerequisites" aria-label="Permalink to &quot;Prerequisites&quot;">​</a></h3><ul><li><a href="https://nodejs.org/" target="_blank" rel="noreferrer">Node.js</a> version 18 or higher.</li><li>Terminal for accessing VitePress via its command line interface (CLI).</li><li>Text Editor with <a href="https://en.wikipedia.org/wiki/Markdown" target="_blank" rel="noreferrer">Markdown</a> syntax support. <ul><li><a href="https://code.visualstudio.com/" target="_blank" rel="noreferrer">VSCode</a> is recommended, along with the <a href="https://marketplace.visualstudio.com/items?itemName=Vue.volar" target="_blank" rel="noreferrer">official Vue extension</a>.</li></ul></li></ul><p>VitePress can be used on its own, or be installed into an existing project. In both cases, you can install it with:</p><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-obsyw" id="tab-f_DAQkc" checked><label data-title="npm" for="tab-f_DAQkc">npm</label><input type="radio" name="group-obsyw" id="tab-pcFF_7F"><label data-title="pnpm" for="tab-pcFF_7F">pnpm</label><input type="radio" name="group-obsyw" id="tab-z81Ydkz"><label data-title="yarn" for="tab-z81Ydkz">yarn</label><input type="radio" name="group-obsyw" id="tab-jbRXs3s"><label data-title="yarn (pnp)" for="tab-jbRXs3s">yarn (pnp)</label><input type="radio" name="group-obsyw" id="tab-WO5dYt3"><label data-title="bun" for="tab-WO5dYt3">bun</label></div><div class="blocks"><div class="language-sh vp-adaptive-theme active"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> npm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> add</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -D</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> vitepress</span></span></code></pre></div><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> pnpm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> add</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -D</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> vitepress</span></span></code></pre></div><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> yarn</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> add</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -D</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> vitepress</span></span></code></pre></div><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> yarn</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> add</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -D</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> vitepress</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> vue</span></span></code></pre></div><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> bun</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> add</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -D</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> vitepress</span></span></code></pre></div></div></div><details class="details custom-block"><summary>Getting missing peer deps warnings?</summary><p>If using PNPM, you will notice a missing peer warning for <code>@docsearch/js</code>. This does not prevent VitePress from working. If you wish to suppress this warning, add the following to your <code>package.json</code>:</p><div class="language-json vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;pnpm&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;peerDependencyRules&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;ignoreMissing&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: [</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">      &quot;@algolia/client-search&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">      &quot;search-insights&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    ]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div></details><div class="tip custom-block"><p class="custom-block-title">NOTE</p><p>VitePress is an ESM-only package. Don&#39;t use <code>require()</code> to import it, and make sure your nearest <code>package.json</code> contains <code>&quot;type&quot;: &quot;module&quot;</code>, or change the file extension of your relevant files like <code>.vitepress/config.js</code> to <code>.mjs</code>/<code>.mts</code>. Refer to <a href="http://vitejs.dev/guide/troubleshooting.html#this-package-is-esm-only" target="_blank" rel="noreferrer">Vite&#39;s troubleshooting guide</a> for more details. Also, inside async CJS contexts, you can use <code>await import(&#39;vitepress&#39;)</code> instead.</p></div><h3 id="setup-wizard" tabindex="-1">Setup Wizard <a class="header-anchor" href="#setup-wizard" aria-label="Permalink to &quot;Setup Wizard&quot;">​</a></h3><p>VitePress ships with a command line setup wizard that will help you scaffold a basic project. After installation, start the wizard by running:</p><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-Aps1n" id="tab-CbtSOZd" checked><label data-title="npm" for="tab-CbtSOZd">npm</label><input type="radio" name="group-Aps1n" id="tab--cUUdLD"><label data-title="pnpm" for="tab--cUUdLD">pnpm</label><input type="radio" name="group-Aps1n" id="tab-gsK_bKi"><label data-title="yarn" for="tab-gsK_bKi">yarn</label><input type="radio" name="group-Aps1n" id="tab-BSBUvbP"><label data-title="bun" for="tab-BSBUvbP">bun</label></div><div class="blocks"><div class="language-sh vp-adaptive-theme active"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> npx</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> vitepress</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> init</span></span></code></pre></div><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> pnpm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> vitepress</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> init</span></span></code></pre></div><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> yarn</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> vitepress</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> init</span></span></code></pre></div><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> bun</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> vitepress</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> init</span></span></code></pre></div></div></div><p>You will be greeted with a few simple questions:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#959da5;--shiki-dark:#959da5;">┌</span><span style="--shiki-light:#1b7c83;--shiki-light-font-weight:bold;--shiki-dark:#39c5cf;--shiki-dark-font-weight:bold;">  Welcome to VitePress!</span></span>
<span class="line"><span style="--shiki-light:#959da5;--shiki-dark:#959da5;">│</span></span>
<span class="line"><span style="--shiki-light:#28a745;--shiki-dark:#34d058;">◇</span><span style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;">  Where should VitePress initialize the config?</span></span>
<span class="line"><span style="--shiki-light:#959da5;--shiki-dark:#959da5;">│</span><span style="--shiki-light:#24292e80;--shiki-dark:#e1e4e880;">  ./docs</span></span>
<span class="line"><span style="--shiki-light:#959da5;--shiki-dark:#959da5;">│</span></span>
<span class="line"><span style="--shiki-light:#28a745;--shiki-dark:#34d058;">◇</span><span style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;">  Site title:</span></span>
<span class="line"><span style="--shiki-light:#959da5;--shiki-dark:#959da5;">│</span><span style="--shiki-light:#24292e80;--shiki-dark:#e1e4e880;">  My Awesome Project</span></span>
<span class="line"><span style="--shiki-light:#959da5;--shiki-dark:#959da5;">│</span></span>
<span class="line"><span style="--shiki-light:#28a745;--shiki-dark:#34d058;">◇</span><span style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;">  Site description:</span></span>
<span class="line"><span style="--shiki-light:#959da5;--shiki-dark:#959da5;">│</span><span style="--shiki-light:#24292e80;--shiki-dark:#e1e4e880;">  A VitePress Site</span></span>
<span class="line"><span style="--shiki-light:#959da5;--shiki-dark:#959da5;">│</span></span>
<span class="line"><span style="--shiki-light:#1b7c83;--shiki-dark:#39c5cf;">◆</span><span style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;">  Theme:</span></span>
<span class="line"><span style="--shiki-light:#1b7c83;--shiki-dark:#39c5cf;">│</span><span style="--shiki-light:#28a745;--shiki-dark:#34d058;">  ●</span><span style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;"> Default Theme </span><span style="--shiki-light:#24292e80;--shiki-dark:#e1e4e880;">(Out of the box, good-looking docs)</span></span>
<span class="line"><span style="--shiki-light:#1b7c83;--shiki-dark:#39c5cf;">│</span><span style="--shiki-light:#24292e80;--shiki-dark:#e1e4e880;">  ○</span><span style="--shiki-light:#24292e80;--shiki-dark:#e1e4e880;"> Default Theme + Customization</span></span>
<span class="line"><span style="--shiki-light:#1b7c83;--shiki-dark:#39c5cf;">│</span><span style="--shiki-light:#24292e80;--shiki-dark:#e1e4e880;">  ○</span><span style="--shiki-light:#24292e80;--shiki-dark:#e1e4e880;"> Custom Theme</span></span>
<span class="line"><span style="--shiki-light:#1b7c83;--shiki-dark:#39c5cf;">└</span></span></code></pre></div><div class="tip custom-block"><p class="custom-block-title">Vue as Peer Dependency</p><p>If you intend to perform customization that uses Vue components or APIs, you should also explicitly install <code>vue</code> as a dependency.</p></div><h2 id="file-structure" tabindex="-1">File Structure <a class="header-anchor" href="#file-structure" aria-label="Permalink to &quot;File Structure&quot;">​</a></h2><p>If you are building a standalone VitePress site, you can scaffold the site in your current directory (<code>./</code>). However, if you are installing VitePress in an existing project alongside other source code, it is recommended to scaffold the site in a nested directory (e.g. <code>./docs</code>) so that it is separate from the rest of the project.</p><p>Assuming you chose to scaffold the VitePress project in <code>./docs</code>, the generated file structure should look like this:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>.</span></span>
<span class="line"><span>├─ docs</span></span>
<span class="line"><span>│  ├─ .vitepress</span></span>
<span class="line"><span>│  │  └─ config.js</span></span>
<span class="line"><span>│  ├─ api-examples.md</span></span>
<span class="line"><span>│  ├─ markdown-examples.md</span></span>
<span class="line"><span>│  └─ index.md</span></span>
<span class="line"><span>└─ package.json</span></span></code></pre></div><p>The <code>docs</code> directory is considered the <strong>project root</strong> of the VitePress site. The <code>.vitepress</code> directory is a reserved location for VitePress&#39; config file, dev server cache, build output, and optional theme customization code.</p><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>By default, VitePress stores its dev server cache in <code>.vitepress/cache</code>, and the production build output in <code>.vitepress/dist</code>. If using Git, you should add them to your <code>.gitignore</code> file. These locations can also be <a href="./../reference/site-config#outdir">configured</a>.</p></div><h3 id="the-config-file" tabindex="-1">The Config File <a class="header-anchor" href="#the-config-file" aria-label="Permalink to &quot;The Config File&quot;">​</a></h3><p>The config file (<code>.vitepress/config.js</code>) allows you to customize various aspects of your VitePress site, with the most basic options being the title and description of the site:</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// .vitepress/config.js</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> default</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  // site-level options</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  title: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;VitePress&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  description: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;Just playing around.&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  themeConfig: {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // theme-level options</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><p>You can also configure the behavior of the theme via the <code>themeConfig</code> option. Consult the <a href="./../reference/site-config">Config Reference</a> for full details on all config options.</p><h3 id="source-files" tabindex="-1">Source Files <a class="header-anchor" href="#source-files" aria-label="Permalink to &quot;Source Files&quot;">​</a></h3><p>Markdown files outside the <code>.vitepress</code> directory are considered <strong>source files</strong>.</p><p>VitePress uses <strong>file-based routing</strong>: each <code>.md</code> file is compiled into a corresponding <code>.html</code> file with the same path. For example, <code>index.md</code> will be compiled into <code>index.html</code>, and can be visited at the root path <code>/</code> of the resulting VitePress site.</p><p>VitePress also provides the ability to generate clean URLs, rewrite paths, and dynamically generate pages. These will be covered in the <a href="./routing">Routing Guide</a>.</p><h2 id="up-and-running" tabindex="-1">Up and Running <a class="header-anchor" href="#up-and-running" aria-label="Permalink to &quot;Up and Running&quot;">​</a></h2><p>The tool should have also injected the following npm scripts to your <code>package.json</code> if you allowed it to do so during the setup process:</p><div class="language-json vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#B31D28;--shiki-light-font-style:italic;--shiki-dark:#FDAEB7;--shiki-dark-font-style:italic;">  ...</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;scripts&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;docs:dev&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;vitepress dev docs&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;docs:build&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;vitepress build docs&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;docs:preview&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;vitepress preview docs&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  },</span></span>
<span class="line"><span style="--shiki-light:#B31D28;--shiki-light-font-style:italic;--shiki-dark:#FDAEB7;--shiki-dark-font-style:italic;">  ...</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><p>The <code>docs:dev</code> script will start a local dev server with instant hot updates. Run it with the following command:</p><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-uwyLu" id="tab-B3wU3KP" checked><label data-title="npm" for="tab-B3wU3KP">npm</label><input type="radio" name="group-uwyLu" id="tab--Sn7XsZ"><label data-title="pnpm" for="tab--Sn7XsZ">pnpm</label><input type="radio" name="group-uwyLu" id="tab-TPgOiff"><label data-title="yarn" for="tab-TPgOiff">yarn</label><input type="radio" name="group-uwyLu" id="tab-yuW4Aq3"><label data-title="bun" for="tab-yuW4Aq3">bun</label></div><div class="blocks"><div class="language-sh vp-adaptive-theme active"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> npm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> run</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> docs:dev</span></span></code></pre></div><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> pnpm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> run</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> docs:dev</span></span></code></pre></div><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> yarn</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> docs:dev</span></span></code></pre></div><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> bun</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> run</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> docs:dev</span></span></code></pre></div></div></div><p>Instead of npm scripts, you can also invoke VitePress directly with:</p><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-eD50l" id="tab-3v_JKhN" checked><label data-title="npm" for="tab-3v_JKhN">npm</label><input type="radio" name="group-eD50l" id="tab--NbIaAg"><label data-title="pnpm" for="tab--NbIaAg">pnpm</label><input type="radio" name="group-eD50l" id="tab-uKI5auo"><label data-title="yarn" for="tab-uKI5auo">yarn</label><input type="radio" name="group-eD50l" id="tab-Mr-Znqx"><label data-title="bun" for="tab-Mr-Znqx">bun</label></div><div class="blocks"><div class="language-sh vp-adaptive-theme active"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> npx</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> vitepress</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> dev</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> docs</span></span></code></pre></div><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> pnpm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> vitepress</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> dev</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> docs</span></span></code></pre></div><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> yarn</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> vitepress</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> dev</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> docs</span></span></code></pre></div><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> bun</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> vitepress</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> dev</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> docs</span></span></code></pre></div></div></div><p>More command line usage is documented in the <a href="./../reference/cli">CLI Reference</a>.</p><p>The dev server should be running at <code>http://localhost:5173</code>. Visit the URL in your browser to see your new site in action!</p><h2 id="what-s-next" tabindex="-1">What&#39;s Next? <a class="header-anchor" href="#what-s-next" aria-label="Permalink to &quot;What&#39;s Next?&quot;">​</a></h2><ul><li><p>To better understand how markdown files are mapped to generated HTML, proceed to the <a href="./routing">Routing Guide</a>.</p></li><li><p>To discover more about what you can do on the page, such as writing markdown content or using Vue Components, refer to the &quot;Writing&quot; section of the guide. A great place to start would be to learn about <a href="./markdown">Markdown Extensions</a>.</p></li><li><p>To explore the features provided by the default documentation theme, check out the <a href="./../reference/default-theme-config">Default Theme Config Reference</a>.</p></li><li><p>If you want to further customize the appearance of your site, explore how to either <a href="./extending-default-theme">Extend the Default Theme</a> or <a href="./custom-theme">Build a Custom Theme</a>.</p></li><li><p>Once your documentation site takes shape, make sure to read the <a href="./deploy">Deployment Guide</a>.</p></li></ul>`,41)]))}const g=i(n,[["render",l]]);export{c as __pageData,g as default};
