<!-- Use footer one for verified -->
<template>
  <div>
    <div class="height-emulator d-none d-lg-block" />
    <footer class="footer-area footer-fixed">
      <!-- Footer Top -->
      <div class="footer-top ptb_100">
        <div class="container">
          <div class="row">
            <div class="col-12 col-sm-7 col-lg-3">
              <!-- Footer Items -->
              <div class="footer-items">
                <!-- Logo -->
                <a
                  class="navbar-brand"
                  href="#"
                >
                  <img
                    class="logo"
                    src="assets/img/logo-kana.png"
                    alt=""
                  >
                </a>
                <p class="mt-2 mb-3">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis non, fugit totam vel laboriosam vitae.
                </p>
              </div>
            </div>
            <div class="col-12 col-sm-7 col-lg-3">
              <!-- Footer Items -->
              <div class="footer-items">
                <!-- Footer Title -->
                <h3 class="footer-title mb-2">
                  Site Links
                </h3>
                <ul>
                  <li class="py-2">
                    <a href="#">Home</a>
                  </li>
                  <li class="py-2">
                    <a href="#">Change Language</a>
                  </li>
                  <li class="py-2">
                    <a href="#">Contact Us</a>
                  </li>
                </ul>
              </div>
              <div class="footer-items">
                <!-- Footer Title -->
                <h3 class="footer-title mt-2">
                  Admin Links
                </h3>
                <ul>
                  <li class="py-2">
                    <a href="#">List of Students</a>
                  </li>
                  <li class="py-2">
                    <a href="#">Verify Students</a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="col-12 col-sm-7 col-lg-3">
              <!-- Footer Items -->
              <div class="footer-items">
                <!-- Footer Title -->
                <h3 class="footer-title mb-2">
                  Hiragana Resources
                </h3>
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
                  <li class="py-2">
                    <a href="#">Soku-On</a>
                  </li>
                </ul>
              </div>
              <div class="footer-items">
                <!-- Footer Title -->
                <h3 class="footer-title mt-2">
                  Katakana Resources
                </h3>
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
                  <li class="py-2">
                    <a href="#">Soku-On</a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="col-12 col-sm-7 col-lg-3">
              <!-- Footer Items -->
              <div class="footer-items">
                <!-- Footer Title -->
                <h3 class="footer-title mb-2">
                  Other Resources
                </h3>
                <ul>
                  <li class="py-2">
                    <a href="#">Numbers</a>
                  </li>
                  <li class="py-2">
                    <a href="#">Greetings</a>
                  </li>
                  <li class="py-2">
                    <a href="#">Katakana (Malaysia)</a>
                  </li>
                  <li class="py-2">
                    <a href="#">Tips</a>
                  </li>
                  <li class="py-2">
                    <a href="#">Exercise</a>
                  </li>
                </ul>
              </div>
              <div class="footer-items mt-2">
                <!-- Footer Title -->
                <h3 class="footer-title mb-2">
                  Extra Practices Resources
                </h3>
                <ul>
                  <li class="py-2">
                    <a href="#">Listening</a>
                  </li>
                  <li class="py-2">
                    <a href="#">Practice Unit 1</a>
                  </li>
                  <li class="py-2">
                    <a href="#">Practice Unit 2</a>
                  </li>
                  <li class="py-2">
                    <a href="#">Writing/Pronounciation</a>
                  </li>
                  <li class="py-2">
                    <a href="#">Extra Vocabulary</a>
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
              <div class="copyright-area d-flex flex-wrap justify-content-center justify-content-sm-between text-center py-4">
                <!-- Copyright Left -->
                <div class="copyright-left">
                  &copy; {{ year }} KANA - Learn Japanese Orthography
                </div>
                <!-- Copyright Right -->
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
import dayjs from 'dayjs'

export default {
  name: 'FooterOne',
  computed: {
    year () {
      return dayjs().year()
    }
  }
}
</script>

<style>

</style>
