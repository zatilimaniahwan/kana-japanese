<template>
  <footer class="footer-area bg-gray">
    <!-- Footer Top -->
    <div class="footer-top ptb_100">
      <div class="container">
        <div class="row">
          <div class="col-12 col-sm-6 col-lg-3">
            <!-- Footer Items -->
            <div class="footer-items">
              <!-- Logo -->
              <a class="navbar-brand" href="#">
                <img class="logo" src="assets/img/logo-kana.png" alt="" />
              </a>
              <p class="mt-2 mb-3">{{ $t("footer.description") }}</p>
            </div>
          </div>
          <div class="col-12 col-sm-6 col-lg-3">
            <!-- Footer Items -->
            <div class="footer-items">
              <!-- Footer Title -->
              <h3 class="footer-title mb-2">Hiragana</h3>
              <ul>
                <li class="py-2">
                  <a href="/hiragana-sei-on">Sei-On</a>
                </li>
                <li class="py-2">
                  <a href="#">Daku-On</a>
                </li>
                <li class="py-2">
                  <a href="#">Handaku-On</a>
                </li>
                <li class="py-2">
                  <a href="#">You-On</a>
                </li>
              </ul>
            </div>
            <div class="footer-items">
              <!-- Footer Title -->
              <h3 class="footer-title mt-3 mb-2">Katakana</h3>
              <ul>
                <li class="py-2">
                  <a href="/katakana-sei-on">Sei-On</a>
                </li>
                <li class="py-2">
                  <a href="#">Daku-On</a>
                </li>
                <li class="py-2">
                  <a href="#">Handaku-On</a>
                </li>
                <li class="py-2">
                  <a href="#">You-On</a>
                </li>
              </ul>
            </div>
            <div class="footer-items mt-3">
              <ul>
                <li class="py-2">
                  <a href="/number">{{ $t("appMenu.kana.number") }}</a>
                </li>
                <li class="py-2">
                  <a href="/greetings">{{ $t("appMenu.kana.greeting") }}</a>
                </li>
                <li class="py-2">
                  <a href="/katakana-malaysia">Katakana (Malaysia)</a>
                </li>
                <li class="py-2">
                  <a href="/extravocab">{{ $t("appMenu.kana.extra.submenu3" )}}</a>
                </li>
                <li class="py-2">
                  <a href="/tips">Tips</a>
                </li>
              </ul>
            </div>
          </div>
          <div class="col-12 col-sm-6 col-lg-3">
            <!-- Footer Items -->
            <div class="footer-items">
              <!-- Footer Title -->
              <h3 class="footer-title mb-2">
                {{ $t("appMenu.kana.extra.main") }} ({{
                  $t("appMenu.kana.extra.submenu1.main")
                }})
              </h3>
              <ul>
                <li class="py-2">
                  <a href="/unit-one"
                    >{{ $t("appMenu.kana.extra.submenu1.title") }} Unit
                    1</a
                  >
                </li>
                <li class="py-2">
                  <a href="/unit-two"
                    >{{ $t("appMenu.kana.extra.submenu1.title") }} Unit
                    2</a
                  >
                </li>
                <li class="py-2">
                  <a href="#">{{
                    $t("appMenu.kana.extra.submenu1.sub")
                  }}</a>
                </li>
              </ul>
            </div>
            <div class="footer-items">
              <!-- Footer Title -->
              <h3 class="footer-title mt-3 mb-2">
                {{ $t("appMenu.kana.extra.main") }} ({{
                  $t("appMenu.kana.extra.submenu2")
                }})
              </h3>
              <ul>
                <li class="py-2">
                  <a href="/nouns">{{ $t("appMenu.kana.extra.nouns") }}</a>
                </li>
                <li class="py-2">
                  <a href="/adjectives">{{ $t("appMenu.kana.extra.adjectives") }}</a>
                </li>
                <li class="py-2">
                  <a href="/verbs">{{ $t("appMenu.kana.extra.verbs") }}</a>
                </li>
              </ul>
            </div>
          </div>
          <div class="col-12 col-sm-6 col-lg-3">
            <!-- Footer Items -->
            <div class="footer-items">
              <!-- Footer Title -->
              <h3 class="footer-title mb-2">
                {{ $t("appMenu.language.main") }}
              </h3>
              <ul>
                <li class="py-2">
                  <a href="#">{{ $t("appMenu.language.english") }}</a>
                </li>
                <li class="py-2">
                  <a href="#">{{ $t("appMenu.language.malay") }}</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Footer Bottom -->
    <div class="footer-bottom">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <!-- Copyright Area -->
            <div
              class="
                copyright-area
                d-flex
                flex-wrap
                justify-content-center justify-content-sm-between
                text-center
                py-4
              "
            >
              <!-- Copyright Left -->
              <div class="copyright-left">
                &copy; {{ year }} KANA - {{ $t("footer.disclaimer") }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
import dayjs from 'dayjs'
export default {
  computed: {
    year () {
      return dayjs().year()
    }
  }
}
</script>
