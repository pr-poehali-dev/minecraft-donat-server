import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const Index = () => {
  const donationKits = [
    {
      id: 1,
      name: "Фан",
      price: 9,
      color: "bg-green-100 border-green-300",
      buttonColor: "bg-green-600 hover:bg-green-700",
      features: ["Базовый кит", "Стартовые предметы"],
      icon: "Sword",
    },
    {
      id: 2,
      name: "Император",
      price: 29,
      color: "bg-yellow-100 border-yellow-400",
      buttonColor: "bg-yellow-600 hover:bg-yellow-700",
      features: ["Кит императора", "Флай", "Особые предметы"],
      icon: "Crown",
    },
    {
      id: 3,
      name: "Кобра",
      price: 59,
      color: "bg-orange-100 border-orange-400",
      buttonColor: "bg-orange-600 hover:bg-orange-700",
      features: ["Кит кобры", "Флай", "ТП на ивенты", "Редкие предметы"],
      icon: "Zap",
    },
    {
      id: 4,
      name: "Хидра",
      price: 99,
      color: "bg-red-100 border-red-400",
      buttonColor: "bg-red-600 hover:bg-red-700",
      features: [
        "Кит хидры",
        "Флай",
        "ТП на ивенты",
        "Выдача доната фан",
        "Уникальные предметы",
      ],
      icon: "Flame",
    },
  ];

  const services = [
    {
      name: "Разбан",
      price: 399,
      description: "Снятие блокировки аккаунта",
      icon: "Shield",
    },
    {
      name: "Размут",
      price: 19,
      description: "Снятие мута в чате",
      icon: "MessageCircle",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-green-100">
      {/* Header */}
      <header className="bg-green-800 text-white shadow-lg">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center">
                <Icon name="Blocks" size={24} className="text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold">MineCraft Сервер</h1>
                <p className="text-green-200">Лучший сервер для выживания</p>
              </div>
            </div>
            <nav className="hidden md:flex space-x-6">
              <a
                href="#home"
                className="hover:text-green-200 transition-colors"
              >
                Главная
              </a>
              <a
                href="#donate"
                className="hover:text-green-200 transition-colors"
              >
                Донат
              </a>
              <a
                href="#rules"
                className="hover:text-green-200 transition-colors"
              >
                Правила
              </a>
              <a
                href="#contacts"
                className="hover:text-green-200 transition-colors"
              >
                Контакты
              </a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="py-20 text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-5xl font-bold text-green-800 mb-6">
            🎮 Добро пожаловать на наш сервер!
          </h2>
          <p className="text-xl text-green-700 mb-8 max-w-2xl mx-auto">
            Присоединяйтесь к лучшему Minecraft серверу! Выживание, приключения
            и множество возможностей ждут вас.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <div className="bg-green-800 text-white px-6 py-3 rounded-lg font-mono text-lg">
              📱 IP: launcherlol.aternos.me
            </div>
            <Button size="lg" className="bg-green-600 hover:bg-green-700">
              <Icon name="Play" size={20} className="mr-2" />
              Начать играть
            </Button>
          </div>
        </div>
      </section>

      {/* Donation Kits */}
      <section id="donate" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-green-800 mb-12">
            💎 Донат-киты
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {donationKits.map((kit) => (
              <Card
                key={kit.id}
                className={`${kit.color} border-2 hover:shadow-lg transition-all duration-300 hover:scale-105`}
              >
                <CardHeader className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 bg-white rounded-full flex items-center justify-center">
                    <Icon
                      name={kit.icon}
                      size={32}
                      className="text-green-600"
                    />
                  </div>
                  <CardTitle className="text-2xl font-bold text-green-800">
                    {kit.name}
                  </CardTitle>
                  <div className="text-3xl font-bold text-green-900">
                    {kit.price}₽
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    {kit.features.map((feature, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <Icon
                          name="Check"
                          size={16}
                          className="text-green-600"
                        />
                        <span className="text-sm text-green-700">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                  <Button
                    className={`w-full ${kit.buttonColor} text-white font-bold py-2 px-4 rounded-lg transition-colors`}
                  >
                    Купить
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 bg-green-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-green-800 mb-12">
            🛠️ Дополнительные услуги
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {services.map((service, index) => (
              <Card
                key={index}
                className="border-2 border-green-200 hover:shadow-lg transition-all duration-300"
              >
                <CardHeader className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 bg-green-100 rounded-full flex items-center justify-center">
                    <Icon
                      name={service.icon}
                      size={32}
                      className="text-green-600"
                    />
                  </div>
                  <CardTitle className="text-2xl font-bold text-green-800">
                    {service.name}
                  </CardTitle>
                  <div className="text-3xl font-bold text-green-900">
                    {service.price}₽
                  </div>
                </CardHeader>
                <CardContent className="text-center space-y-4">
                  <p className="text-green-700">{service.description}</p>
                  <Button className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-lg">
                    Заказать
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-green-800 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">
            📊 Статистика сервера
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-green-200">1,250+</div>
              <div className="text-lg">Активных игроков</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-200">24/7</div>
              <div className="text-lg">Онлайн без лагов</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-200">5★</div>
              <div className="text-lg">Рейтинг игроков</div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-green-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">MineCraft Сервер</h3>
              <p className="text-green-200">
                Лучший сервер для выживания с дружелюбным сообществом.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Навигация</h4>
              <ul className="space-y-2 text-green-200">
                <li>
                  <a href="#home" className="hover:text-white">
                    Главная
                  </a>
                </li>
                <li>
                  <a href="#donate" className="hover:text-white">
                    Донат
                  </a>
                </li>
                <li>
                  <a href="#rules" className="hover:text-white">
                    Правила
                  </a>
                </li>
                <li>
                  <a href="#contacts" className="hover:text-white">
                    Контакты
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Контакты</h4>
              <div className="space-y-2 text-green-200">
                <p>📧 admin@mcserver.ru</p>
                <p>💬 Discord: MineCraft#1234</p>
                <p>📱 VK: vk.com/mcserver</p>
              </div>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Подключение</h4>
              <div className="bg-green-800 p-4 rounded-lg">
                <p className="text-sm text-green-200 mb-2">IP адрес сервера:</p>
                <p className="font-mono text-white">launcherlol.aternos.me</p>
              </div>
            </div>
          </div>
          <div className="border-t border-green-800 mt-8 pt-8 text-center text-green-200">
            <p>&copy; 2024 MineCraft Сервер. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
