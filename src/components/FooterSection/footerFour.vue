<template>
  <footer class="section inner-footer bg-gray ptb_100">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-12 col-md-10 col-lg-6">
          <!-- Footer Items -->
          <div class="footer-items text-center">
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
              A platform to learn Japanese Orthography
            </p>
            <ul class="d-flex flex-column flex-sm-row justify-content-between">
              <li class="py-2">
                <a href="#">Home</a>
              </li>
              <li class="py-2">
                <a href="#">Sign Up</a>
              </li>
              <li class="py-2">
                <a href="#">Sign In</a>
              </li>
              <li class="py-2">
                <a href="#">Change Language</a>
              </li>
            </ul>
            <!-- Copyright Area -->
            <div class="copyright-area border-0 pt-3">
              <p>&copy; {{ year }} KANA - Learn Japanese Orthography</p>
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
  name: 'FooterFour',
  computed: {
    year () {
      return dayjs().year()
    }
  }
}
</script>

<style>

</style>
