<template>
  <div  class="section breadcrumb-area bg-overlay   d-flex align-items-center overflow-hidden">
        <div class="col-sm-12 col-md-12 col-lg-12">
          <!-- Breamcrumb Content -->
          <div class="breadcrumb-content d-flex flex-column align-items-center text-center">
            <h2 class="text-white text-capitalize">
              {{ title }}
            </h2>
            <ol class="breadcrumb">
              <li class="breadcrumb-item">
                <a
                  class="text-uppercase text-white"
                  href="/"
                >{{ $root.appName }}</a>
              </li>
              <li class="breadcrumb-item text-white" v-if="moduleName">
               {{moduleName}}
              </li>
              <li class="breadcrumb-item text-white" v-if="moduleName2">
               {{moduleName2}}
              </li>
              <li class="breadcrumb-item text-white active" v-if="subTitle">
                {{ subTitle }}
              </li>
            </ol>
          </div>
        </div>
  </div>
</template>

<script>
export default {
  name: 'BreadcrumbThree',
  props: ['title', 'subTitle', 'moduleName', 'moduleName2']
}
</script>

<style>

</style>
