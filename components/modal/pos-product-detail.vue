<template>
    <div class="relative p-5 rounded-lg bg-whiten">
        <div class="oveflow-y-auto">
            <div class="flex w-full">
                <div class="flex justify-center">
                    <img id="detailImage" class="w-32 h-32 rounded-md" alt="Product Image" />
                </div>
                <div class="ml-4 text-product grow">
                    <div class="flex justify-center text-2xl font-bold text-main" id="detailTitle">
                        Product Name Original
                    </div>
                    <div class="text-xl text-center font-reguler text-main">
                        <span id="detailPrice">10000</span>
                    </div>
                    <div class="flex w-full">
                        <div class="flex items-center justify-center mt-4">
                            <input type="text" id="quantity" value="1" readonly
                                class="text-center w-12 border border-gray-300 mx-2 bg-main rounded-sm text-white font-bold py-[0.6rem] ring-main" />
                            <button onclick="decreaseQuantity()"
                                class="px-8 py-2 text-lg font-bold rounded-sm text-main ring-main me-2">
                                <i class="bx bx-minus"></i>
                            </button>
                            <button onclick="increaseQuantity()"
                                class="px-8 py-2 text-lg rounded-sm ring-main text-main">
                                <i class="bx bx-plus"></i>
                            </button>
                        </div>

                        <div class="content-center mt-4 text-2xl font-bold text-center grow text-end text-main">
                            Total : Rp. <span id="totalPrice">10000</span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="flex gap-4 pt-3">
                <div class="w-6/12 h-auto order-side">
                    <h3 class="pb-2 font-bold text-main">VARIAN</h3>
                    <div class="block">
                        <div class="flex justify-center mb-4 font-bold text-main">
                            <button onclick="selectVariant('original')"
                                class="w-6/12 px-4 py-2 rounded-l-sm outline outline-2 outline-main" id="originalTab">
                                Original
                            </button>
                            <button onclick="selectVariant('special')"
                                class="w-6/12 px-4 py-2 rounded-r-sm outline outline-2 outline-main" id="specialTab">
                                Special
                            </button>
                        </div>
                    </div>
                    <div class="block">
                        <h3 class="font-bold text-main ">CATATAN</h3>
                        <div class="flex justify-center pt-2 mb-4 font-bold">
                            <textarea class="w-full textarea-responsive grow" name="catatan" id="catatan"
                                placeholder="Tulis catatan di sini..."></textarea>
                        </div>
                    </div>
                </div>

                <div class="w-6/12 discount-side ">
                    <h3 class="pb-2 font-bold text-main">DISKON</h3>
                    <div class="w-full h-[250px] overflow-y-auto">
                        <div class="card-discount">
                            <div class="h-[85px] px-4 py-2 justify-between bg-main rounded-sm  flex items-center">
                                <div class="content-center pr-3 text-white text-discount line-clamp-2">
                                    Diskon Teman Fifteenth Suka Kamu
                                </div>
                                <label class="switch">
                                    <input type="checkbox" id="discount-toggle" onchange="toggleDiscount()" />
                                    <span class="slider round"></span>
                                </label>
                            </div>
                        </div>
                        <div class="card-discount">
                            <div class="h-[85px] px-4 py-2 justify-between bg-main rounded-sm  flex items-center">
                                <div class="content-center pr-3 text-white text-discount line-clamp-2">
                                    Diskon Teman Fifteenth Suka Kamu
                                </div>
                                <label class="switch">
                                    <input type="checkbox" id="discount-toggle" onchange="toggleDiscount()" />
                                    <span class="slider round"></span>
                                </label>
                            </div>
                        </div>
                        <div class="card-discount">
                            <div class="h-[85px] px-4 py-2 justify-between bg-main rounded-sm  flex items-center">
                                <div class="content-center pr-3 text-white text-discount line-clamp-2">
                                    Diskon Teman Fifteenth Suka Kamu
                                </div>
                                <label class="switch">
                                    <input type="checkbox" id="discount-toggle" onchange="toggleDiscount()" />
                                    <span class="slider round"></span>
                                </label>
                            </div>
                        </div>
                        <div class="card-discount">
                            <div class="h-[85px] px-4 py-2 justify-between bg-main rounded-sm  flex items-center">
                                <div class="content-center pr-3 text-white text-discount line-clamp-2">
                                    Diskon Teman Fifteenth Suka Kamu
                                </div>
                                <label class="switch">
                                    <input type="checkbox" id="discount-toggle" onchange="toggleDiscount()" />
                                    <span class="slider round"></span>
                                </label>
                            </div>
                        </div>
                        <div class="card-discount">
                            <div class="h-[85px] px-4 py-2 justify-between bg-main rounded-sm  flex items-center">
                                <div class="content-center pr-3 text-white text-discount line-clamp-2">
                                    Diskon Teman Fifteenth Suka Kamu
                                </div>
                                <label class="switch">
                                    <input type="checkbox" id="discount-toggle" onchange="toggleDiscount()" />
                                    <span class="slider round"></span>
                                </label>
                            </div>
                        </div>
                        <div class="card-discount">
                            <div class="h-[85px] px-4 py-2 justify-between bg-main rounded-sm  flex items-center">
                                <div class="content-center pr-3 text-white text-discount line-clamp-2">
                                    Diskon Teman Fifteenth Suka Kamu
                                </div>
                                <label class="switch">
                                    <input type="checkbox" id="discount-toggle" onchange="toggleDiscount()" />
                                    <span class="slider round"></span>
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="sticky bottom-0 flex w-full gap-4 font-bold close-btn bg-whiten">
                <button @click="showModalPOSProduct()" class="w-6/12 p-2 text-white rounded-sm bg-main">
                    Tutup
                </button>
                <button @click="Swal.clickConfirm()" class="w-6/12 p-2 text-white bg-green-500 rounded-sm ">
                    Simpan
                </button>
            </div>
        </div>
    </div>
</template>
<script setup>
import Swal from 'sweetalert2';

const { showModalPOSProduct } = useModal();
</script>