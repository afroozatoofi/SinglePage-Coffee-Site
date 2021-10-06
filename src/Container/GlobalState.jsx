import react, { useState } from "react";

import SimpleContext from "../Components/Context/SimpleContext";

const GlobalState = (props) => {
  const [coffeesShow, setCoffeesShow] = useState([
    {
      id: 1,
      builtIn: true,
      product: "کاپوچینو",
      recepie:
        "کاپوچینو چیزی بین ماکیاتو و لاته است. کاپوچینو شیر کمتری دارد، اما کف آن بیشتر از لاته است. طعم قهوه کمتری نسبت به ماکیاتو دارد، اما طعم قهوه کاپوچینو بیشتر از لاته است، چون شیر کمتری دارد.",
      price: 28000,
      imgsrc: "img/cappuccino.jpeg",
    },
    {
      id: 2,
      builtIn: true,
      product: "اسپرسو",
      recepie:
        "این قهوه با آب و دانه‌های قهوه درست می‌شود. اسپرسو طعم غلیظی دارد و روی قهوه یک‌لایه کف که حاصل فشار آب داغ است قرار دارد.",
      price: 46000,
      imgsrc: "img/espresso.jpg",
    },
    {
      id: 3,
      builtIn: true,
      product: "لاته",
      recepie:
        "لاته از ریختن شیر در شات اسپرسو ساخته می‌شود. مقدار شات اسپرسو به‌اندازه‌ای که سفارش داده‌اید بستگی دارد. ابتدا اسپرسو در فنجان ریخته می‌شود و مابقی فنجان با شیر پر می‌شود.",
      price: 32000,
      imgsrc: "img/latte.jpg",
    },
    {
      id: 4,
      builtIn: true,
      product: "فرانسه",
      recepie:
        "قهوه ای است نسبتاً رقیق. و برخلاف اسپرسو که در فنجان های کوچک سرو می شود، در فنجان بزرگ یا لیوان مصرف می شود.",
      price: 18000,
      imgsrc: "img/french.jpg",
    },
    {
      id: 5,
      builtIn: true,
      product: "موکا",
      recepie:
        "موکا نیز ترکیبی از اسپرسو با شیر است، اما تمام موکا ها شکلات دارند. نوشیدنی موردعلاقه دیگر من، موکا با شکلات سفید است که ترکیبی از اسپرسو، کمی شیر، سس شکلات، شکلات سفید و خامه فرم گرفته است.",
      price: 74000,
      imgsrc: "img/mocha.jpg",
    },
    {
      id: 6,
      builtIn: true,
      product: "آمریکانو",
      recepie:
        "آمریکانو یک نوشیدنی مشهور و نوع دیگری از اسپرسو است که از ریختن اسپرسو در فنجان و اضافه کردن آب داغ به آن ساخته می‌شود.",
      price: 36000,
      imgsrc: "img/americano.jpg",
    },
    {
      id: 7,
      builtIn: true,
      product: "ترک",
      recepie:
        "شیوه‌ای برای سرو قهوه است که دانه‌های برشته‌شده و سپس کاملاً پودر شدهٔ قهوه در قهوه‌جوشی به نام جذوه جوشانده و در فنجان سرو می‌شوند.",
      price: 27000,
      imgsrc: "img/turkish.jpg",
    },
    {
      id: 8,
      builtIn: true,
      product: "ماکیاتو",
      recepie:
        "ماکیاتو نیز از اسپرسو ساخته می‌شود، اما نسبت به لاته شیر کمتری دارد. طعم اسپرسو در این قهوه بیشتر حس می‌شود.",
      price: 20000,
      imgsrc: "img/maciano.jpg",
    },
  ]);
  const [coffeeShow, setCoffeeShow] = useState("");

  return (
    <SimpleContext.Provider
      value={{
        coffees: coffeesShow,
        coffee: coffeeShow,
      }}
    >
      {props.children}
    </SimpleContext.Provider>
  );
};

export default GlobalState;
