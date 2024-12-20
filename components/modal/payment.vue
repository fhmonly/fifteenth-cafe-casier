<script setup>
import Swal from 'sweetalert2';

const paymentStep = ref('step-1');
</script>
<template>
    <div class="p-6 pb-2 bg-white rounded-lg">
        <!-- Title -->
        <h2 class="mb-4 text-xl font-bold text-center text-gray-800">Payment</h2>

        <!-- Member Selection -->
        <div class="relative mb-4" :class="{
            hidden: paymentStep !== 'step-1'
        }">
            <button onclick="toggleDropdown()"
                class="flex items-center justify-between w-full p-4 border rounded-lg shadow-sm cursor-pointer hover:bg-gray-100">
                <div class="flex items-center space-x-4">
                    <i class="text-3xl text-purple-500 bx bxs-user"></i>
                    <span class="font-medium text-gray-800">Pilih Member</span>
                </div>
                <i class="text-xl bx bx-chevron-down"></i>
            </button>

            <!-- Dropdown Menu -->
            <div id="emailDropdown"
                class="absolute left-0 right-0 z-10 hidden mt-2 bg-white border border-gray-200 rounded-lg shadow-lg">
                <!-- Search Box -->
                <div class="p-2">
                    <input type="text" id="searchEmail" placeholder="Cari email..." onkeyup="filterEmails()"
                        class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400" />
                </div>
                <!-- Email List -->
                <ul id="emailList" class="overflow-y-auto max-h-40">
                    <li class="p-4 cursor-pointer hover:bg-gray-100" onclick="selectEmail('user1@example.com')">
                        user1@example.com
                    </li>
                    <li class="p-4 cursor-pointer hover:bg-gray-100" onclick="selectEmail('user2@example.com')">
                        user2@example.com
                    </li>
                    <li class="p-4 cursor-pointer hover:bg-gray-100" onclick="selectEmail('user3@example.com')">
                        user3@example.com
                    </li>
                    <li class="p-4 cursor-pointer hover:bg-gray-100" onclick="selectEmail('user4@example.com')">
                        user4@example.com
                    </li>
                </ul>
            </div>
        </div>

        <div id="paymentSection" class="my-4" :class="{
            hidden: paymentStep !== 'step-2'
        }">
            <div class="space-y-4">
                <div class="flex items-center justify-between p-4 border rounded-lg shadow-sm cursor-pointer hover:bg-gray-100"
                    onclick="handlePayment('QRIS')">
                    <div class="flex items-center space-x-4">
                        <i class="text-3xl text-blue-500 bx bx-qr-scan"></i>
                        <span class="font-medium text-gray-800">Bayar dengan QRIS</span>
                    </div>
                </div>

                <div class="flex items-center justify-between p-4 border rounded-lg shadow-sm cursor-pointer hover:bg-gray-100"
                    onclick="handlePayment('Tunai')">
                    <div class="flex items-center space-x-4">
                        <i class="text-3xl text-green-500 bx bxs-wallet"></i>
                        <span class="font-medium text-gray-800">Bayar dengan Tunai</span>
                    </div>
                </div>
            </div>
        </div>

        <!-- Actions -->
        <div class="flex justify-between">
            <button @click="paymentStep = 'step-2'" class="bg-[#a91d3a] text-white px-4 py-2 rounded-lg shadow" :class="{
                hidden: paymentStep === 'step-2'
            }">Skip</button>
            <button @click="Swal.clickCancel()"
                class="px-4 py-2 text-white bg-gray-400 rounded-lg shadow">Close</button>
        </div>

        <!-- Payment Cards -->
    </div>
</template>