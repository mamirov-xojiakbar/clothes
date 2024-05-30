<script setup>
import { toggleCategories } from '../store';
</script>

<template>
  <div class="container flex justify-between pb-[20px] box-border">
    <div class="flex">
      <button
        @click="toggleCategories"
        class="mt-10 bg-gradient-to-r from-[#F64D4D] to-[#4D5EF6] p-5 flex items-center justify-center hover:cursor-pointer"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="30px"
          height="30px"
          viewBox="0 0 24 24"
          class="text-white"
        >
          <path
            fill="currentColor"
            d="M4 18q-.425 0-.712-.288T3 17t.288-.712T4 16h16q.425 0 .713.288T21 17t-.288.713T20 18zm0-5q-.425 0-.712-.288T3 12t.288-.712T4 11h16q.425 0 .713.288T21 12t-.288.713T20 13zm0-5q-.425 0-.712-.288T3 7t.288-.712T4 6h16q.425 0 .713.288T21 7t-.288.713T20 8z"
          />
        </svg>
      </button>
      <img src="../../public/Лого.png" alt="" class="ml-[32px] pt-[48px]" />
    </div>

    <div class="w-[50%]">
      <div class="flex gap-5 mt-[15px]">
        <a href="#" class="flex items-center gap-1 text-[12px]"
          >Покупателям<img
            src="../../public/navbar-1.png"
            alt=""
            class="w-[10px] h-[10px]"
        /></a>
        <a href="#" class="flex items-center gap-1 text-[12px]"
          >Поставщикам<img
            src="../../public/navbar-1.png"
            alt=""
            class="w-[10px] h-[10px]"
        /></a>
        <a href="#" class="text-[12px]">Частые вопросы</a>
      </div>

      <div class="flex border-[#bca6f0] border-[1px] mt-[25px] items-center pr-5">
        <a href="#" class="flex items-center gap-1 text-[14px] py-[15px] px-[30px] bg-[#ffecec]"
          >Везде<img
            src="../../public/navbar-1.png"
            alt=""
            class="w-[10px] h-[10px]"
        /></a>
        <input type="text" class="h-[100%] w-full p-3 focus:outline-none" />
        <img src="../../public/search.png" alt="" class="w-[27px] h-[26px]"/>
      </div>

    </div>

    <div>
      <div class="flex justify-end divide-x divide-[black] gap-3 mt-[15px] text-[12px]">
        <img src="../../public/Flag Ru.png" alt="" class=""/>
        <a href="#" class="pl-3">Русский</a>
        <a href="#" class="flex items-center gap-1 pl-3"
          >₽<img
            src="../../public/navbar-1.png"
            alt=""
            class="w-[10px] h-[10px]"
        /></a>
      </div>

      <div class="flex justify-center gap-10 mt-[24px]">
        <div class="">
          <img src="../../public/user.png" alt="" class="ml-2">
          <p>Войти</p>
        </div>
        <div>
          <img src="../../public/like-heart.png" alt="" class="ml-5">
          <p>Избранное</p>
        </div>
        <div>
          <img src="../../public/shop-cart.png" alt="" class="ml-4">
          <p>Корзина</p>
        </div>
      </div>
    </div>
  </div>
</template>
