import React, { useContext, useEffect, useState } from "react";
import whats from "../../assets/images/whatsapp.png";
import { CartContext } from "../../contexts/CartContext";
import { formatCurrencyInINR, siteLink, whatsappNum } from "../../utils/Utils";

const WhatsApp = () => {
  const { cart, total } = useContext(CartContext);
  const [whatsappLink, setWhatsappLink] = useState(undefined);

  // const array = [
  //   {
  //     id: 1,
  //     title: "Castor oil",
  //     image:
  //       "https://fastly.picsum.photos/id/8/5000/3333.jpg?hmac=OeG5ufhPYQBd6Rx1TAldAuF92lhCzAhKQKttGfawWuA",
  //     description:
  //       "Castor oil is a vegetable oil pressed from the seeds of the castor oil",
  //     price: 900,
  //   },
  //   {
  //     id: 1,
  //     title: "Mustard oil",
  //     image:
  //       "https://fastly.picsum.photos/id/8/5000/3333.jpg?hmac=OeG5ufhPYQBd6Rx1TAldAuF92lhCzAhKQKttGfawWuA",
  //     description:
  //       "Mustard oil is a vegetable oil pressed from the seeds of the mustard oil",
  //     price: 900,
  //   },
  // ];

  const emptyMessage = `Hi there, I want to enquire/order about the available products.\n Can I get the list of products with the prices.`;

  const message =
    `Hi there, I want to enquire/order about the products\n\n` +
    cart
      ?.map(
        (product, index) =>
          `${index + 1}. ${product?.title} \n\n` +
          `*Description:* ${product?.product_description}\n` +
          `*Price:* ${formatCurrencyInINR(product?.cost_price)} x ${
            product?.amount
          }\n\n` +
          `To see this item, click:\n ${siteLink}/product/${
            product?.name
          }&${product?.id}/\n\n`
      )
      .join("") +
    `\nTotal cost : ${formatCurrencyInINR(total)}`;

  useEffect(() => {
    if (cart?.length > 0) {
      setWhatsappLink(
        `https://wa.me/${whatsappNum}?text=${encodeURIComponent(message)}`
      );
    } else {
      setWhatsappLink(
        `https://wa.me/${whatsappNum}?text=${encodeURIComponent(emptyMessage)}`
      );
    }
  }, [cart, message, emptyMessage]);

  // const whatsappLink = `https://wa.me/919487421228?text=${encodeURIComponent(
  //   message
  // )}`;

  return (
    <div>
      <div>
        <div className="fixed bottom-2 left-2">
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
          >
            <img src={whats} alt="whatsapp" className="h-12" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default WhatsApp;
