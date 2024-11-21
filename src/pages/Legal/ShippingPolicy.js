import React from 'react'

const ShippingPolicy = () => {
  return (

    <div className="bg-gray-50 text-gray-800 py-10 font-basefont">
      <div className="mx-auto max-w-4xl px-8">
        <h2 className="text-center mb-5 text-xl">Shipping, Returns, Exchanges & Special Order</h2>
      </div>
      <div className='md:mx-8'>
        {shippings.map((shipping) => {
          return (
            <div className="lg:px-8 px-2 mx-8 text-justify ">
              <h2 className="font-semibold text-left font-basefont text-xl">{shipping.item}</h2>
              <p className=" font-textfont text-lg"> {shipping.content}</p>
            </div>
          );
        })}
      </div>
    </div>
  )
}

export default ShippingPolicy



const shippings = [
  {
    item: <h2 className=''>Shipping</h2>,
    content: (
      <div className=''>
        <ul>
          <li className="py-3 ">
            For all orders within India shipping is free, except for Jewellery* (see note below)
          </li>
          <li className="py-3 ">
            For all international orders Rs.1500/- per product will be charged towards shipping - note we do not ship jewellery items outside India.
          </li>
          <li className="py-3 ">
            We use only reputed and reliable carriers such as FedEx, DHL, Blue dart etc.
          </li>
          <li className="py-3 ">
            You are requested to ensure you or any person known to you is available at your given delivery address to receive the courier on intimation of intended delivery. We are not responsible for packages returned/ left at doorsteps/outside delivery address due to non availability of a trusted person at the delivery address to hand parcels to. As these may be high value deliveries please do give this your kind attention.
          </li>
          <li className="py-3 ">
            If you are based out of a remote location or a courier non-serviceable area, please write to us with your complete mailing address and order details to customercare@westerngods.comand we will arrange for a suitable service to deliver the product. Please note that some carriers may charge an additional sum or surcharge to deliver at remote locations, in such cases we will intimate you the additional charge prior to the delivery of the same.
          </li>
          <li className="py-3 ">
            For domestic shipments any additional tax as applicable should be borne by the customer
          </li>
          <li className="py-3 ">For international shipments based on the country of import, our carrier may need to get customs clearance for your goods before delivering them to you. Any additional taxes, import duties, customs charges levied by the country of import will be chargeable to the customer.</li>
          <li className="py-3 ">The products will be shipped within 10 working days from the date of the order confirmation. International delivery schedules are subject to any delays at transit, entry, customs and location accessibility points.The above timelines doesn’t apply for ' made to order/bespoke ' items. The timelines for such orders is determined by the effort involved in making the product & will be conveyed to you at the time of the payment.</li>
          <li className="py-3 ">The tracking details of the shipment along with the carrier information will be mailed to you once the product is out for delivery.</li>
          <li className="py-3 ">All our products are quality checked and come in a tamper proof packaging. Please do not accept the delivery if you notice that the package is tampered or damaged. In such events we request you to take photos of the tampered/damaged area, do not sign acceptance of the package, and return the package back to the carrier. Should you accept such a package, it will be deemed that the product was received in a good condition.</li>
          <li className="py-3 ">All products are insured by westerngods Retail Venturess Pvt. Ltd. against loss or theft while in transit at no additional cost to the customer.</li>
          <li className="py-3 ">Please note that we are unable to re-route/ redirect any shipments once they are despatched. Please therefore check and verify your shipping address is correct for product delivery. </li>

        </ul>
        <p><span className='font-bold'>*Jewellery :</span> please note that the shipping charges for jewellery may vary depending on the value & the materials used in making the jewellery.Please cart your selection to view shipping rate at checkout. Jewellery will only be shipped within India. Some remote domestic locations may not be serviceable for jewellery orders. If in doubt, please contact our customer assistance team on +91 87544 48349, email us at customercare@westerngods.com, or use the "chat" button on our site.</p>
      </div>
    ),
  },
  {
    item: <h2>Returns & Exchanges</h2>,
    content: (
      <div>
        <ul>
          <li className="py-3 ">
            In the rare eventuality you wish to exchange a product, please be guided by the following -
          </li>
          <li className="py-3 ">
            Our Exchange policy lasts 7 days. If 7 days have gone by since your receipt of the order, unfortunately we can’t offer you an exchange.
          </li>
          <li className="py-3 ">
            To be eligible for an exchange, your item must be unused and in the same condition that you received it. It must also be in the original packaging.
          </li>

        </ul>
        <h3 className='text-black font-medium'>Important:</h3>
        <ul>
          <li className="py-3 ">The colours you see on your device may vary due to the varying colour reproduction, brightness, resolution and temperature of individual devices. If you'd like more clarity before your purchase, please contact our customer engagement team.They will be happy to assist you with 'daylight' images if needed. We will not accept exchanges against colour perception concerns.</li>
          <li className="py-3 ">Attached or 'running' blouse vary in length. This is due to differences in woven warp lengths. The measurements of these are specifically called out on our online store as part of a product's description. Should you be purchasing from our retail stores, please request this be measured prior to purchase if this is of concern. </li>
        </ul>
        <p className="py-3 ">Non exchangeable items: Jewellery, gift cards, coin collectibles, saris with detached blouse / tassling done</p>
        <p>To initiate an exchange, please write to us at customercare@westerngods.com, with complete information - Order Details, the reason behind your intention to exchange the product .This should be done within 7 days from the date of receiving the products for us to assess, validate and accept or decline an exchange.</p>
        <p className="py-3 ">westerngods Retail Venturess Pvt. Ltd reserves the right to refuse an exchange if found invalid , in which case the relevant reasoning will be provided to you.</p>
        <p className="py-3 ">Return shipping – Once we confirm the acceptance of an exchange , kindly ship the product back to the following address westerngods Retail Venturess Pvt. Ltd, M&S Pavilion, No.66/ 3, Mayor Ramanathan Salai, Off, Spurtank road, Chetpet, Chennai, Tamil Nadu 600031.</p>
        <p className="py-3 ">You will be responsible for your own shipping costs for shipping back your item to us. Shipping costs are non-refundable. If we process an exchange, the cost of shipping, and any import duties,levies, payment gateway charges and currency conversion fees as part of the exchange process of the product will be deducted. Depending on where you live, the time it may take for your exchanged product to reach you, may vary.</p>

        <h4 className='text-blacks font-semibold '>Please note:</h4>
        <p className="py-3  ">westerngods cannot be held responsible for any damage that occurs to the sari after purchase due to rain, overuse, stains, incorrect cleaning and care, and other normal wear and tear.</p>
        <p className="py-3 ">If you have requested false and pico, and/or sari tassling/ blouse detachment services to your purchased sari, exchanges/ returns are not permitted.</p>
      </div>
    ),
  },
  {
    item: <h2>Refunds</h2>,
    content: (
      <ul>
        <li className="py-3 ">
          We do not offer refunds under any circumstances.
        </li>
        <li className="py-3 ">
          If however, you do not find a suitable product to exchange against your proposed return, you may opt to park the funds with us for a future purchase,
        </li>
        <li className="py-3 ">
          Please refer to our Returns & Exchange policy above this section to familiarise yoursel with the process for exchanging a product.
        </li>

      </ul>
    ),
  },
  {
    item: (
      <h2>Cancellations of orders</h2>
    ),
    content: (
      <ul>
        <li className="py-3 ">We start processing your order as soon as you pay for the same and hence we do not encourage any cancellation of orders.</li>
        <li className="py-3 ">
          If you wish to discuss further regarding a potential cancellation please contact our customer support team at +91 87544 48349 or email to customercare@westerngods.com
        </li>

      </ul>
    ),
  },

  {
    item: <h2>Special Orders</h2>,
    content: (
      <ul>
        <li className="py-3 ">
          In some cases, westerngods takes on special orders for customers most often on products that have sold out but that can be remade. These are on a case to case basis and require us to check with our crafts centre if indeed it is possible to commit to
        </li>
        <li className="py-3 ">
          In the eventuality these are confirmed possible, please note that lead time to make and prepare to ship is variable and may extend beyond the committed time frame due to the handmade nature of the product, and placement within the current workflow run. The sales assistance team will monitor this and keep customers updated.
        </li>
        <li className="py-3 ">
          Most importantly, due to the fluctuating nature of the raw materials over time, especially craftsman costs, metals and zari, there may be a variation in cost between the product earlier showcased and the cost of the exact same product taken on as special order. While we will make every attempt to communicate any ballpark price changes to customers placing special orders, please be advised this may not always be possible.
        </li>
        <li className="py-3 ">Special orders are made specifically on customer requests and therefore cannot be cancelled or exchanged once the order is placed.</li>
      </ul>
    ),
  },

  // {
  //   item: <h2>SECTION 6 - ACCURACY OF BILLING AND ACCOUNT INFORMATION</h2>,
  //   content: (
  //     <ul>
  //       <p className="py-3 ">
  //         We reserve the right to refuse any order you place with us. We may, in
  //         our sole discretion, limit or cancel quantities purchased per person,
  //         per household or per order. These restrictions may include orders
  //         placed by or under the same customer account, the same credit card,
  //         and/or orders that use the same billing and/or shipping address. In
  //         the event that we make a change to or cancel an order, we may attempt
  //         to notify you by contacting the e‑mail and/or billing address/phone
  //         number provided at the time the order was made. We reserve the right
  //         to limit or prohibit orders that, in our sole judgment, appear to be
  //         placed by dealers, resellers or distributors.
  //       </p>
  //       <p className="py-3 ">
  //         You agree to provide current, complete and accurate purchase and
  //         account information for all purchases made at our store. You agree to
  //         promptly update your account and other information, including your
  //         email address and credit card numbers and expiration dates, so that we
  //         can complete your transactions and contact you as needed
  //       </p>
  //       <p className="py-3">
  //         You agree not to reproduce, duplicate, copy, sell, resell or exploit
  //         any portion of the Service, use of the Service, or access to the
  //         Service or any contact on the website through which the service is
  //         provided, without express written permission by us.
  //       </p>
  //       <p className="py-3">For more detail, please review our Returns Policy.</p>
  //     </ul>
  //   ),
  // },

  {
    item: <h2>Gift Cards</h2>,
    content: (
      <ul>
        <p className="py-3">
          Please view our guide and terms and conditions regarding gift cards at this link.
        </p>
        <p className="py-3">
          Still have a question? We are happy to help, if we can. Email us at customercare@westerngods.com, or call/ message/Whatsapp us on +91 87544 48349.

        </p>
        <p className="py-3">
          Best,
        </p>
        <p className="py-3">
          Team westerngods
        </p>

      </ul>
    ),
  },
  {
    item: <h2>SECTION 8 - THIRD-PARTY LINKS</h2>,
    content: <div>
      <p className="py-3">Certain content, products and services available via our Service may include materials from third-parties.</p>
      <p className="py-3">Third-party links on this site may direct you to third-party websites that are not affiliated with us. We are not responsible for examining or evaluating the content or accuracy and we do not warrant and will not have any liability or responsibility for any third-party materials or websites, or for any other materials, products, or services of third-parties.</p>
      <p className="py-3">We are not liable for any harm or damages related to the purchase or use of goods, services, resources, content, or any other transactions made in connection with any third-party websites. Please review carefully the third-party's policies and practices and make sure you understand them before you engage in any transaction. Complaints, claims, concerns, or questions regarding third-party products should be directed to the third-party.</p>
    </div>


  },
  {
    item: <h2>SECTION 9 - USER COMMENTS, FEEDBACK AND OTHER SUBMISSIONS</h2>,
    content: <div>
      <p className="py-3">If, at our request, you send certain specific submissions (for example contest entries) or without a request from us you send creative ideas, suggestions, proposals, plans, or other materials, whether online, by email, by postal mail, or otherwise (collectively, 'comments'), you agree that we may, at any time, without restriction, edit, copy, publish, distribute, translate and otherwise use in any medium any comments that you forward to us. We are and shall be under no obligation (1) to maintain any comments in confidence; (2) to pay compensation for any comments; or (3) to respond to any comments.</p>
      <p className="py-3">We may, but have no obligation to, monitor, edit or remove content that we determine in our sole discretion are unlawful, offensive, threatening, libelous, defamatory, pornographic, obscene or otherwise objectionable or violates any party’s intellectual property or these Terms of Service.</p>
      <p className="py-3">You agree that your comments will not violate any right of any third-party, including copyright, trademark, privacy, personality or other personal or proprietary right. You further agree that your comments will not contain libelous or otherwise unlawful, abusive or obscene material, or contain any computer virus or other malware that could in any way affect the operation of the Service or any related website. You may not use a false e‑mail address, pretend to be someone other than yourself, or otherwise mislead us or third-parties as to the origin of any comments. You are solely responsible for any comments you make and their accuracy. We take no responsibility and assume no liability for any comments posted by you or any third-party.
      </p>
    </div>


  },
  {
    item: <h2>SECTION 10 - PERSONAL INFORMATION</h2>,
    content: <div>
      <p className="py-3">Your submission of personal information through the store is governed by our Privacy Policy. To view our Privacy Policy..</p>

    </div>


  },
  {
    item: <h2>SECTION 11 - ERRORS, INACCURACIES AND OMISSIONS</h2>,
    content: <div>
      <p className="py-3">Occasionally there may be information on our site or in the Service that contains typographical errors, inaccuracies or omissions that may relate to product descriptions, pricing, promotions, offers, product shipping charges, transit times and availability. We reserve the right to correct any errors, inaccuracies or omissions, and to change or update information or cancel orders if any information in the Service or on any related website is inaccurate at any time without prior notice (including after you have submitted your order).</p>
      <p className="py-3">We undertake no obligation to update, amend or clarify information in the Service or on any related website, including without limitation, pricing information, except as required by law. No specified update or refresh date applied in the Service or on any related website, should be taken to indicate that all information in the Service or on any related website has been modified or updated.</p>

    </div>


  },


];