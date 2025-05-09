export default function Home() {
  return (
    <>
      <section className="py-16 px-6 bg-gray-50 text-center">
        <h2 className="text-3xl font-bold mb-8 text-red-900">لماذا تختارنا؟</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-8 bg-white shadow-xl rounded-lg transform transition hover:scale-105 hover:shadow-2xl duration-300">
            <h3 className="text-xl font-semibold text-red-900 mb-4">
              خبرة طويلة
            </h3>
            <p className="text-gray-700">
              لدينا سنوات من الخبرة في تقديم الحلول المبتكرة والمهنية لعملائنا
              في مختلف الصناعات.
            </p>
          </div>
          <div className="p-8 bg-white shadow-xl rounded-lg transform transition hover:scale-105 hover:shadow-2xl duration-300">
            <h3 className="text-xl font-semibold text-red-900 mb-4">
              دعم متواصل
            </h3>
            <p className="text-gray-700">
              نقدم دعمًا مستمرًا لعملائنا لضمان رضاهم التام وحل أي مشكلة قد
              تواجههم في أي وقت.
            </p>
          </div>
          <div className="p-8 bg-white shadow-xl rounded-lg transform transition hover:scale-105 hover:shadow-2xl duration-300">
            <h3 className="text-xl font-semibold text-red-900 mb-4">
              أسعار تنافسية
            </h3>
            <p className="text-gray-700">
              نقدم أسعارًا تنافسية وجودة عالية في جميع خدماتنا ومنتجاتنا لتلبية
              احتياجات كل عميل.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
