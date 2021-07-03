<template>
  <div>
       <div class="col-12 col-md-8 col-lg-5">
              <!-- Contact Box -->
              <div class="contact-box bg-white text-center rounded p-4 p-sm-5 mt-5 mt-lg-0 shadow-lg">
                <!-- Contact Form -->
                <form id="contact-form">
                  <div class="contact-top">
                    <h3 class="contact-title">
                      Sign In
                    </h3>
                    <h5 class="text-secondary fw-3 py-3">
                      Fill all fields so we can get some info about you. We'll never send you spam
                    </h5>
                  </div>
                  <div class="row">
                    <div class="col-12">
                      <div class="form-group">
                        <div class="input-group">
                          <div class="input-group-prepend">
                            <span class="input-group-text"><i class="fas fa-envelope-open" /></span>
                          </div>
                          <input
                            type="email"
                            class="form-control"
                            name="email"
                            placeholder="Email"
                            required="required"
                          >
                        </div>
                      </div>
                      <div class="form-group">
                        <div class="input-group">
                          <div class="input-group-prepend">
                            <span class="input-group-text"><i class="fas fa-unlock-alt" /></span>
                          </div>
                          <input
                            type="password"
                            class="form-control"
                            name="password"
                            placeholder="Password"
                            required="required"
                          >
                        </div>
                      </div>
                    </div>
                    <div class="col-12">
                      <button
                        class="btn btn-bordered w-100 mt-3 mt-sm-4"
                        type="submit"
                      >
                        Sign In
                      </button>
                      <div class="contact-bottom">
                        <span class="d-inline-block mt-3">By signing up, you accept our <a href="#">Terms</a> &amp; <a href="#">Privacy Policy</a></span>
                      </div>
                    </div>
                    <div class="col-12">
                      <span class="d-block pt-2 mt-4 border-top">Don't have an account? <a href="#">Sign Up</a></span>
                    </div>
                  </div>
                </form>
                <p class="form-message" />
              </div>
            </div>
  </div>
</template>

<script>

export default {
  name: 'Login'
}
</script>

<style>

</style>
