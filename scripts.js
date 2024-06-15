function openModal(modalId) {
    document.getElementById(modalId).style.display = "block";
}

function closeModal(modalId) {
    document.getElementById(modalId).style.display = "none";
    // Reset form on close
    document.getElementById("patientForm").reset();
    document.getElementById("confirmationMessage").innerText = "";
}

function submitForm() {
    // Simpan data dari form
    let nama = document.getElementById("nama").value;
    let umur = document.getElementById("umur").value;
    let alamat = document.getElementById("alamat").value;

    // Menampilkan konfirmasi
    let confirmationText = `Pendaftaran berhasil!\nNama: ${nama}\nUmur: ${umur}\nAlamat: ${alamat}`;
    document.getElementById("confirmationMessage").innerText = confirmationText;

    // Reset form setelah submit
    document.getElementById("patientForm").reset();
}

window.onclick = function(event) {
    let modals = document.getElementsByClassName('modal');
    for (let i = 0; i < modals.length; i++) {
        if (event.target == modals[i]) {
            modals[i].style.display = "none";
            document.getElementById("patientForm").reset();
            document.getElementById("confirmationMessage").innerText = "";
        }
    }
}
