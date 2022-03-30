import React from 'react';

export const Footer = () => {
  return (
    <div className='py-20 px-20 bg-slate-100 grid sm:grid-cols-5'>
      <div className='sm:col-span-2 flex flex-col'>
        <div className='mb-5'>
          <h2 className='playfair text-4xl'>Need Help?</h2>
        </div>
        <div className='inline-flex custserv-phone'>
          <p className='gtamerica'>
            <strong>Phone </strong>
            <a href='tel:8556558974' title='tel:18556558974'>
              855-655-8974
            </a>
          </p>
        </div>
        <div className='inline-flex custserv-email'>
          <p className='gtamerica'>
            <strong>Email </strong>
            <a
              href='mailto:custserv@karenkane.com'
              title='mailto:custserv@karenkane.com'
              className='gtamerica'
            >
              custserv@karenkane.com
            </a>
          </p>
        </div>
        <div className='inline-flex custserv-chat'>
          <p className='gtamerica'>
            <strong>Hours </strong>
            Monday - Friday, 8am-5pm PST
          </p>
        </div>
      </div>

      {/* First nav */}
      <nav className='sm:col-span-1 mb-10 mt-10 sm:mt-0'>
        <h4>ABOUT</h4>

        <ul className='pt-5'>
          <li className=''>
            <a
              href='pages/our-story.html'
              className='md:relative pt-1 pb-2 gtamerica text-sm'
            >
              The Karen Kane Story
            </a>
          </li>
          <li
            data-handle='karens-blog'
            className='md:relative pt-1 pb-2 gtamerica text-sm'
          >
            <a href='pages/blog-home.html' className=''>
              Karen's Blog
            </a>
          </li>
          <li
            data-handle='sustainability-practices'
            className='md:relative pt-1 pb-2 gtamerica text-sm'
          >
            <a href='pages/our-design-standard.html' className=''>
              Sustainability Practices
            </a>
          </li>

          <li
            data-handle='sustainability-practices'
            className='md:relative pt-1 pb-2 gtamerica text-sm'
          >
            <a href='pages/career-opportunities-v2.html' className=''>
              Career Opportunities
            </a>
          </li>

          <li
            data-handle='sustainability-practices'
            className='md:relative pt-1 pb-2 gtamerica text-sm'
          >
            <a href='pages/privacy-policy.html' className=''>
              Privacy Policy
            </a>
          </li>

          <li
            data-handle='sustainability-practices'
            className='md:relative pt-1 pb-2 gtamerica text-sm'
          >
            <a href='pages/diversity.html' className=''>
              Diversity
            </a>
          </li>
        </ul>
      </nav>
      {/* Second Nav */}
      <nav className='sm:col-span-1 mb-10'>
        <h4>MY ACCOUNT</h4>

        <ul className='pt-5'>
          <li className=''>
            <a
              href='products/gift-card.html'
              className='md:relative pt-1 pb-2 gtamerica text-sm'
            >
              Gift Cards
            </a>
          </li>
          <li
            data-handle='karens-blog'
            className='md:relative pt-1 pb-2 gtamerica text-sm'
          >
            <a href='pages/rewards.html' className=''>
              Rewards
            </a>
          </li>
          <li
            data-handle='sustainability-practices'
            className='md:relative pt-1 pb-2 gtamerica text-sm'
          >
            <a href='pages/rewards-referral.html' className=''>
              Refer a Friend
            </a>
          </li>

          <li
            data-handle='sustainability-practices'
            className='md:relative pt-1 pb-2 gtamerica text-sm'
          >
            <a
              href='http://unbouncepages.com/catalog-subscription-list/'
              className=''
            >
              Request a Catalog
            </a>
          </li>

          <li
            data-handle='sustainability-practices'
            className='md:relative pt-1 pb-2 gtamerica text-sm'
          >
            <a
              href='http://unbouncepages.com/catalog-unsubscribe-list/'
              className=''
            >
              Unsubscribe From Catalog
            </a>
          </li>

          <li
            data-handle='sustainability-practices'
            className='md:relative pt-1 pb-2 gtamerica text-sm'
          >
            <a href='pages/how-to-exercise-your-ccpa-rights.html' className=''>
              Your California Privacy Rights
            </a>
          </li>
        </ul>
      </nav>

      {/* Third nav */}
      <nav className='sm:col-span-1'>
        <h4>CUSTOMER SERVICE</h4>

        <ul className='pt-5'>
          <li className='md:relative pt-1 pb-2 gtamerica text-sm'>
            <a href='pages/faq.html' className='md:relative pt-1 pb-2'>
              FAQ
            </a>
          </li>
          <li data-handle='karens-blog' className='md:relative pt-1 pb-2'>
            <a href='pages/shipping-returns.html' className=''>
              Shipping & Return
            </a>
          </li>
          <li
            data-handle='sustainability-practices'
            className='md:relative pt-1 pb-2 gtamerica text-sm'
          >
            <a
              href='https://encore.brandedonline.com/returns/KK_SHOPIFY/ordersearch'
              className=''
            >
              Make a Return
            </a>
          </li>

          <li
            data-handle='sustainability-practices'
            className='md:relative pt-1 pb-2 gtamerica text-sm'
          >
            <a href='pages/career-opportunities-v2.html' className=''>
              Fit Guide
            </a>
          </li>

          <li
            data-handle='sustainability-practices'
            className='md:relative pt-1 pb-2 gtamerica text-sm'
          >
            <a href='pages/service-member-discount.html' className=''>
              Service Discount
            </a>
          </li>

          <li
            data-handle='sustainability-practices'
            className='md:relative pt-1 pb-2 gtamerica text-sm'
          >
            <a href='apps/store-locator.html' className=''>
              Store Locator
            </a>
          </li>

          <li
            data-handle='sustainability-practices'
            className='md:relative pt-1 pb-2 gtamerica text-sm'
          >
            <a href='#' className=''>
              Accessibility Mode
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};
