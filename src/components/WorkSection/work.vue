<template>
  <section class="section work-area bg-overlay overflow-hidden ptb_100">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-12 col-lg-6">
          <!-- Work Content -->
          <div class="work-content text-center">
            <h2 class="text-white">
              {{ $t('work.title') }}
            </h2>
          </div>
        </div>
      </div>
      <div class="row mt-2">
        <div class="col-12 col-md-4">
          <!-- Single Work -->
          <div class="single-work text-center p-3">
            <!-- Work Icon -->
            <div class="work-icon">
              <img
                class="avatar-md"
                src="assets/img/process/contract.png"
                alt=""
              >
            </div>
            <h3 class="text-white py-3">
              {{ $t('work.steps.firstStep')}}
            </h3>
          </div>
        </div>
        <div class="col-12 col-md-4">
          <!-- Single Work -->
          <div class="single-work text-center p-3">
            <!-- Work Icon -->
            <div class="work-icon">
              <img
                class="avatar-md"
                src="assets/img/process/credit-card.png"
                alt=""
              >
            </div>
            <h3 class="text-white py-3">
              {{ $t('work.steps.secondStep') }}
            </h3>
          </div>
        </div>
        <div class="col-12 col-md-4">
          <!-- Single Work -->
          <div class="single-work text-center p-3">
            <!-- Work Icon -->
            <div class="work-icon">
              <img
                class="avatar-md"
                src="assets/img/process/sign-in.png"
                alt=""
              >
            </div>
            <h3 class="text-white py-3">
              {{ $t('work.steps.lastStep') }}
            </h3>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
