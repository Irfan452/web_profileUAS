<?php
// Cek jika form disubmit
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nama = htmlspecialchars($_POST['nama']);
    $email = htmlspecialchars($_POST['email']);
    $pesan = htmlspecialchars($_POST['pesan']);
?>
<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <title>Hasil Form Kontak</title>
    <style>
        body {
            font-family: "Segoe UI", sans-serif;
            background: #f8f9fa;
            display: flex;
            align-items: center;
            justify-content: center;
            min-height: 100vh;
            margin: 0;
        }
        .result-container {
            background: white;
            padding: 2rem 3rem;
            border-radius: 10px;
            box-shadow: 0 3px 12px rgba(0, 0, 0, 0.1);
            max-width: 600px;
            width: 100%;
            text-align: center;
        }
        .result-container h2 {
            color: #3498db;
            margin-bottom: 1rem;
        }
        .result-container p {
            font-size: 1.1rem;
            margin: 0.5rem 0;
        }
        .result-container a {
            display: inline-block;
            margin-top: 2rem;
            padding: 0.6rem 1.2rem;
            background-color: #3498db;
            color: white;
            text-decoration: none;
            border-radius: 5px;
            transition: background 0.3s;
        }
        .result-container a:hover {
            background-color: #2980b9;
        }
    </style>
</head>
<body>
    <div class="result-container">
        <h2>Terima kasih, <?= $nama ?>!</h2>
        <p><strong>Email:</strong> <?= $email ?></p>
        <p><strong>Pesan Anda:</strong></p>
        <p><?= nl2br($pesan) ?></p>

        <a href="index.html#kontak">Kembali ke Kontak</a>
    </div>
</body>
</html>
<?php
} else {
    // Jika file diakses tanpa POST (langsung via URL)
    header("Location: index.html");
    exit();
}
?>
