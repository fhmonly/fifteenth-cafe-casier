<template>
    <section id="content">
        <main id="main-content">
            <div id="history" class="content-page">
                <div class="flex gap-6 mx-auto item">
                    <div class="w-4/12 mx-auto">
                        <div class="flex items-center justify-between mb-4">
                            <h2 class="flex items-center gap-2 text-2xl font-bold">
                                <i class='text-gray-700 bx bx-history'></i>Riwayat
                            </h2>
                        </div>
                        <div class="relative mb-4">
                            <input type="text" placeholder="No Invoice .." id="searchInvoice"
                                class="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-black focus:border-black" />
                        </div>
                        <div>
                            <div class="history-activity">
                                <div class="my-2 mr-2 text-sm">Hari Ini</div>
                                <ul id="category-list" class="bg-white border border-gray-200 rounded-lg">
                                    <li class="flex flex-col p-4 cursor-pointer hover:bg-[#a91d3a] hover:text-white"
                                        data-invoice="#INV-1001"
                                        data-detail='{"paymentMethod":"Transfer Bank","invoiceNumber":"#INV-1001","timePay":"10:35","noTable":"1","orderType":"Dine In","products":[{"name":"Kebab","price":30000,"quantity":1,"image":"https://via.placeholder.com/50"},{"name":"Air Putih","price":5000,"quantity":1,"image":"https://via.placeholder.com/50"},{"name":"Teh Tarik","price":15000,"quantity":1,"image":"https://via.placeholder.com/50"}],"subtotal":50000,"ppn":5000,"total":55000,"paid":60000,"change":5000}'>
                                        <div class="flex items-center justify-between">
                                            <div class="flex items-center gap-2">
                                                <i class='bx bx-food-menu'></i>
                                                <span class="font-medium hover:text-white">Rp. 78.000</span>
                                            </div>
                                            <span class="text-xs">10:15</span>
                                        </div>
                                        <div class="mt-2 text-xs text-menu line-clamp-1">
                                            Kebab, Air Putih, Teh Tarik
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div class="history-activity">
                                <div class="my-2 mr-2 text-sm">Kemarin</div>
                                <ul id="category-list" class="bg-white border border-gray-200 rounded-lg">
                                    <li class="flex flex-col p-4 cursor-pointer hover:bg-[#a91d3a] hover:text-white"
                                        data-invoice="#INV-1002"
                                        data-detail='{"paymentMethod":"Cash","invoiceNumber":"#INV-1002","timePay":"10:31","noTable":"13","orderType":"Dine Out","products":[{"name":"Americano","price":25000,"quantity":1,"image":"https://via.placeholder.com/50"},{"name":"Joshua","price":30000,"quantity":1,"image":"https://via.placeholder.com/50"},{"name":"Jasjus","price":15000,"quantity":1,"image":"https://via.placeholder.com/50"}],"subtotal":70000,"ppn":7000,"total":77000,"paid":80000,"change":3000}'>
                                        <div class="flex items-center justify-between">
                                            <div class="flex items-center gap-2">
                                                <i class='bx bx-food-menu'></i>
                                                <span class="font-medium hover:text-white">Rp. 89.000</span>
                                            </div>
                                            <span class="text-xs">10:31</span>
                                        </div>
                                        <div class="mt-2 text-xs text-menu line-clamp-1">
                                            Americano, Joshua, Jasjus
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div class="history-activity">
                                <div class="my-2 mr-2 text-sm">27 November 2024</div>
                                <ul id="category-list" class="bg-white border border-gray-200 rounded-lg">
                                    <li class="flex flex-col p-4 cursor-pointer hover:bg-[#a91d3a] hover:text-white"
                                        data-invoice="kwp-1003"
                                        data-detail='{"paymentMethod":"QRIS","invoiceNumber":"#INV-1003","timePay":"10:33","noTable":"16","orderType":"Dine In","products":[{"name":"Gula Aren","price":20000,"quantity":1,"image":"https://via.placeholder.com/50"},{"name":"Kentucky","price":40000,"quantity":1,"image":"https://via.placeholder.com/50"},{"name":"Spaghetti","price":25000,"quantity":1,"image":"https://via.placeholder.com/50"},{"name":"Dimsum","price":15000,"quantity":1,"image":"https://via.placeholder.com/50"}],"subtotal":100000,"ppn":10000,"total":110000,"paid":110000,"change":0}'>
                                        <div class="flex items-center justify-between">
                                            <div class="flex items-center gap-2">
                                                <i class='bx bx-food-menu'></i>
                                                <span class="font-medium hover:text-white">Rp. 102.000</span>
                                            </div>
                                            <span class="text-xs">10:33</span>
                                        </div>
                                        <div class="mt-2 text-xs text-menu line-clamp-1">
                                            Gula Aren, Kentucky, Spaghetti, Dimsum
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>

                    </div>
                    <div class="w-8/12 mx-auto">
                        <div class="sticky top-0">
                            <div class="flex items-center justify-between mb-6">
                                <div class="flex gap-4">
                                    <button
                                        class="flex items-center gap-2 px-4 py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600">
                                        <i class="bx bxs-send"></i> Kirim Struk
                                    </button>
                                    <button
                                        class="bg-[#a91d3a] text-white px-4 py-2 rounded-lg  flex items-center gap-2">
                                        <i class='bx bx-undo'></i> Refund
                                    </button>
                                </div>
                            </div>
                            <div id="detail-section" class="p-4 bg-white rounded-lg shadow-md">
                                <div id="detail-info" class="mb-6">
                                    <div class="flex items-center gap-2 text-lg">
                                        <i class="text-gray-700 bx bxs-info-circle"></i>
                                        <span>Detail</span>
                                    </div>
                                    <ul class="mt-2 space-y-2 text-gray-600">
                                        <li class="flex justify-between">
                                            <span>Metode Pembayaran:</span>
                                            <span id="payment-method">-</span>
                                        </li>
                                        <li class="flex justify-between">
                                            <span>Nomor Invoice:</span>
                                            <span id="invoice-number">-</span>
                                        </li>
                                        <li class="flex justify-between">
                                            <span>Waktu Pembayaran:</span>
                                            <span id="time-pay">-</span>
                                        </li>
                                    </ul>
                                </div>
                                <div class="flex items-center gap-2 mb-4 text-lg">
                                    <i class="text-gray-700 bx bxs-cart"></i>
                                    <span>Produk</span>
                                </div>
                                <div class="flex justify-between">
                                    <div class="text-xs font-bold bg-[#a91d3a] text-white mb-3 rounded-lg px-2 py-1"
                                        style="width: fit-content;" id="order-type">-</div>
                                    <div class="px-2 py-1 mb-3 text-xs font-bold text-white bg-black rounded-lg"
                                        style="width: fit-content;">Meja - <span id="no-table">0</span></div>
                                </div>
                                <div id="product-list" class="mb-6">
                                </div>
                                <div id="summary-section" class="mb-6">
                                    <div class="flex items-center gap-2 mb-4 text-lg">
                                        <i class="text-gray-700 bx bxs-credit-card"></i>
                                        <span>Pembayaran</span>
                                    </div>
                                    <div class="flex justify-between pt-4 border-t">
                                        <span class="font-semibold">Subtotal:</span>
                                        <span id="subtotal">Rp. 0.000</span>
                                    </div>
                                    <div class="flex justify-between pt-4 border-t">
                                        <span class="font-semibold">PPN (10%):</span>
                                        <span id="ppn">Rp. 0.000</span>
                                    </div>
                                    <div class="flex justify-between pt-4 text-xl border-t">
                                        <span class="font-bold">Total:</span>
                                        <span id="total">Rp. 0.000</span>
                                    </div>
                                    <div class="flex justify-between pt-4 border-t">
                                        <span class="font-semibold">Bayar:</span>
                                        <span id="paid">Rp. 0.000</span>
                                    </div>
                                    <div class="flex justify-between pt-4 border-t">
                                        <span class="font-semibold">Kembalian:</span>
                                        <span id="change">Rp. 0.000</span>
                                    </div>
                                </div>
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