








<!DOCTYPE html>
<html class="ui-light-gray with-header with-top-bar " lang="en">
<head prefix="og: http://ogp.me/ns#">
<meta charset="utf-8">
<meta content="IE=edge" http-equiv="X-UA-Compatible">
<meta content="width=device-width, initial-scale=1" name="viewport">
<title>The Foundation / The Foundation.Gitlab.Io Comments Vssue.Js · GitLab</title>
<script nonce="QpKTzlN4VfX2Twm+2uYUKw==">
//<![CDATA[
window.gon={};gon.features={"blobBlameInfo":true,"highlightJsWorker":true,"removeMonitorMetrics":true,"explainCodeChat":false,"issueEmailParticipants":false,"encodingLogsTree":false,"addBranchRule":false,"pageSpecificStyles":false,"workItems":true,"workItemsMvc":false,"workItemsMvc2":false,"linkedWorkItems":true};gon.licensed_features={"remoteDevelopment":true};
//]]>
</script>

<script nonce="QpKTzlN4VfX2Twm+2uYUKw==">
//<![CDATA[
var gl = window.gl || {};
gl.startup_calls = {"/the-foundation/the-foundation.gitlab.io-comments-vssue.js/-/refs/main/logs_tree/?format=json\u0026offset=0":{},"/the-foundation/the-foundation.gitlab.io-comments-vssue.js/-/blob/main/README.md?format=json\u0026viewer=rich":{}};
gl.startup_graphql_calls = [{"query":"query pathLastCommit($projectPath: ID!, $path: String, $ref: String!, $refType: RefType) {\n  project(fullPath: $projectPath) {\n    __typename\n    id\n    repository {\n      __typename\n      paginatedTree(path: $path, ref: $ref, refType: $refType) {\n        __typename\n        nodes {\n          __typename\n          lastCommit {\n            __typename\n            id\n            sha\n            title\n            titleHtml\n            descriptionHtml\n            message\n            webPath\n            authoredDate\n            authorName\n            authorGravatar\n            author {\n              __typename\n              id\n              name\n              avatarUrl\n              webPath\n            }\n            signature {\n              __typename\n              ... on GpgSignature {\n                gpgKeyPrimaryKeyid\n                verificationStatus\n              }\n              ... on X509Signature {\n                verificationStatus\n                x509Certificate {\n                  id\n                  subject\n                  subjectKeyIdentifier\n                  x509Issuer {\n                    id\n                    subject\n                    subjectKeyIdentifier\n                  }\n                }\n              }\n              ... on SshSignature {\n                verificationStatus\n                keyFingerprintSha256\n              }\n            }\n            pipelines(ref: $ref, first: 1) {\n              __typename\n              edges {\n                __typename\n                node {\n                  __typename\n                  id\n                  detailedStatus {\n                    __typename\n                    id\n                    detailsPath\n                    icon\n                    tooltip\n                    text\n                    group\n                  }\n                }\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n}\n","variables":{"projectPath":"the-foundation/the-foundation.gitlab.io-comments-vssue.js","ref":"main","path":""}}];

if (gl.startup_calls && window.fetch) {
  Object.keys(gl.startup_calls).forEach(apiCall => {
   gl.startup_calls[apiCall] = {
      fetchCall: fetch(apiCall, {
        // Emulate XHR for Rails AJAX request checks
        headers: {
          'X-Requested-With': 'XMLHttpRequest'
        },
        // fetch won’t send cookies in older browsers, unless you set the credentials init option.
        // We set to `same-origin` which is default value in modern browsers.
        // See https://github.com/whatwg/fetch/pull/585 for more information.
        credentials: 'same-origin'
      })
    };
  });
}
if (gl.startup_graphql_calls && window.fetch) {
  const headers = {"X-CSRF-Token":"BOxcqqhVF_cxLJ86LwzgXRGIrzz3ATGSZW3uGVKyGPbPX8iJeolVwW96oqRlTRwR1X_WtrljKNcyE4limyUb5g","x-gitlab-feature-category":"groups_and_projects"};
  const url = `https://gitlab.com/api/graphql`

  const opts = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      ...headers,
    }
  };

  gl.startup_graphql_calls = gl.startup_graphql_calls.map(call => ({
    ...call,
    fetchCall: fetch(url, {
      ...opts,
      credentials: 'same-origin',
      body: JSON.stringify(call)
    })
  }))
}


//]]>
</script>


<link rel="stylesheet" href="/assets/themes/theme_light_gray-e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855.css" />

<link rel="stylesheet" href="/assets/application-cb98c822ad789faeb3e5533132a0b61d8f5e00d4e87a7c2567a4ae25902183c1.css" media="all" />
<link rel="stylesheet" href="/assets/page_bundles/project-efa2881c28afe4ddd175bd20fd12c81fb3e69052b7eaad9b4c4d37b817bcc279.css" media="all" /><link rel="stylesheet" href="/assets/page_bundles/tree-a5089dc5ce426c5f11ae90f6dc4a5b0be7ec204192f87d6438b0500eaf370d7c.css" media="all" /><link rel="stylesheet" href="/assets/page_bundles/projects-cc9a44858264462e84f8adf7211e8b40d69959d1fac83e72332dbca14f05bb31.css" media="all" />
<link rel="stylesheet" href="/assets/application_utilities-fae333e78367efcb57b4da3ba885d907360ec420a629cd22e8ecd5227a952c2c.css" media="all" />


<link rel="stylesheet" href="/assets/fonts-115c4704cb8c77e2fdf3fd0243eebf164e2e9b54bbab7bf6a4c14868b865ddf8.css" media="all" />
<link rel="stylesheet" href="/assets/highlight/themes/white-1b0806cb2775fab529e835804dfb351a11dd641f48d830a28b4b37882174cc0c.css" media="all" />

<script src="/assets/webpack/runtime.c3631862.bundle.js" defer="defer" nonce="QpKTzlN4VfX2Twm+2uYUKw=="></script>
<script src="/assets/webpack/main.ee0214d5.chunk.js" defer="defer" nonce="QpKTzlN4VfX2Twm+2uYUKw=="></script>
<script src="/assets/webpack/tracker.d51310ab.chunk.js" defer="defer" nonce="QpKTzlN4VfX2Twm+2uYUKw=="></script>
<script src="/assets/webpack/analytics.3f7bc4c8.chunk.js" defer="defer" nonce="QpKTzlN4VfX2Twm+2uYUKw=="></script>
<script nonce="QpKTzlN4VfX2Twm+2uYUKw==">
//<![CDATA[
window.snowplowOptions = {"namespace":"gl","hostname":"snowplow.trx.gitlab.net","cookieDomain":".gitlab.com","appId":"gitlab","formTracking":true,"linkClickTracking":true}

gl = window.gl || {};
gl.snowplowStandardContext = {"schema":"iglu:com.gitlab/gitlab_standard/jsonschema/1-0-9","data":{"environment":"production","source":"gitlab-rails","plan":"free","extra":{},"user_id":null,"is_gitlab_team_member":null,"namespace_id":4170095,"project_id":32909927,"context_generated_at":"2024-01-08T13:51:24.974Z"}}
gl.snowplowPseudonymizedPageUrl = "https://gitlab.com/namespace4170095/project32909927";


//]]>
</script>
<link rel="preload" href="/assets/application_utilities-fae333e78367efcb57b4da3ba885d907360ec420a629cd22e8ecd5227a952c2c.css" as="style" type="text/css" nonce="y4vwgFJWsR4vmcgigByHdg==">
<link rel="preload" href="/assets/application-cb98c822ad789faeb3e5533132a0b61d8f5e00d4e87a7c2567a4ae25902183c1.css" as="style" type="text/css" nonce="y4vwgFJWsR4vmcgigByHdg==">
<link rel="preload" href="/assets/highlight/themes/white-1b0806cb2775fab529e835804dfb351a11dd641f48d830a28b4b37882174cc0c.css" as="style" type="text/css" nonce="y4vwgFJWsR4vmcgigByHdg==">
<link crossorigin="" href="https://snowplow.trx.gitlab.net" rel="preconnect">
<link as="font" crossorigin="" href="/assets/gitlab-sans/GitLabSans-1e0a5107ea3bbd4be93e8ad2c503467e43166cd37e4293570b490e0812ede98b.woff2" rel="preload">
<link as="font" crossorigin="" href="/assets/gitlab-sans/GitLabSans-Italic-38eaf1a569a54ab28c58b92a4a8de3afb96b6ebc250cf372003a7b38151848cc.woff2" rel="preload">
<link as="font" crossorigin="" href="/assets/gitlab-mono/GitLabMono-08d2c5e8ff8fd3d2d6ec55bc7713380f8981c35f9d2df14e12b835464d6e8f23.woff2" rel="preload">
<link as="font" crossorigin="" href="/assets/gitlab-mono/GitLabMono-Italic-38e58d8df29485a20c550da1d0111e2c2169f6dcbcf894f2cd3afbdd97bcc588.woff2" rel="preload">
<link rel="preload" href="/assets/fonts-115c4704cb8c77e2fdf3fd0243eebf164e2e9b54bbab7bf6a4c14868b865ddf8.css" as="style" type="text/css" nonce="y4vwgFJWsR4vmcgigByHdg==">



<script src="/assets/webpack/sentry.94b5fdf3.chunk.js" defer="defer" nonce="QpKTzlN4VfX2Twm+2uYUKw=="></script>


<script src="/assets/webpack/commons-pages.search.show-super_sidebar.ca7df1db.chunk.js" defer="defer" nonce="QpKTzlN4VfX2Twm+2uYUKw=="></script>
<script src="/assets/webpack/super_sidebar.dca5caf4.chunk.js" defer="defer" nonce="QpKTzlN4VfX2Twm+2uYUKw=="></script>
<script src="/assets/webpack/commons-pages.groups.boards-pages.groups.details-pages.groups.epic_boards-pages.groups.show-pages.gr-6db31409.784c31f5.chunk.js" defer="defer" nonce="QpKTzlN4VfX2Twm+2uYUKw=="></script>
<script src="/assets/webpack/commons-pages.admin.runners.show-pages.clusters.agents.dashboard-pages.explore.catalog-pages.groups.-bd0c1c0d.9eaa870f.chunk.js" defer="defer" nonce="QpKTzlN4VfX2Twm+2uYUKw=="></script>
<script src="/assets/webpack/commons-pages.groups.security.policies.edit-pages.groups.security.policies.new-pages.projects.blob.s-b77fad0c.0a2a2be1.chunk.js" defer="defer" nonce="QpKTzlN4VfX2Twm+2uYUKw=="></script>
<script src="/assets/webpack/commons-pages.admin.subscriptions.show-pages.groups.security.policies.edit-pages.groups.security.pol-6bfecbfa.51cf7905.chunk.js" defer="defer" nonce="QpKTzlN4VfX2Twm+2uYUKw=="></script>
<script src="/assets/webpack/commons-pages.projects.blob.show-pages.projects.show-pages.projects.snippets.show-pages.projects.tre-c684fcf6.4079f0b9.chunk.js" defer="defer" nonce="QpKTzlN4VfX2Twm+2uYUKw=="></script>
<script src="/assets/webpack/commons-pages.groups.show-pages.projects.blob.show-pages.projects.show-pages.projects.tree.show.8047558b.chunk.js" defer="defer" nonce="QpKTzlN4VfX2Twm+2uYUKw=="></script>
<script src="/assets/webpack/commons-pages.groups.details-pages.groups.show-pages.profiles.notifications.show-pages.projects.show.f02a7bb4.chunk.js" defer="defer" nonce="QpKTzlN4VfX2Twm+2uYUKw=="></script>
<script src="/assets/webpack/commons-pages.projects.blob.show-pages.projects.show-pages.projects.tree.show.8305075e.chunk.js" defer="defer" nonce="QpKTzlN4VfX2Twm+2uYUKw=="></script>
<script src="/assets/webpack/commons-pages.projects.show-pages.projects.tree.show.2a9dfcb9.chunk.js" defer="defer" nonce="QpKTzlN4VfX2Twm+2uYUKw=="></script>
<script src="/assets/webpack/pages.projects.show.b72b65dd.chunk.js" defer="defer" nonce="QpKTzlN4VfX2Twm+2uYUKw=="></script>
<meta content="object" property="og:type">
<meta content="GitLab" property="og:site_name">
<meta content="The Foundation / The Foundation.Gitlab.Io Comments Vssue.Js · GitLab" property="og:title">
<meta content="GitLab.com" property="og:description">
<meta content="/assets/gitlab_com/assets/twitter_card-570ddb06edf56a2312253c5872489847a0f385112ddbcd71ccfa1570febab5d2.jpg" property="og:image">
<meta content="64" property="og:image:width">
<meta content="64" property="og:image:height">
<meta content="/assets/gitlab_com/the-foundation/the-foundation.gitlab.io-comments-vssue.js" property="og:url">
<meta content="summary" property="twitter:card">
<meta content="The Foundation / The Foundation.Gitlab.Io Comments Vssue.Js · GitLab" property="twitter:title">
<meta content="GitLab.com" property="twitter:description">
<meta content="/assets/gitlab_com/assets/twitter_card-570ddb06edf56a2312253c5872489847a0f385112ddbcd71ccfa1570febab5d2.jpg" property="twitter:image">

<meta name="csrf-param" content="authenticity_token" />
<meta name="csrf-token" content="84bFXkaH8mVSKb_amB_UW8IMxfsWB4eirFSmaHS1g6s4NVF9lFuwUwx_gkTSXigXBvu8cVhlnuf7KsETvSKAuw" />
<meta name="csp-nonce" content="QpKTzlN4VfX2Twm+2uYUKw==" />
<meta name="action-cable-url" content="/-/cable" />
<link href="/-/manifest.json" rel="manifest">
<link rel="icon" type="image/png" href="/assets/favicon-72a2cad5025aa931d6ea56c3201d1f18e68a8cd39788c7c80d5b2b82aa5143ef.png" id="favicon" data-original-href="/assets/favicon-72a2cad5025aa931d6ea56c3201d1f18e68a8cd39788c7c80d5b2b82aa5143ef.png" />
<link rel="apple-touch-icon" type="image/x-icon" href="/assets/apple-touch-icon-b049d4bc0dd9626f31db825d61880737befc7835982586d015bded10b4435460.png" />
<link href="/search/opensearch.xml" rel="search" title="Search GitLab" type="application/opensearchdescription+xml">
<link rel="alternate" type="application/atom+xml" title="The Foundation.Gitlab.Io Comments Vssue.Js activity" href="/the-foundation/the-foundation.gitlab.io-comments-vssue.js.atom" />




<meta content="GitLab.com" name="description">
<meta content="#ececef" name="theme-color">
</head>

<body class="tab-width-8 gl-browser-firefox gl-platform-firefox_os" data-find-file="/the-foundation/the-foundation.gitlab.io-comments-vssue.js/-/find_file/main" data-group="the-foundation" data-group-full-path="the-foundation" data-namespace-id="4170095" data-page="projects:show" data-page-type-id="the-foundation.gitlab.io-comments-vssue.js" data-project="the-foundation.gitlab.io-comments-vssue.js" data-project-id="32909927">

<script nonce="QpKTzlN4VfX2Twm+2uYUKw==">
//<![CDATA[
gl = window.gl || {};
gl.client = {"isFirefox":true,"isFirefox Os":true};


//]]>
</script>



<header class="header-logged-out" data-testid="navbar">
<a class="gl-sr-only gl-accessibility" href="#content-body">Skip to content</a>
<div class="container-fluid">
<nav aria-label="Explore GitLab" class="header-logged-out-nav gl-display-flex gl-gap-3 gl-justify-content-space-between">
<div class="header-logged-out-logo gl-display-flex gl-align-items-center">
<span class="gl-sr-only">GitLab</span>
<a title="Homepage" id="logo" class="has-tooltip" aria-label="Homepage" data-track-label="main_navigation" data-track-action="click_gitlab_logo_link" data-track-property="navigation_top" href="/"><svg aria-hidden="true" role="img" class="tanuki-logo" width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path class="tanuki-shape tanuki" d="m24.507 9.5-.034-.09L21.082.562a.896.896 0 0 0-1.694.091l-2.29 7.01H7.825L5.535.653a.898.898 0 0 0-1.694-.09L.451 9.411.416 9.5a6.297 6.297 0 0 0 2.09 7.278l.012.01.03.022 5.16 3.867 2.56 1.935 1.554 1.176a1.051 1.051 0 0 0 1.268 0l1.555-1.176 2.56-1.935 5.197-3.89.014-.01A6.297 6.297 0 0 0 24.507 9.5Z"
        fill="#E24329"/>
  <path class="tanuki-shape right-cheek" d="m24.507 9.5-.034-.09a11.44 11.44 0 0 0-4.56 2.051l-7.447 5.632 4.742 3.584 5.197-3.89.014-.01A6.297 6.297 0 0 0 24.507 9.5Z"
        fill="#FC6D26"/>
  <path class="tanuki-shape chin" d="m7.707 20.677 2.56 1.935 1.555 1.176a1.051 1.051 0 0 0 1.268 0l1.555-1.176 2.56-1.935-4.743-3.584-4.755 3.584Z"
        fill="#FCA326"/>
  <path class="tanuki-shape left-cheek" d="M5.01 11.461a11.43 11.43 0 0 0-4.56-2.05L.416 9.5a6.297 6.297 0 0 0 2.09 7.278l.012.01.03.022 5.16 3.867 4.745-3.584-7.444-5.632Z"
        fill="#FC6D26"/>
</svg>

</a><div class="gl-display-flex gl-align-items-center">
</div>
</div>
<ul class="gl-list-style-none gl-p-0 gl-m-0 gl-display-flex gl-gap-3 gl-align-items-center gl-flex-grow-1">
<li class="header-logged-out-nav-item header-logged-out-dropdown gl-md-display-none">
<button class="header-logged-out-toggle" data-toggle="dropdown" type="button">
<span class="gl-sr-only">
Menu
</span>
<svg class="s16" data-testid="hamburger-icon"><use href="/assets/icons-1563760c6022424ca5187159258484be0c106b044e5e5a1b4f0be7a10cd6c90f.svg#hamburger"></use></svg>
</button>
<div class="dropdown-menu">
<ul>
<li>
<a href="https://about.gitlab.com/why-gitlab">Why GitLab
</a></li>
<li>
<a href="https://about.gitlab.com/pricing">Pricing
</a></li>
<li>
<a href="https://about.gitlab.com/sales">Contact Sales
</a></li>
<li>
<a href="/explore">Explore</a>
</li>
</ul>
</div>
</li>
<li class="header-logged-out-nav-item gl-display-none gl-md-display-inline-block">
<a href="https://about.gitlab.com/why-gitlab">Why GitLab
</a></li>
<li class="header-logged-out-nav-item gl-display-none gl-md-display-inline-block">
<a href="https://about.gitlab.com/pricing">Pricing
</a></li>
<li class="header-logged-out-nav-item gl-display-none gl-md-display-inline-block">
<a href="https://about.gitlab.com/sales">Contact Sales
</a></li>
<li class="header-logged-out-nav-item gl-display-none gl-md-display-inline-block">
<a class="" href="/explore">Explore</a>
</li>
</ul>
<ul class="gl-list-style-none gl-p-0 gl-m-0 gl-display-flex gl-gap-3 gl-align-items-center gl-justify-content-end">
<li class="header-logged-out-nav-item">
<a href="/users/sign_in?redirect_to_referer=yes">Sign in</a>
</li>
<li class="header-logged-out-nav-item">
<a class="gl-button btn btn-md btn-confirm " href="/users/sign_up"><span class="gl-button-text">
Get free trial

</span>

</a></li>
</ul>
</nav>
</div>
</header>

<div class="layout-page page-with-super-sidebar">
<aside class="js-super-sidebar super-sidebar super-sidebar-loading" data-command-palette="{&quot;project_files_url&quot;:&quot;/the-foundation/the-foundation.gitlab.io-comments-vssue.js/-/files/main?format=json&quot;,&quot;project_blob_url&quot;:&quot;/the-foundation/the-foundation.gitlab.io-comments-vssue.js/-/blob/main&quot;}" data-force-desktop-expanded-sidebar="" data-root-path="/" data-sidebar="{&quot;is_logged_in&quot;:false,&quot;context_switcher_links&quot;:[{&quot;title&quot;:&quot;Explore&quot;,&quot;link&quot;:&quot;/explore&quot;,&quot;icon&quot;:&quot;compass&quot;}],&quot;current_menu_items&quot;:[{&quot;id&quot;:&quot;project_overview&quot;,&quot;title&quot;:&quot;The Foundation.Gitlab.Io Comments Vssue.Js&quot;,&quot;icon&quot;:null,&quot;avatar&quot;:null,&quot;entity_id&quot;:32909927,&quot;link&quot;:&quot;/the-foundation/the-foundation.gitlab.io-comments-vssue.js&quot;,&quot;pill_count&quot;:null,&quot;link_classes&quot;:&quot;shortcuts-project&quot;,&quot;is_active&quot;:true},{&quot;id&quot;:&quot;manage_menu&quot;,&quot;title&quot;:&quot;Manage&quot;,&quot;icon&quot;:&quot;users&quot;,&quot;avatar&quot;:null,&quot;avatar_shape&quot;:&quot;rect&quot;,&quot;entity_id&quot;:null,&quot;link&quot;:&quot;/the-foundation/the-foundation.gitlab.io-comments-vssue.js/activity&quot;,&quot;is_active&quot;:false,&quot;pill_count&quot;:null,&quot;items&quot;:[{&quot;id&quot;:&quot;activity&quot;,&quot;title&quot;:&quot;Activity&quot;,&quot;icon&quot;:null,&quot;avatar&quot;:null,&quot;entity_id&quot;:null,&quot;link&quot;:&quot;/the-foundation/the-foundation.gitlab.io-comments-vssue.js/activity&quot;,&quot;pill_count&quot;:null,&quot;link_classes&quot;:&quot;shortcuts-project-activity&quot;,&quot;is_active&quot;:false},{&quot;id&quot;:&quot;members&quot;,&quot;title&quot;:&quot;Members&quot;,&quot;icon&quot;:null,&quot;avatar&quot;:null,&quot;entity_id&quot;:null,&quot;link&quot;:&quot;/the-foundation/the-foundation.gitlab.io-comments-vssue.js/-/project_members&quot;,&quot;pill_count&quot;:null,&quot;link_classes&quot;:null,&quot;is_active&quot;:false},{&quot;id&quot;:&quot;labels&quot;,&quot;title&quot;:&quot;Labels&quot;,&quot;icon&quot;:null,&quot;avatar&quot;:null,&quot;entity_id&quot;:null,&quot;link&quot;:&quot;/the-foundation/the-foundation.gitlab.io-comments-vssue.js/-/labels&quot;,&quot;pill_count&quot;:null,&quot;link_classes&quot;:null,&quot;is_active&quot;:false}],&quot;separated&quot;:false},{&quot;id&quot;:&quot;plan_menu&quot;,&quot;title&quot;:&quot;Plan&quot;,&quot;icon&quot;:&quot;planning&quot;,&quot;avatar&quot;:null,&quot;avatar_shape&quot;:&quot;rect&quot;,&quot;entity_id&quot;:null,&quot;link&quot;:&quot;/the-foundation/the-foundation.gitlab.io-comments-vssue.js/-/issues&quot;,&quot;is_active&quot;:false,&quot;pill_count&quot;:null,&quot;items&quot;:[{&quot;id&quot;:&quot;project_issue_list&quot;,&quot;title&quot;:&quot;Issues&quot;,&quot;icon&quot;:null,&quot;avatar&quot;:null,&quot;entity_id&quot;:null,&quot;link&quot;:&quot;/the-foundation/the-foundation.gitlab.io-comments-vssue.js/-/issues&quot;,&quot;pill_count&quot;:&quot;0&quot;,&quot;link_classes&quot;:&quot;shortcuts-issues has-sub-items&quot;,&quot;is_active&quot;:false},{&quot;id&quot;:&quot;boards&quot;,&quot;title&quot;:&quot;Issue boards&quot;,&quot;icon&quot;:null,&quot;avatar&quot;:null,&quot;entity_id&quot;:null,&quot;link&quot;:&quot;/the-foundation/the-foundation.gitlab.io-comments-vssue.js/-/boards&quot;,&quot;pill_count&quot;:null,&quot;link_classes&quot;:&quot;shortcuts-issue-boards&quot;,&quot;is_active&quot;:false},{&quot;id&quot;:&quot;milestones&quot;,&quot;title&quot;:&quot;Milestones&quot;,&quot;icon&quot;:null,&quot;avatar&quot;:null,&quot;entity_id&quot;:null,&quot;link&quot;:&quot;/the-foundation/the-foundation.gitlab.io-comments-vssue.js/-/milestones&quot;,&quot;pill_count&quot;:null,&quot;link_classes&quot;:null,&quot;is_active&quot;:false},{&quot;id&quot;:&quot;project_wiki&quot;,&quot;title&quot;:&quot;Wiki&quot;,&quot;icon&quot;:null,&quot;avatar&quot;:null,&quot;entity_id&quot;:null,&quot;link&quot;:&quot;/the-foundation/the-foundation.gitlab.io-comments-vssue.js/-/wikis/home&quot;,&quot;pill_count&quot;:null,&quot;link_classes&quot;:&quot;shortcuts-wiki&quot;,&quot;is_active&quot;:false}],&quot;separated&quot;:false},{&quot;id&quot;:&quot;code_menu&quot;,&quot;title&quot;:&quot;Code&quot;,&quot;icon&quot;:&quot;code&quot;,&quot;avatar&quot;:null,&quot;avatar_shape&quot;:&quot;rect&quot;,&quot;entity_id&quot;:null,&quot;link&quot;:&quot;/the-foundation/the-foundation.gitlab.io-comments-vssue.js/-/merge_requests&quot;,&quot;is_active&quot;:false,&quot;pill_count&quot;:null,&quot;items&quot;:[{&quot;id&quot;:&quot;project_merge_request_list&quot;,&quot;title&quot;:&quot;Merge requests&quot;,&quot;icon&quot;:null,&quot;avatar&quot;:null,&quot;entity_id&quot;:null,&quot;link&quot;:&quot;/the-foundation/the-foundation.gitlab.io-comments-vssue.js/-/merge_requests&quot;,&quot;pill_count&quot;:&quot;0&quot;,&quot;link_classes&quot;:&quot;shortcuts-merge_requests&quot;,&quot;is_active&quot;:false},{&quot;id&quot;:&quot;files&quot;,&quot;title&quot;:&quot;Repository&quot;,&quot;icon&quot;:null,&quot;avatar&quot;:null,&quot;entity_id&quot;:null,&quot;link&quot;:&quot;/the-foundation/the-foundation.gitlab.io-comments-vssue.js/-/tree/main&quot;,&quot;pill_count&quot;:null,&quot;link_classes&quot;:&quot;shortcuts-tree&quot;,&quot;is_active&quot;:false},{&quot;id&quot;:&quot;branches&quot;,&quot;title&quot;:&quot;Branches&quot;,&quot;icon&quot;:null,&quot;avatar&quot;:null,&quot;entity_id&quot;:null,&quot;link&quot;:&quot;/the-foundation/the-foundation.gitlab.io-comments-vssue.js/-/branches&quot;,&quot;pill_count&quot;:null,&quot;link_classes&quot;:null,&quot;is_active&quot;:false},{&quot;id&quot;:&quot;commits&quot;,&quot;title&quot;:&quot;Commits&quot;,&quot;icon&quot;:null,&quot;avatar&quot;:null,&quot;entity_id&quot;:null,&quot;link&quot;:&quot;/the-foundation/the-foundation.gitlab.io-comments-vssue.js/-/commits/main?ref_type=heads&quot;,&quot;pill_count&quot;:null,&quot;link_classes&quot;:&quot;shortcuts-commits&quot;,&quot;is_active&quot;:false},{&quot;id&quot;:&quot;tags&quot;,&quot;title&quot;:&quot;Tags&quot;,&quot;icon&quot;:null,&quot;avatar&quot;:null,&quot;entity_id&quot;:null,&quot;link&quot;:&quot;/the-foundation/the-foundation.gitlab.io-comments-vssue.js/-/tags&quot;,&quot;pill_count&quot;:null,&quot;link_classes&quot;:null,&quot;is_active&quot;:false},{&quot;id&quot;:&quot;graphs&quot;,&quot;title&quot;:&quot;Repository graph&quot;,&quot;icon&quot;:null,&quot;avatar&quot;:null,&quot;entity_id&quot;:null,&quot;link&quot;:&quot;/the-foundation/the-foundation.gitlab.io-comments-vssue.js/-/network/main?ref_type=heads&quot;,&quot;pill_count&quot;:null,&quot;link_classes&quot;:&quot;shortcuts-network&quot;,&quot;is_active&quot;:false},{&quot;id&quot;:&quot;compare&quot;,&quot;title&quot;:&quot;Compare revisions&quot;,&quot;icon&quot;:null,&quot;avatar&quot;:null,&quot;entity_id&quot;:null,&quot;link&quot;:&quot;/the-foundation/the-foundation.gitlab.io-comments-vssue.js/-/compare?from=main\u0026to=main&quot;,&quot;pill_count&quot;:null,&quot;link_classes&quot;:null,&quot;is_active&quot;:false},{&quot;id&quot;:&quot;project_snippets&quot;,&quot;title&quot;:&quot;Snippets&quot;,&quot;icon&quot;:null,&quot;avatar&quot;:null,&quot;entity_id&quot;:null,&quot;link&quot;:&quot;/the-foundation/the-foundation.gitlab.io-comments-vssue.js/-/snippets&quot;,&quot;pill_count&quot;:null,&quot;link_classes&quot;:&quot;shortcuts-snippets&quot;,&quot;is_active&quot;:false}],&quot;separated&quot;:false},{&quot;id&quot;:&quot;build_menu&quot;,&quot;title&quot;:&quot;Build&quot;,&quot;icon&quot;:&quot;rocket&quot;,&quot;avatar&quot;:null,&quot;avatar_shape&quot;:&quot;rect&quot;,&quot;entity_id&quot;:null,&quot;link&quot;:&quot;/the-foundation/the-foundation.gitlab.io-comments-vssue.js/-/pipelines&quot;,&quot;is_active&quot;:false,&quot;pill_count&quot;:null,&quot;items&quot;:[{&quot;id&quot;:&quot;pipelines&quot;,&quot;title&quot;:&quot;Pipelines&quot;,&quot;icon&quot;:null,&quot;avatar&quot;:null,&quot;entity_id&quot;:null,&quot;link&quot;:&quot;/the-foundation/the-foundation.gitlab.io-comments-vssue.js/-/pipelines&quot;,&quot;pill_count&quot;:null,&quot;link_classes&quot;:&quot;shortcuts-pipelines&quot;,&quot;is_active&quot;:false},{&quot;id&quot;:&quot;jobs&quot;,&quot;title&quot;:&quot;Jobs&quot;,&quot;icon&quot;:null,&quot;avatar&quot;:null,&quot;entity_id&quot;:null,&quot;link&quot;:&quot;/the-foundation/the-foundation.gitlab.io-comments-vssue.js/-/jobs&quot;,&quot;pill_count&quot;:null,&quot;link_classes&quot;:&quot;shortcuts-builds&quot;,&quot;is_active&quot;:false},{&quot;id&quot;:&quot;pipeline_schedules&quot;,&quot;title&quot;:&quot;Pipeline schedules&quot;,&quot;icon&quot;:null,&quot;avatar&quot;:null,&quot;entity_id&quot;:null,&quot;link&quot;:&quot;/the-foundation/the-foundation.gitlab.io-comments-vssue.js/-/pipeline_schedules&quot;,&quot;pill_count&quot;:null,&quot;link_classes&quot;:&quot;shortcuts-builds&quot;,&quot;is_active&quot;:false},{&quot;id&quot;:&quot;artifacts&quot;,&quot;title&quot;:&quot;Artifacts&quot;,&quot;icon&quot;:null,&quot;avatar&quot;:null,&quot;entity_id&quot;:null,&quot;link&quot;:&quot;/the-foundation/the-foundation.gitlab.io-comments-vssue.js/-/artifacts&quot;,&quot;pill_count&quot;:null,&quot;link_classes&quot;:&quot;shortcuts-builds&quot;,&quot;is_active&quot;:false}],&quot;separated&quot;:false},{&quot;id&quot;:&quot;deploy_menu&quot;,&quot;title&quot;:&quot;Deploy&quot;,&quot;icon&quot;:&quot;deployments&quot;,&quot;avatar&quot;:null,&quot;avatar_shape&quot;:&quot;rect&quot;,&quot;entity_id&quot;:null,&quot;link&quot;:&quot;/the-foundation/the-foundation.gitlab.io-comments-vssue.js/-/releases&quot;,&quot;is_active&quot;:false,&quot;pill_count&quot;:null,&quot;items&quot;:[{&quot;id&quot;:&quot;releases&quot;,&quot;title&quot;:&quot;Releases&quot;,&quot;icon&quot;:null,&quot;avatar&quot;:null,&quot;entity_id&quot;:null,&quot;link&quot;:&quot;/the-foundation/the-foundation.gitlab.io-comments-vssue.js/-/releases&quot;,&quot;pill_count&quot;:null,&quot;link_classes&quot;:&quot;shortcuts-deployments-releases&quot;,&quot;is_active&quot;:false},{&quot;id&quot;:&quot;packages_registry&quot;,&quot;title&quot;:&quot;Package Registry&quot;,&quot;icon&quot;:null,&quot;avatar&quot;:null,&quot;entity_id&quot;:null,&quot;link&quot;:&quot;/the-foundation/the-foundation.gitlab.io-comments-vssue.js/-/packages&quot;,&quot;pill_count&quot;:null,&quot;link_classes&quot;:&quot;shortcuts-container-registry&quot;,&quot;is_active&quot;:false},{&quot;id&quot;:&quot;container_registry&quot;,&quot;title&quot;:&quot;Container Registry&quot;,&quot;icon&quot;:null,&quot;avatar&quot;:null,&quot;entity_id&quot;:null,&quot;link&quot;:&quot;/the-foundation/the-foundation.gitlab.io-comments-vssue.js/container_registry&quot;,&quot;pill_count&quot;:null,&quot;link_classes&quot;:null,&quot;is_active&quot;:false}],&quot;separated&quot;:false},{&quot;id&quot;:&quot;operations_menu&quot;,&quot;title&quot;:&quot;Operate&quot;,&quot;icon&quot;:&quot;cloud-pod&quot;,&quot;avatar&quot;:null,&quot;avatar_shape&quot;:&quot;rect&quot;,&quot;entity_id&quot;:null,&quot;link&quot;:&quot;/the-foundation/the-foundation.gitlab.io-comments-vssue.js/-/environments&quot;,&quot;is_active&quot;:false,&quot;pill_count&quot;:null,&quot;items&quot;:[{&quot;id&quot;:&quot;environments&quot;,&quot;title&quot;:&quot;Environments&quot;,&quot;icon&quot;:null,&quot;avatar&quot;:null,&quot;entity_id&quot;:null,&quot;link&quot;:&quot;/the-foundation/the-foundation.gitlab.io-comments-vssue.js/-/environments&quot;,&quot;pill_count&quot;:null,&quot;link_classes&quot;:&quot;shortcuts-environments&quot;,&quot;is_active&quot;:false},{&quot;id&quot;:&quot;infrastructure_registry&quot;,&quot;title&quot;:&quot;Terraform modules&quot;,&quot;icon&quot;:null,&quot;avatar&quot;:null,&quot;entity_id&quot;:null,&quot;link&quot;:&quot;/the-foundation/the-foundation.gitlab.io-comments-vssue.js/-/infrastructure_registry&quot;,&quot;pill_count&quot;:null,&quot;link_classes&quot;:null,&quot;is_active&quot;:false}],&quot;separated&quot;:false},{&quot;id&quot;:&quot;monitor_menu&quot;,&quot;title&quot;:&quot;Monitor&quot;,&quot;icon&quot;:&quot;monitor&quot;,&quot;avatar&quot;:null,&quot;avatar_shape&quot;:&quot;rect&quot;,&quot;entity_id&quot;:null,&quot;link&quot;:&quot;/the-foundation/the-foundation.gitlab.io-comments-vssue.js/-/incidents&quot;,&quot;is_active&quot;:false,&quot;pill_count&quot;:null,&quot;items&quot;:[{&quot;id&quot;:&quot;incidents&quot;,&quot;title&quot;:&quot;Incidents&quot;,&quot;icon&quot;:null,&quot;avatar&quot;:null,&quot;entity_id&quot;:null,&quot;link&quot;:&quot;/the-foundation/the-foundation.gitlab.io-comments-vssue.js/-/incidents&quot;,&quot;pill_count&quot;:null,&quot;link_classes&quot;:null,&quot;is_active&quot;:false},{&quot;id&quot;:&quot;service_desk&quot;,&quot;title&quot;:&quot;Service Desk&quot;,&quot;icon&quot;:null,&quot;avatar&quot;:null,&quot;entity_id&quot;:null,&quot;link&quot;:&quot;/the-foundation/the-foundation.gitlab.io-comments-vssue.js/-/issues/service_desk&quot;,&quot;pill_count&quot;:null,&quot;link_classes&quot;:null,&quot;is_active&quot;:false}],&quot;separated&quot;:false},{&quot;id&quot;:&quot;analyze_menu&quot;,&quot;title&quot;:&quot;Analyze&quot;,&quot;icon&quot;:&quot;chart&quot;,&quot;avatar&quot;:null,&quot;avatar_shape&quot;:&quot;rect&quot;,&quot;entity_id&quot;:null,&quot;link&quot;:&quot;/the-foundation/the-foundation.gitlab.io-comments-vssue.js/-/value_stream_analytics&quot;,&quot;is_active&quot;:false,&quot;pill_count&quot;:null,&quot;items&quot;:[{&quot;id&quot;:&quot;cycle_analytics&quot;,&quot;title&quot;:&quot;Value stream analytics&quot;,&quot;icon&quot;:null,&quot;avatar&quot;:null,&quot;entity_id&quot;:null,&quot;link&quot;:&quot;/the-foundation/the-foundation.gitlab.io-comments-vssue.js/-/value_stream_analytics&quot;,&quot;pill_count&quot;:null,&quot;link_classes&quot;:&quot;shortcuts-project-cycle-analytics&quot;,&quot;is_active&quot;:false},{&quot;id&quot;:&quot;contributors&quot;,&quot;title&quot;:&quot;Contributor analytics&quot;,&quot;icon&quot;:null,&quot;avatar&quot;:null,&quot;entity_id&quot;:null,&quot;link&quot;:&quot;/the-foundation/the-foundation.gitlab.io-comments-vssue.js/-/graphs/main?ref_type=heads&quot;,&quot;pill_count&quot;:null,&quot;link_classes&quot;:null,&quot;is_active&quot;:false},{&quot;id&quot;:&quot;ci_cd_analytics&quot;,&quot;title&quot;:&quot;CI/CD analytics&quot;,&quot;icon&quot;:null,&quot;avatar&quot;:null,&quot;entity_id&quot;:null,&quot;link&quot;:&quot;/the-foundation/the-foundation.gitlab.io-comments-vssue.js/-/pipelines/charts&quot;,&quot;pill_count&quot;:null,&quot;link_classes&quot;:null,&quot;is_active&quot;:false},{&quot;id&quot;:&quot;repository_analytics&quot;,&quot;title&quot;:&quot;Repository analytics&quot;,&quot;icon&quot;:null,&quot;avatar&quot;:null,&quot;entity_id&quot;:null,&quot;link&quot;:&quot;/the-foundation/the-foundation.gitlab.io-comments-vssue.js/-/graphs/main/charts&quot;,&quot;pill_count&quot;:null,&quot;link_classes&quot;:&quot;shortcuts-repository-charts&quot;,&quot;is_active&quot;:false},{&quot;id&quot;:&quot;model_experiments&quot;,&quot;title&quot;:&quot;Model experiments&quot;,&quot;icon&quot;:null,&quot;avatar&quot;:null,&quot;entity_id&quot;:null,&quot;link&quot;:&quot;/the-foundation/the-foundation.gitlab.io-comments-vssue.js/-/ml/experiments&quot;,&quot;pill_count&quot;:null,&quot;link_classes&quot;:null,&quot;is_active&quot;:false}],&quot;separated&quot;:false}],&quot;current_context_header&quot;:&quot;Project&quot;,&quot;support_path&quot;:&quot;https://about.gitlab.com/get-help/&quot;,&quot;display_whats_new&quot;:true,&quot;whats_new_most_recent_release_items_count&quot;:4,&quot;whats_new_version_digest&quot;:&quot;9a80cbde0c0fd67d411980e9d12a6f2bbec7cc5f5bb2125ad7afad55edf570e3&quot;,&quot;show_version_check&quot;:null,&quot;gitlab_version&quot;:{&quot;major&quot;:16,&quot;minor&quot;:8,&quot;patch&quot;:0,&quot;suffix_s&quot;:&quot;&quot;},&quot;gitlab_version_check&quot;:null,&quot;search&quot;:{&quot;search_path&quot;:&quot;/search&quot;,&quot;issues_path&quot;:&quot;/dashboard/issues&quot;,&quot;mr_path&quot;:&quot;/dashboard/merge_requests&quot;,&quot;autocomplete_path&quot;:&quot;/search/autocomplete&quot;,&quot;search_context&quot;:{&quot;group&quot;:{&quot;id&quot;:4170095,&quot;name&quot;:&quot;The Foundation&quot;,&quot;full_name&quot;:&quot;The Foundation&quot;},&quot;group_metadata&quot;:{&quot;issues_path&quot;:&quot;/groups/the-foundation/-/issues&quot;,&quot;mr_path&quot;:&quot;/groups/the-foundation/-/merge_requests&quot;},&quot;project&quot;:{&quot;id&quot;:32909927,&quot;name&quot;:&quot;The Foundation.Gitlab.Io Comments Vssue.Js&quot;},&quot;project_metadata&quot;:{&quot;mr_path&quot;:&quot;/the-foundation/the-foundation.gitlab.io-comments-vssue.js/-/merge_requests&quot;,&quot;issues_path&quot;:&quot;/the-foundation/the-foundation.gitlab.io-comments-vssue.js/-/issues&quot;},&quot;code_search&quot;:true,&quot;ref&quot;:&quot;main&quot;,&quot;scope&quot;:null,&quot;for_snippets&quot;:null}},&quot;panel_type&quot;:&quot;project&quot;,&quot;shortcut_links&quot;:[{&quot;title&quot;:&quot;Snippets&quot;,&quot;href&quot;:&quot;/explore/snippets&quot;,&quot;css_class&quot;:&quot;dashboard-shortcuts-snippets&quot;},{&quot;title&quot;:&quot;Groups&quot;,&quot;href&quot;:&quot;/explore/groups&quot;,&quot;css_class&quot;:&quot;dashboard-shortcuts-groups&quot;},{&quot;title&quot;:&quot;Projects&quot;,&quot;href&quot;:&quot;/explore/projects&quot;,&quot;css_class&quot;:&quot;dashboard-shortcuts-projects&quot;}]}"></aside>

<div class="content-wrapper">
<div class="mobile-overlay"></div>

<div class="alert-wrapper gl-force-block-formatting-context">


























<div class="top-bar-fixed container-fluid" data-testid="top-bar">
<div class="top-bar-container gl-display-flex gl-align-items-center gl-gap-2">
<button class="gl-button btn btn-icon btn-md btn-default btn-default-tertiary js-super-sidebar-toggle-expand super-sidebar-toggle gl-ml-n3" aria-controls="super-sidebar" aria-expanded="false" aria-label="Primary navigation sidebar" type="button"><svg class="s16 gl-icon gl-button-icon " data-testid="sidebar-icon"><use href="/assets/icons-1563760c6022424ca5187159258484be0c106b044e5e5a1b4f0be7a10cd6c90f.svg#sidebar"></use></svg>

</button>
<nav aria-label="Breadcrumbs" class="breadcrumbs gl-breadcrumbs" data-testid="breadcrumb-links">
<ul class="breadcrumb gl-breadcrumb-list js-breadcrumbs-list">
<li class="gl-breadcrumb-item"><a class="group-path breadcrumb-item-text js-breadcrumb-item-text " href="/the-foundation"><img srcset="/uploads/-/system/group/avatar/4170095/fdls.jpg?width=16 1x, /uploads/-/system/group/avatar/4170095/fdls.jpg?width=32 2x" alt="The Foundation" class="gl-avatar gl-avatar-s16 avatar-tile" height="16" width="16" loading="lazy" src="/uploads/-/system/group/avatar/4170095/fdls.jpg?width=16" />
The Foundation</a></li> <li class="gl-breadcrumb-item"><a href="/the-foundation/the-foundation.gitlab.io-comments-vssue.js"><span class="breadcrumb-item-text js-breadcrumb-item-text">The Foundation.Gitlab.Io Comments Vssue.Js</span></a></li>

</ul>
<script type="application/ld+json">
{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"The Foundation","item":"https://gitlab.com/the-foundation"},{"@type":"ListItem","position":2,"name":"The Foundation.Gitlab.Io Comments Vssue.Js","item":"/assets/gitlab_com/the-foundation/the-foundation.gitlab.io-comments-vssue.js"}]}

</script>
</nav>



</div>
</div>

</div>
<div class="container-fluid container-limited project-highlight-puc">
<main class="content" id="content-body" itemscope itemtype="http://schema.org/SoftwareSourceCode">
<div class="flash-container flash-container-page sticky" data-testid="flash-container">
<div id="js-global-alerts"></div>
</div>








<header class="project-home-panel js-show-on-project-root gl-mt-5">
<div class="gl-display-flex gl-justify-content-space-between gl-flex-wrap gl-flex-direction-column gl-md-flex-direction-row gl-gap-5">
<div class="home-panel-title-row gl-display-flex gl-align-items-center">
<div alt="The Foundation.Gitlab.Io Comments Vssue.Js" class="gl-avatar gl-avatar-s48 gl-align-self-start gl-flex-shrink-0 gl-mr-3 gl-avatar-identicon gl-avatar-identicon-bg2" itemprop="image">
T
</div>

<h1 class="home-panel-title gl-heading-1 gl-mt-3 gl-display-flex gl-align-items-center gl-flex-wrap gl-gap-3 gl-word-break-word gl-mb-0!" data-testid="project-name-content" itemprop="name">
The Foundation.Gitlab.Io Comments Vssue.Js
<span class="has-tooltip visibility-icon gl-display-inline-flex gl-text-secondary" data-container="body" data-placement="top" title="Public - The project can be accessed without any authentication."><svg class="s16 icon" data-testid="earth-icon"><use href="/assets/icons-1563760c6022424ca5187159258484be0c106b044e5e5a1b4f0be7a10cd6c90f.svg#earth"></use></svg></span>


</h1>
</div>
<div class="project-repo-buttons gl-display-flex gl-justify-content-md-end gl-align-items-center gl-flex-wrap gl-gap-3">
<div class="count-badge d-inline-flex align-item-stretch btn-group">
<a class="gl-button btn btn-md btn-default has-tooltip star-btn" title="You must sign in to star a project" href="/users/sign_in"><svg class="s16 gl-icon gl-button-icon " data-testid="star-o-icon"><use href="/assets/icons-1563760c6022424ca5187159258484be0c106b044e5e5a1b4f0be7a10cd6c90f.svg#star-o"></use></svg>
<span class="gl-button-text">
Star

</span>

</a><a title="Starrers" class="gl-button btn btn-md btn-default has-tooltip star-count count" href="/the-foundation/the-foundation.gitlab.io-comments-vssue.js/-/starrers"><span class="gl-button-text">
0

</span>

</a></div>


<span class="gl-sr-only" data-testid="project-id-content" itemprop="identifier">
Project ID: 32909927
</span>
<div class="js-groups-projects-more-actions-dropdown" data-id="32909927" data-is-group="false"></div>

</div>
</div>

</header>

<div class="project-page-indicator js-show-on-project-root"></div>
<div class="project-page-layout">
<div class="project-page-layout-sidebar js-show-on-project-root gl-mt-5">
<aside class="project-page-sidebar">
<div class="project-page-sidebar-block home-panel-home-desc gl-py-4 gl-border-b gl-border-gray-50 gl-pt-2!">
<div class="gl-display-flex gl-justify-content-space-between">
<p class="gl-font-weight-bold gl-text-gray-900 gl-m-0 gl-mb-1">Project information</p>
</div>
<div class="gl-mb-2 gl-mt-3">
<div class="progress repository-languages-bar js-show-on-project-root"><div class="progress-bar has-tooltip" style="width: 96.63%; background-color:#f1e05a" data-html="true" title="&lt;span class=&quot;repository-language-bar-tooltip-language&quot;&gt;JavaScript&lt;/span&gt;&amp;nbsp;&lt;span class=&quot;repository-language-bar-tooltip-share&quot;&gt;96.6%&lt;/span&gt;"></div><div class="progress-bar has-tooltip" style="width: 3.23%; background-color:#e34c26" data-html="true" title="&lt;span class=&quot;repository-language-bar-tooltip-language&quot;&gt;HTML&lt;/span&gt;&amp;nbsp;&lt;span class=&quot;repository-language-bar-tooltip-share&quot;&gt;3.2%&lt;/span&gt;"></div><div class="progress-bar has-tooltip" style="width: 0.14%; background-color:#89e051" data-html="true" title="&lt;span class=&quot;repository-language-bar-tooltip-language&quot;&gt;Shell&lt;/span&gt;&amp;nbsp;&lt;span class=&quot;repository-language-bar-tooltip-share&quot;&gt;0.1%&lt;/span&gt;"></div></div>
</div>
</div>
<div class="project-page-sidebar-block gl-py-4 gl-border-b gl-border-gray-50">
<nav class="project-stats">
<ul class="nav gl-row-gap-2 gl-column-gap-5">
<li class="nav-item">
<a class="nav-link gl-display-flex gl-align-items-center stat-link gl-px-0! gl-pb-2!" href="/the-foundation/the-foundation.gitlab.io-comments-vssue.js/-/commits/main"><svg class="s16 icon gl-mr-3 gl-text-gray-500" data-testid="commit-icon"><use href="/assets/icons-1563760c6022424ca5187159258484be0c106b044e5e5a1b4f0be7a10cd6c90f.svg#commit"></use></svg><strong class="project-stat-value">48</strong> Commits</a></li>
<li class="nav-item">
<a class="nav-link gl-display-flex gl-align-items-center stat-link gl-px-0! gl-pb-2!" href="/the-foundation/the-foundation.gitlab.io-comments-vssue.js/-/branches"><svg class="s16 icon gl-mr-3 gl-text-gray-500" data-testid="branch-icon"><use href="/assets/icons-1563760c6022424ca5187159258484be0c106b044e5e5a1b4f0be7a10cd6c90f.svg#branch"></use></svg><strong class="project-stat-value">1</strong> Branch</a></li>
<li class="nav-item">
<a class="nav-link gl-display-flex gl-align-items-center stat-link gl-px-0! gl-pb-2!" href="/the-foundation/the-foundation.gitlab.io-comments-vssue.js/-/tags"><svg class="s16 icon gl-mr-3 gl-text-gray-500" data-testid="label-icon"><use href="/assets/icons-1563760c6022424ca5187159258484be0c106b044e5e5a1b4f0be7a10cd6c90f.svg#label"></use></svg><strong class="project-stat-value">0</strong> Tags</a></li>
</ul>

</nav>
</div>
<div class="project-page-sidebar-block gl-py-4">
<div class="project-buttons gl-mb-2 js-show-on-project-root" data-testid="project-buttons">
<ul class="nav gl-row-gap-2 gl-column-gap-5">
<li class="nav-item">
<a class="nav-link gl-display-flex gl-align-items-center stat-link gl-px-0! gl-pb-2! btn-default" href="/the-foundation/the-foundation.gitlab.io-comments-vssue.js/-/blob/main/README.md"><svg class="s16 icon gl-mr-3 gl-text-gray-500" data-testid="doc-text-icon"><use href="/assets/icons-1563760c6022424ca5187159258484be0c106b044e5e5a1b4f0be7a10cd6c90f.svg#doc-text"></use></svg>README</a></li>
</ul>

</div>
</div>
</aside>

</div>
<div class="project-page-layout-content">



<div class="project-show-files">
<div class="tree-holder clearfix js-per-page gl-mt-5" data-blame-per-page="1000" id="tree-holder">
<div class="nav-block gl-display-flex gl-flex-direction-column gl-sm-flex-direction-row gl-align-items-stretch">
<div class="tree-ref-container gl-display-flex gl-flex-wrap gl-gap-2 mb-2 mb-md-0">
<div class="tree-ref-holder gl-max-w-26" data-testid="ref-dropdown-container">
<div data-project-id="32909927" data-project-root-path="/the-foundation/the-foundation.gitlab.io-comments-vssue.js" data-ref-type="" id="js-tree-ref-switcher"></div>
</div>
<div data-can-collaborate="false" data-can-edit-tree="false" data-can-push-code="false" data-new-blob-path="/the-foundation/the-foundation.gitlab.io-comments-vssue.js/-/new/main" data-new-branch-path="/the-foundation/the-foundation.gitlab.io-comments-vssue.js/-/branches/new" data-new-dir-path="/the-foundation/the-foundation.gitlab.io-comments-vssue.js/-/create_dir/main" data-new-tag-path="/the-foundation/the-foundation.gitlab.io-comments-vssue.js/-/tags/new" data-upload-path="/the-foundation/the-foundation.gitlab.io-comments-vssue.js/-/create/main" id="js-repo-breadcrumb"></div>
</div>
<div id="js-blob-controls"></div>
<div class="tree-controls">
<div class="gl-display-flex gl-flex-wrap gl-gap-3 gl-mb-3 gl-sm-mb-0">



<div data-history-link="/the-foundation/the-foundation.gitlab.io-comments-vssue.js/-/commits/main" id="js-tree-history-link"></div>
<a class="gl-button btn btn-md btn-default shortcuts-find-file" rel="nofollow" href="/the-foundation/the-foundation.gitlab.io-comments-vssue.js/-/find_file/main"><span class="gl-button-text">
Find file

</span>

</a>
<div class="gl-display-inline-block" data-css-classes="gl-w-full gl-sm-w-auto" data-options="{&quot;project_path&quot;:&quot;the-foundation/the-foundation.gitlab.io-comments-vssue.js&quot;,&quot;ref&quot;:&quot;main&quot;,&quot;is_fork&quot;:false,&quot;needs_to_fork&quot;:true,&quot;gitpod_enabled&quot;:false,&quot;is_blob&quot;:false,&quot;show_edit_button&quot;:false,&quot;show_web_ide_button&quot;:false,&quot;show_gitpod_button&quot;:false,&quot;show_pipeline_editor_button&quot;:false,&quot;web_ide_url&quot;:&quot;/-/ide/project/the-foundation/the-foundation.gitlab.io-comments-vssue.js/edit/main&quot;,&quot;edit_url&quot;:&quot;&quot;,&quot;pipeline_editor_url&quot;:&quot;/the-foundation/the-foundation.gitlab.io-comments-vssue.js/-/ci/editor?branch_name=main&quot;,&quot;gitpod_url&quot;:&quot;https://gitpod.io/#/assets/gitlab_com/the-foundation/the-foundation.gitlab.io-comments-vssue.js/-/tree/main/&quot;,&quot;user_preferences_gitpod_path&quot;:&quot;/-/profile/preferences#user_gitpod_enabled&quot;,&quot;user_profile_enable_gitpod_path&quot;:&quot;/-/profile?user%5Bgitpod_enabled%5D=true&quot;,&quot;new_workspace_path&quot;:&quot;/-/remote_development/workspaces/new&quot;,&quot;project_id&quot;:32909927,&quot;fork_path&quot;:&quot;/the-foundation/the-foundation.gitlab.io-comments-vssue.js/-/forks/new&quot;,&quot;fork_modal_id&quot;:null}" data-web-ide-promo-popover-img="/assets/web-ide-promo-popover-9e59939b3b450a7ea385a520971151abb09ddad46141c333d6dcc783b9b91522.svg" id="js-tree-web-ide-link"></div>

<div class="project-code-holder d-none d-sm-inline-block">
<div class="git-clone-holder js-git-clone-holder">
<button id="clone-dropdown" class="gl-button btn btn-md btn-confirm clone-dropdown-btn" data-toggle="dropdown" data-testid="clone-dropdown" type="button"><span class="gl-button-text">
<span class="js-clone-dropdown-label">
Code
</span>
<svg class="s16 icon" data-testid="chevron-down-icon"><use href="/assets/icons-1563760c6022424ca5187159258484be0c106b044e5e5a1b4f0be7a10cd6c90f.svg#chevron-down"></use></svg>

</span>

</button><ul class="dropdown-menu dropdown-menu-large clone-options-dropdown dropdown-menu-right" data-testid="clone-dropdown-content" role="menu">
<li class="gl-dropdown-item js-clone-links gl-px-4!" role="menuitem">
<label class="label-bold">
Clone with SSH
</label>
<div class="input-group btn-group">
<input type="text" name="ssh_project_clone" id="ssh_project_clone" value="git@gitlab.com:the-foundation/the-foundation.gitlab.io-comments-vssue.js.git" class="js-select-on-focus form-control" readonly="readonly" aria-label="Repository clone URL" data-testid="ssh-clone-url-content" />
<div class="input-group-append">
<button class="gl-button btn btn-icon btn-md btn-default " title="Copy URL" aria-label="Copy URL" aria-live="polite" data-toggle="tooltip" data-placement="bottom" data-container="body" data-category="primary" data-size="medium" data-clipboard-target="#ssh_project_clone" type="button"><svg class="s16 gl-icon gl-button-icon " data-testid="copy-to-clipboard-icon"><use href="/assets/icons-1563760c6022424ca5187159258484be0c106b044e5e5a1b4f0be7a10cd6c90f.svg#copy-to-clipboard"></use></svg>

</button>

</div>
</div>
</li>
<li class="pt-2 gl-dropdown-item js-clone-links gl-px-4!" role="menuitem">
<label class="label-bold">
Clone with HTTPS
</label>
<div class="input-group btn-group">
<input type="text" name="http_project_clone" id="http_project_clone" value="/assets/gitlab_com/the-foundation/the-foundation.gitlab.io-comments-vssue.js.git" class="js-select-on-focus form-control" readonly="readonly" aria-label="Repository clone URL" data-testid="http-clone-url-content" />
<div class="input-group-append">
<button class="gl-button btn btn-icon btn-md btn-default " title="Copy URL" aria-label="Copy URL" aria-live="polite" data-toggle="tooltip" data-placement="bottom" data-container="body" data-category="primary" data-size="medium" data-clipboard-target="#http_project_clone" type="button"><svg class="s16 gl-icon gl-button-icon " data-testid="copy-to-clipboard-icon"><use href="/assets/icons-1563760c6022424ca5187159258484be0c106b044e5e5a1b4f0be7a10cd6c90f.svg#copy-to-clipboard"></use></svg>

</button>

</div>
</div>
</li>

<li class="divider mt-2" role="presentation"></li>
<li class="pt-2 gl-dropdown-item js-clone-links" role="menuitem">
<label class="label-bold gl-px-4!">
Open in your IDE
</label>
<a class="dropdown-item open-with-link" href="vscode://vscode.git/clone?url=git%40gitlab.com%3Athe-foundation%2Fthe-foundation.gitlab.io-comments-vssue.js.git">
<div class="gl-dropdown-item-text-wrapper">
Visual Studio Code (SSH)
</div>
</a>
<a class="dropdown-item open-with-link" href="vscode://vscode.git/clone?url=https%3A%2F%2Fgitlab.com%2Fthe-foundation%2Fthe-foundation.gitlab.io-comments-vssue.js.git">
<div class="gl-dropdown-item-text-wrapper">
Visual Studio Code (HTTPS)
</div>
</a>
<a class="dropdown-item open-with-link" href="jetbrains://idea/checkout/git?idea.required.plugins.id=Git4Idea&amp;checkout.repo=git%40gitlab.com%3Athe-foundation%2Fthe-foundation.gitlab.io-comments-vssue.js.git">
<div class="gl-dropdown-item-text-wrapper">
IntelliJ IDEA (SSH)
</div>
</a>
<a class="dropdown-item open-with-link" href="jetbrains://idea/checkout/git?idea.required.plugins.id=Git4Idea&amp;checkout.repo=https%3A%2F%2Fgitlab.com%2Fthe-foundation%2Fthe-foundation.gitlab.io-comments-vssue.js.git">
<div class="gl-dropdown-item-text-wrapper">
IntelliJ IDEA (HTTPS)
</div>
</a>
<li class="divider mt-2" role="presentation"></li>
<li class="gl-dropdown-item gl-pt-3!" role="menuitem">
<label class="label-bold gl-px-4!">Download source code</label>
<a class="dropdown-item open-with-link" download="" href="/the-foundation/the-foundation.gitlab.io-comments-vssue.js/-/archive/main/the-foundation.gitlab.io-comments-vssue.js-main.zip" rel="nofollow">
<div class="gl-dropdown-item-text-wrapper">zip</div>
</a>
<a class="dropdown-item open-with-link" download="" href="/the-foundation/the-foundation.gitlab.io-comments-vssue.js/-/archive/main/the-foundation.gitlab.io-comments-vssue.js-main.tar.gz" rel="nofollow">
<div class="gl-dropdown-item-text-wrapper">tar.gz</div>
</a>
<a class="dropdown-item open-with-link" download="" href="/the-foundation/the-foundation.gitlab.io-comments-vssue.js/-/archive/main/the-foundation.gitlab.io-comments-vssue.js-main.tar.bz2" rel="nofollow">
<div class="gl-dropdown-item-text-wrapper">tar.bz2</div>
</a>
<a class="dropdown-item open-with-link" download="" href="/the-foundation/the-foundation.gitlab.io-comments-vssue.js/-/archive/main/the-foundation.gitlab.io-comments-vssue.js-main.tar" rel="nofollow">
<div class="gl-dropdown-item-text-wrapper">tar</div>
</a>

</li>
<div class="js-directory-downloads" data-links="[{&quot;text&quot;:&quot;zip&quot;,&quot;path&quot;:&quot;/the-foundation/the-foundation.gitlab.io-comments-vssue.js/-/archive/main/the-foundation.gitlab.io-comments-vssue.js-main.zip&quot;},{&quot;text&quot;:&quot;tar.gz&quot;,&quot;path&quot;:&quot;/the-foundation/the-foundation.gitlab.io-comments-vssue.js/-/archive/main/the-foundation.gitlab.io-comments-vssue.js-main.tar.gz&quot;},{&quot;text&quot;:&quot;tar.bz2&quot;,&quot;path&quot;:&quot;/the-foundation/the-foundation.gitlab.io-comments-vssue.js/-/archive/main/the-foundation.gitlab.io-comments-vssue.js-main.tar.bz2&quot;},{&quot;text&quot;:&quot;tar&quot;,&quot;path&quot;:&quot;/the-foundation/the-foundation.gitlab.io-comments-vssue.js/-/archive/main/the-foundation.gitlab.io-comments-vssue.js-main.tar&quot;}]"></div>

</li>
</ul>
</div>

</div>
</div>
<div class="project-code-holder gl-display-flex gl-gap-3 gl-sm-display-none!">
<div class="project-action-button dropdown gl-dropdown inline">
<button class="gl-button btn btn-md btn-default dropdown-toggle gl-dropdown-toggle dropdown-icon-only has-tooltip" title="Download" data-toggle="dropdown" aria-label="Download" data-display="static" data-testid="download-source-code-button" type="button"><span class="gl-button-text">
<svg class="s16 gl-icon dropdown-icon" data-testid="download-icon"><use href="/assets/icons-1563760c6022424ca5187159258484be0c106b044e5e5a1b4f0be7a10cd6c90f.svg#download"></use></svg>
<span class="sr-only">Select Archive Format</span>
<svg class="s16 gl-icon dropdown-chevron" data-testid="chevron-down-icon"><use href="/assets/icons-1563760c6022424ca5187159258484be0c106b044e5e5a1b4f0be7a10cd6c90f.svg#chevron-down"></use></svg>

</span>

</button><ul class="dropdown-menu dropdown-menu-right" role="menu">
<li class="gl-dropdown-item gl-pt-3!" role="menuitem">
<label class="label-bold gl-px-4!">Download source code</label>
<a class="dropdown-item open-with-link" download="" href="/the-foundation/the-foundation.gitlab.io-comments-vssue.js/-/archive/main/the-foundation.gitlab.io-comments-vssue.js-main.zip" rel="nofollow">
<div class="gl-dropdown-item-text-wrapper">zip</div>
</a>
<a class="dropdown-item open-with-link" download="" href="/the-foundation/the-foundation.gitlab.io-comments-vssue.js/-/archive/main/the-foundation.gitlab.io-comments-vssue.js-main.tar.gz" rel="nofollow">
<div class="gl-dropdown-item-text-wrapper">tar.gz</div>
</a>
<a class="dropdown-item open-with-link" download="" href="/the-foundation/the-foundation.gitlab.io-comments-vssue.js/-/archive/main/the-foundation.gitlab.io-comments-vssue.js-main.tar.bz2" rel="nofollow">
<div class="gl-dropdown-item-text-wrapper">tar.bz2</div>
</a>
<a class="dropdown-item open-with-link" download="" href="/the-foundation/the-foundation.gitlab.io-comments-vssue.js/-/archive/main/the-foundation.gitlab.io-comments-vssue.js-main.tar" rel="nofollow">
<div class="gl-dropdown-item-text-wrapper">tar</div>
</a>

</li>
<div class="js-directory-downloads" data-links="[{&quot;text&quot;:&quot;zip&quot;,&quot;path&quot;:&quot;/the-foundation/the-foundation.gitlab.io-comments-vssue.js/-/archive/main/the-foundation.gitlab.io-comments-vssue.js-main.zip&quot;},{&quot;text&quot;:&quot;tar.gz&quot;,&quot;path&quot;:&quot;/the-foundation/the-foundation.gitlab.io-comments-vssue.js/-/archive/main/the-foundation.gitlab.io-comments-vssue.js-main.tar.gz&quot;},{&quot;text&quot;:&quot;tar.bz2&quot;,&quot;path&quot;:&quot;/the-foundation/the-foundation.gitlab.io-comments-vssue.js/-/archive/main/the-foundation.gitlab.io-comments-vssue.js-main.tar.bz2&quot;},{&quot;text&quot;:&quot;tar&quot;,&quot;path&quot;:&quot;/the-foundation/the-foundation.gitlab.io-comments-vssue.js/-/archive/main/the-foundation.gitlab.io-comments-vssue.js-main.tar&quot;}]"></div>

</ul>
</div>
<div class="btn-group mobile-git-clone js-mobile-git-clone btn-block">
<button class="gl-button btn btn-md btn-confirm clone-dropdown-btn js-clone-dropdown-label" title="Copy" aria-label="Copy" aria-live="polite" data-toggle="tooltip" data-placement="bottom" data-container="body" data-button-text="Copy HTTPS clone URL" data-size="medium" data-category="primary" data-variant="confirm" data-hide-button-icon="true" data-clipboard-text="/assets/gitlab_com/the-foundation/the-foundation.gitlab.io-comments-vssue.js.git" type="button"><span class="gl-button-text">
Copy HTTPS clone URL
</span>

</button>
<button class="btn gl-button btn-confirm dropdown-toggle js-dropdown-toggle flex-grow-0 d-flex-center w-auto ml-0" data-toggle="dropdown" type="button">
<svg class="s16 dropdown-btn-icon icon" data-testid="chevron-down-icon"><use href="/assets/icons-1563760c6022424ca5187159258484be0c106b044e5e5a1b4f0be7a10cd6c90f.svg#chevron-down"></use></svg>
</button>
<ul class="dropdown-menu dropdown-menu-selectable dropdown-menu-right clone-options-dropdown" data-dropdown>
<li class="js-clone-links">
<a class="copy ssh clone url-selector is-active" href="git@gitlab.com:the-foundation/the-foundation.gitlab.io-comments-vssue.js.git" data-clone-type="ssh"><strong class="dropdown-menu-inner-title">Copy SSH clone URL</strong><span class="dropdown-menu-inner-content">git@gitlab.com:the-foundation/the-foundation.gitlab.io-comments-vssue.js.git</span></a>
</li>
<li class="js-clone-links">
<a class="copy https clone url-selector " href="/assets/gitlab_com/the-foundation/the-foundation.gitlab.io-comments-vssue.js.git" data-clone-type="http"><strong class="dropdown-menu-inner-title">Copy HTTPS clone URL</strong><span class="dropdown-menu-inner-content">https://gitlab.com/the-foundation/the-foundation.gitlab.io-comments-vssue.js.git</span></a>
</li>

</ul>
</div>

</div>
</div>

</div>
<div class="info-well gl-display-none gl-sm-display-flex project-last-commit gl-flex-direction-column gl-mt-5">
<div class="gl-m-auto" data-ref-type="" id="js-last-commit">
<div class="gl-spinner-container" role="status"><span aria-label="Loading" class="gl-spinner gl-spinner-md gl-spinner-dark gl-vertical-align-text-bottom!"></span></div>
</div>
</div>
<div data-escaped-ref="main" data-explain-code-available="false" data-full-name="The Foundation / The Foundation.Gitlab.Io Comments Vssue.Js" data-path-locks-available="false" data-path-locks-toggle="/the-foundation/the-foundation.gitlab.io-comments-vssue.js/path_locks/toggle" data-project-path="the-foundation/the-foundation.gitlab.io-comments-vssue.js" data-project-short-path="the-foundation.gitlab.io-comments-vssue.js" data-ref="main" data-resource-id="gid://gitlab/Project/32909927" data-user-id="" id="js-tree-list"></div>
</div>

</div>
</div>
</div>

</main>
</div>


</div>
</div>


<script nonce="QpKTzlN4VfX2Twm+2uYUKw==">
//<![CDATA[
if ('loading' in HTMLImageElement.prototype) {
  document.querySelectorAll('img.lazy').forEach(img => {
    img.loading = 'lazy';
    let imgUrl = img.dataset.src;
    // Only adding width + height for avatars for now
    if (imgUrl.indexOf('/avatar/') > -1 && imgUrl.indexOf('?') === -1) {
      const targetWidth = img.getAttribute('width') || img.width;
      imgUrl += `?width=${targetWidth}`;
    }
    img.src = imgUrl;
    img.removeAttribute('data-src');
    img.classList.remove('lazy');
    img.classList.add('js-lazy-loaded');
    img.dataset.testid = 'js-lazy-loaded-content';
  });
}

//]]>
</script>
<script nonce="QpKTzlN4VfX2Twm+2uYUKw==">
//<![CDATA[
gl = window.gl || {};
gl.experiments = {};


//]]>
</script>

</body>
</html>

