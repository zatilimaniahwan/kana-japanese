<template>
  <section
    id="contact"
    class="contact-area bg-gray ptb_100"
  >
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-12 col-md-10 col-lg-6">
          <!-- Section Heading -->
          <div class="section-heading text-center">
            <h2 class="text-capitalize">
              Stay Tuned
            </h2>
            <p class="d-none d-sm-block mt-4">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum obcaecati dignissimos quae quo ad iste ipsum officiis deleniti asperiores sit.
            </p>
          </div>
        </div>
      </div>
      <div class="row justify-content-between">
        <div class="col-12 col-md-5">
          <!-- Contact Us -->
          <div class="contact-us">
            <ul>
              <li class="py-2">
                <a
                  class="media"
                  href="#"
                >
                  <div class="social-icon mr-3">
                    <i class="fas fa-phone-alt" />
                  </div>
                  <span class="media-body align-self-center">+1 230 456 789-012 345 6789</span>
                </a>
              </li>
              <li class="py-2">
                <a
                  class="media"
                  href="#"
                >
                  <div class="social-icon mr-3">
                    <i class="fas fa-envelope" />
                  </div>
                  <span class="media-body align-self-center">exampledomain@domain.com</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div class="col-12 col-md-6 pt-4 pt-md-0">
          <!-- Contact Box -->
          <div class="contact-box text-center">
            <!-- Contact Form -->
            <form
              id="contact-form"
              method="POST"
              action="assets/php/mail.php"
            >
              <div class="row">
                <div class="col-12">
                  <div class="form-group">
                    <input
                      type="text"
                      class="form-control"
                      name="name"
                      placeholder="Name"
                      required="required"
                    >
                  </div>
                  <div class="form-group">
                    <input
                      type="email"
                      class="form-control"
                      name="email"
                      placeholder="Email"
                      required="required"
                    >
                  </div>
                  <div class="form-group">
                    <input
                      type="text"
                      class="form-control"
                      name="subject"
                      placeholder="Subject"
                      required="required"
                    >
                  </div>
                </div>
                <div class="col-12">
                  <div class="form-group">
                    <textarea
                      class="form-control"
                      name="message"
                      placeholder="Message"
                      required="required"
                    />
                  </div>
                </div>
                <div class="col-12">
                  <button
                    type="submit"
                    class="btn btn-lg btn-block mt-3"
                  >
                    <span class="text-white pr-3"><i class="fas fa-paper-plane" /></span>Send Message
                  </button>
                </div>
              </div>
            </form>
            <p class="form-message" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {

}
</script>

<style>

</style>
