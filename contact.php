<?php
header('Content-Type: application/json; charset=utf-8');

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['ok' => false, 'error' => 'Method not allowed']);
    exit;
}

// ── Honeypot anti-spam (champ invisible rempli = bot)
if (!empty($_POST['website'])) {
    echo json_encode(['ok' => true]); // silencieux pour ne pas alerter le bot
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
$lang    = trim(strip_tags($_POST['lang']    ?? 'fr'));
if (!in_array($lang, ['fr', 'en'])) $lang = 'fr';

// Validation
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

$headers_base  = "MIME-Version: 1.0\r\n";
$headers_base .= "Content-Type: text/plain; charset=UTF-8\r\n";

// ─────────────────────────────────────────────
// 1. NOTIFICATION à Eric
// ─────────────────────────────────────────────
$to_eric    = 'eric@abcinfo.ch';
$subj_eric  = '=?UTF-8?B?' . base64_encode('[abcinfo.ch] ' . $sujet) . '?=';
$body_eric  = "Nouveau message depuis abcinfo.ch\n";
$body_eric .= "========================================\n\n";
$body_eric .= "Prénom    : $prenom\n";
$body_eric .= "Nom       : $nom\n";
$body_eric .= "Email     : $email\n";
if ($tel)     $body_eric .= "Téléphone : $tel\n";
if ($societe) $body_eric .= "Société   : $societe\n";
$body_eric .= "Sujet     : $sujet\n";
$body_eric .= "Langue    : " . strtoupper($lang) . "\n\n";
$body_eric .= "Message :\n$message\n";
$body_eric .= "\n— contact@abcinfo.ch\n";

$hdrs_eric  = "From: contact@abcinfo.ch\r\n";
$hdrs_eric .= "Reply-To: $email\r\n";
$hdrs_eric .= $headers_base;

mail($to_eric, $subj_eric, $body_eric, $hdrs_eric);

// ─────────────────────────────────────────────
// 2. CONFIRMATION à l'expéditeur (FR / EN)
// ─────────────────────────────────────────────
if ($lang === 'en') {
    $subj_confirm = '=?UTF-8?B?' . base64_encode('Thank you for your message — AbcInfo') . '?=';
    $body_confirm  = "Hello $prenom,\n\n";
    $body_confirm .= "Thank you for contacting AbcInfo. I have received your message and will get back to you as soon as possible, usually within 24 hours on business days.\n\n";
    $body_confirm .= "Summary of your request:\n";
    $body_confirm .= "────────────────────────────────\n";
    $body_confirm .= "Subject : $sujet\n";
    $body_confirm .= "Message : $message\n";
    $body_confirm .= "────────────────────────────────\n\n";
    $body_confirm .= "Best regards,\n";
    $body_confirm .= "Eric Miermon\n";
    $body_confirm .= "AbcInfo — IT Services, Geneva\n";
    $body_confirm .= "+41 22 320 56 00\n";
    $body_confirm .= "https://www.abcinfo.ch\n";
} else {
    $subj_confirm = '=?UTF-8?B?' . base64_encode('Merci pour votre message — AbcInfo') . '?=';
    $body_confirm  = "Bonjour $prenom,\n\n";
    $body_confirm .= "Merci de m'avoir contacté. J'ai bien reçu votre message et vous répondrai dans les meilleurs délais, généralement sous 24h les jours ouvrables.\n\n";
    $body_confirm .= "Récapitulatif de votre demande :\n";
    $body_confirm .= "────────────────────────────────\n";
    $body_confirm .= "Sujet   : $sujet\n";
    $body_confirm .= "Message : $message\n";
    $body_confirm .= "────────────────────────────────\n\n";
    $body_confirm .= "Cordialement,\n";
    $body_confirm .= "Eric Miermon\n";
    $body_confirm .= "AbcInfo — Service en informatique, Genève\n";
    $body_confirm .= "+41 22 320 56 00\n";
    $body_confirm .= "https://www.abcinfo.ch\n";
}

$hdrs_confirm  = "From: =?UTF-8?B?" . base64_encode('Eric Miermon — AbcInfo') . "?= <contact@abcinfo.ch>\r\n";
$hdrs_confirm .= "Reply-To: contact@abcinfo.ch\r\n";
$hdrs_confirm .= $headers_base;

mail($email, $subj_confirm, $body_confirm, $hdrs_confirm);

echo json_encode(['ok' => true]);
