<template>
  <div class="inner">
    <div class="main">
      <HeaderSection />
      <section class="section welcome-area bg-overlay subscribe-area h-100vh ptb_100">
        <div class="container h-100">
          <div class="row align-items-center justify-content-center h-100">
            <div class="col-12 col-md-10 col-lg-8">
              <div class="subscribe-content text-center">
                <h1 class="text-white">
                  Forgot your password?
                </h1>
                <p class="text-white my-4">
                  Don't worry. Enter your email. We'll send you a password reset link to reset your password tempore repudiandae saepe aspernatur unde voluptate sapiente quia ex.
                </p>
                <!-- Subscribe Form -->
                <form class="subscribe-form">
                  <div class="form-group">
                    <input
                      id="exampleInputEmail1"
                      type="email"
                      class="form-control"
                      aria-describedby="emailHelp"
                      placeholder="Enter your email"
                    >
                  </div>
                  <button
                    type="submit"
                    class="btn btn-lg btn-block"
                  >
                    Reset Password
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import HeaderSection from '../../HeaderSection/headerOne'

export default {
  name: 'Forgot',
  components: {
    HeaderSection
  }
}
</script>

<style>

</style>
