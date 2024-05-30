<template>
  <div class="container mt-[30px] box-border">
    <h2 class="text-[28px]">Успей купить</h2>

    <div class="grid grid-cols-6 gap-x-[20px] gap-y-[40px] grid-rows-2 cursor-pointer">
      <div v-for="(item, index) in arr" :key="index" class="p-[20px] shadow-2xl items-center">
        <img :src="item.img" alt="Product Image" class="w-[160px] h-[160px]"/>
        <div class="flex mt-[19px] gap-[12px]">
            <p class="text-[#FF4343] font-medium text-[14px] leading-[16.41px]">{{ item.discount }}</p>
            <p class="text-[#4646468C] font-normal text-[10px] leading-[11.72px] line-through decoration-red-500">{{ item.price }}</p>
        </div>
        <p class="font-light text-[12px] leading-[14.9px]">{{ item.text }}</p>
      </div>
    </div>

    <div class="bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500 p-[1.5px] text-center w-[187px] mt-5 ml-[1090px] mb-[20px] cursor-pointer"><p class="bg-white py-[14px] text-[14px] font-medium leading-[16.41px]">Все товары</p></div>
  </div>
</template>

<script setup>
import boy2 from '../../public/boy 2.png';
import boy1 from '../../public/boy 1.png';
import boy3 from '../../public/boy 3.png';
import boy5 from '../../public/boy 5.png';
import boy6 from '../../public/boy 6.png';
import hat1 from '../../public/hat 1.png';
import hat2 from '../../public/hat 2.png';
import phone1 from '../../public/phone 1.png';
import phone2 from '../../public/phone 2.png';
import phone131 from '../../public/phone 13 1.png';
import phone4 from '../../public/phone 4.png';
import phone6 from '../../public/phone 6.png';

const arr = [
  {
    img: boy2,
    discount: "1 999 ₽",
    price: "2 499 ₽",
    text: "Футболка с дизайнерским принтом Super Shape 02",
  },
  {
    img: boy1,
    discount: "3 179 ₽",
    price: "1 999 ₽",
    text: "Футболка80 с дизайнерским принтом Super Shape 7",
  },
  {
    img: hat1,
    discount: "1 375 ₽",
    price: "1 999 ₽",
    text: "Бейсболка с дизайнерским принтом Super Shape 01 белая",
  },
  {
    img: phone1,
    discount: "599 ₽",
    price: "990 ₽",
    text: "Чехол для iphone 12 с дизайнерским принтом Super Shape 03",
  },
  {
    img: phone2,
    discount: "599 ₽",
    price: "990 ₽",
    text: "Чехол для iphone 12 с дизайнерским принтом Super Shape 05",
  },
  {
    img: boy5,
    discount: "2 399 ₽",
    price: "3 790 ₽",
    text: "Футболка с дизайнерским принтом Super Shape 06 абстракция",
  },
  {
    img: hat2,
    discount: "1 375 ₽",
    price: "2 499 ₽",
    text: "Бейсболка с дизайнерским принтом Super Shape 02 абстракция",
  },
  {
    img: phone131,
    discount: "599 ₽",
    price: "990 ₽",
    text: "Чехол для iphone 12 с дизайнерским принтом Super Shape 03",
  },
  {
    img: phone4,
    discount: "599 ₽",
    price: "990 ₽",
    text: "Чехол для iphone 12 с дизайнерским принтом Super Shape 03",
  },
  {
    img: boy3,
    discount: "3 179 ₽",
    price: "1 999 ₽",
    text: "Футболка с дизайнерским принтом Super Shape 02",
  },
  {
    img: phone6,
    discount: "599 ₽",
    price: "990 ₽",
    text: "Чехол для iphone 12 с дизайнерским принтом Super Shape 03",
  },
  {
    img: boy6,
    discount: "3 179 ₽",
    price: "1 999 ₽",
    text: "Футболка с дизайнерским принтом Super Shape 02",
  },
];
</script>

<style scoped>
</style>
