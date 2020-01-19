module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('categories',

      [{
          name: 'super market',
          icon: '<i class="fas fa-store"></i>',
          description: 'سوپرمارکت شکلی از بقالی ولی بزرگتر از آن است که مشتری خودش محصولات را از قفسه برمی‌دارد یا به اصطلاح سلف سرویس است',
          imageId: 5001,
          createdAt: new Date(),
          updatedAt: new Date()
        },


        {
          name: 'clothing store',
          icon: '<i class="fas fa-tshirt"></i>',
          description: 'مکانی جهت خرید لباس ، که می تواند برای تمامی سنین و هر جنسیتی کاربرد داشته باشد ',
          imageId: 5002,
          createdAt: new Date(),
          updatedAt: new Date()
        },

        {
          name: 'fruit shop',
          icon: '<i class="fas fa-apple-alt"></i>',
          description: 'مکانی برای توزیع میوه که با توجه به فصل میوه های متفاوتی عرضه می کند',
          imageId: 5003,
          createdAt: new Date(),
          updatedAt: new Date()
        },

        {
          name: 'bakery',
          icon: '<i class="fas fa-bread-slice"></i>',
          description: 'نانوایی مکانی است که برای تولید یا عرضه محصولاتی که عموماً توسط فر یا تنور پخته می‌شود.',
          imageId: 5004,
          createdAt: new Date(),
          updatedAt: new Date()
        },

        {
          name: 'tool',
          icon: '<i class="fas fa-toolbox"></i>',
          description: 'محلی برای فروش انواع ابزارآلات مانند پیچ گوشتی ، انبر ',
          imageId: 5005,
          createdAt: new Date(),
          updatedAt: new Date()
        },


        {
          name: 'mechanical',
          icon: '<i class="fas fa-tools"></i>',
          description: 'مکانی برای تعمیر خودروهایی که دچار مشکل شده اند ',
          imageId: 5006,
          createdAt: new Date(),
          updatedAt: new Date()
        },


        {
          name: 'yadaki',
          icon: '<i class="fas fa-cogs"></i>',
          description: 'مکانی برای خرید لئازم خودرو که دچار  مشکل شده اند',
          imageId: 5007,
          createdAt: new Date(),
          updatedAt: new Date()
        },


        {
          name: 'fastfood',
          icon: '<i class="fas fa-hamburger"></i>',
          description: 'فست فود یا غذای فوری عنوانی است برای غذاهایی که به سرعت طبخ و آماده می‌شوند ',
          imageId: 5008,
          createdAt: new Date(),
          updatedAt: new Date()
        },


        {
          name: 'barber shop',
          icon: '<i class="fas fa-cut"></i>',
          description: 'آرایشگاه مردانه یا پیرایشگاه به مکانی گفته می‌شود که اصلاح و آرایش موی مردان صورت می‌گیرد که جنبه آرایشی و بهداشتی دارد.',
          imageId: 5009,
          createdAt: new Date(),
          updatedAt: new Date()
        },


        {
          name: 'shoe store',
          icon: '<i class="fas fa-shoe-prints"></i>',
          description: 'مکانی برای خرید انواع کفش',
          imageId: 5010,
          createdAt: new Date(),
          updatedAt: new Date()
        },


        {
          name: 'restaurant',
          icon: '<i class="fas fa-utensils"></i>',
          description: 'رستوران نوعی بنگاه است که در آن خوراک و نوشیدنی ارائه و در همان‌جا صرف می‌شود',
          imageId: 5011,
          createdAt: new Date(),
          updatedAt: new Date()
        },


        {
          name: 'bank',
          icon: '<i class="fas fa-university"></i>',
          description: 'نهادی اقتصادی است که وظیفه‌هایی چون تجهیز و توزیع اعتبارات، عملیات اعتباری، عملیات مالی، خرید و فروش ارزها، نقل و انتقال وجوه، وصول مطالبات اسنادی و سود سهام مشتریان، پرداخت بدهی مشتریان، قبول امانات، نگهداری سهام و اوراق بهادار و اشیای قیمتی مشتریان، انجام وظیفهٔ قیمومیت و وصایت برای مشتریان، انجام وکالت خریدها و فروش را بر عهده دارند',
          imageId: 5012,
          createdAt: new Date(),
          updatedAt: new Date()
        },


        {
          name: 'computer',
          icon: '<i class="fas fa-laptop"></i>',
          description: 'مکانی برای ارایه خدمات کامپیوتری',
          imageId: 5013,
          createdAt: new Date(),
          updatedAt: new Date()
        },
      ]
    );
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('categories', null, {});
  }
};