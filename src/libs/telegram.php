<?php

// Подключаем файл с обработчиком ошибок
error_reporting(E_ALL);
ini_set('display_errors', 1);

// Проверяем, включено ли расширение cURL
if (!function_exists('curl_version')) {
    die('cURL is not enabled on this server.');
}

// Получаем данные из формы с использованием nullish coalescing
$name = $_POST['user_name'] ?? '';
$phone = $_POST['user_tel'] ?? '';
$email = $_POST['user_email'] ?? '';
$message = $_POST['user_message'] ?? '';
$subject = $_POST['subject'] ?? ''; // Добавляем получение значения темы обращения
$token = "6359688222:AAEpMFCh3Qjq3Iyrhh4slhCPnHAb4ApYuGs"; // Замените на свой токен
$chat_id = "-1002032338886"; // Замените на свой chat_id

// Подготавливаем массив данных
$data = [
    '<strong>Тема: </strong>' => $subject,
    '<strong>Имя пользователя: </strong> ' => $name,
    '<strong>Email: </strong> ' => $email,
    '<strong>Телефон: </strong> ' => '+7 ' . $phone,
    '<strong>Сообщение: </strong> ' => $message,
];

// Формируем текст для отправки в Telegram
$text = '';
foreach ($data as $key => $value) {
    $text .= !empty($value) ? $key . $value . "%0A" : '';
}

// Формируем URL для запроса к API Telegram
$apiUrl = "https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$text}";

// Инициализируем cURL сессию
$ch = curl_init($apiUrl);
// Устанавливаем параметры запроса
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
// Выполняем запрос
$response = curl_exec($ch);
// Закрываем cURL сессию
curl_close($ch);

// Проверяем наличие ошибок
if(curl_errno($ch)) {
    echo 'cURL error: ' . curl_error($ch);
}

// Проверяем успешность выполнения запроса и выводим соответствующее сообщение
echo $response ? "Сообщение успешно отправлено в Telegram!" : "Ошибка при отправке в Telegram.";
?>