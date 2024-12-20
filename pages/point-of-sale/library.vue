<template>
    <section id="content">
        <main id="main-content">
            <div id="library" class="content-page ">
                <div class="container flex mx-auto item">
                    <div class="w-7/12 mx-auto">
                        <div class="flex items-center justify-between mb-4">
                            <h2 class="flex items-center gap-2 text-2xl font-bold">
                                <i class='text-gray-700 bx bx-library'></i>Library
                            </h2>
                            <button
                                class="flex items-center space-x-2 px-4 py-2 bg-[#a91d3a] text-white rounded-lg shadow-md "
                                @click="showModalPOSLibraryAddItem()">
                                <i class="text-xl bx bxs-plus-circle"></i>
                                <span>Add</span>
                            </button>
                        </div>
                        <!-- Search Bar -->
                        <div class="relative mb-4">
                            <input type="text" placeholder="Search..." id="search"
                                class="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-black focus:border-black" />
                        </div>
                        <!-- Category List -->
                        <div class="border border-gray-200 rounded-lg shadow-sm">
                            <ul id="category-list" class="divide-y divide-gray-200">
                                <!-- List Items -->
                                <li class="flex items-center justify-between p-4 bg-white cursor-pointer"
                                    @click="showModalPOSProduct()">
                                    <div class="flex items-center space-x-4">
                                        <img src="https://via.placeholder.com/40" alt="Category"
                                            class="w-10 h-10 rounded-full" />
                                        <span class="font-medium text-gray-800">Coffee</span>
                                    </div>
                                    <i class="text-gray-600 bx bx-chevron-right"></i>
                                </li>
                                <li class="flex items-center justify-between p-4 bg-white cursor-pointer"
                                    @click="showModalPOSProduct()">
                                    <div class="flex items-center space-x-4">
                                        <img src="https://via.placeholder.com/40" alt="Category"
                                            class="w-10 h-10 rounded-full" />
                                        <span class="font-medium text-gray-800">Coffee</span>
                                    </div>
                                    <i class="text-gray-600 bx bx-chevron-right"></i>
                                </li>
                                <li class="flex items-center justify-between p-4 bg-white cursor-pointer"
                                    @click="showModalPOSProduct()">
                                    <div class="flex items-center space-x-4">
                                        <img src="https://via.placeholder.com/40" alt="Category"
                                            class="w-10 h-10 rounded-full" />
                                        <span class="font-medium text-gray-800">Coffee</span>
                                    </div>
                                    <i class="text-gray-600 bx bx-chevron-right"></i>
                                </li>
                                <li class="flex items-center justify-between p-4 bg-white cursor-pointer"
                                    @click="showModalPOSProduct()">
                                    <div class="flex items-center space-x-4">
                                        <img src="https://via.placeholder.com/40" alt="Category"
                                            class="w-10 h-10 rounded-full" />
                                        <span class="font-medium text-gray-800">Coffee</span>
                                    </div>
                                    <i class="text-gray-600 bx bx-chevron-right"></i>
                                </li>
                                <li class="flex items-center justify-between p-4 bg-white cursor-pointer"
                                    @click="showModalPOSProduct()">
                                    <div class="flex items-center space-x-4">
                                        <img src="https://via.placeholder.com/40" alt="Category"
                                            class="w-10 h-10 rounded-full" />
                                        <span class="font-medium text-gray-800">Coffee</span>
                                    </div>
                                    <i class="text-gray-600 bx bx-chevron-right"></i>
                                </li>
                                <li class="flex items-center justify-between p-4 bg-white cursor-pointer"
                                    @click="showModalPOSProduct()">
                                    <div class="flex items-center space-x-4">
                                        <img src="https://via.placeholder.com/40" alt="Category"
                                            class="w-10 h-10 rounded-full" />
                                        <span class="font-medium text-gray-800">Coffee</span>
                                    </div>
                                    <i class="text-gray-600 bx bx-chevron-right"></i>
                                </li>
                                <li class="flex items-center justify-between p-4 bg-white cursor-pointer"
                                    @click="showModalPOSProduct()">
                                    <div class="flex items-center space-x-4">
                                        <img src="https://via.placeholder.com/40" alt="Category"
                                            class="w-10 h-10 rounded-full" />
                                        <span class="font-medium text-gray-800">Coffee</span>
                                    </div>
                                    <i class="text-gray-600 bx bx-chevron-right"></i>
                                </li>
                                <li class="flex items-center justify-between p-4 bg-white cursor-pointer"
                                    @click="showModalPOSProduct()">
                                    <div class="flex items-center space-x-4">
                                        <img src="https://via.placeholder.com/40" alt="Category"
                                            class="w-10 h-10 rounded-full" />
                                        <span class="font-medium text-gray-800">Coffee</span>
                                    </div>
                                    <i class="text-gray-600 bx bx-chevron-right"></i>
                                </li>
                            </ul>
                        </div>
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
                                <div class="overflow-y-auto max-h-40">
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


                            <div class="flex flex-col gap-2 p-2 mt-3 rounded-md bg-whiten">
                                <!-- Dropdown Table -->
                                <div class="relative">
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

                                <!-- Button Bayar -->
                                <button
                                    class="w-full px-3 py-1 text-xs font-semibold bg-green-500 rounded-sm hover:bg-green-600 text-whiten lg:text-sm"
                                    @click="showModalPayment()">
                                    Bayar
                                </button>

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
<script setup>
const { showModalPOSProduct, showModalPayment, showModalAddCustomer, showModalPOSLibraryAddItem, showModalBill } = useModal();
</script>