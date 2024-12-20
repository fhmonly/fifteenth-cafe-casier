<template>
    <section id="content">
        <main id="main-content">
            <div id="dashboard" class="content-page">
                <h2 class="flex items-center gap-2 mb-6 text-2xl font-bold">
                    <i class="text-gray-700 bx bx-tachometer"></i>
                    Dashboard
                </h2>
                <div class="">
                    <!-- Stats Cards -->
                    <div class="grid grid-cols-2 gap-4 mb-6">
                        <!-- Jumlah Customer Hari Ini -->
                        <div class="flex items-center p-4 bg-blue-100 rounded-lg shadow">
                            <i class="mr-4 text-3xl text-blue-500 bx bxs-user"></i>
                            <div>
                                <p class="text-lg font-semibold">Customer Hari Ini</p>
                                <p class="text-xl font-bold">50</p>
                            </div>
                        </div>

                        <!-- Jumlah Customer Bulan Ini -->
                        <div class="flex items-center p-4 bg-green-100 rounded-lg shadow">
                            <i class="mr-4 text-3xl text-green-500 bx bxs-group"></i>
                            <div>
                                <p class="text-lg font-semibold">Customer Bulan Ini</p>
                                <p class="text-xl font-bold">1200</p>
                            </div>
                        </div>

                        <!-- Jumlah Produk Terjual Hari Ini -->
                        <div class="flex items-center p-4 bg-yellow-100 rounded-lg shadow">
                            <i class="mr-4 text-3xl text-yellow-500 bx bxs-shopping-bag"></i>
                            <div>
                                <p class="text-lg font-semibold">Produk Terjual Hari Ini</p>
                                <p class="text-xl font-bold">75</p>
                            </div>
                        </div>

                        <!-- Jumlah Produk Terjual Bulan Ini -->
                        <div class="flex items-center p-4 bg-red-100 rounded-lg shadow">
                            <i class="mr-4 text-3xl text-red-500 bx bxs-store"></i>
                            <div>
                                <p class="text-lg font-semibold">Produk Terjual Bulan Ini</p>
                                <p class="text-xl font-bold">2100</p>
                            </div>
                        </div>

                    </div>

                    <!-- Produk Terlaris -->
                    <div class="p-6 bg-white rounded-lg shadow">
                        <div class="flex justify-between">
                            <h3 class="flex items-center mb-4 text-xl font-semibold">
                                <i class="mr-2 text-2xl text-yellow-500 bx bxs-star"></i>
                                Produk Terlaris
                            </h3>
                            <div class="flex mb-4 space-x-4">
                                <select id="dateFilter" class="px-4 py-2 border border-gray-300 rounded">
                                    <option value="all">All Time</option>
                                    <option value="today">Hari Ini</option>
                                    <option value="7days">7 Hari Terakhir</option>
                                    <option value="1month">1 Bulan Terakhir</option>
                                </select>
                            </div>
                        </div>
                        <DataTable :columns="tables.bestSeller.columns" :data="tables.bestSeller.data"
                            :options="tables.bestSeller.options" class="" />
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
            <div class="flex w-full gap-2 navbar-items dashboard">
                <NuxtLink to="/dashboard" class="w-full py-2 text-center rounded-md shadow-md nav-item-bottom">
                    <i class="mx-auto bx bx-tachometer"></i> Dashboard
                </NuxtLink>
            </div>

            <input type="checkbox" id="switch-mode" hidden />
            <label for="switch-mode" class="switch-mode"></label>
        </nav>
    </section>
</template>
<script setup>
import DataTable from 'datatables.net-vue3';
import DataTablesCore from 'datatables.net-dt';
import 'datatables.net-dt/css/dataTables.dataTables.min.css';
DataTable.use(DataTablesCore);
const tables = {
    bestSeller: {
        options: {
            ordering: true,
        },
        columns: [
            { data: 'product', title: 'Produk' },
            { data: 'category', title: 'Category' },
            { data: 'item_sold', title: 'Jumlah Terjual' },
        ],
        "data": [
            { "product": "Americano", "category": "Coffee", "item_sold": 120 },
            { "product": "Teh Tarik", "category": "Tea", "item_sold": 100 },
            { "product": "Latte", "category": "Coffee", "item_sold": 95 },
            { "product": "Cappuccino", "category": "Coffee", "item_sold": 85 },
            { "product": "Espresso", "category": "Coffee", "item_sold": 80 },
            { "product": "Green Tea Latte", "category": "Tea", "item_sold": 75 },
            { "product": "Mocha", "category": "Coffee", "item_sold": 70 },
            { "product": "Matcha", "category": "Tea", "item_sold": 68 },
            { "product": "Flat White", "category": "Coffee", "item_sold": 65 },
            { "product": "Caramel Macchiato", "category": "Coffee", "item_sold": 62 },
            { "product": "Black Coffee", "category": "Coffee", "item_sold": 60 },
            { "product": "Vanilla Latte", "category": "Coffee", "item_sold": 55 },
            { "product": "Hazelnut Latte", "category": "Coffee", "item_sold": 50 },
            { "product": "Chai Tea Latte", "category": "Tea", "item_sold": 48 },
            { "product": "Affogato", "category": "Coffee", "item_sold": 45 },
            { "product": "Irish Coffee", "category": "Coffee", "item_sold": 40 },
            { "product": "Turkish Coffee", "category": "Coffee", "item_sold": 35 },
            { "product": "Ristretto", "category": "Coffee", "item_sold": 30 },
            { "product": "Frappe", "category": "Coffee", "item_sold": 28 },
            { "product": "Cold Brew", "category": "Coffee", "item_sold": 25 }
        ]
    }
};
</script>