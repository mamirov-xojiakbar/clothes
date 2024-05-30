<template>
  <div class="container mt-[30px] box-border">
    <h2 class="text-[28px]">Новинки</h2>
    <div class="grid grid-cols-6 gap-x-[20px] gap-y-[40px] grid-rows-2 cursor-pointer">
      <div
        v-for="(item, index) in arr"
        :key="index"
        class="p-[20px] shadow-2xl items-center"
      >
        <img :src="item.img" alt="Product Image" class="w-[160px] h-[160px]" />
        <div class="flex mt-[19px] gap-[12px]">
          <p class="text-[#FF4343] font-medium text-[14px] leading-[16.41px]">
            {{ item.discount }}
          </p>
        </div>
        <p class="font-light text-[12px] leading-[14.9px]">{{ item.text }}</p>
      </div>
    </div>

    <div
      class="bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500 p-[1.5px] text-center w-[187px] mt-5 ml-[1090px] mb-[20px] cursor-pointer"
    >
      <p class="bg-white py-[14px] text-[14px] font-medium leading-[16.41px]">
        Все товары
      </p>
    </div>
  </div>
</template>

<script setup>
import tshirt4 from "../../public/t-shirt4.png";
import tshirt91 from "../../public/t-shirt9 1.png";
import tshirt6 from "../../public/t-shirt6.png";
import phone111 from "../../public/phone 11 1.png";
import hat31 from "../../public/hat3 1.png";
import phone121 from "../../public/phone 12 1.png";
import tshirt3 from "../../public/t-shirt3.png";
import phone131 from "../../public/phone 13 1.png";
import phone5 from "../../public/phone 5.png";

const arr = [
  {
    img: tshirt4,
    discount: "1 999 ₽",
    text: "Футболка с дизайнерским принтом Super Shape 02",
  },
  {
    img: tshirt91,
    discount: "3 179 ₽",
    text: "Футболка80 с дизайнерским принтом Super Shape 7",
  },
  {
    img: tshirt6,
    discount: "1 375 ₽",
    text: "Бейсболка с дизайнерским принтом Super Shape 01 белая",
  },
  {
    img: phone111,
    discount: "599 ₽",
    text: "Чехол для iphone 12 с дизайнерским принтом Super Shape 03",
  },
  {
    img: phone5,
    discount: "599 ₽",
    text: "Чехол для iphone 12 с дизайнерским принтом Super Shape 05",
  },
  {
    img: hat31,
    discount: "2 399 ₽",
    text: "Футболка с дизайнерским принтом Super Shape 06 абстракция",
  },
  {
    img: phone121,
    discount: "1 375 ₽",
    text: "Бейсболка с дизайнерским принтом Super Shape 02 абстракция",
  },
  {
    img: tshirt3,
    discount: "599 ₽",
    text: "Чехол для iphone 12 с дизайнерским принтом Super Shape 03",
  },
  {
    img: phone131,
    discount: "599 ₽",
    text: "Чехол для iphone 12 с дизайнерским принтом Super Shape 03",
  },
  {
    img: phone121,
    discount: "3 179 ₽",
    text: "Футболка с дизайнерским принтом Super Shape 02",
  },
  {
    img: tshirt91,
    discount: "599 ₽",
    text: "Чехол для iphone 12 с дизайнерским принтом Super Shape 03",
  },
  {
    img: tshirt6,
    discount: "3 179 ₽",
    text: "Футболка с дизайнерским принтом Super Shape 02",
  },
];
</script>

<style scoped></style>
