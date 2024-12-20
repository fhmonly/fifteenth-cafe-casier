<template>
    <section id="content">
        <main id="main-content">
            <div id="settings" class="p-6 bg-white rounded-md content-page">
                <h2 class="flex items-center gap-2 mb-6 text-2xl font-bold">
                    <i class="text-gray-700 bx bxs-cog"></i>
                    Settings
                </h2>
                <div class="bg-white ">
                    <!-- Profil Picture -->
                    <div class="flex items-center gap-4 mb-6">
                        <i class="text-2xl text-gray-700 bx bxs-camera"></i>
                        <div class="w-full">

                            <!-- Preview Gambar Bundar -->
                            <div class="w-24 h-24 mb-4 overflow-hidden rounded-full">
                                <img id="profilePreview" src="https://via.placeholder.com/96" alt="Profile Preview"
                                    class="object-cover w-full h-full" />
                            </div>
                            <!-- Input File -->
                            <input type="file" id="profilePicture"
                                class="w-full px-4 py-2 border border-gray-300 rounded-lg file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:bg-blue-500 file:text-white"
                                accept="image/*" onchange="previewProfilePicture(event)" />
                        </div>
                    </div>

                    <!-- Nama -->
                    <div class="flex items-center gap-4 mb-4">
                        <i class="text-2xl text-gray-700 bx bxs-user-circle"></i>
                        <div class="w-full">
                            <label for="name" class="block mb-1 font-semibold text-gray-600">Nama</label>
                            <input type="text" id="name" class="w-full px-4 py-2 border border-gray-300 rounded-lg"
                                value="Nama User" />
                        </div>
                    </div>

                    <!-- Email -->
                    <div class="flex items-center gap-4 mb-4">
                        <i class="text-2xl text-gray-700 bx bxs-envelope"></i>
                        <div class="w-full">
                            <label for="email" class="block mb-1 font-semibold text-gray-600">Email</label>
                            <input type="email" id="email" class="w-full px-4 py-2 border border-gray-300 rounded-lg"
                                value="user@example.com" />
                        </div>
                    </div>

                    <!-- Alamat -->
                    <div class="flex items-center gap-4 mb-4">
                        <i class="text-2xl text-gray-700 bx bxs-map"></i>
                        <div class="w-full">
                            <label for="address" class="block mb-1 font-semibold text-gray-600">Alamat</label>
                            <input type="text" id="address" class="w-full px-4 py-2 border border-gray-300 rounded-lg"
                                value="Jl. Contoh Alamat No. 1" />
                        </div>
                    </div>

                    <!-- Outlet -->
                    <div class="flex items-center gap-4 mb-6">
                        <i class="text-2xl text-gray-700 bx bxs-store"></i>
                        <div class="w-full">
                            <label for="outlet" class="block mb-1 font-semibold text-gray-600">Outlet</label>
                            <select id="outlet" class="w-full px-4 py-2 border border-gray-300 rounded-lg">
                                <option selected>Outlet 1</option>
                                <option>Outlet 2</option>
                                <option>Outlet 3</option>
                            </select>
                        </div>
                    </div>

                    <!-- Jam Live -->
                    <div class="flex items-center gap-4 mb-4">
                        <i class="text-2xl text-gray-700 bx bxs-time"></i>
                        <div class="w-full">
                            <label class="block mb-1 font-semibold text-gray-600">Jam Live</label>
                            <p id="liveClock" class="text-lg font-bold text-blue-600">00:00:00</p>
                        </div>
                    </div>
                </div>
            </div>
        </main>
        <nav>
            <button class="h-full aspect-square" @click="() => {
                useAppSidebarState().value = useAppSidebarState().value === 'show' ? 'hide' : 'show'
            }">
                <button @click="() => {
                    useAppSidebarState().value = useAppSidebarState().value === 'show' ? 'hide' : 'show'
                }">
                    <i class="bx bx-menu"></i>
                </button>
            </button>

            <div class="flex w-full gap-2 navbar-items settings">
                <NuxtLink to="/settings" class="w-full py-2 text-center rounded-md shadow-md nav-item-bottom">
                    <i class='bx bx-cog'></i> Settings
                </NuxtLink>
            </div>

            <input type="checkbox" id="switch-mode" hidden />
            <label for="switch-mode" class="switch-mode"></label>
        </nav>
    </section>
</template>
<script setup>
onMounted(() => {
    function updateClock() {
        const now = new Date();
        const hours = String(now.getHours()).padStart(2, '0');
        const minutes = String(now.getMinutes()).padStart(2, '0');
        const seconds = String(now.getSeconds()).padStart(2, '0');
        document.getElementById('liveClock').textContent = `${hours}:${minutes}:${seconds}`;
    }
    setInterval(updateClock, 1000);
    updateClock();
});
</script>