<template>
  <section
    id="contact"
    class="contact-area bg-gray ptb_100"
  >
    <div class="container">
      <div class="row">
        <div class="col-12 col-md-10 col-lg-8">
          <!-- Section Heading -->
          <div class="section-heading">
            <span class="d-inline-block rounded-pill shadow-sm fw-5 px-4 py-2 mb-3">
              <i class="far fa-lightbulb text-primary mr-1" />
              <span class="text-primary">Stay</span>
              Tuned
            </span>
            <h2>Don't hesitate to contact us</h2>
            <p class="d-none d-sm-block mt-4">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum obcaecati dignissimos quae quo ad iste ipsum officiis deleniti asperiores sit.
            </p>
            <p class="d-block d-sm-none mt-4">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum obcaecati.
            </p>
          </div>
        </div>
      </div>
      <div class="row justify-content-between">
        <div class="col-12 col-md-5">
          <!-- Contact Us -->
          <div class="contact-us">
            <p class="mb-3">
              Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.
            </p>
            <ul>
              <li class="py-2">
                <a
                  class="media"
                  href="#"
                >
                  <div class="social-icon mr-3">
                    <i class="fas fa-home" />
                  </div>
                  <span class="media-body align-self-center">Vestibulum nulla libero, convallis, tincidunt suscipit diam, DC 2002</span>
                </a>
              </li>
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
