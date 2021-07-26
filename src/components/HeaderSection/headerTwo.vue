<template>
  <header class="navbar navbar-sticky navbar-expand-lg navbar-dark">
    <div class="container position-relative">
      <a class="navbar-brand" href="/">
        <img
          class="navbar-brand-regular"
          src="assets/img/logo-kana.png"
          alt="brand-logo"
        />
        <img
          class="navbar-brand-sticky"
          src="assets/img/logo-kana.png"
          alt="sticky brand-logo"
        />
      </a>
      <button
        class="navbar-toggler d-lg-none"
        type="button"
        data-toggle="navbarToggler"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon" />
      </button>

      <div class="navbar-inner">
        <!--  Mobile Menu Toggler -->
        <button
          class="navbar-toggler d-lg-none"
          type="button"
          data-toggle="navbarToggler"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon" />
        </button>
        <nav>
          <ul id="navbar-nav" class="navbar-nav">
            <li class="nav-item dropdown">
              <a
                id="navbarDropdownMenuLink"
                class="nav-link dropdown-toggle"
                href="javascript:;"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                {{ this.$t("appMenu.kana.main") }}
              </a>
              <ul
                class="dropdown-menu"
                aria-labelledby="navbarDropdownMenuLink"
              >
                <li class="dropdown-submenu">
                  <a class="dropdown-item dropdown-toggle" href="javascript:;"
                    >Hiragana</a
                  >
                  <ul class="dropdown-menu">
                    <li>
                      <a class="dropdown-item" href="/hiragana-sei-on"
                        >Sei-On</a
                      >
                    </li>
                    <li>
                      <a class="dropdown-item" href="/blog-three-column"
                        >Daku-On</a
                      >
                    </li>
                    <li>
                      <a class="dropdown-item" href="/blog-left-sidebar"
                        >Handaku-On</a
                      >
                    </li>
                    <li>
                      <a class="dropdown-item" href="/blog-right-sidebar"
                        >You-On</a
                      >
                    </li>
                    <li>
                      <a class="dropdown-item" href="/blog-right-sidebar"
                        >Soku-On</a
                      >
                    </li>
                  </ul>
                </li>
                <li class="dropdown-submenu">
                  <a class="dropdown-item dropdown-toggle" href="javascript:;"
                    >Katakana</a
                  >
                  <ul class="dropdown-menu">
                    <li>
                      <a class="dropdown-item" href="/katakana-sei-on"
                        >Sei-On</a
                      >
                    </li>
                    <li>
                      <a class="dropdown-item" href="/blog-three-column"
                        >Daku-On</a
                      >
                    </li>
                    <li>
                      <a class="dropdown-item" href="/blog-left-sidebar"
                        >Handaku-On</a
                      >
                    </li>
                    <li>
                      <a class="dropdown-item" href="/blog-right-sidebar"
                        >You-On</a
                      >
                    </li>
                    <li>
                      <a class="dropdown-item" href="/blog-right-sidebar"
                        >Soku-On</a
                      >
                    </li>
                  </ul>
                </li>
                <li>
                  <a class="dropdown-item" href="/number">{{
                    this.$t("appMenu.kana.number")
                  }}</a>
                </li>
                <li>
                  <a class="dropdown-item" href="/greetings">{{
                    this.$t("appMenu.kana.greeting")
                  }}</a>
                </li>
                <li>
                  <a class="dropdown-item" href="/katakana-malaysia"
                    >Katakana (Malaysia)</a
                  >
                </li>
                <li>
                  <a class="dropdown-item" href="/extravocab">{{
                    this.$t("appMenu.kana.extra.submenu3")
                  }}</a>
                </li>
                <li>
                  <a class="dropdown-item" href="/tips">Tips</a>
                </li>
              </ul>
            </li>
            <li class="nav-item dropdown">
              <a
                id="navbarDropdownMenuLink"
                class="nav-link dropdown-toggle"
                href="javascript:;"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                {{ this.$t("appMenu.kana.extra.main") }} ({{
                  this.$t("appMenu.kana.extra.submenu1.main")
                }})
              </a>
              <ul
                class="dropdown-menu"
                aria-labelledby="navbarDropdownMenuLink"
              >
                <li>
                  <a class="dropdown-item" href="/unit-one">
                    {{ this.$t("appMenu.kana.extra.submenu1.title") }} Unit 1</a
                  >
                </li>
                <li>
                  <a class="dropdown-item" href="/unit-two"
                    >{{ this.$t("appMenu.kana.extra.submenu1.title") }} Unit
                    2</a
                  >
                </li>
                <li>
                  <a class="dropdown-item" href="/unit-two">{{
                    this.$t("appMenu.kana.extra.submenu1.sub")
                  }}</a>
                </li>
              </ul>
            </li>
            <li class="nav-item dropdown">
              <a
                id="navbarDropdownMenuLink"
                class="nav-link dropdown-toggle"
                href="javascript:;"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                {{ this.$t("appMenu.kana.extra.main") }} ({{
                  this.$t("appMenu.kana.extra.submenu2")
                }})
              </a>
              <ul
                class="dropdown-menu"
                aria-labelledby="navbarDropdownMenuLink"
              >
                <li>
                  <a class="dropdown-item" href="/nouns">{{
                    this.$t("appMenu.kana.extra.nouns")
                  }}</a>
                </li>
                <li>
                  <a class="dropdown-item" href="/adjectives">{{
                    this.$t("appMenu.kana.extra.adjectives")
                  }}</a>
                </li>
                <li>
                  <a class="dropdown-item" href="/verbs">{{
                    this.$t("appMenu.kana.extra.verbs")
                  }}</a>
                </li>
              </ul>
            </li>
            <li class="nav-item dropdown">
              <a
                id="navbarDropdownMenuLink"
                class="nav-link dropdown-toggle"
                href="javascript:;"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                {{ this.$t("appMenu.language.main") }}
              </a>
              <ul
                class="dropdown-menu"
                aria-labelledby="navbarDropdownMenuLink"
              >
                <li>
                  <a class="dropdown-item" href="/hiragana/sei-on">{{
                    this.$t("appMenu.language.english")
                  }}</a>
                </li>
                <li>
                  <a class="dropdown-item" href="/hiragana/sei-on">{{
                    this.$t("appMenu.language.malay")
                  }}</a>
                </li>
              </ul>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </header>
</template>

<script>
export default {}
</script>

<style>
</style>
