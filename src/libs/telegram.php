<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);

if (!function_exists('curl_version')) {
    die('cURL is not enabled on this server.');
}

$name = $_POST['user_name'] ?? '';
$phone = $_POST['user_tel'] ?? '';
$email = $_POST['user_email'] ?? '';
$message = $_POST['user_message'] ?? '';
$subject = $_POST['subject'] ?? '';
$token = "6359688222:AAEpMFCh3Qjq3Iyrhh4slhCPnHAb4ApYuGs";  // Замените на свой токен
$chat_id = "-1002032338886";  // Замените на свой chat_id

$data = [
    '<b>Тема: </b>' => $subject,
    '<b>Имя пользователя: </b> ' => $name,
    '<b>Email: </b> ' => $email,
    '<b>Телефон: </b> ' => '+7 ' . $phone,
    '<b>Сообщение: </b> ' => $message,
];

$text = '';
foreach ($data as $key => $value) {
    $text .= !empty($value) ? $key . $value . "\n" : '';
}

$apiUrl = "https://api.telegram.org/bot{$token}/sendMessage";

$postData = [
    'chat_id' => $chat_id,
    'parse_mode' => 'html',
    'text' => $text,
];

$ch = curl_init();  // Инициализируем cURL сессию

curl_setopt($ch, CURLOPT_URL, $apiUrl);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_POST, true);
curl_setopt($ch, CURLOPT_POSTFIELDS, $postData);

$response = curl_exec($ch);

if (curl_errno($ch)) {
    echo 'cURL error: ' . curl_error($ch);
}

curl_close($ch);

echo $response ? "Сообщение успешно отправлено в Telegram!" : "Ошибка при отправке в Telegram.";
?>
