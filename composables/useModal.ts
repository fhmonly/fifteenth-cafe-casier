import ModalActivityAddTable from "@/components/modal/activity-add-table.vue";
import ModalAddCustomer from "@/components/modal/add-customer.vue";
import ModalBill from "@/components/modal/bill.vue";
import ModalLogout from "@/components/modal/logout.vue";
import ModalPayment from "@/components/modal/payment.vue";
import ModalPOSLibraryAddItem from "@/components/modal/pos-library-add-item.vue";
import ModalPOSProductDetail from "@/components/modal/pos-product-detail.vue";
import ModalPOSProduct from "@/components/modal/pos-product.vue";
import Swal from "sweetalert2";

type ModalList = 'ModalActivityAddTable' | 'ModalAddCustomer' | 'ModalBill' | 'ModalLogout' | 'ModalPayment' | 'ModalPOSLibraryAddItem' | 'ModalPOSProductDetail' | 'ModalPOSProduct'


const modal: typeof Swal = Swal.mixin({
    allowEscapeKey: true,
    showConfirmButton: false
});

const toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer);
        toast.addEventListener('mouseleave', Swal.resumeTimer);
    },
});

function showModalActivityAddTable() {
    if (import.meta.server) return
    modal.fire({
        didRender(popup) {
            const [parent] = createVueApp({
                vueComponent: ModalActivityAddTable
            });
            popup.appendChild(parent);
        },
    }).then(result => {
        if (result.isConfirmed) {
            toast.fire({
                text: 'Berhasil menambahkan meja baru.'
            })
        }
    })
};
function showModalAddCustomer() {
    if (import.meta.server) return
    modal.fire({
        didRender(popup) {
            const [parent] = createVueApp({
                vueComponent: ModalAddCustomer
            });
            popup.appendChild(parent);
        },
    }).then(result => {
        if (result.isConfirmed) {
            toast.fire({
                text: 'Berhasil menambahkan pelanggan baru.'
            })
        }
    })
};
function showModalBill() {
    if (import.meta.server) return
    modal.fire({
        didRender(popup) {
            const [parent] = createVueApp({
                vueComponent: ModalBill
            });
            popup.appendChild(parent);
        },
    })
};
function showModalLogout() {
    if (import.meta.server) return
    modal.fire({
        didRender(popup) {
            const [parent] = createVueApp({
                vueComponent: ModalLogout
            });
            popup.appendChild(parent);
        },
    }).then(result => {
        if (result.isConfirmed) {
            toast.fire({
                text: 'Berhasil logout.'
            })
        }
    })
};
function showModalPayment() {
    if (import.meta.server) return
    modal.fire({
        didRender(popup) {
            const [parent] = createVueApp({
                vueComponent: ModalPayment
            });
            popup.appendChild(parent);
        },
    }).then(result => {
        if (result.isConfirmed) {
            toast.fire({
                text: 'Pembayaran berhasil.'
            })
        }
    })
};
function showModalPOSLibraryAddItem() {
    if (import.meta.server) return
    modal.fire({
        didRender(popup) {
            const [parent] = createVueApp({
                vueComponent: ModalPOSLibraryAddItem
            });
            popup.appendChild(parent);
        },
    }).then(result => {
        if (result.isConfirmed) {
            toast.fire({
                text: 'Pembayaran berhasil.'
            })
        }
    })
};
function showModalPOSProduct() {
    if (import.meta.server) return

    modal.fire({
        didRender(popup) {
            const [parent] = createVueApp({
                vueComponent: ModalPOSProduct
            });
            popup.appendChild(parent);
        },
    })
};
function showModalPOSProductDetail() {
    if (import.meta.server) return
    modal.fire({
        didRender(popup) {
            const [parent] = createVueApp({
                vueComponent: ModalPOSProductDetail
            });
            popup.appendChild(parent);
        },
    })
};

export function useModal() {
    return {
        showModalPOSProductDetail,
        showModalPOSProduct,
        showModalActivityAddTable,
        showModalAddCustomer,
        showModalBill,
        showModalLogout,
        showModalPOSLibraryAddItem,
        showModalPayment,
    }
}