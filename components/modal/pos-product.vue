<script setup>
import Swal from 'sweetalert2';
const { showModalPOSProductDetail } = useModal();
</script>

<template>
    <div class="bg-whiten rounded-lg p-5 max-h-[80vh]">
        <div class="flex justify-center pb-3 text-2xl font-bold text-main">
            Coffe
        </div>
        <div class="mb-4">
            <input type="text" id="searchInput" onkeyup="searchItems()" placeholder="Search products..."
                class="w-full px-4 py-2 border border-gray-300 rounded-sm" />
        </div>
        <div id="productList" class="space-y-4 overflow-y-auto">
            <div class="flex items-center justify-between p-4 shadow-md product-list"
                @click="showModalPOSProductDetail()">
                <div class="flex items-center">
                    <img alt="Image of a drink with straws" class="w-12 h-12 rounded-md" height="50"
                        src="https://storage.googleapis.com/a1aa/image/Gf1HfgQhe1b1eTq6NJMcINkPmc2iVHRnBE5TdqTnN9bmPsDPB.jpg"
                        width="50" />
                    <div class="ml-4">
                        <div class="font-bold">EsTebu</div>
                        <div class="">Jeruk Asli</div>
                    </div>
                </div>
                <div class="font-bold">Rp. 30.000</div>
            </div>
            <div class="flex items-center justify-between p-4 shadow-md product-list"
                @click="showModalPOSProductDetail()">
                <div class="flex items-center">
                    <img alt="Image of a drink with straws" class="w-12 h-12 rounded-md" height="50"
                        src="https://storage.googleapis.com/a1aa/image/Gf1HfgQhe1b1eTq6NJMcINkPmc2iVHRnBE5TdqTnN9bmPsDPB.jpg"
                        width="50" />
                    <div class="ml-4">
                        <div class="font-bold">blooao</div>
                        <div class="">Jeruk Asli</div>
                    </div>
                </div>
                <div class="font-bold">Rp. 30.000</div>
            </div>
            <div class="flex items-center justify-between p-4 shadow-md product-list"
                @click="showModalPOSProductDetail()">
                <div class="flex items-center">
                    <img alt="Image of a drink with straws" class="w-12 h-12 rounded-md" height="50"
                        src="https://storage.googleapis.com/a1aa/image/Gf1HfgQhe1b1eTq6NJMcINkPmc2iVHRnBE5TdqTnN9bmPsDPB.jpg"
                        width="50" />
                    <div class="ml-4">
                        <div class="font-bold">blooao</div>
                        <div class="">Jeruk Asli</div>
                    </div>
                </div>
                <div class="font-bold">Rp. 30.000</div>
            </div>
            <div class="flex items-center justify-between p-4 shadow-md product-list"
                onclick="showProductDetail('blooao', 'Jeruk Asli', 'Rp. 30.000', 'https://storage.googleapis.com/a1aa/image/Gf1HfgQhe1b1eTq6NJMcINkPmc2iVHRnBE5TdqTnN9bmPsDPB.jpg')">
                <div class="flex items-center">
                    <img alt="Image of a drink with straws" class="w-12 h-12 rounded-md" height="50"
                        src="https://storage.googleapis.com/a1aa/image/Gf1HfgQhe1b1eTq6NJMcINkPmc2iVHRnBE5TdqTnN9bmPsDPB.jpg"
                        width="50" />
                    <div class="ml-4">
                        <div class="font-bold">Hahah</div>
                        <div class="">Jeruk Asli</div>
                    </div>
                </div>
                <div class="font-bold">Rp. 30.000</div>
            </div>
        </div>
        <div class="flex justify-center close-btn">
            <button @click="Swal.clickCancel()" class="w-1/4 px-2 py-2 my-2 font-bold text-white rounded-sm bg-main">
                Tutup
            </button>
        </div>
    </div>
</template>