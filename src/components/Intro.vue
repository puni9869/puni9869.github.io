<script setup>
import profile from "../assets/profile.jpeg";
</script>

<template>
  <div class="box">
    <img :src="profile" alt="Punit Inani" class="box-img" />
    <h1>Punit Inani</h1>
    <h5>Fullstack Developer</h5>
    <p>
      A web developer with specializes in Golang, Python and Javascript. I work
      on awesome tools like Terraform and Docker. Currently I am working at
      Rackspace Technology.
    </p>
    <ul>
      <li>
        <a href="https://www.linkedin.com/in/punitinani1"
          ><i class="fa fa-linkedin-square" aria-hidden="true"></i
        ></a>
      </li>
      <li>
        <a href="https://github.com/puni9869"
          ><i class="fa fa-github-square" aria-hidden="true"></i
        ></a>
      </li>
      <li>
        <a href="mailto:punitinani1@gmail.com">
          <i class="fa fa-envelope-square" aria-hidden="true"></i>
        </a>
      </li>
    </ul>
  </div>
</template>
<style scoped>
.box h5 {
  font-size: 25px;
  letter-spacing: 2px;
  font-weight: bold;
}
</style>
