<script setup>
import { state } from '../store';
</script>

<template>
  <div class="container mt-[10px] flex box-border gap-10 justify-between">

    <div :class="state.showCategories ? 'block' : 'hidden'">
      <div class="bg-gradient-to-r from-[#F64D4D] to-[#4D5EF6] flex text-white py-[10px] pl-[30px] pr-[60px] gap-4 items-center">
        <img src="../../public/menu (2).png" alt="" class="w-[20px] h-[20px]">
        <p class="text-[14px]">Популярные категории</p>
      </div>

      <div>
        <a href="#" class="flex gap-3 pt-2 pl-8 text-[14.5px] hover:font-bold"><img src="../../public/laptop.png" alt=""><p>Компьютеры и оргтехника</p></a>
        <a href="#" class="flex gap-3 pt-2 pl-8 text-[14.5px] hover:font-bold"><img src="../../public/power-plug.png" alt=""><p>Электроника</p></a>
        <a href="#" class="flex gap-3 pt-2 pl-8 text-[14.5px] hover:font-bold"><img src="../../public/micro.png" alt=""><p>Бытовая техника</p></a>
        <a href="#" class="flex gap-3 pt-2 pl-8 text-[14.5px] hover:font-bold"><img src="../../public/dress.png" alt=""><p>Одежда для женщин</p></a>
        <a href="#" class="flex gap-3 pt-2 pl-8 text-[14.5px] hover:font-bold"><img src="../../public/t-shirt.png" alt=""><p>Одежда для мужчин</p></a>
        <a href="#" class="flex gap-3 pt-2 pl-8 text-[14.5px] hover:font-bold"><img src="../../public/baby.png" alt=""><p>Все для детей</p></a>
        <a href="#" class="flex gap-3 pt-2 pl-8 text-[14.5px] hover:font-bold"><img src="../../public/steer.png" alt=""><p>Автотовары</p></a>
        <a href="#" class="flex gap-3 pt-2 pl-8 text-[14.5px] hover:font-bold"><img src="../../public/lotus.png" alt=""><p>Красота и здоровье</p></a>
        <a href="#" class="flex gap-3 pt-2 pl-8 text-[14.5px] hover:font-bold"><img src="../../public/ball.png" alt=""><p>Спорт и развлечения</p></a>
        <a href="#" class="flex items-center gap-1 pt-4 pl-8 "><p class="hover:font-bold bg-gradient-to-r from-[#F64D4D] to-[#4D5EF6] bg-clip-text text-transparent font-normal">Поставщикам</p><img src="../../public/navbar-1.png" alt="" class="w-[10px] h-[10px]"/></a>
      </div>
    </div>

    <div>
      <img src="../../public/baner1.png" alt="" class="w-[953.25px] h-[351px]">
    </div>
    
    <div :class="state.showCategories ? 'hidden' : 'block'">
      <img src="../../public/baner2.png" alt="" class="mb-7 w-[295.49px] h-[162px]">
      <img src="../../public/baner3.png" alt="" class="w-[295.49px] h-[162px]">
    </div>
  </div>
</template>

<style lang="scss" scoped>
</style>
