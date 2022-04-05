import React from 'react';

export const Footer = () => {
  return (
    <div className='py-20 px-32 bg-footer_bg grid lg:grid-cols-5'>
      <div className='sm:col-span-2 flex flex-col'>
        <div className='mb-5'>
          <h2 className='playfair text-4xl text-primary'>Need Help?</h2>
        </div>
        <div className='inline-flex custserv-phone'>
          <p className='gtamerica text-secondary'>
            Phone{' '}
            <a href='tel:8556558974' title='tel:18556558974'>
              855-655-8974
            </a>
          </p>
        </div>
        <div className='inline-flex custserv-email'>
          <p className='gtamerica text-secondary'>
            Email{' '}
            <a
              href='mailto:custserv@karenkane.com'
              title='mailto:custserv@karenkane.com'
              className='gtamerica text-secondary'
            >
              custserv@karenkane.com
            </a>
          </p>
        </div>
        <div className='inline-flex custserv-chat'>
          <p className='gtamerica text-secondary'>
            Hours Monday - Friday, 8am-5pm PST
          </p>
        </div>

        {/* Social Network */}
        <nav className='mb-5 sm:mb-14 sm:mx-auto mt-10 order-4 sm:order-none flex w-full'>
          <ul className='flex justify-evenly lg:justify-start w-full'>
            <li className='relative sm:mr-10'>
              <a
                href='https://www.facebook.com/KarenKaneClothing'
                className='flex-row'
              >
                <span className='nav-icon'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='100%'
                    viewBox='0 0 11 21'
                    style={{
                      maxWidth: '21px',
                      maxHeight: '21px',
                      marginRight: '10px',
                    }}
                  >
                    <path
                      d='M2.69,11.36H0V7.91H2.69V4.82C2.69,2.35,4.35,0,8.19,0a14,14,0,0,1,2.68.25l-.13,3.21H8.44C7,3.46,6.91,4.2,6.91,5.19V7.78H11l-.26,3.46H6.91V21H2.81V11.36Z'
                      fill='#464643'
                    ></path>
                  </svg>
                </span>
              </a>
            </li>
            <li className='relative sm:mr-10'>
              <a
                href='https://www.instagram.com/karenkane/'
                className='flex-row'
              >
                <span className='nav-icon'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='100%'
                    viewBox='0 0 21.46 21.47'
                    style={{
                      maxWidth: '21px',
                      maxHeight: '21px',
                      marginRight: '10px',
                    }}
                  >
                    <path
                      d='M15.89,21.39a6.35,6.35,0,0,0,4.5-1.73,6.44,6.44,0,0,0,1.73-4.5c.1-1.77.1-7.08,0-8.85a6.34,6.34,0,0,0-1.73-4.5A6.35,6.35,0,0,0,15.89.08C14.12,0,8.81,0,7,.08A6.39,6.39,0,0,0,2.54,1.8,6.4,6.4,0,0,0,.81,6.3c-.1,1.77-.1,7.09,0,8.86a6.35,6.35,0,0,0,1.73,4.5A6.44,6.44,0,0,0,7,21.39C8.81,21.49,14.12,21.49,15.89,21.39Zm-4.42-2.2c-1.51,0-4.73.12-6.09-.41a3.47,3.47,0,0,1-2-2C2.88,15.46,3,12.23,3,10.73S2.89,6,3.42,4.65a3.47,3.47,0,0,1,2-2c1.36-.54,4.58-.42,6.09-.42s4.72-.12,6.08.42a3.47,3.47,0,0,1,2,2c.54,1.36.41,4.58.41,6.08s.13,4.73-.41,6.09a3.47,3.47,0,0,1-2,2C16.19,19.32,13,19.19,11.47,19.19ZM16.55,5.65a1.13,1.13,0,1,0-1.13-1.13A1.13,1.13,0,0,0,16.55,5.65ZM11.38,16.52a5,5,0,1,0-5-5A5,5,0,0,0,11.38,16.52Zm0-2a3,3,0,1,1,3-3A3,3,0,0,1,11.38,14.52Z'
                      transform='translate(-0.73 0)'
                      fill='#464643'
                    ></path>
                  </svg>
                </span>
              </a>
            </li>
            <li className='relative sm:mr-10'>
              <a
                href='https://www.pinterest.com/karen_kane/'
                className='flex-row'
              >
                <span className='nav-icon'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='100%'
                    viewBox='0 0 21.46 21.47'
                    style={{
                      maxWidth: '21px',
                      maxHeight: '21px',
                      marginRight: '10px',
                    }}
                  >
                    <path
                      d='M17,6.65C17,11.41,14.34,15,10.28,15a3.78,3.78,0,0,1-3-1.5l-.89,3.38a12.2,12.2,0,0,1-2.28,4c-.13.12-.25.12-.25,0a17.38,17.38,0,0,1,0-4.63L5.33,9.65a4.77,4.77,0,0,1-.38-2C5,5.78,6,4.53,7.36,4.53,8.5,4.53,9,5.28,9,6.4s-.76,2.75-1.14,4.38a2,2,0,0,0,2,2.38c2.28,0,3.93-3,3.93-6.51C13.83,4,12.05,2,8.63,2A5.78,5.78,0,0,0,2.54,7.9a3.79,3.79,0,0,0,.76,2.38c.25.25.25.37.13.62s-.26.76-.26,1-.38.37-.63.37C.76,11.53,0,9.65,0,7.65,0,4.15,2.92,0,8.88,0,14-.35,17,3,17,6.65Z'
                      transform='translate(0 0)'
                      fill='#464643'
                    ></path>
                  </svg>
                </span>
              </a>
            </li>
            <li className='relative sm:mr-10'>
              <a href='https://twitter.com/karen_kane' className='flex-row'>
                <span className='nav-icon'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='100%'
                    viewBox='0 0 21.46 21.47'
                    style={{
                      maxWidth: '21px',
                      maxHeight: '21px',
                      marginRight: '10px',
                    }}
                  >
                    <path
                      d='M18.78,4.09v.63A12.18,12.18,0,0,1,6.55,17,11.52,11.52,0,0,1,0,15.26c.37,0,.74.13,1,.13A8.41,8.41,0,0,0,6.3,13.28a4.12,4.12,0,0,1-3.95-3c.24,0,.49.12.74.12A3.5,3.5,0,0,0,4.2,10.3,4.26,4.26,0,0,1,.74,6.08a3.65,3.65,0,0,0,2,.5A4.48,4.48,0,0,1,.74,3,4.19,4.19,0,0,1,1.36.87a12.45,12.45,0,0,0,8.89,4.47,2.86,2.86,0,0,1-.12-1A4.39,4.39,0,0,1,14.45,0a4.49,4.49,0,0,1,3.21,1.36,16.79,16.79,0,0,0,2.72-1,4.48,4.48,0,0,1-1.85,2.36A8.14,8.14,0,0,0,21,2a12.39,12.39,0,0,1-2.22,2.1Z'
                      fill='#464643'
                    ></path>
                  </svg>
                </span>
              </a>
            </li>
            <li className='relative sm:mr-10'>
              <a href='https://karen-kane.tumblr.com/' className='flex-row'>
                <span className='nav-icon'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='100%'
                    viewBox='0 0 21.46 21.47'
                    style={{
                      maxWidth: '21px',
                      maxHeight: '21px',
                      marginRight: '10px',
                    }}
                  >
                    <path
                      d='M9,21C5,21,3.18,19.27,3.18,15.81V9.14H0v-3C2.67,5.31,4.45,4,5,0H8.15V5.19h5v4h-5v5.19c0,2.22.5,3.09,2.67,3.09A9,9,0,0,0,14,16.55v3.21C14,19.89,12.22,21,9,21Z'
                      fill='#464643'
                    ></path>
                  </svg>
                </span>
              </a>
            </li>
          </ul>
        </nav>
        {/* Certificate */}
        <div className='relative order-3 my-10 sm:my-0 sm:order-none block'>
          <a href='pages/bcorps.html'>
            <img
              src='https://cdn.shopify.com/s/files/1/0253/4355/7737/files/BCorp_1280x.png?v=1588757037'
              alt='ceritificate'
              className='m-auto sm:m-0 w-16'
            />
          </a>
        </div>
      </div>

      {/* First nav */}
      <nav className='sm:col-span-1 mb-10 mt-10 lg:mt-0'>
        <h4 className='gtamerica text-secondary text-xs'>ABOUT</h4>

        <ul className='pt-5'>
          <li className=''>
            <a
              href='pages/our-story.html'
              className='md:relative pt-1 pb-2 gtamerica text-sm text-primary'
            >
              The Karen Kane Story
            </a>
          </li>
          <li
            data-handle='karens-blog'
            className='md:relative pt-1 pb-2 gtamerica text-sm text-primary'
          >
            <a href='pages/blog-home.html' className=''>
              Karen's Blog
            </a>
          </li>
          <li
            data-handle='sustainability-practices'
            className='md:relative pt-1 pb-2 gtamerica text-sm text-primary'
          >
            <a href='pages/our-design-standard.html' className=''>
              Sustainability Practices
            </a>
          </li>

          <li
            data-handle='sustainability-practices'
            className='md:relative pt-1 pb-2 gtamerica text-sm text-primary'
          >
            <a href='pages/career-opportunities-v2.html' className=''>
              Career Opportunities
            </a>
          </li>

          <li
            data-handle='sustainability-practices'
            className='md:relative pt-1 pb-2 gtamerica text-sm text-primary'
          >
            <a href='pages/privacy-policy.html' className=''>
              Privacy Policy
            </a>
          </li>

          <li
            data-handle='sustainability-practices'
            className='md:relative pt-1 pb-2 gtamerica text-sm text-primary'
          >
            <a href='pages/diversity.html' className=''>
              Diversity
            </a>
          </li>
        </ul>
      </nav>
      {/* Second Nav */}
      <nav className='sm:col-span-1 mb-10 md:mt-10 lg:mt-0'>
        <h4 className='gtamerica text-secondary text-xs'>MY ACCOUNT</h4>

        <ul className='pt-5'>
          <li className=''>
            <a
              href='products/gift-card.html'
              className='md:relative pt-1 pb-2 gtamerica text-sm text-primary'
            >
              Gift Cards
            </a>
          </li>
          <li
            data-handle='karens-blog'
            className='md:relative pt-1 pb-2 gtamerica text-sm text-primary'
          >
            <a href='pages/rewards.html' className=''>
              Rewards
            </a>
          </li>
          <li
            data-handle='sustainability-practices'
            className='md:relative pt-1 pb-2 gtamerica text-sm text-primary'
          >
            <a href='pages/rewards-referral.html' className=''>
              Refer a Friend
            </a>
          </li>

          <li
            data-handle='sustainability-practices'
            className='md:relative pt-1 pb-2 gtamerica text-sm text-primary'
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
            className='md:relative pt-1 pb-2 gtamerica text-sm text-primary'
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
            className='md:relative pt-1 pb-2 gtamerica text-sm text-primary'
          >
            <a href='pages/how-to-exercise-your-ccpa-rights.html' className=''>
              Your California Privacy Rights
            </a>
          </li>
        </ul>
      </nav>

      {/* Third nav */}
      <nav className='sm:col-span-1'>
        <h4 className='gtamerica text-secondary text-xs'>CUSTOMER SERVICE</h4>

        <ul className='pt-5'>
          <li className='md:relative pt-1 pb-2 gtamerica text-sm text-primary'>
            <a href='pages/faq.html' className='md:relative pt-1 pb-2'>
              FAQ
            </a>
          </li>
          <li
            data-handle='karens-blog'
            className='md:relative pt-1 pb-2 text-primary'
          >
            <a href='pages/shipping-returns.html' className=''>
              Shipping & Return
            </a>
          </li>
          <li
            data-handle='sustainability-practices'
            className='md:relative pt-1 pb-2 gtamerica text-sm text-primary'
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
            className='md:relative pt-1 pb-2 gtamerica text-sm text-primary'
          >
            <a href='pages/career-opportunities-v2.html' className=''>
              Fit Guide
            </a>
          </li>

          <li
            data-handle='sustainability-practices'
            className='md:relative pt-1 pb-2 gtamerica text-sm text-primary'
          >
            <a href='pages/service-member-discount.html' className=''>
              Service Discount
            </a>
          </li>

          <li
            data-handle='sustainability-practices'
            className='md:relative pt-1 pb-2 gtamerica text-sm text-primary'
          >
            <a href='apps/store-locator.html' className=''>
              Store Locator
            </a>
          </li>

          <li
            data-handle='sustainability-practices'
            className='md:relative pt-1 pb-2 gtamerica text-sm text-primary'
          >
            <a href='https://www.google.com' className=''>
              Accessibility Mode
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};
