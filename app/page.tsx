"use client";
import Head from 'next/head';
import type React from "react";

import {useState} from "react";
import Image from "next/image";
import {Button} from "@/components/ui/button";
import {Card, CardContent} from "@/components/ui/card";
import {Input} from "@/components/ui/input";
import {Label} from "@/components/ui/label";
import {Textarea} from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Phone,
  Mail,
  MapPin,
  Globe,
  Award,
  Factory,
  Truck,
  Shield,
  MessageCircle,
  ChevronRight,
  Users,
  Star,
  CheckCircle,
} from "lucide-react";


const languages = {
  uz: {
    nav: {
      home: "Bosh sahifa",
      about: "Biz haqimizda",
      products: "Mahsulotlar",
      contact: "Aloqa",
    },
    hero: {
      title1: "OSON VA QULAY",
      title2: "TOZALASH USULI",
      subtitle:
        "TozaLoo - uy va ofislar uchun mo'ljallangan yuqori sifatli tozalash vositalari ishlab chiqaruvchisi. Barcha tozalash ehtiyojlaringiz uchun ishonchli yechim.",
      cta: "Katalogni ko'rish",
      contact: "Aloqa",
    },
    seoContent: {
      title:
        "Professional Pol Lattalari Ishlab Chiqaruvchi - Sizning Ishonchli Hamkoringiz!",
      description:
        "Yuqori sifatli pol lattalari kerakmi? TozaLoo bilan tanishing - Toshkent shahridagi yetakchi ishlab chiqaruvchi!",
    },
    about: {
      title: "Biz Haqimizda",
      subtitle:
        "Toshkent shahrida joylashgan pol lattalar ishlab chiqarish va eksport yetakchisi",
      experience: "Yillik Tajriba",
      clients: "Mamnun Mijozlar",
      products: "Mahsulot Turlari",
      countries: "Eksport Mamlakatlari",
      content: {
        quality: "Yuqori Sifat Kafolati",
        qualityDesc:
          "Barcha pol latalarimiz xalqaro standartlarga javob beradi va eng yuqori sifat talablariga mos keladi.",
        innovation: "Innovatsion Yechimlar",
        innovationDesc:
          "Zamonaviy texnologiyalar asosida ishlab chiqarilgan pol lattalar.",
        service: "Professional Xizmat",
        serviceDesc:
          "Mijozlarimizga 24/7 qo'llab-quvvatlash va professional maslahat xizmatlari.",
        delivery: "Tez Yetkazib Berish",
        deliveryDesc:
          "O'zbekiston va MDH davlatlari bo'ylab tez va ishonchli yetkazib berish xizmati.",
        additional:
          "Bizning korxonamiz Toshkent shahrida joylashgan bo'lib, zamonaviy uskunalar bilan jihozlangan. Har bir pol latta qat'iy sifat nazorati ostida ishlab chiqariladi. Biz Toshkent va MDH davlatlaridagi pol latta ishlab chiqaruvchi yetakchi korxona sifatida mijozlarimizning ehtiyojlarini birinchi o'ringa qo'yamiz.",
      },
    },
    products: {
      title: "Pol Lattalar Katalogi",
      subtitle: "Har xil ehtiyojlar uchun keng assortimentdagi pol lattalari",
      order: "Buyurtma berish",
    },
    contact: {
      title: "Biz bilan bog'laning",
      subtitle: "Savollaringiz bormi? Biz sizga yordam berishga tayyormiz",
      name: "Ism",
      phone: "Telefon",
      message: "Xabar",
      send: "Yuborish",
      info: "Aloqa Ma'lumotlari",
      workTime: "Ish vaqti: 9:00 - 18:00",
      support: "24/7 qo'llab-quvvatlash",
      factory: "Ishlab chiqarish sexi: Toshkent shahri",
      telegram: "Telegram orqali aloqa",
    },
  },
  ru: {
    nav: {
      home: "Главная",
      about: "О нас",
      products: "Продукция",
      contact: "Контакты",
    },
    hero: {
      title1: "ЛЕГКОЕ И УДОБНОЕ",
      title2: "СРЕДСТВО ДЛЯ УБОРКИ",
      subtitle:
        "TozaLoo - производитель высококачественных чистящих средств для дома и офиса. Надежное решение для всех ваших потребностей в уборке.",
      cta: "Смотреть каталог",
      contact: "Связаться",
    },
    seoContent: {
      title:
        "Производитель Профессиональных Напольных Покрытий - Ваш Надежный Партнер!",
      description:
        "Нужны высококачественные напольные покрытия? Познакомьтесь с TozaLoo - ведущим производителем в Ташкенте!",
    },
    about: {
      title: "О нас",
      subtitle:
        "Ведущий производитель и экспортер напольных покрытий, расположенный в Ташкенте",
      experience: "Лет опыта",
      clients: "Довольных клиентов",
      products: "Видов продукции",
      countries: "Стран экспорта",
      content: {
        quality: "Гарантия Высокого Качества",
        qualityDesc:
          "Все наши напольные покрытия соответствуют международным стандартам и отвечают самым высоким требованиям качества.",
        innovation: "Инновационные Решения",
        innovationDesc:
          "Напольные покрытия, произведенные на основе современных технологий.",
        service: "Профессиональный Сервис",
        serviceDesc:
          "Круглосуточная поддержка клиентов и профессиональные консультационные услуги.",
        delivery: "Быстрая Доставка",
        deliveryDesc:
          "Быстрая и надежная доставка по Узбекистану и странам СНГ.",
        additional:
          "Наше предприятие расположено в городе Ташкенте и оснащено современным оборудованием. Каждое напольное покрытие производится под строгим контролем качества. Мы являемся ведущим производителем напольных покрытий в Ташкенте и странах СНГ, ставя потребности наших клиентов на первое место.",
      },
    },
    products: {
      title: "Каталог напольных покрытий",
      subtitle:
        "Широкий ассортимент напольных покрытий для различных потребностей",
      order: "Заказать",
    },
    contact: {
      title: "Свяжитесь с нами",
      subtitle: "Есть вопросы? Мы готовы помочь",
      name: "Имя",
      phone: "Телефон",
      message: "Сообщение",
      send: "Отправить",
      info: "Контактная информация",
      workTime: "Рабочее время: 9:00 - 18:00",
      support: "Поддержка 24/7",
      factory: "Производственный цех: г. Ташкент",
      telegram: "Связь через Telegram",
    },
  },
  en: {
    nav: {
      home: "Home",
      about: "About",
      products: "Products",
      contact: "Contact",
    },
    hero: {
      title1: "EASY AND CONVENIENT",
      title2: "CLEANING PRODUCT",
      subtitle:
        "TozaLoo - manufacturer of high-quality cleaning products for home and office. Reliable solution for all your cleaning needs.",
      cta: "View Catalog",
      contact: "Contact Us",
    },
    seoContent: {
      title: "Professional Floor Tiles Manufacturer - Your Reliable Partner!",
      description:
        "Need high-quality floor tiles? Meet TozaLoo - the leading manufacturer in Tashkent!",
    },
    about: {
      title: "About Us",
      subtitle:
        "Leading floor tile production and export company based in Tashkent",
      experience: "Years Experience",
      clients: "Happy Clients",
      products: "Product Types",
      countries: "Export Countries",
      content: {
        quality: "High Quality Guarantee",
        qualityDesc:
          "All our floor tiles meet international standards and comply with the highest quality requirements.",
        innovation: "Innovative Solutions",
        innovationDesc: "Floor tiles developed based on modern technologies.",
        service: "Professional Service",
        serviceDesc:
          "24/7 customer support and professional consulting services.",
        delivery: "Fast Delivery",
        deliveryDesc:
          "Fast and reliable delivery throughout Uzbekistan and CIS countries.",
        additional:
          "Our company is located in Tashkent city and equipped with modern facilities. Each floor tile is manufactured under strict quality control. As a leading floor tile manufacturer in Tashkent and CIS countries, we put our customers' needs first.",
      },
    },
    products: {
      title: "Floor Tiles Catalog",
      subtitle: "Wide range of floor tiles for different needs",
      order: "Order Now",
    },
    contact: {
      title: "Contact Us",
      subtitle: "Have questions? We're here to help",
      name: "Name",
      phone: "Phone",
      message: "Message",
      send: "Send",
      info: "Contact Information",
      workTime: "Working hours: 9:00 - 18:00",
      support: "24/7 support",
      factory: "Manufacturing facility: Tashkent city",
      telegram: "Contact via Telegram",
    },
  },
};

const products = [
  {
    id: 1,
    image: "/2.webp",
    alt: "Professional cleaning mop - TozaLoo quality cleaning supplies",
  },
  {
    id: 2,
    image: "/6.webp",
    alt: "Floor cleaning tiles - durable and high-quality materials",
  },
  {
    id: 3,
    image: "/5.jpg",
    alt: "Industrial cleaning equipment - professional grade supplies",
  },
  {
    id: 4,
    image: "/14.jpg",
    alt: "Commercial cleaning solutions - TozaLoo brand products",
  },
  {
    id: 5,
    image: "/11.jpg",
    alt: "Specialized floor coverings - various sizes and materials",
  },
  {
    id: 6,
    image: "/12.jpg",
    alt: "Professional cleaning accessories - complete cleaning solutions",
  },
];

export default function HomePage() {
  const [currentLang, setCurrentLang] = useState<"uz" | "ru" | "en">("uz");
  const t = languages[currentLang];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({behavior: "smooth"});
    }
  };

  const handlePhoneCall = () => {
    window.location.href = "tel:+998711234567";
  };

  const handleOrderClick = () => {
    scrollToSection("contact");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const formData = new FormData(e.target as HTMLFormElement);
    const name = formData.get("name") as string;
    const phone = formData.get("phone") as string;
    const message = formData.get("message") as string;

    const telegramMessage = `
🆕 Yangi buyurtma!
👤 Ism: ${name}
📞 Telefon: ${phone}
💬 Xabar: ${message}
🕐 Vaqt: ${new Date().toLocaleString("uz-UZ")}
    `;

    try {
      const response = await fetch(
        `https://api.telegram.org/bot7760561933:AAHOZVdp1en_qsf89ZaZEDdCwo8LRwcRAgI/sendMessage`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            chat_id: "1420116351",
            text: telegramMessage,
            parse_mode: "HTML",
          }),
        }
      );

      if (response.ok) {
        alert(
          currentLang === "uz"
            ? "Xabar muvaffaqiyatli yuborildi!"
            : currentLang === "ru"
            ? "Сообщение успешно отправлено!"
            : "Message sent successfully!"
        );
        (e.target as HTMLFormElement).reset();
      } else {
        throw new Error("Failed to send message");
      }
    } catch (error) {
      console.log(error);
      alert(
        currentLang === "uz"
          ? "Xatolik yuz berdi. Iltimos qaytadan urinib ko&apos;ring."
          : currentLang === "ru"
          ? "Произошла ошибка. Пожалуйста, попробуйте еще раз."
          : "An error occurred. Please try again."
      );
    }
  };

  return (
    <div
      className="min-h-screen bg-white relative ">
      <Head>
        <title>Tozaloo | Pol Lattalari va Tozalash Mahsulotlari</title>
        <meta
          name="description"
          content="Tozaloo - Pol lattalari, pol yuvish vositalari va boshqa tozalash mahsulotlari. Sifatli, ishonchli va MDH bozorlariga mos mahsulotlar bilan xizmatdamiz."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.tozaloo.uz/" />
      </Head>
      {/* Header */}
      <header className=" backdrop-blur supports-[backdrop-filter]:transparent sticky top-0 py-2 z-50">
        <div className="container relative mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Image
                src="/pollatta-sexi-logotipi.svg"
                alt="TozaLoo - pol latta mahsulotlarini ishlab chiqarish sexi"
                width={100}
                height={40}
                className="h-10 w-auto object-cover"
              />
              <span className="text-gray-700 text-2xl font-bold">
                <span className="text-[#1195FF]">Toza</span>Loo
              </span>
            </div>

            <nav className="hidden md:flex items-center space-x-8">
              <button
                onClick={() => scrollToSection("home")}
                className="text-gray-700 hover:text-[#1195FF] transition-colors">
                {t.nav.home}
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="text-gray-700 hover:text-[#1195FF] transition-colors">
                {t.nav.about}
              </button>
              <button
                onClick={() => scrollToSection("products")}
                className="text-gray-700 hover:text-[#1195FF] transition-colors">
                {t.nav.products}
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-gray-700 hover:text-[#1195FF] transition-colors">
                {t.nav.contact}
              </button>
            </nav>

            <div className="flex items-center space-x-4">
              <Select
                value={currentLang}
                onValueChange={(value: "uz" | "ru" | "en") =>
                  setCurrentLang(value)
                }>
                <SelectTrigger className="w-20">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="uz">UZ</SelectItem>
                  <SelectItem value="ru">RU</SelectItem>
                  <SelectItem value="en">EN</SelectItem>
                </SelectContent>
              </Select>
              <Button
                size="sm"
                className="bg-[#1195FF] hover:bg-[#1195FF]/80"
                onClick={handlePhoneCall}>
                <Phone className="w-4 h-4 mr-2 " />
                {t.nav.contact}
              </Button>
            </div>
          </div>
        </div>
        <div className="absolute w-60 h-60 bg-blue-600/50 blur-3xl top-0 right-0 -z-100"></div>
        <div className="absolute w-60 h-60 bg-blue-600/50 blur-3xl top-[500px]   left-0 -z-100"></div>
      </header>

      {/* Hero Section */}
      <section
        id="home"
        className="w-full">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Star className="w-4 h-4 text-yellow-500 fill-current" />
                <Star className="w-4 h-4 text-yellow-500 fill-current" />
                <Star className="w-4 h-4 text-yellow-500 fill-current" />
                <Star className="w-4 h-4 text-yellow-500 fill-current" />
                <Star className="w-4 h-4 text-yellow-500 fill-current" />
                <span className="text-sm text-gray-600 ml-2">
                  Yuqori darajadagi sifat
                </span>
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                <span className="text-[#1195FF]">{t.hero.title1}</span>
                <br />
                <span>{t.hero.title2}</span>
              </h1>
              <p className=" text-gray-600 mb-8 leading-relaxed">
                {t.hero.subtitle}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-blue-600 hover:bg-blue-700"
                  onClick={() => scrollToSection("products")}>
                  {t.hero.cta}
                  <ChevronRight className="w-5 h-5 ml-2" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  onClick={() => scrollToSection("contact")}>
                  <MessageCircle className="w-5 h-5 mr-2" />
                  {t.hero.contact}
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="relative z-10">
                <Image
                  src="/1.webp"
                  alt="Pollatalar ushlab turgan qiz"
                  width={530}
                  height={500}
                />
              </div>
              {/* <div className="absolute -bottom-6 -right-6 w-full h-full bg-blue-200 rounded-2xl z-10"></div> */}
            </div>
          </div>
        </div>
        <Image
          src="/line.svg"
          alt="pol latta mahsulotlari"
          width={1000}
          height={1000}
          className="absolute top-0 left-100 
          z-10"
        />
      </section>

      {/* SEO Content Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              {t.seoContent.title}
            </h2>
            <p className="text-xl text-gray-700 leading-relaxed mb-8">
              {t.seoContent.description}
            </p>
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <div className="text-center">
                <CheckCircle className="w-12 h-12 text-green-600 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {currentLang === "uz"
                    ? "Sifat Kafolati"
                    : currentLang === "ru"
                    ? "Гарантия Качества"
                    : "Quality Guarantee"}
                </h3>
              </div>
              <div className="text-center">
                <Award className="w-12 h-12 text-[#1195FF] mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {currentLang === "uz"
                    ? "Professional Xizmat"
                    : currentLang === "ru"
                    ? "Профессиональный Сервис"
                    : "Professional Service"}
                </h3>
              </div>
              <div className="text-center">
                <Globe className="w-12 h-12 text-purple-600 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {currentLang === "uz"
                    ? "Xalqaro Standart"
                    : currentLang === "ru"
                    ? "Международный Стандарт"
                    : "International Standard"}
                </h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-[#1195FF]" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">15+</div>
              <div className="text-gray-600">{t.about.experience}</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-green-600" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">1000+</div>
              <div className="text-gray-600">{t.about.clients}</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Factory className="w-8 h-8 text-purple-600" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">100+</div>
              <div className="text-gray-600">{t.about.products}</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="w-8 h-8 text-orange-600" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">10</div>
              <div className="text-gray-600">{t.about.countries}</div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section
        id="about"
        className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              {t.about.title}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t.about.subtitle}
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-12">
            <div>
              <Image
                src="/4.webp"
                alt="TozaLoo manufacturing facility with modern equipment"
                width={600}
                height={400}
                className="rounded-xl shadow-lg"
              />
            </div>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Shield className="w-6 h-6 text-[#1195FF]" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {t.about.content.quality}
                  </h3>
                  <p className="text-gray-600">{t.about.content.qualityDesc}</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Award className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {t.about.content.innovation}
                  </h3>
                  <p className="text-gray-600">
                    {t.about.content.innovationDesc}
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Users className="w-6 h-6 text-purple-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {t.about.content.service}
                  </h3>
                  <p className="text-gray-600">{t.about.content.serviceDesc}</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Truck className="w-6 h-6 text-orange-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {t.about.content.delivery}
                  </h3>
                  <p className="text-gray-600">
                    {t.about.content.deliveryDesc}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-blue-50 rounded-2xl p-8">
            <p className="text-lg text-gray-700 leading-relaxed text-center">
              {t.about.content.additional}
            </p>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section
        id="products"
        className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              {t.products.title}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t.products.subtitle}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <Card
                key={product.id}
                className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
                <div className="relative overflow-hidden rounded-t-lg">
                  <Image
                    src={product.image || "/placeholder.svg"}
                    alt={product.alt}
                    width={400}
                    height={300}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-6">
                  <Button
                    className="w-full bg-blue-600 hover:bg-blue-700"
                    onClick={handleOrderClick}>
                    {t.products.order}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              {t.contact.title}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t.contact.subtitle}
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <Card className="p-8">
                <form
                  className="space-y-6"
                  onSubmit={handleSubmit}>
                  <div>
                    <Label htmlFor="name">{t.contact.name}</Label>
                    <Input
                      id="name"
                      name="name"
                      placeholder={t.contact.name}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone">{t.contact.phone}</Label>
                    <Input
                      id="phone"
                      name="phone"
                      placeholder="+998 90 123 45 67"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="message">{t.contact.message}</Label>
                    <Textarea
                      id="message"
                      name="message"
                      rows={4}
                      placeholder={t.contact.message}
                      required
                    />
                  </div>
                  <Button
                    type="submit"
                    className="w-full bg-blue-600 hover:bg-blue-700">
                    {t.contact.send}
                  </Button>
                </form>
              </Card>
            </div>

            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                  {t.contact.info}
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                      <Phone className="w-6 h-6 text-[#1195FF]" />
                    </div>
                    <div>
                      <button
                        onClick={handlePhoneCall}
                        className="font-medium text-gray-900 hover:text-[#1195FF] transition-colors">
                        +998 71 123 45 67
                      </button>
                      <p className="text-gray-600">{t.contact.workTime}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                      <Mail className="w-6 h-6 text-green-600" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">
                        info@TozaLoo.uz
                      </p>
                      <p className="text-gray-600">{t.contact.support}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                      <MapPin className="w-6 h-6 text-purple-600" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">
                        Toshkent, Chilonzor tumani
                      </p>
                      <p className="text-gray-600">{t.contact.factory}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                      <MessageCircle className="w-6 h-6 text-[#1195FF]" />
                    </div>
                    <div>
                      <a
                        href="https://t.me/TozaLoo_uz"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-medium text-gray-900 hover:text-[#1195FF] transition-colors">
                        @TozaLoo_uz
                      </a>
                      <p className="text-gray-600">{t.contact.telegram}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Location Map */}
              <div className="rounded-xl overflow-hidden shadow-lg">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d191885.25298617416!2d69.2793667!3d41.28259745!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8b0cc379e9c3%3A0xa5a9323b4aa5cb98!2sTashkent!5e0!3m2!1sen!2s!4v1749725511186!5m2!1sen!2s"
                  width="100%"
                  height="300"
                  style={{border: 0}}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="TozaLoo Location - Tashkent, Uzbekistan"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
