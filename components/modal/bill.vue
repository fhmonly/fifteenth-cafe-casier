<script setup>
import Swal from 'sweetalert2';


</script>
<template>
    <div class="p-6 pb-2 rounded-lg bg-whiten">
        <!-- Title -->
        <h2 class="text-center text-2xl font-bold mb-4 text-[#a91d3a]">Daftar Bill</h2>

        <!-- Tabs Navigation -->

        <div class="flex mb-4 border-t border-b border-gray-300">
            <button
                class="flex-1 text-center py-2 hover:bg-[#a91d3a] hover:text-white font-bold focus:outline-none active-tab"
                onclick="switchTab('openBill')">
                Open Bill
            </button>
            <button class="flex-1 text-center py-2 hover:bg-[#a91d3a] hover:text-white font-bold focus:outline-none"
                onclick="switchTab('cancelBill')">
                Pembatalan Bill
            </button>
        </div>

        <!-- Tabs Content -->
        <div id="tabContent">
            <!-- Open Bill Tab -->
            <div id="openBill" class="tab-pane">
                <!-- Search Bar -->
                <div class="mb-4">
                    <input type="text" id="searchBill" oninput="filterBills()" placeholder="Cari Bill..."
                        class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring focus:ring-blue-200" />
                </div>

                <!-- Table -->
                <div class="overflow-y-auto max-h-48">
                    <table class="w-full text-left border-collapse ">
                        <thead>
                            <tr class="text-center bg-gray-100 border-b">
                                <th class="p-2">Nama</th>
                                <th class="p-2">No Meja</th>
                                <th class="p-2">Pelayan</th>
                                <th class="p-2">Jam Tanggal</th>
                                <th class="p-2">Status</th>
                            </tr>
                        </thead>
                        <tbody id="billTable">
                            <!-- Sample Rows -->
                            <tr class="text-center border-b hover:bg-gray-50">
                                <td class="p-2">Budi</td>
                                <td class="p-2">12</td>
                                <td class="p-2">Ani</td>
                                <td class="p-2">2024-12-01 14:00</td>
                                <td class="p-2 ">
                                    <button class="px-4 py-1 text-white bg-green-500 rounded-lg hover:bg-green-600"
                                        onclick="payModal()">
                                        Bayar
                                    </button>
                                    <button class="px-4 py-1 text-white bg-red-500 rounded-lg hover:bg-red-600">
                                        Batal
                                    </button>
                                </td>
                            </tr>
                            <tr class="text-center border-b hover:bg-gray-50">
                                <td class="p-2">Budi</td>
                                <td class="p-2">12</td>
                                <td class="p-2">Ani</td>
                                <td class="p-2">2024-12-01 14:00</td>
                                <td class="p-2 ">
                                    <button class="px-4 py-1 text-white bg-green-500 rounded-lg hover:bg-green-600"
                                        onclick="payModal()">
                                        Bayar
                                    </button>
                                    <button class="px-4 py-1 text-white bg-red-500 rounded-lg hover:bg-red-600">
                                        Batal
                                    </button>
                                </td>
                            </tr>
                            <tr class="text-center border-b hover:bg-gray-50">
                                <td class="p-2">Budi</td>
                                <td class="p-2">12</td>
                                <td class="p-2">Ani</td>
                                <td class="p-2">2024-12-01 14:00</td>
                                <td class="p-2 ">
                                    <button class="px-4 py-1 text-white bg-green-500 rounded-lg hover:bg-green-600"
                                        onclick="payModal()">
                                        Bayar
                                    </button>
                                    <button class="px-4 py-1 text-white bg-red-500 rounded-lg hover:bg-red-600">
                                        Batal
                                    </button>
                                </td>
                            </tr>
                            <tr class="text-center border-b hover:bg-gray-50">
                                <td class="p-2">Budi</td>
                                <td class="p-2">12</td>
                                <td class="p-2">Ani</td>
                                <td class="p-2">2024-12-01 14:00</td>
                                <td class="p-2 ">
                                    <button class="px-4 py-1 text-white bg-green-500 rounded-lg hover:bg-green-600"
                                        onclick="payModal()">
                                        Bayar
                                    </button>
                                    <button class="px-4 py-1 text-white bg-red-500 rounded-lg hover:bg-red-600">
                                        Batal
                                    </button>
                                </td>
                            </tr>
                            <tr class="text-center border-b hover:bg-gray-50">
                                <td class="p-2">Budi</td>
                                <td class="p-2">12</td>
                                <td class="p-2">Ani</td>
                                <td class="p-2">2024-12-01 14:00</td>
                                <td class="p-2 ">
                                    <button class="px-4 py-1 text-white bg-green-500 rounded-lg hover:bg-green-600"
                                        onclick="payModal()">
                                        Bayar
                                    </button>
                                    <button class="px-4 py-1 text-white bg-red-500 rounded-lg hover:bg-red-600">
                                        Batal
                                    </button>
                                </td>
                            </tr>
                            <tr class="text-center border-b hover:bg-gray-50">
                                <td class="p-2">Siti</td>
                                <td class="p-2">5</td>
                                <td class="p-2">Bambang</td>
                                <td class="p-2">2024-12-01 13:30</td>
                                <td class="p-2 ">
                                    <i class="text-2xl text-green-600 bx bx-check"></i>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

            <!-- Pembatalan Bill Tab -->
            <div id="cancelBill" class="hidden tab-pane">
                <div class="overflow-y-auto max-h-48">
                    <table class="w-full text-left border-collapse ">
                        <thead>
                            <tr class="text-center bg-gray-100 border-b">
                                <th class="p-2">Nama</th>
                                <th class="p-2">No Meja</th>
                                <th class="p-2">Pelayan</th>
                                <th class="p-2">Jam Tanggal</th>
                                <th class="p-2">Status</th>
                            </tr>
                        </thead>
                        <tbody id="billTable">
                            <!-- Sample Rows -->
                            <tr class="text-center border-b hover:bg-gray-50">
                                <td class="p-2">Budi</td>
                                <td class="p-2">12</td>
                                <td class="p-2">Ani</td>
                                <td class="p-2">2024-12-01 14:00</td>
                                <td class="p-2 ">
                                    <i class="text-2xl text-red-600 bx bx-x"></i>
                                </td>
                            </tr>
                            <tr class="text-center border-b hover:bg-gray-50">
                                <td class="p-2">Budi</td>
                                <td class="p-2">12</td>
                                <td class="p-2">Ani</td>
                                <td class="p-2">2024-12-01 14:00</td>
                                <td class="p-2 ">
                                    <i class="text-2xl text-red-600 bx bx-x"></i>
                                </td>
                            </tr>
                            <tr class="text-center border-b hover:bg-gray-50">
                                <td class="p-2">Budi</td>
                                <td class="p-2">12</td>
                                <td class="p-2">Ani</td>
                                <td class="p-2">2024-12-01 14:00</td>
                                <td class="p-2 ">
                                    <i class="text-2xl text-red-600 bx bx-x"></i>
                                </td>
                            </tr>
                            <tr class="text-center border-b hover:bg-gray-50">
                                <td class="p-2">Budi</td>
                                <td class="p-2">12</td>
                                <td class="p-2">Ani</td>
                                <td class="p-2">2024-12-01 14:00</td>
                                <td class="p-2 ">
                                    <i class="text-2xl text-red-600 bx bx-x"></i>
                                </td>
                            </tr>
                            <tr class="text-center border-b hover:bg-gray-50">
                                <td class="p-2">Budi</td>
                                <td class="p-2">12</td>
                                <td class="p-2">Ani</td>
                                <td class="p-2">2024-12-01 14:00</td>
                                <td class="p-2 ">
                                    <i class="text-2xl text-red-600 bx bx-x"></i>
                                </td>
                            </tr>
                            <tr class="text-center border-b hover:bg-gray-50">
                                <td class="p-2">Siti</td>
                                <td class="p-2">5</td>
                                <td class="p-2">Bambang</td>
                                <td class="p-2">2024-12-01 13:30</td>
                                <td class="p-2 ">
                                    <i class="text-2xl text-red-600 bx bx-x"></i>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

        </div>

        <!-- Close Button -->
        <div class="flex justify-center">
            <button @click="Swal.clickCancel()" class="mt-4 w-2/12 bg-[#a91d3a] text-white px-4 py-2 rounded-lg">
                Close
            </button>
        </div>
    </div>
</template>