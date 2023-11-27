



<!DOCTYPE html>
<html class="ui-light-gray with-header with-top-bar " lang="en">
<head prefix="og: http://ogp.me/ns#">
<meta charset="utf-8">
<meta content="IE=edge" http-equiv="X-UA-Compatible">
<meta content="width=device-width, initial-scale=1" name="viewport">
<title>The Foundation / The Foundation.Gitlab.Io Comments Vssue.Js · GitLab</title>
<script nonce="/Z+ET7pHKoqfQmT2JiAEJQ==">
//<![CDATA[
window.gon={};gon.features={"blobBlameInfo":false,"highlightJsWorker":true,"removeMonitorMetrics":true,"explainCodeChat":false,"serviceDeskCustomEmail":true,"issueEmailParticipants":false,"pageSpecificStyles":false,"workItems":true,"workItemsMvc":false,"workItemsMvc2":false,"linkedWorkItems":true};gon.licensed_features={"remoteDevelopment":true};
//]]>
</script>

<script nonce="/Z+ET7pHKoqfQmT2JiAEJQ==">
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
  const headers = {"X-CSRF-Token":"1Ajnjb1zllqSjRSegVzmGpcsJSyiE2x9GEHbJgWLaLKeCPCLyS04y37Bxt8WRL6KESuOtRnDBfZCIcJ8iFd7MA","x-gitlab-feature-category":"groups_and_projects"};
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


<link rel="stylesheet" href="/assets/themes/theme_light_gray-dbc6017558e90a964387598e83f7f44937bb330917dc2f3b6bc3b4e5df0d2a07.css" />

<link rel="stylesheet" href="/assets/application-343cb41fd7769c235288c478b11042e9fd1f49d7e6b71f572df4a30878275ed0.css" media="all" />
<link rel="stylesheet" href="/assets/page_bundles/project-e92530a19b30aa0437f3f894f42876fa2f115dd6e8576e568dee8d57429b0aed.css" media="all" /><link rel="stylesheet" href="/assets/page_bundles/tree-f6d6069fc478c6f7631a961ef1c149fc1885bb5819d7e93642830f3f2bded7d7.css" media="all" /><link rel="stylesheet" href="/assets/page_bundles/projects-8859fda14430424b55d5775ee86b6d191413eef6db9eda491d4f4aabd6835fc4.css" media="all" />
<link rel="stylesheet" href="/assets/application_utilities-16e034c5239432e388778232b5ea24a5cbea382850858934930553027b48d54f.css" media="all" />


<link rel="stylesheet" href="/assets/fonts-115c4704cb8c77e2fdf3fd0243eebf164e2e9b54bbab7bf6a4c14868b865ddf8.css" media="all" />
<link rel="stylesheet" href="/assets/highlight/themes/white-96f127bcbdab3caa86a6cc73183496a2fa61f5fdac1f3b410eaf990adbc6ea3b.css" media="all" />

<script src="/assets/webpack/runtime.2e1d7ec3.bundle.js" defer="defer" nonce="/Z+ET7pHKoqfQmT2JiAEJQ=="></script>
<script src="/assets/webpack/main.8601d73c.chunk.js" defer="defer" nonce="/Z+ET7pHKoqfQmT2JiAEJQ=="></script>
<script src="/assets/webpack/tracker.bd1baf0d.chunk.js" defer="defer" nonce="/Z+ET7pHKoqfQmT2JiAEJQ=="></script>
<script src="/assets/webpack/analytics.91542184.chunk.js" defer="defer" nonce="/Z+ET7pHKoqfQmT2JiAEJQ=="></script>
<script nonce="/Z+ET7pHKoqfQmT2JiAEJQ==">
//<![CDATA[
window.snowplowOptions = {"namespace":"gl","hostname":"snowplow.trx.gitlab.net","cookieDomain":".gitlab.com","appId":"gitlab","formTracking":true,"linkClickTracking":true}

gl = window.gl || {};
gl.snowplowStandardContext = {"schema":"iglu:com.gitlab/gitlab_standard/jsonschema/1-0-9","data":{"environment":"production","source":"gitlab-rails","plan":"free","extra":{"new_nav":true},"user_id":null,"is_gitlab_team_member":null,"namespace_id":4170095,"project_id":32909927,"context_generated_at":"2023-11-27T01:52:10.210Z"}}
gl.snowplowPseudonymizedPageUrl = "https://gitlab.com/namespace4170095/project32909927";


//]]>
</script>
<link rel="preload" href="/assets/application_utilities-16e034c5239432e388778232b5ea24a5cbea382850858934930553027b48d54f.css" as="style" type="text/css" nonce="V8bLCvd+WWKz0n5h3KxZbA==">
<link rel="preload" href="/assets/application-343cb41fd7769c235288c478b11042e9fd1f49d7e6b71f572df4a30878275ed0.css" as="style" type="text/css" nonce="V8bLCvd+WWKz0n5h3KxZbA==">
<link rel="preload" href="/assets/highlight/themes/white-96f127bcbdab3caa86a6cc73183496a2fa61f5fdac1f3b410eaf990adbc6ea3b.css" as="style" type="text/css" nonce="V8bLCvd+WWKz0n5h3KxZbA==">
<link crossorigin="" href="https://snowplow.trx.gitlab.net" rel="preconnect">
<link as="font" crossorigin="" href="/assets/gitlab-sans/GitLabSans-1e0a5107ea3bbd4be93e8ad2c503467e43166cd37e4293570b490e0812ede98b.woff2" rel="preload">
<link as="font" crossorigin="" href="/assets/gitlab-sans/GitLabSans-Italic-38eaf1a569a54ab28c58b92a4a8de3afb96b6ebc250cf372003a7b38151848cc.woff2" rel="preload">
<link as="font" crossorigin="" href="/assets/gitlab-mono/GitLabMono-08d2c5e8ff8fd3d2d6ec55bc7713380f8981c35f9d2df14e12b835464d6e8f23.woff2" rel="preload">
<link as="font" crossorigin="" href="/assets/gitlab-mono/GitLabMono-Italic-38e58d8df29485a20c550da1d0111e2c2169f6dcbcf894f2cd3afbdd97bcc588.woff2" rel="preload">
<link rel="preload" href="/assets/fonts-115c4704cb8c77e2fdf3fd0243eebf164e2e9b54bbab7bf6a4c14868b865ddf8.css" as="style" type="text/css" nonce="V8bLCvd+WWKz0n5h3KxZbA==">



<script src="/assets/webpack/sentry.ad24c670.chunk.js" defer="defer" nonce="/Z+ET7pHKoqfQmT2JiAEJQ=="></script>


<script src="/assets/webpack/commons-pages.projects.learn_gitlab.show-pages.search.show-super_sidebar.48cb43f0.chunk.js" defer="defer" nonce="/Z+ET7pHKoqfQmT2JiAEJQ=="></script>
<script src="/assets/webpack/commons-pages.search.show-super_sidebar.762beb7e.chunk.js" defer="defer" nonce="/Z+ET7pHKoqfQmT2JiAEJQ=="></script>
<script src="/assets/webpack/super_sidebar.e6a6f51e.chunk.js" defer="defer" nonce="/Z+ET7pHKoqfQmT2JiAEJQ=="></script>
<script src="/assets/webpack/shortcutsBundle.31e63f9d.chunk.js" defer="defer" nonce="/Z+ET7pHKoqfQmT2JiAEJQ=="></script>
<script src="/assets/webpack/commons-pages.groups.boards-pages.groups.details-pages.groups.epic_boards-pages.groups.show-pages.gr-c65ce8d6.64678dd5.chunk.js" defer="defer" nonce="/Z+ET7pHKoqfQmT2JiAEJQ=="></script>
<script src="/assets/webpack/commons-pages.admin.runners.show-pages.clusters.agents.dashboard-pages.explore.catalog-pages.groups.-6b038e88.fa452e74.chunk.js" defer="defer" nonce="/Z+ET7pHKoqfQmT2JiAEJQ=="></script>
<script src="/assets/webpack/commons-pages.admin.subscriptions.show-pages.groups.security.policies.edit-pages.groups.security.pol-6bfecbfa.39e3ea89.chunk.js" defer="defer" nonce="/Z+ET7pHKoqfQmT2JiAEJQ=="></script>
<script src="/assets/webpack/commons-pages.projects.blob.show-pages.projects.show-pages.projects.snippets.edit-pages.projects.sni-42df7d4c.bf3bd430.chunk.js" defer="defer" nonce="/Z+ET7pHKoqfQmT2JiAEJQ=="></script>
<script src="/assets/webpack/commons-pages.projects.blob.show-pages.projects.show-pages.projects.snippets.show-pages.projects.tre-c684fcf6.1dfed251.chunk.js" defer="defer" nonce="/Z+ET7pHKoqfQmT2JiAEJQ=="></script>
<script src="/assets/webpack/commons-pages.groups.show-pages.projects.blob.show-pages.projects.show-pages.projects.tree.show.a03d8ab2.chunk.js" defer="defer" nonce="/Z+ET7pHKoqfQmT2JiAEJQ=="></script>
<script src="/assets/webpack/commons-pages.groups.details-pages.groups.show-pages.profiles.notifications.show-pages.projects.show.7d87a266.chunk.js" defer="defer" nonce="/Z+ET7pHKoqfQmT2JiAEJQ=="></script>
<script src="/assets/webpack/commons-pages.projects.blob.show-pages.projects.show-pages.projects.tree.show.bcfa8171.chunk.js" defer="defer" nonce="/Z+ET7pHKoqfQmT2JiAEJQ=="></script>
<script src="/assets/webpack/commons-pages.projects.show-pages.projects.tree.show.ff40c484.chunk.js" defer="defer" nonce="/Z+ET7pHKoqfQmT2JiAEJQ=="></script>
<script src="/assets/webpack/pages.projects.show.79c9ef91.chunk.js" defer="defer" nonce="/Z+ET7pHKoqfQmT2JiAEJQ=="></script>
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
<meta name="csrf-token" content="-vev3CF7Xh39Ju-HDLW1CEgwyW9O3q0Grlji8n4-0XGw97jaVSXwjBFqPcabre2Yzjdi9vUOxI30OPuo8-LC8w" />
<meta name="csp-nonce" content="/Z+ET7pHKoqfQmT2JiAEJQ==" />
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

<script nonce="/Z+ET7pHKoqfQmT2JiAEJQ==">
//<![CDATA[
gl = window.gl || {};
gl.client = {"isFirefox":true,"isFirefox Os":true};


//]]>
</script>



<header class="navbar navbar-gitlab super-sidebar-logged-out" data-testid="navbar">
<a class="gl-sr-only gl-accessibility" href="#content-body">Skip to content</a>
<div class="container-fluid">
<nav aria-label="Explore GitLab" class="header-content gl-displax-flex">
<div class="title-container gl-display-flex gl-align-items-stretch gl-pt-0 gl-mr-3">
<div class="title">
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

<ul class="nav navbar-sub-nav gl-align-items-center gl-display-flex gl-flex-direction-row gl-flex-grow-1">
<li class="nav-item dropdown gl-mr-3 gl-md-display-none">
<button data-toggle="dropdown" type="button">
<span class="gl-sr-only">
Menu
</span>
<svg class="s16" data-testid="hamburger-icon"><use href="/assets/icons-33d285b77c0f9173f577e26a550fb6463b9913e368ebfcdbb54022aff27051db.svg#hamburger"></use></svg>
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
<li class="nav-item gl-mr-3 gl-display-none gl-md-display-inline-block">
<a href="https://about.gitlab.com/why-gitlab">Why GitLab
</a></li>
<li class="nav-item gl-mr-3 gl-display-none gl-md-display-inline-block">
<a href="https://about.gitlab.com/pricing">Pricing
</a></li>
<li class="nav-item gl-mr-3 gl-display-none gl-md-display-inline-block">
<a href="https://about.gitlab.com/sales">Contact Sales
</a></li>
<li class="nav-item gl-display-none gl-md-display-inline-block">
<a class="" href="/explore">Explore</a>
</li>
</ul>
</div>
<ul class="nav navbar-nav gl-align-items-center gl-justify-content-end gl-flex-direction-row">
<li class="nav-item gl-mr-3">
<a href="/users/sign_in?redirect_to_referer=yes">Sign in</a>
</li>
<li>
<a class="gl-button btn btn-md btn-confirm " href="/users/sign_up"><span class="gl-button-text">
Get free trial

</span>

</a></li>
</ul>
</nav>
</div>
</header>

<div class="layout-page hide-when-top-nav-responsive-open page-with-super-sidebar">
<aside class="js-super-sidebar super-sidebar super-sidebar-loading" data-command-palette="{&quot;project_files_url&quot;:&quot;/the-foundation/the-foundation.gitlab.io-comments-vssue.js/-/files/main?format=json&quot;,&quot;project_blob_url&quot;:&quot;/the-foundation/the-foundation.gitlab.io-comments-vssue.js/-/blob/main&quot;}" data-force-desktop-expanded-sidebar="" data-root-path="/" data-sidebar="{&quot;is_logged_in&quot;:false,&quot;context_switcher_links&quot;:[{&quot;title&quot;:&quot;Explore&quot;,&quot;link&quot;:&quot;/explore&quot;,&quot;icon&quot;:&quot;compass&quot;}],&quot;current_menu_items&quot;:[{&quot;id&quot;:&quot;project_overview&quot;,&quot;title&quot;:&quot;The Foundation.Gitlab.Io Comments Vssue.Js&quot;,&quot;icon&quot;:null,&quot;avatar&quot;:null,&quot;entity_id&quot;:32909927,&quot;link&quot;:&quot;/the-foundation/the-foundation.gitlab.io-comments-vssue.js&quot;,&quot;pill_count&quot;:null,&quot;link_classes&quot;:&quot;shortcuts-project&quot;,&quot;is_active&quot;:true},{&quot;id&quot;:&quot;manage_menu&quot;,&quot;title&quot;:&quot;Manage&quot;,&quot;icon&quot;:&quot;users&quot;,&quot;avatar&quot;:null,&quot;avatar_shape&quot;:&quot;rect&quot;,&quot;entity_id&quot;:null,&quot;link&quot;:&quot;/the-foundation/the-foundation.gitlab.io-comments-vssue.js/activity&quot;,&quot;is_active&quot;:false,&quot;pill_count&quot;:null,&quot;items&quot;:[{&quot;id&quot;:&quot;activity&quot;,&quot;title&quot;:&quot;Activity&quot;,&quot;icon&quot;:null,&quot;avatar&quot;:null,&quot;entity_id&quot;:null,&quot;link&quot;:&quot;/the-foundation/the-foundation.gitlab.io-comments-vssue.js/activity&quot;,&quot;pill_count&quot;:null,&quot;link_classes&quot;:&quot;shortcuts-project-activity&quot;,&quot;is_active&quot;:false},{&quot;id&quot;:&quot;members&quot;,&quot;title&quot;:&quot;Members&quot;,&quot;icon&quot;:null,&quot;avatar&quot;:null,&quot;entity_id&quot;:null,&quot;link&quot;:&quot;/the-foundation/the-foundation.gitlab.io-comments-vssue.js/-/project_members&quot;,&quot;pill_count&quot;:null,&quot;link_classes&quot;:null,&quot;is_active&quot;:false},{&quot;id&quot;:&quot;labels&quot;,&quot;title&quot;:&quot;Labels&quot;,&quot;icon&quot;:null,&quot;avatar&quot;:null,&quot;entity_id&quot;:null,&quot;link&quot;:&quot;/the-foundation/the-foundation.gitlab.io-comments-vssue.js/-/labels&quot;,&quot;pill_count&quot;:null,&quot;link_classes&quot;:null,&quot;is_active&quot;:false}],&quot;separated&quot;:false},{&quot;id&quot;:&quot;plan_menu&quot;,&quot;title&quot;:&quot;Plan&quot;,&quot;icon&quot;:&quot;planning&quot;,&quot;avatar&quot;:null,&quot;avatar_shape&quot;:&quot;rect&quot;,&quot;entity_id&quot;:null,&quot;link&quot;:&quot;/the-foundation/the-foundation.gitlab.io-comments-vssue.js/-/issues&quot;,&quot;is_active&quot;:false,&quot;pill_count&quot;:null,&quot;items&quot;:[{&quot;id&quot;:&quot;project_issue_list&quot;,&quot;title&quot;:&quot;Issues&quot;,&quot;icon&quot;:null,&quot;avatar&quot;:null,&quot;entity_id&quot;:null,&quot;link&quot;:&quot;/the-foundation/the-foundation.gitlab.io-comments-vssue.js/-/issues&quot;,&quot;pill_count&quot;:&quot;0&quot;,&quot;link_classes&quot;:&quot;shortcuts-issues has-sub-items&quot;,&quot;is_active&quot;:false},{&quot;id&quot;:&quot;boards&quot;,&quot;title&quot;:&quot;Issue boards&quot;,&quot;icon&quot;:null,&quot;avatar&quot;:null,&quot;entity_id&quot;:null,&quot;link&quot;:&quot;/the-foundation/the-foundation.gitlab.io-comments-vssue.js/-/boards&quot;,&quot;pill_count&quot;:null,&quot;link_classes&quot;:&quot;shortcuts-issue-boards&quot;,&quot;is_active&quot;:false},{&quot;id&quot;:&quot;milestones&quot;,&quot;title&quot;:&quot;Milestones&quot;,&quot;icon&quot;:null,&quot;avatar&quot;:null,&quot;entity_id&quot;:null,&quot;link&quot;:&quot;/the-foundation/the-foundation.gitlab.io-comments-vssue.js/-/milestones&quot;,&quot;pill_count&quot;:null,&quot;link_classes&quot;:null,&quot;is_active&quot;:false},{&quot;id&quot;:&quot;project_wiki&quot;,&quot;title&quot;:&quot;Wiki&quot;,&quot;icon&quot;:null,&quot;avatar&quot;:null,&quot;entity_id&quot;:null,&quot;link&quot;:&quot;/the-foundation/the-foundation.gitlab.io-comments-vssue.js/-/wikis/home&quot;,&quot;pill_count&quot;:null,&quot;link_classes&quot;:&quot;shortcuts-wiki&quot;,&quot;is_active&quot;:false}],&quot;separated&quot;:false},{&quot;id&quot;:&quot;code_menu&quot;,&quot;title&quot;:&quot;Code&quot;,&quot;icon&quot;:&quot;code&quot;,&quot;avatar&quot;:null,&quot;avatar_shape&quot;:&quot;rect&quot;,&quot;entity_id&quot;:null,&quot;link&quot;:&quot;/the-foundation/the-foundation.gitlab.io-comments-vssue.js/-/merge_requests&quot;,&quot;is_active&quot;:false,&quot;pill_count&quot;:null,&quot;items&quot;:[{&quot;id&quot;:&quot;project_merge_request_list&quot;,&quot;title&quot;:&quot;Merge requests&quot;,&quot;icon&quot;:null,&quot;avatar&quot;:null,&quot;entity_id&quot;:null,&quot;link&quot;:&quot;/the-foundation/the-foundation.gitlab.io-comments-vssue.js/-/merge_requests&quot;,&quot;pill_count&quot;:&quot;0&quot;,&quot;link_classes&quot;:&quot;shortcuts-merge_requests&quot;,&quot;is_active&quot;:false},{&quot;id&quot;:&quot;files&quot;,&quot;title&quot;:&quot;Repository&quot;,&quot;icon&quot;:null,&quot;avatar&quot;:null,&quot;entity_id&quot;:null,&quot;link&quot;:&quot;/the-foundation/the-foundation.gitlab.io-comments-vssue.js/-/tree/main&quot;,&quot;pill_count&quot;:null,&quot;link_classes&quot;:&quot;shortcuts-tree&quot;,&quot;is_active&quot;:false},{&quot;id&quot;:&quot;branches&quot;,&quot;title&quot;:&quot;Branches&quot;,&quot;icon&quot;:null,&quot;avatar&quot;:null,&quot;entity_id&quot;:null,&quot;link&quot;:&quot;/the-foundation/the-foundation.gitlab.io-comments-vssue.js/-/branches&quot;,&quot;pill_count&quot;:null,&quot;link_classes&quot;:null,&quot;is_active&quot;:false},{&quot;id&quot;:&quot;commits&quot;,&quot;title&quot;:&quot;Commits&quot;,&quot;icon&quot;:null,&quot;avatar&quot;:null,&quot;entity_id&quot;:null,&quot;link&quot;:&quot;/the-foundation/the-foundation.gitlab.io-comments-vssue.js/-/commits/main?ref_type=heads&quot;,&quot;pill_count&quot;:null,&quot;link_classes&quot;:&quot;shortcuts-commits&quot;,&quot;is_active&quot;:false},{&quot;id&quot;:&quot;tags&quot;,&quot;title&quot;:&quot;Tags&quot;,&quot;icon&quot;:null,&quot;avatar&quot;:null,&quot;entity_id&quot;:null,&quot;link&quot;:&quot;/the-foundation/the-foundation.gitlab.io-comments-vssue.js/-/tags&quot;,&quot;pill_count&quot;:null,&quot;link_classes&quot;:null,&quot;is_active&quot;:false},{&quot;id&quot;:&quot;graphs&quot;,&quot;title&quot;:&quot;Repository graph&quot;,&quot;icon&quot;:null,&quot;avatar&quot;:null,&quot;entity_id&quot;:null,&quot;link&quot;:&quot;/the-foundation/the-foundation.gitlab.io-comments-vssue.js/-/network/main?ref_type=heads&quot;,&quot;pill_count&quot;:null,&quot;link_classes&quot;:&quot;shortcuts-network&quot;,&quot;is_active&quot;:false},{&quot;id&quot;:&quot;compare&quot;,&quot;title&quot;:&quot;Compare revisions&quot;,&quot;icon&quot;:null,&quot;avatar&quot;:null,&quot;entity_id&quot;:null,&quot;link&quot;:&quot;/the-foundation/the-foundation.gitlab.io-comments-vssue.js/-/compare?from=main\u0026to=main&quot;,&quot;pill_count&quot;:null,&quot;link_classes&quot;:null,&quot;is_active&quot;:false},{&quot;id&quot;:&quot;project_snippets&quot;,&quot;title&quot;:&quot;Snippets&quot;,&quot;icon&quot;:null,&quot;avatar&quot;:null,&quot;entity_id&quot;:null,&quot;link&quot;:&quot;/the-foundation/the-foundation.gitlab.io-comments-vssue.js/-/snippets&quot;,&quot;pill_count&quot;:null,&quot;link_classes&quot;:&quot;shortcuts-snippets&quot;,&quot;is_active&quot;:false}],&quot;separated&quot;:false},{&quot;id&quot;:&quot;build_menu&quot;,&quot;title&quot;:&quot;Build&quot;,&quot;icon&quot;:&quot;rocket&quot;,&quot;avatar&quot;:null,&quot;avatar_shape&quot;:&quot;rect&quot;,&quot;entity_id&quot;:null,&quot;link&quot;:&quot;/the-foundation/the-foundation.gitlab.io-comments-vssue.js/-/pipelines&quot;,&quot;is_active&quot;:false,&quot;pill_count&quot;:null,&quot;items&quot;:[{&quot;id&quot;:&quot;pipelines&quot;,&quot;title&quot;:&quot;Pipelines&quot;,&quot;icon&quot;:null,&quot;avatar&quot;:null,&quot;entity_id&quot;:null,&quot;link&quot;:&quot;/the-foundation/the-foundation.gitlab.io-comments-vssue.js/-/pipelines&quot;,&quot;pill_count&quot;:null,&quot;link_classes&quot;:&quot;shortcuts-pipelines&quot;,&quot;is_active&quot;:false},{&quot;id&quot;:&quot;jobs&quot;,&quot;title&quot;:&quot;Jobs&quot;,&quot;icon&quot;:null,&quot;avatar&quot;:null,&quot;entity_id&quot;:null,&quot;link&quot;:&quot;/the-foundation/the-foundation.gitlab.io-comments-vssue.js/-/jobs&quot;,&quot;pill_count&quot;:null,&quot;link_classes&quot;:&quot;shortcuts-builds&quot;,&quot;is_active&quot;:false},{&quot;id&quot;:&quot;pipeline_schedules&quot;,&quot;title&quot;:&quot;Pipeline schedules&quot;,&quot;icon&quot;:null,&quot;avatar&quot;:null,&quot;entity_id&quot;:null,&quot;link&quot;:&quot;/the-foundation/the-foundation.gitlab.io-comments-vssue.js/-/pipeline_schedules&quot;,&quot;pill_count&quot;:null,&quot;link_classes&quot;:&quot;shortcuts-builds&quot;,&quot;is_active&quot;:false},{&quot;id&quot;:&quot;artifacts&quot;,&quot;title&quot;:&quot;Artifacts&quot;,&quot;icon&quot;:null,&quot;avatar&quot;:null,&quot;entity_id&quot;:null,&quot;link&quot;:&quot;/the-foundation/the-foundation.gitlab.io-comments-vssue.js/-/artifacts&quot;,&quot;pill_count&quot;:null,&quot;link_classes&quot;:&quot;shortcuts-builds&quot;,&quot;is_active&quot;:false}],&quot;separated&quot;:false},{&quot;id&quot;:&quot;deploy_menu&quot;,&quot;title&quot;:&quot;Deploy&quot;,&quot;icon&quot;:&quot;deployments&quot;,&quot;avatar&quot;:null,&quot;avatar_shape&quot;:&quot;rect&quot;,&quot;entity_id&quot;:null,&quot;link&quot;:&quot;/the-foundation/the-foundation.gitlab.io-comments-vssue.js/-/releases&quot;,&quot;is_active&quot;:false,&quot;pill_count&quot;:null,&quot;items&quot;:[{&quot;id&quot;:&quot;releases&quot;,&quot;title&quot;:&quot;Releases&quot;,&quot;icon&quot;:null,&quot;avatar&quot;:null,&quot;entity_id&quot;:null,&quot;link&quot;:&quot;/the-foundation/the-foundation.gitlab.io-comments-vssue.js/-/releases&quot;,&quot;pill_count&quot;:null,&quot;link_classes&quot;:&quot;shortcuts-deployments-releases&quot;,&quot;is_active&quot;:false},{&quot;id&quot;:&quot;packages_registry&quot;,&quot;title&quot;:&quot;Package Registry&quot;,&quot;icon&quot;:null,&quot;avatar&quot;:null,&quot;entity_id&quot;:null,&quot;link&quot;:&quot;/the-foundation/the-foundation.gitlab.io-comments-vssue.js/-/packages&quot;,&quot;pill_count&quot;:null,&quot;link_classes&quot;:&quot;shortcuts-container-registry&quot;,&quot;is_active&quot;:false},{&quot;id&quot;:&quot;container_registry&quot;,&quot;title&quot;:&quot;Container Registry&quot;,&quot;icon&quot;:null,&quot;avatar&quot;:null,&quot;entity_id&quot;:null,&quot;link&quot;:&quot;/the-foundation/the-foundation.gitlab.io-comments-vssue.js/container_registry&quot;,&quot;pill_count&quot;:null,&quot;link_classes&quot;:null,&quot;is_active&quot;:false}],&quot;separated&quot;:false},{&quot;id&quot;:&quot;operations_menu&quot;,&quot;title&quot;:&quot;Operate&quot;,&quot;icon&quot;:&quot;cloud-pod&quot;,&quot;avatar&quot;:null,&quot;avatar_shape&quot;:&quot;rect&quot;,&quot;entity_id&quot;:null,&quot;link&quot;:&quot;/the-foundation/the-foundation.gitlab.io-comments-vssue.js/-/environments&quot;,&quot;is_active&quot;:false,&quot;pill_count&quot;:null,&quot;items&quot;:[{&quot;id&quot;:&quot;environments&quot;,&quot;title&quot;:&quot;Environments&quot;,&quot;icon&quot;:null,&quot;avatar&quot;:null,&quot;entity_id&quot;:null,&quot;link&quot;:&quot;/the-foundation/the-foundation.gitlab.io-comments-vssue.js/-/environments&quot;,&quot;pill_count&quot;:null,&quot;link_classes&quot;:&quot;shortcuts-environments&quot;,&quot;is_active&quot;:false},{&quot;id&quot;:&quot;infrastructure_registry&quot;,&quot;title&quot;:&quot;Terraform modules&quot;,&quot;icon&quot;:null,&quot;avatar&quot;:null,&quot;entity_id&quot;:null,&quot;link&quot;:&quot;/the-foundation/the-foundation.gitlab.io-comments-vssue.js/-/infrastructure_registry&quot;,&quot;pill_count&quot;:null,&quot;link_classes&quot;:null,&quot;is_active&quot;:false}],&quot;separated&quot;:false},{&quot;id&quot;:&quot;monitor_menu&quot;,&quot;title&quot;:&quot;Monitor&quot;,&quot;icon&quot;:&quot;monitor&quot;,&quot;avatar&quot;:null,&quot;avatar_shape&quot;:&quot;rect&quot;,&quot;entity_id&quot;:null,&quot;link&quot;:&quot;/the-foundation/the-foundation.gitlab.io-comments-vssue.js/-/incidents&quot;,&quot;is_active&quot;:false,&quot;pill_count&quot;:null,&quot;items&quot;:[{&quot;id&quot;:&quot;incidents&quot;,&quot;title&quot;:&quot;Incidents&quot;,&quot;icon&quot;:null,&quot;avatar&quot;:null,&quot;entity_id&quot;:null,&quot;link&quot;:&quot;/the-foundation/the-foundation.gitlab.io-comments-vssue.js/-/incidents&quot;,&quot;pill_count&quot;:null,&quot;link_classes&quot;:null,&quot;is_active&quot;:false},{&quot;id&quot;:&quot;service_desk&quot;,&quot;title&quot;:&quot;Service Desk&quot;,&quot;icon&quot;:null,&quot;avatar&quot;:null,&quot;entity_id&quot;:null,&quot;link&quot;:&quot;/the-foundation/the-foundation.gitlab.io-comments-vssue.js/-/issues/service_desk&quot;,&quot;pill_count&quot;:null,&quot;link_classes&quot;:null,&quot;is_active&quot;:false}],&quot;separated&quot;:false},{&quot;id&quot;:&quot;analyze_menu&quot;,&quot;title&quot;:&quot;Analyze&quot;,&quot;icon&quot;:&quot;chart&quot;,&quot;avatar&quot;:null,&quot;avatar_shape&quot;:&quot;rect&quot;,&quot;entity_id&quot;:null,&quot;link&quot;:&quot;/the-foundation/the-foundation.gitlab.io-comments-vssue.js/-/value_stream_analytics&quot;,&quot;is_active&quot;:false,&quot;pill_count&quot;:null,&quot;items&quot;:[{&quot;id&quot;:&quot;cycle_analytics&quot;,&quot;title&quot;:&quot;Value stream analytics&quot;,&quot;icon&quot;:null,&quot;avatar&quot;:null,&quot;entity_id&quot;:null,&quot;link&quot;:&quot;/the-foundation/the-foundation.gitlab.io-comments-vssue.js/-/value_stream_analytics&quot;,&quot;pill_count&quot;:null,&quot;link_classes&quot;:&quot;shortcuts-project-cycle-analytics&quot;,&quot;is_active&quot;:false},{&quot;id&quot;:&quot;contributors&quot;,&quot;title&quot;:&quot;Contributor statistics&quot;,&quot;icon&quot;:null,&quot;avatar&quot;:null,&quot;entity_id&quot;:null,&quot;link&quot;:&quot;/the-foundation/the-foundation.gitlab.io-comments-vssue.js/-/graphs/main?ref_type=heads&quot;,&quot;pill_count&quot;:null,&quot;link_classes&quot;:null,&quot;is_active&quot;:false},{&quot;id&quot;:&quot;ci_cd_analytics&quot;,&quot;title&quot;:&quot;CI/CD analytics&quot;,&quot;icon&quot;:null,&quot;avatar&quot;:null,&quot;entity_id&quot;:null,&quot;link&quot;:&quot;/the-foundation/the-foundation.gitlab.io-comments-vssue.js/-/pipelines/charts&quot;,&quot;pill_count&quot;:null,&quot;link_classes&quot;:null,&quot;is_active&quot;:false},{&quot;id&quot;:&quot;repository_analytics&quot;,&quot;title&quot;:&quot;Repository analytics&quot;,&quot;icon&quot;:null,&quot;avatar&quot;:null,&quot;entity_id&quot;:null,&quot;link&quot;:&quot;/the-foundation/the-foundation.gitlab.io-comments-vssue.js/-/graphs/main/charts&quot;,&quot;pill_count&quot;:null,&quot;link_classes&quot;:&quot;shortcuts-repository-charts&quot;,&quot;is_active&quot;:false},{&quot;id&quot;:&quot;model_experiments&quot;,&quot;title&quot;:&quot;Model experiments&quot;,&quot;icon&quot;:null,&quot;avatar&quot;:null,&quot;entity_id&quot;:null,&quot;link&quot;:&quot;/the-foundation/the-foundation.gitlab.io-comments-vssue.js/-/ml/experiments&quot;,&quot;pill_count&quot;:null,&quot;link_classes&quot;:null,&quot;is_active&quot;:false}],&quot;separated&quot;:false}],&quot;current_context_header&quot;:&quot;Project&quot;,&quot;support_path&quot;:&quot;https://about.gitlab.com/get-help/&quot;,&quot;display_whats_new&quot;:true,&quot;whats_new_most_recent_release_items_count&quot;:3,&quot;whats_new_version_digest&quot;:&quot;ae8077b3a8781c118c10b869a06fb420228ee4fa00401fbb652cd88adf3b3bd9&quot;,&quot;show_version_check&quot;:null,&quot;gitlab_version&quot;:{&quot;major&quot;:16,&quot;minor&quot;:7,&quot;patch&quot;:0,&quot;suffix_s&quot;:&quot;&quot;},&quot;gitlab_version_check&quot;:null,&quot;search&quot;:{&quot;search_path&quot;:&quot;/search&quot;,&quot;issues_path&quot;:&quot;/dashboard/issues&quot;,&quot;mr_path&quot;:&quot;/dashboard/merge_requests&quot;,&quot;autocomplete_path&quot;:&quot;/search/autocomplete&quot;,&quot;search_context&quot;:{&quot;group&quot;:{&quot;id&quot;:4170095,&quot;name&quot;:&quot;The Foundation&quot;,&quot;full_name&quot;:&quot;The Foundation&quot;},&quot;group_metadata&quot;:{&quot;issues_path&quot;:&quot;/groups/the-foundation/-/issues&quot;,&quot;mr_path&quot;:&quot;/groups/the-foundation/-/merge_requests&quot;},&quot;project&quot;:{&quot;id&quot;:32909927,&quot;name&quot;:&quot;The Foundation.Gitlab.Io Comments Vssue.Js&quot;},&quot;project_metadata&quot;:{&quot;mr_path&quot;:&quot;/the-foundation/the-foundation.gitlab.io-comments-vssue.js/-/merge_requests&quot;,&quot;issues_path&quot;:&quot;/the-foundation/the-foundation.gitlab.io-comments-vssue.js/-/issues&quot;},&quot;code_search&quot;:true,&quot;ref&quot;:&quot;main&quot;,&quot;scope&quot;:null,&quot;for_snippets&quot;:null}},&quot;panel_type&quot;:&quot;project&quot;,&quot;shortcut_links&quot;:[{&quot;title&quot;:&quot;Snippets&quot;,&quot;href&quot;:&quot;/explore/snippets&quot;,&quot;css_class&quot;:&quot;dashboard-shortcuts-snippets&quot;},{&quot;title&quot;:&quot;Groups&quot;,&quot;href&quot;:&quot;/explore/groups&quot;,&quot;css_class&quot;:&quot;dashboard-shortcuts-groups&quot;},{&quot;title&quot;:&quot;Projects&quot;,&quot;href&quot;:&quot;/explore/projects&quot;,&quot;css_class&quot;:&quot;dashboard-shortcuts-projects&quot;}]}"></aside>
<div data-version-digest="ae8077b3a8781c118c10b869a06fb420228ee4fa00401fbb652cd88adf3b3bd9" id="whats-new-app"></div>

<div class="content-wrapper">
<div class="mobile-overlay"></div>

<div class="alert-wrapper gl-force-block-formatting-context">


























<div class="top-bar-fixed container-fluid" data-testid="top-bar">
<div class="top-bar-container gl-display-flex gl-align-items-center gl-gap-2">
<button class="gl-button btn btn-icon btn-md btn-default btn-default-tertiary js-super-sidebar-toggle-expand super-sidebar-toggle gl-ml-n3" aria-controls="super-sidebar" aria-expanded="false" aria-label="Primary navigation sidebar" type="button"><svg class="s16 gl-icon gl-button-icon " data-testid="sidebar-icon"><use href="/assets/icons-33d285b77c0f9173f577e26a550fb6463b9913e368ebfcdbb54022aff27051db.svg#sidebar"></use></svg>

</button>
<nav aria-label="Breadcrumbs" class="breadcrumbs" data-testid="breadcrumb-links">
<ul class="list-unstyled breadcrumbs-list js-breadcrumbs-list">
<li><a class="group-path breadcrumb-item-text js-breadcrumb-item-text " href="/the-foundation"><img srcset="/uploads/-/system/group/avatar/4170095/fdls.jpg?width=16 1x, /uploads/-/system/group/avatar/4170095/fdls.jpg?width=32 2x" alt="The Foundation" class="gl-avatar gl-avatar-s16 avatar-tile" height="16" width="16" loading="lazy" src="/uploads/-/system/group/avatar/4170095/fdls.jpg?width=16" />
The Foundation</a><svg class="s8 breadcrumbs-list-angle" data-testid="chevron-lg-right-icon"><use href="/assets/icons-33d285b77c0f9173f577e26a550fb6463b9913e368ebfcdbb54022aff27051db.svg#chevron-lg-right"></use></svg></li> <li><a href="/the-foundation/the-foundation.gitlab.io-comments-vssue.js"><span class="breadcrumb-item-text js-breadcrumb-item-text">The Foundation.Gitlab.Io Comments Vssue.Js</span></a><svg class="s8 breadcrumbs-list-angle" data-testid="chevron-lg-right-icon"><use href="/assets/icons-33d285b77c0f9173f577e26a550fb6463b9913e368ebfcdbb54022aff27051db.svg#chevron-lg-right"></use></svg></li>

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
<div class="flash-container flash-container-page sticky" data-qa-selector="flash_container">
<div id="js-global-alerts"></div>
</div>








<div class="project-home-panel js-show-on-project-root gl-mt-4 gl-mb-5">
<div class="gl-display-flex gl-justify-content-space-between gl-flex-wrap gl-flex-direction-column gl-md-flex-direction-row gl-mb-3 gl-gap-5">
<div class="home-panel-title-row gl-display-flex gl-align-items-center">
<div class="avatar-container rect-avatar s64 home-panel-avatar gl-flex-shrink-0 gl-w-11 gl-h-11 gl-mr-3! float-none">
<span class="avatar avatar-tile s64 identicon bg2">T</span>
</div>
<div>
<h1 class="home-panel-title gl-font-size-h1 gl-mt-3 gl-mb-2 gl-display-flex gl-word-break-word" data-testid="project-name-content" itemprop="name">
The Foundation.Gitlab.Io Comments Vssue.Js
<span class="has-tooltip visibility-icon gl-text-secondary gl-mx-2" data-container="body" data-placement="top" title="Public - The project can be accessed without any authentication."><svg class="s16 icon" data-testid="earth-icon"><use href="/assets/icons-33d285b77c0f9173f577e26a550fb6463b9913e368ebfcdbb54022aff27051db.svg#earth"></use></svg></span>


</h1>
<div class="home-panel-metadata gl-font-sm gl-text-secondary gl-font-base gl-font-weight-normal gl-line-height-normal" data-testid="project-id-content" itemprop="identifier">
<span class="gl-display-inline-block gl-vertical-align-middle">
Project ID: 32909927
<button class="gl-button btn btn-icon btn-sm btn-default btn-default-tertiary " title="Copy project ID" aria-label="Copy project ID" aria-live="polite" data-toggle="tooltip" data-placement="bottom" data-container="body" data-clipboard-text="32909927" type="button"><svg class="s16 gl-icon gl-button-icon " data-testid="copy-to-clipboard-icon"><use href="/assets/icons-33d285b77c0f9173f577e26a550fb6463b9913e368ebfcdbb54022aff27051db.svg#copy-to-clipboard"></use></svg>

</button>
</span>
</div>
</div>
</div>
<div class="project-repo-buttons gl-display-flex gl-justify-content-md-end gl-align-items-center gl-flex-wrap gl-gap-3">
<div class="count-badge d-inline-flex align-item-stretch btn-group">
<a class="gl-button btn btn-md btn-default has-tooltip star-btn" title="You must sign in to star a project" href="/users/sign_in"><svg class="s16 gl-icon gl-button-icon " data-testid="star-o-icon"><use href="/assets/icons-33d285b77c0f9173f577e26a550fb6463b9913e368ebfcdbb54022aff27051db.svg#star-o"></use></svg>
<span class="gl-button-text">
Star

</span>

</a><a title="Starrers" class="gl-button btn btn-md btn-default has-tooltip star-count count" href="/the-foundation/the-foundation.gitlab.io-comments-vssue.js/-/starrers"><span class="gl-button-text">
0

</span>

</a></div>


</div>
</div>
<nav class="project-stats">
<ul class="nav gl-gap-5">
<li class="nav-item">
<a class="nav-link gl-display-flex gl-align-items-center stat-link" href="/the-foundation/the-foundation.gitlab.io-comments-vssue.js/-/commits/main"><svg class="s16 icon gl-mr-2 gl-text-gray-500" data-testid="commit-icon"><use href="/assets/icons-33d285b77c0f9173f577e26a550fb6463b9913e368ebfcdbb54022aff27051db.svg#commit"></use></svg><strong class="project-stat-value">48</strong> Commits</a></li>
<li class="nav-item">
<a class="nav-link gl-display-flex gl-align-items-center stat-link" href="/the-foundation/the-foundation.gitlab.io-comments-vssue.js/-/branches"><svg class="s16 icon gl-mr-2 gl-text-gray-500" data-testid="branch-icon"><use href="/assets/icons-33d285b77c0f9173f577e26a550fb6463b9913e368ebfcdbb54022aff27051db.svg#branch"></use></svg><strong class="project-stat-value">1</strong> Branch</a></li>
<li class="nav-item">
<a class="nav-link gl-display-flex gl-align-items-center stat-link" href="/the-foundation/the-foundation.gitlab.io-comments-vssue.js/-/tags"><svg class="s16 icon gl-mr-2 gl-text-gray-500" data-testid="label-icon"><use href="/assets/icons-33d285b77c0f9173f577e26a550fb6463b9913e368ebfcdbb54022aff27051db.svg#label"></use></svg><strong class="project-stat-value">0</strong> Tags</a></li>
<li class="nav-item">
<div class="stat-text d-flex align-items-center"><svg class="s16 icon gl-mr-2 gl-text-gray-500" data-testid="disk-icon"><use href="/assets/icons-33d285b77c0f9173f577e26a550fb6463b9913e368ebfcdbb54022aff27051db.svg#disk"></use></svg><strong class="project-stat-value">599 KiB</strong> Project Storage</div>
</li>
</ul>

</nav>
<div class="gl-my-3">

</div>
<div class="home-panel-home-desc mt-1">

</div>
</div>

<div class="progress repository-languages-bar js-show-on-project-root"><div class="progress-bar has-tooltip" style="width: 96.63%; background-color:#f1e05a" data-html="true" title="&lt;span class=&quot;repository-language-bar-tooltip-language&quot;&gt;JavaScript&lt;/span&gt;&amp;nbsp;&lt;span class=&quot;repository-language-bar-tooltip-share&quot;&gt;96.6%&lt;/span&gt;"></div><div class="progress-bar has-tooltip" style="width: 3.23%; background-color:#e34c26" data-html="true" title="&lt;span class=&quot;repository-language-bar-tooltip-language&quot;&gt;HTML&lt;/span&gt;&amp;nbsp;&lt;span class=&quot;repository-language-bar-tooltip-share&quot;&gt;3.2%&lt;/span&gt;"></div><div class="progress-bar has-tooltip" style="width: 0.14%; background-color:#89e051" data-html="true" title="&lt;span class=&quot;repository-language-bar-tooltip-language&quot;&gt;Shell&lt;/span&gt;&amp;nbsp;&lt;span class=&quot;repository-language-bar-tooltip-share&quot;&gt;0.1%&lt;/span&gt;"></div></div>



<div class="project-show-files">
<div class="tree-holder clearfix js-per-page" data-blame-per-page="1000" id="tree-holder">
<div class="info-well gl-display-none gl-sm-display-flex project-last-commit gl-flex-direction-column gl-mt-5">
<div class="gl-m-auto" data-ref-type="" id="js-last-commit">
<div class="gl-spinner-container" role="status"><span aria-label="Loading" class="gl-spinner gl-spinner-md gl-spinner-dark gl-vertical-align-text-bottom!"></span></div>
</div>
</div>
<div class="nav-block gl-display-flex gl-flex-direction-column gl-sm-flex-direction-row gl-align-items-stretch">
<div class="tree-ref-container gl-display-flex gl-flex-wrap gl-gap-2 mb-2 mb-md-0">
<div class="tree-ref-holder gl-max-w-26" data-testid="ref-dropdown-container">
<div data-project-id="32909927" data-project-root-path="/the-foundation/the-foundation.gitlab.io-comments-vssue.js" data-ref-type="" id="js-tree-ref-switcher"></div>
</div>
<div data-can-collaborate="false" data-can-edit-tree="false" data-can-push-code="false" data-new-blob-path="/the-foundation/the-foundation.gitlab.io-comments-vssue.js/-/new/main" data-new-branch-path="/the-foundation/the-foundation.gitlab.io-comments-vssue.js/-/branches/new" data-new-dir-path="/the-foundation/the-foundation.gitlab.io-comments-vssue.js/-/create_dir/main" data-new-tag-path="/the-foundation/the-foundation.gitlab.io-comments-vssue.js/-/tags/new" data-upload-path="/the-foundation/the-foundation.gitlab.io-comments-vssue.js/-/create/main" id="js-repo-breadcrumb"></div>
</div>
<div id="js-blob-controls"></div>
<div class="tree-controls">
<div class="d-block d-sm-flex flex-wrap align-items-start gl-children-ml-sm-3 gl-first-child-ml-sm-0">
<div data-history-link="/the-foundation/the-foundation.gitlab.io-comments-vssue.js/-/commits/main" id="js-tree-history-link"></div>
<a class="gl-button btn btn-md btn-default shortcuts-find-file" rel="nofollow" href="/the-foundation/the-foundation.gitlab.io-comments-vssue.js/-/find_file/main"><span class="gl-button-text">
Find file

</span>

</a><div class="gl-display-inline-block" data-options="{&quot;project_path&quot;:&quot;the-foundation/the-foundation.gitlab.io-comments-vssue.js&quot;,&quot;ref&quot;:&quot;main&quot;,&quot;is_fork&quot;:false,&quot;needs_to_fork&quot;:true,&quot;gitpod_enabled&quot;:false,&quot;is_blob&quot;:false,&quot;show_edit_button&quot;:false,&quot;show_web_ide_button&quot;:false,&quot;show_gitpod_button&quot;:false,&quot;show_pipeline_editor_button&quot;:false,&quot;web_ide_url&quot;:&quot;/-/ide/project/the-foundation/the-foundation.gitlab.io-comments-vssue.js/edit/main&quot;,&quot;edit_url&quot;:&quot;&quot;,&quot;pipeline_editor_url&quot;:&quot;/the-foundation/the-foundation.gitlab.io-comments-vssue.js/-/ci/editor?branch_name=main&quot;,&quot;gitpod_url&quot;:&quot;https://gitpod.io/#/assets/gitlab_com/the-foundation/the-foundation.gitlab.io-comments-vssue.js/-/tree/main/&quot;,&quot;user_preferences_gitpod_path&quot;:&quot;/-/profile/preferences#user_gitpod_enabled&quot;,&quot;user_profile_enable_gitpod_path&quot;:&quot;/-/profile?user%5Bgitpod_enabled%5D=true&quot;,&quot;new_workspace_path&quot;:&quot;/-/remote_development/workspaces/new&quot;,&quot;project_id&quot;:32909927,&quot;fork_path&quot;:&quot;/the-foundation/the-foundation.gitlab.io-comments-vssue.js/-/forks/new&quot;,&quot;fork_modal_id&quot;:null}" data-web-ide-promo-popover-img="/assets/web-ide-promo-popover-9e59939b3b450a7ea385a520971151abb09ddad46141c333d6dcc783b9b91522.svg" id="js-tree-web-ide-link"></div>
<div class="project-action-button dropdown gl-dropdown inline">
<button class="gl-button btn btn-md btn-default dropdown-toggle gl-dropdown-toggle dropdown-icon-only has-tooltip" title="Download" data-toggle="dropdown" aria-label="Download" data-display="static" data-testid="download-source-code-button" type="button"><span class="gl-button-text">
<svg class="s16 gl-icon dropdown-icon" data-testid="download-icon"><use href="/assets/icons-33d285b77c0f9173f577e26a550fb6463b9913e368ebfcdbb54022aff27051db.svg#download"></use></svg>
<span class="sr-only">Select Archive Format</span>
<svg class="s16 gl-icon dropdown-chevron" data-testid="chevron-down-icon"><use href="/assets/icons-33d285b77c0f9173f577e26a550fb6463b9913e368ebfcdbb54022aff27051db.svg#chevron-down"></use></svg>

</span>

</button><div class="dropdown-menu dropdown-menu-right" role="menu">
<section>
<h5 class="m-0 dropdown-bold-header">Download source code</h5>
<div class="dropdown-menu-content">
<div class="btn-group ml-0 w-100">
<a rel="nofollow" download="" class="gl-button btn btn-sm btn-confirm " href="/the-foundation/the-foundation.gitlab.io-comments-vssue.js/-/archive/main/the-foundation.gitlab.io-comments-vssue.js-main.zip"><span class="gl-button-text">
zip
</span>

</a>
<a rel="nofollow" download="" class="gl-button btn btn-sm btn-default " href="/the-foundation/the-foundation.gitlab.io-comments-vssue.js/-/archive/main/the-foundation.gitlab.io-comments-vssue.js-main.tar.gz"><span class="gl-button-text">
tar.gz
</span>

</a>
<a rel="nofollow" download="" class="gl-button btn btn-sm btn-default " href="/the-foundation/the-foundation.gitlab.io-comments-vssue.js/-/archive/main/the-foundation.gitlab.io-comments-vssue.js-main.tar.bz2"><span class="gl-button-text">
tar.bz2
</span>

</a>
<a rel="nofollow" download="" class="gl-button btn btn-sm btn-default " href="/the-foundation/the-foundation.gitlab.io-comments-vssue.js/-/archive/main/the-foundation.gitlab.io-comments-vssue.js-main.tar"><span class="gl-button-text">
tar
</span>

</a>
</div>

</div>
</section>
<div class="js-directory-downloads" data-links="[{&quot;text&quot;:&quot;zip&quot;,&quot;path&quot;:&quot;/the-foundation/the-foundation.gitlab.io-comments-vssue.js/-/archive/main/the-foundation.gitlab.io-comments-vssue.js-main.zip&quot;},{&quot;text&quot;:&quot;tar.gz&quot;,&quot;path&quot;:&quot;/the-foundation/the-foundation.gitlab.io-comments-vssue.js/-/archive/main/the-foundation.gitlab.io-comments-vssue.js-main.tar.gz&quot;},{&quot;text&quot;:&quot;tar.bz2&quot;,&quot;path&quot;:&quot;/the-foundation/the-foundation.gitlab.io-comments-vssue.js/-/archive/main/the-foundation.gitlab.io-comments-vssue.js-main.tar.bz2&quot;},{&quot;text&quot;:&quot;tar&quot;,&quot;path&quot;:&quot;/the-foundation/the-foundation.gitlab.io-comments-vssue.js/-/archive/main/the-foundation.gitlab.io-comments-vssue.js-main.tar&quot;}]"></div>
</div>
</div><div class="project-clone-holder d-none d-md-inline-block">
<div class="git-clone-holder js-git-clone-holder">
<button id="clone-dropdown" class="gl-button btn btn-md btn-confirm clone-dropdown-btn" data-toggle="dropdown" data-qa-selector="clone_dropdown" type="button"><span class="gl-button-text">
<span class="gl-mr-2 js-clone-dropdown-label">
Clone
</span>
<svg class="s16 icon" data-testid="chevron-down-icon"><use href="/assets/icons-33d285b77c0f9173f577e26a550fb6463b9913e368ebfcdbb54022aff27051db.svg#chevron-down"></use></svg>

</span>

</button><ul class="dropdown-menu dropdown-menu-large dropdown-menu-selectable clone-options-dropdown dropdown-menu-right" data-qa-selector="clone_dropdown_content">
<li class="gl-px-4!">
<label class="label-bold">
Clone with SSH
</label>
<div class="input-group btn-group">
<input type="text" name="ssh_project_clone" id="ssh_project_clone" value="git@gitlab.com:the-foundation/the-foundation.gitlab.io-comments-vssue.js.git" class="js-select-on-focus form-control" readonly="readonly" aria-label="Repository clone URL" data-qa-selector="ssh_clone_url_content" />
<div class="input-group-append">
<button class="gl-button btn btn-icon btn-md btn-default " title="Copy URL" aria-label="Copy URL" aria-live="polite" data-toggle="tooltip" data-placement="bottom" data-container="body" data-category="primary" data-size="medium" data-clipboard-target="#ssh_project_clone" type="button"><svg class="s16 gl-icon gl-button-icon " data-testid="copy-to-clipboard-icon"><use href="/assets/icons-33d285b77c0f9173f577e26a550fb6463b9913e368ebfcdbb54022aff27051db.svg#copy-to-clipboard"></use></svg>

</button>

</div>
</div>
</li>
<li class="pt-2 gl-px-4!">
<label class="label-bold">
Clone with HTTPS
</label>
<div class="input-group btn-group">
<input type="text" name="http_project_clone" id="http_project_clone" value="/assets/gitlab_com/the-foundation/the-foundation.gitlab.io-comments-vssue.js.git" class="js-select-on-focus form-control" readonly="readonly" aria-label="Repository clone URL" data-qa-selector="http_clone_url_content" />
<div class="input-group-append">
<button class="gl-button btn btn-icon btn-md btn-default " title="Copy URL" aria-label="Copy URL" aria-live="polite" data-toggle="tooltip" data-placement="bottom" data-container="body" data-category="primary" data-size="medium" data-clipboard-target="#http_project_clone" type="button"><svg class="s16 gl-icon gl-button-icon " data-testid="copy-to-clipboard-icon"><use href="/assets/icons-33d285b77c0f9173f577e26a550fb6463b9913e368ebfcdbb54022aff27051db.svg#copy-to-clipboard"></use></svg>

</button>

</div>
</div>
</li>

<li class="divider mt-2"></li>
<li class="pt-2 gl-dropdown-item">
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
</li>
</ul>
</div>

</div></div><div class="project-clone-holder d-block d-md-none mt-sm-2 mt-md-0 ml-md-2">
<div class="btn-group mobile-git-clone js-mobile-git-clone btn-block">
<button class="gl-button btn btn-md btn-confirm clone-dropdown-btn js-clone-dropdown-label" title="Copy" aria-label="Copy" aria-live="polite" data-toggle="tooltip" data-placement="bottom" data-container="body" data-button-text="Copy HTTPS clone URL" data-size="medium" data-category="primary" data-variant="confirm" data-hide-button-icon="true" data-clipboard-text="/assets/gitlab_com/the-foundation/the-foundation.gitlab.io-comments-vssue.js.git" type="button"><span class="gl-button-text">
Copy HTTPS clone URL
</span>

</button>
<button class="btn gl-button btn-confirm dropdown-toggle js-dropdown-toggle flex-grow-0 d-flex-center w-auto ml-0" data-toggle="dropdown" type="button">
<svg class="s16 dropdown-btn-icon icon" data-testid="chevron-down-icon"><use href="/assets/icons-33d285b77c0f9173f577e26a550fb6463b9913e368ebfcdbb54022aff27051db.svg#chevron-down"></use></svg>
</button>
<ul class="dropdown-menu dropdown-menu-selectable dropdown-menu-right clone-options-dropdown" data-dropdown>
<li>
<a class="copy ssh clone url-selector is-active" href="git@gitlab.com:the-foundation/the-foundation.gitlab.io-comments-vssue.js.git" data-clone-type="ssh"><strong class="dropdown-menu-inner-title">Copy SSH clone URL</strong><span class="dropdown-menu-inner-content">git@gitlab.com:the-foundation/the-foundation.gitlab.io-comments-vssue.js.git</span></a>
</li>
<li>
<a class="copy https clone url-selector " href="/assets/gitlab_com/the-foundation/the-foundation.gitlab.io-comments-vssue.js.git" data-clone-type="http"><strong class="dropdown-menu-inner-title">Copy HTTPS clone URL</strong><span class="dropdown-menu-inner-content">https://gitlab.com/the-foundation/the-foundation.gitlab.io-comments-vssue.js.git</span></a>
</li>

</ul>
</div>

</div></div>

</div>
<div class="project-buttons gl-mb-5 js-show-on-project-root" data-testid="project-buttons">
<ul class="nav gl-gap-3">
<li class="nav-item">
<a class="nav-link gl-display-flex gl-align-items-center gl-button btn btn-default" href="/the-foundation/the-foundation.gitlab.io-comments-vssue.js/-/blob/main/README.md"><svg class="s16 icon gl-mr-2 gl-text-gray-500" data-testid="doc-text-icon"><use href="/assets/icons-33d285b77c0f9173f577e26a550fb6463b9913e368ebfcdbb54022aff27051db.svg#doc-text"></use></svg>README</a></li>
</ul>

</div>
<div data-escaped-ref="main" data-explain-code-available="false" data-full-name="The Foundation / The Foundation.Gitlab.Io Comments Vssue.Js" data-path-locks-available="false" data-path-locks-toggle="/the-foundation/the-foundation.gitlab.io-comments-vssue.js/path_locks/toggle" data-project-path="the-foundation/the-foundation.gitlab.io-comments-vssue.js" data-project-short-path="the-foundation.gitlab.io-comments-vssue.js" data-ref="main" data-resource-id="gid://gitlab/Project/32909927" data-user-id="" id="js-tree-list"></div>
</div>

</div>

</main>
</div>


</div>
</div>
<div class="top-nav-responsive layout-page">
<div class="cloak-startup">
<div data-view-model="{&quot;primary&quot;:[{&quot;type&quot;:&quot;header&quot;,&quot;title&quot;:&quot;Explore&quot;},{&quot;id&quot;:&quot;project&quot;,&quot;type&quot;:&quot;item&quot;,&quot;title&quot;:&quot;Projects&quot;,&quot;active&quot;:true,&quot;icon&quot;:&quot;project&quot;,&quot;href&quot;:&quot;/explore&quot;,&quot;view&quot;:&quot;&quot;,&quot;css_class&quot;:null,&quot;data&quot;:{&quot;testid&quot;:&quot;menu_item_link&quot;,&quot;qa_title&quot;:&quot;Projects&quot;},&quot;partial&quot;:null,&quot;component&quot;:null},{&quot;id&quot;:&quot;groups&quot;,&quot;type&quot;:&quot;item&quot;,&quot;title&quot;:&quot;Groups&quot;,&quot;active&quot;:false,&quot;icon&quot;:&quot;group&quot;,&quot;href&quot;:&quot;/explore/groups&quot;,&quot;view&quot;:&quot;&quot;,&quot;css_class&quot;:null,&quot;data&quot;:{&quot;testid&quot;:&quot;menu_item_link&quot;,&quot;qa_title&quot;:&quot;Groups&quot;},&quot;partial&quot;:null,&quot;component&quot;:null},{&quot;id&quot;:&quot;topics&quot;,&quot;type&quot;:&quot;item&quot;,&quot;title&quot;:&quot;Topics&quot;,&quot;active&quot;:false,&quot;icon&quot;:&quot;labels&quot;,&quot;href&quot;:&quot;/explore/projects/topics&quot;,&quot;view&quot;:&quot;&quot;,&quot;css_class&quot;:null,&quot;data&quot;:{&quot;testid&quot;:&quot;menu_item_link&quot;,&quot;qa_title&quot;:&quot;Topics&quot;},&quot;partial&quot;:null,&quot;component&quot;:null},{&quot;id&quot;:&quot;snippets&quot;,&quot;type&quot;:&quot;item&quot;,&quot;title&quot;:&quot;Snippets&quot;,&quot;active&quot;:false,&quot;icon&quot;:&quot;snippet&quot;,&quot;href&quot;:&quot;/explore/snippets&quot;,&quot;view&quot;:&quot;&quot;,&quot;css_class&quot;:null,&quot;data&quot;:{&quot;testid&quot;:&quot;menu_item_link&quot;,&quot;qa_title&quot;:&quot;Snippets&quot;},&quot;partial&quot;:null,&quot;component&quot;:null}],&quot;secondary&quot;:[],&quot;views&quot;:{&quot;search&quot;:{&quot;id&quot;:&quot;search&quot;,&quot;type&quot;:&quot;item&quot;,&quot;title&quot;:&quot;Search&quot;,&quot;active&quot;:false,&quot;icon&quot;:&quot;search&quot;,&quot;href&quot;:&quot;/search?project_id=32909927&quot;,&quot;view&quot;:&quot;&quot;,&quot;css_class&quot;:null,&quot;data&quot;:{&quot;testid&quot;:&quot;menu_item_link&quot;,&quot;qa_title&quot;:&quot;Search&quot;},&quot;partial&quot;:null,&quot;component&quot;:null}},&quot;shortcuts&quot;:[{&quot;id&quot;:&quot;project-shortcut&quot;,&quot;type&quot;:&quot;item&quot;,&quot;title&quot;:&quot;Projects&quot;,&quot;active&quot;:false,&quot;icon&quot;:&quot;&quot;,&quot;href&quot;:&quot;/explore&quot;,&quot;view&quot;:&quot;&quot;,&quot;css_class&quot;:&quot;dashboard-shortcuts-projects&quot;,&quot;data&quot;:{&quot;testid&quot;:&quot;menu_item_link&quot;,&quot;qa_title&quot;:&quot;Projects&quot;},&quot;partial&quot;:null,&quot;component&quot;:null},{&quot;id&quot;:&quot;groups-shortcut&quot;,&quot;type&quot;:&quot;item&quot;,&quot;title&quot;:&quot;Groups&quot;,&quot;active&quot;:false,&quot;icon&quot;:&quot;&quot;,&quot;href&quot;:&quot;/explore/groups&quot;,&quot;view&quot;:&quot;&quot;,&quot;css_class&quot;:&quot;dashboard-shortcuts-groups&quot;,&quot;data&quot;:{&quot;testid&quot;:&quot;menu_item_link&quot;,&quot;qa_title&quot;:&quot;Groups&quot;},&quot;partial&quot;:null,&quot;component&quot;:null},{&quot;id&quot;:&quot;topics-shortcut&quot;,&quot;type&quot;:&quot;item&quot;,&quot;title&quot;:&quot;Topics&quot;,&quot;active&quot;:false,&quot;icon&quot;:&quot;&quot;,&quot;href&quot;:&quot;/explore/projects/topics&quot;,&quot;view&quot;:&quot;&quot;,&quot;css_class&quot;:&quot;dashboard-shortcuts-topics&quot;,&quot;data&quot;:{&quot;testid&quot;:&quot;menu_item_link&quot;,&quot;qa_title&quot;:&quot;Topics&quot;},&quot;partial&quot;:null,&quot;component&quot;:null},{&quot;id&quot;:&quot;snippets-shortcut&quot;,&quot;type&quot;:&quot;item&quot;,&quot;title&quot;:&quot;Snippets&quot;,&quot;active&quot;:false,&quot;icon&quot;:&quot;&quot;,&quot;href&quot;:&quot;/explore/snippets&quot;,&quot;view&quot;:&quot;&quot;,&quot;css_class&quot;:&quot;dashboard-shortcuts-snippets&quot;,&quot;data&quot;:{&quot;testid&quot;:&quot;menu_item_link&quot;,&quot;qa_title&quot;:&quot;Snippets&quot;},&quot;partial&quot;:null,&quot;component&quot;:null}],&quot;menuTooltip&quot;:&quot;Main menu&quot;}" id="js-top-nav-responsive"></div>
</div>
</div>



<script nonce="/Z+ET7pHKoqfQmT2JiAEJQ==">
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
<script nonce="/Z+ET7pHKoqfQmT2JiAEJQ==">
//<![CDATA[
gl = window.gl || {};
gl.experiments = {};


//]]>
</script>

</body>
</html>

