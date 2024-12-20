<script setup>
const products = [
    {
        "image": "/img/default-img.png",
        "name": "Coffee",
        "sort": 1
    },
    {
        "image": null,
        "name": null,
        "sort": 2
    },
    {
        "image": null,
        "name": null,
        "sort": 3
    },
    {
        "image": null,
        "name": null,
        "sort": 4
    },
    {
        "image": null,
        "name": null,
        "sort": 5
    },
    {
        "image": null,
        "name": null,
        "sort": 6
    },
    {
        "image": null,
        "name": null,
        "sort": 7
    },
    {
        "image": null,
        "name": null,
        "sort": 8
    },
    {
        "image": null,
        "name": null,
        "sort": 9
    },
    {
        "image": "/img/default-img.png",
        "name": "Coffee",
        "sort": 10
    },
    {
        "image": "/img/default-img.png",
        "name": "Coffee",
        "sort": 11
    },
    {
        "image": null,
        "name": null,
        "sort": 12
    },
    {
        "image": null,
        "name": null,
        "sort": 13
    },
    {
        "image": null,
        "name": null,
        "sort": 14
    },
    {
        "image": null,
        "name": null,
        "sort": 15
    },
];
const { showModalPOSProduct, showModalAddCustomer, showModalBill, showModalPayment } = useModal();

</script>
<template>
    <section id="content">
        <main id="main-content">
            <div id="point-of-sale" class="content-page">
                <div class="container flex mx-auto item">
                    <div id="category-grid" class="grid w-7/12 grid-cols-3 ">
                        <div v-for="(product, index) in products" :key="index">
                            <div class="relative text-center rounded-lg shadow-md cursor-pointer product-item"
                                @click="showModalPOSProduct()" v-if="product.name">
                                <img src="/img/default-img.png" alt="Produk 1"
                                    class="object-cover w-full rounded-t-md" />
                                <div
                                    class="absolute bottom-0 left-0 right-0 bg-whiten h-[20px] rounded-b-md p-3 flex items-center justify-center">
                                    <span class="font-semibold text-[10px]">Coffee</span>
                                </div>
                            </div>
                            <div class="product-empty" v-else></div>
                        </div>
                        <p id="empty-message" class="mt-8 text-center text-gray-600" :class="{
                            hidden: products.length > 0
                        }">
                            Tidak ada produk.
                        </p>
                    </div>

                    <div class="w-5/12 ml-4">
                        <div class="sticky top-0">
                            <div class="flex justify-between mb-4">
                                <!-- Tambah Pelanggan Button -->
                                <button
                                    class="flex items-center bg-[#a91d3a] text-white px-4 py-2 rounded-lg  shadow-md"
                                    @click="showModalAddCustomer()">
                                    <i class="mr-2 text-xl bx bxs-user-plus"></i> Tambah Pelanggan
                                </button>

                                <!-- Daftar Bill Button -->
                                <button
                                    class="flex items-center px-4 py-2 text-white bg-green-500 rounded-lg shadow-md hover:bg-green-600"
                                    @click="showModalBill()">
                                    <i class="text-xl bx bxs-receipt"></i>
                                </button>
                            </div>

                            <div class="p-2 px-4 shadow-md order-list">
                                <!-- Header -->
                                <div class="flex justify-center">
                                    <div class="font-bold">Dine In</div>
                                </div>
                                <hr />

                                <!-- Tempat Data -->
                                <div class="px-4 overflow-y-auto max-h-52">
                                    <div class="flex justify-between py-2">
                                        <span>Item 1</span>
                                        <span>Rp. 10,000</span>
                                    </div>
                                    <div class="flex justify-between py-2">
                                        <span>Item 2</span>
                                        <span>Rp. 15,000</span>
                                    </div>
                                    <div class="flex justify-between py-2">
                                        <span>Item 3</span>
                                        <span>Rp. 20,000</span>
                                    </div>
                                    <hr class="my-2" />
                                    <div class="flex justify-between py-2">
                                        <span>Tax</span>
                                        <span>Rp. 2,500</span>
                                    </div>
                                    <div class="flex justify-between py-2">
                                        <span>Diskon</span>
                                        <span>- Rp. 5,000</span>
                                    </div>
                                    <hr class="my-2" />
                                </div>

                                <hr class="mt-4" />

                                <!-- Grand Total -->
                                <div class="px-4">
                                    <div class="flex justify-between pt-2 font-bold">
                                        <span>Subtotal</span>
                                        <span>Rp. 00,000</span>
                                    </div>
                                    <hr class="my-2" />
                                    <div class="flex justify-between font-bold">
                                        <span>Grand Total</span>
                                        <span>Rp. 00,000</span>
                                    </div>
                                </div>

                                <div class="relative mt-3">
                                    <select
                                        class="w-full px-3 py-2 text-gray-700 bg-gray-100 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-red-500">
                                        <option value="" disabled selected>
                                            Pilih Table
                                        </option>
                                        <option value="table-1">Table 1</option>
                                        <option value="table-2">Table 2</option>
                                        <option value="table-3">Table 3</option>
                                        <option value="table-4">Table 4</option>
                                    </select>

                                </div>
                                <!-- Buttons -->
                                <div class="flex gap-2 mt-4">
                                    <button
                                        class="w-1/2 px-3 py-1 text-xs font-semibold text-white rounded-sm bg-darken hover:bg-gray-600 lg:text-sm">
                                        Simpan Dulu
                                    </button>
                                    <button
                                        class="w-1/2 px-3 py-1 text-xs font-semibold text-white rounded-sm bg-main hover:bg-red-400 lg:text-sm">
                                        Cetak Struk
                                    </button>
                                </div>
                            </div>

                            <div class="flex flex-col gap-2 p-2 mt-3 bg-whiten order-list">
                                <!-- Dropdown Table -->
                                <!-- Button Bayar -->
                                <button
                                    class="w-full px-3 py-1 text-xs font-semibold bg-green-500 rounded-sm hover:bg-green-600 text-whiten lg:text-sm"
                                    @click="showModalPayment()">
                                    Bayar
                                </button>
                                <button class="text-white bg-green-500 rounded" onclick="playSound()">Play
                                    Sound</button>
                                <audio id="sound" src="./sound/order.mp3"></audio>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>

        <nav>
            <button class="h-full aspect-square" @click="() => {
                useAppSidebarState().value = useAppSidebarState().value === 'show' ? 'hide' : 'show'
            }">
                <i class="bx bx-menu"></i>
            </button>

            <div class="flex w-full gap-2 navbar-items pos">
                <NuxtLink to="/point-of-sale" class="w-1/2 py-2 text-center rounded-md shadow-md nav-item-bottom">
                    <i class="mx-auto bx bx-rocket"></i> Quick
                </NuxtLink>
                <NuxtLink to="/point-of-sale/library"
                    class="w-1/2 py-2 text-center rounded-md shadow-md nav-item-bottom">
                    <i class="mx-auto bx bx-library"></i> Library
                </NuxtLink>
            </div>

            <input type="checkbox" id="switch-mode" hidden />
            <label for="switch-mode" class="switch-mode"></label>
        </nav>
    </section>
</template>