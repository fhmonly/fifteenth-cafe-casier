<template>
    <div class="p-6 pb-2 bg-white rounded-lg">
        <h3 class="text-xl font-bold mb-4 text-[#a91d3a]">Add New Table</h3>
        <form id="addItemForm" @submit="(event) => {
            event.preventDefault()
            Swal.clickConfirm()
        }">
            <div class="mb-4">
                <label class="block text-gray-700">No Table</label>
                <input type="number" id="noTable"
                    class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none"
                    placeholder="Enter Number" />
            </div>
            <!-- Submit Button -->
            <div class="flex justify-end">
                <button type="button" @click="Swal.clickCancel()"
                    class="px-4 py-2 mr-2 text-white bg-black rounded-lg hover:bg-gray-500">
                    Cancel
                </button>
                <button type="submit" class="px-4 py-2 bg-[#a91d3a] text-white rounded-lg">
                    Save
                </button>
            </div>
        </form>
    </div>
</template>
<script setup>
import Swal from 'sweetalert2';
</script>