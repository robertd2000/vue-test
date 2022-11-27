<script setup>
import { defineProps } from "vue";
import fullS from "../../assets/svg/full screen.svg";
import bag from "../../assets/svg/bag.svg";
import heart from "../../assets/images/heart2.png";

const props = defineProps(["image"]);
</script>

<template>
  <div class="img">
    <img class="image" :src="image.img" alt="image" />
    <span class="mask">
      <img class="full-screen" :src="fullS" alt="" />
      <div class="bag">
        <img class="bag" :src="bag" alt="" />
        <p>Узнай, что на мне</p>
      </div>
      <div class="likes">
        <img :src="heart" alt="" />
        <span>{{ image.likes }}</span>
      </div>
    </span>
  </div>
</template>

<style scoped>

.img {
  font-size: 14px;
  line-height: 20px;
  letter-spacing: 0.04em;
  color: #ffffff;
}

.img .image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.full-screen {
  top: 10px;
  margin-left: 90%;
}

.img-large .full-screen {
  margin-left: 95%;
}

.bag {
  top: 35%;
  left: 30%;

}

.bag img {
  left: 15%;
}

.img-large .bag {
  top: 50%;
  left: 45%;
}

.img-large .bag img {
  left: 5%;
}

.likes {
  top: 55%;
  left: 45%;

}

.img-large .likes {
  top: 75%;
  left: 50%;
}

.likes span {
  margin-left: 5px;
}

@media (max-width: 1135px) {
  .img {
    font-size: 10px;
  }

  .full-screen {
    top: 10px;
    margin-left: 80%;
  }

  .img-large .full-screen {
    margin-left: 90%;
  }

    .bag {
    top: 25%;
    left: 20%;

  }

  .bag img {
    left: 15%;
  }

  .img-large .bag {
    top: 35%;
    left: 35%;
  }

  .img-large .bag img {
    left: 5%;
  }

  .likes {
    top: 30%;
    left: 40%;

  }

  .img-large .likes {
    top: 60%;
    left: 45%;
  }

  .likes span {
    margin-left: 5px;
  }
}

@media (max-width: 800px) {
  .img {
    font-size: 10px;
  }

  .full-screen {
    top: 10px;
    margin-left: 80%;
  }

  .img-large .full-screen {
    margin-left: 90%;
  }

  .bag {
    top: 15%;
    left: 20%;
  }

  .bag img {
    left: 15%;
  }

  .img-large .bag {
    top: 35%;
    left: 35%;
  }

  .img-large .bag img {
    left: 5%;
  }

  .likes {
    top: 20%;
    left: 40%;
  }

  .img-large .likes {
    top: 60%;
    left: 45%;
  }

  .likes span {
    margin-left: 5px;
  }
}
</style>
