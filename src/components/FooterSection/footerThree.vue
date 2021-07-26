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
              <p class="mt-2 mb-3">A platform to learn Japanese Orthography</p>
            </div>
          </div>
          <div class="col-12 col-sm-6 col-lg-3">
            <!-- Footer Items -->
            <div class="footer-items">
              <!-- Footer Title -->
              <h3 class="footer-title mb-2">Hiragana</h3>
              <ul>
                <li class="py-2">
                  <a href="#">Sei-On</a>
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
                  <a href="#">Sei-On</a>
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
                  <a href="#">{{ this.$t("appMenu.kana.number") }}</a>
                </li>
                <li class="py-2">
                  <a href="#">{{ this.$t("appMenu.kana.greeting") }}</a>
                </li>
                <li class="py-2">
                  <a href="#">Katakana (Malaysia)</a>
                </li>
                <li class="py-2">
                  <a href="#">Tips</a>
                </li>
              </ul>
            </div>
          </div>
          <div class="col-12 col-sm-6 col-lg-3">
            <!-- Footer Items -->
            <div class="footer-items">
              <!-- Footer Title -->
              <h3 class="footer-title mb-2">
                {{ this.$t("appMenu.kana.extra.main") }} ({{
                  this.$t("appMenu.kana.extra.submenu1.main")
                }})
              </h3>
              <ul>
                <li class="py-2">
                  <a href="#"
                    >{{ this.$t("appMenu.kana.extra.submenu1.title") }} Unit
                    1</a
                  >
                </li>
                <li class="py-2">
                  <a href="#"
                    >{{ this.$t("appMenu.kana.extra.submenu1.title") }} Unit
                    2</a
                  >
                </li>
                <li class="py-2">
                  <a href="#">{{
                    this.$t("appMenu.kana.extra.submenu1.sub")
                  }}</a>
                </li>
              </ul>
            </div>
            <div class="footer-items">
              <!-- Footer Title -->
              <h3 class="footer-title mt-3 mb-2">
                {{ this.$t("appMenu.kana.extra.main") }} ({{
                  this.$t("appMenu.kana.extra.submenu2")
                }})
              </h3>
              <ul>
                <li class="py-2">
                  <a href="#">FAQ</a>
                </li>
                <li class="py-2">
                  <a href="#">Privacy Policy</a>
                </li>
                <li class="py-2">
                  <a href="#">Support</a>
                </li>
                <li class="py-2">
                  <a href="#">Terms &amp; Conditions</a>
                </li>
                <li class="py-2">
                  <a href="#">Contact</a>
                </li>
              </ul>
            </div>
          </div>
          <div class="col-12 col-sm-6 col-lg-3">
            <!-- Footer Items -->
            <div class="footer-items">
              <!-- Footer Title -->
              <h3 class="footer-title mb-2">
                {{ this.$t("appMenu.language.main") }}
              </h3>
              <ul>
                <li class="py-2">
                  <a href="#">{{ this.$t("appMenu.language.english") }}</a>
                </li>
                <li class="py-2">
                  <a href="#">{{ this.$t("appMenu.language.malay") }}</a>
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
                &copy; {{ year }} KANA - Learn Japanese Orthography
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
