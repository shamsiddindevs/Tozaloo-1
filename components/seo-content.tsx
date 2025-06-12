import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card";
import {Badge} from "@/components/ui/badge";
import {Button} from "@/components/ui/button";
import {Ruler, Package, Globe, Award} from "lucide-react";

export function SEOContentSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* SEO-optimized main content */}
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 text-center">
            Pol Lattalar va Pol Yuvish Mahsulotlari: Sizning Ishonchli
            Hamkoringiz!
          </h1>

          <div className="prose prose-lg max-w-none mb-12">
            <p className="text-xl text-gray-700 leading-relaxed mb-6">
              Sizga <strong>sifatli pol lattalari</strong> va{" "}
              <strong>pol yuvish vositalari</strong> kerakmi? Bizda aynan siz
              izlagan mahsulotlar bor! Biz har qanday ehtiyojga mos,
              <strong>yuqori sifatli pol lattalarini ishlab chiqaramiz</strong>.
            </p>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Nima uchun bizni tanlashingiz kerak?
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <Card className="text-center">
              <CardHeader>
                <Award className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <CardTitle className="text-lg">Sifat va Ishonchlilik</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Mahsulotlarimiz eng yuqori sifat standartlariga javob beradi
                  va uzoq muddat xizmat qiladi.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <Ruler className="w-12 h-12 text-green-600 mx-auto mb-4" />
                <CardTitle className="text-lg">Keng Tanlov</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  <strong>140 sm</strong> yoki <strong>80 sm</strong> enidagi
                  pol lattalar. Hajmi, materiali va qalinligi mijozlarimizning
                  xohishiga ko&apos;ra.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <Package className="w-12 h-12 text-purple-600 mx-auto mb-4" />
                <CardTitle className="text-lg">Moslashuvchan Narxlar</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Narxlar va shartlar kelishilgan holda belgilanadi, bu esa siz
                  uchun eng qulay shart-sharoitlarni ta&apos;minlaydi.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <Globe className="w-12 h-12 text-orange-600 mx-auto mb-4" />
                <CardTitle className="text-lg">
                  MDH Bozorlariga Xizmat
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Biz nafaqat mahalliy bozorga, balki{" "}
                  <strong>MDH davlatlariga</strong> ham mahsulot yetkazib
                  beramiz.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Product dimensions showcase */}
          <div className="bg-gray-50 rounded-2xl p-8 mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              Pol Latta O&apos;lchamlari va Turlari
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="text-center">
                <div className="bg-blue-100 rounded-xl p-6 mb-4">
                  <h4 className="text-xl font-semibold text-blue-900 mb-2">
                    140 sm Enidagi Pol Latta
                  </h4>
                  <p className="text-blue-700">
                    Katta maydonlar, sport zallari va omborxonalar uchun ideal
                  </p>
                </div>
                <Badge className="bg-blue-600 text-white">
                  Katta Maydonlar Uchun
                </Badge>
              </div>
              <div className="text-center">
                <div className="bg-green-100 rounded-xl p-6 mb-4">
                  <h4 className="text-xl font-semibold text-green-900 mb-2">
                    80 sm Enidagi Pol Latta
                  </h4>
                  <p className="text-green-700">
                    Ofislar, uylar va pol yuvish uchun qulay o&apos;lcham
                  </p>
                </div>
                <Badge className="bg-green-600 text-white">
                  Pol Yuvish Uchun
                </Badge>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center bg-blue-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Buyurtma Berish va Aloqa
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-3">
                  Mahalliy Mijozlar Uchun
                </h4>
                <p className="text-gray-600 mb-4">
                  <strong>Pol lattalar</strong> haqida batafsil ma&apos;lumot
                  olish yoki buyurtma berish uchun:
                </p>
                <Button className="bg-blue-600 hover:bg-blue-700">
                  +998 71 123 45 67
                </Button>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-3">
                  MDH Davlatlaridan Mijozlar Uchun
                </h4>
                <p className="text-gray-600 mb-4">
                  Xalqaro mijozlarimiz uchun Telegram orqali muloqot:
                </p>
                <Button
                  variant="outline"
                  className="border-blue-600 text-blue-600 hover:bg-blue-50">
                  @floortech_uz
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
