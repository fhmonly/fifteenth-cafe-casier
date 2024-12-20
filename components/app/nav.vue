<script setup>
const route = useRoute();
const sidebar = useAppSidebarState();
const { showModalLogout } = useModal()

function isRouteActive(path) {
    return route.path.startsWith(path);
};
</script>
<template>
    <aside id="sidebar" class="flex flex-col" :class="{
        show: sidebar === 'show'
    }">
        <NuxtLink to="/dashboard" class="brand">
            <i class="bx bxs-store"></i>
            <span class="text">Fifteen Cafe</span>
        </NuxtLink>
        <ul class="side-menu top grow">
            <li :class="{ active: isRouteActive('/dashboard') }">
                <NuxtLink to="/dashboard">
                    <i class='bx bx-tachometer'></i>
                    <span class="text">Dashboard</span>
                </NuxtLink>
            </li>
            <li :class="{ active: isRouteActive('/point-of-sale') }">
                <NuxtLink to="/point-of-sale">
                    <i class="bx bxs-dashboard"></i>
                    <span class="text">Point Of Sale</span>
                </NuxtLink>
            </li>
            <li :class="{ active: isRouteActive('/today') }">
                <NuxtLink to="/today">
                    <i class="bx bxs-doughnut-chart"></i>
                    <span class="text">Aktivitas</span>
                </NuxtLink>
            </li>
        </ul>
        <ul class="mb-4 side-menu down-side">
            <li>
                <NuxtLink to="/settings" style="background: transparent">
                    <i class="bx bxs-cog"></i>
                    <span class="text">Settings</span>
                </NuxtLink>
            </li>
            <li>
                <!-- Logout Button -->
                <a href="javascript:void(0)" class="logout" @click="showModalLogout()">
                    <i class="bx bxs-log-out-circle"></i>
                    <span class="text">Logout</span>
                </a>
            </li>
        </ul>
    </aside>
</template>
<style>
/* SIDEBAR */
#sidebar {
    position: fixed;
    top: 0;
    left: 0;
    height: 100%;
    background: var(--light);
    z-index: 1000;
    font-family: var(--lato);
    transition: 0.3s ease;
    overflow-x: hidden;
    scrollbar-width: none;
    width: 60px;
}

#sidebar::--webkit-scrollbar {
    display: none;
}

@media screen and (min-width: 760px) {
    #sidebar.show {
        width: 280px;
    }
}

#sidebar .brand {
    font-size: 24px;
    font-weight: 700;
    height: 56px;
    display: flex;
    align-items: center;
    color: var(--main);
    position: sticky;
    top: 0;
    left: 0;
    background: var(--light);
    z-index: 500;
    padding-bottom: 20px;
    box-sizing: content-box;
}

#sidebar .brand .bx {
    min-width: 60px;
    display: flex;
    justify-content: center;
}

#sidebar .side-menu {
    width: 100%;
    margin-top: 48px;
}

#sidebar .side-menu li {
    height: 48px;
    background: transparent;
    margin-left: 6px;
    border-radius: 48px 0 0 48px;
    padding: 4px;
}

#sidebar .side-menu li.active {
    background: var(--grey);
    position: relative;
}

#sidebar .side-menu li.active::before {
    content: "";
    position: absolute;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    top: -40px;
    right: 0;
    box-shadow: 20px 20px 0 var(--grey);
    z-index: -1;
}

#sidebar .side-menu li.active::after {
    content: "";
    position: absolute;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    bottom: -40px;
    right: 0;
    box-shadow: 20px -20px 0 var(--grey);
    z-index: -1;
}

#sidebar .side-menu li a {
    height: 100%;
    background: var(--light);
    display: flex;
    align-items: center;
    border-radius: 48px;
    font-size: 16px;
    color: var(--dark);
    white-space: nowrap;
    overflow-x: hidden;
    width: calc(48px - (4px * 2));
    transition: width 0.3s ease;
}

#sidebar .side-menu.top li.active a {
    color: var(--main);
}

@media screen and (min-width: 760px) {
    #sidebar.show .side-menu li a {
        width: 100%;
    }
}

#sidebar .side-menu li a.logout {
    color: var(--red);
}

#sidebar .side-menu.top li a:hover {
    color: var(--main);
}

#sidebar .side-menu li a .bx {
    min-width: calc(60px - ((4px + 6px) * 2));
    display: flex;
    justify-content: center;
}

/* SIDEBAR */
</style>