const { defineConfig, devices } = require('@playwright/test');

module.exports = defineConfig({
  // Указываем, что тесты будут запускаться только в браузере Chromium
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] }, // Устанавливаем устройство Desktop Chrome
    },
  ],
  
  // Настройка отчетов
  reporter: [
    //['list'], // Стандартный консольный репортер
    ['allure-playwright'], // Allure репортер
  ],

  // Глобальные настройки использования
  use: {
    headless: true, // Запуск в безголовом режиме
    screenshot: 'only-on-failure', // Скриншоты только при ошибках
    video: 'retain-on-failure', // Видео только при ошибках
  },

  // Папка для хранения результатов Allure
  outputDir: 'allure-results',

  // Опционально: Настройки для запуска тестов
  testDir: './tests', // Директория с тестами
  timeout: 30000, // Таймаут для каждого теста (30 секунд)
  retries: 2, // Количество повторных попыток для каждого теста
});
