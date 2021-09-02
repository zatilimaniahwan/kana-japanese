<template>
  <section class="section breadcrumb-area bg-overlay d-flex align-items-center">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <!-- Breamcrumb Content -->
          <div class="breadcrumb-content d-flex flex-column align-items-center text-center">
            <h3 class="text-white">
              Daku-On
            </h3>
            <ol class="breadcrumb">
              <li class="breadcrumb-item">
                <a href="/">{{ $root.appName }}</a>
              </li>
              <li class="breadcrumb-item">
                <a href="#">Hiragana</a>
              </li>
              <li class="breadcrumb-item active">
                Handaku-On
              </li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: 'Title'
}
</script>
