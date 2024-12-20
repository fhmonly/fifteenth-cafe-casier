<script setup>
import Swal from 'sweetalert2';
</script>

<template>
    <div class="p-6 pb-2 text-center bg-white rounded-lg">
        <h2 class="mb-4 text-xl font-bold">Halo, Nama User</h2>
        <p class="mb-4">Apakah Anda yakin ingin logout?</p>
        <div class="flex justify-center gap-4">
            <!-- Logout Button -->
            <button class="bg-[#a91d3a] text-white px-4 py-2 rounded-lg flex items-center gap-2"
                @click="Swal.clickConfirm()">
                <i class="bx bxs-log-out-circle"></i>
                Logout
            </button>
            <!-- Cancel Button -->
            <button class="flex items-center gap-2 px-4 py-2 text-black bg-gray-300 rounded-lg hover:bg-gray-400"
                @click="Swal.clickCancel()">
                <i class="bx bxs-x-circle"></i>
                Batal
            </button>
        </div>
    </div>
</template>