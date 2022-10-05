This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

---

## Eslint

Eslint belirli standartlarda kod yazmamıza yardımcı olur.

- Eslint yüklenmesi

```bash
npx eslint --init
```

Ne şekilde kullanmak istediğimizi seçerek devam ediyoruz. Sonrasında paketler yüklenecektir.

- eslint'i nasıl kullanmak istersin?
  syntaxları kontrol et, pronlemleri bul ve yeniden yazmaya zorla

- hangi module tipinde kullanıyorsun?
  import ve export

- hangi framework?

> react

- typescript kullanıyor musun?

> hayır

- kod nerede çalışıyor?

> browser ve node

- hangi guide?

> populer olanlardan airbnb

- hangi format türünde tutulsun dosya?

> json

- paketler yüklensin mi?

> evet

- hangi manager kullanılsın?

> yarn

# Prettier & config yüklenmesi

```bash
yarn add -D eslint-plugin-prettier eslint-config-prettier
```

# Development modda çalıştırmak için -D

- eslint-plugin-prettier: prettier pluginini yüklemek için
- eslint-config-prettier: eslint ve prettier çakışmalarını önlemek ve istenilen ayarları çalıştırmak için

## .eslintrc.json dosyası

```json
{
  "env": {
    "browser": true,
    "es2021": true,
    "node": true
  },
  "extends": ["next/core-web-vitals", "airbnb", "prettier"],
  "parser": "@babel/eslint-parser",
  "parserOptions": {
    "requireConfigFile": false,
    "babelOptions": {
      "presets": ["@babel/preset-react"]
    },
    "ecmaFeatures": {
      "jsx": true
    },
    "ecmaVersion": 12,
    "sourceType": "module"
  },
  "plugins": ["react", "prettier", "simple-import-sort"],
  "settings": {
    "import/resolver": {
      "alias": {
        "map": [["~", "."]],
        "extensions": [".js", ".jsx"]
      }
    }
  },
  "rules": {
    "react/jsx-handler-names": "warn",
    "react/jsx-pascal-case": "warn",
    "react/react-in-jsx-scope": "off",
    "react/state-in-constructor": "off",
    "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
    "react/prop-types": 0,
    "react/jsx-props-no-spreading": "off",
    "default-param-last": "off",
    "import/prefer-default-export": "off",
    "import/extensions": ["error", "always", { "js": "never", "jsx": "never" }],
    "simple-import-sort/imports": "error",
    "simple-import-sort/exports": "error",
    "sort-imports": "off",
    "import/first": "error",
    "import/newline-after-import": "error",
    "import/no-duplicates": "error"
  }
}
```

- "extends": İçerisindeki 'airbnb' ve diğerlerini de isteğe bağlı şekilde eklenip çıkaralabiliyor.
- "plugins": Kullanılmak istenen pluginler buraya eklenir.
  Örneğin, Plugins içerisindeki settingste ->
  "alias": {
  "map": [["~", "."]],
  "extensions": [".js", ".jsx"]
  } görevi:

  uzantıyı daha basit şekilde gösterir, alt dosyaları ile göstermez, onun yerine seçtiğimiz sembolu kullanır. (absolute path'i eslintte hata dönmemesi için oluşturulmasına yardımcı olur.)

- "rules": Kullanılmak istenen rules varsa onlar buraya eklenir.

# .eslintignore dosyası

Eslint'in incelemesini istemediğimiz klasörleri bunun içinde belirtiriz.
Örneğin;

```bash
node_modules
.next
public
jsconfig.json
```

# Kolay otomatik düzeltilebilir içe aktarma sıralaması

```bash
eslint-plugin-simple-import-sort
```

# İndirme

```bash
npm install --save-dev eslint-plugin-simple-import-sort
```

.eslintrc dosyası:

```json
{
  "plugins": ["simple-import-sort"]
}
```

- Ardından, içe ve dışa aktarmaları sıralamak için kuralları ekleyin:

```json
{
  "rules": {
    "simple-import-sort/imports": "error",
    "simple-import-sort/exports": "error"
  }
}
```

# .prettierrc dosyası

- Kodu belirlenen kurallara göre düzenler ve tekrardan yazar.

```json
"printWidth":80, //Specify the line length that the printer will wrap on.
"semi": false, //don't use semicolon.
"tabWidth": false, //Specify the number of spaces per indentation-level.
"singleQuote": true,
"trallingComma": "none", //No trailing commas.
"bracketSpacing": true
```

# Bracket Spacing

Parantez öncesi ve sonrası boşluk ayarı

`Valid options:`

- true - Example: { foo: bar }.
- false - Example: {foo: bar}.

# .prettierignore

- İgnore edilecek dosyalar için .prettierignore dosyası oluştur ve format edilmeyecek olan dosyaları yaz.

```js
node_modules.next
```

# Absolute Path

- Absolute path tanımlamak için "jsconfig.json" dosyası oluşturulur, bu dosya "vs-code" içinde çalışıyor ve bir js projesinin roota sahip olduğunu göstermekte.

- jsconfig dosyası:

```json
"compilerOptions":{
 "baseUrl": ".",
 "paths": {
  "@/*": ["./*"]
 }
},
"exclude": ["node_modules", ".next"]
```

- Örnek:
- jsconfig dosyası (src kullanarak):

```json
"compilerOptions":{
 "baseUrl": ".",
 "paths": {
  "@/*": ["./src/*"]
 }
},
"exclude": ["node_modules", ".next"]
```

yazarak rootu "**@**" olarak tanımlıyoruz ve bazı klasörleri hariç tutmak için exclude ediyoruz.

- Eslint'in bu rootu resolve edebilmesi için eslint-import-resolver-alias pluginini development mod için yüklüyoruz.
  ve .eslintrc dosyasına settings bölümünü ekleyerek "map" ve "extension"ları giriyoruz.

```js
"settings": {
    "import/resolver": {
      "alias": {
        "map": [["@", "./src"]],
        "extensions": [".js", ".jsx"]
      }
    }
  }
```

---

# Dosya Mimarisi

- Her componentin kendine ait bir klasörü olmalı ve styling, test, stories gibi alt dosyalar bu klasör içerisinde bulunmalı. Aynı zamanda bu componenti export etmek için bir index dosyası bulunmalı, bu sayede birden fazla componenti tekbir dosya import ederek kullanabiliriz.
- Ayrıca components klasörü de bir index dosyası taşır ve onun içinden bütün componentsleri export edebilirsiniz. Böylelikle başka dosyada import ederken tek bir satırda hepsini çekebilirsiniz.
- Componentler olabildiğince sabit yazı içermemeli ki yeniden kullanılabilsin.
- Eğer sabit değişkenler içeren bir dosya yaratıcaksak bunu aynı bir klasör içinde yaratmalıyız(containers/home/customButton).
- Sabit değişkenleri merkezi bir yerde toplamak için constants klasörü oluşturmalıyız.
- Servisler için services klasörü oluşturabiliriz.
- Aynı şekilde bütün classlarımızı tutmak için utils klasörü oluşturabiliriz.

---

**NOT:**
`style dosyalarına .module eklenme sebebi browser sayfa oluşturken dosyaların karışmamasını sağlamak.`

---

# Custom Hoooks

**Custom Hooks** tekrarlanan kodun önüne geçebilmemiz adına ortaya çıkan bir yapıdır. **Custom Hook** yapısı ile tekrar kullanılabilir fonksiyonlar oluştururuz. Böylelikle daha temiz bir kod yapısı ve basitlik elde ederiz. Bu hook dosyalarını da Hooks klasörü altında toplayabiliriz.

---

# Utils

- Projede fonksiyonların tekrarlı şekilde yazılmaması için kullanılan yöntem.
  Örneğin;
  Utils/cleanPhone.js

```js
export const cleanPhone = (phone) => {
  if (phone.toString()[0] === '0')
    return phone.toString().split(1, phone.toString().length - 1)

  return phone
}
```

Para birimi çeviren fonksiyon ve tarih değiştirme foknsiyonları bunlara örnek verilebilir. Bir çok yerde gerektiğinde yeniden çağrılabilir.

---

# SVG dosyalarını react componentine çevirme

**Önemli:**

```bash
yarn add -D @svgr/cli@5.5.0
```

- Yeni sürümlerinde problem olduğu için @svgr/cli@5.5.0 sürümünü development moda yüklüyoruz.
  Configleri ayarlayabilmek için .svgo.json dosyasını yaratıyoruz.
  svg dosyalarını componente çevirmek için package.json a scrip yazıyoruz.

```json
"svgr": "svgr icons -d components/icons --svgo-config .svgorc.json"
```

- Burada svgr key wordümüz icons dosyamızdaki svg dosyalarını al components klasöründe icons klasörünü oluştur ve içerisine .svgorc.json dosyasındaki svgo-configlerini kullanarak react componentlerini oluştur diyoruz.

- Command propta `yarn svgr` diyerek çalıştırdığımızda bize svg dosyalarını react componenti olarak çıkaracak, aynı zamanda icons klasöründe index dosyası yaratarak bütün componentleri export edecek böylelikle bu componentleri çağırmak istediğimizde tek satırda çağırabileceğiz.

- svg dosyasıyla birlikte gelen fill attributesunu current color'a çevirmek için scripte yeni kod ekliyoruz.

```json
"svgr": "svgr icons -d components/icons --replace-attr-values \"#fff=currentColor, #000=currentColor\" --svgo-config .svgorc.json"
```

husky lint-staged bunlar sayesinde belli scriptleri çalıştırmaya yarıyor.
