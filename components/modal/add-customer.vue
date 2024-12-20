<template>
    <div class="p-6 pb-2 bg-white rounded-lg">
        <h2 class="mb-4 text-xl font-bold text-center">Tambah Pelanggan</h2>
        <form id="addCustomerForm" @submit="(event) => {
            event.preventDefault()
            Swal.clickConfirm()
        }">
            <!-- Nama -->
            <div class="mb-4">
                <label class="block text-gray-700">Nama</label>
                <input type="text" id="customerName"
                    class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none"
                    placeholder="Masukkan nama" />
            </div>
            <!-- No Telpon -->
            <div class="mb-4">
                <label class="block text-gray-700">No Telpon</label>
                <input type="text" id="customerPhone"
                    class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none"
                    placeholder="Masukkan no telpon" />
            </div>
            <!-- Alamat -->
            <div class="mb-4">
                <label class="block text-gray-700">Alamat</label>
                <textarea id="customerAddress"
                    class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none"
                    placeholder="Masukkan alamat"></textarea>
            </div>
            <!-- Buttons -->
            <div class="flex justify-end">
                <button type="button" @click="Swal.clickCancel()"
                    class="px-4 py-2 mr-2 text-white bg-gray-400 rounded-lg hover:bg-gray-500">
                    Batal
                </button>
                <button type="submit" class="px-4 py-2 bg-[#a91d3a] text-white rounded-lg hover:bg-blue-600">
                    Simpan
                </button>
            </div>
        </form>
    </div>
</template>
<script setup>
import Swal from 'sweetalert2';


</script>