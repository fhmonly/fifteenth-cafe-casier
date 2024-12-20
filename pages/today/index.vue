<script setup>
const customerOrders = [
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
const { showModalActivityAddTable, showModalPayment, showModalAddCustomer, showModalBill } = useModal();
</script>
<template>
    <section id="content">
        <main id="main-content">
            <div id="today" class="content-page">
                <div class="container flex mx-auto item">
                    <div class="w-7/12 mx-auto">
                        <div class="flex items-center justify-between mb-4">
                            <h2 class="flex items-center gap-2 text-2xl font-bold">
                                <i class='text-gray-700 bx bxs-receipt'></i> Table
                            </h2>
                            <button
                                class="flex items-center space-x-2 px-4 py-2 bg-[#a91d3a] text-white rounded-lg shadow-md"
                                @click="showModalActivityAddTable()">
                                <i class="text-xl bx bxs-plus-circle"></i>
                                <span>Add</span>
                            </button>
                        </div>

                        <!-- Grid of Tables -->
                        <div class="mb-4">
                            <input type="text" id="searchInput" class="w-full p-2 border rounded-lg"
                                placeholder="Cari Nomor Meja..." oninput="filterTablesOrder()" />
                        </div>
                        <div id="tableGrid" class="grid grid-cols-4 gap-4 p-2">
                            <!-- Dummy Data -->
                            <div v-for="(order, index) in customerOrders" :key="index">
                                <div class="relative h-[80px] w-[80px] outline outline-2 outline-green-500 rounded-lg shadow-md flex flex-col items-center justify-center cursor-pointer bg-[#a91d3a]"
                                    v-if="order.name">
                                    <span class="text-2xl font-bold text-white">{{ order.sort }}</span>
                                    <div
                                        class="absolute bottom-0 px-2 py-1 text-xs font-bold text-white bg-green-500 rounded right-2">
                                        <i class='bx bxs-comment-add'></i>
                                        New Order
                                    </div>
                                </div>
                                <div class="relative h-[80px] w-[80px]  outline-2 outline-[#a91d3a] outline-dashed rounded-lg shadow-md flex flex-col items-center justify-center cursor-pointer bg-[#f0c3ccff]"
                                    v-else>
                                    <span class="text-2xl font-bold text-[#a91d3a]">{{ order.sort }}</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="w-5/12 ml-4">
                        <div class="sticky top-0">

                            <div class="flex justify-between mb-4">
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

                            <div class="p-2 px-4 shadow-md order-list" id="order-table">
                                <!-- Header -->
                                <div class="flex justify-center">
                                    <div class="font-bold">Dine In</div>
                                </div>
                                <hr />
                                <!-- Tempat Data -->
                                <div class="px-4 overflow-y-auto max-h-40">
                                    <div class="flex justify-between py-2">
                                        <span>Item 1</span>
                                        <span>Rp. 00,000</span>
                                    </div>
                                    <hr class="my-2" />
                                    <div class="flex justify-between py-2">
                                        <span>Diskon</span>
                                        <span>- Rp. 00,000</span>
                                    </div>
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
                            </div>


                            <div class="flex flex-col gap-2 p-2 mt-3 rounded-md bg-whiten">
                                <div class="flex gap-2">
                                    <button
                                        class="w-1/2 px-3 py-1 text-xs font-semibold text-white rounded-sm bg-darken hover:bg-gray-600 lg:text-sm">
                                        Simpan Dulu
                                    </button>
                                    <button
                                        class="w-1/2 px-3 py-1 text-xs font-semibold text-white rounded-sm bg-main hover:bg-red-400 lg:text-sm">
                                        Cetak Struk
                                    </button>
                                </div>
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

            <div class="flex w-full gap-2 navbar-items activity">
                <NuxtLink to="/today" class="w-1/2 py-2 text-center rounded-md shadow-md nav-item-bottom">
                    <i class="mx-auto bx bx-calendar"></i> Hari Ini
                </NuxtLink>
                <NuxtLink to="/today/history" class="w-1/2 py-2 text-center rounded-md shadow-md nav-item-bottom">
                    <i class="mx-auto bx bx-hourglass"></i> Riwayat
                </NuxtLink>
            </div>

            <input type="checkbox" id="switch-mode" hidden />
            <label for="switch-mode" class="switch-mode"></label>
        </nav>
    </section>
</template>