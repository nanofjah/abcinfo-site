<?php
header('Content-Type: application/json; charset=utf-8');
header('Access-Control-Allow-Origin: https://www.abcinfo.ch');

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['ok' => false, 'error' => 'Method not allowed']);
    exit;
}

// Récupération et nettoyage des champs
$prenom  = trim(strip_tags($_POST['prenom']  ?? ''));
$nom     = trim(strip_tags($_POST['nom']     ?? ''));
$email   = trim(strip_tags($_POST['email']   ?? ''));
$tel     = trim(strip_tags($_POST['telephone'] ?? ''));
$societe = trim(strip_tags($_POST['societe'] ?? ''));
$sujet   = trim(strip_tags($_POST['sujet']   ?? ''));
$message = trim(strip_tags($_POST['message'] ?? ''));

// Validation minimale
if (!$prenom || !$nom || !$email || !$sujet || !$message) {
    http_response_code(400);
    echo json_encode(['ok' => false, 'error' => 'Champs obligatoires manquants']);
    exit;
}
if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo json_encode(['ok' => false, 'error' => 'Email invalide']);
    exit;
}

// Destinataire
$to      = 'eric@abcinfo.ch';
$subject = '=?UTF-8?B?' . base64_encode('[abcinfo.ch] ' . $sujet) . '?=';

// Corps du mail
$body  = "Nouveau message depuis abcinfo.ch\n";
$body .= "========================================\n\n";
$body .= "Prénom   : $prenom\n";
$body .= "Nom      : $nom\n";
$body .= "Email    : $email\n";
if ($tel)     $body .= "Téléphone: $tel\n";
if ($societe) $body .= "Société  : $societe\n";
$body .= "Sujet    : $sujet\n\n";
$body .= "Message :\n$message\n";

// Headers
$headers  = "From: noreply@abcinfo.ch\r\n";
$headers .= "Reply-To: $email\r\n";
$headers .= "MIME-Version: 1.0\r\n";
$headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

if (mail($to, $subject, $body, $headers)) {
    echo json_encode(['ok' => true]);
} else {
    http_response_code(500);
    echo json_encode(['ok' => false, 'error' => 'Erreur envoi mail']);
}
