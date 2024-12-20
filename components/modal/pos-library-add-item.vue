<template>
    <div class="p-6 pb-2 bg-white rounded-lg">
        <h3 class="text-xl font-bold mb-4 text-[#a91d3a]">Add New Item</h3>
        <form id="addItemForm">
            <!-- Image -->
            <div class="mb-4">
                <label class="block text-gray-700">Image</label>
                <input type="file" id="itemImage"
                    class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none">
            </div>
            <!-- Name -->
            <div class="mb-4">
                <label class="block text-gray-700">Name</label>
                <input type="text" id="itemName"
                    class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none"
                    placeholder="Enter item name">
            </div>
            <!-- Price -->
            <div class="mb-4">
                <label class="block text-gray-700">Price</label>
                <input type="number" id="itemPrice"
                    class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none"
                    placeholder="Enter price">
            </div>
            <!-- Variants -->
            <div class="mb-4">
                <label class="block text-gray-700">Variants</label>
                <textarea id="itemVariants"
                    class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none"
                    placeholder="Enter variants separated by commas"></textarea>
            </div>
            <!-- Category Dropdown -->
            <div class="mb-4">
                <label class="block text-gray-700">Category</label>
                <select id="itemCategory" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none">
                    <option value="Coffee">Coffee</option>
                    <option value="Tea">Tea</option>
                </select>
            </div>
            <!-- Submit Button -->
            <div class="flex justify-end">
                <button type="button" onclick="closeAddModal()"
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