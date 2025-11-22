# Digital - Landing Page

<div align="center">

موقع Landing Page احترافي لشركة Digital للخدمات الرقمية، مبني باستخدام React وTailwind CSS.

[العرض المباشر](#) · [الإبلاغ عن مشكلة](../../issues) · [طلب ميزة](../../issues)

</div>

---

## نظرة عامة

موقع ويب حديث ومتجاوب لعرض خدمات الشركة الرقمية، يتضمن صفحات متعددة مع تصميم جذاب وتجربة مستخدم سلسة.

## المميزات

- تصميم متجاوب يعمل على جميع الأجهزة (Mobile First)
- دعم كامل للغة العربية (RTL)
- شريط تنقل ثابت مع قائمة جانبية للموبايل
- صفحات متعددة (الرئيسية، الخدمات، التسويق الرقمي)
- مكونات قابلة لإعادة الاستخدام
- سلايدر للعرض التقديمي
- نموذج تواصل في الـ Footer

## التقنيات المستخدمة

| التقنية | الوصف |
|---------|-------|
| [React 18](https://reactjs.org/) | مكتبة JavaScript لبناء واجهات المستخدم |
| [React Router DOM](https://reactrouter.com/) | التنقل بين الصفحات |
| [Tailwind CSS](https://tailwindcss.com/) | إطار عمل CSS للتصميم السريع |
| [React Icons](https://react-icons.github.io/react-icons/) | مكتبة الأيقونات |
| [React Slick](https://react-slick.neostack.com/) | مكون السلايدر |

## هيكل المشروع

```
src/
├── Pages/                    # صفحات التطبيق
│   ├── Home/                 # الصفحة الرئيسية
│   ├── Services/             # صفحة الخدمات
│   └── SEO/                  # صفحة SEO
├── components/               # المكونات
│   ├── bars/                 # شريط التنقل والقائمة الجانبية
│   │   ├── Navbar.js
│   │   └── Sidebar.js
│   ├── Footer/               # الـ Footer ونموذج التواصل
│   ├── HomeCom/              # مكونات الصفحة الرئيسية
│   │   ├── About/
│   │   ├── FirstCompR/
│   │   ├── mainpage/
│   │   └── Servece/
│   ├── SeoCom/               # مكونات صفحة SEO
│   ├── ServicesCom/          # مكونات صفحة الخدمات
│   └── Layout.js             # التخطيط العام
├── App.js                    # المكون الرئيسي
├── index.js                  # نقطة الدخول
└── index.css                 # الأنماط العامة
```

## البدء السريع

### المتطلبات

- Node.js (الإصدار 16 أو أحدث)
- npm أو yarn

### التثبيت

1. استنساخ المستودع:
```bash
git clone https://github.com/qwe2qwee/React-landingPage.git
cd React-landingPage
```

2. تثبيت الاعتماديات:
```bash
npm install
```

3. تشغيل المشروع:
```bash
npm start
```

سيفتح التطبيق على [http://localhost:3000](http://localhost:3000)

## الأوامر المتاحة

| الأمر | الوصف |
|-------|-------|
| `npm start` | تشغيل المشروع في وضع التطوير |
| `npm run build` | بناء المشروع للإنتاج |
| `npm test` | تشغيل الاختبارات |

## الصفحات

| المسار | الصفحة |
|--------|--------|
| `/` | الصفحة الرئيسية |
| `/Servers` | صفحة الخدمات |
| `/DigitalMarketing` | صفحة التسويق الرقمي |

## المساهمة

المساهمات مرحب بها! يرجى اتباع الخطوات التالية:

1. Fork المستودع
2. إنشاء فرع جديد (`git checkout -b feature/AmazingFeature`)
3. Commit التغييرات (`git commit -m 'Add some AmazingFeature'`)
4. Push إلى الفرع (`git push origin feature/AmazingFeature`)
5. فتح Pull Request

## الرخصة

هذا المشروع مرخص تحت رخصة MIT.

---

<div align="center">

صنع بـ ❤️ باستخدام React

</div>
